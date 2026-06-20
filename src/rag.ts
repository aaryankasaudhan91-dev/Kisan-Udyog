import { GoogleGenerativeAIEmbeddings } from '@langchain/google-genai';

export class IcarRagPipeline {
    private embeddings: GoogleGenerativeAIEmbeddings;
    private store: { text: string; vector: number[] }[] = [];

    constructor() {
        this.embeddings = new GoogleGenerativeAIEmbeddings({
            model: "text-embedding-004",
            apiKey: process.env.GEMINI_API_KEY || 'mock-key',
        });
    }

    async initializeStore(): Promise<void> {
        const texts = [
            "Tomato Early Blight: Use Chlorothalonil 75% WP at 2g/L. Do not apply if rain is expected.",
            "Cotton Bollworm: Apply Spinosad 45% SC at 0.5ml/L of water.",
            "Wheat Rust: Apply Propiconazole 25% EC at 1ml/L of water. Delay application if raining."
        ];

        const vectors = await this.embeddings.embedDocuments(texts);
        
        this.store = texts.map((text, i) => {
            const vector = vectors[i];
            if (!vector) throw new Error("Embedding failed");
            return { text, vector };
        });
    }

    private cosineSimilarity(v1: number[], v2: number[]) {
        let dot = 0, norm1 = 0, norm2 = 0;
        for (let i = 0; i < v1.length; i++) {
            const val1 = v1[i] ?? 0;
            const val2 = v2[i] ?? 0;
            dot += val1 * val2;
            norm1 += val1 * val1;
            norm2 += val2 * val2;
        }
        return dot / (Math.sqrt(norm1) * Math.sqrt(norm2));
    }

    async searchContext(query: string, k: number = 2): Promise<string> {
        if (this.store.length === 0) {
            await this.initializeStore();
        }
        
        const queryVector = await this.embeddings.embedQuery(query);
        
        const scored = this.store.map(item => ({
            text: item.text,
            score: this.cosineSimilarity(queryVector, item.vector)
        }));
        
        scored.sort((a, b) => b.score - a.score);
        
        return scored.slice(0, k).map(item => item.text).join('\n---\n');
    }
}
