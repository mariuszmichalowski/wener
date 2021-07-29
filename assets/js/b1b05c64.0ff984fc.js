"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[9697],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=o(n),d=a,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||s;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var o=2;o<s;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},73944:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return c},default:function(){return u}});var r=n(22122),a=n(19756),s=(n(67294),n(3905)),i=["components"],l={title:"Single SPA"},p=void 0,o={unversionedId:"web/arch/single-spa",id:"web/arch/single-spa",isDocsHomePage:!1,title:"Single SPA",description:"Tips",source:"@site/notes/web/arch/single-spa.md",sourceDirName:"web/arch",slug:"/web/arch/single-spa",permalink:"/notes/web/arch/single-spa",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/arch/single-spa.md",version:"current",frontMatter:{title:"Single SPA"},sidebar:"docs",previous:{title:"WebRTC Awesome",permalink:"/notes/web/webrtc-awesome"},next:{title:"Vite",permalink:"/notes/web/build/vite"}},c=[{value:"Tips",id:"tips",children:[]},{value:"create-single-spa",id:"create-single-spa",children:[]},{value:"root-config",id:"root-config",children:[]},{value:"index",id:"index",children:[{value:"config",id:"config",children:[]}]},{value:"parcel",id:"parcel",children:[{value:"entry",id:"entry",children:[]},{value:"webpack",id:"webpack",children:[]}]},{value:"utility",id:"utility",children:[]},{value:"\u63a8\u8350\u8bbe\u7f6e",id:"\u63a8\u8350\u8bbe\u7f6e",children:[]}],m={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"tips"},"Tips"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u4f7f\u7528\u5355\u4e2a\u7248\u672c\u6846\u67b6"))),(0,s.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://single-spa.js.org/docs/recommended-setup/"},"\u63a8\u8350\u8bbe\u7f6e")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/single-spa/single-spa-inspector"},"single-spa/single-spa-inspector")," - \u6d4f\u89c8\u5668\u63d2\u4ef6"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/react-microfrontends"},"react-microfrontends")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://juejin.im/post/5e5ca537e51d4526f16e5065"},"\u4ece0\u5b9e\u73b0\u4e00\u4e2asingle-spa\u7684\u524d\u7aef\u5fae\u670d\u52a1"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u5bf9\u6bd4\u4e86 qiankun \u548c single-spa")))))),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Topic"),(0,s.kt)("th",{parentName:"tr",align:null},"\u5e94\u7528/application"),(0,s.kt)("th",{parentName:"tr",align:null},"parcel"),(0,s.kt)("th",{parentName:"tr",align:null},"\u5de5\u5177/utility"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"\u8def\u7531"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,s.kt)("td",{parentName:"tr",align:null},"\u65e0\u8def\u7531"),(0,s.kt)("td",{parentName:"tr",align:null},"\u65e0\u8def\u7531")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"API"),(0,s.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u5f0f API"),(0,s.kt)("td",{parentName:"tr",align:null},"\u58f0\u660e\u5f0f API"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2796")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"\u6e32\u67d3 UI"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,s.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"\u751f\u547d\u5468\u671f"),(0,s.kt)("td",{parentName:"tr",align:null},"single-spa \u7ba1\u7406"),(0,s.kt)("td",{parentName:"tr",align:null},"\u81ea\u884c\u7ba1\u7406"),(0,s.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u573a\u666f"),(0,s.kt)("td",{parentName:"tr",align:null},"\u6838\u5fc3\u6784\u5efa\u7ec4\u4ef6"),(0,s.kt)("td",{parentName:"tr",align:null},"\u591a\u4e2a\u6846\u67b6\u7684\u65f6\u5019\u9700\u8981"),(0,s.kt)("td",{parentName:"tr",align:null},"\u516c\u5171\u903b\u8f91")))),(0,s.kt)("h2",{id:"create-single-spa"},"create-single-spa"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://single-spa.js.org/docs/create-single-spa"},"create-single-spa")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"--moduleType"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"root-config - import \u8def\u7531",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u7528\u4e8e\u914d\u7f6e import map",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.jsdelivr.com/"},"https://www.jsdelivr.com/")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://unpkg.com/browse/@wener/ui/"},"https://unpkg.com/browse/@wener/ui/")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://unpkg.com/browse/react@16.13.1/"},"https://unpkg.com/browse/react@16.13.1/")))),(0,s.kt)("li",{parentName:"ul"},"\u57fa\u7840\u7684 systemjs \u4f9d\u8d56"),(0,s.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5728\u8fd9\u91cc\u6dfb\u52a0\u516c\u5171\u4f9d\u8d56 - \u4f8b\u5982 react\u3001react-dom"))),(0,s.kt)("li",{parentName:"ul"},"app-parcel - \u5e94\u7528 - \u9ed8\u8ba4"),(0,s.kt)("li",{parentName:"ul"},"util-module - \u5de5\u5177"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/single-spa/create-single-spa/blob/master/packages/ts-config-single-spa/tsconfig.json"},"ts-config-single-spa")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/single-spa/create-single-spa/blob/master/packages/webpack-config-single-spa-react-ts/lib/webpack-config-single-spa-react-ts.js"},"webpack-config-single-spa-react-ts.js"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'# http://localhost:9000\n# \u9ed8\u8ba4 importmap \u662f\u5728 html \u4e2d\n# \u5f00\u542f importmap \u5f00\u53d1\u5de5\u5177\n# localStorage.setItem("devtools", true);\nyarn create single-spa --framework react --moduleType root-config --dir root\n\nyarn create single-spa --framework react --dir dash\n# localhost:8500\n# http://single-spa-playground.org/playground/instant-test?name=@wener-dash/spa&url=8500\n# \u9ed8\u8ba4\u4f4d\u7f6e http://localhost:8500/<OrgName>-<ProjectName>.js\n# \u4f8b\u5982 http://localhost:8500/wener-spa-dash.js\nyarn start --port 8500\n\n\nyarn create single-spa --framework react --moduleType util-module --dir utils \\\n  --packageManager yarn --typescript\n\n# react + ts \u4f7f\u7528\u7684\u914d\u7f6e\n# yarn add --dev webpack-config-single-spa-react-ts webpack-merge\n')),(0,s.kt)("h2",{id:"root-config"},"root-config"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5355\u4e2a html"),(0,s.kt)("li",{parentName:"ul"},"\u7531\u670d\u52a1\u7aef\u751f\u6210\u5373\u53ef")),(0,s.kt)("h2",{id:"index"},"index"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n  <title>Root Config</title>\n  \x3c!-- \u7528\u4e8e\u4e0d\u652f\u6301 async/await \u7684\u6d4f\u89c8\u5668 --\x3e\n  \x3c!-- <script src="https://cdn.jsdelivr.net/npm/regenerator-runtime@0.13.5/runtime.min.js"><\/script> --\x3e\n\n  \x3c!--\n    This CSP allows any SSL-enabled host, but you should limit these directives further to increase your app\'s security.\n    Learn more about CSP policies at https://content-security-policy.com/#directive\n  --\x3e\n  <meta http-equiv="Content-Security-Policy" content="default-src \'self\' https: localhost:*; script-src \'unsafe-inline\' https: localhost:*; connect-src https: localhost:* ws://localhost:*; style-src \'unsafe-inline\' https:; object-src \'none\';">\n  <meta name="importmap-type" content="systemjs-importmap" />\n  \x3c!-- \u5168\u5c40\u6837\u5f0f --\x3e\n  <link href="https://unpkg.com/antd/dist/antd.min.css" rel="stylesheet"/>\n\n  \x3c!-- \u516c\u5171\u4f9d\u8d56\n\n    1. System.register (preferred when possible) - https://github.com/systemjs/systemjs/blob/master/docs/system-register.md\n    2. UMD - https://github.com/umdjs/umd\n    3. Global variable\n\n    \u53c2\u8003 https://single-spa.js.org/docs/recommended-setup#sharing-with-import-maps.\n  --\x3e\n  <script type="systemjs-importmap">\n    {\n      "imports": {\n        "single-spa": "https://cdn.jsdelivr.net/npm/single-spa@5.5.0/lib/system/single-spa.min.js",\n        "react": "https://cdn.jsdelivr.net/npm/react@16.13.1/umd/react.production.min.js",\n        "react-dom": "https://cdn.jsdelivr.net/npm/react-dom@16.13.1/umd/react-dom.production.min.js",\n        "antd": "https://unpkg.com/antd@4.3.5/dist/antd-with-locales.min.js"\n      }\n    }\n  <\/script>\n\n  \x3c!-- \u4f7f\u7528\u5916\u90e8\u5bfc\u5165\u6620\u5c04  --\x3e\n  \x3c!-- <script type="systemjs-importmap" src="/importmap.json"><\/script> --\x3e\n\n  \x3c!-- \u672c\u5730\u5f00\u53d1\u5730\u5740 --\x3e\n  <script type="systemjs-importmap">\n    {\n      "imports": {\n        "@wener-spa/root-config": "//localhost:9000/wener-spa-root-config.js",\n        "@wener-spa/dash": "//localhost:8081/wener-spa-dash.js"\n      }\n    }\n  <\/script>\n\n  \x3c!-- \u672c\u5730\u5f00\u53d1\u4f7f\u7528 --\x3e\n  <script src="https://cdn.jsdelivr.net/npm/import-map-overrides@1.14.6/dist/import-map-overrides.js"><\/script>\n  <script src="https://cdn.jsdelivr.net/npm/systemjs@6.3.1/dist/system.js"><\/script>\n  <script src="https://cdn.jsdelivr.net/npm/systemjs@6.3.1/dist/extras/amd.js"><\/script>\n  <script src="https://cdn.jsdelivr.net/npm/systemjs@6.3.1/dist/extras/named-exports.js"><\/script>\n\n  \x3c!-- \u751f\u4ea7\u4f7f\u7528\n  <script src="https://cdn.jsdelivr.net/npm/import-map-overrides@1.14.6/dist/import-map-overrides.js"><\/script>\n  <script src="https://cdn.jsdelivr.net/npm/systemjs@6.3.1/dist/system.min.js"><\/script>\n  <script src="https://cdn.jsdelivr.net/npm/systemjs@6.3.1/dist/extras/amd.min.js"><\/script>\n  <script src="https://cdn.jsdelivr.net/npm/systemjs@6.3.1/dist/extras/named-exports.min.js"><\/script>\n  --\x3e\n\n</head>\n<body>\n  <main></main>\n  <script>\n    // \u542f\u52a8\u8be5\u6a21\u5757\n    System.import(\'@wener-spa/root-config\');\n  <\/script>\n  \x3c!-- \u5f00\u53d1\u5de5\u5177 - \u6d4b\u8bd5 importmap --\x3e\n  <import-map-overrides-full show-when-local-storage="devtools" dev-libs></import-map-overrides-full>\n</body>\n</html>\n')),(0,s.kt)("h3",{id:"config"},"config"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'import { registerApplication, start } from "single-spa";\n\n// \u6ce8\u518c\u5e94\u7528\nregisterApplication({\n  name: "@wener-spa/dash",\n  app: () => System.import("@wener-spa/dash"),\n  // \u524d\u7f00\u5339\u914d\u7684\u6fc0\u6d3b\u8def\u5f84\n  activeWhen: ["/"]\n});\n\n// \u542f\u52a8\u5e94\u7528\nstart({\n  urlRerouteOnly: true,\n});\n')),(0,s.kt)("h2",{id:"parcel"},"parcel"),(0,s.kt)("h3",{id:"entry"},"entry"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import React from 'react';\nimport ReactDOM from 'react-dom';\n// \u6302\u8f7d\u6839\u7ec4\u4ef6\nimport rootComponent from './path-to-root-component.js';\n// Note that SingleSpaContext is a react@16.3 (if available) context that provides the singleSpa props\nimport singleSpaReact, {SingleSpaContext} from 'single-spa-react';\nconst reactLifecycles = singleSpaReact({\n  React,\n  ReactDOM,\n  rootComponent,\n  errorBoundary(err, info, props) {\n    // https://reactjs.org/docs/error-boundaries.html\n    return (\n      <div>This renders when a catastrophic error occurs</div>\n    );\n  },\n});\nexport const bootstrap = reactLifecycles.bootstrap;\nexport const mount = reactLifecycles.mount;\nexport const unmount = reactLifecycles.unmount;\n")),(0,s.kt)("h3",{id:"webpack"},"webpack"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const webpackMerge = require("webpack-merge");\nconst singleSpaDefaults = require("webpack-config-single-spa-react-ts");\n\nmodule.exports = (webpackConfigEnv) => {\n  const defaultConfig = singleSpaDefaults({\n    orgName: "wener-spa",\n    projectName: "dash",\n    webpackConfigEnv,\n  });\n\n  const config = webpackMerge.smart(defaultConfig, {\n    // modify the webpack config however you\'d like to by adding to this object\n  });\n  // \u6dfb\u52a0\u989d\u5916\u7684\u5916\u90e8\u4f9d\u8d56 - \u9ed8\u8ba4\u4f1a\u6dfb\u52a0 react\u3001react-dom \u7b49\n  config.externals.push(\'antd\')\n  return config\n};\n')),(0,s.kt)("h2",{id:"utility"},"utility"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u6ca1\u6709 entry")),(0,s.kt)("h2",{id:"\u63a8\u8350\u8bbe\u7f6e"},"\u63a8\u8350\u8bbe\u7f6e"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://single-spa.js.org/docs/recommended-setup/"},"The Recommended Setup")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/namecheap/ilc"},"namecheap/ilc")," - Isomorphic Layout Compose",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"SSR \u652f\u6301"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/namecheap/ilc/blob/master/docs/registry.md"},"\u6ce8\u518c\u4e2d\u5fc3")," - \u5e94\u7528\u3001\u9875\u9762\u3001\u914d\u7f6e\u3001\u6a21\u677f")))))}u.isMDXComponent=!0}}]);