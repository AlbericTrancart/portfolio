---
title: 'Dantotsu Quality learning - Complexity, the ultimate evil'
description: 'The 7th of 10 mental models to write better quality code'
slug: dantotsu-quality-complexity-the-ultimate-evil
thumbnail: ./thumbnail.png
date: 2025-11-11
tags: ['Dantotsu Quality', 'Web development', 'Mental models']
---

Don't write works of art 🖼️ - write road signs instead! 🚦

Complexity is a multiplier of bugs and costs: it makes reading, modifying, and deleting code significantly more expensive. Our brains burn far more energy analyzing twisted code than a simple, explicit sequence of instructions.

Complexity is insidious because it creeps in gradually. Like the proverbial frog slowly brought to a boil, we get used to it and stop noticing. As the author of [grugbrain.dev](https://grugbrain.dev) puts it so perfectly: _"given choice between complexity or one on one against t-rex, grug take t-rex: at least grug see t-rex."_

The idea that code should be perfect, with "a work of art" (i.e. something complex) as the definition of perfection, is completely misguided.

**Code isn't made for machines.**

I repeat:

**Code isn't made for machines.**

**Code is made to be read by humans** (otherwise we wouldn't write it in English).

**Code is made to be _understood_.**

So its primary quality should be _affordance_: how much its form (what I see) suggests its usage (how it works).

What's extremely well-designed to be affordant? Road signs. Instantly understandable at 130 km/h by absolutely anyone.

**So don't create works of art. Design road signs!**

Here are a few thought-starters applied to code:

- A bugfix that adds an `if` is a bad bugfix. A bugfix that simplifies the code or repairs an existing system is a good one.
- When you're thinking about adding a new level of abstraction (for example, generating forms from a config), you should perceive the cost as exponential, not linear.
- Code is at least as complex as the business domain-so challenge the domain first (see the ["garbage in, garbage out" mental model](/2025/09/dantotsu-quality-garbage-in-garbage-out/)).
- There are actual metrics (cyclomatic complexity, cognitive complexity) to assess this more objectively than gut feeling.

PS - a few of my favorite quotes, worth repeating over and over:

> "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away." - Saint-Exupéry

> "Simplicity is the ultimate sophistication." - Da Vinci
