(window.webpackJsonp=window.webpackJsonp||[]).push([[830],{1151:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return y}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(r),m=n,y=s["".concat(c,".").concat(m)]||s[m]||f[m]||a;return r?o.a.createElement(y,i(i({ref:t},l),{},{components:r})):o.a.createElement(y,i({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},903:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(8),a=(r(0),r(1151)),c={slug:"getopt-h-tips",title:"\u6982\u8ff0 getopt.h \u7684\u4f7f\u7528",tags:["C","\u7f16\u7a0b","\u5e93"],date:new Date("2012-02-23T00:00:00.000Z"),type:"post"},i={permalink:"/story/getopt-h-tips",editUrl:"https://github.com/wenerme/wener/edit/master/story/2012/2012-02-23-\u6982\u8ff0getopt.h\u7684\u4f7f\u7528.md",source:"@site/story/2012/2012-02-23-\u6982\u8ff0getopt.h\u7684\u4f7f\u7528.md",description:"\u6982\u8ff0",date:"2012-02-23T00:00:00.000Z",tags:[{label:"C",permalink:"/story/tags/c"},{label:"\u7f16\u7a0b",permalink:"/story/tags/\u7f16\u7a0b"},{label:"\u5e93",permalink:"/story/tags/\u5e93"}],title:"\u6982\u8ff0 getopt.h \u7684\u4f7f\u7528",readingTime:2.755,truncated:!0,prevItem:{title:"\u6211\u7684\u7b2c\u4e00\u4e2aVB.Net\u7a0b\u5e8f",permalink:"/story/first-vb-prog"},nextItem:{title:"\u68a6\u5e7b\u897f\u6e38\u7248\u4e2a\u4eba\u7b80\u4ecb PPT",permalink:"/story/fwj-resume"}},p=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",children:[]}],l={toc:p};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),Object(a.b)("p",null,"c\u8bed\u8a00\u63a7\u5236\u53f0\u7f16\u7a0b\u65f6\uff0c\u7ecf\u5e38\u90fd\u8981\u63a5\u53d7\u547d\u4ee4\u884c\u4f20\u9012\u6765\u7684\u9009\u9879\uff0c\u800cgetopt\u662f\u4e13\u95e8\u7528\u6765\u89e3\u6790\u547d\u4ee4\u884c\u9009\u9879\u7684\u4e00\u5957\u51fd\u6570\u3002"),Object(a.b)("p",null,"\u7b80\u5355\u7684\u8bf4\u4e00\u4e0bgetopt\uff0c\u5979\u5df2\u7ecf\u6709\u76f8\u5f53\u957f\u7684\u5386\u53f2\u4e86\uff0c\u65e9\u671f\u662f\u5728Unix\u4e2d\u4f7f\u7528\uff0c\u73b0\u5728\u5df2\u7ecf\u79fb\u690d\u5230\u4e86\u4e2a\u4e2a\u4e0d\u540c\u7684\u8bed\u8a00\uff08Shell,Java,Php,.NET...\uff09\uff0c\u4e3a\u63a5\u53d7\u547d\u4ee4\u884c\u9009\u9879\u63d0\u4f9b\u4e86\u5f88\u5927\u7684\u4fbf\u5229\u3002\u540c\u65f6\u4e5f\u6307\u5b9a\u4e86\u4e00\u5957\u4f20\u9012\u9009\u9879\u548c\u53c2\u6570\u7684\u6807\u51c6\u3002"))}u.isMDXComponent=!0}}]);