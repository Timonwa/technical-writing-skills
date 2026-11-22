---
name: writing-standards
description: >-
  The rules under every piece of writing, documentation or content — naming the reader, the goal and the scope before drafting, plain language, concrete claims whose certainty matches the evidence, crediting what's borrowed, structure for readers who scan, accessible formatting, and keeping a piece true, with the shared checklist every writing skill links. Voice, person and tone come from the project's style guide or the publication's writing guide. Use on "write this", "draft", "is this clear", "make this plainer".
---

# Writing standards

The discipline every piece of writing shares, whatever it is: a docs page, a README, a blog post, an essay, a newsletter issue. A reader arrives with a reason and leaves the moment the writing stops serving it. Decide who that reader is and what they came for before writing a word.

## Voice and audience come from the writing's own guide

Before applying this skill, find the guide the writing answers to and read it — for documentation, the project's style guide and conventions; for content, the publication's `profile.md` and `writing-guide.md`:

- **In a codebase:** what the project's `AGENTS.md` names (its style guide, or a publication's folder), or, for a guide kept outside the repo, what the user's personal agent instructions name (such as `~/.claude/CLAUDE.md`); otherwise the contributing docs or the project's `publications/` folder.
- **In a chat app:** the project's files (a Claude Project's knowledge, or the equivalent elsewhere), or files attached to the conversation.
- **Otherwise:** ask.

Voice, person, tone, terminology, formatting choices and who the reader is come from that guide, never from this skill.

- Where the guide settles something this skill also covers, the guide wins.
- Where there's no guide: for documentation, the documentation voice in `tw:docs-standards` is the default, applied without asking; for content, ask who the reader is and what the piece is for, and offer to build a guide with `cw:style-guide`.
- When a guide changes: in a codebase, save the file where it was found; in a chat app, give the user the updated file to replace in the project.
- **For documentation, also apply `tw:docs-standards`** — its page rules (one need per page, procedures, accessible pages, code on the page) hold even where the project has a guide, which overrides it only where it decides. **For content, also apply the publication's writing guide and the content-writing skills (`cw`).**

## Ask first

Read the answers from the request, the guide, the publication's `profile.md` and, for content, the topic's `brief.md` first; ask only what's missing. Ask with the app's question tool where it has one, so the choices can be picked; otherwise as a numbered list answered by number. Offer choices where the answers are known and a short typed answer otherwise; where the profile or the brief already has an answer, show it and ask whether to use it. For content, record the answers in the topic's `brief.md` so the next skill doesn't ask again.

1. **What is it?** Docs: tutorial · how-to · reference · explanation · README. Content: blog post · newsletter issue · social posts · essay.
2. **Where does it go?** A docs page (path) · a topic folder, written into the format's own file: `blog.md`, `newsletter.md` or `social.md`.
3. **Who is the reader, and what do they already know?** Short answer.
4. **What does the reader leave with?** One sentence: what they can do, understand or decide afterwards.
5. **What's left out, and where does it live?** Short answer: each excluded topic and the page or piece that covers it, or none.
6. **Which guide does it answer to?** The publication's `writing-guide.md` or the project's style guide (path) · none yet, so build one with `cw:style-guide`. Not asked for documentation: with no guide in the project, the documentation defaults apply.

## Craft and voice

**Judge the craft** — whether a sentence can be followed, whether a claim is true and credited, whether a reader who scans finds what they came for.

**Take the voice from the guide.** Person ("you", "we", "I"), tone, humor, contractions, how much of the writer shows — those are the writing's identity, and they differ on purpose between a reference page and a personal essay. A voice stays constant while its tone shifts with the reader's situation ([Mailchimp](https://styleguide.mailchimp.com/voice-and-tone/)); the guide says which.

## Before drafting: the reader, the goal and the scope

- **Name the reader** — specifically enough to decide what they already know. Writing that tries to serve everyone serves no one.
- **State what the reader leaves with** — what they can do, understand or decide afterwards that they couldn't before. Lead with that goal, not with the feature, the topic or the background.
- **Bound the scope** — decide what's excluded and link to where it lives, instead of letting the piece sprawl.
- **Outline before drafting** anything longer than a page — headings first, prose second. A bad structure can't be edited into a good piece.
- **Don't inherit the surrounding writing's habits.** Match the established terms for the subject, but not its shape or its voice — if what's already published has gone vague, padded or inconsistent, copying it copies the drift. Where what's there conflicts with the guide or these rules, say so and follow the guide and the rules.

> **The checkable rules are in [references/house-voice.md](references/house-voice.md)** — sentences, claims, credit and rights, structure, formatting, and keeping a piece true.

## Plain language

- **Sentences averaging 15–20 words**, mixed short and long — the average the [Plain English Campaign](https://mstrust.org.uk/sites/default/files/plain_english_campaign_how_to_write_plain.pdf) recommends, which is an average, not a length for every sentence. Check any sentence over about 25 words and split it unless the length is deliberate ([GOV.UK](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-language/)).
- **Paragraphs of no more than 5 sentences** ([GOV.UK](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-language/)), each doing one job.
- **Active voice, everyday words, a term defined on first use and then used exactly.** Plain language serves specialists too: it lets them understand faster. The international standard, [ISO 24495-1](https://www.iso.org/standard/78907.html), tests whether readers can find what they need, understand it and use it.
- **A reading level the reader can manage.** For a general audience, aim for a reading age of about 9 — UK government teams write to that "even if you are writing for a specialist audience" ([Home Office](https://design.homeoffice.gov.uk/accessibility/written-content/readability)) — and check it with a readability tool (Word's readability statistics, Hemingway). The score points at sentences to look at; it isn't the goal, and a specialist piece the guide pitches higher follows the guide.

## Claims and evidence

- **Put the most important thing first** — the answer, the result or the point in the opening lines, the qualification after ([GOV.UK](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-structure/), [Microsoft](https://learn.microsoft.com/en-us/style-guide/brand-voice-above-all-simple-human)). A piece that opens on a story states why it matters by the second or third paragraph.
- **Concrete over vague** — real numbers, names and timeframes. If a claim can't be made specific, it's probably filler.
- **Certainty matches the evidence** — say plainly what's established, and "suggests" for what one study found. Overclaiming is a factual error, not a style choice.
- **Show, don't assert** — evidence beside every claim that matters: a runnable example, a figure, a quote, a source, an anecdote with a point.
- **True, and traceable** — check names, figures, quotes and claims against the original source, never memory. A wrong fact costs the reader more than a missing one.

## Credit

- **Credit what you borrow** — words, ideas, data and images, linked to their originator, within their licence; quote or paraphrase in your own words, never a close paraphrase. The rights and fairness checks are in [house-voice.md](references/house-voice.md#credit-rights-and-fairness).

## Structure for scanning

- **Most readers scan before they read.** Headings that say what's under them in the reader's words, bullets for three or more parallel items, tables for anything compared across the same attributes.
- **Progressive disclosure** — simple before complex, the main path before the edge cases; link the advanced topic rather than burying a beginner in it.

## Accessible formatting

- **Formatting has meaning** — what bold and italics mark is the guide's decision, applied consistently; `code` for commands, identifiers and file names. Decoration that carries no meaning is noise to a screen reader and a scanner.
- **Headings in order** — no skipped levels, and one H1 where the piece is kept as Markdown (a CMS usually supplies the title as the H1); link text that makes sense on its own, never "click here"; alt text on every meaningful image.
- **Never hard-wrap prose** where the piece is kept as Markdown — one physical line per paragraph or list item; break only where Markdown requires it.

## Keeping it true

- **Living writing is fixed in the same change** that makes it wrong; a dated piece — an article, a sent issue — is corrected with a visible, dated note, never silently. One home per fact within a docs set or series; a standalone piece restates what its reader needs. The checks are in [house-voice.md](references/house-voice.md#keeping-it-true).

## Boundaries

- **Documentation** — the four documentation types, the documentation voice, procedures, accessible docs pages → `tw:docs-standards`.
- **Content** — articles, newsletters and social posts for a publication → the content-writing skills (`cw`).
- **The guide this skill defers to** — a docs style guide → `tw:style-guide`; a publication's writing guide → `cw:style-guide`.
- **Getting facts out of an expert or a source** → `tw:sme-interviews` or `cw:sme-interviews`.
- **Code in a piece** → `write:code-samples`. **Screenshots, photos, diagrams and alt text** → `tw:images-and-diagrams` or `cw:images-and-diagrams`.
- **Tightening a finished draft** → `tw:editing-standards` or `cw:editing-standards`; **the machine-written sweep** → `/write:ai-check`.
- **Worked examples** — a documentation page: `tw:docs-standards`; an article: the content-writing skills (`cw`); before-and-after edits: `tw:editing-standards` and `cw:editing-standards`.
- **Marketing and conversion copy** — landing pages, ads, sales sequences — is a different craft with a different goal, and out of scope.
