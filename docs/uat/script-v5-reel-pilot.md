# Script V5 Reel pilot — 23 September 2026

**Result: production pipeline demonstrated; final audiovisual approval pending.** A real Kie/Cartesia generation and two final edits were saved. Final Video 3 failed visual UAT and remains in history. Final Video 4 corrects its framing and passes the technical and sampled visual checks. It has not been approved for posting.

## Traceability

- Idea: `SIA-2026-10-01`.
- Saved Script V5: `4c5139b2-ab95-43d2-8160-387633ffbee2`, “Full lesson — office Sia”, saved 22 September 2026 at 22:25:39 IST.
- Preserved Script V4: `64689456-7c58-489a-97d0-328af5a74474`; all V1–V5 remain available. No V6 was created for this pilot.
- Generation Video V4 / prompt snapshot: `d88c59d5-5d1f-49fa-9d7e-83da48ef046f`.
- Kie task: `6d1d2e938cddb3cd3894f1a80d5020a6`, model `kling/ai-avatar-standard`.
- Cartesia voice ID: `faf0731e-dfb9-4cfc-8119-259a79b27e12`. Voice configuration is recorded; credentials are server-side.
- Final Video 3, retained visual failure: `163fafc4-8ea2-4e09-8f77-ff9c318211f3`.
- Final Video 4, current review copy: `271840c6-b317-4cec-a78f-299b5b7e4347`, saved 23 September 2026 at 00:03:50 IST.
- Deployed private Site version 15, implementation commit `9f816562ab169ecb912ec94dc51961600059bcde`. Environment revision 1 unchanged.

## UAT

| Test | Expected | Actual | Status | Evidence | Required Fix |
|---|---|---|---|---|---|
| Saved V5 selected | Generate from exact saved version | Confirmation displayed V5; immutable job scriptSnapshot equals saved V5 | Passed | Downloaded history JSON; generation UI | None |
| Editing and history | Edits create next version, previous versions retained | Immutable version actions, restore/compare and editable draft available; V1–V5 preserved | Passed | UI and automated version tests | None |
| Prompt and source | Editable full prompt, exact V5 | Full script, scenes, source instructions, captions, B-roll and export rules snapshotted | Passed | Production editor and job history | None |
| Hook review | Suggestions do not silently rewrite V5 | Three scored creative-estimate suggestions and Riya/Rina continuity warning; none accepted | Passed | Review panel | Optional editorial improvements must become V6 |
| Preflight | Stop paid generation on failures | Daily cap stopped pilot; increased from 3 to 4 for this single authorized test; readiness then passed | Passed | Readiness UI | No further paid retry authorized by this test |
| Idempotency | Duplicate click does not bill twice | Persisted request ID; concurrent identical requests produce one job in automated test | Passed with Warning | Regression test and one real submitted task | Live duplicate billing was not deliberately exercised |
| Progress and refresh | Job survives refresh | Same job and provider task recovered after refresh | Passed | Generation history | None |
| Real generation | Full source video and full narration | Kie completed one 17.333s source clip; Cartesia narration 16.96s | Passed | Downloaded raw MP4 and job metadata | None |
| Script duration | Preserve wording, disclose actual duration | Target was 45s; the exact saved script produces approximately 17s; no padding or rewrite | Passed with Warning | Voice duration and complete script snapshot | Write a longer V6 if a 45s lesson is required |
| Output format | 1080×1920 portrait MP4, H264/AAC stereo, >=30 FPS | 1080×1920, H264, AAC two channels, 16.9747s, average 53.59 FPS (variable frame rate) | Passed | ffprobe on downloaded Final4; server MP4 validation | None |
| Decode and playback | Complete MP4 plays to final frame | Full decode passed with original time base; browser ended=true at16.9414s without media error | Passed | FFmpeg exit0; playback DOM state | None |
| Download | Retrieve exact final MP4 | Browser pageAssets downloaded saved Final4 successfully; direct Chrome download did not yield a confirmed local file in this attempt | Passed with Warning | Bundled asset and local final MP4 | Approved-download UI should be exercised after human approval |
| Framing and continuity | No bars, distortion, extra people or generated lettering | Uniform portrait reframe with25% lower-source crop; face remains visible; lettering removed; only Sia | Passed with Warning | 1fps frame sheet covering0–16s and browser playback | Human real-time motion review remains useful |
| B-roll | Two or three relevant1.5–3s inserts, voice continues | Three2.2s animated teaching cards at2.759–4.959s,7.783–9.983s,10.683–12.883s; original uninterrupted voice track | Passed | Render metadata, frame sheet, audio graph | None |
| Caption completeness | All V5 words including CTA; <=2lines | Twelve cues from0.106–16.84s; exact saved words; captions continue over all cards | Passed | Caption transcript validation, draft JSON, frame sheet | None |
| Caption design | Readable, safe, highlighted terms | Bold white, dark backing, orange teaching terms, stable lower-middle position | Passed | Full timeline frame sheet | None |
| SRT | Editable subtitle file retained | Server export SRT stored and linked; local SRT saved from exact final caption draft | Passed | Final4 SRT endpoint and local file | None |
| Spoken accuracy and alignment | Exact spoken V5 and synchronized subtitles | Script sent exactly and timestamps retained; perceptual listening review not completed | Blocked | Script and timing data are not a listening sign-off | Listen to every line against SRT |
| Sia voice and lip-sync | Approved voice sounds natural and sync is acceptable | Correct configured voice ID and continuous audio confirmed technically; human judgment pending | Blocked | No fabricated human sign-off | Review pronunciation, voice identity and lip-sync |
| Music and ending | Clear speech, no abrupt cuts or unwanted end screen | No music; complete original narration, final CTA caption, no end card | Passed with Warning | Source audio preserved; complete file decode and frames | Listen to final audio transition |
| Failure retention | Failed version retained with findings | Final3 shirt-lettering failure comment saved; corrected Final4 is separate | Passed | Final review/version comparison | None |
| Final approval | Only approve after every required check | Final4 remains Needs video review; no social publishing performed | Blocked | Saved review comment and no approval record | Complete audiovisual review before approval |

## Files and reproduction

- `outputs/Sia-Script-V5-Reel.mp4`: downloaded Final Video4, current review copy.
- `outputs/Sia-Script-V5-Reel.srt`: editable twelve-cue transcript.
- `outputs/Sia-Script-V5-probe.json`: full actual-file technical facts.
- `outputs/Sia-Script-V5-review-sheet.jpg`: one frame per second,0–16s; unused tiles are black and are not video frames.
- `outputs/Sia-Script-V5-Final3-VisualFailed.mp4`: earlier failed edit, preserved.

All44 regression tests passed. Production build and generated Worker syntax check passed. Full-file decode uses `-fps_mode passthrough -enc_time_base:v 1:90000`; a default null muxer rounds variable-frame-rate timestamps and emits duplicate-DTS warnings, while preserving the original time base produces no decode errors.

Source footage is1280×720 and is uniformly cropped/upscaled in finishing.1080×1920 is the export resolution, not a claim of native1080 source detail. Source identity, audio and script are unchanged between Final3 and Final4. Both outputs and prior failed provider attempts remain accessible. No further provider charge was incurred for the correction.

The browser renderer requires a visible tab. Startup synchronization now starts source and voice concurrently and makes bounded video-only corrections; audio speed is never changed. Sustained stalls fail with timing diagnostics rather than silently saving an incomplete export. Final4 rendered successfully on the first attempt after this fix.
