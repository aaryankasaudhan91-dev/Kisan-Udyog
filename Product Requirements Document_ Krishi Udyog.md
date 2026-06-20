## **Product Requirements Document: Krishi Udyog** 

**Project Name:** Krishi Udyog (formerly FasalDhwani) **Document Version:** 1.0 

Status: Draft 

Owner: Person Date: Date 

## **1. Executive Summary** 

Krishi Udyog is an autonomous, agentic AI platform deployed via WhatsApp to assist smallholder farmers in rural Bharat. It transitions from simple chatbot responses to an "Agentic Operating System" capable of multimodal reasoning—diagnosing crop issues from images, cross-referencing environmental data, and providing market pricing insights in native dialects. 

## **2. Problem Statement** 

Rural agriculture in Bharat faces significant barriers to digital adoption: 

- **Literacy & Language:** High fragmentation of regional dialects and varying functional literacy levels. 

- **Connectivity:** Patchy 2G/3G internet makes high-bandwidth applications unusable. 

- **Digital Friction:** Complex UI/UX and app-download requirements alienate traditional farmers. 

- **Information Silos:** Existing tools provide static data rather than integrated, actionable reasoning. 

## **3. Goals & Objectives** 

- **Empowerment:** Provide expert-level agronomic advice to farmers with zero digital friction. 

- **Accessibility:** Utilize WhatsApp and voice-first interfaces to bypass literacy barriers. 

- **Accuracy:** Eliminate AI hallucinations by anchoring responses in validated data like ICAR guidelines. 

- **Scalability:** Leverage India's Digital Public Infrastructure (Bhashini and Agmarknet). 

## **4. User Personas** 

|**Persona**|**Description**|**Primary Needs**|
|---|---|---|
|**Smallholder Farmer**|Owns <2 hectares,<br>limited tech literacy,<br>speaks regional dialect.|Simple disease<br>diagnosis, weather alerts,<br>and fair market prices.|
|**Cooperative Lead**|Manages shared devices<br>for a village Panchayat or<br>FPO.|Multi-user support on a<br>single device, bulk<br>market insights.|
|**Govt. Agri-Ofcer**|Monitors local outbreaks<br>and price fuctuations.|Data-backed reporting<br>and proactive pest<br>prediction.|



## **5. Functional Requirements** 

## **5.1 The Autonomous Agronomist (Multimodal Diagnosis)** 

- **Image Processing:** The system must accept crop photos and identify pathogens via a Vision Agent. 

- **Environmental Context:** The agent must query localized Weather APIs to refine recommendations. 

- **Actionable Advice:** The system must provide specific interventions (e.g., delaying pesticide use if rain is forecasted). 

## **5.2 Proactive Pest Prediction** 

- **Background Monitoring:** Automated cron jobs must monitor microclimate data (humidity, temperature). 

- **Predictive Modeling:** Cross-reference data with agronomic models to predict risks like Blight. 

- **Voice Alerts:** Push proactive alerts in the user's dialect before outbreaks occur. 

## **5.3 Smart Market Negotiator** 

- **Vernacular Querying:** Support voice-based price queries (e.g., "Onion prices in Mumbai"). 

- **Real-time Data:** Integrate with Agmarknet API for data across 4,000+ APMCs. 

- **Logic Engine:** Calculate profitability by factoring in historical trends and transportation costs. 

## **6. Technical Stack & Architecture** 

|**Component**|**Technology**|
|---|---|
|**Interface Layer**|Twilio WhatsApp Business API|



|**Component**|**Technology**|
|---|---|
|**Vernacular Engine**|Bhashini API (22+ Indian languages)|
|**AI Orchestration**|LangChain / CrewAI|
|**Core LLM**|Gemini Flash (High-speed multimodal)|
|**Verifcation**|Retrieval-Augmented Generation (RAG)|
|**Data Sources**|ICAR guidelines, Agmarknet, Weather<br>APIs|



## **7. Success Metrics (KPIs)** 

- **User Retention:** Number of farmers returning for weekly advisory. 

- **Accuracy Rate:** Percentage of diagnoses verified against ICAR standards. 

- **Latency:** Average response time for voice-to-voice interactions. 

- **Reach:** Number of regional dialects successfully supported. 

## **8. Roadmap & Future Scope** 

- **Phase 1:** Core Disease Diagnosis & Weather Integration (Current). 

- **Phase 2:** Full Smart Market Negotiator rollout and Agmarknet optimization. 

- **Phase 3:** DPI integration for direct government advisory pipelines. 

- **Phase 4:** Offline support for edge-case connectivity scenarios. 

