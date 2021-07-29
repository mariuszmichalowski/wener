"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[75188],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,w=m["".concat(u,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(w,o(o({ref:t},p),{},{components:n})):r.createElement(w,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89781:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=["components"],c={title:"react-window"},u=void 0,l={unversionedId:"web/react/react-window",id:"web/react/react-window",isDocsHomePage:!1,title:"react-window",description:"- bvaughn/react-window",source:"@site/notes/web/react/react-window.md",sourceDirName:"web/react",slug:"/web/react/react-window",permalink:"/notes/web/react/react-window",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/react/react-window.md",version:"current",frontMatter:{title:"react-window"},sidebar:"docs",previous:{title:"React Version",permalink:"/notes/web/react/react-version"},next:{title:"zustand",permalink:"/notes/web/react/zustand"}},p=[],s={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/bvaughn/react-window"},"bvaughn/react-window")),(0,i.kt)("li",{parentName:"ul"},"FixedSizeList"),(0,i.kt)("li",{parentName:"ul"},"VariableSizeList"),(0,i.kt)("li",{parentName:"ul"},"FixedSizeGrid"),(0,i.kt)("li",{parentName:"ul"},"VariableSizeGrid"),(0,i.kt)("li",{parentName:"ul"},"\u8f85\u52a9\u529f\u80fd",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/bvaughn/react-virtualized-auto-sizer"},"bvaughn/react-virtualized-auto-sizer"),"\n\u4ece react-virtualized \u63d0\u53d6\u7684 AutoSizer"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/bvaughn/react-window-infinite-loader"},"bvaughn/react-window-infinite-loader"),"\n\u4e0b\u62c9\u6eda\u52a8\u52a0\u8f7d")))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u5373\u65f6\u52a8\u6001\u884c\u9ad8 - ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/bvaughn/react-window/issues/6"},"react-window#6"))))))}m.isMDXComponent=!0}}]);