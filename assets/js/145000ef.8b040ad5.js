"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[73192],{3905:function(e,t,r){r.d(t,{Zo:function(){return g},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},g=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(c,".").concat(m)]||p[m]||s[m]||o;return r?n.createElement(f,i(i({ref:t},g),{},{components:r})):n.createElement(f,i({ref:t},g))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},12265:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return g},default:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={title:"migrate"},c=void 0,u={unversionedId:"languages/go/lib/migrate",id:"languages/go/lib/migrate",isDocsHomePage:!1,title:"migrate",description:"- golang-migrate/migrate",source:"@site/notes/languages/go/lib/migrate.md",sourceDirName:"languages/go/lib",slug:"/languages/go/lib/migrate",permalink:"/notes/languages/go/lib/migrate",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/go/lib/migrate.md",tags:[],version:"current",frontMatter:{title:"migrate"},sidebar:"docs",previous:{title:"machinery",permalink:"/notes/languages/go/lib/machinery"},next:{title:"sqlc",permalink:"/notes/languages/go/lib/sqlc"}},g=[],s={toc:g};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/golang-migrate/migrate"},"golang-migrate/migrate"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"DB \u8fc1\u79fb\u5de5\u5177"),(0,o.kt)("li",{parentName:"ul"},"\u53ef\u5f53\u505a\u5e93\u6765\u4f7f\u7528"),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301\u8f83\u591a\u7684 Source \u548c \u6570\u636e\u5e93")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u521b\u5efa sql \u6587\u4ef6\nmigrate create -ext sql -dir db/migrations -seq create_users_table\n")))}p.isMDXComponent=!0}}]);