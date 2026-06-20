import { describe, it, expect, vi, beforeEach } from 'vitest';
import { BhashiniClient } from '../src/bhashini';

describe('Bhashini Client - Task 1-02-02', () => {
    let client: BhashiniClient;

    beforeEach(() => {
        vi.resetAllMocks();
        process.env.BHASHINI_API_KEY = 'mock-key';
        client = new BhashiniClient();
    });

    it('should call ASR API and return extracted text', async () => {
        global.fetch = vi.fn().mockResolvedValue({
            ok: true,
            json: vi.fn().mockResolvedValue({
                pipelineResponse: [{ output: [{ source: 'कपास में कीड़ा' }] }]
            })
        });

        const text = await client.speechToText('base64audio', 'hi');
        
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(text).toBe('कपास में कीड़ा');
    });

    it('should call TTS API and return base64 audio', async () => {
        global.fetch = vi.fn().mockResolvedValue({
            ok: true,
            json: vi.fn().mockResolvedValue({
                pipelineResponse: [{ audio: [{ audioContent: 'base64audioresponse' }] }]
            })
        });

        const audio = await client.textToSpeech('कपास में कीड़ा', 'hi');
        
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(audio).toBe('base64audioresponse');
    });
});
