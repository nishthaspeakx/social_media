# Manager guide — SpeakX Growth OS

Open Command centre, then30-day calendar. Choose an episode and inspect its Brief: persona, three hooks, the chosen teaching target and native channel copy. In Script, revise the voiceover or individual scenes. Use the explicit synchronization button when changing whole scripts. Rebuild the prompt after substantive scene changes, then inspect and edit it.

Save a new version with a change note. Versions are snapshots, never overwritten. Versions tab compares script/prompt/scene settings and identifies changed fields. Generate tab checks keys, voiceID and the reference frame. Generate creates a paid provider job only after server configuration and limits are enabled. An uncaptioned presenter draft is not ready for publishing.

Review tab approves a script plan separately from final media. Final media remains held until finishing and integrations are connected. Publishing tracker shows planned IST slots; no misleading “posted” status appears without a receipt.

Performance accepts normalized JSON with source, postID, platform, actual publication and observation timestamps, window, distribution and view definition. Download the schema first. Use null for unavailable fields. Never enter a made-up zero. Account-level observations appear separately from post performance.

Retention lab plots timestamps/percentages and proposes hypotheses. Weekly review uses selected platform/window and matched cohorts. Record decisions with owners/deadlines. Experiments holds at most three active tests. Recommendations explains evidence or marks cold-start assumptions and can create a backlog brief.

Changes persist to the private workspace. If another manager saved first, the system holds your save. Export your draft using Connections → Export workspace backup, reload, and merge deliberately. Media/version saves are separate from planning records.

Connections shows what is still missing. Keys are configured as server secrets; never paste them into prompts. The site is private and no other manager has access until explicitly provisioned.

## Store keys and run one Sia test

Open Connections. Only the workspace Owner can use provider setup.
1. Enter Kie.ai API key, Cartesia API key and Sia's Cartesia voice ID. The current default Cartesia API version is 2026-08-14.
2. Tick “Allow one short test video” if you want to enable the test, then Save secure settings. Saving does not send a generation request. Blank key fields preserve saved keys on later edits.
3. Click Check saved connections. This reads Kie credit balance and Cartesia voice accessibility; it does not generate media. Both checks must pass.
4. Click Prepare 10-second Sia test. Upload a clean portrait of Sia, not the multi-face character board. Confirm the reference review, then Save new version.
5. Click Generate video. This uses provider credits for Sia's voice and one Kie presenter job. Keep the studio open as it advances and checks progress. If closed, resume the same job from Generation history.
6. Play the audio and resulting video to check identity, pronunciation and lip sync. The result is an uncaptioned 720p presenter draft, not a final social export.

One test job is allowed. Repeated clicks on the same saved version reuse that job; saving keys does not grant another job. If a provider outcome is uncertain, the job is held for reconciliation instead of resubmitted. Social posting stays disconnected.

API keys are AES-256-GCM encrypted in the private D1 database. The encryption key is a separate hosting secret, never a browser field. Keys are only decrypted on the server for fixed provider endpoints. The app returns presence flags, connection results and the non-secret voice ID; never saved API key values. Do not rotate the hosting encryption key without migrating existing encrypted data.
