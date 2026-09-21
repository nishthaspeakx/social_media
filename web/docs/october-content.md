# SpeakX —30-day production calendar

October1–30,2026 · IST · organic-only. All videos use Sia alone. Timings are editorial estimates; actual voice and final captions require QA.

30lessons,10flagships,19studio,11location,5maps.90primaryvideos+60Xposts+30Storysets=180plannedunits/240individualposts orframes.

The full JSON is authoritative for per-scene voice, captions and platform copy.



## 2026-10-01 · Introduce yourself in an interview

Baat-Cheet Thursday · First-job candidate · Discovery · Virtual interview room · 35.0s plan

### Hooks

- A (selected): Interview? Yeh do lines.

- B: My name is Riya.

- C: Naam ke baad kya?

### Exact Sia script

Interview? Yeh do lines. My name is Riya. My name is Riya. I am a student. Naam aur role apne hisaab se badlo. Bolke dekho: My name is Riya. Ab apna naam aur role badlo. My name is Aman. I am an engineer. Dono lines apne liye bolo. Aaj ka word: Introduce. parichay dena. Let me introduce myself. Apna introduction bolkar dekho.

### Production prompt

```text

Produce SpeakX episodeSIA-2026-10-01: Introduce yourself in an interview. Vertical1080×1920,target 35.0 seconds,maximum45seconds. Only Sia appears and speaks. Match the supplied character board exactly:Indian woman,mid-20s appearance,warm medium-brown skin,long centre-parted dark wavy hair with caramel ombré ends,dark brown eyes,defined brows,natural makeup,no jewellery,light heather-grey short-sleeve fitted mock-neck top. Use the approved Sia_v1 voice only;source/rights approval is still required. Warm,patient Hinglish;clear neutral Indian English;no invented or replacement voice.
PACE:Estimate140words/minute;natural140–165wpm Hinglish if the approved voice sounds clear. Never rush English pronunciation to fit. No recurring greeting,no long setup,no added filler.
SETTING:Virtual interview room. 0–2seconds Sia hook;2–3seconds one-second approved map cutaway under Sia’s answer audio;keep the English model visible and return to Sia. No other visible people,reflections,crowds or voices. No implied real-world visit without verified assets.
VALUE:Start the useful model at2.0seconds: My name is Riya.
GRAPHICS:Exact supplied SpeakX logo on end card only. Readable Romanized Hinglish subtitles. Every erroneous phrase,including a hook,has red ❌ WRONG from first appearance;correct models have✅. Silent cards are not spoken. Keep bottom20% and right12% clear. Map imagery must never cover teaching text.
AUDIO:Exact voiceover below,with stated silent practice holds. Soft original/licensed music under voice;at most one soft correction chime,no masked pronunciation.
EXACT SPOKEN SCRIPT: Interview? Yeh do lines. My name is Riya. My name is Riya. I am a student. Naam aur role apne hisaab se badlo. Bolke dekho: My name is Riya. Ab apna naam aur role badlo. My name is Aman. I am an engineer. Dono lines apne liye bolo. Aaj ka word: Introduce. parichay dena. Let me introduce myself. Apna introduction bolkar dekho.
SCENES:
0–2 seconds | VO: Interview? Yeh do lines. | EXACT CAPTIONS: Interview? Yeh do lines. | CARDS: ["Interview? Yeh do lines."] | SHOT: Eye-level chest-up Sia in Virtual interview room;immediate eye contact,no greeting or location tour. No map during the hook. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
2–4 seconds | VO: My name is Riya. | EXACT CAPTIONS: My name is Riya. | CARDS: ["✅ My name is Riya."] | SHOT: At2–3seconds show an approved one-second map-pin cutaway under continuing Sia audio,then eye-level Sia at Virtual interview room. Keep the English model in a separate safe text region throughout;the map must not cover it. | EDIT: No lead-in. Sia speaks the useful line immediately. Hold target text through any cutaway. | SILENT PRACTICE: 0 seconds.
4–6 seconds | VO: My name is Riya. | EXACT CAPTIONS: My name is Riya. | CARDS: ["TEXT ONLY: Tell me about yourself."] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
6–10.8 seconds | VO: I am a student. Naam aur role apne hisaab se badlo. | EXACT CAPTIONS: I am a student. Naam aur role apne hisaab se badlo. | CARDS: [] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
10.8–26.7 seconds | VO: Bolke dekho: My name is Riya. Ab apna naam aur role badlo. My name is Aman. I am an engineer. Dono lines apne liye bolo. | EXACT CAPTIONS: Bolke dekho: My name is Riya. Ab apna naam aur role badlo. My name is Aman. I am an engineer. Dono lines apne liye bolo. | CARDS: ["My name is Riya. I am a student."] | SHOT: Locked eye-level Sia;small encouraging nod;hold still for two-second learner repetition. | EDIT: Sia gives the transfer example, then holds silently for 5.1 seconds while the learner says their own version. No filler or greeting. | SILENT PRACTICE: 5.1 seconds.
26.7–31.0 seconds | VO: Aaj ka word: Introduce. parichay dena. Let me introduce myself. | EXACT CAPTIONS: Aaj ka word: Introduce. parichay dena. Let me introduce myself. | CARDS: ["Introduce — parichay dena", "Let me introduce myself."] | SHOT: Eye-level Sia with a compact word/meaning/example card beside her;no extra person or voice. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
31.0–35.0 seconds | VO: Apna introduction bolkar dekho. | EXACT CAPTIONS: Apna introduction bolkar dekho. | CARDS: [] | SHOT: Sia stays on screen with exact supplied SpeakX logo and one readable silent end card. | EDIT: Hold a silent end card after the practice action;no generic spoken sign-off. Specific silent next-episode tease:Kal: teen blocks se sentence banao. | SILENT PRACTICE: 0 seconds.
END: Deliver the complete answer today. Silent end-card text: Kal: teen blocks se sentence banao.. No cliffhanger or generic spoken sign-off. Measure duration;check Sia identity,voice,pronunciation,captions and safe zones. Deliver video,cover,caption track,transcript and QA;do not publish. Editable provider-independent prompt;no render generated.

```

### Native platform package

```json

{
  "youtube": {
    "title": "Interview Introduction in English | Sia’s 2-Line Practice",
    "description": "My name is Riya.\nSia shows the model first,then a brief Hinglish explanation.\nApna naam aur role do lines mein bolo.\nWord:Introduce — parichay dena; tell someone who you are. Let me introduce myself.\n#Shorts #SpeakX #EnglishPractice",
    "thumbnailCopy": "FIRST TWO LINES",
    "tags": [
      "interview introduction English Hindi",
      "Baat-Cheet Thursday",
      "Sia SpeakX",
      "spoken English Hinglish"
    ],
    "pinnedCommentDraft": "Try:Apna naam aur role do lines mein bolo. Model:My name is Riya. I am a student. Your own version can be different.",
    "scheduleIST": "18:30"
  },
  "instagram": {
    "caption": "Interview? Yeh do lines.\nMy name is Riya. I am a student.\nApna naam aur role do lines mein bolo.\n#SpeakX #EnglishSeekho #SiaSikhaatiHai",
    "coverCopy": "FIRST TWO LINES",
    "altText": "Sia in virtual interview room, teaching introduce yourself in an interview; captions show: My name is Riya. I am a student.",
    "scheduleIST": "19:30"
  },
  "facebook": {
    "caption": "Interview? Yeh do lines.\nMy name is Riya.\nApna naam aur role do lines mein bolo. SpeakX · Muh khol. English bol!",
    "title": "Interview Introduction in English | Sia’s 2-Line Practice",
    "scheduleIST": "20:00"
  },
  "x": {
    "morningText": "English tip: My name is Riya. I am a student. Today’s word: Introduce — tell someone who you are. Example: Let me introduce myself. #SpeakX",
    "eveningText": "Sia practice: Apna naam aur role do lines mein bolo. Model: My name is Riya. I am a student. #SpeakX",
    "morningIST": "08:30",
    "eveningIST": "19:00"
  },
  "story": {
    "timeIST": "13:00",
    "frames": [
      "Apna naam aur role do lines mein bolo.",
      "My name is Riya. I am a student.",
      "Try your own version;send a learning question if helpful."
    ]
  }
}

```

### Experiment

A task-led opening may help first-job candidate recognise relevance faster than hearing the model first;the model-first alternative may improve clarity.

The example names may distract from adapting one’s own role;explicitly invite replacement.



## 2026-10-02 · Build a subject–verb–object sentence

Sentence Banao Friday · Student starting spoken English · Discovery · Pale-blue studio · 38.3s plan

### Hooks

- A (selected): Sentence ke teen blocks.

- B: I read books.

- C: I books read?

### Exact Sia script

Sentence ke teen blocks. I read books. Pehle kaun, phir action, phir object. I read books. I: kaun; read: action; books: kya. Ek aur: She drinks tea. Aaj action aur object wale sentences banao. Bolke dekho: I read books. Ab read ki jagah watch try karo. I watch films. Subject pehle, action phir, object last. Apna example bolo. Aaj ka word: Habit. aadat. Reading is a good habit. Ab apna action jodo.

### Production prompt

```text

Produce SpeakX episodeSIA-2026-10-02: Build a subject–verb–object sentence. Vertical1080×1920,target 38.3 seconds,maximum45seconds. Only Sia appears and speaks. Match the supplied character board exactly:Indian woman,mid-20s appearance,warm medium-brown skin,long centre-parted dark wavy hair with caramel ombré ends,dark brown eyes,defined brows,natural makeup,no jewellery,light heather-grey short-sleeve fitted mock-neck top. Use the approved Sia_v1 voice only;source/rights approval is still required. Warm,patient Hinglish;clear neutral Indian English;no invented or replacement voice.
PACE:Estimate140words/minute;natural140–165wpm Hinglish if the approved voice sounds clear. Never rush English pronunciation to fit. No recurring greeting,no long setup,no added filler.
SETTING:Pale-blue studio. No map;Sia hook then direct English model. No other visible people,reflections,crowds or voices. No implied real-world visit without verified assets.
VALUE:Start the useful model at2.0seconds: I read books.
GRAPHICS:Exact supplied SpeakX logo on end card only. Readable Romanized Hinglish subtitles. Every erroneous phrase,including a hook,has red ❌ WRONG from first appearance;correct models have✅. Silent cards are not spoken. Keep bottom20% and right12% clear. Map imagery must never cover teaching text.
AUDIO:Exact voiceover below,with stated silent practice holds. Soft original/licensed music under voice;at most one soft correction chime,no masked pronunciation.
EXACT SPOKEN SCRIPT: Sentence ke teen blocks. I read books. Pehle kaun, phir action, phir object. I read books. I: kaun; read: action; books: kya. Ek aur: She drinks tea. Aaj action aur object wale sentences banao. Bolke dekho: I read books. Ab read ki jagah watch try karo. I watch films. Subject pehle, action phir, object last. Apna example bolo. Aaj ka word: Habit. aadat. Reading is a good habit. Ab apna action jodo.
SCENES:
0–2 seconds | VO: Sentence ke teen blocks. | EXACT CAPTIONS: Sentence ke teen blocks. | CARDS: ["Sentence ke teen blocks."] | SHOT: Eye-level chest-up Sia in Pale-blue studio;immediate eye contact,no greeting or location tour. No map during the hook. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
2–4 seconds | VO: I read books. | EXACT CAPTIONS: I read books. | CARDS: ["✅ I read books."] | SHOT: Eye-level Sia;correct English model appears beside her immediately,no map. | EDIT: No lead-in. Sia speaks the useful line immediately. Hold target text through any cutaway. | SILENT PRACTICE: 0 seconds.
4–7.9 seconds | VO: Pehle kaun, phir action, phir object. I read books. | EXACT CAPTIONS: Pehle kaun, phir action, phir object. I read books. | CARDS: [] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
7.9–15.7 seconds | VO: I: kaun; read: action; books: kya. Ek aur: She drinks tea. Aaj action aur object wale sentences banao. | EXACT CAPTIONS: I: kaun; read: action; books: kya. Ek aur: She drinks tea. Aaj action aur object wale sentences banao. | CARDS: [] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
15.7–30.0 seconds | VO: Bolke dekho: I read books. Ab read ki jagah watch try karo. I watch films. Subject pehle, action phir, object last. Apna example bolo. | EXACT CAPTIONS: Bolke dekho: I read books. Ab read ki jagah watch try karo. I watch films. Subject pehle, action phir, object last. Apna example bolo. | CARDS: ["I read books."] | SHOT: Locked eye-level Sia;small encouraging nod;hold still for two-second learner repetition. | EDIT: Sia gives the transfer example, then holds silently for 4 seconds while the learner says their own version. No filler or greeting. | SILENT PRACTICE: 4 seconds.
30.0–34.3 seconds | VO: Aaj ka word: Habit. aadat. Reading is a good habit. | EXACT CAPTIONS: Aaj ka word: Habit. aadat. Reading is a good habit. | CARDS: ["Habit — aadat", "Reading is a good habit."] | SHOT: Eye-level Sia with a compact word/meaning/example card beside her;no extra person or voice. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
34.3–38.3 seconds | VO: Ab apna action jodo. | EXACT CAPTIONS: Ab apna action jodo. | CARDS: [] | SHOT: Sia stays on screen with exact supplied SpeakX logo and one readable silent end card. | EDIT: Hold a silent end card after the practice action;no generic spoken sign-off. Specific silent next-episode tease:Kal: I happy mein kya missing hai? | SILENT PRACTICE: 0 seconds.
END: Deliver the complete answer today. Silent end-card text: Kal: I happy mein kya missing hai? No cliffhanger or generic spoken sign-off. Measure duration;check Sia identity,voice,pronunciation,captions and safe zones. Deliver video,cover,caption track,transcript and QA;do not publish. Editable provider-independent prompt;no render generated.

```

### Native platform package

```json

{
  "youtube": {
    "title": "English Sentence Order: Subject + Verb + Object",
    "description": "I read books.\nSia shows the model first,then a brief Hinglish explanation.\nI read books ko apne action se badlo.\nWord:Habit — aadat; something you do regularly. Reading is a good habit.\n#Shorts #SpeakX #EnglishPractice",
    "thumbnailCopy": "BUILD ONE SENTENCE",
    "tags": [
      "English sentence structure Hindi",
      "Sentence Banao Friday",
      "Sia SpeakX",
      "spoken English Hinglish"
    ],
    "pinnedCommentDraft": "Try:I read books ko apne action se badlo. Model:I watch films. Your own version can be different.",
    "scheduleIST": "18:30"
  },
  "instagram": {
    "caption": "Sentence ke teen blocks.\nI read books.\nI read books ko apne action se badlo.\n#SpeakX #EnglishSeekho #SiaSikhaatiHai",
    "coverCopy": "BUILD ONE SENTENCE",
    "altText": "Sia in pale-blue studio, teaching build a subject–verb–object sentence; captions show: I read books.",
    "scheduleIST": "19:30"
  },
  "facebook": {
    "caption": "Sentence ke teen blocks.\nI read books.\nI read books ko apne action se badlo. SpeakX · Muh khol. English bol!",
    "title": "English Sentence Order: Subject + Verb + Object",
    "scheduleIST": "20:00"
  },
  "x": {
    "morningText": "English tip: I read books. Today’s word: Habit — something you do regularly. Example: Reading is a good habit. #SpeakX",
    "eveningText": "Sia practice: I read books ko apne action se badlo. Model: I read books. #SpeakX",
    "morningIST": "08:30",
    "eveningIST": "19:00"
  },
  "story": {
    "timeIST": "13:00",
    "frames": [
      "I read books ko apne action se badlo.",
      "I watch films.",
      "Try your own version;send a learning question if helpful."
    ]
  }
}

```

### Experiment

A task-led opening may help student starting spoken english recognise relevance faster than hearing the model first;the model-first alternative may improve clarity.

Subject/verb/object terminology can overload beginners;show the three blocks before labels.



## 2026-10-03 · Find the missing am

Galti Pakdo Saturday · Beginner returning to English · Discovery · Pale-blue studio · 36.6s plan

### Hooks

- A (selected): Ek word missing hai.

- B: I am happy.

- C: Happy se pehle kya?

### Exact Sia script

Ek word missing hai. I am happy. Sahi: I am happy. I ke saath yahan am chahiye. I am tired. I am ready. Feeling ya state batate waqt I am bolo. Bolke dekho: I am happy. Happy ki jagah tired try karo. I am tired. Ab excited use karo. I am excited. Feeling badlo, am rakho. Aaj ka word: Ready. taiyaar. I am ready. Missing word khud bolo.

### Production prompt

```text

Produce SpeakX episodeSIA-2026-10-03: Find the missing am. Vertical1080×1920,target 36.6 seconds,maximum45seconds. Only Sia appears and speaks. Match the supplied character board exactly:Indian woman,mid-20s appearance,warm medium-brown skin,long centre-parted dark wavy hair with caramel ombré ends,dark brown eyes,defined brows,natural makeup,no jewellery,light heather-grey short-sleeve fitted mock-neck top. Use the approved Sia_v1 voice only;source/rights approval is still required. Warm,patient Hinglish;clear neutral Indian English;no invented or replacement voice.
PACE:Estimate140words/minute;natural140–165wpm Hinglish if the approved voice sounds clear. Never rush English pronunciation to fit. No recurring greeting,no long setup,no added filler.
SETTING:Pale-blue studio. No map;Sia hook then direct English model. No other visible people,reflections,crowds or voices. No implied real-world visit without verified assets.
VALUE:Start the useful model at2.0seconds: I am happy.
GRAPHICS:Exact supplied SpeakX logo on end card only. Readable Romanized Hinglish subtitles. Every erroneous phrase,including a hook,has red ❌ WRONG from first appearance;correct models have✅. Silent cards are not spoken. Keep bottom20% and right12% clear. Map imagery must never cover teaching text.
AUDIO:Exact voiceover below,with stated silent practice holds. Soft original/licensed music under voice;at most one soft correction chime,no masked pronunciation.
EXACT SPOKEN SCRIPT: Ek word missing hai. I am happy. Sahi: I am happy. I ke saath yahan am chahiye. I am tired. I am ready. Feeling ya state batate waqt I am bolo. Bolke dekho: I am happy. Happy ki jagah tired try karo. I am tired. Ab excited use karo. I am excited. Feeling badlo, am rakho. Aaj ka word: Ready. taiyaar. I am ready. Missing word khud bolo.
SCENES:
0–2 seconds | VO: Ek word missing hai. | EXACT CAPTIONS: Ek word missing hai. | CARDS: ["Ek word missing hai."] | SHOT: Eye-level chest-up Sia in Pale-blue studio;immediate eye contact,no greeting or location tour. No map during the hook. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
2–4 seconds | VO: I am happy. | EXACT CAPTIONS: I am happy. | CARDS: ["✅ I am happy."] | SHOT: Eye-level Sia;correct English model appears beside her immediately,no map. | EDIT: No lead-in. Sia speaks the useful line immediately. Hold target text through any cutaway. | SILENT PRACTICE: 0 seconds.
4–8.3 seconds | VO: Sahi: I am happy. I ke saath yahan am chahiye. | EXACT CAPTIONS: Sahi: I am happy. I ke saath yahan am chahiye. | CARDS: ["❌ WRONG: I happy."] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
8.3–14.3 seconds | VO: I am tired. I am ready. Feeling ya state batate waqt I am bolo. | EXACT CAPTIONS: I am tired. I am ready. Feeling ya state batate waqt I am bolo. | CARDS: [] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
14.3–29.1 seconds | VO: Bolke dekho: I am happy. Happy ki jagah tired try karo. I am tired. Ab excited use karo. I am excited. Feeling badlo, am rakho. | EXACT CAPTIONS: Bolke dekho: I am happy. Happy ki jagah tired try karo. I am tired. Ab excited use karo. I am excited. Feeling badlo, am rakho. | CARDS: ["I am happy."] | SHOT: Locked eye-level Sia;small encouraging nod;hold still for two-second learner repetition. | EDIT: Sia gives the transfer example, then holds silently for 4 seconds while the learner says their own version. No filler or greeting. | SILENT PRACTICE: 4 seconds.
29.1–32.6 seconds | VO: Aaj ka word: Ready. taiyaar. I am ready. | EXACT CAPTIONS: Aaj ka word: Ready. taiyaar. I am ready. | CARDS: ["Ready — taiyaar", "I am ready."] | SHOT: Eye-level Sia with a compact word/meaning/example card beside her;no extra person or voice. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
32.6–36.6 seconds | VO: Missing word khud bolo. | EXACT CAPTIONS: Missing word khud bolo. | CARDS: [] | SHOT: Sia stays on screen with exact supplied SpeakX logo and one readable silent end card. | EDIT: Hold a silent end card after the practice action;no generic spoken sign-off. Specific silent next-episode tease:Kal: apne teen answers khud check karo. | SILENT PRACTICE: 0 seconds.
END: Deliver the complete answer today. Silent end-card text: Kal: apne teen answers khud check karo.. No cliffhanger or generic spoken sign-off. Measure duration;check Sia identity,voice,pronunciation,captions and safe zones. Deliver video,cover,caption track,transcript and QA;do not publish. Editable provider-independent prompt;no render generated.

```

### Native platform package

```json

{
  "youtube": {
    "title": "I Am Happy: Fix the Missing Word",
    "description": "I am happy.\nSia shows the model first,then a brief Hinglish explanation.\nI ___ excited ko complete karo.\nWord:Ready — taiyaar; prepared. I am ready.\n#Shorts #SpeakX #EnglishPractice",
    "thumbnailCopy": "ONE WORD MISSING",
    "tags": [
      "I am happy grammar",
      "Galti Pakdo Saturday",
      "Sia SpeakX",
      "spoken English Hinglish"
    ],
    "pinnedCommentDraft": "Try:I ___ excited ko complete karo. Model:I am excited. Your own version can be different.",
    "scheduleIST": "10:30"
  },
  "instagram": {
    "caption": "Ek word missing hai.\nI am happy.\nI ___ excited ko complete karo.\n#SpeakX #EnglishSeekho #SiaSikhaatiHai",
    "coverCopy": "ONE WORD MISSING",
    "altText": "Sia in pale-blue studio, teaching find the missing am; captions show: I am happy.",
    "scheduleIST": "11:00"
  },
  "facebook": {
    "caption": "Ek word missing hai.\nI am happy.\nI ___ excited ko complete karo. SpeakX · Muh khol. English bol!",
    "title": "I Am Happy: Fix the Missing Word",
    "scheduleIST": "11:30"
  },
  "x": {
    "morningText": "English tip: I am happy. Today’s word: Ready — prepared. Example: I am ready. #SpeakX",
    "eveningText": "Sia practice: I ___ excited ko complete karo. Model: I am happy. #SpeakX",
    "morningIST": "08:30",
    "eveningIST": "19:00"
  },
  "story": {
    "timeIST": "13:00",
    "frames": [
      "I ___ excited ko complete karo.",
      "I am excited.",
      "Try your own version;send a learning question if helpful."
    ]
  }
}

```

### Experiment

A task-led opening may help beginner returning to english recognise relevance faster than hearing the model first;the model-first alternative may improve clarity.

A missing-word quiz may be too easy for returning learners;keep the explanation short.



## 2026-10-04 · Opening-week three-question revision

Revision Sunday · Beginner building a practice habit · Community · Pale-blue studio · 39.3s plan

### Hooks

- A (selected): Teen sawaal. Ready ho?

- B: I am a student.

- C: Naam, sentence, feeling: check.

### Exact Sia script

Teen sawaal. Ready ho? I am a student. One: My name ___ Riya. Is. Two: Sahi order? I read books. Three: I ___ happy. Am. Teen chhote fixes! Bolke dekho: I am happy. Ab apna introduction do. My name is Aman. I am a student. Naam apna rakho, aur ek true detail jodo. Aaj ka word: Recall. yaad karna. Try to recall the answer. Missed answer phir bolo.

### Production prompt

```text

Produce SpeakX episodeSIA-2026-10-04: Opening-week three-question revision. Vertical1080×1920,target 39.3 seconds,maximum45seconds. Only Sia appears and speaks. Match the supplied character board exactly:Indian woman,mid-20s appearance,warm medium-brown skin,long centre-parted dark wavy hair with caramel ombré ends,dark brown eyes,defined brows,natural makeup,no jewellery,light heather-grey short-sleeve fitted mock-neck top. Use the approved Sia_v1 voice only;source/rights approval is still required. Warm,patient Hinglish;clear neutral Indian English;no invented or replacement voice.
PACE:Estimate140words/minute;natural140–165wpm Hinglish if the approved voice sounds clear. Never rush English pronunciation to fit. No recurring greeting,no long setup,no added filler.
SETTING:Pale-blue studio. No map;Sia hook then direct English model. No other visible people,reflections,crowds or voices. No implied real-world visit without verified assets.
VALUE:Start the useful model at2.0seconds: I am a student.
GRAPHICS:Exact supplied SpeakX logo on end card only. Readable Romanized Hinglish subtitles. Every erroneous phrase,including a hook,has red ❌ WRONG from first appearance;correct models have✅. Silent cards are not spoken. Keep bottom20% and right12% clear. Map imagery must never cover teaching text.
AUDIO:Exact voiceover below,with stated silent practice holds. Soft original/licensed music under voice;at most one soft correction chime,no masked pronunciation.
EXACT SPOKEN SCRIPT: Teen sawaal. Ready ho? I am a student. One: My name ___ Riya. Is. Two: Sahi order? I read books. Three: I ___ happy. Am. Teen chhote fixes! Bolke dekho: I am happy. Ab apna introduction do. My name is Aman. I am a student. Naam apna rakho, aur ek true detail jodo. Aaj ka word: Recall. yaad karna. Try to recall the answer. Missed answer phir bolo.
SCENES:
0–2 seconds | VO: Teen sawaal. Ready ho? | EXACT CAPTIONS: Teen sawaal. Ready ho? | CARDS: ["Teen sawaal. Ready ho?"] | SHOT: Eye-level chest-up Sia in Pale-blue studio;immediate eye contact,no greeting or location tour. No map during the hook. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
2–4 seconds | VO: I am a student. | EXACT CAPTIONS: I am a student. | CARDS: ["✅ I am a student."] | SHOT: Eye-level Sia;correct English model appears beside her immediately,no map. | EDIT: No lead-in. Sia speaks the useful line immediately. Hold target text through any cutaway. | SILENT PRACTICE: 0 seconds.
4–8.9 seconds | VO: One: My name ___ Riya. Is. Two: Sahi order? | EXACT CAPTIONS: One: My name ___ Riya. Is. Two: Sahi order? | CARDS: ["❌ WRONG: I books read."] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 1 seconds.
8.9–15.7 seconds | VO: I read books. Three: I ___ happy. Am. Teen chhote fixes! | EXACT CAPTIONS: I read books. Three: I ___ happy. Am. Teen chhote fixes! | CARDS: [] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 2 seconds.
15.7–30.5 seconds | VO: Bolke dekho: I am happy. Ab apna introduction do. My name is Aman. I am a student. Naam apna rakho, aur ek true detail jodo. | EXACT CAPTIONS: Bolke dekho: I am happy. Ab apna introduction do. My name is Aman. I am a student. Naam apna rakho, aur ek true detail jodo. | CARDS: ["I am a student. I read books. I am happy."] | SHOT: Locked eye-level Sia;small encouraging nod;hold still for two-second learner repetition. | EDIT: Sia gives the transfer example, then holds silently for 4 seconds while the learner says their own version. No filler or greeting. | SILENT PRACTICE: 4 seconds.
30.5–35.3 seconds | VO: Aaj ka word: Recall. yaad karna. Try to recall the answer. | EXACT CAPTIONS: Aaj ka word: Recall. yaad karna. Try to recall the answer. | CARDS: ["Recall — yaad karna", "Try to recall the answer."] | SHOT: Eye-level Sia with a compact word/meaning/example card beside her;no extra person or voice. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
35.3–39.3 seconds | VO: Missed answer phir bolo. | EXACT CAPTIONS: Missed answer phir bolo. | CARDS: [] | SHOT: Sia stays on screen with exact supplied SpeakX logo and one readable silent end card. | EDIT: Hold a silent end card after the practice action;no generic spoken sign-off. Specific silent next-episode tease:Kal: confident aur confidence ka farq. | SILENT PRACTICE: 0 seconds.
END: Deliver the complete answer today. Silent end-card text: Kal: confident aur confidence ka farq.. No cliffhanger or generic spoken sign-off. Measure duration;check Sia identity,voice,pronunciation,captions and safe zones. Deliver video,cover,caption track,transcript and QA;do not publish. Editable provider-independent prompt;no render generated.

```

### Native platform package

```json

{
  "youtube": {
    "title": "Beginner English Quiz: 3 Quick Questions",
    "description": "I am a student.\nSia shows the model first,then a brief Hinglish explanation.\nTeen answers check karke weakest line repeat karo.\nWord:Recall — yaad karna; bring something back to mind. Try to recall the answer.\n#Shorts #SpeakX #EnglishPractice",
    "thumbnailCopy": "YOUR FIRST CHECK",
    "tags": [
      "basic English quiz Hindi",
      "Revision Sunday",
      "Sia SpeakX",
      "spoken English Hinglish"
    ],
    "pinnedCommentDraft": "Try:Teen answers check karke weakest line repeat karo. Model:is; I read books; am. Your own version can be different.",
    "scheduleIST": "10:30"
  },
  "instagram": {
    "caption": "Teen sawaal. Ready ho?\nI am a student. I read books. I am happy.\nTeen answers check karke weakest line repeat karo.\n#SpeakX #EnglishSeekho #SiaSikhaatiHai",
    "coverCopy": "YOUR FIRST CHECK",
    "altText": "Sia in pale-blue studio, teaching opening-week three-question revision; captions show: I am a student. I read books. I am happy.",
    "scheduleIST": "11:00"
  },
  "facebook": {
    "caption": "Teen sawaal. Ready ho?\nI am a student.\nTeen answers check karke weakest line repeat karo. SpeakX · Muh khol. English bol!",
    "title": "Beginner English Quiz: 3 Quick Questions",
    "scheduleIST": "11:30"
  },
  "x": {
    "morningText": "English tip: I am a student. I read books. I am happy. Today’s word: Recall — bring something back to mind. Example: Try to recall the answer. #SpeakX",
    "eveningText": "Sia practice: Teen answers check karke weakest line repeat karo. Model: I am a student. I read books. I am happy. #SpeakX",
    "morningIST": "08:30",
    "eveningIST": "19:00"
  },
  "story": {
    "timeIST": "13:00",
    "frames": [
      "Teen answers check karke weakest line repeat karo.",
      "is; I read books; am.",
      "Try your own version;send a learning question if helpful."
    ]
  }
}

```

### Experiment

A task-led opening may help beginner building a practice habit recognise relevance faster than hearing the model first;the model-first alternative may improve clarity.

Three questions can feel rushed;preserve all three answer pauses.



## 2026-10-05 · Confident: describe how you feel

Word Wala Monday · College placement candidate · Discovery · Virtual college placement practice corner · 35.0s plan

### Hooks

- A (selected): Confident ya confidence?

- B: I feel confident.

- C: Confidence feeling ka naam.

### Exact Sia script

Confident ya confidence? I feel confident. Aaj ka word confident: KON-fi-dent. Matlab aatmavishwasi. I feel confident today. She sounds confident in interviews. Confident adjective hai; confidence noun. Sahi: I feel confident. Bolke dekho: I feel confident. Interview ke alawa bhi use karo. I feel confident when I practise. Ab tum kis situation mein confident feel karte ho? Apna confident moment bolo.

### Production prompt

```text

Produce SpeakX episodeSIA-2026-10-05: Confident: describe how you feel. Vertical1080×1920,target 35.0 seconds,maximum45seconds. Only Sia appears and speaks. Match the supplied character board exactly:Indian woman,mid-20s appearance,warm medium-brown skin,long centre-parted dark wavy hair with caramel ombré ends,dark brown eyes,defined brows,natural makeup,no jewellery,light heather-grey short-sleeve fitted mock-neck top. Use the approved Sia_v1 voice only;source/rights approval is still required. Warm,patient Hinglish;clear neutral Indian English;no invented or replacement voice.
PACE:Estimate140words/minute;natural140–165wpm Hinglish if the approved voice sounds clear. Never rush English pronunciation to fit. No recurring greeting,no long setup,no added filler.
SETTING:Virtual college placement practice corner. No map;Sia hook then direct English model. No other visible people,reflections,crowds or voices. No implied real-world visit without verified assets.
VALUE:Start the useful model at2.0seconds: I feel confident.
GRAPHICS:Exact supplied SpeakX logo on end card only. Readable Romanized Hinglish subtitles. Every erroneous phrase,including a hook,has red ❌ WRONG from first appearance;correct models have✅. Silent cards are not spoken. Keep bottom20% and right12% clear. Map imagery must never cover teaching text.
AUDIO:Exact voiceover below,with stated silent practice holds. Soft original/licensed music under voice;at most one soft correction chime,no masked pronunciation.
EXACT SPOKEN SCRIPT: Confident ya confidence? I feel confident. Aaj ka word confident: KON-fi-dent. Matlab aatmavishwasi. I feel confident today. She sounds confident in interviews. Confident adjective hai; confidence noun. Sahi: I feel confident. Bolke dekho: I feel confident. Interview ke alawa bhi use karo. I feel confident when I practise. Ab tum kis situation mein confident feel karte ho? Apna confident moment bolo.
SCENES:
0–2 seconds | VO: Confident ya confidence? | EXACT CAPTIONS: Confident ya confidence? | CARDS: ["Confident ya confidence?"] | SHOT: Eye-level chest-up Sia in Virtual college placement practice corner;immediate eye contact,no greeting or location tour. No map during the hook. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
2–4 seconds | VO: I feel confident. | EXACT CAPTIONS: I feel confident. | CARDS: ["✅ I feel confident."] | SHOT: Eye-level Sia;correct English model appears beside her immediately,no map. | EDIT: No lead-in. Sia speaks the useful line immediately. Hold target text through any cutaway. | SILENT PRACTICE: 0 seconds.
4–8.8 seconds | VO: Aaj ka word confident: KON-fi-dent. Matlab aatmavishwasi. I feel confident today. | EXACT CAPTIONS: Aaj ka word confident: KON-fi-dent. Matlab aatmavishwasi. I feel confident today. | CARDS: [] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
8.8–14.8 seconds | VO: She sounds confident in interviews. Confident adjective hai; confidence noun. Sahi: I feel confident. | EXACT CAPTIONS: She sounds confident in interviews. Confident adjective hai; confidence noun. Sahi: I feel confident. | CARDS: ["❌ WRONG: I feel confidence."] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
14.8–31.0 seconds | VO: Bolke dekho: I feel confident. Interview ke alawa bhi use karo. I feel confident when I practise. Ab tum kis situation mein confident feel karte ho? | EXACT CAPTIONS: Bolke dekho: I feel confident. Interview ke alawa bhi use karo. I feel confident when I practise. Ab tum kis situation mein confident feel karte ho? | CARDS: ["I feel confident."] | SHOT: Locked eye-level Sia;small encouraging nod;hold still for two-second learner repetition. | EDIT: Sia gives the transfer example, then holds silently for 5.0 seconds while the learner says their own version. No filler or greeting. | SILENT PRACTICE: 5.0 seconds.
31.0–35.0 seconds | VO: Apna confident moment bolo. | EXACT CAPTIONS: Apna confident moment bolo. | CARDS: [] | SHOT: Sia stays on screen with exact supplied SpeakX logo and one readable silent end card. | EDIT: Hold a silent end card after the practice action;no generic spoken sign-off. Specific silent next-episode tease:Kal: am, is, are ke partners. | SILENT PRACTICE: 0 seconds.
END: Deliver the complete answer today. Silent end-card text: Kal: am, is, are ke partners.. No cliffhanger or generic spoken sign-off. Measure duration;check Sia identity,voice,pronunciation,captions and safe zones. Deliver video,cover,caption track,transcript and QA;do not publish. Editable provider-independent prompt;no render generated.

```

### Native platform package

```json

{
  "youtube": {
    "title": "Confident vs Confidence: Say How You Feel",
    "description": "I feel confident.\nSia shows the model first,then a brief Hinglish explanation.\nI feel confident when ___ poora karo.\nWord:Confident — aatmavishwasi; sure of your ability. I feel confident today.\n#Shorts #SpeakX #EnglishPractice",
    "thumbnailCopy": "CONFIDENT OR CONFIDENCE?",
    "tags": [
      "confident confidence difference Hindi",
      "Word Wala Monday",
      "Sia SpeakX",
      "spoken English Hinglish"
    ],
    "pinnedCommentDraft": "Try:I feel confident when ___ poora karo. Model:I feel confident when I practise. Your own version can be different.",
    "scheduleIST": "18:30"
  },
  "instagram": {
    "caption": "Confident ya confidence?\nI feel confident.\nI feel confident when ___ poora karo.\n#SpeakX #EnglishSeekho #SiaSikhaatiHai",
    "coverCopy": "CONFIDENT OR CONFIDENCE?",
    "altText": "Sia in virtual interview room, teaching confident: describe how you feel; captions show: I feel confident.",
    "scheduleIST": "19:30"
  },
  "facebook": {
    "caption": "Confident ya confidence?\nI feel confident.\nI feel confident when ___ poora karo. SpeakX · Muh khol. English bol!",
    "title": "Confident vs Confidence: Say How You Feel",
    "scheduleIST": "20:00"
  },
  "x": {
    "morningText": "English tip: I feel confident. Today’s word: Confident — sure of your ability. Example: I feel confident today. #SpeakX",
    "eveningText": "Sia practice: I feel confident when ___ poora karo. Model: I feel confident. #SpeakX",
    "morningIST": "08:30",
    "eveningIST": "19:00"
  },
  "story": {
    "timeIST": "13:00",
    "frames": [
      "I feel confident when ___ poora karo.",
      "I feel confident when I practise.",
      "Try your own version;send a learning question if helpful."
    ]
  }
}

```

### Experiment

A task-led opening may help college placement candidate recognise relevance faster than hearing the model first;the model-first alternative may improve clarity.

Confident and confidence sound similar;avoid music under their contrast.



## 2026-10-06 · Am, is and are

Grammar Tuesday · Adult beginner · Discovery · Pale-blue studio · 36.8s plan

### Hooks

- A (selected): Am, is, ya are?

- B: I am ready.

- C: They is ready?

### Exact Sia script

Am, is, ya are? I am ready. I ke saath am. He, she, it ke saath is. You, we, they ke saath are. I am ready. He is ready. We are ready. Bolke dekho: We are ready. Naam ke saath bhi try karo. Riya is ready. Riya and Aman are ready. Ek person se do log hue. Aaj ka word: Calm. shaant. Stay calm. They ke saath try karo.

### Production prompt

```text

Produce SpeakX episodeSIA-2026-10-06: Am, is and are. Vertical1080×1920,target 36.8 seconds,maximum45seconds. Only Sia appears and speaks. Match the supplied character board exactly:Indian woman,mid-20s appearance,warm medium-brown skin,long centre-parted dark wavy hair with caramel ombré ends,dark brown eyes,defined brows,natural makeup,no jewellery,light heather-grey short-sleeve fitted mock-neck top. Use the approved Sia_v1 voice only;source/rights approval is still required. Warm,patient Hinglish;clear neutral Indian English;no invented or replacement voice.
PACE:Estimate140words/minute;natural140–165wpm Hinglish if the approved voice sounds clear. Never rush English pronunciation to fit. No recurring greeting,no long setup,no added filler.
SETTING:Pale-blue studio. No map;Sia hook then direct English model. No other visible people,reflections,crowds or voices. No implied real-world visit without verified assets.
VALUE:Start the useful model at2.0seconds: I am ready.
GRAPHICS:Exact supplied SpeakX logo on end card only. Readable Romanized Hinglish subtitles. Every erroneous phrase,including a hook,has red ❌ WRONG from first appearance;correct models have✅. Silent cards are not spoken. Keep bottom20% and right12% clear. Map imagery must never cover teaching text.
AUDIO:Exact voiceover below,with stated silent practice holds. Soft original/licensed music under voice;at most one soft correction chime,no masked pronunciation.
EXACT SPOKEN SCRIPT: Am, is, ya are? I am ready. I ke saath am. He, she, it ke saath is. You, we, they ke saath are. I am ready. He is ready. We are ready. Bolke dekho: We are ready. Naam ke saath bhi try karo. Riya is ready. Riya and Aman are ready. Ek person se do log hue. Aaj ka word: Calm. shaant. Stay calm. They ke saath try karo.
SCENES:
0–2 seconds | VO: Am, is, ya are? | EXACT CAPTIONS: Am, is, ya are? | CARDS: ["Am, is, ya are?"] | SHOT: Eye-level chest-up Sia in Pale-blue studio;immediate eye contact,no greeting or location tour. No map during the hook. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
2–4 seconds | VO: I am ready. | EXACT CAPTIONS: I am ready. | CARDS: ["✅ I am ready."] | SHOT: Eye-level Sia;correct English model appears beside her immediately,no map. | EDIT: No lead-in. Sia speaks the useful line immediately. Hold target text through any cutaway. | SILENT PRACTICE: 0 seconds.
4–10.9 seconds | VO: I ke saath am. He, she, it ke saath is. You, we, they ke saath are. | EXACT CAPTIONS: I ke saath am. He, she, it ke saath is. You, we, they ke saath are. | CARDS: [] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
10.9–14.8 seconds | VO: I am ready. He is ready. We are ready. | EXACT CAPTIONS: I am ready. He is ready. We are ready. | CARDS: ["❌ WRONG: He am ready."] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
14.8–29.6 seconds | VO: Bolke dekho: We are ready. Naam ke saath bhi try karo. Riya is ready. Riya and Aman are ready. Ek person se do log hue. | EXACT CAPTIONS: Bolke dekho: We are ready. Naam ke saath bhi try karo. Riya is ready. Riya and Aman are ready. Ek person se do log hue. | CARDS: ["I am ready. He is ready. We are ready."] | SHOT: Locked eye-level Sia;small encouraging nod;hold still for two-second learner repetition. | EDIT: Sia gives the transfer example, then holds silently for 4 seconds while the learner says their own version. No filler or greeting. | SILENT PRACTICE: 4 seconds.
29.6–32.6 seconds | VO: Aaj ka word: Calm. shaant. Stay calm. | EXACT CAPTIONS: Aaj ka word: Calm. shaant. Stay calm. | CARDS: ["Calm — shaant", "Stay calm."] | SHOT: Eye-level Sia with a compact word/meaning/example card beside her;no extra person or voice. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
32.6–36.8 seconds | VO: They ke saath try karo. | EXACT CAPTIONS: They ke saath try karo. | CARDS: [] | SHOT: Sia stays on screen with exact supplied SpeakX logo and one readable silent end card. | EDIT: Hold a silent end card after the practice action;no generic spoken sign-off. Specific silent next-episode tease:Kal: one book se two books. | SILENT PRACTICE: 0 seconds.
END: Deliver the complete answer today. Silent end-card text: Kal: one book se two books.. No cliffhanger or generic spoken sign-off. Measure duration;check Sia identity,voice,pronunciation,captions and safe zones. Deliver video,cover,caption track,transcript and QA;do not publish. Editable provider-independent prompt;no render generated.

```

### Native platform package

```json

{
  "youtube": {
    "title": "Am, Is, Are Explained in Hinglish",
    "description": "I am ready.\nSia shows the model first,then a brief Hinglish explanation.\nThey ___ ready ko complete karo.\nWord:Calm — shaant; relaxed and not worried. Stay calm.\n#Shorts #SpeakX #EnglishPractice",
    "thumbnailCopy": "CHOOSE YOUR PARTNER",
    "tags": [
      "am is are Hindi",
      "Grammar Tuesday",
      "Sia SpeakX",
      "spoken English Hinglish"
    ],
    "pinnedCommentDraft": "Try:They ___ ready ko complete karo. Model:They are ready. Your own version can be different.",
    "scheduleIST": "18:30"
  },
  "instagram": {
    "caption": "Am, is, ya are?\nI am ready. He is ready. We are ready.\nThey ___ ready ko complete karo.\n#SpeakX #EnglishSeekho #SiaSikhaatiHai",
    "coverCopy": "CHOOSE YOUR PARTNER",
    "altText": "Sia in pale-blue studio, teaching am, is and are; captions show: I am ready. He is ready. We are ready.",
    "scheduleIST": "19:30"
  },
  "facebook": {
    "caption": "Am, is, ya are?\nI am ready.\nThey ___ ready ko complete karo. SpeakX · Muh khol. English bol!",
    "title": "Am, Is, Are Explained in Hinglish",
    "scheduleIST": "20:00"
  },
  "x": {
    "morningText": "English tip: I am ready. He is ready. We are ready. Today’s word: Calm — relaxed and not worried. Example: Stay calm. #SpeakX",
    "eveningText": "Sia practice: They ___ ready ko complete karo. Model: I am ready. He is ready. We are ready. #SpeakX",
    "morningIST": "08:30",
    "eveningIST": "19:00"
  },
  "story": {
    "timeIST": "13:00",
    "frames": [
      "They ___ ready ko complete karo.",
      "They are ready.",
      "Try your own version;send a learning question if helpful."
    ]
  }
}

```

### Experiment

A task-led opening may help adult beginner recognise relevance faster than hearing the model first;the model-first alternative may improve clarity.

Listing seven pronouns can be visually dense;group them into three readable cards.



## 2026-10-07 · One book, two books

Ek ya Anek Wednesday · Parent learning alongside a child · Discovery · Pale-blue studio · 39.1s plan

### Hooks

- A (selected): Ek book. Do books.

- B: One book.

- C: Two book ya books?

### Exact Sia script

Ek book. Do books. One book. Regular plural: book se books, pen se pens. One book, two books. One pen, three pens. In words mein ek se zyada ho toh s lagao. Bolke dekho: One book. Ab cup ke saath try karo. One cup, two cups. Pen bhi: one pen, three pens. End ka s sunao. Aaj ka word: Shelf. takhta ya rack. The books are on the shelf. Cup ka plural bolo.

### Production prompt

```text

Produce SpeakX episodeSIA-2026-10-07: One book, two books. Vertical1080×1920,target 39.1 seconds,maximum45seconds. Only Sia appears and speaks. Match the supplied character board exactly:Indian woman,mid-20s appearance,warm medium-brown skin,long centre-parted dark wavy hair with caramel ombré ends,dark brown eyes,defined brows,natural makeup,no jewellery,light heather-grey short-sleeve fitted mock-neck top. Use the approved Sia_v1 voice only;source/rights approval is still required. Warm,patient Hinglish;clear neutral Indian English;no invented or replacement voice.
PACE:Estimate140words/minute;natural140–165wpm Hinglish if the approved voice sounds clear. Never rush English pronunciation to fit. No recurring greeting,no long setup,no added filler.
SETTING:Pale-blue studio. No map;Sia hook then direct English model. No other visible people,reflections,crowds or voices. No implied real-world visit without verified assets.
VALUE:Start the useful model at2.0seconds: One book.
GRAPHICS:Exact supplied SpeakX logo on end card only. Readable Romanized Hinglish subtitles. Every erroneous phrase,including a hook,has red ❌ WRONG from first appearance;correct models have✅. Silent cards are not spoken. Keep bottom20% and right12% clear. Map imagery must never cover teaching text.
AUDIO:Exact voiceover below,with stated silent practice holds. Soft original/licensed music under voice;at most one soft correction chime,no masked pronunciation.
EXACT SPOKEN SCRIPT: Ek book. Do books. One book. Regular plural: book se books, pen se pens. One book, two books. One pen, three pens. In words mein ek se zyada ho toh s lagao. Bolke dekho: One book. Ab cup ke saath try karo. One cup, two cups. Pen bhi: one pen, three pens. End ka s sunao. Aaj ka word: Shelf. takhta ya rack. The books are on the shelf. Cup ka plural bolo.
SCENES:
0–2 seconds | VO: Ek book. Do books. | EXACT CAPTIONS: Ek book. Do books. | CARDS: ["Ek book. Do books."] | SHOT: Eye-level chest-up Sia in Pale-blue studio;immediate eye contact,no greeting or location tour. No map during the hook. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
2–4 seconds | VO: One book. | EXACT CAPTIONS: One book. | CARDS: ["✅ One book."] | SHOT: Eye-level Sia;correct English model appears beside her immediately,no map. | EDIT: No lead-in. Sia speaks the useful line immediately. Hold target text through any cutaway. | SILENT PRACTICE: 0 seconds.
4–9.2 seconds | VO: Regular plural: book se books, pen se pens. One book, two books. | EXACT CAPTIONS: Regular plural: book se books, pen se pens. One book, two books. | CARDS: [] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
9.2–15.2 seconds | VO: One pen, three pens. In words mein ek se zyada ho toh s lagao. | EXACT CAPTIONS: One pen, three pens. In words mein ek se zyada ho toh s lagao. | CARDS: ["❌ WRONG: Two book."] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
15.2–29.5 seconds | VO: Bolke dekho: One book. Ab cup ke saath try karo. One cup, two cups. Pen bhi: one pen, three pens. End ka s sunao. | EXACT CAPTIONS: Bolke dekho: One book. Ab cup ke saath try karo. One cup, two cups. Pen bhi: one pen, three pens. End ka s sunao. | CARDS: ["One book. Two books."] | SHOT: Locked eye-level Sia;small encouraging nod;hold still for two-second learner repetition. | EDIT: Sia gives the transfer example, then holds silently for 4 seconds while the learner says their own version. No filler or greeting. | SILENT PRACTICE: 4 seconds.
29.5–35.1 seconds | VO: Aaj ka word: Shelf. takhta ya rack. The books are on the shelf. | EXACT CAPTIONS: Aaj ka word: Shelf. takhta ya rack. The books are on the shelf. | CARDS: ["Shelf — takhta ya rack", "The books are on the shelf."] | SHOT: Eye-level Sia with a compact word/meaning/example card beside her;no extra person or voice. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
35.1–39.1 seconds | VO: Cup ka plural bolo. | EXACT CAPTIONS: Cup ka plural bolo. | CARDS: [] | SHOT: Sia stays on screen with exact supplied SpeakX logo and one readable silent end card. | EDIT: Hold a silent end card after the practice action;no generic spoken sign-off. Specific silent next-episode tease:Kal: reception par polite request. | SILENT PRACTICE: 0 seconds.
END: Deliver the complete answer today. Silent end-card text: Kal: reception par polite request.. No cliffhanger or generic spoken sign-off. Measure duration;check Sia identity,voice,pronunciation,captions and safe zones. Deliver video,cover,caption track,transcript and QA;do not publish. Editable provider-independent prompt;no render generated.

```

### Native platform package

```json

{
  "youtube": {
    "title": "Book or Books? Regular Plurals Made Simple",
    "description": "One book.\nSia shows the model first,then a brief Hinglish explanation.\nOne cup, two ___ bolo.\nWord:Shelf — takhta ya rack; a place to keep things. The books are on the shelf.\n#Shorts #SpeakX #EnglishPractice",
    "thumbnailCopy": "HEAR THE S",
    "tags": [
      "singular plural books",
      "Ek ya Anek Wednesday",
      "Sia SpeakX",
      "spoken English Hinglish"
    ],
    "pinnedCommentDraft": "Try:One cup, two ___ bolo. Model:Two cups. Your own version can be different.",
    "scheduleIST": "18:30"
  },
  "instagram": {
    "caption": "Ek book. Do books.\nOne book. Two books.\nOne cup, two ___ bolo.\n#SpeakX #EnglishSeekho #SiaSikhaatiHai",
    "coverCopy": "HEAR THE S",
    "altText": "Sia in pale-blue studio, teaching one book, two books; captions show: One book. Two books.",
    "scheduleIST": "19:30"
  },
  "facebook": {
    "caption": "Ek book. Do books.\nOne book.\nOne cup, two ___ bolo. SpeakX · Muh khol. English bol!",
    "title": "Book or Books? Regular Plurals Made Simple",
    "scheduleIST": "20:00"
  },
  "x": {
    "morningText": "English tip: One book. Two books. Today’s word: Shelf — a place to keep things. Example: The books are on the shelf. #SpeakX",
    "eveningText": "Sia practice: One cup, two ___ bolo. Model: One book. Two books. #SpeakX",
    "morningIST": "08:30",
    "eveningIST": "19:00"
  },
  "story": {
    "timeIST": "13:00",
    "frames": [
      "One cup, two ___ bolo.",
      "Two cups.",
      "Try your own version;send a learning question if helpful."
    ]
  }
}

```

### Experiment

A task-led opening may help parent learning alongside a child recognise relevance faster than hearing the model first;the model-first alternative may improve clarity.

The final s may be hard to hear;make the book/books contrast audible.



## 2026-10-08 · Ask politely at reception

Baat-Cheet Thursday · First-job candidate · Conversion · Virtual office reception · 38.9s plan

### Hooks

- A (selected): Interview room kidhar hai?

- B: Could you tell me where the interview room is?

- C: Room chahiye? Politely poochho.

### Exact Sia script

Interview room kidhar hai? Could you tell me where the interview room is? Could you tell me where the interview room is? Thank you. Could you polite request hai. Bolke dekho: Could you tell me where the interview room is? Ab question apne destination ke liye banao. Could you tell me where the meeting room is? Sirf room ka naam badla. Aaj ka word: Reception. swagat desk. Please wait at reception. Request bina dekhe bolo.

### Production prompt

```text

Produce SpeakX episodeSIA-2026-10-08: Ask politely at reception. Vertical1080×1920,target 38.9 seconds,maximum45seconds. Only Sia appears and speaks. Match the supplied character board exactly:Indian woman,mid-20s appearance,warm medium-brown skin,long centre-parted dark wavy hair with caramel ombré ends,dark brown eyes,defined brows,natural makeup,no jewellery,light heather-grey short-sleeve fitted mock-neck top. Use the approved Sia_v1 voice only;source/rights approval is still required. Warm,patient Hinglish;clear neutral Indian English;no invented or replacement voice.
PACE:Estimate140words/minute;natural140–165wpm Hinglish if the approved voice sounds clear. Never rush English pronunciation to fit. No recurring greeting,no long setup,no added filler.
SETTING:Virtual office reception. 0–2seconds Sia hook;2–3seconds one-second approved map cutaway under Sia’s answer audio;keep the English model visible and return to Sia. No other visible people,reflections,crowds or voices. No implied real-world visit without verified assets.
VALUE:Start the useful model at2.0seconds: Could you tell me where the interview room is?
GRAPHICS:Exact supplied SpeakX logo on end card only. Readable Romanized Hinglish subtitles. Every erroneous phrase,including a hook,has red ❌ WRONG from first appearance;correct models have✅. Silent cards are not spoken. Keep bottom20% and right12% clear. Map imagery must never cover teaching text.
AUDIO:Exact voiceover below,with stated silent practice holds. Soft original/licensed music under voice;at most one soft correction chime,no masked pronunciation.
EXACT SPOKEN SCRIPT: Interview room kidhar hai? Could you tell me where the interview room is? Could you tell me where the interview room is? Thank you. Could you polite request hai. Bolke dekho: Could you tell me where the interview room is? Ab question apne destination ke liye banao. Could you tell me where the meeting room is? Sirf room ka naam badla. Aaj ka word: Reception. swagat desk. Please wait at reception. Request bina dekhe bolo.
SCENES:
0–2 seconds | VO: Interview room kidhar hai? | EXACT CAPTIONS: Interview room kidhar hai? | CARDS: ["Interview room kidhar hai?"] | SHOT: Eye-level chest-up Sia in Virtual office reception;immediate eye contact,no greeting or location tour. No map during the hook. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
2–5.9 seconds | VO: Could you tell me where the interview room is? | EXACT CAPTIONS: Could you tell me where the interview room is? | CARDS: ["✅ Could you tell me where the interview room is?"] | SHOT: At2–3seconds show an approved one-second map-pin cutaway under continuing Sia audio,then eye-level Sia at Virtual office reception. Keep the English model in a separate safe text region throughout;the map must not cover it. | EDIT: No lead-in. Sia speaks the useful line immediately. Hold target text through any cutaway. | SILENT PRACTICE: 0 seconds.
5.9–9.8 seconds | VO: Could you tell me where the interview room is? | EXACT CAPTIONS: Could you tell me where the interview room is? | CARDS: ["TEXT ONLY: Ask for the interview room."] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
9.8–12.8 seconds | VO: Thank you. Could you polite request hai. | EXACT CAPTIONS: Thank you. Could you polite request hai. | CARDS: ["TEXT ONLY: First floor."] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
12.8–30.6 seconds | VO: Bolke dekho: Could you tell me where the interview room is? Ab question apne destination ke liye banao. Could you tell me where the meeting room is? Sirf room ka naam badla. | EXACT CAPTIONS: Bolke dekho: Could you tell me where the interview room is? Ab question apne destination ke liye banao. Could you tell me where the meeting room is? Sirf room ka naam badla. | CARDS: ["Could you tell me where the interview room is?"] | SHOT: Locked eye-level Sia;small encouraging nod;hold still for two-second learner repetition. | EDIT: Sia gives the transfer example, then holds silently for 4 seconds while the learner says their own version. No filler or greeting. | SILENT PRACTICE: 4 seconds.
30.6–34.9 seconds | VO: Aaj ka word: Reception. swagat desk. Please wait at reception. | EXACT CAPTIONS: Aaj ka word: Reception. swagat desk. Please wait at reception. | CARDS: ["Reception — swagat desk", "Please wait at reception."] | SHOT: Eye-level Sia with a compact word/meaning/example card beside her;no extra person or voice. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
34.9–38.9 seconds | VO: Request bina dekhe bolo. | EXACT CAPTIONS: Request bina dekhe bolo. | CARDS: [] | SHOT: Sia stays on screen with exact supplied SpeakX logo and one readable silent end card. | EDIT: Hold a silent end card after the practice action;no generic spoken sign-off. Specific silent next-episode tease:Kal: apna question sahi order mein. | SILENT PRACTICE: 0 seconds.
END: Deliver the complete answer today. Silent end-card text: Kal: apna question sahi order mein.. No cliffhanger or generic spoken sign-off. Measure duration;check Sia identity,voice,pronunciation,captions and safe zones. Deliver video,cover,caption track,transcript and QA;do not publish. Editable provider-independent prompt;no render generated.

```

### Native platform package

```json

{
  "youtube": {
    "title": "Ask for the Interview Room Politely in English",
    "description": "Could you tell me where the interview room is?\nSia shows the model first,then a brief Hinglish explanation.\nReception request ko bina dekhe repeat karo.\nWord:Reception — swagat desk; the desk that welcomes visitors. Please wait at reception.\n#Shorts #SpeakX #EnglishPractice\nMore speaking practice: SpeakX website in our channel profile.",
    "thumbnailCopy": "AT THE RECEPTION",
    "tags": [
      "interview reception English conversation",
      "Baat-Cheet Thursday",
      "Sia SpeakX",
      "spoken English Hinglish"
    ],
    "pinnedCommentDraft": "Try:Reception request ko bina dekhe repeat karo. Model:Could you tell me where the interview room is? Your own version can be different.",
    "scheduleIST": "18:30"
  },
  "instagram": {
    "caption": "Interview room kidhar hai?\nCould you tell me where the interview room is?\nReception request ko bina dekhe repeat karo.\n#SpeakX #EnglishSeekho #SiaSikhaatiHai\nAgli speaking practice SpeakX par karo — profile link se shuru karo.",
    "coverCopy": "AT THE RECEPTION",
    "altText": "Sia in virtual office reception, teaching ask politely at reception; captions show: Could you tell me where the interview room is?",
    "scheduleIST": "19:30"
  },
  "facebook": {
    "caption": "Interview room kidhar hai?\nCould you tell me where the interview room is?\nReception request ko bina dekhe repeat karo. SpeakX · Muh khol. English bol!\nPractice with Sia: https://speakx.ai/",
    "title": "Ask for the Interview Room Politely in English",
    "scheduleIST": "20:00"
  },
  "x": {
    "morningText": "English tip: Could you tell me where the interview room is? Today’s word: Reception — the desk that welcomes visitors. Example: Please wait at reception. #SpeakX",
    "eveningText": "Sia practice: Reception request ko bina dekhe repeat karo. Model: Could you tell me where the interview room is? #SpeakX",
    "morningIST": "08:30",
    "eveningIST": "19:00"
  },
  "story": {
    "timeIST": "13:00",
    "frames": [
      "Reception request ko bina dekhe repeat karo.",
      "Could you tell me where the interview room is?",
      "Try your own version;send a learning question if helpful."
    ]
  }
}

```

### Experiment

A task-led opening may help first-job candidate recognise relevance faster than hearing the model first;the model-first alternative may improve clarity.

The reception sentence is long;chunk it naturally without cutting words.



## 2026-10-09 · Question word order

Sentence Banao Friday · New colleague making small talk · Discovery · Virtual empty café table · 37.6s plan

### Hooks

- A (selected): Question ka order badlo.

- B: Where do you work?

- C: Where you work?

### Exact Sia script

Question ka order badlo. Where do you work? Sahi: Where do you work? Pattern: where, do, you, base verb. Where do you live? Where do you study? Do ko mat bhoolo. Bolke dekho: Where do you work? Work ki jagah live lagao. Where do you live? Ab study: Where do you study? Order wahi, action naya. Aaj ka word: Workplace. kaam ki jagah. My workplace is nearby. Ab apna question banao.

### Production prompt

```text

Produce SpeakX episodeSIA-2026-10-09: Question word order. Vertical1080×1920,target 37.6 seconds,maximum45seconds. Only Sia appears and speaks. Match the supplied character board exactly:Indian woman,mid-20s appearance,warm medium-brown skin,long centre-parted dark wavy hair with caramel ombré ends,dark brown eyes,defined brows,natural makeup,no jewellery,light heather-grey short-sleeve fitted mock-neck top. Use the approved Sia_v1 voice only;source/rights approval is still required. Warm,patient Hinglish;clear neutral Indian English;no invented or replacement voice.
PACE:Estimate140words/minute;natural140–165wpm Hinglish if the approved voice sounds clear. Never rush English pronunciation to fit. No recurring greeting,no long setup,no added filler.
SETTING:Virtual empty café table. No map;Sia hook then direct English model. No other visible people,reflections,crowds or voices. No implied real-world visit without verified assets.
VALUE:Start the useful model at2.0seconds: Where do you work?
GRAPHICS:Exact supplied SpeakX logo on end card only. Readable Romanized Hinglish subtitles. Every erroneous phrase,including a hook,has red ❌ WRONG from first appearance;correct models have✅. Silent cards are not spoken. Keep bottom20% and right12% clear. Map imagery must never cover teaching text.
AUDIO:Exact voiceover below,with stated silent practice holds. Soft original/licensed music under voice;at most one soft correction chime,no masked pronunciation.
EXACT SPOKEN SCRIPT: Question ka order badlo. Where do you work? Sahi: Where do you work? Pattern: where, do, you, base verb. Where do you live? Where do you study? Do ko mat bhoolo. Bolke dekho: Where do you work? Work ki jagah live lagao. Where do you live? Ab study: Where do you study? Order wahi, action naya. Aaj ka word: Workplace. kaam ki jagah. My workplace is nearby. Ab apna question banao.
SCENES:
0–2 seconds | VO: Question ka order badlo. | EXACT CAPTIONS: Question ka order badlo. | CARDS: ["Question ka order badlo."] | SHOT: Eye-level chest-up Sia in Virtual empty café table;immediate eye contact,no greeting or location tour. No map during the hook. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
2–4 seconds | VO: Where do you work? | EXACT CAPTIONS: Where do you work? | CARDS: ["✅ Where do you work?"] | SHOT: Eye-level Sia;correct English model appears beside her immediately,no map. | EDIT: No lead-in. Sia speaks the useful line immediately. Hold target text through any cutaway. | SILENT PRACTICE: 0 seconds.
4–8.8 seconds | VO: Sahi: Where do you work? Pattern: where, do, you, base verb. | EXACT CAPTIONS: Sahi: Where do you work? Pattern: where, do, you, base verb. | CARDS: ["❌ WRONG: Where you work?"] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
8.8–14.0 seconds | VO: Where do you live? Where do you study? Do ko mat bhoolo. | EXACT CAPTIONS: Where do you live? Where do you study? Do ko mat bhoolo. | CARDS: [] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
14.0–28.8 seconds | VO: Bolke dekho: Where do you work? Work ki jagah live lagao. Where do you live? Ab study: Where do you study? Order wahi, action naya. | EXACT CAPTIONS: Bolke dekho: Where do you work? Work ki jagah live lagao. Where do you live? Ab study: Where do you study? Order wahi, action naya. | CARDS: ["Where do you work?"] | SHOT: Locked eye-level Sia;small encouraging nod;hold still for two-second learner repetition. | EDIT: Sia gives the transfer example, then holds silently for 4 seconds while the learner says their own version. No filler or greeting. | SILENT PRACTICE: 4 seconds.
28.8–33.6 seconds | VO: Aaj ka word: Workplace. kaam ki jagah. My workplace is nearby. | EXACT CAPTIONS: Aaj ka word: Workplace. kaam ki jagah. My workplace is nearby. | CARDS: ["Workplace — kaam ki jagah", "My workplace is nearby."] | SHOT: Eye-level Sia with a compact word/meaning/example card beside her;no extra person or voice. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
33.6–37.6 seconds | VO: Ab apna question banao. | EXACT CAPTIONS: Ab apna question banao. | CARDS: [] | SHOT: Sia stays on screen with exact supplied SpeakX logo and one readable silent end card. | EDIT: Hold a silent end card after the practice action;no generic spoken sign-off. Specific silent next-episode tease:Kal: she ke saath do ya does? | SILENT PRACTICE: 0 seconds.
END: Deliver the complete answer today. Silent end-card text: Kal: she ke saath do ya does? No cliffhanger or generic spoken sign-off. Measure duration;check Sia identity,voice,pronunciation,captions and safe zones. Deliver video,cover,caption track,transcript and QA;do not publish. Editable provider-independent prompt;no render generated.

```

### Native platform package

```json

{
  "youtube": {
    "title": "Where Do You Work? English Question Order",
    "description": "Where do you work?\nSia shows the model first,then a brief Hinglish explanation.\nWhere do you ___ se apna question banao.\nWord:Workplace — kaam ki jagah; the place where you work. My workplace is nearby.\n#Shorts #SpeakX #EnglishPractice",
    "thumbnailCopy": "FIX THE ORDER",
    "tags": [
      "where do you work question",
      "Sentence Banao Friday",
      "Sia SpeakX",
      "spoken English Hinglish"
    ],
    "pinnedCommentDraft": "Try:Where do you ___ se apna question banao. Model:Where do you study? Your own version can be different.",
    "scheduleIST": "18:30"
  },
  "instagram": {
    "caption": "Question ka order badlo.\nWhere do you work?\nWhere do you ___ se apna question banao.\n#SpeakX #EnglishSeekho #SiaSikhaatiHai",
    "coverCopy": "FIX THE ORDER",
    "altText": "Sia in virtual coworking desk, teaching question word order; captions show: Where do you work?",
    "scheduleIST": "19:30"
  },
  "facebook": {
    "caption": "Question ka order badlo.\nWhere do you work?\nWhere do you ___ se apna question banao. SpeakX · Muh khol. English bol!",
    "title": "Where Do You Work? English Question Order",
    "scheduleIST": "20:00"
  },
  "x": {
    "morningText": "English tip: Where do you work? Today’s word: Workplace — the place where you work. Example: My workplace is nearby. #SpeakX",
    "eveningText": "Sia practice: Where do you ___ se apna question banao. Model: Where do you work? #SpeakX",
    "morningIST": "08:30",
    "eveningIST": "19:00"
  },
  "story": {
    "timeIST": "13:00",
    "frames": [
      "Where do you ___ se apna question banao.",
      "Where do you study?",
      "Try your own version;send a learning question if helpful."
    ]
  }
}

```

### Experiment

A task-led opening may help new colleague making small talk recognise relevance faster than hearing the model first;the model-first alternative may improve clarity.

Where do you work may be memorised without understanding order;animate only the do block.



## 2026-10-10 · She does not, not she do not

Galti Pakdo Saturday · Everyday English learner · Discovery · Pale-blue studio · 36.9s plan

### Hooks

- A (selected): She do? Ruko zara.

- B: She does not like tea.

- C: She does not drinks?

### Exact Sia script

She do? Ruko zara. She does not like tea. Sahi: She does not like tea. She ke saath does not, phir base verb. She does not drink coffee. Bolke dekho: She does not like tea. Ab he use karo. He does not drink coffee. Verb drink hi raha. Does ke baad extra s mat jodo. Aaj ka word: Prefer. zyada pasand karna. I prefer tea. Ab he ke saath try karo.

### Production prompt

```text

Produce SpeakX episodeSIA-2026-10-10: She does not, not she do not. Vertical1080×1920,target 36.9 seconds,maximum45seconds. Only Sia appears and speaks. Match the supplied character board exactly:Indian woman,mid-20s appearance,warm medium-brown skin,long centre-parted dark wavy hair with caramel ombré ends,dark brown eyes,defined brows,natural makeup,no jewellery,light heather-grey short-sleeve fitted mock-neck top. Use the approved Sia_v1 voice only;source/rights approval is still required. Warm,patient Hinglish;clear neutral Indian English;no invented or replacement voice.
PACE:Estimate140words/minute;natural140–165wpm Hinglish if the approved voice sounds clear. Never rush English pronunciation to fit. No recurring greeting,no long setup,no added filler.
SETTING:Pale-blue studio. No map;Sia hook then direct English model. No other visible people,reflections,crowds or voices. No implied real-world visit without verified assets.
VALUE:Start the useful model at2.0seconds: She does not like tea.
GRAPHICS:Exact supplied SpeakX logo on end card only. Readable Romanized Hinglish subtitles. Every erroneous phrase,including a hook,has red ❌ WRONG from first appearance;correct models have✅. Silent cards are not spoken. Keep bottom20% and right12% clear. Map imagery must never cover teaching text.
AUDIO:Exact voiceover below,with stated silent practice holds. Soft original/licensed music under voice;at most one soft correction chime,no masked pronunciation.
EXACT SPOKEN SCRIPT: She do? Ruko zara. She does not like tea. Sahi: She does not like tea. She ke saath does not, phir base verb. She does not drink coffee. Bolke dekho: She does not like tea. Ab he use karo. He does not drink coffee. Verb drink hi raha. Does ke baad extra s mat jodo. Aaj ka word: Prefer. zyada pasand karna. I prefer tea. Ab he ke saath try karo.
SCENES:
0–2 seconds | VO: She do? Ruko zara. | EXACT CAPTIONS: She do? Ruko zara. | CARDS: ["She do? Ruko zara."] | SHOT: Eye-level chest-up Sia in Pale-blue studio;immediate eye contact,no greeting or location tour. No map during the hook. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
2–4.2 seconds | VO: She does not like tea. | EXACT CAPTIONS: She does not like tea. | CARDS: ["✅ She does not like tea."] | SHOT: Eye-level Sia;correct English model appears beside her immediately,no map. | EDIT: No lead-in. Sia speaks the useful line immediately. Hold target text through any cutaway. | SILENT PRACTICE: 0 seconds.
4.2–10.2 seconds | VO: Sahi: She does not like tea. She ke saath does not, phir base verb. | EXACT CAPTIONS: Sahi: She does not like tea. She ke saath does not, phir base verb. | CARDS: ["❌ WRONG: She do not like tea."] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
10.2–12.4 seconds | VO: She does not drink coffee. | EXACT CAPTIONS: She does not drink coffee. | CARDS: ["❌ WRONG: She does not drinks coffee."] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
12.4–28.0 seconds | VO: Bolke dekho: She does not like tea. Ab he use karo. He does not drink coffee. Verb drink hi raha. Does ke baad extra s mat jodo. | EXACT CAPTIONS: Bolke dekho: She does not like tea. Ab he use karo. He does not drink coffee. Verb drink hi raha. Does ke baad extra s mat jodo. | CARDS: ["She does not like tea."] | SHOT: Locked eye-level Sia;small encouraging nod;hold still for two-second learner repetition. | EDIT: Sia gives the transfer example, then holds silently for 4 seconds while the learner says their own version. No filler or greeting. | SILENT PRACTICE: 4 seconds.
28.0–32.3 seconds | VO: Aaj ka word: Prefer. zyada pasand karna. I prefer tea. | EXACT CAPTIONS: Aaj ka word: Prefer. zyada pasand karna. I prefer tea. | CARDS: ["Prefer — zyada pasand karna", "I prefer tea."] | SHOT: Eye-level Sia with a compact word/meaning/example card beside her;no extra person or voice. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
32.3–36.9 seconds | VO: Ab he ke saath try karo. | EXACT CAPTIONS: Ab he ke saath try karo. | CARDS: [] | SHOT: Sia stays on screen with exact supplied SpeakX logo and one readable silent end card. | EDIT: Hold a silent end card after the practice action;no generic spoken sign-off. Specific silent next-episode tease:Kal: hafte ka three-question check. | SILENT PRACTICE: 0 seconds.
END: Deliver the complete answer today. Silent end-card text: Kal: hafte ka three-question check.. No cliffhanger or generic spoken sign-off. Measure duration;check Sia identity,voice,pronunciation,captions and safe zones. Deliver video,cover,caption track,transcript and QA;do not publish. Editable provider-independent prompt;no render generated.

```

### Native platform package

```json

{
  "youtube": {
    "title": "She Does Not: A Common English Fix",
    "description": "She does not like tea.\nSia shows the model first,then a brief Hinglish explanation.\nHe ___ not like coffee: sahi word chuno.\nWord:Prefer — zyada pasand karna; like one option more. I prefer tea.\n#Shorts #SpeakX #EnglishPractice",
    "thumbnailCopy": "DO OR DOES?",
    "tags": [
      "she does not grammar",
      "Galti Pakdo Saturday",
      "Sia SpeakX",
      "spoken English Hinglish"
    ],
    "pinnedCommentDraft": "Try:He ___ not like coffee: sahi word chuno. Model:He does not like coffee. Your own version can be different.",
    "scheduleIST": "10:30"
  },
  "instagram": {
    "caption": "She do? Ruko zara.\nShe does not like tea.\nHe ___ not like coffee: sahi word chuno.\n#SpeakX #EnglishSeekho #SiaSikhaatiHai",
    "coverCopy": "DO OR DOES?",
    "altText": "Sia in pale-blue studio, teaching she does not, not she do not; captions show: She does not like tea.",
    "scheduleIST": "11:00"
  },
  "facebook": {
    "caption": "She do? Ruko zara.\nShe does not like tea.\nHe ___ not like coffee: sahi word chuno. SpeakX · Muh khol. English bol!",
    "title": "She Does Not: A Common English Fix",
    "scheduleIST": "11:30"
  },
  "x": {
    "morningText": "English tip: She does not like tea. Today’s word: Prefer — like one option more. Example: I prefer tea. #SpeakX",
    "eveningText": "Sia practice: He ___ not like coffee: sahi word chuno. Model: She does not like tea. #SpeakX",
    "morningIST": "08:30",
    "eveningIST": "19:00"
  },
  "story": {
    "timeIST": "13:00",
    "frames": [
      "He ___ not like coffee: sahi word chuno.",
      "He does not like coffee.",
      "Try your own version;send a learning question if helpful."
    ]
  }
}

```

### Experiment

A task-led opening may help everyday english learner recognise relevance faster than hearing the model first;the model-first alternative may improve clarity.

Two wrong examples can leave the wrong form in memory;finish on the correct model.



## 2026-10-11 · Week two mini test

Revision Sunday · Busy learner revising the week · Community · Pale-blue studio · 39.6s plan

### Hooks

- A (selected): Bina notes, teen answers.

- B: He is ready.

- C: Is, books, do: choose.

### Exact Sia script

Bina notes, teen answers. He is ready. One: He ___ ready. Is. Two: One book, two ___? Books. Three: Where ___ you work? Do. Jo miss hua, phir bolo. Bolke dekho: He is ready. Ab apne examples bolo. She is ready. Two pens. Where do you study? Same patterns, naye words: practice aise badhti hai. Aaj ka word: Progress. taraqqi. Small steps bring progress. Missed answer phir bolo.

### Production prompt

```text

Produce SpeakX episodeSIA-2026-10-11: Week two mini test. Vertical1080×1920,target 39.6 seconds,maximum45seconds. Only Sia appears and speaks. Match the supplied character board exactly:Indian woman,mid-20s appearance,warm medium-brown skin,long centre-parted dark wavy hair with caramel ombré ends,dark brown eyes,defined brows,natural makeup,no jewellery,light heather-grey short-sleeve fitted mock-neck top. Use the approved Sia_v1 voice only;source/rights approval is still required. Warm,patient Hinglish;clear neutral Indian English;no invented or replacement voice.
PACE:Estimate140words/minute;natural140–165wpm Hinglish if the approved voice sounds clear. Never rush English pronunciation to fit. No recurring greeting,no long setup,no added filler.
SETTING:Pale-blue studio. No map;Sia hook then direct English model. No other visible people,reflections,crowds or voices. No implied real-world visit without verified assets.
VALUE:Start the useful model at2.0seconds: He is ready.
GRAPHICS:Exact supplied SpeakX logo on end card only. Readable Romanized Hinglish subtitles. Every erroneous phrase,including a hook,has red ❌ WRONG from first appearance;correct models have✅. Silent cards are not spoken. Keep bottom20% and right12% clear. Map imagery must never cover teaching text.
AUDIO:Exact voiceover below,with stated silent practice holds. Soft original/licensed music under voice;at most one soft correction chime,no masked pronunciation.
EXACT SPOKEN SCRIPT: Bina notes, teen answers. He is ready. One: He ___ ready. Is. Two: One book, two ___? Books. Three: Where ___ you work? Do. Jo miss hua, phir bolo. Bolke dekho: He is ready. Ab apne examples bolo. She is ready. Two pens. Where do you study? Same patterns, naye words: practice aise badhti hai. Aaj ka word: Progress. taraqqi. Small steps bring progress. Missed answer phir bolo.
SCENES:
0–2 seconds | VO: Bina notes, teen answers. | EXACT CAPTIONS: Bina notes, teen answers. | CARDS: ["Bina notes, teen answers."] | SHOT: Eye-level chest-up Sia in Pale-blue studio;immediate eye contact,no greeting or location tour. No map during the hook. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
2–4 seconds | VO: He is ready. | EXACT CAPTIONS: He is ready. | CARDS: ["✅ He is ready."] | SHOT: Eye-level Sia;correct English model appears beside her immediately,no map. | EDIT: No lead-in. Sia speaks the useful line immediately. Hold target text through any cutaway. | SILENT PRACTICE: 0 seconds.
4–9.3 seconds | VO: One: He ___ ready. Is. Two: One book, two ___? | EXACT CAPTIONS: One: He ___ ready. Is. Two: One book, two ___? | CARDS: [] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 1 seconds.
9.3–16.5 seconds | VO: Books. Three: Where ___ you work? Do. Jo miss hua, phir bolo. | EXACT CAPTIONS: Books. Three: Where ___ you work? Do. Jo miss hua, phir bolo. | CARDS: [] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 2 seconds.
16.5–31.7 seconds | VO: Bolke dekho: He is ready. Ab apne examples bolo. She is ready. Two pens. Where do you study? Same patterns, naye words: practice aise badhti hai. | EXACT CAPTIONS: Bolke dekho: He is ready. Ab apne examples bolo. She is ready. Two pens. Where do you study? Same patterns, naye words: practice aise badhti hai. | CARDS: ["He is ready. Two books. Where do you work?"] | SHOT: Locked eye-level Sia;small encouraging nod;hold still for two-second learner repetition. | EDIT: Sia gives the transfer example, then holds silently for 4 seconds while the learner says their own version. No filler or greeting. | SILENT PRACTICE: 4 seconds.
31.7–35.6 seconds | VO: Aaj ka word: Progress. taraqqi. Small steps bring progress. | EXACT CAPTIONS: Aaj ka word: Progress. taraqqi. Small steps bring progress. | CARDS: ["Progress — taraqqi", "Small steps bring progress."] | SHOT: Eye-level Sia with a compact word/meaning/example card beside her;no extra person or voice. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
35.6–39.6 seconds | VO: Missed answer phir bolo. | EXACT CAPTIONS: Missed answer phir bolo. | CARDS: [] | SHOT: Sia stays on screen with exact supplied SpeakX logo and one readable silent end card. | EDIT: Hold a silent end card after the practice action;no generic spoken sign-off. Specific silent next-episode tease:Kal: apni strength ka real example. | SILENT PRACTICE: 0 seconds.
END: Deliver the complete answer today. Silent end-card text: Kal: apni strength ka real example.. No cliffhanger or generic spoken sign-off. Measure duration;check Sia identity,voice,pronunciation,captions and safe zones. Deliver video,cover,caption track,transcript and QA;do not publish. Editable provider-independent prompt;no render generated.

```

### Native platform package

```json

{
  "youtube": {
    "title": "English Revision: Am/Is, Plurals and Questions",
    "description": "He is ready.\nSia shows the model first,then a brief Hinglish explanation.\nTeen mein jo miss hua, dobara bolo.\nWord:Progress — taraqqi; improvement over time. Small steps bring progress.\n#Shorts #SpeakX #EnglishPractice",
    "thumbnailCopy": "CHECK YOUR PROGRESS",
    "tags": [
      "English practice quiz beginner",
      "Revision Sunday",
      "Sia SpeakX",
      "spoken English Hinglish"
    ],
    "pinnedCommentDraft": "Try:Teen mein jo miss hua, dobara bolo. Model:is; books; do. Your own version can be different.",
    "scheduleIST": "10:30"
  },
  "instagram": {
    "caption": "Bina notes, teen answers.\nHe is ready. Two books. Where do you work?\nTeen mein jo miss hua, dobara bolo.\n#SpeakX #EnglishSeekho #SiaSikhaatiHai",
    "coverCopy": "CHECK YOUR PROGRESS",
    "altText": "Sia in pale-blue studio, teaching week two mini test; captions show: He is ready. Two books. Where do you work?",
    "scheduleIST": "11:00"
  },
  "facebook": {
    "caption": "Bina notes, teen answers.\nHe is ready.\nTeen mein jo miss hua, dobara bolo. SpeakX · Muh khol. English bol!",
    "title": "English Revision: Am/Is, Plurals and Questions",
    "scheduleIST": "11:30"
  },
  "x": {
    "morningText": "English tip: He is ready. Two books. Where do you work? Today’s word: Progress — improvement over time. Example: Small steps bring progress. #SpeakX",
    "eveningText": "Sia practice: Teen mein jo miss hua, dobara bolo. Model: He is ready. Two books. Where do you work? #SpeakX",
    "morningIST": "08:30",
    "eveningIST": "19:00"
  },
  "story": {
    "timeIST": "13:00",
    "frames": [
      "Teen mein jo miss hua, dobara bolo.",
      "is; books; do.",
      "Try your own version;send a learning question if helpful."
    ]
  }
}

```

### Experiment

A task-led opening may help busy learner revising the week recognise relevance faster than hearing the model first;the model-first alternative may improve clarity.

Revising unrelated micro-rules can feel fragmented;state that this is the weekly check.



## 2026-10-12 · Reliable: describe a strength

Word Wala Monday · Early-career candidate · Discovery · Pale-blue studio · 35.5s plan

### Hooks

- A (selected): Strength? Example bhi do.

- B: I am reliable.

- C: Reliable bolna kaafi hai?

### Exact Sia script

Strength? Example bhi do. I am reliable. Aaj ka word reliable: ri-LAI-uh-bul. Matlab bharosemand. I am reliable. She is a reliable teammate. Example jodo: I finish my tasks on time. Reliable adjective hai. Bolke dekho: I am reliable. Ab strength ka proof do. I finish my tasks on time. Sirf reliable mat bolo; apni real habit bhi samjhao. Apna sachcha example bolo.

### Production prompt

```text

Produce SpeakX episodeSIA-2026-10-12: Reliable: describe a strength. Vertical1080×1920,target 35.5 seconds,maximum45seconds. Only Sia appears and speaks. Match the supplied character board exactly:Indian woman,mid-20s appearance,warm medium-brown skin,long centre-parted dark wavy hair with caramel ombré ends,dark brown eyes,defined brows,natural makeup,no jewellery,light heather-grey short-sleeve fitted mock-neck top. Use the approved Sia_v1 voice only;source/rights approval is still required. Warm,patient Hinglish;clear neutral Indian English;no invented or replacement voice.
PACE:Estimate140words/minute;natural140–165wpm Hinglish if the approved voice sounds clear. Never rush English pronunciation to fit. No recurring greeting,no long setup,no added filler.
SETTING:Pale-blue studio. No map;Sia hook then direct English model. No other visible people,reflections,crowds or voices. No implied real-world visit without verified assets.
VALUE:Start the useful model at2.0seconds: I am reliable.
GRAPHICS:Exact supplied SpeakX logo on end card only. Readable Romanized Hinglish subtitles. Every erroneous phrase,including a hook,has red ❌ WRONG from first appearance;correct models have✅. Silent cards are not spoken. Keep bottom20% and right12% clear. Map imagery must never cover teaching text.
AUDIO:Exact voiceover below,with stated silent practice holds. Soft original/licensed music under voice;at most one soft correction chime,no masked pronunciation.
EXACT SPOKEN SCRIPT: Strength? Example bhi do. I am reliable. Aaj ka word reliable: ri-LAI-uh-bul. Matlab bharosemand. I am reliable. She is a reliable teammate. Example jodo: I finish my tasks on time. Reliable adjective hai. Bolke dekho: I am reliable. Ab strength ka proof do. I finish my tasks on time. Sirf reliable mat bolo; apni real habit bhi samjhao. Apna sachcha example bolo.
SCENES:
0–2 seconds | VO: Strength? Example bhi do. | EXACT CAPTIONS: Strength? Example bhi do. | CARDS: ["Strength? Example bhi do."] | SHOT: Eye-level chest-up Sia in Pale-blue studio;immediate eye contact,no greeting or location tour. No map during the hook. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
2–4 seconds | VO: I am reliable. | EXACT CAPTIONS: I am reliable. | CARDS: ["✅ I am reliable."] | SHOT: Eye-level Sia;correct English model appears beside her immediately,no map. | EDIT: No lead-in. Sia speaks the useful line immediately. Hold target text through any cutaway. | SILENT PRACTICE: 0 seconds.
4–8.3 seconds | VO: Aaj ka word reliable: ri-LAI-uh-bul. Matlab bharosemand. I am reliable. | EXACT CAPTIONS: Aaj ka word reliable: ri-LAI-uh-bul. Matlab bharosemand. I am reliable. | CARDS: [] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
8.3–15.2 seconds | VO: She is a reliable teammate. Example jodo: I finish my tasks on time. Reliable adjective hai. | EXACT CAPTIONS: She is a reliable teammate. Example jodo: I finish my tasks on time. Reliable adjective hai. | CARDS: ["❌ WRONG: I am reliably."] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
15.2–31.5 seconds | VO: Bolke dekho: I am reliable. Ab strength ka proof do. I finish my tasks on time. Sirf reliable mat bolo; apni real habit bhi samjhao. | EXACT CAPTIONS: Bolke dekho: I am reliable. Ab strength ka proof do. I finish my tasks on time. Sirf reliable mat bolo; apni real habit bhi samjhao. | CARDS: ["I am reliable."] | SHOT: Locked eye-level Sia;small encouraging nod;hold still for two-second learner repetition. | EDIT: Sia gives the transfer example, then holds silently for 5.5 seconds while the learner says their own version. No filler or greeting. | SILENT PRACTICE: 5.5 seconds.
31.5–35.5 seconds | VO: Apna sachcha example bolo. | EXACT CAPTIONS: Apna sachcha example bolo. | CARDS: [] | SHOT: Sia stays on screen with exact supplied SpeakX logo and one readable silent end card. | EDIT: Hold a silent end card after the practice action;no generic spoken sign-off. Specific silent next-episode tease:Kal: has aur have ka choice. | SILENT PRACTICE: 0 seconds.
END: Deliver the complete answer today. Silent end-card text: Kal: has aur have ka choice.. No cliffhanger or generic spoken sign-off. Measure duration;check Sia identity,voice,pronunciation,captions and safe zones. Deliver video,cover,caption track,transcript and QA;do not publish. Editable provider-independent prompt;no render generated.

```

### Native platform package

```json

{
  "youtube": {
    "title": "Reliable: Explain Your Strength in an Interview",
    "description": "I am reliable.\nSia shows the model first,then a brief Hinglish explanation.\nApni strength ke saath ek sachcha example do.\nWord:Reliable — bharosemand; someone you can depend on. She is a reliable teammate.\n#Shorts #SpeakX #EnglishPractice",
    "thumbnailCopy": "SHOW YOUR STRENGTH",
    "tags": [
      "reliable meaning interview example",
      "Word Wala Monday",
      "Sia SpeakX",
      "spoken English Hinglish"
    ],
    "pinnedCommentDraft": "Try:Apni strength ke saath ek sachcha example do. Model:I am reliable. I finish my tasks on time. Your own version can be different.",
    "scheduleIST": "18:30"
  },
  "instagram": {
    "caption": "Strength? Example bhi do.\nI am reliable.\nApni strength ke saath ek sachcha example do.\n#SpeakX #EnglishSeekho #SiaSikhaatiHai",
    "coverCopy": "SHOW YOUR STRENGTH",
    "altText": "Sia in pale-blue studio, teaching reliable: describe a strength; captions show: I am reliable.",
    "scheduleIST": "19:30"
  },
  "facebook": {
    "caption": "Strength? Example bhi do.\nI am reliable.\nApni strength ke saath ek sachcha example do. SpeakX · Muh khol. English bol!",
    "title": "Reliable: Explain Your Strength in an Interview",
    "scheduleIST": "20:00"
  },
  "x": {
    "morningText": "English tip: I am reliable. Today’s word: Reliable — someone you can depend on. Example: She is a reliable teammate. #SpeakX",
    "eveningText": "Sia practice: Apni strength ke saath ek sachcha example do. Model: I am reliable. #SpeakX",
    "morningIST": "08:30",
    "eveningIST": "19:00"
  },
  "story": {
    "timeIST": "13:00",
    "frames": [
      "Apni strength ke saath ek sachcha example do.",
      "I am reliable. I finish my tasks on time.",
      "Try your own version;send a learning question if helpful."
    ]
  }
}

```

### Experiment

A task-led opening may help early-career candidate recognise relevance faster than hearing the model first;the model-first alternative may improve clarity.

Reliable can sound like an empty interview claim;the real example must be explicit.



## 2026-10-13 · Has and have

Grammar Tuesday · Student describing belongings · Discovery · Pale-blue studio · 37.3s plan

### Hooks

- A (selected): Has ya have?

- B: She has a laptop.

- C: She have a laptop?

### Exact Sia script

Has ya have? She has a laptop. I, you, we, they ke saath have. He, she, it ke saath has. I have a laptop. She has a laptop. Bolke dekho: She has a laptop. Ab plan use karo. We have a plan. She has a plan. We se she hua, toh have se has. Aaj ka word: Resource. saadhan. This book is a useful resource. They ke saath try karo.

### Production prompt

```text

Produce SpeakX episodeSIA-2026-10-13: Has and have. Vertical1080×1920,target 37.3 seconds,maximum45seconds. Only Sia appears and speaks. Match the supplied character board exactly:Indian woman,mid-20s appearance,warm medium-brown skin,long centre-parted dark wavy hair with caramel ombré ends,dark brown eyes,defined brows,natural makeup,no jewellery,light heather-grey short-sleeve fitted mock-neck top. Use the approved Sia_v1 voice only;source/rights approval is still required. Warm,patient Hinglish;clear neutral Indian English;no invented or replacement voice.
PACE:Estimate140words/minute;natural140–165wpm Hinglish if the approved voice sounds clear. Never rush English pronunciation to fit. No recurring greeting,no long setup,no added filler.
SETTING:Pale-blue studio. No map;Sia hook then direct English model. No other visible people,reflections,crowds or voices. No implied real-world visit without verified assets.
VALUE:Start the useful model at2.0seconds: She has a laptop.
GRAPHICS:Exact supplied SpeakX logo on end card only. Readable Romanized Hinglish subtitles. Every erroneous phrase,including a hook,has red ❌ WRONG from first appearance;correct models have✅. Silent cards are not spoken. Keep bottom20% and right12% clear. Map imagery must never cover teaching text.
AUDIO:Exact voiceover below,with stated silent practice holds. Soft original/licensed music under voice;at most one soft correction chime,no masked pronunciation.
EXACT SPOKEN SCRIPT: Has ya have? She has a laptop. I, you, we, they ke saath have. He, she, it ke saath has. I have a laptop. She has a laptop. Bolke dekho: She has a laptop. Ab plan use karo. We have a plan. She has a plan. We se she hua, toh have se has. Aaj ka word: Resource. saadhan. This book is a useful resource. They ke saath try karo.
SCENES:
0–2 seconds | VO: Has ya have? | EXACT CAPTIONS: Has ya have? | CARDS: ["Has ya have?"] | SHOT: Eye-level chest-up Sia in Pale-blue studio;immediate eye contact,no greeting or location tour. No map during the hook. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
2–4 seconds | VO: She has a laptop. | EXACT CAPTIONS: She has a laptop. | CARDS: ["✅ She has a laptop."] | SHOT: Eye-level Sia;correct English model appears beside her immediately,no map. | EDIT: No lead-in. Sia speaks the useful line immediately. Hold target text through any cutaway. | SILENT PRACTICE: 0 seconds.
4–9.6 seconds | VO: I, you, we, they ke saath have. He, she, it ke saath has. | EXACT CAPTIONS: I, you, we, they ke saath have. He, she, it ke saath has. | CARDS: [] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
9.6–13.1 seconds | VO: I have a laptop. She has a laptop. | EXACT CAPTIONS: I have a laptop. She has a laptop. | CARDS: ["❌ WRONG: She have a laptop."] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
13.1–28.3 seconds | VO: Bolke dekho: She has a laptop. Ab plan use karo. We have a plan. She has a plan. We se she hua, toh have se has. | EXACT CAPTIONS: Bolke dekho: She has a laptop. Ab plan use karo. We have a plan. She has a plan. We se she hua, toh have se has. | CARDS: ["She has a laptop. I have a laptop."] | SHOT: Locked eye-level Sia;small encouraging nod;hold still for two-second learner repetition. | EDIT: Sia gives the transfer example, then holds silently for 4 seconds while the learner says their own version. No filler or greeting. | SILENT PRACTICE: 4 seconds.
28.3–33.1 seconds | VO: Aaj ka word: Resource. saadhan. This book is a useful resource. | EXACT CAPTIONS: Aaj ka word: Resource. saadhan. This book is a useful resource. | CARDS: ["Resource — saadhan", "This book is a useful resource."] | SHOT: Eye-level Sia with a compact word/meaning/example card beside her;no extra person or voice. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
33.1–37.3 seconds | VO: They ke saath try karo. | EXACT CAPTIONS: They ke saath try karo. | CARDS: [] | SHOT: Sia stays on screen with exact supplied SpeakX logo and one readable silent end card. | EDIT: Hold a silent end card after the practice action;no generic spoken sign-off. Specific silent next-episode tease:Kal: city se cities ka rule. | SILENT PRACTICE: 0 seconds.
END: Deliver the complete answer today. Silent end-card text: Kal: city se cities ka rule.. No cliffhanger or generic spoken sign-off. Measure duration;check Sia identity,voice,pronunciation,captions and safe zones. Deliver video,cover,caption track,transcript and QA;do not publish. Editable provider-independent prompt;no render generated.

```

### Native platform package

```json

{
  "youtube": {
    "title": "Has vs Have: Simple English Practice",
    "description": "She has a laptop.\nSia shows the model first,then a brief Hinglish explanation.\nThey ___ a plan: has ya have?\nWord:Resource — saadhan; something useful for a task. This book is a useful resource.\n#Shorts #SpeakX #EnglishPractice",
    "thumbnailCopy": "HAS OR HAVE?",
    "tags": [
      "has have English Hindi",
      "Grammar Tuesday",
      "Sia SpeakX",
      "spoken English Hinglish"
    ],
    "pinnedCommentDraft": "Try:They ___ a plan: has ya have? Model:They have a plan. Your own version can be different.",
    "scheduleIST": "18:30"
  },
  "instagram": {
    "caption": "Has ya have?\nShe has a laptop. I have a laptop.\nThey ___ a plan: has ya have?\n#SpeakX #EnglishSeekho #SiaSikhaatiHai",
    "coverCopy": "HAS OR HAVE?",
    "altText": "Sia in pale-blue studio, teaching has and have; captions show: She has a laptop. I have a laptop.",
    "scheduleIST": "19:30"
  },
  "facebook": {
    "caption": "Has ya have?\nShe has a laptop.\nThey ___ a plan: has ya have? SpeakX · Muh khol. English bol!",
    "title": "Has vs Have: Simple English Practice",
    "scheduleIST": "20:00"
  },
  "x": {
    "morningText": "English tip: She has a laptop. I have a laptop. Today’s word: Resource — something useful for a task. Example: This book is a useful resource. #SpeakX",
    "eveningText": "Sia practice: They ___ a plan: has ya have? Model: She has a laptop. I have a laptop. #SpeakX",
    "morningIST": "08:30",
    "eveningIST": "19:00"
  },
  "story": {
    "timeIST": "13:00",
    "frames": [
      "They ___ a plan: has ya have?",
      "They have a plan.",
      "Try your own version;send a learning question if helpful."
    ]
  }
}

```

### Experiment

A task-led opening may help student describing belongings recognise relevance faster than hearing the model first;the model-first alternative may improve clarity.

Possession examples must not imply has/have covers every grammatical use.



## 2026-10-14 · City becomes cities

Ek ya Anek Wednesday · Learner planning a trip · Discovery · Virtual airport information desk · 36.6s plan

### Hooks

- A (selected): City mein s lagao?

- B: One city.

- C: Cities, lekin days kyun?

### Exact Sia script

City mein s lagao? One city. Consonant plus y: y hata kar ies. City se cities. Baby se babies. Vowel plus y: sirf s. Day se days. Sahi: Two cities. Bolke dekho: One city. Story ka ending bhi consonant plus y hai. One story, two stories. Day mein vowel hai: one day, two days. Aaj ka word: Journey. safar. Our journey starts today. Story ka plural bolo.

### Production prompt

```text

Produce SpeakX episodeSIA-2026-10-14: City becomes cities. Vertical1080×1920,target 36.6 seconds,maximum45seconds. Only Sia appears and speaks. Match the supplied character board exactly:Indian woman,mid-20s appearance,warm medium-brown skin,long centre-parted dark wavy hair with caramel ombré ends,dark brown eyes,defined brows,natural makeup,no jewellery,light heather-grey short-sleeve fitted mock-neck top. Use the approved Sia_v1 voice only;source/rights approval is still required. Warm,patient Hinglish;clear neutral Indian English;no invented or replacement voice.
PACE:Estimate140words/minute;natural140–165wpm Hinglish if the approved voice sounds clear. Never rush English pronunciation to fit. No recurring greeting,no long setup,no added filler.
SETTING:Virtual airport information desk. No map;Sia hook then direct English model. No other visible people,reflections,crowds or voices. No implied real-world visit without verified assets.
VALUE:Start the useful model at2.0seconds: One city.
GRAPHICS:Exact supplied SpeakX logo on end card only. Readable Romanized Hinglish subtitles. Every erroneous phrase,including a hook,has red ❌ WRONG from first appearance;correct models have✅. Silent cards are not spoken. Keep bottom20% and right12% clear. Map imagery must never cover teaching text.
AUDIO:Exact voiceover below,with stated silent practice holds. Soft original/licensed music under voice;at most one soft correction chime,no masked pronunciation.
EXACT SPOKEN SCRIPT: City mein s lagao? One city. Consonant plus y: y hata kar ies. City se cities. Baby se babies. Vowel plus y: sirf s. Day se days. Sahi: Two cities. Bolke dekho: One city. Story ka ending bhi consonant plus y hai. One story, two stories. Day mein vowel hai: one day, two days. Aaj ka word: Journey. safar. Our journey starts today. Story ka plural bolo.
SCENES:
0–2 seconds | VO: City mein s lagao? | EXACT CAPTIONS: City mein s lagao? | CARDS: ["City mein s lagao?"] | SHOT: Eye-level chest-up Sia in Virtual airport information desk;immediate eye contact,no greeting or location tour. No map during the hook. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
2–4 seconds | VO: One city. | EXACT CAPTIONS: One city. | CARDS: ["✅ One city."] | SHOT: Eye-level Sia;correct English model appears beside her immediately,no map. | EDIT: No lead-in. Sia speaks the useful line immediately. Hold target text through any cutaway. | SILENT PRACTICE: 0 seconds.
4–9.6 seconds | VO: Consonant plus y: y hata kar ies. City se cities. Baby se babies. | EXACT CAPTIONS: Consonant plus y: y hata kar ies. City se cities. Baby se babies. | CARDS: [] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
9.6–14.4 seconds | VO: Vowel plus y: sirf s. Day se days. Sahi: Two cities. | EXACT CAPTIONS: Vowel plus y: sirf s. Day se days. Sahi: Two cities. | CARDS: ["❌ WRONG: Two city."] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
14.4–28.7 seconds | VO: Bolke dekho: One city. Story ka ending bhi consonant plus y hai. One story, two stories. Day mein vowel hai: one day, two days. | EXACT CAPTIONS: Bolke dekho: One city. Story ka ending bhi consonant plus y hai. One story, two stories. Day mein vowel hai: one day, two days. | CARDS: ["One city. Two cities."] | SHOT: Locked eye-level Sia;small encouraging nod;hold still for two-second learner repetition. | EDIT: Sia gives the transfer example, then holds silently for 4 seconds while the learner says their own version. No filler or greeting. | SILENT PRACTICE: 4 seconds.
28.7–32.6 seconds | VO: Aaj ka word: Journey. safar. Our journey starts today. | EXACT CAPTIONS: Aaj ka word: Journey. safar. Our journey starts today. | CARDS: ["Journey — safar", "Our journey starts today."] | SHOT: Eye-level Sia with a compact word/meaning/example card beside her;no extra person or voice. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
32.6–36.6 seconds | VO: Story ka plural bolo. | EXACT CAPTIONS: Story ka plural bolo. | CARDS: [] | SHOT: Sia stays on screen with exact supplied SpeakX logo and one readable silent end card. | EDIT: Hold a silent end card after the practice action;no generic spoken sign-off. Specific silent next-episode tease:Kal: interview question repeat karwao. | SILENT PRACTICE: 0 seconds.
END: Deliver the complete answer today. Silent end-card text: Kal: interview question repeat karwao.. No cliffhanger or generic spoken sign-off. Measure duration;check Sia identity,voice,pronunciation,captions and safe zones. Deliver video,cover,caption track,transcript and QA;do not publish. Editable provider-independent prompt;no render generated.

```

### Native platform package

```json

{
  "youtube": {
    "title": "City to Cities: The Y to IES Rule",
    "description": "One city.\nSia shows the model first,then a brief Hinglish explanation.\nOne story, two ___ bolo.\nWord:Journey — safar; a trip from one place to another. Our journey starts today.\n#Shorts #SpeakX #EnglishPractice",
    "thumbnailCopy": "CITY BECOMES CITIES",
    "tags": [
      "city cities plural rule",
      "Ek ya Anek Wednesday",
      "Sia SpeakX",
      "spoken English Hinglish"
    ],
    "pinnedCommentDraft": "Try:One story, two ___ bolo. Model:Two stories. Your own version can be different.",
    "scheduleIST": "18:30"
  },
  "instagram": {
    "caption": "City mein s lagao?\nOne city. Two cities.\nOne story, two ___ bolo.\n#SpeakX #EnglishSeekho #SiaSikhaatiHai",
    "coverCopy": "CITY BECOMES CITIES",
    "altText": "Sia in virtual airport information desk, teaching city becomes cities; captions show: One city. Two cities.",
    "scheduleIST": "19:30"
  },
  "facebook": {
    "caption": "City mein s lagao?\nOne city.\nOne story, two ___ bolo. SpeakX · Muh khol. English bol!",
    "title": "City to Cities: The Y to IES Rule",
    "scheduleIST": "20:00"
  },
  "x": {
    "morningText": "English tip: One city. Two cities. Today’s word: Journey — a trip from one place to another. Example: Our journey starts today. #SpeakX",
    "eveningText": "Sia practice: One story, two ___ bolo. Model: One city. Two cities. #SpeakX",
    "morningIST": "08:30",
    "eveningIST": "19:00"
  },
  "story": {
    "timeIST": "13:00",
    "frames": [
      "One story, two ___ bolo.",
      "Two stories.",
      "Try your own version;send a learning question if helpful."
    ]
  }
}

```

### Experiment

A task-led opening may help learner planning a trip recognise relevance faster than hearing the model first;the model-first alternative may improve clarity.

The consonant/vowel distinction adds reading load;show city/day endings clearly.



## 2026-10-15 · Ask an interviewer to repeat

Baat-Cheet Thursday · Candidate nervous about clarification · Trust · Virtual interview room · 35.0s plan

### Hooks

- A (selected): Sawaal miss hua?

- B: Could you please repeat the question?

- C: Guess karoge ya poochoge?

### Exact Sia script

Sawaal miss hua? Could you please repeat the question? Could you please repeat the question? Thank you. Yeh polite request hai. Bolke dekho: Could you please repeat the question? Ab request ko calm pace par bolo. Could you please repeat the question? Guess karne se better hai politely poochna. Aaj ka word: Clarify. saaf samjhana. Could you clarify that point? Request bina dekhe bolo.

### Production prompt

```text

Produce SpeakX episodeSIA-2026-10-15: Ask an interviewer to repeat. Vertical1080×1920,target 35.0 seconds,maximum45seconds. Only Sia appears and speaks. Match the supplied character board exactly:Indian woman,mid-20s appearance,warm medium-brown skin,long centre-parted dark wavy hair with caramel ombré ends,dark brown eyes,defined brows,natural makeup,no jewellery,light heather-grey short-sleeve fitted mock-neck top. Use the approved Sia_v1 voice only;source/rights approval is still required. Warm,patient Hinglish;clear neutral Indian English;no invented or replacement voice.
PACE:Estimate140words/minute;natural140–165wpm Hinglish if the approved voice sounds clear. Never rush English pronunciation to fit. No recurring greeting,no long setup,no added filler.
SETTING:Virtual interview room. 0–2seconds Sia hook;2–3seconds one-second approved map cutaway under Sia’s answer audio;keep the English model visible and return to Sia. No other visible people,reflections,crowds or voices. No implied real-world visit without verified assets.
VALUE:Start the useful model at2.0seconds: Could you please repeat the question?
GRAPHICS:Exact supplied SpeakX logo on end card only. Readable Romanized Hinglish subtitles. Every erroneous phrase,including a hook,has red ❌ WRONG from first appearance;correct models have✅. Silent cards are not spoken. Keep bottom20% and right12% clear. Map imagery must never cover teaching text.
AUDIO:Exact voiceover below,with stated silent practice holds. Soft original/licensed music under voice;at most one soft correction chime,no masked pronunciation.
EXACT SPOKEN SCRIPT: Sawaal miss hua? Could you please repeat the question? Could you please repeat the question? Thank you. Yeh polite request hai. Bolke dekho: Could you please repeat the question? Ab request ko calm pace par bolo. Could you please repeat the question? Guess karne se better hai politely poochna. Aaj ka word: Clarify. saaf samjhana. Could you clarify that point? Request bina dekhe bolo.
SCENES:
0–2 seconds | VO: Sawaal miss hua? | EXACT CAPTIONS: Sawaal miss hua? | CARDS: ["Sawaal miss hua?"] | SHOT: Eye-level chest-up Sia in Virtual interview room;immediate eye contact,no greeting or location tour. No map during the hook. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
2–4.6 seconds | VO: Could you please repeat the question? | EXACT CAPTIONS: Could you please repeat the question? | CARDS: ["✅ Could you please repeat the question?"] | SHOT: At2–3seconds show an approved one-second map-pin cutaway under continuing Sia audio,then eye-level Sia at Virtual interview room. Keep the English model in a separate safe text region throughout;the map must not cover it. | EDIT: No lead-in. Sia speaks the useful line immediately. Hold target text through any cutaway. | SILENT PRACTICE: 0 seconds.
4.6–7.2 seconds | VO: Could you please repeat the question? | EXACT CAPTIONS: Could you please repeat the question? | CARDS: ["TEXT ONLY: You missed the question."] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
7.2–9.8 seconds | VO: Thank you. Yeh polite request hai. | EXACT CAPTIONS: Thank you. Yeh polite request hai. | CARDS: ["TEXT ONLY: Of course."] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
9.8–26.2 seconds | VO: Bolke dekho: Could you please repeat the question? Ab request ko calm pace par bolo. Could you please repeat the question? Guess karne se better hai politely poochna. | EXACT CAPTIONS: Bolke dekho: Could you please repeat the question? Ab request ko calm pace par bolo. Could you please repeat the question? Guess karne se better hai politely poochna. | CARDS: ["Could you please repeat the question?"] | SHOT: Locked eye-level Sia;small encouraging nod;hold still for two-second learner repetition. | EDIT: Sia gives the transfer example, then holds silently for 4.4 seconds while the learner says their own version. No filler or greeting. | SILENT PRACTICE: 4.4 seconds.
26.2–31.0 seconds | VO: Aaj ka word: Clarify. saaf samjhana. Could you clarify that point? | EXACT CAPTIONS: Aaj ka word: Clarify. saaf samjhana. Could you clarify that point? | CARDS: ["Clarify — saaf samjhana", "Could you clarify that point?"] | SHOT: Eye-level Sia with a compact word/meaning/example card beside her;no extra person or voice. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
31.0–35.0 seconds | VO: Request bina dekhe bolo. | EXACT CAPTIONS: Request bina dekhe bolo. | CARDS: [] | SHOT: Sia stays on screen with exact supplied SpeakX logo and one readable silent end card. | EDIT: Hold a silent end card after the practice action;no generic spoken sign-off. Specific silent next-episode tease:Kal: because se apna reason jodo. | SILENT PRACTICE: 0 seconds.
END: Deliver the complete answer today. Silent end-card text: Kal: because se apna reason jodo.. No cliffhanger or generic spoken sign-off. Measure duration;check Sia identity,voice,pronunciation,captions and safe zones. Deliver video,cover,caption track,transcript and QA;do not publish. Editable provider-independent prompt;no render generated.

```

### Native platform package

```json

{
  "youtube": {
    "title": "Ask an Interviewer to Repeat the Question",
    "description": "Could you please repeat the question?\nSia shows the model first,then a brief Hinglish explanation.\nSawaal repeat karwane ki request bolkar dekho.\nWord:Clarify — saaf samjhana; make something clearer. Could you clarify that point?\n#Shorts #SpeakX #EnglishPractice",
    "thumbnailCopy": "MISSED THE QUESTION?",
    "tags": [
      "ask repeat interview question English",
      "Baat-Cheet Thursday",
      "Sia SpeakX",
      "spoken English Hinglish"
    ],
    "pinnedCommentDraft": "Try:Sawaal repeat karwane ki request bolkar dekho. Model:Could you please repeat the question? Your own version can be different.",
    "scheduleIST": "18:30"
  },
  "instagram": {
    "caption": "Sawaal miss hua?\nCould you please repeat the question?\nSawaal repeat karwane ki request bolkar dekho.\n#SpeakX #EnglishSeekho #SiaSikhaatiHai",
    "coverCopy": "MISSED THE QUESTION?",
    "altText": "Sia in virtual interview room, teaching ask an interviewer to repeat; captions show: Could you please repeat the question?",
    "scheduleIST": "19:30"
  },
  "facebook": {
    "caption": "Sawaal miss hua?\nCould you please repeat the question?\nSawaal repeat karwane ki request bolkar dekho. SpeakX · Muh khol. English bol!",
    "title": "Ask an Interviewer to Repeat the Question",
    "scheduleIST": "20:00"
  },
  "x": {
    "morningText": "English tip: Could you please repeat the question? Today’s word: Clarify — make something clearer. Example: Could you clarify that point? #SpeakX",
    "eveningText": "Sia practice: Sawaal repeat karwane ki request bolkar dekho. Model: Could you please repeat the question? #SpeakX",
    "morningIST": "08:30",
    "eveningIST": "19:00"
  },
  "story": {
    "timeIST": "13:00",
    "frames": [
      "Sawaal repeat karwane ki request bolkar dekho.",
      "Could you please repeat the question?",
      "Try your own version;send a learning question if helpful."
    ]
  }
}

```

### Experiment

A task-led opening may help candidate nervous about clarification recognise relevance faster than hearing the model first;the model-first alternative may improve clarity.

A nervous candidate may read the request too fast;model a calm pause before please.



## 2026-10-16 · Join a reason with because

Sentence Banao Friday · Learner explaining a choice · Discovery · Pale-blue studio · 41.9s plan

### Hooks

- A (selected): Apna reason bhi bolo.

- B: I applied because I enjoy solving problems.

- C: Answer diya. Reason kahan?

### Exact Sia script

Apna reason bhi bolo. I applied because I enjoy solving problems. Because reason batata hai. I applied because I enjoy solving problems. Pehle action, phir because, phir reason. I practise English because I want to speak clearly. Apna sachcha reason do. Bolke dekho: I applied because I enjoy solving problems. Ab apna real reason do. I practise because I want to speak clearly. Because ke baad wajah aati hai. Aaj ka word: Reason. wajah. Give one clear reason. Ab apna reason jodo.

### Production prompt

```text

Produce SpeakX episodeSIA-2026-10-16: Join a reason with because. Vertical1080×1920,target 41.9 seconds,maximum45seconds. Only Sia appears and speaks. Match the supplied character board exactly:Indian woman,mid-20s appearance,warm medium-brown skin,long centre-parted dark wavy hair with caramel ombré ends,dark brown eyes,defined brows,natural makeup,no jewellery,light heather-grey short-sleeve fitted mock-neck top. Use the approved Sia_v1 voice only;source/rights approval is still required. Warm,patient Hinglish;clear neutral Indian English;no invented or replacement voice.
PACE:Estimate140words/minute;natural140–165wpm Hinglish if the approved voice sounds clear. Never rush English pronunciation to fit. No recurring greeting,no long setup,no added filler.
SETTING:Pale-blue studio. No map;Sia hook then direct English model. No other visible people,reflections,crowds or voices. No implied real-world visit without verified assets.
VALUE:Start the useful model at2.0seconds: I applied because I enjoy solving problems.
GRAPHICS:Exact supplied SpeakX logo on end card only. Readable Romanized Hinglish subtitles. Every erroneous phrase,including a hook,has red ❌ WRONG from first appearance;correct models have✅. Silent cards are not spoken. Keep bottom20% and right12% clear. Map imagery must never cover teaching text.
AUDIO:Exact voiceover below,with stated silent practice holds. Soft original/licensed music under voice;at most one soft correction chime,no masked pronunciation.
EXACT SPOKEN SCRIPT: Apna reason bhi bolo. I applied because I enjoy solving problems. Because reason batata hai. I applied because I enjoy solving problems. Pehle action, phir because, phir reason. I practise English because I want to speak clearly. Apna sachcha reason do. Bolke dekho: I applied because I enjoy solving problems. Ab apna real reason do. I practise because I want to speak clearly. Because ke baad wajah aati hai. Aaj ka word: Reason. wajah. Give one clear reason. Ab apna reason jodo.
SCENES:
0–2 seconds | VO: Apna reason bhi bolo. | EXACT CAPTIONS: Apna reason bhi bolo. | CARDS: ["Apna reason bhi bolo."] | SHOT: Eye-level chest-up Sia in Pale-blue studio;immediate eye contact,no greeting or location tour. No map during the hook. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
2–5.0 seconds | VO: I applied because I enjoy solving problems. | EXACT CAPTIONS: I applied because I enjoy solving problems. | CARDS: ["✅ I applied because I enjoy solving problems."] | SHOT: Eye-level Sia;correct English model appears beside her immediately,no map. | EDIT: No lead-in. Sia speaks the useful line immediately. Hold target text through any cutaway. | SILENT PRACTICE: 0 seconds.
5.0–9.8 seconds | VO: Because reason batata hai. I applied because I enjoy solving problems. | EXACT CAPTIONS: Because reason batata hai. I applied because I enjoy solving problems. | CARDS: [] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
9.8–18.0 seconds | VO: Pehle action, phir because, phir reason. I practise English because I want to speak clearly. Apna sachcha reason do. | EXACT CAPTIONS: Pehle action, phir because, phir reason. I practise English because I want to speak clearly. Apna sachcha reason do. | CARDS: [] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
18.0–34.0 seconds | VO: Bolke dekho: I applied because I enjoy solving problems. Ab apna real reason do. I practise because I want to speak clearly. Because ke baad wajah aati hai. | EXACT CAPTIONS: Bolke dekho: I applied because I enjoy solving problems. Ab apna real reason do. I practise because I want to speak clearly. Because ke baad wajah aati hai. | CARDS: ["I applied because I enjoy solving problems."] | SHOT: Locked eye-level Sia;small encouraging nod;hold still for two-second learner repetition. | EDIT: Sia gives the transfer example, then holds silently for 4 seconds while the learner says their own version. No filler or greeting. | SILENT PRACTICE: 4 seconds.
34.0–37.9 seconds | VO: Aaj ka word: Reason. wajah. Give one clear reason. | EXACT CAPTIONS: Aaj ka word: Reason. wajah. Give one clear reason. | CARDS: ["Reason — wajah", "Give one clear reason."] | SHOT: Eye-level Sia with a compact word/meaning/example card beside her;no extra person or voice. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
37.9–41.9 seconds | VO: Ab apna reason jodo. | EXACT CAPTIONS: Ab apna reason jodo. | CARDS: [] | SHOT: Sia stays on screen with exact supplied SpeakX logo and one readable silent end card. | EDIT: Hold a silent end card after the practice action;no generic spoken sign-off. Specific silent next-episode tease:Kal: discuss ke baad kya nahi aata? | SILENT PRACTICE: 0 seconds.
END: Deliver the complete answer today. Silent end-card text: Kal: discuss ke baad kya nahi aata? No cliffhanger or generic spoken sign-off. Measure duration;check Sia identity,voice,pronunciation,captions and safe zones. Deliver video,cover,caption track,transcript and QA;do not publish. Editable provider-independent prompt;no render generated.

```

### Native platform package

```json

{
  "youtube": {
    "title": "Give a Reason with Because | Spoken English",
    "description": "I applied because I enjoy solving problems.\nSia shows the model first,then a brief Hinglish explanation.\nI am learning English because ___ poora karo.\nWord:Reason — wajah; why something happens. Give one clear reason.\n#Shorts #SpeakX #EnglishPractice",
    "thumbnailCopy": "ADD YOUR REASON",
    "tags": [
      "because sentence examples Hindi",
      "Sentence Banao Friday",
      "Sia SpeakX",
      "spoken English Hinglish"
    ],
    "pinnedCommentDraft": "Try:I am learning English because ___ poora karo. Model:I am learning English because I want to speak clearly. Your own version can be different.",
    "scheduleIST": "18:30"
  },
  "instagram": {
    "caption": "Apna reason bhi bolo.\nI applied because I enjoy solving problems.\nI am learning English because ___ poora karo.\n#SpeakX #EnglishSeekho #SiaSikhaatiHai",
    "coverCopy": "ADD YOUR REASON",
    "altText": "Sia in pale-blue studio, teaching join a reason with because; captions show: I applied because I enjoy solving problems.",
    "scheduleIST": "19:30"
  },
  "facebook": {
    "caption": "Apna reason bhi bolo.\nI applied because I enjoy solving problems.\nI am learning English because ___ poora karo. SpeakX · Muh khol. English bol!",
    "title": "Give a Reason with Because | Spoken English",
    "scheduleIST": "20:00"
  },
  "x": {
    "morningText": "English tip: I applied because I enjoy solving problems. Today’s word: Reason — why something happens. Example: Give one clear reason. #SpeakX",
    "eveningText": "Sia practice: I am learning English because ___ poora karo. Model: I applied because I enjoy solving problems. #SpeakX",
    "morningIST": "08:30",
    "eveningIST": "19:00"
  },
  "story": {
    "timeIST": "13:00",
    "frames": [
      "I am learning English because ___ poora karo.",
      "I am learning English because I want to speak clearly.",
      "Try your own version;send a learning question if helpful."
    ]
  }
}

```

### Experiment

A task-led opening may help learner explaining a choice recognise relevance faster than hearing the model first;the model-first alternative may improve clarity.

Because can become a long sentence;keep the sample reason short and truthful.



## 2026-10-17 · Discuss, without about

Galti Pakdo Saturday · Office worker joining discussions · Discovery · Pale-blue studio · 38.9s plan

### Hooks

- A (selected): Discuss about? Extra word.

- B: Let us discuss the plan.

- C: Discuss aur talk alag.

### Exact Sia script

Discuss about? Extra word. Let us discuss the plan. About hatao. Let us discuss the plan. We discussed the budget. Talk ke saath about aata hai: Let us talk about the plan. Bolke dekho: Let us discuss the plan. Ab meeting ka topic badlo. We discussed the schedule. We talked about the schedule. Dono sahi hain; patterns alag hain. Aaj ka word: Agenda. charcha ki list. What is on the agenda? Apna topic jodo.

### Production prompt

```text

Produce SpeakX episodeSIA-2026-10-17: Discuss, without about. Vertical1080×1920,target 38.9 seconds,maximum45seconds. Only Sia appears and speaks. Match the supplied character board exactly:Indian woman,mid-20s appearance,warm medium-brown skin,long centre-parted dark wavy hair with caramel ombré ends,dark brown eyes,defined brows,natural makeup,no jewellery,light heather-grey short-sleeve fitted mock-neck top. Use the approved Sia_v1 voice only;source/rights approval is still required. Warm,patient Hinglish;clear neutral Indian English;no invented or replacement voice.
PACE:Estimate140words/minute;natural140–165wpm Hinglish if the approved voice sounds clear. Never rush English pronunciation to fit. No recurring greeting,no long setup,no added filler.
SETTING:Pale-blue studio. No map;Sia hook then direct English model. No other visible people,reflections,crowds or voices. No implied real-world visit without verified assets.
VALUE:Start the useful model at2.0seconds: Let us discuss the plan.
GRAPHICS:Exact supplied SpeakX logo on end card only. Readable Romanized Hinglish subtitles. Every erroneous phrase,including a hook,has red ❌ WRONG from first appearance;correct models have✅. Silent cards are not spoken. Keep bottom20% and right12% clear. Map imagery must never cover teaching text.
AUDIO:Exact voiceover below,with stated silent practice holds. Soft original/licensed music under voice;at most one soft correction chime,no masked pronunciation.
EXACT SPOKEN SCRIPT: Discuss about? Extra word. Let us discuss the plan. About hatao. Let us discuss the plan. We discussed the budget. Talk ke saath about aata hai: Let us talk about the plan. Bolke dekho: Let us discuss the plan. Ab meeting ka topic badlo. We discussed the schedule. We talked about the schedule. Dono sahi hain; patterns alag hain. Aaj ka word: Agenda. charcha ki list. What is on the agenda? Apna topic jodo.
SCENES:
0–2 seconds | VO: Discuss about? Extra word. | EXACT CAPTIONS: Discuss about? Extra word. | CARDS: ["Discuss about? Extra word."] | SHOT: Eye-level chest-up Sia in Pale-blue studio;immediate eye contact,no greeting or location tour. No map during the hook. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
2–4.2 seconds | VO: Let us discuss the plan. | EXACT CAPTIONS: Let us discuss the plan. | CARDS: ["✅ Let us discuss the plan."] | SHOT: Eye-level Sia;correct English model appears beside her immediately,no map. | EDIT: No lead-in. Sia speaks the useful line immediately. Hold target text through any cutaway. | SILENT PRACTICE: 0 seconds.
4.2–7.2 seconds | VO: About hatao. Let us discuss the plan. | EXACT CAPTIONS: About hatao. Let us discuss the plan. | CARDS: ["❌ WRONG: Let us discuss about the plan."] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
7.2–14.1 seconds | VO: We discussed the budget. Talk ke saath about aata hai: Let us talk about the plan. | EXACT CAPTIONS: We discussed the budget. Talk ke saath about aata hai: Let us talk about the plan. | CARDS: [] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
14.1–29.7 seconds | VO: Bolke dekho: Let us discuss the plan. Ab meeting ka topic badlo. We discussed the schedule. We talked about the schedule. Dono sahi hain; patterns alag hain. | EXACT CAPTIONS: Bolke dekho: Let us discuss the plan. Ab meeting ka topic badlo. We discussed the schedule. We talked about the schedule. Dono sahi hain; patterns alag hain. | CARDS: ["Let us discuss the plan."] | SHOT: Locked eye-level Sia;small encouraging nod;hold still for two-second learner repetition. | EDIT: Sia gives the transfer example, then holds silently for 4 seconds while the learner says their own version. No filler or greeting. | SILENT PRACTICE: 4 seconds.
29.7–34.9 seconds | VO: Aaj ka word: Agenda. charcha ki list. What is on the agenda? | EXACT CAPTIONS: Aaj ka word: Agenda. charcha ki list. What is on the agenda? | CARDS: ["Agenda — charcha ki list", "What is on the agenda?"] | SHOT: Eye-level Sia with a compact word/meaning/example card beside her;no extra person or voice. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
34.9–38.9 seconds | VO: Apna topic jodo. | EXACT CAPTIONS: Apna topic jodo. | CARDS: [] | SHOT: Sia stays on screen with exact supplied SpeakX logo and one readable silent end card. | EDIT: Hold a silent end card after the practice action;no generic spoken sign-off. Specific silent next-episode tease:Kal: interview English ka mini-check. | SILENT PRACTICE: 0 seconds.
END: Deliver the complete answer today. Silent end-card text: Kal: interview English ka mini-check.. No cliffhanger or generic spoken sign-off. Measure duration;check Sia identity,voice,pronunciation,captions and safe zones. Deliver video,cover,caption track,transcript and QA;do not publish. Editable provider-independent prompt;no render generated.

```

### Native platform package

```json

{
  "youtube": {
    "title": "Discuss or Discuss About? Fix This Phrase",
    "description": "Let us discuss the plan.\nSia shows the model first,then a brief Hinglish explanation.\nWe discussed ___ mein apna topic jodo.\nWord:Agenda — charcha ki list; topics for a meeting. What is on the agenda?\n#Shorts #SpeakX #EnglishPractice",
    "thumbnailCopy": "REMOVE ONE WORD",
    "tags": [
      "discuss about correct grammar",
      "Galti Pakdo Saturday",
      "Sia SpeakX",
      "spoken English Hinglish"
    ],
    "pinnedCommentDraft": "Try:We discussed ___ mein apna topic jodo. Model:We discussed the plan. Your own version can be different.",
    "scheduleIST": "10:30"
  },
  "instagram": {
    "caption": "Discuss about? Extra word.\nLet us discuss the plan.\nWe discussed ___ mein apna topic jodo.\n#SpeakX #EnglishSeekho #SiaSikhaatiHai",
    "coverCopy": "REMOVE ONE WORD",
    "altText": "Sia in pale-blue studio, teaching discuss, without about; captions show: Let us discuss the plan.",
    "scheduleIST": "11:00"
  },
  "facebook": {
    "caption": "Discuss about? Extra word.\nLet us discuss the plan.\nWe discussed ___ mein apna topic jodo. SpeakX · Muh khol. English bol!",
    "title": "Discuss or Discuss About? Fix This Phrase",
    "scheduleIST": "11:30"
  },
  "x": {
    "morningText": "English tip: Let us discuss the plan. Today’s word: Agenda — topics for a meeting. Example: What is on the agenda? #SpeakX",
    "eveningText": "Sia practice: We discussed ___ mein apna topic jodo. Model: Let us discuss the plan. #SpeakX",
    "morningIST": "08:30",
    "eveningIST": "19:00"
  },
  "story": {
    "timeIST": "13:00",
    "frames": [
      "We discussed ___ mein apna topic jodo.",
      "We discussed the plan.",
      "Try your own version;send a learning question if helpful."
    ]
  }
}

```

### Experiment

A task-led opening may help office worker joining discussions recognise relevance faster than hearing the model first;the model-first alternative may improve clarity.

Discuss and talk about are both valid patterns;never mark talk about as wrong.



## 2026-10-18 · Week three interview revision

Revision Sunday · Job seeker reviewing interview language · Community · Pale-blue studio · 41.7s plan

### Hooks

- A (selected): Interview English yaad hai?

- B: She has a laptop.

- C: Has, repeat, because: check.

### Exact Sia script

Interview English yaad hai? She has a laptop. One: She ___ a laptop. Has. Two: Could you please ___ the question? Repeat. Three: I applied ___ I enjoy solving problems. Because. Bolke dekho: Could you please repeat the question? Ab teen lines apne liye bolo. I have a plan. Please repeat the question. I practise because I want to improve. Aaj ka word: Reflect. soch-vichaar karna. Reflect on your answer. Missed answer phir bolo.

### Production prompt

```text

Produce SpeakX episodeSIA-2026-10-18: Week three interview revision. Vertical1080×1920,target 41.7 seconds,maximum45seconds. Only Sia appears and speaks. Match the supplied character board exactly:Indian woman,mid-20s appearance,warm medium-brown skin,long centre-parted dark wavy hair with caramel ombré ends,dark brown eyes,defined brows,natural makeup,no jewellery,light heather-grey short-sleeve fitted mock-neck top. Use the approved Sia_v1 voice only;source/rights approval is still required. Warm,patient Hinglish;clear neutral Indian English;no invented or replacement voice.
PACE:Estimate140words/minute;natural140–165wpm Hinglish if the approved voice sounds clear. Never rush English pronunciation to fit. No recurring greeting,no long setup,no added filler.
SETTING:Pale-blue studio. No map;Sia hook then direct English model. No other visible people,reflections,crowds or voices. No implied real-world visit without verified assets.
VALUE:Start the useful model at2.0seconds: She has a laptop.
GRAPHICS:Exact supplied SpeakX logo on end card only. Readable Romanized Hinglish subtitles. Every erroneous phrase,including a hook,has red ❌ WRONG from first appearance;correct models have✅. Silent cards are not spoken. Keep bottom20% and right12% clear. Map imagery must never cover teaching text.
AUDIO:Exact voiceover below,with stated silent practice holds. Soft original/licensed music under voice;at most one soft correction chime,no masked pronunciation.
EXACT SPOKEN SCRIPT: Interview English yaad hai? She has a laptop. One: She ___ a laptop. Has. Two: Could you please ___ the question? Repeat. Three: I applied ___ I enjoy solving problems. Because. Bolke dekho: Could you please repeat the question? Ab teen lines apne liye bolo. I have a plan. Please repeat the question. I practise because I want to improve. Aaj ka word: Reflect. soch-vichaar karna. Reflect on your answer. Missed answer phir bolo.
SCENES:
0–2 seconds | VO: Interview English yaad hai? | EXACT CAPTIONS: Interview English yaad hai? | CARDS: ["Interview English yaad hai?"] | SHOT: Eye-level chest-up Sia in Pale-blue studio;immediate eye contact,no greeting or location tour. No map during the hook. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
2–4 seconds | VO: She has a laptop. | EXACT CAPTIONS: She has a laptop. | CARDS: ["✅ She has a laptop."] | SHOT: Eye-level Sia;correct English model appears beside her immediately,no map. | EDIT: No lead-in. Sia speaks the useful line immediately. Hold target text through any cutaway. | SILENT PRACTICE: 0 seconds.
4–10.6 seconds | VO: One: She ___ a laptop. Has. Two: Could you please ___ the question? | EXACT CAPTIONS: One: She ___ a laptop. Has. Two: Could you please ___ the question? | CARDS: [] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 1 seconds.
10.6–16.9 seconds | VO: Repeat. Three: I applied ___ I enjoy solving problems. Because. | EXACT CAPTIONS: Repeat. Three: I applied ___ I enjoy solving problems. Because. | CARDS: [] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 2 seconds.
16.9–33.4 seconds | VO: Bolke dekho: Could you please repeat the question? Ab teen lines apne liye bolo. I have a plan. Please repeat the question. I practise because I want to improve. | EXACT CAPTIONS: Bolke dekho: Could you please repeat the question? Ab teen lines apne liye bolo. I have a plan. Please repeat the question. I practise because I want to improve. | CARDS: ["She has a laptop. Could you repeat? I applied because…"] | SHOT: Locked eye-level Sia;small encouraging nod;hold still for two-second learner repetition. | EDIT: Sia gives the transfer example, then holds silently for 4 seconds while the learner says their own version. No filler or greeting. | SILENT PRACTICE: 4 seconds.
33.4–37.7 seconds | VO: Aaj ka word: Reflect. soch-vichaar karna. Reflect on your answer. | EXACT CAPTIONS: Aaj ka word: Reflect. soch-vichaar karna. Reflect on your answer. | CARDS: ["Reflect — soch-vichaar karna", "Reflect on your answer."] | SHOT: Eye-level Sia with a compact word/meaning/example card beside her;no extra person or voice. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
37.7–41.7 seconds | VO: Missed answer phir bolo. | EXACT CAPTIONS: Missed answer phir bolo. | CARDS: [] | SHOT: Sia stays on screen with exact supplied SpeakX logo and one readable silent end card. | EDIT: Hold a silent end card after the practice action;no generic spoken sign-off. Specific silent next-episode tease:Kal: apna meeting time batao. | SILENT PRACTICE: 0 seconds.
END: Deliver the complete answer today. Silent end-card text: Kal: apna meeting time batao.. No cliffhanger or generic spoken sign-off. Measure duration;check Sia identity,voice,pronunciation,captions and safe zones. Deliver video,cover,caption track,transcript and QA;do not publish. Editable provider-independent prompt;no render generated.

```

### Native platform package

```json

{
  "youtube": {
    "title": "Interview English Revision: 3 Questions",
    "description": "She has a laptop.\nSia shows the model first,then a brief Hinglish explanation.\nApna score check karo; missed answer repeat karo.\nWord:Reflect — soch-vichaar karna; think carefully about something. Reflect on your answer.\n#Shorts #SpeakX #EnglishPractice",
    "thumbnailCopy": "CHECK YOUR ANSWERS",
    "tags": [
      "interview English practice questions",
      "Revision Sunday",
      "Sia SpeakX",
      "spoken English Hinglish"
    ],
    "pinnedCommentDraft": "Try:Apna score check karo; missed answer repeat karo. Model:has; repeat; because. Your own version can be different.",
    "scheduleIST": "10:30"
  },
  "instagram": {
    "caption": "Interview English yaad hai?\nShe has a laptop. Could you repeat? I applied because…\nApna score check karo; missed answer repeat karo.\n#SpeakX #EnglishSeekho #SiaSikhaatiHai",
    "coverCopy": "CHECK YOUR ANSWERS",
    "altText": "Sia in pale-blue studio, teaching week three interview revision; captions show: She has a laptop. Could you repeat? I applied because…",
    "scheduleIST": "11:00"
  },
  "facebook": {
    "caption": "Interview English yaad hai?\nShe has a laptop.\nApna score check karo; missed answer repeat karo. SpeakX · Muh khol. English bol!",
    "title": "Interview English Revision: 3 Questions",
    "scheduleIST": "11:30"
  },
  "x": {
    "morningText": "English tip: She has a laptop. Could you repeat? I applied because… Today’s word: Reflect — think carefully about something. Example: Reflect on your answer. #SpeakX",
    "eveningText": "Sia practice: Apna score check karo; missed answer repeat karo. Model: She has a laptop. Could you repeat? I applied because… #SpeakX",
    "morningIST": "08:30",
    "eveningIST": "19:00"
  },
  "story": {
    "timeIST": "13:00",
    "frames": [
      "Apna score check karo; missed answer repeat karo.",
      "has; repeat; because.",
      "Try your own version;send a learning question if helpful."
    ]
  }
}

```

### Experiment

A task-led opening may help job seeker reviewing interview language recognise relevance faster than hearing the model first;the model-first alternative may improve clarity.

Recall questions should test previous teaching,not introduce a new rule.



## 2026-10-19 · Available: tell someone when you are free

Word Wala Monday · Professional arranging a meeting · Trust · Virtual coworking meeting nook · 36.7s plan

### Hooks

- A (selected): Free ho? Time bolo.

- B: I am available after three.

- C: Available matlab sirf khaali?

### Exact Sia script

Free ho? Time bolo. I am available after three. Aaj ka word available: uh-VAI-luh-bul. Matlab uplabdh ya free. I am available after three. Is this seat available? Meeting mein free, seat ke liye khaali. Sahi: I am available. Bolke dekho: I am available after three. Ab exact time bolo. I am available at four. Ya: I am available after three. Dono ka time meaning alag hai. Apna meeting time bolo.

### Production prompt

```text

Produce SpeakX episodeSIA-2026-10-19: Available: tell someone when you are free. Vertical1080×1920,target 36.7 seconds,maximum45seconds. Only Sia appears and speaks. Match the supplied character board exactly:Indian woman,mid-20s appearance,warm medium-brown skin,long centre-parted dark wavy hair with caramel ombré ends,dark brown eyes,defined brows,natural makeup,no jewellery,light heather-grey short-sleeve fitted mock-neck top. Use the approved Sia_v1 voice only;source/rights approval is still required. Warm,patient Hinglish;clear neutral Indian English;no invented or replacement voice.
PACE:Estimate140words/minute;natural140–165wpm Hinglish if the approved voice sounds clear. Never rush English pronunciation to fit. No recurring greeting,no long setup,no added filler.
SETTING:Virtual coworking meeting nook. No map;Sia hook then direct English model. No other visible people,reflections,crowds or voices. No implied real-world visit without verified assets.
VALUE:Start the useful model at2.0seconds: I am available after three.
GRAPHICS:Exact supplied SpeakX logo on end card only. Readable Romanized Hinglish subtitles. Every erroneous phrase,including a hook,has red ❌ WRONG from first appearance;correct models have✅. Silent cards are not spoken. Keep bottom20% and right12% clear. Map imagery must never cover teaching text.
AUDIO:Exact voiceover below,with stated silent practice holds. Soft original/licensed music under voice;at most one soft correction chime,no masked pronunciation.
EXACT SPOKEN SCRIPT: Free ho? Time bolo. I am available after three. Aaj ka word available: uh-VAI-luh-bul. Matlab uplabdh ya free. I am available after three. Is this seat available? Meeting mein free, seat ke liye khaali. Sahi: I am available. Bolke dekho: I am available after three. Ab exact time bolo. I am available at four. Ya: I am available after three. Dono ka time meaning alag hai. Apna meeting time bolo.
SCENES:
0–2 seconds | VO: Free ho? Time bolo. | EXACT CAPTIONS: Free ho? Time bolo. | CARDS: ["Free ho? Time bolo."] | SHOT: Eye-level chest-up Sia in Virtual coworking meeting nook;immediate eye contact,no greeting or location tour. No map during the hook. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
2–4.2 seconds | VO: I am available after three. | EXACT CAPTIONS: I am available after three. | CARDS: ["✅ I am available after three."] | SHOT: Eye-level Sia;correct English model appears beside her immediately,no map. | EDIT: No lead-in. Sia speaks the useful line immediately. Hold target text through any cutaway. | SILENT PRACTICE: 0 seconds.
4.2–10.2 seconds | VO: Aaj ka word available: uh-VAI-luh-bul. Matlab uplabdh ya free. I am available after three. | EXACT CAPTIONS: Aaj ka word available: uh-VAI-luh-bul. Matlab uplabdh ya free. I am available after three. | CARDS: [] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
10.2–16.7 seconds | VO: Is this seat available? Meeting mein free, seat ke liye khaali. Sahi: I am available. | EXACT CAPTIONS: Is this seat available? Meeting mein free, seat ke liye khaali. Sahi: I am available. | CARDS: ["❌ WRONG: I available."] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
16.7–32.7 seconds | VO: Bolke dekho: I am available after three. Ab exact time bolo. I am available at four. Ya: I am available after three. Dono ka time meaning alag hai. | EXACT CAPTIONS: Bolke dekho: I am available after three. Ab exact time bolo. I am available at four. Ya: I am available after three. Dono ka time meaning alag hai. | CARDS: ["I am available after three."] | SHOT: Locked eye-level Sia;small encouraging nod;hold still for two-second learner repetition. | EDIT: Sia gives the transfer example, then holds silently for 4 seconds while the learner says their own version. No filler or greeting. | SILENT PRACTICE: 4 seconds.
32.7–36.7 seconds | VO: Apna meeting time bolo. | EXACT CAPTIONS: Apna meeting time bolo. | CARDS: [] | SHOT: Sia stays on screen with exact supplied SpeakX logo and one readable silent end card. | EDIT: Hold a silent end card after the practice action;no generic spoken sign-off. Specific silent next-episode tease:Kal: does ke baad base verb. | SILENT PRACTICE: 0 seconds.
END: Deliver the complete answer today. Silent end-card text: Kal: does ke baad base verb.. No cliffhanger or generic spoken sign-off. Measure duration;check Sia identity,voice,pronunciation,captions and safe zones. Deliver video,cover,caption track,transcript and QA;do not publish. Editable provider-independent prompt;no render generated.

```

### Native platform package

```json

{
  "youtube": {
    "title": "Available: Tell Someone When You’re Free",
    "description": "I am available after three.\nSia shows the model first,then a brief Hinglish explanation.\nApni available meeting time ek line mein bolo.\nWord:Available — uplabdh ya free; ready to be used or able to meet. I am available after three.\n#Shorts #SpeakX #EnglishPractice",
    "thumbnailCopy": "SAY WHEN YOU’RE FREE",
    "tags": [
      "available meaning English Hindi",
      "Word Wala Monday",
      "Sia SpeakX",
      "spoken English Hinglish"
    ],
    "pinnedCommentDraft": "Try:Apni available meeting time ek line mein bolo. Model:I am available after three. Your own version can be different.",
    "scheduleIST": "18:30"
  },
  "instagram": {
    "caption": "Free ho? Time bolo.\nI am available after three.\nApni available meeting time ek line mein bolo.\n#SpeakX #EnglishSeekho #SiaSikhaatiHai",
    "coverCopy": "SAY WHEN YOU’RE FREE",
    "altText": "Sia in virtual coworking desk, teaching available: tell someone when you are free; captions show: I am available after three.",
    "scheduleIST": "19:30"
  },
  "facebook": {
    "caption": "Free ho? Time bolo.\nI am available after three.\nApni available meeting time ek line mein bolo. SpeakX · Muh khol. English bol!",
    "title": "Available: Tell Someone When You’re Free",
    "scheduleIST": "20:00"
  },
  "x": {
    "morningText": "English tip: I am available after three. Today’s word: Available — ready to be used or able to meet. Example: I am available after three. #SpeakX",
    "eveningText": "Sia practice: Apni available meeting time ek line mein bolo. Model: I am available after three. #SpeakX",
    "morningIST": "08:30",
    "eveningIST": "19:00"
  },
  "story": {
    "timeIST": "13:00",
    "frames": [
      "Apni available meeting time ek line mein bolo.",
      "I am available after three.",
      "Try your own version;send a learning question if helpful."
    ]
  }
}

```

### Experiment

A task-led opening may help professional arranging a meeting recognise relevance faster than hearing the model first;the model-first alternative may improve clarity.

Available means different things for a person and a seat;label both contexts.



## 2026-10-20 · Do and does in questions

Grammar Tuesday · Beginner asking workplace questions · Discovery · Pale-blue studio · 40.7s plan

### Hooks

- A (selected): Does ke baad works?

- B: Does she work here?

- C: Does ne s liya.

### Exact Sia script

Does ke baad works? Does she work here? I, you, we, they ke question mein do. He, she, it ke saath does. Do you work here? Does she work here? Does ke baad base verb. Bolke dekho: Does she work here? Ab he use karo. Does he study here? Does ke baad study raha, studies nahi. Apne example mein verb check karo. Aaj ka word: Routine. roz ka kram. This is my morning routine. He ke saath question banao.

### Production prompt

```text

Produce SpeakX episodeSIA-2026-10-20: Do and does in questions. Vertical1080×1920,target 40.7 seconds,maximum45seconds. Only Sia appears and speaks. Match the supplied character board exactly:Indian woman,mid-20s appearance,warm medium-brown skin,long centre-parted dark wavy hair with caramel ombré ends,dark brown eyes,defined brows,natural makeup,no jewellery,light heather-grey short-sleeve fitted mock-neck top. Use the approved Sia_v1 voice only;source/rights approval is still required. Warm,patient Hinglish;clear neutral Indian English;no invented or replacement voice.
PACE:Estimate140words/minute;natural140–165wpm Hinglish if the approved voice sounds clear. Never rush English pronunciation to fit. No recurring greeting,no long setup,no added filler.
SETTING:Pale-blue studio. No map;Sia hook then direct English model. No other visible people,reflections,crowds or voices. No implied real-world visit without verified assets.
VALUE:Start the useful model at2.0seconds: Does she work here?
GRAPHICS:Exact supplied SpeakX logo on end card only. Readable Romanized Hinglish subtitles. Every erroneous phrase,including a hook,has red ❌ WRONG from first appearance;correct models have✅. Silent cards are not spoken. Keep bottom20% and right12% clear. Map imagery must never cover teaching text.
AUDIO:Exact voiceover below,with stated silent practice holds. Soft original/licensed music under voice;at most one soft correction chime,no masked pronunciation.
EXACT SPOKEN SCRIPT: Does ke baad works? Does she work here? I, you, we, they ke question mein do. He, she, it ke saath does. Do you work here? Does she work here? Does ke baad base verb. Bolke dekho: Does she work here? Ab he use karo. Does he study here? Does ke baad study raha, studies nahi. Apne example mein verb check karo. Aaj ka word: Routine. roz ka kram. This is my morning routine. He ke saath question banao.
SCENES:
0–2 seconds | VO: Does ke baad works? | EXACT CAPTIONS: Does ke baad works? | CARDS: ["Does ke baad works?"] | SHOT: Eye-level chest-up Sia in Pale-blue studio;immediate eye contact,no greeting or location tour. No map during the hook. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
2–4 seconds | VO: Does she work here? | EXACT CAPTIONS: Does she work here? | CARDS: ["✅ Does she work here?"] | SHOT: Eye-level Sia;correct English model appears beside her immediately,no map. | EDIT: No lead-in. Sia speaks the useful line immediately. Hold target text through any cutaway. | SILENT PRACTICE: 0 seconds.
4–11.8 seconds | VO: I, you, we, they ke question mein do. He, she, it ke saath does. Do you work here? | EXACT CAPTIONS: I, you, we, they ke question mein do. He, she, it ke saath does. Do you work here? | CARDS: [] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
11.8–15.7 seconds | VO: Does she work here? Does ke baad base verb. | EXACT CAPTIONS: Does she work here? Does ke baad base verb. | CARDS: ["❌ WRONG: Does she works here?"] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
15.7–31.3 seconds | VO: Bolke dekho: Does she work here? Ab he use karo. Does he study here? Does ke baad study raha, studies nahi. Apne example mein verb check karo. | EXACT CAPTIONS: Bolke dekho: Does she work here? Ab he use karo. Does he study here? Does ke baad study raha, studies nahi. Apne example mein verb check karo. | CARDS: ["Does she work here?"] | SHOT: Locked eye-level Sia;small encouraging nod;hold still for two-second learner repetition. | EDIT: Sia gives the transfer example, then holds silently for 4 seconds while the learner says their own version. No filler or greeting. | SILENT PRACTICE: 4 seconds.
31.3–36.5 seconds | VO: Aaj ka word: Routine. roz ka kram. This is my morning routine. | EXACT CAPTIONS: Aaj ka word: Routine. roz ka kram. This is my morning routine. | CARDS: ["Routine — roz ka kram", "This is my morning routine."] | SHOT: Eye-level Sia with a compact word/meaning/example card beside her;no extra person or voice. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
36.5–40.7 seconds | VO: He ke saath question banao. | EXACT CAPTIONS: He ke saath question banao. | CARDS: [] | SHOT: Sia stays on screen with exact supplied SpeakX logo and one readable silent end card. | EDIT: Hold a silent end card after the practice action;no generic spoken sign-off. Specific silent next-episode tease:Kal: child se children. | SILENT PRACTICE: 0 seconds.
END: Deliver the complete answer today. Silent end-card text: Kal: child se children.. No cliffhanger or generic spoken sign-off. Measure duration;check Sia identity,voice,pronunciation,captions and safe zones. Deliver video,cover,caption track,transcript and QA;do not publish. Editable provider-independent prompt;no render generated.

```

### Native platform package

```json

{
  "youtube": {
    "title": "Does She Work? Use the Base Verb",
    "description": "Does she work here?\nSia shows the model first,then a brief Hinglish explanation.\n___ he study here: do ya does?\nWord:Routine — roz ka kram; your usual pattern of activities. This is my morning routine.\n#Shorts #SpeakX #EnglishPractice",
    "thumbnailCopy": "DROP THE EXTRA S",
    "tags": [
      "does she work grammar",
      "Grammar Tuesday",
      "Sia SpeakX",
      "spoken English Hinglish"
    ],
    "pinnedCommentDraft": "Try:___ he study here: do ya does? Model:Does he study here? Your own version can be different.",
    "scheduleIST": "18:30"
  },
  "instagram": {
    "caption": "Does ke baad works?\nDoes she work here?\n___ he study here: do ya does?\n#SpeakX #EnglishSeekho #SiaSikhaatiHai",
    "coverCopy": "DROP THE EXTRA S",
    "altText": "Sia in pale-blue studio, teaching do and does in questions; captions show: Does she work here?",
    "scheduleIST": "19:30"
  },
  "facebook": {
    "caption": "Does ke baad works?\nDoes she work here?\n___ he study here: do ya does? SpeakX · Muh khol. English bol!",
    "title": "Does She Work? Use the Base Verb",
    "scheduleIST": "20:00"
  },
  "x": {
    "morningText": "English tip: Does she work here? Today’s word: Routine — your usual pattern of activities. Example: This is my morning routine. #SpeakX",
    "eveningText": "Sia practice: ___ he study here: do ya does? Model: Does she work here? #SpeakX",
    "morningIST": "08:30",
    "eveningIST": "19:00"
  },
  "story": {
    "timeIST": "13:00",
    "frames": [
      "___ he study here: do ya does?",
      "Does he study here?",
      "Try your own version;send a learning question if helpful."
    ]
  }
}

```

### Experiment

A task-led opening may help beginner asking workplace questions recognise relevance faster than hearing the model first;the model-first alternative may improve clarity.

Learners may retain works after does;give the base verb clear visual emphasis.



## 2026-10-21 · Child becomes children

Ek ya Anek Wednesday · Parent or education learner · Discovery · Pale-blue studio · 36.8s plan

### Hooks

- A (selected): Childs? Sahi word suno.

- B: One child.

- C: Children ke saath is?

### Exact Sia script

Childs? Sahi word suno. One child. Child ka plural children. One child, two children. The child is reading. The children are reading. Plural mein children ke saath are use karo. Bolke dekho: One child. Ab sentence badlo. The child is here. The children are here. Child se children hua, aur is se are. Aaj ka word: Group. samooh. This group meets every week. Children ke saath sentence bolo.

### Production prompt

```text

Produce SpeakX episodeSIA-2026-10-21: Child becomes children. Vertical1080×1920,target 36.8 seconds,maximum45seconds. Only Sia appears and speaks. Match the supplied character board exactly:Indian woman,mid-20s appearance,warm medium-brown skin,long centre-parted dark wavy hair with caramel ombré ends,dark brown eyes,defined brows,natural makeup,no jewellery,light heather-grey short-sleeve fitted mock-neck top. Use the approved Sia_v1 voice only;source/rights approval is still required. Warm,patient Hinglish;clear neutral Indian English;no invented or replacement voice.
PACE:Estimate140words/minute;natural140–165wpm Hinglish if the approved voice sounds clear. Never rush English pronunciation to fit. No recurring greeting,no long setup,no added filler.
SETTING:Pale-blue studio. No map;Sia hook then direct English model. No other visible people,reflections,crowds or voices. No implied real-world visit without verified assets.
VALUE:Start the useful model at2.0seconds: One child.
GRAPHICS:Exact supplied SpeakX logo on end card only. Readable Romanized Hinglish subtitles. Every erroneous phrase,including a hook,has red ❌ WRONG from first appearance;correct models have✅. Silent cards are not spoken. Keep bottom20% and right12% clear. Map imagery must never cover teaching text.
AUDIO:Exact voiceover below,with stated silent practice holds. Soft original/licensed music under voice;at most one soft correction chime,no masked pronunciation.
EXACT SPOKEN SCRIPT: Childs? Sahi word suno. One child. Child ka plural children. One child, two children. The child is reading. The children are reading. Plural mein children ke saath are use karo. Bolke dekho: One child. Ab sentence badlo. The child is here. The children are here. Child se children hua, aur is se are. Aaj ka word: Group. samooh. This group meets every week. Children ke saath sentence bolo.
SCENES:
0–2 seconds | VO: Childs? Sahi word suno. | EXACT CAPTIONS: Childs? Sahi word suno. | CARDS: ["Childs? Sahi word suno."] | SHOT: Eye-level chest-up Sia in Pale-blue studio;immediate eye contact,no greeting or location tour. No map during the hook. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
2–4 seconds | VO: One child. | EXACT CAPTIONS: One child. | CARDS: ["✅ One child."] | SHOT: Eye-level Sia;correct English model appears beside her immediately,no map. | EDIT: No lead-in. Sia speaks the useful line immediately. Hold target text through any cutaway. | SILENT PRACTICE: 0 seconds.
4–7.5 seconds | VO: Child ka plural children. One child, two children. | EXACT CAPTIONS: Child ka plural children. One child, two children. | CARDS: [] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
7.5–14.4 seconds | VO: The child is reading. The children are reading. Plural mein children ke saath are use karo. | EXACT CAPTIONS: The child is reading. The children are reading. Plural mein children ke saath are use karo. | CARDS: ["❌ WRONG: Childs."] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
14.4–28.3 seconds | VO: Bolke dekho: One child. Ab sentence badlo. The child is here. The children are here. Child se children hua, aur is se are. | EXACT CAPTIONS: Bolke dekho: One child. Ab sentence badlo. The child is here. The children are here. Child se children hua, aur is se are. | CARDS: ["One child. Two children."] | SHOT: Locked eye-level Sia;small encouraging nod;hold still for two-second learner repetition. | EDIT: Sia gives the transfer example, then holds silently for 4 seconds while the learner says their own version. No filler or greeting. | SILENT PRACTICE: 4 seconds.
28.3–32.6 seconds | VO: Aaj ka word: Group. samooh. This group meets every week. | EXACT CAPTIONS: Aaj ka word: Group. samooh. This group meets every week. | CARDS: ["Group — samooh", "This group meets every week."] | SHOT: Eye-level Sia with a compact word/meaning/example card beside her;no extra person or voice. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
32.6–36.8 seconds | VO: Children ke saath sentence bolo. | EXACT CAPTIONS: Children ke saath sentence bolo. | CARDS: [] | SHOT: Sia stays on screen with exact supplied SpeakX logo and one readable silent end card. | EDIT: Hold a silent end card after the practice action;no generic spoken sign-off. Specific silent next-episode tease:Kal: offer par sochne ka time maango. | SILENT PRACTICE: 0 seconds.
END: Deliver the complete answer today. Silent end-card text: Kal: offer par sochne ka time maango.. No cliffhanger or generic spoken sign-off. Measure duration;check Sia identity,voice,pronunciation,captions and safe zones. Deliver video,cover,caption track,transcript and QA;do not publish. Editable provider-independent prompt;no render generated.

```

### Native platform package

```json

{
  "youtube": {
    "title": "Child to Children: Irregular Plural Practice",
    "description": "One child.\nSia shows the model first,then a brief Hinglish explanation.\nTwo ___ are here: child ya children?\nWord:Group — samooh; people or things together. This group meets every week.\n#Shorts #SpeakX #EnglishPractice",
    "thumbnailCopy": "ONE CHILD, TWO…",
    "tags": [
      "child children plural",
      "Ek ya Anek Wednesday",
      "Sia SpeakX",
      "spoken English Hinglish"
    ],
    "pinnedCommentDraft": "Try:Two ___ are here: child ya children? Model:Two children are here. Your own version can be different.",
    "scheduleIST": "18:30"
  },
  "instagram": {
    "caption": "Childs? Sahi word suno.\nOne child. Two children.\nTwo ___ are here: child ya children?\n#SpeakX #EnglishSeekho #SiaSikhaatiHai",
    "coverCopy": "ONE CHILD, TWO…",
    "altText": "Sia in pale-blue studio, teaching child becomes children; captions show: One child. Two children.",
    "scheduleIST": "19:30"
  },
  "facebook": {
    "caption": "Childs? Sahi word suno.\nOne child.\nTwo ___ are here: child ya children? SpeakX · Muh khol. English bol!",
    "title": "Child to Children: Irregular Plural Practice",
    "scheduleIST": "20:00"
  },
  "x": {
    "morningText": "English tip: One child. Two children. Today’s word: Group — people or things together. Example: This group meets every week. #SpeakX",
    "eveningText": "Sia practice: Two ___ are here: child ya children? Model: One child. Two children. #SpeakX",
    "morningIST": "08:30",
    "eveningIST": "19:00"
  },
  "story": {
    "timeIST": "13:00",
    "frames": [
      "Two ___ are here: child ya children?",
      "Two children are here.",
      "Try your own version;send a learning question if helpful."
    ]
  }
}

```

### Experiment

A task-led opening may help parent or education learner recognise relevance faster than hearing the model first;the model-first alternative may improve clarity.

The change from is to are may overshadow children;keep the plural as the main target.



## 2026-10-22 · Ask for time to consider an offer

Baat-Cheet Thursday · Candidate considering a job offer · Conversion · Virtual interview room · 41.8s plan

### Hooks

- A (selected): Offer mila. Waqt chahiye?

- B: Could I have a day to consider the offer?

- C: Offer par haan abhi?

### Exact Sia script

Offer mila. Waqt chahiye? Could I have a day to consider the offer? Thank you. Would it be possible to have a day to consider the offer? Time clear bolo. Bolke dekho: Could I have a day to consider the offer? Ab request ko apne pace par bolo. Could I have a day to consider the offer? Kitna time chahiye, clear rakho. Aaj ka word: Consider. vichaar karna. I would like to consider the offer. Request bina dekhe bolo.

### Production prompt

```text

Produce SpeakX episodeSIA-2026-10-22: Ask for time to consider an offer. Vertical1080×1920,target 41.8 seconds,maximum45seconds. Only Sia appears and speaks. Match the supplied character board exactly:Indian woman,mid-20s appearance,warm medium-brown skin,long centre-parted dark wavy hair with caramel ombré ends,dark brown eyes,defined brows,natural makeup,no jewellery,light heather-grey short-sleeve fitted mock-neck top. Use the approved Sia_v1 voice only;source/rights approval is still required. Warm,patient Hinglish;clear neutral Indian English;no invented or replacement voice.
PACE:Estimate140words/minute;natural140–165wpm Hinglish if the approved voice sounds clear. Never rush English pronunciation to fit. No recurring greeting,no long setup,no added filler.
SETTING:Virtual interview room. 0–2seconds Sia hook;2–3seconds one-second approved map cutaway under Sia’s answer audio;keep the English model visible and return to Sia. No other visible people,reflections,crowds or voices. No implied real-world visit without verified assets.
VALUE:Start the useful model at2.0seconds: Could I have a day to consider the offer?
GRAPHICS:Exact supplied SpeakX logo on end card only. Readable Romanized Hinglish subtitles. Every erroneous phrase,including a hook,has red ❌ WRONG from first appearance;correct models have✅. Silent cards are not spoken. Keep bottom20% and right12% clear. Map imagery must never cover teaching text.
AUDIO:Exact voiceover below,with stated silent practice holds. Soft original/licensed music under voice;at most one soft correction chime,no masked pronunciation.
EXACT SPOKEN SCRIPT: Offer mila. Waqt chahiye? Could I have a day to consider the offer? Thank you. Would it be possible to have a day to consider the offer? Time clear bolo. Bolke dekho: Could I have a day to consider the offer? Ab request ko apne pace par bolo. Could I have a day to consider the offer? Kitna time chahiye, clear rakho. Aaj ka word: Consider. vichaar karna. I would like to consider the offer. Request bina dekhe bolo.
SCENES:
0–2 seconds | VO: Offer mila. Waqt chahiye? | EXACT CAPTIONS: Offer mila. Waqt chahiye? | CARDS: ["Offer mila. Waqt chahiye?"] | SHOT: Eye-level chest-up Sia in Virtual interview room;immediate eye contact,no greeting or location tour. No map during the hook. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
2–5.9 seconds | VO: Could I have a day to consider the offer? | EXACT CAPTIONS: Could I have a day to consider the offer? | CARDS: ["✅ Could I have a day to consider the offer?"] | SHOT: At2–3seconds show an approved one-second map-pin cutaway under continuing Sia audio,then eye-level Sia at Virtual interview room. Keep the English model in a separate safe text region throughout;the map must not cover it. | EDIT: No lead-in. Sia speaks the useful line immediately. Hold target text through any cutaway. | SILENT PRACTICE: 0 seconds.
5.9–7.9 seconds | VO: Thank you. | EXACT CAPTIONS: Thank you. | CARDS: ["TEXT ONLY: We offer you the role."] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
7.9–14.4 seconds | VO: Would it be possible to have a day to consider the offer? Time clear bolo. | EXACT CAPTIONS: Would it be possible to have a day to consider the offer? Time clear bolo. | CARDS: [] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
14.4–32.2 seconds | VO: Bolke dekho: Could I have a day to consider the offer? Ab request ko apne pace par bolo. Could I have a day to consider the offer? Kitna time chahiye, clear rakho. | EXACT CAPTIONS: Bolke dekho: Could I have a day to consider the offer? Ab request ko apne pace par bolo. Could I have a day to consider the offer? Kitna time chahiye, clear rakho. | CARDS: ["Would it be possible to have a day to consider the offer?"] | SHOT: Locked eye-level Sia;small encouraging nod;hold still for two-second learner repetition. | EDIT: Sia gives the transfer example, then holds silently for 4 seconds while the learner says their own version. No filler or greeting. | SILENT PRACTICE: 4 seconds.
32.2–37.8 seconds | VO: Aaj ka word: Consider. vichaar karna. I would like to consider the offer. | EXACT CAPTIONS: Aaj ka word: Consider. vichaar karna. I would like to consider the offer. | CARDS: ["Consider — vichaar karna", "I would like to consider the offer."] | SHOT: Eye-level Sia with a compact word/meaning/example card beside her;no extra person or voice. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
37.8–41.8 seconds | VO: Request bina dekhe bolo. | EXACT CAPTIONS: Request bina dekhe bolo. | CARDS: [] | SHOT: Sia stays on screen with exact supplied SpeakX logo and one readable silent end card. | EDIT: Hold a silent end card after the practice action;no generic spoken sign-off. Specific silent next-episode tease:Kal: Friday ko aur Friday tak. | SILENT PRACTICE: 0 seconds.
END: Deliver the complete answer today. Silent end-card text: Kal: Friday ko aur Friday tak.. No cliffhanger or generic spoken sign-off. Measure duration;check Sia identity,voice,pronunciation,captions and safe zones. Deliver video,cover,caption track,transcript and QA;do not publish. Editable provider-independent prompt;no render generated.

```

### Native platform package

```json

{
  "youtube": {
    "title": "Ask for Time to Consider a Job Offer",
    "description": "Could I have a day to consider the offer?\nSia shows the model first,then a brief Hinglish explanation.\nOffer ke liye ek din maangne ki request bolo.\nWord:Consider — vichaar karna; think carefully before deciding. I would like to consider the offer.\n#Shorts #SpeakX #EnglishPractice\nMore speaking practice: SpeakX website in our channel profile.",
    "thumbnailCopy": "TIME TO THINK",
    "tags": [
      "ask time consider job offer",
      "Baat-Cheet Thursday",
      "Sia SpeakX",
      "spoken English Hinglish"
    ],
    "pinnedCommentDraft": "Try:Offer ke liye ek din maangne ki request bolo. Model:Could I have a day to consider the offer? Your own version can be different.",
    "scheduleIST": "18:30"
  },
  "instagram": {
    "caption": "Offer mila. Waqt chahiye?\nWould it be possible to have a day to consider the offer?\nOffer ke liye ek din maangne ki request bolo.\n#SpeakX #EnglishSeekho #SiaSikhaatiHai\nAgli speaking practice SpeakX par karo — profile link se shuru karo.",
    "coverCopy": "TIME TO THINK",
    "altText": "Sia in virtual interview room, teaching ask for time to consider an offer; captions show: Would it be possible to have a day to consider the offer?",
    "scheduleIST": "19:30"
  },
  "facebook": {
    "caption": "Offer mila. Waqt chahiye?\nCould I have a day to consider the offer?\nOffer ke liye ek din maangne ki request bolo. SpeakX · Muh khol. English bol!\nPractice with Sia: https://speakx.ai/",
    "title": "Ask for Time to Consider a Job Offer",
    "scheduleIST": "20:00"
  },
  "x": {
    "morningText": "English tip: Would it be possible to have a day to consider the offer? Today’s word: Consider — think carefully before deciding. Example: I would like to consider the offer. #SpeakX",
    "eveningText": "Sia practice: Offer ke liye ek din maangne ki request bolo. Model: Would it be possible to have a day to consider the offer? #SpeakX",
    "morningIST": "08:30",
    "eveningIST": "19:00"
  },
  "story": {
    "timeIST": "13:00",
    "frames": [
      "Offer ke liye ek din maangne ki request bolo.",
      "Could I have a day to consider the offer?",
      "Try your own version;send a learning question if helpful."
    ]
  }
}

```

### Experiment

A task-led opening may help candidate considering a job offer recognise relevance faster than hearing the model first;the model-first alternative may improve clarity.

The longer formal request risks rushing;protect pronunciation and reduce nonessential holds first.



## 2026-10-23 · Connect a plan and a deadline

Sentence Banao Friday · Junior professional making commitments · Trust · Virtual coworking desk · 43.0s plan

### Hooks

- A (selected): Friday ko ya tak?

- B: I will send the report by Friday.

- C: By Friday means Friday?

### Exact Sia script

Friday ko ya tak? I will send the report by Friday. By Friday: Friday tak, pehle bhi ho sakta hai. I will send the report by Friday. On Friday: Friday ko. I will send the report on Friday. Deadline ke liye by. Bolke dekho: I will send the report by Friday. Ab apna task jodo. I will finish the slides by Friday. Friday tak, lekin exact hour chahiye toh woh bhi poochho. Aaj ka word: Deadline. antim samay. The deadline is Friday. Apni deadline bolo.

### Production prompt

```text

Produce SpeakX episodeSIA-2026-10-23: Connect a plan and a deadline. Vertical1080×1920,target 43.0 seconds,maximum45seconds. Only Sia appears and speaks. Match the supplied character board exactly:Indian woman,mid-20s appearance,warm medium-brown skin,long centre-parted dark wavy hair with caramel ombré ends,dark brown eyes,defined brows,natural makeup,no jewellery,light heather-grey short-sleeve fitted mock-neck top. Use the approved Sia_v1 voice only;source/rights approval is still required. Warm,patient Hinglish;clear neutral Indian English;no invented or replacement voice.
PACE:Estimate140words/minute;natural140–165wpm Hinglish if the approved voice sounds clear. Never rush English pronunciation to fit. No recurring greeting,no long setup,no added filler.
SETTING:Virtual coworking desk. No map;Sia hook then direct English model. No other visible people,reflections,crowds or voices. No implied real-world visit without verified assets.
VALUE:Start the useful model at2.0seconds: I will send the report by Friday.
GRAPHICS:Exact supplied SpeakX logo on end card only. Readable Romanized Hinglish subtitles. Every erroneous phrase,including a hook,has red ❌ WRONG from first appearance;correct models have✅. Silent cards are not spoken. Keep bottom20% and right12% clear. Map imagery must never cover teaching text.
AUDIO:Exact voiceover below,with stated silent practice holds. Soft original/licensed music under voice;at most one soft correction chime,no masked pronunciation.
EXACT SPOKEN SCRIPT: Friday ko ya tak? I will send the report by Friday. By Friday: Friday tak, pehle bhi ho sakta hai. I will send the report by Friday. On Friday: Friday ko. I will send the report on Friday. Deadline ke liye by. Bolke dekho: I will send the report by Friday. Ab apna task jodo. I will finish the slides by Friday. Friday tak, lekin exact hour chahiye toh woh bhi poochho. Aaj ka word: Deadline. antim samay. The deadline is Friday. Apni deadline bolo.
SCENES:
0–2 seconds | VO: Friday ko ya tak? | EXACT CAPTIONS: Friday ko ya tak? | CARDS: ["Friday ko ya tak?"] | SHOT: Eye-level chest-up Sia in Virtual coworking desk;immediate eye contact,no greeting or location tour. No map during the hook. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
2–5.0 seconds | VO: I will send the report by Friday. | EXACT CAPTIONS: I will send the report by Friday. | CARDS: ["✅ I will send the report by Friday."] | SHOT: Eye-level Sia;correct English model appears beside her immediately,no map. | EDIT: No lead-in. Sia speaks the useful line immediately. Hold target text through any cutaway. | SILENT PRACTICE: 0 seconds.
5.0–11.9 seconds | VO: By Friday: Friday tak, pehle bhi ho sakta hai. I will send the report by Friday. | EXACT CAPTIONS: By Friday: Friday tak, pehle bhi ho sakta hai. I will send the report by Friday. | CARDS: [] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
11.9–18.4 seconds | VO: On Friday: Friday ko. I will send the report on Friday. Deadline ke liye by. | EXACT CAPTIONS: On Friday: Friday ko. I will send the report on Friday. Deadline ke liye by. | CARDS: [] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
18.4–34.7 seconds | VO: Bolke dekho: I will send the report by Friday. Ab apna task jodo. I will finish the slides by Friday. Friday tak, lekin exact hour chahiye toh woh bhi poochho. | EXACT CAPTIONS: Bolke dekho: I will send the report by Friday. Ab apna task jodo. I will finish the slides by Friday. Friday tak, lekin exact hour chahiye toh woh bhi poochho. | CARDS: ["I will send the report by Friday."] | SHOT: Locked eye-level Sia;small encouraging nod;hold still for two-second learner repetition. | EDIT: Sia gives the transfer example, then holds silently for 3.4 seconds while the learner says their own version. No filler or greeting. | SILENT PRACTICE: 3.4 seconds.
34.7–39.0 seconds | VO: Aaj ka word: Deadline. antim samay. The deadline is Friday. | EXACT CAPTIONS: Aaj ka word: Deadline. antim samay. The deadline is Friday. | CARDS: ["Deadline — antim samay", "The deadline is Friday."] | SHOT: Eye-level Sia with a compact word/meaning/example card beside her;no extra person or voice. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
39.0–43.0 seconds | VO: Apni deadline bolo. | EXACT CAPTIONS: Apni deadline bolo. | CARDS: [] | SHOT: Sia stays on screen with exact supplied SpeakX logo and one readable silent end card. | EDIT: Hold a silent end card after the practice action;no generic spoken sign-off. Specific silent next-episode tease:Kal: did not ke baad go. | SILENT PRACTICE: 0 seconds.
END: Deliver the complete answer today. Silent end-card text: Kal: did not ke baad go.. No cliffhanger or generic spoken sign-off. Measure duration;check Sia identity,voice,pronunciation,captions and safe zones. Deliver video,cover,caption track,transcript and QA;do not publish. Editable provider-independent prompt;no render generated.

```

### Native platform package

```json

{
  "youtube": {
    "title": "By Friday vs On Friday: Explain Your Deadline",
    "description": "I will send the report by Friday.\nSia shows the model first,then a brief Hinglish explanation.\nApne task ke saath by Friday sentence banao.\nWord:Deadline — antim samay; the latest time something is due. The deadline is Friday.\n#Shorts #SpeakX #EnglishPractice",
    "thumbnailCopy": "FRIDAY: BY OR ON?",
    "tags": [
      "by Friday on Friday difference",
      "Sentence Banao Friday",
      "Sia SpeakX",
      "spoken English Hinglish"
    ],
    "pinnedCommentDraft": "Try:Apne task ke saath by Friday sentence banao. Model:I will finish the report by Friday. Your own version can be different.",
    "scheduleIST": "18:30"
  },
  "instagram": {
    "caption": "Friday ko ya tak?\nI will send the report by Friday.\nApne task ke saath by Friday sentence banao.\n#SpeakX #EnglishSeekho #SiaSikhaatiHai",
    "coverCopy": "FRIDAY: BY OR ON?",
    "altText": "Sia in virtual coworking desk, teaching connect a plan and a deadline; captions show: I will send the report by Friday.",
    "scheduleIST": "19:30"
  },
  "facebook": {
    "caption": "Friday ko ya tak?\nI will send the report by Friday.\nApne task ke saath by Friday sentence banao. SpeakX · Muh khol. English bol!",
    "title": "By Friday vs On Friday: Explain Your Deadline",
    "scheduleIST": "20:00"
  },
  "x": {
    "morningText": "English tip: I will send the report by Friday. Today’s word: Deadline — the latest time something is due. Example: The deadline is Friday. #SpeakX",
    "eveningText": "Sia practice: Apne task ke saath by Friday sentence banao. Model: I will send the report by Friday. #SpeakX",
    "morningIST": "08:30",
    "eveningIST": "19:00"
  },
  "story": {
    "timeIST": "13:00",
    "frames": [
      "Apne task ke saath by Friday sentence banao.",
      "I will finish the report by Friday.",
      "Try your own version;send a learning question if helpful."
    ]
  }
}

```

### Experiment

A task-led opening may help junior professional making commitments recognise relevance faster than hearing the model first;the model-first alternative may improve clarity.

By Friday leaves the exact time unspecified;avoid claiming it means a universal Friday cutoff.



## 2026-10-24 · Did not plus base verb

Galti Pakdo Saturday · Learner describing a missed action · Trust · Pale-blue studio · 38.5s plan

### Hooks

- A (selected): Did not went?

- B: I did not go.

- C: Past mein do pasts?

### Exact Sia script

Did not went? I did not go. Did not ke baad base verb. I did not go. I did not call. I did not finish. Past ka signal did mein hai. Bolke dekho: I did not go. Ab call ke saath bolo. She did not call. Called nahi; call. Did past dikhata hai, isliye main verb base form mein hai. Aaj ka word: Attempt. koshish. Make another attempt. Call ke saath try karo.

### Production prompt

```text

Produce SpeakX episodeSIA-2026-10-24: Did not plus base verb. Vertical1080×1920,target 38.5 seconds,maximum45seconds. Only Sia appears and speaks. Match the supplied character board exactly:Indian woman,mid-20s appearance,warm medium-brown skin,long centre-parted dark wavy hair with caramel ombré ends,dark brown eyes,defined brows,natural makeup,no jewellery,light heather-grey short-sleeve fitted mock-neck top. Use the approved Sia_v1 voice only;source/rights approval is still required. Warm,patient Hinglish;clear neutral Indian English;no invented or replacement voice.
PACE:Estimate140words/minute;natural140–165wpm Hinglish if the approved voice sounds clear. Never rush English pronunciation to fit. No recurring greeting,no long setup,no added filler.
SETTING:Pale-blue studio. No map;Sia hook then direct English model. No other visible people,reflections,crowds or voices. No implied real-world visit without verified assets.
VALUE:Start the useful model at2.0seconds: I did not go.
GRAPHICS:Exact supplied SpeakX logo on end card only. Readable Romanized Hinglish subtitles. Every erroneous phrase,including a hook,has red ❌ WRONG from first appearance;correct models have✅. Silent cards are not spoken. Keep bottom20% and right12% clear. Map imagery must never cover teaching text.
AUDIO:Exact voiceover below,with stated silent practice holds. Soft original/licensed music under voice;at most one soft correction chime,no masked pronunciation.
EXACT SPOKEN SCRIPT: Did not went? I did not go. Did not ke baad base verb. I did not go. I did not call. I did not finish. Past ka signal did mein hai. Bolke dekho: I did not go. Ab call ke saath bolo. She did not call. Called nahi; call. Did past dikhata hai, isliye main verb base form mein hai. Aaj ka word: Attempt. koshish. Make another attempt. Call ke saath try karo.
SCENES:
0–2 seconds | VO: Did not went? | EXACT CAPTIONS: Did not went? | CARDS: ["Did not went?"] | SHOT: Eye-level chest-up Sia in Pale-blue studio;immediate eye contact,no greeting or location tour. No map during the hook. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
2–4 seconds | VO: I did not go. | EXACT CAPTIONS: I did not go. | CARDS: ["✅ I did not go."] | SHOT: Eye-level Sia;correct English model appears beside her immediately,no map. | EDIT: No lead-in. Sia speaks the useful line immediately. Hold target text through any cutaway. | SILENT PRACTICE: 0 seconds.
4–8.3 seconds | VO: Did not ke baad base verb. I did not go. | EXACT CAPTIONS: Did not ke baad base verb. I did not go. | CARDS: ["❌ WRONG: I did not went."] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
8.3–14.3 seconds | VO: I did not call. I did not finish. Past ka signal did mein hai. | EXACT CAPTIONS: I did not call. I did not finish. Past ka signal did mein hai. | CARDS: [] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
14.3–30.8 seconds | VO: Bolke dekho: I did not go. Ab call ke saath bolo. She did not call. Called nahi; call. Did past dikhata hai, isliye main verb base form mein hai. | EXACT CAPTIONS: Bolke dekho: I did not go. Ab call ke saath bolo. She did not call. Called nahi; call. Did past dikhata hai, isliye main verb base form mein hai. | CARDS: ["I did not go."] | SHOT: Locked eye-level Sia;small encouraging nod;hold still for two-second learner repetition. | EDIT: Sia gives the transfer example, then holds silently for 4 seconds while the learner says their own version. No filler or greeting. | SILENT PRACTICE: 4 seconds.
30.8–34.3 seconds | VO: Aaj ka word: Attempt. koshish. Make another attempt. | EXACT CAPTIONS: Aaj ka word: Attempt. koshish. Make another attempt. | CARDS: ["Attempt — koshish", "Make another attempt."] | SHOT: Eye-level Sia with a compact word/meaning/example card beside her;no extra person or voice. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
34.3–38.5 seconds | VO: Call ke saath try karo. | EXACT CAPTIONS: Call ke saath try karo. | CARDS: [] | SHOT: Sia stays on screen with exact supplied SpeakX logo and one readable silent end card. | EDIT: Hold a silent end card after the practice action;no generic spoken sign-off. Specific silent next-episode tease:Kal: question, plural aur deadline check. | SILENT PRACTICE: 0 seconds.
END: Deliver the complete answer today. Silent end-card text: Kal: question, plural aur deadline check.. No cliffhanger or generic spoken sign-off. Measure duration;check Sia identity,voice,pronunciation,captions and safe zones. Deliver video,cover,caption track,transcript and QA;do not publish. Editable provider-independent prompt;no render generated.

```

### Native platform package

```json

{
  "youtube": {
    "title": "I Did Not Go: Fix a Past-Tense Mistake",
    "description": "I did not go.\nSia shows the model first,then a brief Hinglish explanation.\nShe did not ___: call ya called?\nWord:Attempt — koshish; an effort to do something. Make another attempt.\n#Shorts #SpeakX #EnglishPractice",
    "thumbnailCopy": "DID NOT + GO",
    "tags": [
      "did not go went grammar",
      "Galti Pakdo Saturday",
      "Sia SpeakX",
      "spoken English Hinglish"
    ],
    "pinnedCommentDraft": "Try:She did not ___: call ya called? Model:She did not call. Your own version can be different.",
    "scheduleIST": "10:30"
  },
  "instagram": {
    "caption": "Did not went?\nI did not go.\nShe did not ___: call ya called?\n#SpeakX #EnglishSeekho #SiaSikhaatiHai",
    "coverCopy": "DID NOT + GO",
    "altText": "Sia in pale-blue studio, teaching did not plus base verb; captions show: I did not go.",
    "scheduleIST": "11:00"
  },
  "facebook": {
    "caption": "Did not went?\nI did not go.\nShe did not ___: call ya called? SpeakX · Muh khol. English bol!",
    "title": "I Did Not Go: Fix a Past-Tense Mistake",
    "scheduleIST": "11:30"
  },
  "x": {
    "morningText": "English tip: I did not go. Today’s word: Attempt — an effort to do something. Example: Make another attempt. #SpeakX",
    "eveningText": "Sia practice: She did not ___: call ya called? Model: I did not go. #SpeakX",
    "morningIST": "08:30",
    "eveningIST": "19:00"
  },
  "story": {
    "timeIST": "13:00",
    "frames": [
      "She did not ___: call ya called?",
      "She did not call.",
      "Try your own version;send a learning question if helpful."
    ]
  }
}

```

### Experiment

A task-led opening may help learner describing a missed action recognise relevance faster than hearing the model first;the model-first alternative may improve clarity.

A learner may generalise the rule to every past sentence;state it is after did not.



## 2026-10-25 · Week four three-question revision

Revision Sunday · Working learner reviewing the week · Community · Pale-blue studio · 41.1s plan

### Hooks

- A (selected): Teen useful English checks.

- B: Does she work here? Children.

- C: Deadline ka word chuno.

### Exact Sia script

Teen useful English checks. Does she work here? Children. One: Does she ___ here? Work. Two: Child ka plural? Children. Three: Friday tak: by Friday ya on Friday? By Friday. Bolke dekho: I will send it by Friday. Ab apni deadline bolo. I will send the file by Friday. Phir question banao: Does she work here? Model se compare karo. Aaj ka word: Review. dobara dekhna. Review your answers. Apni deadline phir bolo.

### Production prompt

```text

Produce SpeakX episodeSIA-2026-10-25: Week four three-question revision. Vertical1080×1920,target 41.1 seconds,maximum45seconds. Only Sia appears and speaks. Match the supplied character board exactly:Indian woman,mid-20s appearance,warm medium-brown skin,long centre-parted dark wavy hair with caramel ombré ends,dark brown eyes,defined brows,natural makeup,no jewellery,light heather-grey short-sleeve fitted mock-neck top. Use the approved Sia_v1 voice only;source/rights approval is still required. Warm,patient Hinglish;clear neutral Indian English;no invented or replacement voice.
PACE:Estimate140words/minute;natural140–165wpm Hinglish if the approved voice sounds clear. Never rush English pronunciation to fit. No recurring greeting,no long setup,no added filler.
SETTING:Pale-blue studio. No map;Sia hook then direct English model. No other visible people,reflections,crowds or voices. No implied real-world visit without verified assets.
VALUE:Start the useful model at2.0seconds: Does she work here? Children.
GRAPHICS:Exact supplied SpeakX logo on end card only. Readable Romanized Hinglish subtitles. Every erroneous phrase,including a hook,has red ❌ WRONG from first appearance;correct models have✅. Silent cards are not spoken. Keep bottom20% and right12% clear. Map imagery must never cover teaching text.
AUDIO:Exact voiceover below,with stated silent practice holds. Soft original/licensed music under voice;at most one soft correction chime,no masked pronunciation.
EXACT SPOKEN SCRIPT: Teen useful English checks. Does she work here? Children. One: Does she ___ here? Work. Two: Child ka plural? Children. Three: Friday tak: by Friday ya on Friday? By Friday. Bolke dekho: I will send it by Friday. Ab apni deadline bolo. I will send the file by Friday. Phir question banao: Does she work here? Model se compare karo. Aaj ka word: Review. dobara dekhna. Review your answers. Apni deadline phir bolo.
SCENES:
0–2 seconds | VO: Teen useful English checks. | EXACT CAPTIONS: Teen useful English checks. | CARDS: ["Teen useful English checks."] | SHOT: Eye-level chest-up Sia in Pale-blue studio;immediate eye contact,no greeting or location tour. No map during the hook. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
2–4.2 seconds | VO: Does she work here? Children. | EXACT CAPTIONS: Does she work here? Children. | CARDS: ["✅ Does she work here? Children."] | SHOT: Eye-level Sia;correct English model appears beside her immediately,no map. | EDIT: No lead-in. Sia speaks the useful line immediately. Hold target text through any cutaway. | SILENT PRACTICE: 0 seconds.
4.2–9.5 seconds | VO: One: Does she ___ here? Work. Two: Child ka plural? | EXACT CAPTIONS: One: Does she ___ here? Work. Two: Child ka plural? | CARDS: [] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 1 seconds.
9.5–16.3 seconds | VO: Children. Three: Friday tak: by Friday ya on Friday? By Friday. | EXACT CAPTIONS: Children. Three: Friday tak: by Friday ya on Friday? By Friday. | CARDS: [] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 2 seconds.
16.3–33.2 seconds | VO: Bolke dekho: I will send it by Friday. Ab apni deadline bolo. I will send the file by Friday. Phir question banao: Does she work here? Model se compare karo. | EXACT CAPTIONS: Bolke dekho: I will send it by Friday. Ab apni deadline bolo. I will send the file by Friday. Phir question banao: Does she work here? Model se compare karo. | CARDS: ["Does she work here? Children. By Friday."] | SHOT: Locked eye-level Sia;small encouraging nod;hold still for two-second learner repetition. | EDIT: Sia gives the transfer example, then holds silently for 4 seconds while the learner says their own version. No filler or greeting. | SILENT PRACTICE: 4 seconds.
33.2–37.1 seconds | VO: Aaj ka word: Review. dobara dekhna. Review your answers. | EXACT CAPTIONS: Aaj ka word: Review. dobara dekhna. Review your answers. | CARDS: ["Review — dobara dekhna", "Review your answers."] | SHOT: Eye-level Sia with a compact word/meaning/example card beside her;no extra person or voice. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
37.1–41.1 seconds | VO: Apni deadline phir bolo. | EXACT CAPTIONS: Apni deadline phir bolo. | CARDS: [] | SHOT: Sia stays on screen with exact supplied SpeakX logo and one readable silent end card. | EDIT: Hold a silent end card after the practice action;no generic spoken sign-off. Specific silent next-episode tease:Kal: change par adaptable kaise bolein. | SILENT PRACTICE: 0 seconds.
END: Deliver the complete answer today. Silent end-card text: Kal: change par adaptable kaise bolein.. No cliffhanger or generic spoken sign-off. Measure duration;check Sia identity,voice,pronunciation,captions and safe zones. Deliver video,cover,caption track,transcript and QA;do not publish. Editable provider-independent prompt;no render generated.

```

### Native platform package

```json

{
  "youtube": {
    "title": "English Quiz: Questions, Plurals and Deadlines",
    "description": "Does she work here? Children.\nSia shows the model first,then a brief Hinglish explanation.\nTeen answers khud check karke deadline sentence bolo.\nWord:Review — dobara dekhna; check something again. Review your answers.\n#Shorts #SpeakX #EnglishPractice",
    "thumbnailCopy": "THREE QUICK CHECKS",
    "tags": [
      "English deadline grammar quiz",
      "Revision Sunday",
      "Sia SpeakX",
      "spoken English Hinglish"
    ],
    "pinnedCommentDraft": "Try:Teen answers khud check karke deadline sentence bolo. Model:work; children; by Friday. Your own version can be different.",
    "scheduleIST": "10:30"
  },
  "instagram": {
    "caption": "Teen useful English checks.\nDoes she work here? Children. By Friday.\nTeen answers khud check karke deadline sentence bolo.\n#SpeakX #EnglishSeekho #SiaSikhaatiHai",
    "coverCopy": "THREE QUICK CHECKS",
    "altText": "Sia in pale-blue studio, teaching week four three-question revision; captions show: Does she work here? Children. By Friday.",
    "scheduleIST": "11:00"
  },
  "facebook": {
    "caption": "Teen useful English checks.\nDoes she work here? Children.\nTeen answers khud check karke deadline sentence bolo. SpeakX · Muh khol. English bol!",
    "title": "English Quiz: Questions, Plurals and Deadlines",
    "scheduleIST": "11:30"
  },
  "x": {
    "morningText": "English tip: Does she work here? Children. By Friday. Today’s word: Review — check something again. Example: Review your answers. #SpeakX",
    "eveningText": "Sia practice: Teen answers khud check karke deadline sentence bolo. Model: Does she work here? Children. By Friday. #SpeakX",
    "morningIST": "08:30",
    "eveningIST": "19:00"
  },
  "story": {
    "timeIST": "13:00",
    "frames": [
      "Teen answers khud check karke deadline sentence bolo.",
      "work; children; by Friday.",
      "Try your own version;send a learning question if helpful."
    ]
  }
}

```

### Experiment

A task-led opening may help working learner reviewing the week recognise relevance faster than hearing the model first;the model-first alternative may improve clarity.

A deadline quiz has two plausible phrases with different meanings;state Friday tak clearly.



## 2026-10-26 · Adaptable: explain flexibility

Word Wala Monday · Career switcher describing flexibility · Trust · Pale-blue studio · 35.2s plan

### Hooks

- A (selected): Plans badle? Yeh bolo.

- B: I am adaptable.

- C: Adaptable ya adaptability?

### Exact Sia script

Plans badle? Yeh bolo. I am adaptable. Aaj ka word adaptable: uh-DAP-tuh-bul. Matlab badlav ke saath dhalne wala. I am adaptable when plans change. An adaptable teammate learns new tools. Adaptable adjective, adaptability noun. Bolke dekho: I am adaptable. Ab ek sachcha example jodo. I learned a new tool when our plan changed. Yeh dikhata hai ki tum kaise adapt hue. Apna real example bolo.

### Production prompt

```text

Produce SpeakX episodeSIA-2026-10-26: Adaptable: explain flexibility. Vertical1080×1920,target 35.2 seconds,maximum45seconds. Only Sia appears and speaks. Match the supplied character board exactly:Indian woman,mid-20s appearance,warm medium-brown skin,long centre-parted dark wavy hair with caramel ombré ends,dark brown eyes,defined brows,natural makeup,no jewellery,light heather-grey short-sleeve fitted mock-neck top. Use the approved Sia_v1 voice only;source/rights approval is still required. Warm,patient Hinglish;clear neutral Indian English;no invented or replacement voice.
PACE:Estimate140words/minute;natural140–165wpm Hinglish if the approved voice sounds clear. Never rush English pronunciation to fit. No recurring greeting,no long setup,no added filler.
SETTING:Pale-blue studio. No map;Sia hook then direct English model. No other visible people,reflections,crowds or voices. No implied real-world visit without verified assets.
VALUE:Start the useful model at2.0seconds: I am adaptable.
GRAPHICS:Exact supplied SpeakX logo on end card only. Readable Romanized Hinglish subtitles. Every erroneous phrase,including a hook,has red ❌ WRONG from first appearance;correct models have✅. Silent cards are not spoken. Keep bottom20% and right12% clear. Map imagery must never cover teaching text.
AUDIO:Exact voiceover below,with stated silent practice holds. Soft original/licensed music under voice;at most one soft correction chime,no masked pronunciation.
EXACT SPOKEN SCRIPT: Plans badle? Yeh bolo. I am adaptable. Aaj ka word adaptable: uh-DAP-tuh-bul. Matlab badlav ke saath dhalne wala. I am adaptable when plans change. An adaptable teammate learns new tools. Adaptable adjective, adaptability noun. Bolke dekho: I am adaptable. Ab ek sachcha example jodo. I learned a new tool when our plan changed. Yeh dikhata hai ki tum kaise adapt hue. Apna real example bolo.
SCENES:
0–2 seconds | VO: Plans badle? Yeh bolo. | EXACT CAPTIONS: Plans badle? Yeh bolo. | CARDS: ["Plans badle? Yeh bolo."] | SHOT: Eye-level chest-up Sia in Pale-blue studio;immediate eye contact,no greeting or location tour. No map during the hook. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
2–4 seconds | VO: I am adaptable. | EXACT CAPTIONS: I am adaptable. | CARDS: ["✅ I am adaptable."] | SHOT: Eye-level Sia;correct English model appears beside her immediately,no map. | EDIT: No lead-in. Sia speaks the useful line immediately. Hold target text through any cutaway. | SILENT PRACTICE: 0 seconds.
4–11.3 seconds | VO: Aaj ka word adaptable: uh-DAP-tuh-bul. Matlab badlav ke saath dhalne wala. I am adaptable when plans change. | EXACT CAPTIONS: Aaj ka word adaptable: uh-DAP-tuh-bul. Matlab badlav ke saath dhalne wala. I am adaptable when plans change. | CARDS: [] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
11.3–15.6 seconds | VO: An adaptable teammate learns new tools. Adaptable adjective, adaptability noun. | EXACT CAPTIONS: An adaptable teammate learns new tools. Adaptable adjective, adaptability noun. | CARDS: ["❌ WRONG: I am adaptability."] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
15.6–31.2 seconds | VO: Bolke dekho: I am adaptable. Ab ek sachcha example jodo. I learned a new tool when our plan changed. Yeh dikhata hai ki tum kaise adapt hue. | EXACT CAPTIONS: Bolke dekho: I am adaptable. Ab ek sachcha example jodo. I learned a new tool when our plan changed. Yeh dikhata hai ki tum kaise adapt hue. | CARDS: ["I am adaptable."] | SHOT: Locked eye-level Sia;small encouraging nod;hold still for two-second learner repetition. | EDIT: Sia gives the transfer example, then holds silently for 4 seconds while the learner says their own version. No filler or greeting. | SILENT PRACTICE: 4 seconds.
31.2–35.2 seconds | VO: Apna real example bolo. | EXACT CAPTIONS: Apna real example bolo. | CARDS: [] | SHOT: Sia stays on screen with exact supplied SpeakX logo and one readable silent end card. | EDIT: Hold a silent end card after the practice action;no generic spoken sign-off. Specific silent next-episode tease:Kal: busy ho se busy the. | SILENT PRACTICE: 0 seconds.
END: Deliver the complete answer today. Silent end-card text: Kal: busy ho se busy the.. No cliffhanger or generic spoken sign-off. Measure duration;check Sia identity,voice,pronunciation,captions and safe zones. Deliver video,cover,caption track,transcript and QA;do not publish. Editable provider-independent prompt;no render generated.

```

### Native platform package

```json

{
  "youtube": {
    "title": "Adaptable: Describe Flexibility in an Interview",
    "description": "I am adaptable.\nSia shows the model first,then a brief Hinglish explanation.\nEk real change aur apna response English mein bolo.\nWord:Adaptable — badlav ke saath dhalne wala; able to adjust to change. I am adaptable when plans change.\n#Shorts #SpeakX #EnglishPractice",
    "thumbnailCopy": "WHEN PLANS CHANGE",
    "tags": [
      "adaptable meaning interview answer",
      "Word Wala Monday",
      "Sia SpeakX",
      "spoken English Hinglish"
    ],
    "pinnedCommentDraft": "Try:Ek real change aur apna response English mein bolo. Model:I am adaptable. I learned a new tool when our project changed. Your own version can be different.",
    "scheduleIST": "18:30"
  },
  "instagram": {
    "caption": "Plans badle? Yeh bolo.\nI am adaptable.\nEk real change aur apna response English mein bolo.\n#SpeakX #EnglishSeekho #SiaSikhaatiHai",
    "coverCopy": "WHEN PLANS CHANGE",
    "altText": "Sia in pale-blue studio, teaching adaptable: explain flexibility; captions show: I am adaptable.",
    "scheduleIST": "19:30"
  },
  "facebook": {
    "caption": "Plans badle? Yeh bolo.\nI am adaptable.\nEk real change aur apna response English mein bolo. SpeakX · Muh khol. English bol!",
    "title": "Adaptable: Describe Flexibility in an Interview",
    "scheduleIST": "20:00"
  },
  "x": {
    "morningText": "English tip: I am adaptable. Today’s word: Adaptable — able to adjust to change. Example: I am adaptable when plans change. #SpeakX",
    "eveningText": "Sia practice: Ek real change aur apna response English mein bolo. Model: I am adaptable. #SpeakX",
    "morningIST": "08:30",
    "eveningIST": "19:00"
  },
  "story": {
    "timeIST": "13:00",
    "frames": [
      "Ek real change aur apna response English mein bolo.",
      "I am adaptable. I learned a new tool when our project changed.",
      "Try your own version;send a learning question if helpful."
    ]
  }
}

```

### Experiment

A task-led opening may help career switcher describing flexibility recognise relevance faster than hearing the model first;the model-first alternative may improve clarity.

Adaptable is abstract;the concrete changed-plan example supplies the meaning.



## 2026-10-27 · Was and were

Grammar Tuesday · Learner giving yesterday’s update · Trust · Pale-blue studio · 38.2s plan

### Hooks

- A (selected): Yesterday: was ya were?

- B: I was busy yesterday.

- C: We was busy?

### Exact Sia script

Yesterday: was ya were? I was busy yesterday. Past mein I, he, she, it ke saath was. You, we, they ke saath were. I was busy yesterday. They were busy yesterday. Bolke dekho: We were at home yesterday. Ab we use karo. We were busy yesterday. Phir she: She was busy yesterday. Pronoun badla, toh was ya were check karo. Aaj ka word: Earlier. pehle. I called earlier. She ke saath try karo.

### Production prompt

```text

Produce SpeakX episodeSIA-2026-10-27: Was and were. Vertical1080×1920,target 38.2 seconds,maximum45seconds. Only Sia appears and speaks. Match the supplied character board exactly:Indian woman,mid-20s appearance,warm medium-brown skin,long centre-parted dark wavy hair with caramel ombré ends,dark brown eyes,defined brows,natural makeup,no jewellery,light heather-grey short-sleeve fitted mock-neck top. Use the approved Sia_v1 voice only;source/rights approval is still required. Warm,patient Hinglish;clear neutral Indian English;no invented or replacement voice.
PACE:Estimate140words/minute;natural140–165wpm Hinglish if the approved voice sounds clear. Never rush English pronunciation to fit. No recurring greeting,no long setup,no added filler.
SETTING:Pale-blue studio. No map;Sia hook then direct English model. No other visible people,reflections,crowds or voices. No implied real-world visit without verified assets.
VALUE:Start the useful model at2.0seconds: I was busy yesterday.
GRAPHICS:Exact supplied SpeakX logo on end card only. Readable Romanized Hinglish subtitles. Every erroneous phrase,including a hook,has red ❌ WRONG from first appearance;correct models have✅. Silent cards are not spoken. Keep bottom20% and right12% clear. Map imagery must never cover teaching text.
AUDIO:Exact voiceover below,with stated silent practice holds. Soft original/licensed music under voice;at most one soft correction chime,no masked pronunciation.
EXACT SPOKEN SCRIPT: Yesterday: was ya were? I was busy yesterday. Past mein I, he, she, it ke saath was. You, we, they ke saath were. I was busy yesterday. They were busy yesterday. Bolke dekho: We were at home yesterday. Ab we use karo. We were busy yesterday. Phir she: She was busy yesterday. Pronoun badla, toh was ya were check karo. Aaj ka word: Earlier. pehle. I called earlier. She ke saath try karo.
SCENES:
0–2 seconds | VO: Yesterday: was ya were? | EXACT CAPTIONS: Yesterday: was ya were? | CARDS: ["Yesterday: was ya were?"] | SHOT: Eye-level chest-up Sia in Pale-blue studio;immediate eye contact,no greeting or location tour. No map during the hook. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
2–4 seconds | VO: I was busy yesterday. | EXACT CAPTIONS: I was busy yesterday. | CARDS: ["✅ I was busy yesterday."] | SHOT: Eye-level Sia;correct English model appears beside her immediately,no map. | EDIT: No lead-in. Sia speaks the useful line immediately. Hold target text through any cutaway. | SILENT PRACTICE: 0 seconds.
4–10.5 seconds | VO: Past mein I, he, she, it ke saath was. You, we, they ke saath were. | EXACT CAPTIONS: Past mein I, he, she, it ke saath was. You, we, they ke saath were. | CARDS: [] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
10.5–14.0 seconds | VO: I was busy yesterday. They were busy yesterday. | EXACT CAPTIONS: I was busy yesterday. They were busy yesterday. | CARDS: ["❌ WRONG: Yesterday I am busy."] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
14.0–30.5 seconds | VO: Bolke dekho: We were at home yesterday. Ab we use karo. We were busy yesterday. Phir she: She was busy yesterday. Pronoun badla, toh was ya were check karo. | EXACT CAPTIONS: Bolke dekho: We were at home yesterday. Ab we use karo. We were busy yesterday. Phir she: She was busy yesterday. Pronoun badla, toh was ya were check karo. | CARDS: ["I was busy yesterday. They were busy yesterday."] | SHOT: Locked eye-level Sia;small encouraging nod;hold still for two-second learner repetition. | EDIT: Sia gives the transfer example, then holds silently for 4 seconds while the learner says their own version. No filler or greeting. | SILENT PRACTICE: 4 seconds.
30.5–34.0 seconds | VO: Aaj ka word: Earlier. pehle. I called earlier. | EXACT CAPTIONS: Aaj ka word: Earlier. pehle. I called earlier. | CARDS: ["Earlier — pehle", "I called earlier."] | SHOT: Eye-level Sia with a compact word/meaning/example card beside her;no extra person or voice. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
34.0–38.2 seconds | VO: She ke saath try karo. | EXACT CAPTIONS: She ke saath try karo. | CARDS: [] | SHOT: Sia stays on screen with exact supplied SpeakX logo and one readable silent end card. | EDIT: Hold a silent end card after the practice action;no generic spoken sign-off. Specific silent next-episode tease:Kal: the news is good. | SILENT PRACTICE: 0 seconds.
END: Deliver the complete answer today. Silent end-card text: Kal: the news is good.. No cliffhanger or generic spoken sign-off. Measure duration;check Sia identity,voice,pronunciation,captions and safe zones. Deliver video,cover,caption track,transcript and QA;do not publish. Editable provider-independent prompt;no render generated.

```

### Native platform package

```json

{
  "youtube": {
    "title": "Was vs Were: Talk About Yesterday",
    "description": "I was busy yesterday.\nSia shows the model first,then a brief Hinglish explanation.\nShe ___ tired yesterday: was ya were?\nWord:Earlier — pehle; before now or before another time. I called earlier.\n#Shorts #SpeakX #EnglishPractice",
    "thumbnailCopy": "TALK ABOUT YESTERDAY",
    "tags": [
      "was were Hindi examples",
      "Grammar Tuesday",
      "Sia SpeakX",
      "spoken English Hinglish"
    ],
    "pinnedCommentDraft": "Try:She ___ tired yesterday: was ya were? Model:She was tired yesterday. Your own version can be different.",
    "scheduleIST": "18:30"
  },
  "instagram": {
    "caption": "Yesterday: was ya were?\nI was busy yesterday. They were busy yesterday.\nShe ___ tired yesterday: was ya were?\n#SpeakX #EnglishSeekho #SiaSikhaatiHai",
    "coverCopy": "TALK ABOUT YESTERDAY",
    "altText": "Sia in pale-blue studio, teaching was and were; captions show: I was busy yesterday. They were busy yesterday.",
    "scheduleIST": "19:30"
  },
  "facebook": {
    "caption": "Yesterday: was ya were?\nI was busy yesterday.\nShe ___ tired yesterday: was ya were? SpeakX · Muh khol. English bol!",
    "title": "Was vs Were: Talk About Yesterday",
    "scheduleIST": "20:00"
  },
  "x": {
    "morningText": "English tip: I was busy yesterday. They were busy yesterday. Today’s word: Earlier — before now or before another time. Example: I called earlier. #SpeakX",
    "eveningText": "Sia practice: She ___ tired yesterday: was ya were? Model: I was busy yesterday. They were busy yesterday. #SpeakX",
    "morningIST": "08:30",
    "eveningIST": "19:00"
  },
  "story": {
    "timeIST": "13:00",
    "frames": [
      "She ___ tired yesterday: was ya were?",
      "She was tired yesterday.",
      "Try your own version;send a learning question if helpful."
    ]
  }
}

```

### Experiment

A task-led opening may help learner giving yesterday’s update recognise relevance faster than hearing the model first;the model-first alternative may improve clarity.

Was/were lists can feel like rote memorisation;anchor them in yesterday’s update.



## 2026-10-28 · The news is: singular agreement

Ek ya Anek Wednesday · Adult learner sharing an update · Trust · Virtual apartment lounge · 37.3s plan

### Hooks

- A (selected): News: is ya are?

- B: The news is good.

- C: News plural lagta hai.

### Exact Sia script

News: is ya are? The news is good. News singular agreement leta hai. The news is good. Ek khabar: a piece of news. I have a piece of news. Bolke dekho: The news is good. Ab ek khabar bolo. I have a piece of news. The news is surprising. News ke saath singular is rakho. Aaj ka word: Update. nayi jaankari. Thank you for the update. News ke saath sentence bolo.

### Production prompt

```text

Produce SpeakX episodeSIA-2026-10-28: The news is: singular agreement. Vertical1080×1920,target 37.3 seconds,maximum45seconds. Only Sia appears and speaks. Match the supplied character board exactly:Indian woman,mid-20s appearance,warm medium-brown skin,long centre-parted dark wavy hair with caramel ombré ends,dark brown eyes,defined brows,natural makeup,no jewellery,light heather-grey short-sleeve fitted mock-neck top. Use the approved Sia_v1 voice only;source/rights approval is still required. Warm,patient Hinglish;clear neutral Indian English;no invented or replacement voice.
PACE:Estimate140words/minute;natural140–165wpm Hinglish if the approved voice sounds clear. Never rush English pronunciation to fit. No recurring greeting,no long setup,no added filler.
SETTING:Virtual apartment lounge. No map;Sia hook then direct English model. No other visible people,reflections,crowds or voices. No implied real-world visit without verified assets.
VALUE:Start the useful model at2.0seconds: The news is good.
GRAPHICS:Exact supplied SpeakX logo on end card only. Readable Romanized Hinglish subtitles. Every erroneous phrase,including a hook,has red ❌ WRONG from first appearance;correct models have✅. Silent cards are not spoken. Keep bottom20% and right12% clear. Map imagery must never cover teaching text.
AUDIO:Exact voiceover below,with stated silent practice holds. Soft original/licensed music under voice;at most one soft correction chime,no masked pronunciation.
EXACT SPOKEN SCRIPT: News: is ya are? The news is good. News singular agreement leta hai. The news is good. Ek khabar: a piece of news. I have a piece of news. Bolke dekho: The news is good. Ab ek khabar bolo. I have a piece of news. The news is surprising. News ke saath singular is rakho. Aaj ka word: Update. nayi jaankari. Thank you for the update. News ke saath sentence bolo.
SCENES:
0–2 seconds | VO: News: is ya are? | EXACT CAPTIONS: News: is ya are? | CARDS: ["News: is ya are?"] | SHOT: Eye-level chest-up Sia in Virtual apartment lounge;immediate eye contact,no greeting or location tour. No map during the hook. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
2–4 seconds | VO: The news is good. | EXACT CAPTIONS: The news is good. | CARDS: ["✅ The news is good."] | SHOT: Eye-level Sia;correct English model appears beside her immediately,no map. | EDIT: No lead-in. Sia speaks the useful line immediately. Hold target text through any cutaway. | SILENT PRACTICE: 0 seconds.
4–7.9 seconds | VO: News singular agreement leta hai. The news is good. | EXACT CAPTIONS: News singular agreement leta hai. The news is good. | CARDS: [] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
7.9–13.1 seconds | VO: Ek khabar: a piece of news. I have a piece of news. | EXACT CAPTIONS: Ek khabar: a piece of news. I have a piece of news. | CARDS: ["❌ WRONG: The news are good.", "❌ WRONG: One news."] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
13.1–28.3 seconds | VO: Bolke dekho: The news is good. Ab ek khabar bolo. I have a piece of news. The news is surprising. News ke saath singular is rakho. | EXACT CAPTIONS: Bolke dekho: The news is good. Ab ek khabar bolo. I have a piece of news. The news is surprising. News ke saath singular is rakho. | CARDS: ["The news is good."] | SHOT: Locked eye-level Sia;small encouraging nod;hold still for two-second learner repetition. | EDIT: Sia gives the transfer example, then holds silently for 4 seconds while the learner says their own version. No filler or greeting. | SILENT PRACTICE: 4 seconds.
28.3–33.1 seconds | VO: Aaj ka word: Update. nayi jaankari. Thank you for the update. | EXACT CAPTIONS: Aaj ka word: Update. nayi jaankari. Thank you for the update. | CARDS: ["Update — nayi jaankari", "Thank you for the update."] | SHOT: Eye-level Sia with a compact word/meaning/example card beside her;no extra person or voice. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
33.1–37.3 seconds | VO: News ke saath sentence bolo. | EXACT CAPTIONS: News ke saath sentence bolo. | CARDS: [] | SHOT: Sia stays on screen with exact supplied SpeakX logo and one readable silent end card. | EDIT: Hold a silent end card after the practice action;no generic spoken sign-off. Specific silent next-episode tease:Kal: meeting mein politely disagree karo. | SILENT PRACTICE: 0 seconds.
END: Deliver the complete answer today. Silent end-card text: Kal: meeting mein politely disagree karo.. No cliffhanger or generic spoken sign-off. Measure duration;check Sia identity,voice,pronunciation,captions and safe zones. Deliver video,cover,caption track,transcript and QA;do not publish. Editable provider-independent prompt;no render generated.

```

### Native platform package

```json

{
  "youtube": {
    "title": "The News Is Good: Why Is, Not Are?",
    "description": "The news is good.\nSia shows the model first,then a brief Hinglish explanation.\nThe news ___ surprising: is ya are?\nWord:Update — nayi jaankari; the latest information. Thank you for the update.\n#Shorts #SpeakX #EnglishPractice",
    "thumbnailCopy": "NEWS: IS OR ARE?",
    "tags": [
      "news is or are grammar",
      "Ek ya Anek Wednesday",
      "Sia SpeakX",
      "spoken English Hinglish"
    ],
    "pinnedCommentDraft": "Try:The news ___ surprising: is ya are? Model:The news is surprising. Your own version can be different.",
    "scheduleIST": "18:30"
  },
  "instagram": {
    "caption": "News: is ya are?\nThe news is good.\nThe news ___ surprising: is ya are?\n#SpeakX #EnglishSeekho #SiaSikhaatiHai",
    "coverCopy": "NEWS: IS OR ARE?",
    "altText": "Sia in virtual empty office lounge, teaching the news is: singular agreement; captions show: The news is good.",
    "scheduleIST": "19:30"
  },
  "facebook": {
    "caption": "News: is ya are?\nThe news is good.\nThe news ___ surprising: is ya are? SpeakX · Muh khol. English bol!",
    "title": "The News Is Good: Why Is, Not Are?",
    "scheduleIST": "20:00"
  },
  "x": {
    "morningText": "English tip: The news is good. Today’s word: Update — the latest information. Example: Thank you for the update. #SpeakX",
    "eveningText": "Sia practice: The news ___ surprising: is ya are? Model: The news is good. #SpeakX",
    "morningIST": "08:30",
    "eveningIST": "19:00"
  },
  "story": {
    "timeIST": "13:00",
    "frames": [
      "The news ___ surprising: is ya are?",
      "The news is surprising.",
      "Try your own version;send a learning question if helpful."
    ]
  }
}

```

### Experiment

A task-led opening may help adult learner sharing an update recognise relevance faster than hearing the model first;the model-first alternative may improve clarity.

The s in news invites a plausible mistake;keep singular agreement visible until the end.



## 2026-10-29 · Disagree politely in a meeting

Baat-Cheet Thursday · Professional with a different opinion · Trust · Virtual meeting room · 36.7s plan

### Hooks

- A (selected): Disagree? Calmly bolo.

- B: Could we consider a smaller trial?

- C: Different idea? Respect rakho.

### Exact Sia script

Disagree? Calmly bolo. Could we consider a smaller trial? I see your point, but I would suggest testing one part first. Pehle acknowledge karo, phir alternative do. Bolke dekho: Could we consider a smaller trial? Ab alternative do. Could we consider a smaller trial? Sirf mana karne ki jagah ek practical next step suggest karo. Aaj ka word: Perspective. nazariya. That is an interesting perspective. Ab apna alternative do.

### Production prompt

```text

Produce SpeakX episodeSIA-2026-10-29: Disagree politely in a meeting. Vertical1080×1920,target 36.7 seconds,maximum45seconds. Only Sia appears and speaks. Match the supplied character board exactly:Indian woman,mid-20s appearance,warm medium-brown skin,long centre-parted dark wavy hair with caramel ombré ends,dark brown eyes,defined brows,natural makeup,no jewellery,light heather-grey short-sleeve fitted mock-neck top. Use the approved Sia_v1 voice only;source/rights approval is still required. Warm,patient Hinglish;clear neutral Indian English;no invented or replacement voice.
PACE:Estimate140words/minute;natural140–165wpm Hinglish if the approved voice sounds clear. Never rush English pronunciation to fit. No recurring greeting,no long setup,no added filler.
SETTING:Virtual meeting room. 0–2seconds Sia hook;2–3seconds one-second approved map cutaway under Sia’s answer audio;keep the English model visible and return to Sia. No other visible people,reflections,crowds or voices. No implied real-world visit without verified assets.
VALUE:Start the useful model at2.0seconds: Could we consider a smaller trial?
GRAPHICS:Exact supplied SpeakX logo on end card only. Readable Romanized Hinglish subtitles. Every erroneous phrase,including a hook,has red ❌ WRONG from first appearance;correct models have✅. Silent cards are not spoken. Keep bottom20% and right12% clear. Map imagery must never cover teaching text.
AUDIO:Exact voiceover below,with stated silent practice holds. Soft original/licensed music under voice;at most one soft correction chime,no masked pronunciation.
EXACT SPOKEN SCRIPT: Disagree? Calmly bolo. Could we consider a smaller trial? I see your point, but I would suggest testing one part first. Pehle acknowledge karo, phir alternative do. Bolke dekho: Could we consider a smaller trial? Ab alternative do. Could we consider a smaller trial? Sirf mana karne ki jagah ek practical next step suggest karo. Aaj ka word: Perspective. nazariya. That is an interesting perspective. Ab apna alternative do.
SCENES:
0–2 seconds | VO: Disagree? Calmly bolo. | EXACT CAPTIONS: Disagree? Calmly bolo. | CARDS: ["Disagree? Calmly bolo."] | SHOT: Eye-level chest-up Sia in Virtual meeting room;immediate eye contact,no greeting or location tour. No map during the hook. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
2–4.6 seconds | VO: Could we consider a smaller trial? | EXACT CAPTIONS: Could we consider a smaller trial? | CARDS: ["✅ Could we consider a smaller trial?"] | SHOT: At2–3seconds show an approved one-second map-pin cutaway under continuing Sia audio,then eye-level Sia at Virtual meeting room. Keep the English model in a separate safe text region throughout;the map must not cover it. | EDIT: No lead-in. Sia speaks the useful line immediately. Hold target text through any cutaway. | SILENT PRACTICE: 0 seconds.
4.6–12.4 seconds | VO: I see your point, but I would suggest testing one part first. Pehle acknowledge karo, phir alternative do. | EXACT CAPTIONS: I see your point, but I would suggest testing one part first. Pehle acknowledge karo, phir alternative do. | CARDS: ["TEXT ONLY: Launch everything tomorrow?"] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
12.4–28.4 seconds | VO: Bolke dekho: Could we consider a smaller trial? Ab alternative do. Could we consider a smaller trial? Sirf mana karne ki jagah ek practical next step suggest karo. | EXACT CAPTIONS: Bolke dekho: Could we consider a smaller trial? Ab alternative do. Could we consider a smaller trial? Sirf mana karne ki jagah ek practical next step suggest karo. | CARDS: ["I see your point, but I would suggest a different approach."] | SHOT: Locked eye-level Sia;small encouraging nod;hold still for two-second learner repetition. | EDIT: Sia gives the transfer example, then holds silently for 4 seconds while the learner says their own version. No filler or greeting. | SILENT PRACTICE: 4 seconds.
28.4–32.7 seconds | VO: Aaj ka word: Perspective. nazariya. That is an interesting perspective. | EXACT CAPTIONS: Aaj ka word: Perspective. nazariya. That is an interesting perspective. | CARDS: ["Perspective — nazariya", "That is an interesting perspective."] | SHOT: Eye-level Sia with a compact word/meaning/example card beside her;no extra person or voice. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
32.7–36.7 seconds | VO: Ab apna alternative do. | EXACT CAPTIONS: Ab apna alternative do. | CARDS: [] | SHOT: Sia stays on screen with exact supplied SpeakX logo and one readable silent end card. | EDIT: Hold a silent end card after the practice action;no generic spoken sign-off. Specific silent next-episode tease:Kal: going to se plan banao. | SILENT PRACTICE: 0 seconds.
END: Deliver the complete answer today. Silent end-card text: Kal: going to se plan banao.. No cliffhanger or generic spoken sign-off. Measure duration;check Sia identity,voice,pronunciation,captions and safe zones. Deliver video,cover,caption track,transcript and QA;do not publish. Editable provider-independent prompt;no render generated.

```

### Native platform package

```json

{
  "youtube": {
    "title": "How to Disagree Politely in a Meeting",
    "description": "Could we consider a smaller trial?\nSia shows the model first,then a brief Hinglish explanation.\nEk calm opening ke saath practical alternative do.\nWord:Perspective — nazariya; a way of thinking about something. That is an interesting perspective.\n#Shorts #SpeakX #EnglishPractice",
    "thumbnailCopy": "DISAGREE WITH CARE",
    "tags": [
      "politely disagree meeting English",
      "Baat-Cheet Thursday",
      "Sia SpeakX",
      "spoken English Hinglish"
    ],
    "pinnedCommentDraft": "Try:Ek calm opening ke saath practical alternative do. Model:I see your point, but I would suggest testing one part first. Your own version can be different.",
    "scheduleIST": "18:30"
  },
  "instagram": {
    "caption": "Disagree? Calmly bolo.\nI see your point, but I would suggest a different approach.\nEk calm opening ke saath practical alternative do.\n#SpeakX #EnglishSeekho #SiaSikhaatiHai",
    "coverCopy": "DISAGREE WITH CARE",
    "altText": "Sia in virtual meeting room, teaching disagree politely in a meeting; captions show: I see your point, but I would suggest a different approach.",
    "scheduleIST": "19:30"
  },
  "facebook": {
    "caption": "Disagree? Calmly bolo.\nCould we consider a smaller trial?\nEk calm opening ke saath practical alternative do. SpeakX · Muh khol. English bol!",
    "title": "How to Disagree Politely in a Meeting",
    "scheduleIST": "20:00"
  },
  "x": {
    "morningText": "English tip: I see your point, but I would suggest a different approach. Today’s word: Perspective — a way of thinking about something. Example: That is an interesting perspective. #SpeakX",
    "eveningText": "Sia practice: Ek calm opening ke saath practical alternative do. Model: I see your point, but I would suggest a different approach. #SpeakX",
    "morningIST": "08:30",
    "eveningIST": "19:00"
  },
  "story": {
    "timeIST": "13:00",
    "frames": [
      "Ek calm opening ke saath practical alternative do.",
      "I see your point, but I would suggest testing one part first.",
      "Try your own version;send a learning question if helpful."
    ]
  }
}

```

### Experiment

A task-led opening may help professional with a different opinion recognise relevance faster than hearing the model first;the model-first alternative may improve clarity.

Acknowledging a view should not sound like automatic agreement;model a calm alternative.



## 2026-10-30 · Make a plan with going to

Sentence Banao Friday · Learner building a daily practice plan · Conversion · Pale-blue studio · 40.7s plan

### Hooks

- A (selected): Kal kya karoge?

- B: I am going to practise tomorrow.

- C: I going to practise?

### Exact Sia script

Kal kya karoge? I am going to practise tomorrow. Plan: am, is, are plus going to plus base verb. I am going to practise tomorrow. She is going to study tonight. Am mat bhoolo. Bolke dekho: I am going to practise tomorrow. Ab apna realistic plan bolo. I am going to practise for five minutes tomorrow. Kitna practice karoge, apne hisaab se badlo. Aaj ka word: Prepare. taiyaari karna. I prepare before an interview. Apna chhota plan bolo.

### Production prompt

```text

Produce SpeakX episodeSIA-2026-10-30: Make a plan with going to. Vertical1080×1920,target 40.7 seconds,maximum45seconds. Only Sia appears and speaks. Match the supplied character board exactly:Indian woman,mid-20s appearance,warm medium-brown skin,long centre-parted dark wavy hair with caramel ombré ends,dark brown eyes,defined brows,natural makeup,no jewellery,light heather-grey short-sleeve fitted mock-neck top. Use the approved Sia_v1 voice only;source/rights approval is still required. Warm,patient Hinglish;clear neutral Indian English;no invented or replacement voice.
PACE:Estimate140words/minute;natural140–165wpm Hinglish if the approved voice sounds clear. Never rush English pronunciation to fit. No recurring greeting,no long setup,no added filler.
SETTING:Pale-blue studio. No map;Sia hook then direct English model. No other visible people,reflections,crowds or voices. No implied real-world visit without verified assets.
VALUE:Start the useful model at2.0seconds: I am going to practise tomorrow.
GRAPHICS:Exact supplied SpeakX logo on end card only. Readable Romanized Hinglish subtitles. Every erroneous phrase,including a hook,has red ❌ WRONG from first appearance;correct models have✅. Silent cards are not spoken. Keep bottom20% and right12% clear. Map imagery must never cover teaching text.
AUDIO:Exact voiceover below,with stated silent practice holds. Soft original/licensed music under voice;at most one soft correction chime,no masked pronunciation.
EXACT SPOKEN SCRIPT: Kal kya karoge? I am going to practise tomorrow. Plan: am, is, are plus going to plus base verb. I am going to practise tomorrow. She is going to study tonight. Am mat bhoolo. Bolke dekho: I am going to practise tomorrow. Ab apna realistic plan bolo. I am going to practise for five minutes tomorrow. Kitna practice karoge, apne hisaab se badlo. Aaj ka word: Prepare. taiyaari karna. I prepare before an interview. Apna chhota plan bolo.
SCENES:
0–2 seconds | VO: Kal kya karoge? | EXACT CAPTIONS: Kal kya karoge? | CARDS: ["Kal kya karoge?"] | SHOT: Eye-level chest-up Sia in Pale-blue studio;immediate eye contact,no greeting or location tour. No map during the hook. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
2–4.6 seconds | VO: I am going to practise tomorrow. | EXACT CAPTIONS: I am going to practise tomorrow. | CARDS: ["✅ I am going to practise tomorrow."] | SHOT: Eye-level Sia;correct English model appears beside her immediately,no map. | EDIT: No lead-in. Sia speaks the useful line immediately. Hold target text through any cutaway. | SILENT PRACTICE: 0 seconds.
4.6–11.5 seconds | VO: Plan: am, is, are plus going to plus base verb. I am going to practise tomorrow. | EXACT CAPTIONS: Plan: am, is, are plus going to plus base verb. I am going to practise tomorrow. | CARDS: [] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
11.5–15.4 seconds | VO: She is going to study tonight. Am mat bhoolo. | EXACT CAPTIONS: She is going to study tonight. Am mat bhoolo. | CARDS: ["❌ WRONG: I going to practise."] | SHOT: Eye-level Sia with one readable text card at a time;one subtle digital push-in on the correct model. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
15.4–31.9 seconds | VO: Bolke dekho: I am going to practise tomorrow. Ab apna realistic plan bolo. I am going to practise for five minutes tomorrow. Kitna practice karoge, apne hisaab se badlo. | EXACT CAPTIONS: Bolke dekho: I am going to practise tomorrow. Ab apna realistic plan bolo. I am going to practise for five minutes tomorrow. Kitna practice karoge, apne hisaab se badlo. | CARDS: ["I am going to practise tomorrow."] | SHOT: Locked eye-level Sia;small encouraging nod;hold still for two-second learner repetition. | EDIT: Sia gives the transfer example, then holds silently for 4 seconds while the learner says their own version. No filler or greeting. | SILENT PRACTICE: 4 seconds.
31.9–36.7 seconds | VO: Aaj ka word: Prepare. taiyaari karna. I prepare before an interview. | EXACT CAPTIONS: Aaj ka word: Prepare. taiyaari karna. I prepare before an interview. | CARDS: ["Prepare — taiyaari karna", "I prepare before an interview."] | SHOT: Eye-level Sia with a compact word/meaning/example card beside her;no extra person or voice. | EDIT: Clean cut at sentence boundary;no transition over a target word. One gentle answer chime only after a correction;music remains below speech. | SILENT PRACTICE: 0 seconds.
36.7–40.7 seconds | VO: Apna chhota plan bolo. | EXACT CAPTIONS: Apna chhota plan bolo. | CARDS: [] | SHOT: Sia stays on screen with exact supplied SpeakX logo and one readable silent end card. | EDIT: Hold a silent end card after the practice action;no generic spoken sign-off. October practice complete. Proposed next-series card only;no approved November schedule is implied. | SILENT PRACTICE: 0 seconds.
END: Deliver the complete answer today. Silent end-card text: 30-day series complete. Proposed next series:more real-life speaking practice;pending approval.. No cliffhanger or generic spoken sign-off. Measure duration;check Sia identity,voice,pronunciation,captions and safe zones. Deliver video,cover,caption track,transcript and QA;do not publish. Editable provider-independent prompt;no render generated.

```

### Native platform package

```json

{
  "youtube": {
    "title": "Going To: Say Your Plan in English",
    "description": "I am going to practise tomorrow.\nSia shows the model first,then a brief Hinglish explanation.\nI am going to ___ tomorrow complete karo.\nWord:Prepare — taiyaari karna; get ready for something. I prepare before an interview.\n#Shorts #SpeakX #EnglishPractice\nMore speaking practice: SpeakX website in our channel profile.",
    "thumbnailCopy": "TOMORROW’S SMALL PLAN",
    "tags": [
      "going to future plan Hindi",
      "Sentence Banao Friday",
      "Sia SpeakX",
      "spoken English Hinglish"
    ],
    "pinnedCommentDraft": "Try:I am going to ___ tomorrow complete karo. Model:I am going to practise tomorrow. Your own version can be different.",
    "scheduleIST": "18:30"
  },
  "instagram": {
    "caption": "Kal kya karoge?\nI am going to practise tomorrow.\nI am going to ___ tomorrow complete karo.\n#SpeakX #EnglishSeekho #SiaSikhaatiHai\nAgli speaking practice SpeakX par karo — profile link se shuru karo.",
    "coverCopy": "TOMORROW’S SMALL PLAN",
    "altText": "Sia in pale-blue studio, teaching make a plan with going to; captions show: I am going to practise tomorrow.",
    "scheduleIST": "19:30"
  },
  "facebook": {
    "caption": "Kal kya karoge?\nI am going to practise tomorrow.\nI am going to ___ tomorrow complete karo. SpeakX · Muh khol. English bol!\nPractice with Sia: https://speakx.ai/",
    "title": "Going To: Say Your Plan in English",
    "scheduleIST": "20:00"
  },
  "x": {
    "morningText": "English tip: I am going to practise tomorrow. Today’s word: Prepare — get ready for something. Example: I prepare before an interview. #SpeakX",
    "eveningText": "Sia practice: I am going to ___ tomorrow complete karo. Model: I am going to practise tomorrow. #SpeakX",
    "morningIST": "08:30",
    "eveningIST": "19:00"
  },
  "story": {
    "timeIST": "13:00",
    "frames": [
      "I am going to ___ tomorrow complete karo.",
      "I am going to practise tomorrow.",
      "Try your own version;send a learning question if helpful."
    ]
  }
}

```

### Experiment

A task-led opening may help learner building a daily practice plan recognise relevance faster than hearing the model first;the model-first alternative may improve clarity.

Going to has other uses;this episode only teaches a stated future plan.