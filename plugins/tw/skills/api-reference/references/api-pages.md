# Skeletons for the pages around the reference

Each page is written once, and every endpoint entry links to it rather than restating it. Write only the pages the API has — a webhooks page for an API with no webhooks is an empty section. Each skeleton is the section order; the rules for what goes in each are in the skill's [The pages around the reference](../SKILL.md#the-pages-around-the-reference).

## Quickstart

````markdown
# Quickstart

<What the reader will have done by the end: their first successful call, and roughly how long it takes.>

## Before you begin

- <Account, plan or access needed>
- <Tool or runtime, with the supported version>

## Get a credential

1. <Step that ends with the credential in hand>

## Make your first call

<One sentence saying what the call does.>

```bash
<the complete request>
```

<The real response:>

```json
<the response body>
```

## Next steps

- [<The most common task>](<link>)
- [Authentication](<link>)
- [Errors](<link>)
````

## Authentication

```markdown
# Authentication

<The credential type and what it identifies.>

## Get a credential

## Send it

<The literal header, e.g. `Authorization: Bearer <token>`.>

## How long it lasts

## Rotate or revoke it

## When authentication fails

| Status | Code | Meaning | What to do |
| ------ | ---- | ------- | ---------- |
|        |      |         |            |
```

## Errors

```markdown
# Errors

<The shared error envelope, with an example body. Where the API returns Problem Details, say so.>

## Status codes

| Status | Meaning | Retry? | What the caller should do |
| ------ | ------- | ------ | ------------------------- |
|        |         |        |                           |

## Error codes

| Code or `type` | Status | Meaning | What the caller should do |
| -------------- | ------ | ------- | ------------------------- |
|                |        |         |                           |

## Retrying

<Which errors are safe to retry, the back-off to use, and the idempotency key where one is supported.>
```

## Pagination

````markdown
# Pagination

<The mechanism: cursor, page number or offset.>

## Parameters

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
|      |      |         |             |

## Detect the last page

## Fetch every page

<One sentence saying what the loop does.>

```<language>
<a worked loop>
```
````

## Rate limits

```markdown
# Rate limits

## Limits

| Plan or tier | Limit | Window | Applies to |
| ------------ | ----- | ------ | ---------- |
|              |       |        |            |

## Headers

| Header | What it reports |
| ------ | --------------- |
|        |                 |

## When you hit the limit

<The status code, the header that says when to retry, and the back-off to use.>
```

## Webhooks

````markdown
# Webhooks

<What the API sends, and when.>

## Events

| Event | Sent when | Payload |
| ----- | --------- | ------- |
|       |           |         |

## Verify the signature

<One sentence saying what the code checks.>

```<language>
<verification code>
```

## Retries and ordering

## Test a webhook locally
````

## Versioning and deprecation

```markdown
# Versioning and deprecation

## Select a version

## What counts as a breaking change

## Deprecation notice

<The notice period, where deprecations are announced, and the signals the API sends: `deprecated` in the spec, the `Deprecation` and `Sunset` response headers.>

## Deprecated endpoints

| Endpoint | Deprecated on | Removed on | Replacement |
| -------- | ------------- | ---------- | ----------- |
|          |               |            |             |
```

## Changelog

```markdown
# Changelog

## <YYYY-MM-DD> — <version>

### Added

### Changed

### Deprecated

### Removed

### Fixed
```

Leave out a heading in a changelog entry that has nothing under it; the format of each line is `release-notes`'.

## SDK page

````markdown
# <Language> SDK

## Install

```bash
<the install command>
```

<Supported runtime versions.>

## Make your first call

<The same first call as the quickstart, in this language.>

## Compatibility

| SDK version | API version |
| ----------- | ----------- |
|             |             |

## Reference

<Link to the reference generated from the library's docstrings.>
````
