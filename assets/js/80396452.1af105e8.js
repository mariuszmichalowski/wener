"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[55386],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return y}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),y=o,f=m["".concat(u,".").concat(y)]||m[y]||c[y]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},39505:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i=["components"],l={id:"vyos",title:"VyOS"},u=void 0,p={unversionedId:"os/network/vyos",id:"os/network/vyos",isDocsHomePage:!1,title:"VyOS",description:"Tips",source:"@site/notes/os/network/vyos.md",sourceDirName:"os/network",slug:"/os/network/vyos",permalink:"/notes/os/network/vyos",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/network/vyos.md",version:"current",frontMatter:{id:"vyos",title:"VyOS"},sidebar:"docs",previous:{title:"pfSense",permalink:"/notes/os/network/pfsense"},next:{title:"OS Awesome",permalink:"/notes/os/os-awesome"}},s=[{value:"Tips",id:"tips",children:[]}],c={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"tips"},"Tips"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.vyos.io"},"www.vyos.io")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/vyos/vyos-build"},"vyos/vyos-build")),(0,a.kt)("li",{parentName:"ul"},"Wikipedia ",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/VyOS"},"VyOS")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u8d26\u53f7\u5bc6\u7801 vyos;vyos"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://blog.vyos.io/versions-mystery-revealed"},"VyOS Versions mystery revealed"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"2010 Vyatta 6.0 - OpenSource -> OpenCore/freemium"),(0,a.kt)("li",{parentName:"ul"},"2011 EdgeOS fork Vyatta Core 6.3",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Debian 7"),(0,a.kt)("li",{parentName:"ul"},"Quagga -> ZebOS"))),(0,a.kt)("li",{parentName:"ul"},"2012 Brocade \u6536\u8d2d Vyatta"),(0,a.kt)("li",{parentName:"ul"},"2013.4 Vyatta Subscription Edition (VSE) -> Brocade Vyatta 5400 vRouter",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u95ed\u6e90"))),(0,a.kt)("li",{parentName:"ul"},"2013 VyOS fork Vyatta Core 6.6",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Debian 6"))),(0,a.kt)("li",{parentName:"ul"},"2015 VyOS 1.2.x",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Debian 8")))))))}m.isMDXComponent=!0}}]);