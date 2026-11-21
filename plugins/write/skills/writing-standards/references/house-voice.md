# House voice — the checkable rules

The rules every piece of writing obeys — a docs page, a README, a changelog entry, a blog post, an essay, a newsletter issue. Check a draft against each and get a yes or no. Person, tone and personality come from the writing's own guide.

**The writing's own guide wins.** That's the project's style guide for documentation, or the publication's writing guide for content. Where it has already decided something — heading case, the serial comma, how a name is written, whether the piece says "you", "we" or "I" — follow it on that point and apply these rules to everything it doesn't cover. These are defaults for the gaps, not a replacement for a standard someone already agreed.

Word-level swaps (long phrase → short): [plain-english-alternatives.md](plain-english-alternatives.md). The AI-tell vocabulary: [ai-writing-detection.md](ai-writing-detection.md), swept by `/write:ai-check`. Code in a piece: `write:code-samples`' checklist.

## Sentences

- [ ] **Active voice.** "The server validates the token", not "the token is validated by the server". Passive is acceptable only when the actor is genuinely unknown or irrelevant.
- [ ] **Present tense for how things work.** "The function returns a promise", "the dough doubles in an hour", not "will return". A story told in the past tense stays in the past tense.
- [ ] **Check any sentence over about 25 words, and vary the lengths.** Split a long one unless the length is deliberate — [GOV.UK](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-language/) says to "try to split up sentences that are over 25 words long", not never to write one. A run of sentences all the same length reads mechanically; mix short and long.
- [ ] **Sentences average 15–20 words** across the piece ([Plain English Campaign](https://mstrust.org.uk/sites/default/files/plain_english_campaign_how_to_write_plain.pdf)) — an average, so short and long sentences both belong.
- [ ] **One idea per paragraph, and no more than 5 sentences** ([GOV.UK](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-language/)). A paragraph doing two jobs is two paragraphs.
- [ ] **A reading level the reader can manage.** For a general audience, about a reading age of 9, checked with a readability tool ([Home Office](https://design.homeoffice.gov.uk/accessibility/written-content/readability)); the score points at sentences to look at, and a guide that pitches higher wins.
- [ ] **One person, held throughout.** Use the person the guide sets — "you", "we" or "I" — and don't drift between them without a reason. With no guide, documentation takes the voice in `tw:docs-standards`; content asks.
- [ ] **No filler or minimisers.** Cut "basically", "essentially", "actually", "of course", and the minimisers "simply", "just", "obviously", "easy" — each either adds nothing or tells a reader who's struggling that they should already have understood.

## Claims

- [ ] **Concrete over vague.** "Responds in under 200 ms", not "fast". "Retries three times", not "a few times". "Rose for 90 minutes", not "a while". If you can't name the number, say why.
- [ ] **Certainty matches the evidence.** State an established fact plainly; a single or observational study "suggests" or "is linked to", it doesn't "prove" or "cause". Check a press release's claim against the study itself — press releases are where exaggerated causal claims usually start ([Sumner et al., BMJ 2014](https://www.bmj.com/content/349/bmj.g7015)). This is calibration, not hedging: the filler rule above cuts empty words, not honest uncertainty.
- [ ] **No marketing adjectives.** "Blazing", "powerful", "seamless", "robust", "lightweight", "modern", "effortless", "cutting-edge", "game-changing". State a capability, a measurement or what happened instead. If nothing concrete sits behind the adjective, nothing sat behind it in the first place.
- [ ] **Verify against source, never memory.** Names, figures, dates, quotes, prices, symbol names, defaults, version numbers, UI labels and error text are read from the source — the code, the running product, the vendor's docs, the original study, the recording of the person quoted. A wrong fact is worse than a missing one, because a reader trusts it and acts on it.
- [ ] **Say where a figure comes from.** A statistic, a study or a quote links to its original source — not an aggregator or a post that cited it — or says why it can't.
- [ ] **No access is not permission to guess.** Working from a spec, a recording, or a conversation, write only what you were told — ask for the exact names and values, and leave anything unverified visibly marked. An invention that reads plausibly is the worst outcome available.
- [ ] **Name the version or date when the answer depends on it.** "As of v4" or "as of the 2026 tax year" — otherwise a reader on a different version follows advice that cannot work.
- [ ] **An example, figure or source beside every claim that matters.** What kind depends on the writing — a runnable sample, a measurement, a quote, an anecdote with a point — but a claim that matters is never left standing alone.

## Credit, rights and fairness

- [ ] **Credit what you borrow.** Words, ideas, data, findings and images are credited to whoever originated them, linking the original. Quote it, or paraphrase it in genuinely your own words — never a close paraphrase that keeps the source's structure with the words swapped ([SPJ Code of Ethics](https://www.spj.org/spj-code-of-ethics/): "Never plagiarize. Always attribute."). A draft written with AI assistance is checked for passages lifted from a source.
- [ ] **Reproduce others' work only within its licence, fair use or fair dealing, or with permission** — an excerpt, a chart, lyrics, a poem, an embedded post, borrowed code — and credit it the way its licence asks.
- [ ] **Describe people only as far as the piece needs.** Mention someone's age, disability or medical condition only when it's relevant; ask whether they prefer person-first or identity-first language; use the pronouns they've communicated, and "they" when you don't know; never "suffer", "victim" or "handicapped" for a person with a disability ([Mailchimp](https://styleguide.mailchimp.com/writing-about-people/)). Apply the same relevance test to gender and ethnicity. The guide's own list of terms wins where it has one.

## Structure

- [ ] **Most important first.** The answer, the result or the point in the opening lines; the background after it. A piece that opens on a story — a feature, an essay, a personal post — reaches its point, the paragraph that says why this matters, by the second or third paragraph ([the nut graf](https://en.wikipedia.org/wiki/Nut_graph)); an essay that deliberately builds to its point does so because its guide says it does.
- [ ] **Lead with the reader's goal, not the feature or the topic.** "Share a draft with a reviewer", not "The share dialog"; "Bread that rises overnight", not "About yeast".
- [ ] **Progressive disclosure.** Simple before complex, the main path before the deep dive. Link an advanced topic rather than inlining it, so a beginner isn't buried.
- [ ] **Headings say what's under them, in the words a reader would use or search for.** "Rotate an API key", not "Key management considerations"; "Why my sourdough stopped rising", not "Lessons learned". Where the guide allows a playful heading, it still tells the reader what follows.
- [ ] **Bullets for three or more parallel items a reader will scan; a table for anything compared across the same attributes.** Prose for anything with a thread of argument.
- [ ] **No filler opening.** Not "This page explains…", not "In today's fast-moving landscape…". The first sentence carries information, or starts the story that's going to.
- [ ] **Say what is, not what's planned.** A roadmap item in a docs page reads as a shipped feature; a promised follow-up post that never comes reads as a broken promise.

## Formatting

- [ ] **Formatting carries meaning, never decoration.** What bold and italics mean is the guide's call, applied the same way every time; for documentation, `tw:docs-standards` sets the default. `code` for commands, identifiers, paths and filenames, wherever they appear. Emphasis sprinkled for rhythm is noise to a scanner and a screen reader.
- [ ] **Never hard-wrap prose** where the piece is kept as Markdown. One physical line per paragraph or list item; break only where Markdown requires it. A hard-wrapped paragraph produces an unreadable diff on every edit.
- [ ] **No skipped heading levels**, one H1 where the piece is kept as Markdown (a CMS usually supplies the title as the H1), and links that resolve, with text that makes sense out of context — never "click here".
- [ ] **Alt text on every meaningful image**; a decorative one is marked decorative (`tw:images-and-diagrams`, `cw:images-and-diagrams`).
- [ ] **Define a term on first use, then use exactly that term.** Synonyms for one concept read as two different concepts.

## Keeping it true

- [ ] **Current, or corrected in the open.** In living writing — a docs set, a guide kept up to date — fix or remove a wrong section in the same change; a stale document is worse than a missing one. A dated piece — an article, a sent issue — is a record: correct it with a visible, dated note rather than deleting it or rewriting it silently ([SPJ](https://www.spj.org/spj-code-of-ethics/): "Acknowledge mistakes and correct them promptly and prominently").
- [ ] **One home per fact, within a body of writing.** In a docs set or a series, each fact, rule or explanation lives in one place and the rest link there instead of restating it; copies drift, and a reader who meets two versions can't tell which is current. A standalone article restates what its reader needs and links the source for depth. Inside any piece, say each thing once.
- [ ] **In living writing, a section that can't be kept current becomes a link** to whatever is the source of truth.
- [ ] **Refresh, don't clobber.** Editing an existing piece preserves the parts that are still right and specific to it — but preserving content is not preserving violations: a section that breaks these rules gets corrected, not kept.
