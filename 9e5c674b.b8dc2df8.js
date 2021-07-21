(window.webpackJsonp=window.webpackJsonp||[]).push([[662],{1151:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),i=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=i(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=i(r),d=n,f=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(f,s(s({ref:t},l),{},{components:r})):a.a.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},736:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return i}));var n=r(3),a=r(8),o=(r(0),r(1151)),c={title:"ZFS \u5e38\u89c1\u95ee\u9898"},s={unversionedId:"ops/storage/fs/zfs-faq",id:"ops/storage/fs/zfs-faq",isDocsHomePage:!1,title:"ZFS \u5e38\u89c1\u95ee\u9898",description:"cannot create '/data/db': pool must be upgraded to set this property or value",source:"@site/notes/ops/storage/fs/zfs-faq.md",slug:"/ops/storage/fs/zfs-faq",permalink:"/notes/ops/storage/fs/zfs-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/storage/fs/zfs-faq.md",version:"current",sidebar:"docs",previous:{title:"SMB",permalink:"/notes/ops/storage/fs/smb"},next:{title:"ZFS",permalink:"/notes/ops/storage/fs/zfs"}},p=[{value:"cannot create &#39;/data/db&#39;: pool must be upgraded to set this property or value",id:"cannot-create-datadb-pool-must-be-upgraded-to-set-this-property-or-value",children:[]},{value:"\u8ba1\u7b97\u4f7f\u7528\u7a7a\u95f4",id:"\u8ba1\u7b97\u4f7f\u7528\u7a7a\u95f4",children:[]}],l={toc:p};function i(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"cannot-create-datadb-pool-must-be-upgraded-to-set-this-property-or-value"},"cannot create '/data/db': pool must be upgraded to set this property or value"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"sudo zpool upgrade -a\n")),Object(o.b)("h2",{id:"\u8ba1\u7b97\u4f7f\u7528\u7a7a\u95f4"},"\u8ba1\u7b97\u4f7f\u7528\u7a7a\u95f4"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"compressratio - \u538b\u7f29\u7387",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"1/compressratio = \u538b\u7f29\u6bd4"),Object(o.b)("li",{parentName:"ul"},"compressratio=logicalused/used"))),Object(o.b)("li",{parentName:"ul"},"used - \u5b9e\u9645\u5360\u7528\u7a7a\u95f4"),Object(o.b)("li",{parentName:"ul"},"logicalused - \u903b\u8f91\u5360\u7528\u7a7a\u95f4"),Object(o.b)("li",{parentName:"ul"},"\u5360\u7528\u7a7a\u95f4\u4e5f\u548c\u4ec0\u4e48\u65f6\u5019\u5f00\u542f\u7684 compression \u6709\u5173",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u5f00\u542f compression \u4e4b\u540e\u65b0\u5199\u5165\u6570\u636e\u4f1a\u538b\u7f29"))),Object(o.b)("li",{parentName:"ul"},"\u5360\u7528\u7a7a\u95f4\u4f1a\u5bf9\u9f50\uff0c\u56e0\u6b64\u53ef\u80fd\u4f1a\u6bd4\u903b\u8f91\u66f4\u591a")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"zfs get all | egrep 'used\\b|logicalused|compression|\\bcompress'\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"data                 used                  884G                  -\ndata                 compressratio         1.47x                 -\ndata                 compression           lz4                   local\ndata                 logicalused           1.24T                 -\n")))}i.isMDXComponent=!0}}]);