---
title: "A prompting guide for busy leaders"
description: "Six techniques that turn vague AI prompts into useful first answers: a four-part recipe, before-and-after examples, hallucination checks, and a fix-it table for weak responses."
pubDate: 2026-10-31
author: Rap Payne
time-to-read: 7 minutes
url: /blog/prompting-guide-for-leaders
cloudinaryImageFileName: v1793465697/prompting-guide-for-leaders_dc4bdo.jpg
categories: ["AI", "prompting", "LLM", "leadership", "Copilot"]
---

Last week I spoke on "AI leadership" at a seminar for a large insurance company. On my way out, my client asked me for a favor. She asked me to create a prompting guide for her leaders. I was happy to do this for her, and because it was not part of my speaking fee, I'm free to publish this anonymized and adapted version for you. I hope it helps you.

## The tl;dr

A prompt is the instruction you give an AI tool. A better prompt gets a better first answer, and it takes about a minute more to write.

These techniques work in Microsoft 365 Copilot, ChatGPT, Claude, Gemini, or any other large language model (LLM). Pick the tool. The skills below are portable.

## 1. Use this simple recipe

Four parts. Skip any that don't matter for the task.

| Part | Ask yourself | Example |
|---|---|---|
| **Task** | What exactly do I want? | "Summarize the risks in the text below." |
| **Context** | Who is this for, and what does it need to know? Include any role. | "The reader is a skeptical CFO with two minutes." |
| **Format** | What should the answer look like? | "Five bullets, then one recommendation." |
| **Limits** | What must it stay within? | "Under 150 words. Use only the text below." |

Here's the template:

```
[Task]. Context: [who it's for, why, what matters].
Format: [shape and length]. Limits: [include, exclude, avoid].
```

Memorize that shape. You'll use it daily.

## 2. Be specific, not vague

Vague prompts get wrong answers. Each pair below shows a weak prompt first, then a stronger one.

### Risk review

- `Summarize this risk.`
- `Summarize the risks in the submission below for a committee that has two minutes. Give five bullets, then one recommendation: accept, decline, or ask for more information. Use only the text below. Submission: [paste text]`

### Case review

- `What's wrong with this claim?`
- `Review the case notes below as an experienced examiner would. List what information is missing before a decision can be made, as a checklist, most important first. Do not guess at missing facts. Notes: [paste text]`

### Customer service

- `Reply to this customer.`
- `Draft a reply to the customer message below. Tone: warm, plain, and apologetic about the delay. Under 120 words. Do not promise a date or an outcome. End by saying what happens next. Message: [paste text]`

### Partner communication

- `Write a note to a broker.`
- `Write a note to a partner who has asked why a renewal is taking longer than usual. Acknowledge the frustration, explain the delay in two sentences, and offer a call this week. Under 150 words. Do not blame anyone. Details: [paste text]`

### Analytics

- `Explain this trend.`
- `Using only the figures below, explain the change in [measure] between [period A] and [period B] for a non-specialist. Show each calculation step by step and state any assumptions. Say what you cannot conclude from this data. Figures: [paste data]`

### Compliance

- `Is this procedure okay?`
- `Review the procedure below as a compliance reviewer would. List the five questions you would ask before approving it, and what evidence would answer each. Do not state what the law requires; flag anything that needs legal confirmation. Procedure: [paste text]`

### Leadership communication

- `Write an announcement about the new process.`
- `Write a 200-word announcement to my team about [change]. Explain why we are doing it, what changes for them, and what has not been decided yet. Use plain words and no hype. End with who to ask questions.`

Notice the pattern. Every strong prompt names a reader, a shape, and a limit. The weak ones name nothing.

## 3. Reduce hallucinations

An LLM predicts the most likely next words. It doesn't look up the truth. Sometimes it produces a confident answer that is flat wrong. We call that a hallucination or a confabulation. A wrong answer reads exactly like a right one, so build in checks.

| Move | Say something like |
|---|---|
| **Supply the facts** | `Use only the information below. Do not add anything else.` |
| **Ask for sources** | `Cite the source for each claim. If you have none, say so.` |
| **Allow "I don't know"** | `If you are not sure, say "I don't know" rather than guessing.` |
| **Separate fact from guess** | `Label each point as fact, inference, or guess.` |
| **Ask for the counter-argument** | `What argues against this answer?` |
| **Ask how it got there** | `Explain how you arrived at this, step by step.` |
| **Check it yourself** | The higher the stakes, and the more a human is affected, the more you verify against the original source. |

The more the model must pull from its training, the more likely it invents. The more facts you hand it, the less it has to make up.

## 4. Improve responses with these pro tips

- **State the audience and the goal.** "For a board member deciding whether to proceed."
- **Set the length and format.** "One page." "A table." "Three bullets."
- **Give an example of good.** Paste a sample of what you want and say "match this style."
- **Say what to leave out.** "No jargon. No background I already know."
- **Ask for several options.** "Give me three versions with different tones."
- **Ask it to critique its own draft.** "List the weakest points in what you wrote, then fix them."
- **Ask it to question you first.** "Before you answer, ask me up to five questions you need answered."

That last one is my favorite. It flips the interview around, and the model finds the gaps in your prompt for you.

## 5. Iterate in small steps

One giant prompt is hard to write and hard to fix. Work in short rounds instead.

1. **Start small.** Ask for an outline, not the finished document.
2. **Look at it.** Decide what's right, what's wrong, and what's missing.
3. **Steer.** Say exactly what to change: "Shorten the second section. Make the tone less formal."
4. **Finish.** Ask for the final version only when the pieces are right.

### Example: a memo to your team

1. **Start small.** `I need a one-page memo to my team about [change]. Before you draft anything, give me an outline: four or five headings with one line each.`

   *You read it. "Background" and "Timeline" aren't needed.*
2. **Steer.** `Drop Background and Timeline. Put "What changes for you" first, and add a section on what has not been decided yet.`

   *Better. Now check the tone.*
3. **Steer again.** `Draft "What changes for you" only. Plain words, under 100 words, no hype.`

   *It reads right. Use that tone for the rest.*
4. **Finish.** `Now draft the full memo with these sections and that tone. Under 300 words. End with who to contact.`

Is a conversation drifting? Start a fresh one and paste in only what matters. Long chats lose track of earlier details.

## 6. Fix a weak response

Don't just try again. Find what went wrong, then change one thing in the prompt.

| What went wrong | Change this |
|---|---|
| **Too vague or generic** | Add context: who it's for, why, and what matters. |
| **Too long** | Set a limit: `Under 150 words. Three bullets.` |
| **Wrong tone** | Name the tone and the reader, or paste a sample to match. |
| **Invented facts** | Supply the facts, and add `Use only the information below. Say "I don't know" if it isn't there.` |
| **Ignored an instruction** | Make it one short instruction on its own line, and put it last. |
| **Drifted off topic** | State the goal again, or start a fresh conversation. |

Change one thing at a time. Then you know what worked.

## Want this for your team?

I run workshops and keynotes on AI for leaders and developers. Find me on the socials at <a href="https://agilegadgets.com/about" target="_blank" rel="noopener noreferrer">agilegadgets.com/about</a>.
