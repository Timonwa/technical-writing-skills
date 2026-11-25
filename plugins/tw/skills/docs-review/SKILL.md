---
name: docs-review
description: >-
  Manually invoked. Editorial review of one document, a folder or a diff — a docs page, a guide, a reference entry, a runbook — working down the five levels of edit: substantive, technical accuracy, line, copy and proof. Returns numbered findings with a proposed replacement for each, a batched list of questions only the author or an expert can settle, and a record of what was verified against a real source. Reports first, then asks which findings to fix. Use on "review this doc", "check this docs draft", "is this page ready to publish".
argument-hint: '[path] [--fix]'
model: opus
effort: high
disallowed-tools: Edit, NotebookEdit
disable-model-invocation: true
---

# Doc review

**Run this only when the user asks for it by name. It reports first, and edits nothing until the user picks findings to fix (`--fix`).**

A **manually-invoked editorial review** of one specific document. Where the audits ask about a whole set, this goes deep on one thing: is this document doing its job, is it true, and can a reader follow it?

## Voice and audience come from the writing's own guide

Before reviewing, find the project's style guide and conventions and read them:

- **In a codebase:** the style guide and conventions the project's `AGENTS.md` names, or its contributing docs.
- **In a chat app:** the style guide in the project's files, or attached to the conversation.
- **Otherwise:** ask whether one exists before concluding there isn't one.

Voice, person, tone, terminology and formatting come from that guide. Where it settles something this skill also covers, the guide wins; where it's silent or there isn't one, `docs-standards` applies without asking, and a page that departs from it is a finding.

The editing craft is `docs-editing-standards`; the rules every piece obeys are `docs-writing-standards`; the structure for the page's type comes from the skill for that type.

## Ask first

Read the answers from the request, the arguments, the document itself, the project and its guide first; ask only what's missing. Ask with the app's question tool where it has one, so the choices can be picked; otherwise as a numbered list answered by number. Offer choices where the answers are known and a short typed answer otherwise; where the project records a default, show it and ask whether to use it. Record the answers in the report's header.

1. **Fresh review, or fix from the last report?** fresh review · fix from the page's report (`--fix`).
2. **Which document?** a file · a folder · a diff. The path.
3. **What type is it?** tutorial · how-to · reference · explanation · runbook or other internal doc · README · release note · user guide.
4. **Who reads it, and what should they be able to do afterward?** Short answer.
5. **What can its claims be checked against?** the code · the running product · a spec or schema · the tests · nothing — mark claims unverified.
6. **Which product version does it describe?** Short answer.
7. **Can the rendered page be previewed?** a preview URL or local build · source only — the proof pass then notes what it couldn't see.

## Arguments

- `[path]` — a file, a folder, or a diff. Omitted → review the current changes if there are any, otherwise ask.
- `[--fix]` — don't audit. Read the existing report for the page given, list what's in it, and ask which findings to fix. With no path, list the docs-review reports on disk and ask which. For acting on a report from an earlier run.

## Method

**Work down the levels in order, and don't skip ahead.** There is no point line-editing a section that's about to move, or checking a comma in a claim that turns out to be false.

1. **Establish the document's job** — its type, its audience, and what the reader should be able to do afterward. Ask if it isn't clear; every judgement below depends on it.
2. **Load the project's standard** — its style guide, terminology list or glossary. Look for one, and ask before concluding there isn't one; a team's guide often lives outside the repo. The author is entitled to be edited to the house standard, not to your instincts.
3. **Read it once without editing.** Mark problems; fix nothing yet. Editing while first reading produces line edits on paragraphs that should have been cut.
4. **Run the five levels**, collecting findings.
5. **Separate the fixes from the questions.** Corrections you can make go in the findings; facts only the author or an expert can settle go in a batched question list. Never close a factual gap by writing the plausible version.
6. **Present the findings**, each with its proposed replacement, then ask which to fix (see below).

### The five levels

**1. Substantive — is this the right document?** One need per page — a tutorial, a how-to, a reference or an explanation — not a drift between them; a page that teaches and then turns into a reference serves neither reader. The order is right for the reader, and the answer sits above the point where someone gives up and opens a support ticket. What's missing: prerequisites, the failure case, the expected result, limits, permissions, what to do next. What's present that serves the author rather than the reader, and what belongs on a different page — background that interrupts a procedure, a reference table inside a tutorial.

**2. Technical accuracy — is it true?** Every name, signature, value, default, version, path, UI label and error string checked against the real source: the running product, the code, the schema, the tests. **Run the commands and the code** — a sample that hasn't been run is a claim, not an example. Check the claims that don't look technical too — timeframes, limits, prices, "automatically", "instantly", "always". What the page describes exists today: planned behaviour, roadmap items and "coming soon" don't belong on a docs page. Flag what you couldn't verify rather than smoothing over it.

**3. Line — can the reader follow it?** The documentation voice holds: the reader as "you", present tense for behaviour, imperatives for instructions, the writer kept out. One idea per sentence; over 25 words split or listed; information front-loaded; unclear pronouns fixed; no minimisers or marketing words — "simply", "just", "easy", "seamless", "powerful" — on a page someone opened because they're stuck; passive converted to active where there's a real actor; nominalizations turned back into verbs; vague quantities replaced with real ones or marked as questions. Steps are one action each, in order, with where before what ("In **Settings**, select **Billing**").

**4. Copy — is it consistent?** One term per concept, matching the glossary and the UI exactly, including the capitalization of product and feature names; hyphenation, numbers and dates to the guide, including in headings, tables and captions. Heading levels sequential and parallel; task headings start with a bare infinitive and use the words readers search for. Lists parallel, numbered for a sequence. UI labels in bold, exactly as the interface shows them; italics for a term being introduced. Code styling on identifiers, paths, commands, filenames and values and nowhere else; every code fence labelled with its language; placeholders in the set's one convention. No "above" or "below", no colour as the only cue, a sentence introducing every table.

**5. Proof — will it render?** Links and anchors resolve, including links to other versions of the docs; images load, have alt text, and still show what the text claims; code blocks render with their highlighting; tables don't break at narrow widths; frontmatter valid — title, description, and any navigation or version fields the site needs; typos and doubled words. **Read the rendered page, in the site's preview, not the source file.**

### Severity

- **BLOCKER** — do not publish:
  - something untrue — a wrong default, a wrong error code, a wrong version;
  - a missing warning on an irreversible action — deleting data, rotating a key, cancelling a plan;
  - an example that doesn't work when copied as written;
  - a secret, a real customer's data or an internal hostname on the page or in a screenshot.
- **MAJOR** — the reader is likely to fail or be misled: a missing step or prerequisite, a buried answer, an undefined term on a page for newcomers, a structure wrong for the type, a reference page with no description of the error responses.
- **MINOR** — friction: wordiness, a passive sentence with a clear actor, an unlabelled fence, a heading that isn't parallel with its siblings.
- **NIT** — preference, offered once and not argued.

### Report format

The report follows the template in [references/output-format.md](references/output-format.md): a header recording the scope answers, the score change, the findings with a proposed replacement each, the questions for the author, what was verified, and the scorecard by level. It goes to `_reports/docs-review-<page-slug>.md`, one report per page — the slug is the page's path under the docs folder with slashes as hyphens (`docs/guides/rotate-keys.md` → `_reports/docs-review-guides-rotate-keys.md`).

### Output

- **Findings** in chat, worst-first, each with a proposed replacement.
- **The question list**, batched — never a series of separate asks.
- **The fixes you were asked for**, and a summary of what changed and what was left for the author.

## Re-running it

**Every run is a complete, fresh audit.** Never skip a check, and never treat something as absent, because an earlier report said it was resolved. Code regresses, pages get reverted, a fix in one place gets undone in another — a previous report is not evidence about the state of anything today.

- **Report current state only.** What's in the report is what's true now, checked this run.
- **Overwrite the file.** No resolved history accumulates in it. A report dragging a hundred past findings along spends the reader's tokens and attention on problems that are gone.
- **Number findings from 1 each run.** IDs identify a finding inside this report, for the conversation you're having about this run — not across runs.
- **Read the previous report for its scores, and nothing else.** The overall and per-category scores go in the trend row so a reader can see whether the document is improving or degrading. Its findings are never read — those are re-derived from source every run.
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

- **The whole set rather than one document** → `/docs-audit` for defects, `/content-audit` for shape, `/style-check` for consistency.
- **Does it sound machine-written** → `/docs-ai-check`. That pass is not run here by default; ask for it.
- **Articles, essays and newsletter issues** → `/review` in [content-writing-skills](https://github.com/Timonwa/content-writing-skills).
- **Writing from scratch** — this reviews what exists. A finding that the document should be several documents is raised, not acted on.
- **The author owns the document.** On technical content they usually know something you don't; findings are proposals, and a rejected finding is not re-argued.
