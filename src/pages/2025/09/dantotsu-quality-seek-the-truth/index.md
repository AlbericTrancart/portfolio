---
title: 'Dantotsu Quality learning - Seek the truth'
description: 'The 3rd of 10 mental models to write better quality code'
slug: dantotsu-quality-code-seek-the-truth
thumbnail: ./thumbnail.png
date: 2025-09-16
tags: ['Dantotsu Quality', 'Web development', 'Mental models']
---

**It is the #1 cause of bugs**

🧠 Our brains are heuristic machines. They fill in gaps, make assumptions, and take shortcuts to make quick decisions from incomplete information.

That's an incredible strength: we can build web apps without ever needing to understand how a transistor works.

But it's also a major weakness: most of the time, when a developer writes a faulty line of code, it's because their brain made a wrong assumption - and never tested it.

❌ The problem? The brain took a shortcut that leads straight off a cliff.

This is why defect analysis is so powerful: **a bug isn't just something to fix, it's the symptom of a flawed mental model.**

And that's also why **it's much more valuable to analyze a defect caught early than a year-old production bug**. Because when you catch it early, the person who made the false assumption is still around. That's when you can perform the surgical act of replacing a wrong belief with solid knowledge.

🔎 Doing this means challenging what you think you know, and searching for the truth where it actually lives: in the docs, in the source code of the libraries you use, in the logs, in memory.

And when you do it, [Just Effing Do It (JEDI)](/2025/09/dantotsu-quality-just-effing-do-it-jedi/). Don't skip steps. Read the message / the docs / the code - top to bottom, left to right. It won't always be sexy, but the answer is usually in there.

So next time you hit a bug, instead of running a bureaucratic post-mortem, ask yourself these two questions:

- **What did I think I knew that turned out to be false?**
- **Where can I find the information that will improve my understanding of the systems I'm working with?**
