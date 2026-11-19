---
name: article-standards
description: >-
  Writing and reviewing a published piece for any blog or publication — deciding what the piece is and whether it earns its existence, structuring it for readers who scan rather than read, the inverted pyramid, first-hand experience and trust signals, disclosure, accessible formatting, and the pre-publish checklist. Works for any subject — technical, food, fitness, finance — by reading the publication's profile for voice, audience and purpose. Use on "write an article", "draft a post", "review this draft", "does this match our style".
---

# Article standards

A published piece has to earn attention that documentation gets for free. Someone arrives at a docs page already wanting the answer; a reader arrives at an article deciding, within a screen, whether to stay.

The craft here holds for any publication on any subject. Who the publication is for, why it exists, how it sounds and what its pieces are called come from its profile and writing guide: a recipe blog, a training-plan newsletter and an engineering blog need the same discipline and must not sound alike.

## Read the publication's folder first

Establish **which publication this is for**, then find its folder — from the path the user's `CLAUDE.md` gives, otherwise the project's own `publications/` folder, otherwise ask — and read both files in it.

**`profile.md` decides whether the piece belongs and who it serves** — the job the publication does for readers, the job it does for its owner, the one action a piece should produce, what the audience already knows, who it's explicitly not for, and the disclosures it makes. A piece serving no stated purpose is the one to cut.

**`writing-guide.md` decides how it reads** — voice, piece types and which carries the house voice, titles, openings, recurring sections, formatting and closings, worded as this publication words them.

Where a field reads `unset`, ask and write the answer back to the publication's folder, never inside the installed plugin. A fact established once belongs in the file, not in this conversation.

### When the publication has no folder yet

Don't improvise one, and don't borrow another publication's. Build it with `cw:style-guide` — from an existing guide, three or four published pieces, then an interview, using its publication template — and get it confirmed before writing anything against it.

**Where a guide and the published work disagree**, say so and ask which wins. A guide that describes an aspiration is common and worth knowing about; silently picking one is not.

**The profile wins over precedent.** A published piece that breaks the profile is a miss, not a pattern to match.

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

## Does this piece deserve to exist

Google's people-first standard is a useful editorial test regardless of whether you care about ranking: after reading, does someone feel they got what they came for, or do they go back to search for a better answer? That standard is now a continuous, site-wide signal rather than a periodic update, so a body of thin pieces drags down the good ones.

Before drafting, be able to answer:

- **What does this add that the existing pieces on this topic don't?** If the honest answer is nothing, either find the angle only you have or don't write it.
- **What first-hand evidence can you show?** Your own photos, your own measurements, the error you actually hit, the thing that went wrong on attempt three. Experience is the part of E-E-A-T that can't be faked or researched — and it's the part readers can tell is missing.
- **Who is it for, and what will they do differently afterwards?**
- **Can every factual claim be sourced?** Anything about health, money, safety or law needs a citation, not a recollection.

## Structure for someone who is scanning

Decades of eye-tracking find the same thing: people scan web pages rather than reading them, most often in an F-shaped pattern, and the behaviour has become more pronounced, not less. Write for that reader and the one who reads every word still gets a good piece; write only for the second and you lose most of your audience in the first screen.

- **Inverted pyramid.** The conclusion goes first, then the detail, then the background. Open with what the piece delivers, not with how you came to write it.
- **Front-load every section and paragraph.** The point lands in the first few words. Readers who don't find it there skip the rest of the paragraph.
- **One idea per paragraph.** A paragraph doing two jobs loses the second.
- **Be succinct** — roughly half the words you'd use in print. Shorter is not thinner; it's the same substance with the padding removed.
- **Meaningful subheadings, not clever ones.** A reader scanning the headings alone should be able to reconstruct the piece. Puns and teases fail the scan.
- **Highlight the load-bearing words** — bold or a link on the term that matters, not on whole sentences.
- **Lists for parallel items, tables for comparisons, prose for argument.** A three-way comparison in prose is unreadable; an argument in bullets loses its reasoning.
- **Break up long stretches.** A screen of unbroken text reads as work before it reads as anything else.

## Writing it

- **Concrete over vague, every time.** Real numbers, real quantities, real error text, real timings. "Rest 90 seconds between sets", not "rest briefly".
- **Show the failure case.** What goes wrong, what it looks like when it does, and how to recover. A piece that only describes the happy path reads as untested, whatever the subject.
- **Trust the reader.** Link prerequisites instead of re-teaching them, and cut anything that tells them what they just read.
- **Explain before you show.** Whatever the artefact is — a code block, a table, a chart, a photo of a technique — a sentence first saying what it is and why it's there.
- **Descriptive link text.** "Read the caching write-up", never "click here"; assistive technology lists links out of context, and a scanning reader reads them the same way.
- **Every claim that isn't yours gets a source**, linked inline where a reader would want to check it.
- **Alt text on every image**, and never information carried only in an image.

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
- [ ] Images have alt text; nothing important exists only inside an image.
- [ ] Link text is descriptive; every link resolves and is canonical.
- [ ] Required disclosures appear before the content they affect.
- [ ] Byline and date present.
- [ ] Recurring sections, devices and closer match the profile exactly.
- [ ] The piece answers the reader's question without sending them back to search.

## Boundaries

- **Audience, purpose and disclosures** → the publication's `profile.md`. **Voice, titles, section names and formatting** → its `writing-guide.md`. Both live in the publication's folder.
- **Technical documentation** — docs sites, API references, product help — is a different job with a different reader → `tw:developer-docs`, `tw:api-reference`, `tw:user-guides`.
- **The voice rules under any piece of writing** → `write:writing-standards`. **Tightening a finished draft** → `cw:editing-standards`. **The machine-written sweep** → `/write:ai-check`.
- **Code samples that must run** → `write:code-samples`. **Diagrams and screenshots** → `cw:images-and-diagrams`.
- **A tutorial's companion repository** → `demo-readme`.
- **A periodic issue covering several pieces** → `newsletter-standards`. **Promoting one piece** → `social-media-posts`. **Whether it's being found** → `content-performance`.
