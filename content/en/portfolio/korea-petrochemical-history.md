---
order: -2
title: Built Molecule by Molecule — A History of Korean Petrochemicals
category: Data Story · Industrial History
tags:
  - Interactive
  - Data Visualization
  - Scrollytelling
  - Fact-checking
  - Claude Code
year: '2026'
tagline: From 115,000 tons of ethylene to 13 million, sixty years on one page
description: >-
  A vertical-scroll data story that follows a single molecule, ethylene, through sixty years of Korean
  petrochemical growth and the structural shift the industry faces now. Charts and process diagrams
  drawn by hand, with no external libraries.
problem: >-
  Stories about the petrochemical downturn run every day, but it was hard to find anything that explained
  how the industry got here in the first place. Timelines list years; reports stack up numbers. To make
  sense of words like Chinese capacity build-out, oversupply and restructuring, you need the sixty years
  that came before. We needed something a general reader could get through in fifteen minutes and come
  out saying, "So that's why things look like this now."
approach:
  - Used ethylene capacity as the baseline for the industry's size, and ran one continuous line from import substitution in the 1960s through the Ulsan, Yeosu and Daesan complexes, the 1990s capacity race, the post-1997 restructuring, Chinese demand and today's oversupply
  - Split chapters by how the growth formula changed rather than by year, and held to one question and one number per screen
  - Built the charts in SVG by hand, including a Korea–China capacity toggle, an ethylene product tree and an MFC process diagram where readers pick the feedstock. No CDN, so it runs offline
  - Kept a separate source list and fact-check ledger with a verdict on every figure. Where official sources disagreed (C4 and pygas capacity, for instance), the numbers stayed off the page until confirmed
  - Visually separated nameplate capacity from actual shipments, and confirmed facts from forecasts and policy targets. Read the crisis as a change in competitive conditions, not the end of an industry
  - Let the company appear only three times within the industry narrative, then gathered its story once near the end. The aim was something closer to a read than a brochure
outcome:
  - Turned the path from 115,000 tons of domestic ethylene capacity in 1978 to 13.01 million tons in 2025 (world No. 4) into an interactive story
  - Left a verification memo with the computed figures, such as Korea's 4.2% vs China's 10.9% annual capacity growth over 2015–2025, giving the team a reusable fact sheet
  - Serves as background material that can be handed to reporters and stakeholders in a single link when explaining the industry
href: 'https://korea-petrochemical-history.vercel.app'
featured: true
relatedBlogSlugs: []
---
