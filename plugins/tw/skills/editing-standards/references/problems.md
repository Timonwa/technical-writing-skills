# Common documentation problems, and a before-and-after edit

The problems an edit of documentation meets most, each with its fix, and one edit worked end to end. Read it with the five levels in [SKILL.md](../SKILL.md).

## Common problems

- **Buried answer** — the page opens with background and answers the question in paragraph four. Move the answer to the first line.
- **Undefined term on first use** — introduced in the middle, used from the start. Define it where it first appears, then use exactly that term.
- **Content duplicated from elsewhere** — cut it and link the canonical source; two copies drift.
- **Curse of knowledge** — a draft from an engineer that skips the step they stopped noticing years ago. Find the leap by following the instructions literally, on a clean setup.
- **Untested code block** — placeholder values mixed with real ones, an import missing, output that doesn't match. Run it.
- **Instructions in the passive** — "the configuration file should be edited". Say who does what: "Edit `config.yaml`".
- **Wall of prose where a table belongs** — parameters, options or error codes in paragraphs. Table them.
- **Step that isn't a step** — a numbered item that's an explanation. Move it out of the sequence or turn it into an action.
- **Two actions in one step** — "Open the file and add the key". Split them.
- **Orphaned warning** — a caution about an irreversible action sitting three paragraphs from the action. Move it to the step.
- **Mixed types** — a how-to that teaches basics. Link the tutorial instead.
- **Directional references** — "the button below", "as shown above". Name the thing.
- **Stale screenshot or version** — the UI moved, the version bumped. Flag it; don't quietly describe what the image no longer shows.
- **Planned feature written as shipped** — a roadmap item on a docs page. Remove it: it reads as a feature the reader can use today.

## Before and after

A how-to step as drafted:

```markdown
### Key rotation

It's worth noting that keys should be rotated regularly. Simply go to the settings page below and the rotate button can be clicked, which will generate a new key and the old key will be invalidated after 24 hours.
```

Edited:

```markdown
### Rotate an API key

Rotate a key when it may have leaked, or on your regular schedule. The old key keeps working for 24 hours, so deployed clients don't break.

1. On the **Settings** page, select **API keys**.
2. Next to the key, select **Rotate**.
3. Copy the new key and store it in your secret manager. It isn't shown again.
```

What changed and why: a task heading with a bare infinitive; the goal and the 24-hour window first; "it's worth noting" and "simply" cut; the passive turned into imperatives; one action per step, location before the action; "below" replaced by the name of the page; bold for the interface labels only.
