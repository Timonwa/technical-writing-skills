# Research notes template

The record of one research pass: the facts asked for, what the code says, where, at which version, and how sure. Keep it beside the draft it feeds (or hand it back in chat), so whoever re-verifies the page later starts from the exact lines. The header records the answers to the skill's Ask first questions.

```markdown
# Research notes — <what the facts are for: the page, entry or reply>

**Date:** <YYYY-MM-DD> · **Repository:** <name or path> · **Read at:** <branch, tag or commit> · **Production is:** <branch or tag, or "not confirmed"> · **Environment documented:** <production / staging / self-hosted default / other> · **Entry point:** <file or directory, or "searched from the visible string"> · **Access:** <full / through someone / none>

## Facts

| Fact needed | Value | Unit or format | Where (file:line) | Overridden? | Status | How confirmed |
| --- | --- | --- | --- | --- | --- | --- |
| <the default timeout> | <30> | <seconds> | `<path>:<line>` | <checked env, config, flags — or "not checked"> | Confirmed / Inferred / Unknown | <ran it / called it / used the product / test name / not confirmed> |

## Not live

Code found but not reachable by readers: behind a flag that's off, unreleased, dead or vendored.

| What | Where (file:line) | Why it isn't documented |
| --- | --- | --- |

## Questions

One specific question per gap, for the person who can answer it.

| # | Question | Who can answer it | What it blocks |
| --- | --- | --- | --- |
```

Every fact the questions asked for has a row, even when its status is Unknown. An inferred value is never copied into the draft as confirmed.
