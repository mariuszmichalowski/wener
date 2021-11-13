"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[97575],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return k}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),c=o(a),k=r,N=c["".concat(p,".").concat(k)]||c[k]||s[k]||l;return a?n.createElement(N,i(i({ref:t},u),{},{components:a})):n.createElement(N,i({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m.mdxType="string"==typeof e?e:r,i[1]=m;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},26189:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return u},default:function(){return c}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],m={title:"\u5fae\u524d\u7aef"},p=void 0,o={unversionedId:"web/arch/microfrontend",id:"web/arch/microfrontend",isDocsHomePage:!1,title:"\u5fae\u524d\u7aef",description:"- \u76ee\u7684/\u6838\u5fc3 - \u5e76\u4e0d\u662f\u8981\u8fbe\u5230\u6240\u6709 - \u9700\u8981\u6743\u8861",source:"@site/notes/web/arch/microfrontend.md",sourceDirName:"web/arch",slug:"/web/arch/microfrontend",permalink:"/notes/web/arch/microfrontend",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/arch/microfrontend.md",tags:[],version:"current",frontMatter:{title:"\u5fae\u524d\u7aef"},sidebar:"docs",previous:{title:"Vite",permalink:"/notes/web/dev/vite"},next:{title:"Single SPA",permalink:"/notes/web/arch/single-spa"}},u=[{value:"\u5fae\u524d\u7aef\u5212\u5206\u70b9",id:"\u5fae\u524d\u7aef\u5212\u5206\u70b9",children:[]},{value:"\u5b9e\u73b0\u65b9\u6848",id:"\u5b9e\u73b0\u65b9\u6848",children:[]},{value:"importmap",id:"importmap",children:[]},{value:"ShadowDom \u6837\u5f0f\u53d7\u5168\u5c40\u5f71\u54cd",id:"shadowdom-\u6837\u5f0f\u53d7\u5168\u5c40\u5f71\u54cd",children:[]},{value:"microservice vs microfrontend",id:"microservice-vs-microfrontend",children:[]}],s={toc:u};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u76ee\u7684/\u6838\u5fc3 - \u5e76\u4e0d\u662f\u8981\u8fbe\u5230\u6240\u6709 - \u9700\u8981\u6743\u8861",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5782\u76f4\u5207\u5206\u524d\u7aef"),(0,l.kt)("li",{parentName:"ul"},"\u6280\u672f\u65e0\u5173 - \u53ef\u6df7\u5408\u591a\u79cd\u6846\u67b6"),(0,l.kt)("li",{parentName:"ul"},"\u56e2\u961f\u5207\u5206 - \u72ec\u7acb"),(0,l.kt)("li",{parentName:"ul"},"\u5916\u90e8\u4f9d\u8d56\u5171\u4eab - React - Import Map"),(0,l.kt)("li",{parentName:"ul"},"\u72ec\u7acb\u90e8\u7f72 - \u80fd\u90e8\u7f72\u67d0\u4e2a\u7ec4\u4ef6\u6216\u9875\u9762"))),(0,l.kt)("li",{parentName:"ul"},"\u9644\u52a0",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"SSR \u652f\u6301 - \u6309\u7167\u8def\u7531\u5207\u5206\u662f\u53ef\u80fd\u7684"))),(0,l.kt)("li",{parentName:"ul"},"\u53cd\u5e94 microservice \u6982\u5ff5 - isolation"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"single-spa ",(0,l.kt)("a",{parentName:"li",href:"https://single-spa.js.org/docs/recommended-setup/"},"Recommended Setup"))))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8003\u8651\u7684\u95ee\u9898\u70b9")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u5fae\u524d\u7aef\u7684\u76ee\u7684",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u65b0\u65e7\u9879\u76ee\u67b6\u6784\u8fc1\u79fb - \u65b0\u7684\u9010\u6b65\u53d6\u4ee3\u65e7\u7684"),(0,l.kt)("li",{parentName:"ul"},"\u7075\u6d3b\u914d\u7f6e\u90e8\u7f72"),(0,l.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u3001outsource \u90e8\u5206\u5e94\u7528\u6a21\u5757\u5f00\u53d1"))),(0,l.kt)("li",{parentName:"ul"},"\u662f\u5426\u9700\u8981\u591a\u6846\u67b6/\u8bed\u8a00",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u901a\u8baf\u95ee\u9898"),(0,l.kt)("li",{parentName:"ul"},"\u4e0a\u4e0b\u6587\u95ee\u9898"),(0,l.kt)("li",{parentName:"ul"},"\u6784\u5efa\u95ee\u9898"),(0,l.kt)("li",{parentName:"ul"},"\u7ef4\u62a4\u66f4\u65b0\u95ee\u9898"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u7840\u5e93\u95ee\u9898"))),(0,l.kt)("li",{parentName:"ul"},"\u662f\u5426\u9700\u8981\u6837\u5f0f\u9694\u79bb",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"CSS \u91cd\u590d - bundle \u5927"),(0,l.kt)("li",{parentName:"ul"},"\u8bbe\u8ba1\u6837\u5f0f\u4e0d\u7edf\u4e00"),(0,l.kt)("li",{parentName:"ul"},"\u9694\u79bb\u7a0b\u5ea6")))))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5efa\u8bae")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u6700\u597d\u662f\u5355\u4e00\u8bed\u8a00",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"rollup \u5171\u4eab\u6838\u5fc3\u5305",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 react\u3001zustand\u3001UI \u5e93"))),(0,l.kt)("li",{parentName:"ul"},"bundle \u975e\u6838\u5fc3\u5c0f\u5305"),(0,l.kt)("li",{parentName:"ul"},"\u65b9\u4fbf\u63d0\u4f9b\u57fa\u7840\u652f\u6491 - \u8def\u7531\u3001\u901a\u8baf\u3001\u57fa\u7840\u6846\u67b6\u3001\u72b6\u6001"))),(0,l.kt)("li",{parentName:"ul"},"\u6700\u597d\u57fa\u7840 CSS \u5171\u4eab",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u57fa\u7840\u4f7f\u7528 ulti \u7c7b CSS \u5e93 - \u4f8b\u5982 tailwind css",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u51cf\u5c11\u5199 CSS"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u53ef\u4ee5\u4f7f\u7528\u7684 CSS \u6846\u67b6"))),(0,l.kt)("li",{parentName:"ul"},"\u63a7\u5236 CSS \u4f5c\u7528\u57df - \u4f8b\u5982 css module\u3001styled\u3001emotion\u3001shadowdom")))))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u53c2\u8003\u95ee\u9898")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/single-spa/single-spa/issues/103"},"single-spa/single-spa#103")," - RFC: Server Rendering"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/issues/6040"},"vercel/next.js#6040")," - Feasibility of micro frontends",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 multi-zone \u57fa\u4e8e url \u5212\u5206"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/webpack/webpack/issues/10352"},"webpack/webpack#10352")," - Module federation and code sharing between bundles. Many builds act as one")))),(0,l.kt)("h2",{id:"\u5fae\u524d\u7aef\u5212\u5206\u70b9"},"\u5fae\u524d\u7aef\u5212\u5206\u70b9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8def\u7531 - \u8425\u9500\u7f51\u7ad9 - NextJS"),(0,l.kt)("li",{parentName:"ul"},"\u9875\u9762\u5e03\u5c40 - \u540e\u7aef",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 iframe - \u5212\u5206\u591a\u533a\u57df"),(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 \u6bcf\u4e2a\u533a\u57df mount \u4e00\u4e2a webcomponent"),(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 react \u6bcf\u4e2a\u533a\u57df switch \u4e00\u4e2a sub path - \u57fa\u4e8e\u5185\u90e8\u8def\u7531"))),(0,l.kt)("li",{parentName:"ul"},"\u529f\u80fd\u6a21\u5757 - \u9ad8\u5ea6\u5b9a\u5236\u573a\u666f - \u4f8b\u5982 \u5355\u9875\u591a App",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u81ea\u5b9a\u4e49\u6ce8\u518c\u4fe1\u606f\u8bc6\u522b ",(0,l.kt)("inlineCode",{parentName:"li"},"registry({name:'',load:()=>{}})")))),(0,l.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u6a21\u5757 - \u81ea\u5b9a\u4e49\u573a\u666f\uff0c\u4f7f\u7528 systemjs \u6784\u5efa\u5e94\u7528",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 import ",(0,l.kt)("inlineCode",{parentName:"li"},"@my-sys/module")," \u8bc6\u522b")))),(0,l.kt)("h2",{id:"\u5b9e\u73b0\u65b9\u6848"},"\u5b9e\u73b0\u65b9\u6848"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"iframe"),(0,l.kt)("li",{parentName:"ul"},"NextJS ",(0,l.kt)("a",{parentName:"li",href:"https://nextjs.org/docs/advanced-features/multi-zones"},"multi-zone"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"url \u5207\u5206"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 SSR - \u9002\u7528\u4e8e\u8425\u9500\u573a\u666f"))),(0,l.kt)("li",{parentName:"ul"},"single-spa",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"URL \u5207\u5206\u3001layout \u6a21\u5757"),(0,l.kt)("li",{parentName:"ul"},"bootstrap\u3001mount\u3001unmount \u94a9\u5b50"),(0,l.kt)("li",{parentName:"ul"},"\u76d1\u542c url \u53d8\u5316"),(0,l.kt)("li",{parentName:"ul"},"\u8bed\u8a00\u65e0\u5173"))),(0,l.kt)("li",{parentName:"ul"},"qiankun",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e single-spa \u5c01\u88c5"),(0,l.kt)("li",{parentName:"ul"},"Proxy \u6c99\u7bb1\u9694\u79bb\u8bbf\u95ee\u5168\u5c40\u5bf9\u8c61"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/systemjs/systemjs"},"systemjs/systemjs"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u81ea\u884c\u6620\u5c04\u6a21\u5757\u5b9e\u73b0\uff0csystemjs \u7528\u4e8e\u7cfb\u7edf\u7ef4\u5ea6\u534f\u8c03"))),(0,l.kt)("li",{parentName:"ul"},"webpack federation ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/webpack/webpack/issues/10352"},"#10352")),(0,l.kt)("li",{parentName:"ul"},"import map - ",(0,l.kt)("a",{parentName:"li",href:"https://developers.google.com/web/updates/2019/03/kv-storage#import_maps"},"Import maps")),(0,l.kt)("li",{parentName:"ul"},"bundle \u5916\u90e8\u4f9d\u8d56",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"webpack ",(0,l.kt)("a",{parentName:"li",href:"https://webpack.js.org/configuration/externals/#root"},"external")),(0,l.kt)("li",{parentName:"ul"},"rollup ",(0,l.kt)("a",{parentName:"li",href:"https://rollupjs.org/guide/en/#external"},"external")))),(0,l.kt)("li",{parentName:"ul"},"WebComponent",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5c01\u88c5\u7ec4\u4ef6\u3001\u8bed\u8a00\u65e0\u5173"),(0,l.kt)("li",{parentName:"ul"},"ShadowDom \u6311\u5b9e\u73b0\u6846\u67b6"),(0,l.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u6837\u5f0f\u662f\u5426\u9700\u8981\u9694\u79bb\u5f85\u5546\u69b7"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/opencomponents/oc"},"opencomponents/oc")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/micro-zoe/micro-app"},"micro-zoe/micro-app"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4eac\u4e1c"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e CustomElement\uff0c\u7c7b\u4f3c iframe \u8bbe\u8ba1\u4f53\u9a8c"),(0,l.kt)("li",{parentName:"ul"},"connectedCallback")))),(0,l.kt)("h2",{id:"importmap"},"importmap"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- The import map is inlined into your page --\x3e\n<script type="importmap">\n  {\n    "imports": {\n      "/path/to/kv-storage-polyfill.mjs": ["std:kv-storage", "/path/to/kv-storage-polyfill.mjs"]\n    }\n  }\n<\/script>\n\n\x3c!-- Then any module scripts with import statements use the above map --\x3e\n<script type="module">\n  import storage from \'/path/to/kv-storage-polyfill.mjs\';\n\n  // Use `storage` ...\n<\/script>\n')),(0,l.kt)("h1",{id:"faq"},"FAQ"),(0,l.kt)("h2",{id:"shadowdom-\u6837\u5f0f\u53d7\u5168\u5c40\u5f71\u54cd"},"ShadowDom \u6837\u5f0f\u53d7\u5168\u5c40\u5f71\u54cd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e00\u822c\u6837\u5f0f\u4f7f\u7528 rem",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53d7 html font-size \u5f71\u54cd"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 16px"))),(0,l.kt)("li",{parentName:"ul"},"\u5efa\u8bae ShadowDom \u7684\u65f6\u5019\u6700\u597d\u4f7f\u7528 px"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f\u81ea\u5df1\u7684\u73af\u5883\uff0c\u53ef\u4fdd\u7559\u4f7f\u7528 rem - \u65b9\u4fbf user-agent \u63a7\u5236\u5b57\u4f53\u5927\u5c0f")),(0,l.kt)("h2",{id:"microservice-vs-microfrontend"},"microservice vs microfrontend"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5fae\u670d\u52a1 vs \u5fae\u524d\u7aef"),(0,l.kt)("li",{parentName:"ul"},"\u5fae\u670d\u52a1",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u529f\u80fd\u6027\u670d\u52a1\u3001\u805a\u5408\u6027\u670d\u52a1"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 rpc/http/\u53cd\u5411\u4ee3\u7406 \u65b9\u5f0f\u8def\u7531"),(0,l.kt)("li",{parentName:"ul"},"rpc - version+service name+method name"),(0,l.kt)("li",{parentName:"ul"},"http - host+path"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u5e8f\u5217\u5316\u7684\u8bf7\u6c42\u6c9f\u901a - \u4f20\u9012\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"service mesh - Observability, Security, Reliability",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u524d\u7aef\u4e0d\u9700\u8981\u5173\u5fc3 - \u7c7b\u4f3c sentry"))))),(0,l.kt)("li",{parentName:"ul"},"\u5fae\u524d\u7aef",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5355\u4e2a\u9875\u9762",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u62c6\u5206\u4ee3\u7801\u903b\u8f91\u7ed3\u6784"))),(0,l.kt)("li",{parentName:"ul"},"\u5355\u4e2a\u7f51\u7ad9",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e URL \u8def\u7531"),(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u90e8\u5206\u903b\u8f91\u5171\u4eab"),(0,l.kt)("li",{parentName:"ul"},"SAP"),(0,l.kt)("li",{parentName:"ul"},"SSR"))),(0,l.kt)("li",{parentName:"ul"},"\u6bd4\u5fae\u670d\u52a1\u66f4\u590d\u6742 - \u4ea4\u4e92\u3001\u7ed3\u6784"),(0,l.kt)("li",{parentName:"ul"},"\u6bd4\u5fae\u670d\u52a1\u66f4\u7b80\u5355 - \u6cbb\u7406")))))}c.isMDXComponent=!0}}]);