---
name: doc-review
description: >-
  Manually invoked. Editorial review of one document, a folder or a diff, working down the five levels of edit — substantive, technical accuracy, line, copy and proof — returning numbered findings with a proposed replacement for each, a batched list of questions only the author or an expert can settle, and a record of what was verified against a real source. Reports first, then asks which findings to fix. Use on "review this doc", "check this draft", "is this ready to publish".
argument-hint: '[path] [--fix]'
model: opus
effort: high
disallowed-tools: Edit, NotebookEdit
disable-model-invocation: true
---

# Doc review

A **manually-invoked editorial review** of a specific document. Where the audits ask about a whole set, this goes deep on one thing: is this document doing its job, is it true, and can a reader follow it?

The standard is `editing-standards`, plus [`writing-standards`'s house-voice.md](../writing-standards/references/house-voice.md) and the skill for whichever document type this is.

## Arguments

- `[path]` — a file, a folder, or a diff. Omitted → review the current changes if there are any, otherwise ask.
- `[--fix]` — don't audit. Read the existing `_reports/doc-review.md`, list what's in it, and ask which findings to fix. For coming back to a report you ran earlier.

## Method

**Work down the levels in order, and don't skip ahead.** There is no point line-editing a section that's about to move, or checking a comma in a claim that turns out to be false. Each level is only worth running once the level above it is settled.

1. **Establish the document's job** — its type, its audience, and what the reader should be able to do afterward. Ask if it isn't clear; every judgement below depends on it.
2. **Load the project's standard** — its style guide, terminology list or glossary, if one exists. Editing to a house standard is a different job from editing to your instincts, and the author is entitled to the house standard.
3. **Read it once without editing.** Mark problems; fix nothing yet. Editing while first reading produces line edits on paragraphs that should have been cut.
4. **Run the five levels**, collecting findings.
5. **Separate the fixes from the questions.** Corrections you can make go in the findings; facts only the author or an expert can settle go in a batched question list. Never close a factual gap by writing the plausible version.
6. **Present the findings**, each with its proposed replacement, then ask which to fix (see below).

### The five levels

**1. Substantive — is this the right document?**

Does it match one type or drift between them; is the order right for the reader; is the answer above the point where someone gives up; what's missing (prerequisites, the failure case, the expected result, limits, what to do next); what's present that serves the author rather than the reader; what belongs on a different page.

**2. Technical accuracy — is it true?**

Every name, signature, value, default, version, path, label and error string checked against the real source. Run the commands and the code. Check the claims that don't look technical too — timeframes, limits, prices, "automatically", "instantly", "always". Flag what you couldn't verify rather than smoothing over it.

**3. Line — can the reader follow it?**

One idea per sentence; information front-loaded; unclear pronouns fixed; hedging and throat-clearing cut; passive converted to active where there's a real actor; nominalizations turned back into verbs; vague quantities replaced with real ones or marked as questions.

**4. Copy — is it consistent?**

One term per concept, matching the glossary; capitalization, hyphenation and product naming to the guide, including in headings, tables and captions; heading levels sequential and parallel; lists parallel; code styling applied to identifiers and paths and not to things that aren't code; every fence labelled; numbers and dates to the house format.

**5. Proof — will it render?**

Links and anchors resolve; images load, have alt text, and still show what the text claims; tables intact; frontmatter valid; typos and doubled words. **Read the rendered output, not the source.**

### Severity

- **BLOCKER** — do not publish: something untrue, a missing warning on an irreversible action, an example that doesn't work.
- **MAJOR** — the reader is likely to fail or be misled: a missing step, a buried answer, an undefined term, a wrong structure for the type.
- **MINOR** — friction: wordiness, weak sentences, inconsistent formatting.
- **NIT** — preference, offered once and not argued.

### Report format

Write to `_reports/doc-review.md`, creating the directory if it doesn't exist — that's where every audit and report in this set goes — and summarise the findings in chat. Tell the user the path when you're done.

```markdown
# Review — <document>

**Date:** <YYYY-MM-DD> · **Type:** <document type> · **Audience:** <who> · **Standard:** <guide, or "none found"> · **Verdict:** <Ready / Ready with fixes / Needs rework> · **Overall:** <X>/10

## Score change (previous → current)
| Metric | Previous | Current | Δ | Trend |
| --- | --- | --- | --- | --- |
| Overall | <prev/10 or N/A> | <cur/10> | <+N / -N / 0> | <▲ / ▼ / ■ / N/A> |

## Findings
| ID | Level | Severity | Status | Issue | Location |
| --- | --- | --- | --- | --- | --- |
| 1 | Substantive | MAJOR | <one-line> | <section or line> |

### R1 — <title>
- **Level:** <which of the five>
- **Problem:** <what it costs the reader>
- **Now:** <the current text>
- **Proposed:** <the replacement>

## Questions for the author
Facts that can't be settled without you. Nothing below has been guessed at in the draft.

| # | Question | Why it matters | Where |
| --- | --- | --- | --- |

## Verified
What was checked against a real source, and what couldn't be.

| Claim | Checked against | Result |
| --- | --- | --- |

## Scorecard
| Level | Score | Notes |
| --- | --- | --- |
| Substantive | <X>/10 | right document, right order, nothing missing |
| Accuracy | <X>/10 | claims verified against a real source |
| Line | <X>/10 | sentence-level clarity |
| Copy | <X>/10 | consistency with the guide |
| Proof | <X>/10 | links, images, rendering |

```

### Output

- **Findings** in chat, worst-first, each with a proposed replacement.
- **The question list**, batched — never a series of separate asks.
- **The fixes you were asked for**, and a summary of what changed and what was left for the author.

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
3. **Fix only what was named.** Never a default subset, never "the top three", never a severity threshold picked for the user. A finding they didn't choose stays in the report untouched.
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

- **The whole set rather than one document** → `/tw:docs-audit` for defects, `/tw:content-audit` for shape, `/tw:style-check` for consistency.
- **Does it sound machine-written** → `/tw:ai-check`. That pass is not run here by default; ask for it.
- **Writing from scratch** — this reviews what exists. A finding that the document should be several documents is raised, not acted on.
- **The author owns the document.** On technical content they usually know something you don't; findings are proposals, and a rejected finding is not re-argued.
