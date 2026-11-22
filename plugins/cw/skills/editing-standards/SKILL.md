---
name: editing-standards
description: >-
  Editing a piece of content that already exists — a blog post, article, tutorial, essay, feature or newsletter issue on any subject — in focused passes down the five levels of edit: the piece's job and shape, facts, fairness and credit, the line in the author's own voice, consistency, and proof. Keeps first person, story, humour and rhythm where the publication's guide sets them. Use on "edit my article", "tighten this draft", "proofread my newsletter", "polish this before I publish", "does this sound AI-written".
---

# Editing content

Improve a piece that already exists — an article, a blog post, a tutorial written for a publication, an essay, a feature, a newsletter issue — through focused passes, keeping what the author knows and how they sound, and fixing what the reader can't work around. Editing isn't rewriting. Each pass fixes one dimension, because single-dimension passes catch what an everything-at-once read misses.

In content the voice is part of what the reader came for. A first-person story, an opinion held throughout, a joke, a fragment used for rhythm, a sign-off the publication always uses — those belong to the author and are never defects.

## Voice and audience come from the writing's own guide

Before editing, find the publication's `profile.md` and `writing-guide.md` and read them:

- **In a codebase:** the folder the project's `AGENTS.md` names, or, for a guide kept outside the repo, the folder the user's personal agent instructions name (such as `~/.claude/CLAUDE.md`); otherwise the project's `publications/` folder.
- **In a chat app:** the project's files (a Claude Project's knowledge, or the equivalent elsewhere), or files attached to the conversation.
- **Otherwise:** ask for them.

Voice, person, tone, terminology, formatting choices and who the reader is come from that guide, never from this skill.

- Where the guide settles something this skill also covers, the guide wins.
- Where there's no guide, ask who the reader is and what the piece is for before editing anything beyond facts and typos, say what you assumed, and offer to build one with `cw:style-guide`.

When a guide changes: in a codebase, save the file where it was found; in a chat app, give the user the updated file to replace in the project. Never write inside the installed plugin.

## Ask first

Read the answers from the topic's `brief.md`, then `profile.md`'s Defaults, then the request; ask only what's missing. Ask with the app's question tool where it has one, so the choices can be picked; otherwise as a numbered list answered by number. Offer choices where the answers are known and a short typed answer otherwise; where the profile has a default, show it and ask whether to use it. Record each answer in the `brief.md` field it belongs to — the "What this topic becomes" table or a row of "The brief" — and any answer with no field under "Notes for whoever picks it up next", so the next skill doesn't ask again.

1. **Which formats should this edit cover?** blog post (`blog.md`) · newsletter issue (`newsletter.md`) · social posts (`social.md`) — pick any. Default: every format the brief lists as `drafting`.
2. **How deep?** all five levels · a quick pass · one level (name it). Default: all five levels for a piece not edited before.
3. **Who is the reader, and what should they do or know afterwards?** Short answer. Default: the brief's reader and its one action.
4. **Should the edits go into the file, or come back as proposals?** into the file, each with its reason · proposals with replacements to choose from. Default: proposals.
5. **Does it carry code or commands a reader will run?** yes, with the repository or demo project · no.
6. **What length is it aiming for?** A word count. Default: the guide's target for this kind of piece.

## Before editing

- **Work in the topic folder.** A topic lives in `topics/<yyyy-mm>-<slug>/` in the publication's folder. Edit the format files the brief lists — `blog.md`, `newsletter.md`, `social.md` — take the job from its `brief.md` ([template](../style-guide/references/publication-template/topics/_template/brief.md)), and check claims against its `sources.md`. A full copy in `copies.md` is `blog.md` itself, so it isn't edited separately; its opening excerpt is, when the opening changes. In a chat app, the topic's files are named `<topic folder>--<file>`. If "Held by" in `brief.md` names someone else and the status isn't `paused`, leave it and say so; otherwise set Held by and the date, and when you stop, set each format's status and clear Held by.
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
- **Working targets** — paragraphs of 150 words or fewer, a subheading at least every 300 words, and no more than a quarter of sentences over 20 words ([Yoast's scoring](https://github.com/Yoast/wordpress-seo/blob/trunk/packages/yoastseo/src/scoring/assessments/SCORING%20READABILITY.md)); roughly a US grade 8–9 reading level for a general audience (common practice). Run a checker such as Hemingway or Yoast and treat the score as a pointer to sentences worth a look, never as the goal.

Techniques editors use on every pass (common practice):

- **Leave a gap** between drafting and editing, overnight if the deadline allows; the writer's eye fills in what isn't there.
- **Read it aloud**, or have the device read it; rhythm problems and missing words surface by ear.
- **Change the view** for the proof — a different font, the phone preview, a printout — so the eye reads what's on the page, not what it remembers.
- **Cut by a tenth.** A second draft roughly 10% shorter than the first is a common target, and the cut usually comes from throat-clearing and repetition.

## The AI-tell pass

Run it on anything published under a person's name — a reader who decides a piece was generated stops trusting the author. The full catalogue is the AI writing detection reference in `write:writing-standards`; the short version:

- **Claims that don't hold** — a citation, quote or study that doesn't exist or doesn't say what the piece claims. Check the sources before the style.
- **Em-dash density** — the flag is frequency and pattern, not the character: more than about 3 per 1,000 words is a signal, more than about 6 or two in one paragraph is strong. That's a working threshold, the same one `/write:ai-check` scores against, not a published standard; swap for commas, colons, parentheses or a full stop. A guide whose voice uses em-dash asides wins.
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
- **A full review with numbered findings** → `/cw:review`; **bringing an old piece up to the current guide** → `cw:content-refresh`; **the machine-written sweep as a report** → `/write:ai-check`.
- **Photos, charts and their credits** → `cw:images-and-diagrams`; **code** → `write:code-samples`.
- **Documentation** is edited with `tw:editing-standards`.
