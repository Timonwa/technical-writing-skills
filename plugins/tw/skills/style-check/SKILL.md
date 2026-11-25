---
name: style-check
description: >-
  Manually invoked. Sweeps a docs set for the drift that makes it read like several people wrote it — one concept named several ways, capitalization and heading-case inconsistency, product and feature name variants, person and tense drift, marketing words and minimisers, weak link text, code-formatting and fence-label drift, UI formatting, glossary gaps, and date, number and unit formats. Measured against the project's style guide. Outputs a drift report plus proposed terminology entries. Never edits a page.
argument-hint: '[path] [--guide <path>] [--fix]'
disable-model-invocation: true
disallowed-tools: Edit, NotebookEdit
---

# Style check

**Run this only when the user asks for it by name. It reports first, and edits nothing until the user picks findings to fix (`--fix`).**

A **manually-invoked consistency sweep** across a set of documents. It answers one question: **does this read as one voice?** A docs set has one voice by design — readers move between pages mid-task and shouldn't notice the author changing.

Sweep the whole set, because drift is invisible page by page: a concept called three things across two hundred pages goes unnoticed by anyone reading a few pages at a time — but every reader who meets the second name reads it as a second concept.

## Voice and audience come from the writing's own guide

Before checking it, find the project's style guide and conventions and read them:

- **In a codebase:** the style guide and conventions the project's `AGENTS.md` names, or its contributing docs.
- **In a chat app:** the style guide in the project's files, or attached to the conversation.
- **Otherwise:** ask whether one exists before concluding there isn't one.

Voice, person, tone, terminology and formatting come from that guide.

- Where the guide settles something this skill also covers, the guide wins — including where it departs from the documentation voice and says so.
- Where the guide is silent or there isn't one, `docs-standards` is the default, applied without asking, and drift from it is a **finding**, not a proposal.
- When a fix adds to the guide — a terminology entry, a recorded decision — in a codebase, save it in the guide's file; in a chat app, give the user the updated guide to replace in the project's files.

## Ask first

Read the answers from the arguments, the request and the project first; ask only what's missing. Ask with the app's question tool where it has one, so the choices can be picked; otherwise as a numbered list answered by number. Offer choices where the answers are known and a short typed answer otherwise. Record the answers in the report's header.

1. **Which docs to sweep?** A path or a section; the whole set when the docs folder is obvious.
2. **Which standard?** The guide's path · no guide anywhere (derive mode). Ask before assuming there isn't one.
3. **Which version of the docs?** Current only · all versions · a named version. Default: current only.
4. **Anything to leave out?** Generated reference · changelogs and release notes · translated locales · none — each can hold old, generated or other-language names on purpose.
5. **Where can the product's own names be checked?** The running product · the API reference · the source code · none.
6. **Report, or fix from the last report?** A fresh report · fix from the existing report (`--fix`). Default: a fresh report.

## Arguments

- `[path]` — the docs to sweep. Omitted → ask.
- `[--guide <path>]` — the project's style guide, terminology list or glossary. Omitted → look for one; if none turns up, ask before assuming there isn't one, since a team's guide often lives outside the repo. Only once the answer is no, run in **derive mode**: infer the dominant convention from the docs, report drift against that, and propose the terminology list the project is missing.
- `[--fix]` — don't audit. Read the existing `_reports/docs-style-check.md`, list what's in it, and ask which findings to fix. For acting on a report from an earlier run.

## Method

**Frequency decides the rule, not taste — for what no standard settles.** In derive mode you are finding the convention the docs already mostly follow and flagging the minority that breaks it. Where `docs-standards` sets a default — sentence-case headings, "you", present tense — that default holds even if most pages break it, unless the project records otherwise; say so in the report, and offer the majority as a decision the project can record. Where a set is genuinely split down the middle on something no standard settles, raise it for a decision rather than settling it yourself.

1. **Load the standard** — the project's guide if there is one, asking for it before concluding there isn't, then `docs-standards` for what it leaves open. Only then derive the remaining conventions, and state what you derived and how strongly.
2. **Sweep the whole set**, not a sample. A consistency finding is only meaningful against the full corpus, and the outlier is the point.
3. **Count everything.** Every finding carries how many times each variant appears and where. A drift report without counts can't be acted on.
4. **Separate a drift from a decision.** Where two variants both appear substantially and no standard decides, flag it as an open decision with the counts and a recommendation.
5. **Check the places drift hides** — page titles, navigation labels, headings, table cells, image captions, link text, frontmatter and code comments. Body prose gets edited; these don't.
6. **Write the report** and post the chat summary. Never edit a page.

### What to sweep

**Terminology**

- **One concept, several names.** The core check. Cluster the variants, count each, name the likely winner, and point at where the product's UI or API uses which.
- **One name, several concepts** — a word doing two jobs. Rarer and worse.
- **Product and feature names** — exact string, spacing, stylization and capitalization against the UI, and any shortened form — including whether a shortened form is used before it's introduced. Feature names creeping into capitals over time is the most common drift in any docs set.
- **Undefined terms** used before their first definition, and terms defined more than once.
- **Glossary coverage** — domain terms with no glossary entry, glossary entries no page uses, and terms used before the page defines or links them.

**Voice** — each a finding, unless the guide allows it:

- **Person** — drift from "you" to "we", "the user", "users" or the passive, within and across pages. "We" is acceptable only for the organisation, with a clear antecedent.
- **Tense** — future tense where present belongs: "the command will return" for "returns".
- **Mood** — instructions not in the imperative: "you will want to click", "the user should select".
- **Marketing adjectives** — "powerful", "seamless", "robust", "blazing", "cutting-edge".
- **Minimisers** — "simply", "just", "easy", "obviously", "of course": they tell a reader who is stuck that they should already have understood.
- **Filler openings** — "This page explains…", "In this section we will…", "Welcome to…".
- **Link text** — "click here", bare URLs, "read more", and link text that doesn't say where it goes.

**Mechanics**

- **Capitalization and heading case** — sentence case against title case, per level, and whether page titles, navigation labels and headings match.
- **UI element formatting** — a button bold on one page, quoted on another, plain on a third; menu paths written with arrows on some pages and "then" on others.
- **Code styling** — a filename styled as code on one page and not the next; flags, paths and values treated differently.
- **Code fence labels** — unlabelled fences, and the same language labelled differently (`sh`, `shell`, `bash`).
- **Lists** — serial comma, terminal punctuation, first-word capitalization, numbered against bulleted for the same kind of content.
- **Dates, numbers, times, units, currency** — format consistency, and whether units and time zones are stated at all.
- **Version and platform labels** — the same version or operating system written several ways.
- **Abbreviations** — expanded on first use, then used consistently; the same thing abbreviated differently.

### Report format

Write to `_reports/docs-style-check.md`, creating the directory if it doesn't exist. That's where every audit and report in this set goes. Tell the user the path when you're done. The template — header with the scope answers, score change, terminology drift, open decisions, voice and mechanics findings, proposed terminology entries and the scorecard — is in [references/output-format.md](references/output-format.md); fill it exactly, every section present.

### Output

- **Full report** at the path above.
- **Chat summary** — the consistency score, the number of concepts with drift, the worst three clusters with their counts, the count of open decisions needing a person, and the report path.

**Report-only** — it never edits a page. A terminology change is a set-wide edit and belongs behind an explicit decision.

## Re-running it

**Every run is a complete, fresh audit.** Never skip a check, and never treat something as absent, because an earlier report said it was resolved. Code regresses, pages get reverted, a fix in one place gets undone in another — a previous report is not evidence about the state of anything today.

- **Report current state only.** What's in the report is what's true now, checked this run.
- **Overwrite the file.** No resolved history accumulates in it. A report dragging a hundred past findings along spends the reader's tokens and attention on problems that are gone.
- **Number findings from 1 each run.** IDs identify a finding inside this report, for the conversation you're having about this run — not across runs.
- **Read the previous report for its scores, and nothing else.** The overall and per-category scores go in the trend row so a reader can see whether the docs set is improving or degrading. Its findings are never read — those are re-derived from source every run.
- **History is version control's job**, not the report's. The audit says what's wrong today and how today compares.

**Status values:** `OPEN` for anything still present, `FIXED` for anything fixed during this run after the user chose it. Both describe this run only — the next run re-checks everything from scratch.

## Fixing what it found

The report is written first and nothing is edited to produce it. Then:

1. **List the findings by ID** in chat, worst-first, one line each.
2. **Ask which to fix.** Accept IDs (`1, 4, 9`), a range, `all`, or `none`.
3. **Fix only what was named.** Never a default subset, never "the top three", never a severity threshold picked for the user. A term or drift they didn't choose stays in the report untouched.
4. **Report back**: what changed, what was skipped, and anything that couldn't be fixed without a decision only they can make.
5. **Update the report.** Mark each fixed finding `FIXED` in place, with a one-line note of what changed. Leave everything else as it stands. The file on disk has to match reality — a report still listing something that was fixed an hour ago teaches people not to trust it.
6. **Re-score and show the movement.** After fixing, recompute the scores and report the change against where this run started. That's what scoring is for: it tells you whether the work improved things or made them worse. If several findings were fixed and no score moved, say so plainly — the findings that mattered weren't the ones chosen.

Nothing is edited before step 2 is answered. The editing tools are unavailable while this command produces the report; they return for the turn after your question, once the answer is in.

### Fixing from an earlier report

`--fix` skips the audit entirely and works from the report already on disk, whatever its age — ten minutes old, an hour, a month. It's for acting on findings already read rather than generating a new set; re-auditing would renumber them underneath you.

- **Say how old the report is** — its date, and how long ago that was. Someone deciding what to fix needs to know whether they're looking at today's picture or last month's.
- **Verify each finding still exists before fixing it.** Check the actual location; don't trust the report's description of it. Between the audit and now, the page may have changed, someone else may have fixed it, or the thing it described may have moved.
- **Drop anything that's no longer there** and say so. That's a stale entry, not a fix, and it shouldn't be counted as one.
- **Check cheaply whether the docs have moved on** — compare the report's date against file modification times, or the version-control log for the paths it covers. That's a count of what changed, not a re-audit, and it costs seconds. If a lot has changed, say how much and offer a fresh audit; the call is theirs, not yours. Where there's no history or timestamps to compare against, say you can't tell rather than implying you checked.
- **If no report exists**, say so and offer to run the audit rather than guessing at what to fix.

Everything else is unchanged: list the findings, ask which, fix only those, update the report, re-score.

## Boundaries

- **Deep editorial work on one page** → `/docs-review`.
- **Does it sound machine-written** → `/docs-ai-check`.
- **Setting the conventions** rather than enforcing them → `docs-style-guide`. A derived convention is a proposal for the guide, not a decision made on the project's behalf.
- **Is it true and does it work** → `/docs-audit`; **is it the right set** → `/content-audit`.
- **A blog, publication or newsletter archive** → `content-refresh` in [content-writing-skills](https://github.com/Timonwa/content-writing-skills), which brings old pieces up to the current guide.
- **Where the docs and the product disagree on a name**, the product is evidence but not automatically right — flag the conflict rather than silently siding with either.
