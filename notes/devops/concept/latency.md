---
title: 延迟数
---

# 延迟数

- VoIP 可接受 150ms - 300ms

## Latency Comparison Numbers ~ 2012

- Interactive [Latency Numbers Every Programmer Should Know](https://colin-scott.github.io/personal_website/research/interactive_latency.html)
- [HN](https://news.ycombinator.com/item?id=13530820)
- [Gist](https://gist.github.com/jboner/2841832) [Neo](https://gist.github.com/GLMeece/b00c9c97a06a957af7426b1be5bc8be6)
- [Grace Hopper explains Nanoseconds](https://www.youtube.com/watch?v=JEpsKnWZrJ8)
- [Global Ping](https://wondernetwork.com/pings/)

| computer latency                   |     nano seconds | micro seconds | milliseconds | relative                    |
| ---------------------------------- | ---------------: | ------------: | -----------: | --------------------------- |
| L1 cache reference                 |           0.5 ns |               |              |                             |
| Branch mispredict                  |           5.0 ns |               |              |                             |
| L2 cache reference                 |           7.0 ns |               |              | 14x L1 cache                |
| Mutex lock/unlock                  |          25.0 ns |               |              |                             |
| Main memory reference              |         100.0 ns |               |              | 20x L2 cache, 200x L1 cache |
| Compress 1K bytes with Zippy       |       3,000.0 ns |          3 us |              |                             |
| Send 1K bytes over 1 Gbps network  |      10,000.0 ns |         10 us |              |                             |
| Read 4K randomly from SSD          |     150,000.0 ns |        150 us |              | ~1GB/sec SSD                |
| Read 1 MB sequentially from memory |     250,000.0 ns |        250 us |              |                             |
| Round trip within same datacenter  |     500,000.0 ns |        500 us |       0.5 ms |                             |
| Read 1 MB sequentially from SSD    |   1,000,000.0 ns |      1,000 us |         1 ms | ~1GB/sec SSD, 4X memory     |
| Disk seek                          |  10,000,000.0 ns |     10,000 us |        10 ms | 20x datacenter roundtrip    |
| Read 1 MB sequentially from disk   |  20,000,000.0 ns |     20,000 us |        20 ms | 80x memory, 20X SSD         |
| Send packet CA->Netherlands->CA    | 150,000,000.0 ns |    150,000 us |       150 ms |                             |

## Misc

| common latency |    ms |       s |
| -------------: | ----: | ------: |
|        120 fps |  8 ms | 1/120 s |
|         60 fps | 16 ms |  1/60 s |
|         24 fps | 41 ms |  1/24 s |

|      human lantency |         ms |         s |
| ------------------: | ---------: | --------: |
|           eye blink | 100-150 ms | 0.1-0.5 s |
| human reaction time |     250 ms |    0.25 s |

- Nerve conduction velocity/神经传导速度 ~ 40m/s
- 音速 - 343 m/s
- 光速 - 299,792,458 m / s

## Unit

| unit |    stand for | n    | mean |
| ---: | -----------: | ---- | ---: |
|   ns |  nano second | 10^9 | 纳秒 |
|   us | micro second | 10^6 | 微秒 |
|   ms | milli second | 10^3 | 毫秒 |
|    s |       second | 1    |   秒 |

| ns   | us    | ms    | s     |
| ---- | ----- | ----- | ----- |
| 1    | 10^-3 | 10^-6 | 10^-9 |
| 1000 | 1     | 10^-3 | 10^-6 |
| 10^6 | 1000  | 1     | 10^-3 |
| 10^9 | 10^6  | 1000  | 1     |
