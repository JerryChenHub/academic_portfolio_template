---
title: "Smart Sensor Placement Using Machine Learning and Bayes Risk for Structural Health Monitoring of Air Vehicles"
shortTitle: "Smart Sensor Placement"
summary: "An aircraft structural health monitoring framework that uses machine learning and Bayes risk to place strain sensors where they provide the most reliable evidence of damage."
authors:
  - Vanessa Chung
  - Boyang Chen
  - Addison Rushing
  - Jacqueline Huynh
venue: "AIAA AVIATION 2026 Forum"
year: 2026
order: 0
image: "media/smart_sensor_placement_system.webp"
imageAlt: "System diagram of fiber Bragg grating sensor clusters distributed across a Boeing 747 and connected to an interrogator and computer for strain analysis"
imageFit: "contain"
detailImage: "media/smart_sensor_damage_comparison.webp"
detailImageAlt: "Comparison of simulated strain contours for an undamaged aircraft structure and a damaged case with stiffness reduction ratio r E equal to 0.7"
detailImageCaption: "Simulated strain response for undamaged and damaged structural cases. The marked regions show how local stiffness loss changes the strain field."
projectPage: "projects/smart_sensor_placement/"
links:
  - label: Paper
    url: https://arc.aiaa.org/doi/abs/10.2514/6.2026-4678
---

## Overview

This work asks how a limited sensor network can monitor an air vehicle reliably across uncertain damage and operating conditions. It combines structural simulation, machine learning, and Bayes risk to identify sensor locations that are informative for damage detection and practical for deployment.

## Approach

High fidelity finite element simulations generate strain responses for undamaged and damaged structures across multiple flight conditions. A machine learning model interprets candidate sensor measurements, while Bayes risk evaluates the expected consequences of missed and false detections to guide sensor placement.

## Contribution

I researched how aircraft damage should be represented computationally, together with the loads and environmental conditions experienced by a Boeing 747 across different flight states. I then designed a script driven NX Nastran workflow that varied damage location, geometry, severity, and flight condition and ran the cases in batches. This gave Vanessa's experiments a large, reliable dataset grounded in realistic aircraft loading and structural response.
