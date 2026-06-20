export class BhashiniClient {
    private apiKey: string;
    private apiUrl = 'https://dhruva-api.bhashini.gov.in/services/inference/pipeline';

    constructor() {
        this.apiKey = process.env.BHASHINI_API_KEY || 'test-key';
    }

    async speechToText(base64Audio: string, sourceLanguage: 'hi' | 'mr'): Promise<string> {
        const payload = {
            pipelineTasks: [
                {
                    taskType: "asr",
                    config: {
                        language: { sourceLanguage },
                        serviceId: `ai4bharat/conformer-${sourceLanguage}-gpu--t4`,
                        audioFormat: "wav",
                        samplingRate: 16000
                    }
                }
            ],
            inputData: {
                audio: [{ audioContent: base64Audio }]
            }
        };

        const response = await fetch(this.apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.apiKey
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`Bhashini ASR failed: ${response.statusText}`);
        }

        const data = await response.json();
        return data.pipelineResponse[0].output[0].source;
    }

    async textToSpeech(text: string, targetLanguage: 'hi' | 'mr'): Promise<string> {
        const payload = {
            pipelineTasks: [
                {
                    taskType: "tts",
                    config: {
                        language: { sourceLanguage: targetLanguage },
                        serviceId: `ai4bharat/indic-tts-${targetLanguage}`,
                        gender: "female"
                    }
                }
            ],
            inputData: {
                input: [{ source: text }]
            }
        };

        const response = await fetch(this.apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.apiKey
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`Bhashini TTS failed: ${response.statusText}`);
        }

        const data = await response.json();
        return data.pipelineResponse[0].audio[0].audioContent;
    }
}
