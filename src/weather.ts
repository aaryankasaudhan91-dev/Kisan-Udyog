export interface WeatherForecast {
    willRainIn48h: boolean;
    maxPop: number; // Probability of precipitation (0 to 1)
}

export class WeatherClient {
    private apiKey: string;
    private apiUrl = 'https://api.openweathermap.org/data/2.5/forecast';

    constructor() {
        this.apiKey = process.env.OPENWEATHER_API_KEY || 'mock-key';
    }

    async getRainForecast(lat: number, lon: number): Promise<WeatherForecast> {
        const url = `${this.apiUrl}?lat=${lat}&lon=${lon}&appid=${this.apiKey}`;
        
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Weather API failed: ${response.statusText}`);
        }

        const data = await response.json();
        
        // Analyze the next 16 entries (48 hours / 3h slots = 16)
        const next48h = data.list.slice(0, 16);
        let maxPop = 0;

        for (const slot of next48h) {
            if (slot.pop > maxPop) {
                maxPop = slot.pop;
            }
        }

        return {
            willRainIn48h: maxPop > 0.6,
            maxPop
        };
    }
}
