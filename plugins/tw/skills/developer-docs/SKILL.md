---
name: developer-docs
description: >-
  Writing and restructuring developer-facing documentation-site pages in any framework or platform — verify against source when the code is available, one clear focus per page, link integrity when moving pages, prose before every code block, runnable examples, canonical-page linking instead of duplication, one term per concept, MDX and component import hygiene, and next-steps footers. Use on "docs page", "write the docs for", "restructure the docs", "MDX page", "developer guide".
---

# Developer docs

How to write a docs-site page, independent of the framework rendering it. Two principles govern everything: document what IS (verified against source, not memory), and give every page one job.

Apply these rules to every docs page, in any project. When an existing page deviates from them, correct it rather than matching it — matching whatever is there is how drift spreads.

## Voice and audience come from the writing's own guide

Before writing a page, find the project's style guide and conventions and read them:

- **In a codebase:** the style guide and conventions the project's `AGENTS.md` names, or its contributing docs.
- **In a chat app:** the style guide in the project's files (a Claude Project's knowledge, or the equivalent elsewhere), or attached to the conversation.
- **Otherwise:** ask whether one exists before concluding there isn't one.

Voice, person, tone, terminology and formatting come from that guide. Where it settles something this skill also covers, the guide wins; where it's silent or there isn't one, `tw:docs-standards` applies without asking.

## Ask first

Read the answers from the request, the docs set, the project and its guide first; ask only what's missing. Ask with the app's question tool where it has one, so the choices can be picked; otherwise as a numbered list answered by number. Offer choices where the answers are known and a short typed answer otherwise; where the project records a default, show it and ask whether to use it.

1. **What's the job?** a new page · rewriting a page · moving, renaming, splitting or removing pages.
2. **What does the reader need from the page?** learning (tutorial) · a task (how-to) · lookup (reference) · understanding (explanation). Settled with `tw:docs-standards` where it isn't clear.
3. **What's the page about?** Short answer: the task or topic in the reader's words.
4. **Who's the reader, and what do they already know?** Short answer.
5. **Which product version does it document?** Short answer, and whether the docs are versioned.
6. **Where does it live?** The docs framework (Docusaurus · Mintlify · Nextra · MkDocs · Starlight · other) and the section or path in the navigation.
7. **What's the source of truth?** the code (path) · a spec · a walkthrough or an engineer's answers · none yet.

## Verify against source before writing

**When the code is available, it is the source of truth** — read it first, and never document from memory or from what the old page claimed:

- **Read the code before the docs** — for anything documenting a library or API, read the actual exports, classes, method signatures, config options, and types.
- **Document what IS, remove what ISN'T** — if something exists in source but is undocumented, add it; if the docs describe something that no longer exists, remove or correct it in the same change.
- **Verify every symbol** — exported names, signatures, defaults, and versions in examples must match source exactly; a docs page with a wrong signature is worse than no page.

**When the code isn't available** — no repo access, a closed-source product, working from a spec or a walkthrough — the rule doesn't relax, it changes shape:

- **Write only what you were told**, and never fill a gap by inferring a signature, a default, a flag, or an error message that sounds plausible. A confident invention is the one failure mode worse than an omission.
- **Ask for the specifics** you need: exact names, exact values, the real error text. One batch of questions costs less than a page that has to be corrected after publication.
- **Mark what you couldn't verify** — leave the gap visible for whoever can check it, rather than smoothing it over.

## Page types and site mechanics

- **Pick the page type first** — which Diátaxis quadrant a topic needs is `tw:docs-standards`' call; the frame every page shares and the section blueprint for each type once chosen are in [references/page-types.md](references/page-types.md), with the mixing-test table for pages drifting between types.
- **Placement, navigation, and moving/renaming/removing pages** live in [references/site-mechanics.md](references/site-mechanics.md) — one focus per page, canonical-page linking instead of duplication, the best-practices/troubleshooting placement ladder, sidebar registration, inbound-link greps and redirects before any move. Follow it for every structural change, not just new pages.

## Writing the page

- **The opening paragraph states what the page covers and why the reader needs it** — no "This page explains…" / "In this section we will…" filler; the reader should know within two sentences whether they're on the right page.
- **Prose before every code block** — a sentence saying what the code does and when to use it. "Read once and understand": no code without context.
- **Code examples use concrete, runnable values** — no undefined variables, no placeholder comments standing in for real arguments inside calls, no pseudocode. An example that can't run as written will be copied and will fail.
- **Frontmatter serves search** — a concise, keyword-rich `title` (it's the sidebar label — "MCP Tools", not "Overview of MCP Tool Integration") and a unique 1–2 sentence `description` (it's the search snippet). Working targets, as rules of thumb from how results truncate by pixel width (Google sets no limit): a title of about 50–60 characters with the identifying words first, a description of about 150–160 characters with the point in the first 120. The reasons and sources are in `tw:seo-aeo-geo`.
- **Descriptive anchor text** — "[create custom servers](/docs/custom-servers)", never "click here". Headings should match what readers search for ("Environment variables", not "Configuration details").
- **One term per concept, site-wide** — define it once, then use exactly that word everywhere. A synonym for a technical concept reads as a second concept; if a page nearby uses a different term for the same thing, say so rather than adding a third.
- **End every page with next-steps links** to 2–4 related pages — a Cards grid, a "Next steps" list, whatever the framework offers — so no page is a dead end.

## Versioned docs

Where the product ships versions people stay on, the docs do too:

- **A version switcher on every page**, defaulting to the current version, the way docs frameworks provide one (Docusaurus, Read the Docs).
- **"Available since vX"** on a feature or option added after the first supported version, and "Deprecated in vY — use Z" where it's going away.
- **A banner on every page of an old version** saying it isn't the latest, linking to the same page in the current version.
- **When a version is retired**, its pages stay readable at their URLs or redirect to the current equivalent — never a 404 for a reader on an old release. Canonical links between versions are in `tw:seo-aeo-geo`.

## Components, includes and imports

Most docs systems let a page pull in something defined elsewhere — a component, a partial, a snippet, an include. However your system spells it, the same rules hold:

- **Everything the page uses is actually available to it.** Where the system requires an explicit import, a missing one is usually a silent render failure rather than a build error — the component simply doesn't appear, and nobody notices until a reader does. Check each one before finishing. Where the system uses file includes instead, check every path still resolves.
- **Pull in only what the page uses.** Unused imports and stale includes accumulate as pages are edited, and they break quietly later.
- **In JSX-based systems, keep `import type` for types only** — anything used as a value (a constructor, a function, an enum in an example) needs a value import. `import type { Client }` followed by `new Client()` compiles and then breaks at runtime.

## Example

A page opening that obeys the rules — what + why up front, prose before code, concrete values:

````mdx
---
title: Rate limits
description: Request quotas per plan, the headers that report them, and how to back off when you hit 429.
---

Every API key is limited to 100 requests per minute on the free plan and 1,000 on Pro. When you exceed the quota the API returns `429 Too Many Requests`, and the response headers tell you when to retry.

Read the remaining quota from the response headers on any request:

```ts
const apiKey = process.env.EXAMPLE_API_KEY;
const res = await fetch("https://api.example.com/v1/items", {
  headers: { Authorization: `Bearer ${apiKey}` },
});
console.log(res.headers.get("x-ratelimit-remaining")); // "97"
```
````

## Boundaries

- **The voice rules every document obeys** — sentences, claims, concrete over vague, formatting, never hard-wrap → `write:writing-standards`; the documentation voice, prose before code and the four document types → `tw:docs-standards`.
- Which document type a page should be → `tw:docs-standards`; audience, scope and prose discipline → `write:writing-standards`.
- Deciding which pages the set needs at all, and in what order → `tw:docs-planning`. This skill writes a page once the set has a shape.
- Getting the facts the page depends on out of an engineer or a spec → `tw:sme-interviews`; locating them in the source yourself → `tw:codebase-research`.
- The project's own terminology, capitalization and word choices → `tw:style-guide`.
- Auditing an existing docs site for drift, broken links, and stale pages → `/tw:docs-audit`.
- **Endpoint-level API reference** — parameter tables, status codes, auth sections, request and response examples → `tw:api-reference`.
- **Help centres and user guides for non-technical end users** → `tw:user-guides`, for a different audience and page types.
- **Internal documentation** — runbooks, onboarding, process docs → `tw:internal-docs`.
- Project READMEs → `tw:readmes`.
- Findability — titles, meta descriptions, slugs, versioned canonicals, being quoted in AI answers → `tw:seo-aeo-geo`.
- The code blocks themselves — choosing, testing and maintaining them → `write:code-samples`. Screenshots, architecture and flow diagrams → `tw:images-and-diagrams`.
