---
name: content-research
description: >-
  Researching a content piece — an article, tutorial, essay or newsletter issue — before and while writing it: finding primary sources, judging who made them and how, tracing every figure and quote to its origin, the statistics traps that overstate a finding, checking AI-supplied facts and citations, keeping a source log, and citing in the piece. Use on "research this topic", "find sources for", "fact-check this", "is this stat right", "verify this claim", "where does this number come from", "check these citations".
---

# Content research

A piece is only as true as the sources under it. Research finds the original behind every claim, judges whether it can carry the claim, and leaves a record so anyone — the editor, a reader, you in six months — can follow each fact back to where it came from.

## Voice and audience come from the writing's own guide

Before researching, find the publication's `profile.md` and `writing-guide.md` and read them:

- **In a codebase:** the folder the project's `AGENTS.md` names, or, for a guide kept outside the repo, the folder the user's personal agent instructions name (such as `~/.claude/CLAUDE.md`); otherwise the project's `publications/` folder.
- **In a chat app:** the project's files (a Claude Project's knowledge, or the equivalent elsewhere), or files attached to the conversation.
- **Otherwise:** ask for them.

Voice, person, tone, terminology, formatting choices and who the reader is come from that guide, never from this skill.

- Where the guide settles something this skill also covers — how sources are cited, which sources the publication won't use, its AI-use policy — the guide wins.
- Where there's no guide, ask who the reader is and what the piece is for, and offer to build one with `cw:style-guide`.

When a guide changes: in a codebase, save the file where it was found; in a chat app, give the user the updated file to replace in the project. Never write inside the installed plugin.

## Ask first

Read the answers from the topic's `brief.md` and the publication's `writing-guide.md` first; ask only what's missing. Ask with the app's question tool where it has one, so the choices can be picked; otherwise as a numbered list answered by number. Offer choices where the answers are known and a short typed answer otherwise; where the guide has a default, show it and ask whether to use it. Record each answer in the `brief.md` field it belongs to — the **What this topic becomes** table or a row of **The brief** — and an answer with no field under **Notes for whoever picks it up next**, so the next skill doesn't ask again.

1. **Which topic folder is the research for?** The folder name under `topics/`, or "new" — a new topic is briefed first with `cw:content-planning`.
2. **Is this research before writing, or a fact-check of written work?** research before writing · fact-check of `blog.md`, `newsletter.md` or `social.md`.
3. **Which claims must the piece establish?** Short answer, one sentence per claim. Default: the brief's outline.
4. **Which sources are already in hand?** Short answer: links or titles. Default: the brief's sources to check.
5. **What do you already believe the answer is?** Short answer, so the search looks as hard for evidence against it.
6. **How are sources cited?** inline links · footnotes · a sources list at the end. Default: the writing guide's citation style.
7. **Who could be interviewed if the written record runs out?** Short answer: names or roles, or none. Default: the brief's people to interview.

## Work in the topic folder

Each topic has its own folder in the publication's `topics/` (`topics/2026-11-remote-work-figures/`), made when it's briefed (`cw:content-planning`). Research writes one file there, `sources.md`, which serves every format the topic becomes — the blog post, the newsletter issue, the social posts.

- **Research doesn't claim the topic.** It edits no format file, so it runs even while someone holds the topic and never sets **Held by**. It only adds or updates rows in `sources.md`, never removes another's; a fact-check's findings on `blog.md`, `newsletter.md` or `social.md` go to whoever holds the topic, or under **Notes for whoever picks it up next** in `brief.md`.
- **In a chat app**, the file is `<topic folder>--sources.md`; hand back only that file.

## Start from the question

- **Write down what the piece has to establish** — the claims it will make, each as one sentence. Research is finding the evidence for those, not collecting everything on the topic.
- **Note what you already believe** about the answer, so you look as hard for evidence against it as for it.
- **Decide what kind of evidence each claim needs**: a figure needs data, a "how it works" needs the documentation or the expert, a "this happened" needs a record or a witness, an opinion needs to be labelled as one.

## Find the original

Use original sources whenever possible ([SPJ Code of Ethics](https://www.spj.org/spj-code-of-ethics/)). The original is the closest thing to the fact itself:

| Claim                      | The original                                           | Not the original                                      |
| -------------------------- | ------------------------------------------------------ | ----------------------------------------------------- |
| A research finding         | the paper, with its methods and data                   | the press release, the news story, the summary        |
| A statistic                | the dataset or the agency's own report and table       | a chart someone shared, a figure quoted in a listicle |
| How a product or law works | the official documentation, the legal text             | a tutorial or explainer about it                      |
| What someone said          | the recording, transcript or their own published words | a quote in someone else's article                     |
| An event                   | the record, the filing, a witness you spoke to         | a recap                                               |

- **Follow every link to the end.** A source that cites a source isn't the source; read the one it cites, and check it says what the first one claims.
- **Read laterally.** Before relying on an unfamiliar site or author, leave the page and see what others say about it — the "investigate the source" and "find better coverage" moves of [SIFT](https://hapgood.us/2019/06/19/sift-the-four-moves/).
- **When the original can't be found, say so** in your notes, and either drop the claim or attribute it to where you did find it ("according to…"), never state it as established.
- **A person is a source too.** When the written record runs out, or a claim needs an expert's judgement, interview → `cw:sme-interviews`.
- **Tools that reach originals** (common practice): [Google Scholar](https://scholar.google.com) for papers and its "Cited by" list for what came after; the statistics portal of the agency that collects the figure; searches restricted with `site:` to an official domain and `filetype:pdf` for reports.

## Judge the source

For each source a claim rests on, answer:

- **Who made it, and why** — expertise, the organisation behind it, what it sells or advocates, who funded it. A study paid for by the company whose product it praises isn't disqualified, but the reader needs to know.
- **When** — the date it was published and the date its data covers. Check it's still current for this claim; a 2019 price is a history fact, not today's.
- **How** — the method, the sample size, who was included and left out, whether it was peer-reviewed. A preprint hasn't been reviewed yet; say so if you use one.
- **Whether it still stands** — check a research paper hasn't been retracted or corrected: search its DOI or title in the [Retraction Watch Database](https://retractionwatch.com/retraction-watch-database-user-guide/) and on the journal's page.
- **Whether others agree** — one study is a finding; a body of research is a consensus. Look for reviews or the field's own summary before presenting one result as settled.

The CRAAP checklist — currency, relevance, authority, accuracy, purpose — from [Meriam Library, CSU Chico](https://library.csuchico.edu/sites/default/files/craap-test.pdf) is a useful prompt list for the same questions.

## Figures and statistics

- **Trace every number to its table.** Check the figure, its unit, its date, the population it describes and the exact wording of what was measured. A number that has travelled through three articles is often a different number by the end.
- **Certainty matches the evidence** (`write:writing-standards`). One observational study "suggests" or "is linked to"; only strong, repeated evidence "shows". Press releases overstate causal claims often enough to check every one against the study itself ([Sumner et al., BMJ 2014](https://www.bmj.com/content/349/bmj.g7015)).
- **The usual traps**, each worth a second look before it goes in:
  - correlation presented as cause;
  - a relative change with no baseline ("doubles the risk" — from 1 in a million to 2);
  - a percentage of an unstated or tiny base;
  - a cherry-picked start or end date that makes a trend;
  - averages hiding a skewed distribution (median versus mean);
  - only the survivors counted — the successful companies, the finished projects;
  - a survey of a self-selected or unrepresentative group.
- **Do the arithmetic yourself.** If the piece says "30% more", work it out from the original figures; mismatches between a headline number and the body are the most common factual error.

## Quotes

- **Take the exact words from the original** — the recording, the transcript, the person's own post — with enough context to know they mean what the piece will use them for.
- **A quote found in another article** is checked against its original, or attributed to where you found it.
- **Never** stitch remarks together, change a word inside quotation marks, or quote a paraphrase. Editing conventions for quotes come from the guide (`cw:sme-interviews`).

## AI-assisted research

AI tools are a starting point for finding leads, never a source:

- **Verify every fact, figure, quote and citation an AI supplies against the original.** Invented citations — papers, studies, quotes and links that don't exist, or don't say what's claimed — are a known failure ([Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing)). Open the link, find the passage, confirm the wording.
- **Don't cite the AI** as the source of a fact; cite the original you confirmed.
- **Follow the publication's AI-use policy** on what readers are told (`cw:style-guide`).

## Keep a source log

Record sources as you go, not at the end — in the topic's `sources.md`, by its [template](../style-guide/references/publication-template/topics/_template/sources.md). It has two tables, the way fact-checkers keep them: each source listed once, and each claim checked one by one in the order it appears. Every column stays, with a cell left empty until it's known.

| ID  | Title                            | Who made it | Type    | Link              | Archived link | Published  | Checked    | Notes                |
| --- | -------------------------------- | ----------- | ------- | ----------------- | ------------- | ---------- | ---------- | -------------------- |
| S1  | Labour Market Report Q2, table 4 | Agency X    | primary | the report's link | its archive   | 2026-08-01 | 2026-11-12 | full-time roles only |

| Claim                                    | Where                   | Source | Status   |
| ---------------------------------------- | ----------------------- | ------ | -------- |
| Remote roles fell 18% year on year in Q2 | `blog.md › The numbers` | S1     | verified |

- **Every claim in the topic's files** — `blog.md`, `newsletter.md`, `social.md` — **gets a row under Claims**, with where it sits; a claim that appears in two files gets a row for each. A claim with no row gets one or comes out, and nothing ships while a claim it keeps is `unverified`.
- **A source is listed once**, however many claims it backs, and a caveat the piece must carry goes in its Notes.
- **An interview is a source** of type `interview`, linking to its notes in `interviews/` (`cw:sme-interviews`). **A figure an AI supplied** is listed by the original you found and checked, never by the AI.
- **Archive every web source you cite** with the Wayback Machine's [Save Page Now](https://web.archive.org/save) and put it in the Archived link column; pages move and change, and the archive shows what the source said when you checked it (common practice).
- **Keep it after publishing** — it's what a correction, a reader's challenge or a refresh (`cw:content-refresh`) starts from.

## Cite in the piece

- **Link to the original**, at the claim, with anchor text that says what it is ("the agency's Q2 report", not "here").
- **Name the source in the sentence** when the reader needs to judge it ("a study funded by the manufacturer found…").
- **Attribution format, footnotes versus inline links, and how studies are named** come from the guide.
- **Let readers check your work** — the more surprising the claim, the closer the link sits to it. Fact-checkers hold the same standard: readers should "be able to verify findings themselves" ([IFCN Code of Principles](https://www.ifcncodeofprinciples.poynter.org/the-commitments)).

## Images and data you didn't create

Charts, photos, screenshots and datasets carry rights and credits of their own → `cw:images-and-diagrams`.

## Before you start writing

- [ ] Every claim the piece will make is written down, with the evidence it needs.
- [ ] Each claim rests on an original source, or is attributed to where it was found.
- [ ] Every source is judged: who, when, how, whether it still stands, whether others agree.
- [ ] Every figure is traced to its table and the arithmetic redone.
- [ ] Every quote is checked against its original.
- [ ] Nothing AI-supplied is used without the original confirmed.
- [ ] The source log is complete and saved as the topic's `sources.md`, one row per claim.

## Boundaries

- **Interviewing a person** → `cw:sme-interviews`.
- **Shaping the piece from the research** → `cw:article-standards`; **certainty and claims in the prose** → `write:writing-standards`.
- **Checking a finished draft's facts** as part of a review → `/cw:review`.
- **Finding facts inside a codebase** for documentation → `tw:codebase-research`.
