"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[86699],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,b=f["".concat(p,".").concat(m)]||f[m]||s[m]||i;return n?r.createElement(b,a(a({ref:t},c),{},{components:n})):r.createElement(b,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},79051:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return f}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],u={title:"ifupdown"},p=void 0,l={unversionedId:"os/busybox/ifupdown",id:"os/busybox/ifupdown",title:"ifupdown",description:"Tips",source:"@site/notes/os/busybox/ifupdown.md",sourceDirName:"os/busybox",slug:"/os/busybox/ifupdown",permalink:"/notes/os/busybox/ifupdown",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/busybox/ifupdown.md",tags:[],version:"current",frontMatter:{title:"ifupdown"},sidebar:"docs",previous:{title:"Busybox",permalink:"/notes/os/busybox/"},next:{title:"toybox",permalink:"/notes/os/busybox/toybox"}},c=[{value:"Tips",id:"tips",children:[],level:2}],s={toc:c};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://sourcegraph.com/github.com/mirror/busybox/-/blob/networking/ifupdown.c"},"networking/ifupdown.c")),(0,i.kt)("li",{parentName:"ul"},"\u5904\u7406 ",(0,i.kt)("inlineCode",{parentName:"li"},"/etc/network/interfaces")),(0,i.kt)("li",{parentName:"ul"},"\u63d0\u4f9b ifup \u548c ifdown"),(0,i.kt)("li",{parentName:"ul"},"\u53ea\u5904\u7406 auto"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/var/run/ifstate")," \u8bb0\u5f55\u72b6\u6001 - \u6709\u53ef\u80fd\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"/etc/network/run/ifstate")),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u65b9\u6cd5",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"inet - manual wvdial ppp static bootp dhcp loopback"),(0,i.kt)("li",{parentName:"ul"},"inet6 - static manual loopback v4tunnel"))),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ip \u6216 ifconfig \u8fdb\u884c\u914d\u7f6e"),(0,i.kt)("li",{parentName:"ul"},"dhcp \u5ba2\u6237\u7aef\u652f\u6301 - dhcpcd dhclient pump udhcpc"),(0,i.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 hotplug")))))}f.isMDXComponent=!0}}]);