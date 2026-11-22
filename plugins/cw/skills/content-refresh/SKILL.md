---
name: content-refresh
description: >-
  Keeping a published piece true and useful after it ships — a blog post, article, tutorial, essay or a newsletter issue's web version: deciding whether to refresh, rewrite, merge, redirect or retire it, what to recheck, dates that move only for a real update, visible correction and update notes, and merging or retiring pieces without breaking links. Use on "update this old post", "refresh this article", "is this post outdated", "merge these posts", "retire this article", "redirect this post".
---

# Refreshing published content

A published piece keeps making claims after the day it ships: prices change, versions move, links die, a better piece appears beside it. This skill decides what an existing piece needs and does it honestly — readers and search engines both see what changed and when.

## Voice and audience come from the writing's own guide

Before refreshing, find the publication's `profile.md` and `writing-guide.md` and read them:

- **In a codebase:** the folder the project's `AGENTS.md` names, or, for a guide kept outside the repo, the folder the user's personal agent instructions name (such as `~/.claude/CLAUDE.md`); otherwise the project's `publications/` folder.
- **In a chat app:** the project's files (a Claude Project's knowledge, or the equivalent elsewhere), or files attached to the conversation.
- **Otherwise:** ask for them.

Voice, person, tone, terminology, formatting choices and who the reader is come from that guide, never from this skill.

- Where the guide settles something this skill also covers — how update notes are worded, where corrections sit, whether old issues are ever edited — the guide wins.
- Where there's no guide, ask who the reader is and what the piece is for, and offer to build one with `cw:style-guide`.

When a guide changes: in a codebase, save the file where it was found; in a chat app, give the user the updated file to replace in the project. Never write inside the installed plugin.

## Ask first

Read the answers from the topic's `brief.md`, then `profile.md`'s Defaults, then the request; ask only what's missing. Ask with the app's question tool where it has one, so the choices can be picked; otherwise as a numbered list answered by number. Offer choices where the answers are known and a short typed answer otherwise; where the profile has a default, show it and ask whether to use it. Record each answer in the `brief.md` field it belongs to — the "What this topic becomes" table or a row of "The brief" — and any answer with no field under "Notes for whoever picks it up next", so the next skill doesn't ask again.

1. **Which topic?** Its topic folder or published URL.
2. **Which formats does the refresh cover?** blog post · newsletter issue's web version · cross-posts — pick any. Default: every published format in the brief's "What this topic becomes".
3. **What prompted it?** a performance report (which) · a fact that moved · a reader's report · the review cadence · a newer piece on the same question.
4. **What does it need?** refresh · rewrite · merge · redirect · retire · decide for me. Default: decide for me, using the table below.
5. **Can each cross-post be updated directly, or does the owner paste the change in?** One answer per platform in `copies.md`. Default: the owner pastes it in.
6. **Should the change be re-promoted?** social posts · a mention in the newsletter · no. Default: no, unless the update is substantial.

## The topic folder

A refresh works in the topic's own folder, `topics/<yyyy-mm>-<slug>/` in the publication's folder; in a chat app, its files are named `<topic folder>--<file>`. The file shapes are the templates in [`topics/_template/`](../style-guide/references/publication-template/topics/_template/).

- **Claim it first.** Read `brief.md`. If "Held by" names someone else and the status isn't `paused`, leave it and say so. Otherwise set Held by and the date, and move the status of each format being refreshed, and the topic's own, from `published` to `drafting`.
- **Edit the format files** — `blog.md`, and `newsletter.md` for the issue's web version — recheck claims against `sources.md`, update each source's Checked date and each claim's status, and put new screenshots in `images/`.
- **Front matter.** In `blog.md`, set `updated` only for a substantive change; `published_url` stays as it is. Where the title or description changes, `cw:seo-aeo-geo` checks them.
- **Every copy in `copies.md`.** A full copy gets the same change and the same correction or update note; an opening excerpt is rewritten only when the opening paragraphs changed. Set each platform's last synced date, and hand the owner the exact text for any copy they paste in themselves.
- **Keep the change notes in the topic** — the reader-facing correction or update note in the format file, and a dated line in `brief.md`'s notes: `Refreshed <yyyy-mm-dd>: <decision> — <what changed> — <files and copies updated>`.
- **When it's live again**, set each format's status and the topic's to `published` (or `retired`), clear Held by, and change the topic's line in `calendar.md` — only that line: its status, and its formats if one was retired. The line stays under **Published**.

## When to look again

- **A performance review flags it** — ranking decay, a click-through gap, two pieces competing for one query, a page with no impressions (`/cw:content-performance`).
- **A fact in it has moved** — a price, a version, a law, a statistic, a product's name or interface.
- **A reader reports a problem** — an error, a broken step, a dead link. Treat every report as a lead to check, not a fix to apply blindly.
- **The demo or code no longer runs** on the current versions.
- **A newer piece covers the same ground**, or the publication's own thinking has changed.
- **On a review cadence** the publication records in its guide (common practice where it records none):
  - the pieces that bring in most readers, every quarter;
  - pieces built on fast-moving facts — prices, versions, laws — every six months;
  - every other piece at least once a year;
  - at once, when clicks fall by about 30% or more against the same period a year earlier (`/cw:content-performance`).

## Decide what the piece needs

Read the piece against its current reader and the profile's purpose, then pick one:

| Decision     | When                                                                                                       | The URL                                 | The date                            |
| ------------ | ---------------------------------------------------------------------------------------------------------- | --------------------------------------- | ----------------------------------- |
| **Refresh**  | The piece is sound; some facts, links, screenshots or code have aged                                       | Unchanged                               | "Updated" date, only if substantive |
| **Rewrite**  | The question is still worth answering, but the piece no longer answers it well                             | Unchanged                               | "Updated" date, with an update note |
| **Merge**    | Two or more pieces answer the same question for the same reader                                            | One survives; the others redirect to it | The survivor's "Updated" date       |
| **Redirect** | The piece is superseded by another that serves its reader fully                                            | Permanent redirect to the replacement   | —                                   |
| **Retire**   | Nothing should replace it: the subject is gone, the advice is unsafe, the piece no longer fits the profile | Removed: 404 or 410                     | —                                   |

A piece that is wrong but still useful is corrected, not retired. A piece that only needs promotion needs neither — it needs `cw:social-media-posts`.

## Refresh: what to recheck

Work through the piece as a reader arriving today:

- **What ranks for its question now** — search the query and read the top results. A shift in what readers want (a comparison where a how-to used to win), subtopics the piece misses, and the follow-up questions Google shows beside the results are the usual reasons a sound piece slipped (common practice).

- **Facts and figures** — every number, price, date, statistic and "currently", against its original source. A figure whose source has updated gets the new figure and the new source.
- **Versions and steps** — every version named, and every step of a tutorial run again on the current versions (`write:code-samples`, Code in a tutorial).
- **The demo repo** — it builds, runs and matches the piece; its README still describes it (`cw:demo-project`).
- **Screenshots and images** — retaken where the interface changed; alt text updated to match (`cw:images-and-diagrams`).
- **Links** — every external link resolves to what it claims; a moved source is relinked, a dead one replaced or removed with the claim it supported rechecked.
- **Internal links** — out to newer pieces that now answer the follow-up question, and in from newer pieces that should point here.
- **The title's promise** — the title and description still describe the piece after the changes (`cw:seo-aeo-geo`).
- **Claims of first, best, only, latest** — the easiest to go stale; recheck or remove.

### Substantive or cosmetic

- **Substantive:** a fact, figure, step, recommendation or conclusion changed; a section was added or removed; code was replaced. These get an "Updated" date and, where a reader of the earlier version could have acted on it, an update note.
- **Cosmetic:** a typo, a broken link swapped for its new address, an image recompressed, a heading reworded with no change in meaning. These change nothing the reader sees about dates.

## Dates

- **Show the dates and label them** — "Published" and, after a substantive change, "Updated" ([Google: publication dates](https://developers.google.com/search/docs/appearance/publication-dates)).
- **Move the updated date only for a substantive change.** Google's own self-assessment asks: "Are you changing the date of pages to make them seem fresh when the content has not substantially changed?" ([Google: helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)). Re-dating a piece without changing it misleads readers and earns nothing.
- **Keep the original publish date.** The piece was first published then; the update date says it has been kept current since.
- **Keep the visible date and the structured date the same** — `datePublished` and `dateModified`, where the platform sets them, must match what the reader sees ([Google: publication dates](https://developers.google.com/search/docs/appearance/publication-dates)).

## Correction and update notes

- **A correction gets a visible, dated note** saying what was wrong and what it now says: "Correction, 12 March: an earlier version gave the fee as 3%. It is 2.5%." Acknowledge mistakes and correct them promptly and prominently ([SPJ Code of Ethics](https://www.spj.org/spj-code-of-ethics/)). Place it where a reader who saw the error will see it — at the top for a material error, beside the corrected passage for a small one, as the guide sets.
- **A substantial update gets an update note** — what changed and when: "Updated 4 June: steps 3–5 now use version 5; the old flag is gone." One line, not a changelog of every edit.
- **Never correct silently** anything a reader may have relied on, quoted or acted on. A silent fix makes an earlier reader's screenshot or citation look like their mistake.

### What never changes silently

- **Quotes.** A quote stays as the person said it. If it was wrong, correct with a note; if the person retracts it later, say so in a note.
- **Claims others have cited** — a statistic, a ranking, a recommendation. Change it with a note, so a citation elsewhere still makes sense.
- **The conclusion or recommendation.** A piece that now reaches a different answer says so at the top.
- **Disclosures** — a sponsorship or affiliation that applied when the piece was written stays disclosed.

## Merging pieces

- **Pick the survivor** — usually the piece with the stronger URL, the more inbound links, or the better answer; the profile's purpose breaks a tie.
- **Bring over what's worth keeping** from the others — a section, an example, a reader's question — and drop the rest. The merged piece reads as one piece, not a stack.
- **Permanently redirect every retired URL to the survivor**, directly, with no chain of redirects ([Google: redirects](https://developers.google.com/search/docs/crawling-indexing/301-redirects); [site moves](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes)). The redirect is set in the site's hosting or CMS.
- **Update internal links** to point at the survivor rather than through the redirect, and keep the redirects for as long as possible — Google says at least a year, and indefinitely is better for readers ([Google: site moves](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes)).
- **Add an update note** to the survivor if a reader of a merged piece would wonder where it went.
- **In the publication's folder**, the survivor's `brief.md` records what came in from where; each merged topic's formats, its brief and its line in `calendar.md` become `retired`, and every copy in its `copies.md` is pointed at the survivor or taken down.

## Retiring a piece

- **Redirect only to a real equivalent.** "Don't redirect many old URLs to one irrelevant single URL destination, such as the home page" ([Google: site moves](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes)). With no equivalent, let the URL return 404 or 410, and Google removes it from the index ([Google: HTTP status codes](https://developers.google.com/search/docs/crawling-indexing/http-network-errors)).
- **Remove internal links** to the retired piece, and take it out of series pages, reading lists and anything the platform lists it in — including its row in the series file under `series/`, whose status becomes `retired`.
- **Archive its demo repo** and say in that repo's README that the piece is retired.
- **Its copies follow it** — every cross-post in `copies.md` is taken down, or gets a note at the top pointing to what's current, and its row records which.
- **Keep the slug retired.** Don't reuse a retired URL for a different piece; old links and citations would land on the wrong answer.

## Newsletter issues

- **A sent issue is a record.** Correct the web version with a dated note, as above; don't rewrite it to read as if the error never went out.
- **A material error gets a correction in the next issue** — one or two sentences, linking the corrected web version. A typo doesn't.
- **An archived issue that's now wrong** gets a note at the top pointing to what's current, rather than a rewrite.

## After a substantial refresh

- **Recheck findability** — the title, description, slug and opening still match the question the piece answers (`cw:seo-aeo-geo`).
- **Ask Google to recrawl it** — in a site you manage in Search Console, request indexing for the URL with URL Inspection ([Google: ask Google to recrawl](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl)). The sitemap's `<lastmod>` should change with a substantive update and only then: Google uses it only when it's "consistently and verifiably" accurate ([Google: sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)). Setting it is the site's developers' work or the CMS's.
- **Re-promote what changed** — a new angle or a materially better answer is worth sharing again (`cw:social-media-posts`, which adds the posts to `social.md`; posts already live aren't edited); a significant update can go in the newsletter (`cw:newsletter-standards`).
- **Record the refresh** in the topic's `brief.md`, so the next review knows it was checked and when.

## Boundaries

- **Finding which pieces need attention** → `/cw:content-performance`.
- **Rewriting the piece's structure or framing** → `cw:article-standards`; **the line-level edit** → `cw:editing-standards`; **a full review before republishing** → `/cw:review`.
- **Tutorial code and the demo repo** → `write:code-samples`, `cw:demo-project`.
- **Cross-posting to a platform the topic isn't on yet** → `cw:cross-posting`; keeping the existing copies in step is this skill's job.
- **Setting up redirects, status codes and structured dates** — the site's hosting or CMS; this skill says which ones a piece needs.
