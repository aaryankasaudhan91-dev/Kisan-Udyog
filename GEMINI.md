<!-- GSD:project-start source:PROJECT.md -->

## Project

**Krishi Udyog**

Krishi Udyog (formerly FasalDhwani) is an autonomous, agentic AI platform deployed via WhatsApp specifically designed to empower smallholder farmers in rural Bharat. The platform operates as an Agentic Operating System capable of multimodal reasoning—diagnosing crop issues from images, cross-referencing real-time localized weather data, and providing market pricing insights in native dialects using Speech-to-Text (STT) and Text-to-Speech (TTS).

**Core Value:** Provide expert-level agronomic advice and market insights to smallholder farmers with zero digital friction (voice-native and image-based interactions within WhatsApp).

### Constraints

- **Tech Stack**: Must use Gemini Flash for multimodal/low-latency intelligence, LangChain/CrewAI for orchestration, Bhashini API for STT/TTS, and Twilio for WhatsApp Business API.
- **Accuracy**: 100% of agronomic advice must be grounded in the ICAR database; no unverified generation.
- **Response Latency**: Voice-to-voice round trip must be under 8 seconds on a standard 3G connection.

<!-- GSD:project-end -->

<!-- GSD:stack-start source:STACK.md -->

## Technology Stack

Technology stack not yet documented. Will populate after codebase mapping or first phase.
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->

## Conventions

Conventions not yet established. Will populate as patterns emerge during development.
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->

## Architecture

Architecture not yet mapped. Follow existing patterns found in the codebase.
<!-- GSD:architecture-end -->

<!-- GSD:skills-start source:skills/ -->

## Project Skills

No project skills found. Add skills to any of: `.agent/skills/`, `.agents/skills/`, `.cursor/skills/`, `.github/skills/`, or `.codex/skills/` with a `SKILL.md` index file.
<!-- GSD:skills-end -->

<!-- GSD:workflow-start source:GSD defaults -->

## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:

- `/gsd-quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd-debug` for investigation and bug fixing
- `/gsd-execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->

<!-- GSD:profile-start -->

## Developer Profile

> Profile not yet configured. Run `/gsd-profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
