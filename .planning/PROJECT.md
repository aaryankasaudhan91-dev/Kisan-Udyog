# Krishi Udyog

## What This Is

Krishi Udyog (formerly FasalDhwani) is an autonomous, agentic AI platform deployed via WhatsApp specifically designed to empower smallholder farmers in rural Bharat. The platform operates as an Agentic Operating System capable of multimodal reasoning—diagnosing crop issues from images, cross-referencing real-time localized weather data, and providing market pricing insights in native dialects using Speech-to-Text (STT) and Text-to-Speech (TTS).

## Core Value

Provide expert-level agronomic advice and market insights to smallholder farmers with zero digital friction (voice-native and image-based interactions within WhatsApp).

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] **INTF-01**: Twilio WhatsApp integration routes user text, images, and audio payloads.
- [ ] **INTF-02**: Asynchronous queuing handles low-bandwidth (2G/3G) message flow.
- [ ] **VERN-01**: Bhashini API performs Speech-to-Text (ASR) on regional voice notes.
- [ ] **VERN-02**: Bhashini API performs Text-to-Speech (TTS) to generate dialect-based audio advice.
- [ ] **DIAG-01**: Vision Agent via Gemini Flash analyzes crop photos to diagnose disease symptoms.
- [ ] **DIAG-02**: Localized Weather API retrieves environmental context for diagnosed crops.
- [ ] **DIAG-03**: Logic postpones pesticide recommendations if rain is forecasted within 48 hours.
- [ ] **DIAG-04**: RAG pipeline grounds disease diagnoses in verified ICAR agronomic guidelines.
- [ ] **PEST-01**: Background cron jobs monitor microclimate data (humidity and temperature) for farm clusters.
- [ ] **PEST-02**: Agronomic prediction agent evaluates pest outbreak risks (e.g., Blight, Rust).
- [ ] **PEST-03**: Proactive voice warnings are pushed to registered farmers in their dialect.
- [ ] **MARK-01**: Voice query entity extraction parses crop name and destination market from farmer voice notes.
- [ ] **MARK-02**: Agmarknet API integration retrieves current and 7-day historical prices across 4,000+ APMCs.
- [ ] **MARK-03**: Profitability engine calculates net realization factoring in transportation costs.
- [ ] **GOVT-01**: DPI advisory pipelines integrate with government agriculture channels.
- [ ] **GOVT-02**: Automated ICAR data sync updates the RAG vector store.
- [ ] **EDGE-01**: Offline caching and local SQLite sync queue handle disconnected sessions.
- [ ] **EDGE-02**: Localized speech/caching fallbacks operate in zero-connectivity areas.

### Out of Scope

- **Desktop UI or Native Mobile App** — Farmers prefer using WhatsApp; building separate apps introduces download and menu friction.
- **Immediate online transactions** — Payment gateways or e-commerce purchases are deferred to avoid trust and connectivity issues in early phases.
- **Non-Indian Languages** — Early phases focus strictly on Bhashini's supported 22+ official Indian languages/dialects.

## Context

- **Digital Literacy & Interface:** Deep rural farmers have high digital friction with modern apps but high familiarity with WhatsApp voice notes and camera sharing.
- **Connectivity Constraints:** Low-bandwidth 2G/3G connectivity is normal. Offline fallbacks and asynchronous queuing are required.
- **Data Grounding:** Agronomic recommendations must be verified to prevent crop failures; ICAR is the golden standard.
- **National DPI:** Leveraging India's Digital Public Infrastructure (Bhashini for language, Agmarknet for commodity pricing) ensures scalability and alignment with government agencies.

## Constraints

- **Tech Stack**: Must use Gemini Flash for multimodal/low-latency intelligence, LangChain/CrewAI for orchestration, Bhashini API for STT/TTS, and Twilio for WhatsApp Business API.
- **Accuracy**: 100% of agronomic advice must be grounded in the ICAR database; no unverified generation.
- **Response Latency**: Voice-to-voice round trip must be under 8 seconds on a standard 3G connection.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| WhatsApp Native Interface | Zero install, low barrier to entry for smallholders | — Pending |
| Gemini Flash Core LLM | Fast multimodal processing and low cost at scale | — Pending |
| Bhashini DPI Translation | Anchored in government-provided dialect coverage | — Pending |
| RAG over ICAR | Prevent harmful agricultural advice and hallucinations | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-06-20 after initialization*
