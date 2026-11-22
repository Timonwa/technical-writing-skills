---
name: style-guide
description: >-
  Creating, maintaining and applying a docs set's style guide, terminology list and glossary — adopting a base guide and documenting only the deviations, the docs set's profile, the decisions a docs guide has to make (person, tense, capitalization, product naming, UI and code formatting, links, acronyms, inclusive language), `unset` as a valid answer, and making it enforceable in the docs repository. Use on "docs style guide", "docs terminology", "docs glossary", "which term do our docs use", "our docs are inconsistent".
---

# Docs style guide and terminology

A style guide exists to stop the same question being answered differently every week. It is a decision record, not an essay on good writing — every entry settles something that was genuinely ambiguous, and anything that was never in doubt doesn't belong in it. Its readers are whoever writes the docs; its job is that a reader moving between pages mid-task never notices the author changing.

Alongside it sit the **terminology list** — the approved term for each concept and the variants not to use — and a reader-facing **glossary**.

## Voice and audience come from the writing's own guide

This skill builds the guide, so it starts by finding what already exists — the project's style guide and conventions, any terminology list, contributor guidelines or notes — and reads it:

- **In a codebase:** what the project's `AGENTS.md` names, its contributing docs, and any style guide file in the repository.
- **In a chat app:** anything in the project's files (a Claude Project's knowledge, or the equivalent elsewhere), or attached to the conversation.
- **Otherwise:** ask — a wiki page, a PDF, a page of notes all count.

The voice, terminology and reader the guide records come from the project, the existing guide and the published docs, never from this skill.

- Where an existing guide or source settles something, the new guide keeps it and says where it came from.
- Where nothing settles it, `tw:docs-standards` is the default the guide departs from, and the guide records only the departures.
- **Saving it:** in a codebase, write the guide where the project keeps its docs conventions and name it in `AGENTS.md`, so every agent finds it; in a chat app, give the user the guide as a file to add to the project's files.

## Ask first

Read the answers from the request, the existing guide, the published docs and the project first; ask only what's missing. Ask with the app's question tool where it has one, so the choices can be picked; otherwise as a numbered list answered by number. Offer choices where the answers are known and a short typed answer otherwise. Record the profile answers in the guide's profile.

1. **What exists already, and where?** A style guide · a terminology list · contributor guidelines · notes · nothing — with a path or link for each.
2. **What's being built?** The style guide · the terminology list · the glossary · one decision.
3. **Who reads the docs?** Developers integrating · administrators configuring · end users — pick any.
4. **Which product and versions do the docs cover?** A short answer, and how older versions are handled.
5. **Which base guide, dictionary and spelling?** The Google developer documentation style guide · the Microsoft Writing Style Guide · another (name it); the dictionary and spelling variant as a short answer.
6. **Who owns the guide?** The role or person who decides when it's silent and approves changes.
7. **Where does it live?** A path in the docs repository · the project's files in a chat app.

## Build it from what exists

1. **Ask whether a guide already exists**, and ask broadly — a style guide, a terminology list, contributor guidelines, a page of notes. Most teams have something and don't think of it as a guide.
2. **Convert it, don't copy it.** Map what the source settles onto the guide's fields, transcribe exact wording wherever it fixes wording — a product name, a banned phrase — and leave what it doesn't cover `unset`.
3. **Derive from what's already written** — existing pages, the product UI and support conversations — for the conventions they mostly follow, and name any page that isn't typical.
4. **Interview for the rest**, field by field.

Start from the fill-in templates: the style guide file in [references/style-guide-template.md](references/style-guide-template.md), the terminology list and glossary entries in [references/terminology-template.md](references/terminology-template.md).

**`unset` is a valid answer.** A skill that meets `unset` asks, then writes the answer back. A plausible guess becomes a house rule nobody agreed to. **Where a source and the docs disagree**, record both and flag the conflict for the owner. **Get the guide confirmed** before anything is written against it.

## Adopt a base, document the deviations

Writing a full guide from nothing produces a large document nobody reads, and most of it restates decisions the industry already settled.

- **Name a published developer documentation guide as the default** — the [Google developer documentation style guide](https://developers.google.com/style) or the [Microsoft Writing Style Guide](https://learn.microsoft.com/style-guide/welcome/) — in one line, with where to find it. The voice usually comes from that base: Google's is "conversational, friendly, and respectful without using slang" ([Google](https://developers.google.com/style/tone)).
- **Pick a dictionary and a spelling variant.** This resolves more disputes than any other single line.
- **Write down only what differs** from the base, plus everything specific to the product. A 4-page local guide over a public base beats a 60-page original.
- **Where the base and a local rule conflict**, the local rule wins and says so explicitly — otherwise people re-litigate it.

## The docs set's profile

A short profile, so the decisions are measured against something:

- **Audience and roles** — who reads the docs (developers integrating, administrators configuring, end users), what each already knows, and which pages are for which.
- **Product and versions covered**, and how older versions are handled.
- **Owner** — who decides when the guide is silent, and who approves a change to it.
- **Where the guide lives** — a path in the docs repository, linked from the contributing guide.

## What the guide has to decide

- **Voice and person** — "you" for the reader; "we" only for the organisation, and when; whether "I" ever appears (usually never). Voice stays the same while tone shifts with the reader's situation — an error message and a release announcement don't sound alike, but they sound like the same team.
- **Tense and mood** — present tense for behaviour; imperative for instructions.
- **Capitalization** — sentence case or title case for headings, with the same answer for page titles, navigation labels, table headers and buttons. Which product and feature names are capitalized, and which aren't — feature names creeping into capitals is the most common drift in any docs set.
- **Product and feature naming** — the exact string, including spacing and any stylization; whether a shortened form is allowed after first use; what is never a synonym for it.
- **UI element formatting** — bold for things the reader clicks or selects, matching the interface exactly; how a menu path is written (**File > Save**, or "select **File**, then **Save**"); how a keyboard shortcut is written.
- **Code formatting** — what gets `code` styling (identifiers, paths, commands, filenames, values) and what doesn't; how a code fence is labelled; how placeholders are written (Google uses `UPPERCASE_WITH_UNDERSCORES`, explained after the sample — `write:code-samples`).
- **Numbers, dates, times, units** — when a number is spelled out, the date format, time zones, ranges and units.
- **Lists and punctuation** — serial comma or not; whether items end in periods; numbered for steps whose order matters, bulleted otherwise.
- **Links** — descriptive link text, never a bare URL or "click here"; whether links open in a new tab; how an external link is marked.
- **Abbreviations and acronyms** — expanded on first use **on each page**, because docs readers land on any page from search; which never need expanding; which are never used.
- **Inclusive and bias-free language** — the terms replaced and what replaces them, neutral pronouns, avoiding ability- and violence-based metaphors ("sanity check", "kill the process" where another verb works), and writing about people without assuming their circumstances. A list of decisions, not a position statement.
- **What's banned** — marketing adjectives, minimisers ("simply", "just", "obviously", "easy"), and anything that tells a reader the thing they're struggling with is easy.
- **Page types** — which the set uses (tutorial, how-to, reference, explanation, and any of its own), and a template for each.

## The terminology list

One row per concept — the shortest path to a docs set that reads like one voice.

| Field      | What it holds                                                                                 |
| ---------- | --------------------------------------------------------------------------------------------- |
| Term       | The approved word or phrase, in its exact form                                                |
| Definition | One plain sentence, understandable without the rest of the list                               |
| Use        | Part of speech, capitalization, and plural or verb forms if they're irregular                 |
| Don't use  | The variants seen in the wild that this replaces, so the list is searchable by the wrong term |
| Notes      | Where it appears, what it's often confused with, when to link to the glossary                 |

- **Build it from the docs you already have** — scan for the same concept named more than one way, and settle each.
- **One term per concept, one concept per term.** Two words for one thing reads as two things, and one word for two things is worse.
- **Match the product.** Where the docs and the UI disagree, the UI usually wins for the reader's sake — and the disagreement gets raised with whoever owns the UI.
- **Record the decision, not just the outcome**, for anything that was close. Without the reason, it gets reopened.
- **Feed localization** — mark terms that are never translated (product names, commands) for `tw:localization`'s do-not-translate list.

## The glossary

A reader-facing glossary is a real page with real rules, not a dump of the terminology list:

- **Define in plain language**, without using the term in its own definition and without relying on three other glossary terms to make sense.
- **Include the domain terms a newcomer meets**, not the ones the team finds interesting.
- **Link each entry** to the page that explains the concept properly. The glossary orients; it doesn't teach.
- **Link to the glossary from a term's first use** on a page, where the platform allows it — and only the first.
- **Keep it alphabetical and shallow.** One level, no categories, no nesting.

## Make it enforceable

An unenforced guide is a document that makes people feel guilty. Pick at least one mechanism:

- **A prose linter in CI**, on the same pull requests as the docs change, with the terminology list and banned words as rules — warnings first, errors once the set is clean. [Vale](https://vale.sh) is the usual tool: start from its ready-made Google or Microsoft package to match the base guide, add `alex` for inclusive language, and put the project's terms and departures in its own package on top. A linter that fails every file on day one gets switched off.
- **Page templates** per type, in the repository, so a new page starts with the right sections.
- **A five-item checklist in the pull-request or review template**, so every docs change is checked against the guide where it's reviewed.
- **A findable home**, one link away from where people write.

## Maintaining it

- **Name an owner.** Without one, a guide is a snapshot of whatever was contentious the month it was written.
- **Add a decision when a question is asked twice** — not before, and never a rule for a mistake nobody has made.
- **Date entries**, and note what a decision supersedes, so an old page can be understood rather than assumed wrong.
- **Prune** rules about features that no longer exist.
- **Change the docs when the guide changes.** A new decision that isn't applied to existing pages just creates two conventions.

> **Example entry — Capitalization, headings.** Sentence case for every heading, page title, table header and button label. Navigation labels use title case, to match the product's own menus — a recorded departure from the base guide's sentence case. Product names keep their own capitals ("Billing API"); feature names don't ("usage alerts", not "Usage Alerts"). Decided 2026-03-02.

## Boundaries

- **The rules every piece obeys by default** → `write:writing-standards`; the documentation voice and page rules → `tw:docs-standards`. A guide records only where it departs from them or what they don't cover, and a decision written down overrides them.
- **Applying the guide to a draft** → `tw:editing-standards`; **checking the whole set for drift from it** → `/tw:style-check`.
- **The pages that consume it** — `tw:user-guides`, `tw:developer-docs`, `tw:api-reference`, `tw:internal-docs`.
- **A publication's writing guide and profile** → `cw:style-guide`.
- **Writing for translation** → `tw:localization`.
- **The product's own facts** — the real names, the feature names, the audience — are asked for and recorded, never invented here.
