# Endpoint entry skeleton

One entry per operation, in this order, for a hand-written reference page. In a spec, the same content goes into the operation's fields: the summary and description into `summary` and `description`, the tables into the parameter and response definitions. Keep every heading even when its answer is short — "None required" under **Authentication** and "None beyond the API-wide errors", linked, under **Errors** say the question was checked. Mark a value still unverified with the project's marker for open questions, never a plausible guess.

````markdown
## <METHOD> <path, e.g. /v1/projects/{projectId}/items>

<Summary: a short label for navigation, no full stop>

<Description: one sentence, verb first, stating what it does or returns. Then only the behaviour the caller has to plan for: whether a retry is safe and which idempotency key it takes, whether the write is immediately readable, what else the call changes, whether it can be undone.>

<When you'd use it: one or two sentences, only where the summary doesn't make it obvious — the distinction from a sibling endpoint, a prerequisite, a state the resource must be in.>

<Deprecated only: Deprecated on <date>; removed on <date>. Use <replacement endpoint> instead.>

### Authentication

<The credential and the scope or role it needs, or "None required".>

### Parameters

Path parameters:

| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
|      |      |          |         |             |

Query parameters:

| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
|      |      |          |         |             |

Headers:

| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
|      |      |          |         |             |

Request body:

| Field | Type | Required | Default | Description |
| ----- | ---- | -------- | ------- | ----------- |
|       |      |          |         |             |

### Request example

<One sentence saying what the example does.>

```bash
<a complete, runnable call with real-looking values>
```

### Response example

<Status code and what it means.>

```json
<the real success body>
```

| Field | Type | Description |
| ----- | ---- | ----------- |
|       |      |             |

### Errors

<Errors specific to this endpoint; the API-wide ones are linked, not repeated.>

| Status | Code | Meaning | What the caller should do |
| ------ | ---- | ------- | ------------------------- |
|        |      |         |                           |
````

Remove a parameter table only when the endpoint has no parameters in that location. Describe each parameter by what it does, with its unit, format, range and every enum value in the Description cell.
