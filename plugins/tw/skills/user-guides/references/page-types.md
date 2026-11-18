# The page types and their skeletons

Pick the type that matches what the reader needs, then follow its skeleton. A page that mixes types (a how-to that drifts into a concept lecture) gets split.

**Four of these are the standard documentation types**, as defined by DITA ([OASIS DITA information typing](https://docs.oasis-open.org/dita/dita/v1.3/os/part2-tech-content/archSpec/technicalContent/dita-technicalContent-InformationTypes.html)): concept, task (here: how-to), reference, and troubleshooting. **Policy and FAQ are this skill's additions**, because help-centre readers arrive with questions about rules and entitlements that don't fit any of the four.

This is why the set differs from the four Diátaxis quadrants `writing-standards` uses for developer docs. Diátaxis has no troubleshooting type — it folds problem-solving into how-to guides — and a help centre needs it as its own shape, since a reader with a broken thing is in a different state from a reader learning a task.

## 1. Concept explainer

Teaches an idea ("What is version history?", "How do permissions work?").

- Title as a question
- Opening line: a one-sentence plain definition
- "How it works" section
- One worked example using the product's agreed framing for that concept
- "Why it matters" or "Why people use it" (short)

## 2. How-to / step-by-step

Walks through a task ("How to return an item", "How to sign up").

- Title as a plain action
- Opening line stating the goal
- A short lead-in: "To start a return:"
- Numbered steps, each starting with the action, with the button or label in **bold**
- A bold inline warning at any irreversible or security step
- A closing line telling them what happens next: "We email you a label within an hour."
- Multiple methods (card vs bank, web vs app) each get a short subsection

## 3. Reference

Lists facts the reader looks up rather than reads ("Supported file types", "Sending limits", "Where we're available").

- Title naming the thing being listed
- One line saying what the list covers and who it applies to
- A table for anything with more than two dimensions — plan against limit, country against availability
- Every entry, not the interesting ones; a reference with gaps sends the reader back to support
- Units, currencies and dates stated explicitly
- No advice and no steps — link the how-to instead

## 4. Troubleshooting

Fixes a specific problem ("Why can't I log in?", "Why can't other people hear me?").

- Title naming the exact problem the way the reader sees it
- Opening line: "Try these steps."
- One section per likely cause, most common first
- Numbered fix steps, with device or browser noted if it matters
- Focused on getting them unstuck — no background theory

## 5. Policy / rules

Explains how something is decided or governed ("How disputes are resolved", "Account limits").

- Title
- Opening line stating the rule in plain terms
- A short overview of the process, start to finish
- Timeframes, conditions, and edge cases stated explicitly
- Cover the whole process — never leave a rule half-explained where the reader has something at stake (money, data, access, anything irreversible)

## 6. FAQ answer

Answers one common question ("Can I cancel an order?", "Can I delete my data?").

A recurring FAQ is often a symptom: the question keeps being asked because the concept, task or policy page that should answer it doesn't exist or can't be found. Write the FAQ, then ask whether one of the other five is missing.

- Title as the literal question
- Opening line gives the full answer in one sentence (yes/no + reason)
- One or two short sentences or a small section expanding it
- Stop once it's answered

## Before and after: one example per type

Weak draft, then a rewrite that follows the standard. **Each example is a different kind of product on purpose** — the pattern is what transfers, not the subject matter. Swap in your own product's real specifics and agreed framings.

### 1. Concept explainer — _a file-storage product_

**Before**

> What is version history?
> Version history is a powerful feature that leverages our robust storage architecture to provide users with comprehensive access to previous iterations of their documents, enabling seamless recovery workflows.

Why it's weak: no answer up front, marketing tone ("powerful", "robust", "seamless"), one long sentence, unexplained jargon ("iterations", "recovery workflows"), no example.

**After**

> What is version history?
> Version history keeps a copy of your file every time you save it, so you can go back to an earlier version.
>
> **How it works**
> Each time you save, we store a snapshot. Opening **File › Version history** shows every snapshot with the date and who made it. You can preview any of them before restoring.
> Restoring doesn't delete anything: the current version is saved as a snapshot first, so you can always undo it.
>
> **Why people use it**
> It means you can edit freely without keeping "final-v2" copies — if a change turns out wrong, the earlier version is still there.

### 2. How-to / step-by-step — _an online shop_

**Before**

> Returns processing
> In order to initiate a return, you will need to navigate to the relevant section of your account and follow the on-screen prompts, after which your refund should be processed accordingly.

Why it's weak: vague, no steps, no buttons named, no confirmation of what happens next or when.

**After**

> How to return an item
> Here's how to send an item back and get your money back.
> To start a return:
>
> 1. Go to **Orders** and find the order.
> 2. Tap **Return item** and pick a reason.
> 3. Choose **Drop off** or **Collection**.
> 4. Check the address, then tap **Confirm**. **You can't change the return method after this.**
>
> We email you a label within an hour. Your refund arrives 3–5 days after we receive the item.

### 3. Reference — _an email tool_

**Before**

> Sending limits
> Sending limits vary depending on your plan and account standing, and may be subject to change. Contact support if you need more information about your specific limit.

Why it's weak: names no actual number, so the reader still has to ask — which is the thing a reference page exists to prevent.

**After**

> Sending limits
> How many emails you can send per day, by plan. Limits reset at 00:00 UTC.
>
> | Plan     | Emails per day | Recipients per email |
> | -------- | -------------- | -------------------- |
> | Free     | 100            | 50                   |
> | Standard | 5,000          | 500                  |
> | Business | 50,000         | 2,000                |
>
> Hitting the limit pauses sending until the reset; queued emails are not lost. To raise a limit, see [Request a higher limit].

### 4. Troubleshooting — _a video-calling app_

**Before**

> Audio issues
> If you are experiencing difficulties with audio, there may be a number of underlying causes, and we recommend reviewing your setup.

Why it's weak: names no specific cause, gives no actual fix.

**After**

> Why can't other people hear me?
> Try these steps.
>
> **Check you're not muted**
> Look for the microphone icon at the bottom of the call. If it has a line through it, tap it to unmute. Some headsets also have their own mute switch.
>
> **Check the right microphone is selected**
> Go to **Settings › Audio** and pick your microphone from the list. Speak — the bar below it should move. If it doesn't, that microphone isn't picking you up.
>
> **Still stuck?**
> Leave and rejoin the call. If that doesn't work, try a different browser — on Safari, calls need microphone permission granted per site.

### 5. Policy / rules — _a community platform_

**Before**

> Content moderation
> Reported content is reviewed in accordance with the applicable community standards and appropriate action is taken where warranted, subject to review.

Why it's weak: too vague to act on; the reader still doesn't know who decides, how long it takes, or what happens to them.

**After**

> What happens when content is reported
> When someone reports a post, a moderator reviews it against our community rules and either leaves it up or removes it.
>
> **How it works**
> A report goes to a moderator, not to the person who posted. Most reports are reviewed within 24 hours; reports involving safety are looked at first.
> If a post is removed, we tell the author which rule it broke. They can appeal once, within 30 days, and a different moderator reviews the appeal.
> Reporting is anonymous. The author is never told who reported them.

### 6. FAQ answer — _any product holding personal data_

**Before**

> Can I delete my data?
> We take your privacy very seriously and employ a range of measures to handle your personal information responsibly at all times.

Why it's weak: doesn't answer the question — it reassures vaguely instead.

**After**

> Can I delete my data?
> Yes. You can delete your account and everything in it from **Settings › Privacy › Delete account**.
> Deletion starts immediately and finishes within 30 days. **It can't be undone** — export anything you want to keep first. We keep only what the law requires us to, such as payment records.
