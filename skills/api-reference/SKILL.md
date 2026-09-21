---
name: api-reference
description: >-
  Writing and maintaining the documentation for an API a developer has to integrate against — the reference itself (endpoints, parameters, status codes, error tables, response examples), plus the pages around it that make it usable: authentication, a quickstart, pagination, rate limits, webhooks, versioning and deprecation. Covers writing the prose fields inside an OpenAPI or similar spec as well as hand-written pages. Use on "API docs", "API reference", "document this endpoint", "OpenAPI description", "SDK docs", "webhook docs".
---

# API reference

An API reference answers one question at a time, for a developer who is mid-integration and slightly annoyed. They are not reading — they are looking. Every rule here serves lookup speed and the absence of surprises.

The reference is only half the job. A complete API documentation set is a reference **plus** the pages that let someone reach their first successful call: authentication, a quickstart, and the cross-cutting behaviours (pagination, errors, rate limits, versioning) that every endpoint inherits and no endpoint should restate.

## Establish what you're working from

The shape of the work depends on where the descriptions live. Ask, once, up front:

- **Is there a spec** (OpenAPI, AsyncAPI, GraphQL SDL, a Protobuf definition, a vendor's own format), and **is it generated from the code or hand-maintained?** Generated means your edits belong in the source annotations or the description fields, never in the generated output — anything written into generated output is erased on the next build.
- **Who owns it** — if engineering owns the spec, your changes go through them or through the same review as code; agree the route before writing.
- **What renders it** — a reference viewer, a docs site, a portal, a PDF. This decides what you can use: some renderers support Markdown in descriptions, tabs, or per-language samples, and some render a description as plain text with the syntax showing.
- **Is there a sandbox, test account, or example environment** you can call the API from? Being able to run a request is the difference between documenting the API and describing it.

## Verify every endpoint against something real

An API reference is the least forgiving document a writer produces: a wrong default or a missing required field turns into a support ticket within the hour.

- **Call the endpoint** where you can, and paste the real response. A hand-written example object drifts from the real one on the first schema change and is never caught.
- **Where you can't call it**, work from the schema definition or the handler, and from an engineer's answers — never from an older version of the docs, and never from what the endpoint's name implies. `GET /users` returning a list is an assumption, not a fact.
- **Never invent** a field name, a default, an enum value, a status code or an error message because it sounds like what this API would return. Ask, and mark anything still unverified so whoever can check it knows where to look.
- **Re-verify on every version bump.** Endpoints change silently; the docs don't.

## Every endpoint entry

The fixed shape, in this order. A reader learns it once and then knows where to look on every other endpoint:

1. **Method and path** as the heading — `POST /v1/projects/{projectId}/items`.
2. **One-sentence summary**, verb first, stating what it does or returns: "Creates an item in a project." Not "This endpoint can be used to create items."
3. **When you'd use it**, one or two sentences, only where it isn't obvious from the summary — the distinction from a similar endpoint, a prerequisite, a state the resource has to be in.
4. **Authentication and permissions** — which credential, which scope or role. Present even when the answer is "none required"; silence reads as an oversight.
5. **Parameters**, in a table per location (path, query, header, body), each with: name, type, required or optional, default, and what it does. Constraints belong here too — max length, allowed values, format.
6. **Request example** — a complete, runnable call with real-looking values, in whatever language the audience uses. Never a fragment.
7. **Response example** — the actual success body, with the status code stated. Show the fields, and describe any that aren't self-explanatory in a table below.
8. **Errors specific to this endpoint** — a table of status, code, meaning, and what the caller should do. The API-wide errors are linked, not repeated.

### Parameter tables

- **Every parameter, not the interesting ones.** A reference with gaps stops being consultable — a reader who finds one omission now has to test everything.
- **"Required" is a column, not a sentence.** Never "you must pass this" inside the description.
- **State the default explicitly**, including when it's null or absent. "Optional" alone leaves the reader guessing what happens if they omit it.
- **Describe what the parameter does, not what it is.** ❌ "The limit." ✓ "Maximum number of items to return. Between 1 and 100."
- **Enumerate enums.** Every accepted value, with what each one means, and which is the default.
- **Name the unit and the format.** "Timeout in milliseconds", "ISO 8601 timestamp in UTC", "amount in the smallest currency unit". A bare number is a bug waiting to happen.

### Writing the summary and description

Write for the developer consuming the API, not the one who built it:

- **Include** — what it does or returns, action verb first; non-obvious behaviour the caller has to plan for (side effects, idempotency, eventual consistency, state transitions that can't be undone); the distinction from a sibling endpoint that does something similar.
- **Exclude** — anything the entry already encodes elsewhere ("requires authentication", "rate-limited", "the body is optional"); internal implementation details (which database, which queue, which service owns it); internal permission strings; cross-references to schema names the reader can't see; roadmap notes.

> ❌ "Cursor-paginated public items list used by the discover-page rails. Server-enforced filters — `discoverable` AND `status live`. See `PublicItemsQuerySchema`. Rate-limited."
>
> ✓ "Returns a paginated list of items that are live and publicly visible."

## The pages around the reference

An endpoint list alone doesn't get anyone integrated. These pages carry everything the endpoints share, written once:

- **Quickstart** — credential to first successful response, in as few steps as possible, with the real output shown. This is the most-read page in an API's docs and deserves the most testing. One path only; alternatives are links.
- **Authentication** — how to get a credential, how to send it, how long it lasts, how to rotate it, what an auth failure looks like. Include the literal header.
- **Errors** — the shared error envelope, the full status-code table, what each means for the caller, and the retry guidance. Endpoint pages link here instead of restating it.
- **Pagination** — the mechanism (cursor, page number, offset), the parameters, how to detect the last page, and a worked loop that fetches all of it.
- **Rate limits** — the actual numbers per tier, the headers that report remaining quota, and the correct back-off behaviour. Vague limits ("reasonable use") are worse than none.
- **Webhooks and other callbacks**, where they exist — the event list, the payload for each, signature verification, retry and ordering behaviour, and how to test one locally.
- **Versioning and deprecation** — how versions are selected, what constitutes a breaking change, the notice period, and where deprecations are announced. Mark a deprecated endpoint at the top of its own entry with the removal date and the replacement.
- **Changelog** — what changed in the API and when. This is the page integrators subscribe to.

## Idempotency, side effects, and other surprises

The things that cost a developer a night are rarely in the parameter table. Say them plainly, at the endpoint:

- Whether a retry is safe, and whether an idempotency key is supported.
- Whether the write is immediately readable, or eventually consistent.
- What else the call changes — a counter, a related resource, a notification sent, a webhook fired.
- Whether the operation is reversible, and if not, say so **at that endpoint**, not in a general note.
- Any state the resource must be in for the call to succeed, and the error when it isn't.

## Code samples

- **Match the languages to the audience**, and keep every language at parity — a sample missing in one language reads as an unsupported language.
- **Samples are complete and runnable**, with placeholders limited to credentials and ids that are obviously the reader's own.
- **Generated multi-language samples** from a spec are fine as a baseline, but check that the generated call actually works; generators produce plausible code, not correct code.
- The craft of selecting, testing and maintaining these lives in `code-samples`.

## Keeping the reference honest

- **The reference ships with the change.** An endpoint documented a release late is an endpoint that got reverse-engineered by a customer first.
- **Diff the spec, not the pages.** When the API is specified, comparing spec versions finds what changed far faster than rereading the docs.
- **Work one resource group at a time** when auditing — read the current definitions fresh each pass, compare against the published entries, list every discrepancy before fixing any, and confirm the list with whoever owns the API.
- **Watch for the common defects:** an endpoint that accepts a parameter nobody documented; a documented parameter that no longer exists; a success status that changed; a response field added, renamed, or removed; a default that moved; an error that's now returned and isn't in the table; an endpoint added to the API and never to the docs.

## Boundaries

- **Generating the spec from code** — route registries, schema annotations, spec-build tooling, and keeping generated output in sync with handlers — is an engineering job, not this skill's. This skill covers what the documentation says, including the prose inside a spec someone else generates.
- The house voice rules — sentences, claims, prose before code, concrete over vague → [`writing-standards`'s house-voice.md](../writing-standards/references/house-voice.md).
- Which quadrant a surrounding page belongs to, and the general writing discipline → `writing-standards`. Reference is one quadrant; the quickstart and integration guides around it are others.
- Docs-site page mechanics — navigation, placement, link integrity, next-steps footers → `developer-docs`.
- Locating a schema, handler or default in the source → `codebase-research`. Getting unverifiable behaviour out of the engineer who wrote it → `sme-interviews`.
- Announcing an API change to the people who integrate against it → `release-notes`.
- Sweeping an existing reference for drift against the code → `docs-audit`.
