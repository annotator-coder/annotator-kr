---
order: 12
title: Press Release Performance Dashboard
category: PR Performance · Data
tags:
  - Dashboard
  - PR Performance
  - Media Analysis
  - Node.js
  - Vercel
year: '2026'
tagline: 'Quality over quantity — weighting outlet, article type, and placement into a single press release score'
description: >-
  A static dashboard that cumulatively tracks and debriefs the "coverage status" reports generated after
  each press release goes out. Designed to measure quality, not just volume, through a 'PR Impact Score'
  that weights individual outlet scores and print placement.
problem: >-
  Coverage status reports for press releases were manually compiled and piled up as individual files. Each
  release's performance was known only by gut feel, making time-series or campaign comparison, and KPI
  management, impossible. A simple total-count tally showed only 'volume' — it missed 'quality' signals
  like major-outlet placement, business relevance, prominence, and print coverage, along with tone and
  how well key messages actually came through.
approach:
  - Extracted outlet counts (previously compiled as PDFs) and AI-analyzed the body text of clipped articles (tone, byline, key-message penetration) in-session, loading everything into a single JSON source (releases.json)
  - Built an individual outlet-score table (98 outlets seeded) and designed a 'PR Impact Score' formula that weights online, broadcast, and print scores
  - Covered the pure calculation functions (calc.js) with node:test so new releases can be added without regressions
  - Built and deployed a dashboard with KPI summary / time series / rankings / category ROI / tone & messaging / byline blocks, plus a single-release debrief card (card.html); results are compiled and compared the day after each release goes out
  - Deliberately scoped out anything the data couldn't support (e.g., tone analysis across the full online volume) — surfacing only metrics that hold up, without inflating them
outcome:
  - Converted individually distributed press releases into a single dataset comparable across time and category
  - Shifted the dashboard's core metric from 'count' to an 'Impact Score' reflecting major-outlet and print placement quality
  - New releases now flow into the pipeline automatically with just one added monitoring PDF and an AI session pass — no manual re-work
featured: false
relatedBlogSlugs: []
---
