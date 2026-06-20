import { describe, it, expect, vi, beforeEach } from 'vitest';
import { WeatherClient } from '../src/weather';

describe('Weather API Client - Task 1-04-01', () => {
    let client: WeatherClient;

    beforeEach(() => {
        vi.resetAllMocks();
        process.env.OPENWEATHER_API_KEY = 'mock-key';
        client = new WeatherClient();
    });

    it('should parse weather API response and detect rain probability > 60%', async () => {
        // Mock a 5-day forecast response where one slot has 85% rain probability
        const mockResponse = {
            list: Array.from({ length: 40 }).map((_, i) => ({
                pop: i === 5 ? 0.85 : 0.1
            }))
        };

        global.fetch = vi.fn().mockResolvedValue({
            ok: true,
            json: vi.fn().mockResolvedValue(mockResponse)
        });

        const forecast = await client.getRainForecast(19.0760, 72.8777); // Mumbai
        
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(forecast.willRainIn48h).toBe(true);
        expect(forecast.maxPop).toBe(0.85);
    });
});
