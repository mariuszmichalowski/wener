"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[79029],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=i(r),f=l,d=m["".concat(p,".").concat(f)]||m[f]||s[f]||o;return r?n.createElement(d,a(a({ref:t},c),{},{components:r})):n.createElement(d,a({ref:t},c))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:l,a[1]=u;for(var i=2;i<o;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},43873:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return i},toc:function(){return c},default:function(){return m}});var n=r(87462),l=r(63366),o=(r(67294),r(3905)),a=["components"],u={title:"Rollup Awesome",tags:["Awesome"]},p=void 0,i={unversionedId:"web/node/rollup-awesome",id:"web/node/rollup-awesome",isDocsHomePage:!1,title:"Rollup Awesome",description:"- rollup/awesome",source:"@site/notes/web/node/rollup-awesome.md",sourceDirName:"web/node",slug:"/web/node/rollup-awesome",permalink:"/notes/web/node/rollup-awesome",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/node/rollup-awesome.md",tags:[{label:"Awesome",permalink:"/notes/tags/awesome"}],version:"current",frontMatter:{title:"Rollup Awesome",tags:["Awesome"]},sidebar:"docs",previous:{title:"Rollup",permalink:"/notes/web/node/rollup"},next:{title:"SystemJS",permalink:"/notes/web/node/systemjs"}},c=[{value:"\u63d2\u4ef6/plugins",id:"\u63d2\u4ef6plugins",children:[]},{value:"@rollup/plugin-replace",id:"rollupplugin-replace",children:[]}],s={toc:c};function m(e){var t=e.components,r=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/rollup/awesome"},"rollup/awesome"))),(0,o.kt)("h2",{id:"\u63d2\u4ef6plugins"},"\u63d2\u4ef6/plugins"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/rollup/plugins"},"rollup/plugins")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/btd/rollup-plugin-visualizer"},"btd/rollup-plugin-visualizer"),"\n\u53ef\u89c6\u5316 bundle \u5927\u5c0f\u5206\u6790"),(0,o.kt)("li",{parentName:"ul"},"rollup-plugin-peer-deps-external",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5c06 peerDependencies \u5904\u7406\u4e3a external")))),(0,o.kt)("h2",{id:"rollupplugin-replace"},"@rollup/plugin-replace"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import replace from '@rollup/plugin-replace';\n\nreplace({\n  'process.env.NODE_ENV': JSON.stringify('production'),\n  __BUILD_DATE__: () => JSON.stringify(new Date()),\n  __BUILD_VERSION__: 15,\n});\n")))}m.isMDXComponent=!0}}]);