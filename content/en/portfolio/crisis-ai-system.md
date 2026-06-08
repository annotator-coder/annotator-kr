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
tagline: From issue detection to response draft — team response time cut by two-thirds
description: >-
  An AI-based crisis response pipeline that automates media monitoring →
  severity classification → response message drafting. Built for an energy
  company's PR team as an internal operating system.
problem: >-
  Speed is everything in a media crisis. The bottleneck was the time from issue
  detection to approved response message. When issues broke in the middle of the
  night, a team member had to manually collect articles, assess severity, and
  write a draft — averaging 90 minutes per incident.
approach:
  - Real-time keyword monitoring via News API + RSS feeds
  - 'GPT-based severity classifier (5-level scale, automatic issue type tagging)'
  - RAG pipeline over past response case DB for draft generation
  - PM2-based server management with Slack notification integration
outcome:
  - 'Issue detection to draft generation: 90 min → under 15 min'
  - Eliminated response gaps during nights and weekends
  - Standardized team crisis response SOP (auto-linked to system)
images:
  - src: /portfolio/crisis-ai-type-select.png
    caption: >-
      01 Crisis type selection — auto severity classification (BLACK/RED) by 7
      crisis types
  - src: /portfolio/crisis-ai-input-form.png
    caption: >-
      03 Fact verification level / 04 External spread status — separating
      confirmed facts from unverified to improve AI draft accuracy
featured: true
relatedBlogSlugs:
  - ai-pr-crisis
---

