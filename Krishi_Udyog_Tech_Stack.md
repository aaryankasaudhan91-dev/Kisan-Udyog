**Krishi Udyog** |  Tech Stack Architecture 

# **KRISHI UDYOG** Tech Stack Architecture Document 

_Agentic AI Platform for Smallholder Farmers in Rural Bharat_ 

Version 1.0  |  Draft  |  June 2026 

## **1. Overview** 

Krishi Udyog (formerly FasalDhwani) is an autonomous, agentic AI platform delivered via WhatsApp to assist smallholder farmers across rural Bharat. The platform operates as an Agentic Operating System — diagnosing crop diseases from photos, monitoring microclimate data for pest prediction, and providing real-time market intelligence in the farmer's native dialect. 

This document describes the complete technology stack powering the platform, organized by architectural layer, with rationale for each technology choice. 

## **2. Architecture Layers** 

The stack is structured in five distinct layers, each responsible for a well-defined domain. Data flows from the farmer's WhatsApp message downward through the layers and back up as a voice or text response. 

## **Layer 1 — Interface** 

**WhatsApp Business API (Twilio)** —  Primary farmer-facing channel **INTERFACE Voice messages** —  STT input for low-literacy users **Image upload** —  Crop photos for visual diagnosis 

WhatsApp is the only viable mass-market channel for rural India. It requires no app install, works on 2G/3G, and is already installed on most feature-enabled smartphones. Twilio's WhatsApp Business API provides a stable, production-grade bridge with webhook support for incoming messages, media, and voice notes. 

## **Layer 2 — Vernacular Engine** 

Confidential — v1.0 Draft   |   Page 1 

**Krishi Udyog** |  Tech Stack Architecture 

**Bhashini API** —  Government DPI — 22+ Indian languages **LANGUAGE Speech-to-Text (STT)** —  Converts farmer voice notes to text **Text-to-Speech (TTS)** —  Delivers alerts in native dialect 

Bhashini is India's National Language Technology Mission, offering free-tier API access to ASR, TTS, and translation models trained on Indian languages including Marathi, Bhojpuri, Odia, and 19 others. Using Bhashini anchors the platform in the government's Digital Public Infrastructure, enabling future funding alignment and ensuring dialect coverage beyond what commercial APIs provide. 

**Layer 3 — AI Orchestration** 

**LangChain / CrewAI** —  Multi-agent coordination framework **Vision Agent** —  Crop image diagnosis & pathogen ID **ORCHESTRATION Prediction Agent** —  Cron-triggered pest risk modeling **Market Agent** —  Price queries & profitability logic 

LangChain provides the foundational tooling for chaining LLM calls, managing memory, and integrating external APIs. CrewAI extends this to a multi-agent system where specialized agents (Vision, Prediction, Market) can run in parallel or sequentially depending on the query type. This separation of concerns ensures each agent can be updated, fine-tuned, or swapped independently without affecting the others. 

**Layer 4 — Intelligence** 

**Gemini Flash** —  Core LLM — multimodal, low latency **INTELLIGENCE RAG pipeline** —  Retrieval-Augmented Generation on ICAR docs **Microclimate monitor** —  Background humidity & temperature tracking 

Gemini Flash is selected for its native multimodal capability (processing both images and text in a single call), speed, and cost efficiency at scale. The RAG pipeline grounds every response in verified ICAR agronomic guidelines, preventing hallucinations on crop advisory which could directly harm livelihoods. The microclimate monitor runs as a background cron job, feeding humidity and temperature readings into the Prediction Agent. 

**Layer 5 — Data Sources** 

**ICAR database** —  Verified agronomic guidelines for RAG **DATA Agmarknet API** —  Live prices across 4,000+ APMCs **SOURCES Weather APIs** —  Localized microclimate forecasts **Digital Public Infrastructure** —  Bhashini infra & future gov pipelines 

All data sources are either government-maintained or publicly available APIs, ensuring low cost and high credibility. Agmarknet, operated by the Ministry of Agriculture, provides live mandi prices across India — the most authoritative source for market intelligence. ICAR guidelines are ingested into a vector store and updated periodically as advisories are revised. 

Confidential — v1.0 Draft   |   Page 2 

**Krishi Udyog** |  Tech Stack Architecture 

## **3. Full Tech Stack Reference** 

|**Component**|**Technology**|**Purpose**|**Rationale**|
|---|---|---|---|
|||||
|||||
|Interface channel|WhatsApp Business<br>API (Twilio)|Primary farmer<br>touchpoint|Zero install, 2G<br>compatible|
|Vernacular STT/TTS|Bhashini API|22+ Indian language<br>processing|Govt DPI, dialect<br>coverage|
|||||
|||||
|Voice alerts|Bhashini TTS|Push proactive dialect<br>alerts|Native language<br>delivery|
|||||
|||||
|Agent framework|LangChain|LLM chaining & tool<br>integration|Mature ecosystem,<br>extensible|
|||||
|||||
|Multi-agent system|CrewAI|Parallel specialized<br>agents|Role-based agent<br>isolation|
|||||
|||||
|Vision agent|Gemini Flash (Vision)|Crop image diagnosis|Native multimodal, fast|
|Core LLM|Gemini Flash|Language reasoning|Low latency, cost<br>efficient|
|||||
|||||
|Hallucination guard|RAG (vector store)|Ground responses in<br>ICAR|Factual accuracy<br>critical|
|||||
|Prediction model|Agronomic ML + cron|Pest risk forecasting|Proactive, not reactive|
|||||
|||||
|Market data|Agmarknet API|Live APMC prices|4,000+ mandis, official|
|||||
|||||
|Weather data|Localized Weather API|Microclimate context|Refines advisory<br>precision|
|DPI integration|Bhashini + Gov<br>pipelines|Phase 3 gov advisory|Scalability & funding|
|||||



## **4. Agent Design Detail** 

## **4.1 Vision Agent** 

Triggered when a farmer sends a crop photo. The agent passes the image directly to Gemini Flash's vision endpoint along with metadata (crop type, region, season derived from prior conversation context). The model identifies visible symptoms, cross-references the RAG store for matching ICAR pathogen profiles, and returns a diagnosis with confidence score and recommended intervention. 

Environmental context enrichment: before finalizing the recommendation, the agent queries the Weather API for the current forecast. If rain is predicted within 48 hours, pesticide application advice is automatically delayed and the farmer is informed. 

## **4.2 Prediction Agent** 

Confidential — v1.0 Draft   |   Page 3 

**Krishi Udyog** |  Tech Stack Architecture 

Runs on a scheduled cron job (configurable cadence, default: twice daily). The agent pulls microclimate readings (humidity, temperature, rainfall forecast) for each registered farm's GPS cluster and passes them to an agronomic risk model. If conditions exceed blight, rust, or pest outbreak thresholds, a proactive voice alert is triggered via Bhashini TTS before symptoms appear. 

## **4.3 Market Agent** 

Responds to vernacular price queries (e.g., a voice note saying "Mumbai mein pyaz ka kya bhav hai?"). The agent resolves the crop name and destination market via entity extraction, queries Agmarknet for current and 7-day historical prices, calculates estimated transportation cost from the farmer's location, and returns a net realisation estimate to help the farmer negotiate or choose the optimal mandi. 

## **5. Deployment Roadmap** 

|||||
|---|---|---|---|
|**Phase**|**Name**|**Scope**|**Key Stack Additions**|
||**Core diagnosis**|Disease diagnosis + weather<br>integration|Vision Agent, Gemini Flash,<br>RAG, Bhashini|
|**1**||||
|||||
||**Market intelligence**|Smart Market Negotiator rollout|Market Agent, Agmarknet API<br>full integration|
|**2**||||
|||||
||**Gov integration**|DPI advisory pipelines|Bhashini DPI pipeline, ICAR<br>data refresh automation|
|**3**||||
|||||
||**Offline edge**|Connectivity-resilient mode|Edge caching, offline STT<br>fallback, sync queue|
|**4**||||
|||||



## **6. Success Metrics** 

||||
|---|---|---|
|**Metric**|**Definition**|**Target**|
||||
||||
|User retention|Farmers returning for weekly<br>advisory|> 40% at 30 days|
||||
||||
|Diagnosis accuracy|Verified against ICAR standards|> 85% match rate|
|Response latency|Voice-to-voice round trip|< 8 seconds on 3G|
||||
||||
|Language reach|Regional dialects supported|10+ by Phase 2|
||||
||||
|Market query accuracy|Price within ±5% of mandi rate|> 90% queries|
||||



## **7. Design Principles** 

- Zero digital friction — no app download, no registration form, no login. 

- Voice-first — every interaction must be completable by voice alone. 

- Hallucination-free — all agronomic advice anchored in RAG over ICAR data; no unverified generation. 

Confidential — v1.0 Draft   |   Page 4 

**Krishi Udyog** |  Tech Stack Architecture 

- DPI-native — built on Bhashini and Agmarknet to leverage India's public digital infrastructure. 

- Low-bandwidth resilient — all responses optimized for 2G/3G; no image-heavy responses. 

- Proactive, not reactive — the Prediction Agent pushes alerts before problems occur. 

   - _End of Document —_ 

Confidential — v1.0 Draft   |   Page 5 

