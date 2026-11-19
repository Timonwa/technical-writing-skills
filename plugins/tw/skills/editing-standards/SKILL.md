---
name: editing-standards
description: >-
  Editing documentation that already exists — a docs page, a user guide, an internal doc, a README, a reference entry or an engineer's draft — in focused passes: the five levels of edit, word and sentence checks, plain-English swaps and an AI-tell sweep, to the project's style guide. Use on "edit this doc", "review this draft page", "proofread this page", "polish this README", "clean up this doc", "does this doc sound AI-written". Edits, never writes from scratch.
---

# Editing documentation

Improve a document that already exists through focused passes, preserving what the author knows and correcting what the reader can't work around. Editing isn't rewriting — each pass fixes one dimension, because single-dimension passes catch what an everything-at-once review misses.

## Voice and audience come from the writing's own guide

Before editing, find the project's style guide, glossary or terminology list and the conventions its `AGENTS.md` or contributing docs record, and read them — ask for them before concluding there isn't one. Voice, person, tone, terminology and formatting choices come from that guide, never from this skill.

- Where the guide settles something this skill also covers, the guide wins.
- Where the guide is silent or there isn't one, `tw:docs-standards` is the default — "you", present tense, imperatives for instructions, the writer kept out, one need per page — and a page that departs from it is a finding, not a matter of taste. Apply it without asking; ask only who the reader is and what the page is for, if the page doesn't make that clear.
- For anything neither the guide nor the defaults settle — the serial comma, the date format, number style — infer the convention from the document itself and say what you inferred.

## Before editing

- **Establish the document's job** — which need it serves, who it's for, and what the reader should be able to do afterwards. You can't judge whether a paragraph belongs without knowing what the document is trying to be.
- **Edit to the house standard, not your instincts.** The style guide, glossary or terminology list is the standard the author is entitled to; say which standard you applied.
- **Establish what you can verify and what you can't.** Note which claims you checked against a real source, and which you're taking on trust.
- **Read once without editing.** Mark problem areas on the first pass; fix on the second. Editing while first reading produces line edits on paragraphs that should have been cut.
- **Preserve the author's knowledge and voice.** An engineer's draft is usually right and badly organized — the value is in the facts, and those survive every pass. Every edit needs a reason you can state.

## The five levels of edit

Work down the levels, in order. A level is only worth running once the level above it is settled: there's no point polishing a sentence in a section that's about to move, and no point checking a comma in a claim that turns out to be false.

**1. Substantive — is this the right document?**

- **One need per page** — learning (tutorial), a task (how-to), lookup (reference) or understanding (explanation). A how-to that stops to lecture, a reference that gives advice, a tutorial that pauses for architecture is mixing; fix it by moving, not deleting — the discussion goes to an explanation page and is linked.
- **Order for the reader** — prerequisites before the first step, the main path before the edge cases, the most important information above the point where a reader gives up.
- **What's missing** — prerequisites, the failure case, the expected result, what to do next, the limits and edge cases, the version it applies to.
- **What's present that shouldn't be** — background nobody asked for, content duplicated from a canonical page, the same fact said twice, a section serving the author rather than the reader.
- **A planned feature written as shipped** — remove it. A roadmap item on a docs page reads as a feature the reader can use today.
- Anything out of scope for this page is better as a link.

**2. Technical accuracy — is it true?**

- Check every name, signature, value, default, version, flag, path, UI label and error string against the real source: the code, the running product, the vendor's docs. Never against an older version of the page.
- **Run the commands and the code.** An example that doesn't work is the most expensive defect in a document, because the reader trusts it and debugs their own setup. Check the expected output still matches what the command prints today.
- Check the claims that aren't obviously technical too: timeframes, limits, prices, guarantees, "automatically", "instantly", "always".
- Borrowed text, figures and code are credited and used within their licence.
- Flag anything you couldn't verify, visibly, rather than smoothing over it. Hand the list back to whoever can check it.

**3. Line — can the reader follow it?**

- One idea per sentence; split anything with two "and"s or a comma pile-up. Over 25 words, split it or make it a list ([GOV.UK](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-language/) asks writers to try to split sentences over 25 words; documentation holds to it).
- Front-load the information: the point of the sentence at the start, the qualification after.
- **Instructions are imperatives**, in the active voice: "Edit `config.yaml`", not "the configuration file should be edited" or "you'll want to edit…".
- **One action per step, and where before the action**: "On the **Settings** tab, select **Keys**" ([Google](https://developers.google.com/style/procedures), [Microsoft](https://learn.microsoft.com/en-us/style-guide/procedures-instructions/writing-step-by-step-instructions)).
- Present tense for how the product behaves: "returns", not "will return".
- Fix unclear pronouns — "it", "this", "that" pointing at a whole preceding paragraph.
- Cut the minimisers that make a struggling reader feel stupid — "simply", "just", "easy", "obviously" — and the filler that adds nothing — "basically", "essentially", "note that", "it's worth mentioning".
- Convert passive to active unless the actor is genuinely unknown; turn nominalizations back into verbs ("perform a validation" → "validate"); replace vague quantities with real ones, or say why you can't.

**4. Copy — is it consistent?**

- One term per concept across the whole docs set, matching the glossary; product names exactly as the style guide writes them. A synonym for a technical concept reads as a second concept.
- **Headings** — sequential levels, one H1; task headings start with a bare infinitive ("Create an instance", not "Creating an instance"), use the words readers search for, and are parallel across the page ([Google](https://developers.google.com/style/headings)).
- **Lists** — parallel in structure; numbered for a sequence, bulleted for a set; an optional step starts "Optional:"; a one-step procedure is a sentence, not a list of one.
- **Formatting** — bold only for interface labels and run-in headings; italics for a term being introduced ([Google](https://developers.google.com/style/text-formatting)).
- **Code** — `code` formatting on every identifier, path, command, filename and value, and on nothing that isn't code; every code fence labelled, the same way each time (`ts`, never `ts` here and `typescript` there); placeholders follow the set's one convention (`write:code-samples`).
- **Accessibility** — no "above", "below" or "right-hand side" to orient the reader; no colour, size or position as the only cue; a sentence introduces every table; no images of text, code or terminal output; link text makes sense out of context ([Google](https://developers.google.com/style/accessibility)).
- Capitalization, hyphenation, grammar, punctuation, and number and date formats to the style guide — including in headings, tables, image captions and UI references, where drift hides.

**5. Proof — will it render?**

- Every relative link and anchor resolves; every cross-reference points at a page that exists, including after a page was moved or renamed.
- Frontmatter, navigation entries and sidebar labels are complete and valid for the docs platform.
- Images load, have alt text, and still show the current UI.
- Tables have the right column counts; nothing is cut off; typos, doubled words, stray formatting characters.
- Read the built site, not the Markdown — components, tabs and admonitions break in rendering often enough to be worth the check.

## Quick-pass checks

For a fast review, or a short document that doesn't need all five levels. The international standard is [ISO 24495-1:2023](https://www.iso.org/standard/78907.html): plain language means readers can **easily find what they need, understand it, and use it** — the three tests to apply when a sentence is arguably fine and you can't say why it isn't (the [International Plain Language Federation](https://www.iplfederation.org/iso-standard/) publishes a free summary).

- **Word level** — cut weak intensifiers (very, really, extremely) and filler (just, actually, basically); replace inflated words where they're used in the inflated sense (utilize→use, facilitate→help, in order to→to); kill nominalizations and needless passives. The full table is `write:writing-standards`' plain-English alternatives.
- **Sentence level** — one idea per sentence, at most three conjunctions, over 25 words split or listed, important information front-loaded, varied lengths.
- **Paragraph level** — one topic each, a strong opening sentence, short enough to scan, and white space between them.
- **Document level** — can a reader who skims only the headings tell what the page covers and find their section?

## The AI-tell pass

Run this on anything published under a person's name — in documentation, machine-written patterns read as padding. The full catalog is the AI writing detection reference in `write:writing-standards` (the same one `/write:ai-check` sweeps with); the short version:

- **Claims that don't hold** — a citation, command or default that doesn't exist or doesn't say what the page claims. Checking sources beats any style signal.
- **Em-dash density** — the flag is frequency and pattern, not the character: more than one per page (about 3 per 1,000 words) is a signal; swap for commas, colons or parentheses. A guide that mandates em-dash asides wins.
- **Blacklisted vocabulary** — delve, leverage, robust, comprehensive, pivotal, seamless, transformative, "furthermore", "moreover".
- **Blacklisted phrases** — "In today's fast-paced world…", "It's worth noting that…", "At its core…", "In conclusion…", "Whether you're a X, Y, or Z…". Delete or rewrite as something a person would say aloud.
- **Structural patterns** — every section the same length, every list exactly three items, a summary restating what was just said, a closing that congratulates the reader.
- **Self-check** — read it aloud. If you wouldn't say it to the reader in person, revise it.

The common documentation problems, with a before-and-after edit, are in [references/problems.md](references/problems.md).

## Working collaboratively

1. **Run a pass and present findings** — what you found, where, and why it's a problem for the reader.
2. **Recommend specific edits** — propose the replacement, don't just flag the defect.
3. **Separate the fixes from the questions** — corrections you can make, and facts only the author or an SME can settle. Batch the questions.
4. **Let the author decide.** They own the document, and on technical content they usually know something you don't.
5. **Re-verify the earlier levels after each round**, and repeat until a full pass finds nothing new.

## Boundaries

- **The rules every piece obeys** — sentences, claims, credit, formatting, never hard-wrap → `write:writing-standards`; the documentation voice and page rules → `tw:docs-standards`.
- **Writing from scratch is out of scope** — draft with the skill for that page type, then edit here.
- **The conventions being edited to** — which term wins, how the product is capitalized, the date format → `tw:style-guide`. This skill enforces a standard; it doesn't set one.
- **Restructuring that turns out to need a different page, or several** → the skill for that type (`tw:developer-docs`, `tw:user-guides`, `tw:internal-docs`, `tw:readmes`, `tw:api-reference`), and `tw:docs-planning` if the set itself is wrong.
- **A full review with numbered findings** → `/tw:doc-review`; **the machine-written sweep as a report** → `/write:ai-check`; **articles, essays and newsletters** → `cw:editing-standards`.
- **Marketing and conversion copy** — landing pages, ads, sales sequences, CTAs — is a different craft, and out of scope.
