## **Krishi Udyog: Project Report** 

## **Strategic Implementation Dossier** 

**Prepared by:** Person 

**Date:** Date 

**Subject:** Agentic AI for Vernacular Agricultural Advisory 

## **1. Executive Summary** 

**Krishi Udyog** (formerly FasalDhwani) is an Agentic AI assistant deployed via WhatsApp, specifically designed to empower smallholder farmers in rural Bharat. Moving beyond traditional retrieval-based chatbots, Krishi Udyog functions as an autonomous reasoning engine capable of multimodal processing—diagnosing crop diseases from images, cross-referencing real-time weather data for predictive pest alerts, and analyzing market trends for optimal price recommendations. By prioritizing asynchronous voice and image-based interactions, the platform effectively bypasses existing barriers in digital literacy, connectivity, and language fragmentation. 

## **2. The Ground Reality vs. The Krishi Udyog Solution** 

The current agricultural landscape is saturated with text-heavy applications that fail to account for the functional literacy and connectivity constraints of deep rural regions. Krishi Udyog addresses these fundamental gaps through architectural specialization. 

|**The Ground Reality (Problem)**|**The Krishi Udyog Solution**|
|---|---|
||**Asynchronous Agent Queuing:**Built on|
|**Patchy Internet Connectivity**|WhatsApp to handle message queuing in|
||low-bandwidth 2G/3G zones.|



|**The Ground Reality (Problem)**|**The Krishi Udyog Solution**|
|---|---|
||**Zero-Friction Interface:**Eliminates app|
|**Low Digital Literacy**|downloads and complex menus;<br>operates entirely within familiar chat|
||flows.|
||**Bhashini-Powered Voice:**Utilizes|
|**Language & Text Barriers**|STT/TTS for seamless communication in<br>regional dialects and local agricultural|
||slang.|
||**Stateless Shared Device Model:**Allows|
|**Hardware Constraints**|a single device in a cooperative or<br>Panchayat to serve multiple users|
||effectively.|



## **3. Core Agentic Workflows** 

Unlike standard systems that provide static FAQ responses, Krishi Udyog utilizes an **Agentic Operating System** to coordinate multiple specialized AI agents for high-context decision support. 

## **A. The Autonomous Agronomist (Disease Diagnosis)** 

- **The Trigger:** User-uploaded image of a symptomatic crop. 

- **Agentic Loop:** 

   - **Vision Agent:** Identifies the specific pathogen through multimodal analysis. 

   - **Integration:** Pings localized Weather APIs to assess immediate environmental conditions. 

   - **Decision:** Recommends action based on the forecast (e.g., advising against immediate fungicide application if rain is imminent to prevent chemical runoff). 

## **B. Proactive Pest Prediction** 

- **The Trigger:** Continuous background monitoring via cron jobs. 

- **Agentic Loop:** 

   - Monitors hyper-local microclimate data such as humidity and temperature. 

   - Cross-references data with established agronomic models to predict outbreak risks like Blight. 

   - Pushes proactive voice alerts in the farmer's native dialect before the outbreak occurs. 

## **C. Smart Market Negotiator** 

- **The Trigger:** Vernacular voice query regarding commodity pricing (e.g., "Where should I sell my onions today?"). 

- **Agentic Loop:** 

   - Queries the **Agmarknet API** for real-time data across 4,000 APMCs. 

   - Calculates profitability by factoring in transportation costs and historical trends. 

   - Provides a mathematically backed market recommendation. 

## **4. Technical Architecture** 

The prototype is built on a modular stack designed for scalability and minimal latency. 

- **Interface Layer:** Twilio WhatsApp Business API for routing text, image, and audio payloads. 

- **Vernacular Engine: Bhashini API** for Automatic Speech Recognition ASR and Text-to-Speech TTS translation of 22 official Indian languages. 

- **Orchestration Layer:** LangChain or CrewAI frameworks utilizing high-speed LLM cores (e.g., Gemini Flash) for intent classification and tool routing. 

- **Verification Layer:** Retrieval-Augmented Generation RAG anchored in validated agronomic data (e.g., ICAR guidelines) to eliminate hallucinations. 

## **5. Competitive Edge & Strategic Alignment** 

Krishi Udyog distinguishes itself from platforms like DeHaat or Kisan Suvidha by moving from information delivery to **autonomous reasoning** . 

1. **True Autonomy:** The system synthesizes multiple data streams Weather + Vision + Market) rather than acting as a simple search engine. 

2. **Voice-Native Design:** Built specifically for users who prefer speaking over typing, aligning with the "Bharat-first" digital philosophy. 

3. **DPI Integration:** By leveraging India's Digital Public Infrastructure Bhashini and Agmarknet), the project is positioned for high-impact scalability and government alignment. 

4. **Sustainability:** Encourages ecological health through precise chemical recommendations and supports traditional sustainable practices where applicable. 

## **Related Documents:** 

- File Full Technical Specification) 

- File Hackathon Presentation Deck) 

