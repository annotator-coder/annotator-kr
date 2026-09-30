---
title: "I Reread Four Months of News Clippings"
date: '2026-09-30'
category: Essays & Columns
excerpt: "Our PR team clips the top news twice a day. Rereading four months of it, 246 files, showed me more about our team than about the world."
readingTime: 7
relatedPortfolioSlugs:
  - press-release-performance-dashboard
  - ai-newsroom-team
---

There's a job on our PR team that comes around twice a day. Morning and afternoon, someone picks the day's key news stories and binds them into a single PDF. The duty rotates, and the finished file goes up to leadership.

When I was a reporter, I was on the other end of this. I had no way of knowing whether my story had made it into some company's morning briefing, but there were days I wrote hoping it would. After I changed jobs, I became the one doing the picking. From mid-February to early July, the files piled up to 246. Eighty-six business days, 2,645 articles.

At some point it started to feel like a waste. We make it every day, it gets read once, and it disappears into a folder. What would show up if I read it all again in one go? In early July I cleared an entire day and took it apart with AI.

## The table of contents was text. The articles were pictures.

The first snag was the file format. Each clipping PDF runs cover, table of contents, then articles. Only the contents page is text. The articles are all scanned images, which makes sense when you're literally cutting and pasting newspaper pages.

Luckily, the contents page had almost everything I needed: date, morning or afternoon, headline, outlet. All of that came out cleanly without OCR. The trouble was bylines and body text. Who wrote a piece, and how many times a competitor shows up inside it, can only be read off the image.

So I ran OCR on every page. Even split across six parallel Korean-language processes, it took about thirty minutes. Byline recognition came in around 85 percent. Not bad, but there were some funny errors. "GS" kept coming out as "68." To a machine, two Latin letters look a lot like digits. In the end I had to find our company by the Korean part of its name instead.

Headlines and body text told very different stories, too. Competitors appeared in headlines only about a fifth as often as they did in the articles themselves. Count headlines alone and competitors barely register. In reality they were all over the copy. It reminded me of writing headlines back in the newsroom and cutting company names. The name readers don't recognize is the first thing to go.

## Each person on duty saw different news

What I most wanted to know was this: the person on duty changes every day, so does the selection change with them?

It did. Matching the duty roster to each date, I found that on one person's days, oil-price stories ran more than three percentage points above average. On another's, there was more government policy. Someone else picked fewer international-affairs pieces. Nothing I'd call serious bias. But different enough that you could tell who did the picking from the numbers alone.

It's hard to call that a problem. Clipping is a judgment call by nature, and judgment carries whatever that person usually thinks matters. Still, leadership probably assumes the news they get each day is chosen by the same standard. We needed to know about that gap. We talked about building a shared checklist as a team. There's a draft, but we haven't settled it yet.

## Four months of oil

Sorted by topic, the answer was anticlimactic. Oil prices and energy supply made up a third of everything. International affairs followed at 23 percent, government policy at 11. With the Iran and Strait of Hormuz situation dragging on for close to twenty weeks, that made sense.

The trend lines said a bit more. Petrochemical stories sat just above 10 percent in February, climbed close to 18 percent in April, and fell back in July. You could see the Middle East crisis spill over into worries about feedstock, then settle down. Policy stories peaked in April, and whenever a new policy issue came up, coverage usually hit its high within a week and then dropped off. For someone in PR, that means the window to respond is shorter than you'd think.

I also pulled every article that named our company directly and read them one by one. Most were favorable. But when I looked at what came up most, it wasn't our core business. It was our sports team. Having plenty of good press and actually getting our own story out are two different things. That one stung a little.

## What AI did, and what I did

Getting it done in a day was thanks to AI. Parsing the contents pages, OCR, tagging, aggregation, building a dashboard: it came to about ten scripts, and when a new month of files comes in, you just run them again in order. In the past, that would have been several weeks of an intern's time.

But there were parts a person clearly had to do. I didn't automate classifying tone as favorable, neutral or critical. I read about sixty articles through to the body text and judged each one myself. Some headlines read neutral but carry a sting in the last paragraph. Some pieces look critical but are actually defending the whole industry. Keywords don't catch that.

I changed one term, too. The draft analysis had a certain expression attached as a category name. We decided not to use it in our own sentences and settled on different wording. Quotes from articles stay as they were, but the words we write ourselves are ours to choose. It seems minor, but this kind of thing sets the attitude of a report.

There are finer-grained results by reporter and by outlet as well. Those stay inside the team. You can make a table of which reporters are friendly to you, but the moment it leaves the room it becomes a completely different thing.

## Putting the pile back to use

Finally, I loaded the monthly contents and the analysis into NotebookLM. When someone on the team asks something like "Which outlet wrote the most about fuel taxes in April?", the answer comes back with sources. The clippings no longer end at the report. They've become a record you can search.

Doing this changed how I think about it. I used to see clipping as a summary of what happened in the world. Reading it all again, what came through more clearly was what our team had been worried about for four months. The stories we pick each day are, in the end, the stories we cared about most that day.
