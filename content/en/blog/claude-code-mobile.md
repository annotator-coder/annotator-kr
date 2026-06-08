---
title: "You Can Now Use Claude Code and Codex Without a MacBook"
date: '2026-05-23'
category: AI in Communications
excerpt: "I started using Claude Code on my phone — on the subway, in cafés between meetings. One Tailscale + Termius SSH setup, and my workspace is no longer tied to my MacBook."
readingTime: 5
relatedPortfolioSlugs:
  - crisis-ai-system
  - ai-reference
---
PR teams are on the move a lot. When I'm out for external meetings or events, I do some work on my phone — but it never feels quite right.

Carrying a laptop everywhere is impractical, and more time gets lost than you'd expect.

Now it's different. On the subway, in a café after an external meeting — I run Claude Code from my phone.

**Why I Needed This**

I use Claude Code fairly aggressively. I write automation scripts, run continuous experiments with AI integrated into my workflow. But with frequent external meetings, I'd often want to try something during downtime between meetings, and pulling out the laptop was awkward.

Then an idea occurred to me: I don't need to run it on my phone. I can just SSH into the MacBook sitting at the office or at home.

**The Two Key Tools**

Tailscale is a VPN — but unlike traditional VPNs, it connects devices in a mesh structure. No need to configure router port forwarding or anything complicated. Log in to Tailscale on both your MacBook and your phone with the same account, and that's it. Even on a cellular connection, you can access your MacBook as if you're on the same Wi-Fi. The MacBook's Tailscale IP (100.64.x.x) is fixed, so once it's set up you never have to change it.

Termius is an SSH client available for both iOS and Android. Save a connection profile and you connect with a single tap. Enter your MacBook's Tailscale IP along with your username and password, make sure Remote Login is enabled on the MacBook, and you're done.

**What the Flow Actually Looks Like**

Take a typical scenario: wrapping up an external meeting, sitting down at a nearby café for a few minutes. Open Tailscale on my phone, launch Termius, tap the saved profile, and I'm SSH'd into the MacBook's terminal. Type `claude` and that's all there is to it.

Even without my MacBook in front of me, my entire MacBook environment — files, code, settings, API keys — is right in my hands.

Typing on a phone might seem painful, but Claude Code is conversational by design, which makes it far more workable on mobile than you'd expect. A few short lines of instruction and it reads files, makes edits, and runs things for you. Not having to type out long commands is actually an advantage in a mobile environment. With Auto mode on, I don't need to confirm every step — I come back to the results when I return to the office.

Lately I've also been using OpenAI's Codex CLI alongside it. It runs with the `codex` command in the same SSH session. Claude Code and Codex have somewhat different styles, so I switch between them depending on the task. Being able to compare two tools side by side in the same environment is another advantage of this setup — though Codex can now also run natively within its own app.

**The Range of Use Has Been Wider Than Expected**

At first I thought I'd reach for it only when I really needed it. Now it's a habit. I review and edit code while commuting, test scripts the moment an idea hits, and maintain continuity on work even during brief outings where bringing a laptop doesn't make sense.

**A Note on Security**

Tailscale uses WireGuard-based encryption and only allows communication between authenticated devices — considerably safer than exposing a port on a public IP.

**The Core Idea**

This isn't a heavy cloud IDE or remote desktop — and it costs nothing extra. It's just using the MacBook you already have at home as a server. If you're already using Claude Code or Codex, this single setup frees your workspace from being tied to wherever your MacBook happens to be.

I'm not someone who believes in working more just for the sake of it — but my mobile work efficiency has genuinely gone up by at least 1.5x. Highly recommended. (And not carrying a laptop means your shoulders thank you too.)

---

*Tools used: Tailscale, Termius, Claude Code, Codex CLI*
