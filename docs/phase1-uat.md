# Phase 1 UAT — 22 September 2026

## Release status
Implemented; real-provider acceptance remains pending. Do not call the system fully production-ready until a real Sia take passes voice, identity, caption, visual and lip-sync review.

## Verified
- Browser: create an idea, inspect its strategy, edit and save Script V1, run six-category review, save a comment and approve V1.
- Browser: edit approved V1, save V2 without modifying V1, compare additions/removals, restore V1 as a new V3.
- Browser: finish a local synthetic six-second video with burned captions and audio; save an immutable export linked to source script and generation job.
- Independent FFprobe check: H.264 720×1280, 5.9966 seconds; AAC audio 5.9926 seconds. FFmpeg detected audible signal (mean −21.1 dB). This is a moving test chart and tone, not Sia or a lip-sync test.
- API tests: revision conflicts, immutable approved script bodies, restore lineage, distinct video attempts, idempotent requests, daily limits, complete QA and exact file-hash approval, blocked unapproved download, approved attachment download.
- Provider mocks: SSE split across chunks, terminal event without connection close, durable voice checkpoint, actual-duration allowance, splitting into clips ≤14 seconds, no repeat synthesis, atomic AI allowance.
- Regression checks: authentication, roles, same-origin writes, encrypted provider storage, saved-reference safeguards and reporting denominators.

## Live issue reproduced
Both connection checks failed before any generation. Cloudflare/workerd rejects `redirect: 'error'` in this deployed runtime. A local real runtime probe reproduced the exact TypeError. Provider requests now use `manual`; non-success responses, including redirects, are rejected before processing. Credentials are not forwarded to redirect destinations.

## Live verification update
Both saved connections passed after the redirect fix. A single short Sia test was requested from Script V3. Cartesia synthesis and Kie task submission succeeded; the job reached the provider polling stage, then Kie returned Failed. The saved voice is preserved. A read-only provider-status diagnostic retrieves the failure without creating another paid task. No finished Sia video is available; final video review remains pending.

## Required real acceptance test
1. Check saved connections in Connections.
2. Prepare the short Sia test and review a single-person reference.
3. Save the exact script version, run script review and request one video within the owner-approved allowance.
4. Verify saved Cartesia audio, each Kie clip and complete prompt history.
5. Render captions while keeping Chrome visible; play the complete output.
6. Check face, voice, pronunciation, captions, rights, safe zones, lip-sync, visuals and complete audio.
7. Approve this exact export and download it; play the downloaded file.
8. Create a second video version only with an authorized allowance; compare versions and preserve their source scripts.

## Boundaries
- No automatic publishing or social OAuth integrations in Phase 1.
- Browser finishing runs in real time; leaving the tab aborts safely. It burns captions, frames 9:16 and adds the SpeakX logo. Complex map cutaways or scene animation can be finished externally and uploaded as a new linked export.
- Background changes require a prepared single-Sia reference frame. Original assets remain unchanged.
- Every paid attempt is explicit. Uncertain outcomes are held for reconciliation; they are never blindly retried.
- Editorial quality scores are transparent checks, not predictions of viral performance. AI semantic review uses Kie credits and remains editable.
