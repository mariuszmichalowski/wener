"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[67320],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(n),k=a,s=d["".concat(u,".").concat(k)]||d[k]||c[k]||i;return n?r.createElement(s,l(l({ref:t},m),{},{components:n})):r.createElement(s,l({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32898:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),l=["components"],o={id:"rethinkdb",title:"RethinkDB"},u=void 0,p={unversionedId:"db/document/rethinkdb",id:"db/document/rethinkdb",isDocsHomePage:!1,title:"RethinkDB",description:"Tips",source:"@site/notes/db/document/rethinkdb.md",sourceDirName:"db/document",slug:"/db/document/rethinkdb",permalink:"/notes/db/document/rethinkdb",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/document/rethinkdb.md",version:"current",frontMatter:{id:"rethinkdb",title:"RethinkDB"},sidebar:"docs",previous:{title:"MongoDB",permalink:"/notes/db/document/mongodb"},next:{title:"Key Value",permalink:"/notes/db/kv/kv"}},m=[{value:"Tips",id:"tips",children:[]}],c={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/rethinkdb/rethinkdb/blob/next/packaging/assets/config/default.conf.sample"},"default.conf.sample"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5e26\u6ce8\u91ca\u7684\u914d\u7f6e\u6587\u4ef6\u4f8b\u5b50"),(0,i.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u9879\u5e76\u4e0d\u591a,\u57fa\u672c\u6240\u6709\u7684\u914d\u7f6e\u90fd\u53ef\u4ee5\u901a\u8fc7\u53c2\u6570\u6307\u5b9a"))),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5ba2\u6237\u7aef\u7aef\u53e3 28015"),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u96c6\u7fa4\u7aef\u53e3 29015"),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7ba1\u7406\u7aef\u53e3 8080"),(0,i.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u534f\u8bae\u7684 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rethinkdb/rethinkdb/blob/next/src/rdb_protocol/ql2.proto"},"ql2.proto")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://rethinkdb.com/limitations/"},"\u9650\u5236"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u96c6\u7fa4",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6700\u5927 64 \u4e2a\u5206\u7247"))),(0,i.kt)("li",{parentName:"ul"},"\u6587\u6863",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u8868\u5927\u7ea6\u5728\u6bcf\u4e2a\u5b9e\u4f8b\u4e0a\u8981\u5360\u7528 10 MB, \u4e00\u4e2a\u7a7a\u8868\u5927\u7ea6\u9700\u8981 4 MB"),(0,i.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u8868\u81f3\u5c11\u9700\u8981 8 MB \u5185\u5b58"),(0,i.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u6587\u6863\u5efa\u8bae\u4e0d\u8d85\u8fc7 16 MB"),(0,i.kt)("li",{parentName:"ul"},"\u6700\u5927\u7684 JSON \u67e5\u8be2\u65f6 64MB"),(0,i.kt)("li",{parentName:"ul"},"RethinkDB \u9700\u8981\u5c06\u7ed3\u6784\u8bb0\u5f55\u5728\u5185\u5b58\u4e2d, \u5927\u7ea6\u9700\u8981\u6570\u636e 1% \u7684\u5185\u5b58"))),(0,i.kt)("li",{parentName:"ul"},"\u952e",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4e3b\u952e\u6700\u957f 127 \u4e2a\u5b57\u7b26"),(0,i.kt)("li",{parentName:"ul"},"\u4e8c\u7ea7\u952e\u53ea\u4f1a\u7d22\u5f15\u524d 238 - \u4e3b\u952e\u957f\u5ea6 \u7684\u5b57\u8282,"),(0,i.kt)("li",{parentName:"ul"},"\u4e8c\u7ea7\u7d22\u5f15\u4e0d\u4f1a\u7d22\u5f15\u5bf9\u8c61\u6216 null"),(0,i.kt)("li",{parentName:"ul"},"\u4e3b\u952e\u5b57\u7b26\u4e32\u4e0d\u80fd\u5305\u542b null"))),(0,i.kt)("li",{parentName:"ul"},"\u6570\u636e\u7c7b\u578b",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6570\u5b57\u4e3a\u53cc\u7cbe\u5ea6\u6d6e\u70b9\u6570, -2^53 - 2^53, \u6570\u5b57\u4e0d\u80fd\u4e3a NaN \u6216\u65e0\u9650"),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u6570\u7ec4\u4e0d\u80fd\u8d85\u8fc7 100,000,\u53ef\u901a\u8fc7 arrayLimit \u9009\u9879\u4fee\u6539"))),(0,i.kt)("li",{parentName:"ul"},"\u5176\u4ed6",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7d22\u5f15\u4f7f\u7528\u5b57\u8282\u5e8f,\u800c\u975e\u5b57\u7b26\u987a\u5e8f"),(0,i.kt)("li",{parentName:"ul"},"\u90e8\u5206\u6587\u4ef6\u7cfb\u7edf(\u4f8b\u5982\u52a0\u5bc6\u7684,\u538b\u7f29\u7684)\u4e0d\u652f\u6301 direct-io \u9009\u9879"),(0,i.kt)("li",{parentName:"ul"},"btrfs \u7684 direct-io \u652f\u6301\u6709\u95ee\u9898"),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b, RethinkDB \u4f1a\u8fd4\u56de\u8fd8\u6ca1\u63d0\u4ea4\u5230\u78c1\u76d8\u7684\u5e76\u53d1\u5199\u8bf7\u6c42, \u53ef\u901a\u8fc7 read_mode \u9009\u9879\u63a7\u5236\u9694\u79bb\u7ea7\u522b."))))),(0,i.kt)("li",{parentName:"ul"},"ReQL",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://rethinkdb.com/docs/sql-to-reql/javascript/"},"SQL to ReQL")))),(0,i.kt)("li",{parentName:"ul"},"\u95ee\u9898",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/rethinkdb/rethinkdb/issues/6618"},"#6618")," Is rethinkdb dead ?")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u542f\u52a8\u4e24\u4e2a\u793a\u4f8b,\u7ec4\u6210\u4e00\u4e2a\u96c6\u7fa4,\u6570\u636e\u4f1a\u5206\u522b\u5b58\u50a8\u5230 data-a \u548c data-b\nrethinkdb -d data-a -n svr_a\nrethinkdb -d data-b -n svr_b -o 100 -j 127.0.0.1\n")))}d.isMDXComponent=!0}}]);