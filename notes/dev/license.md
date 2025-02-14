---
title: License
---

# License

- [Comparison of free and open-source software licences](https://en.wikipedia.org/wiki/Comparison_of_free_and_open-source_software_licences)
- [SPDX License List](https://spdx.org/licenses/)
- [choosealicense](https://choosealicense.com/appendix/)
- [CNCF allowed third-party license policy](https://github.com/cncf/foundation/blob/master/allowed-third-party-license-policy.md)
  - BSD, MIT, ISC, Python-2.0, PostgreSQL, X11, Zlib, Golang [PATENTS](https://golang.org/PATENTS)
- [Google thirdparty license policy](https://opensource.google/docs/thirdparty/licenses/)
  - 不允许
    - BCL, CERN Open Hardware License 2 - Strongly Reciprocal Variant, CC BY-SA
    - GPL, LGPL
    - Nethack General Public License
    - NPL, QPL, Sleepycat License, PresubmitR Open Hardware License
    - qmail Terms of Distribution
- [openbsd.org/policy](https://www.openbsd.org/policy.html)
  - 反对 Apache 2.0
  - 推荐 ISC
- Public domain & equivalents
  - PD, CC0
- 宽松自由软体授权条款 Permissive free software licence
  - BSD, MIT, Apache, 	CC-BY
- Copyleft - 禁止私有化
  - GPL, AGPL, CC-BY-SA
- Noncommercial license
  - JRL, AFPL, CC-BY-NC

## AGPL

- AGPL - GNU Affero General Public License
- 基于 GNU GPL - 增加通过网络提供服务的条款
- 避免 GPL 的 Application Service Provider 场景
- [List of software under the GNU AGPL](https://en.wikipedia.org/wiki/List_of_software_under_the_GNU_AGPL)
  - 值得注意的项目: Minio, Grafana, Nextcloud, OnlyOffice, Wiki.js
- 对 derived work of the AGPL software 的定义模糊
  - 通常理解是没有 AGPL 软件无法使用
- 对 user 的定义不同于 GPL
  - 包含通过网络使用服务的用户
- GPL 和 AGPL 都是影响 modified versions
- 参考
  - Choose [AGPL 3.0](https://choosealicense.com/licenses/agpl-3.0/)
  - Google [AGPL Policy](https://opensource.google/docs/using/agpl-policy/)
    - 不允许使用

一般来说 DB 类型项目不会可能修改源码，但是服务性质的应用可能会，因此选择要慎重。

## CC - Creative Commons

- 知识共享许可协议
- [License Versions](https://wiki.creativecommons.org/wiki/License_Versions)
- [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- [CC-BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/)
- [choose](https://creativecommons.org/choose/)
- OKI - Open Knowledge International
- 参考
  - https://creativecommons.org/about/downloads
  - [知识共享许可协议](https://zh.wikipedia.org/wiki/知识共享许可协议)
  - [自由文化作品](https://zh.wikipedia.org/wiki/自由文化作品定义)

| abbr.    | 署名 | 混合 | 商业 | 自由文化作品 | OKI |
| -------- | ---- | ---- | ---- | ------------ | --- |
| CC0      | 🟢   | 🟢   | 🟢   | 🟢           | 🟢  |
| BY       | 🟡   | 🟢   | 🟢   | 🟢           | 🟢  |
| BY-SA    | 🟡   | 🟢   | 🟢   | 🟢           | 🟢  |
| BY-NC    | 🟡   | 🟢   | 🔴   | 🔴           | 🔴  |
| BY-NC-SA | 🟡   | 🔴   | 🔴   | 🔴           | 🔴  |
| BY-ND    | 🟡   | 🔴   | 🟢   | 🔴           | 🔴  |
| BY-NC-ND | 🟡   | 🔴   | 🔴   | 🔴           | 🔴  |

<!--  ✅  🟡🟢🔴🟠⚫️⚪️🟤 -->

- BY - Attribution - 署名
- SA - ShareAlike - 相同方式共享
- NC - Noncommercial - 非商业性使用
- ND - No Derivative Works

**图标**

| typ.        | img                                                                           | url                                                                      |
| ----------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| normal      | ![](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)                      | https://i.creativecommons.org/l/by-sa/4.0/88x31.png                      |
| normal svg  | ![](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-sa.svg) | https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-sa.svg |
| compact     | ![](https://i.creativecommons.org/l/by-sa/4.0/80x15.png)                      | https://i.creativecommons.org/l/by-sa/4.0/80x15.png                      |
| cpmpact svg | ![](https://mirrors.creativecommons.org/presskit/buttons/80x15/svg/by-sa.svg) | https://mirrors.creativecommons.org/presskit/buttons/80x15/svg/by-sa.svg |

```
[![CC BY-SA 4.0][cc-by-sa-img]][cc-by-sa]

[cc-by-sa-img]: https://mirrors.creativecommons.org/presskit/buttons/80x15/svg/by-sa.svg
[cc-by-sa]: http://creativecommons.org/licenses/by-sa/4.0/
```

## Apache-2.0

- provides explicit patent grant
- 不兼容 GPL-2.0, LGPL-2.1

## GPL

- Android, iOS 都排斥在用户空间使用 GPL
- macOS 因为 Bash GPLv3 替换为 ZSH

## MPL-2.0

- 类似 Apache-2.0
- 但兼容 GPL-2.0+, LGPL-2.1+, AGPL-3.0+
- https://opensource.stackexchange.com/a/8832
  - may not charge extra for the source code
  - sell the product, must provide access to the source code under the MPL-2.0
- https://www.mozilla.org/en-US/MPL/2.0/FAQ/
- [MIT/Apache-2 vs. MPL-2.0](https://users.rust-lang.org/t/licensing-mit-apache-2-vs-mpl-2-0/46250)
- vs Apache-2.0
  - 更严格，更多限制

## ELv2

- Elastic License 2.0
- 不可以提供 托管服务/Managed Service
  - 直接 Host 服务 - SaaS
  - 直接暴露 UI, API
- 参考
  - [About Elastic License 2.0](https://docs.airbyte.com/project-overview/licenses/license-faq#about-elastic-license-2.0-elv2)
  - [Managed Service](https://docs.airbyte.com/project-overview/licenses/license-faq#what-is-the-managed-service-use-case-that-is-not-allowed-under-elv2)

# FAQ

## LGPL vs GPL vs AGPL

- LGPL: you can link against and don't have to release source code as long as you don't modify the library itself
- GPL: you have to release source code if you link against and distribute the binary, but don't if you just provide a service
- AGPL: you have to allow the source to be downloaded even if you never distribute the binary but do provide a service
