"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[24869],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return v}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(r),v=a,m=f["".concat(c,".").concat(v)]||f[v]||s[v]||o;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},40275:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],i={title:"Dev FAQ",tags:["FAQ"]},c=void 0,u={unversionedId:"dev/dev-faq",id:"dev/dev-faq",title:"Dev FAQ",description:"health vs healthz",source:"@site/notes/dev/dev-faq.md",sourceDirName:"dev",slug:"/dev/dev-faq",permalink:"/notes/dev/dev-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/dev/dev-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",frontMatter:{title:"Dev FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"\u5f00\u53d1\u76f8\u5173\u6982\u5ff5",permalink:"/notes/dev/dev-concept"},next:{title:"Dev Glossary",permalink:"/notes/dev/dev-glossary"}},p=[{value:"health vs healthz",id:"health-vs-healthz",children:[],level:2}],s={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"health-vs-healthz"},"health vs healthz"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u7684 readyz, varz, statusz, rpcz, livez"),(0,o.kt)("li",{parentName:"ul"},"\u6765\u81ea\u4e8e\u8c37\u6b4c\u5185\u90e8\u5b9e\u8df5 - z-pages"),(0,o.kt)("li",{parentName:"ul"},"z \u662f\u4e3a\u4e86\u907f\u514d\u548c\u73b0\u6709 endpoint \u51b2\u7a81"),(0,o.kt)("li",{parentName:"ul"},"\u5927\u591a\u7528\u5e26 z \u7684\u540d\u5b57\uff0c\u7cfb\u7edf\u5e38\u7528\uff0c\u7c7b\u4f3c /metrics\uff0c\u4e0e\u4e1a\u52a1\u65e0\u5173"),(0,o.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/a/43381061/1870054"},"https://stackoverflow.com/a/43381061/1870054")))),(0,o.kt)("li",{parentName:"ul"},"\u5176\u4ed6",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"/health/live"),(0,o.kt)("li",{parentName:"ul"},"/health/ready")))))}f.isMDXComponent=!0}}]);