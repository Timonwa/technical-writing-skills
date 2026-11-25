# technical-writing-skills

Agent skills that help technical writers plan, write, edit and review documentation — developer docs, help-centre articles, internal docs, API references, READMEs and release notes — in any IDE or AI agent that supports [Agent Skills](https://agentskills.io).

[![License: MIT](https://img.shields.io/github/license/Timonwa/technical-writing-skills)](LICENSE)
[![Agent Skills](https://img.shields.io/badge/Agent%20Skills-compatible-6E56CF)](https://agentskills.io)
[![GitHub stars](https://img.shields.io/github/stars/Timonwa/technical-writing-skills?style=flat)](https://github.com/Timonwa/technical-writing-skills/stargazers)
[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-support-FFDD00?logo=buymeacoffee&logoColor=black)](https://buymeacoffee.com/timonwa)

For blog posts, newsletters and social posts, see [content-writing-skills](https://github.com/Timonwa/content-writing-skills).

## Contents

- [How the skills work](#how-the-skills-work)
- [Install](#install)
- [Your style guide](#your-style-guide)
- [Skills](#skills)
- [Commands](#commands)
- [Contributing](#contributing)
- [Support](#support)

## How the skills work

- Your agent picks a skill when your request matches it, so you don't have to name it. Commands run only when you call them.
- To call a skill or command by name, type `$` and its name in Codex (`$readmes`, `$docs-review docs/guides/webhooks.md`), or `/` in Claude Code (`/readmes`, or `/tw:readmes` with the plugin). In other agents, ask for it by name: "use the readmes skill". To see them all, ask your agent "which technical writing skills do you have?"
- A skill reads your project's style guide first, then asks only what's still missing.
- Every file it writes — a plan, a page, a report — follows a fixed template, so each run looks the same.
- It never invents a fact, a setting or an error message. A gap stays marked until you fill it.

## Install

### Any IDE or AI agent

```shell
npx skills add Timonwa/technical-writing-skills
```

[`npx skills`](https://github.com/vercel-labs/skills) asks which skills to install and which agents to install them for — Cursor, GitHub Copilot, Codex, Gemini CLI, Claude Code and many more — and installs them in the current project. Add `-g` to install them for every project. To get the latest changes, run `npx skills update`.

To skip the questions, name your agents and take every skill. For example, for Codex and Claude Code in every project:

```shell
npx skills add Timonwa/technical-writing-skills -g -a codex -a claude-code --skill '*'
```

Without Node, copy the folders inside `plugins/tw/skills/` into `.agents/skills/` in your project, or `~/.agents/skills/` for every project. Many agents read that folder. For the rest, use the skills folder your agent's docs name. To update, copy them again from the latest version of this repo.

### Claude Code as a plugin

Claude Code can also install the set as a plugin, which keeps the `tw:` prefix and runs commands as slash commands:

```shell
/plugin marketplace add Timonwa/technical-writing-skills
/plugin install tw@technical-writing-skills
```

When it asks for a scope, pick one:

- **User** — every project on your machine.
- **Project** — everyone who clones the repo.
- **Local** — this repo, for you only.

To get the latest changes, run `/plugin marketplace update technical-writing-skills`, or turn on auto-update for `technical-writing-skills` under **Marketplaces** in `/plugin`.

### Claude app (web or desktop)

1. Open **Customize > Plugins**.
2. Select **Add > Add marketplace > Add from a repository**, and enter `Timonwa/technical-writing-skills`.
3. Add **tw**.
4. Turn on **Settings > Capabilities > Create and edit files**. Skills don't run without it. On Team and Enterprise plans, an admin turns it on.

Plugins are saved to your account, so they work in chat on mobile too. To get the latest changes, select **Check for updates** in **Customize > Plugins**, or turn on **Sync automatically** for the marketplace.

### ChatGPT

A custom GPT is coming soon.

## Your style guide

The skills write in your project's voice, using your style guide and word list. Say "create a style guide for our docs" and `tw:docs-style-guide` builds one with you.

**In a codebase:**

- Name the guide in the project's `AGENTS.md`, which every coding agent reads: `Style guide: docs/style-guide.md`.
- For a guide outside the repo, add the same line to your agent's personal instructions file, such as `~/.claude/CLAUDE.md` for Claude Code or `~/.codex/AGENTS.md` for Codex.
- If nothing names a guide, the skills look in the contributing docs and the docs folder, then ask.

**In the Claude app:** add the style guide to the Project's files, or attach it to the chat. When the agent gives you an updated guide, replace the old one.

**Without a guide,** the skills follow `tw:docs-standards`: second person, present tense, and one job per page.

## Skills

| Skill                      | Use it to                                                                                     |
| -------------------------- | --------------------------------------------------------------------------------------------- |
| `docs-writing-standards`   | Check that a page is clear, plain and backed by sources                                       |
| `docs-standards`           | Write docs pages that each do one thing: teach, walk through a task, list facts or explain    |
| `docs-planning`            | Decide which docs pages you need, and find what's missing from the ones you have              |
| `developer-docs`           | Write pages for a developer docs site, checked against the code                               |
| `api-reference`            | Document an API: its endpoints, errors, sign-in and getting-started pages                     |
| `user-guides`              | Write help-centre articles for the people who use a product                                   |
| `internal-docs`            | Write runbooks, team processes, onboarding guides and decision records                        |
| `readmes`                  | Write or update a project's README                                                            |
| `release-notes`            | Write release notes and changelogs that tell users what changed for them                      |
| `docs-code-samples`        | Add code to a docs page that readers can copy and run                                         |
| `codebase-research`        | Find the exact settings, limits and error messages in a product's code, so the docs are right |
| `sme-interviews`           | Prepare to interview an engineer, then turn their answers into checked facts for the docs     |
| `docs-editing-standards`   | Edit a docs page someone has already written                                                  |
| `docs-style-guide`         | Create a style guide and word list for a set of docs                                          |
| `docs-images-and-diagrams` | Add screenshots, diagrams and image descriptions to docs                                      |
| `docs-seo-aeo-geo`         | Help readers find your docs through Google and AI tools like ChatGPT                          |
| `localization`             | Write docs that translate well, and keep translated versions up to date                       |

## Commands

| Command              | Use it to                                                                       |
| -------------------- | ------------------------------------------------------------------------------- |
| `/tw:docs-review`    | Review a docs page before it goes live                                          |
| `/tw:docs-ai-check`  | Find what makes a page sound machine-written, with a suggested rewrite for each |
| `/tw:docs-audit`     | Find outdated information, broken links and missing pages across your docs      |
| `/tw:content-audit`  | Decide which docs pages to keep, combine, rewrite or delete                     |
| `/tw:style-check`    | Find words and formatting that differ from page to page across your docs        |
| `/tw:docs-pr-review` | Check the docs in a pull request against the code it changes                    |

- The table uses Claude Code plugin names. With a plain install, Claude Code drops the prefix (`/docs-review docs/guides/webhooks.md`), and a command runs only when you type its `/` name. In Codex, type `$docs-review docs/guides/webhooks.md`; in other agents, ask by name, such as "run docs-review on docs/guides/webhooks.md". Add `--fix` the same way.
- A command reports what it finds and doesn't edit anything while it checks.
- Every command takes `--fix`, which fixes only the findings you choose.
- Reports go to `_reports/`.
- `/tw:docs-pr-review` reports in chat, and comments on the pull request only with `--comment`.
- Nothing is ever posted or published for you.

## Contributing

Issues and pull requests are welcome, especially for a rule that misfires on your docs or has fallen behind the standard it cites. In a pull request:

- Change one skill where you can.
- Update its `evals/evals.json`.
- Keep `SKILL.md` under 200 lines and its description under 550 characters, and give a new skill a name no other skill uses. A skill that mirrors one in [content-writing-skills](https://github.com/Timonwa/content-writing-skills) starts with `docs-`, so both can sit in one skills folder. Longer material goes in the skill's `references/` folder, which the agent reads only when it needs it.
- Run the checks:

| Script              | Use it to                                                                                                                                     | Needs                       |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| `pnpm format`       | Format everything with Prettier                                                                                                               | `pnpm install` first        |
| `pnpm format:check` | Check formatting without writing                                                                                                              | `pnpm install` first        |
| `pnpm validate`     | Validate the Claude Code marketplace and plugin manifests                                                                                     | the Claude Code CLI on PATH |
| `pnpm check:skills` | Check every skill against the Agent Skills rules and the house limits: 200 lines, a 550-character description, and a name no other skill uses | Node                        |

The skills are Markdown, so there's no build step, and Prettier is the only dependency. Without installing it, run `pnpm dlx prettier --write .` instead.

## Support

If these skills save you time, [buy me a coffee](https://buymeacoffee.com/timonwa).

For blog posts, newsletters and social posts, see [content-writing-skills](https://github.com/Timonwa/content-writing-skills). For web apps built with Next.js, React and Firebase, see [engineering-skills](https://github.com/Timonwa/engineering-skills).

## License

[MIT](LICENSE)

## Moved from writing-skills

Until 2026-11-25 this repo was `writing-skills`, with technical and content writing together. Content writing now lives in [content-writing-skills](https://github.com/Timonwa/content-writing-skills), and `write:` skills are now `tw:docs-*` here.
