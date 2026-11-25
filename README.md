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
- A skill reads your project's style guide first, then asks only what's still missing.
- Every file it writes — a plan, a page, a report — follows a fixed template, so each run looks the same.
- It never invents a fact, a setting or an error message. A gap stays marked until you fill it.

## Install

### Any IDE or AI agent

```shell
npx skills add Timonwa/technical-writing-skills
```

[`npx skills`](https://github.com/vercel-labs/skills) asks which skills to install and which agents to install them for, and installs them in the current project. Add `-g` to install them for every project. To get the latest changes, run `npx skills update`.

Without Node, copy the folders inside `plugins/tw/skills/` into `.agents/skills/` in your project, or `~/.agents/skills/` for every project. Many agents read that folder. For the rest, use the skills folder your agent's docs name.

### Claude app (web or desktop)

1. Open **Customize > Plugins**.
2. Select **Add > Add marketplace > Add from a repository**, and enter `Timonwa/technical-writing-skills`.
3. Add **tw**.
4. Turn on **Settings > Capabilities > Create and edit files**. Skills don't run without it. On Team and Enterprise plans, an admin turns it on.

Plugins are saved to your account, so they work in chat on mobile too. To get the latest changes, select **Check for updates** in **Customize > Plugins**, or turn on **Sync automatically** for the marketplace.

## Your style guide

The skills write in your project's voice, using your style guide and word list. Say "create a style guide for our docs" and `docs-style-guide` builds one with you.

**In a codebase:**

- Name the guide in the project's `AGENTS.md`, which every coding agent reads: `Style guide: docs/style-guide.md`.
- For a guide outside the repo, add the same line to your agent's personal instructions file.
- If nothing names a guide, the skills look in the contributing docs and the docs folder, then ask.

**In a chat app:** add the style guide to the project's files, or attach it to the chat. When the agent gives you an updated guide, replace the old one.

**Without a guide,** the skills follow `docs-standards`: second person, present tense, and one job per page.

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

| Command          | Use it to                                                                       |
| ---------------- | ------------------------------------------------------------------------------- |
| `docs-review`    | Review a docs page before it goes live                                          |
| `docs-ai-check`  | Find what makes a page sound machine-written, with a suggested rewrite for each |
| `docs-audit`     | Find outdated information, broken links and missing pages across your docs      |
| `content-audit`  | Decide which docs pages to keep, combine, rewrite or delete                     |
| `style-check`    | Find words and formatting that differ from page to page across your docs        |
| `docs-pr-review` | Check the docs in a pull request against the code it changes                    |

- A command reports what it finds and doesn't edit anything while it checks.
- Every command takes `--fix`, which fixes only the findings you choose.
- Reports go to `_reports/`.
- `docs-pr-review` reports in chat, and comments on the pull request only with `--comment`.
- Nothing is ever posted or published for you.

## Contributing

Issues and pull requests are welcome, especially for a rule that misfires on your docs or has fallen behind the standard it cites. In a pull request:

- Change one skill where you can.
- Update its `evals/evals.json`.
- Keep `SKILL.md` under 200 lines and its description under 550 characters, and give a new skill a name no other skill uses. Longer material goes in the skill's `references/` folder, which the agent reads only when it needs it.
- Run the checks:

| Script              | Use it to                                                                                                                                     | Needs                       |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| `pnpm format`       | Format everything with Prettier                                                                                                               | `pnpm install` first        |
| `pnpm format:check` | Check formatting without writing                                                                                                              | `pnpm install` first        |
| `pnpm check:skills` | Check every skill against the Agent Skills rules and the house limits: 200 lines, a 550-character description, and a name no other skill uses | Node                        |
| `pnpm validate`     | Validate the Claude Code marketplace and plugin manifests                                                                                     | the Claude Code CLI on PATH |

The skills are Markdown, so there's no build step, and Prettier is the only dependency. Without installing it, run `pnpm dlx prettier --write .` instead.

## Support

If these skills save you time, [star the repo](https://github.com/Timonwa/technical-writing-skills) so other writers can find it, or [buy me a coffee](https://buymeacoffee.com/timonwa).

For blog posts, newsletters and social posts, see [content-writing-skills](https://github.com/Timonwa/content-writing-skills). For web apps built with Next.js, React and Firebase, see [engineering-skills](https://github.com/Timonwa/engineering-skills).

## License

[MIT](LICENSE)
