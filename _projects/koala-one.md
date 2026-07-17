---
layout: page
title: Koala One Composite Robot
description: A speech-driven quadruped mobile manipulator for navigation and grasping.
importance: 3
category: work
related_publications: false
---

Led the development of **Koala One** at Shanghai Magic AI (上海码极客人工智能科技有限公司): a speech-driven composite robot that combines a Unitree Go2 EDU quadruped, an ARX X5 arm, dual RealSense D435i cameras, and onboard inference.

## System workflow

Natural-language instruction -> LLM task decomposition -> quadruped navigation -> visual target detection -> robotic-arm grasping -> delivery to the requested location.

## My role

- Independently completed hardware selection, mechanical integration, wiring, networking, and on-site debugging
- Designed a two-stage grasping fallback: YOLO+SAM for fast target localization, followed by GraspNet for full 6D grasp estimation when the first attempt fails
- Implemented three-view inspection, view-specific calibration compensation, hand-eye calibration, and the complete camera-to-end-effector-to-base transformation chain
- Implemented Cartesian and joint-space trajectory interpolation for smooth arm motion
- Built a queue-based grasp task manager with retry, recovery, and completion callbacks
- Integrated ROS 2 on the quadruped, ROS 1 on the arm, and HTTP inference services through WebSocket and ROS topics
- Resolved Conda/ROS dependency conflicts and ARM OpenMP deployment issues and prepared reliable startup scripts

## Outcome

The system served as a core live demonstration at the company's annual event and the Rongpiao Talent Fair.

**Technologies:** Unitree Go2 EDU, ARX X5, RealSense D435i, ROS/ROS 2, YOLO, SAM, GraspNet, WebSocket
