# Structures by reader intent

What each kind of piece contains and in what order. The publication's profile supplies the section names, the wording and the voice; this file supplies the skeleton. Where they meet, the profile wins.

Every structure below assumes the same two things from [../SKILL.md](../SKILL.md): the conclusion comes first, and the reader is scanning.

## Do a task

A tutorial, a recipe, a setup guide, a training plan. The reader is following along, often with one hand, and will abandon at the first step that doesn't work.

1. **What they'll end up with**, and how long it takes. A photo or demo of the finished result belongs here — it's what decides whether they start.
2. **What they need first.** Ingredients, tools, accounts, prior knowledge, prerequisites. Everything, before step one, so nobody discovers a missing requirement halfway through. Flag anything that commonly catches people out — a default that's wrong for most readers, a step with a waiting period, a cost.
3. **The steps, in order.** One action per step. Each says what to do, then what the reader should observe before continuing. Where something takes time or can be done ahead, say so at that step rather than in a note further down.
4. **Where it goes wrong.** The failures people actually hit, each with what it looks like and how to recover. This is the most-read section of any task piece and the most often missing.
5. **What to do next** — variations, extensions, how to store or maintain the result, the piece that follows this one.

## Understand

An explainer, a concept piece, a "why this works". No project, no procedure. The test is whether the reader can explain it to someone else afterwards.

1. **The definition**, in one paragraph of plain language — and where a common confusion exists, what it is _not_.
2. **Why it matters to this reader**, in their terms.
3. **One section per component, type or idea.** Each opens with a one-sentence definition, says when it applies and when it doesn't, and names the trade-off. Examples are illustrative and short.
4. **How to choose or apply it**, where the reader has a decision to make. Close on the principle behind the choice rather than a recommendation.
5. **A short summary** of what they now understand that they didn't — not a recap of every section.

## Decide

A review, a comparison, a buyer's guide. The reader will act on this and possibly spend money, so the burden of evidence is higher than anywhere else.

1. **The verdict, up front.** What you'd pick and for whom. Burying it wastes the scan.
2. **How you tested** — what you used, for how long, under what conditions, and what you couldn't test. A comparison with no method is an opinion with a table.
3. **The criteria**, chosen before the options and applied identically to each.
4. **Option by option**, or criterion by criterion — consistently, never mixed. Strengths and weaknesses for each; an option with no downsides signals a review that wasn't done.
5. **Who each option is right for**, since "best" depends on the reader.
6. **Disclosure** of anything that could bias the verdict, placed where it's seen before the verdict is read.

## Keep current

A news post, a roundup, a release write-up. The reader is deciding whether this affects them, in seconds.

1. **What changed**, in one sentence.
2. **Whether they need to act**, and by when. This is the whole reason they opened it.
3. **The detail**, in descending order of consequence.
4. **Links to the primary sources** — the announcement, the changelog, the paper — so a reader can verify rather than take your word.

## Share a lived experience

A case study, a retrospective, an essay, a teardown. The value is entirely in what actually happened, so specificity is the whole job.

1. **The situation** — what you set out to do and under what constraints.
2. **What you expected**, briefly, because the gap is the story.
3. **What happened**, with real numbers, real timings and real costs. Include the parts that didn't work; a retrospective where everything went to plan teaches nothing and reads as marketing.
4. **What you'd do differently**, concretely enough that a reader can apply it.
5. **What generalizes and what doesn't.** Naming the limits of your own experience is what separates a case study from an anecdote.

## Where code appears

For publications that publish code. The profile owns comment style, placeholders and how much goes in a block; `write:code-samples` owns correctness and safety. These hold regardless:

- Every fence names its language, the same way throughout.
- Show code incrementally when it has distinct pieces to explain.
- Explanation goes after the block in prose, not smuggled into comments.
- Output shown is output that was produced.
- Anything touching credentials, permissions or money models the safe practice, because readers copy before they read.

## Structural checklist

- [ ] One intent, not two.
- [ ] The conclusion or verdict appears before the detail.
- [ ] Prerequisites are complete and sit before step one.
- [ ] Each step states what the reader should observe.
- [ ] The failure cases are present.
- [ ] Sources are linked for anything not first-hand.
- [ ] The closing section does a job beyond restating the piece.
