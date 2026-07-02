---
order: 13
title: SNS Content Proposal Automation System (Instagram · LinkedIn)
category: Content Automation · AI
tags:
  - Automation
  - Content Planning
  - Human-in-the-loop
  - Multi-channel
  - Brand Voice
year: '2026'
tagline: 'Channel-specific SNS content proposal automation'
description: >-
  A system that researches refining and future-energy issues to periodically propose Instagram and
  LinkedIn carousel content ideas. The same pipeline skeleton is applied separately per channel, each
  with its own tone, language, and visual grammar.
problem: >-
  Finding weekly SNS content material and drafting carousel concepts depended entirely on one person's
  research bandwidth and time. The channels don't share a grammar — Instagram runs on casual Korean,
  a warm cream palette, and strict 7-day news relevance, while LinkedIn runs on authoritative English
  copy, a sky-blue isometric look, and looser timeliness — so every cycle started from scratch, which
  made the work slow and inconsistent in quality.
approach:
  - 'Designed a shared 7-stage pipeline — collect → reference → shortlist → draft → image → assemble → email draft — as a common skeleton for both channels, implemented as two separate skills (`/insta-제안`, `/linkedin-제안`)'
  - Differentiated the research rules per channel — Instagram strictly enforces a D-7-to-D 7-day window to stay newsy, while LinkedIn blends evergreen insight content with looser timeliness in a hybrid model
  - Reverse-engineered color, typography, and card types from existing official content (2 Instagram carousel samples, 8 LinkedIn brand assets) into a fixed style template, then reproduced the card mockups in HTML/CSS so copy edits show up instantly
  - Scoped image generation to photo/illustration areas only (flat hand-drawn style for Instagram, 3D isometric for LinkedIn) to keep brand tone consistent
  - Placed two approval gates — right after topic shortlisting and right after the full draft — so nothing advances to the next stage without the team lead's sign-off
  - Auto-generates and sends a summary email with links to the output, with verification happening together in a follow-up meeting
outcome:
  - Automatically produces, per channel, 3–5 weekly topic candidates plus a full carousel draft (6–8 cards for Instagram, 5–6 for LinkedIn) — from research through the email draft
  - Reused the same pipeline skeleton to cut build time for the second channel (LinkedIn)
  - Built fact-checking and brand-voice principles (no greenwashing, cite sources, disclose AI-drafted content) into the system itself, setting a quality floor for every output
featured: false
relatedBlogSlugs: []
---
