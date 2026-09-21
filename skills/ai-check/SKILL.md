---
name: ai-check
description: >-
  Manually invoked. Checks whether a draft reads as machine-written and reports the specific tells rather than a verdict — em-dash frequency and pattern, blacklisted vocabulary and phrases, the structural tells (uniform section lengths, lists of exactly three, summaries that restate, closers that congratulate), hollow claims, and rhythm. Returns a rewrite for each flagged passage, then asks which to apply.
argument-hint: '[path] [--fix]'
model: opus
effort: high
disallowed-tools: Edit, NotebookEdit
disable-model-invocation: true
---

# AI check

A **manually-invoked sweep for the fingerprints of machine-written prose**, on anything published under a person's name.

**It reports tells, not a verdict.** No one can determine whether text was generated, and claiming to is both wrong and harmful — human writers use em dashes, and careful AI-assisted drafts carry none of these markers. What this command does is find the specific patterns that make prose read as generated, each with its location and a rewrite. Whether the draft then gets changed is the author's call.

In documentation these patterns matter for a reason beyond provenance: nearly all of them are padding. A sentence that exists to transition, a paragraph that restates the heading, a closer that tells the reader they're now well equipped — each costs the reader time and delivers nothing. The full catalog is in `editing-standards`'s [AI writing detection](../editing-standards/references/ai-writing-detection.md) reference.

## Arguments

- `[path]` — the draft to check: a file, a folder, a diff, or text pasted into the prompt. Omitted → ask.
- `[--fix]` — don't audit. Read the existing `_reports/ai-check.md`, list what's in it, and ask which findings to fix. For coming back to a report you ran earlier.

## Method

1. **Establish the house rule first.** Where a project's style guide mandates something this command would otherwise flag — em-dash asides, a particular closing convention — the guide wins, and only mechanical overuse is reported. Say which rule you're applying.
2. **Count before judging.** Every tell is reported with a frequency and a location. "Three em dashes in a 400-word section" is actionable; "too many em dashes" is not.
3. **Sweep each category** below.
4. **Rewrite each flagged passage**, don't just flag it. A tell without a replacement is a complaint.
5. **Read the result aloud.** If you wouldn't say it to a colleague, it isn't fixed yet.
6. **Report**, then ask which rewrites to take (see below).

### What to check

**Punctuation rhythm**

- **Em-dash frequency and pattern** — the primary tell, and it is the frequency, not the character. More than one per page is a signal; two in a paragraph is strong. Flag the mechanical ones — the parenthetical aside used as a default rhythm — and leave the deliberate ones. Replace with commas, colons, parentheses, or a full stop.
- **The rule-of-three cadence** — three adjectives, three clauses, three list items, repeatedly. Real writing is lumpier.
- **Uniform sentence length** across a paragraph, with no short sentence anywhere.

**Vocabulary**

- Flag and replace: delve, leverage, robust, comprehensive, pivotal, seamless, transformative, intricate, nuanced, realm, landscape, underscore, harness, foster, myriad, plethora, crucial, vital, essential.
- Transition words used as connective filler: furthermore, moreover, additionally, notably, importantly, ultimately.
- Intensifiers that carry nothing: very, incredibly, truly, remarkably, significantly.

**Phrases**

- Openings: "In today's fast-paced world…", "In the ever-evolving landscape of…", "At its core…", "When it comes to…".
- Hedged throat-clearing: "It's worth noting that…", "It's important to remember that…", "That said…".
- Closings: "In conclusion…", "In summary…", "By following these steps, you'll be well on your way to…", "Whether you're a X, Y, or Z…".
- False balance: "It's not just X — it's Y", "This isn't about X; it's about Y".

**Structure**

- **Sections of near-identical length**, regardless of how much each topic warrants.
- **A summary paragraph restating what was just said**, adding nothing.
- **A closer that congratulates the reader** or tells them they're now equipped.
- **Every list the same length**, and lists where prose belongs.
- **A heading restated as the first sentence beneath it.**
- **Symmetry that the content doesn't justify** — every section with an intro, three bullets and a wrap-up.

**Substance**

- **Claims with nothing behind them** — "significantly improves performance", "a wide range of options" — where no number, source or specific follows. This is the tell that matters most in documentation: it reads fine and says nothing.
- **Explanations that restate the term** instead of defining it.
- **Balanced both-sides padding** where the document should take a position or state a fact.

### Report format

Write to `_reports/ai-check.md`, creating the directory if it doesn't exist — that's where every audit and report in this set goes — and summarise in chat. Tell the user the path when you're done.

```markdown
# AI check — <document>

**Date:** <YYYY-MM-DD> · **Words:** <N> · **House rule applied:** <guide, or "none — defaults"> · **Tell density:** <N per 1,000 words> · **Overall:** <X>/10

## Score change (previous → current)
| Metric | Previous | Current | Δ | Trend |
| --- | --- | --- | --- | --- |
| Overall | <prev/10 or N/A> | <cur/10> | <+N / -N / 0> | <▲ / ▼ / ■ / N/A> |

## Summary
| Category | Count | Severity |
| --- | --- | --- |
| Punctuation rhythm | <N> | <High / Medium / Low> |
| Vocabulary | <N> | |
| Phrases | <N> | |
| Structure | <N> | |
| Hollow claims | <N> | |

## Findings
| ID | Category | Tell | Status | Location |
| --- | --- | --- | --- | --- |

### A1 — <tell>
- **Now:** <the current text>
- **Why it reads as generated:** <the specific pattern>
- **Proposed:** <the rewrite>

## Deliberate — left alone
Patterns that match a tell but appear to be the author's or the house's choice.

| Pattern | Where | Why it was left |
| --- | --- | --- |

## Scorecard
Higher means it reads more like a person wrote it.

| Category | Score | Notes |
| --- | --- | --- |
| Punctuation rhythm | <X>/10 | |
| Vocabulary | <X>/10 | |
| Phrases | <X>/10 | |
| Structure | <X>/10 | |
| Substance | <X>/10 | |

```

### Output

- **Findings** in chat with a rewrite for each, grouped by category, worst-first.
- **Tell density** per 1,000 words, so a long document isn't flagged merely for being long.
- **The rewrites you were asked for**, and a note of what was deliberately left.

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
3. **Fix only what was named.** Never a default subset, never "the top three", never a severity threshold picked for the user. A rewrite they didn't choose stays in the report untouched.
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

- **This does not determine authorship**, and no report from it should be presented as evidence that something was generated. It finds patterns; that is all it can do.
- **The full editorial pass** — structure, accuracy, clarity, consistency → `/tw:doc-review`. This is one narrow sweep, and it's the last one to run, after the document is otherwise right.
- **The voice rules every document obeys** — sentences, claims, prose before code, concrete over vague, formatting, never hard-wrap → [`writing-standards`'s house-voice.md](../writing-standards/references/house-voice.md). A rewrite lands on those rules; this command only finds the passages that need one.
- **Set-wide voice consistency** → `/tw:style-check`.
- **A house rule beats every default here.** Where a project has decided on a convention this command would flag, the project wins.
- **Don't strip a writer's voice in the name of this.** A distinctive human sentence that happens to contain an em dash is not a finding; the target is mechanical padding, not personality.
