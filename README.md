# SpeakX Organic Growth OS

30-day operating plan and private manager application, October1–30,2026. Organic-only. The application provides planning, immutable versions, strategy, production prompts, map pins, analytics imports, retention diagnosis, reviews and experiments. Provider adapters are gated pending keys/voiceID/reference validation. Automated publishing, media finishing and unattended job execution remain integration work; this is not yet a fully autonomous live publisher.

- `web/`: authored frontend/assets/documents
- `server/worker.js`: authenticated workspace/version/job API
- `db/schema.ts`, `drizzle/`:D1schema and generated migrations
- `data/october.json`:30 detailed production packages
- `data/strategy.json`:strategy and research
- `docs/growth-implementation.md`:complete capability and connection handoff

`npm run build` then `npm run dev` opens a localhost4317 preview with localD1/R2. `npm test` runs workflow and metric checks. Configure secrets only in runtime environment. Do not enable paid generation before provider contract,voice and budget checks. The private hosted site is the existing SpeakX studio URL.
