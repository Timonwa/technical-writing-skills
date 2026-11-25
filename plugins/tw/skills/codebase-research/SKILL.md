---
name: codebase-research
description: >-
  Finding documentation facts in a codebase you didn't write — where defaults, limits, error strings, UI labels, env vars and the public surface actually live, reading for names and values rather than logic, searching backwards from the string a user sees, using tests as a behaviour spec, and the traps that produce confidently wrong docs. Use on "read the code", "check the source", "where is this defined", "what's the default", "is this still used", "find out how this works".
---

# Codebase research

Verify against source, never from memory — including in a repository you didn't write and may not fully understand.

**You are hunting for names and values, not understanding the system.** A writer doesn't need to follow the algorithm — they need the exact parameter name, the real default, the literal error text, the actual limit. That is a far smaller job than reading code as an engineer would; don't treat it as the larger one.

The danger runs the other way too. A writer who has read the code has more confidence than one who hasn't, and confidence built on a value that production overrides is worse than an honest gap. Check every value against the traps before writing it down.

## Voice and audience come from the writing's own guide

Before writing up what you find, find the project's style guide and conventions and read them:

- **In a codebase:** the style guide and conventions the project's `AGENTS.md` names, or its contributing docs.
- **In a chat app:** the style guide in the project's files, or attached to the conversation.
- **Otherwise:** ask whether one exists before concluding there isn't one.

Voice, person, tone, terminology and formatting come from that guide. Where it settles something this skill also covers, the guide wins; where it's silent or there isn't one, `docs-standards` applies without asking.

## Ask first

Read the answers from the request, the project's `AGENTS.md` or contributing docs and its guide first; ask only what's missing. Ask with the app's question tool where it has one, so the choices can be picked; otherwise as a numbered list answered by number. Offer choices where the answers are known and a short typed answer otherwise; where the project records a default, show it and ask whether to use it. Record the answers in the header of the [research notes](references/research-notes.md).

1. **Which facts do you need?** A short list: "the accepted formats, the row limit, the default filename, the timeout error" — never "how the export works". The list is how you know when you're done.
2. **Which branch or tag is production?** Short answer, or "don't know". The branch you're reading is not necessarily what users have.
3. **Which environment does the doc describe?** production · staging · the self-hosted default · a specific customer's configuration.
4. **Where should the search start?** A file or directory · none — search backwards from the string the user sees. One sentence from an engineer saves an hour and costs them nothing; it's the cheapest question in documentation.
5. **What's live?** Short answer: the parts behind a flag, half-built, or switched off — or "don't know". Code gives no signal about any of this.
6. **What access is there?** the repository · someone with access who can look things up · none — see [When you don't have access](#when-you-dont-have-access).

## Read for names and values, not for logic

- **Read the signature, not the body.** Parameters, types, return shape and defaults are almost always in the declaration. The body is implementation you don't need.
- **Follow the type, not the flow.** A type or schema definition tells you the shape of a thing in one place; tracing execution to learn the same thing takes an hour and can be wrong.
- **Read the tests.** A test suite is a behaviour specification someone maintained, written in terms of inputs and expected outputs — including the edge cases nobody documented. Test names alone often answer the question.
- **Stop when you start tracing.** If you're three files deep following a call chain, you've crossed from looking up a value into understanding a system. Write down the question and ask a person.
- **Never infer intent from code.** Code tells you what happens, never why, and never whether it's meant to. Why is always an interview question.

## Where each fact lives

| What you need                             | Where it actually is                                                                                                       |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| The public surface — what callers can use | Exported symbols, the entry or index file, the package manifest's entry fields. Not everything defined is public.          |
| Parameters, types, defaults               | The function or endpoint signature first, then the validation schema — which frequently overrides or narrows the signature |
| A configuration default                   | The config schema or loader. A constant elsewhere may be unused or superseded.                                             |
| An error message a user sees              | Search for the literal text as it appears in the product or the response body, then read outward from the match            |
| A UI label, button or menu path           | Search the visible string. In a localized product, the source-language resource file is the canonical spelling.            |
| Limits, quotas, thresholds, timeouts      | Validation schemas, rate-limit configuration, named constants — and check whether the environment overrides them           |
| Environment variables                     | The example env file for the list, the config loader for which are required and what each defaults to. The loader wins.    |
| Status codes and response shapes          | The handler's returns and its declared response type                                                                       |
| Whether a feature is reachable at all     | The feature-flag configuration, and what the flag is set to in the environment you're documenting                          |
| When behaviour changed                    | Version history, the changelog, migration files, and the commit that introduced the line                                   |

## The searches that work

- **Search backwards from what the user sees.** Take the exact error text, button label, or heading from the product, search for it, and read out from the match. This is the single most effective technique available to a writer, and it requires no knowledge of the codebase's structure.
- **Search for the identifier, then separate definition from use.** One definition, many call sites; the definition is what you document.
- **Start in the tests** when you have no entry point. They're organized by behaviour rather than by architecture, which is how you're thinking already.
- **Look at recent history for the area** to see what's in flux and shouldn't be documented as settled.

## Confirm before you write it down

A value in source is a claim, not a fact, until you've seen it take effect.

- **Run it, call it, or use the product** and check the value matches. Where you can't, say so.
- **Where the same value appears in more than one place, find out which one wins** — and if you can't, that's a question, not a judgement call.
- **A bare number carries no unit.** `30` is seconds or milliseconds depending on what consumes it, and `1000` is bytes, kilobytes or rows. Find the unit in the type, the variable name, or the function that reads the value — never infer it from what seems reasonable.
- **Cross-check anything surprising.** A limit that seems oddly specific, a default that seems wrong for users, an error that seems unreachable — surprising findings are usually stale code or a misread, not a discovery.

## The traps

Each of these produces a confidently wrong document, which is the most expensive outcome in documentation:

- **The default branch is not production.** What you read may be unreleased, reverted later, or behind a deploy that hasn't happened.
- **A default in source is routinely overridden.** Environment configuration, a deployment manifest, or a per-customer setting can change it, and the source gives no hint that it has been.
- **Dead code looks exactly like live code.** Nothing marks an unused function as unused. If nothing calls it and no test covers it, ask before documenting it.
- **The path you read may not be the one that runs.** Wrappers, overrides, middleware and multiple implementations of the same interface all mean the obvious file isn't necessarily the effective one.
- **Flagged code may be unreachable.** A fully built feature behind a flag that is off everywhere is not a feature yet.
- **Generated files are downstream of something else.** Documenting from a generated artifact means documenting a copy; find the source it was generated from.
- **Vendored or copied third-party code isn't the product**, and its defaults may not be the ones in effect.
- **A skipped or commented-out test documents nothing.** Check it actually runs before treating it as a specification.

## Record what you found

Keep the notes in the template in [references/research-notes.md](references/research-notes.md): one row per fact, with its location, version, unit and status.

- **Note the file and the version, tag or commit you read it at.** When that area changes, you know exactly what to re-verify — and this is the difference between documentation you can maintain and documentation you have to redo.
- **Separate what you confirmed from what you inferred**, in your notes and in the draft. An inference that reads as a fact is the defect this whole skill exists to prevent.
- **Turn what you couldn't determine into a specific question.** "Does `retryLimit` get overridden in production?" gets answered in a sentence; "how does retrying work?" costs an engineer twenty minutes.

## When you don't have access

The rule doesn't relax, it changes shape. Write only what you were told, ask for exact names and values rather than inferring them, and leave anything unverified visibly marked. A plausible invention is the one outcome worse than an omission.

## Boundaries

- **Getting the facts that code cannot give you** — intent, what's deployed, what's deprecated in practice, what readers get wrong → `sme-interviews`. This skill answers _what_; that one answers _why_ and _really?_
- **What to do with the facts** — which document type, how it's structured, how it reads → `docs-standards` and the skill for that document type.
- **Verifying a docs page against source as a review pass** → `/docs-audit`. This skill is for research before writing; that one is for drift after.
- **Endpoint-level detail** — handlers, schemas, status codes, response shapes → `api-reference`, which has its own verification rules for an API surface.
- **The code that ends up in the docs** — choosing, testing and maintaining examples → `docs-code-samples`.
- **This skill never changes code.** A bug or an inconsistency you find is a finding to report, not something to fix in passing.
