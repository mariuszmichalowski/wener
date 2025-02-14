---
id: iot
title: IoT
---

# IoT

## Notes

- IoT 主旨是 let things accessible
  - 扩展/打破现有边界
  - 衍生新的产品方向
- 目前的主要访问方式是网络可访问 - 最终接入网络
- 上一代可能使用 zigbee 之类的路由 hub 接入网络，而现在大多直接接入 wifi
- 大多时候与外设打交道，熟悉各种接口协议尤为重要
- 选择不同的平台是成本控制
  - 例如 RPiZeroW 100 元左右，但使用 ESP32 能实现所需可能则很好的控制了成本
  - 例如 不需要网络，选择了 attiny 进行逻辑控制实现的功能又降低了成本
- 选择平台和语言长期投入的回报是复用性
  - 例如 arm 平台，avr 平台，mips 平台
  - 例如 C、JS、Golang、Lua
- 选择平台还意味着选择芯片 - esp32、attiny、stm32
- 选择外设接口同样重要

## Dev

- Golang
  - [Mainflux/mainflux](https://github.com/Mainflux/mainflux) - Messaging and Device Management Platform
  - https://www.mainflux.com/

## 平台

- [taosdata/TDengine](https://github.com/taosdata/TDengine)
  - [taosdata.com](https://www.taosdata.com)
  - [中文文档](https://www.taosdata.com/cn/documentation20)
