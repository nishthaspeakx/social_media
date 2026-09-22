# Phase 1 video workspace implementation plan

Goal: Idea → editable script → reviewed immutable script versions → linked video attempts → captioned final export → approval → download for manual publishing.

Architecture: Preserve the authenticated Worker, encrypted provider vault and existing workspace. Add a readable phase1 API module using existing D1 documents/versions/jobs/events, a dedicated browser workspace, and browser media finishing. Saved scripts and finished exports are immutable; review/approval records are bound to exact IDs and media SHA-256. No social publishing integration.

Spec: docs/phase1-requirements.md (the supplied document ends at the section 6 heading).

## Constraints
- Only Sia appears/speaks; approved Cartesia voice, Kie video model, source image and explicit generation enablement.
- No credentials in browser storage, source control, prompts, logs or exports.
- Save editing work remotely with revision checks. Restoring creates a new version; never replace old scripts/videos.
- Live provider UAT requires available credentials and the user's spending scope. Mocked UAT must be identified separately.
- Existing private audience and GitHub mirror remain unchanged.

## Components and contracts
1. server/phase1.js: authenticated route handler invoked from worker.js after origin/role checks. Routes prefixed /api/phase1. Existing /api/versions, /api/jobs and /api/media stay backward compatible.
2. web/phase1.js: dedicated Script Workspace, quality review, version compare/restore, generation history, final review/download and ideas. Uses api('phase1/...'). Replaces the current production dialog entry point; other growth strategy/report views stay available.
3. web/finishing.js: same-origin video/audio loading, timed caption editor support, safe vertical canvas rendering, real audio recording, MP4 preference with explicit compatibility checks. Rendered output is uploaded as a new immutable export; source media remains intact.
4. scripts/build.mjs bundles the small server module without adding dependencies. Existing Drizzle migrations unchanged because added records use existing tables.

## API
- GET/POST ideas: saved custom briefs, plus existing calendar is still frontend seed.
- GET/PUT drafts/:contentId: {body,revision}; owner/editor CAS prevents overwrites.
- GET versions?lessonId=:id; POST versions: complete script body; server allocates versionNumber/name and immutable record.
- POST versions/:id/restore: clone immutable body as new Draft.
- POST versions/:id/review: structured quality evaluation with score, blockers, recommendations, improved draft and persisted review.
- POST versions/:id/comment: {comment}; persisted actor/time.
- POST versions/:id/approve-script: append approval for exact script, no content mutation.
- GET/PUT budget: owner-only writes {maxJobsPerDay,maxSeconds}; defaults conservative (1 job/day,15 seconds) in IST.
- GET readiness: safe provider readiness + limits/usage, no credentials.
- POST jobs: {versionId,requestId}; new user-click attempt UUID, retry same requestId idempotent. Version link and exact prompt snapshot saved.
- POST jobs/:id/advance: existing durable adapter; no unattended worker claimed.
- POST jobs/:id/reconcile: owner only, poll existing provider task when known, or confirm verified no-charge failure before restarting a safe held stage. No automatic retry of uncertain billable requests.
- GET exports?lessonId=:id: immutable completed media records and approvals.
- POST jobs/:id/exports: multipart file + JSON metadata (duration,width,height,captions,notes). Max 60MB, video signature checked, bytes hashed, private R2 storage.
- POST exports/:id/review: persisted review comments and QA checklist.
- POST exports/:id/approve: require all QA checks, exact export hash, approver role. Returns Approved and Ready to Download.
- GET exports/:id/download: require approved matching hash; attachment response and audit receipt.
- GET history?lessonId=:id: versions/jobs/exports with reviews, approvals and server audit.

## Work sequence
- [ ] Add server lifecycle tests for drafts/CAS, complete versions and restore, multiple attempts/idempotency/budget, failed stage reconciliation, export binding/approval/download permissions.
- [ ] Implement API and generation stage observability; inspect official provider schemas and preserve uncertainty holds.
- [ ] Implement editable workspace and diff, meaningful review findings and source linkage, no unfinished publishing buttons.
- [ ] Implement browser finishing and verify actual encoded audio/video/captions on a local fixture.
- [ ] Integrate new and existing Sia references, content ideas and all 30 lessons.
- [ ] Run local UAT: create/edit/save V1/V2, compare/restore, mock generation lifecycle, final export approval/download, auth/CSRF/immutability regressions.
- [ ] If credentials and spend authorization allow, perform one real short Sia generation and inspect face/voice/lip-sync and final downloaded media. Record exact blockers otherwise.
- [ ] Build, publish existing private Site, sync GitHub, write UAT result with observed vs unverified checks.
