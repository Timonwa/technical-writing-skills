# Docs PR review output format

The review is posted in chat, worst first; with `--comment`, the same summary becomes the PR review's body. The header records the answers to the skill's Ask first questions. Nothing found → say so plainly, with what was checked.

```markdown
## Docs review of #<n> — <title>

**Date:** <YYYY-MM-DD> · **Shape:** <one of the four> · **Checked against:** <the source> · **Readers:** <who reads the docs> · **Product version:** <the release the PR ships in> · **Standard:** <guide, or "none found — docs-standards"> · **Mode:** <chat only / posted on the PR / fixed on the branch> · **Verdict:** <Ready / Ready with fixes / Needs rework>

### Missing docs
| # | Change in the code | Where | Where the doc belongs |
| --- | --- | --- | --- |

### Findings
| # | Severity | Level | Where | Issue | Replacement |
| --- | --- | --- | --- | --- | --- |

### Questions for the author
Facts only the author can settle — nothing below has been guessed in the docs.

### Unverified
Claims that couldn't be checked, and why.

### Not this PR's to fix
Problems in docs the PR didn't touch.
```
