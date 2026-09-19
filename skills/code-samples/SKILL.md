---
name: code-samples
description: >-
  Writing and maintaining the code examples inside documentation — making a sample complete and runnable, eliding correctly, showing expected output and the likely error, testing samples so they don't rot, placeholder and example-value conventions, keeping multiple languages at parity, not modelling insecure practice a reader will copy, copy-paste ergonomics, and recording the version a sample was verified against. Use on "code example", "code sample", "snippet", "the example doesn't work", "add an example", "test the docs examples".
---

# Code samples

A reader copies a sample before reading the paragraph above it. Every rule here follows from that: the sample has to work on arrival, and it has to be safe to run.

A sample is also the most perishable content in any document. It's correct on the day it's written and silently wrong by the next release unless something checks it.

## One sample, one question

- **Each sample answers exactly one thing.** A sample demonstrating authentication, pagination and error handling at once demonstrates none of them, because the reader can't tell which lines are the point.
- **Minimal but complete** — every line needed to run it, and nothing that isn't. Cut the logging, the framework scaffolding, the unrelated configuration.
- **Fits on a screen** where possible. Past about 30 lines, a reader stops reading and starts scrolling; past that length, it's usually a tutorial rather than a sample, and belongs in one.
- **Show the line that matters.** Where the platform supports line highlighting, use it; otherwise order the sample so the important call isn't buried.

## Complete and runnable

- **Include the imports, the setup, and the client construction** — or state explicitly, once per page, what every sample on it assumes. A sample missing its import is a sample that fails for everyone on first try.
- **Real values, not descriptions of values.** No undefined variables, no `config` that appears from nowhere, no type that's never constructed.
- **Never leave the interesting part as a comment.** `// your logic here` in the middle of the thing being demonstrated is the defect this whole skill exists to prevent.
- **Elide with a marker, never with invented code.** Cutting an irrelevant middle with `// …` is honest; filling it with plausible-looking calls that don't exist is not.
- **Show the expected output** where the output is the point — the response body, the printed result, the created file. Label it as output so nobody pastes it back in as code.
- **Show the error** where failure is likely, with what it means and what to do. The reader will meet it; the only question is whether they meet it with an explanation to hand.
- **Handle errors in the sample** where a real caller would have to. A sample with no error handling teaches that none is needed.

## Placeholders and example values

- **One placeholder convention per docs set**, obviously fake, and consistent everywhere. Whatever you pick, apply it to every sample so a reader can spot at a glance what they must replace.
- **Never a real credential.** Not an expired one, not a revoked one, not one from a test account. Keys pasted out of a terminal into documentation is a recurring source of real incidents — check every sample for anything that looks like a secret before it publishes.
- **Read secrets from the environment in samples**, rather than showing a literal assignment. This is both safer and the practice you want copied.
- **Use reserved example domains and obviously fictional names** for hosts, emails and identifiers. Never a real customer's data, a real person's details, or a real internal hostname.
- **Keep example values plausible in shape** — an id that looks like your real ids, a timestamp in your real format. A reader uses the sample to infer the format.

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
- **Keep the samples as real files** in a repository and include them into the documentation, rather than pasting copies. A sample that's also a test can't rot quietly.
- **Failing both, run them manually on a schedule** tied to releases, and record the date.

And regardless:

- **Record the versions a sample was verified against** — the library, the runtime, the API version — where the behaviour depends on it.
- **Pin versions in install commands** where a major version would break the sample.
- **Re-check samples when the thing they call changes.** A release that changes a signature has a documentation task attached to it, and finding the affected samples is a search, not a memory exercise.
- **A sample you can't verify gets marked as unverified**, not published as though it works.

## Copy-paste ergonomics

- **One command per block** when each has to be run separately and checked. Chained commands in one block hide which one failed.
- **Don't mix commands and their output** in the same block — the reader copies both and the shell chokes on the output.
- **Don't prefix shell commands with a prompt character.** It gets copied and breaks the command. If you must show a prompt, show output separately.
- **Label every fence with its language**, and label it the same way across the whole docs set. An unlabelled fence loses highlighting and tells the reader nothing.
- **Keep lines short enough not to wrap** in the rendered page; a wrapped line is misread as two.
- **Comments explain the non-obvious**, not the syntax. A comment restating what the line plainly does is noise in a sample that's meant to be skimmed.

## Boundaries

- **The prose around the sample** — the sentence before every code block saying what it does and when to use it → the house-voice rules in [`writing-standards`'s house-voice.md](../writing-standards/references/house-voice.md).
- **Where the sample sits in the page, and which page it belongs on** → `developer-docs`, or `api-reference` for request and response examples on an endpoint.
- **Quickstart samples in a repository's front door** → `readmes`.
- **Writing the library or API being demonstrated** is not this skill's job. Where a sample can only be made safe or short by changing the API, that's a finding to raise, not something to paper over.
- **Verifying behaviour you can't run** → `sme-interviews`.
