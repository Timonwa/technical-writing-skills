---
name: review
description: >-
  Manually invoked. Editorial review of one piece of content — a blog post, article, tutorial, essay, feature or newsletter issue — down the five levels of edit, against the publication's writing guide and profile: the right piece, facts, quotes, code, credit, fairness and disclosure, the line in the author's voice, consistency, and the preview. Returns numbered findings with proposed replacements, questions for the author, and what was verified. Use on "review my article", "is this post ready to publish".
argument-hint: '[path] [--fix]'
model: opus
effort: high
disallowed-tools: Edit, NotebookEdit
disable-model-invocation: true
---

# Review

A **manually-invoked editorial review** of one piece of content — an article, a blog post, a tutorial, an essay, a feature, a newsletter issue. It goes deep on one thing: is this piece doing its job for the publication's reader, is it true and fair, and can a reader follow it?

## Voice and audience come from the writing's own guide

Before reviewing, find the publication's `profile.md` and `writing-guide.md` and read them:

- **In a codebase:** the folder the project's `AGENTS.md` names, or, for a guide kept outside the repo, the folder the user's personal agent instructions name (such as `~/.claude/CLAUDE.md`); otherwise the project's `publications/` folder.
- **In a chat app:** the project's files (a Claude Project's knowledge, or the equivalent elsewhere), or files attached to the conversation.
- **Otherwise:** ask for them.

Voice, person, tone, terminology, formatting choices and who the reader is come from that guide, never from this skill.

- Where the guide settles something this skill also covers, the guide wins. A first-person story, a joke, an aside or a fragment used for rhythm isn't a finding when the guide's voice allows it.
- Where there's no guide, ask who the reader is and what the piece is for, and offer to build one with `cw:style-guide`.

When a guide changes: in a codebase, save the file where it was found; in a chat app, give the user the updated file to replace in the project. Never write inside the installed plugin.

The editing craft is `cw:editing-standards`; the universal writing rules are `write:writing-standards`; the piece's shape comes from `cw:article-standards` or `cw:newsletter-standards`.

## Ask first

Read the answers from the topic's `brief.md`, then `profile.md`'s Defaults, then the request; ask only what's missing. Ask with the app's question tool where it has one, so the choices can be picked; otherwise as a numbered list answered by number. Offer choices where the answers are known and a short typed answer otherwise; where the profile has a default, show it and ask whether to use it. Record the answers in the report's header; a review writes nothing outside its own report.

1. **Which formats should this review cover?** blog post (`blog.md`) · newsletter issue (`newsletter.md`) · social posts (`social.md`) — pick any. Default: every format the brief lists as `drafting` or `in review`.
2. **What kind of piece is it?** article · tutorial · essay · feature · roundup · short answer. Default: the brief's Kind.
3. **Who is the reader, and what should they do or know afterwards?** Short answer. Default: the brief's reader and its one action.
4. **Where does each format go out?** The blog's platform, the newsletter's platform and list. Default: the brief's "Where it goes", then the profile's Defaults.
5. **Does it carry code or commands a reader will run?** yes, with the repository or demo project · no.
6. **What must it disclose?** sponsorship · affiliate links · gifted item · AI assistance · none — pick any.
7. **When does it publish?** A date. Default: the publish date in the brief.

## The topic folder

A topic lives in `topics/<yyyy-mm>-<slug>/` in the publication's folder; the formats it becomes are listed in its `brief.md` ([template](../style-guide/references/publication-template/topics/_template/brief.md)), each in its own file. In a chat app, its files are named `<topic folder>--<file>`.

- **A review only reads.** It runs even while someone holds the topic, never sets Held by or a status, and writes only its own `reports/review.md`.
- **Check every claim against `sources.md`**: each one in the format files has a row under Claims, its source under Sources supports it, and none the piece keeps is `unverified`. Check quotes against the notes in `interviews/`.
- **A cross-post's settings in `copies.md`** are checked at the proof level — the canonical URL or `noindex`, the AI disclosure — never its text, which is `blog.md` or the opening excerpt.

## Arguments

- `[path]` — a topic folder, one of its format files, or a diff. Omitted → review the current changes if there are any, otherwise ask.
- `[--fix]` — don't review. Read the topic's existing `reports/review.md`, list what's in it, and ask which findings to fix. For coming back to a review you ran earlier.

## Method

**Work down the levels in order, and don't skip ahead.** There's no point line-editing a section that's about to move, or checking a comma in a claim that turns out to be false.

1. **Establish the piece's job** — its kind, its reader, and what the reader should do or know afterward, from the brief and the profile (Ask first).
2. **Load the guide.** Ask before concluding there's none; a publication's or a client's guide often lives outside the repo. The author is entitled to be edited to their own standard, not to your instincts.
3. **Read it once without editing.** Mark problems; fix nothing yet.
4. **Run the five levels**, collecting findings.
5. **Separate the fixes from the questions.** Corrections you can make go in the findings; facts only the author, an expert or a source can settle go in a batched question list. Never close a factual gap by writing the plausible version.
6. **Present the findings**, each with its proposed replacement, then ask which to fix.

### The five levels

**1. Substantive — is this the right piece?**

- **It serves the profile** — the job the publication's profile names, for the reader it names. A piece serving no stated purpose is the one to cut.
- **One intent** — teach a task, explain, help decide, keep current, share an experience — not two pieces in one.
- **The opening earns the next screen** — the point, or in a narrative piece the nut graf, by the second or third paragraph.
- **The structure moves** — each section hands off to the next; the middle doesn't sag; the same point isn't made twice; an anecdote that's set up pays off.
- **The ending lands** — a takeaway, a callback or the one ask the profile names — rather than restating what came before.
- **The title's promise is kept**, and the title, subtitle and description still match the piece.
- **Length fits** the guide's target for this kind of piece; a piece well over it is usually two pieces or a piece with a sagging middle.
- **The guide's AI-use policy is followed** — where the publication discloses AI assistance, the disclosure is there and says what the policy says.

**2. Accuracy — is it true, fair and credited?**

- **Every fact, figure, date, name and title** checked against its original source, not a summary of it. Verify before publishing and use original sources wherever possible ([SPJ Code of Ethics](https://www.spj.org/spj-code-of-ethics/)).
- **Every quote** checked against the recording or notes, and attributed to who said it and in what capacity.
- **Certainty matches the evidence.** A single or observational study "suggests"; a press release's claim is checked against the study, because press releases often overstate what a study found.
- **Code in a tutorial runs.** Run every command and sample from a clean start, in order, copying from the piece — the rules are `write:code-samples`' "Code in a tutorial". Record what you ran in **Verified**.
- **Every link goes where its text says**, to the original rather than an aggregator.
- **Borrowed words, ideas and data are credited**, nothing is closely paraphrased, and an AI-assisted draft is checked for lifted passages.
- **The claims that don't look checkable too** — timeframes, prices, "always", "the first". Flag what you couldn't verify rather than smoothing it over.

**3. Line — can the reader follow it, in this voice?**

- **Rhythm** — sentences over about 25 words checked and split unless the length is doing work; lengths varied; the short sentence that lands a point kept.
- **Throat-clearing cut** — "In this post…", "Before we dive in…", three paragraphs of context before the first useful sentence.
- **The abstract made concrete** — the number, the place, the dish, the day.
- **Pronouns clear**, information front-loaded in expository passages, filler cut, passive made active where there's a real actor.
- **Quotes do work the writer can't.** Stacked quotes with no analysis between them hand the piece to the sources.

**4. Copy — is it consistent?**

- **Person and tone held** as the guide sets them; **one term per concept**, matching the word list.
- **Names spelled exactly as their owners spell them** — people, companies, products, places.
- **Titles of works** styled as the guide says; **quotes formatted** to the guide — how omissions are marked, whether brackets and "[sic]" are used, how a source is attributed.
- **Recurring parts** in the publication's standard form — the opening, the sign-off, the call to action, the author line, the "updated on" note.
- **Headings** say what's under them, playful only where the guide allows it; numbers and dates to the guide's format.
- **Where the piece has code**: code styling on identifiers and nowhere else, every fence labelled.

**5. Proof — will it render, everywhere it's read?**

- **Read the published preview** on a phone as well as a desktop, and send a test of a newsletter issue to a real inbox, with images off as well as on.
- **Links and anchors resolve**; affiliate links are tagged as the platform requires.
- **Images load, carry their credit, and have alt text that serves the piece.**
- **The share preview** — the front matter's `title`, `description`, `cover_image` and `cover_alt` — shows what the piece is.
- **A newsletter issue's envelope** — the subject line reflects what's inside; the preview text adds to the subject rather than repeating it; the sender name is the one subscribers recognise; the unsubscribe link and the publication's postal address are in the footer. US law requires a clear way to opt out and a valid physical postal address in commercial email, and a subject line that matches the content ([FTC, CAN-SPAM](https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business)).
- **A newsletter issue's sending checks** — the subject and preview text within the lengths `cw:newsletter-standards` sets; the message under Gmail's 102 KB clipping point, past which the footer with the unsubscribe link is hidden ([Mailchimp](https://mailchimp.com/help/gmail-is-clipping-my-email/)); images in email-safe formats and GIFs under 1 MB (`cw:images-and-diagrams`).

### Blockers — do not publish

- **Something untrue**, a misquote, or a figure with no source presented as fact.
- **An example that doesn't work** — a tutorial step, command or sample that fails when a reader follows it.
- **An unverified allegation** about a named person or company, or **someone criticised without a fair chance to respond** ([SPJ](https://www.spj.org/spj-code-of-ethics/)).
- **A missing or misplaced disclosure** — an affiliate link, sponsorship or gifted item the profile says must be disclosed, absent or away from the recommendation. The FTC expects a connection disclosed clearly and conspicuously, close to the endorsement, and warns readers may miss one at the bottom of a page ([FTC](https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking)).
- **A quote, image or excerpt used without permission** beyond fair use or fair dealing, or a passage plagiarised from someone else.
- **An identifiable person's photo or personal details published without their consent.**
- **A health, finance or legal claim with no source**, or without the qualified review the profile says such claims need.
- **A newsletter issue with no unsubscribe link or no postal address**, or a subject line that misleads about what's inside.
- **An edited, composite or AI-generated image presented as a real photo.** The SPJ code, revised in 2026, says never publish fabricated content that could be confused with reality, and clearly label illustrations and reenactments.

### Severity

- **BLOCKER** — do not publish; the list above.
- **MAJOR** — the reader is likely to fail, be misled or give up: an opening that takes four paragraphs to reach the point, a title that over-promises, a missing step, an ending that restates the introduction, a section that repeats another.
- **MINOR** — friction: a stacked quote, a weak transition, a figure that needs its date, wordiness.
- **NIT** — a word choice the guide doesn't settle, offered once and not argued.

The report template is in [references/output-format.md](references/output-format.md); a worked set of findings, from blocker to nit, is in [references/worked-example.md](references/worked-example.md).

**Output in chat:** the findings worst-first, each with its proposed replacement; the question list, batched — never a series of separate asks; and, after the user chooses, the fixes made and what was left for the author.

## Re-running it

**Every run is a complete, fresh review.** Never skip a check, and never treat something as absent, because an earlier report said it was resolved. Drafts get rewritten, a fix in one place gets undone in another — a previous report is not evidence about the state of anything today.

- **Report current state only**, and **overwrite the file** — a report dragging past findings along spends the reader's attention on problems that are gone.
- **Number findings from 1 each run.** IDs identify a finding inside this report, not across runs.
- **Read the previous report for its scores, and nothing else**, so the trend row shows whether the piece is improving. Its findings are re-derived from the piece every run.
- **History is version control's job**, not the report's.

**Status values:** `OPEN` for anything still present, `FIXED` for anything fixed during this run after the user chose it. Both describe this run only — the next run re-checks everything from scratch.

## Fixing what it found

The report is written first and nothing is edited to produce it. Then:

1. **List the findings by ID** in chat, worst-first, one line each.
2. **Ask which to fix.** Accept IDs (`1, 4, 9`), a range, `all`, or `none`.
3. **Claim the topic, then fix only what was named.** Fixing edits the format files, so read `brief.md` first: if "Held by" names someone else and the status isn't `paused`, leave it and say so; otherwise set Held by and the date, and clear it when you stop. Never a default subset, never "the top three", never a severity threshold picked for the user. A finding they didn't choose stays in the report untouched.
4. **Report back**: what changed, what was skipped, and anything that needs a decision only they can make.
5. **Update the report** — mark each fixed finding `FIXED` with a one-line note. Leave everything else as it stands. The file on disk has to match reality: a report still listing something fixed an hour ago teaches people not to trust it.
6. **Re-score and show the movement.** That's what scoring is for: it tells you whether the work improved the piece. If several findings were fixed and no score moved, say so plainly — the findings that mattered weren't the ones chosen.

Nothing is edited before step 2 is answered. This command runs with the editing tools removed while it produces the report — they come back for the turn after your question.

### Fixing from an earlier report

`--fix` works from the report already on disk, whatever its age, so findings aren't renumbered underneath you.

- **Say how old the report is** — someone deciding what to fix needs to know whether it's today's picture or last month's.
- **Verify each finding still exists before fixing it.** Check the actual location; don't trust the report's description of it. Between the review and now, the draft may have changed, someone else may have fixed it, or the passage may have moved.
- **Drop anything that's no longer there** and say so — a stale entry, not a fix, and it shouldn't be counted as one.
- **Check cheaply whether the piece has moved on** — the report's date against file modification times or the version-control log. If a lot has changed, say how much and offer a fresh review; the call is theirs. Where there's nothing to compare against, say you can't tell rather than implying you checked.
- **If no report exists**, say so and offer to run the review.

Everything else is unchanged: list the findings, ask which, fix only those, update the report, re-score.

## Boundaries

- **Bringing an old piece up to the current guide** → `cw:content-refresh`. **Does it sound machine-written** → `/write:ai-check`, run on request.
- **Writing from scratch** — this reviews what exists. A finding that the piece should be several pieces is raised, not acted on.
- **Documentation** is reviewed with `/tw:doc-review`.
- **The author owns the piece** and usually knows something about the subject you don't. Findings are proposals, and a rejected finding is not re-argued.
