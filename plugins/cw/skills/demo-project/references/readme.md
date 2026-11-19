# The demo repo's README and GitHub About

The README a reader lands on from the tutorial, one per branch, and the About metadata for the repository page. The publication's writing guide overrides any default here: title case, emoji, callouts, section names.

## Contents

- [Infer before asking](#infer-before-asking)
- [Ask the gaps](#ask-the-gaps)
- [One README per branch](#one-readme-per-branch)
- [Sections, in order](#sections-in-order)
- [Callout templates](#callout-templates)
- [Author and Additional Resources](#author-and-additional-resources)
- [GitHub About](#github-about)
- [Style](#style)

## Infer before asking

- **The manifest** (`package.json`, `pyproject.toml` and similar) → the project name, description, scripts and the key dependencies for Tech Stack.
- **`git remote get-url origin`** → the repo URL and owner/name for the clone command and links.
- **`git branch -a` and `git tag`** → the branch and tag model, and the current branch.
- **`.env.example`** → the variables the reader sets. Table them when there are a few; past about ten, list the required ones and point at the file. If the code reads environment variables and there's no `.env.example`, it gets one before Getting Started is final.
- **`LICENSE`** → the licence.
- **An existing `README.md`** → keep what's still true and project-specific; reorder and correct the rest to the structure below.
- **Framework config** → the run commands and prerequisites.

## Ask the gaps

Ask only what the repo and the publication's `profile.md` don't answer, in one batch:

- **Ownership** — the owner's own repo or a third party's; it decides every name and link.
- **The tutorial** — blog post, video or both, and the URLs.
- **The goal** — what the reader builds or learns, in a sentence; it feeds the intro and the About description.
- **Series** — standalone or one part of a series; for a series, its name, how parts map to branches, and the series index.
- **Live demo** — a deployed URL, if there is one.
- **Preview media** — a screenshot, GIF or video of the result; only ever one the user provides.
- **Required services and accounts** — cross-checked against `.env.example`.

## One README per branch

Branch READMEs are mostly the same; the callout and the scope change. A starter branch lists **What you'll build**; a final branch lists **Features**.

Write every branch's README in the current working tree without switching branches: the current branch's file as `README.md`, each other branch's as `README.<branch>.md`. Tell the user which file goes on which branch, and that the extra files are copies to move into place and delete, not to commit on this branch. Don't print the other branches' READMEs into the chat.

## Sections, in order

Items in italics are conditional.

1. **`# <Title>`** — the tutorial or project title.
2. **One-line description** — what it is and what the reader learns.
3. _**Preview media**_ — right after the description, only when provided; never an invented image path. An image: `![<alt text>](<url>)`. A video: GitHub renders an uploaded `.mp4` inline; otherwise link a thumbnail, `[![<alt text>](<thumbnail-url>)](<video-url>)`.
4. **Callout** — in the first screenful: the tutorial link, a star prompt, and for a multi-branch repo which branch this is and where to go next; for a series, which part.
5. **Table of contents**.
6. **Features** (single or final branch) or **What you'll build** (starter branch).
7. **Tech stack** — from the dependencies.
8. **Prerequisites** — the runtime version from the repo's version file, plus accounts and services.
9. **Getting started** — clone, install, `.env` setup whenever the code reads environment variables, run, and the smoke check. _A live-demo link if there is one._
10. _**Scripts and maintenance**_ — only for non-standard scripts; explain any that delete or change data.
11. _**Branch guide**_ — multi-branch repos: a short table of what each branch or tag is for.
12. **Tested with** — the runtime and key dependency versions and the date the repo was last run end to end.
13. **Author** — the resolved owner or third party.
14. **License** — every README has one, linked to the `LICENSE` file.
15. **Additional resources** — the tutorial, the author's other work, the series' other parts.

## Callout templates

Fill with the resolved author's links.

Single branch:

```markdown
> **⭐ Found this helpful? Give the repo a star — it helps others find it.**
>
> 📺/📝 Full walkthrough: **[<TUTORIAL TITLE>](POST_OR_VIDEO_URL)**
```

Starter branch:

```markdown
> **📌 You're on the `starter` branch — the code you follow along with**
>
> <Core feature> isn't wired up yet. Build it step by step with the guide:
>
> **👉 [<TUTORIAL TITLE>](POST_OR_VIDEO_URL)**
>
> The finished code is on the [`main` branch](REPO_URL).
>
> ⭐ If this helped, please star the repo.
```

Final branch:

```markdown
> **✅ This is the finished app**
>
> To build it yourself from scratch, start on the [`starter` branch](<REPO_URL>/tree/starter) and follow along:
>
> **👉 [<TUTORIAL TITLE>](POST_OR_VIDEO_URL)**
>
> ⭐ If this helped, please star the repo.
```

Use the repo's real branch names in place of `starter` and `main`.

## Author and Additional Resources

Drop any line whose link doesn't exist.

```markdown
## Author

Built by **<AUTHOR NAME>**.

- 📝 More tutorials: **[<BLOG_HOST>](BLOG_URL)**
- 🔗 Links and socials: **[<LINKS_HUB_HOST>](LINKS_HUB_URL)**
- 💻 GitHub: **[@<GITHUB_HANDLE>](GITHUB_PROFILE_URL)**
```

```markdown
## Additional resources

- 📝/📺 [<TUTORIAL TITLE>](POST_OR_VIDEO_URL) — the full tutorial
- 📚 [More tutorials](AUTHOR_BLOG_URL)
- 🔗 [Connect with the author](AUTHOR_LINKS_URL)
```

## GitHub About

Write the metadata to a `github-about.md` file in the working tree; the user pastes it into the repository's About panel and deletes the file. It's indexed by GitHub search and topic pages, so it uses the terms people search for.

- **Description** — one sentence, at most 350 characters, core technology and what it is first.
- **Website** — the live demo, otherwise the tutorial URL.
- **Topics** — up to 20, lowercase and hyphenated, space-separated in the field; prefer the topic names GitHub suggests, covering the stack, the domain and `tutorial` or `example` where they fit.

```markdown
# GitHub About (paste into the repo's About panel, then delete this file)

**Description:** <one-line description>

**Website:** <demo or tutorial URL>

**Topics:** tag-one tag-two tag-three
```

## Style

- Never hard-wrap prose; only break where Markdown needs it.
- The star prompt and the tutorial link sit in the first screenful; the author's other work gets a link in Author and Additional resources.
- Attribute to the resolved owner or third party, never a mix.
- One H1, no skipped heading levels, and table-of-contents anchors that match their headings.
- Real values from the repo only — no `<PLACEHOLDER>` tokens left in the written file, and no invented features, prerequisites or variables.
