---
name: article-standards
description: >-
  Writing and reviewing a published piece for any blog or publication — deciding what the piece is and whether it earns its existence, the title and opening, structuring it for readers who scan, readability targets, first-hand experience and trust signals, disclosure, accessible formatting, and the pre-publish checklist. Works for any subject — technical, food, fitness, finance — by reading the publication's profile for voice, audience and purpose. Use on "write an article", "draft a post", "review this draft", "does this match our style".
---

# Article standards

A published piece has to earn attention that documentation gets for free. Someone arrives at a docs page already wanting the answer; a reader arrives at an article deciding, within a screen, whether to stay.

## Voice and audience come from the writing's own guide

Before writing or reviewing, find the publication's `profile.md` and `writing-guide.md` and read them:

- **In a codebase:** the folder the project's `AGENTS.md` names, or, for a guide kept outside the repo, the folder the user's personal agent instructions name (such as `~/.claude/CLAUDE.md`); otherwise the project's `publications/` folder.
- **In a chat app:** the project's files (a Claude Project's knowledge, or the equivalent elsewhere), or files attached to the conversation.
- **Otherwise:** ask for them.

Who the publication is for, why it exists, how it sounds and what its pieces are called come from that guide, never from this skill.

- Where the guide settles something this skill also covers, the guide wins.
- Where there's no guide, ask who the reader is and what the piece is for, and offer to build one with `cw:style-guide`.
- Where a field reads `unset`, ask and record the answer in the guide.

When a guide changes: in a codebase, save the file where it was found; in a chat app, give the user the updated file to replace in the project. Never write inside the installed plugin.

**`profile.md` decides whether the piece belongs and who it serves** — the job the publication does for readers, the job it does for its owner, the one action a piece should produce, what the audience already knows, who it's explicitly not for, and the disclosures it makes. A piece serving no stated purpose is the one to cut.

**`writing-guide.md` decides how it reads** — voice, piece types and which carries the house voice, titles, openings, recurring sections, formatting and closings, worded as this publication words them.

**Where a guide and the published work disagree**, say so and ask which wins. A guide that describes an aspiration is common and worth knowing about; silently picking one is not.

**The profile wins over precedent.** A published piece that breaks the profile is a miss, not a pattern to match.

## Does this piece deserve to exist

Google's [people-first standard](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) is a useful editorial test whether or not you care about ranking: after reading, does someone feel they got what they came for, or do they go back to search for a better answer? Since March 2024 Google judges helpfulness inside its core ranking systems, mainly page by page but with some site-wide signals ([Google](https://developers.google.com/search/blog/2024/03/core-update-spam-policies)), so a body of thin pieces can weigh on the good ones.

Before drafting, be able to answer:

- **What does this add that the existing pieces on this topic don't?** If the honest answer is nothing, either find the angle only you have or don't write it.
- **What first-hand evidence can you show?** Your own photos, your own measurements, the error you actually hit, the thing that went wrong on attempt three. Experience is the part of E-E-A-T that can't be faked or researched — and it's the part readers can tell is missing.
- **Who is it for, and what will they do differently afterwards?**
- **Can every factual claim be sourced?** Anything about health, money, safety or law needs a citation, not a recollection.

## Decide what the piece is

Classify by what the reader wants to walk away able to do. The publication's own name for the type comes from its profile; this is the underlying intent, and it decides the structure.

| Intent                       | The reader wants                            | Examples across subjects                            |
| ---------------------------- | ------------------------------------------- | --------------------------------------------------- |
| **Do a task**                | To complete something, following along      | A tutorial, a recipe, a setup guide, a workout plan |
| **Understand**               | A working mental model                      | An explainer, a concept piece, a "why this works"   |
| **Decide**                   | To choose between options with confidence   | A review, a comparison, a buyer's guide             |
| **Keep current**             | To know what changed and whether it matters | A news post, a roundup, a release write-up          |
| **Share a lived experience** | Your evidence, to learn from it             | A case study, a retrospective, an essay, a teardown |

One intent per piece. A piece serving two is usually two pieces, and it serves neither reader well — the person wanting to cook dinner tonight and the person wanting the food science behind it need different articles.

The section-by-section blueprint for each intent is in [references/article-structures.md](references/article-structures.md).

## Title and opening

The title and the first screen decide whether anyone reads the rest.

- **The meaning in the first words.** Readers scanning a list of titles often take in only the first couple of words, so lead with the words that carry the subject ([NN/g](https://www.nngroup.com/articles/first-2-words-a-signal-for-scanning/)).
- **A shape the profile uses** — a how-to, a number, a question, an outcome — chosen for the piece's intent. The title tag and its length are `cw:seo-aeo-geo`'s; the headline on the page can carry more voice.
- **Write two or three candidates** and pick the one that promises exactly what the piece delivers. Where the platform can test headlines, test them; newsrooms run headline tests routinely, and winners have lifted click-through by 20% or more ([Nieman Lab](https://www.niemanlab.org/2021/10/how-a-b-testing-can-and-cant-improve-your-headline-writing/)).
- **A short opening before the payoff:** about two to four sentences, or under about 100 words, before the reader gets what the title promised (common practice). A story opening is fine where the guide uses one; the point still arrives by the second or third paragraph.

## Structure for someone who is scanning

Eye-tracking research finds people scan web pages rather than read them, and on a page of undifferentiated text they fall into an F-shaped pattern that skips whatever isn't at the top or the left edge, on desktop and on mobile ([NN/g](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/)). Headings, front-loaded points and highlighted words break that pattern. Write for the scanner and the reader who reads every word still gets a good piece; write only for the second and you lose most of your audience in the first screen.

- **Inverted pyramid.** The conclusion goes first, then the detail, then the background. Open with what the piece delivers, not with how you came to write it.
- **Front-load every section and paragraph.** The point lands in the first few words. Readers who don't find it there skip the rest of the paragraph.
- **One idea per paragraph.** A paragraph doing two jobs loses the second.
- **Be succinct** — roughly half the words you'd use in print. Shorter is not thinner; it's the same substance with the padding removed.
- **Meaningful subheadings, not clever ones.** A reader scanning the headings alone should be able to reconstruct the piece. Puns and teases fail the scan.
- **Highlight the load-bearing words** — bold or a link on the term that matters, not on whole sentences.
- **Lists for parallel items, tables for comparisons, prose for argument.** A three-way comparison in prose is unreadable; an argument in bullets loses its reasoning.
- **Break up long stretches.** A screen of unbroken text reads as work before it reads as anything else.
- **Working targets for readability**, from Yoast's published scoring: paragraphs of 150 words or fewer, a subheading at least every 300 words, and no more than a quarter of sentences over 20 words ([Yoast](https://github.com/Yoast/wordpress-seo/blob/trunk/packages/yoastseo/src/scoring/assessments/SCORING%20READABILITY.md)). For a general audience, aim for roughly a US grade 8–9 reading level on a checker such as Hemingway (common practice); the score is a pointer, not the goal.
- **Long pieces get a way in:** a short summary or key-takeaways box at the top, a table of contents, and a reading time where the platform shows one (common practice).
- **Two to five internal links** to related pieces, and a link back from an older piece to the new one, so neither is stranded (common practice).

## Writing it

- **Concrete over vague, every time.** Real numbers, real quantities, real error text, real timings. "Rest 90 seconds between sets", not "rest briefly".
- **Show the failure case.** What goes wrong, what it looks like when it does, and how to recover. A piece that only describes the happy path reads as untested, whatever the subject.
- **Trust the reader.** Link prerequisites instead of re-teaching them, and cut anything that tells them what they just read.
- **Explain before you show.** Whatever the artefact is — a code block, a table, a chart, a photo of a technique — a sentence first saying what it is and why it's there.
- **Every claim that isn't yours gets a source**, linked inline where a reader would want to check it.

## Accessible formatting

- **One H1, headings in order** — no skipped levels, so a screen reader's outline matches the piece.
- **Descriptive link text.** "Read the caching write-up", never "click here"; assistive technology lists links out of context, and a scanning reader reads them the same way.
- **Alt text on every informative image**, written from its purpose, and never information carried only in an image (`cw:images-and-diagrams`).
- **Captions or a transcript** for video and audio ([WCAG 1.2](https://www.w3.org/WAI/WCAG22/quickref/#time-based-media)).
- **Never meaning by colour alone** — "the red line" needs a label too ([WCAG 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)).
- **Tables with a header row**, used for data rather than layout.

## Trust and disclosure

- **Say who wrote it and why they're worth reading on this** — a byline and a line of relevant standing, especially where the topic touches health, money, safety or law.
- **Date it, and say when it was updated.** A piece with no date is unevaluable, and readers treat it accordingly.
- **Disclose what the profile's Constraints section requires** — affiliate links, sponsorship, gifted products, AI assistance — at the top, before the reader has invested time, not in a footer.
- **Separate what you tested from what you read.** "I ran this for six weeks" and "the manufacturer claims" are different classes of evidence and should look different on the page.
- **Correct in public.** When a piece turns out to be wrong, fix it and say what changed. Silent edits cost more trust than the original error.

## Pre-publish checklist

- [ ] One intent, and the structure matches its blueprint.
- [ ] The opening states what the piece delivers, in the profile's shape.
- [ ] Title follows a format in the profile, in its case convention.
- [ ] The headings alone tell the story.
- [ ] Every section front-loads its point; no paragraph carries two ideas.
- [ ] Every number, quantity and quote is real.
- [ ] Every non-obvious claim has a source.
- [ ] First-hand evidence is present and identifiable as first-hand.
- [ ] Title leads with the words that carry the subject; the opening reaches the payoff in about 100 words.
- [ ] Paragraphs, sections and sentences within the readability targets, or deliberately not.
- [ ] One H1, headings in order; images have alt text; captions for video and audio; nothing carried by colour alone.
- [ ] Two to five internal links, and an older piece links here.
- [ ] Link text is descriptive; every link resolves and is canonical.
- [ ] Required disclosures appear before the content they affect.
- [ ] Byline and date present.
- [ ] Recurring sections, devices and closer match the profile exactly.
- [ ] The piece answers the reader's question without sending them back to search.

## Boundaries

- **Audience, purpose and disclosures** → the publication's `profile.md`. **Voice, titles, section names and formatting** → its `writing-guide.md`. Both live in the publication's folder.
- **Technical documentation** — docs sites, API references, product help — is a different job with a different reader → `tw:developer-docs`, `tw:api-reference`, `tw:user-guides`.
- **The voice rules under any piece of writing** → `write:writing-standards`. **Tightening a finished draft** → `cw:editing-standards`. **The machine-written sweep** → `/write:ai-check`.
- **Code samples that must run** → `write:code-samples`. **Diagrams and screenshots** → `cw:images-and-diagrams`. **The cover image** → `cw:cover-images`.
- **Finding and checking the sources behind it** → `cw:content-research`. **A tutorial's companion repository** → `cw:demo-project`.
- **Updating, correcting, merging or retiring a piece after it's published** → `cw:content-refresh`.
- **Writing for another publication** — the pitch, the brief and the rights → `cw:pitching`.
- **A periodic issue covering several pieces** → `cw:newsletter-standards`. **Promoting one piece** → `cw:social-media-posts`. **Getting it found** → `cw:seo-aeo-geo`. **Whether it's being found** → `/cw:content-performance`.
