---
id: glossary
title: Torrent 词汇
tags:
  - Glossary
---

# Torrent 词汇

- uTP - uTorrent Transport Protocol
  - [bittorrent/libutp](https://github.com/bittorrent/libutp)
- Leecher -> downloader
- Seeder
- Lurker
- bencode
- tracker
- DHT - distributed hash table
- swarm
- Tracker
  - 跟踪 seeds 和
  - DHT 使得 Tracker 不再必须 - 但 tracker 能提高发现速度
- Tracker Server
  - qBittorrent 内置
  - opentracker
  - [Comparison of BitTorrent tracker software](https://en.wikipedia.org/wiki/Comparison_of_BitTorrent_tracker_software)
- hash
  - 160 bit hashes
- [Glossary of BitTorrent terms](https://en.wikipedia.org/wiki/Glossary_of_BitTorrent_terms)

## Piece / 片段

- 做种的文件会被划分为片段
- 通常为 64kB, 128kB, 512kB, 1MB, 2MB, 4MB, 8MB
- 片段一般会随机分发
- .torrent 文件包含了每个片段的 hash - MD4 - 20 byte
- .torrent 文件中定义的文件通过 offset 和 length 来查找所需的片段

## ed2k

- 特殊的链接格式
- 常见
  - `ed2k://|file|<file name>|<file size>|<file hash>|h=<Root Hash>|/`
- RootHash 用于 AICH 算法参数
- [eD2k Links](https://www.emule-project.net/home/perl/help.cgi?l=1&rm=show_topic&topic_id=422)

## ICH - Intelligent Corruption Handling

- 基于 Hash Set
- [Corruption Handling](http://www.emule-project.net/home/perl/help.cgi?l=1&rm=show_topic&topic_id=589)

## AICH - Advanced Intelligent Corruption Handling

- 基于 Root Hash
