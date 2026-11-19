---
name: style-check
description: >-
  Manually invoked. Sweeps a publication's body of work — a blog archive, a newsletter's back issues, or both — for the drift that makes it read like several writers, measured against its own writing guide: one concept named several ways, name variants, title and subhead case, recurring parts that wander (openings, sign-offs, calls to action, author lines, series names, tags), person and voice changing over time, banned words and weak link text. Outputs a drift report and proposed guide entries. Never edits a piece.
argument-hint: '[path] [--guide <path>] [--fix]'
model: opus
effort: high
disable-model-invocation: true
disallowed-tools: Edit, NotebookEdit
---

# Style check

A **manually-invoked consistency sweep** across a publication's body of work — a blog's archive, a newsletter's back issues, or both. It answers one question: **does this read as one publication?**

Nobody notices that a series is called two things across two hundred posts, or that the sign-off changed in March, because nobody reads two hundred posts in one sitting — but a reader who meets both reads them as two things, or two writers.

## Voice and audience come from the writing's own guide

Before checking it, find the guide the publication answers to and read it: its `writing-guide.md` and `profile.md` (where the user's `CLAUDE.md` says they live, otherwise the project's `publications/` folder). Voice, person, tone, terminology and formatting choices come from that guide, never from this skill.

- Where the guide settles something, drift from it is a **finding**.
- Where the guide is silent, the universal rules in `write:writing-standards` that protect the reader are still **findings** — link text that says where it goes, heading levels in order, alt text, sources and credits. Voice-level defaults — minimisers, person, sentence length — stay **proposals**, because a publication's voice may be loose by design: first person, jokes, fragments, a mood that changes with the subject.
- Where there's no guide at all, ask who the reader is and what the publication is for, and offer to build one with `cw:style-guide`.

**Drift is measured against that guide.** A blog written in first person with title-case headlines is consistent if that's what its guide says; it drifts when some pieces don't.

## Arguments

- `[path]` — the archive to sweep. Omitted → ask.
- `[--guide <path>]` — the writing guide or terminology list. Omitted → look for one; if none turns up, ask before assuming there isn't one, since a publication's guide often lives outside the repo. Only once the answer is no, run in **derive mode**: infer the dominant convention from the pieces, report drift against that, and propose the entries the guide is missing.
- `[--fix]` — don't sweep. Read the existing `_reports/content-style-check.md`, list what's in it, and ask which findings to fix.

## Method

**Frequency decides the rule, not taste.** In derive mode you're not imposing a preference — you're finding the convention the writing already mostly follows and flagging the minority that breaks it. Where a set is split down the middle, that's a decision for the owner, not one to settle yourself.

1. **Load the guide** — asking for it before concluding there isn't one. Only then derive the dominant conventions, and say what you derived and how strongly.
2. **Sweep the whole archive**, not a sample. A consistency finding is only meaningful against the full set, and the outlier is the point.
3. **Count everything.** Every finding carries how many times each variant appears and where.
4. **Separate a drift from a decision.** Where two variants both appear substantially, raise it as an open decision with the counts and a recommendation.
5. **Read across time** (below), where the pieces have dates.
6. **Check the places drift hides** — titles, subheads, captions, link text, tags and categories, social and email titles, the author bio, frontmatter. Body prose gets edited; these don't.
7. **Write the report** and post the chat summary. Never edit a piece.

### What to sweep

**Terminology and names**

- **One concept, several names** — a series, a recurring segment, a concept the publication explains often. Cluster the variants, count each, name the likely winner.
- **One name, several concepts** — a word doing two jobs. Rarer and worse.
- **Names of people, places, products and the publication itself** — exact spelling, spacing and stylization, as their owners write them.
- **Terms used before they're explained**, or explained differently in different pieces.

**Mechanics**

- **Title and subhead case** — sentence against title case, and whether social and email titles match the piece's own.
- **Capitalization** of recurring terms, which creeps into capitals over time.
- **Lists and punctuation** — serial comma, full stops in lists, numbered against bulleted for the same kind of content.
- **Dates, numbers, currency, units** — format consistency.
- **Code formatting and fence labels**, where the publication publishes code.

**Voice**

- **Person** — drift from the person the guide sets, "I", "we" or "you", within and across pieces.
- **Banned words** — whatever the guide bans. Where it bans none, minimisers ("simply", "just", "obviously") and marketing adjectives are proposals, with counts.
- **Filler openings** — "In this post we will…", "Have you ever wondered…", "In today's fast-paced world…".
- **Link text** — "click here", bare URLs, "read more", link text that doesn't say where it goes. A finding even where the guide is silent.

**Recurring parts** — they drift quietly, because nobody rereads them:

- **Openings and sign-offs** — the greeting, the closing line, the signature.
- **The call to action** — what a piece asks of the reader, and how it's worded.
- **The author line and bio**, and how the author is named.
- **The "updated on" note**, and how corrections are marked.
- **Series names, tags and categories** — one series called two things; one category split in three.
- **Image credits** — the credit line's wording and placement, and whether it carries what the licence asks (title, author, source, licence for Creative Commons).
- **Disclosures** — how affiliate links, sponsorships and gifted items are disclosed, and whether the wording and placement match the guide in every piece.
- **Headline style** — question headlines, numbers in headlines, length.

### Read across time

Where the pieces have dates, read them in order. A voice that changed — older posts in third person, newer in first; a subhead style adopted last year; a sign-off that started in the spring — is either drift in the older pieces or a guide that no longer describes the writing. Report which you think it is, with the dates, under **Open decisions**, and let the owner decide. Never propose rewriting an archive to match a new voice without that decision.

> **O2 — the sign-off changed in March.** 31 issues before March end "Talk soon"; 14 since end "Until next week". The guide records "Talk soon". Either the 14 recent issues drift, or the guide is out of date. Recommendation: ask; the recent form is consistent with itself.

### Output

- **The full report**, in the template in [references/output-format.md](references/output-format.md).
- **A chat summary** — the consistency score, the concepts with drift, the worst three clusters with their counts, the open decisions needing the owner, and the report path.

**Report-only** — it never edits a piece. A change across the archive belongs behind an explicit decision.

## Re-running it

**Every run is a complete, fresh sweep.** Never skip a check, and never treat something as absent, because an earlier report said it was resolved. Pieces get updated, a fix in one place gets undone in another — a previous report is not evidence about the state of anything today.

- **Report current state only**, and **overwrite the file** — a report dragging past findings along spends the reader's attention on problems that are gone.
- **Number findings from 1 each run.**
- **Read the previous report for its scores, and nothing else**, so the trend row shows whether the archive is drifting or settling.
- **History is version control's job**, not the report's.

**Status values:** `OPEN` for anything still present, `FIXED` for anything fixed during this run after the user chose it. Both describe this run only — the next run re-checks everything from scratch.

## Fixing what it found

The report is written first and nothing is edited to produce it. Then:

1. **List the findings by ID** in chat, worst-first, one line each.
2. **Ask which to fix.** Accept IDs (`1, 4, 9`), a range, `all`, or `none`.
3. **Fix only what was named.** Never a default subset, never "the top three". A drift they didn't choose stays in the report untouched.
4. **Report back**: what changed, what was skipped, and anything that needs a decision only the owner can make.
5. **Update the report** — mark each fixed finding `FIXED` with a one-line note. Leave everything else as it stands. The file on disk has to match reality: a report still listing something fixed an hour ago teaches people not to trust it.
6. **Re-score and show the movement.** That's what scoring is for: it tells you whether the work made the archive more consistent. If several findings were fixed and no score moved, say so plainly.

Nothing is edited before step 2 is answered. This command runs with the editing tools removed while it produces the report — they come back for the turn after your question.

### Fixing from an earlier report

`--fix` works from the report already on disk, whatever its age, so findings aren't renumbered underneath you.

- **Say how old the report is** — someone deciding what to fix needs to know whether it's today's picture or last month's.
- **Verify each finding still exists before fixing it.** Check the actual location; don't trust the report's description of it. Between the sweep and now, a piece may have changed, someone else may have fixed it, or it may have moved.
- **Drop anything that's no longer there** and say so — a stale entry, not a fix, and it shouldn't be counted as one.
- **Check cheaply whether the archive has moved on** — the report's date against file modification times or the version-control log. If a lot has changed, say how much and offer a fresh sweep; the call is theirs. Where there's nothing to compare against, say you can't tell rather than implying you checked.
- **If no report exists**, say so and offer to run the sweep.

Everything else is unchanged: list the findings, ask which, fix only those, update the report, re-score.

## Boundaries

- **Deep editorial work on one piece** → `/cw:review`. **Does it sound machine-written** → `/write:ai-check`, run on request.
- **Setting the conventions** rather than enforcing them → `cw:style-guide`. A derived convention is a proposal for the guide, not a decision made on the owner's behalf.
- **A docs set** is checked with `/tw:style-check`.
- **A name is spelled as its owner writes it** — a person, a company, a product — so the owner's form is the recommendation. For any other term where the archive and an outside source disagree, flag the conflict rather than silently siding with either.
