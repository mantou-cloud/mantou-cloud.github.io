---
layout: page
title: MiVLA on LocoMan
description: The complete real-robot pipeline for a quadruped dual-arm platform.
img: assets/img/projects/mivla-locoman.jpg
importance: 2
category: work
related_publications: false
---

MiVLA is a generalizable vision-language-action model trained through human-robot mutual imitation. It aligns human and robot action spaces and learns from simulated robot demonstrations and human videos without real-robot data during pre-training.

## My role

I independently delivered the complete LocoMan real-robot workflow:

- Installed, integrated, and debugged the quadruped dual-arm platform
- Built a VR teleoperation data-collection system based on Human2LocoMan
- Integrated the platform with Isaac Gym for simulation validation
- Deployed and validated trained policies on the physical robot
- Conducted all real-robot experiments reported for the LocoMan platform

## Result

MiVLA outperformed leading VLA baselines by 25% in simulation and 14% on real robots. On the composite LocoMan embodiment, mutual imitation was particularly important: the complete bidirectional objective achieved a 50% success rate, compared with 20% for the one-way variant.

**Technologies:** VLA, LocoMan, Human2LocoMan, VR teleoperation, Isaac Gym, PyTorch

[Read the paper](https://arxiv.org/abs/2512.15411)
