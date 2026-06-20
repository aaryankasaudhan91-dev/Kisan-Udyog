import twilio from 'twilio';

export class OutboundClient {
    private client: twilio.Twilio;
    private fromNumber: string;

    constructor() {
        this.client = twilio(
            process.env.TWILIO_ACCOUNT_SID || 'mock-sid', 
            process.env.TWILIO_AUTH_TOKEN || 'mock-token'
        );
        this.fromNumber = process.env.TWILIO_WHATSAPP_NUMBER || 'whatsapp:+14155238886';
    }

    async sendVoiceAlert(toPhone: string, mediaUrl: string): Promise<string> {
        const message = await this.client.messages.create({
            body: 'Krishi Udyog: Critical Weather & Pest Alert',
            from: this.fromNumber,
            mediaUrl: [mediaUrl],
            to: toPhone
        });
        
        return message.sid;
    }
}
