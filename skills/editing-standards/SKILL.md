---
name: editing-standards
description: >-
  Editing documentation that already exists — a docs page, a user guide, an internal doc, a README, a reference entry, or a draft handed over by an engineer or a colleague — in focused single-dimension passes: the five levels of edit (substantive, technical accuracy, line, copy, proof), word and sentence checks, plain-English substitutions, and an AI-tell sweep. Use on "edit this", "review this draft", "proofread", "polish this", "tighten this up", "clean up this doc", "does this sound AI-written". Edits, never writes from scratch.
---

# Editing

Improve a document that already exists through focused passes, preserving what the author knows and correcting what the reader can't work around. Editing isn't rewriting — each pass fixes one dimension, because single-dimension passes catch what an everything-at-once review misses.

## Before editing

- **Establish the document's job** — which type it is, who it's for, and what the reader should be able to do afterward. You can't judge whether a paragraph belongs without knowing what the document is trying to be.
- **Ask for the style guide, glossary or terminology list**, if one exists. Editing to a house standard is a different job from editing to your instincts, and the author is entitled to the house standard. Where none exists, infer the conventions from the document and say what you inferred.
- **Establish what you can verify and what you can't.** Note which claims you were able to check against a real source, and which you're taking on trust.
- **Read once without editing.** Mark problem areas on the first pass; fix on the second. Editing while first reading produces line edits on paragraphs that should have been cut.
- **Preserve the author's knowledge and voice.** An engineer's draft is usually right and badly organized — the value is in the facts, and those survive every pass. Every edit needs a reason you can state.

## The five levels of edit

Work down the levels, in order. A level is only worth running once the level above it is settled: there's no point polishing a sentence in a section that's about to move, and no point checking a comma in a claim that turns out to be false.

**1. Substantive — is this the right document?**

- Does it match one type, or does it drift between them (a how-to that stops to lecture, a reference that gives advice)?
- Is the order right for the reader — what they need first, first? Is the most important information above the point where a reader gives up?
- What's missing: prerequisites, the failure case, the expected result, what to do next, the limits and edge cases.
- What's present that shouldn't be: background nobody asked for, content duplicated from a canonical page, a section serving the author rather than the reader.
- Is anything out of scope for this document and better as a link?

**2. Technical accuracy — is it true?**

- Check every name, signature, value, default, version, path, UI label and error string against the real source. Never against an older version of the document.
- Run the commands and the code. An example that doesn't work is the most expensive defect in a document, because the reader trusts it and debugs their own setup.
- Flag anything you couldn't verify, visibly, rather than smoothing over it. Hand the list back to whoever can check it.
- Check the claims that aren't obviously technical too: timeframes, limits, prices, guarantees, "automatically", "instantly", "always".

**3. Line — can the reader follow it?**

- One idea per sentence; split anything with two "and"s or a comma pile-up. Under ~25 words as a rule.
- Front-load the information: the point of the sentence at the start, the qualification after.
- Fix unclear pronouns — "it", "this", "that" pointing at a whole preceding paragraph.
- Cut hedging and throat-clearing: "basically", "essentially", "simply", "just", "note that", "it's worth mentioning".
- Convert passive to active unless the actor is genuinely unknown; turn nominalizations back into verbs ("perform a validation" → "validate").
- Replace vague quantities with real ones, or say why you can't.

**4. Copy — is it consistent?**

- One term per concept, throughout, matching the glossary. A synonym for a technical concept reads as a second concept.
- Capitalization, hyphenation, and product naming consistent with the style guide — including in headings, tables, and image captions, where drift hides.
- Heading levels sequential, one H1, headings parallel in grammatical form.
- Lists parallel in structure; numbered for sequence, bulleted for sets.
- Code formatting applied to every identifier, path, command and filename — and not to things that aren't code.
- Every code fence labelled, and labelled the same way each time.
- Grammar, punctuation, and number and date formats to the house standard.

**5. Proof — will it render?**

- Every link resolves, including anchors; every cross-reference points at a page that exists.
- Images load, have alt text, and still show what the text says they show.
- Tables have the right column counts; nothing is cut off.
- Frontmatter is complete and valid.
- Typos, doubled words, stray formatting characters.
- Read the rendered output, not the source. Markdown that looks fine in an editor breaks in a renderer often enough to be worth the check.

## Quick-pass checks

For a fast review, or a short document that doesn't need all five levels.

The international standard here is [ISO 24495-1:2023](https://www.iso.org/standard/78907.html), which defines plain language as communication whose wording, structure and design are so clear that intended readers can **easily find what they need, understand it, and use it**. Those three tests are the ones to apply when a sentence is arguably fine and you can't say why it isn't. The standard itself is paywalled; the [International Plain Language Federation](https://www.iplfederation.org/iso-standard/) publishes a free summary of its principles.

- **Word level** — cut weak intensifiers (very, really, extremely, incredibly) and filler (just, actually, basically); replace inflated words with plain ones (utilize→use, leverage→use, facilitate→help, commence→start, in order to→to); kill nominalizations and passive voice. The full substitution table is in [Plain English alternatives](references/plain-english-alternatives.md).
- **Sentence level** — one idea per sentence, under 25 words usually, at most three conjunctions, important information front-loaded, varied lengths.
- **Paragraph level** — one topic each, a strong opening sentence, short enough to scan, and white space between them.
- **Document level** — can a reader who skims only the headings tell what the document covers and find their section?

## The AI-tell pass

Run this on anything published under a human's name — drafts written or heavily assisted by AI carry recognizable fingerprints, and in documentation they read as padding. The full catalog (the em-dash tell, overused verb, adjective and transition tables, opening, transition and concluding phrase blacklists, filler intensifiers, and the self-check steps) is in [AI writing detection](references/ai-writing-detection.md). The short version:

- **Em dashes are the primary tell** — the flag is frequency and pattern, not the character: more than one per page is a signal; swap for commas, colons, or parentheses. A documented house rule wins — where a style guide mandates em-dash asides, keep the deliberate ones and flag only mechanical overuse.
- **Blacklisted vocabulary** — delve, leverage, robust, comprehensive, pivotal, seamless, transformative, "furthermore", "moreover".
- **Blacklisted phrases** — "In today's fast-paced world…", "It's worth noting that…", "At its core…", "In conclusion…", "Whether you're a X, Y, or Z…". Delete or rewrite as something a person would say aloud.
- **The structural tells** — every section the same length, every list exactly three items, a summary paragraph restating what was just said, a closing that congratulates the reader.
- **Self-check** — read it aloud. If you wouldn't say it to a colleague, revise it.

## Common problems and fixes

- **Buried answer** — the document opens with background and answers the question in paragraph four. Move the answer to the first line.
- **Curse of knowledge** — a draft from an expert that skips the step they stopped noticing years ago. Find the unexplained leap by following the instructions literally.
- **Undefined term on first use** — introduced in the middle, used from the start. Define it where it first appears, then use exactly that term.
- **Untested code block** — placeholder values mixed with real ones, an import missing, output that doesn't match. Run it.
- **Instructions in the passive** — "the configuration file should be edited". Say who does what: "edit `config.yaml`".
- **Wall of prose where a table belongs** — parameters, options, or error codes in paragraphs. Table them.
- **Step that isn't a step** — a numbered item that's an explanation. Move it out of the sequence or turn it into an action.
- **Orphaned warning** — a caution about an irreversible action sitting three paragraphs from the action. Move it to the step.
- **Content duplicated from elsewhere** — cut it and link the canonical source; two copies drift.
- **Stale screenshot or version** — the UI moved, the version bumped. Flag it; don't quietly describe what the image no longer shows.

## Working collaboratively

1. **Run a pass and present findings** — what you found, where, and why it's a problem for the reader.
2. **Recommend specific edits** — propose the replacement, don't just flag the defect.
3. **Separate the fixes from the questions** — corrections you can make, and facts only the author or an SME can settle. Batch the questions.
4. **Let the author decide.** They own the document, and on technical content they usually know something you don't.
5. **Re-verify the earlier levels after each round**, and repeat until a full pass finds nothing new.

## Boundaries

- **The voice rules every document obeys** — sentences, claims, prose before code, concrete over vague, formatting, never hard-wrap → [`writing-standards`'s house-voice.md](../writing-standards/references/house-voice.md). This skill adds only the editing process on top.
- **Writing from scratch is out of scope** — this skill edits what exists. Draft with the skill for that document type, then edit here.
- **The conventions being edited to** — which term wins, how the product is capitalized, the date format → `style-guide`. This skill enforces a standard; it doesn't set one.
- **Restructuring that turns out to need a different document, or several** → the skill for that type (`developer-docs`, `user-guides`, `internal-docs`, `readmes`, `api-reference`), and `docs-planning` if the set itself is wrong.
- **Marketing and conversion copy** — landing pages, ads, sales sequences, CTAs — is a different craft with different goals, and out of scope.

## References

- [AI writing detection](references/ai-writing-detection.md) — the em-dash tell, overused-word tables, AI phrase blacklists, and the self-check.
- [Plain English alternatives](references/plain-english-alternatives.md) — the full inflated-word → plain-word substitution table, plus phrases to delete entirely.
