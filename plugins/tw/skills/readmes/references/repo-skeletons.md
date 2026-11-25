# Repo-type skeletons

Every README draws from the universal skeleton in SKILL.md; the repo type decides what leads and what drops. Detect the type from the signals below, and confirm with the user only when the signals conflict.

## The universal skeleton, to fill in

Start every README from this, in this order, then apply the repo type's changes below. Replace every `<…>` with a real value taken from the repo; a section that doesn't apply is deleted whole, and no placeholder survives into the written file.

````markdown
# <name — matches the repository or package>

<What it does, in one sentence a stranger understands, under 120 characters.>

<Badges that carry information someone acts on — CI status, published version, license; four at most.>

## Table of contents

<Only for a README of 100 lines or more: a link to every second-level heading.>

## Prerequisites

- <Runtime and version>
- <Package manager and version>
- <Any service it needs>

## Quickstart

```bash
<install command>
```

```bash
<the shortest command that shows it working>
```

<What the reader should see.>

## Configuration

| Variable | Required | What it's for |
| -------- | -------- | ------------- |
| `<NAME>` | Yes      |               |

<Past about ten variables: only the required ones, then "The full list is in `<example env file>`.">

## Scripts

| Command     | What it does |
| ----------- | ------------ |
| `<command>` |              |

## Support

<Where to get help.> To report a vulnerability, see [SECURITY.md](SECURITY.md).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[<license name>](LICENSE)
````

## Library / package

Signal: `package.json` with `main`/`exports` (or the language's equivalent), no app framework entry.

- Leads with install + a minimal working usage example
- The API surface is a short list of the main entry points with a link to full docs — not an inline reference
- Version badge earns its place here (readers act on it)

## App

Signal: a framework entry — `next.config.*`, `vite.config.*`, `manage.py` (Django), `config/routes.rb` (Rails), an `app/` or `src/pages/`.

- Leads with what the app does, and the live URL if deployed
- Then local setup: prerequisites, env vars, run commands
- The env section is usually the highest-value part — it's what blocks a new contributor — but an app with dozens of variables lists the required few and links `.env.example` rather than mirroring the whole file

## CLI

Signal: `bin` in `package.json`, `[project.scripts]` in `pyproject.toml`, or an installable binary.

- Leads with install, then the 3–5 most-used commands, each with real output
- The full flag reference is `--help` or a docs link, never a table of every flag

## Monorepo root

Signal: a workspace or multi-package manifest at the root (`pnpm-workspace.yaml`, a `workspaces` field, a Cargo or Go workspace, or the equivalent for the language).

- The README is a **map + shared setup**: what the monorepo is, a table of workspaces (name, one-liner, link to its README), and the setup that applies to everything — install, shared env, how to run any workspace
- Nothing package-specific — that belongs in the package's own README

## Package inside a monorepo

Signal: lives under `packages/` or `apps/`.

- Covers that package only: purpose, usage or run commands, its own env vars
- Links the root README for workspace setup instead of repeating it
- **No duplicated sections** — shared setup lives in the root only. A duplicated section will drift, and whichever copy the reader finds second will be wrong

## Demo / example

Signal: exists to show something off.

- Says what it demonstrates, links the thing it demos, and gives the shortest path to running it
- A tutorial's companion repo needs a different shape → `cw:demo-project` in [content-writing-skills](https://github.com/Timonwa/content-writing-skills)

## One of a set of near-identical templates

Signal: the repo (or folder) is one of several starter templates, example apps, or scaffolds that differ only in their specifics.

- **The shared sections are the same text in every member** — the install step, the env step, the "learn more" links. Only the template-specific values change.
- **Editing a shared section means editing every member in the same change.** A single drifted template defeats the point of having a set. Sweeping the set is a deliberate cross-repo action, not something a README update does on its own.

## Worked example — the skeleton applied to a small CLI

````markdown
# filesort

Sort the files in a directory by size from the command line.

## Prerequisites

- Node.js 24 or later, with npm

## Quickstart

```bash
npm install -g filesort
filesort . --top 3
```

```text
1.2 GB  video.mp4
856 MB  dataset.zip
45 MB   photo.jpg
```

## Commands

| Command                       | What it does                       |
| ----------------------------- | ---------------------------------- |
| `filesort <dir>`              | List files by size, largest first |
| `filesort <dir> --top <n>`    | Largest n files only               |
| `filesort <dir> --csv <file>` | Export the listing to CSV          |

Run `filesort --help` for all flags.

## Contributing

Bug reports and PRs welcome — see [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE)
````

Note what's absent: no Features section restating the commands, no badges (nothing published to report), no config table (no env vars), no adjectives.
