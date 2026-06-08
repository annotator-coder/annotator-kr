---
title: How I Cut PR Crisis Response Time by 3x with AI
date: '2026-05-20'
category: AI in Communications
excerpt: >-
  A process that took 90 minutes — from issue detection to response draft — now
  takes 15. Here's the concrete method for applying AI to real PR work.
readingTime: 7
relatedPortfolioSlugs:
  - crisis-ai-system
---
Speed is the core of crisis response.

When I took over as team lead, the first thing I examined was the crisis response process. When an issue broke in the early hours, the team member on duty would manually collect news, assess severity, write a draft response, and report it — averaging 90 minutes per incident. Compared to how fast issues spread, it was far too slow.

**Defining the Problem: Where Is the Bottleneck?**

Breaking the process down, it had three main stages:

1. **Detection**: What articles have been published?
2. **Judgment**: How serious is this? What type of issue is it?
3. **Drafting**: How do we respond?

Steps 1 and 3 had high automation potential. Step 2 requires contextual judgment, but if AI handles the initial classification, the time a human needs to review is dramatically reduced.

**Design: The Pipeline Approach**

The most important consideration when designing the AI crisis response system was not "full automation" but "human-AI collaboration." AI creates the draft; humans judge and approve.

I built real-time keyword monitoring via News API and RSS feeds, used a GPT-based classifier to auto-tag severity (1–5 scale) and issue type, and constructed a past-response-case DB to generate drafts via RAG retrieval.

**Results and Lessons**

Time from issue detection to draft completion dropped to under 15 minutes. The more important change: issues no longer fall through the cracks at night or on weekends.

AI cannot replace PR work. Contextual judgment, stakeholder relationships, and the tone of the final message remain human responsibilities. But by using AI for repetitive collection, aggregation, and drafting tasks, people's energy can be directed to the decisions that truly matter.
