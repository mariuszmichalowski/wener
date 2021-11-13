"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[75202],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=u(r),m=o,f=g["".concat(c,".").concat(m)]||g[m]||s[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},38912:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return g}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={title:"go-zero"},c=void 0,u={unversionedId:"languages/go/lib/go-zero",id:"languages/go/lib/go-zero",isDocsHomePage:!1,title:"go-zero",description:"- zeromicro/go-zero",source:"@site/notes/languages/go/lib/go-zero.md",sourceDirName:"languages/go/lib",slug:"/languages/go/lib/go-zero",permalink:"/notes/languages/go/lib/go-zero",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/go/lib/go-zero.md",tags:[],version:"current",frontMatter:{title:"go-zero"},sidebar:"docs",previous:{title:"go-micro",permalink:"/notes/languages/go/lib/go-micro"},next:{title:"goreleaser",permalink:"/notes/languages/go/lib/goreleaser"}},p=[],s={toc:p};function g(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/zeromicro/go-zero"},"zeromicro/go-zero"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u597d\u672a\u6765\u79d1\u6280 \u5f00\u6e90 RPC \u6846\u67b6"),(0,a.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u7684 DSL"),(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u81ea\u5b9a\u4e49\u7684 goctl \u8fdb\u884c\u751f\u6210")))),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49 DSL \u610f\u5473\u7740 \u4ea4\u4e92\u5dee\u3001\u751f\u6001\u5dee\u3001ROI \u4f4e"),(0,a.kt)("li",{parentName:"ul"},"\u51e0\u4e4e\u662f\u5355\u4eba\u5728\u5f00\u53d1")))))}g.isMDXComponent=!0}}]);