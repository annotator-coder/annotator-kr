---
title: 'Claude Code from Your Phone: The Setup That Freed Me from My Desk'
date: '2026-05-23'
category: AI in Communications
excerpt: >-
  Running Claude Code from a smartphone via Tailscale + Termius SSH. How one
  setup made it possible to work from the subway, a cafe, anywhere.
readingTime: 5
relatedPortfolioSlugs:
  - crisis-ai-system
  - ai-reference
---
"I'm on the move right now — can you check the code quickly?"

Previously I would have said I don't have my laptop. Now I don't need to.

On the subway, after an outside meeting at a cafe, I run Claude Code from my smartphone.

**Why I Needed This**

I use Claude Code fairly aggressively: writing automation scripts, experimenting with embedding AI into workflows. But I have a lot of outside meetings, and there are always gaps between them when I want to run something but taking out the laptop feels awkward.

The insight: I don't need to run anything on the phone itself. I can SSH into the MacBook at home.

**The Two Tools**

Tailscale is a VPN, but unlike conventional VPNs it connects devices in a mesh structure. No complex router port-forwarding required. Log into the same Tailscale account on both your MacBook and your phone and that's it. Even on LTE, you can reach your MacBook as if it's on the same Wi-Fi network. The MacBook's Tailscale IP (100.64.x.x) is fixed, so once set up it never needs to change.

Termius is an SSH client that works on both iOS and Android. Save a connection profile and you're one tap from access. Enter the Tailscale IP as host, port 22, MacBook username and password — done. The MacBook just needs Remote Login enabled in System Settings.

**The Actual Flow**

Finishing an outside meeting, sitting in a cafe: open Tailscale on the phone, open Termius, tap the saved profile, SSH connects to the MacBook terminal. Type `claude` and start.

The MacBook's full environment — files, code, settings, API keys — is in your hands even though the MacBook is at home.

Typing on a phone might sound uncomfortable, but Claude Code is conversational. A few short instruction lines read a file, modify it, run it. Not needing to type long commands turns out to be an advantage in mobile use.

I also run OpenAI's Codex CLI in the same SSH session with the `codex` command. Claude Code and Codex have slightly different styles, so I choose based on the nature of the task. Being able to compare two tools in the same environment is another benefit of this setup.

**Security Note**

Tailscale uses WireGuard-based encryption and communicates only between authenticated devices — much safer than opening a port publicly. Currently using password authentication; planning to switch to SSH key (ed25519) authentication.

**The Concept**

Not as heavy as a cloud IDE or remote desktop. No additional cost. It's just using the MacBook already at home as a server. If you use Claude Code or Codex, this one setup means your workspace is no longer limited to sitting in front of the MacBook.

---

*Tools used: Tailscale, Termius, Claude Code, Codex CLI*
