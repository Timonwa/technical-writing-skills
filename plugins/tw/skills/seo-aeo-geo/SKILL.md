---
name: seo-aeo-geo
description: >-
  Making documentation findable three ways — SEO (ranking in search results), AEO (being the direct answer in a featured snippet, an AI Overview or the docs site's own search) and GEO (being the source AI answers and coding assistants cite). Covers what readers search with, titles of about 50–60 characters, descriptions of about 150–160, headings, slugs, redirects, versioned docs, canonicals, structured data and llms.txt. Use on "docs SEO", "make this docs page findable", "docs search", "versioned docs canonical".
---

# Documentation SEO, AEO and GEO

A reader with a task, an error or a name in mind types it into a search engine, the docs site's search box or an AI assistant, and the page has to be what comes back. Three goals, worked in this order:

- **SEO** — the page ranks in the search results.
- **AEO** — the page is the direct answer: the featured snippet, the "People also ask" answer, the AI Overview, the top hit in the docs site's own search.
- **GEO** — the page is the source an AI answer or a coding assistant quotes and cites.

Most of it is good documentation done precisely — the right title, the readers' words in the headings, one task per page.

## Voice and audience come from the writing's own guide

Before applying this skill, find the project's style guide and conventions and read them:

- **In a codebase:** the style guide and conventions the project's `AGENTS.md` names, or its contributing docs.
- **In a chat app:** the style guide in the project's files (a Claude Project's knowledge, or the equivalent elsewhere), or attached to the conversation.
- **Otherwise:** ask whether one exists before concluding there isn't one.

Voice, person, tone, terminology and formatting come from that guide. Where it settles something this skill also covers, the guide wins; where it's silent or there isn't one, `tw:docs-standards` applies without asking.

## What readers search with

Documentation readers search for the thing in front of them, not for a topic — the "task, question, or problem that drives a member of the target audience to search" ([GitHub Docs](https://docs.github.com/en/contributing/writing-for-github-docs/making-content-findable-in-search)):

- **A task** — "rotate an API key". The how-to's title is that task, as a bare-infinitive heading (`tw:docs-standards`).
- **An error message** — pasted whole into a search box.
- **A name** — a command, function, flag, endpoint, setting or config key, exactly as the product writes it.
- **A concept** — "what is a webhook signature", in the words readers use.

Use the readers' words, not the product team's: if readers type "cost" and the docs say "billing", name both, with the readers' word in the title or first line ([GitHub Docs](https://docs.github.com/en/contributing/writing-for-github-docs/making-content-findable-in-search)). Record the choice in the terminology list (`tw:style-guide`). Find the words in the docs site's search log, support tickets and the search engine's own suggestions — never by guessing.

## SEO: ranking in search results

### Titles

The result's title link comes mainly from the page's `<title>`, falling back to the main heading and other prominent text ([Google](https://developers.google.com/search/docs/appearance/title-link)). Write it so there's no reason to rewrite it:

- **Unique to the page and specific** — never "Overview", "Introduction" or titles that differ by one word across a section ([Google](https://developers.google.com/search/docs/appearance/title-link)).
- **About 50–60 characters, identifying words first.** Google sets no length limit and cuts the title to fit the screen ([Google](https://developers.google.com/search/docs/appearance/title-link)); in practice that's roughly 550–600 pixels on desktop, typically 50–60 characters ([Semrush](https://www.semrush.com/blog/title-tag/)), and less on mobile. A rule of thumb, not a limit — a longer title isn't penalised, it's just cut off where readers decide whether to click.
- **The product or site name once, at the end**, after a delimiter — "Rotate an API key | Acme Docs". In versioned docs, the version too when the page differs by version.
- **The H1 and the `<title>` say the same thing.** A sidebar label can be shorter.

| Page type (`tw:docs-standards`) | Title shape                      | Example                                             |
| ------------------------------- | -------------------------------- | --------------------------------------------------- |
| Tutorial                        | what the reader builds or learns | Build a webhook listener in Node.js                 |
| How-to                          | the task, bare infinitive        | Rotate an API key                                   |
| Reference                       | the exact name, and what it is   | `POST /v1/keys` — create an API key                 |
| Explanation                     | the concept, as readers name it  | How webhook signatures work                         |
| Troubleshooting                 | the symptom or the exact error   | `Error: invalid_signature` when verifying a webhook |

### Meta descriptions

Snippets "are primarily created from the page content itself"; the meta description is used when it describes the page better ([Google](https://developers.google.com/search/docs/appearance/snippet)).

- **One per page**, an accurate summary of what the reader can do or learn there — never shared across a section, never a keyword list ([Google](https://developers.google.com/search/docs/appearance/snippet)).
- **About 150–160 characters, the point in the first 120.** Google sets no limit and truncates to the device width ([Google](https://developers.google.com/search/docs/appearance/snippet)); in practice that's about 920 pixels on desktop (around 160 characters) and 680 on mobile (around 120) ([Ahrefs](https://ahrefs.com/blog/meta-description/)). A rule of thumb, not a limit.
- **On a large generated reference, generate them** from the page's own data — "Creates an API key for a project. Request body, response and errors." Programmatic descriptions are fine when each is specific ([Google](https://developers.google.com/search/docs/appearance/snippet)).
- **Make the first lines good enough to be the snippet** — they're what's shown most of the time.

### Headings, URLs and links

- **Headings goal-oriented and in the readers' words** ([Write the Docs](https://www.writethedocs.org/guide/seo/)), one hierarchy with no skipped levels, each specific enough to make sense alone. Form and case are `tw:docs-standards`'.
- **Readable URLs — words, hyphens, lowercase** — `/docs/keys/rotate`, not `/docs?id=4172` ([Google](https://developers.google.com/search/docs/crawling-indexing/url-structure)); Google treats URLs as case-sensitive.
- **Slugs named for the task or the thing**, not a position ("getting-started-step-3") or a section that may move, so they survive a restructure.
- **A moved page leaves a permanent redirect**, and internal links are updated — a strong signal of which URL is canonical ([Google](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)). Mechanics: `tw:developer-docs`' site mechanics reference.
- **Every page linked from at least one other page**, with anchor text that says where it goes — never "click here" ([Google](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)). Link a task to its prerequisites, a reference to the how-to that uses it, a concept to the tasks it explains.

### Versioned docs and duplicates

"It's easy for outdated documentation to be the top search result" ([Read the Docs](https://docs.readthedocs.com/platform/stable/canonical-urls.html)). One version has to be the one shown:

- **Equivalent pages canonicalise to the current version** — `rel="canonical"` on each older copy, a self-referencing canonical on the current page ([Google](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)). It's a strong signal, not a guarantee; internal links to the current version strengthen it.
- **An old version that genuinely differs** — a removed endpoint, a changed default — keeps its own canonical, with a banner linking to the current page.
- **`noindex` only for versions that should never appear**, such as unsupported releases — it removes the page entirely, so it isn't a way to choose between duplicates ([Google](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)). Never block duplicates with `robots.txt`: a blocked URL can still be indexed without its content.
- **Mirrors name one canonical home** — a default host and a custom domain, or a copy in a package registry or README.

### Structured data that still counts

For docs, mainly breadcrumbs ([Google](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)). Google's Article markup accepts `Article`, `NewsArticle` and `BlogPosting`, not `TechArticle` ([Google](https://developers.google.com/search/docs/appearance/structured-data/article)), and HowTo rich results were withdrawn in 2023. Any markup must match the visible text ([Google](https://developers.google.com/search/docs/appearance/ai-features)).

## AEO: being the direct answer

A featured snippet reverses the normal result — the answer first, the link second — and also feeds "People also ask". Google picks it; there's no markup that earns one ([Google](https://developers.google.com/search/docs/appearance/featured-snippets)). What makes a page the obvious pick:

- **A heading that is the question or the task**, in the readers' words — "Rotate an API key", "Why does verification fail with `invalid_signature`?"
- **A short direct answer right under it** — about 40–55 words that answer completely on their own, before any background. Paragraph featured snippets are most often 40–55 words and almost never longer than about 320 characters ([Portent](https://portent.com/blog/seo/featured-snippet-display-lengths-study-portent.htm)) — a working target from what Google displays, not a rule.
- **Steps as a numbered list, comparisons and reference as a table.** An answer box can lift a list or a table whole; steps buried in a paragraph can't be (practice — Google's snippet documentation doesn't name formats).
- **The exact error string, verbatim**, on the troubleshooting page, in the heading or its first line, in a code span so nothing rewrites it. A paraphrased error is an unfindable one.
- **The docs site's own search is an answer engine too.** Its index works from titles and headings; keyword or synonym fields, where the tool has them, map readers' words to the product's ("cost" → billing) and follow the terminology list. Zero-result and no-click queries are questions no page answers — feed them to `tw:docs-planning`. Deprecated and internal pages stay out of the index.

## GEO: being cited by AI answers and coding assistants

AI search features draw on the same indexed pages: Google lists "no additional requirements" and no need for "new machine readable files, AI text files, or markup" ([Google](https://developers.google.com/search/docs/appearance/ai-features)). A page gets quoted when it can be lifted accurately:

- **Self-contained sections.** Quoted alone, a section still names its subject — "API keys expire after 90 days", not "They expire after 90 days".
- **Exact names and values in text**, not only in an image or diagram — "important content is available in textual form" ([Google](https://developers.google.com/search/docs/appearance/ai-features)).
- **One task per page.** A focused page matches a question better than a long page of many tasks ([Elastic](https://www.elastic.co/docs/contribute-docs/how-to/seo)).
- **Copyable code** — real text in fenced blocks, complete enough to run (`write:code-samples`).
- **`llms.txt` is optional.** It's a proposal for a markdown index of a site's pages for agents ([llmstxt.org](https://llmstxt.org/)); Google's AI features need no such file. Publish one if the platform generates it cheaply and readers' tools read it; it never replaces a page findable in its own right.

## Before publishing

**SEO**

- [ ] Title unique and specific, about 50–60 characters, identifying words first, product name once at the end; H1 matches.
- [ ] Meta description written or generated for this page, about 150–160 characters, the point in the first 120.
- [ ] Slug readable, lowercase, hyphenated, named for the task or thing; a moved page redirects and internal links are updated.
- [ ] Linked from at least one other page; anchor text says where each link goes.
- [ ] Versioned docs: the canonical points at the right version; old versions carry a banner. Structured data, if any, matches the page.

**AEO**

- [ ] Headings are the readers' tasks and questions; a 40–55-word answer sits under each.
- [ ] Steps are numbered lists; reference and comparisons are tables.
- [ ] An error message appears verbatim; the site search's synonyms cover the readers' words.

**GEO**

- [ ] Sections make sense quoted alone; names and values are in text, not only in images.
- [ ] One task per page; code is copyable and complete.

## Boundaries

- **The site's code** — metadata tags and their generation, sitemaps, `robots.txt`, rendering and crawlability → the site's developers; this skill covers what the writer controls.
- **Heading form, case and the four page types** → `tw:docs-standards`. **Redirects and moving pages** → `tw:developer-docs`. **Which pages the set needs, and readers' questions from search logs and tickets** → `tw:docs-planning`; **a whole set inventoried against them** → `/tw:content-audit`. **The terminology list** → `tw:style-guide`.
- **Articles, blog posts and newsletters** → `cw:seo-aeo-geo`.
