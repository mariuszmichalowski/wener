(window.webpackJsonp=window.webpackJsonp||[]).push([[1026],{1099:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(8),a=(n(0),n(1166)),c={title:"toybox"},b={unversionedId:"os/busybox/toybox",id:"os/busybox/toybox",isDocsHomePage:!1,title:"toybox",description:"* landley/toybox \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/os/busybox/toybox.md",slug:"/os/busybox/toybox",permalink:"/notes/os/busybox/toybox",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/busybox/toybox.md",version:"current",sidebar:"docs",previous:{title:"ifupdown",permalink:"/notes/os/busybox/ifupdown"},next:{title:"udhcpc",permalink:"/notes/os/busybox/udhcpc"}},l=[],i={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/landley/toybox"},"landley/toybox")," \u662f\u4ec0\u4e48\uff1f",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"BSD \u7248 busybox \u66ff\u4ee3\u54c1"),Object(a.b)("li",{parentName:"ul"},"2006 \u7531\u4e8e busybox \u534f\u8bae\u4e89\u8bae\u7ef4\u62a4\u8005\u521b\u7acb\u7684\u9879\u76ee"),Object(a.b)("li",{parentName:"ul"},"2011 Snoy \u96c7\u4f63\u4f5c\u8005\u7ee7\u7eed\u5f00\u53d1\u4ece GPL \u66f4\u6539\u4e3a 2BSD\uff0c2013 \u534f\u8bae\u4fee\u6539\u4e3a 0BSD"),Object(a.b)("li",{parentName:"ul"},"2014 Android 6.0 \u96c6\u6210"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"http://www.landley.net/toybox/"},"http://www.landley.net/toybox/"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"curl -O http://www.landley.net/toybox/bin/toybox-armv5l\ncurl -O https://landley.net/toybox/downloads/binaries/0.7.1/toybox-armv6l\n")))}u.isMDXComponent=!0},1166:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),u=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},y=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=u(n),y=r,f=p["".concat(c,".").concat(y)]||p[y]||s[y]||a;return n?o.a.createElement(f,b(b({ref:t},i),{},{components:n})):o.a.createElement(f,b({ref:t},i))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=y;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:r,c[1]=b;for(var i=2;i<a;i++)c[i]=n[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);