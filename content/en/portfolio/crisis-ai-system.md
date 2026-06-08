---
order: 1
title: Media Crisis Response AI System
category: AI · Crisis Management
tags:
  - AI
  - Automation
  - Node.js
  - Crisis Management
  - PM2
year: '2026'
tagline: 'From issue detection to response drafts, cutting team response time by 8x'
description: >-
  An AI-driven crisis response pipeline that automates the full flow from media issue monitoring → severity classification → response message draft generation. An internal operations system for the PR team.
problem: >-
  In media crises, speed is everything. The time from issue detection to approved response message was the team's critical bottleneck. Information took an average of over an hour to reach the PR team, and drafting a response direction, crafting key messages, aligning on them, and reaching final approval routinely took 3–4 hours or more.
approach:
  - Refine available information as quickly as possible once an issue is identified
  - Compare against past cases, then draft a response plan and message to support decision-making
  - 'GPT-based severity classifier implemented (5-level scale with automatic issue type tagging)'
  - Response draft generation via RAG pipeline built on historical case database
  - 'PM2-based server operations; generated packages archived for retraining'
outcome:
  - 'Issue detection → draft generation time: 2 hours → under 15 minutes'
  - Clear visibility into past response patterns and procedural steps
  - Standardized team crisis response process with automatic SOP integration
images:
  - src: /portfolio/crisis-ai-type-select.png
    caption: 01 Crisis Type Selection — automatic default severity classification (BLACK/RED) across 7 crisis types
  - src: /portfolio/crisis-ai-input-form.png
    caption: 03 Fact Verification Level / 04 External Spread Status — separating confirmed facts from unverified details to improve AI draft accuracy
featured: true
relatedBlogSlugs:
  - ai-pr-crisis
---

