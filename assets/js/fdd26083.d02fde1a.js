"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[85969],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),c=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,m=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,k=s["".concat(m,".").concat(d)]||s[d]||p[d]||l;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},51201:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return m},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={title:"AT \u6307\u4ee4"},m=void 0,c={unversionedId:"service/telecom/mobile/at",id:"service/telecom/mobile/at",title:"AT \u6307\u4ee4",description:"- Hayes command set/AT command set",source:"@site/notes/service/telecom/mobile/at.md",sourceDirName:"service/telecom/mobile",slug:"/service/telecom/mobile/at",permalink:"/notes/service/telecom/mobile/at",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/telecom/mobile/at.md",tags:[],version:"current",frontMatter:{title:"AT \u6307\u4ee4"},sidebar:"docs",previous:{title:"\u79fb\u52a8\u901a\u4fe1\u6a21\u5757",permalink:"/notes/service/telecom/mobile-module"},next:{title:"Linux GSM",permalink:"/notes/service/telecom/mobile/linux-gsm"}},u=[{value:"\u5386\u53f2",id:"\u5386\u53f2",children:[],level:2},{value:"\u534f\u8bae",id:"\u534f\u8bae",children:[],level:2},{value:"cellular extensions",id:"cellular-extensions",children:[],level:2}],p={toc:u};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Hayes command set/AT command set"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://zh.wikipedia.org/wiki/%E6%B5%B7%E6%96%AF%E5%91%BD%E4%BB%A4%E9%9B%86"},"\u6d77\u65af\u547d\u4ee4\u96c6")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://doc.qt.io/archives/qtextended4.4/atcommands.html"},"AT Commands"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# http://m2msupport.net/m2msupport/atcardlock-card-lock-command/\nAT^CARDLOCK?\n^CARDLOCK: 1,10,0 # \u9501\u5b9a\n^CARDLOCK: 2,10,0 # \u672a\u9501\u5b9a\n# ^CARDLOCK: A,B,C\n# A: 1 \u9501\u5b9a 2 \u672a\u9501\u5b9a, B: \u5269\u4f59\u6b21\u6570, C: \u4f7f\u7528\u7684\u6b21\u6570\n\n# \u6d4b\u8bd5\u662f\u5426\u6709 AT \u547d\u4ee4\nAT\n# \u6a21\u578b\u53f7\nAT+CGMM\n# \u5236\u9020\u5546\nAT+CGMI\n\n# \u4fee\u6539\u5de5\u4f5c\u6a21\u5f0f\n# http://m2msupport.net/m2msupport/atu2diag-set-the-device-mode/\nAT^U2DIAG=$MODE\n# 0 Modem, 1 modem mode + CD ROM, 255 modem mode + CD ROM + Card Reader,  256 modem mode + Card Reader\n\n# \u67e5\u770b\u7cfb\u7edf\u72b6\u6001\n# http://m2msupport.net/m2msupport/atsysinfo-get-the-system-mode/\nAT^SYSINFO\n\n# IMEI\nAT+CGSN\nATD*#06#\n\n")),(0,l.kt)("h2",{id:"\u5386\u53f2"},"\u5386\u53f2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"V.250\uff1a\u8be5\u6807\u51c6\u4e8e 1995 \u5e74\u5efa\u7acb\uff0c1998 \u5e74\u91cd\u547d\u540d\u4e3a V.250"),(0,l.kt)("li",{parentName:"ul"},"ETSI GSM 07.07\uff083GPP TS 27.007\uff09\uff1a\u7528\u4e8e\u63a7\u5236 GSM modem \u7684 AT \u6307\u4ee4\u96c6"),(0,l.kt)("li",{parentName:"ul"},"GSM 07.07 \u662f\u57fa\u4e8e V.250 \u6807\u51c6\u7684\u3002\u662f\u76ee\u524d\u6700\u65b0\u7684 AT \u6807\u51c6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8702\u7a9d\u6a21\u5757\u3001WiFi \u6a21\u5757\u3001BLE \u6a21\u5757\u4e2d\uff0c\u76ee\u7684\u662f\u4e3a\u4e86\u7b80\u5316\u5d4c\u5165\u5f0f\u8bbe\u5907\u8054\u7f51\u7684\u590d\u6742\u5ea6")),(0,l.kt)("h2",{id:"\u534f\u8bae"},"\u534f\u8bae"),(0,l.kt)("p",null,"AT \u6807\u51c6\u5b9a\u4e49\u4e86 AT \u547d\u4ee4\u7684\u683c\u5f0f\u672c\u8eab\uff0c\u6bd4\u5982\u547d\u4ee4\u4ee5 AT \u4e3a\u524d\u7f00\u5f00\u5934\uff0c\u4ee5 \u6216\u8005 \u7ed3\u5c3e\uff0c\u8fd9\u88ab\u73b0\u6709\u7684 AT \u6a21\u5757\u6240\u5ef6\u7528\u3002"),(0,l.kt)("p",null,'AT \u5f00\u59cb\uff0c\u4ee5 \\r \u6216\u8005 \\r\\n \u7ed3\u5c3e\uff0c\u53c2\u6570\u4e4b\u95f4\u4f7f\u7528 , \u9694\u5f00\uff0c\u5b57\u7b26\u4e32\u53c2\u6570\u4f7f\u7528\u53cc\u5f15\u53f7 "" \u5305\u88f9\uff0c\u6574\u5f62\u53c2\u6570\u4e0d\u9002\u7528\u53cc\u5f15\u53f7\u3002'),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Format"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"AT+<x>=?")),(0,l.kt)("td",{parentName:"tr",align:null},"Test")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"AT+<x>?")),(0,l.kt)("td",{parentName:"tr",align:null},"Read")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"AT+<x>=<...>")),(0,l.kt)("td",{parentName:"tr",align:null},"Set")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"AT+<x>")),(0,l.kt)("td",{parentName:"tr",align:null},"Execute")))),(0,l.kt)("p",null,"\u5728\u6536\u5230 +++\uff0c\u5e76\u4e14\u63a5\u4e0b\u6765 1s \u5185\u672a\u6536\u5230\u5176\u4ed6\u6570\u636e\u7684\u8bdd\uff0c\u5c06\u4ece\u6570\u636e\u6a21\u5f0f\u5207\u6362\u5230\u6307\u4ee4\u6a21\u5f0f\u3002\n\u6570\u636e\u6a21\u5f0f\uff0c\u53ef\u4ee5\u900f\u4f20\u6570\u636e\uff0cclient \u53d1\u4ec0\u4e48\uff0cserver \u5c31\u539f\u5c01\u4e0d\u52a8\u53d1\u51fa\u53bb\u3002\u6307\u4ee4\u6a21\u5f0f\u65f6\uff0cAT Server \u9700\u8981\u89e3\u6790 AT \u6307\u4ee4\uff0c\u5e76\u4f5c\u51fa\u54cd\u5e94\u3002"),(0,l.kt)("h2",{id:"cellular-extensions"},"cellular extensions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"cellular extensions - \u8702\u7a9d\u7f51\u7edc\u6269\u5145\u547d\u4ee4",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u65b0\u7684\u9ad8\u901a\u5904\u7406\u5668\u4f7f\u7528 QMI \u66ff\u4ee3")))))}s.isMDXComponent=!0}}]);