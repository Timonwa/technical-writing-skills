---
name: sme-interviews
description: >-
  Helping a writer interview a source for content — an expert, founder, chef or researcher an article, feature, profile or newsletter draws on. Before: research the source, verify who they are, draft the request with the ground rules and the question list. After: turn the transcript or notes into checked interview notes, check every quote, list the facts to confirm and draft the check-back email. Covers consent, vulnerable sources, quoting and attribution. Use on "interview a source", "interview an expert for my article", "quote someone", "on the record".
---

# Interviewing sources for content

Help the writer before and after an interview with a source. The writer runs the interview; never contact the source yourself. Before it, prepare the request email, the ground rules and the questions. After it, turn what the writer brings back into notes the piece can rely on: every quote checked, every fact traced, every gap marked.

Most errors in an article start as a gap the writer filled in rather than a question the writer asked. A source is often quoted by name, and their experience and opinions are part of the material, so the result has to be true, fair and theirs.

| Stage  | The writer                                                                    | You                                                                                                                                     | Output                                                                            |
| ------ | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Before | answers the Ask first questions                                               | research the source and the subject, verify who they are, draft the request email with the ground rules, and write the question list    | the request email, the question list, and the notes file started in `interviews/` |
| During | runs the interview — call, video, in person or email — recording with consent | nothing live; for an email interview, write the numbered questions the writer sends                                                     | the recording, the transcript or the emailed answers                              |
| After  | gives you the transcript, the answers or their notes                          | fill the notes file, check every quote against the recording, separate fact from opinion, mark the gaps, and draft the check-back email | the finished notes, the check-back email, and the source listed in `sources.md`   |

Every email follows its template in [references/emails.md](references/emails.md); the notes follow [references/interview-notes.md](references/interview-notes.md).

## Find the writer's guide

Read the publication's `profile.md` and `writing-guide.md` before preparing anything:

- **In a codebase:** the folder the project's `AGENTS.md` names, or, for a guide kept outside the repo, the folder the user's personal agent instructions name (such as `~/.claude/CLAUDE.md`); otherwise the project's `publications/` folder.
- **In a chat app:** the project's files (a Claude Project's knowledge, or the equivalent elsewhere), or files attached to the conversation.
- **Otherwise:** ask the writer for them.

The guide's policies on sources come first — whether anonymous sources are used, whether a source may see a draft, how people are named and how quotes are edited — and win wherever they differ from this skill. Where there's no guide, ask who the reader is and what the piece is for, and offer to build one with `cw:style-guide`.

## Ask first

Read the answers from the topic's `brief.md` and the publication's `writing-guide.md` first; ask the writer only what's missing. Ask with the app's question tool where it has one, so the choices can be picked; otherwise as a numbered list answered by number. Offer choices where the answers are known and a short typed answer otherwise; where the guide has a default, show it and ask whether to use it. Record each answer in the `brief.md` field it belongs to, and an answer with no field under **Notes for whoever picks it up next**.

1. **Which topic folder is the interview for?** The folder name under `topics/`, or "new" — a new topic is briefed first with `cw:content-planning`.
2. **Who is the source, and what standing does the piece lean on?** Short answer: name, role, organisation. Default: the brief's people to interview.
3. **What does the piece need from them?** a feature or story · a profile · an opinion or argument · evidence for a claim.
4. **Which claims or questions must the interview settle?** Short answer, the must-asks. Default: the brief's outline.
5. **How will it happen?** call · video · in person · email.
6. **May the source see a draft or approve quotes?** no · facts only · quotes only. Default: the writing guide's policy.
7. **Is the source a minor, a crime victim, or someone not used to being quoted?** no · yes (who).

## Where the notes go

Each interview gets one notes file in the topic's `interviews/` folder, named `<yyyy-mm-dd>-<name>.md` (`interviews/2026-12-03-ada-okafor.md`). In a chat app, name it `<topic folder>--interview-<yyyy-mm-dd>-<name>.md` and hand back only that file.

Don't claim the topic: this skill edits no format file, so it runs even while someone holds the topic and never sets **Held by**.

## Before the interview

### Research the source and the subject

- **Read the source's published work** — articles, posts, books, papers, talks, earlier interviews — so the interview doesn't spend their time on what they've already said.
- **Read the data or research they're known for in the original**, not a summary, and **what others say** about them or the subject, including people who disagree.
- **Ask for the artifact** where one exists — the study, the dataset, the menu, the document — and put a line for it in the question list.
- **Suggest the writer use the thing** — the restaurant, the product, the recipe — before the interview, where they can; ten minutes of hands-on turns half the questions into better ones.

### Verify who they are

- **Confirm the source is who they say they are**, especially someone found online: an organisation's own directory, a published profile, a listed number, a second person who knows them. Record how it was confirmed in the notes file.
- **Confirm the credential the piece leans on** — the title, the qualification, the employer — rather than repeating how they described themselves.
- **Add a question about conflicts of interest** — who pays them, what they sell, what they stand to gain. A source with a stake is still a source; the reader is told the stake.

### Draft the request and the ground rules

Draft the request email from the [template](references/emails.md#request). It says, in plain words:

- **What it's for** — the piece, where it will appear, who reads it, and roughly when.
- **How they'll be quoted** — by name, described without a name, or not used — and that it's on the record unless agreed otherwise first. Not everyone reads "off the record" or "on background" the same way, so the email never uses the jargon alone.
- **How they'll be identified** — name, role, organisation — so readers can judge the source's reliability and motives ([SPJ Code of Ethics](https://www.spj.org/spj-code-of-ethics/)).
- **That the call will be recorded only with their consent.** About 11 US states — among them California, Florida, Illinois, Pennsylvania and Washington — require every party's consent, and a call across state lines may fall under the stricter law ([RCFP](https://www.rcfp.org/introduction-to-reporters-recording-guide/)); other countries set their own rules. Remind the writer to ask again on the recording.
- **What the source may see before publication**, from the guide's policy — never promise more than it allows.

Hold to these, and flag to the writer any request that breaks them:

- **Anonymity is the exception.** The SPJ code, revised in October 2026, reserves it "as a last resort for sources with information of substantial public interest who may face danger, retribution or other harm", and the reader is told why. A stricter publication policy wins.
- **No payment for the interview or the information** — "Do not pay sources in exchange for interviews or information" ([SPJ](https://www.spj.org/spj-code-of-ethics/)).
- **Embargoes** are recorded in the notes file when received, and nothing under one is published before the agreed date and time.

### Write the question list

Put the must-asks first and mark the rest nice-to-have, so a short call still gets what the piece needs. The question sets that work for a feature, a profile and an opinion piece are in [references/questions.md](references/questions.md).

- **Open questions, not leading ones:** "What happened when the first restaurant closed?", not "That must have been hard, right?"
- **Ask for a specific time:** "Tell me about a day this went wrong" — a scene is worth more on the page than a summary.
- **Ask for the number** behind any "a lot", "usually" or "it depends", and where it comes from.
- **Close with** "What didn't I ask that I should have?" and "Who else should I talk to?"

### Vulnerable sources

Where the source is a minor, a crime victim, or not used to being quoted, adjust the request and the list:

- **Heightened sensitivity** with crime victims (especially of sex crimes), juveniles, and sources who are inexperienced or unable to give consent — the SPJ code's 2026 wording.
- **A minor** needs a parent's or guardian's consent as well as their own; follow the guide's policy on naming and photographing them.
- **Trauma-aware questions.** Survivors consistently name "How do you feel?" as the most distressing question; write "How are you now?" or "What do you think about…?" instead. Remind the writer to let them set limits, tell them they needn't answer, and not press for detail that serves the story rather than the reader ([Dart Center guidance, via The Journalist's Resource](https://journalistsresource.org/home/trauma-informed-journalism-explainer/)).
- **Someone not used to being quoted** gets the ground rules explained twice in plain words.

## During the interview

The writer runs it. Give them a short running sheet with the question list:

- **The timebox, said aloud at the start**, one topic per session: about 20–30 minutes for an expert's input, 30–60 for a feature or a profile (common practice).
- **Consent to record, asked again on the recording.**
- **Let silence work** — wait a beat after an answer; people often add the most candid thing into a pause.
- **Don't interrupt a good thread** for a small question; note it and come back.
- **Read the understanding back** before moving on; restating is where most misunderstandings are caught.
- **At the end, say how the material will be used and when the piece will run.**

**For an email interview**, write the email from the [template](references/emails.md#email-interview): five to seven numbered questions (common practice), each answerable on its own, and a reply-by date. Tell the writer a written reply comes back polished and can't be followed up in the moment, so prefer a call for anything that depends on how someone thinks — and the piece says "said in an email" ([ONA Ethics](https://ethics.journalists.org/topics/interviewing/)).

## After the interview

The writer gives you the transcript, the emailed answers or their notes. Then:

### Fill the notes file

- **Fill the [notes template](references/interview-notes.md)**: the date, the consent given — name, quote, recording, on or off the record — the questions asked, what was said, and any terms or embargo.
- **Separate fact from opinion**, and attribute each opinion to its owner.
- **Mark every gap visibly** rather than writing the plausible version. An invented detail that reads naturally is the worst defect this work produces, because nothing about it looks wrong.
- **Verify what can be checked without the source** — read the study, check the date — before adding it to the check-back.
- **List the source once under Sources** in the topic's `sources.md`, type `interview`, linking to the notes file.

### Check every quote

- **A quote is the source's exact words**, from the recording or the notes — never a paraphrase in quotation marks.
- **Check a transcript against the audio** before quoting from it. Automatic transcription mishears names, numbers, technical terms and accents, and a confident-looking line can be wrong. Where there's no audio, mark the quote unverified and tell the writer.
- **Never distort facts or context** ([SPJ](https://www.spj.org/spj-code-of-ethics/)). Trim only where the meaning survives, and never stitch remarks from different moments into one quote.
- **Mark an omission with an ellipsis.** Whether brackets may add a missing word, whether "um" and false starts are cleaned, and whether "[sic]" is used are the guide's decisions; without one, use a partial quote or a paraphrase rather than altering a quote.
- **Attribute every quote and every borrowed fact** — who said it, and in what capacity.

### Draft the check-back

- **Check facts with the source, not their wording** — a figure, a date, a name's spelling, a technical claim — in the [check-back email](references/emails.md#check-back). An example read-back is in [references/questions.md](references/questions.md#a-read-back-that-checks-facts-not-wording).
- **Anyone the piece criticises gets a fair chance to respond** before publication; draft that email too, and the piece says if they declined ([SPJ](https://www.spj.org/spj-code-of-ethics/)).
- **An allegation about a named person or company** needs a second source or a document; list it for the writer to find.
- **Record in the notes file** what was asked, what was answered, any terms agreed, and whether each quote was approved — and remind the writer to send the source the link once it's published.

## Before handing the notes to the writer

- [ ] Every quote is checked against the recording, or marked unverified.
- [ ] Fact and opinion are separated, and every gap is marked.
- [ ] The consent and any terms are recorded at the top of the notes file.
- [ ] The check-back email lists facts only, never wording.
- [ ] The source is listed once in `sources.md`, type `interview`.

## Boundaries

- **Writing the piece from the notes** → `cw:article-standards`; the rules every piece obeys → `write:writing-standards`.
- **Deciding who to interview for which piece** → `cw:content-planning`. **Written sources, figures and fact-checking** → `cw:content-research`.
- **Editing the draft** → `cw:editing-standards`; **reviewing it** → `/cw:review`.
- **Interviewing an engineer or expert for documentation** → `tw:sme-interviews`.
- **The source is the authority on facts, not on wording.** How it's phrased for the reader is the writer's call.
