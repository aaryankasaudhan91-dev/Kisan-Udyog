import cron from 'node-cron';
import { getFarmers } from './db';
import { WeatherClient } from './weather';
import { OutboundClient } from './outbound';
import { BhashiniClient } from './bhashini';

export const startRiskPolling = () => {
    // Run every morning at 6:00 AM
    cron.schedule('0 6 * * *', async () => {
        console.log('[CRON] Starting daily risk polling...');
        
        const weatherClient = new WeatherClient();
        const outboundClient = new OutboundClient();
        const bhashiniClient = new BhashiniClient();
        
        try {
            const farmers = await getFarmers();
            
            for (const farmer of farmers) {
                if (farmer.lat && farmer.lon) {
                    const forecast = await weatherClient.getRainForecast(farmer.lat, farmer.lon);
                    
                    // Specific risk condition: High rain probability > 80%
                    if (forecast.maxPop > 0.8) {
                        const warningText = farmer.language === 'mr' ? 
                            "शेतकरी मित्रांनो, पुढील ४८ तासांत अतिवृष्टीची शक्यता आहे. कृपया फवारणी करू नका." :
                            "किसान भाइयों, अगले 48 घंटों में भारी बारिश की संभावना है। कृपया कोई भी छिड़काव न करें।";
                            
                        await bhashiniClient.textToSpeech(warningText, farmer.language as 'hi' | 'mr');
                        
                        // For MVP: assume base64 is uploaded to a public CDN/S3
                        const hostedUrl = `https://krishi-udyog.example.com/audio/${farmer.phone_number}.wav`;
                        await outboundClient.sendVoiceAlert(farmer.phone_number, hostedUrl);
                        console.log(`[CRON] Sent alert to ${farmer.phone_number}`);
                    }
                }
            }
        } catch (error) {
            console.error('[CRON] Error during polling:', error);
        }
    });
};
