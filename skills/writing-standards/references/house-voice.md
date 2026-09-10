# House voice — the checkable rules

The rules every piece of developer-facing content obeys, whatever its shape: a docs page, a guide, a README, a tutorial, a changelog entry. Each is phrased so you can check a draft against it and get a yes or no.

**This is the one copy.** The writing skills link here rather than restating it, so a change lands once instead of drifting across five files. Anything specific to one shape — a README's skeleton, a docs page's placement, a guide's five types — lives in that skill, not here.

Word-level swaps (long phrase → short, and the AI-tell vocabulary) are in `prose-editing`'s references, which own that layer.

## Sentences

- [ ] **Active voice.** "The server validates the token", not "the token is validated by the server". Passive is acceptable only when the actor is genuinely unknown or irrelevant.
- [ ] **Present tense.** "The function returns a promise", not "will return".
- [ ] **Under ~25 words per sentence.** Longer means either two sentences or a list.
- [ ] **One idea per paragraph.** A paragraph doing two jobs is two paragraphs.
- [ ] **Address the reader as "you".** "We" only for genuinely shared action; "I" only in an explicitly opinionated piece.
- [ ] **No hedging.** Cut "basically", "essentially", "simply", "just", "of course", "obviously" — each either adds nothing or tells the reader they should already have understood.

## Claims

- [ ] **Concrete over vague.** "Responds in under 200 ms", not "fast". "Retries three times", not "a few times". If you can't name the number, say why.
- [ ] **No marketing adjectives.** "Blazing", "powerful", "seamless", "robust", "lightweight", "modern", "effortless", "cutting-edge". State a capability or a measurement instead. If nothing concrete sits behind the adjective, nothing sat behind it in the first place.
- [ ] **Verify against source, never memory.** Symbol names, signatures, defaults, flags, version numbers, UI labels, and error text are read from the code, the running product, or the vendor's docs. Wrong documentation is worse than none, because a reader trusts it and then debugs the wrong thing.
- [ ] **No access is not permission to guess.** Working from a spec, a recording, or a conversation, write only what you were told — ask for the exact names and values, and leave anything unverified visibly marked. An invention that reads plausibly is the worst outcome available.
- [ ] **Name the version when behaviour depends on it.** "As of v4" or "in Next 16" — otherwise a reader on a different version follows advice that cannot work.

## Code and examples

- [ ] **Prose before every code block.** One sentence saying what it does and when to use it. A reader should follow the page without reading the code.
- [ ] **Examples are complete and runnable.** Real values, no undefined variables, no `// your logic here` standing in for the part that matters. Show the expected output where output is the point.
- [ ] **Show the failure case** where one is likely — the error a reader will actually hit, and what it means.
- [ ] **Elide with `// …`, never with pseudocode.** Cutting an irrelevant middle is fine; inventing plausible-looking API calls is not.
- [ ] **Every code fence names its language** — and names it the same way every time (`ts`, not `ts` here and `typescript` there). An unlabelled fence loses highlighting and tells a reader nothing about what they're looking at.

## Structure

- [ ] **Progressive disclosure.** Simple before complex, the quickstart before the deep dive. Link an advanced topic rather than inlining it, so a beginner isn't buried.
- [ ] **Headings match what a reader would search for.** Descriptive, not clever. "Rotate an API key", not "Key management considerations".
- [ ] **Bullets for three or more items; a table for a matrix** (parameters, options, error codes). Prose for anything with a thread of argument.
- [ ] **No filler opening.** Not "This page explains…", not "In today's fast-moving landscape…". The first sentence carries information.
- [ ] **Document what IS, not what is planned.** A roadmap item in a docs page reads as a shipped feature.

## Formatting

- [ ] **Formatting carries meaning.** **Bold** for UI elements a reader clicks; `code` for commands, identifiers, paths, and filenames; _italics_ sparingly, for genuine emphasis.
- [ ] **Never hard-wrap prose.** One physical line per paragraph or list item; break only where Markdown requires it. A hard-wrapped paragraph produces an unreadable diff on every edit.
- [ ] **One H1, no skipped heading levels**, working relative links.
- [ ] **Define a term on first use, then use exactly that term.** Synonyms for a technical concept read as two different concepts.

## Keeping it true

- [ ] **Current or deleted.** When a change makes a section wrong, fix or remove that section in the same change. A stale document is worse than a missing one.
- [ ] **If a section can't be kept current, replace it with a link** to whatever is the source of truth.
- [ ] **Refresh, don't clobber.** Editing an existing document preserves the parts that are still right and specific to that project — but preserving content is not preserving violations: a section that breaks these rules gets corrected, not kept.
