import { describe, it, expect, vi, beforeEach } from 'vitest';
import { startRiskPolling } from '../src/cron';
import cron from 'node-cron';
import * as db from '../src/db';
import { WeatherClient } from '../src/weather';
import { OutboundClient } from '../src/outbound';
import { BhashiniClient } from '../src/bhashini';

vi.mock('node-cron');
vi.mock('../src/db');
vi.mock('../src/weather');
vi.mock('../src/outbound');
vi.mock('../src/bhashini');

describe('Cron Infrastructure - Task 1-05-01', () => {
    beforeEach(() => {
        vi.resetAllMocks();
        
        vi.mocked(db.getFarmers).mockResolvedValue([
            { phone_number: 'whatsapp:+123', pin_code: '400001', lat: 19.0, lon: 72.8, language: 'hi' }
        ]);

        vi.mocked(WeatherClient.prototype.getRainForecast).mockResolvedValue({
            willRainIn48h: true, maxPop: 0.90
        });

        vi.mocked(BhashiniClient.prototype.textToSpeech).mockResolvedValue('base64audio');
        vi.mocked(OutboundClient.prototype.sendVoiceAlert).mockResolvedValue('SM123');
    });

    it('should register a daily cron job', () => {
        startRiskPolling();
        expect(cron.schedule).toHaveBeenCalledWith('0 6 * * *', expect.any(Function));
    });

    it('should process farmers and send alert if rain pop is high', async () => {
        startRiskPolling();
        // Extract the scheduled callback function and run it manually
        const calls = vi.mocked(cron.schedule).mock.calls;
        if (!calls[0]) throw new Error("No cron schedule calls found");
        const scheduledCallback = calls[0][1] as Function;
        
        await scheduledCallback();
        
        expect(db.getFarmers).toHaveBeenCalled();
        expect(WeatherClient.prototype.getRainForecast).toHaveBeenCalledWith(19.0, 72.8);
        expect(BhashiniClient.prototype.textToSpeech).toHaveBeenCalled();
        expect(OutboundClient.prototype.sendVoiceAlert).toHaveBeenCalledWith('whatsapp:+123', expect.stringContaining('audio/whatsapp:+123.wav'));
    });
});
