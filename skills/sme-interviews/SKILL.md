---
name: sme-interviews
description: >-
  Getting accurate information out of engineers and subject-matter experts and turning it into a verified draft — preparing from the artifacts first, the question sets that surface what an expert has stopped noticing, interview mechanics, getting a technical-accuracy review that actually gets answered, async alternatives when nobody has time, and never filling a gap by guessing. Use on "interview an engineer", "ask the SME", "questions about this feature", "technical review of my draft".
---

# Working with subject-matter experts

Most documentation errors start as a gap the writer filled in rather than a question the writer asked. The skill here is extracting what an expert knows — including the parts they've stopped noticing they know — without spending more of their time than the document is worth.

## Prepare from the artifacts first

Arriving with no preparation converts an expert into a search engine, and it's the fastest way to lose access to one.

- **Read everything that already exists** before asking for time: the change or pull request, the design document, the specification, the tests, the issue that started it, the existing docs, and the product itself.
- **Use the product.** Where you can run it, sign up for it, or call it, do that first. Ten minutes of hands-on removes half the questions and turns the rest into good ones.
- **Arrive with a draft or an outline, not a blank page.** An expert correcting a wrong draft produces far more, far faster, than an expert asked to explain from scratch — being wrong on the page is easier to respond to than a question.
- **Write your questions down in advance**, and mark which ones block the draft and which are nice to have. If time runs short, you'll know what to protect.
- **Ask for the artifact rather than the explanation** where one exists — a schema, a test, a log, a real response body, a recording of the demo. A document reconstructed from memory is a second source of error.

## The questions that work

Generic questions get generic answers. These surface the material documentation actually needs:

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

## Running the interview

- **Timebox it and say the box out loud.** Thirty focused minutes gets answered; an open-ended "can I pick your brain" gets postponed.
- **One topic per session.** A session covering three features produces shallow material on all three.
- **Record it, with permission**, so you can listen rather than transcribe. Say what the recording is for and when you'll delete it.
- **Ask them to show you, not tell you.** Screen-share while they do the task. What they do is more accurate than what they say they do, and the steps they perform without mentioning are exactly the steps missing from every draft.
- **Do the task yourself while they watch.** This is the single most effective technique against expert blindness — the moment you get stuck is the moment they see the gap.
- **Don't interrupt a thread to ask a small question.** Note it and come back; the tangent you cut off was often the useful part.
- **Ask open questions, not leading ones.** "What happens if the token expires mid-request?" rather than "It retries automatically, right?" — a leading question gets agreement, not information.
- **Read your understanding back.** "So if I pass no value, it defaults to the account setting, and if there isn't one it fails with a 400 — is that right?" Restating is where most misunderstandings are caught, and it costs one sentence.
- **Chase the vague answer.** "It's usually fast", "it should handle that", "it depends" — ask what it depends on, and what "usually" excludes.
- **Ask for the number.** Experts round in conversation and are precise in writing; ask where the real value is defined.

## When they've forgotten what's hard

The curse of knowledge is the default condition of a useful expert, not a failing. Work around it rather than complaining about it:

- **Follow the instructions literally** and report where you stopped. A concrete "I got to step 3 and there was no such button" produces a precise answer; "this is confusing" doesn't.
- **Ask what they had to look up** the first time they worked on it.
- **Ask what they'd delete** from your draft, and what they'd be embarrassed for a colleague to read. Both get honest answers where "any feedback?" doesn't.
- **Show them the failure**, not a description of it.

## Turning it into a draft

- **Separate fact from opinion** in your notes. "It returns 409 on a duplicate" is a fact to verify; "nobody really uses that flag" is context that shapes emphasis and never appears as a claim.
- **Mark every gap visibly** in the draft where you don't have the answer, rather than writing the plausible version. An invented default that reads naturally is the worst defect this work produces, because nothing about it looks wrong.
- **Verify what's verifiable yourself** — run the command, call the endpoint, read the code — rather than spending the expert's next session on things you can check.
- **Keep a record of what you asked and what you were told**, with dates. It stops you re-asking, and it tells you what to re-check when the feature changes.

## Getting a review that actually happens

- **Ask for technical accuracy only**, explicitly, and say you're not asking about wording. Reviewers who think they're being asked about style will give you style notes and skip the incorrect default.
- **Ask specific questions inline**, not "any thoughts?" — a comment pointing at one sentence and asking "is this still true in the current version?" gets answered.
- **Keep the ask small.** A 4-page review gets postponed; three flagged paragraphs get answered today.
- **Give a deadline and a consequence** — when it publishes, or what you'll do if you don't hear back.
- **Separate reviewers by job.** Technical accuracy from the expert, clarity from someone in the audience, style from whoever owns the style guide. One reviewer asked for all three does none well.
- **Close the loop.** Tell them what you changed, so the next review is worth their time.

## When you can't get the time

- **Send a batched written question list** with the draft attached, rather than a series of interruptions — one message, numbered questions, each answerable in a sentence.
- **Watch a recording** of an existing demo, walkthrough or incident review.
- **Read the tests.** A test suite is a specification of behaviour that someone maintained, including the edge cases.
- **Ask in the channel where the work happens**, publicly, so anyone who knows can answer and the answer is findable later.
- **Publish with the gap marked** rather than with the gap filled, if it has to ship. A visible "unverified" costs a reader far less than a confident error.

## Boundaries

- **What to do with the information** — which document type it becomes, how it's structured → `writing-standards` and the skill for that document type.
- **Deciding which topics need an expert's time at all**, and in what order → `docs-planning`.
- **Editing the resulting draft** → `editing-standards`.
- **Verifying against code and specs directly**, where no interview is needed → the verification rules in `developer-docs` and `api-reference`.
- **The expert's answers are the source of truth for behaviour, not for wording.** How it's phrased for the reader is the writer's call, and a reviewer's rewrite into internal vocabulary is a finding to push back on, not an instruction.
