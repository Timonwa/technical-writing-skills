---
name: seo-aeo-geo
description: >-
  SEO, AEO and GEO for a content piece — a blog article, tutorial, essay or web newsletter issue. SEO: the question it targets, the one title and one description in blog.md and their lengths, slug, links, byline and dates. AEO: question headings with a short direct answer, lists and tables for featured snippets and People also ask. GEO: quotable, sourced claims and the crawlers AI answers need. Reports to reports/seo.md. Use on "SEO for my article", "meta description", "title tag", "featured snippet", "get cited by ChatGPT".
---

# SEO, AEO and GEO for content

Make a piece easy to find, easy to choose from a results page, and worth quoting — in a search engine's results (SEO), as the direct answer (AEO), and as a cited source in an AI answer (GEO). The work is the same for all three: Google calls optimising for generative AI search "still SEO" ([Google](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)), and Bing says its Copilot answers rely on "the same core crawling, indexing, and ranking foundation as traditional search" ([Bing](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a)).

## Voice and audience come from the writing's own guide

Before applying this skill, find the publication's `profile.md` and `writing-guide.md` and read them:

- **In a codebase:** the folder the project's `AGENTS.md` names, or, for a guide kept outside the repo, the folder the user's personal agent instructions name; otherwise the project's `publications/` folder.
- **In a chat app:** the project's files, or files attached to the conversation.
- **Otherwise:** ask for them.

Voice, person, tone, terminology, formatting choices and who the reader is come from that guide, never from this skill.

- Where the guide settles something this skill also covers — title case, slug style, how dates are shown — the guide wins. Its lengths for the title and description follow the targets below.
- Where there's no guide, ask who the reader is and what the piece is for before writing anything, and offer to build one with `cw:style-guide`.

When a guide changes: in a codebase, save the file where it was found; in a chat app, give the user the updated file to replace in the project. Never write inside the installed plugin.

## Ask first

Read the answers from the topic's `brief.md` (its **Reader** and **Search query** rows above all), then `profile.md`'s Defaults, then the request; ask only what's missing. Ask with the app's question tool where it has one, so the choices can be picked; otherwise as a numbered list answered by number. Offer choices where the answers are known and a short typed answer otherwise; where the profile has a default, show it and ask whether to use it. Record the answers in the report's header, and any the brief lacks in the `brief.md` field they belong to (or under **Notes for whoever picks it up next**) so the next skill doesn't ask again.

1. **Which topic folder, and which piece?** The folder name under `topics/`; the blog post (`blog.md`) · the newsletter issue's web version (`newsletter.md`).
2. **Check only, or check and fix?** report only — writes `reports/seo.md` · fix too — edits the format file after you choose the findings. Default: report only.
3. **What question does the piece answer, in the reader's words?** Short answer. Default: the brief's Reader.
4. **What search query is it for, and what kind of page ranks for it?** a step-by-step guide · a comparison · an explainer · a list · a product page. Default: the brief's Search query.
5. **Does the site add its name to the title in search results?** yes, after a separator (which) · no · not sure.

## The topic folder

A topic lives in `topics/<yyyy-mm>-<slug>/` in the publication's folder; its formats are listed in its `brief.md` ([template](../style-guide/references/publication-template/topics/_template/brief.md)), each in its own file. In a chat app, its files are named `<topic folder>--<file>`.

- **A check only reads.** It runs even while someone holds the topic, never sets **Held by** or a status, and writes only its own `reports/seo.md`, by [references/output-format.md](references/output-format.md).
- **A fix edits the format file**, so it claims: read `brief.md`; if **Held by** names someone else and the status isn't `paused`, leave it and say so. Otherwise set **Held by** and the date, change only the findings chosen, and clear **Held by** when you stop.
- **The title and description are fields in `blog.md`'s front matter** ([template](../style-guide/references/publication-template/topics/_template/blog.md)), one of each. A newsletter's web version has no such fields; its findings go in the report.

## Write for the reader first

- **People-first, not search-first.** Content "created primarily for people, and not to manipulate search engine rankings" is what Google rewards; a piece "primarily made to attract visits from search engines" is a warning sign ([Google](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)).
- **Trust is the point.** Of experience, expertise, authoritativeness and trustworthiness, "trust is most important" — though E-E-A-T itself isn't a ranking factor; it's what the signals below add up to ([Google](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)).
- **First-hand beats summary.** Your own experience, data, tests and examples are what make a piece worth ranking and citing; a rewrite of the top results adds nothing ([Google](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)).
- **No target length.** Google has no preferred word count, and length alone doesn't affect ranking ([Google](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)). The piece is as long as its answer.

## SEO: ranking in search results

### Choose what the piece answers

- **Start from a real question** the publication's readers ask — from comments, replies, support threads, search queries the site already gets, and the results page for that question. One piece answers one main question well; related questions become sections or their own pieces.
- **Use the reader's words.** A beginner and an expert search the same thing differently ("cheese board" versus "charcuterie") ([Google](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)). Use the words the profile's reader would type, and the terms the field uses where the reader knows them.
- **Match the intent the results show.** If the results for the question are step-by-step guides, a think-piece won't serve that reader; if they're comparisons, a single-product review won't. Write the piece the searcher wanted, or target a different question.
- **No variant pages.** Don't publish near-duplicate pieces for every phrasing of a question; Google treats content made for query variations "primarily to manipulate rankings" as scaled content abuse ([Google](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)).
- **No keyword stuffing.** Repeating the same words, even in variations, tires readers and is against Google's spam policies ([Google](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)).

### What the writer controls, and what the platform does

| The writer sets                                               | The platform or site usually handles                           |
| ------------------------------------------------------------- | -------------------------------------------------------------- |
| The question, the title, the description, the slug            | The `<title>` and meta tags in the page's code                 |
| Headings, the opening, the body, links and their anchor text  | Sitemaps, robots rules, canonical tags on the site's own pages |
| Image choice, alt text and file names                         | Image sizes and formats served                                 |
| The byline, the published and updated dates shown on the page | Article structured data (headline, author, dates, image)       |

Check that the platform fills the right-hand column correctly once; after that, each piece is the left-hand column.

### Title, description and slug

A piece has one title and one description, the `title` and `description` in `blog.md`'s front matter. The title is the H1 on the page and the title in search results and share previews; the description is the meta description, the share description and the excerpt in listings. Never a separate headline and title tag, SEO title, share title or share description.

Google sets no length limit on either the title or the meta description; both are "truncated … as needed, typically to fit the device width" ([Google: title links](https://developers.google.com/search/docs/appearance/title-link), [Google: snippets](https://developers.google.com/search/docs/appearance/snippet)). The working targets below are rules of thumb from measuring where results cut off, not Google rules — aim for them so the words that decide the click are never the ones cut.

|             | Working target                                                | Why                                                                                                                      |
| ----------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Title       | about 50–60 characters                                        | desktop results cut titles past about 600 pixels ([Ahrefs](https://ahrefs.com/blog/title-tag-seo/))                      |
| Description | about 150–160 characters, with the point inside the first 120 | about 920 pixels on desktop, 680 on mobile, roughly 120 characters ([Ahrefs](https://ahrefs.com/blog/meta-description/)) |
| Slug        | 3–5 words                                                     | practice: short, readable and still true if the piece is updated                                                         |

- **Title** — descriptive and concise, unique to the piece, the words that decide the click first, no repeated keywords ([Google](https://developers.google.com/search/docs/appearance/title-link)). It carries the publication's voice and still makes sense on a results page next to competing pieces. The site may add its name after a separator ([Google](https://developers.google.com/search/docs/appearance/title-link)), and the end is what gets cut first; where it does, don't type the name into the field as well. Google may build the title link from the title, the headings or link text pointing at the page, so a title that matches the piece is the one that shows.
- **Description** — a summary of this piece, never shared across pieces, with details such as the author or date where they help; no keyword lists ([Google](https://developers.google.com/search/docs/appearance/snippet)). Snippets are "primarily created from the page content itself", and the description is used when it's more accurate, so the opening matters as much. A cross-post's opening excerpt is a different thing (`cw:cross-posting`).
- **Slug** — short, readable words joined by hyphens, in the reader's language, lowercase; avoid long ID numbers ([Google](https://developers.google.com/search/docs/crawling-indexing/url-structure)). Set it before publishing and don't change it afterwards without a redirect.

### Links

- **Internal links** — every piece you care about is linked from at least one other piece on the site ([Google](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)). Link a new piece from the older pieces it extends, and the older pieces from it.
- **External links** to sources that add value; they help a reader trust the claim ([Google](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)).
- **Anchor text** is descriptive, reasonably concise and relevant — never "click here", never stuffed, with words around it that give context, and not several links side by side ([Google](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)).
- **Paid and affiliate links** carry `rel="sponsored"` (or `nofollow`) as well as the disclosure the publication's profile requires.

### Author and dates

- **A byline** where readers expect one, with a link to an author page or bio; never a made-up author ([Google](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)).
- **A visible date, labelled** — "Published" or "Last updated" — and few other dates on the page; no future dates; the visible date and the structured data match ([Google](https://developers.google.com/search/docs/appearance/publication-dates)).
- **Update the date only for a real update.** Changing the date "to make them seem fresh when the content has not substantially changed" is a warning sign ([Google](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)). Updating an existing piece properly is `cw:content-refresh`.
- **Say how AI was used** where readers would reasonably expect to know, as the publication's policy sets ([Google](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)).

### Images

Place each image near the text it supports, give it alt text that says what it shows in context ("Dalmatian puppy playing fetch", not "puppy, dog, pet"), and a short descriptive file name (`black-kitten.jpg`, not `IMG00023.JPG`) ([Google](https://developers.google.com/search/docs/appearance/google-images)). The full craft of choosing and describing images is `cw:images-and-diagrams`.

## AEO: being the direct answer

Featured snippets, "People also ask", AI Overviews and voice assistants all lift a short passage that answers a question outright. Google decides which page becomes a featured snippet, and there's no markup to claim one ([Google](https://developers.google.com/search/docs/appearance/featured-snippets)); the writer's part is a passage that's easy to lift.

- **Answer near the top.** The reader who arrived from a question gets the answer, or a clear promise of it, in the first paragraphs; context and detail follow. A feature or essay may open on a scene, but the nut graf lands by the second or third paragraph.
- **Question-shaped headings** for the questions readers ask, in their words: "How long should a beginner rest between sets?", not "Rest periods".
- **A direct answer of about 40–55 words under the heading**, then the detail. Paragraph featured snippets are most often 40–55 words and almost never longer than about 320 characters ([Portent](https://portent.com/blog/seo/featured-snippet-display-lengths-study-portent.htm)) — a working target from what Google displays, not a rule. The answer stands on its own: the claim, the number, the condition.
- **Lists for steps, tables for comparisons.** Featured snippets come as paragraphs, lists and tables; Google gives no format guidance, so this is practice — use the shape the answer has.
- **"People also ask" as a source of sub-questions.** Featured snippets can appear inside that related-questions group ([Google](https://developers.google.com/search/docs/appearance/featured-snippets)); the questions it shows for the topic are the sections readers expect.
- **A question-and-answer section** still serves readers; it just no longer earns an FAQ rich result (see What to skip).
- **AI Overviews use the same index and signals** — a page indexed and eligible for a snippet, nothing extra ([Google](https://developers.google.com/search/docs/appearance/ai-features)).
- **Headings say what's under them**, one level at a time — Google doesn't penalise heading order, but screen readers depend on it ([Google](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)).
- **No chunking for machines.** Write sections a person can follow; there's "no requirement to break your content into tiny pieces for AI" ([Google](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)).

## GEO: being cited in AI answers

An AI answer — ChatGPT search, Perplexity, Claude, Copilot, Google's AI Mode — cites pages that support what it says ([Google](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)). A page is cited when a passage states the answer plainly and the page looks trustworthy.

- **Specific, attributable claims.** The number, the date, the condition, and who found it, linked to the original study, document or dataset rather than a summary of it. A vague claim gives an engine nothing to cite.
- **Original material.** Your measurements, tests, screenshots, worked examples, interviews and conclusions — "a first-hand review provides a unique perspective based on personal experience" ([Google](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)). Say what you did and when.
- **Clear names.** Name the product, place, person, version or method exactly and consistently, so a passage still makes sense quoted alone (practice).
- **Mentions are earned, not engineered.** Being cited by the sites engines already trust comes from work worth citing; "seeking inauthentic 'mentions' across the web isn't as helpful as it might seem" ([Google](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)), and wording engineered to trigger citations counts as abuse in Bing's guidelines ([Bing](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a)).
- **Fresh only when it's true.** Engines retrieve "up-to-date" pages ([Google](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)); update the piece and its date only when the content really changes (`cw:content-refresh`).
- **Keep the text in text.** Important content belongs in the page's text, not only in an image or a video ([Google](https://developers.google.com/search/docs/appearance/ai-features)).
- **The engine has to be allowed to read the page.** Each AI answer has its own search crawler, separate from its training crawler; [references/ai-crawlers.md](references/ai-crawlers.md) lists them. Check them once with whoever runs the site.

## What to skip

- **FAQ markup for rich results** — FAQ rich results stopped appearing in Google Search on 7 May 2026 ([Google](https://developers.google.com/search/docs/appearance/structured-data/faqpage)). A question-and-answer section is still fine when it serves the reader.
- **`llms.txt` and other AI files for Google** — Google Search ignores them; they neither help nor harm ([Google](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)).
- **Special "AI" structured data** — none exists; standard Article data is what the platform provides ([Google](https://developers.google.com/search/docs/appearance/ai-features)).
- **Chasing mentions** — seeking inauthentic mentions across the web "isn't as helpful as it might seem" ([Google](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)).
- **Text aimed at the answer engine** — hidden instructions or wording engineered to trigger citations count as abuse in Bing's guidelines ([Bing](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a)).

## Cross-posted copies

When the piece is republished on another site — Medium, Substack, dev.to, a partner blog — the original should stay the one that ranks.

- **Publish the original first**, and cross-post once it's indexed.
- **Google** doesn't recommend a cross-domain canonical link for syndicated copies; it recommends that the other site block its copy from indexing ([Google](https://developers.google.com/search/docs/crawling-indexing/canonicalization-troubleshooting)). Ask for that where the platform allows it.
- **Bing** still prefers a canonical link on the copy pointing to the original, so set the platform's canonical URL field too.
- **Link back** to the original from the copy, in the text. The full process is `cw:cross-posting`.

## Before publishing

**SEO**

- [ ] The piece answers one main question, in the reader's words, better than what already ranks — with something first-hand.
- [ ] One title of about 50–60 characters and one description of about 150–160, key words first, in `blog.md`'s front matter; slug short; all written for this piece; no stuffing.
- [ ] Internal links to and from related pieces; descriptive anchor text; sponsored links marked.
- [ ] Byline with a bio link; labelled, visible date matching the structured data.
- [ ] Images near their text, with alt text and descriptive file names.

**AEO**

- [ ] The answer is near the top; each main question has a question heading with a direct answer of about 40–55 words under it.
- [ ] Steps as lists, comparisons as tables; headings one level at a time.

**GEO**

- [ ] Claims that matter are specific, named and linked to their original source.
- [ ] Something original: data, tests, examples or experience, with what was done and when.
- [ ] Nothing important only in an image or a video; the AI search crawlers are allowed.

**Copies**

- [ ] For a cross-post: the original is live and indexed first.

**Files**

- [ ] The findings are in the topic's `reports/seo.md`, and any fixes chosen are in `blog.md`, made under a claim.

## Boundaries

- **The site's code** — metadata APIs, sitemaps, robots rules, structured data templates → whoever runs the site; this skill covers what the writer controls.
- **The piece itself** → `cw:article-standards`; **a newsletter issue** → `cw:newsletter-standards`.
- **Images** → `cw:images-and-diagrams`. **The cover image and share card** → `cw:cover-images`. **Updating an old piece** → `cw:content-refresh`. **Republishing elsewhere** → `cw:cross-posting`.
- **How it's performing after publishing** → `/cw:content-performance`.
- **Documentation pages** → `tw:docs-seo-aeo-geo`.
