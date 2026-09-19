---
name: doc-review
description: >-
  Manually invoked. Editorial review of one document, a folder or a diff, working down the five levels of edit — substantive, technical accuracy, line, copy and proof — returning numbered findings with a proposed replacement for each, a batched list of questions only the author or an expert can settle, and a record of what was verified against a real source. Report-only by default; --apply edits the approved findings. Use on "review this doc", "check this draft", "is this ready to publish".
argument-hint: '[path] [--apply]'
model: opus
effort: high
disable-model-invocation: true
---

# Doc review

A **manually-invoked editorial review** of a specific document. Where the audits ask about a whole set, this goes deep on one thing: is this document doing its job, is it true, and can a reader follow it?

The standard is `editing-standards`, plus `writing-standards`' house-voice.md and the skill for whichever document type this is.

## Arguments

- `[path]` — a file, a folder, or a diff. Omitted → review the current changes if there are any, otherwise ask.
- `[--apply]` — after presenting the findings, apply the ones approved. Without it, the review is report-only.

## Method

**Work down the levels in order, and don't skip ahead.** There is no point line-editing a section that's about to move, or checking a comma in a claim that turns out to be false. Each level is only worth running once the level above it is settled.

1. **Establish the document's job** — its type, its audience, and what the reader should be able to do afterward. Ask if it isn't clear; every judgement below depends on it.
2. **Load the project's standard** — its style guide, terminology list or glossary, if one exists. Editing to a house standard is a different job from editing to your instincts, and the author is entitled to the house standard.
3. **Read it once without editing.** Mark problems; fix nothing yet. Editing while first reading produces line edits on paragraphs that should have been cut.
4. **Run the five levels**, collecting findings.
5. **Separate the fixes from the questions.** Corrections you can make go in the findings; facts only the author or an expert can settle go in a batched question list. Never close a factual gap by writing the plausible version.
6. **Present the findings**, each with its proposed replacement. With `--apply`, confirm which to apply before touching the file; without it, stop here.

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

Present in chat for a single document. For a folder or a large diff, also write `_reports/review.md`.

```markdown
# Review — <document>

**Date:** <YYYY-MM-DD> · **Type:** <document type> · **Audience:** <who> · **Standard:** <guide, or "none found"> · **Verdict:** <Ready / Ready with fixes / Needs rework>

## Findings
| ID | Level | Severity | Issue | Location |
| --- | --- | --- | --- | --- |
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
```

### Output

- **Findings** in chat, worst-first, each with a proposed replacement.
- **The question list**, batched — never a series of separate asks.
- **`_reports/review.md`** for a folder or a large diff.
- With **`--apply`**: the approved findings applied, and a summary of what changed and what was left for the author.

## Boundaries

- **The whole set rather than one document** → `/tw:docs-audit` for defects, `/tw:content-audit` for shape, `/tw:style-check` for consistency.
- **Does it sound machine-written** → `/tw:ai-check`. That pass is not run here by default; ask for it.
- **Writing from scratch** — this reviews what exists. A finding that the document should be several documents is raised, not acted on.
- **The author owns the document.** On technical content they usually know something you don't; findings are proposals, and a rejected finding is not re-argued.
