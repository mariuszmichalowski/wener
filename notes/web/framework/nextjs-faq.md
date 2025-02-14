---
title: NextJS FAQ
tags:
  - FAQ
---

# NextJS FAQ

## server vs serverless

- server
  - 打包为整个应用
  - 支持自定义 server
  - 支持长链接 - websocket
  - 建议使用
- serverless
  - 不会构建一体化应用
  - 页面独立 - 服务与页面不耦合
  - 页面与服务分离后更容易部署
    - 但依然是需要 next 来运行 - [#4496](https://github.com/zeit/next.js/issues/4496)
  - vercel 默认模式
- 参考
  - [Build Target](https://nextjs.org/docs/api-reference/next.config.js/build-target)

## next.config.ts

**next.config.js**

```js
require('ts-node').register(require('./tsconfig.json'));

module.exports = require('./next.config.ts');
```

## next.config.js 类型提示

```js
/** @type {import('next/dist/next-server/server/config').NextConfig} */
module.exports = {};
```

## 使用单一的 API 来处理所有接口

```bash
yarn add polka cors body-parser
```

```ts
import polka from 'polka';
import cors from 'cors';
import { json, text, urlencoded } from 'body-parser';

let _router;

export function getRouter() {
  return _router || (_router = routes(setup(polka())));
}

function setup(route) {
  // treat path params as query - same as how next api handle this
  route.use((req, res, next) => {
    if (req.params) {
      const q = req.query;
      for (const [k, v] of Object.entries(req.params)) {
        if (!q[k]) {
          q[k] = v;
        }
      }
    }
    return next();
  });
  return route;
}

export function routes(r: any) {
  const route = r as Router<NextApiRequest, NextApiResponse>;
  // handle error
  route.use(async (req, res, next) => {
    try {
      return await next();
    } catch (e) {
      const detail = normalizeError(e);
      res.status(detail.status).json(detail);
      console.error(`ERROR Handle ${req.url}`, e);
    }
  });
  route.use(json());
  route.use(urlencoded({ extended: true }));
  route.use(text());

  const corsOrigin = cors({ origin: true });

  // cors
  route.get('/api/cors', corsOrigin as any, (req, res) => res.json({}));
  // path params
  route.get('/api/user/:id', corsOrigin as any, (req, res) => res.json({ id: req.query.id }));

  return route;
}

export function handleRequest(req, res) {
  getRouter().handler(req, res);
}

export default handleRequest;
export const config = {
  api: {
    bodyParser: false,
  },
};
```

## Critical dependency: the request of a dependency is an expression

构建为 serverless 时可能出现

- [#10633](https://github.com/vercel/next.js/issues/10633)

## 禁用 minification

```js
export default {
  productionBrowserSourceMaps: true,
  webpack(config) {
    config.optimization.minimize = false;
    config.optimization.minimizer = [];
    return config;
  },
};
```

## css 顺序不一致

将 app 导入的 css 抽取放到一个 css 文件进行导入

```css
@import '~normalize.css/normalize.css';
@import '~@blueprintjs/icons/lib/css/blueprint-icons.css';
@import '~@blueprintjs/core/lib/css/blueprint.css';
@import '~@blueprintjs/select/lib/css/blueprint-select.css';
@import '~@blueprintjs/datetime/lib/css/blueprint-datetime.css';
@import '~@blueprintjs/popover2/lib/css/blueprint-popover2.css';
@import '~@blueprintjs/table/lib/css/table.css';
@import '~tailwindcss/tailwind.css';
@import '~nprogress/nprogress.css';
```

确保 tailwind 覆盖 blueprintjs 样式

- 开启 webpack5 该方式无效
- [#16630](https://github.com/vercel/next.js/issues/16630)

## 访问 public 里的 index.html

```js
module.export = {
  async rewrites() {
    return {
      fallback: [
        {
          source: '/:path*',
          destination: '/:path*/index.html',
        },
      ],
    };
  },
};
```

- https://github.com/vercel/next.js/discussions/14361#discussioncomment-874019
