import { WeatherForecast } from './weather';

export interface Diagnosis {
    pathogen: string;
    chemical_remedies: string[];
    application_guideline: string;
    safety_warning?: string;
}

export const applyWeatherSafety = (
    diagnosis: Diagnosis, 
    forecast: WeatherForecast
): Diagnosis => {
    // If rain is highly likely (>60%) and chemical remedies are suggested
    if (forecast.willRainIn48h && diagnosis.chemical_remedies.length > 0) {
        return {
            ...diagnosis,
            chemical_remedies: [],
            application_guideline: "DO NOT SPRAY NOW.",
            safety_warning: `ALERT: There is a ${(forecast.maxPop * 100).toFixed(0)}% chance of rain in the next 48 hours. Spraying pesticides now will wash them away. Please postpone chemical application.`
        };
    }
    
    return diagnosis;
};
