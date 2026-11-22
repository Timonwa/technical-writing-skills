# A topic's folder

One folder per topic, named `<yyyy-mm>-<slug>` for the month of its first publish date, or the month it's briefed when there's no date yet (for example `2026-12-sourdough-starter`), one level under the publication's `topics/`. Copy this folder to start one, keep only the files for the formats its brief lists, and never edit the template itself.

A topic is the folder; a piece is one thing published from it — the blog post, the newsletter issue, the social posts. One topic can become any of them. A newsletter issue that isn't about one topic, or a stand-alone social post, is a topic of its own whose brief lists only that format.

| File or folder  | What goes in it                                                                     |
| --------------- | ----------------------------------------------------------------------------------- |
| `brief.md`      | status, who holds it, what the topic becomes, and the brief                         |
| `blog.md`       | the blog post: front matter, then the body                                          |
| `newsletter.md` | the newsletter issue: front matter, then the body                                   |
| `social.md`     | every social post, one section per platform                                         |
| `copies.md`     | cross-posts to other blogging platforms: each one's settings and the excerpt        |
| `sources.md`    | the source log: each source once, then each claim with where it sits and its status |
| `interviews/`   | one notes file per interview, `<yyyy-mm-dd>-<name>.md`, with consent recorded       |
| `images/`       | the cover, the share card and the diagrams                                          |
| `reports/`      | `review.md`, `ai-check.md`, `seo.md`                                                |

File names are fixed: adding a format later adds its file, and nothing is renamed. A field that isn't known yet stays in the file, blank — never removed. A skill's answers go into the brief field they belong to, or under its "Notes for whoever picks it up next" when none fits.

Only a skill that edits the format files claims the topic in `brief.md`. A read-only check — a review, an AI check, a style check, an SEO check, a performance review — runs even while someone holds the topic, never sets Held by, and writes only its own file in `reports/`.

In a chat app, a project's files can't hold folders, so each file takes the topic folder's name as a prefix: `2026-12-sourdough-starter--brief.md`, `2026-12-sourdough-starter--blog.md`.
