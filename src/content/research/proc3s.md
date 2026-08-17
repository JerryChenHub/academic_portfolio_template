---
title: "Trust the PRoC3S: Solving Long-Horizon Robotics Problems with LLMs and Constraint Satisfaction"
shortTitle: "Trust the PRoC3S"
summary: "A planning framework that pairs language models with continuous constraint satisfaction to solve long-horizon robot manipulation tasks."
authors:
  - Aidan Curtis
  - Nishanth Kumar
  - Jing Cao
  - Tomás Lozano-Pérez
  - Leslie Pack Kaelbling
venue: "Conference on Robot Learning"
year: 2024
order: 1
image: "media/proc3s.webp"
imageAlt: "PRoC3S robot planning examples"
links:
  - label: Project page
    url: https://aidan-curtis.github.io/proc3s.github.io/
  - label: Paper
    url: https://arxiv.org/abs/2406.05572
  - label: Code
    url: https://github.com/Learning-and-Intelligent-Systems/proc3s
---

## Overview

PRoC3S treats a language model proposed robot plan and its open parameters as a continuous constraint satisfaction problem. A solver searches for parameter values that obey geometric, kinematic, and physical constraints.

## Approach

When a proposed plan cannot be satisfied, the system reports the dominant failure modes to the language model and asks it to produce a revised plan. The work evaluates this loop on long-horizon drawing, rearrangement, stacking, and packing tasks.

## Contribution

The project shows how foundation models and classical robot planning tools can complement one another: the language model proposes flexible task structure, while explicit constraints test whether that structure can work in the physical world.
