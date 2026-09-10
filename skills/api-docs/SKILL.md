---
name: api-docs
description: >-
  Generates and maintains an OpenAPI/Swagger API reference from a route registry rather than hand-writing per endpoint — the registry pattern (a registry.ts of route registrations plus an openapi.ts spec config), registering method, auth, status, params and response schemas from the handler's real behavior, operation summaries and descriptions, file-upload schemas, and the group-by-group drift audit. Use on "OpenAPI", "Swagger", "API docs", "API reference", "update the registry".
---

# API docs (OpenAPI registry)

The API reference is generated from a registry module, never hand-written per endpoint. The registry entry ships in the same change as the route, and every entry mirrors what the handler _actually_ does — the handler is the source of truth, the registry its faithful projection.

This skill governs the registry → OpenAPI spec layer, not any particular viewer — the resulting spec renders identically in Swagger UI, Scalar, Postman, ReDoc, or Stoplight; swapping the display tool never changes how a route is registered.

## The registry pattern

- **Two modules own the spec** — a registrations module (`registry.ts` — every route's `registerRoute()` entry; the file you edit) and a spec-config module (`openapi.ts` — info, servers, tags). These names are the pattern, not a mandate: find the project's equivalents via its `AGENTS.md` or the docs-serving route.
- **Schemas come from the code, not the docs** — register the exact Zod schema the handler validates with, imported from the shared schemas package. Inline `z.object({ id: z.string() })` is acceptable only for trivial path params with no named schema.
- **One tag entry per group, one sentence each** — say who uses the group and what it covers. Never list endpoints in a tag description; the list goes stale.
- **Client-side flows get tag prose, not fake routes** — a flow with no backend endpoint (OAuth sign-in, magic link) is documented in its tag description, naming the endpoints the client calls after the client-side part completes.

## Registering a route

- **Read the handler first, then register what it does** — all exported methods (one file can export both `POST` and `DELETE` — register each), the schemas used for body/query/params, whether any auth/permission helper is called, and the response shape and success status.
- **Auth flag mirrors the handler** — any auth/permission helper call means the entry is marked authenticated (even when unverified users are allowed); no auth call means the flag is omitted. Never guess from the URL.
- **Success status by semantics** — POST that creates a resource → `201`; POST that performs an action → `200`; DELETE returning a body → `200`, returning none → `204`.
- **Every parameter is registered, never described in prose** — path params, query string, and JSON body each go in their dedicated field with a schema; file uploads use the body field plus a `multipart/form-data` content type.
- **Always provide a response schema when the endpoint returns data** — it types the success envelope's `data`; omitting it publishes `unknown`. Omit it only for `204` no-body responses.
- **Standard errors are derived, not restated** — a well-built registry auto-adds the standard set from the entry itself (400 with any input schema, 401/403 with auth, 404 with path params, plus rate-limit and server errors). Register only endpoint-specific errors in the dedicated `additionalErrors` field — never as prose in the description.
- **File uploads need one shared binary field** — `z.instanceof(File)` can't be introspected by the Zod-to-OpenAPI generator (e.g. `@asteasolutions/zod-to-openapi`, or the project's equivalent), so define a single binary-string field constant at the top of the registry and extend each upload schema with it; never define it twice.

## Descriptions

Every endpoint gets both a `summary` and a `description` — short, direct, one or two sentences, written for the developer consuming the API.

- **Include** — what it returns or does, action verb first ("Returns …", "Creates …", "Sends …"); non-obvious edge cases (conflicts, terminal state transitions); caller-relevant behavior not obvious from the params.
- **Exclude** — anything the entry already encodes ("rate-limited", "no auth required", "partial update"); error conditions (→ `additionalErrors`); parameter descriptions (→ the param schemas); internal permission strings; backend implementation details (which database, counters, transactions); schema names and cross-references; frontend cache instructions; "stub — pending" notes beyond a temporary flag.

> ❌ "Cursor-paginated public items list used by the discover-page rails. Server-enforced filters — `discoverable` AND `status live`. See `PublicItemsQuerySchema`. Rate-limited."
>
> ✓ "Cursor-paginated list of live, publicly discoverable items."

## Example

A full entry that obeys every rule above (neutral vocabulary — swap in the project's real schemas):

```ts
import { CreateItemSchema, ItemSchema } from "@acme/schemas";

registerRoute({
  method: "post",
  path: "/v1/projects/{projectId}/items",
  tags: ["Items"],
  summary: "Create an item",
  description: "Creates an item in the given project.",
  auth: true, // handler calls getUserFromRequest
  successStatus: 201, // POST that creates a resource
  pathParams: z.object({ projectId: z.string() }), // trivial — no named schema exists
  requestBody: CreateItemSchema, // the same schema the handler validates with
  responseSchema: ItemSchema,
  additionalErrors: { 402: "Item quota exceeded for the project's plan." }, // endpoint-specific only
});
```

## Common mistakes — check these when touching the registry

1. A route file exports multiple methods on one path but only one is registered.
2. A POST action registered as `201` instead of `200` (or vice versa).
3. The handler parses query params / a request body / `[param]` path segments, but the matching registry field is missing.
4. Missing response schema — the endpoint returns data but the spec types it `unknown`.
5. The registry uses a different schema than the handler validates with.
6. The auth flag missing on a protected route, or present on a public one.
7. Error conditions or parameter details written as description prose instead of registered fields.
8. Internal permission strings or implementation details leaking into descriptions.
9. Descriptions referencing stale or not-yet-shipped behavior.

## Auditing the registry for drift

- **One tag group at a time**, reading the tag list fresh from the spec config each run — never from a cached list.
- **Process groups in consumer order** — public unauthenticated routes, then authenticated user flows, then elevated-role routes (whatever the project calls them — manager, moderator, owner), then admin routes, then infrastructure (webhooks, cron, dev). Within a tier, order by resource domain.
- **Per group** — read the actual route files, read the matching registry entries, report every discrepancy (using the mistakes list above), wait for approval, fix, run the project's type check (the API package's, in a monorepo), then move to the next group.

## Boundaries

- Sweeping docs pages and READMEs for staleness → `docs-audit`.
- Prose-writing craft for reference docs → `writing-standards`.
