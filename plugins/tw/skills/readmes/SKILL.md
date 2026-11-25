---
name: readmes
description: >-
  Creating or updating a README for a project, package or app — detects the repo type (library, app, monorepo root, package, CLI, demo) and applies its fixed skeleton plus the universal one: a what-it-does one-liner, a tested quickstart, a config and env table, scripts, and a license. Leads with what it does, documents the 20% people need, no marketing adjectives. Use on "write a readme", "update the readme", "document this repo".
---

# README standards

A README answers three questions, in order: what does this do, how do I run it, where is everything else. Everything that doesn't serve one of those three is a candidate for deletion.

Apply these rules to every README, wherever it lives — a personal project, a work repo, or a pull request to someone else's. When a README already exists and deviates from it, keep the project-specific facts and correct the shape (see **Refresh, don't clobber**).

## Voice and audience come from the writing's own guide

Before writing a README, find the project's style guide and conventions and read them:

- **In a codebase:** the style guide and conventions the project's `AGENTS.md` names, or its contributing docs.
- **In a chat app:** the style guide in the project's files, or attached to the conversation.
- **Otherwise:** ask whether one exists before concluding there isn't one.

Voice, person, tone, terminology and formatting come from that guide. Where it settles something this skill also covers, the guide wins; where it's silent or there isn't one, `docs-standards` applies without asking.

## Ask first

Read the answers from the request, the repository and its guide first; ask only what's missing. Ask with the app's question tool where it has one, so the choices can be picked; otherwise as a numbered list answered by number. Offer choices where the answers are known and a short typed answer otherwise.

1. **Which repository or package?** A path. Default: the current directory.
2. **What type is it?** Library · app · CLI · monorepo root · package inside a monorepo · demo · one of a set of templates. Detected from the signals; ask only when they conflict.
3. **New or refresh?** Write a new README · refresh the existing one.
4. **Who reads it first?** Someone installing or using it · a contributor running it locally · both.
5. **Can the quickstart be run here?** Yes · no — it needs credentials or a paid service, and the README says so.
6. **Is it published, and where?** The package registry name · the live URL · not published — this decides the version badge and the live link.

## Detect the repo type first

The right README shape depends on what the repo is — a library leads with install + usage, an app with what it does + local setup, a CLI with its top commands, a monorepo root is a map, a package inside one covers only itself. The detection signals and the full per-type skeletons (including the monorepo no-duplication rule and a worked CLI example) are in [references/repo-skeletons.md](references/repo-skeletons.md) — detect the type there before writing, and confirm with the user only when the signals conflict. A repo accompanying a tutorial (blog post or video) needs a different shape → `demo-project` in [content-writing-skills](https://github.com/Timonwa/content-writing-skills).

## The universal skeleton

[Standard Readme](https://github.com/RichardLitt/standard-readme) is the closest thing to a spec for this, and its rules are worth following where they apply: the file is `README.md`, the title matches the repository or package name, the short description sits on its own line under 120 characters with no heading of its own, sections appear in a fixed order, and no link in it is broken. Its rules are written for open-source libraries; for an application or service, add the config and scripts sections below, and detect the repo type first.

Every shape draws from the same skeleton, in this order. Drop a section that doesn't apply; never reorder. The fill-in version is at the top of [references/repo-skeletons.md](references/repo-skeletons.md#the-universal-skeleton-to-fill-in):

1. **Title + one-liner** — what it does, in one sentence a stranger understands.
2. **Badges** — only if they carry information someone acts on (CI status, published version, license). No decorative badge walls; 4 at most (a house rule, not part of Standard Readme).
3. **Table of contents** — for a README of 100 lines or more, linking every second-level heading ([Standard Readme](https://github.com/RichardLitt/standard-readme/blob/main/spec.md)).
4. **Prerequisites** — what must already be installed, with versions: the runtime (Node 24, Python 3.12), the package manager, any service it needs.
5. **Quickstart** — the shortest real path from clone/install to seeing it work, with install and usage each shown in a code block (Standard Readme).
6. **Config / env** — the variables needed to get running, with name, required-or-not, and what it's for. **Up to ~10, table them; past that, list only the required ones and point at the project's example env file for the rest.** A 40-row table buries the quickstart and becomes a second copy that drifts on the next commit — the example env file is the source of truth, and a README that reproduces it wholesale is signing up to keep two files in sync. If the project uses environment variables but ships no example file, flag that it needs one.
7. **Scripts table** — the commands a contributor actually runs (build, test, run locally, anything non-obvious), taken from wherever the project defines them: a package manifest, a Makefile, a task runner, or the documented commands themselves. Skip internal plumbing.
8. **Support and security** — one line on where to get help (issues, discussions, a forum), and a pointer to `SECURITY.md` for reporting a vulnerability privately, where the repo has one ([GitHub community health files](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)).
9. **Contributing pointer** — one line linking `CONTRIBUTING.md` or stating the workflow (issues, PRs, branch naming). Not a policy essay.
10. **License** — always present and always last ([Standard Readme](https://github.com/RichardLitt/standard-readme/blob/main/spec.md)); link the `LICENSE` file.

## Rules

- **Lead with what it does, not what it is** — "Sorts files by size from the command line", not "filesort is a Python-based utility that was created to…". The first sentence earns the rest of the read.
- **The quickstart is tested verbatim** — run every command in it before shipping the README. If you can't run one (needs credentials, paid service), say so in the README and flag it to the user; never present untested commands as working.
- **Document the 20% people actually need** — the common path in full, everything else as a link (docs site, `--help`, generated API reference). A README is a front door, not the whole house.
- **Keep it current or delete it** — a stale README is worse than none, because readers trust it. When a change makes a section wrong, fix or remove that section in the same change; if a section can't be kept current, replace it with a link to the source of truth.
- **No marketing adjectives** — cut "blazing", "powerful", "seamless", "robust", "lightweight", "modern". State a concrete capability or number instead; if there's nothing concrete behind the adjective, there was nothing behind it at all.
- **Real values only** — infer names, commands, scripts, and env vars from the repo; never leave `<PLACEHOLDER>` tokens in the written file, and never invent features or env vars that aren't there.
- **Markdown lints clean** — one H1, no skipped heading levels, working relative links, and never hard-wrap prose (one physical line per paragraph or list item).
- **Refresh, don't clobber** — when a README exists, preserve its still-valid project-specific sections and update around them. Preserving content doesn't mean preserving violations: sections that break these rules (marketing adjectives, stale commands, duplicated setup) get corrected to this standard, and the file ends up in the skeleton's shape.

## Boundaries

- **The voice rules every document obeys** — sentences, claims, concrete over vague, formatting, never hard-wrap → `docs-writing-standards`; the documentation voice, prose before code and the four document types → `docs-standards`.
- The general writing discipline (audience, plain language) → `docs-writing-standards`; prose before code → `docs-standards`.
- Docs-site pages the README links out to → `developer-docs`; the endpoint reference it links to → `api-reference`.
- The quickstart's code blocks — choosing them, testing them, keeping them compiling → `docs-code-samples`.
- Tightening the prose after drafting → `docs-editing-standards`. Announcing a version → `release-notes`.
