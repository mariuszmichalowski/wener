(window.webpackJsonp=window.webpackJsonp||[]).push([[528],{1129:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return y}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),m=n,y=s["".concat(i,".").concat(m)]||s[m]||b[m]||o;return r?a.a.createElement(y,c(c({ref:t},p),{},{components:r})):a.a.createElement(y,c({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},602:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(8),o=(r(0),r(1129)),i={id:"vyos",title:"VyOS"},c={unversionedId:"os/network/vyos",id:"os/network/vyos",isDocsHomePage:!1,title:"VyOS",description:"Tips",source:"@site/notes/os/network/vyos.md",slug:"/os/network/vyos",permalink:"/notes/os/network/vyos",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/network/vyos.md",version:"current",sidebar:"docs",previous:{title:"pfSense",permalink:"/notes/os/network/pfsense"},next:{title:"OS Awesome",permalink:"/notes/os/os-awesome"}},l=[{value:"Tips",id:"tips",children:[]}],p={toc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"tips"},"Tips"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.vyos.io"},"www.vyos.io")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/vyos/vyos-build"},"vyos/vyos-build")),Object(o.b)("li",{parentName:"ul"},"Wikipedia ",Object(o.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/VyOS"},"VyOS")),Object(o.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u8d26\u53f7\u5bc6\u7801 vyos;vyos"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://blog.vyos.io/versions-mystery-revealed"},"VyOS Versions mystery revealed"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"2010 Vyatta 6.0 - OpenSource -> OpenCore/freemium"),Object(o.b)("li",{parentName:"ul"},"2011 EdgeOS fork Vyatta Core 6.3",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Debian 7"),Object(o.b)("li",{parentName:"ul"},"Quagga -> ZebOS"))),Object(o.b)("li",{parentName:"ul"},"2012 Brocade \u6536\u8d2d Vyatta"),Object(o.b)("li",{parentName:"ul"},"2013.4 Vyatta Subscription Edition (VSE) -> Brocade Vyatta 5400 vRouter",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u95ed\u6e90"))),Object(o.b)("li",{parentName:"ul"},"2013 VyOS fork Vyatta Core 6.6",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Debian 6"))),Object(o.b)("li",{parentName:"ul"},"2015 VyOS 1.2.x",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Debian 8")))))))}u.isMDXComponent=!0}}]);