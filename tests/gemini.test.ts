import { describe, it, expect, vi } from 'vitest';
import { VisionAgent } from '../src/gemini';

vi.mock('@langchain/google-genai', () => {
    return {
        ChatGoogleGenerativeAI: class {
            async invoke() {
                // Ensure the mock returns exactly what the parser expects (a JSON string)
                return {
                    content: JSON.stringify({
                        pathogen: "Early Blight",
                        confidence: 0.95,
                        severity: "medium",
                        organic_remedies: ["Remove infected leaves"],
                        chemical_remedies: ["Chlorothalonil 75% WP"],
                        application_guideline: "2g per liter of water"
                    })
                };
            }
        }
    };
});

describe('Gemini Vision Agent - Task 1-03-02', () => {
    it('should return a structured diagnosis based on image and context', async () => {
        const agent = new VisionAgent();
        const diagnosis = await agent.diagnose('fakeBase64Image', 'brown spots', 'ICAR context here');
        
        expect(diagnosis.pathogen).toBe("Early Blight");
        expect(diagnosis.confidence).toBeGreaterThan(0.9);
        expect(diagnosis.chemical_remedies).toContain("Chlorothalonil 75% WP");
    });
});
