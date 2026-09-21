# SpeakX Organic Growth OS — October 1–30, 2026

This is the upgraded operating plan and interactive manager application. Thirty days only. No remaining 60-day calendar or paid campaign is included. Dates and organic-only scope are owner-confirmed. Sia's commercial-use rights are owner-confirmed.

## Working now

- 30 production packages, 10 flagships, three hooks per episode, complete Sia scripts, scene timings, shot/edit/caption instructions and editable generation prompts.
- Four channel packages: YouTube Shorts, Instagram, Facebook and X. Thirty three-frame Instagram Story sets. 90 primary video placements +60 X text posts +30 Story sets =180 planned units or240 individual posts/frames. These are planned, not remotely scheduled.
- 19 studio lessons,11 location lessons;5 one-second map reveals after the opening hook. Maps are conceptual settings, not verified geographic business addresses.
- Eight personas,17 editorial pillars, six researched competitors, four channel playbooks, organic growth loops, offer/attribution framework,12 experiment briefs, weekly and30-day reviews.
- Private server-backed planning storage, conflict detection for overlapping saves, immutable production snapshots, parent-version links, comparisons, audit events, map pins, idea backlog and export.
- Import validated normalized JSON observations, preserve missing values, derive ratios with explicit denominators, compare matched cohorts and plot numeric retention curves. Retention findings are hypotheses with evidence and suggested edits. A screenshot must be transcribed; automatic image-to-data extraction is not implemented.
- Provider connection readiness and real server adapters for Cartesia speech and Kie Infinitalk presenter drafts. Keys never enter frontend assets or exported prompts. Jobs are durable and idempotent per version/scene, have a daily cap, and hold uncertain outcomes rather than blindly incurring another charge.

## Connection and production gates

Kie key and Cartesia Sia voice ID are still awaited. The earlier Cartesia key has not been tested or stored in this application. Configure runtime secrets through the site's server environment; do not paste secrets into script/prompt fields. Confirm the API version and voice with a10-second test. Set a daily production limit and explicit generation enable flag after validating the integration. No paid generation was run during this delivery.

A clean single-person Sia reference frame is required for each setting. The supplied character board contains multiple faces and typography and is not a suitable direct presenter input. Upload an approved portrait frame in Video studio. Location scenes need an approved Sia-on-location frame; the map is a separate brief overlay.

The Kie audio-driven adapter produces a presenter draft. It does not implement deterministic caption burn-in, map inserts, multi-scene assembly, logo overlays or an export-quality1080p master. Those finishing steps require a rendering worker (e.g. controlled FFmpeg pipeline) connected to stored Kie media. Generation is accurately labelled as a draft. Final-media approval is blocked until the renderer, quality checks and final-media storage are connected. Draft SRT timing is proportional to the plan, not forced alignment.

Jobs currently advance through authenticated manager requests and may be resumed from the studio. Unattended scheduling, callback verification, durable background consumers and reconciliation must be connected before calling the system fully automatic. No recurring automation has been silently installed. Agent cards describe contracts and readiness; toggles configure the plan, not independent running agents.

Social publishing and automated metric ingestion are not connected. They need official OAuth application credentials, channel/Page IDs, approved permissions, account eligibility, refresh-token handling and provider/API-specific verification. Browser login is useful for an audit; it is not an OAuth integration. No account tokens have been extracted from Chrome.

The site remains private. Sharing it with a manager requires the manager's account identity, site access and a server role. Owner bootstrap is allowed only within the private hosting access boundary; other identities are rejected unless explicitly provisioned. No manager has been invited yet. Do not make the site public without an authentication/access review.

## Thirty-day operating cadence

Before October1: verify social identities, preserve existing assets, establish organic-only baseline, approve usage claims, connect providers, render10-second identity/voice test, validate final exports, complete publisher sandbox tests, then approve week1.

Each production batch: planner reserves topic/word → writer prepares one teaching point → language reviewer checks accuracy → director chooses studio/location → Cartesia creates voice → duration/pronunciation QA → Kie creates Sia-only shots → renderer adds captions/map/brand → machine QA → manager approval of exact media hash → scheduler dispatches → publisher records receipt → collector snapshots24h/72h/7d → analyst proposes one test → manager updates future briefs.

Daily09:30: inspect exceptions and comments.10:00: approve the next production batch.10:30: check today's due slots and previous receipts. After posting: verify availability and metadata, not just an accepted API response. Next morning: review errors and early signals without premature winner decisions.

Monday Oct5/12/19/26 at10:30IST: review matched cohorts, median watch metrics, saves/shares/follows, qualified clicks, cost, failures and comments. Assign one owner and deadline to each Stop/Start/Continue/Scale/Retest action. Oct30 at17:00IST: closeout; data for the final posts will still be immature, explicitly label that limitation.

Week1 establish baseline and production reliability. Week2 test hook clarity. Week3 retest strongest learning needs and improve the profile-to-landing path. Week4 consolidate repeatable patterns and prepare a measured continuation proposal; no automatic paid boost.

## Honest automation contract

State machine: Idea → Research → Script → Review → Generate → Edit → Approve → Schedule → Publish → Analyze → Learn → Repurpose. Only implemented transitions are clickable as completed actions. Planned or disconnected stages remain held.

Inputs: approved brand, persona, topic, language level, format, script, voice, reference image, rights, budget, platform limits. Output: immutable version with assets, checks and audit records. Any content change creates a new version and invalidates its previous approval. Retrying uncertain generation/publishing requires reconciliation; never simply submit again.

Missing analytics are null. Post-level observations cannot be synthesized from an account total. Do not combine organic and paid observations, differing post ages or different view definitions. Summed post reach is not unique campaign reach. Aggregate link taps/profile visits is not unique-person conversion. Revenue requires event-level or trusted aggregate attribution evidence; assisted/view-through/direct/unattributed are separate.

## Verified account observations

September21: Instagram @speakx_ai profile601posts, account insights107,120followers. Last30days excludingtoday:97,029,594views,30,256,310estimatedviewers,207,751interactions,187,254accountsengaged,68,205profilevisits,1,199external-linktaps. Instagram's Info explicitly includes ads in views. Organic share is unknown. Ratio1199/68205=1.758%; not deduplicated user conversion. Top-content card counts and account/ad scope need reconciliation before comparing.

Facebook /speakxai:213Kfollowers displayed (rounded), public page only. X @SpeakxOnX:54posts,8followers,51following at initial observation. YouTube @speakx_ai linked from the official website; private analytics not verified. These observations support different starting strategies across channels, not a universal zero-audience launch.

Instagram's bio recommends15minutes/day, Facebook/X10minutes/day. Align the usage promise to the product owner's approved claim. Use no guaranteed fluency outcomes. Existing ads were observed only; none were changed.

## Engineering handoff

Source UI: web/. Server: server/worker.js. Build embeds private assets in a Worker;D1 holds structured state and R2 holds media. Schema:db/schema.ts with generatedDrizzle migrations. Local preview uses separate localD1/R2 and a localhost-only test identity. Production uses hosting-authenticated headers and server role checks. Static browser state from the prior prototype is not an authoritative database.

Required next adapters: social OAuth +publish/insights; scheduler/queue consumer; speech timing/forcedalignment and caption renderer; finalmedia validation; signed callback handling with provider-side verification; granular member provisioning UI; analytics export normalization per platform. Add monitoring on stalejobs,credentialexpiry,spend,duplicateattempts,storageerrors and publishstatus. Test rollback, recovery and accountdisconnect before launch.
