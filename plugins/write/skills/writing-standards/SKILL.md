---
name: writing-standards
description: >-
  The rules under every piece of writing, documentation or content — naming the reader, the goal and the scope before drafting, plain language, concrete claims whose certainty matches the evidence, crediting what's borrowed, structure for readers who scan, accessible formatting, and keeping a piece true, with the shared checklist every writing skill links. Voice, person and tone come from the project's style guide or the publication's writing guide. Use on "write this", "draft", "is this clear", "make this plainer".
---

# Writing standards

The discipline every piece of writing shares, whatever it is: a docs page, a README, a blog post, an essay, a newsletter issue. A reader arrives with a reason and leaves the moment the writing stops serving it. Decide who that reader is and what they came for before writing a word.

## Voice and audience come from the writing's own guide

Before applying this skill, find the guide the writing answers to and read it: for documentation, the project's style guide and the conventions its `AGENTS.md` or contributing docs record; for content, the publication's `writing-guide.md` and `profile.md` (where the user's `CLAUDE.md` says they live, otherwise the project's `publications/` folder). Voice, person, tone, terminology, formatting choices and who the reader is come from that guide, never from this skill.

- Where the guide settles something this skill also covers, the guide wins.
- Where there's no guide: for documentation, the documentation voice in `tw:docs-standards` is the default, applied without asking; for content, ask who the reader is and what the piece is for, and offer to build a guide with `cw:style-guide`.
- **For documentation, also apply `tw:docs-standards`** — its page rules (one need per page, procedures, accessible pages, code on the page) hold even where the project has a guide, which overrides it only where it decides. **For content, also apply the publication's writing guide and the content-writing skills (`cw`).**

## Craft and voice

**Judge the craft** — whether a sentence can be followed, whether a claim is true and credited, whether a reader who scans finds what they came for.

**Take the voice from the guide.** Person ("you", "we", "I"), tone, humor, contractions, how much of the writer shows — those are the writing's identity, and they differ on purpose between a reference page and a personal essay. A voice stays constant while its tone shifts with the reader's situation ([Mailchimp](https://styleguide.mailchimp.com/voice-and-tone/)); the guide says which.

## Establish the reader, the goal and the scope before writing

- **Name the reader** — specifically enough to decide what they already know. Writing that tries to serve everyone serves no one.
- **State what the reader leaves with** — what they can do, understand or decide afterwards that they couldn't before. Lead with that goal, not with the feature, the topic or the background.
- **Bound the scope** — decide what's excluded and link to where it lives, instead of letting the piece sprawl.
- **Outline before drafting** anything longer than a page — headings first, prose second. A bad structure can't be edited into a good piece.
- **Don't inherit the surrounding writing's habits.** Match the established terms for the subject, but not its shape or its voice — if what's already published has gone vague, padded or inconsistent, copying it copies the drift. Where what's there conflicts with the guide or these rules, say so and follow the guide and the rules.

> **The checkable rules are in [references/house-voice.md](references/house-voice.md)** — sentences, claims, credit and rights, structure, formatting, and keeping a piece true.

## Writing principles

- **Plain language, active voice** — check sentences over about 25 words and split them unless the length is deliberate, vary sentence length, keep paragraphs short, and define a term on first use, then use exactly that term ([GOV.UK](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-language/)). Plain language serves specialists too: it lets them understand faster. The international standard, [ISO 24495-1](https://www.iso.org/standard/78907.html), tests whether readers can find what they need, understand it and use it.
- **Put the most important thing first** — the answer, the result or the point in the opening lines, the qualification after ([GOV.UK](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-structure/), [Microsoft](https://learn.microsoft.com/en-us/style-guide/brand-voice-above-all-simple-human)). A piece that opens on a story states why it matters by the second or third paragraph.
- **Concrete over vague** — real numbers, names and timeframes. If a claim can't be made specific, it's probably filler.
- **Certainty matches the evidence** — say plainly what's established, and "suggests" for what one study found. Overclaiming is a factual error, not a style choice.
- **Show, don't assert** — evidence beside every claim that matters: a runnable example, a figure, a quote, a source, an anecdote with a point.
- **Credit what you borrow** — words, ideas, data and images, linked to their originator, within their licence.
- **Progressive disclosure** — simple before complex, the main path before the edge cases; link the advanced topic rather than burying a beginner in it.
- **Structure for scanning** — most readers scan before they read. Headings that say what's under them in the reader's words, bullets for three or more parallel items, tables for anything compared across the same attributes.
- **True, and traceable** — check names, figures, quotes and claims against the original source, never memory. A wrong fact costs the reader more than a missing one.

## Formatting

- **Formatting has meaning** — what bold and italics mark is the guide's decision, applied consistently; `code` for commands, identifiers and file names. Decoration that carries no meaning is noise to a screen reader and a scanner.
- **Headings in order** — no skipped levels, and one H1 where the piece is kept as Markdown (a CMS usually supplies the title as the H1); link text that makes sense on its own, never "click here".
- **Never hard-wrap prose** where the piece is kept as Markdown — one physical line per paragraph or list item; break only where Markdown requires it.

## Worked examples

A documentation page: `tw:docs-standards`. An article: the content-writing skills (`cw`). Before-and-after edits: `tw:editing-standards` and `cw:editing-standards`.

## Boundaries

- **Documentation** — the four documentation types, the documentation voice, procedures, accessible docs pages → `tw:docs-standards`.
- **Content** — articles, newsletters and social posts for a publication → the content-writing skills (`cw`).
- **The guide this skill defers to** — a docs style guide → `tw:style-guide`; a publication's writing guide → `cw:style-guide`.
- **Getting facts out of an expert or a source** → `tw:sme-interviews` or `cw:sme-interviews`.
- **Code in a piece** → `write:code-samples`. **Screenshots, photos, diagrams and alt text** → `tw:images-and-diagrams` or `cw:images-and-diagrams`.
- **Tightening a finished draft** → `tw:editing-standards` or `cw:editing-standards`; **the machine-written sweep** → `/write:ai-check`.
- **Marketing and conversion copy** — landing pages, ads, sales sequences — is a different craft with a different goal, and out of scope.
