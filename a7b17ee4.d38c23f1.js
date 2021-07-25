(window.webpackJsonp=window.webpackJsonp||[]).push([[717],{1166:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,m=u["".concat(i,".").concat(f)]||u[f]||b[f]||o;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},790:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(8),o=(r(0),r(1166)),i={title:"DFS"},c={unversionedId:"ops/storage/fs/dfs",id:"ops/storage/fs/dfs",isDocsHomePage:!1,title:"DFS",description:"* \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/ops/storage/fs/dfs.md",slug:"/ops/storage/fs/dfs",permalink:"/notes/ops/storage/fs/dfs",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/storage/fs/dfs.md",version:"current",sidebar:"docs",previous:{title:"Btrfs",permalink:"/notes/ops/storage/fs/btrfs"},next:{title:"FUSE",permalink:"/notes/ops/storage/fs/fuse"}},s=[{value:"Samba",id:"samba",children:[]}],l={toc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Distributed File System"),Object(o.b)("li",{parentName:"ul"},"\u5fae\u8f6f\u5f00\u53d1\u7684\u5206\u5e03\u5f0f\u6587\u4ef6\u7cfb\u7edf"),Object(o.b)("li",{parentName:"ul"},"alternative name space, load balancing, automatic failover"))),Object(o.b)("li",{parentName:"ul"},"junction \u5b9a\u4f4d\u5143\u4fe1\u606f\uff0c\u7136\u540e\u8bbf\u95ee\u5b9e\u9645 server \u83b7\u53d6\u6570\u636e",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u7c7b\u4f3c\u8054\u90a6"))),Object(o.b)("li",{parentName:"ul"},"DFS-R - Distributed File System Replication",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u5b9e\u73b0 DFS \u4e2d\u7684\u526f\u672c\u673a\u5236"))),Object(o.b)("li",{parentName:"ul"},"\u5e95\u5c42\u6709\u4f7f\u7528 SMB \u534f\u8bae"),Object(o.b)("li",{parentName:"ul"},"\u53ef\u72ec\u7acb\uff08\u5355\u673a\uff09\u4f7f\u7528\u6216\u5728\u57df\u4e2d\u90e8\u7f72\u4f7f\u7528")),Object(o.b)("h2",{id:"samba"},"Samba"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://wiki.samba.org/index.php/Distributed_File_System_(DFS)"},"Distributed File System")),Object(o.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 DFS-R")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-properties"},"path = /export/dfsroot\nmsdfs root = yes\nhost msdfs = yes\nvfs object = dfs_samba4\n")))}p.isMDXComponent=!0}}]);