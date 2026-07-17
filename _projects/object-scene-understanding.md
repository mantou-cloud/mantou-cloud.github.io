---
layout: page
title: 3D Scene Understanding
description: An online and offline RGB-D pipeline for 3D detection and scene graphs.
importance: 6
category: work
related_publications: false
---

Built an end-to-end scene-understanding pipeline on a Unitree Go2 platform, from RGB-D acquisition and camera localization to world-frame 3D boxes and functional/spatial relation graphs.

## Pipeline

- Extended ORB-SLAM3 RGB-D and RGB-D-Inertial applications to save synchronized RealSense D435i color, depth, and 4x4 camera poses in CA1M format
- Used CuTR for single-frame 3D detection and BoxFusion for cross-frame association, 3D OBB NMS, small-object correspondence, and multi-view box fusion
- Applied OpenCLIP for zero-shot semantic classification
- Generated functional and spatial scene relations with Qwen-VL and exported structured JSON outputs
- Enhanced Rerun visualization with semantic 3D boxes and visible relation edges

## Online deployment

Implemented a ROS 2 `MultiSensorFusion` node with bounded queues, input throttling, and configurable TF-based pose synchronization. The checked implementation currently runs with identity poses by default; when TF is enabled, it supports nearest-timestamp RGB/depth/pose matching within a 50 ms window. A dataset adapter lets the online stream reuse the offline BoxFusion inference stack.

The offline pipeline is stable; the online pipeline is operational and under continued optimization.

**Technologies:** ORB-SLAM3, RealSense D435i, CuTR, BoxFusion, OpenCLIP, Qwen-VL, ROS 2, Rerun
