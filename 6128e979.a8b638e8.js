(window.webpackJsonp=window.webpackJsonp||[]).push([[402],{1129:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=i.a.createContext({}),s=function(e){var t=i.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=s(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,f=p["".concat(a,".").concat(m)]||p[m]||b[m]||o;return r?i.a.createElement(f,u(u({ref:t},c),{},{components:r})):i.a.createElement(f,u({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,a[1]=u;for(var c=2;c<o;c++)a[c]=r[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},476:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),i=r(8),o=(r(0),r(1129)),a={id:"supervision",title:"Process supervision"},u={unversionedId:"os/linux/init/supervision",id:"os/linux/init/supervision",isDocsHomePage:!1,title:"Process supervision",description:"- Process supervision",source:"@site/notes/os/linux/init/supervision.md",slug:"/os/linux/init/supervision",permalink:"/notes/os/linux/init/supervision",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/init/supervision.md",version:"current",sidebar:"docs",previous:{title:"s6",permalink:"/notes/os/linux/init/s6"},next:{title:"Supervisor",permalink:"/notes/os/linux/init/supervisor"}},l=[],c={toc:l};function s(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Process_supervision"},"Process supervision")),Object(o.b)("li",{parentName:"ul"},"\u901a\u5e38 init \u7cfb\u7edf\u90fd\u5305\u542b"),Object(o.b)("li",{parentName:"ul"},"supervision \u6bd4 init \u6709\u4f18\u52bf",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u670d\u52a1\u91cd\u542f"),Object(o.b)("li",{parentName:"ul"},"\u4e0d\u9700\u8981 pid \u6587\u4ef6"),Object(o.b)("li",{parentName:"ul"},"\u6e05\u9664\u8fdb\u7a0b\u72b6\u6001"),Object(o.b)("li",{parentName:"ul"},"\u66f4\u53ef\u9760\u7684\u65e5\u5fd7 - \u4f1a\u6355\u83b7 stdout\u3001stderr"),Object(o.b)("li",{parentName:"ul"},"\u66f4\u5feb - \u5e76\u884c"),Object(o.b)("li",{parentName:"ul"},"\u76d1\u63a7\u544a\u8b66"))),Object(o.b)("li",{parentName:"ul"},"\u7eaf\u7cb9\u7684 supervision",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"monit"),Object(o.b)("li",{parentName:"ul"},"pm2"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"http://www.skarnet.org/software/s6/"},"s6")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://immortal.run/"},"immortal")," ",Object(o.b)("a",{parentName:"li",href:"https://github.com/immortal/immortal/"},"immortal/immortal"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Go \u8bed\u8a00\u5b9e\u73b0")))))))}s.isMDXComponent=!0}}]);