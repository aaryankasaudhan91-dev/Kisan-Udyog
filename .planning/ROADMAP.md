# Roadmap: Krishi Udyog

## Overview

This roadmap defines the iterative development of Krishi Udyog from an initial core crop diagnosis prototype to a fully integrated, government-aligned, and offline-resilient agricultural assistant. The build order focuses first on the core diagnostic value, followed by market intelligence, government data pipelines, and connectivity fallbacks.

## Phases

- [ ] **Phase 1: Core Diagnosis & Weather Integration** - Disease diagnosis (Vision Agent, Gemini Flash, RAG, Bhashini) + weather integration + pest warnings.
- [ ] **Phase 2: Smart Market Negotiator** - Commodity price voice queries and Agmarknet API integration.
- [ ] **Phase 3: Govt DPI Integration** - Government DPI pipelines and ICAR RAG database automation.
- [ ] **Phase 4: Offline Edge Resilience** - Offline caching, SQLite sync queuing, and connectivity fallback handlers.

## Phase Details

### Phase 1: Core Diagnosis & Weather Integration
**Goal**: Autonomous crop disease diagnosis and weather-enriched microclimate warnings delivered via voice-native WhatsApp interactions.
**Mode**: mvp
**Depends on**: Nothing
**Requirements**: INTF-01, INTF-02, VERN-01, VERN-02, DIAG-01, DIAG-02, DIAG-03, DIAG-04, PEST-01, PEST-02, PEST-03
**Success Criteria**:
  1. Farmer can send a symptomatic crop photo via WhatsApp and receive a localized voice note diagnosis.
  2. Agronomic advice automatically warns the farmer to delay spraying if the Weather API predicts rain within 48 hours.
  3. Microclimate cron job detects high blight/rust risk and pushes a proactive voice warning alert to registered farmers.
**Plans**: 4 plans

Plans:
- [ ] 01-01: Setup Twilio WhatsApp webhook interface and Bhashini STT/TTS API clients.
- [ ] 01-02: Implement Vision Agent via Gemini Flash and RAG vector store grounded in ICAR guidelines.
- [ ] 01-03: Integrate Weather API and build pesticide postponement decision logic.
- [ ] 01-04: Implement background microclimate monitoring cron jobs and proactive warning system.

### Phase 2: Smart Market Negotiator
**Goal**: Vernacular commodity price assistant factoring in regional market pricing and transportation costs.
**Mode**: mvp
**Depends on**: Phase 1
**Requirements**: MARK-01, MARK-02, MARK-03
**Success Criteria**:
  1. Farmer can ask market pricing questions via voice note (e.g. "Mumbai mein pyaaz ka bhav") and get a speech response.
  2. Real-time prices are successfully pulled from the official Agmarknet API for 4,000+ APMC mandis.
  3. Net realization advice correctly subtracts local transport costs from mandi sale prices.
**Plans**: 2 plans

Plans:
- [ ] 02-01: Implement query entity extraction and Agmarknet price fetch API client.
- [ ] 02-02: Build transport-cost net realization model and compile regional voice responses.

### Phase 3: Govt DPI Integration
**Goal**: Official government data synchronization and DPI advisory pipeline integration.
**Mode**: mvp
**Depends on**: Phase 2
**Requirements**: GOVT-01, GOVT-02
**Success Criteria**:
  1. Platform successfully pushes agricultural warnings to regional government advisory dashboards.
  2. The RAG vector store automatically refreshes upon updates to the official ICAR database.
**Plans**: 2 plans

Plans:
- [ ] 03-01: Establish Bhashini government DPI pipeline and alert dashboard integrations.
- [ ] 03-02: Automate ICAR RAG database synchronization.

### Phase 4: Offline Edge Resilience
**Goal**: Low-latency edge caching and sync queuing for unstable rural 2G/3G connections.
**Mode**: mvp
**Depends on**: Phase 3
**Requirements**: EDGE-01, EDGE-02
**Success Criteria**:
  1. Message outbox caches user payloads locally during connectivity drops and syncs them automatically upon reconnecting.
  2. Local-first SQLite fallbacks provide generic offline responses to queries during zero network availability.
**Plans**: 2 plans

Plans:
- [ ] 04-01: Build SQLite sync queue and message caching infrastructure.
- [ ] 04-02: Implement local fallback response handlers and offline ASR mocks.

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Core Diagnosis | 0/4 | Not started | - |
| 2. Market Negotiator | 0/2 | Not started | - |
| 3. Govt DPI Integration | 0/2 | Not started | - |
| 4. Offline Edge Resilience | 0/2 | Not started | - |
