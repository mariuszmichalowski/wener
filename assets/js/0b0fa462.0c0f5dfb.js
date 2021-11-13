"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[8021],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return b}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(n),b=a,k=c["".concat(u,".").concat(b)]||c[b]||m[b]||o;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},49722:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={title:"Busybox",id:"busybox"},u=void 0,p={unversionedId:"os/busybox/busybox",id:"os/busybox/busybox",isDocsHomePage:!1,title:"Busybox",description:"- \u7c7b\u4f3c",source:"@site/notes/os/busybox/README.md",sourceDirName:"os/busybox",slug:"/os/busybox/busybox",permalink:"/notes/os/busybox/busybox",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/busybox/README.md",tags:[],version:"current",frontMatter:{title:"Busybox",id:"busybox"},sidebar:"docs",previous:{title:"Windows Remote Management",permalink:"/notes/os/windows/winrm"},next:{title:"ifupdown",permalink:"/notes/os/busybox/ifupdown"}},s=[],m={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/landley/toybox"},"landley/toybox"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"BSD, C"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/u-root/u-root"},"u-root/u-root"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"BSD, Go"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://busybox.net/downloads/BusyBox.html"},"busybox")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.busybox.net/live_bbox/live_bbox.html"},"live bbox"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# https://busybox.net/downloads/binaries/1.31.0-defconfig-multiarch-musl/\ncurl -o busybox https://busybox.net/downloads/binaries/1.31.0-defconfig-multiarch-musl/busybox-x86_64\nchmod +x busybox\n")),(0,o.kt)("h1",{id:"\u5305\u7ba1\u7406"},"\u5305\u7ba1\u7406"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ipkg - Itsy Package Management System - 2006-5-30",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".ipk")))),(0,o.kt)("li",{parentName:"ul"},"opkg - OPKG Package Manager",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301 root fs \u7ba1\u7406\uff0c\u800c\u4e0d\u53ea\u662f\u5b89\u88c5\u5230\u7279\u5b9a\u76ee\u5f55 - \u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"li"},"/opt")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".opk")))),(0,o.kt)("li",{parentName:"ul"},"\u65e9\u671f\u4f7f\u7528 ipkg, \u4e4b\u540e\u88ab opkg \u66ff\u4ee3"),(0,o.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c apt/dpkg")),(0,o.kt)("h1",{id:"applets"},"applets"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man5/utmp.5.html"},"utmp.5")," - ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Utmp"},"https://en.wikipedia.org/wiki/Utmp"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"keep track of all logins and logouts"),(0,o.kt)("li",{parentName:"ul"},"\u88ab\u4f9d\u8d56 who, last"),(0,o.kt)("li",{parentName:"ul"},"AlpineLinux \u76ee\u524d\u6ca1\u5f00\u542f bb \u7684\u8fd9\u4e2a\u7ec4\u4ef6\uff0c\u76ee\u524d\u4ed3\u5e93\u6709 skarnet \u7684 ",(0,o.kt)("a",{parentName:"li",href:"https://skarnet.org/software/utmps/"},"utmps")))),(0,o.kt)("li",{parentName:"ul"},"wtmp",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"historical utmp"))),(0,o.kt)("li",{parentName:"ul"},"btmp",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"records failed login attempts")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/var/run/utmp\n/var/log/wtmp\n/var/log/btmp\n")))}c.isMDXComponent=!0}}]);