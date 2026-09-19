---
name: ai-check
description: >-
  Manually invoked. Checks whether a draft reads as machine-written and reports the specific tells rather than a verdict — em-dash frequency and pattern, blacklisted vocabulary and phrases, the structural tells (uniform section lengths, lists of exactly three, summaries that restate, closers that congratulate), hollow claims, and rhythm. Returns a rewrite for each flagged passage. Report-only by default; --apply rewrites the approved ones.
argument-hint: '[path] [--apply]'
model: opus
effort: high
disable-model-invocation: true
---

# AI check

A **manually-invoked sweep for the fingerprints of machine-written prose**, on anything published under a person's name.

**It reports tells, not a verdict.** No one can determine whether text was generated, and claiming to is both wrong and harmful — human writers use em dashes, and careful AI-assisted drafts carry none of these markers. What this command does is find the specific patterns that make prose read as generated, each with its location and a rewrite. Whether the draft then gets changed is the author's call.

In documentation these patterns matter for a reason beyond provenance: nearly all of them are padding. A sentence that exists to transition, a paragraph that restates the heading, a closer that tells the reader they're now well equipped — each costs the reader time and delivers nothing. The full catalog is in `editing-standards`'s [AI writing detection](../editing-standards/references/ai-writing-detection.md) reference.

## Arguments

- `[path]` — the draft to check: a file, a folder, a diff, or text pasted into the prompt. Omitted → ask.
- `[--apply]` — after presenting findings, rewrite the approved passages. Without it, report-only.

## Method

1. **Establish the house rule first.** Where a project's style guide mandates something this command would otherwise flag — em-dash asides, a particular closing convention — the guide wins, and only mechanical overuse is reported. Say which rule you're applying.
2. **Count before judging.** Every tell is reported with a frequency and a location. "Three em dashes in a 400-word section" is actionable; "too many em dashes" is not.
3. **Sweep each category** below.
4. **Rewrite each flagged passage**, don't just flag it. A tell without a replacement is a complaint.
5. **Read the result aloud.** If you wouldn't say it to a colleague, it isn't fixed yet.
6. **Report.** With `--apply`, confirm which rewrites to take before editing.

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

Present in chat. For a folder or a large draft, also write `_reports/ai-check.md`.

```markdown
# AI check — <document>

**Date:** <YYYY-MM-DD> · **Words:** <N> · **House rule applied:** <guide, or "none — defaults"> · **Tell density:** <N per 1,000 words>

## Summary
| Category | Count | Severity |
| --- | --- | --- |
| Punctuation rhythm | <N> | <High / Medium / Low> |
| Vocabulary | <N> | |
| Phrases | <N> | |
| Structure | <N> | |
| Hollow claims | <N> | |

## Findings
| ID | Category | Tell | Location |
| --- | --- | --- | --- |

### A1 — <tell>
- **Now:** <the current text>
- **Why it reads as generated:** <the specific pattern>
- **Proposed:** <the rewrite>

## Deliberate — left alone
Patterns that match a tell but appear to be the author's or the house's choice.

| Pattern | Where | Why it was left |
| --- | --- | --- |
```

### Output

- **Findings** in chat with a rewrite for each, grouped by category, worst-first.
- **Tell density** per 1,000 words, so a long document isn't flagged merely for being long.
- With **`--apply`**: the approved rewrites applied, and a note of what was deliberately left.

## Boundaries

- **This does not determine authorship**, and no report from it should be presented as evidence that something was generated. It finds patterns; that is all it can do.
- **The full editorial pass** — structure, accuracy, clarity, consistency → `/tw:doc-review`. This is one narrow sweep, and it's the last one to run, after the document is otherwise right.
- **Set-wide voice consistency** → `/tw:style-check`.
- **A house rule beats every default here.** Where a project has decided on a convention this command would flag, the project wins.
- **Don't strip a writer's voice in the name of this.** A distinctive human sentence that happens to contain an em dash is not a finding; the target is mechanical padding, not personality.
