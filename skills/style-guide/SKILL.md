---
name: style-guide
description: >-
  Creating, maintaining and applying a writing style guide, terminology list and glossary — adopting a base guide and documenting only the deviations, the decisions a guide has to make (person, tense, capitalization, product naming, UI and code formatting, numbers, dates, lists, links, abbreviations, inclusive language), the word-list entry shape, and making it enforceable. Use on "style guide", "terminology", "glossary", "which term do we use", "our docs are inconsistent".
---

# Style guide and terminology

A style guide exists to stop the same question being answered differently every week. It is a decision record, not an essay on good writing — every entry settles something that was genuinely ambiguous, and anything that was never in doubt doesn't belong in it.

Two artifacts, often confused:

- **The style guide** — internal, for whoever writes. Conventions and decisions.
- **The glossary** — reader-facing, published. Definitions of the product's and domain's terms, for people using it.

A third sits between them: the **terminology list** (or word list) — internal, the approved term for each concept and the variants not to use. It feeds both the guide and the glossary, and it's usually the highest-value piece to build first.

## Adopt a base, document the deviations

Writing a full style guide from nothing produces a large document nobody reads, and most of it will restate decisions the industry already settled.

- **Pick an established base guide** and name it as the default for anything not covered locally. Several are published and freely available for exactly this purpose; pick one that matches your content, and say in one line which it is and where to find it.
- **Pick a dictionary too**, and a spelling variant (which English, which spelling of the words that differ). This resolves more disputes than any other single line.
- **Write down only what differs** from the base, plus everything specific to your product. A 4-page local guide over a public base beats a 60-page original.
- **Where the base and a local rule conflict**, the local rule wins and says so explicitly — otherwise people re-litigate it.

## What the guide has to decide

Settle these; leave the rest to the base guide:

- **Voice and person** — "you" for the reader; "we" for whom, and when; whether "I" ever appears.
- **Tense and mood** — present tense for behaviour; imperative for instructions.
- **Capitalization** — sentence case or title case for headings (and the same answer for page titles, nav labels, table headers, and buttons); which product and feature names are capitalized, and which aren't. Feature names creeping into capitals is the most common drift in any docs set.
- **Product and feature naming** — the exact string, including spacing and any stylization; whether a shortened form is allowed after first use; what is never a synonym for it.
- **UI element formatting** — bold for things the reader clicks, how a menu path is written, how a keyboard shortcut is written.
- **Code formatting** — what gets `code` styling (identifiers, paths, commands, filenames, values) and what doesn't; how a code fence is labelled; how placeholders are written.
- **Numbers, dates, times, units** — when a number is spelled out, the date format, whether time zones are stated, how ranges and units are written.
- **Lists and punctuation** — serial comma or not; whether list items end in periods; when a list is numbered.
- **Links** — descriptive link text, never a bare URL or "click here"; whether links open in a new tab; how an external link is marked.
- **Abbreviations and acronyms** — expanded on first use per page, then used; which ones never need expanding; which are never used.
- **Inclusive and bias-free language** — the terms replaced and what replaces them, neutral pronouns, avoiding ability- and violence-based metaphors, and writing about people without assuming their circumstances. Keep this as a list of decisions, not a position statement.
- **What's forbidden** — marketing adjectives, hedging words, "simply"/"just"/"obviously", and anything that tells a reader the thing they're struggling with is easy.

## The terminology list

One row per concept, and it is the shortest path to a docs set that reads like one voice.

| Field      | What it holds                                                                                      |
| ---------- | -------------------------------------------------------------------------------------------------- |
| Term       | The approved word or phrase, in its exact form                                                     |
| Definition | One plain sentence, understandable without the rest of the list                                    |
| Use        | Part of speech, capitalization, and plural or verb forms if they're irregular                      |
| Don't use  | The variants seen in the wild that this replaces, so the list is searchable by the wrong term      |
| Notes      | Where the term appears in the product, what it's often confused with, when to link to the glossary |

- **Build it from the content you already have**, not from an imagined vocabulary — scan existing docs, the product UI, and support conversations for the same concept named more than one way, and settle each.
- **One term per concept, one concept per term.** Both directions matter: two words for one thing reads as two things, and one word for two things is worse.
- **Match the product.** Where the docs and the UI disagree, the UI usually wins for the reader's sake — and the disagreement gets raised with whoever owns the UI.
- **Record the decision, not just the outcome**, for anything that was close. Without the reason, it gets reopened.

## The glossary

A reader-facing glossary is a real page with real rules, not a dump of the terminology list:

- **Define in plain language**, without using the term in its own definition and without relying on three other glossary terms to make sense.
- **Include the domain terms a newcomer meets**, not the ones the team finds interesting.
- **Link each entry** to the page that explains the concept properly. The glossary orients; it doesn't teach.
- **Link to the glossary from a term's first use** on a page, where the platform allows it — and only the first.
- **Keep it alphabetical and shallow.** One level, no categories, no nesting.

## Make it enforceable

An unenforced style guide is a document that makes people feel guilty. Pick at least one mechanism:

- **A prose linter** wired into the same checks as everything else, with the guide's word list as rules. This catches terminology and forbidden words automatically, which is most of the drift. Start with a handful of rules as warnings, not a wall of errors — a linter that fails every file gets switched off.
- **Templates** for each document type, which encode structure decisions so nobody has to remember them.
- **A short review checklist** in the pull-request or review template — five items, not fifty.
- **A findable home.** The guide has to be one link away from where people write, or it may as well not exist.

## Maintaining it

- **Name an owner.** Without one, a style guide is a snapshot of whatever was contentious the month it was written.
- **Add a decision when a question is asked twice** — not before, and never a rule for a mistake nobody has made.
- **Date entries**, and note what a decision supersedes, so an old page can be understood rather than assumed wrong.
- **Prune.** A rule about a product that no longer exists teaches nothing and costs attention.
- **Change the content when the guide changes.** A new decision that isn't applied to existing docs just creates two conventions.

## Boundaries

- **The writing discipline itself** — document types, audience, structure, the voice rules every piece obeys → `writing-standards`. A style guide records a team's local decisions; it doesn't replace the craft.
- **Applying the guide to an existing draft** → `editing-standards`.
- **Terms specific to one audience's content** — a help centre's concept framings and analogy, a developer reference's naming — are decided here and consumed by `user-guides`, `developer-docs`, `api-reference` and `internal-docs`.
- **Writing for translation**, and the do-not-translate list the terminology list feeds → `localization`.
- **The product's own decisions** — the real product name, the feature names, the domain vocabulary — are asked for and recorded, never invented here.
