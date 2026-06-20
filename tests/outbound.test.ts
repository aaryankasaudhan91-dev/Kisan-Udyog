import { describe, it, expect, vi, beforeEach } from 'vitest';
import { OutboundClient } from '../src/outbound';
import twilio from 'twilio';

vi.mock('twilio', () => {
    const mockTwilio = vi.fn(() => ({
        messages: {
            create: vi.fn().mockResolvedValue({ sid: 'SM123456789' })
        }
    }));
    return { default: mockTwilio };
});

describe('Twilio Outbound Alerts - Task 1-05-03', () => {
    let client: OutboundClient;

    beforeEach(() => {
        vi.resetAllMocks();
        client = new OutboundClient();
    });

    it('should format and send a WhatsApp voice message', async () => {
        const sid = await client.sendVoiceAlert('whatsapp:+19998887777', 'https://example.com/audio.wav');
        
        expect(sid).toBe('SM123456789');
        // twilio is mocked so we verify the constructor and message create behavior
        const mockTwilioInstance = (twilio as unknown as ReturnType<typeof vi.fn>).mock.results[0].value;
        expect(mockTwilioInstance.messages.create).toHaveBeenCalledWith({
            body: 'Krishi Udyog: Critical Weather & Pest Alert',
            from: 'whatsapp:+14155238886',
            mediaUrl: ['https://example.com/audio.wav'],
            to: 'whatsapp:+19998887777'
        });
    });
});
