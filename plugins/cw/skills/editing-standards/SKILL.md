---
name: editing-standards
description: >-
  Editing a piece of content that already exists — a blog post, article, tutorial, essay, feature or newsletter issue on any subject — in focused passes down the five levels of edit: the piece's job and shape, facts, fairness and credit, the line in the author's own voice, consistency, and proof. Keeps first person, story, humour and rhythm where the publication's guide sets them. Use on "edit my article", "tighten this draft", "proofread my newsletter", "polish this before I publish", "does this sound AI-written".
---

# Editing content

Improve a piece that already exists — an article, a blog post, a tutorial written for a publication, an essay, a feature, a newsletter issue — through focused passes, keeping what the author knows and how they sound, and fixing what the reader can't work around. Editing isn't rewriting. Each pass fixes one dimension, because single-dimension passes catch what an everything-at-once read misses.

In content the voice is part of what the reader came for. A first-person story, an opinion held throughout, a joke, a fragment used for rhythm, a sign-off the publication always uses — those belong to the author and are never defects.

## Voice and audience come from the writing's own guide

Before editing, find the guide the piece answers to and read it: the publication's `writing-guide.md` and `profile.md` (where the user's `CLAUDE.md` says they live, otherwise the project's `publications/` folder). Voice, person, tone, terminology, formatting choices and who the reader is come from that guide, never from this skill.

- Where the guide settles something this skill also covers, the guide wins.
- Where there's no guide, ask who the reader is and what the piece is for before editing anything beyond facts and typos, say what you assumed, and offer to build one with `cw:style-guide`.

## Before editing

- **Establish the piece's job** — what it is, who it's for, and what the reader should do, understand or decide afterwards. You can't judge whether a paragraph belongs without knowing what the piece is trying to be.
- **Edit to the guide, not your instincts.** For anything neither the guide nor the author settles, infer the convention from the piece itself and say what you inferred.
- **Note what you can verify and what you can't** — which claims you checked against a real source, and which you're taking on trust.
- **Read once without editing.** Mark problems on the first pass; fix on the second. Editing while first reading produces line edits on paragraphs that should have been cut.
- **Every edit needs a reason you can state.** "I'd have said it differently" isn't one.

## The five levels of edit

Work down the levels in order. A level is only worth running once the one above is settled — there's no point polishing a sentence in a section that's about to move, or checking a comma in a claim that turns out to be false.

**1. Substantive — is this the right piece?**

- **One job.** Does it set out to do one thing for one reader — teach a task, explain an idea, help someone decide, report what changed, share an experience — or try to be half tutorial, half opinion?
- **It serves the publication** — the reader and the purpose the profile names. A piece serving neither is the one to cut or rethink.
- **The title's promise is kept** in the first screen. A headline that promises more than the piece delivers makes a reader feel tricked by paragraph two.
- **The point, early.** In a piece that opens on a story or a scene, the nut graf — the paragraph that says what the piece is about and why it matters — arrives by the second or third paragraph ([nut graf](https://en.wikipedia.org/wiki/Nut_graph)). In a direct piece, the answer comes first.
- **Evidence for the central claim** — data, an expert, a worked example, the writer's own result. A claim that matters with nothing behind it is the biggest hole a piece can have.
- **Flow.** Each section hands off to the next, so a reader always knows why they're reading this part now. A section that could be shuffled anywhere is a list pretending to be an argument.
- **The middle holds** rather than sagging into five examples of one point; the same point isn't made twice in different words.
- **Every anecdote pays off** — connect it to the point or cut it.
- **The ending lands** — a kicker, a callback to the opening, the takeaway, or the one ask the profile names — not a summary of what the reader just read.

**2. Accuracy — is it true, fair and credited?**

- **Facts, figures, names and dates** checked against the original source — the study, not the press release; the report, not the post that summarized it.
- **Certainty matches the evidence.** A single or observational study "suggests" or "is linked to"; "proves" and "causes" need evidence that supports them. Overstated causation from correlational evidence is a documented failure of science and health writing, and it usually starts in the press release ([Sumner et al., BMJ 2014](https://www.bmj.com/content/349/bmj.g7015)).
- **Quotes** checked against the recording or notes: words exact, context not distorted, remarks from different moments never stitched into one. Any trimming is marked as the guide says.
- **Code in a tutorial runs.** Run every command and every sample, in order, from a clean start, copying from the draft rather than your own files — the rules are `write:code-samples`' "Code in a tutorial". An example that doesn't work is the error a reader of a tutorial can't forgive.
- **Attribution and originality.** Borrowed words, ideas, data and images are credited and linked; nothing is close-paraphrased. A draft written with AI assistance is checked for lifted passages.
- **Rights.** Every quoted excerpt, image, chart, lyric or embedded post is used within its licence, fair use or fair dealing, or with permission.
- **Fairness.** No unverified allegation about a named person or company; anyone criticised has had a chance to respond.
- **Disclosure.** Every sponsorship, affiliate link or gifted product the profile says must be disclosed is disclosed clearly and next to what it concerns, not at the foot of a long post — the FTC asks for disclosures that are "clear and conspicuous" ([FTC](https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking)).
- **The claims that don't look like facts** too: timeframes, prices, "always", "everyone", "the first".
- **Flag what you couldn't verify**, visibly, and hand the list to whoever can check it.

**3. Line — can the reader follow it, in this voice?**

- **Rhythm is part of the voice.** Check sentences over about 25 words and split them unless the length is doing work ([GOV.UK](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-language/)); vary length, and keep the short sentence that lands a point. Never flatten a writer's rhythm into uniform medium sentences.
- **A sentence with two "and"s, or a pile of commas,** usually holds two ideas; split it unless the run is deliberate.
- **Front-load the information** in expository passages; in narrative passages, keep the order the story needs.
- **Fix unclear pronouns** — the "this" that points at a whole previous paragraph.
- **Cut throat-clearing** — "In this post, I'm going to…", "Before we dive in…" — and filler ("basically", "essentially", "just"), without cutting the asides that are the voice.
- **Make the abstract concrete** — the dish, the number, the place, the day it happened.
- **Active where there's a real actor**, and nominalizations turned back into verbs ("make an improvement" → "improve").

**4. Copy — is it consistent?**

- **Person and tone held** as the guide sets them, from the first line to the last.
- **One term per concept**, matching the guide's word list.
- **Names** of people, companies and products spelled and capitalized exactly as their owners write them.
- **Titles of works** (books, films, publications, articles) and **quote attribution** formatted as the guide says, the same way each time.
- **Words about people** relevant, respectful and in the terms people use for themselves, against the guide's list.
- **Headings, captions and pull quotes** in the guide's case and style.
- **Recurring parts** — the opening line, the sign-off, the call to action, the author line, the "updated on" note — in the publication's standard form.
- **Numbers, dates and punctuation** to the guide's format.

**5. Proof — will it render, everywhere it's read?**

- Every link resolves and goes where its text says; affiliate links are tagged as the platform requires.
- Images load, have alt text written from the image's purpose, and carry their credit.
- **Read the rendered piece**, not the source — the platform preview on a phone as well as a desktop; for a newsletter, a test send to a real inbox, and with images turned off.
- The title, description and social preview show what the piece is about.
- **After substantive edits**, the title, subtitle, description and any pull quote still match what the piece now says.
- Typos, doubled words and stray formatting characters.

## Quick-pass checks

For a fast edit, or a short piece that doesn't need all five levels. The plain-language test is [ISO 24495-1:2023](https://www.iso.org/standard/78907.html)'s: can the intended reader **easily find what they need, understand it, and use it** ([IPLF summary](https://www.iplfederation.org/iso-standard/))?

- **Word level** — cut weak intensifiers and filler; swap inflated words for plain ones where they're used in the inflated sense. The swap list is in `write:writing-standards`.
- **Sentence level** — one idea per sentence, long sentences checked, lengths varied, the point where the reader needs it.
- **Paragraph level** — one topic each, a strong first sentence, white space between.
- **Piece level** — read only the title, the opening and the subheads: do they tell a scanning reader what the piece is and where to find their part?

## The AI-tell pass

Run it on anything published under a person's name — a reader who decides a piece was generated stops trusting the author. The full catalogue is the AI writing detection reference in `write:writing-standards`; the short version:

- **Claims that don't hold** — a citation, quote or study that doesn't exist or doesn't say what the piece claims. Check the sources before the style.
- **Em-dash density** — the flag is frequency and pattern, not the character: about 3 per 1,000 words is a signal, 6 is strong, and two in one paragraph is worth a look; swap for commas, colons, parentheses or a full stop. A guide whose voice uses em-dash asides wins.
- **Stock vocabulary** — delve, leverage, robust, comprehensive, pivotal, seamless, transformative, "furthermore", "moreover".
- **Stock phrases** — "In today's fast-paced world…", "It's worth noting that…", "At its core…", "In conclusion…", "Whether you're a X, Y, or Z…". Delete, or rewrite as something the author would say aloud.
- **Structural patterns** — every section the same length, every list exactly three items, a summary restating what was just said, a closing that congratulates the reader, an opinion piece that never takes a side.

A first-person aside, a joke, a fragment for rhythm or the publication's sign-off is voice, not a tell.

## Working with the author

1. **Run a pass and present what you found** — where, and why it's a problem for the reader.
2. **Propose the replacement**, not just the defect.
3. **Separate the fixes from the questions** — corrections you can make, and facts only the author or a source can settle. Batch the questions.
4. **Let the author decide.** They own the piece and usually know something about the subject you don't.
5. **Re-check the earlier levels after each round**, and stop when a full pass finds nothing new.

The problems content edits keep meeting, with fixes, and a worked before-and-after are in [references/common-problems.md](references/common-problems.md).

## Boundaries

- **The rules every piece obeys** — sentences, claims, credit and rights, never hard-wrap → `write:writing-standards`.
- **Writing from scratch** is out of scope — draft with `cw:article-standards` or `cw:newsletter-standards`, then edit here.
- **The conventions being edited to** — which term wins, the date format, the person and tone → `cw:style-guide`. This skill enforces a standard; it doesn't set one.
- **A full review with numbered findings** → `/cw:review`; **drift across the whole archive** → `/cw:style-check`; **the machine-written sweep as a report** → `/write:ai-check`.
- **Photos, charts and their credits** → `cw:images-and-diagrams`; **code** → `write:code-samples`.
- **Documentation** is edited with `tw:editing-standards`.
