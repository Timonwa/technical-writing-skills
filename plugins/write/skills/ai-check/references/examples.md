# AI check — worked examples

Examples for documentation, then for content. Every example gives the flagged passage, why it reads as generated, and the rewrite the report would propose. The writing's own guide still wins: a pattern the guide asks for is left alone and listed under "Deliberate".

## In documentation

**Hollow claim** — Substance

- **Now:** "The SDK significantly improves performance and offers a wide range of configuration options."
- **Why:** two claims with nothing behind them — no number, no list.
- **Proposed:** "The SDK batches requests, which cut median latency from 340 ms to 120 ms in our load test. It takes 14 options, listed in the configuration reference."

**Stock opener and restating summary** — Phrases, Structure

- **Now:** "In today's fast-paced development landscape, authentication is more important than ever. … In summary, by following these steps you'll be well on your way to secure authentication."
- **Why:** an opener that carries no information, and a closer that restates the page and congratulates the reader.
- **Proposed:** open with the task ("Add sign-in with an email link in about ten minutes.") and end on the next step: "Next, protect a route."

**Markdown where prose belongs** — Structure

- **Now:** a three-sentence answer under its own H3, with **bold** on five phrases.
- **Why:** headings and bold doing the work that one clear paragraph would.
- **Proposed:** fold it into the parent section as a paragraph; keep bold only for the interface label the reader clicks.

**Citation that doesn't support the claim** — Substance

- **Now:** "Rotating keys every 30 days is required by the provider's security guide [link]."
- **Why:** the linked guide recommends regular rotation but sets no 30-day requirement.
- **Proposed:** "The provider's security guide recommends rotating keys regularly [link]; this project rotates them every 30 days."

## In content

**Hollow claim** — Substance

- **Now:** "This one change completely transformed my productivity."
- **Why:** a big claim with no specific behind it — what changed, by how much.
- **Proposed:** "Moving email to two fixed slots a day gave me back about an hour each morning. I tracked it for three weeks."

**Rule-of-three cadence and uniform rhythm** — Punctuation rhythm

- **Now:** "The bread was crusty, golden and delicious. The crumb was open, airy and soft. The flavour was deep, tangy and complex."
- **Why:** three triplets in a row, every sentence the same length and shape.
- **Proposed:** "The crust shattered when I cut it. Inside, the crumb was open and soft, and the overnight rise had given it a tang I'd never got from a same-day loaf."

**Opinion piece with no opinion** — Substance

- **Now:** "There are pros and cons to remote work, and ultimately the right choice depends on your situation."
- **Why:** both-sides padding where the piece promised a position.
- **Proposed:** state the writer's position and the reason: "I'd take a team back to an office for its first three months, and here's what changed my mind."

**Vague attribution** — Substance

- **Now:** "Studies show that people who journal are happier."
- **Why:** no study named, so a reader can't check whether any study found anything like "happier".
- **Proposed:** name the study and match its certainty ("[The study] found [what it actually found, at the size it found it] [link]"), or cut the claim.

## Deliberate — what the report leaves alone

- A publication whose guide uses em-dash asides as part of its voice: only mechanical overuse is reported.
- A first-person aside, a joke, or the sign-off a newsletter uses in every issue.
- A docs set whose style guide mandates a fixed page template with an intro and a "Next steps" section: the symmetry is the template, not a tell.
