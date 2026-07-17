---
layout: page
title: MagicBot Dual-Engine System
description: A ROS-based VLM-VLA robot with speech-driven task execution.
importance: 4
category: work
related_publications: false
---

Developed **MagicBot** for the Dual-Engine Intelligence industry-university-research project. The system follows a brain-cerebellum architecture: a VLM understands multimodal observations and decomposes long-horizon instructions, while a VLA maps atomic tasks to continuous robot actions.

## My role

- Fine-tuned PaliGemma2-3B on approximately 40,000-50,000 multimodal samples using LLaMA-Factory, eight A100 GPUs, and DeepSpeed ZeRO-3
- Built the complete demo stack, including Whisper speech recognition, streaming XTTS synthesis, LLM prompting, VLM/VLA inference, multi-arm interaction, hardware initialization, and ROS integration
- Connected perception, reasoning, speech, and manipulation into an end-to-end human-robot interaction loop

## Outcome

The deployed system executed desktop cleanup and food-ordering tasks through natural-language interaction, demonstrating a complete listen-think-act workflow.

**Technologies:** ROS, PaliGemma2-3B, LLaMA-Factory, DeepSpeed ZeRO-3, VLA, Whisper, XTTS
