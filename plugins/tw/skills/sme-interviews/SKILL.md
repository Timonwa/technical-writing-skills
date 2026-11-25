---
name: sme-interviews
description: >-
  Helping a writer get accurate information from an engineer or subject-matter expert for documentation. Before: read the change, the tests and the docs, run the product, draft the page, the questions and the request for time. After: turn the transcript or notes into facts checked against the code, mark the gaps, update the draft and write a review request that gets answered. Use on "interview an engineer", "talk to the engineer", "questions about this feature", "technical review of my draft", "get this reviewed by engineering".
---

# Working with subject-matter experts

Help the writer before and after a session with an engineer or product expert. The writer holds the session; never contact the expert yourself. Before it, learn everything the code, the tests and the existing docs already say, and draft the page so the expert has something to correct. After it, turn what the writer brings back into facts verified against the code, with every gap marked.

Most documentation errors start as a gap the writer filled in rather than a question the writer asked. The test of the result is whether a reader can act on the page without asking anyone.

| Stage  | The writer                                                                                   | You                                                                                                                                      | Output                                                                 |
| ------ | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Before | answers the Ask first questions and points you at the change, the issue and the tests        | read them and the existing docs, run the product where you can, draft the page, write the question list and the request for time         | the request, the question list, the draft, and the notes file started  |
| During | holds the session — a call, a screen-share while the expert does the task, or a written list | nothing live; for a written list, write the message the writer sends                                                                     | the recording, the writer's notes or the expert's written answers      |
| After  | gives you the transcript, the answers or their notes                                         | separate fact from opinion, check each fact against the code or the tests, mark the gaps, update the draft, and write the review request | verified notes, the draft with its gaps marked, and the review request |

Every message follows its template in [references/messages.md](references/messages.md); the notes follow [references/interview-notes.md](references/interview-notes.md).

## Find the project's guide

Read the project's style guide and conventions before drafting anything:

- **In a codebase:** the style guide and conventions the project's `AGENTS.md` names, or its contributing docs.
- **In a chat app:** the style guide in the project's files, or attached to the conversation.
- **Otherwise:** ask the writer whether one exists before concluding there isn't one.

Voice, person, terminology and who the reader is come from that guide; where it's silent, `docs-standards` applies.

## Ask first

Read the answers from the request, the draft and the project first; ask the writer only what's missing. Ask with the app's question tool where it has one, so the choices can be picked; otherwise as a numbered list answered by number. Offer choices where the answers are known and a short typed answer otherwise. Record the answers in the notes file's header.

1. **Which page or feature is this for?** The draft or outline, and what its reader must be able to do.
2. **Who is the expert?** Their name or role, and what they built or own.
3. **What already exists to read first?** The pull request or diff · the issue · the design document · the tests · the existing docs · support conversations — pick any.
4. **What kind of session?** A live interview · a screen-share while they do the task · a written question list · a technical review of a draft.
5. **How much time, and when does the page publish?** Minutes booked; the publish date.
6. **May the session be recorded?** Yes · no · ask at the start.
7. **Where do the notes go?** A path in the project · in the conversation only.

## Before the session

### Learn what already exists

An expert asked what the code could have answered is an expert spent; read first.

- **Read everything that already exists:**
  - **the change itself** — the pull request or diff, the issue that started it, and its discussion;
  - **the design document and the specification**, including what was decided against;
  - **the tests** — a test suite is a specification of behaviour someone maintained, including the edge cases nobody thinks to mention;
  - **the existing docs**, and the support conversations about this area.
- **Run the product** where you can — the command, the sign-up, the call. What you can confirm yourself comes off the question list.
- **Draft the page or an outline.** An expert correcting a wrong draft produces far more, far faster, than one asked to explain from scratch.
- **Ask for the artifact rather than the explanation** — a schema, a test, a log, a recording of the demo — and put the request in the question list.

### Agree what stays internal

Documentation doesn't quote its engineers, so attribution rarely applies. What matters is **what's internal**: unreleased plans, internal hostnames, workarounds only staff can use, anything a customer must not see. Put "what may reach the public page?" at the top of the question list, and mark anything internal in the notes as internal.

### Write the question list and the request

- **Mark each question blocking or nice-to-have**, blocking first, so a short session still gets what the page needs.
- **Write questions that surface what the expert has stopped noticing.** The sets that work — purpose and scope, what readers get wrong, behaviour and limits, reality checks — are in [references/questions.md](references/questions.md).
- **Open questions, not leading ones:** "What happens if the token expires mid-request?", not "It retries automatically, right?"
- **Ask where each value is defined** — the constant, the config, the schema — so the writer reads it there rather than taking a rounded number from conversation.
- **Write the request for time** from the [template](references/messages.md#asking-for-time): one topic, a timebox (thirty focused minutes gets answered; "can I pick your brain" gets postponed), the draft linked, and the one or two things the draft can't settle.

## During the session

The writer holds it. Give them a short running sheet with the question list:

- **The timebox, said aloud at the start**, and one topic per session.
- **Ask to record**, saying what it's for and when it will be deleted; in some places recording a call needs everyone's consent by law.
- **Have the expert do the task on a screen-share** — what they do is more accurate than what they say they do, and the steps they perform without mentioning are the steps missing from every draft.
- **Do the task while the expert watches** — the moment the writer gets stuck is the moment the expert sees the gap.
- **Read the understanding back as a precise statement**, with the values in it: "So with no value, it defaults to the account setting, and with none of those it fails with a 400 — is that right?" A vague read-back gets a vague yes.
- **Chase the vague answer** — when the expert says "it depends" or "usually", ask what it depends on and what "usually" leaves out.
- **Don't cut off a thread for a small question**; note it and come back.

**For a written question list**, write the message from the [template](references/messages.md#a-written-question-list): the draft attached, blocking questions numbered first, each answerable in a sentence, and the date it publishes with or without an answer.

## After the session

The writer gives you the transcript, the written answers or their notes. Then:

### Turn it into verified facts

- **Fill the [notes template](references/interview-notes.md)**: what was asked, what was answered, what's internal, with the date.
- **Separate fact from opinion.** A fact is a claim to verify — "it returns 409 on a duplicate" — by running it, reading the code or reading the test. An engineer's opinion never appears on the page as a claim: "nobody really uses that flag" shapes what the page emphasises, but the page states only behaviour.
- **Check every fact you can against the code or the tests** before it goes in the draft, and record where it was confirmed.
- **Mark every gap visibly** where there's no answer, rather than writing the plausible version. An invented default that reads naturally is the worst defect this work produces, because nothing about it looks wrong.
- **Update the draft**, with the gaps marked.

### When the expert has forgotten what's hard

If the answers are too smooth, the expert has stopped seeing the hard parts. Add to the next questions: where the writer got stuck following the steps literally ("step 3 has no such button"), what the expert had to look up the first time, what they'd delete from the draft, and the failure itself rather than a description of it.

### Write the review request

Write it from the [template](references/messages.md#asking-for-a-technical-review):

- **Technical accuracy only**, said plainly — a reviewer who thinks it's about style gives style notes and skips the wrong default.
- **Specific questions inline**, each pointing at one sentence: "is this still true in the current version?"
- **A small ask** — three flagged paragraphs get answered today; four pages get postponed.
- **A deadline and what happens without an answer** — "if I don't hear by Thursday, it ships with that point marked unverified".
- **One job per reviewer**: accuracy from the expert, clarity from someone in the audience, style from whoever owns the guide.
- **Close the loop** — once the review is in, write the writer a short note to the expert saying what changed, so the next review is worth their time.

## When the expert has no time

Suggest these instead, in this order: read the tests; send a written question list with the draft attached; watch an existing demo, walkthrough or incident review; ask in the channel where the work happens, publicly, so the answer is findable later. If the page has to ship, publish with the gap marked rather than filled — a visible "unverified" costs a reader far less than a confident error.

## Before handing the notes to the writer

- [ ] Every fact on the page is checked against the code or the tests, or marked unverified.
- [ ] No opinion appears as a claim.
- [ ] Anything internal is marked and kept off the page.
- [ ] The review request asks about accuracy only, with specific inline questions and a date.

## Boundaries

- **What the information becomes** → `docs-writing-standards`, `docs-standards` and the skill for the page type.
- **Deciding which topics need an expert at all** → `docs-planning`.
- **Finding facts in a codebase without an expert** → `codebase-research`. Check there first: an expert's time is for what the code can't tell you.
- **Editing the resulting draft** → `docs-editing-standards`; reviewing it → `/docs-review`.
- **Interviewing anyone for an article, a Q&A, a profile or a case study** → `interviews` in [content-writing-skills](https://github.com/Timonwa/content-writing-skills).
- **The expert is the authority on behaviour, not on wording.** A reviewer's rewrite into internal vocabulary is a finding to push back on, not an instruction.
