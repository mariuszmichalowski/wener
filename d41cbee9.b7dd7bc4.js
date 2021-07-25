(window.webpackJsonp=window.webpackJsonp||[]).push([[920],{1166:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),f=r,m=s["".concat(i,".").concat(f)]||s[f]||b[f]||a;return n?o.a.createElement(m,l(l({ref:t},c),{},{components:n})):o.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},993:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(8),a=(n(0),n(1166)),i={id:"alpine-lbu",title:"Alpine local backup"},l={unversionedId:"os/alpine/alpine-lbu",id:"os/alpine/alpine-lbu",isDocsHomePage:!1,title:"Alpine local backup",description:"- apkvol",source:"@site/notes/os/alpine/alpine-lbu.md",slug:"/os/alpine/alpine-lbu",permalink:"/notes/os/alpine/alpine-lbu",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/alpine/alpine-lbu.md",version:"current",sidebar:"docs",previous:{title:"Alpine \u5165\u95e8",permalink:"/notes/os/alpine/alpine-intro"},next:{title:"Alpine \u8fd0\u7ef4\u7b14\u8bb0",permalink:"/notes/os/alpine/alpine-ops"}},p=[],c={toc:p};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"apkvol"),Object(a.b)("li",{parentName:"ul"},"lbu - ",Object(a.b)("a",{parentName:"li",href:"https://wiki.alpinelinux.org/wiki/Alpine_local_backup"},"Alpine local backup"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u53ea\u5173\u5fc3 /etc \u4e0b\u5185\u5bb9\uff0c\u4e0d\u5305\u542b ",Object(a.b)("inlineCode",{parentName:"li"},"/etc/init.d")),Object(a.b)("li",{parentName:"ul"},"\u76f8\u5f53\u4e8e\u628a\u6240\u6709 /etc \u4e0b\u7684\u5185\u5bb9\u8fdb\u884c\u5907\u4efd\u6216\u6062\u590d"),Object(a.b)("li",{parentName:"ul"},"\u5b89\u88c5\u6240\u9700\u5305")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# \u5236\u4f5c rootfs.apkvol\ncurl -LO https://mirrors.aliyun.com/alpine/v3.12/releases/x86_64/alpine-minirootfs-3.12.0-x86_64.tar.gz\nmkdir -p rootfs\ntar zxf alpine-minirootfs-3.12.0-x86_64.tar.gz -C rootfs\n\ncp /etc/apk/repositories rootfs/etc/apk/\n# \u53ef\u9009 - chroot \u540e\u53ef apk add\n# echo nameserver 114.114.114.114 > rootfs/etc/resolv.conf\napk --root rootfs add alpine-conf\n\n# \u83b7\u53d6\u5230 rootfs.apkvol\nchroot rootfs/ lbu pkg rootfs.apkvol.tar.gz\nmv rootfs/rootfs.apkvol.tar.gz .\n")))}u.isMDXComponent=!0}}]);