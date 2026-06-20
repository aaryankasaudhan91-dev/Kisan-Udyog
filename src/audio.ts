import ffmpeg from 'fluent-ffmpeg';
import { randomUUID } from 'crypto';
import fs from 'fs/promises';
import path from 'path';
import os from 'os';

export const transcodeToWav = async (url: string): Promise<string> => {
    const tmpDir = os.tmpdir();
    const tempIn = path.join(tmpDir, `${randomUUID()}.tmp`);
    const tempOut = path.join(tmpDir, `${randomUUID()}.wav`);

    try {
        // Download the file
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch audio from Twilio: ${response.statusText}`);
        }
        
        const arrayBuffer = await response.arrayBuffer();
        await fs.writeFile(tempIn, Buffer.from(arrayBuffer));

        // Transcode to 16kHz Mono WAV
        await new Promise<void>((resolve, reject) => {
            ffmpeg(tempIn)
                .toFormat('wav')
                .audioFrequency(16000)
                .audioChannels(1)
                .on('end', () => resolve())
                .on('error', (err) => reject(err))
                .save(tempOut);
        });

        // Read the resulting WAV file and convert to base64
        const wavBuffer = await fs.readFile(tempOut);
        return wavBuffer.toString('base64');
    } finally {
        // Securely cleanup temp files regardless of success or failure
        await fs.unlink(tempIn).catch(() => {});
        await fs.unlink(tempOut).catch(() => {});
    }
};
