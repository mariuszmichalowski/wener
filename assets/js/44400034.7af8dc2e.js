"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[99117],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return w}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),w=o,m=d["".concat(c,".").concat(w)]||d[w]||u[w]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function w(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63469:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a=["components"],s={id:"windows-dc",title:"Windows \u57df\u63a7"},c=void 0,l={unversionedId:"os/windows/windows-dc",id:"os/windows/windows-dc",isDocsHomePage:!1,title:"Windows \u57df\u63a7",description:"Tips",source:"@site/notes/os/windows/windows-dc.md",sourceDirName:"os/windows",slug:"/os/windows/windows-dc",permalink:"/notes/os/windows/windows-dc",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/windows/windows-dc.md",version:"current",frontMatter:{id:"windows-dc",title:"Windows \u57df\u63a7"},sidebar:"docs",previous:{title:"Windows \u547d\u4ee4",permalink:"/notes/os/windows/windows-cmd"},next:{title:"Windows \u5f00\u53d1",permalink:"/notes/os/windows/windows-dev"}},p=[{value:"Tips",id:"tips",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Domain_controller_(Windows)"},"Domain controller")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://support.microsoft.com/kb/247811"},"How domain controllers are located in Windows")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/NT_LAN_Manager"},"https://en.wikipedia.org/wiki/NT_LAN_Manager")),(0,i.kt)("li",{parentName:"ul"},"NTLM ",(0,i.kt)("a",{parentName:"li",href:"https://www.onlinehashcrack.com/"},"https://www.onlinehashcrack.com/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://support.microsoft.com/en-hk/help/102716"},"NTLM user authentication in Windows")),(0,i.kt)("li",{parentName:"ul"},"NTLMv2",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kb.iu.edu/d/atcb"},"https://kb.iu.edu/d/atcb"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'ntlm_auth --allow-mschapv2 --request-nt-key --domain=COMPANY --username=domainuser --password=userpassword\n\nntlm_auth = "/usr/bin/ntlm_auth --allow-mschapv2 --request-nt-key\n--username=%{%{Stripped-User-Name}:-%{%{User-Name}:-None}}\n--challenge=%{%{mschap:Challenge}:-00}\n--nt-response=%{%{mschap:NT-Response}:-00}"\n')))}d.isMDXComponent=!0}}]);