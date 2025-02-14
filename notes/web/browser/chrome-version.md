---
title: Chrome Version
tags:
  - Version
---

# Chrome Version

| version   | date       | note                                              |
| --------- | ---------- | ------------------------------------------------- |
| Chrome 95 | 2021-09-20 |
| Chrome 90 | 2021-02-28 |
| Chrome 86 | 2020-10-06 | File System Access API                            |
| Chrome 80 | 2019-12-05 |
| Chrome 70 | 2018-08-29 | AV1                                               |
| Chrome 60 | 2017-05-23 |
| Chrome 49 | 2016-03-02 | last Windows XP, Vista; Mac OS X 10.6, 10.7, 10.8 |
| Chrome 28 | 2013-07-09 | Blink                                             |
| Chrome 1  | 2008-12-11 |

- 基本一年 8-10 个版本, 大约 30 天一个版本
- https://chromestatus.com/features
- https://chromestatus.com/roadmap
  - 关注 Enabled by default
- [What's New in DevTools](https://developer.chrome.com/tags/new-in-devtools/)
- 参考
  - [Getting started with Trust Tokens](https://web.dev/trust-tokens/)
    - combat fraud, distinguish bot without passive tracking
  - [Getting started with Chrome's origin trials](https://developer.chrome.com/blog/origin-trials/)
    - test a new or experimental web platform feature
    - [Chrome Origin Trials](https://developer.chrome.com/origintrials/#/trials/active)
  - [Web on Android Trusted Web Activity](https://developer.chrome.com/docs/android/trusted-web-activity/)
    - PWA Android
  - https://web.dev/reporting-api/
  - [Google Chrome version history](https://en.wikipedia.org/wiki/Google_Chrome_version_history)

:::tip

- structuredClone - Chrome 98
- OPFS - Origin Private File System - Chrome 99
- Container Query - WIP

:::

:::caution

- blocked ports 554
  - 989, 990 - FTPS
  - 10080, 554
    - NAT Slipstream 2.0 attack
    - samy.pl/slipstream/
  - 5060, 5061 - SIP
    - slipstream attack
  - 69, 137, 161, 1719, 1720, 1723, 6566
    - NAT Slipstream 2.0 attack
    - 1720 - H.323
- 部分特性受 Feature-Policy/Permissions-Policy 控制
  - 需要服务端返回 Header 包含
  - 避免被 iframe 滥用
  - mdn [Feature Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Feature_Policy)

:::

## Chrome 98

- self.structuredClone

## Chrome 97

- JavaScript Array, TypedArray findLast, findLastIndex
- HTMLScriptElement.supports(type)
- WebTransport
  - 类似 WebSocket 和 RTCDataChannel 的角色
  - 期望未来替代 WebSockets
  - 基于 HTTP/3 UDP
  - https://web.dev/webtransport/

## Chrome 96

- [Clipboard: Preserve PNG metadata](https://www.chromestatus.com/features/5629962485760000)
  - 之前没有元数据 - 且很慢
- [HTTP->HTTPS redirect for HTTPS DNS records](https://www.chromestatus.com/features/5485544526053376)
  - 支持直接访问 HTTPS
- WebAssembly Reference Types
- [URL Protocol Handler Registration for PWAs](https://www.chromestatus.com/features/5151703944921088)
- DevTool
  - CSS Overview panel
  - Emulate the Chrome’s Auto Dark Theme feature
  - 复制 CSS 为 JS 格式
  - 网络面板新的 Payload

## Chrome 95

- Cookie size limits
  - RFC 6265
  - 总 4K, 单个最大 1K
- EyeDropper API - `<input type=color>` 支持屏幕取色
- [Note taking new note URL](https://www.chromestatus.com/features/5205972320518144)
- Remove FTP support
- [URLPattern](https://developer.mozilla.org/en-US/docs/Web/API/URLPattern)
  - URL 匹配接口
- [self.reportError()](https://www.chromestatus.com/features/5634523220934656)
- DevTool
  - CSS 长度单位选择、滑动修改
  - 自定义属性会粗体优先显示

## Chrome 94

- [Idle Detection](https://www.chromestatus.com/features/4590256452009984)
  - https://web.dev/idle-detection/
- [VirtualKeyboard API](https://www.chromestatus.com/features/5680057076940800)
- [WebCodecs](https://www.chromestatus.com/features/5669293909868544)
- DevTool
  - 支持 本地化 - 多语言
  - CSS @container badage
  - Shift + click 颜色 切换显示格式

## Chrome 93

- [CSS Flexbox: alignment start, end, self-start, self-end, left, right](https://www.chromestatus.com/features/5777880099323904)
- CSS module scripts
  - `import styleSheet from "./styles.css" assert { type: "css" };`
- Error.cause
- `meta[name="theme-color"]`
  - https://web.dev/add-manifest/#theme-color
- Object.hasOwn
  - `Object.hasOwn(o,'key')` 等同于 `o.hasOwnProperty('key')`
- 从新添加 `contain:strict` 和 `contain:content`
  - mdn [contain](https://developer.mozilla.org/en-US/docs/Web/CSS/contain)
- WebOTP API: cross-device support
- User Preference Media Features Client Hints Headers
  - http 请求带客户端的 prefers-color-scheme
  - Sec-CH-Prefers-Color-Scheme: dark
- DevTool
  - 预览 Web bundle - chrome://flags#enable-experimental-web-platform-features
    - https://web.dev/web-bundles/
  - 格式化响应 JSON

## Chrome 92

- Relative indexing method for Array, String, and TypedArrays
  - ` [1,2,3,4].at(-1)` 返回 4
- `crypto.randomUUID()` - 生成 UUIDv4
- DevTool
  - CSS Grid editor
  - console 允许 const 重复定义
  - Elements iframe 右键详情
  - Network 新增 Wasm 资源类型
  - 实验 Puppeteer Recorder

## Chrome 91

- Class static initializer blocks
- Clipboard: read-only files support
  - 剪切板支持读取文件
- ES Modules for service workers
  - service worker 支持 ESM
- GravitySensor API
- Import Assertions
- JSON Modules
  - 请求使用 cors + strict MIME type checking
- WebAssembly SIMD
- WebOTP API: cross-origin iframe support
- WebSockets over HTTP/2
  - RFC 8441
- DevTool
  - Performance 显示 Web Vitals
  - CSS scroll-snap 可视化
  - ArrayBuffer Memory inspector
  - Styles 右键查看计算后的值

```js
// import 断言 - JSON Module
import json from './foo.json' assert { type: 'json' };

class C {
  static s_field;
  // 新支持
  static {
    this.s_field = doSomeInitialization();
  }
}
```

## Chrome 90

- AV1 Encoder
- AbortSignal in addEventListener
  - 可以更方便移除 listener
- CSS `overflow: clip`, `overflow-clip-margin`
  - 完全禁止 scroll
- Declarative Shadow DOM - 直接 HTML 定义 ShadowDOM
  - https://web.dev/declarative-shadow-dom/
- Protect `application/x-protobuffer` via Cross-Origin-Read-Blocking
- DevTool
  - CSS flexbox 编辑器
  - Core Web Vitals overlay
  - Network Remote Address Space 列
  - fn.displayName -> fn.name

```html
<!-- 声明式 Shadow DOM -->
<template shadowroot="open">
  <!-- 只影响内部 -->
  <style>
    button {
      color: seagreen;
    }
  </style>
  <link rel="stylesheet" href="/comicsans.css" />
  <button>
    <slot></slot>
  </button>
</template>
```

```js
// 获取包含 shadowdom 的 HTML
const html = element.getInnerHTML({ includeShadowRoots: true, closedRoots: [] });
```

## Chrome 89

- SameParty cookie attribute
  - 限定允许的 cookie
  - 避免三方钓鱼
- CSS `::target-text`
  - style scroll-to-text fragments
- CSS flow-relative Corner Rounding properties
  - `border-*-radius`
  - 新支持 逻辑角落定义 - border-start-start-radius, border-start-end-radius, border-end-start-radius, border-end-end-radius
    - 映射为 physical
    - 受 writing-mode, direction, text-orientation 影响
  - 之前支持 物理 角落定义 top-left, bottom-left, top-right, bottom-right
- FLoC - Federated Learning of Cohorts
- Import maps
  - ESM Import 映射
- Sec-CH-UA Client Hints
  - https://web.dev/user-agent-client-hints/
  - https://user-agent-client-hints.glitch.me/
- Top-level await
- Web NFC
- Web Serial API
- Web Share API
  - https://web.dev/web-share/
- Web Share API Level 2
- Web Share Target
- Web Share Target Level 2
- WebHID - Human Interface Device
- navigator.webdriver === false
  - 检测是否自动化
- performance.measureUserAgentSpecificMemory()

```
GET /downloads HTTP/1.1
Host: example.site

Sec-CH-UA: "Chromium";v="84", "Google Chrome";v="84"
Sec-CH-UA-Mobile: ?0
```

## Chrome 88

- CSS :is(), :where()
- CSS 复杂 :not() - 例如 `:not(.a + .b .c)`
- CSS aspect-ratio
- Remove Flash Player

## Chrome 87

- Cookie Store API - HTTPS only
  - [cookieStore](https://developer.mozilla.org/en-US/docs/Web/API/CookieStore)
- Intl.Segmenter - 分词，支持中文
  - http://unicode.org/reports/tr29/
- isInputPending
- Local Font Access
  - https://web.dev/local-fonts/
- Pan/Tilt support for Camera
  - https://web.dev/camera-pan-tilt-zoom/
- [Portals](https://www.chromestatus.com/features/4828882419056640)
  - seamless transitions across navigations

```js
const segmenter = new Intl.Segmenter('zh', { granularity: 'word' });
// 输出 ['你好', '世界']
Array.from(segmenter.segment('你好世界')).map((v) => v.segment);
// 可用于优化 CPU 重场景
navigator.scheduling.isInputPending({ includeContinuous: true });
```

## Chrome 86

- well-known URL for changing passwords
  - /.well-known/change-password
- beforematch 事件
  - find-in-page (ctrl+f)
  - element fragment navigation (example.com/#foo)
  - scroll-to-text navigation (example.com/#:~:text=foo)
- CSS Selectors 4 Pseudo-Class :focus-visible
  - 避免隐藏全部 focus outlines，可以针对 a 和 button 设置 `:not(:focus-visible)` 隐藏 outline
  - 例如 给 button `:focus-visible` 样式只有在键盘 tab 过去的时候会显示，鼠标不会显示
- Document-Policy: force-load-at-top
- FetchEvent.handled
- File System Access - 访问本地文件目录
  - https://web.dev/file-system-access/
  - https://web.dev/browser-nativefs/
- Imperative Shadow DOM Distribution API
- [Intensive throttling of Javascript timer wake ups](https://www.chromestatus.com/features/4718288976216064)
- DOM ParentNode.replaceChildren
- registerProtocolHandler 包含 cabal, dat, did, dweb, ethereum, hyper, ipfs, ipns, ssb
- Third-party origin trials
  - https://web.dev/third-party-origin-trials
- WebRTC Insertable Streams
- Clipboard API 支持 async text/html
  - HTML is sanitized
- document.fragmentDirective - [scroll-to-text-fragment](https://wicg.github.io/scroll-to-text-fragment)
  - #:~:text=
  - 滚动到文字

```js
var portal = document.createElement('portal');
portal.src = 'http://example.com';
document.body.appendChild(portal);

window.onportalactivated = function (oldPortal) {};
// 替换当前页面
portal.activate();
```

## Chrome 85

- CSS @property
  - 直接通过 CSS 自定义属性
  - 之前已经支持 CSS.registerProperty
  - 使用 自定义属性 让变量更有意义
  - https://web.dev/at-property/
  - https://developer.mozilla.org/en-US/docs/Web/CSS/@property
- AVIF Image Decode
- App shortcuts
  - https://web.dev/app-shortcuts/
- CSS content-visibility
  - 用于渲染优化
  - https://developer.mozilla.org/en-US/docs/Web/CSS/content-visibility
- CSS counter-set
- Cookies default to SameSite=Lax
- Event Timing API
- JavaScript logical assignment operators - ||=, &&=, ??=
- [Media Feeds](https://www.chromestatus.com/features/5695114963845120)
- Promise.any
- Referrer Policy: Default to strict-origin-when-cross-origin
- Reject insecure SameSite=None cookies
- String.prototype.replaceAll
- Web Bluetooth getDevices()

## Chrome 84

- Content Indexing API
  - 用于离线场景
  - https://web.dev/content-indexing-api/
- CSS flexbox: row-gap, column-gap
- JavaScript WeakReferences
- JavaScript 私有 方法 和 accessors
- Screen Wake Lock API
  - 用于避免电脑休眠
  - https://web.dev/wake-lock/
- CSS appearance unprefixed
- CSS ruby-position unprefixed
- Web Animations API
- WebOTP
  - navigator.credentials
  - 短信包含内容，自动验证 - 最后一行格式 `@www.example.com #123456`
  - https://web.dev/web-otp/
- CSS revert 关键字 - 恢复属性

## Chrome 83

- CSS `font-display: optional` without relayout
- CSS @supports selector() 特性检测
- Barcode Detection API
  - 可直接检测 image, video, canvas
  - https://web.dev/shape-detection/
- CSS contain-intrinsic-size
  - 优化渲染
- Cross-Origin-Embedder-Policy
- Cross-Origin-Opener-Policy
- ES Modules for shared workers
- IndexedDB relaxed durability transactions

## Chrome 81

- CSS image-orientation property

## Chrome 80

- Compression Streams
- Contacts API
  - https://web.dev/contact-picker/
- ES Modules for dedicated workers
- 移除 Custom Elements V0
- 移除 HTML Imports
- JavaScript optional chaining - `o?.func()`
- JavaScript Nullish coalescing - `a ?? b`
- Media Capabilities: decoding encrypted media
- Periodic Background Sync
  - https://web.dev/periodic-background-sync/
- Scroll to Text Fragment - `#:~:`
- 移除 Shadow DOM v0
- SVG in favicons
- WebAssembly Multi-Value
- WebVR v1.1
- Payments shipping address and contact info delegation
- CSS line-break: anywhere
- CSS overflow-wrap: anywhere
