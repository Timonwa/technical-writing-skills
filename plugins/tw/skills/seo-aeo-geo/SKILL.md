---
name: seo-aeo-geo
description: >-
  Making documentation findable — in search results, in the docs site's own search, and as a source AI answers and coding assistants quote. Covers what readers search with (a task, an error message, an API name), page titles, meta descriptions and headings by page type, slugs and redirects, internal links, versioned docs and canonical URLs, the structured data that still counts, answer-first sections, llms.txt, and a pre-publish check. Use on "docs SEO", "make this docs page findable", "docs search", "versioned docs canonical".
---

# Documentation SEO, AEO and GEO

Findability for documentation: a reader with a task, an error or a name in mind types it into a search engine, the docs site's search box or an AI assistant, and this page is what comes back. Most of it is good documentation done precisely — the right title, the right words in the headings, one task per page — with a few mechanics that are easy to get wrong.

## Voice and audience come from the writing's own guide

Before applying this skill, find the project's style guide and the conventions its `AGENTS.md` or contributing docs record, and read them. Voice, person, tone, terminology and formatting choices come from that guide, never from this skill.

- Where the guide settles something this skill also covers, the guide wins.
- Where the guide is silent or there isn't one, `tw:docs-standards` is the default — apply it without asking.

## What readers search with

Documentation readers search for the thing in front of them, not for a topic. Write titles and headings for the search they'll actually type — the "task, question, or problem that drives a member of the target audience to search" ([GitHub Docs](https://docs.github.com/en/contributing/writing-for-github-docs/making-content-findable-in-search)):

- **A task** — "rotate an API key", "configure SSO". The how-to's title is that task, as a bare-infinitive heading (`tw:docs-standards`).
- **An error message** — pasted whole into a search box. Put the exact error string on the troubleshooting page, in a heading or the first line under it, in a code span so it isn't reworded. Paraphrasing an error makes it unfindable.
- **A name** — a command, function, flag, endpoint, setting or config key. Reference pages carry the exact name in the title and the first line, in code formatting, cased as the product cases it.
- **A concept** — "what is a webhook signature". The explanation's title names the concept in the words readers use.

Use the readers' words, not the product team's: if readers type "cost" or "payment" and the docs say "billing", name both, with the readers' word in the title or first line ([GitHub Docs](https://docs.github.com/en/contributing/writing-for-github-docs/making-content-findable-in-search)). Record the choice in the terminology list (`tw:style-guide`). Find the words from the docs site's search log, support tickets and the search engine's own suggestions — not from guessing.

## Titles, descriptions and headings

### The title

Search engines build the result's title link mainly from the page's `<title>`, falling back to the main heading, other prominent text and the anchor text of links pointing at the page ([Google](https://developers.google.com/search/docs/appearance/title-link)). Write it so Google has no reason to rewrite it:

- **Every page has one, unique, describing that page** — never "Overview", "Introduction" or a title that varies by one word across a section ([Google](https://developers.google.com/search/docs/appearance/title-link)).
- **Concise, no repeated keywords.** There's no length limit, but results truncate to the device width, so the words that identify the page come first ([Google](https://developers.google.com/search/docs/appearance/title-link)).
- **The product or site name once, at the end**, after a delimiter — "Rotate an API key | Acme Docs". In versioned docs, the version too when the page differs by version.
- **The visible H1 and the `<title>` say the same thing**, so the page has one clear main title. A sidebar label can be shorter than the title.

| Page type (`tw:docs-standards`) | Title shape                      | Example                                             |
| ------------------------------- | -------------------------------- | --------------------------------------------------- |
| Tutorial                        | what the reader builds or learns | Build a webhook listener in Node.js                 |
| How-to                          | the task, bare infinitive        | Rotate an API key                                   |
| Reference                       | the exact name, and what it is   | `POST /v1/keys` — create an API key                 |
| Explanation                     | the concept, as readers name it  | How webhook signatures work                         |
| Troubleshooting                 | the symptom or the exact error   | `Error: invalid_signature` when verifying a webhook |

### The meta description

Search engines use it only sometimes, when it describes the page better than the page's own text; otherwise they pull a snippet from the page that matches the query ([Google](https://developers.google.com/search/docs/appearance/snippet)). So:

- **Write one per page**, a short accurate summary of what the reader can do or learn there — never the same description across a section, and never a keyword list ([Google](https://developers.google.com/search/docs/appearance/snippet)).
- **On a large generated reference, generate them** from the page's own data — "Creates an API key for a project. Request body, response and errors." Programmatic descriptions are fine when each is specific and readable ([Google](https://developers.google.com/search/docs/appearance/snippet)).
- **Make the page's own first lines good enough to be the snippet** — the intro that states what the page does is often what's shown.

### Headings

Headings are what the reader scans, what the site's search indexes, and a fallback source for the title link. Write them goal-oriented and in the reader's words ([Write the Docs](https://www.writethedocs.org/guide/seo/)), in one hierarchy with no skipped levels, each specific enough to make sense in a list of search results on its own. Heading form and case are `tw:docs-standards`'.

## URLs, redirects and links

- **Readable words, hyphens, one case** — `/docs/keys/rotate`, not `/docs?id=4172` or `/docs/Rotate_Key` ([Google](https://developers.google.com/search/docs/crawling-indexing/url-structure)). Google treats URLs as case-sensitive, so settle on lowercase.
- **Slugs that survive a restructure** — name the slug for the task or the thing, not for its position ("getting-started-step-3") or a section that may move. A slug that outlives a reorganisation keeps every inbound link and bookmark.
- **A page that moves leaves a permanent redirect** from the old URL, and links inside the docs are updated to the new one. Redirects are a strong signal of which URL is canonical ([Google](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)); broken inbound links are lost readers. The mechanics are in `tw:developer-docs`' site mechanics reference.
- **Every page is linked from at least one other page** ([Google](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)) — an orphaned page is rarely found by search or by the site's navigation.
- **Anchor text says where the link goes**, makes sense on its own and is never "click here" or "read more" ([Google](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)). Link a task to its prerequisites, a reference to the how-to that uses it, and a concept to the tasks it explains.

## Versioned docs and duplicate pages

Several versions of the same page compete in search, and the oldest often wins — "it's easy for outdated documentation to be the top search result" ([Read the Docs](https://docs.readthedocs.com/platform/stable/canonical-urls.html)). One version has to be the one search engines show:

- **Point the canonical at the current version's page** where the pages are equivalent: a `rel="canonical"` link on each older copy, and a self-referencing canonical on the current page ([Google](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)). A canonical is a strong signal, not a guarantee; internal links that point at the current version strengthen it.
- **Where an old version genuinely differs** — a removed endpoint, a changed default — keep its own canonical so a reader on that version can still find it, and show a banner linking to the current page.
- **Keep `noindex` for versions that should never appear in results at all**, such as unsupported releases. It removes the page from search entirely, so it isn't a way to pick between duplicates ([Google](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)), and never block duplicates with `robots.txt` — a blocked URL can still be indexed without its content.
- **The same goes for mirrors**: docs served from a default host and a custom domain, or copied into a package registry or a repository's README, name one canonical home.

## Structured data that still counts

Only markup a search engine still uses is worth maintaining. For documentation, that's mainly breadcrumbs, which show where a page sits in the site's hierarchy ([Google](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)). Google's Article markup accepts `Article`, `NewsArticle` and `BlogPosting` — not `TechArticle` ([Google](https://developers.google.com/search/docs/appearance/structured-data/article)) — and HowTo rich results were withdrawn in 2023, so How-to markup earns nothing in Google results. Whatever markup the site emits must match the visible text ([Google](https://developers.google.com/search/docs/appearance/ai-features)).

## Being the source an AI answer quotes

AI search features and assistants draw on the same indexed pages as search: Google says there are "no additional requirements" for its AI features and that you don't need "new machine readable files, AI text files, or markup" ([Google](https://developers.google.com/search/docs/appearance/ai-features)). What helps a page get quoted is documentation that's easy to lift accurately:

- **Answer first.** The first sentence under a heading states the answer, the value or the step; the context follows.
- **Self-contained sections.** A section quoted on its own still names its subject — "API keys expire after 90 days", not "They expire after 90 days".
- **Exact names and values**, in text, not only in an image or a diagram ([Google](https://developers.google.com/search/docs/appearance/ai-features): "important content is available in textual form").
- **One task per page.** A focused page is easier to match to a question than one long page covering many tasks ([Elastic](https://www.elastic.co/docs/contribute-docs/how-to/seo)).
- **Copyable code** — real text in fenced blocks, complete enough to run (`write:code-samples`).
- **`llms.txt` is optional.** It's a proposal for a markdown index of a site's pages for agents ([llmstxt.org](https://llmstxt.org/)); Google says it doesn't use it, and its AI features guidance needs no such file. Publish one if the docs platform generates it cheaply and the readers' tools read it; never let it replace a page that's findable in its own right.

## The docs site's own search

Readers who are already on the site search inside it, and its index works from the same titles and headings:

- **Titles and headings in the readers' words** carry most of it.
- **Keywords and synonyms fields**, where the search tool has them, map the readers' words to the product's ("cost" → billing, "token" → API key), and match the terminology list.
- **Zero-result and no-click queries are gaps** — a question readers ask that no page answers. Feed them into planning (`tw:docs-planning`).
- **Excluded pages stay excluded** — a deprecated or internal page left in the index sends readers to the wrong place.

## Before publishing

- [ ] Title unique, specific, the identifying words first, product name once at the end; H1 says the same.
- [ ] Meta description written (or generated) for this page; no shared or keyword-list descriptions.
- [ ] Title and headings use the words readers search with; an error message appears verbatim.
- [ ] Slug readable, lowercase, hyphenated, named for the task or thing.
- [ ] A moved page has a permanent redirect; internal links point at the new URL.
- [ ] Linked from at least one other page; every link's anchor text says where it goes.
- [ ] In versioned docs, the canonical points at the right version; old versions carry a banner.
- [ ] Answer-first sections that make sense quoted alone; names and values in text, not only in images.
- [ ] Structured data, if any, matches the visible page.

## Boundaries

- **The site's code** — metadata tags and their generation, sitemaps, `robots.txt`, rendering and crawlability → the site's developers; this skill covers what the writer controls.
- **Heading form, case and the four page types** → `tw:docs-standards`. **Redirects and moving pages** → `tw:developer-docs`. **Which pages the set needs** → `tw:docs-planning`. **The terminology list** → `tw:style-guide`. **Readers' real questions from search logs and tickets** → `tw:docs-planning`; **a whole set inventoried against them** → `/tw:content-audit`.
- **Articles, blog posts and newsletters** → `cw:seo-aeo-geo`.
