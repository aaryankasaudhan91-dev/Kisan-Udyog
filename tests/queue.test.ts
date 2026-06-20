import { describe, it, expect, vi } from 'vitest';
import request from 'supertest';
import app from '../src/index';
import { taskQueue } from '../src/queue';

describe('Background Queue - INTF-02', () => {
    it('should enqueue payloads asynchronously', async () => {
        // Spy on the queue's push method
        const pushSpy = vi.spyOn(taskQueue, 'push');

        const payload = {
            From: 'whatsapp:+19998887777',
            Body: 'Test enqueue'
        };

        const res = await request(app)
            .post('/webhook/twilio')
            .type('form')
            .send(payload);

        expect(res.status).toBe(200);
        expect(pushSpy).toHaveBeenCalledWith(payload);

        // Wait for queue to process
        await taskQueue.drained();
    });
});
