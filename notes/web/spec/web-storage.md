---
title: WebStorage
---

# WebStorage

- https://web.dev/storage-for-the-web/
- chromium [storage/browser/quota/quota_settings.cc](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/storage/browser/quota/quota_settings.cc)
- [Test of localStorage limits/quota](https://arty.name/localstorage.html)
- mdn
  - [Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API)
  - [StorageManager](https://developer.mozilla.org/en-US/docs/Web/API/StorageManager)
    - 估算使用量

**存储限制**

| name           | limit       |
| -------------- | ----------- |
| sessionStorage | 5 MB        |
| localStorage   | 5 MB        |
| Cookie         | 4 KB        |
| Cookie kv      | 1 KB        |
| IndexedDB      | 10 MB - 2GB |

:::info

- 不同浏览器限制不同，这里列举 安全/常见值

:::

- IndexedDB
  - 持久数据
  - 数据量大
  - 跨 Tab
  - Worker 支持
  - 插入性能弱 - 官方以优化读取性能为主
  - 参考
    - [Storing images and files in IndexedDB](https://hacks.mozilla.org/2012/02/storing-images-and-files-in-indexeddb/)
      - 存储为 Blob
- sessionStorage
  - 持久
  - 小数据
  - KV
  - 可 Observe
  - 跨 Tab
- localStorage
  - 临时存储
  - 敏感信息
- Cookie
  - 网络通讯 credentials
- [CacheStorage](https://developer.mozilla.org/en-US/docs/Web/API/Cache)
  - Response stored in a Cache won't contain headers
  - [The Cache API: A quick guide](https://web.dev/cache-api-quick-guide/)
  - [stale-while-revalidate](https://www.mnot.net/blog/2007/12/12/stale)

**Performance**

- [Browser database comparison](https://nolanlawson.github.io/database-comparison/)
  - fork [db tx write](https://pubkey.github.io/client-side-databases/database-comparison/index.html)
- [Why IndexedDB is slow and what to use instead](https://rxdb.info/slow-indexeddb.html)

| store        |       10000 |
| ------------ | ----------: |
| localStorage |       110ms |
| IndexedDB    | 1500-2200ms |

> IndexedDB 很慢

## Libraries
