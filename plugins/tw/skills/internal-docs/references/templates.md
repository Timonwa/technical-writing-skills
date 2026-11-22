# Internal doc templates

One template per type. Every document opens with the metadata block; a field with no answer yet stays, left blank, never removed. Replace each `<…>` with the real value and delete a template's hint lines once filled.

## The metadata block

Every type starts with this, directly under the title.

```markdown
| Field          | Answer                                                    |
| -------------- | --------------------------------------------------------- |
| Owner          | <a role, person or team — never blank>                    |
| Last reviewed  | <YYYY-MM-DD, the date it was last confirmed true>         |
| Review cadence | <quarterly · yearly · after every use>                    |
| Status         | <current · draft · superseded by [<title>](<link>)>       |
| Classification | <who may read it, in the organisation's own levels>       |
```

## Runbook

```markdown
# <The problem or task, as someone would search for it>

<metadata block>

## When to use this runbook

<The symptom or alert, as the reader sees it.>

## Before you start

- [ ] <Access or permission, and who grants it>
- [ ] <Tool, with the version>

## Steps

1. <One action, with the exact command or click.>

   You should see: <the output or state that means continue>.

2. <If X, go to step N; otherwise continue.>

## Check it worked

<The concrete check, and what it shows.>

## Roll back

<The steps, or "This can't be rolled back.">

## Escalate

<When, to which role, on which channel.>

## Known failure modes

| What you see | What it means | What to do |
| ------------ | ------------- | ---------- |
```

## Postmortem

```markdown
# Postmortem — <incident title>, <YYYY-MM-DD>

<metadata block>

## Summary and impact

<What happened, who was affected, for how long, in numbers.>

## Timeline

Times in <time zone>.

| Time | Event |
| ---- | ----- |
|      | Detected — <how> |
|      | Mitigated — <how> |
|      | Resolved — <how> |

## Contributing causes

- <A condition in the system or process — never a person.>

## What went well

## What went badly

## Where we got lucky

## Action items

| Action | Owner | Priority | Due date | Tracker link |
| ------ | ----- | -------- | -------- | ------------ |

## Review

| Held on | Attendees | Published to |
| ------- | --------- | ------------ |
```

## Process doc or SOP

```markdown
# <The process, as people name it>

<metadata block>

## When this starts

<The trigger, and who starts it.>

## Who does what

| Role | Responsible for | Approves |
| ---- | --------------- | -------- |

## Steps

| #   | Step | Who | In | Out | Takes |
| --- | ---- | --- | -- | --- | ----- |
| 1   |      |     |    |     |       |

## Deadlines

## Exceptions

<The cases this doesn't cover, and who decides them.>

## Who to ask

<A role and a channel.>
```

## Onboarding

```markdown
# Onboarding — <role>

<metadata block>

## Access and accounts

- [ ] <Account, and who grants it>

## Day one

- Read now: <link>
- Do: <task>
- You're done when: <something observable>

## First week

- Read now: <link>
- Do: <task>
- You're done when: <something observable>

## First month

- Do: <task>
- You're done when: <something observable>

## Read eventually

- <link>

## Who to ask

| About | Ask |
| ----- | --- |
|       |     |
| Anything else, or you don't know who | <role or person> |
```

## Decision record

Immutable once accepted; a changed decision gets a new record that supersedes this one.

```markdown
# <NNNN>. <The decision, as a short title>

| Field      | Answer                                                              |
| ---------- | ------------------------------------------------------------------- |
| Status     | <proposed · accepted · rejected · deprecated · superseded by NNNN>  |
| Date       | <YYYY-MM-DD>                                                        |
| Decided by | <names or roles>                                                    |
| Owner      | <role or team>                                                      |

## Context and problem

<The situation and constraints at the time.>

## Decision drivers

- <What mattered most>

## Considered options

1. <Option> — rejected because <reason>.
2. <Option> — chosen.

## Decision

<The decision, stated plainly.>

## Consequences

- Good: <what it commits to and gains>
- Bad: <what it costs>
```

## Internal reference or policy

```markdown
# <The thing, as people search for it>

<metadata block>

| Field          | Answer                                          |
| -------------- | ----------------------------------------------- |
| Effective from | <YYYY-MM-DD>                                    |
| Replaces       | <the previous rule, or a link to it — or blank> |

<One line: what this covers and who it applies to.>

| <Dimension> | <Dimension> | <Value> |
| ----------- | ----------- | ------- |
```
