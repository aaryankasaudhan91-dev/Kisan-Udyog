import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../src/index';

describe('Twilio Webhook - INTF-01', () => {
    it('should acknowledge Twilio webhooks with 200 OK and empty TwiML', async () => {
        const payload = {
            From: 'whatsapp:+1234567890',
            Body: 'Test crop message',
            MediaUrl0: 'https://example.com/media.ogg'
        };

        const res = await request(app)
            .post('/webhook/twilio')
            .type('form')
            .send(payload);

        expect(res.status).toBe(200);
        expect(res.text).toBe('<Response></Response>');
        expect(res.headers['content-type']).toContain('text/xml');
    });
});
