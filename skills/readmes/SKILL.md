---
name: readmes
description: >-
  Creating or updating a README for a project, package or app — detects the repo type (library, app, monorepo root, package, CLI, demo) and applies its fixed skeleton plus the universal one: a what-it-does one-liner, a tested quickstart, a config and env table, scripts, and a license. Leads with what it does, documents the 20% people need, no marketing adjectives. Use on "write a readme", "update the readme", "document this repo".
---

# README standards

A README answers three questions, in order: what does this do, how do I run it, where is everything else. Everything that doesn't serve one of those three is a candidate for deletion.

This is the standard for every README, wherever it lives — a personal project, a work repo, or a pull request to someone else's. Same detection, same skeleton, same rules, every run. When a README already exists and deviates from it, keep the project-specific facts and correct the shape (see **Refresh, don't clobber**).

## Detect the repo type first

The right README shape depends on what the repo is — a library leads with install + usage, an app with what it does + local setup, a CLI with its top commands, a monorepo root is a map, a package inside one covers only itself. The detection signals and the full per-type skeletons (including the monorepo no-duplication rule and a worked CLI example) are in [references/repo-skeletons.md](references/repo-skeletons.md) — detect the type there before writing, and confirm with the user only when the signals conflict. A repo accompanying a tutorial (blog post or video) has its own shape — star callouts, branch variants, About metadata — and is not this skill's job.

## The universal skeleton

Every shape draws from the same skeleton, in this order. Drop a section that doesn't apply; never reorder:

1. **Title + one-liner** — what it does, in one sentence a stranger understands.
2. **Badges** — only if they carry information someone acts on (CI status, published version, license). No decorative badge walls; 4 badges max.
3. **Quickstart** — the shortest real path from clone/install to seeing it work.
4. **Config / env** — the variables needed to get running, with name, required-or-not, and what it's for. **Up to ~10, table them; past that, list only the required ones and point at the project's example env file for the rest.** A 40-row table buries the quickstart and becomes a second copy that drifts on the next commit — the example env file is the source of truth, and a README that reproduces it wholesale is signing up to keep two files in sync. If the project uses environment variables but ships no example file, flag that it needs one.
5. **Scripts table** — the commands a contributor actually runs (build, test, run locally, anything non-obvious), taken from wherever the project defines them: a package manifest, a Makefile, a task runner, or the documented commands themselves. Skip internal plumbing.
6. **Contributing pointer** — one line linking `CONTRIBUTING.md` or stating the workflow (issues, PRs, branch naming). Not a policy essay.
7. **License** — always present; link the `LICENSE` file.

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

- **The voice rules every document obeys** — sentences, claims, prose before code, concrete over vague, formatting, never hard-wrap → [`writing-standards`'s house-voice.md](../writing-standards/references/house-voice.md). This skill adds only what a README needs on top.
- The general writing discipline (audience, plain language, prose-before-code) → `writing-standards`.
- Docs-site pages the README links out to → `developer-docs`; the endpoint reference it links to → `api-reference`.
- The quickstart's code blocks — choosing them, testing them, keeping them compiling → `code-samples`.
- Tightening the prose after drafting → `editing-standards`. Announcing a version → `release-notes`.
