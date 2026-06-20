import { describe, it, expect, vi, beforeEach } from 'vitest';
import { transcodeToWav } from '../src/audio';
import fs from 'fs/promises';
import ffmpeg from 'fluent-ffmpeg';

// Mock dependencies
vi.mock('fs/promises');
vi.mock('fluent-ffmpeg');

describe('Audio Transcoding - Task 1-02-01', () => {
    beforeEach(() => {
        vi.resetAllMocks();
        
        // Mock global fetch
        global.fetch = vi.fn().mockResolvedValue({
            ok: true,
            arrayBuffer: vi.fn().mockResolvedValue(new ArrayBuffer(8))
        });

        // Mock fluent-ffmpeg chain
        const mockFfmpeg = {
            toFormat: vi.fn().mockReturnThis(),
            audioFrequency: vi.fn().mockReturnThis(),
            audioChannels: vi.fn().mockReturnThis(),
            on: vi.fn().mockImplementation(function (event, callback) {
                if (event === 'end') {
                    setTimeout(callback, 10); // Simulate async processing
                }
                return this;
            }),
            save: vi.fn().mockReturnThis()
        };
        (ffmpeg as unknown as ReturnType<typeof vi.fn>).mockReturnValue(mockFfmpeg);

        // Mock fs.readFile
        vi.mocked(fs.readFile).mockResolvedValue(Buffer.from('fake-wav-data'));
        vi.mocked(fs.unlink).mockResolvedValue(undefined);
    });

    it('should download, transcode, and return base64 wav', async () => {
        const result = await transcodeToWav('https://example.com/media.ogg');
        
        expect(global.fetch).toHaveBeenCalledWith('https://example.com/media.ogg');
        expect(ffmpeg).toHaveBeenCalled();
        expect(result).toBe(Buffer.from('fake-wav-data').toString('base64'));
        
        // Ensure cleanup was called twice (in/out files)
        expect(fs.unlink).toHaveBeenCalledTimes(2);
    });
});
