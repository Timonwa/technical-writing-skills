---
name: writing-standards
description: >-
  The discipline behind developer documentation — the Diátaxis quadrants (tutorial, how-to, reference, explanation) and picking the right one, audience-first structure, prose before code, concrete over vague, plain language, and the shared house-voice checklist. Applies the same standard every run rather than inheriting the surrounding docs' habits. Use on "write docs", "document this", "API reference", "how-to guide", "is this a tutorial or a guide".
---

# Technical writing

The discipline of developer-facing documentation. Every document serves one reader, pursuing one goal, in one mode — decide who and which mode before writing a word.

## Pick the Diátaxis quadrant first

Every doc is exactly one of four types ([diataxis.fr](https://diataxis.fr/)). Pick one per document and don't mix — a mixed-mode doc fails all of its readers at once:

- **Tutorial — a lesson (learning-oriented).** Walks a newcomer to a guaranteed success. You own every decision — versions, names, values — so the reader only follows. Minimize choices and explanation; link out for "why".
- **How-to guide — a recipe (problem-oriented).** Steps for a reader who already knows what they want ("rotate an API key"). Assume competence: start from prerequisites, skip the teaching, get to the goal.
- **Reference — a dictionary (information-oriented).** Describes the machinery: parameters, types, returns, defaults, errors — complete, accurate, structured for lookup (tables over prose). Never narrative, never persuasive.
- **Explanation — a discussion (understanding-oriented).** Why things are the way they are: design decisions, trade-offs, background. No steps, no API listings.

**Fix mixing by moving, not deleting** — a tutorial that pauses to discuss architecture moves that discussion to an explanation page and links it; a reference entry with a walkthrough spins it out as a how-to; a how-to that teaches basics links the tutorial instead.

## Establish audience, goal, and scope before writing

- **Name the audience** — "novice developers new to the framework" vs "experienced operators", and write to exactly that level. Copy that tries to serve everyone serves no one.
- **State the reader's goal** — what they can do after reading that they couldn't before. Lead with that goal, not the feature; answer "why should I care" before "how it works".
- **Bound the scope** — decide what's excluded and link to where it lives, instead of letting the doc sprawl.
- **Outline before drafting** anything longer than one page — headings first, prose second; a bad structure can't be edited into a good doc.
- **Don't inherit the surrounding docs' habits.** Match a project's terminology for its own concepts, but not its shape or its voice — if the existing content has drifted (mixed modes, vague claims, passive filler), matching it copies the drift. Where what's there conflicts with these rules, say so and follow the rules.

> **The checkable rules live in [references/house-voice.md](references/house-voice.md)** — sentences, claims, code, structure, formatting, and keeping a document true. Every writing skill links that one copy; this section is the reasoning behind it.

## Writing principles

- **Plain language, active voice, present tense** — sentences under 25 words, one idea per paragraph, define a term on first use and then use exactly that term everywhere (never "delete" here and "remove" there).
- **Show, don't just tell** — every concept gets a complete, runnable example with its expected output, and the common failure case where one exists. No pseudocode, no `<PLACEHOLDER>` values.
- **Prose before code** — every code block is introduced by a sentence saying what it does and when to use it. A reader should understand the page with the code blocks collapsed.
- **Concrete over vague** — real numbers, names, and timeframes ("responds in under 200 ms", not "fast"; "retries 3 times", not "retries a few times"). If a claim can't be made specific, it's probably filler — cut it.
- **Progressive disclosure** — simple before complex, quickstart before deep dive; link advanced topics instead of inlining them, so beginners aren't buried.
- **Scannable structure** — descriptive headings that match what readers search for, bullets for 3+ items, tables for parameter/option/error matrices.
- **Accuracy is non-negotiable** — verify symbol names, signatures, defaults, and versions against the source, never from memory. Wrong docs are worse than no docs.

## Style

- **Address the reader as "you"**; use "we" only for genuinely shared actions; avoid "I" outside opinionated pieces. Conversational but professional.
- **Formatting has semantics** — **bold** for UI elements and buttons, `code` for commands, identifiers, and file names, _italics_ sparingly for emphasis.
- **Never hard-wrap prose** — one physical line per paragraph or list item; break only where Markdown semantics require it.

## Example

A how-to opening that obeys the rules — one mode, goal first, prose before code, concrete values, expected output:

````markdown
## Rotate an API key

Rotate a key when it may have leaked or on your regular schedule. Rotation issues a new key immediately; the old key keeps working for 24 hours so deployed clients don't break.

Create the replacement key with the CLI:

```bash
acme keys rotate --name production
```

The command prints the new key once — store it in your secret manager now, it is not retrievable later:

```text
Rotated key "production". New key: ak_live_9f2c… (old key expires in 24h)
```
````

Note what it doesn't do: no history of why API keys exist (explanation), no full flag listing (reference), no hand-holding about installing the CLI (tutorial) — those are links, not sections.

## Boundaries

This skill is the shared discipline every other one builds on. Each of them adds the rules specific to its own shape and links back here rather than restating the common ground.

**Before writing**

- Deciding which documents a set needs, how they're grouped, and in what order → `docs-planning`.
- Getting the facts out of an engineer, an expert, or a spec → `sme-interviews`.
- The project's own terminology, capitalization and naming decisions → `style-guide`.

**Writing a document**

- Docs-site page mechanics — components and imports, navigation registration, link integrity when moving pages, page splitting, next-steps footers → `developer-docs`.
- Help-centre guides and user guides for non-technical end users → `user-guides`.
- Runbooks, process docs, onboarding and other internal documentation → `internal-docs`.
- Project READMEs → `readmes`. API references and the pages around them → `api-reference`. Release notes and changelogs → `release-notes`.

**The parts of a document that aren't prose**

- Code examples — completeness, testing, placeholder conventions, safety → `code-samples`.
- Screenshots, diagrams, flowcharts and alt text → `images-and-diagrams`.

**After writing**

- Tightening and polishing existing prose, including de-AI-ifying it → `editing-standards`.
- Writing so it survives translation, and running a multi-language set → `localization`.
- Auditing an existing docs site → `docs-audit`.

**Out of scope** — standalone tutorials and blog articles are a different shape from a docs page (narrative, published off-repo), and marketing or conversion copy is a different craft with a different goal.
