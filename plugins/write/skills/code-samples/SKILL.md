---
name: code-samples
description: >-
  Writing and maintaining the code inside any piece — docs, tutorials, technical articles: a sample complete and runnable, eliding correctly, expected output and the likely error, code built up step by step in a tutorial, testing so samples don't rot, placeholder conventions, languages at parity, no insecure practice a reader will copy, copy-paste ergonomics, and recording the version verified against. Use on "code example", "code sample", "snippet", "the example doesn't work", "add an example", "tutorial code", "test the docs examples".
---

# Code samples

A reader copies a sample before reading the paragraph above it. Every rule here follows from that: the sample has to work on arrival, and it has to be safe to run.

A sample is also the most perishable content in any piece — a docs page or a published tutorial alike. It's correct on the day it's written and silently wrong by the next release unless something checks it.

## Voice and audience come from the writing's own guide

Before applying this skill, find the guide the writing answers to and read it — for documentation, the project's style guide and conventions; for content, the publication's `profile.md` and `writing-guide.md`:

- **In a codebase:** what the project's `AGENTS.md` names (its style guide, or a publication's folder), or, for a guide kept outside the repo, what the user's personal agent instructions name (such as `~/.claude/CLAUDE.md`); otherwise the contributing docs or the project's `publications/` folder.
- **In a chat app:** the project's files (a Claude Project's knowledge, or the equivalent elsewhere), or files attached to the conversation.
- **Otherwise:** ask.

Voice, person, tone, terminology, formatting choices and who the reader is come from that guide, never from this skill.

- Where the guide settles something this skill also covers, the guide wins.
- Where there's no guide: for documentation, the documentation voice in `tw:docs-standards` is the default; for content, ask who the reader is and what the piece is for, and offer to build a guide with `cw:style-guide`.
- When a guide changes: in a codebase, save the file where it was found; in a chat app, give the user the updated file to replace in the project.
- The rules below apply to code in a docs page and in a published tutorial; [Code in a tutorial](#code-in-a-tutorial) adds what a build-along needs.

## Ask first

Read the answers from the request, the guide, the project (its package files, lockfile and existing samples) and, for content, the topic's `brief.md` first; ask only what's missing. Ask with the app's question tool where it has one, so the choices can be picked; otherwise as a numbered list answered by number. Offer choices where the answers are known and a short typed answer otherwise. For content, record the answers in the topic's `brief.md`, under Notes for whoever picks it up next, so the next skill doesn't ask again.

1. **Where does the code go?** A docs page (path) · a tutorial or technical article in a topic's `blog.md` · a newsletter issue's `newsletter.md`.
2. **Which languages, and which versions is it verified against?** Short answer: language, runtime and library versions, such as "TypeScript, Node 22, the SDK at 4.2".
3. **Can the samples be run before they ship?** Yes, here · in the companion repository (link; the brief's Demo project row) · no, so they're marked unverified.
4. **Which placeholder convention?** The guide's · uppercase with underscores (`PROJECT_ID`), the default where the guide sets none.
5. **For a tutorial, where does the reader start?** An empty folder · a starter project or branch (link) · the end of the previous part in the series.
6. **How are the samples kept working?** Extracted and run in checks · included from real files in a repository · run by hand on a schedule · nothing yet.

## One sample, one question

- **Each sample answers exactly one thing.** A sample demonstrating authentication, pagination and error handling at once demonstrates none of them, because the reader can't tell which lines are the point.
- **Minimal but complete** — every line needed to run it, and nothing that isn't. Cut the logging, the framework scaffolding, the unrelated configuration.
- **Fits on a screen** where possible. Past about 30 lines (a rule of thumb, not a published limit), a reader stops reading and starts scrolling; past that length, it's usually a tutorial rather than a sample, and is built up in steps (see Code in a tutorial).
- **Introduce it** with a sentence saying what it does, usually ending in a colon right before the block ([Google](https://developers.google.com/style/code-samples)). The reader decides from that sentence whether this is the sample they need.
- **Show the line that matters.** Where the platform supports line highlighting, use it; otherwise order the sample so the important call isn't buried.

## Complete and runnable

- **Include the imports, the setup, and the client construction** — or state explicitly, once per page, what every sample on it assumes. A sample missing its import is a sample that fails for everyone on first try.
- **Real values, not descriptions of values.** No undefined variables, no `config` that appears from nowhere, no type that's never constructed.
- **Never leave the interesting part as a comment.** `// your logic here` in the middle of the thing being demonstrated is the defect this whole skill exists to prevent.
- **Elide with a comment, never with invented code.** Mark an irrelevant middle with a comment in the sample's language saying what's left out (`// Configure the client`, `# Configure the client`), never `...` or `…` ([Google](https://developers.google.com/style/code-samples)) — a reader can't tell an ellipsis from code, and in some languages, such as Python, `...` is valid code that runs. Filling the gap with plausible-looking calls that don't exist is never honest.
- **A block with an omission isn't click-to-copy** ([Google](https://developers.google.com/style/code-samples)). A copy button promises the block runs as copied.
- **Show the expected output** where the output is the point — the response body, the printed result, the created file. Label it as output so nobody pastes it back in as code.
- **Show the error** where failure is likely, with what it means and what to do. The reader will meet it; the only question is whether they meet it with an explanation to hand.
- **Handle errors when that's part of what's shown** ([Microsoft](https://learn.microsoft.com/en-us/style-guide/developer-content/code-examples): "Show exception handling only when it's intrinsic to the example"). Where it isn't, say at that line that real code must handle the failure, so the omission isn't taken as permission.

## Placeholders and example values

- **One placeholder convention per docs set or publication**, obviously fake, and consistent everywhere. Where the guide sets none, use [Google's](https://developers.google.com/style/placeholders): uppercase with underscores (`PROJECT_ID`), no possessives (`PROJECT_ID`, never `MY_PROJECT_ID`), and after the sample, a list introduced with "Replace the following:" that explains each one in the order it appears.
- **Never a real credential.** Not an expired one, not a revoked one, not one from a test account. Keys pasted out of a terminal into published writing are a recurring source of real incidents — check every sample for anything that looks like a secret before it publishes.
- **Read secrets from the environment in samples**, rather than showing a literal assignment. This is both safer and the practice you want copied.
- **Use reserved example values and obviously fictional names** for hosts, emails and identifiers: the domains `example.com`, `example.org`, `example.net` and the `.example` top-level domain ([RFC 2606](https://www.rfc-editor.org/rfc/rfc2606), [RFC 6761](https://www.rfc-editor.org/rfc/rfc6761)); the IPv4 ranges `192.0.2.0/24`, `198.51.100.0/24` and `203.0.113.0/24` ([RFC 5737](https://www.rfc-editor.org/rfc/rfc5737)); the IPv6 prefix `2001:db8::/32` ([RFC 3849](https://www.rfc-editor.org/rfc/rfc3849)); North American phone numbers `555-0100` to `555-0199` (common practice); UK mobile numbers `07700 900000` to `07700 900999`, set aside for drama ([Ofcom](https://www.ofcom.org.uk/phones-and-broadband/phone-numbers/numbers-for-drama)). Never a real customer's data, a real person's details, or a real internal hostname.
- **Keep example values plausible in shape** — an id shaped like the product's real ids, a timestamp in its real format. A reader uses the sample to infer the format.

## Borrowed code

- **Borrowed code keeps its licence.** Code from a library's docs, a gist or an answer site is under its author's licence; Stack Overflow's contributions are under CC BY-SA, which asks for credit and a link. Credit and link the source in a comment or beside the block.
- **Prefer writing the sample yourself** over adapting someone else's, and never present borrowed code as your own.

## Don't model bad practice

Readers copy samples into production, unchanged, at a rate that surprises everyone. A sample is an implicit recommendation:

- No secrets hard-coded, no credentials in a URL.
- No disabled certificate verification, no disabled security checks, no permissive wildcards "for the example".
- No swallowed exceptions, no empty catch blocks.
- No unvalidated input flowing into a query, a command, or the page.
- Where a shortcut is genuinely necessary to keep the sample short, **say so at that line** and link what the real version should do.

## Multiple languages

- **Match the languages to the audience**, and keep them at parity. A sample present in three languages and missing in the fourth reads as an unsupported language.
- **Same scenario, same values, same variable names** across languages, so a reader can diff them.
- **Idiomatic in each language**, not one language transliterated into the others. A sample that looks like it was translated undermines confidence in the library.
- **Generated multi-language samples** are a reasonable baseline, but run them before publishing. Generators produce plausible code, not correct code.

## Keep them working

Pick one, and be honest about which you have:

- **Extract and run the samples automatically** as part of the same checks as everything else — compile them, execute them, assert the output. This is the only approach that survives a year without attention.
- **Keep the samples as real files** in a repository — for a tutorial, its companion repo — and include them into the piece, rather than pasting copies. A sample that's also a test can't rot quietly.
- **Failing both, run them manually on a schedule** tied to releases, and record the date.

And regardless:

- **Record the versions a sample was verified against** — the library, the runtime, the API version — where the behaviour depends on it.
- **Pin versions in install commands** where a major version would break the sample.
- **Re-check samples when the thing they call changes.** A release that changes a signature has a writing task attached to it — docs to update, published tutorials to refresh — and finding the affected samples is a search, not a memory exercise.
- **A sample you can't verify gets marked as unverified**, not published as though it works.

## Code in a tutorial

A tutorial or a build-along article doesn't show one sample; it builds a working project in steps, and the reader types or pastes along. Everything above still holds for each block, and these add to it:

- **Start from a stated beginning** — the versions, the starter project or empty folder, and what's installed — so the first block works for someone who has nothing else.
- **Each step shows the code it adds and says where it goes**: which file, and where in it. A block with no file named leaves the reader guessing whether to replace or add.
- **Explain every block** — what it does and why it's there, before or right after it. A reader shouldn't run code nobody explained.
- **Build up complexity gradually**: the simple version first, then each addition, so every step changes one thing the reader can see work. [Microsoft](https://learn.microsoft.com/en-us/style-guide/developer-content/code-examples) reserves complicated examples for tutorials for exactly this reason — there's room to explain them step by step.
- **Show the whole file where a reader could lose their place**, and at the end, so anyone who went wrong can compare.
- **The code in the piece matches the companion repository** at that step — same names, same versions, same order. A tutorial and its repo that disagree leave the reader trusting neither.
- **Run the whole tutorial from its stated beginning** before publishing, on a clean machine or container, copying from the rendered piece rather than your editor. That's the only check that catches the step you did but didn't write down.

## Copy-paste ergonomics

- **One command per block** when each has to be run separately and checked. Chained commands in one block hide which one failed.
- **Don't mix commands and their output** in the same block — the reader copies both and the shell chokes on the output.
- **Don't prefix shell commands with a prompt character.** It gets copied and breaks the command. If you must show a prompt, show output separately.
- **Label every fence with its language**, and label it the same way across the whole docs set or publication. An unlabelled fence loses highlighting and tells the reader nothing.
- **Keep lines short enough not to wrap** in the rendered page — wrap at 80 characters ([Google](https://developers.google.com/style/code-samples)), less where readers are on phones; a wrapped line is misread as two.
- **Indent the way the language's own style guide does**; where it has none, spaces rather than tabs, two per level ([Google](https://developers.google.com/style/code-samples)), and the same throughout the set.
- **Comments explain the non-obvious**, not the syntax. A comment restating what the line plainly does is noise in a sample that's meant to be skimmed.

## Before it ships

Each is a yes or no:

- [ ] Introduced by a sentence saying what it does (see [Introduce it](#one-sample-one-question)).
- [ ] Fence labelled with its language, the same way across the set (see [Copy-paste ergonomics](#copy-paste-ergonomics)).
- [ ] It runs as written — imports present, real values, nothing undefined.
- [ ] The thing being demonstrated is in the sample, not left as a comment.
- [ ] No real credential, key, token, internal hostname or customer data anywhere in it.
- [ ] Nothing in it models a practice you'd not want copied into production — disabled checks, swallowed errors, secrets in code.
- [ ] Expected output shown where output is the point; the likely error shown where failure is likely.
- [ ] The versions it was verified against are recorded.

## Boundaries

- **The rules every piece obeys** — sentences, claims, concrete over vague, formatting, never hard-wrap → `write:writing-standards` and its house-voice checklist. Code on a documentation page → `tw:docs-standards`.
- **Where the sample sits in the page, and which page it belongs on** → `tw:developer-docs`, or `tw:api-reference` for request and response examples on an endpoint; in a published piece, the piece's structure → `cw:article-standards`.
- **The companion repository itself** — its starter and final branches, pinned versions and README → `cw:demo-project`. Quickstart samples in a product repository's front door → `tw:readmes`.
- **Writing the library or API being demonstrated** is not this skill's job. Where a sample can only be made safe or short by changing the API, that's a finding to raise, not something to paper over.
- **Verifying behaviour you can't run** → `tw:sme-interviews` for documentation, `cw:sme-interviews` for a published piece.
