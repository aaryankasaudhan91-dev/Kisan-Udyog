import { describe, it, expect, vi } from 'vitest';
import { IcarRagPipeline } from '../src/rag';

// Mock the embeddings class directly
vi.mock('@langchain/google-genai', () => {
    return {
        GoogleGenerativeAIEmbeddings: class {
            async embedDocuments() {
                return [[0.1, 0.2], [0.3, 0.4], [0.5, 0.6]];
            }
            async embedQuery() {
                return [0.1, 0.2];
            }
        }
    };
});

describe('ICAR RAG Pipeline - Task 1-03-01', () => {
    it('should initialize store and return semantic search context', async () => {
        const rag = new IcarRagPipeline();
        const context = await rag.searchContext('Tomato leaves have dark spots');
        
        // With the mock vectors, [0.1, 0.2] is identical to the first document vector
        expect(context).toContain('Tomato Early Blight');
    });
});
