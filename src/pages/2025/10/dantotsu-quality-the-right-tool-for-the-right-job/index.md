---
title: 'Dantotsu Quality learning - The Right Tool for the Right Job'
description: 'The 6th of 10 mental models to write better quality code'
slug: dantotsu-quality-code-the-right-tool-for-the-right-job
thumbnail: ./thumbnail.png
date: 2025-10-28
tags: ['Dantotsu Quality', 'Web development', 'Mental models']
---

🔨 **When you're holding a hammer, everything looks like a nail.**

It's a classic cognitive bias - one that easily traps us. Comfort and habit create overconfidence, and we forget that not every problem is the same.

*Example #1:* "I used DynamoDB to store event data. It worked great, so I reused it for a new feature - but this time the data was more relational... and everything fell apart."

It sounds obvious in hindsight: you should use the right tool for the problem you're solving.

**But the hardest part isn't picking the screwdriver - it's realizing that what you're facing is actually a screw!**

This is where semantics come into play: what's the real meaning of the things I'm manipulating? Is this problem truly the same as another one I've solved before?

*Example #2:* a team once tried to build an autocomplete feature starting from a "select" component. Visually, they look similar. But semantically, they're two very different patterns - different behaviors, constraints, and user expectations. The result? Bugs everywhere.

One of the best ways to tell a screw from a nail is to understand the concepts you're working with more deeply (see the [Seek the Truth mental model](/2025/09/dantotsu-quality-seek-the-truth/)).

**The better we name things, the more clearly we see the problem in front of us.**