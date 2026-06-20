import { describe, it, expect } from 'vitest';
import { applyWeatherSafety, Diagnosis } from '../src/safety';

describe('Safety Postponement Logic - Task 1-04-02', () => {
    it('should strip chemical recommendations if rain is forecasted', () => {
        const rawDiagnosis: Diagnosis = {
            pathogen: "Early Blight",
            chemical_remedies: ["Chlorothalonil 75% WP"],
            application_guideline: "2g per liter of water"
        };

        const forecast = {
            willRainIn48h: true,
            maxPop: 0.90
        };

        const safeDiagnosis = applyWeatherSafety(rawDiagnosis, forecast);
        
        expect(safeDiagnosis.chemical_remedies).toHaveLength(0);
        expect(safeDiagnosis.application_guideline).toBe("DO NOT SPRAY NOW.");
        expect(safeDiagnosis.safety_warning).toContain("ALERT: There is a 90% chance of rain");
    });

    it('should not alter diagnosis if weather is clear', () => {
        const rawDiagnosis: Diagnosis = {
            pathogen: "Early Blight",
            chemical_remedies: ["Chlorothalonil 75% WP"],
            application_guideline: "2g per liter of water"
        };

        const forecast = {
            willRainIn48h: false,
            maxPop: 0.10
        };

        const safeDiagnosis = applyWeatherSafety(rawDiagnosis, forecast);
        
        expect(safeDiagnosis.chemical_remedies).toHaveLength(1);
        expect(safeDiagnosis.safety_warning).toBeUndefined();
    });
});
