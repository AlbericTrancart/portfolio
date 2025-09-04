---
title: 'Dantotsu Quality learning - the Broken Window'
description: 'The 1st of 10 mental models to write better quality code'
slug: dantotsu-quality-code-the-broken-window
thumbnail: ./thumbnail.png
date: 2025-07-21
tags: ['Dantotsu Quality', 'Web development', 'Mental models']
---

**What are the most common dev mistakes?**

Let me share with you the 10 mental models to help avoid as many defects/bugs as possible 🐞

I've been running tech dojos at [Theodo](https://www.theodo.fr/) for a year and a half now, and after reviewing hundreds of defects and bugs across many different teams, I've started noticing recurring patterns. From these patterns, **I created visuals to give devs useful mental models during our dojo sessions**.

This week, I'm sharing my personal favorite: **the Broken Window theory** 🪟. The idea is simple - **the presence of disorder (e.g., broken windows) creates a sense of impunity for the next person who breaks one**.

👉 A classic example in code:

> I know this code isn't great, but I saw it done that way elsewhere so I figured it was fine

(I've heard this dozens of times)

To fight disorder in our codebases - and the bugs that often come with it - we need to maintain strict discipline and address new mistakes immediately, or risk seeing them spread via CPDD: Copy-Paste Driven Development.

If you already have broken windows, **you need to address them one by one**. Invest the energy to train devs, fully repair the issue, and if possible, add a CI check to prevent it from happening again.

When I join a project, here are the broken windows I usually look at:

- bug backlog > 0
- unaddressed Sentry errors > 0
- untreated errors/warnings (linter, console…)
- dead code
- inconsistent file structure
- lava layer antipatterns (unfinished tech refactors)
- outdated dependencies

On the flip side, a clean, up-to-date, and well-organized codebase makes devs want to do things well, encourages quality, and prevents defects.

👉 **Any serious effort to improve a project's technical quality must start by fixing all known broken windows, with zero compromises**.
