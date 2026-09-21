---
name: developer-docs
description: >-
  Writing and restructuring developer-facing documentation-site pages in any framework or platform — verify against source when the code is available, one clear focus per page, link integrity when moving pages, prose before every code block, runnable examples, canonical-page linking instead of duplication, one term per concept, MDX and component import hygiene, and next-steps footers. Use on "docs page", "write the docs for", "restructure the docs", "MDX page", "developer guide".
---

# Developer docs

How to write a docs-site page, independent of the framework rendering it. Two principles govern everything: document what IS (verified against source, not memory), and give every page one job.

This is the standard for every docs page, in any project. Same rules, every run. When an existing page deviates from them, correct it rather than matching it — matching whatever is there is how drift spreads.

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

- **Pick the page type first** — which Diátaxis quadrant a topic needs is `writing-standards`' call; the section blueprint for each type once chosen is [references/page-types.md](references/page-types.md), including the mixing-test table for pages drifting between types.
- **Placement, navigation, and moving/renaming/removing pages** live in [references/site-mechanics.md](references/site-mechanics.md) — one focus per page, canonical-page linking instead of duplication, the best-practices/troubleshooting placement ladder, sidebar registration, inbound-link greps and redirects before any move. Follow it for every structural change, not just new pages.

## Writing the page

- **The opening paragraph states what the page covers and why the reader needs it** — no "This page explains…" / "In this section we will…" filler; the reader should know within two sentences whether they're on the right page.
- **Prose before every code block** — a sentence saying what the code does and when to use it. "Read once and understand": no code without context.
- **Code examples use concrete, runnable values** — no undefined variables, no placeholder comments standing in for real arguments inside calls, no pseudocode. An example that can't run as written will be copied and will fail.
- **Frontmatter serves search** — a concise, keyword-rich `title` (it's the sidebar label — "MCP Tools", not "Overview of MCP Tool Integration") and a unique 1–2 sentence `description` (it's the search snippet).
- **Descriptive anchor text** — "[create custom servers](/docs/custom-servers)", never "click here". Headings should match what readers search for ("Environment variables", not "Configuration details").
- **One term per concept, site-wide** — define it once, then use exactly that word everywhere. A synonym for a technical concept reads as a second concept; if a page nearby uses a different term for the same thing, say so rather than adding a third.
- **End every page with next-steps links** to 2–4 related pages — a Cards grid, a "Next steps" list, whatever the framework offers — so no page is a dead end.

## Component and import hygiene (MDX)

- **Every component used on the page is imported** — a missing import is a silent render failure in most MDX pipelines, not a build error. Check each `<Callout>`, `<Tabs>`, `<Card>` against the imports before finishing.
- **Import only what the page uses** — unused component imports rot as pages get edited.
- **`import type` only for types** — anything used as a value (constructors, functions, enums in examples) must be a value import; `import type { Client }` followed by `new Client()` breaks at runtime.

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
const res = await fetch("https://api.example.com/v1/items", { headers: { Authorization: `Bearer ${apiKey}` } }); console.log(res.headers.get("x-ratelimit-remaining")); // "97"
```
````

## Boundaries

- **The house voice rules** — sentences, claims, prose-before-code, concrete-over-vague, no marketing adjectives, never hard-wrap → [`writing-standards`'s house-voice.md](../writing-standards/references/house-voice.md). This skill adds only what is specific to its own shape.
- Which document type a page should be, audience, scope, and prose discipline → `writing-standards`.
- Deciding which pages the set needs at all, and in what order → `docs-planning`. This skill writes a page once the set has a shape.
- Getting the facts the page depends on out of an engineer or a spec → `sme-interviews`; locating them in the source yourself → `codebase-research`.
- The project's own terminology, capitalization and word choices → `style-guide`.
- Auditing an existing docs site for drift, broken links, and stale pages → `docs-audit`.
- **Endpoint-level API reference** — parameter tables, status codes, auth sections, request and response examples → `api-reference`.
- **Help centres and user guides for non-technical end users** → `user-guides` — same set-consistency aim, different audience and page types; it links this skill's `site-mechanics.md` for the shared mechanics.
- **Internal documentation** — runbooks, onboarding, process docs → `internal-docs`.
- Project READMEs → `readmes`.
- The code blocks themselves — choosing, testing and maintaining them → `code-samples`. Screenshots, architecture and flow diagrams → `images-and-diagrams`.
