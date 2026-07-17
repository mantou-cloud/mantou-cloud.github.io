---
layout: about
title: about
permalink: /
subtitle: M.Eng. Student | Embodied AI | Multimodal Perception | Robotics

profile:
  align: right
  image: prof_pic.jpg
  image_circular: true # crops the image to make it circular
  more_info: >
    <p>GitHub: <a href="https://github.com/mantou-cloud">@mantou-cloud</a></p>

selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: false # adds a vertical scroll bar if there are more than 3 news items
  limit: 3 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: false # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

I am **Kaiyuan Deng**, an M.Eng. student in Computer Technology at the **University of Electronic Science and Technology of China (UESTC)**. My research focuses on **embodied intelligence and multimodal perception**, with particular interests in robotic manipulation and multimodal large language models.

My work spans egocentric visual reasoning, vision-language-action learning, 3D hand-trajectory prediction, high-value data selection, and embodied robotic systems.

## Research interests

- Embodied intelligence and robotic manipulation
- Multimodal large language models and vision-language-action models
- Egocentric visual reasoning and 3D trajectory prediction
- Robot perception, simulation, and system integration

## Education

**University of Electronic Science and Technology of China (UESTC)**<br>
Professional M.Eng. in Computer Technology, School of Computer Science and Engineering<br>
Sep. 2024 - Jun. 2027 (expected) | Graduate Academic Scholarship

**University of Electronic Science and Technology of China (UESTC)**<br>
B.Eng. in Data Science and Big Data Technology, School of Computer Science and Engineering<br>
Sep. 2020 - Jun. 2024 | GPA: **3.98/4.00**

Received First-Class Academic Scholarships for two consecutive years, a provincial second prize in the Datang Cup, and a provincial second prize in the Huawei Cup.

## Experience

**Huawei Technologies, 2012 Laboratories - Autonomous Driving Simulation R&D Intern**<br>
May 2026 - Jul. 2026

Built and deployed a CARLA-based closed-loop simulation toolchain. Integrated five types of road environments, OpenDRIVE road networks, Waymo open datasets, trajectory replay, traffic flow, ADS takeover, and real-time web streaming; deployed the system on a GPU+NPU environment at a JAC client site.

**Shanghai Magic AI (上海码极客人工智能科技有限公司) - Algorithm Intern**<br>
Aug. 2025 - Mar. 2026

Led hardware selection, structural design, assembly, and debugging for the **Koala One** quadruped-mobile-manipulator platform based on Unitree Go2, ARX X5, and RealSense. Also developed a RealSense-based forklift cargo-volume measurement unit using Open3D and OpenCV; the system passed the client's first-phase acceptance.

## Selected research

### Ego3S: Select, Strengthen, and Synchronize for Efficient Egocentric Reasoning

**ICML 2026**

Shenshen Li, **Kaiyuan Deng**, Ruohuai Xie, Xing Xu, Heng Tao Shen, Yazhou Yao, Fumin Shen

Ego3S addresses inertia thinking in large vision-language models through a three-stage training framework: counterfactual sample selection, interaction-centric reinforcement learning, and evolving curriculum recuration. It achieves stronger egocentric reasoning with 26.5% of the training data while reducing computation by more than 46%.

### MiVLA: Towards Generalizable Vision-Language-Action Model with Human-Robot Mutual Imitation Pre-training

**CVPR 2026 Findings**

Zhenhan Yin, Xuanhan Wang, Jiahao Jiang, **Kaiyuan Deng**, Pengqi Chen, Shuangle Li, Chong Liu, Xing Xu, Jingkuan Song, Lianli Gao, Heng Tao Shen

MiVLA learns cross-embodiment behavior priors from simulated robot demonstrations and human videos without real-robot data during pre-training. I independently delivered the complete LocoMan real-robot pipeline, including platform integration, VR teleoperation data collection, Isaac Gym validation, model deployment, and all LocoMan experiments.

### Visual Causal Intervention for 3D Egocentric Multimodal Hand Trajectory Forecasting

**ICME 2026**

**Kaiyuan Deng**, Xun Jiang, Zheng Wang, Fumin Shen, Xing Xu

This work identifies historical trajectories as a confounder that lets multimodal forecasting models bypass visual reasoning. The proposed VCI module reconstructs missing trajectory segments from visual evidence, blocks the spurious backdoor path, and establishes state-of-the-art results on the standard H2O-PT and EgoPAT3D-DT benchmarks and the new H2O-CR and EgoPAT3D-CR robustness benchmarks.

### Truth in the Few: High-Value Data Selection for Efficient Multi-Modal Reasoning

**IEEE Transactions on Multimedia (TMM), under review**

Shenshen Li, **Kaiyuan Deng**, Lei Wang, Hao Yang, Chong Peng, Peng Yan, Fumin Shen, Heng Tao Shen, Xing Xu

Truth in the Few introduces Reasoning Activation Potential (RAP), combining causal discrepancy, attention confidence, and difficulty-aware replacement to identify high-value multimodal reasoning data. It improves performance with 9.3% of the training corpus while reducing computation by more than 43%.

See my [projects](/projects/), explore my work on [GitHub](https://github.com/mantou-cloud), or [download my resume](/assets/pdf/resume.pdf).
