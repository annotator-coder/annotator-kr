---
title: "How We Used AI to Speed Up PR Crisis Response"
date: '2026-05-20'
category: AI in Communications
excerpt: "We cut a process that used to take 2 hours — from issue detection to draft response — down to 15 minutes. Here's how we actually applied AI to real PR work."
readingTime: 7
relatedPortfolioSlugs:
  - crisis-ai-system
---
Speed is the essence of crisis response. Even the most carefully crafted message becomes worthless if the timing is off.
Whether you snuff out a spark early or let it burn out on its own — timing is everything.

This year, I took a hard look at our crisis response process. We had overhauled and updated it the year before, but something still felt lacking. When an issue surfaced, it took time before the team was even notified, and there were too many steps to get through — meetings, judgment calls, and drafting messages. Compared to how fast issues spread on X, Threads, and online communities today, our process had obvious limits.

**Defining the Problem: Where Was the Bottleneck?**

Breaking the process down, there were essentially three stages:

1. **Detection**: What issue has occurred, what are the objective facts as currently known, and when will new information be available?
2. **Assessment**: How serious is it, and what type of issue is this?
3. **Drafting**: How should we respond?

Step 1 was a matter of improving how quickly information reached the team. Steps 2 and 3, however, had real automation potential. Step 2 requires contextual judgment, but if AI could do an initial classification, the time a human needs to review it drops significantly.

**Design: A Pipeline Approach**

When designing the AI crisis response system, the guiding principle was not "full automation" but "human-AI collaboration" — AI drafts, humans judge and approve.

Real-time keyword monitoring through news APIs and RSS feeds was already in place. What mattered was the response workflow the moment an issue reached the team. Our crisis response app let users click on the issue type based on basic situational information. A Claude-based classifier then automatically tagged severity (on a 1–5 scale) and issue category. We built a database of past response cases and had the system generate draft responses using a RAG approach that referenced those examples.

**Results and Lessons Learned**

We got the time from issue detection to scenario development and draft completion down to under 15 minutes.

AI cannot replace PR judgment. Contextual interpretation, stakeholder relationships, and the tone of the final message still belong to humans. But when you use AI for the repetitive tasks of gathering, organizing, and drafting, you free up human energy for the decisions that actually matter.

Crisis situations in particular — even experienced professionals can get disoriented at the start. You need to cross-check whether anything has been missed from A to Z, confirm that decision criteria are clear, and work through each step quickly yet methodically.

With that in mind, the crisis response app works well as a process aid for the initial stages of a crisis — keeping you on track when it counts most.
