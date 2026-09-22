# Script V5 Reel pilot — 22 September 2026

Source idea: SIA-2026-10-01. Script V5 ID: `4c5139b2-ab95-43d2-8160-387633ffbee2`; saved 22 September 2026, 22:25:39 IST. Script V4 ID: `64689456-7c58-489a-97d0-328af5a74474` remains preserved. Production uses the user's saved wording without accepting hook suggestions or creating V6.

Source evidence: Downloaded complete history (2), V5 UI, and immutable job snapshot. Site implementation version 13, source commit `1d8a1b678244029a12791df95194193c796b0f52`.

| Test | Expected | Actual | Status | Evidence | Required Fix |
|---|---|---|---|---|---|
| V5 exists and selected | Exact V5 source | V5 shown active, full script editable | Passed | Confirmation UI and history JSON | None |
| Earlier versions retained | V4 accessible | V1–V5 script records preserved | Passed | History export | None |
| Exact script in prompt | Complete V5, no V4 narration | V5 prompt includes exact full text | Passed | Production confirmation UI | None |
| Format lock | 1080×1920, MP4/H264/AAC stereo, >=30FPS | Locked contract displayed | Passed | Generate panel | Verify actual final file separately |
| Approved voice | Saved Sia Cartesia ID | faf0731e-dfb9-4cfc-8119-259a79b27e12 | Passed | Readiness response displayed in UI | Listen to final voice separately |
| B-roll plan | 2–3 relevant inserts | Three animated sentence inserts; only Sia voice | Passed | Editable production plan | Verify final timing/appearance |
| Prompt editing | Editable source directions and composition | Both fields editable, source edits passed to provider in covered test | Passed | UI + server submission test | None |
| Readiness | Stop before spending on any failure | Daily cap stopped generation; raised from3 to4 for one pilot, rerun passed | Passed | UI readiness result | None |
| Duplicate requests | No duplicate jobs/billing | Concurrent identical IDs yield one job in test; UI persists same request ID | Passed with Warning | Automated concurrency test | Live pilot uses a single paid submission |
| Earlier media retained | Failed and completed versions remain | V1/V2 failures and V3 fullV4 retained | Passed | Video history UI | None |
| Real generation | New video linked to V5 | Video V4 job d88c59d5-5d1f-49fa-9d7e-83da48ef046f; provider task 6d1d2e938cddb3cd3894f1a80d5020a6 rendering | Blocked | Pending job result | Complete generation |
| Downloaded full-file review | Complete playback from first to last frame | Pending | Blocked | None yet | Download and review completed file |
| Voice and lip-sync review | Natural approved Sia voice and acceptable sync | Pending audiovisual review | Blocked | No human sign-off | Review full final take |

Technical tests: 27 focused tests pass. Format checks parse actual standard/fragmented MP4 track declarations and timing; they do not replace decoding, full playback or human quality review.

The generation source is Kling Avatar Standard, reframed/upscaled during final composition to1080×1920. This is not a claim of native1080 source detail. No music is added, preserving clear continuous Sia speech. No social publication is part of this pilot.

Confirmed job snapshot: complete script and full immutable scriptSnapshot exactly match saved V5. Narration 16.96s. B-roll actual timing 2.759–4.959s, 7.783–9.983s, 10.683–12.883s. Ten caption cues span0.10606459–16.84s and exactly preserve the script words/punctuation. Refresh recovery retains the same job/provider task.
