---
name: sme-interviews
description: >-
  Getting accurate information out of engineers and subject-matter experts and turning it into a verified docs draft — preparing from the change, the tests and the product first, the question sets that surface what an expert has stopped noticing, screen-sharing and precise read-backs, what stays internal, getting a technical review that gets answered, and never filling a gap by guessing. Use on "interview an engineer", "talk to the engineer", "questions about this feature", "technical review of my draft", "get this reviewed by engineering".
---

# Working with subject-matter experts

Most documentation errors start as a gap the writer filled in rather than a question the writer asked. The skill here is getting what an engineer or a product expert knows — including the parts they've stopped noticing they know — onto the page accurately, without spending more of their time than the page is worth. The test of the result is whether a reader can act on it without asking anyone.

## How this works

The skill works with you before and after a session with the expert; you hold the session yourself. It never contacts the expert, and the expert never sees it.

| Stage  | You                                                                                                      | The skill                                                                                                                                                                       | You end up with                                                                         |
| ------ | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Before | answer its questions (Ask first), and point it at the change, the issue, the tests and the existing docs | reads them, runs the product where it can, drafts an outline or a first draft, the question list marked blocking or nice-to-have, and the message asking for time               | the request to send, the question list, the draft, and the session's notes file started |
| During | hold the session — a call, a screen-share while they do the task, or a written question list             | isn't there; for a written list, it writes the message you send                                                                                                                 | the recording, your notes or their written answers                                      |
| After  | give it the transcript, the answers or your notes                                                        | separates fact from opinion, checks each fact against the code or the tests where it can, marks the gaps, updates the draft, fills the notes file and drafts the review request | verified notes, the draft with its gaps marked, and the review request                  |

The request, the written question list and the review request follow the [message templates](references/messages.md).

## Voice and audience come from the writing's own guide

Before interviewing, find the project's style guide and conventions and read them:

- **In a codebase:** the style guide and conventions the project's `AGENTS.md` names, or its contributing docs.
- **In a chat app:** the style guide in the project's files (a Claude Project's knowledge, or the equivalent elsewhere), or attached to the conversation.
- **Otherwise:** ask whether one exists before concluding there isn't one.

Voice, person, terminology and who the reader is come from that guide; where it's silent, `tw:docs-standards` applies.

## Ask first

Read the answers from the request, the draft and the project first; ask only what's missing. Ask with the app's question tool where it has one, so the choices can be picked; otherwise as a numbered list answered by number. Offer choices where the answers are known and a short typed answer otherwise. Record the answers in the interview notes' header.

1. **Which page or feature is this for?** The draft or outline, and what its reader must be able to do.
2. **Who is the expert?** Their name or role, and what they built or own.
3. **What already exists to read first?** The pull request or diff · the issue · the design document · the tests · the existing docs · support conversations — pick any.
4. **What kind of session?** A live interview · a screen-share while they do the task · a written question list · a technical review of a draft.
5. **How much time, and when does the page publish?** Minutes booked; the publish date.
6. **May the session be recorded?** Yes · no · ask at the start.
7. **Where do the notes go?** A path in the project · in the conversation only.

## Before the session

The skill prepares everything you take into the session: what the change and the tests already say, a draft to react to, and the questions.

### Prepare from what already exists

Arriving with no preparation converts an expert into a search engine, and it's the fastest way to lose access to one.

- **Read everything that already exists** before asking for time:
  - **the change itself** — the pull request or diff, the issue that started it, and its discussion;
  - **the design document and the specification**, including what was decided against;
  - **the tests** — a test suite is a specification of behaviour that someone maintained, including the edge cases nobody thinks to mention;
  - **the existing docs**, and the support conversations about this area.
- **Use the product.** Run it, sign up for it, call it. Ten minutes of hands-on removes half the questions and turns the rest into good ones.
- **Arrive with a draft or an outline, not a blank page.** An expert correcting a wrong draft produces far more, far faster, than an expert asked to explain from scratch.
- **Write your questions down in advance**, and mark which block the draft and which are nice to have. If time runs short, you'll know what to protect.
- **Ask for the artifact rather than the explanation** — a schema, a test, a log, a recording of the demo. A page reconstructed from memory is a second source of error.

### What stays internal

Documentation doesn't quote its engineers, so attribution rarely applies. The ground rule that matters is **what's internal**: unreleased plans, internal hostnames, workarounds only staff can use, anything a customer must not see. Agree before you start what may reach the public page, and mark the rest in your notes as internal.

## During the session

You hold it; the skill isn't there. What follows is how to run it well, and for a written question list the skill writes the message.

### Running it

- **Timebox it and say the box out loud.** Thirty focused minutes gets answered; an open-ended "can I pick your brain" gets postponed.
- **One topic per session.** A session covering three features produces shallow material on all three.
- **Record it, only with permission** — said on the recording, with what it's for and when it will be deleted — so you can listen rather than transcribe. In some places recording a call needs everyone's consent by law.
- **Screen-share while they do the task.** What they do is more accurate than what they say they do, and the steps they perform without mentioning are exactly the steps missing from every draft.
- **Do the task yourself while they watch.** This is the single most effective technique against expert blindness — the moment you get stuck is the moment they see the gap.
- **Don't interrupt a thread to ask a small question.** Note it and come back; the tangent you cut off was often the useful part.
- **Ask open questions, not leading ones.** "What happens if the token expires mid-request?" rather than "It retries automatically, right?" — a leading question gets agreement, not information.
- **Read your understanding back as a precise statement**, with the values in it: "So if I pass no value, it defaults to the account setting, and if there isn't one it fails with a 400 — is that right?" A vague read-back gets a vague yes.
- **Chase the vague answer** — "it's usually fast", "it depends" — and **ask where the real value is defined**: the constant, the config, the schema. Read it there rather than accepting the rounded number from conversation.

### The questions that work

**Purpose and scope**

- What problem does this solve, and for whom? What did people do before it?
- Who is it not for? What does it deliberately not do?
- What's the shortest path from nothing to it working?

**The things readers get wrong**

- What do people get wrong about this? What have you had to explain more than once?
- What would you tell a new teammate on their first day with it that isn't written down anywhere?
- If someone skims the docs and starts using it, where do they hurt themselves?
- What's the mistake that's expensive to recover from?

**Behaviour and limits**

- What happens when it fails? What does the reader see, and what should they do?
- What are the real limits — sizes, rates, timeouts, quantities — and what happens at them?
- What's slower, or different, than someone would assume?
- Is anything here irreversible?
- What does this depend on, and what breaks if that's unavailable?

**Reality checks**

- What's the difference between how this is supposed to work and how it works today?
- What's changing soon enough that I shouldn't document it as permanent?
- Who else needs to check this before it's published?

### When they've forgotten what's hard

The curse of knowledge is the default condition of a useful expert, not a failing. Work around it:

- **Follow the instructions literally** and report where you stopped. "I got to step 3 and there was no such button" produces a precise answer; "this is confusing" doesn't.
- **Ask what they had to look up** the first time they worked on it.
- **Ask what they'd delete** from your draft, and what they'd be embarrassed for a colleague to read. Both get honest answers where "any feedback?" doesn't.
- **Show them the failure**, not a description of it.

## After the session

Give the skill the transcript, the written answers or your notes. It checks what it can, updates the draft with the gaps marked, fills the notes file and drafts the review request.

### Turning it into a draft

- **Separate fact from opinion.** A fact is a claim to verify — "it returns 409 on a duplicate" — by running it, reading the code or reading the test. **An engineer's opinion never appears in the docs as a claim**: "nobody really uses that flag" shapes what you emphasise and cut, but the page states only behaviour.
- **Mark every gap visibly** where you don't have the answer, rather than writing the plausible version. An invented default that reads naturally is the worst defect this work produces, because nothing about it looks wrong.
- **Verify what's verifiable yourself** — run the command, read the code — rather than spending the expert's next session on things you can check.
- **Keep a record of what you asked and what you were told**, with dates, in the interview notes template ([references/interview-notes.md](references/interview-notes.md)), one file per session named `<yyyy-mm-dd>-<name>.md`. It stops you re-asking, and tells you what to re-check when the feature changes.

### Getting a review that actually happens

- **Ask for technical accuracy only**, explicitly, and say you're not asking about wording. Reviewers who think they're being asked about style give you style notes and skip the incorrect default.
- **Ask specific questions inline**, not "any thoughts?" — a comment pointing at one sentence and asking "is this still true in the current version?" gets answered.
- **Keep the ask small.** A 4-page review gets postponed; three flagged paragraphs get answered today.
- **Give a deadline and a consequence** — when it publishes, or what happens if you don't hear back ("if I don't hear by Thursday, it ships with that point marked unverified").
- **Separate reviewers by job.** Technical accuracy from the expert, clarity from someone in the audience, style from whoever owns the style guide. One reviewer asked for all three does none well.
- **Close the loop.** Tell them what you changed, so the next review is worth their time.

## When you can't get the time

- **Read the tests** before anything else — they answer more behaviour questions than a meeting does.
- **Send a batched written question list** with the draft attached — one message, numbered questions, each answerable in a sentence.
- **Watch a recording** of an existing demo, walkthrough or incident review, and **ask in the channel where the work happens**, publicly, so anyone who knows can answer and the answer is findable later.
- **Publish with the gap marked** rather than filled, if it has to ship. A visible "unverified" costs a reader far less than a confident error.

> **Example — a question list sent ahead.** Draft attached: "Rotating an API key". Three questions block publishing; the rest can wait.
>
> **Blocking:** (1) When a key is rotated, does the old key stop working immediately, or after a grace period — how long, and where is it set? (2) What does a request with a revoked key return — 401 or 403 — and is the error code in the body stable? (3) Can a rotation be undone?
>
> **Nice to have:** (4) Is there a limit on how many active keys an account can hold?
>
> It publishes Thursday; if I haven't heard by Wednesday, the grace period goes in marked "unverified".

## Boundaries

- **What the information becomes** → `write:writing-standards`, `tw:docs-standards` and the skill for the page type.
- **Deciding which topics need an expert at all** → `tw:docs-planning`.
- **Finding facts in a codebase yourself**, where no interview is needed → `tw:codebase-research`. Check there first: an expert's time is for what the code can't tell you.
- **Editing the resulting draft** → `tw:editing-standards`; reviewing it → `/tw:doc-review`.
- **Interviewing a source for an article, feature or profile** → `cw:sme-interviews`.
- **The expert is the authority on behaviour, not on wording.** How it's phrased for the reader is the writer's call, and a reviewer's rewrite into internal vocabulary is a finding to push back on, not an instruction.
