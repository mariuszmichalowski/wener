(window.webpackJsonp=window.webpackJsonp||[]).push([[947],{1020:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(8),o=(r(0),r(1151)),i={id:"lvm",title:"LVM"},l={unversionedId:"ops/storage/block/lvm",id:"ops/storage/block/lvm",isDocsHomePage:!1,title:"LVM",description:"Tips",source:"@site/notes/ops/storage/block/lvm.md",slug:"/ops/storage/block/lvm",permalink:"/notes/ops/storage/block/lvm",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/storage/block/lvm.md",version:"current",sidebar:"docs",previous:{title:"Fiber Channel",permalink:"/notes/ops/storage/block/fc"},next:{title:"mdadm",permalink:"/notes/ops/storage/block/mdadm"}},c=[{value:"Tips",id:"tips",children:[]}],p={toc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"tips"},"Tips"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://askubuntu.com/q/3596"},"What is LVM and what is it used for?")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"http://tldp.org/HOWTO/LVM-HOWTO/"},"LVM HOWTO")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://wiki.ubuntu.com/Lvm"},"LVM wiki")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Logical_Volume_Manager_(Linux)"},"LVM Wikipedia")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://askubuntu.com/questions/3596"},"What is LVM and what is it used for ?")),Object(o.b)("li",{parentName:"ul"},"\u4e3b\u8981\u7279\u6027",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u903b\u8f91\u5377\u53ef\u4ee5\u8de8\u78c1\u76d8"),Object(o.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u5b9e\u73b0 RAID0 \u7684\u529f\u80fd, \u5206\u644a\u78c1\u76d8\u538b\u529b"),Object(o.b)("li",{parentName:"ul"},"\u903b\u8f91\u5377\u5927\u5c0f\u53ef\u52a8\u6001\u8c03\u6574\u4e0d\u5f71\u54cd\u7cfb\u7edf\u548c\u7a0b\u5e8f"),Object(o.b)("li",{parentName:"ul"},"\u52a8\u6001\u5206\u533a,\u4fee\u6539\u65e0\u9700\u91cd\u542f"),Object(o.b)("li",{parentName:"ul"},"\u70ed\u4ea4\u6362"),Object(o.b)("li",{parentName:"ul"},"\u5408\u5e76\u591a\u4e2a\u4e91\u76d8"),Object(o.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u505a\u6df7\u5408,\u4f7f\u7528 SSD \u6765\u505a\u7f13\u5b58"),Object(o.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u5bf9 LV \u505a\u5feb\u7167\u6216\u6062\u590d"),Object(o.b)("li",{parentName:"ul"},"\u4e5f\u53ef\u4ee5\u4f7f\u7528 striped \u6a21\u5f0f,\u4f7f\u7cfb\u7edf\u76f4\u63a5\u8bbf\u95ee\u7269\u7406\u78c1\u76d8,\u7c7b\u4f3c\u4e8e RAID-0"))),Object(o.b)("li",{parentName:"ul"},"\u4e2a\u4eba\u603b\u7ed3",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"LVM \u8bbe\u7f6e\u8d77\u6765\u6709\u70b9\u7e41\u6742"),Object(o.b)("li",{parentName:"ul"},"\u4e00\u822c\u4e5f\u4e0d\u4f1a\u7528\u4e8e rootfs"),Object(o.b)("li",{parentName:"ul"},"\u5982\u679c\u505a nas \u4e5f\u4f18\u5148\u662f\u8003\u8651 zfs")))))}u.isMDXComponent=!0},1151:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=u(r),m=n,O=b["".concat(i,".").concat(m)]||b[m]||s[m]||o;return r?a.a.createElement(O,l(l({ref:t},p),{},{components:r})):a.a.createElement(O,l({ref:t},p))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);