# Questions that surface what an expert knows

Pick the sets the page needs; put the blocking questions first. Each set is written to surface what the expert has stopped noticing.

## Purpose and scope

- What problem does this solve, and for whom? What did people do before it?
- Who is it not for? What does it deliberately not do?
- What's the shortest path from nothing to it working?

## The things readers get wrong

- What do people get wrong about this? What have you had to explain more than once?
- What would you tell a new teammate on their first day with it that isn't written down anywhere?
- If someone skims the docs and starts using it, where do they hurt themselves?
- What's the mistake that's expensive to recover from?

## Behaviour and limits

- What happens when it fails? What does the reader see, and what should they do?
- What are the real limits — sizes, rates, timeouts, quantities — and what happens at them?
- What's slower, or different, than someone would assume?
- Is anything here irreversible?
- What does this depend on, and what breaks if that's unavailable?

## Reality checks

- What's the difference between how this is supposed to work and how it works today?
- What's changing soon enough that I shouldn't document it as permanent?
- Who else needs to check this before it's published?

## An example list sent ahead

> **Example — a question list sent ahead.** Draft attached: "Rotating an API key". Three questions block publishing; the rest can wait.
>
> **Blocking:** (1) When a key is rotated, does the old key stop working immediately, or after a grace period — how long, and where is it set? (2) What does a request with a revoked key return — 401 or 403 — and is the error code in the body stable? (3) Can a rotation be undone?
>
> **Nice to have:** (4) Is there a limit on how many active keys an account can hold?
>
> It publishes Thursday; if I haven't heard by Wednesday, the grace period goes in marked "unverified".
