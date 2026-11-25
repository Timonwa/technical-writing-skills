---
name: docs-standards
description: >-
  The rules every documentation page follows — the four Diátaxis needs (learning, a task, lookup, understanding) and keeping each page to one, the documentation voice, task headings, step-by-step procedures, bold and italics in docs, accessible pages, prose before code, runnable examples, and documenting what is rather than what's planned. Use on "write docs", "document this", "how-to guide", "write the steps", "is this a tutorial or a guide", "what type of page is this".
---

# Documentation standards

The discipline that makes documentation documentation. Every page serves one reader, pursuing one goal, in one mode — decide which mode before writing a word. Apply it together with `write:writing-standards`.

## Voice and audience come from the writing's own guide

Before applying this skill, find the project's style guide and conventions and read them:

- **In a codebase:** the style guide and conventions the project's `AGENTS.md` names, or its contributing docs.
- **In a chat app:** the style guide in the project's files, or attached to the conversation.
- **Otherwise:** ask whether one exists before concluding there isn't one.

Its voice and page rules apply wherever the project's guide is silent. Where the project's guide decides otherwise — person, tone, terminology, formatting — the guide wins.

- Where there's no guide, these rules apply in full, without asking, and offer to build a guide with `tw:docs-style-guide`.

## Ask first

Read the answers from the request, the page, the project and its guide first; ask only what's missing. Ask with the app's question tool where it has one, so the choices can be picked; otherwise as a numbered list answered by number. Offer choices where the answers are known and a short typed answer otherwise; where the project records a default, show it and ask whether to use it.

1. **Who's the reader?** Short answer: who they are and what they already know.
2. **What does the reader need from the page?** learning (tutorial) · a task (how-to) · lookup (reference) · understanding (explanation) · none of the four (a landing page, a README, a release note).
3. **Writing a page, or checking one against these rules?** writing · checking an existing page (path).
4. **What are its facts checked against?** the code · the running product · a spec · nothing yet — mark what's unverified.

## Keep each page to one need

Documentation readers come with one of four needs ([diataxis.fr](https://diataxis.fr/)). Each page serves one of them; a page that mixes them fails all of its readers at once:

- **Tutorial — learning.** Walks a newcomer to a guaranteed success. You own every decision — versions, names, values — so the reader only follows. Minimize choices and explanation; link out for "why".
- **How-to guide — a task.** Steps for a reader who already knows what they want ("rotate an API key"). Assume competence: start from prerequisites, skip the teaching, get to the goal.
- **Reference — lookup.** Describes the machinery: parameters, types, returns, defaults, errors — complete, accurate, structured for lookup (tables over prose). Never narrative, never persuasive.
- **Explanation — understanding.** Why things are the way they are: design decisions, trade-offs, background. No steps, no API listings.

Diátaxis is "a guide, not a plan" ([diataxis.fr](https://diataxis.fr/how-to-use-diataxis/)): it tells you whether a page is mixing needs, not that a docs set must have four sections. Never create empty sections to fill the shape; a landing page, a README or a release note isn't forced into one of the four. Once the need is chosen, the section order for each type on a docs site is in [`tw:developer-docs`' page-types.md](../developer-docs/references/page-types.md), and for a help centre in [`tw:user-guides`' page-types.md](../user-guides/references/page-types.md). **Fix mixing by moving, not deleting** — a tutorial that pauses to discuss architecture moves that discussion to an explanation page and links it; a reference entry with a walkthrough spins it out as a how-to; a how-to that teaches basics links the tutorial instead.

## The documentation voice

The defaults documentation uses where the project's style guide doesn't decide otherwise, as a checklist a page passes or fails:

- [ ] **Address the reader as "you"**, the person doing the task or making the decision ([Google](https://developers.google.com/style/person)), and "we" only for the organization behind the docs, with a clear antecedent. "I" only in an explicitly opinionated piece such as a design rationale signed by its author.
- [ ] **Present tense, active voice** — "the function returns a promise", "the server validates the token".
- [ ] **Instructions are imperatives** — "Run `acme keys rotate`", not "You'll want to run…".
- [ ] **Sentences of 25 words or fewer, and 20 or fewer in a procedure step** — the limits Simplified Technical English sets for descriptive and procedural sentences ([ASD-STE100](https://en.wikipedia.org/wiki/Simplified_Technical_English)). Split a longer one, or make it a list; a sentence with two "and"s or more than three conjunctions is two sentences. GOV.UK asks writers to [try to split](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-language/) sentences over 25 words; a reader following steps mid-task needs the firmer rule.
- [ ] **The writer stays out of it.** No anecdotes, no jokes that cost a reader time, no persuasion. Conversational is fine; personal is not the point here.
- [ ] **No minimisers** — "simply", "just", "easy", "obviously" tell a reader who's stuck that they shouldn't be. These are findings in documentation, not suggestions.
- [ ] **Links between pages are relative and resolve.** A moved or renamed page breaks them silently; check every one before the page ships.

## Headings

- **Task headings start with a bare infinitive** — "Create an instance", not "Creating an instance" ([Google](https://developers.google.com/style/headings)); conceptual and reference headings are noun phrases.
- **Use the words readers search for** — the more prominent version of a term, so the heading matches the query ([Google](https://developers.google.com/style/headings)).
- **Parallel across the page** — "Create a profile", "Add an account", not one of each form ([Microsoft](https://learn.microsoft.com/en-us/style-guide/procedures-instructions/writing-step-by-step-instructions)).
- **Sentence case** unless the project's guide records otherwise. A docs set where most pages use title case hasn't decided anything until the guide says so; `/tw:style-check` reports the majority as a decision to record.

## Procedures

- **A procedure is a numbered list**; a list that isn't a sequence is bulleted ([Google](https://developers.google.com/style/procedures)).
- **Introduce it** with a sentence that adds context beyond the heading, ending in a colon when the steps follow immediately.
- **One action per step**, a complete sentence starting with an imperative verb; short actions in the same place can share a step ([Microsoft](https://learn.microsoft.com/en-us/style-guide/procedures-instructions/writing-step-by-step-instructions)).
- **Where before the action** — "On the **Account** page, select **Security**", so the reader is in the right place before they act.
- **Include the step that completes the task** — selecting **Save** or **Apply** — and the result the reader should see.
- **An optional step starts with "Optional:"**; a single-step procedure is written as a sentence, not a list of one.
- **Warnings sit in the step they apply to**, before the action, never paragraphs away.
- **As few steps as possible** ([Google](https://developers.google.com/style/procedures)), and all of them on one screen where you can ([Microsoft](https://learn.microsoft.com/en-us/style-guide/procedures-instructions/writing-step-by-step-instructions)). Past about 7–10 steps (a rule of thumb), split the task into procedures under their own headings.
- **Sub-steps go one or two levels deep** — lowercase letters, then lowercase Roman numerals ([Google](https://developers.google.com/style/procedures)); a third level means the step is a procedure of its own.

## Notes and warnings

- **Pick the notice by what's at stake** ([Google](https://developers.google.com/style/notices)): a **note** for an aside that's "useful but not critical"; a **caution** to tell the reader to proceed carefully; a **warning** when it means "Don't do this" or the step "might be irreversible" — data loss, a charge, a lockout. Use the type names the docs platform renders.
- **Few of them.** Notices lose their force when a page has many, and two in a row read as one block — "Don't use too many notices", and avoid grouping two or more together ([Google](https://developers.google.com/style/notices)). Three notices on a page usually mean the content needs reorganising.
- **A warning goes before the action it warns about**, inside that step — never after it, never at the end of the page.
- **The notice says what to do**, not only what could go wrong.

## Formatting in documentation

- **Bold only for interface labels and run-in headings**; italics for a term being introduced or defined, and for emphasis; underline only for links ([Google](https://developers.google.com/style/text-formatting)).
- **`code`** for every identifier, path, command, filename, flag and value the reader types or sees — and nothing that isn't code.

## Accessible pages

From [Google's accessibility guidance](https://developers.google.com/style/accessibility):

- **No directional language** — not "above", "below" or "right-hand side"; name the section, the table or the button.
- **No colour, size or position as the only cue** — "the red items" fails a reader who can't see red; say what the items are.
- **Introduce every table** in the text before it, because not every screen reader announces a table.
- **No images of text, code or terminal output** — use actual text, which can be copied, searched, read aloud and translated.
- **Link text makes sense out of context** — never "click here" or "read this document".

## Code on the page

- **Prose before every code block** — one sentence saying what it does and when to use it. A reader should understand the page with the code blocks collapsed.
- **Complete, runnable examples with their expected output**, and the common failure case where one exists. No pseudocode, and no placeholder standing in for the thing being demonstrated; values the reader must replace follow the set's one placeholder convention (`write:code-samples`).
- **Accuracy against the source** — symbol names, signatures, defaults and versions read from the code or the running product, never memory. Wrong docs are worse than no docs.
- **Document what is, not what's planned** — a roadmap item on a docs page reads as a shipped feature.

## Example

A how-to opening that obeys the rules — one need, a task heading, goal first, prose before code, concrete values, expected output:

````markdown
## Rotate an API key

Rotate a key when it may have leaked or on your regular schedule. Rotation issues a new key immediately; the old key keeps working for 24 hours so deployed clients don't break.

Create the replacement key with the CLI:

```bash
acme keys rotate --name production
```

The command prints the new key once — store it in your secret manager now, it is not retrievable later:

```text
Rotated key "production". New key: ak_live_9f2c… (old key expires in 24h)
```
````

Note what it doesn't do: no history of why API keys exist (explanation), no full flag listing (reference), no hand-holding about installing the CLI (tutorial) — those are links, not sections.

## Boundaries

**With this skill** — the craft every piece of writing shares (reader and scope first, plain language, concrete claims, credit, scanning, formatting) and its checklist → `write:writing-standards` and its house-voice reference.

**Before writing**

- Deciding which documents a set needs, how they're grouped, and in what order → `tw:docs-planning`.
- Getting the facts out of an engineer or expert → `tw:sme-interviews`; finding them in the codebase yourself → `tw:codebase-research`.
- The project's own terminology, capitalization and naming decisions → `tw:docs-style-guide`.

**Writing a document**

- Docs-site page mechanics — components and imports, navigation, link integrity when moving pages, page splitting, next-steps footers → `tw:developer-docs`.
- Help-centre guides and user guides for end users → `tw:user-guides`. Runbooks, process docs and onboarding → `tw:internal-docs`.
- Project READMEs → `tw:readmes`. API references → `tw:api-reference`. Release notes and changelogs → `tw:release-notes`.
- Findability in search, the docs site's own search and AI answers → `tw:docs-seo-aeo-geo`.

**The parts that aren't prose** — code examples → `write:code-samples`; screenshots, diagrams and alt text → `tw:docs-images-and-diagrams`.

**After writing** — tightening → `tw:docs-editing-standards`; a full review of one page → `/tw:doc-review`; drift across the set → `/tw:style-check`; translation-ready writing → `tw:localization`; auditing a docs site → `/tw:docs-audit`.

**Out of scope** — articles, blog posts and newsletters are content, not documentation → the content-writing skills (`cw`).
