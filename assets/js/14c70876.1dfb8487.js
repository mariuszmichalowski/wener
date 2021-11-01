"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[41021],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),f=i,d=m["".concat(u,".").concat(f)]||m[f]||s[f]||a;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80092:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),l=["components"],o={title:"Kernel FAQ",tags:["FAQ"]},u=void 0,c={unversionedId:"os/linux/sys/kernel-faq",id:"os/linux/sys/kernel-faq",isDocsHomePage:!1,title:"Kernel FAQ",description:"\u4fee\u6539",source:"@site/notes/os/linux/sys/kernel-faq.md",sourceDirName:"os/linux/sys",slug:"/os/linux/sys/kernel-faq",permalink:"/notes/os/linux/sys/kernel-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/sys/kernel-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",frontMatter:{title:"Kernel FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"Linux Kernel",permalink:"/notes/os/linux/sys/kernel"},next:{title:"limit",permalink:"/notes/os/linux/sys/limit"}},p=[{value:"\u4fee\u6539",id:"\u4fee\u6539",children:[]}],s={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4fee\u6539"},"\u4fee\u6539"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Linux 5.4",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"linux/pci-aspm.h -> linux/pci.h"))),(0,a.kt)("li",{parentName:"ul"},"Linux 5.1",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/torvalds/linux/commit/736706bee3298208343a76096370e4f6a5c55915"},"get_ds"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"get_ds()")," -> KERNEL_DS"))))),(0,a.kt)("li",{parentName:"ul"},"Linux 5.0",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SUBDIRS=$(PWD)")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"M=$(shell pwd)")),(0,a.kt)("li",{parentName:"ul"},"do_gettimeofday",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"do_gettimeofday(&di->last_lost_tick.tv);")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"di->last_lost_tick = ktime_get();")),(0,a.kt)("li",{parentName:"ul"},"\u4ee5\u524d\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"linux/timekeeping32.h")," \u4e4b\u540e\u88ab\u5220\u9664"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://git.asterisk.org/gitweb/?p=dahdi/linux.git;a=blobdiff;f=drivers/dahdi/xpp/xbus-pcm.c;h=8bb2fe76c66a143242730e022cf8af3a6268b062;hp=37f9260e7ecb1c7b3e00b7bd942eac7bc95d6d05;hb=ffcd08205c71dcb0e060836359418bef20f07ffa;hpb=8468250328b607cbd2774c2209fbe5826be01098"},"xpp patch")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"struct timeval now")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"const ktime_t now"),";"),(0,a.kt)("li",{parentName:"ul"},"touch_softlockup_watchdog",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4ee5\u524d ",(0,a.kt)("inlineCode",{parentName:"li"},"linux/sched.h")," \u73b0\u5728\u5728 ",(0,a.kt)("a",{parentName:"li",href:"https://elixir.bootlin.com/linux/v5.4/ident/touch_softlockup_watchdog"},"linux/nmi.h"))))))))}m.isMDXComponent=!0}}]);