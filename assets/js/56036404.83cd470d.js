"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[42767],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,u=function(e,t){if(null==e)return{};var n,r,u={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(u[n]=e[n]);return u}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(u[n]=e[n])}return u}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,u=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=d(n),m=u,v=s["".concat(l,".").concat(m)]||s[m]||p[m]||i;return n?r.createElement(v,a(a({ref:t},c),{},{components:n})):r.createElement(v,a({ref:t},c))}));function m(e,t){var n=arguments,u=t&&t.mdxType;if("string"==typeof e||u){var i=n.length,a=new Array(i);a[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:u,a[1]=o;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},77019:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return s}});var r=n(87462),u=n(63366),i=(n(67294),n(3905)),a=["components"],o={title:"udev"},l=void 0,d={unversionedId:"os/linux/dev/udev",id:"os/linux/dev/udev",title:"udev",description:"- udev",source:"@site/notes/os/linux/dev/udev.md",sourceDirName:"os/linux/dev",slug:"/os/linux/dev/udev",permalink:"/notes/os/linux/dev/udev",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/dev/udev.md",tags:[],version:"current",frontMatter:{title:"udev"},sidebar:"docs",previous:{title:"rootfs",permalink:"/notes/os/linux/dev/rootfs"},next:{title:"USB over IP",permalink:"/notes/os/linux/dev/usbip"}},c=[{value:"unable to create temporary db file &#39;/run/udev/data/c189:39.tmp&#39;: Permission denied",id:"unable-to-create-temporary-db-file-runudevdatac18939tmp-permission-denied",children:[],level:2}],p={toc:c};function s(e){var t=e.components,n=(0,u.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"udev",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"systemd \u4e00\u90e8\u5206"),(0,i.kt)("li",{parentName:"ul"},"wikipedia ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Udev"},"udev")),(0,i.kt)("li",{parentName:"ul"},"archlinux ",(0,i.kt)("a",{parentName:"li",href:"https://wiki.archlinux.org/index.php/udev"},"udev")))),(0,i.kt)("li",{parentName:"ul"},"eudev",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Gentoo's fork of udev"),(0,i.kt)("li",{parentName:"ul"},"gentoo wiki ",(0,i.kt)("a",{parentName:"li",href:"https://wiki.gentoo.org/wiki/Eudev"},"eudev")),(0,i.kt)("li",{parentName:"ul"},"\u975e systemd \u73af\u5883\u4e00\u822c\u4f7f\u7528 eudev"))),(0,i.kt)("li",{parentName:"ul"},"busybox \u7684 mdev \u662f\u4e2a\u66f4\u52a0\u7b80\u5316\u7684\u7248\u672c"),(0,i.kt)("li",{parentName:"ul"},"\u529f\u80fd",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u8bbe\u5907\u7ba1\u7406\u5668"),(0,i.kt)("li",{parentName:"ul"},"\u53d6\u4ee3 hotplug\uff0chwdetect"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/etc/udev/rules.d/*.rules")),(0,i.kt)("li",{parentName:"ul"},"/etc/udev/rules.d"),(0,i.kt)("li",{parentName:"ul"},"/run/udev/rules.d"),(0,i.kt)("li",{parentName:"ul"},"/lib/udev/rules.d"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/micronucleus/micronucleus/blob/master/commandline/49-micronucleus.rules"},"https://github.com/micronucleus/micronucleus/blob/master/commandline/49-micronucleus.rules"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"apk add eudev\nservice udev start\nrc-update add udev sysinit\n\nudevadm monitor\n\n# \u8bbe\u5907\u4fe1\u606f\nudevadm info -p /devices/pci0000:00/0000:00:14.0/usb1/1-1\nudevadm info -q path -n input/mouse1\nudevadm test /devices/pci0000:00/0000:00:14.0/usb1/1-1\n\nudevadm control --reload-rules\n")),(0,i.kt)("h1",{id:"faq"},"FAQ"),(0,i.kt)("h2",{id:"unable-to-create-temporary-db-file-runudevdatac18939tmp-permission-denied"},"unable to create temporary db file '/run/udev/data/c189:39.tmp': Permission denied"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"udevadm test \u51fa\u73b0"),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 sudo \u5373\u53ef")))}s.isMDXComponent=!0}}]);