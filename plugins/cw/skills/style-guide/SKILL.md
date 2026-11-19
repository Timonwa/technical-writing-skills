---
name: style-guide
description: >-
  Building and keeping a publication's writing guide and profile — a blog, a newsletter, or both, on any subject: converting an existing style guide, deriving the voice from published pieces, interviewing the owner, voice versus tone, the decisions a guide makes (titles, openings, closings, length, formatting, slugs, meta descriptions, reading level, quotes), sourcing, corrections, AI and disclosure policies, and provenance. Use on "writing guide", "my blog's voice", "set up my newsletter's style", "style guide for my publication".
---

# A publication's writing guide

A writing guide stops the same question being answered differently every week — how titles are written, how a piece opens, how it signs off. It's a decision record, not an essay on good writing: every entry settles something that was genuinely open, and anything never in doubt doesn't belong in it.

A publication — a blog, a newsletter, or both under one name — answers to two files:

- **The writing guide** says _how_ it reads. It changes as the writing matures.
- **The profile** says _who_ it is, _who_ it's for and _why_. It changes rarely. Its fields are in [references/profile.md](references/profile.md).

## Voice and audience come from the writing's own guide

This skill builds the guide, so it starts by finding what already exists: the publication's `writing-guide.md`, `profile.md` and anything in its `sources/` folder (where the user's `CLAUDE.md` says they live, otherwise the project's `publications/` folder). The voice, terminology and reader the guide records come from the owner, the existing guide and the published work, never from this skill.

- Where an existing guide or source settles something, the new guide keeps it and says where it came from.
- Where nothing exists, start by asking who the reader is and what the publication is for.

## Voice and tone are different decisions

**Voice stays the same; tone changes with the reader's situation.** [Mailchimp](https://styleguide.mailchimp.com/voice-and-tone/) puts it in one line: "You have the same voice all the time, but your tone changes." A launch announcement and an apology from the same publication don't sound alike, but they sound like the same person. The voice is the owner's — whether it says "I", how casual it is, its humour, its asides, its emoji — and it's derived from the writing, never imposed. Two publications by the same person can rightly sound different.

## Build it from what exists

1. **Ask whether a guide already exists**, and ask broadly — a style guide, a tone-of-voice document, a client's editorial brief, contributor guidelines, even a page of notes. It goes in the publication's `sources/` folder.
2. **Convert it, don't copy it.** Map what the source settles onto the guide's fields, transcribe exact wording wherever the source fixes wording — a sign-off, a banned phrase, a name — and leave what it doesn't cover `unset`. The source is never rewritten; it stays the record of where each answer came from.
3. **Derive from three or four published pieces** most like what's wanted — title shapes, openings, recurring sections, sentence rhythm, the words that never appear. **Ask which pieces aren't typical** and name them; deriving a voice from one terse setup post makes everything written afterwards read cold.
4. **Interview the owner for the rest**, and always for the profile — a writing guide rarely says who the readers are, who the publication is not for, or what success looks like.

**`unset` is a valid answer.** A skill that meets `unset` asks, then writes the answer back. A plausible guess becomes a house rule nobody agreed to.

**Where a source and the published pieces disagree**, record both and flag the conflict. Only the owner knows which is right now — guides drift ahead of practice, and practice drifts away from guides.

**Get it confirmed** before anything is written against it.

## Pick a base

- **Name an editorial base guide** for everything the writing guide doesn't settle — AP style or the Chicago Manual of Style are the usual choices for publications — and record only what differs. A short local guide over a named base beats a long original.
- **Pick a dictionary and a spelling variant.** That one line resolves more disputes than any other.
- **Where the base and a local rule conflict**, the local rule wins and says so.

## What the writing guide decides

**The voice and the mechanics**

- **Person** — who "I", "we" and "you" are, and when each appears.
- **Humour, asides and emoji** — whether and where.
- **Tone by situation** — how the voice shifts for the moments the publication meets: a launch, a correction, bad news, a sponsor's piece, a reader's complaint. One line each, with an example.
- **Capitalization** — sentence or title case for titles and subheads, the same everywhere they appear.
- **Names** — the publication's own, and the people and products it covers, in their exact form.
- **Numbers, dates, currency and units** — when a number is spelled out, the date format, ranges.
- **Abbreviations and acronyms** — which are written out on first use in a piece and which the reader already knows, whether they take full stops, and the plural form.
- **Lists and punctuation** — serial comma or not, whether list items end in full stops.
- **Links** — descriptive link text, never a bare URL or "click here"; how external and affiliate links are marked.
- **Inclusive language** — the terms replaced and what replaces them, as decisions.
- **What's banned** — the filler, stock phrases and words this publication never uses, each recorded as a decision rather than assumed.

**The shape of a piece**

- **Piece types** — the kinds it publishes, and which carries the house voice.
- **Length targets per type** — a how-to, an essay, a newsletter issue — as ranges, so a piece that runs long is a decision, not an accident.
- **Titles** — the formats it uses, with a real example of each; whether questions and numbers appear.
- **Openings and closings** — how a piece opens, how it never opens; how it ends, its one ask, its sign-off per channel.
- **Recurring sections and devices**, in their exact form — a "what you'll need" box, a series name, a closing question.
- **In-piece formatting** — how often subheads appear, what bold is for, when a list beats a paragraph, pull quotes.
- **Newsletter subject lines and preview text** — length, style, whether they echo the title.

**On the page and in search**

- **Slugs** — short, readable words separated by hyphens, in the reader's language; avoid long ID numbers ([Google](https://developers.google.com/search/docs/crawling-indexing/url-structure)).
- **Meta descriptions** — one written for each piece, never the same text across pages; for a post it may carry the author and the date. Google sets no length limit but truncates to fit the screen ([Google](https://developers.google.com/search/docs/appearance/snippet)).
- **A reading-level target, if it has one.** Some publishers write for a low reading age even for specialists — GOV.UK's guidance is widely cited as a reading age of 9 — and WCAG 2.2's success criterion 3.1.5 (level AAA) asks for supplementary content where text needs more than lower-secondary reading ability ([W3C](https://www.w3.org/TR/WCAG22/#reading-level)). Record the target and how it's checked, or `unset`.

**Quotes, titles of works and code**

- **Quotes** — how omissions are marked, whether brackets and "[sic]" are used, whether speech is cleaned up, how sources are attributed.
- **Titles of works** — books, films, albums, other publications — in italics or quotation marks.
- **Code**, if it publishes any — its conventions, deferring to `write:code-samples`.

## The policies a publication records

- **Sourcing** — what counts as a source; original sources over summaries; how sources are credited and linked; whether anonymous sources are used, and when.
- **Corrections and updates** — a mistake in a published piece is corrected with a visible, dated note, not a silent rewrite; an update is marked the same way.
- **AI use** — whether AI assists drafting, research or images, and what readers are told.
- **Disclosure** — affiliate links, sponsorship, gifted products: what's disclosed and where. A disclosure belongs close to the recommendation, not at the foot of the page ([FTC](https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking)).
- **Rights** — the images, excerpts and embeds it may use, and how they're credited.

## The terminology list

One row per concept — the approved term, a one-sentence definition, how it's used, and the variants **not** to use, so the list is searchable by the wrong word. Build it from the published pieces, settle each concept named two ways, and record the reason for anything that was close; without the reason, it gets reopened.

## Rules for publications

- **One guide per publication, covering every channel.** A blog post and a newsletter issue from the same publication read as one person; only logistics differ, and those sit in the profile.
- **Two publications never share a guide**, however similar. Merging them erases what makes each recognizable.
- **Record what it was built from, and the date** — the pieces, the source, the interview. A guide with no provenance is a preference with a filename.
- **Re-derive periodically.** Voices move, and a guide built from years-old pieces describes a publication that may no longer exist.
- **Someone else's guide stays theirs.** A client's editorial brief is kept only while writing for them, and never published.
- **Keep it where it survives** — in the owner's own files or repository, never inside an installed plugin, which an update replaces.

## Enforcing and maintaining it

- **A pre-publish checklist** of five items drawn from the guide — the opening, the title format, the ask, the sign-off, the disclosure.
- **A template per piece type**, with the recurring sections already in place.
- **`/cw:style-check` across the archive** every few months, reading across time for a voice that's moved.
- **Name an owner, add a decision when a question is asked twice, date every entry**, prune rules about things that no longer exist, and apply a new decision to the pieces still being updated.

## Example entry

> **Sign-off — newsletter.** Every issue ends "Talk soon," on its own line, then the first name. The blog has no sign-off. From the welcome issue and the six that followed; confirmed by the owner 2026-05-10.

## Boundaries

- **The rules every piece obeys by default** → `write:writing-standards`. A guide records only where it departs from them, or what they don't cover.
- **Applying the guide to a draft** → `cw:editing-standards`; **checking the archive for drift** → `/cw:style-check`.
- **The pieces that consume it** → `cw:article-standards`, `cw:newsletter-standards`.
- **A docs set's style guide** → `tw:style-guide`.
- **The publication's own facts** — its name, readers, sign-off — are asked for and recorded, never invented here.
