---
name: social-media-posts
description: >-
  Writing social posts for any account — a person, a publication or a company — from a published piece, an announcement or a topic's brief, into the topic's social.md: the account's voice and each platform's tone, repurposing by angle, single posts, threads and summaries with a link, per-platform limits and how each counts characters, plain text, accessible hashtags and alt text, and disclosure. Writes drafts; never publishes. Use on "promote this post", "write a thread about", "social posts for this article".
---

# Social media posts

Write social posts in the voice of the account that posts them — a person, a publication or a company — from a published piece, an announcement or the topic's brief. Each post is written for its platform, and a set of them covers different angles rather than repeating one. **Drafts only: never post, never publish, never call an API.**

## Voice and audience come from the writing's own guide

Before writing, find the publication's `profile.md` and `writing-guide.md` and read them:

- **In a codebase:** the folder the project's `AGENTS.md` names, or, for a guide kept outside the repo, the folder the user's personal agent instructions name (such as `~/.claude/CLAUDE.md`); otherwise the project's `publications/` folder.
- **In a chat app:** the project's files (a Claude Project's knowledge, or the equivalent elsewhere), or files attached to the conversation.
- **Otherwise:** ask for them.

The audience, the one action, what must be disclosed, the voice, and the guide's **Social** section — the accounts and whose each is, "I" or "we", the tone on each platform, emoji, hashtags and mentions — come from that guide, never from this skill.

- Where the guide settles something this skill also covers, the guide wins.
- Where there's no guide, ask who the reader is and what the piece is for, and offer to build one with `cw:style-guide`.
- Where a field is blank, ask and record the answer in the guide.

When a guide changes: in a codebase, save the file where it was found; in a chat app, give the user the updated file to replace in the project. Never write inside the installed plugin.

**The voice stays the same; the tone moves with the platform.** The account sounds like itself everywhere, and the guide's Social section says how its tone shifts on each platform — relaxed on one, more formal on another. Where the section is missing, ask the writer for the tone on each platform in play and record it there. A personal account writes as "I", a publication's or company's as "we", unless the guide says otherwise.

## Ask first

Read the answers from the topic's `brief.md` (its **Social posts** row above all), then `profile.md`'s Defaults, then the request; ask only what's missing. Ask with the app's question tool where it has one, so the choices can be picked; otherwise as a numbered list answered by number. Offer choices where the answers are known and a short typed answer otherwise; where the profile has a default, show it and ask whether to use it. Record each answer in the `brief.md` field it belongs to — the **What this topic becomes** table or a row of **The brief** — and any answer with no field under **Notes for whoever picks it up next**, so the next skill doesn't ask again.

1. **Which topic folder are the posts for?** The folder name under `topics/`, or "new" — a stand-alone post or thread is its own topic, briefed first with `cw:content-planning`.
2. **Which account posts them?** a person's own · the publication's · a company's · a colleague sharing the company's piece. Default: the guide's Social section.
3. **What are the posts from?** a published piece · an announcement (a launch, an event, news) · the brief alone. Default: the piece, where the brief lists one.
4. **Which platforms?** Pick any of the profile's. Default: the Social posts row's Where it goes, then the profile's Social platforms.
5. **What kind of post on each?** single post · thread · summary with link, per platform.
6. **Which angles?** announcement · key point · lesson · quote · number · question · gotcha — pick any. Default: announcement, key point and lesson, where the piece carries them.
7. **When does each go out?** A date per platform. Default: the Social posts row's publish date, after the piece is live.
8. **What link do the posts share?** The published URL, or "not live yet". Default: the Blog post row's Link, or `published_url` in `blog.md`.
9. **What must the posts disclose?** sponsorship · affiliate links · gifted item · AI assistance · none — pick any. Default: the profile's Constraints.

## Work in the topic folder

Each topic has its own folder in the publication's `topics/` (`topics/2026-12-sourdough-starter/`), made when it's briefed (`cw:content-planning`). The posts go in its `social.md`; in a chat app, `<topic folder>--social.md`.

- **Claim it before writing.** Read `brief.md`: if **Held by** names someone else and the status isn't `paused`, leave it and say so. Otherwise set **Held by** and the date, the Social posts row's status to `drafting`, and the topic's line in the publication's `calendar.md` to match — that line only. When stopping, set the status (`in review`, `scheduled` once every post has a date, or `paused`) and clear **Held by**.
- **Write only `social.md`.** Where the brief has no Social posts row, say so and ask whether to add one.
- **Read before writing over.** A `social.md` that already exists may hold scheduled or live posts: add new sections, and never edit a post that's live.

## Work only from the source material

The source is the published piece, the announcement's facts as the writer gives them, or the brief.

- **Never invent a detail, number, or quote.** A claim that can't be traced to the source gets cut.
- **Take the link from the brief or `blog.md`**, and ask if neither has it. Never guess it from a filename. A piece that isn't live yet leaves the link field blank and `[link]` in the post, counted at that platform's link cost.
- **Strip citation markers** (`[1]`, `[2.3]`) that come along when reading a rendered page.
- **Don't pin a post to a detail that may change.** "Four steps" breaks when the piece is edited to five; the general claim survives.

## Repurpose by angle

The unit is the **angle**, not the platform. Each post has one focus, and every angle is written fresh for each platform in play — three angles across three platforms is nine posts, each in its platform's idiom.

| Angle            | What it does                                                                                                                        |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **Announcement** | What's new — a piece, a launch, an event — and the problem it solves. Leads with the reader's problem, not the byline or the brand. |
| **Key point**    | One idea standing on its own — valuable even if nobody clicks.                                                                      |
| **Lesson**       | What the author or the team learned making it. The honest, specific takeaway.                                                       |

Others worth pulling when the piece carries the material: a **quote** worth arguing with, a **number** that reframes something, a **question** the piece answers, a **contrarian take**, a **gotcha** that cost someone time, a **comparison**, a **use case** the reader hadn't considered.

- **One angle per post, and no angle twice.** The announcement is the only post that leads with the news itself.
- **The same angle reads differently per platform.** Three bullets on X, a short narrative on LinkedIn, one sentence in a note. Rewritten, never pasted.
- **Spacing the set out is what makes it a set.** The same post twice is spam; the same idea from a new angle is a new post.
- **Stop at the material.** A piece with one idea produces two posts, not three padded ones. Say so rather than manufacturing a third.
- **Label each post with its angle** in the output, so what's used and what's left is obvious.

### Kinds of post

- **Single post** — one angle, standing alone.
- **Thread** — one angle unfolded over several posts, on platforms with a thread composer ([Threads](#threads)).
- **Summary with link** — the piece's main points in the platform's idiom, then the link: the post that shares a blog post on LinkedIn, Substack Notes, Facebook and the like. It lives in `social.md`; a copy of the post on another blogging platform is `cw:cross-posting`.

## Platform limits

Verify before relying on these — something changes every few months. Each platform's limit, how it counts, what shows before "more", thread support, hashtag caps, working lengths and native image sizes are in [references/platforms.md](references/platforms.md), every number with its source and anything unconfirmed marked as such.

**Count the platform's way** — the full string, spaces, line breaks, emoji, hashtags and links — before returning any post:

- **X** weights characters against 280: Latin text, punctuation and line breaks 1, each emoji and each CJK character 2, every URL 23 ([X](https://docs.x.com/fundamentals/counting-characters)).
- **Mastodon** counts grapheme clusters against 500 by default, so an emoji is 1; every URL is 23, a mention counts only its username, and content-warning text counts too ([Mastodon](https://github.com/mastodon/mastodon/blob/main/app/validators/status_length_validator.rb)).
- **Bluesky** stops at 300 graphemes or 3,000 UTF-8 bytes, whichever comes first; the official app counts a shortened form of each link, while a post sent through the API pays for the full URL ([post lexicon](https://github.com/bluesky-social/bsky/blob/main/lexicons/app/bsky/feed/post.json), [`toShortUrl`](https://github.com/bluesky-social/social-app/blob/main/src/lib/strings/url-helpers.ts)).
- **Threads**, through its API, counts an emoji as its UTF-8 bytes, so most cost 4 of the 500 ([Threads](https://developers.facebook.com/docs/threads/posts)).
- **TikTok**, through its API, counts UTF-16 units, so an emoji outside the Basic Multilingual Plane costs 2 ([TikTok](https://developers.tiktok.com/doc/content-posting-api-reference-direct-post)).
- **LinkedIn, Facebook, Instagram, Pinterest, YouTube posts, Substack Notes and WhatsApp Channels** don't document their count; leave headroom (common practice).

**The visible cut-off matters more than the ceiling.** Put the point before the fold. The working lengths are common practice, not platform rules: what keeps a post readable before the fold.

## Plain text only

These platforms don't render Markdown, and formatting characters appear literally:

- No bold, italics, headings, code fences or inline backticks.
- No Markdown links — paste the bare URL.
- Short paragraphs, one to three sentences, separated by a blank line.
- Structural labels like `Post 1/5` belong to your output's scaffolding, never inside the post.

## Accessibility

Social is where accessible writing is most often dropped, and the fixes are cheap.

- **CamelCase every multi-word hashtag** — `#TechWriting`, not `#techwriting`. A screen reader pronounces an all-lowercase tag as one unintelligible word. This is the highest-value habit here.
- **Hashtags at the end**, never mid-sentence. Inline tags break the sentence for a screen reader and the reading flow for everyone else.
- **Alt text on every image**, describing what the image is _for_ rather than its textures and lighting. Around 150 characters is plenty (common practice). On Instagram the field sits in the post's advanced settings.
- **Emoji sparingly, and at the end.** Each one is read aloud, so a list of emoji bullets becomes "sparkles, fire, check mark" before the reader reaches any content. Punctuate with them; don't structure with them.
- **Never put words only in an image.** Text baked into a graphic is invisible to search and to screen readers.
- **Avoid ASCII emoticons** — `;)` is read aloud as "semicolon parenthesis".

## Hashtags

- **Respect the caps.** Threads allows one topic tag per post ([Threads](https://developers.facebook.com/docs/threads/posts)). Instagram is reported to allow 5 per post or Reel (secondary: [Digital Trends](https://www.digitaltrends.com/social-media/instagram-now-limits-you-to-five-hashtags-per-post/)) while its API reference still says 30, so write to 5. The rest are in [references/platforms.md](references/platforms.md).
- **Match the platform's culture.** Instagram and TikTok use them for discovery; LinkedIn treats them as weak categorization; X, Bluesky, Reddit, Slack and Discord largely don't want them. Mastodon is the exception among text platforms — it has no full-text search by default, so a tag is often how a post gets found at all.
- **Few and specific.** One or two carries both the accessibility and the relevance case; a wall of generic tags reads as spam and can suppress reach.
- **A mismatched tag costs more than no tag.** A post about rate limiting tagged with a motivational hashtag reads as a semantic conflict.

## Threads

X, Bluesky and Threads have a thread composer; on Mastodon, an account's replies to its own post read as a thread (common practice). Elsewhere a post stands alone.

- **First item hooks, middle items explain, last item carries the ask.** The link goes where the platform expects it, not mid-thread as filler.
- **Every item is a separate post** and fits the per-post limit on its own. Never collapse a thread into one long string with "1/" markers standing in for real posts.

## The ask

- A call to action is a continuation of the conversation, not a bolted-on request. The profile names the one action; use the guide's wording where it fixes wording.
- One ask per post. A post asking for a read, a follow and a reply gets none of them.
- Weak asks are detached ("Check it out"), generic ("Read our latest blog post"), or not asks at all ("Source code on GitHub too").

## Disclosure

If the piece or the post is sponsored, affiliate-linked, gifted or otherwise compensated, **say so in the post itself** — plainly, in the post's own words, before the link, not buried among hashtags or hidden behind "more". A platform's built-in disclosure toggle supplements that; it doesn't replace it. The profile records what the publication discloses; this is where that obligation actually reaches an audience.

## Output

Write the set to the topic's `social.md`, then summarise it in chat. Never post, publish or schedule.

- **`social.md` follows the [template](../style-guide/references/publication-template/topics/_template/social.md).** A header with the topic and the posts' link (blank until the piece is live), then one `## <Platform>` section per platform. Every field stays present, left blank until it's known.
- **Each post gets the template's small table** — kind (single post · thread · summary with link), scheduled date, post URL (blank until it's live) and characters used / limit, counted the platform's way with its unit (`247 / 280 weighted`, `212 / 300 graphemes`) — then the post text. Where a platform gets more than one post, each is a `### <angle>` inside its platform's section.
- **Each post body sits in its own fenced block**, so it copies out cleanly. A thread is numbered posts, each in its own block and within the per-post limit.
- **When a post goes live**, its URL goes in its table and the Social posts row's status moves on.

## Boundaries

- **The piece being promoted** → `cw:article-standards`. This writes the posts, not the post.
- **Voice and audience** → the publication's `writing-guide.md` and `profile.md`.
- **A periodic issue covering several pieces** → `cw:newsletter-standards`.
- **The image a shared link shows** → `cw:cover-images`.
- **Whether any of it worked** → `/cw:content-performance`. **A copy of the piece on another blogging platform** → `cw:cross-posting`.
- **Tightening prose that already exists** → `cw:editing-standards`. **The machine-written sweep** → `/write:ai-check`.
