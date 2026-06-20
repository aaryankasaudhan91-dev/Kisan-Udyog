# Requirements: Krishi Udyog

**Defined:** 2026-06-20
**Core Value:** Provide expert-level agronomic advice and market insights to smallholder farmers with zero digital friction (voice-native and image-based interactions within WhatsApp).

## v1 Requirements

### Interface & Infrastructure (INTF)
- [ ] **INTF-01**: Twilio WhatsApp Business API webhook routes user text, images, and audio payloads to the agent.
- [ ] **INTF-02**: Message queue manages asynchronous processing for incoming payloads to handle low-bandwidth zones.

### Vernacular Speech Engine (VERN)
- [ ] **VERN-01**: Bhashini Speech-to-Text (ASR) converts regional language voice notes into text.
- [ ] **VERN-02**: Bhashini Text-to-Speech (TTS) converts text recommendations back to regional language voice notes.

### Autonomous Agronomist (DIAG)
- [ ] **DIAG-01**: Vision Agent via Gemini Flash analyzes crop photos to identify pathogens and disease symptoms.
- [ ] **DIAG-02**: Weather API integration retrieves hyper-local microclimate context (temperature, humidity, rain forecast).
- [ ] **DIAG-03**: Decision engine delays pesticide recommendations if rainfall is predicted within 48 hours.
- [ ] **DIAG-04**: RAG pipeline grounds disease diagnoses in verified ICAR agronomic guidelines.

### Proactive Pest Prediction (PEST)
- [ ] **PEST-01**: Cron job infrastructure periodically polls hyper-local microclimate weather cluster data.
- [ ] **PEST-02**: Agronomic prediction agent evaluates pest outbreak risks (e.g., Blight, Rust) based on climate data.
- [ ] **PEST-03**: Proactive voice alert (via Bhashini TTS) is triggered and pushed to registered farmers in their dialect.

### Smart Market Negotiator (MARK)
- [ ] **MARK-01**: Entity extraction identifies crop name and destination market from translated farmer queries.
- [ ] **MARK-02**: Agmarknet API integration retrieves current and 7-day historical prices across 4,000+ APMCs.
- [ ] **MARK-03**: Logic engine calculates net realization pricing by subtracting transportation costs from mandi rates.

### Government DPI & Data (GOVT)
- [ ] **GOVT-01**: DPI advisory pipelines integrate with government agriculture channels for broader dissemination.
- [ ] **GOVT-02**: Automated ICAR data sync and refresh pipeline runs periodically to update the RAG vector store.

### Offline Resilience (EDGE)
- [ ] **EDGE-01**: Offline caching and local SQLite sync queue store unsent payloads and retry on reconnection.
- [ ] **EDGE-02**: Localized speech/caching fallbacks execute key offline workflows in zero-connectivity areas.

## v2 Requirements

### Analytics & Reporting
- **ANLT-01**: Dashboard for government agriculture officers to monitor local pest outbreaks and commodity price fluctuations.
- **ANLT-02**: Heatmaps of regional crop disease occurrences based on farmer image uploads.

### Multi-User / Shared Device Model
- **SHRD-01**: Stateless user profiles allow multiple farmers to share a single phone (e.g., via Panchayat cooperative lead).
- **SHRD-02**: Voice fingerprinting/biometrics identify individual users on shared devices.

## Out of Scope

| Feature | Reason |
|---------|--------|
| Native Mobile / Desktop App | High friction for rural users; WhatsApp is the preferred, zero-install interface. |
| In-app financial transactions | Direct e-commerce payments are deferred to future milestones to simplify early trust dynamics. |
| Non-Indian Language Support | Support is strictly constrained to Bhashini's 22+ official Indian languages. |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| INTF-01 | Phase 1 | Pending |
| INTF-02 | Phase 1 | Pending |
| VERN-01 | Phase 1 | Pending |
| VERN-02 | Phase 1 | Pending |
| DIAG-01 | Phase 1 | Pending |
| DIAG-02 | Phase 1 | Pending |
| DIAG-03 | Phase 1 | Pending |
| DIAG-04 | Phase 1 | Pending |
| PEST-01 | Phase 1 | Pending |
| PEST-02 | Phase 1 | Pending |
| PEST-03 | Phase 1 | Pending |
| MARK-01 | Phase 2 | Pending |
| MARK-02 | Phase 2 | Pending |
| MARK-03 | Phase 2 | Pending |
| GOVT-01 | Phase 3 | Pending |
| GOVT-02 | Phase 3 | Pending |
| EDGE-01 | Phase 4 | Pending |
| EDGE-02 | Phase 4 | Pending |

**Coverage:**
- v1 requirements: 18 total
- Mapped to phases: 18
- Unmapped: 0 ✓

---
*Requirements defined: 2026-06-20*
*Last updated: 2026-06-20 after initial definition*
