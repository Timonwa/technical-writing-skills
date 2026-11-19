---
name: social-media-posts
description: >-
  Turning one published piece into a set of social posts — repurposing by angle so one piece yields distinct posts rather than the same post reworded, per-platform limits and how each platform counts characters, plain-text formatting, threading, accessible hashtags and alt text, and disclosure. Reads the publication's profile and writing guide for voice and audience. Returns drafts; never publishes. Use on "promote this post", "write a thread about", "social posts for this article".
---

# Social media posts

One published piece becomes a set of posts that sound like the person who wrote it sharing something, not a marketing team announcing it. **Drafts only: never post, never publish, never call an API.**

## Read the publication's folder first

The voice is the publication's, compressed — not a separate social voice. Find its folder — from the path the user's `CLAUDE.md` gives, otherwise the project's own `publications/` folder, otherwise ask — and read:

- **`profile.md`** — who the audience is, what the publication is for, the one action a piece should produce, and what must be disclosed.
- **`writing-guide.md`** — voice, stance, person, and whether emoji are used at all.

Social compresses that voice; it doesn't replace it. A publication that never uses exclamation marks doesn't start on X.

Where the publication has no folder, build one first with `cw:style-guide`.

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

| Platform  | Limit                              | Visible before cutoff | Threads | Idiom                                           |
| --------- | ---------------------------------- | --------------------- | ------- | ----------------------------------------------- |
| X         | 280 free · 25,000 Premium          | ~280                  | yes     | punchy, hook-first                              |
| Bluesky   | 300                                | full                  | yes     | conversational, community                       |
| Threads   | 500, plus a 10,000-char attachment | full                  | yes     | casual, personal                                |
| Mastodon  | 500 by default, set per server     | full                  | yes     | earnest, community-oriented                     |
| LinkedIn  | 3,000                              | ~140                  | no      | narrative; under 1,300 consistently does better |
| Instagram | 2,200                              | ~125                  | no      | visual-first; the image carries it              |
| TikTok    | 2,200                              | short                 | no      | hook in the first seconds; caption supports     |

**Characters aren't counted the same way everywhere.** Instagram, LinkedIn, Mastodon and TikTok count UTF-16 units, so one emoji costs two and a family emoji can cost eleven. Bluesky and Threads count what you see. On X a link always costs 23 characters however long it is, and an emoji costs two.

**The visible cutoff matters more than the ceiling.** Put the point before the fold, and count the full string — spaces, line breaks, emoji, hashtags — before returning any post.

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
- **Alt text on every image**, describing what the image is _for_ rather than its textures and lighting. Around 150 characters is plenty. X allows 1,000; Instagram hides the field under Advanced Settings.
- **Emoji sparingly, and at the end.** Each one is read aloud, so a list of emoji bullets becomes "sparkles, fire, check mark" before the reader reaches any content. Punctuate with them; don't structure with them.
- **Never put words only in an image.** Text baked into a graphic is invisible to search and to screen readers.
- **Avoid ASCII emoticons** — `;)` is read aloud as "semicolon parenthesis".

## Hashtags

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

- **The piece being promoted** → `article-standards`. This writes the posts, not the post.
- **Voice and audience** → the publication's `writing-guide.md` and `profile.md`.
- **A periodic issue covering several pieces** → `newsletter-standards`.
- **The image a shared link shows** → `cover-images`.
- **Whether any of it worked** → `content-performance`.
- **Tightening prose that already exists** → `cw:editing-standards`. **The machine-written sweep** → `/write:ai-check`.
