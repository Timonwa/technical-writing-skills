---
name: social-media-posts
description: >-
  Turning one published piece into a set of social posts — repurposing by angle so one piece yields distinct posts rather than the same post reworded, per-platform limits, working lengths and image sizes, how each platform counts characters, plain-text formatting, threading, accessible hashtags and alt text, and disclosure. Reads the publication's profile and writing guide for voice and audience. Returns drafts; never publishes. Use on "promote this post", "write a thread about", "social posts for this article".
---

# Social media posts

One published piece becomes a set of posts that sound like the person who wrote it sharing something, not a marketing team announcing it. **Drafts only: never post, never publish, never call an API.**

## Voice and audience come from the writing's own guide

Before writing, find the publication's `profile.md` and `writing-guide.md` and read them:

- **In a codebase:** the folder the project's `AGENTS.md` names, or, for a guide kept outside the repo, the folder the user's personal agent instructions name (such as `~/.claude/CLAUDE.md`); otherwise the project's `publications/` folder.
- **In a chat app:** the project's files (a Claude Project's knowledge, or the equivalent elsewhere), or files attached to the conversation.
- **Otherwise:** ask for them.

The audience, the one action a piece should produce, what must be disclosed, the voice, stance, person and whether emoji are used at all come from that guide, never from this skill.

- Where the guide settles something this skill also covers, the guide wins.
- Where there's no guide, ask who the reader is and what the piece is for, and offer to build one with `cw:style-guide`.
- Where a field reads `unset`, ask and record the answer in the guide.

When a guide changes: in a codebase, save the file where it was found; in a chat app, give the user the updated file to replace in the project. Never write inside the installed plugin.

The voice is the publication's, compressed, not a separate social voice. A publication that never uses exclamation marks doesn't start on X.

## Work only from the piece

- **Never invent a detail, number, or quote.** A claim that can't be traced to a line in the piece gets cut.
- **Ask for the live URL** if the posts need a link and you weren't given one. Never guess it from a filename.
- **Strip citation markers** (`[1]`, `[2.3]`) that come along when reading a rendered page.
- **Don't pin a post to a detail that may change.** "Four steps" breaks when the piece is edited to five; the general claim survives.

## Repurpose by angle

The unit is the **angle**, not the platform. Each post has one focus, and every angle is written fresh for each platform in play — three angles across three platforms is nine posts, each in its platform's idiom.

| Angle            | What it does                                                                             |
| ---------------- | ---------------------------------------------------------------------------------------- |
| **Announcement** | The piece exists, and here's the problem it solves. Leads with the pain, not the byline. |
| **Key point**    | One idea standing on its own — valuable even if nobody clicks.                           |
| **Lesson**       | What you learned making it. The honest, specific takeaway.                               |

Others worth pulling when the piece carries the material: a **quote** worth arguing with, a **number** that reframes something, a **question** the piece answers, a **contrarian take**, a **gotcha** that cost you time, a **comparison**, a **use case** the reader hadn't considered.

- **One angle per post, and no angle twice.** The announcement is the only post that leads with the piece's existence.
- **The same angle reads differently per platform.** Three bullets on X, a short narrative on LinkedIn, one sentence in a note. Rewritten, never pasted.
- **Spacing the set out is what makes it a set.** The same post twice is spam; the same idea from a new angle is a new post.
- **Stop at the material.** A piece with one idea produces two posts, not three padded ones. Say so rather than manufacturing a third.
- **Label each post with its angle** in the output, so what's used and what's left is obvious.

## Platform limits

Verify before relying on these — something in this table changes every few months.

| Platform  | Limit                              | Visible before cutoff        | Working length (practice)                      | Threads | Idiom                                       |
| --------- | ---------------------------------- | ---------------------------- | ---------------------------------------------- | ------- | ------------------------------------------- |
| X         | 280 free · 25,000 Premium          | ~280                         | ~70–100 characters for a standalone post       | yes     | punchy, hook-first                          |
| Bluesky   | 300                                | full                         | well under the limit                           | yes     | conversational, community                   |
| Threads   | 500, plus a 10,000-char attachment | full                         | a few sentences                                | yes     | casual, personal                            |
| Mastodon  | 500 by default, set per server     | full                         | a few sentences                                | yes     | earnest, community-oriented                 |
| LinkedIn  | 3,000                              | ~210 desktop · ~140 mobile   | hook in the first ~140; ~1,000–2,000 total     | no      | narrative                                   |
| Facebook  | 63,206                             | ~3 lines before "See more"   | short — under ~80 characters for a link post   | no      | conversational, community                   |
| Instagram | 2,200                              | ~125                         | the point before the cutoff                    | no      | visual-first; the image carries it          |
| Pinterest | title 100 · description 500        | ~40 of the title in the feed | title front-loaded; a keyword-rich description | no      | search-first; the image is the post         |
| TikTok    | 4,000 in the app · 2,200 via API   | ~100                         | the hook in the first line                     | no      | hook in the first seconds; caption supports |

The working lengths are common practice, not platform rules: they're what keeps a post readable before the fold.

**Characters aren't counted the same way everywhere.** Instagram, LinkedIn, Mastodon and TikTok count UTF-16 units, so one emoji costs two and a family emoji can cost eleven. Bluesky and Threads count what you see. On X a link always costs 23 characters however long it is, and an emoji costs two.

**The visible cutoff matters more than the ceiling.** Put the point before the fold, and count the full string — spaces, line breaks, emoji, hashtags — before returning any post.

### Native images and video

Sizes for an image or video posted on the platform itself (the image a shared link shows is `cw:cover-images`). Verify before relying on these:

| Platform                         | Size                                                             |
| -------------------------------- | ---------------------------------------------------------------- |
| Instagram feed                   | 1080 × 1350 (4:5) or 1080 × 1440 (3:4); 1080 × 1080 square       |
| Instagram Stories, Reels; TikTok | 1080 × 1920 (9:16), key content clear of the top and bottom bars |
| X                                | 1600 × 900 (16:9)                                                |
| LinkedIn                         | 1200 × 627, or 1080 × 1080 square                                |
| Facebook                         | 1080 × 1350 (4:5) or 1080 × 1080                                 |
| Pinterest                        | 1000 × 1500 (2:3)                                                |

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
- **Alt text on every image**, describing what the image is _for_ rather than its textures and lighting. Around 150 characters is plenty. X allows 1,000 per image; on Instagram the field sits in the post's advanced settings.
- **Emoji sparingly, and at the end.** Each one is read aloud, so a list of emoji bullets becomes "sparkles, fire, check mark" before the reader reaches any content. Punctuate with them; don't structure with them.
- **Never put words only in an image.** Text baked into a graphic is invisible to search and to screen readers.
- **Avoid ASCII emoticons** — `;)` is read aloud as "semicolon parenthesis".

## Hashtags

- **Respect the caps.** Instagram allows up to 5 hashtags per post or Reel ([Social Media Today](https://www.socialmediatoday.com/news/instagram-implements-new-limits-on-hashtag-use/808309/)); Threads allows one topic tag per post ([Threads Help](https://help.instagram.com/1356090605000312)).
- **Match the platform's culture.** Instagram and TikTok use them for discovery; LinkedIn treats them as weak categorization; X, Bluesky, Reddit, Slack and Discord largely don't want them. Mastodon is the exception among text platforms — it has no full-text search by default, so a tag is often how a post gets found at all.
- **Few and specific.** One or two carries both the accessibility and the relevance case; a wall of generic tags reads as spam and can suppress reach.
- **A mismatched tag costs more than no tag.** A post about rate limiting tagged with a motivational hashtag reads as a semantic conflict.

## Threads

Thread-capable platforms only — X, Bluesky, Threads, Mastodon. LinkedIn, Instagram and TikTok captions are single posts.

- **First item hooks, middle items explain, last item carries the ask.** The link goes where the platform expects it, not mid-thread as filler.
- **Every item is a separate post** and fits the per-post limit on its own. Never collapse a thread into one long string with "1/" markers standing in for real posts.

## The ask

- A call to action is a continuation of the conversation, not a bolted-on request. The profile names the one action; use the guide's wording where it fixes wording.
- One ask per post. A post asking for a read, a follow and a reply gets none of them.
- Weak asks are detached ("Check it out"), generic ("Read our latest blog post"), or not asks at all ("Source code on GitHub too").

## Disclosure

If the piece or the post is sponsored, affiliate-linked, gifted or otherwise compensated, **say so in the post itself** — plainly, in the post's own words, before the link, not buried among hashtags or hidden behind "more". A platform's built-in disclosure toggle supplements that; it doesn't replace it. The profile records what the publication discloses; this is where that obligation actually reaches an audience.

## Output

Write the set to a file, then summarise it in chat. Never post, publish, or schedule.

- **Where:** `_social/<slug>.md`, with the slug from the piece's title. Ask before overwriting — a previous set may already be scheduled.
- **Layout:** grouped by platform, one section per post, each heading carrying its angle and character count (`### Key point — 247 chars`).
- **Each post body sits in its own fenced block**, so it copies out cleanly. Thread items each get a block, numbered in the heading only.
- **Open with a one-line index** — title, URL, platforms, angles used — so the file reads on its own weeks later.

## Boundaries

- **The piece being promoted** → `cw:article-standards`. This writes the posts, not the post.
- **Voice and audience** → the publication's `writing-guide.md` and `profile.md`.
- **A periodic issue covering several pieces** → `cw:newsletter-standards`.
- **The image a shared link shows** → `cw:cover-images`.
- **Whether any of it worked** → `/cw:content-performance`. **Republishing the whole piece on another platform** → `cw:cross-posting`.
- **Tightening prose that already exists** → `cw:editing-standards`. **The machine-written sweep** → `/write:ai-check`.
