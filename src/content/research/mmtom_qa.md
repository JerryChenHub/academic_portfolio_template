---
title: "MMToM-QA: Multimodal Theory of Mind Question Answering"
shortTitle: "MMToM-QA"
summary: "A multimodal benchmark and reasoning method for evaluating whether machines can infer human goals and beliefs from video and text."
authors:
  - Chuanyang Jin
  - Yutong Wu
  - Jing Cao
  - Jiannan Xiang
  - Yen-Ling Kuo
  - Zhiting Hu
  - Tomer Ullman
  - Antonio Torralba
  - Joshua Tenenbaum
  - Tianmin Shu
venue: "Association for Computational Linguistics"
year: 2024
order: 2
image: "media/mmtom_qa.webp"
imageAlt: "MMToM-QA household activity benchmark"
award: "Outstanding Paper Award"
links:
  - label: Project page
    url: https://chuanyangjin.com/mmtom-qa
  - label: Paper
    url: https://arxiv.org/abs/2401.08743
  - label: Code
    url: https://github.com/chuanyangjin/MMToM-QA
---

## Overview

MMToM-QA is a benchmark for Theory of Mind reasoning across video and text. Its questions test whether a model can infer a person’s goals and beliefs from multimodal observations of household activity.

## Approach

The project introduces BIP-ALM, a method that combines language models with Bayesian inverse planning. It builds a shared representation from both input modalities and performs structured inference over hidden mental states.

## Contribution

The benchmark exposes systematic gaps between current multimodal models and human reasoning, while the proposed model demonstrates the value of combining flexible learned representations with model based inference.
