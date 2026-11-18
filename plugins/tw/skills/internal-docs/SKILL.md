---
name: internal-docs
description: >-
  Documentation written for colleagues rather than customers — runbooks and operational procedures, SOPs and process docs, onboarding, internal reference and policy pages, and decision records. Covers why internal docs fail (no owner, no review date, undiscoverable, quietly wrong), the skeleton for each type, confidentiality rules, and retiring content. Use on "runbook", "SOP", "process doc", "internal wiki", "onboarding doc", "knowledge base", "decision record".
---

# Internal documentation

Documentation for colleagues rather than customers. The writing discipline is the same; four things about the situation are different, and they decide almost everything:

- **The reader can ask someone instead.** Internal docs compete with a message to a colleague, and lose unless they're faster. A doc that's slower to use than asking will not be used.
- **Nobody is accountable by default.** Customer docs have an owner because they're a product surface. Internal docs are written by whoever was closest and then belong to no one.
- **Wrong is worse than missing.** A stale customer doc produces a support ticket. A stale runbook produces an incident, and a stale process doc produces work done incorrectly by someone who did exactly what they were told.
- **Confidentiality is a live constraint.** What can be written down, and where, is a real question with real answers.

## Every internal document carries its metadata

This is the difference between a knowledge base and a graveyard. Every document states, where a reader sees it immediately:

- **Owner** — a named role or person accountable for it being right. A team name is acceptable; blank is not.
- **Last reviewed** — the date someone last confirmed it's still true, which is not the date it was last edited.
- **Review cadence** — how often that has to happen, chosen from how fast the underlying thing changes.
- **Status** — current, draft, or superseded, with a link to whatever replaced it.

If your platform supports it, surface the stale ones automatically. If it doesn't, a periodic sweep of last-reviewed dates is the minimum.

## Make it findable

An internal doc that can't be found is worse than none, because the effort was spent and the person still asks.

- **Title it the way someone would search for it under pressure** — the problem or the task, in the words used out loud. "Database failover" beats "Postgres HA procedures v2".
- **One home per topic.** Internal docs sprawl across every tool an organization has bought. Decide where each kind lives and link from everywhere else rather than copying.
- **Link it from where the work happens** — the alert that fires, the ticket template, the repository, the channel topic, the calendar invite. The document has to meet people where they already are.
- **Answer the frequent question once, publicly, then link the answer.** Every time you answer something in a message, that's a signal it belongs in a document.

## The types and their skeletons

### Runbook — an operational procedure

Written for someone who is not the expert, executing under pressure, possibly at night. Prose is a defect in a runbook.

- **When to use this runbook** — the symptom or trigger, stated as the reader sees it.
- **Before you start** — the access, credentials, tools and permissions needed, each checkable. Someone discovering mid-incident that they lack access is the most common runbook failure.
- **Numbered steps**, one action each, with the exact command or click, and **what you should see after it** so the reader knows whether to continue.
- **Decision points** as explicit branches: "if X, go to step 7; otherwise continue."
- **How to verify it worked**, concretely.
- **How to roll back**, or the statement that you can't.
- **When to escalate, and to whom** — a role and a channel, not a person who may have left.
- **Known failure modes** and what each means.

### Process doc or SOP — how work gets done

- **What triggers it** and who is responsible for starting it.
- **Who does what** — roles, and where approval is needed.
- **The steps in order**, with what goes in and what comes out of each.
- **Timing** — how long steps take and any deadlines.
- **Exceptions** — the cases this doesn't cover and who decides those.
- **Who to ask** when it doesn't fit.

### Onboarding — getting someone productive

- **Sequenced, not a pile of links.** Day one, first week, first month, with each stage building on the last.
- **Access and accounts first**, as a checklist, because everything is blocked on them.
- **"You're done when…"** for each stage — something observable, like a change shipped or a task completed.
- **Distinguish read-this-now from read-this-eventually.** A new joiner handed forty links reads none.
- **Name the people** — who to ask about what, and who to go to when they don't know who to ask.

### Decision record — why something is the way it is

The document that saves the most future time, and the one most often skipped. It has an established form — the Nygard template, collected with variants at [adr.github.io](https://adr.github.io/) — so follow that rather than inventing one. ISO/IEC/IEEE 42010 suggests a fuller set of items if you need one.

- **A number and a title** — sequential (`0001`, `0002`), so a record can be cited by number and the log reads in decision order.
- **Status** — proposed, accepted, rejected, deprecated, or superseded by a named record. This is the field most often dropped, and without it nobody can tell a decision that was taken from one that was merely considered.
- **Context** — the situation and constraints at the time.
- **The decision**, stated plainly.
- **Consequences** — what this commits to, and what it costs, good and bad.
- **Alternatives considered** and why each was rejected. Nygard folds this into context; keeping it separate is this skill's addition, because the rejected option is the thing someone will propose again.
- **Date and who decided.**

Keep it to one or two pages. A record nobody can read in five minutes doesn't get read at the moment it's needed.

**Decision records are immutable.** When a decision changes, write a new record that supersedes the old one and link them. Editing the original destroys the reason it existed.

### Internal reference and policy

- Structured for lookup, not reading — tables for anything that's a matrix.
- **Complete**, not selective. A reference with gaps sends people back to asking.
- **State the effective date** for anything that changed, and what the previous rule was, so past work can be understood.

## Write it while you're doing it

- **Capture from whoever just did the thing**, while they still remember the step that wasn't obvious. A week later, it's gone.
- **After an incident or a first-time task, write the procedure** — that's the moment the knowledge exists and the moment it's cheapest to record.
- **Have the next person follow it and fix what breaks.** A runbook nobody has executed from the document is a draft. Dry-running procedures on a schedule is the only reliable way to know they still work.
- **A rough document that exists beats a polished one that's planned.** Publish it with gaps marked and improve it in place.

## Confidentiality

Decide the rules once, write them down, and apply them per document:

- **Never put secrets in documentation** — credentials, tokens, keys, connection strings. Reference where they're stored and who grants access. A runbook that contains a password is a security incident waiting for an audit.
- **Classify each document** by who may read it, using whatever levels your organization already has, and make the classification visible.
- **Keep personal and customer data out** — use roles rather than names where the individual isn't the point, and don't paste real customer records into an example. Assume anything written internally may be read more widely than intended.
- **Check before writing down** anything under legal, contractual or regulatory constraint.

## Retire aggressively

- **Delete or archive rather than leaving it to rot.** An internal doc has no external inbound links to protect, so the cost of removal is low and the cost of keeping a wrong one is high.
- **Mark superseded documents clearly** at the top, linking the replacement, rather than deleting where the history matters — decision records especially.
- **When a document fails a review, fix it or retire it in that session.** "Needs updating" written at the top of a page is a note that will be there in two years.
- **Cut length.** Internal docs bloat because everyone adds and nobody removes. A procedure that has grown a paragraph of caveats per incident is due for a rewrite.

## Boundaries

- **Documentation for customers and end users** → `user-guides`. Much of the plain-language discipline is shared; the reader, the confidentiality rules, and the ownership problem are not.
- **Developer documentation for a public or shared technical surface** → `developer-docs` and `api-reference`, even when the audience is internal — an internal API still gets an API reference.
- **A repository's own README and contributor docs** → `readmes`.
- **The voice rules every document obeys** — sentences, claims, prose before code, concrete over vague, formatting, never hard-wrap → [`writing-standards`'s house-voice.md](../writing-standards/references/house-voice.md). This skill adds only what an internal reader and an unowned document need on top.
- **Capturing the knowledge from the person who has it** → `sme-interviews`.
- **Deciding which internal docs are needed and auditing what exists** → `docs-planning`.
- **The tool it lives in** — wiki, drive, repo, knowledge base — is the organization's decision, not this skill's. Every rule here works in any of them.
