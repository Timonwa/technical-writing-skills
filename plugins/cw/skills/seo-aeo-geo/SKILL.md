---
name: seo-aeo-geo
description: >-
  Getting a content piece found — a blog article, tutorial, essay or web newsletter issue — in search results, as the direct answer, and as a cited source in AI answers from Google, ChatGPT, Perplexity, Claude and Copilot. Covers what the piece answers, title tag and headline, meta description, slug, headings, the opening, quotable claims, links, byline, dates, images, cross-posts and what to skip. Use on "SEO for my article", "get this post found", "meta description", "title tag", "slug", "AI Overviews", "get cited by ChatGPT".
---

# SEO, AEO and GEO for content

Make a piece easy to find, easy to choose from a results page, and worth quoting — in a search engine's results (SEO), as the direct answer (AEO), and as a cited source in an AI answer (GEO). The work is the same for all three: Google calls optimising for generative AI search "still SEO" ([Google](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)), and Bing says its Copilot answers rely on "the same core crawling, indexing, and ranking foundation as traditional search" ([Bing](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a)).

## Voice and audience come from the writing's own guide

Before applying this skill, find the publication's `profile.md` and `writing-guide.md` and read them:

- **In a codebase:** the folder the project's `AGENTS.md` names, or, for a guide kept outside the repo, the folder the user's personal agent instructions name (such as `~/.claude/CLAUDE.md`); otherwise the project's `publications/` folder.
- **In a chat app:** the project's files (a Claude Project's knowledge, or the equivalent elsewhere), or files attached to the conversation.
- **Otherwise:** ask for them.

Voice, person, tone, terminology, formatting choices and who the reader is come from that guide, never from this skill.

- Where the guide settles something this skill also covers — title case, slug style, how dates are shown — the guide wins.
- Where there's no guide, ask who the reader is and what the piece is for before writing anything, and offer to build one with `cw:style-guide`.

When a guide changes: in a codebase, save the file where it was found; in a chat app, give the user the updated file to replace in the project. Never write inside the installed plugin.

## Write for the reader first

- **People-first, not search-first.** Content "created primarily for people, and not to manipulate search engine rankings" is what Google rewards; a piece "primarily made to attract visits from search engines" is a warning sign ([Google](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)).
- **Trust is the point.** Of experience, expertise, authoritativeness and trustworthiness, "trust is most important" — though E-E-A-T itself isn't a ranking factor; it's what the signals below add up to ([Google](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)).
- **First-hand beats summary.** Your own experience, data, tests and examples are what make a piece worth ranking and citing; a rewrite of the top results adds nothing ([Google](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)).
- **No target length.** Google has no preferred word count, and length alone doesn't affect ranking ([Google](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)). The piece is as long as its answer.

## Choose what the piece answers

- **Start from a real question** the publication's readers ask — from comments, replies, support threads, search queries the site already gets, and the results page for that question. One piece answers one main question well; related questions become sections or their own pieces.
- **Use the reader's words.** A beginner and an expert search the same thing differently ("cheese board" versus "charcuterie") ([Google](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)). Use the words the profile's reader would type, and the terms the field uses where the reader knows them.
- **Match the intent the results show.** If the results for the question are step-by-step guides, a think-piece won't serve that reader; if they're comparisons, a single-product review won't. Write the piece the searcher wanted, or target a different question.
- **No variant pages.** Don't publish near-duplicate pieces for every phrasing of a question; Google treats content made for query variations "primarily to manipulate rankings" as scaled content abuse ([Google](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)).
- **No keyword stuffing.** Repeating the same words, even in variations, tires readers and is against Google's spam policies ([Google](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)).

## What the writer controls, and what the platform does

| The writer sets                                                                | The platform or site usually handles                           |
| ------------------------------------------------------------------------------ | -------------------------------------------------------------- |
| The question, the headline, the title tag text, the meta description, the slug | The `<title>` and meta tags in the page's code                 |
| Headings, the opening, the body, links and their anchor text                   | Sitemaps, robots rules, canonical tags on the site's own pages |
| Image choice, alt text and file names                                          | Image sizes and formats served                                 |
| The byline, the published and updated dates shown on the page                  | Article structured data (headline, author, dates, image)       |

Check that the platform fills the right-hand column correctly once; after that, each piece is the left-hand column.

## Titles, descriptions and slugs

- **Title tag** — descriptive and concise, unique to the piece, no repeated keywords, with the site name at the start or end after a separator ([Google](https://developers.google.com/search/docs/appearance/title-link)). There's no length limit, but results truncate to the screen, so put the words that decide the click first.
- **Headline versus title tag.** The headline on the page can carry the publication's voice; the title tag has to make sense on a results page next to competing pieces. Where the platform allows one, write both. Google may build the title link from either, or from headings and link text pointing at the page ([Google](https://developers.google.com/search/docs/appearance/title-link)).
- **Meta description** — a summary of this piece, never shared across pieces, with details such as the author or date where they help; no keyword lists ([Google](https://developers.google.com/search/docs/appearance/snippet)). Google writes most snippets from the page itself and uses the description when it summarises better, so the opening matters as much.
- **Slug** — short, readable words joined by hyphens, in the reader's language, lowercase; avoid long ID numbers ([Google](https://developers.google.com/search/docs/crawling-indexing/url-structure)). Set it before publishing and don't change it afterwards without a redirect.

## The opening and headings

- **Answer near the top.** The reader who arrived from a question gets the answer, or a clear promise of it, in the first paragraphs; the narrative, the context and the detail follow. A feature or essay may open on a scene, but the nut graf lands by the second or third paragraph.
- **Headings say what's under them**, in the reader's words, so a scanner can jump to their part. Google doesn't count headings or penalise their order, but heading order matters to screen readers ([Google](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)) — keep one level at a time.
- **No chunking for machines.** Write sections a person can follow. Google says there's no need to break content into small pieces or write in a special way for AI ([Google](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)).

## Being quoted and cited

An answer engine cites a page when a passage answers the question plainly and the page looks trustworthy.

- **State the answer as a sentence that stands on its own** — the claim, the number, the condition — so it still makes sense quoted without the paragraph before it.
- **Claims carry their source**, linked to the original study, document or dataset, not to a summary of it.
- **Original material earns citations**: your measurements, screenshots, worked examples, interviews and conclusions. Say what you did and when.
- **Name the author and show expertise where the topic needs it** (below).
- **Keep the text in text.** Important content belongs in the page's text, not only in an image or a video ([Google](https://developers.google.com/search/docs/appearance/ai-features)).

## Links

- **Internal links** — every piece you care about is linked from at least one other piece on the site ([Google](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)). Link a new piece from the older pieces it extends, and the older pieces from it.
- **External links** to sources that add value; they help a reader trust the claim ([Google](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)).
- **Anchor text** is descriptive, reasonably concise and relevant — never "click here", never stuffed, with words around it that give context, and not several links side by side ([Google](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)).
- **Paid and affiliate links** carry `rel="sponsored"` (or `nofollow`) as well as the disclosure the publication's profile requires.

## Author and dates

- **A byline** where readers expect one, with a link to an author page or bio; never a made-up author ([Google](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)).
- **A visible date, labelled** — "Published" or "Last updated" — and few other dates on the page; no future dates; the visible date and the structured data match ([Google](https://developers.google.com/search/docs/appearance/publication-dates)).
- **Update the date only for a real update.** Changing the date "to make them seem fresh when the content has not substantially changed" is a warning sign ([Google](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)). Updating an existing piece properly is `cw:content-refresh`.
- **Say how AI was used** where readers would reasonably expect to know, as the publication's policy sets ([Google](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)).

## Images

Place each image near the text it supports, give it alt text that says what it shows in context ("Dalmatian puppy playing fetch", not "puppy, dog, pet"), and a short descriptive file name (`black-kitten.jpg`, not `IMG00023.JPG`) ([Google](https://developers.google.com/search/docs/appearance/google-images)). The full craft of choosing and describing images is `cw:images-and-diagrams`.

## Where AI answers come from

The writer doesn't set crawler rules, but should know which ones decide whether a piece can be cited, and check them with whoever runs the site.

| Answer                          | Needs                                                                                                                                                                                                  | Separate from                                                 |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------- |
| Google AI Overviews and AI Mode | the page indexed and eligible for a snippet; nothing extra ([Google](https://developers.google.com/search/docs/appearance/ai-features))                                                                | `Google-Extended`, which governs some other Google AI systems |
| ChatGPT search                  | `OAI-SearchBot` allowed ([OpenAI](https://developers.openai.com/api/docs/bots))                                                                                                                        | `GPTBot` (training); blocking it doesn't affect search        |
| Perplexity                      | `PerplexityBot` allowed ([Perplexity](https://docs.perplexity.ai/guides/bots))                                                                                                                         | —                                                             |
| Claude                          | `Claude-SearchBot` and `Claude-User` allowed ([Anthropic](https://support.anthropic.com/en/articles/8896518))                                                                                          | `ClaudeBot` (training)                                        |
| Microsoft Copilot               | the page in Bing's index ([Bing](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a)); IndexNow tells Bing about new and changed pages quickly ([IndexNow](https://www.indexnow.org/)) | —                                                             |

## What to skip

- **FAQ markup for rich results** — FAQ rich results stopped appearing in Google Search on 7 May 2026 ([Google](https://developers.google.com/search/docs/appearance/structured-data/faqpage)). A question-and-answer section is still fine when it serves the reader.
- **`llms.txt` and other AI files for Google** — Google Search ignores them; they neither help nor harm ([Google](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)).
- **Special "AI" structured data** — none exists; standard Article data is what the platform provides ([Google](https://developers.google.com/search/docs/appearance/ai-features)).
- **Chasing mentions** — seeking inauthentic mentions across the web "isn't as helpful as it might seem" ([Google](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)).
- **Text aimed at the answer engine** — hidden instructions or wording engineered to trigger citations count as abuse in Bing's guidelines ([Bing](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a)).

## Cross-posted copies

When the piece is republished on another site — dev.to, Hashnode, Medium, a partner blog — the original should stay the one that ranks.

- **Publish the original first**, and cross-post once it's indexed.
- **Google** doesn't recommend a cross-domain canonical link for syndicated copies; it recommends that the other site block its copy from indexing ([Google](https://developers.google.com/search/docs/crawling-indexing/canonicalization-troubleshooting)). Ask for that where the platform allows it.
- **Bing** still prefers a canonical link on the copy pointing to the original, so set the platform's canonical URL field too.
- **Link back** to the original from the copy, in the text. The full process is `cw:cross-posting`.

## Before publishing

- [ ] The piece answers one main question, in the reader's words, better than what already ranks — with something first-hand.
- [ ] Title tag, headline, meta description and slug written for this piece; no stuffing.
- [ ] The answer is near the top; headings say what's under them, one level at a time.
- [ ] Claims that matter are stated plainly and linked to their original source.
- [ ] Internal links to and from related pieces; descriptive anchor text; sponsored links marked.
- [ ] Byline with a bio link; labelled, visible date matching the structured data.
- [ ] Images near their text, with alt text and descriptive file names.
- [ ] Nothing important only in an image or a video.
- [ ] For a cross-post: the original is live and indexed first.

## Boundaries

- **The site's code** — metadata APIs, sitemaps, robots rules, structured data templates → the site's developers; this skill covers what the writer controls.
- **The piece itself** → `cw:article-standards`; **a newsletter issue** → `cw:newsletter-standards`.
- **Images** → `cw:images-and-diagrams`. **The cover image and share card** → `cw:cover-images`. **Updating an old piece** → `cw:content-refresh`. **Republishing elsewhere** → `cw:cross-posting`.
- **How it's performing after publishing** → `/cw:content-performance`.
- **Documentation pages** → `tw:seo-aeo-geo`.
