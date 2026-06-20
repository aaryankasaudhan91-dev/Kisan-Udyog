import fastq from 'fastq';
import type { queueAsPromised } from 'fastq';

export interface WebhookPayload {
    From: string;
    Body: string;
    MediaUrl0?: string;
    MediaContentType0?: string;
}

// The async worker function that processes tasks in the background
const worker = async (payload: WebhookPayload): Promise<void> => {
    console.log(`[Queue Worker] Processing payload from ${payload.From}`);
    // Future AI processing will happen here
    // For now, simulate delay
    return new Promise((resolve) => setTimeout(resolve, 50));
};

// Create a concurrency-1 queue
export const taskQueue: queueAsPromised<WebhookPayload> = fastq.promise(worker, 1);
