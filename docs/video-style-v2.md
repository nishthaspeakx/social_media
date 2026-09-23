# Video style v2: built for short-form reach

Changed on 23 September 2026 after the end-to-end UAT of the Script V5 pilot.

## What changed

| Area | Before | Now |
|---|---|---|
| Captions | One sentence per cue in a dark box, Arial | One to three words at a time. The spoken word is highlighted in SpeakX orange #FF4D00, teaching terms in gold #FFB61E. Figtree 800 with a dark outline. |
| Inserts | Two or three full-screen slides were mandatory, cutting Sia away | Optional. New `text-overlay` inserts sit on top of Sia with a red ❌ and strike, or a green ✅. Full-screen `teaching-card` inserts still work. |
| Loudness | About -10 LUFS. Platforms turned it down | Measured with ITU-R BS.1770 before rendering and normalized to -14 LUFS, with peaks kept under -1 dBFS. Values are saved in the export's render settings. |
| Presenter direction | "Warm, calm", fixed camera, small gestures | Energetic and expressive, with gestures on key words and never stiff. Updated in all 30 lesson prompts and the defaults. |
| Video model | Kling Avatar Standard only | Choose Standard or Kling Avatar Pro in the Generate tab. Pro gives more detail and uses more Kie credits. |
| Script review | Scored the broken V5 script 95/100 | A new Consistency category checks the scenes, hook, CTA, target length and example names against the spoken script. It also flags a second "Aaj ka word" topic and scripts over about 35 seconds. Any consistency failure caps the score at 70. |
| Video playback | No seeking; iPhone Safari could not play review videos | The media endpoint supports byte ranges and HEAD requests. |
| AI drafts | Old template | Mistake-first hook under 2 seconds, one idea, 15 to 30 seconds, ❌/✅ overlays, practice turn, comment CTA. |

## Lesson 1 rewrite

Hook: "Interview ki pehli line: Myself Riya?"

Script, 52 words, about 19 seconds:

> Interview ki pehli line: Myself Riya? Yeh galti mat karna. Myself akela subject nahi ban sakta. Sahi line: Good morning. I'm Riya. I've just completed my graduation. Ek baar aur: Good morning. I'm Riya. I've just completed my graduation. Ab aapki baari. Apna naam aur degree bolo. Comment mein apna intro likho.

The overlays are ❌ "Myself Riya?" and ✅ "I'm Riya. I've just completed my graduation." The presenter prompt directs Sia beat by beat.

## How to use it on the live site

After deploying this change:

1. **Re-finish the existing V5 take at no cost.** Open lesson 1, go to Generate, and open Captions & Final Video on the completed video. Click **Use Word-by-Word Captions**, then render. This shows the new captions and loudness without a new provider charge. The old full-screen cards stay, because they are part of that take's saved plan.
2. **Create Script V6 from the new lesson 1.** In the Script tab, open "Initial draft and AI assistance" and click **Create editable starter from brief**. Pick the office reference, review it, then click **Save as New Version**.
3. **Run Script Review.** The Consistency category should pass.
4. **Generate.** In the Generate tab, choose the video model, rebuild the prompt, and run the readiness check. Generate once with Standard and once with Pro if the daily limit allows. Finish both and compare them side by side in Final Review.

## Still to do

- The other 29 lessons still end with an "Aaj ka word" segment and use the old template. Script Review now flags this. Rewrite them in the lesson 1 style, by hand or with "Generate Initial Script with AI", which now follows the new structure.
- Sound effects on the ❌ and ✅ moments are not added yet.
- Final human review of voice, pronunciation and lip-sync is still required before approval.
