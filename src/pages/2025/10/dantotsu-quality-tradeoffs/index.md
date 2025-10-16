---
title: 'Dantotsu Quality learning - Tradeoffs'
description: 'The 5th of 10 mental models to write better quality code'
slug: dantotsu-quality-code-the-right-tool-for-the-right-job
thumbnail: ./thumbnail.png
date: 2025-10-14
tags: ['Dantotsu Quality', 'Web development', 'Mental models']
---

**⚖️ Everything is a choice.**

My first *gemba* with Michael Ballé (a lean sensei) left a deep impression on me.
We had installed a third-party component library to solve some accessibility issues on our frontend. He asked me:

"Ok, accessibility is what you gain - but what do you lose?"
"What do you mean, what do I lose?"
"..."

Every choice has consequences - some positive, some negative.
Even identifying those consequences can be hard (in this case: increased security attack surface, outsourcing maintenance to a third party, larger bundle size...).

**But the hardest step is often realizing that you're actually making a choice.**

Installing a library is a choice. Choosing a SaaS is a choice. Those are obvious ones.
But writing a single line of code is also a choice. Not writing it is another (never forget the empty set option!) - and arguably, it's often the best one.

Many bugs and flaws stem from unconscious choices - when the person never took the time to imagine the consequences of their actions.

The best approach (and the hardest one, because it requires discipline) is to act more *deliberately* and *thoughtfully* - rather than improvising code as you go.