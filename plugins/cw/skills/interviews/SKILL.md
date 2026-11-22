---
name: interviews
description: >-
  Helping a writer interview anyone a piece draws on — an expert, a customer, a founder, someone with a lived experience, an event guest or another creator — and turn it into quotes, a Q&A article, a profile, a case study or a testimonial. Before: research and verify the person, draft the request, ground rules and questions. After: check every quote and fact, and get the sign-off each output needs. Use on "interview someone", "Q&A interview", "case study", "customer story", "testimonial", "profile", "quote someone", "on the record".
---

# Interviews for content

Help the writer before and after an interview with anyone a piece draws on. The writer runs the interview; never contact the person yourself. Before it, prepare the request email, the ground rules and the questions. After it, turn what the writer brings back into notes the piece can rely on — every quote checked, every fact traced, every gap marked — and, where the interview is the piece, into the draft and the sign-off it needs.

Most errors in a piece start as a gap the writer filled in rather than a question the writer asked. The person is often quoted by name, and their experience and opinions are part of the material, so the result has to be true, fair and theirs.

| Stage  | The writer                                                                    | You                                                                                                                                       | Output                                                                            |
| ------ | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Before | answers the Ask first questions                                               | research the person and the subject, verify who they are, draft the request email with the ground rules, and write the question list      | the request email, the question list, and the notes file started in `interviews/` |
| During | runs the interview — call, video, in person or email — recording with consent | nothing live; for an email interview, write the numbered questions the writer sends                                                       | the recording, the transcript or the emailed answers                              |
| After  | gives you the transcript, the answers or their notes                          | fill the notes file, check every quote against the recording, mark the gaps, draft the output, and draft the check-back or approval email | the finished notes, the draft, the email, and the source listed in `sources.md`   |

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
2. **Who are you interviewing?** an expert or researcher · a customer or user · someone with a personal or lived experience · a founder or business owner · a community member, event guest or attendee · another creator.
3. **What will it become?** quotes in a piece · a Q&A article · a profile or feature · a case study · a testimonial.
4. **Who is the person, and what does the piece lean on them for?** Short answer: name, role or organisation, and why them — what they know, did, use or lived through. Default: the brief's people to interview.
5. **For quotes in a piece, what does it need from them?** a story or scene · an opinion or argument · evidence for a claim · their experience of a product or place.
6. **Which claims or questions must the interview settle?** Short answer, the must-asks. Default: the brief's outline.
7. **How will it happen?** call · video · in person · email.
8. **May the person see a draft or approve quotes?** no · facts only · quotes only. Default: the writing guide's policy; a Q&A article, a case study and a testimonial always go back for approval ([What the interview becomes](#what-the-interview-becomes)).
9. **Is the person a minor, a crime victim, or someone not used to being quoted?** no · yes (who).

## Where the notes go

Each interview gets one notes file in the topic's `interviews/` folder, named `<yyyy-mm-dd>-<name>.md` (`interviews/2026-12-03-ada-okafor.md`). In a chat app, name it `<topic folder>--interview-<yyyy-mm-dd>-<name>.md` and hand back only that file.

Filling notes doesn't claim the topic: it edits no format file, so it runs even while someone holds the topic and never sets **Held by**. Drafting a Q&A article or a case study into a format file — usually `blog.md` — claims it as the brief says.

## Who gets interviewed

The ground rules, consent, verification, vulnerable-source care and quoting rules below apply to everyone. What changes is what the piece leans on, and so what to verify.

| Who                                         | The piece leans on              | Verify                                                                                            |
| ------------------------------------------- | ------------------------------- | ------------------------------------------------------------------------------------------------- |
| An expert or researcher                     | their judgement and their work  | the credential and the employer, and the work itself in the original                              |
| A customer or user                          | what happened when they used it | that they are a customer, and every number against their own records                              |
| Someone with a personal or lived experience | what happened to them           | the checkable parts — dates, places, names — without asking them to prove their own story         |
| A founder or business owner                 | how and why the business runs   | that the business exists as described, and their stake in what they say, which the reader is told |
| A community member, event guest or attendee | what it was like to be there    | that they were there                                                                              |
| Another creator                             | their craft and how they work   | their published work, and any tie to the publication — a collaboration, an affiliate link, a swap |

## Before the interview

### Research the person and the subject

- **Read what they've already said** — articles, posts, talks, earlier interviews, a shop's site, a creator's channel — so the interview doesn't spend their time repeating it. A customer or an attendee may have said nothing in public; the brief and the writer's notes are the start.
- **Read the data or research they're known for in the original**, not a summary, and **what others say** about them or the subject, including people who disagree.
- **Ask for the artifact** where one exists — the study, the order figures, the race results, the menu — and put a line for it in the question list.
- **Suggest the writer use the thing** — the bakery, the product, the training plan — before the interview, where they can; ten minutes of hands-on turns half the questions into better ones.

### Verify who they are

- **Confirm the person is who they say they are**, especially someone found online: an organisation's own directory, a published profile, a listed number, a second person who knows them. Record how it was confirmed in the notes file.
- **Confirm the standing the piece leans on** — a title, a qualification, being a customer, having been there — rather than repeating how they described themselves. The table above says what that is for each.
- **Add a question about conflicts of interest** — who pays them, what they sell, what they stand to gain. A software founder praising their own category has a stake; the reader is told it.

### Draft the request and the ground rules

Draft the request email from the [template](references/emails.md#request). It says, in plain words:

- **What it's for** — the piece and what it will become, where it will appear, who reads it, and roughly when.
- **How they'll be quoted** — by name, described without a name, or not used — and that it's on the record unless agreed otherwise first. Not everyone reads "off the record" or "on background" the same way, so the email never uses the jargon alone.
- **How they'll be identified** — name, role, organisation, or how they're connected — so readers can judge the source's reliability and motives ([SPJ Code of Ethics](https://www.spj.org/spj-code-of-ethics/)).
- **That the call will be recorded only with their consent.** About 11 US states — among them California, Florida, Illinois, Pennsylvania and Washington — require every party's consent, and a call across state lines may fall under the stricter law ([RCFP](https://www.rcfp.org/introduction-to-reporters-recording-guide/)); other countries set their own rules. Remind the writer to ask again on the recording.
- **What they may see before publication**, from the guide's policy and the output — never promise more than either allows.

Hold to these, and flag to the writer any request that breaks them:

- **Anonymity is the exception.** The SPJ code, revised in October 2026, reserves it "as a last resort for sources with information of substantial public interest who may face danger, retribution or other harm", and the reader is told why. A stricter publication policy wins. A case study or a testimonial has a named person behind it, or it doesn't run (common practice).
- **No payment for the interview or the information** — "Do not pay sources in exchange for interviews or information" ([SPJ](https://www.spj.org/spj-code-of-ethics/)). A customer given anything for a case study or a testimonial — a discount, a free plan, a fee — has a connection the piece discloses beside it ([FTC](https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking)).
- **Embargoes** are recorded in the notes file when received, and nothing under one is published before the agreed date and time.

### Write the question list

Put the must-asks first and mark the rest nice-to-have, so a short call still gets what the piece needs. Question sets for each kind of person and each output are in [references/questions.md](references/questions.md).

- **Open questions, not leading ones:** "What happened the week the oven broke?", not "That must have been hard, right?"
- **Ask for a specific time:** "Tell me about the mile you nearly stopped" — a scene is worth more on the page than a summary.
- **Ask for the number** behind any "a lot", "usually" or "it depends", and where it comes from.
- **Close with** "What didn't I ask that I should have?" and "Who else should I talk to?"

### Vulnerable sources

Where the person is a minor, a crime victim, or not used to being quoted, adjust the request and the list:

- **Heightened sensitivity** with crime victims (especially of sex crimes), juveniles, and sources who are inexperienced or unable to give consent — the SPJ code's 2026 wording.
- **A minor** needs a parent's or guardian's consent as well as their own; follow the guide's policy on naming and photographing them.
- **Trauma-aware questions.** Survivors consistently name "How do you feel?" as the most distressing question; write "How are you now?" or "What do you remember about that shift?" instead. Remind the writer to let them set limits, tell them they needn't answer, and not press for detail that serves the story rather than the reader ([Dart Center guidance, via The Journalist's Resource](https://journalistsresource.org/home/trauma-informed-journalism-explainer/)).
- **Someone not used to being quoted** — most customers, attendees and people with a story — gets the ground rules explained twice in plain words.

## During the interview

The writer runs it. Give them a short running sheet with the question list:

- **The timebox, said aloud at the start**, one topic per session: about 20–30 minutes for quotes or a testimonial, 30–60 for a Q&A article, a profile or a case study (common practice).
- **Consent to record, asked again on the recording.**
- **Let silence work** — wait a beat after an answer; people often add the most candid thing into a pause.
- **Don't interrupt a good thread** for a small question; note it and come back.
- **Read the understanding back** before moving on; restating is where most misunderstandings are caught.
- **At the end, say how the material will be used, what they'll see before it runs, and when it will run.**

**For an email interview**, write the email from the [template](references/emails.md#email-interview): five to seven numbered questions (common practice), each answerable on its own, and a reply-by date. Tell the writer a written reply comes back polished and can't be followed up in the moment, so prefer a call for anything that depends on how someone thinks — and the piece says "said in an email" ([ONA Ethics](https://ethics.journalists.org/topics/interviewing/)).

## After the interview

The writer gives you the transcript, the emailed answers or their notes.

### Fill the notes file

- **Fill the [notes template](references/interview-notes.md)**: the date, the consent given — name, quote, recording, on or off the record, the output's sign-off — the questions asked, what was said, and any terms or embargo.
- **Separate fact from opinion**, and attribute each opinion to its owner.
- **Mark every gap visibly** rather than writing the plausible version. An invented detail that reads naturally is the worst defect this work produces, because nothing about it looks wrong.
- **Verify what can be checked without the person** — read the study, check the date, look up the race result — before adding it to the check-back.
- **List the source once under Sources** in the topic's `sources.md`, type `interview`, linking to the notes file.

### Check every quote

- **A quote is the person's exact words**, from the recording or the notes — never a paraphrase in quotation marks.
- **Check a transcript against the audio** before quoting from it. Automatic transcription mishears names, numbers, technical terms and accents, and a confident-looking line can be wrong. Where there's no audio, mark the quote unverified and tell the writer.
- **Never distort facts or context** ([SPJ](https://www.spj.org/spj-code-of-ethics/)). Trim only where the meaning survives, and never stitch remarks from different moments into one quote.
- **Mark an omission with an ellipsis.** Whether brackets may add a missing word, whether "um" and false starts are cleaned, and whether "[sic]" is used are the guide's decisions; without one, use a partial quote or a paraphrase rather than altering a quote.
- **Attribute every quote and every borrowed fact** — who said it, and in what capacity.

## What the interview becomes

Each output has its own shape and its own sign-off, recorded in the notes file's consent table.

- **Quotes in a piece.** The flow above: checked quotes and facts feed an article, a newsletter issue or a feature. Sign-off: facts checked back, never wording; quotes approved only where the guide allows.
- **A Q&A article.** The edited transcript is the piece: an intro saying who they are and why now, the questions in bold, and answers edited for length and clarity without changing their meaning, with a note that it was edited (common practice). Draft it from [references/qa-article.md](references/qa-article.md). Sign-off: the person sees the edited version and consents to publishing it (common practice).
- **A profile or feature.** Scenes and quotes around one person — the bakery owner at 4 am, not a list of her achievements — with other people who know them for perspective. Sign-off: facts checked back; the person doesn't approve the piece unless the guide allows it (common practice).
- **A case study.** The customer's problem, what they did, and the result with real numbers they confirm from their own records — never a figure rounded up or supplied by the company selling to them. Draft it from [references/case-study.md](references/case-study.md). Sign-off: the company's or the person's approval of the finished draft before it's published (common practice).
- **A testimonial.** The person's own words — from the interview or written by them — approved word for word, and never written for them. The FTC says "endorsements must reflect the honest opinions or experiences of the endorser" ([FTC Endorsement Guides](https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking)), and bans testimonials that misrepresent the experience of the person giving them ([FTC, 2024](https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials)). A trimmed version is approved as trimmed.

### Draft the check-back or the approval

- **Check facts with the person, not their wording** — a figure, a date, a name's spelling — in the [check-back email](references/emails.md#check-back). An example read-back is in [references/questions.md](references/questions.md#a-read-back-that-checks-facts-not-wording).
- **A Q&A article, a case study or a testimonial goes back whole** in the [approval email](references/emails.md#approval): the version that will run, and the date it's needed by. A correction of fact or a misheard word is made; a change of meaning goes to the writer.
- **Anyone the piece criticises gets a fair chance to respond** before publication; draft that email too, and the piece says if they declined ([SPJ](https://www.spj.org/spj-code-of-ethics/)).
- **An allegation about a named person or company** needs a second source or a document; list it for the writer to find.
- **Record in the notes file** what was asked, what was answered, any terms agreed, and each approval — and remind the writer to send the person the link once it's published.

## Before handing the work to the writer

- [ ] Every quote is checked against the recording, or marked unverified.
- [ ] Fact and opinion are separated, and every gap is marked.
- [ ] The consent, any terms and the output's sign-off are recorded at the top of the notes file.
- [ ] The check-back lists facts only; a Q&A article, a case study or a testimonial goes back whole for approval.
- [ ] A case study's numbers are confirmed by the customer; a testimonial is in the person's own words.
- [ ] The source is listed once in `sources.md`, type `interview`.

## Boundaries

- **Writing an article, a feature or a profile from the notes** → `cw:article-standards`; the rules every piece obeys → `write:writing-standards`.
- **Deciding who to interview for which piece** → `cw:content-planning`. **Written sources, figures and fact-checking** → `cw:content-research`.
- **Editing the draft** → `cw:editing-standards`; **reviewing it** → `/cw:review`.
- **Interviewing an engineer or expert for documentation** → `tw:sme-interviews`.
- **The person is the authority on facts, not on wording** — except in a testimonial, where the words are theirs. How the rest is phrased for the reader is the writer's call.
