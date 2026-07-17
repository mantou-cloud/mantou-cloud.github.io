---
layout: page
title: Forklift Cargo Measurement
description: A two-second RGB-D cargo-dimension measurement unit for Hangcha Group.
importance: 5
category: work
related_publications: false
---

Independently designed, implemented, calibrated, and delivered a single-camera 3D cargo-measurement unit for Hangcha Group. The system estimates length, width, height, and volume from a RealSense D435i within two seconds.

## Pipeline

- Align color and depth frames and generate an Open3D point cloud
- Transform measurements into the world coordinate system through camera-height and tilt calibration
- Apply voxel downsampling and 3D ROI cropping to remove the floor and background
- Extract the cargo top plane with RANSAC and remove boundary outliers statistically
- Project the top plane to XY and use OpenCV `minAreaRect` for length and width; use world-frame Z for height
- Fuse eight valid measurements using the median to suppress depth noise and occasional plane-selection errors

## Outcome

The system supports cargo from small boxes to pallet-scale loads, produces stable measurements in approximately 1.5-2 seconds, and passed the client's first-phase acceptance on the first attempt.

**Technologies:** RealSense D435i, Python, Open3D, OpenCV, RANSAC, point-cloud processing
