---
name: docs-ai-check
description: >-
  Manually invoked. Checks whether writing (a docs page, a folder of pages or a diff) reads as machine-written, and reports the specific tells rather than a verdict: citations that don't hold, em-dash frequency and pattern, blacklisted vocabulary and phrases, the structural tells (uniform section lengths, lists of exactly three, summaries that restate, closers that congratulate), hollow claims, and rhythm. Returns a rewrite for each flagged passage, then asks which to apply.
argument-hint: '[path] [--fix]'
disallowed-tools: Edit, NotebookEdit
disable-model-invocation: true
---

# AI check

**Run this only when the user asks for it by name. It reports first, and edits nothing until the user picks findings to fix (`--fix`).**

A **manually-invoked sweep for the fingerprints of machine-written prose**, on anything published under a person's name.

**It reports tells, not a verdict.** No one can determine whether text was generated, and claiming to is both wrong and harmful — human writers use em dashes, and careful AI-assisted drafts carry none of these markers. What this command does is find the specific patterns that make prose read as generated, each with its location and a rewrite. Whether the draft then gets changed is the author's call.

These patterns matter for a reason beyond provenance: nearly all of them are padding. A sentence that exists to transition, a paragraph that restates the heading, a closer that tells the reader they're now well equipped — each costs the reader time and delivers nothing. The full catalog is in [the AI writing detection reference](../docs-writing-standards/references/ai-writing-detection.md), and worked examples are in [references/examples.md](references/examples.md).

## Voice and audience come from the writing's own guide

Before applying this skill, find the guide the writing answers to and read it — the project's style guide and conventions:

- **In a codebase:** what the project's `AGENTS.md` names (its style guide), or, for a guide kept outside the repo, what the user's personal agent instructions name; otherwise the contributing docs.
- **In a chat app:** the project's files, or files attached to the conversation.
- **Otherwise:** ask.

Voice, person, tone, terminology, formatting choices and who the reader is come from that guide, never from this skill.

- Where the guide settles something this skill also covers, the guide wins.
- Where there's no guide, the documentation voice in `docs-standards` is the default.
- When a guide changes: in a codebase, save the file where it was found; in a chat app, give the user the updated file to replace in the project.

## Ask first

Read the answers from the request, the arguments and the guide first; ask only what's missing. Ask with the app's question tool where it has one, so the choices can be picked; otherwise as a numbered list answered by number. Offer choices where the answers are known and a short typed answer otherwise. Record the answers in the report's header.

1. **What should be checked?** A docs page · a folder of pages · a diff · pasted text. The path, or the text itself.
2. **Which guide does it answer to?** The project's style guide (path) · none, use the defaults.
3. **Any convention the guide doesn't record that should be left alone?** Em-dash asides · a fixed sign-off · a recurring opener · none. Short answer for anything else.

## Arguments

- `[path]` — what to check: a file, a folder, a diff, or text pasted into the prompt. Omitted → ask.
- `[--fix]` — don't audit. Read the existing report for the page given, list what's in it, and ask which findings to fix. With no path, list the docs-ai-check reports on disk and ask which. For acting on a report from an earlier run.

## Method

1. **Establish the house rule first.** Read the guide the draft answers to — the project's style guide — and ask before concluding there isn't one; a guide that lives outside the repo still governs the draft. Where it mandates something this command would otherwise flag — em-dash asides, a particular closing convention — the guide wins, and only mechanical overuse is reported. Say which rule you're applying.
2. **Count before judging.** Every tell is reported with a frequency and a location. "Three em dashes in a 400-word section" is actionable; "too many em dashes" is not.
3. **Sweep each category** below.
4. **Rewrite each flagged passage**, don't just flag it. A tell without a replacement is a complaint.
5. **Read the result aloud.** If you wouldn't say it to the reader in person, it isn't fixed yet.
6. **Report**, then ask which rewrites to take (see below).

### What to check

**Punctuation rhythm**

- **Em-dash frequency and pattern** — one tell among several, judged by density per 1,000 words, never by the character. More than about 3 per 1,000 words is a signal; more than about 6, or two in one paragraph, is strong. It's a working threshold, not a published standard, and it's the one the Tell density score uses. Flag the mechanical ones — the parenthetical aside used as a default rhythm — and leave the deliberate ones. Replace with commas, colons, parentheses, or a full stop.
- **The rule-of-three cadence** — three adjectives, three clauses, three list items, repeatedly. Real writing is lumpier.
- **Uniform sentence length** across a paragraph, with no short sentence anywhere.

**Vocabulary**

- Flag and replace: delve, leverage, robust, comprehensive, pivotal, seamless, transformative, intricate, nuanced, realm, landscape, underscore, harness, foster, myriad, plethora, crucial, vital.
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
- **Markdown where prose belongs** — bold scattered through sentences, headings on a three-paragraph answer, bullets breaking up an argument.

**Substance**

- **A citation, quote or study that doesn't exist or doesn't say what the piece claims** — open every source and check it. This is the tell that misleads rather than merely pads, and checking sources is more reliable than any style signal ([Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing)). Vague attribution — "experts say", "studies show" — belongs here too.
- **Claims with nothing behind them** — "significantly improves performance", "a wide range of options", "this changed everything for me" — where no number, source, example or specific follows. This is the tell that matters most: it reads fine and says nothing.
- **Explanations that restate the term** instead of defining it.
- **Balanced both-sides padding** where the piece should take a position or state a fact.

### Report

Write the report from the template in [references/output-format.md](references/output-format.md), every field filled or left blank, never removed, and summarise the findings in chat:

- **Documentation:** `_reports/docs-ai-check-<page-slug>.md` (`docs/guides/webhooks.md` → `_reports/docs-ai-check-guides-webhooks.md`).

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

Nothing is edited before step 2 is answered. The editing tools are unavailable while this command produces the report; they return for the turn after your question, once the answer is in.

### Fixing from an earlier report

`--fix` skips the audit entirely and works from the report already on disk, whatever its age — ten minutes old, an hour, a month. It's for acting on findings the user has already read rather than generating a new set; re-auditing would renumber them mid-conversation.

- **Say how old the report is** — its date, and how long ago that was. Someone deciding what to fix needs to know whether they're looking at today's picture or last month's.
- **Verify each finding still exists before fixing it.** Check the actual location; don't trust the report's description of it. Between the audit and now, the page may have changed, someone else may have fixed it, or the thing it described may have moved.
- **Drop anything that's no longer there** and say so. That's a stale entry, not a fix, and it shouldn't be counted as one.
- **Check cheaply whether the content has moved on** — compare the report's date against file modification times, or the version-control log for the paths it covers. That's a count of what changed, not a re-audit, and it costs seconds. If a lot has changed, say how much and offer a fresh audit; the call is theirs, not yours. Where there's no history or timestamps to compare against, say you can't tell rather than implying you checked.
- **If no report exists**, say so and offer to run the audit rather than guessing at what to fix.

Everything else is unchanged: list the findings, ask which, fix only those, update the report, re-score.

## Boundaries

- **This does not determine authorship**, and no report from it should be presented as evidence that something was generated. It finds patterns; that is all it can do.
- **The full editorial pass** — structure, accuracy, clarity, consistency → `/docs-review`. This is one narrow sweep, and it's the last one to run, after the piece is otherwise right.
- **The rules every piece obeys** — sentences, claims, examples, concrete over vague, formatting, never hard-wrap → [`docs-writing-standards`'s house-voice.md](../docs-writing-standards/references/house-voice.md). A rewrite lands on those rules; this command only finds the passages that need one.
- **Voice consistency across a docs set** → `/style-check`.
- **A house rule beats every default here.** Where a project or publication has decided on a convention this command would flag, its guide wins.
- **Don't strip a writer's voice in the name of this.** A distinctive human sentence that happens to contain an em dash is not a finding, and neither is a first-person aside, a joke or a sign-off the publication always uses; the target is mechanical padding, not personality.
