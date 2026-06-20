import { ChatGoogleGenAI } from '@langchain/google-genai';
import { HumanMessage, SystemMessage } from '@langchain/core/messages';
import { z } from 'zod';
import { StructuredOutputParser } from '@langchain/core/output_parsers';

export const diagnosisSchema = z.object({
    pathogen: z.string().describe("Common name of the crop disease/pest identified"),
    confidence: z.number().min(0).max(1).describe("Confidence score of identification"),
    severity: z.enum(["low", "medium", "high"]).describe("Severity level of infestation"),
    organic_remedies: z.array(z.string()).describe("Safe cultural or organic treatments"),
    chemical_remedies: z.array(z.string()).describe("Standard CIB&RC approved chemical treatments"),
    application_guideline: z.string().describe("Clear mixing and application instructions (e.g. ml per pump)"),
});

const parser = StructuredOutputParser.fromZodSchema(diagnosisSchema);

export class VisionAgent {
    private model: ChatGoogleGenAI;

    constructor() {
        this.model = new ChatGoogleGenAI({
            modelName: "gemini-1.5-flash",
            maxOutputTokens: 1024,
            temperature: 0.1,
            apiKey: process.env.GEMINI_API_KEY || 'mock-key',
        });
    }

    async diagnose(base64Image: string, symptomsText: string, ragContext: string) {
        const systemPrompt = `You are an agronomic expert. You MUST NOT recommend any chemical pesticides if rain is forecasted.
All advice must be grounded ONLY in the provided ICAR context. If the context does not contain the answer, say 'I do not know'.
Format the response using the following JSON schema:
${parser.getFormatInstructions()}

ICAR Context:
${ragContext}
`;

        const response = await this.model.invoke([
            new SystemMessage(systemPrompt),
            new HumanMessage({
                content: [
                    { type: "text", text: `Symptoms described by farmer: ${symptomsText}` },
                    { type: "image_url", image_url: `data:image/jpeg;base64,${base64Image}` }
                ]
            })
        ]);

        return parser.parse(response.content as string);
    }
}
