---
name: sme-interviews
description: >-
  Interviewing a source for content — an expert, founder, chef or researcher an article, feature, profile or newsletter draws on: preparing, ground rules, recording with consent, the questions that work, silence and follow-ups, email interviews, verifying who a source is, vulnerable sources and trauma-aware questions, quoting and attributing accurately, embargoes, right of reply, checking facts back. Use on "interview a source", "interview an expert for my article", "quote someone", "on the record".
---

# Interviewing sources for content

Most errors in an article start as a gap the writer filled in rather than a question the writer asked. The craft is getting what a source knows — including what they've stopped noticing they know — onto the page accurately, fairly and attributed, without spending more of their time than the piece is worth. A source is often quoted by name and their experience and opinions are part of the material, so the result has to be true, fair and theirs.

## Voice and audience come from the writing's own guide

Before interviewing, find the publication's `profile.md` and `writing-guide.md` and read them:

- **In a codebase:** the folder the project's `AGENTS.md` names, or, for a guide kept outside the repo, the folder the user's personal agent instructions name (such as `~/.claude/CLAUDE.md`); otherwise the project's `publications/` folder.
- **In a chat app:** the project's files (a Claude Project's knowledge, or the equivalent elsewhere), or files attached to the conversation.
- **Otherwise:** ask for them.

Its policies on sources come first — whether anonymous sources are used, whether a source may see a draft, how people are named and quotes are edited.

- Where the guide settles something this skill also covers, the guide wins.
- Where there's no guide, ask who the reader is and what the piece is for, and offer to build one with `cw:style-guide`.

When a guide changes: in a codebase, save the file where it was found; in a chat app, give the user the updated file to replace in the project. Never write inside the installed plugin.

## Ask first

Read the answers from the topic's `brief.md` and the publication's `writing-guide.md` first; ask only what's missing. Ask with the app's question tool where it has one, so the choices can be picked; otherwise as a numbered list answered by number. Offer choices where the answers are known and a short typed answer otherwise; where the guide has a default, show it and ask whether to use it. Record each answer in the `brief.md` field it belongs to — the **What this topic becomes** table or a row of **The brief** — and an answer with no field under **Notes for whoever picks it up next**, so the next skill doesn't ask again.

1. **Which topic folder is the interview for?** The folder name under `topics/`, or "new" — a new topic is briefed first with `cw:content-planning`.
2. **Who is the source, and what standing does the piece lean on?** Short answer: name, role, organisation. Default: the brief's people to interview.
3. **What does the piece need from them?** a feature or story · a profile · an opinion or argument · evidence for a claim.
4. **Which claims or questions must the interview settle?** Short answer, the must-asks. Default: the brief's outline.
5. **How will it happen?** call · video · in person · email.
6. **May the source see a draft or approve quotes?** no · facts only · quotes only. Default: the writing guide's policy.
7. **Is the source a minor, a crime victim, or someone not used to being quoted?** no · yes (who).

## Work in the topic folder

Each topic has its own folder in the publication's `topics/`, made when it's briefed (`cw:content-planning`); interviews go in its `interviews/` folder, one notes file per interview, named `<yyyy-mm-dd>-<name>.md` (`interviews/2026-12-03-ada-okafor.md`) and filled from the [interview notes template](references/interview-notes.md).

- **An interview doesn't claim the topic.** It edits no format file, so it runs even while someone holds the topic and never sets **Held by**; it writes only its own notes file.
- **In a chat app**, the file is `<topic folder>--interview-<yyyy-mm-dd>-<name>.md`; hand back only that file.

## Prepare from what already exists

Arriving unprepared converts a source into a search engine, and it's the fastest way to lose access to one.

- **Read their published work** — articles, posts, books, papers, talks, earlier interviews — so you don't spend their time on what they've already said.
- **Read the data or research they're known for in the original**, not someone's summary of it, and **what others say** about them or the subject, including people who disagree.
- **Use the thing** — the restaurant, the product, the recipe, the route. Ten minutes of hands-on turns half your questions into better ones.
- **Arrive with an outline or a draft**, and **write the questions down**, marked as must-ask or nice-to-have, so a short call still gets what the piece needs.
- **Ask for the artifact** where one exists — the study, the dataset, the menu, the document.

## Verify who they are

- **Confirm a source is who they say they are** before quoting them, especially someone found online: an organisation's own directory, a published profile, a call to a listed number, a second person who knows them. An impostor quoted as an expert is a correction waiting to happen.
- **Confirm the credential the piece leans on** — the title, the qualification, the employer — rather than repeating how they described themselves.
- **Ask about conflicts of interest** — who pays them, what they sell, what they stand to gain from the piece. A source with a stake is still a source; the reader is told the stake.

## Agree the ground rules first

Settle how the conversation can be used before it starts, in plain words, and write down what was agreed.

- **Say what it's for** — the piece, where it will appear, who reads it, and roughly when.
- **Agree the terms in plain words, not jargon.** The Associated Press's guidance notes that not everyone understands "off the record" or "on background" to mean the same things — so say what each means here: quoted by name, described without a name, or not used at all. Unless something else is agreed, the conversation is on the record.
- **Agree how they'll be identified** — name, role, organisation — so readers can judge the source's reliability and motives ([SPJ Code of Ethics](https://www.spj.org/spj-code-of-ethics/)).
- **Anonymity is the exception.** The SPJ code, revised in October 2026, reserves anonymity or confidentiality "as a last resort for sources with information of substantial public interest who may face danger, retribution or other harm", and the reader is told why. A publication's own policy can be stricter, and wins.
- **Recording needs consent**, said on the recording. About 11 US states — among them California, Florida, Illinois, Pennsylvania and Washington — require every party's consent, and a call across state lines may fall under the stricter law, so ask every time ([RCFP](https://www.rcfp.org/introduction-to-reporters-recording-guide/)). Other countries set their own rules.
- **Don't pay for the interview or the information.** The SPJ code, revised in October 2026, says: "Do not pay sources in exchange for interviews or information" ([SPJ](https://www.spj.org/spj-code-of-ethics/)). Expenses a publication's own policy allows, such as a contributor's fee for a commissioned piece they write, are a different thing — follow the policy, and disclose it where it says to.
- **Embargoes.** Information given under embargo — a study, a launch, an announcement — isn't published before the agreed date and time. Record the embargo when you receive it, and don't agree to one the publication's policy doesn't allow.

### Vulnerable sources and trauma

- **Use heightened sensitivity** with crime victims (especially victims of sex crimes), juveniles, and sources who are inexperienced or unable to give consent — the SPJ code's 2026 wording.
- **Minors**: a parent's or guardian's consent as well as the child's, and the publication's policy on naming and photographing them.
- **Trauma-aware questions.** Survivors consistently name "How do you feel?" as the most distressing question; ask "How are you now?" or "What do you think about…?" instead. Let them set limits, tell them they needn't answer, don't press for detail that serves the story rather than the reader, and tell them at the end how the interview will be used ([Dart Center guidance, via The Journalist's Resource](https://journalistsresource.org/home/trauma-informed-journalism-explainer/)).
- **Someone who isn't used to being quoted** gets the ground rules explained twice, and a chance to ask what they mean.

## Running the interview

- **Timebox it and say the box aloud**, one topic per session. As working lengths (common practice): about 20–30 minutes for an expert's input on a piece, 30–60 minutes for a feature or a profile.
- **Open questions, not leading ones.** "What happened when the first restaurant closed?" rather than "That must have been hard, right?" — a leading question gets agreement, not information.
- **Let silence work.** After an answer, wait a beat before the next question; people often add the most candid thing into a pause.
- **Chase the vague answer** — "it depends", "a lot of people", "usually" — and **ask for the number** and where it comes from.
- **Ask for a specific time** — "Tell me about a day this went wrong" — because a scene is worth more on the page than a summary.
- **Don't interrupt a good thread** for a small question; note it and come back.
- **Read your understanding back** — restating is where most misunderstandings are caught.
- **Close with "What didn't I ask that I should have?"** and "Who else should I talk to?" — and tell them how the material will be used and when the piece will run.

The question sets that work for a feature, a profile and an opinion piece are in [references/questions.md](references/questions.md).

### Email and written interviews

- **Answers come back polished**, sometimes drafted by someone else, and you can't follow up in the moment. Prefer a call for anything that depends on how someone thinks; use email for facts and for sources who can only answer that way.
- **Say so in the piece** — "said in an email", "said in a statement" — so readers know a written reply isn't a conversation ([ONA Ethics](https://ethics.journalists.org/topics/interviewing/)). The guide may set the exact wording.
- **Send five to seven numbered questions** (common practice), each answerable on its own, and a date you need them by.

## Turning it into a draft

- **Separate fact from opinion** in your notes, and attribute each opinion to its owner.
- **Mark every gap visibly** rather than writing the plausible version. An invented detail that reads naturally is the worst defect this work produces, because nothing about it looks wrong.
- **Verify what you can yourself** — read the study, check the date — rather than spending the source's next minutes on it.
- **Keep notes and transcripts in the topic's `interviews/` folder**, one file per interview, with the date and the consent given — name, quote, recording, on or off the record — at the top, by the [template](references/interview-notes.md). A correction or a challenge starts there. List each interview once under Sources in the topic's `sources.md`, type `interview`, linking to its notes file.

## Quoting and attributing

- **Quote exactly**, from the recording or your notes — a quote is the source's words, not your paraphrase in quotation marks.
- **Check a transcript against the audio** before quoting from it. Automatic transcription mishears names, numbers, technical terms and accents, and a confident-looking line can be wrong.
- **Never distort facts or context** ([SPJ](https://www.spj.org/spj-code-of-ethics/)). Trim only where the meaning survives intact, and never stitch remarks from different moments into one quote.
- **Mark an omission with an ellipsis.** Whether brackets may add a missing word, whether speech is cleaned of "um" and false starts, and whether "[sic]" is used are the guide's decisions. AP-style newsrooms don't alter a quote; where it doesn't read cleanly, they use a partial quote or a paraphrase.
- **Attribute every quote and every borrowed fact** — who said it, and in what capacity. An opinion appears as theirs, with their name on it, never as the piece's own claim.
- **Reproduce others' published words only within fair use or fair dealing, or with permission** — a long passage, song lyrics, a poem or a whole social post needs more care than a line.

## Fairness and checking back

- **Give anyone criticised a fair chance to respond** before publication, and say in the piece if they declined ([SPJ](https://www.spj.org/spj-code-of-ethics/)).
- **Check an allegation about a named person or company** against a second source or a document before it's printed.
- **Check facts with the source, not their wording** — a figure, a date, a name's spelling, a technical claim. An example read-back is in [references/questions.md](references/questions.md#a-read-back-that-checks-facts-not-wording).
- **Whether a source may see or approve a quote** is the publication's policy, not yours to promise in the moment.
- **Keep a record** of what you asked, what you were told and any terms agreed, with dates, in the interview's notes file — and whether each quote was approved.
- **Close the loop** — tell them when it's published and send the link.

## Boundaries

- **What the material becomes** — the piece's shape → `cw:article-standards`; the rules every piece obeys → `write:writing-standards`.
- **Deciding who to interview for which piece** → `cw:content-planning`. **Written sources, figures and fact-checking** → `cw:content-research`.
- **Editing the draft** → `cw:editing-standards`; **reviewing it** → `/cw:review`.
- **Interviewing an engineer or expert for documentation** → `tw:sme-interviews`.
- **The source is the authority on facts, not on wording.** How it's phrased for the reader is the writer's call.
