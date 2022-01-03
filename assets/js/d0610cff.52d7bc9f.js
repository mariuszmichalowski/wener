"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[47062],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),m=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=m(n),d=l,f=s["".concat(u,".").concat(d)]||s[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var m=2;m<a;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},96508:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return c},default:function(){return s}});var r=n(87462),l=n(63366),a=(n(67294),n(3905)),i=["components"],o={title:"Linux Awesome",tags:["Awesome"]},u=void 0,m={unversionedId:"os/linux/linux-awesome",id:"os/linux/linux-awesome",title:"Linux Awesome",description:"Dev",source:"@site/notes/os/linux/linux-awesome.md",sourceDirName:"os/linux",slug:"/os/linux/linux-awesome",permalink:"/notes/os/linux/linux-awesome",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/linux-awesome.md",tags:[{label:"Awesome",permalink:"/notes/tags/awesome"}],version:"current",frontMatter:{title:"Linux Awesome",tags:["Awesome"]},sidebar:"docs",previous:{title:"kustomize",permalink:"/notes/devops/kubernetes/tool/kustomize"},next:{title:"Linux FAQ",permalink:"/notes/os/linux/linux-faq"}},c=[{value:"Dev",id:"dev",children:[],level:2},{value:"Command",id:"command",children:[],level:2},{value:"Performance",id:"performance",children:[],level:2},{value:"webadmin",id:"webadmin",children:[],level:2},{value:"Firmware",id:"firmware",children:[],level:2},{value:"Learn",id:"learn",children:[],level:2},{value:"Tools",id:"tools",children:[],level:2},{value:"\u6709\u8da3",id:"\u6709\u8da3",children:[],level:2}],p={toc:c};function s(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"dev"},"Dev"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.openwall.com/"},"https://www.openwall.com/"))),(0,a.kt)("h2",{id:"command"},"Command"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tldr-pages/tldr"},"tldr-pages/tldr"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Collaborative cheatsheets for console commands")))),(0,a.kt)("h2",{id:"performance"},"Performance"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.brendangregg.com/linuxperf.html"},"Linux Performance"))),(0,a.kt)("h2",{id:"webadmin"},"webadmin"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/zhaojh329/oui"},"zhaojh329/oui")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/cockpit-project/cockpit"},"cockpit-project/cockpit"))),(0,a.kt)("h2",{id:"firmware"},"Firmware"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://fwupd.org/"},"fwupd"),"\nLinux Vendor Firmware Service")),(0,a.kt)("h2",{id:"learn"},"Learn"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://sysprog21.github.io/lkmpg/"},"The Linux Kernel Module Programming Guide"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=28283030"},"HN"))))),(0,a.kt)("h2",{id:"tools"},"Tools"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/aristocratos/btop"},"aristocratos/btop")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/intoli/exodus"},"intoli/exodus"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"relocation of Linux binaries\u2013and all of their dependencies\u2013without containers")))),(0,a.kt)("h2",{id:"\u6709\u8da3"},"\u6709\u8da3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/sbu-fsl/kernel-ml"},"sbu-fsl/kernel-ml"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Brings ML to Linux kernel")))))}s.isMDXComponent=!0}}]);