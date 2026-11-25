---
name: style-guide
description: >-
  Building and keeping a publication's writing guide, profile and brand — a blog, a newsletter, or both, on any subject: converting an existing guide, deriving the voice from published pieces, interviewing the owner, voice versus tone, the decisions a guide makes (titles, openings, length, formatting, slugs), sourcing, corrections, AI and disclosure policies, colours, fonts, logo, cover template, and provenance. Use on "writing guide", "my blog's voice", "set up my publication", "style guide for my publication", "my brand colours".
---

# A publication's writing guide

A writing guide stops the same question being answered differently every week — how titles are written, how a piece opens, how it signs off. It's a decision record, not an essay on good writing: every entry settles something that was genuinely open, and anything never in doubt doesn't belong in it.

A publication — a blog, a newsletter, or both under one name — answers to three files, with two folders beside them:

- **The writing guide** says _how_ it reads. It changes as the writing matures.
- **The profile** says _who_ it is, _who_ it's for and _why_. It changes rarely. Its fields are in [references/profile.md](references/profile.md).
- **The brand** says how it _looks_ — colours, fonts, the logo, the cover template, the image and chart style. Its fields are in [references/publication-template/brand.md](references/publication-template/brand.md).
- **`sources/`** holds the guides and briefs it was built from; **`examples/`** holds sample covers, logo files and the pieces that best show the voice.

## Voice and audience come from the writing's own guide

Building the guide starts by finding what already exists: the publication's `writing-guide.md`, `profile.md`, `brand.md` and anything in its `sources/` and `examples/`:

- **In a codebase:** the folder the project's `AGENTS.md` names, or, for a guide kept outside the repo, the folder the user's personal agent instructions name; otherwise the project's `publications/` folder.
- **In a chat app:** the project's files, or files attached to the conversation.
- **Otherwise:** ask for them.

The voice, terminology and reader the guide records come from the owner, the existing guide and the published work, never from this skill.

- Where an existing guide or source settles something, the new guide keeps it and says where it came from.
- Where nothing exists, start by asking who the reader is and what the publication is for.

Saving the guide: in a codebase, write the files to the publication's folder; in a chat app, give the user the files to add to the project. Never write inside the installed plugin.

## Ask first

Read the answers from the publication's existing files, its `sources/`, its published pieces and the request first; ask only what's missing. Ask with the app's question tool where it has one, so the choices can be picked; otherwise as a numbered list answered by number. Offer choices where the answers are known and a short typed answer otherwise; where the profile already has an answer, show it and ask whether to keep it. Record each answer, dated, in `profile.md`, `writing-guide.md` or `brand.md`, so no skill asks it again.

1. **Which publication is it?** Its name, and blog · newsletter · both.
2. **Is there a guide already?** none · a style guide · a tone-of-voice document · a client's brief · notes — and where it is.
3. **Which three or four published pieces are most typical, and which aren't?** Links or file names.
4. **Who reads it, and who is it not for?** A short answer for each.
5. **What should a piece lead the reader to do?** subscribe · try it · reply · read the next one · nothing.
6. **What does a new topic usually become, and where does each go?** blog post · newsletter issue · social posts · cross-posts · demo project, pick any; then each cross-post platform with full copy or opening excerpt, and each social platform with its account and whose it is — a person, the publication or a company. These are the profile's Defaults; the tone on each platform goes in the writing guide's Social section.
7. **Which base guide and spelling variant?** AP · Chicago · another, named; and US · UK · another English.
8. **Is there a brand guide or logo files?** none · a brand guide · logo files only — and where they are.

## Voice and tone are different decisions

**Voice stays the same; tone changes with the reader's situation.** [Mailchimp](https://styleguide.mailchimp.com/voice-and-tone/) puts it in one line: "You have the same voice all the time, but your tone changes." A launch announcement and an apology from the same publication don't sound alike, but they sound like the same person. The voice is the owner's — whether it says "I", how casual it is, its humour, its asides, its emoji — and it's derived from the writing, never imposed. Two publications by the same person can rightly sound different.

## Build it from what exists

1. **Ask whether a guide already exists**, and ask broadly — a style guide, a tone-of-voice document, a client's editorial brief, contributor guidelines, even a page of notes. It goes in the publication's `sources/` folder.
2. **Convert it, don't copy it.** Map what the source settles onto the guide's fields, transcribe exact wording wherever the source fixes wording — a sign-off, a banned phrase, a name — and leave what it doesn't cover blank. The source is never rewritten; it stays the record of where each answer came from.
3. **Derive from three or four published pieces** most like what's wanted — title shapes, openings, recurring sections, sentence rhythm, the words that never appear. **Ask which pieces aren't typical** and name them; deriving a voice from one terse setup post makes everything written afterwards read cold.
4. **Interview the owner for the rest**, and always for the profile — a writing guide rarely says who the readers are, who the publication is not for, or what success looks like.
5. **Collect the look.** Ask for an existing brand guide, the logo files, the colours and fonts, and three or four past covers; they go in `examples/`, and `brand.md` records the rules. Where nothing exists, read the colours and fonts off past covers or the site and leave each one blank until the owner confirms it. A brand guide covers the logo and its use, the colour palette, typography and imagery ([Bynder](https://www.bynder.com/en/glossary/brand-guidelines-definition/)); `brand.md` keeps the parts a publication's covers, images and charts need.

**A blank field is a valid answer.** A skill that meets a blank field asks, then writes the answer back. A plausible guess becomes a house rule nobody agreed to.

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
- **Titles** — the formats it uses, with a real example of each; whether questions and numbers appear; and the length — one title is the headline, the search title and the share title, about 50–60 characters as a working target, because results cut titles by pixel width ([Google](https://developers.google.com/search/docs/appearance/title-link) sets no limit; full targets in `cw:seo-aeo-geo`).
- **Openings and closings** — how a piece opens, how it never opens; how it ends, its one ask, its sign-off per channel.
- **Recurring sections and devices**, in their exact form — a "what you'll need" box, a series name, a closing question.
- **In-piece formatting** — how often subheads appear, what bold is for, when a list beats a paragraph, pull quotes.
- **Social** — the accounts and whose each is (a person, the publication, a company), "I" or "we" on each, the tone on each platform with a real post as the example, and the rules for emoji, hashtags and mentions. The voice stays the same everywhere; the tone moves with the platform.
- **Newsletter subject lines and preview text** — length, style, whether they echo the title; working lengths are in `cw:newsletter-standards`.

**On the page and in search**

- **Slugs** — short, readable words separated by hyphens, in the reader's language; avoid long ID numbers ([Google](https://developers.google.com/search/docs/crawling-indexing/url-structure)).
- **Descriptions** — one per piece, used as the meta description, the share description and the listing excerpt, written for each piece and never the same text across pages; for a post it may carry the author and the date. Google sets no length limit but truncates to fit the screen ([Google](https://developers.google.com/search/docs/appearance/snippet)); about 150–160 characters, with the point in the first 120 for mobile, is the working target ([Ahrefs](https://ahrefs.com/blog/meta-description/)).
- **A reading-level target, if it has one.** Some publishers write for a low reading age even for specialists — GOV.UK's guidance is widely cited as a reading age of 9 — and WCAG 2.2's success criterion 3.1.5 (level AAA) asks for supplementary content where text needs more than lower-secondary reading ability ([W3C](https://www.w3.org/TR/WCAG22/#reading-level)). For general web writing, about grade 8 on a Flesch-Kincaid or Hemingway reading is common practice. Record the target and the tool that checks it, or leave it blank; the score points at long sentences and words, it isn't the goal.

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

## What the profile and the brand decide

- **The profile** settles who the publication is for and what it's for: the reader and what they already know, who it's not for, the job it does for readers and for the owner, the one action a piece should lead to, the channels and cadence, the disclosures it owes, and the defaults a new topic starts with — what it becomes, where each format goes, the cover. It changes when the audience or the purpose does, and it decides whether a piece belongs at all. Fields: [references/profile.md](references/profile.md).
- **The brand** settles how the publication looks: its colours and the pairs that pass contrast, its fonts, the logo and its use, the cover template, and the image and chart style. `cw:cover-images` and `cw:images-and-diagrams` follow it over their own defaults. Fields: [references/publication-template/brand.md](references/publication-template/brand.md).

## The terminology list

One row per concept — the approved term, a one-sentence definition, how it's used, and the variants **not** to use, so the list is searchable by the wrong word. Build it from the published pieces, settle each concept named two ways, and record the reason for anything that was close; without the reason, it gets reopened.

## Rules for publications

- **One guide per publication, covering every channel.** A blog post and a newsletter issue from the same publication read as one person; only logistics differ, and those sit in the profile.
- **Two publications never share a guide**, however similar. Merging them erases what makes each recognizable.
- **Record what it was built from, and the date** — the pieces, the source, the interview. A guide with no provenance is a preference with a filename.
- **Re-derive periodically.** Voices move, and a guide built from years-old pieces describes a publication that may no longer exist.
- **Someone else's guide stays theirs.** A client's editorial brief is kept only while writing for them, and never published.
- **Keep it where it survives** — in the owner's own files or repository, never inside an installed plugin, which an update replaces.

### The publication's folder

In a codebase, one folder per publication — the folder the project's `AGENTS.md` or the user's personal agent instructions name, otherwise the project's own `publications/` folder:

```text
publications/
  <publication>/       # a blog, a newsletter, or an outlet or client written for
    profile.md         # who it's for, what it's for, its channels and defaults
    writing-guide.md   # how to write for it
    brand.md           # how it looks: colours, fonts, logo, cover template
    media-kit.md       # what sponsor emails cite: audience, dated numbers, slots
    sources/           # style guides and reference material already in hand
    examples/          # sample covers, logo files, pieces that show the voice
    calendar.md        # the editorial calendar: one line per topic
    series/            # one folder per series: its brief.md and what its parts share
    reports/           # content-performance-<yyyy-mm-dd>.md
    topics/
      <yyyy-mm>-<slug>/  # one folder per topic
        brief.md         # status, who holds it, what the topic becomes, the brief
        blog.md          # the blog post (front matter + body)
        newsletter.md    # the newsletter issue
        social.md        # every social post, one section per platform
        copies.md        # cross-posts to other blogging platforms
        sources.md       # the source log
        interviews/      # one notes file per interview
        images/          # cover, share card, diagrams
        reports/         # review.md, ai-check.md, seo.md
  pitch-log.md         # every pitch and proposal, sent and received
  _archive/            # publications no longer written for
```

- **A folder is a topic, not a format.** A topic is the folder; a piece is one thing published from it. Every topic gets its own folder, so two topics — or two agents — never write to the same file. One topic can become a blog post, a newsletter issue, social posts, cross-posts and a demo project — one, some or all. Its brief records which, and the folder holds only those formats' files. A roundup issue or a personal note is a topic whose brief lists only a newsletter; a stand-alone post or thread is one whose brief lists only social posts. A commissioned piece is a topic folder under the outlet's or client's publication folder; a swap, a co-written piece, a guest's piece and a sponsored piece are topic folders in your own, with the brief's **Collaboration**, **Partner** and **Disclosure** filled.
- **File names are fixed.** `blog.md`, `newsletter.md`, `social.md`, `copies.md`: adding a format adds its file, and nothing is renamed. The folder is `<yyyy-mm>-<slug>`, the month of the first publish date (or the month it's briefed, with no date yet), one level deep, never `yyyy/mm/slug`.
- **`brief.md` says who holds the topic.** Before working on one, read it: if Held by names someone else and the status isn't `paused`, leave it and say so. On starting, set Held by and the date; on stopping, set the status and clear Held by. Resuming starts with `brief.md`, then the format files and `sources.md`. Only a skill that edits the format files claims: a read-only check that writes only its own report (a review, an AI check, a style check, an SEO check, a performance review) runs while someone holds the topic, never sets Held by, and writes only its own file in `reports/`.
- **Ask-first answers go in the brief**, in the field they belong to — the "What this topic becomes" table or a row of "The brief"; an answer with no field goes under "Notes for whoever picks it up next".
- **Status** is one of `idea` · `briefed` · `drafting` · `in review` · `scheduled` · `published` · `paused` · `retired`. Each format in the brief has its own; the topic's is the overall one, `published` once every listed format is.
- **`calendar.md` is the editorial calendar and the one shared file** — one line per topic: first publish date · topic folder · formats · status · held by · series · link, under **Coming up** (dated, soonest first), **Ideas** (undated, newest first) and **Published** (newest first). Change only your topic's line; never rewrite the file. A topic's other dates live in its brief.
- **`media-kit.md` is what a sponsor email cites** — who reads the publication, its numbers with the date each was measured and where it came from, and where a sponsor can appear; `cw:pitching` reads it and links it. `brand.md` is logos and colours; `media-kit.md` never repeats the brand.
- **`series/<series-slug>/brief.md` plans a series** — its name, reader, what it covers and leaves out, cadence, and one row per part. Material every part shares sits beside it in the series folder. Each part is its own topic whose brief names the series and the part.

In a chat app, a project's files can't hold folders, so a topic's files are named `<topic folder>--<file>` (`2026-12-sourdough-starter--brief.md`). The publication's own files keep their names — `profile.md`, `writing-guide.md`, `brand.md`, `media-kit.md`, `calendar.md`, a series' files as `series-<series-slug>--<file>`, and the sources, sample covers and logo files beside them — and for `calendar.md` the agent hands back only the line to add or change.

Start from the blanks in [references/publication-template/](references/publication-template/) — [calendar.md](references/publication-template/calendar.md), [media-kit.md](references/publication-template/media-kit.md), a series from [series/\_template/](references/publication-template/series/_template/), a topic from [topics/\_template/](references/publication-template/topics/_template/) — and fill copies, never the templates themselves. A field not yet known stays in the file, blank; it's never removed.

## Enforcing and maintaining it

- **A pre-publish checklist** of five items drawn from the guide — the opening, the title format, the ask, the sign-off, the disclosure.
- **A template per piece type**, with the recurring sections already in place.
- **Rebuild the guide from recent pieces** when it no longer describes how the publication writes, rather than checking old pieces against an old guide. Old pieces come up to the current guide when they're refreshed (`cw:content-refresh`).
- **Name an owner, add a decision when a question is asked twice, date every entry**, prune rules about things that no longer exist, and apply a new decision to the pieces still being updated.

## Example entry

> **Sign-off — newsletter.** Every issue ends "Talk soon," on its own line, then the first name. The blog has no sign-off. From the welcome issue and the six that followed; confirmed by the owner 2026-05-10.

## Boundaries

- **The rules every piece obeys by default** → `write:writing-standards`. A guide records only where it departs from them, or what they don't cover.
- **Applying the guide to a draft** → `cw:editing-standards`; **bringing an old piece up to the current guide** → `cw:content-refresh`.
- **The pieces that consume it** → `cw:article-standards`, `cw:newsletter-standards`.
- **A docs set's style guide** → `tw:docs-style-guide`.
- **The publication's own facts** — its name, readers, sign-off — are asked for and recorded, never invented here.
