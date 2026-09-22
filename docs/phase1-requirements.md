# Phase 1: Complete Video Creation, Generation, Versioning and UAT

Continue building the “SpeakX Organic Growth OS” defined in the previous master prompt.

## 1. Phase 1 Scope

For now, do not build automatic publishing or direct posting integrations for Instagram, YouTube, Facebook, or X.

The current workflow will be:

**Content idea → Script → Script review → Video prompt → Video generation → Video review → Version changes → Approval → Download → Manual publishing**

The SpeakX team will download the final approved video and manually upload it to the relevant social media platforms.

Everything up to and including final video generation, approval, and download must work completely end to end.

Do not show unfinished or non-functional publishing buttons. Instead, show the final status as:

**Approved and Ready to Download**

Optionally provide a manual publishing checklist after download.

---

# 2. Primary Phase 1 Objective

Before expanding the system, verify that it is fully ready to create the first real SpeakX video.

Conduct a complete end-to-end UAT covering:

* Creating or selecting a content idea
* Reviewing the strategic reasoning behind the idea
* Generating the initial script
* Editing the script
* Saving the script
* Creating Script V2, V3, and future versions
* Comparing script versions
* Restoring an older script version
* Generating a video from a selected script version
* Saving the exact video-generation prompt
* Generating multiple video versions
* Comparing video versions
* Linking every video to its source script
* Editing the script after video generation
* Generating a new video from the edited script
* Reviewing captions, voice, visuals, and lip-sync
* Approving a final version
* Downloading the approved video
* Retaining the complete history of ideas, scripts, prompts, videos, reviews, and approvals

Identify any missing requirements, broken flows, confusing UI, data-loss risks, generation issues, or incomplete states. Correct them before declaring the system ready.

---

# 3. Script Workspace

Every content idea must have a dedicated Script Workspace.

The workspace must display:

* Content ID
* Working title
* Platform
* Target audience
* Content objective
* Funnel stage
* Video format
* Recommended duration
* Language
* Content pillar
* Search keyword
* Selected hook
* Full script
* Scene breakdown
* Dialogue
* Voiceover
* On-screen text
* Captions
* CTA
* Video-generation prompt
* Script status
* Script version
* Last edited by
* Last edited at
* Review comments

The user must be able to edit every important script field before generating a video.

Do not lock AI-generated text.

Provide clear actions:

* Edit Script
* Save Draft
* Save as New Version
* Duplicate Version
* Compare Versions
* Restore Version
* Approve Script
* Generate Video

---

# 4. Script Versioning

Every saved script must create or update a traceable version.

Use version names such as:

* Script V1 — Initial AI Draft
* Script V2 — Revised Hook
* Script V3 — Shorter Version
* Script V4 — Hinglish Variation
* Script V5 — Final Approved Script

For every script version, save:

* Version number
* Version name
* Complete script
* Hook
* Scene plan
* Dialogue
* Voiceover
* Captions
* CTA
* Video-generation prompt
* Language
* Duration target
* Editor
* Creation date and time
* Change note
* Review comments
* Approval status
* Videos generated from this version

When the user clicks “Save as New Version,” ask for an optional version name and change note.

Never overwrite an approved script silently.

If an approved script is edited, display:

> This script is already approved. Save your changes as a new version?

Default to creating a new version.

Users must be able to:

* Open any previous script version
* See the full content
* Compare two versions side by side
* See additions, removals, and replacements
* Restore an older version as a new current version
* Generate a video from any selected version
* Identify which script version produced each video

---

# 5. Script Quality Review

Before video generation, run a structured script review.

Check:

## Strategy

* Is the idea relevant to the selected audience?
* Does it address a real English-speaking problem?
* Is the content aligned with the SpeakX brand?
* Is the objective clear: reach, engagement, trust, conversion, or retention?
* Is the CTA appropriate for the funnel stage?

## Hook

* Does the first sentence create immediate interest?
* Can the audience understand the subject within two seconds?
* Is the opening visually strong?
* Is there a clear curiosity gap, problem, emotion, or promise?
* Does the video fulfil the hook without misleading the viewer?

## Retention

* Is unnecessary setup removed?
* Does something meaningful happen every two to four seconds?
* Are there pattern interrupts?
* Is the payoff delivered before attention drops?
* Is the script repetitive?
* Can any section be shortened?
* Does the ending feel complete?
* Can the ending naturally loop to the opening?

## Dialogue

* Does the dialogue sound natural when spoken aloud?
* Is the English suitable for the learner’s proficiency?
* Is Hinglish used naturally where relevant?
* Are sentences short enough for a short-form video?
* Does each character have a distinct voice?
* Are pronunciation risks identified?
* Are difficult names or words phonetically guided?

## Production

* Can the script be generated reliably?
* Are scenes too complex for the selected video model?
* Are the number of characters, locations, and actions realistic?
* Are visual continuity requirements clearly stated?
* Are lip-sync requirements explicit?
* Is all on-screen text spelled correctly?
* Can the video fit within the target duration?

## Brand and Safety

* Is the learner treated respectfully?
* Does the script avoid shaming accents or English ability?
* Are all claims supportable?
* Does it avoid fake learner results?
* Does it avoid copyrighted characters, music, footage, or logos?
* Does it avoid unsafe or discriminatory content?

Return:

* Script Quality Score out of 100
* Blocking issues
* Recommended improvements
* An improved version
* Approval recommendation

Do not prevent the user from editing manually. Block generation only for genuine security, consent, missing-data, or policy issues.

---

# 6. Pre-Generation Readiness
