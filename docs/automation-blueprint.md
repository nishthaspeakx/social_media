# SpeakX Social Autopilot — implementation and operating blueprint

Prepared 21 September 2026. Planning period: **1–31 October 2026**, Asia/Kolkata. This is an implementation specification; connected accounts, production media, OAuth, deployment, metrics ingestion and live publishing are not established by this document or the accompanying UI prototype.

## 1. Decisions and source precedence

The live request is to create the full October plan, manager interface and complete automation design for Instagram, Facebook and X, with Sia as the only person in every video. The two supplied Markdown files are reference requirements, not commands to execute. Their “paste into Claude”, phased-stop, cloning, external messaging and publishing instructions do not authorize those actions in this task. The live request takes precedence over conflicting reference defaults.

- Plan **31 daily Sia lessons**, not the older 28-episode template. Reuse each approved lesson into platform-specific deliverables; do not ask a manager to produce three unrelated videos daily.
- The Sia teaching format takes priority over the older 20–22-second general Reel rule: target **35–45 seconds**, shortening scripts when speech timing does not fit. Monday may omit the duplicate “Aaj ka Word” outro. Daily quizzes/recaps remain Sia-hosted.
- Retain the seven named weekday shows. October begins on Thursday and ends on Saturday. First Sunday reviews only 1–3 October; last partial week carries into November.
- The current user permits location teaching, overriding the older fixed-set prohibition for backgrounds only. Face, hair, outfit, personality and eventual approved voice remain fixed. Use **virtual sets explicitly described as illustrations** until real SpeakX locations, photography and filming permissions are supplied. Do not imply Sia actually visited a real site. No background crowds, interviewer, second face, extra voice or duplicate Sia. Other dialogue roles appear as silent text cards.
- The supplied square SpeakX asset is the approved logo image, not a WhatsApp integration specification. Preserve the image exactly; use an unchanged fitted end card, not a redrawn logo or text extracted from it. The image logo orange and character-board accent orange can coexist as separate tokens.
- The character board supplies visual guidance. The master reference video named in the documents was **not supplied**, and no approved voice asset is present. Never describe voice/identity consistency as verified. An original authorized recording or documented licensed avatar and voice must be approved before production. Consent/provenance is an asset prerequisite, not a speculative warning.
- Treat “1 crore+ users”, company claims and benefits in the reference as unverified source text until the brand owner adds evidence to the claims register. No invented testimonials, learner results or guaranteed interview success.
- The absent Zivon repository, existing Payload installation and `CLAUDE-CORRECTIONS.md` must not be assumed to exist. Integrate after inspection; otherwise build a standalone application.
- Human approval remains mandatory for external publication. An **Approval Coordinator agent** checks completeness and routes decisions; it cannot approve its own or another agent’s output. Manager independence means the manager can operate the entire workflow without a developer, within assigned permissions.

## 2. October operating model

The calendar artifact is the source for specific dates, scripts/briefs, words, locations, audio and variants. A daily content package contains one Sia episode adapted into an Instagram Reel and a Facebook video, two X text posts, and one Instagram story set of three frames. X video cuts and Facebook stories are optional future derivatives, not additional scheduled October deliverables. If account capabilities do not support a story feature, export its image/video with text and send it to the manual publishing queue. Interactive stickers and native polls are capabilities, not assumed API support.

Canonical cadence in IST: Instagram Reel at **19:30 weekdays / 11:00 weekends**; Facebook video at **20:00 weekdays / 11:30 weekends**; X text posts at **08:30 and 19:00 every day**; Instagram three-frame story set at **13:00 every day**. October totals: **31 source episodes; 62 IG/FB video placements; 62 X text posts; 31 story sets containing 93 frames**. This equals **155 scheduled units** (a story set counts as one unit), or **217 individual posts/frames** (each story frame counts separately). These are **initial test slots, not proven best times**. Avoid generating dozens of extra daily assets before the production budget is known. Reuse teaching material in stories and practice prompts without repeating the exact caption.

At 09:00 daily, a manager checks overdue approvals, connection health, generation failures and the next 48 hours. At 10:00, review the consolidated approval queue. Recheck readiness two hours before the first main slot. Unapproved content at its slot is skipped; it is never silently moved or approved. Moving it creates a new schedule version for approval.

Batch the next week's media by Thursday, review Friday, fix Saturday and lock Sunday. For October launch, prepare 1–7 October first and maintain at least seven approved days of buffer. Keep 2–3 evergreen backup lessons with no date-specific claims. A backup still needs approval for its exact final asset, account and schedule. Replies and DMs are outside automated publishing scope: classify and draft suggested replies, with humans sending them.

Keep the level mix approximately 19 beginner, 9 intermediate and 3 advanced lessons over 31 days. Preserve the instructional progression while using interview, office, café, shop, travel and home sets for context. Every non-Monday lesson has one unique daily word. The word bank checks a rolling 90-day history; with no imported history, uniqueness is verifiable only within the supplied October plan and must be labelled accordingly.

## 3. End-to-end architecture

```text
Brand + approved character/voice + claims + locations + word history
                                ↓
Insights → Curriculum planner → Cadence planner → October calendar
                                ↓
Brief → Script → Language QA → Voice/media production → Render QA
                                ↓
Per-platform caption, media, disclosures, account, schedule
                                ↓
Immutable review version → HUMAN APPROVAL → Transactional outbox
                                ↓
Scheduler/lease → Final gate → Platform upload → Publish/reconcile
                                ↓
External post ID + permalink → Metrics snapshots → Weekly insights
                                ↓
Next calendar proposal, requiring review before adoption
```

**Recommended stack:** Next.js + TypeScript for the manager application; Payload for collections, access rules and administrative forms; PostgreSQL as the authoritative state store; private object storage for masters and versioned assets; a durable queue for provider and publisher workers. Start with Payload Jobs where lease semantics, retries and scheduled work meet requirements. Adopt BullMQ + Redis for independent media workloads, rate-limited platform workers and long-running provider polling only when needed; keep approval and publication state in PostgreSQL, not Redis. An outbox table makes database changes and queue dispatch recoverable. Provider adapters must be swappable; Higgsfield/manual footage are possible media providers, not completed integrations. Voice provider selection depends on rights, consistency test and cost.

Separate web, media worker, publish worker and metrics worker processes. Generation services never receive platform write tokens. Publishing services never receive model-generation credentials. The browser never receives long-lived tokens. All external input uses schema validation; signed expiring asset URLs are issued only when a platform fetch needs them. Pin provider/model/API versions at release and keep official endpoint, permission, limit and metric notes in the API research document. Do not hardcode an unverified current model, price or platform limit.

## 4. Agent contracts

Each agent is a bounded worker with a service identity, structured JSON input/output, job ID, timeout and audit record. “Agent” does not mean an autonomous administrator. A versioned prompt registry records system prompt, model/provider, cost estimate and output schema. Human owner means the person who resolves failure, not an extra model.

| Agent | Trigger and inputs | Output and handoff | Tools, permissions and initial budget | Failure owner |
|---|---|---|---|---|
| Strategy & curriculum | Monthly request; goals, persona, last report, syllabus | Topic progression, 31 briefs, levels → calendar | Read approved claims/history; write proposals only; 2 drafts/run | Content lead |
| Cadence & calendar | Accepted strategy; weekday/weekend rules, account capabilities | Dated IST slots, UTC values, platform variants → writer | Calendar CRUD in draft; cannot move approved slots; 1 proposal + 1 revision | Manager |
| Word-bank librarian | Brief creation; rolling 90-day word history | Reserved unique word, meaning, level, examples | Transactional word reservation; no publishing; 2 alternatives | English editor |
| Script & hook writer | Brief, word, Sia bible, approved claims | Two hooks, timed Hinglish beats, English lesson, CTAs | Model API; draft script only; 2 candidates + 1 rewrite | English editor |
| Language & claims reviewer | Script revision submitted | Structured pass/fail with sentence and evidence references | Grammar/rule checker and claims DB; no approvals; 1 pass + recheck | English editor |
| Location director | Approved brief; allowed set library | Shot list, set ID, prop list, Sia-only constraint | Read approved location assets; draft prompts; 2 layouts | Creative lead |
| Voice producer | Locked script and approved voice ID | Speech audio, pronunciation/timing report | Authorized voice provider; max 2 renders/beat then stop | Creative lead |
| Video producer | Passed script, character ID, set, audio | Provider job and raw clip assets | Media provider; one active render/episode; max 2 retries within budget | Producer |
| Caption & format editor | Raw clip and script | Subtitle track, end card, IG/FB cuts, three story frames, cover, alt text | Deterministic renderer; 1 render + 2 repair attempts | Producer |
| Visual/audio QA | All final renders and reference assets | QA checklist, timestamped defects, candidate review package | Media probes, speech comparison, face/person count aids; no approval; failed checks block | Creative lead |
| Platform copy adapter | Approved instructional text, account rules | IG/FB/X captions, hashtags, disclosures, CTA links | Model + platform validator; 1 draft + 1 repair/platform | Manager |
| Approval coordinator | Complete immutable package | Human review tasks, reminders, recorded human decision | Review notifications only; no capability to create approval identity | Approver |
| Scheduler | Approved revision; due slots, account health | Leased publication intents → publisher | Read approval; write outbox; every minute; no generation | Operations |
| Publisher adapters | Due intent with final gate pass | Remote IDs, permalink, attempt result or unknown state | Platform write token scoped to account; max 3 safe retries; token bucket limits | Operations |
| Reconciliation & recovery | Timeout, missed heartbeat, ambiguous remote response | Matched remote post or held incident | Read remote posts/status, never blind resend; bounded polling | Operations |
| Metrics collector | Published variant at +1h/+24h/+72h/+7d (30d optional) | Raw and normalized snapshots with availability reason | Read-only analytics scopes; rate-limited and replayable | Analyst |
| Insights & experiment planner | Monday 10:30 IST; mature comparable snapshots | Evidence-linked weekly report, 2 hypotheses, next plan changes | Read metrics; write proposed reports only; 1 report + correction | Analyst |
| Community triage | Twice daily; platform comments | Quiz answer summary and suggested replies for manager review | Read-only comment access; no automatic replies; 1 digest/run | Community manager |
| Health & budget sentinel | Job events and daily account check | Spend/token/queue/expiry alerts; optional generation pause | Read telemetry; may disable generation/publishing, never enable them | Administrator |

No agent may install tools, change its permissions, alter the claims register, approve content, change production secrets, spend beyond the configured ceiling or enable live publishing. Notification destinations must be configured and authorized; the plan alone does not send Slack messages.

## 5. Durable data model

All mutable entities have UUID, tenant/brand ID, created/updated timestamps, creator and revision. Enforce foreign keys and unique constraints. Calendar dates are local display values; execution timestamps are UTC with `timezone='Asia/Kolkata'` retained.

- `brandProfiles`: logo assets, typography/palette, tone, negative rules, approved-claim IDs, voice/character version, publishing policy.
- `claims`: exact claim, evidence URL/file, approved by/time, valid date range; expired claims block the revision.
- `characters`, `voiceProfiles`, `locations`: reference asset hashes, provider IDs, consent/provenance record, approved version, allowed shot ranges, expiry/rights constraints.
- `campaigns`, `contentPillars`, `calendarSlots`: date range, objective, audience, cadence, format, learning show, level, episode ID, platform/account, slot, skipped reason.
- `wordBank`: normalized word, meanings, part of speech, example, level, reserved/used dates and episode; transaction prevents concurrent duplicate reservation.
- `episodes`: brief, teaching target, hooks, timed script, show, topic, level, scene, daily word, total planned duration, current revision.
- `contentVersions`: immutable JSON snapshot of script + every platform variant; approved hash; canonical schema version; frozen source references.
- `platformVariants`: platform/account ID, immutable caption and alt text, media IDs and hashes, cover/crop, link/UTM, disclosure, scheduled UTC, platform state, platform ID/permalink, last error.
- `mediaAssets`: immutable object key/version, SHA-256, MIME, dimensions, duration, transcript/subtitles, provider job ID, actual cost, rights, QA result. Replacing bytes creates a new asset.
- `approvals`: version ID/hash, authenticated human ID, role snapshot, decision, timestamp, expiry, reviewer notes, decision channel. Unique approval per version and reviewer policy.
- `jobs`, `outbox`, `publishAttempts`: state, attempt, account/variant/version, lease owner/expiry, fencing token, request fingerprint, remote request/container/upload ID, safe retry flag, last reconciliation.
- `socialAccounts`: external identity, permissions/capabilities, encrypted credential reference, expiry, connection status, last successful health probe. Never expose raw token fields in list APIs.
- `metricSnapshots`: variant, observation age, raw payload, API/metric version, normalized values, nullable availability status and reason.
- `experiments`, `insightReports`: hypothesis, single changed variable, assigned posts, comparison cohort, minimum observation window, findings, uncertainty, proposed changes and human acceptance.
- `auditEvents`: append-only actor/action/entity/version/hash, trace ID, before/after summary, time; secrets excluded.

Prefer separate content state (`draft`, `qa_failed`, `in_review`, `changes_requested`, `approved`, `revoked`, `rejected`) and delivery state (`unscheduled`, `scheduled`, `uploading`, `publishing`, `published`, `retry_wait`, `unknown`, `failed`, `skipped`, `cancelled`) per variant. An episode can be partially published without falsely marking every platform successful.

## 6. Approval and publication invariants

1. A human reviews all platform previews, final audio/video, captions, links, disclosures, exact accounts and schedules. Bulk review lists every selected version and requires explicit confirmation; checking a “week” box never approves unseen later content.
2. Hash a canonical, versioned JSON document with stable key ordering: episode/version ID; platform/account IDs; captions/alt text; media **SHA-256** and object versions; cover/crop/subtitle assets; CTA URL; AI/synthetic-media disclosure; scheduled UTC and timezone. Hash the immutable bytes, not an expiring storage URL.
3. Approval records authenticated human identity, role, timestamp and that exact hash. Agent identities cannot call the approval endpoint. Backend RBAC applies even if UI buttons are hidden.
4. Every subsequent edit, media replacement, schedule/account change or disclosure change creates a new version and invalidates approval for that target. Old publication intents are cancelled or superseded.
5. In one database transaction the scheduler locks the revision/variant, verifies active approval and current version, creates a unique intent `(account, variant, revision)` and writes the outbox event. A unique constraint prevents duplicate workers enqueueing it.
6. Worker acquires a lease with fencing token. Before upload and again immediately before the irreversible publish call it verifies current revision, approval, scheduled time, local policy, hash, account readiness, kill switch and dry-run. A compare-and-swap transition on revision/lease prevents stale workers from publishing.
7. An edit arriving during upload revokes the intent; uploaded but unpublished media is abandoned/cleaned when supported. Once an external publish request has already been accepted, no database transaction can recall it. Mark cancellation `too_late`, reconcile remote state and show a manual removal action with audit. Do not promise a kill switch can undo an in-flight request.
8. Environment flag **and** persistent admin switch must both allow publishing. Default is disabled, with `DRY_RUN=true`. Dry-run uses mocked/sandbox adapters and writes a simulated outcome, never a real published ID. Generation/media API charges are separately gated; dry-run must not imply free generation.
9. Persist upload/container IDs and request fingerprints before each step. Reuse the same upload when safe. Respect provider idempotency only when actually supported. A network timeout after a create request becomes `unknown`, not automatically `failed`: query remote state or hold for operator reconciliation. Exactly-once external delivery cannot be guaranteed by an internal UUID alone.
10. Retry confirmed pre-publication transient failures with bounded exponential backoff and jitter; honor `Retry-After`. Permission errors require reconnect; validation errors return to editing; ambiguous create responses require reconciliation. Never retry a published variant because a sibling platform failed.
11. Publishing window defaults to 15 minutes. A confirmed safe retry outside that window becomes missed-slot review; no overnight surprise post. Editing the slot requires renewed approval. Queue catch-up after outage does not flood accounts.
12. A thread is multiple remote writes. Persist every child ID; on interruption display `partially_published` and resume only verified missing children. Do not repost the root.

**Required implementation tests:** unapproved and bot-approved content rejected; changed caption/media/account/time/disclosure invalidates hash; simultaneous scheduler ticks create one intent; stale lease cannot send; edit during upload blocks publish; kill/dry-run gates; timeout leads to unknown and no blind resend; expired credentials; container failure; one-platform partial success; thread partial success; no API metric vs zero; DST-independent IST conversion and midnight dates; revoked reviewer role; forged notification callback; budget exhaustion and webhook replays. Adapter contract tests use captured sanitized fixtures; one owner-approved live smoke test per connected platform precedes launch.

## 7. Manager interface and acceptance criteria

Responsive desktop-first UI with keyboard navigation, accessible status text beyond colour, date/time clearly labelled IST, empty/error/loading states, and filtered CSV/export. Any prototype data must carry a persistent **demo/simulated** label. Prototype approval is local UI state, never production authorization.

| Screen | Manager actions | Acceptance criteria |
|---|---|---|
| Overview | See today's release plan, remaining approvals, errors, budget and connections | Every number drills into matching records; live and simulated data cannot mix; last refreshed visible |
| Calendar | Month/week/list, platform/status/show filters, inspect episode, draft reschedule, export | All 31 dates; weekday/weekend slots; collisions flagged; reschedule explains approval reset; UTC/IST round-trip correct |
| Studio | Edit brief, choose hook, inspect Sia/set, preview audio, timed script, subtitles, renders, variants | Shows actual media or “not generated”; voice missing blocks render; regenerate makes new version; no invented playback |
| Approval queue | Side-by-side platforms, play every cut, notes, request changes, reject, approve selected versions | Human role required; hash/version visible; blocked QA cannot pass; bulk list is explicit; full history retained |
| Publishing queue | See per-account states and attempt timeline; retry safe failure, reconcile unknown, cancel | Partial success explicit; retry disabled on unknown until reconciled; kill switch visible; dry-run outcome unmistakable |
| Agent control | Contracts, latest run, input/output, cost, retry budget, owner, pause/run draft | No agent approval control; cannot enable live publishing through agent prompt; blocked dependencies explained |
| Reports | Date/platform/show/level/hook filters; comparable leaderboards, metric definitions, exports | Missing metrics show N/A with reason; freshness/age and sample size displayed; source post linked; no synthetic results labelled real |
| Experiments | Hypothesis, candidate posts, controlled variable, maturity, proposed changes | Observational findings labelled association; changes remain proposals; insufficient data state supported |
| Asset library | Sia board, voice version, exact logo, location sets, media, rights, word history | Version/provenance visible; replacing approved asset invalidates dependent drafts/approvals as applicable |
| Integrations | Connect exact accounts; display scopes, expiry, health; test read access | Never display token; publishing scope confirmed; destination identity checked before approval; revoked account paused |
| Settings & team | Roles, cadence, claims, budgets, alerts, retention, dry-run and publishing controls | Restricted admin actions audited; enabling live requires authenticated explicit action and readiness checklist |
| Activity & incidents | Search audit trail, job traces, incidents, exports | No secret leakage; actor and exact content revision traceable end to end |

Suggested API surface: `GET/POST /api/calendar`, `POST /api/calendar/generate`, `GET/PATCH /api/episodes/:id`, `POST /api/episodes/:id/versions`, `POST /api/versions/:id/qa`, `POST /api/versions/:id/submit`, `POST /api/versions/:id/approve`, `/request-changes`, `/reject`, `GET /api/publishing`, `POST /api/intents/:id/cancel`, `/retry`, `/reconcile`, `GET /api/analytics`, `/reports`, `/agents/runs`, `/assets`, `/accounts`, `POST /api/accounts/:id/connect`, `/disconnect`, `POST /api/settings/publishing`. Mutations require authenticated role, CSRF protection, schema validation, expected revision and idempotency request key. Provider callbacks require signature verification, timestamp/replay validation and deduplication.

## 8. Accounts, roles and setup

| Role | Allowed | Not allowed |
|---|---|---|
| Owner/admin | Team, credentials, budgets, claims, approved identities, kill switch, live-mode activation | Bypass approval/hash gate |
| Manager/creator | Calendar and copy, drafts, media requests, review submission, safe retry/manual export | Grant own role, reveal tokens, auto-approve |
| Human approver | Final review and decision for authorized accounts | Change approved bytes without creating revision |
| Analyst | Read metrics/reports and propose experiments | Publish or alter media |
| Publisher service | Execute valid intents on scoped account | Approve, edit creative, add account |
| Generation service | Read brand constraints, create drafts/assets within budget | Access social tokens or publication endpoint |

A small team may give the manager a separate approver permission, but every approval must still be deliberate and auditable; stricter two-person review can be enabled per campaign. No password sharing. OAuth must display the destination account name and ID. Verify a professional Instagram account and Facebook Page connection appropriate to the selected Meta login path, relevant approved permissions, business/app ownership and app-review status. X requires a developer app and a currently available write/media/metrics entitlement; verify real account access and cost before committing launch dates. Use the separately researched official API notes for exact current scopes and supported metrics.

Setup inputs: owner account access; OAuth callback domain; hosting/storage/database; secret manager/encryption key ownership; production error-monitoring destination; permitted Sia source and voice; exact claims and CTA URL; real location list/photos if wanted; prior 90-day word history; past social metrics; monthly generation/API budget; named manager/approver/back-up approver; notification destination authorization.

Credentials are encrypted with authenticated encryption and managed keys, separately scoped per environment. Rotate/revoke tokens; alert before expiry when an expiry is known; refresh only when supported. Alert on missing scopes and revoked access. Redact logs, use least privilege, verify webhooks, rate-limit management endpoints, back up the database, enable restore testing, and set media/audit retention policies. Do not store arbitrary user comments or DMs unless needed for an explicitly scoped workflow.

## 9. Production quality gates

Before rendering: instructional correctness, single idea, correct ❌/✅ markers, readable Hinglish, supported claims, unique word, word count against actual voice duration and the learner repetition pause. A 40-second target is not permission to speed speech unnaturally; trim script or split into a future lesson.

Before review: compare face/hair/outfit against the supplied board, check only Sia appears, one approved voice, lip sync and pronunciation, stable hands and text, audible clean speech, licensed optional music quieter than speech, no unsafe crop. Prefer no music by default; use one approved licensed instrumental bed if desired. Check captions manually for both English teaching accuracy and Hindi romanization. Retain clean audio, final mix, subtitle file, cover, transcript and editable project.

Export 1920×1080 master when supported by the source; 1080×1920 portrait versions with critical content out of the bottom 20% and right 12%; inspect the actual platform preview before approval. October X releases are text posts. An optional future X video cut would be at most 45 seconds under this editorial template, independent of higher account limits; it is not part of the scheduled October totals. Do not simply crop horizontal footage if it cuts off Sia; compose/reframe deliberately. Official logo appears unchanged on the end card. Final format limits come from the chosen API version and account capabilities, and are validated by adapters.

## 10. Reporting that answers “what works?”

Collect immutable snapshots at +1h, +6h, +24h, +72h, +7d and +30d when supported. Backfill transient failures; mark missing scopes, unavailable metric, privacy threshold and delayed collection distinctly. November collection continues for October posts. Account metrics are daily; do not attribute all follower growth to a particular post.

Report views/reach/impressions as separate platform-defined metrics. Compare posts at the same age (usually 72h) on the same platform and comparable format; never mix live 1h numbers with 7d totals. Compute engagement-by-reach only where reach and the same numerator components are available; for X without reach use clearly named engagement-by-impressions. Save/share rates require that platform's exposed components. Completion and three-second hook rate require explicit numerator and denominator metrics; if absent show N/A, not an estimate. Average watch percentage is watch time divided by duration only when the source definition supports it and may exceed 100% for loops. Export raw definitions alongside normalized metrics.

Performance index = mature post's chosen primary metric / rolling 30-day median of comparable posts ×100. No index if median is zero or fewer than 10 comparable mature posts exist. Initial October dashboard says **building baseline** if historical data is absent. Winners ≥130, normal 70–<130, underperforming <70 are triage heuristics, not significance tests. Show sample count, observation window, metric freshness, audience/paid vs organic status and unavailable fields beside every chart.

Monday 09:00 reports identify top/bottom five comparable mature posts, strongest saved/shared topics, Sia studio vs location performance, and 2–3 specific hypotheses. “Hook A is associated with more views” is acceptable; “the café caused growth” is not. The first 5 October report is a launch check, not a defensible show ranking. Evaluate shows only after three mature weekly cycles. Keep 20% experiments and limit next-cycle mix/slot changes to ±10 percentage points after human review. Do not disrupt grammar prerequisites to chase one viral post.

Use consent-aware campaign UTMs, e.g. source instagram/facebook/x, medium organic_social, campaign sia_oct_2026, content episodeID_variant. Link clicks and app events require actual web/app analytics integration and agreed attribution windows. Bio-link visits are not automatically attributable to a specific Reel. Track click → landing → signup where technically observable; report unattributed traffic and avoid claiming organic social causally generated installs. No cross-platform deduplicated reach without a valid identity method.

## 11. Cost, reliability and incident operations

Configure hard ceilings before generation. Illustrative **planning envelope, not a provider quote**: reserve separate limits for scripts, speech, video, render/storage/egress, platform API access and monitoring. Monthly estimate = 31 × (video cost/episode × expected attempts + voice + rendering) + extra story assets + API access + hosting. Example attempt factor 1.5 produces roughly 47 episode generation attempts; the real rate must come from vendor billing. Adapting one source episode into IG and Facebook releases and supporting story frames should not require independent avatar generation for each derivative. Show forecast, committed provider jobs and actual invoiced cost separately.

At 70% budget notify; at 90% hold optional experiments; at 100% stop new paid generation and require owner budget change. Do not stop already-approved publishing merely because a generation budget is reached. Apply per-agent per-run and monthly caps, concurrency 1–2 for media initially, 20-minute poll deadline or provider-specific configured deadline, and at most two regeneration attempts before human review. Cancel providers only where supported; cancellation may still be billable.

Track queue lag, due-to-published delay, unknown outcomes, failed rate, API rate-limit headroom, token health, render success, approval lead time and cost/approved episode. Goals: no unapproved external posts; no deliberate duplicate retries; alerts within five minutes of confirmed publishing failures; scheduled post within its 15-minute delivery window when dependencies are healthy. These are acceptance goals, not a promised vendor SLA.

| Incident | Immediate action | Recovery |
|---|---|---|
| Token expires/revoked | Pause affected account; alert owner | Reconnect, verify account/scopes; reapprove changed slots |
| Provider video drift | Block QA and generation beyond retry cap | Manual edit or regenerate reviewed beat; new asset/version |
| Budget hit | Stop new paid generation | Use approved assets/manual production; owner changes ceiling |
| Platform outage | Retry only known-safe operations in window | Mark missed; reschedule with approval or use manual handoff |
| Publish response lost | Mark unknown; suppress retry | Reconcile remote ID/feed/container; operator confirms before retry |
| IG published, FB failed | Preserve IG result | Repair FB only; keep per-platform audit |
| Incorrect post already live | Pause related release batch, show exact links | Human authorizes remote edit/delete; revised content requires approval |
| Kill switch | Prevent new publish calls; flag in-flight uncertainty | Reconcile in-flight jobs before explicit re-enable |
| Database/queue outage | Stop publishers if final gate unavailable | Restore state, replay outbox, reconcile external writes; never assume queue retry is safe |

Manual fallback: export exact approved video/image/caption/disclosure, account and intended IST slot into a handoff packet. Manager publishes using native applications, then records post ID, permalink, actual time, and approval version. Automatic intent must first be cancelled/held so both routes cannot fire. Human upload changes any approved creative only through a new review version. Import native analytics CSV with source and date when APIs lack access. October can run manually while API review is pending; do not label this automated completion.

## 12. Delivery roadmap: 21 September–1 October 2026

| Date | Work and exit condition | Accountable owner |
|---|---|---|
| Sep 21–22 | Approve calendar direction; collect access/provenance/voice/locations/claims/budget; inspect repository; submit platform app requests immediately | Owner + manager |
| Sep 23 | Standalone manager UI, data schema, brand/asset registry, role model; seed all October records | Engineering + manager |
| Sep 24–25 | Versioned studio/review flow, deterministic hashes, word bank, provider contract; 10-second Sia identity/voice test for human approval | Engineering + creative |
| Sep 26 | Produce and QA first seven lessons after identity approval; render full platform previews; adjust timing from actual speech | Producer + editor |
| Sep 27 | Manager review, changes and approved queue; dry-run publisher, outbox/lease/race tests, manual export | Approver + engineering |
| Sep 28 | Account OAuth/scope checks; adapters and one authorized live smoke test per ready platform; collect IDs and confirm duplicate defense | Owner + engineering |
| Sep 29 | Metrics mapping, simulated-vs-live labels, reports, incident drill, token/budget alerts and restore check | Analyst + operations |
| Sep 30 | Go/no-go: seven approved days, working accounts, test evidence, backup manager, budget, live-mode activation by owner | Owner |
| Oct 1 | Start only ready platform adapters; use approved manual exports elsewhere; monitor launch and record actual outcomes | Manager + operations |

This is an aggressive rollout target, **not a guaranteed production date**. Platform review can take longer; missing Sia voice/rights or unready approved assets can block media. Prioritize the manager UI, October calendar, review packets and manual scheduling fallback; finish approved automated adapters incrementally. Production completion requires real integration and test evidence, not screen count.

## 13. Readiness and traceability

| Requested outcome | Planned deliverable | Proof before claiming complete |
|---|---|---|
| Full October plan | 31 dated teaching packages with audio/video/variants and cadence | Calendar date audit, unique words, daily show alignment |
| Only Sia in video | Character bible, location rules, voice registry, render QA | Human-approved identity test and every final clip reviewed |
| Sia teaches at locations | Approved virtual/real set library and location-themed lessons | Correctly labelled set/provenance, no other people/voices |
| Weekday/weekend scheduling | IST calendar and separate cadence rules | UTC round-trip, collision and missed-slot tests |
| Planner and specialized agents | Contracts, owners, bounded permissions, budgets | Logged runs with structured outputs and failure handoffs |
| Approval agent | Routing/checking agent + mandatory human gate | Bot-denied test, immutable hash, revision/race tests |
| Instagram/Facebook/X publishing | Account-scoped platform adapters | Authorized smoke test, remote IDs, partial-failure/reconciliation proof |
| Independent social manager | Full operating screens and manual fallback | Manager completes draft→review→schedule→report without developer |
| What works/doesn't | Mature comparable analytics, weekly reports, experiments | Real snapshots, definitions and missing-data handling |
| Fully automated system | Durable workers, telemetry, account health and recovery | End-to-end production evidence plus incident drills |

### Remaining decisions that do not block planning

Real SpeakX location names and images; approved voice/source video; app/download CTA and claim register; who approves; monthly budget; current account history and word usage. Until supplied, keep neutral virtual sets, no unverified claims, draft voice placeholders, initial IST test slots and visible connection/production blockers. No external post, consent record, credential or performance number is invented to make the interface look complete.

## 14. Location map management

The manager can upload a map image, pin teaching locations, assign a category and link each location to calendar lessons. The requested category codes are **FND, RET, HEA, EDU, OFC, RES, REC, TOU, TR, AIR, RLS, BUS, GOV**. Preserve these codes verbatim; friendly labels and the exact list of locations require the user's supplied taxonomy. The user has supplied Drive folder references for **15 illustrated Indian city maps**. Treat these as illustration sources, not surveyed geography or verified business sites. Fetch/inspect authorized source images before confirming map names, categories or pin placement; conceptual teaching pins remain pending that inspection. Preserve each source Drive folder/file reference in the map record. Do not invent geographic coordinates, addresses, real-business identities or map pins.

Manager flow: Assets → Maps → Upload image → name/version → confirm image rights → select category → click the image to place a pin → enter location ID/name and optional scene notes → save draft → review map/location → attach a location to an episode. Offer keyboard placement/nudge, pin list view, category filter, search, zoom, selected-pin details and explicit “unmapped” locations. Maps are background references for the manager; they do not imply that Sia has physically visited the place.

Store `maps` with map ID, name, immutable image asset/hash, revision, source Drive folder/file reference, rights, dimensions and approved state; `mapPins` with stable pin ID, map revision, location ID, category code, normalized `x` and `y` in [0,1], label and notes. These coordinates are relative to the uploaded image, not latitude/longitude. Rendering uses `x × displayedImageWidth` and `y × displayedImageHeight` after accounting for any letterboxing; never treat container coordinates as image coordinates. On replacing a map image, create a revision and mark existing pins for placement review; do not silently transpose pins to a different map. Validate duplicate location IDs, out-of-bounds values and missing category codes.

`locations` link to a map pin and include user-supplied scene assets, approved virtual/real designation, location rights/permissions, allowed props, exclusion rules and character-only framing. Episodes store the approved **location revision**, not merely a mutable name. Changes affecting final media create a new episode/review version. Production scenes must still contain only Sia and the approved voice, even if the source map or location photograph depicts other people. Do not use unapproved people from location imagery in rendered footage.

Add endpoints `GET/POST /api/maps`, `POST /api/maps/:id/revisions`, `GET/POST /api/maps/:id/pins`, `PATCH /api/maps/:id/pins/:pinId`, and `GET/POST /api/locations`; authorize manager edits and audit changes. Use signed uploads, file type/size validation and image decoding before acceptance. Production stores original image files in durable object storage and map/pin records in PostgreSQL with backup. Prototype uploads and pins may persist only in this browser; label that limitation, provide JSON export/import and do not call it shared team storage. Until each referenced Drive map is actually imported and inspected, show its reference/import-pending state with the 13 category codes; do not substitute a fabricated map. Pins identify conceptual lesson placement on these illustrated city maps, not verified physical premises.

Acceptance: upload survives intended persistence scope; resizing/zoom preserves pin alignment; all 13 codes selectable; map replacement flags pin review; location links appear in calendar/studio; filter never deletes data; export/import retains revision and normalized coordinates; manager can remove a pin without deleting the linked lesson; missing map or location asset shows a blocker instead of fabricating a scene.
