(window.webpackJsonp=window.webpackJsonp||[]).push([[692],{1169:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,d=u["".concat(s,".").concat(m)]||u[m]||b[m]||o;return r?a.a.createElement(d,c(c({ref:t},i),{},{components:r})):a.a.createElement(d,c({ref:t},i))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var i=2;i<o;i++)s[i]=r[i];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},766:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(8),o=(r(0),r(1169)),s={title:"NextJS Internal"},c={unversionedId:"web/framework/nextjs-internal",id:"web/framework/nextjs-internal",isDocsHomePage:!1,title:"NextJS Internal",description:"- target",source:"@site/notes/web/framework/nextjs-internal.md",slug:"/web/framework/nextjs-internal",permalink:"/notes/web/framework/nextjs-internal",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/framework/nextjs-internal.md",version:"current",sidebar:"docs",previous:{title:"NextJS FAQ",permalink:"/notes/web/framework/nextjs-faq"},next:{title:"NextJS \u7248\u672c\u5386\u53f2",permalink:"/notes/web/framework/nextjs-version"}},l=[{value:"\u9ed8\u8ba4 next start",id:"\u9ed8\u8ba4-next-start",children:[]},{value:"\u6700\u7b80\u81ea\u5b9a\u4e49 server",id:"\u6700\u7b80\u81ea\u5b9a\u4e49-server",children:[]}],i={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"target",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"server"),Object(o.b)("li",{parentName:"ul"},"serverless",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u4f1a bundle node_modules \u5185\u5bb9"),Object(o.b)("li",{parentName:"ul"},"\u4f7f\u7528\u5e76\u4e0d\u7406\u60f3"))),Object(o.b)("li",{parentName:"ul"},"serverless-trace",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"serverless \u4f46\u4e0d bundle node_modules")))))),Object(o.b)("h2",{id:"\u9ed8\u8ba4-next-start"},"\u9ed8\u8ba4 next start"),Object(o.b)("p",null,"\u9ed8\u8ba4\u670d\u52a1\u542f\u52a8\u903b\u8f91"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import http from 'http';\nimport next from 'next';\n\n// https://github.com/zeit/next.js/blob/canary/packages/next/server/lib/start-server.ts\nexport default async function start(serverOptions: any, port?: number, hostname?: string) {\n  const app = next(serverOptions);\n  const srv = http.createServer(app.getRequestHandler());\n  await new Promise((resolve, reject) => {\n    // This code catches EADDRINUSE error if the port is already in use\n    srv.on('error', reject);\n    srv.on('listening', () => resolve());\n    srv.listen(port, hostname);\n  });\n  // It's up to caller to run `app.prepare()`, so it can notify that the server\n  // is listening before starting any intensive operations.\n  return app;\n}\n\n// https://github.com/zeit/next.js/blob/canary/packages/next/cli/next-start.ts\nimport { resolve } from 'path';\n\nconst dir = resolve(args._[0] || '.');\nconst port = args['--port'] || 3000;\n\nstart({ dir }, port, args['--hostname'])\n  .then(async (app) => {\n    // tslint:disable-next-line\n    console.log(`> Ready on http://${args['--hostname'] || 'localhost'}:${port}`);\n    await app.prepare();\n  })\n  .catch((err) => {\n    // tslint:disable-next-line\n    console.error(err);\n    process.exit(1);\n  });\n")),Object(o.b)("h2",{id:"\u6700\u7b80\u81ea\u5b9a\u4e49-server"},"\u6700\u7b80\u81ea\u5b9a\u4e49 server"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u4f7f\u7528\u81ea\u5b9a\u4e49 server \u5219\u4e0d\u9700\u8981 next start")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const { createServer } = require('http');\nconst { parse } = require('url');\nconst next = require('next');\n\nconst port = parseInt(process.env.PORT, 10) || 3000;\nconst dev = process.env.NODE_ENV !== 'production';\nconst app = next({ dev });\nconst handle = app.getRequestHandler();\n\napp.prepare().then(() => {\n  createServer((req, res) => {\n    const parsedUrl = parse(req.url, true);\n    handle(req, res, parsedUrl);\n  }).listen(port, (err) => {\n    if (err) throw err;\n    console.log(`> Ready on http://localhost:${port}`);\n  });\n});\n")))}p.isMDXComponent=!0}}]);