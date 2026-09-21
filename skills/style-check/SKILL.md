---
name: style-check
description: >-
  Manually invoked. Sweeps a body of content for the drift that makes a docs set read like several people wrote it — one concept named several ways, capitalization and heading-case inconsistency, product and feature name variants, forbidden and hedging words, weak link text, code-formatting and fence-label drift, and date, number and unit format inconsistency. Outputs a drift report plus proposed terminology-list entries. Never edits a page.
argument-hint: '[path] [--guide <path>] [--fix]'
model: opus
effort: high
disable-model-invocation: true
disallowed-tools: Edit, NotebookEdit
---

# Style check

A **manually-invoked consistency sweep** across a set of documents. It answers one question: **does this read as one voice?**

This is work a person cannot do by hand. Nobody notices that a concept is called three things across two hundred pages, because nobody reads two hundred pages in one sitting — but every reader who meets the second name reads it as a second concept.

The standard is `style-guide`, plus the voice rules in [`writing-standards`'s house-voice.md](../writing-standards/references/house-voice.md). Where the project has its own style guide, that wins over both.

## Arguments

- `[path]` — the content to sweep. Omitted → ask.
- `[--guide <path>]` — the project's style guide, terminology list or glossary. Omitted → look for one; if none exists, run in **derive mode**: infer the dominant convention from the content itself, report drift against that, and propose the terminology list the project is missing.
- `[--fix]` — don't audit. Read the existing `_reports/style-check.md`, list what's in it, and ask which findings to fix. For coming back to a report you ran earlier.

## Method

**Frequency decides the rule, not taste.** In derive mode you are not imposing a preference — you are finding the convention the content already mostly follows and flagging the minority that breaks it. Where a set is genuinely split down the middle, that's a finding to raise for a decision, not one to settle yourself.

1. **Load the standard** — the project's guide if there is one, otherwise derive the dominant conventions and state what you derived and how strongly.
2. **Sweep the whole set**, not a sample. A consistency finding is only meaningful against the full corpus, and the outlier is the point.
3. **Count everything.** Every finding carries how many times each variant appears and where. A drift report without counts can't be acted on.
4. **Separate a drift from a decision.** Where two variants both appear substantially, flag it as an open decision with the counts and a recommendation, rather than declaring one correct.
5. **Check the places drift hides** — headings, navigation labels, table cells, image captions, link text, frontmatter, and code comments. Body prose gets edited; these don't.
6. **Write the report** and post the chat summary. Never edit a page.

### What to sweep

**Terminology**

- **One concept, several names.** The core check. Cluster the variants, count each, name the likely winner, and point at where the product itself uses which.
- **One name, several concepts** — a word doing two jobs. Rarer and worse.
- **Product and feature names** — exact string, spacing, stylization, and any shortened form. Check whether a shortened form is used before it's introduced.
- **Undefined terms** used before their first definition, and terms defined more than once.
- **Domain terms with no glossary entry**, and glossary entries no page uses.

**Mechanics**

- **Heading case** — sentence case against title case, per heading level, and whether page titles and navigation labels match the body.
- **Capitalization of features and common nouns** — the most common single source of drift, as feature names creep into capitals over time.
- **Code formatting** — which things get `code` styling and which don't, applied inconsistently to the same kind of thing (a filename styled on one page and not the next).
- **Code fence labels** — unlabelled fences, and the same language labelled differently across pages.
- **Lists** — serial comma, terminal punctuation, capitalization of the first word, numbered against bulleted for the same kind of content.
- **Dates, numbers, times, units, currency** — format consistency, and whether units and time zones are stated at all.
- **Abbreviations** — expanded on first use, then used consistently; the same thing abbreviated differently.

**Voice**

- **Person** — drift between "you", "we", "the user", and the passive, within and across pages.
- **Tense** — future tense where present belongs.
- **Forbidden words** — marketing adjectives, and the hedges that tell a reader they should already have understood: "simply", "just", "obviously", "of course", "easy".
- **Link text** — "click here", bare URLs, "read more", and link text that doesn't say where it goes.
- **Filler openings** — "This page explains…", "In this section we will…".

### Report format

Write to `_reports/style-check.md`, creating the directory if it doesn't exist. That's where every audit and report in this set goes. Tell the user the path when you're done.

```markdown
# Style check — <scope>

**Date:** <YYYY-MM-DD> · **Scope:** <what was swept> · **Pages:** <N> · **Standard:** <guide path, or "derived from content"> · **Mode:** Report-only · **Consistency:** <X>/10

## Score change (previous → current)
| Metric | Previous | Current | Δ | Trend |
| --- | --- | --- | --- | --- |
| Consistency | <prev/10 or N/A> | <cur/10> | <+N / -N / 0> | <▲ / ▼ / ■ / N/A> |

## Terminology drift
| ID | Concept | Variants (count) | Recommended | Confidence | Occurrences | Status |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | <concept> | `<a>` (74), `<b>` (9), `<c>` (2) | `<a>` | High | 11 |

### T1 — <concept>
- **Variants:** `<a>` ×74 · `<b>` ×9 · `<c>` ×2
- **What the product calls it:** <the UI or API string, or "unverified">
- **Recommendation:** <winner, and why>
- **Locations to change:** `<path>:<line>` …

## Open decisions
Splits too close to call automatically — these need a person.

| # | Question | Variant A (count) | Variant B (count) | Recommendation |
| --- | --- | --- | --- | --- |

## Mechanics drift
| # | Category | Dominant convention | Exceptions | Locations |
| --- | --- | --- | --- | --- |

## Voice findings
| # | Issue | Count | Example | Locations |
| --- | --- | --- | --- | --- |

## Proposed terminology entries
Ready to paste into the project's terminology list.

| Term | Definition | Use | Don't use | Notes |
| --- | --- | --- | --- | --- |

## Scorecard
| Category | Score | Notes |
| --- | --- | --- |
| Terminology | <X>/10 | |
| Capitalization & headings | <X>/10 | |
| Code formatting | <X>/10 | |
| Lists & punctuation | <X>/10 | |
| Numbers, dates & units | <X>/10 | |
| Voice & person | <X>/10 | |
| Link text | <X>/10 | |

```

### Output

- **Full report** at the path above.
- **Chat summary** — the consistency score, the number of concepts with drift, the worst three clusters with their counts, the count of open decisions needing a person, and the report path.

**Report-only** — it never edits a page. A terminology change is a set-wide edit and belongs behind an explicit decision.

## Re-running it

**Every run is a complete, fresh audit.** Never skip a check, and never treat something as absent, because an earlier report said it was resolved. Code regresses, pages get reverted, a fix in one place gets undone in another — a previous report is not evidence about the state of anything today.

- **Report current state only.** What's in the report is what's true now, checked this run.
- **Overwrite the file.** No resolved history accumulates in it. A report dragging a hundred past findings along spends the reader's tokens and attention on problems that are gone.
- **Number findings from 1 each run.** IDs identify a finding inside this report, for the conversation you're having about this run — not across runs.
- **Read the previous report for its scores, and nothing else.** The overall and per-category scores go in the trend row so a reader can see whether the set is improving or degrading. Its findings are never read — those are re-derived from source every run.
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

Nothing is edited before step 2 is answered. This command runs with the editing tools removed while it produces the report, so that holds on its own rather than resting on the instruction — they come back for the turn after your question, once the answer is in.

### Fixing from an earlier report

`--fix` skips the audit entirely and works from the report already on disk, whatever its age — ten minutes old, an hour, a month. Use it whenever you want to act on findings you've already read rather than generate a new set; re-auditing would renumber them underneath you.

- **Say how old the report is** — its date, and how long ago that was. Someone deciding what to fix needs to know whether they're looking at today's picture or last month's.
- **Verify each finding still exists before fixing it.** Check the actual location; don't trust the report's description of it. Between the audit and now, the page may have changed, someone else may have fixed it, or the thing it described may have moved.
- **Drop anything that's no longer there** and say so. That's a stale entry, not a fix, and it shouldn't be counted as one.
- **Check cheaply whether the content has moved on** — compare the report's date against file modification times, or the version-control log for the paths it covers. That's a count of what changed, not a re-audit, and it costs seconds. If a lot has changed, say how much and offer a fresh audit; the call is theirs, not yours. Where there's no history or timestamps to compare against, say you can't tell rather than implying you checked.
- **If no report exists**, say so and offer to run the audit rather than guessing at what to fix.

Everything else is unchanged: list the findings, ask which, fix only those, update the report, re-score.

## Boundaries

- **Is it true, does it work** → `/tw:docs-audit`.
- **Is it the right set** → `/tw:content-audit`.
- **Deep editorial work on one document** → `/tw:doc-review`.
- **Does it sound machine-written** → `/tw:ai-check`.
- **Setting the conventions** rather than enforcing them → the `style-guide` skill. Where this command derives a convention, that's a proposal for the guide, not a decision made on the project's behalf.
- **Where the docs and the product disagree on a name**, the product is evidence but not automatically right — flag the conflict rather than silently siding with either.
