# Edit notes — template

The findings from an edit, handed back to the author in chat or saved beside the document. The header records what was edited, when, against which guide, and the answers from **Ask first**; a field with no answer stays, left blank. Every section is present; an empty one says "None".

```markdown
# Edit notes — <document title>

| Field           | Answer                                                              |
| --------------- | ------------------------------------------------------------------- |
| Document        | <path or title>                                                     |
| Type            | <docs page · user guide · internal doc · README · reference entry · engineer's draft> |
| Reader and job  | <who reads it, and what they can do afterwards>                     |
| Product version | <the version the page describes>                                    |
| Checked against | <the code · the running product · the vendor's docs · nothing>      |
| Standard        | <style guide path, or "tw:docs-standards">                          |
| Inferred        | <conventions inferred from the document itself, or "None">          |
| Passes run      | <substantive · technical accuracy · line · copy · proof · quick pass> |
| Mode            | <proposed edits · edited in place>                                  |
| Date            | <YYYY-MM-DD>                                                        |

## Edits

One row per edit, in document order. A proposed edit shows the replacement; an edit made in place shows what changed.

| #   | Pass | Where             | Problem for the reader | Before | After |
| --- | ---- | ----------------- | ---------------------- | ------ | ----- |
| 1   | Line | <heading or line> |                        |        |       |

## Questions for the author

Facts only the author or an expert can settle, numbered, each answerable in a sentence.

1.

## Unverified

Claims not checked against a real source, and where each could be checked.

| Claim | Where it appears | Where to check |
| ----- | ---------------- | -------------- |

## Still to do

Problems found and not fixed in this round — a section that belongs on another page, a level not yet run.
```
