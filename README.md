# SpeakX Social Studio — October 2026

Deliverable: complete operating plan + interactive browser-local prototype. Not a production automation deployment.

Start: `python3 -m http.server 4317 --directory dist` then open http://localhost:4317.

- dist/index.html, style.css, app.js: manager UI
- data/october.json: canonical 31-day draft lesson plan
- data/map-catalog.json: 15 supplied India maps imported through Chrome/Drive
- docs/october-content.md: full content cards
- docs/automation-blueprint.md: production architecture, agent contracts, rollout
- docs/api-notes.md: verified API notes and explicit verification blockers
- docs/manager-guide.md: workflow, decisions and delivery boundaries

The prototype uses browser localStorage only. No tokens, generated media, production approvals, live posts or real analytics are included. All generated lesson captions/scripts require final human editorial and media review. UI role selection is not authentication.
