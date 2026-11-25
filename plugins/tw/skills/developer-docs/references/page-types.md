# The four docs page types — section blueprints

Which quadrant a topic needs — and why mixing them fails — is `docs-standards`' call (Diátaxis). This file is the docs-site rendering of each: the section order to follow once the type is chosen, with a fill-in skeleton for each. The skeleton goes in the frame's middle.

## The frame every page shares

Whatever the type, a page opens and closes the same way; the type's sections go in the middle. Front matter field names follow the docs framework.

```mdx
---
title: "" # the sidebar label and search title: the identifying words first, about 50–60 characters
description: "" # the search snippet: unique, 1–2 sentences, about 150–160 characters
---

<What the page covers and why the reader needs it, in one or two sentences.>

<The type's sections, from the blueprint below.>

## Next steps

- [<Related page>](<relative link>)
- [<Related page>](<relative link>)
```

## 1. Tutorial — learning by doing

The reader is new and wants a guaranteed win. You own every decision; they own nothing but the typing.

- Title: what they'll have built ("Build a comment feed with live updates")
- Opening: what the finished thing does and roughly how long it takes
- **Prerequisites** — exact versions, accounts, prior setup, each verifiable
- Numbered steps, each ending in something observable (output, a rendered page, a passing test) so the reader knows they're still on track
- Show expected output after every step that produces any
- No choices, no detours, no "alternatively" — one path
- Closing: what they built + next-steps links to the how-tos and concepts they're now ready for

Fill-in skeleton:

````mdx
<What they'll have built, and roughly how long it takes.>

## Before you start

- <Tool> <exact version> — check with `<command>`
- <Account or setup>

## 1. <First step, as an action>

<What to do.>

```<language>
<code>
```

<What they should see now.>

## 2. <Next step>

## What you built

<One or two sentences.>
````

## 2. How-to guide — a task for someone competent

The reader knows the basics and has a goal. Assume competence; skip teaching.

- Title: the task as they'd search it ("Rotate an API key")
- Opening: the goal and any preconditions, one or two sentences
- Numbered steps for the happy path, concrete values throughout
- Branches ("if you use X…") as short subsections, not interleaved into the main path
- The likely failure: the error they'll actually hit, what it means, the fix
- Closing: how to verify it worked

Fill-in skeleton:

```mdx
<The goal, and any precondition.>

1. <Action, with the concrete value.>
2. <Action.>
3. <Action.>

### If you use <variant>

<The steps that differ.>

## If it fails

**`<the error they'll see>`** — <what it means>. <The fix.>

## Check it worked

<How to confirm.>
```

## 3. Reference — information, complete and neutral

The reader is mid-task and needs a fact. Structure mirrors the code, not a narrative.

- Title: the symbol or surface itself (`createClient()`, "Environment variables")
- One-line statement of what it is
- Tables for the matrix material: parameters, options, defaults, types, error codes — every entry, not the interesting ones
- A minimal runnable example per entry point
- No advice, no "you should usually…" — link the relevant how-to or explanation instead
- Generated API references (OpenAPI/Swagger) → `api-reference`, not hand-written pages

Fill-in skeleton:

````mdx
<What it is, in one line.>

## Parameters

| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
|      |      |          |         |             |

## Returns

<Type and shape.>

## Errors

| Code | When |
| ---- | ---- |
|      |      |

## Example

```<language>
<minimal runnable example>
```
````

## 4. Explanation — understanding, no task

The reader wants to know why or how it works. No steps, no outcome.

- Title: the concept ("How caching works", "Why tokens expire")
- Opening: the question this page answers
- The mental model first, mechanics second, edge cases last
- Diagrams where the shape of the thing matters
- Honest trade-offs — an explanation that only sells the design is marketing
- Closing: next-steps links to the how-tos that apply the concept

Fill-in skeleton:

```mdx
<The question this page answers.>

## <The mental model>

<How to think about it.>

## How it works

<The mechanics.>

## Edge cases

<Where the model bends.>

## Trade-offs

<What the design gives up, and why.>
```

## The mixing test

A page drifting between types is the most common docs defect. Symptoms and fixes:

| Symptom                                            | The drift              | Fix                                                       |
| -------------------------------------------------- | ---------------------- | --------------------------------------------------------- |
| A tutorial offering choices ("or, if you prefer…") | tutorial → how-to      | Pick one path; move alternatives to a how-to              |
| A how-to explaining theory between steps           | how-to → explanation   | Cut to one sentence + link the explanation page           |
| A reference giving advice                          | reference → how-to     | Move the advice to the how-to; keep the reference neutral |
| An explanation with numbered steps                 | explanation → tutorial | Move the steps out; keep the why                          |
