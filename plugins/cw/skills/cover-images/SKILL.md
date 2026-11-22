---
name: cover-images
description: >-
  A content piece's cover image and the cards its link shows when shared — what a cover is for, choosing or making one (a photo of the real thing, an illustration, a typographic card), words on the image, one file that survives every platform's crop and size limit, formats and weight, alt text, a template across a publication, and checking the preview before posting. Use on "cover image", "featured image", "share card", "og image", "thumbnail for my post", "the preview image is wrong".
---

# Cover images and share cards

A cover does two jobs. On the page it tells the reader they've arrived at the piece they clicked. In a feed, a chat or a search result it's the share card — usually the largest thing in the preview, and often the reason someone taps. A cover that only decorates does neither.

## Voice and audience come from the writing's own guide

Before applying this skill, find the publication's `profile.md`, `writing-guide.md` and `brand.md`, and the sample covers and logo files in its `examples/`, and read them:

- **In a codebase:** the folder the project's `AGENTS.md` names, or, for a guide kept outside the repo, the folder the user's personal agent instructions name (such as `~/.claude/CLAUDE.md`); otherwise the project's `publications/` folder.
- **In a chat app:** the project's files (a Claude Project's knowledge, or the equivalent elsewhere), or files attached to the conversation.
- **Otherwise:** ask for them.

Its cover template, colours, fonts, logo rules and image style come from `brand.md`, and its image policy from the writing guide, never from this skill.

- Where `brand.md` or the guide settles something this skill also covers, it wins; match the sample covers in `examples/`.
- Where there's no `brand.md`, use the defaults below and offer to record the choices in one with `cw:style-guide`.
- Where there's no guide at all, ask who the reader is and what the piece is for, and offer to build one with `cw:style-guide`.

When a guide changes: in a codebase, save the file where it was found; in a chat app, give the user the updated file to replace in the project. Never write inside the installed plugin.

## What to put on it

Pick the cover from what the piece delivers, in this order:

1. **A photo of the real thing** — the finished dish, the place, the person interviewed, the product in use, the result of the tutorial. Readers look at real people and real objects and skip generic stock ([NN/g](https://www.nngroup.com/articles/photos-as-web-content/)).
2. **An illustration or diagram** that shows the piece's idea at a glance — the before and after, the one shape the argument hangs on.
3. **A typographic card** — the title or a short version of it on the publication's colours — when the piece is an essay, an opinion or an announcement with nothing to photograph.

Never the site's logo alone, and never the same image on every piece: a card has to say which piece it is. X asks for "a unique image representing the content of the page", not a logo or author photo that spans pages ([X](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary-card-with-large-image)), and Google asks for images relevant to the article rather than logos ([Google](https://developers.google.com/search/docs/appearance/structured-data/article)).

Rights, credits and consent for a photo follow the same rules as any image in the piece → `cw:images-and-diagrams`. An AI-generated or composite cover is labelled the same way.

## Words on the image

- **Few words, large type.** A card is often seen at a few hundred pixels wide on a phone; a title that needs reading at full size is unreadable there. A short version of the title, or none — about six to eight words at most (common practice).
- **Contrast** of at least 4.5:1 between the words and what's behind them, the same bar as any text ([WCAG 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)). Over a photo, put the words on a solid band or a darkened area, not straight on a busy background.
- **Never the only place the title appears.** The card's title and description come from the page's text, and a screen reader, a search engine and a reader with images off get only those. The image adds to the title; it never replaces it.

## One file for every platform

Each platform crops and limits the image differently. One file covers them all if it follows the tightest rules:

| Platform                              | What it asks for                                                                                                                                                                                                                       |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Facebook and other Open Graph readers | at least 1200 × 630, as close to 1.91:1 as possible, under 8 MB ([Meta](https://developers.facebook.com/docs/sharing/webmasters/images/))                                                                                              |
| LinkedIn                              | at least 1200 × 627, 1.91:1, up to 5 MB; under 401 px wide shows as a small thumbnail ([LinkedIn](https://www.linkedin.com/help/linkedin/answer/a521928))                                                                              |
| X                                     | the large-image card is 2:1, 300 × 157 to 4096 × 4096, under 5 MB; no SVG ([X](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary-card-with-large-image))                                               |
| Bluesky                               | any image type, at most 1 MB ([Bluesky's link-card schema](https://github.com/bluesky-social/atproto/blob/main/packages/api/lexicons/app/bsky/embed/external.json))                                                                    |
| Mastodon                              | JPEG, PNG, GIF or WebP up to 8 MB, shown at about 640 × 360 ([Mastodon source](https://github.com/mastodon/mastodon/blob/main/app/models/preview_card.rb))                                                                             |
| Google Discover                       | at least 1200 px wide and more than 300,000 pixels, 16:9 preferred, never a logo; large images also need the site's `max-image-preview:large` setting ([Google](https://developers.google.com/search/docs/appearance/google-discover)) |

So the share image is:

- **1200 × 630 (1.91:1)**, or larger at the same ratio.
- **Under 1 MB**, the tightest limit (Bluesky). A photo as a well-compressed JPEG usually lands there; a flat typographic card as PNG.
- **JPEG or PNG** — WebP where the platform supports it, never SVG.
- **Cropped safely.** The same image is shown at 1.91:1, 2:1, 16:9, 3:2 and sometimes square. Keep the subject and any words in the centre, inside the square that survives a 1:1 crop (the middle 630 × 630 of a 1200 × 630 image), with nothing that matters at the edges.

That one file covers the social cards. For Google, where the publishing platform lets you add more crops of the cover, Article structured data recommends several images at 16:9, 4:3 and 1:1, each at least 50,000 pixels ([Google: Article structured data](https://developers.google.com/search/docs/appearance/structured-data/article)).

The cover on the page itself is sized by the platform's theme: upload the largest size it asks for and let it resize down. It's usually the largest thing on the page, so it decides how fast the page appears: compress it to roughly 200 KB or less, and use WebP or AVIF on the page where the platform allows (common practice). Never lazy-loading it and giving it high fetch priority are the site's developers' work ([web.dev: optimise LCP](https://web.dev/articles/optimize-lcp)). A newsletter's header image follows email's rules → `cw:images-and-diagrams`.

## Alt text

- **On the page**, a cover that shows something the reader needs — the dish, the place, the chart — gets alt text written from why it's there ([W3C](https://www.w3.org/WAI/tutorials/images/informative/)). A cover that only repeats the title or decorates gets empty alt text (`alt=""`) so a screen reader skips it ([W3C](https://www.w3.org/WAI/tutorials/images/decorative/)).
- **In a card**, the image alt text is set as `og:image:alt` — "a description of what is in the image (not a caption)" ([Open Graph](https://ogp.me/)) — and X reads up to 420 characters ([X](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary-card-with-large-image)). Where the platform has an alt field for the social image, fill it.

## A template across the publication

A reader should recognise the publication's cards in a feed before reading them. The template lives in `brand.md`'s cover template (→ `cw:style-guide`): the layout, where words and the logo sit, the typeface, the colours, the kinds of photo used, and what the card shows when there's no photo. Keep three or four covers that follow it in `examples/`. Then each cover is the template with one decision — the image or the words — not a new design.

## Who sets what

The writer chooses the image, its words and its alt text, and enters them in the publishing platform's social-image fields. The tags that carry them to other sites — `og:image`, `og:image:alt`, `twitter:card` — and the `max-image-preview:large` robots setting Google Discover needs are written by the site's code. Where the platform has no field for the share image, or the wrong image keeps appearing, that's the site's developers' work; name what's wrong rather than working around it.

## Check the preview before posting

Look at the card before anyone else does:

- **Facebook:** the [Sharing Debugger](https://developers.facebook.com/tools/debug/) shows the card and fetches the page again. A card is cached by image URL, so a replaced image needs a new file name, and posts already shared keep the old card ([Meta](https://developers.facebook.com/docs/sharing/webmasters/images/)).
- **LinkedIn:** [Post Inspector](https://www.linkedin.com/post-inspector/) shows the preview and fetches it again; posts already shared keep their old card.
- **X:** paste the link into a new post and look at the card without posting; the old validator no longer shows previews ([X developer forum](https://devcommunity.x.com/t/card-validator-preview-removal/175006)).
- **Bluesky and Mastodon:** draft a post with the link and look at the card before posting.

Change the image before the piece is first shared: every platform keeps the card it fetched first for a while.

## Where the files go

Save the cover, the share card and their source files in the piece's `images/` folder (`pieces/<yyyy-mm>-<slug>/images/`), with names that say which is which (`cover.jpg`, `share-card.png`). In a chat app, hand them back named `<piece folder name>--cover.jpg`. Before working on a piece, read its `brief.md`: if "Held by" names someone else and the status isn't `paused`, leave it and say so.

## Before publishing

- [ ] The cover shows what the piece delivers, and isn't the logo or a generic stock image.
- [ ] Any words are short, large, at 4.5:1 contrast, and the title is also in the page's text.
- [ ] The share image is 1200 × 630 or larger at 1.91:1, under 1 MB, JPEG or PNG, with everything that matters in the centre square.
- [ ] Rights and credit are in order, and an AI-generated or composite cover is labelled.
- [ ] Alt text is set on the page and for the card, or the page cover is marked decorative.
- [ ] It follows the cover template in `brand.md`, and matches the sample covers.
- [ ] The preview is checked on the platforms the piece will be shared on.
- [ ] The cover and share card are saved in the piece's `images/`.

## Boundaries

- **Every other image in the piece** — photos, charts, diagrams, screenshots, email images, rights and labelling → `cw:images-and-diagrams`.
- **The posts that share the piece** → `cw:social-media-posts`. **The newsletter issue** → `cw:newsletter-standards`.
- **Getting the piece found** → `cw:seo-aeo-geo`. **The publication's template and palette** → `cw:style-guide`.
