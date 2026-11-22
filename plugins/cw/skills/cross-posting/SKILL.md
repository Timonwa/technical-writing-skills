---
name: cross-posting
description: >-
  Republishing a blog post on other blogging platforms — Medium, Hashnode, dev.to, Substack posts, LinkedIn articles, X articles, Ghost, a partner site — so the original stays the one that ranks and gets cited: full copy or a shared opening excerpt per platform, the canonical URL or noindex each allows, Google's and Bing's guidance, timing, links and images, rights, and keeping copies in step, recorded in the topic's copies.md. Use on "cross-post this", "syndicate this article", "repost on dev.to", "Medium", "canonical URL".
---

# Cross-posting

A copy of a piece on another site reaches that site's readers, and competes with the original in search and AI answers unless it's set up to defer to it. This skill makes each copy point readers, search engines and answer engines back to the original.

## Voice and audience come from the writing's own guide

Before cross-posting, find the publication's `profile.md` and `writing-guide.md` and read them:

- **In a codebase:** the folder the project's `AGENTS.md` names, or, for a guide kept outside the repo, the folder the user's personal agent instructions name (such as `~/.claude/CLAUDE.md`); otherwise the project's `publications/` folder.
- **In a chat app:** the project's files (a Claude Project's knowledge, or the equivalent elsewhere), or files attached to the conversation.
- **Otherwise:** ask for them.

Voice, person, tone, terminology, formatting choices and who the reader is come from that guide, never from this skill.

- Where the guide settles something this skill also covers — which platforms the publication uses, how the "originally published" line reads, whether each platform gets a full copy or the opening excerpt — the guide wins.
- Where there's no guide, ask who the reader is and what the piece is for, and offer to build one with `cw:style-guide`.

When a guide changes: in a codebase, save the file where it was found; in a chat app, give the user the updated file to replace in the project. Never write inside the installed plugin.

## Ask first

Read the answers from the topic's `brief.md` (its **Cross-posts** row above all), then `profile.md`'s Defaults, then the request; ask only what's missing. Ask with the app's question tool where it has one, so the choices can be picked; otherwise as a numbered list answered by number. Offer choices where the answers are known and a short typed answer otherwise; where the profile has a default, show it and ask whether to use it. Record each answer in the `brief.md` field it belongs to — the **What this topic becomes** table or a row of **The brief** — and any answer with no field under **Notes for whoever picks it up next**, so the next skill doesn't ask again.

1. **Which topic folder is being cross-posted?** The folder name under `topics/`; the post it copies is that folder's `blog.md`.
2. **Which platforms?** Medium · Hashnode · dev.to · Substack posts · LinkedIn articles · X articles · Ghost · a partner site — pick any. Default: the Cross-posts row's Where it goes, then the profile's Cross-posts.
3. **Full copy or opening excerpt on each?** full copy · opening excerpt, per platform. Default: the Cross-posts row, then the profile's Cross-posts.
4. **When does each copy go out?** A date per platform, after the original is indexed. Default: the Cross-posts row's publish date.
5. **Whose piece is it?** the writer's own · written for someone else — a guest post, a commission, a client's (Rights).
6. **What does the AI disclosure say?** none used · some AI assistance · say what, per the policy. Default: the writing guide's AI-use policy and the original's disclosure.

## Work in the topic folder

Each topic has its own folder in the publication's `topics/` (`topics/2026-12-sourdough-starter/`), made when it's briefed (`cw:content-planning`). Copies are recorded in its `copies.md`; in a chat app, `<topic folder>--copies.md`.

- **Claim it before writing.** Read `brief.md`: if **Held by** names someone else and the status isn't `paused`, leave it and say so. Otherwise set **Held by** and the date, the Cross-posts row's status to `drafting`, and the topic's line in the publication's `calendar.md` to match — that line only. When stopping, set the status and clear **Held by**.
- **Write only `copies.md`.** A full copy is `blog.md` itself, never rewritten into `copies.md`; where the brief has no Cross-posts row, say so and ask whether to add one.
- **`copies.md` follows the [template](../style-guide/references/publication-template/topics/_template/copies.md)**: the original's title and published URL, then `## Opening excerpt` when any platform takes it, then one `## <Platform>` section per platform. Every field stays present, left blank until it's known.

## Decide which copies to make

Before setting anything up, decide where copies go and what kind each is:

1. **Where the profile's readers already are.** A copy on a platform the publication's readers don't use costs effort and earns nothing; the profile's channels and audience decide it.
2. **What each platform gets:**
   - a **full copy** where the platform can point search engines back to the original (a canonical field) — `blog.md` itself, with the platform's settings recorded in `copies.md`;
   - the **opening excerpt** where it can't — the post's opening two or three paragraphs, about 150–300 words, ending in a "continue reading" link to the original (common practice). It's written once, in `copies.md`'s `## Opening excerpt`, and shared by every platform that takes it.
3. **The order**, with the original first and the copies spaced out (see Timing).

Posts that share the link on a social platform — a summary with a link on LinkedIn, Substack Notes or Facebook — are `cw:social-media-posts`' and live in `social.md`.

## What the search engines ask for

The two engines disagree, so a copy is set up for both where the platform allows it.

- **Google:** a cross-domain canonical link "is not recommended for those who want to avoid duplication by syndication partners"; "the most effective solution is for partners to block indexing of your content" ([Google](https://developers.google.com/search/docs/crawling-indexing/canonicalization-troubleshooting)). Blocking means `noindex`, in a robots meta tag or an `X-Robots-Tag` header — and the page must stay crawlable, or Google never sees the rule ([Google](https://developers.google.com/search/docs/crawling-indexing/block-indexing)).
- **Bing:** "Ask partners to add a canonical tag pointing to your original URL when agreements allow", and "when possible, syndicate excerpts instead of full articles, with a clear link back to the source" ([Bing](https://blogs.bing.com/webmaster/December-2025/Does-Duplicate-Content-Hurt-SEO-and-AI-Search-Visibility)). Bing says these steps "improve the likelihood that your original page is used in search results and AI answers."

So, per copy:

1. **The platform has a canonical URL field** → set it to the original. It's the one control the platform gives you, and Bing reads it.
2. **A partner can block indexing** → ask for `noindex` on their copy; the copy then stays out of search for every engine that honours it.
3. **A partner won't block indexing** → ask for a canonical link to the original.
4. **Neither is possible** → publish the opening excerpt with a clear link to the full piece, or a full copy with a prominent link back, and accept that the copy may outrank the original.

## What each platform sets

| Platform              | Canonical control   | How                                                                                                                                                                                                                                                                          |
| --------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **dev.to (Forem)**    | yes                 | `canonical_url` in the post's front matter, unique among published posts; an RSS import sets it when "Mark the RSS source as canonical URL by default" is on ([dev.to editor guide](https://dev.to/p/editor_guide), [RSS guide](https://dev.to/p/publishing_from_rss_guide)) |
| **Hashnode**          | yes                 | add the original URL in the editor's republishing option before publishing (the current label isn't confirmed); the RSS importer sets it ([Hashnode](https://townhall.hashnode.com/increase-your-custom-blog-traffic-by-republishing-on-hashnode))                           |
| **Medium**            | yes                 | "Import a story" adds the canonical link and backdates the post; a story pasted in by hand needs Advanced Settings → "This story was originally published elsewhere"; web only ([Medium](https://help.medium.com/hc/en-us/articles/360033930293-Set-a-canonical-link))       |
| **Ghost**             | yes                 | post settings → Meta data → Canonical URL; the post then drops out of that site's sitemap ([Ghost](https://ghost.org/help/post-settings/))                                                                                                                                   |
| **Substack posts**    | no field found      | a link back at the top, or the opening excerpt; its per-post SEO fields are title, description, URL and preview image ([Substack](https://support.substack.com/hc/en-us/articles/360051140332-How-do-I-edit-my-post-s-URL))                                                  |
| **LinkedIn articles** | not confirmed       | a link back at the top, or the opening excerpt                                                                                                                                                                                                                               |
| **X articles**        | not confirmed       | a link back at the top, or the opening excerpt; articles need Premium or Premium+ ([X](https://help.x.com/en/using-x/articles))                                                                                                                                              |
| **A partner site**    | whatever they agree | `noindex` first (Google), a canonical link if they won't (Bing), the opening excerpt if neither                                                                                                                                                                              |

Each platform's import, title and description fields, tag limit, cover size and AI disclosure are in [references/platforms.md](references/platforms.md). Verify before relying on them — platforms move their settings.

Check a copy after it's live: open its page source and confirm the canonical link, or the `noindex`, points where it should. Platforms change their settings; recheck the field before each cross-post rather than trusting last time.

## Timing

- **Publish the original first, and wait until it's indexed** before any copy goes out — a copy that's crawled first can be taken for the original. Check the original's URL in Google Search Console's URL Inspection, or search for its exact title. A few days to two weeks after the original is the usual gap (common practice).
- **Space the copies**, rather than posting everywhere the same hour, so each platform's readers get the piece when it suits them and the original has a head start.

## Adapting the copy

- **An "originally published" line at the top**, linking the original by its title or the publication's name: "Originally published on [the publication's site](…)". The line serves readers on every platform, canonical field or not.
- **The title** is `blog.md`'s `title`, the same unless the platform's readers need a different first word; the original's title is the one search engines associate with the piece. A subtitle, description or SEO description field takes `blog.md`'s `description`, never the opening excerpt.
- **Tags** to each platform's limit — dev.to takes up to four ([dev.to editor guide](https://dev.to/p/editor_guide)), Medium up to five topics ([Medium](https://help.medium.com/hc/en-us/articles/214741038-Tags)) — chosen from the words that platform's readers browse by.
- **The cover image** to each platform's size — dev.to's front matter suggests 1000 × 420 ([dev.to editor guide](https://dev.to/p/editor_guide)); sizes and preview checks are `cw:cover-images`.
- **AI disclosure** where the platform asks — dev.to's front matter has an `ai_disclosure_level` field ([dev.to editor guide](https://dev.to/p/editor_guide)); Medium has no field and asks for a sentence within the first two paragraphs ([Medium](https://help.medium.com/hc/en-us/articles/22576852947223-Artificial-Intelligence-AI-content-policy)) — set to match the publication's AI-use policy and the original's disclosure.
- **A series** stays a series: link the other parts on the same platform where they're also cross-posted, otherwise on the original site.

## Links, images and embeds

- **Links become absolute** — a relative link that worked on the original site points nowhere on a copy.
- **Links to the publication's other pieces** go to the originals, never to other copies.
- **Images:** an import usually re-hosts them on the platform; a pasted copy may hotlink the originals. Open the copy and check every image loads, with its alt text intact (`cw:images-and-diagrams`).
- **Embeds** — a code sandbox, a video, a chart widget — often don't survive. Replace a dropped embed with a link and a still image, and check code blocks keep their language label.
- **Tracking:** tag the link back with campaign parameters if the publication measures referrals, the same way each time.

## Rights

- **The writer's own piece:** cross-posting is the writer's call. A platform's terms set what licence it takes; read them once per platform.
- **A piece written for someone else** — a guest post, a commissioned article, a client's newsletter — belongs to whatever the agreement says. Check before cross-posting it anywhere.
- **Syndicating to a partner:** agree in writing on a non-exclusive licence, attribution with a link, `noindex` or a canonical link, full copy or opening excerpt, and what happens when the original is corrected or retired.
- **Material inside the piece** — a photo licensed for one site, a long quote, a borrowed chart — may not be licensed for the copies. Check each before it travels (`cw:images-and-diagrams`).

## Keeping copies in step

- **A copy doesn't update itself.** When the original is corrected or substantially updated, update every full copy the same day with the same note, and the opening excerpt only if the opening changed (`cw:content-refresh`).
- **When the original is retired, merged or redirected,** update or remove the copies and point their links at the replacement.
- **Keep every copy in the topic's `copies.md`**: per platform, its kind, the canonical or `noindex`, tags, cover image, AI disclosure, published date, URL and the last date it was synced. Without it, a correction reaches the original and misses the copies. When a copy goes live, fill its URL and date, and move the Cross-posts row's status on.

## Before cross-posting

- [ ] The original is live and indexed.
- [ ] The canonical URL is set, or `noindex` agreed, or the opening excerpt and link chosen — and checked in the copy's source.
- [ ] The "originally published" line links the original.
- [ ] Links are absolute and point at originals; images load with alt text; embeds replaced where dropped.
- [ ] Tags, cover image and AI disclosure set for this platform.
- [ ] Rights checked for the piece and everything in it.
- [ ] The copy's settings are in the topic's `copies.md`, every field present, and the Cross-posts row's status matches.

## Boundaries

- **Getting the original found** → `cw:seo-aeo-geo`. **The cover image and share card** → `cw:cover-images`. **Correcting or retiring the original** → `cw:content-refresh`.
- **Posts that share the piece rather than copy it, summary posts included** → `cw:social-media-posts`. **The newsletter issue that announces it** → `cw:newsletter-standards`.
- **The site's own canonical and robots settings** are set by its code or CMS — the site's developers' work; this skill covers what the writer sets on each copy.
