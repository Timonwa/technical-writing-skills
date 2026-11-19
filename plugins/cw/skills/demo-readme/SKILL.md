---
name: demo-readme
description: >-
  Manually invoked. Writes or refreshes the README for a code project that accompanies a tutorial — a blog post or a video. Infers what it can from the repo, asks the rest in one batch (whose repo it is, the medium and links, the goal, the branch model), then writes README.md plus any setup and final branch variants, and hands back ready-to-paste GitHub "About" metadata.
argument-hint: "[tutorial URL]"
---

# Tutorial README

Draft or refresh the README for a tutorial's companion code repo. A good result is consistent, promotes the tutorial, prompts a repo star early, links out to the author's content, and comes with ready-to-paste GitHub "About" metadata.

## Resolve the author first

A repo is either the **owner's own** (the person whose config this is) or written **for a third party** (a client, another author, a company) — establish which first, because it decides every name and link the README promotes.

- **Owner's own repo** — take the author name, publication URL and audience from that publication's `profile.md` (from the folder the user's `CLAUDE.md` names, otherwise the project's own `publications/` folder) rather than asking again; infer the GitHub handle from `git remote get-url origin`. Ask only for what neither source has, and prefer a single links-hub URL as the "connect with me" catch-all so individual social handles don't need per-repo maintenance. Where the tutorial belongs to a publication with no folder yet, build one with `cw:style-guide` — the same facts are needed every time.
- **Third-party repo** — get their name and the links to promote (their blog/site, repo owner, socials) and use those everywhere. Never mix the owner's links into a third party's repo.

## Workflow

### 1. Infer from the repo first — never ask what you can detect

- **`package.json`** → project name, description, `scripts`, key dependencies (for Tech Stack).
- **`git remote get-url origin`** → repo URL and owner/name (clone command + links).
- **`git branch -a`** → the branch model (see step 3) and the current branch.
- **`.env.example`** / `.env.sample` → the environment variables the reader must set. Table them when there are only a few; past ~10, list the required ones and point at `.env.example` for the rest rather than mirroring the file. If the project uses env vars (API keys, any `process.env` / `import.meta.env` usage) but has no `.env.example`, tell the user to create one — it's required, not optional — and don't finalize the Getting Started section until it exists.
- **`LICENSE` / `LICENSE.md`** → the license. Default to **MIT** if none is present — it's the norm for these repos.
- **Existing `README.md`** → refresh and preserve good content rather than clobbering it; keep still-valid project-specific sections (e.g. a Scripts/maintenance section) — but the house structure below wins: reorder and correct sections that deviate from it rather than matching the old README's shape.
- Framework configs (`next.config`, `vite.config`, etc.) → run commands and prerequisites.

### 2. Ask the gaps — use judgment, ask the minimum

Infer everything you can from step 1, then ask only what's genuinely missing or ambiguous. At minimum, resolve:

- **Ownership** — owner's own repo or a third party's (see above). This decides all attribution and outbound links.
- **Tutorial medium and links** — blog post, video, or both, and the URL(s). Required; the README must link to it prominently.
- **The goal** — what the reader learns or what the project demonstrates, in a sentence. Feeds the intro and the GitHub description.
- **Series** — standalone or one part of a series? If a series, get the series name, how parts map to branches, and a link to the series index or other parts.
- **Branch model** — single branch, setup + completed, or a series (a branch per part). Infer from the branches (a `setup` branch implies setup + completed; several part-named branches imply a series); only ask if unclear.
- **Live demo** — a deployed URL to link and use as the GitHub "Website"?
- **Preview media** — a demo screenshot, GIF, or video to feature near the top? Optional — only include it if the user provides one.
- **Required services/accounts** — anything the reader must set up (API keys, a database, a cloud project). Cross-check against `.env.example`.
- Anything unusual about running or deploying it.

### 3. Determine the branch model and tailor a README per branch

Figure out how the repo's branches map to the tutorial, then write a README for each. Branch READMEs are usually **mostly identical** — only the branch-specific parts change:

- the **callout** telling the reader which branch they're on and where to go next, and
- the **scope**, since branches hold different amounts of code (a `setup` branch might be just markup and styles with no logic yet). This is what shifts a section between **What You'll Build** (setup) and **Features** (completed), and adjusts the intro and prerequisites to match.

Common branch models:

- **Single branch** — a standalone tutorial: one `README.md`, no branch callout.
- **setup + completed** — a starter branch to follow along with, plus the finished code (usually on `main`). Write both; they share most content.
- **Series (a branch per part)** — each branch's README states which part it is, describes that part's scope, and links to the series (the other parts or a series index).
- Any other branch (e.g. a legacy/original branch) gets a short README explaining what it is and linking to the current tutorial.

Mechanics: write every branch's README as its own file in the current working tree — never switch branches. Name the current branch's file `README.md` (so it's correct for the branch you're on), and give each other branch its own file named `README.<branch>.md` (e.g. `README.setup.md`, `README.main.md`). Then tell the user which file belongs on which branch so they can move each into place, and note that the extra `README.<branch>.md` files are staging copies to relocate and delete — not meant to be committed on the current branch. Do not print the other branches' READMEs into the chat.

### 4. Write the README(s) and the GitHub "About" file

Write the current branch's README to `README.md`. For a multi-branch repo, also write each other branch's README to its own `README.<branch>.md` file (see step 3) — separate files, not chat output. Then write the GitHub "About" metadata to a `github-about.md` file (see that section). List every file written and tell the user which README goes on which branch. Do not commit unless asked.

## README structure

These are defaults. Where the publication's writing guide sets title case, emoji, callouts or section names for its demo repos, follow the guide.

Generate sections in this order. Items in _italics_ are conditional.

1. **`# <Title>`** — the tutorial/project title in Title Case.
2. **One-line description** — what it is and what the reader learns.
3. _**Preview media**_ — optional: a screenshot, GIF, or demo video of the final result, in this fixed position right after the description. Include it only when the user provides one; never invent an image path. (Embedding syntax below.)
4. **⭐ Star + links callout** — a blockquote in the first screenful that prompts a repo star, links to the post/video, — for multi-branch repos — says which branch this is and where to go next, and — for a series — notes which part this is and links to the series.
5. **Table of Contents**
6. **Features** (single/completed branch) or **What You'll Build** (setup branch, framed as what the reader adds by following along).
7. **Tech Stack** — from the dependencies.
8. **Prerequisites** — including any required accounts/services.
9. **Getting Started** — clone → install → **`.env` setup (required whenever the project uses env vars — if there's no `.env.example`, tell the user to create one)** → run. _Add a live-demo link if there is one._
10. _**Scripts / Maintenance**_ — only if the repo has non-standard scripts (e.g. a cleanup job); explain any that delete or mutate data so self-hosters aren't surprised.
11. _**Branch Guide**_ — multi-branch repos only: a short table of what each branch is for.
12. **Author** — attribution and links (the resolved owner or third party).
13. **License** — required in every README (never omit it). Default to **MIT** unless the repo specifies otherwise; if there's no `LICENSE` file, use MIT and offer to add one.
14. **Additional Resources** — the post/video, the author's blog, the other parts of the series (if any), and related links.

Embedding preview media (item 3):

- Image or GIF: `![<alt text>](<image-url-or-path>)`
- Video: GitHub renders an uploaded `.mp4` as an inline player, so use the uploaded asset URL when there is one; otherwise link a thumbnail image to the video — `[![<alt text>](<thumbnail-url>)](<video-url>)`.

### Star + links callout templates

Fill with the resolved author's links (owner or third party).

Single branch:

```markdown
> **⭐ Found this helpful? Give the repo a star — it helps others find it.**
>
> 📺/📝 Full walkthrough: **[<TUTORIAL TITLE>](POST_OR_VIDEO_URL)**
```

setup branch:

```markdown
> **📌 You're on the `setup` branch — the starter code**
>
> This is the code you follow along with in the tutorial, with <core feature> not wired up yet. Build it yourself step by step by following the guide:
>
> **👉 [<TUTORIAL TITLE>](POST_OR_VIDEO_URL)**
>
> Prefer the finished result? The completed code lives on the [`main` branch](REPO_URL).
>
> ⭐ If this helped, please star the repo.
```

Completed branch:

```markdown
> **✅ This is the completed app**
>
> The finished code for the tutorial, fully wired up. To build it yourself from scratch, start on the [`setup` branch](<REPO_URL>/tree/setup) and follow along:
>
> **👉 [<TUTORIAL TITLE>](POST_OR_VIDEO_URL)**
>
> ⭐ If this helped, please star the repo.
```

### Author section template

Fill from the resolved profile (the owner's details, or the third party's); drop any line whose link doesn't exist.

```markdown
## Author

Built by **<AUTHOR NAME>**.

- 📝 More tutorials on my blog: **[<BLOG_HOST>](BLOG_URL)**
- 🔗 All my links & socials: **[<LINKS_HUB_HOST>](LINKS_HUB_URL)**
- 💻 GitHub: **[@<GITHUB_HANDLE>](GITHUB_PROFILE_URL)**
```

### Additional Resources template

```markdown
## Additional Resources

- 📝/📺 [<TUTORIAL TITLE>](POST_OR_VIDEO_URL) — the full tutorial
- 📚 [More tutorials](AUTHOR_BLOG_URL)
- 🔗 [Connect with the author](AUTHOR_LINKS_URL)
```

## GitHub "About" output

After writing the README, write this metadata to a `github-about.md` file in the working tree so it doesn't get lost in the chat — the user pastes it into the repo's About panel, then deletes the file. It's a staging file, not part of the repo; don't put it in the README.

This metadata powers GitHub search and topic pages, so optimize it for **discoverability** — keyword-rich, commonly-searched terms over clever ones.

- **Description** — one concise sentence, at most 350 characters, that sells what the project is. Front-load the searchable keywords (core tech + what it is), since the description is indexed by search. No trailing period needed.
- **Website** — the live demo URL if there is one, otherwise the tutorial post/video URL.
- **Topics** — a **space-separated** list of lowercase, hyphenated tags (up to 20). GitHub's Topics field separates entries with spaces, and each topic is a single hyphenated token. Prefer GitHub's established/canonical topic names (the ones it auto-suggests) so the repo surfaces on those topic pages, and cover the stack, the domain, and discovery tags like `tutorial` or `example` where they fit. Don't invent obscure tags no one searches. Example: `react firebase firestore chat-app realtime tutorial`.

Write the file with this content:

```markdown
# GitHub About (paste into the repo's About panel, then delete this file)

**Description:** <one-line description>

**Website:** <demo or tutorial URL>

**Topics:** tag-one tag-two tag-three
```

## Style rules

- **Never hard-wrap prose.** Write each paragraph, list item, and blockquote line as one continuous line and let it soft-wrap. Only break where Markdown needs it (new list item, new paragraph, code block).
- **Promote the content early and often.** The star prompt and the post/video link belong in the first screenful, and the author's blog gets a "more tutorials" link in the Author and Additional Resources sections — every README refers readers back to the author's content.
- **Attribute to the right person** — the resolved owner by default, or the third party when the repo is written for someone else. Never mix the two.
- **Markdown must lint clean** — one H1, no skipped heading levels (don't jump `#` → `###`), and TOC anchors must match their headings (`## Scripts & Data Cleanup` → `#scripts--data-cleanup`).
- Keep prose tight and skimmable; prefer bullets and short sentences.
- Use real values inferred from the repo — never leave `<PLACEHOLDER>` tokens in the written file.
- Don't invent features, prerequisites, or env vars that aren't in the repo.
- The License section is mandatory in every README. Default to MIT when nothing else is specified, and link it to the `LICENSE` file.

## Boundaries

- **READMEs for non-tutorial projects** — libraries, apps, monorepos, CLIs → `tw:readmes`. This skill is only for a tutorial's companion repo.
- **Writing the tutorial itself** — the post or the video script → `article-standards`.
- **The author's name, links and the publication being promoted** → that publication's `profile.md`, where one exists. Don't re-ask for facts already recorded there, and never put a third party's details into your own publication's profile.
- **The general writing discipline** — audience, structure, plain language → `write:writing-standards`. **Tightening the prose after drafting** → `cw:editing-standards`.
- **Code samples inside the README** → `write:code-samples`.
