(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{1166:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},w=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),w=r,b=d["".concat(a,".").concat(w)]||d[w]||p[w]||i;return t?o.a.createElement(b,c(c({ref:n},l),{},{components:t})):o.a.createElement(b,c({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=w;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}w.displayName="MDXCreateElement"},280:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(8),i=(t(0),t(1166)),a={title:"Windows \u5f00\u53d1"},c={unversionedId:"os/windows/windows-dev",id:"os/windows/windows-dev",isDocsHomePage:!1,title:"Windows \u5f00\u53d1",description:"- msys2 - \u63d0\u4f9b\u73af\u5883",source:"@site/notes/os/windows/windows-dev.md",slug:"/os/windows/windows-dev",permalink:"/notes/os/windows/windows-dev",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/windows/windows-dev.md",version:"current",sidebar:"docs",previous:{title:"Windows \u57df\u63a7",permalink:"/notes/os/windows/windows-dc"},next:{title:"Windows \u73af\u5883",permalink:"/notes/os/windows/windows-env"}},s=[{value:"\u7981\u7528 Antimalware Service Executable",id:"\u7981\u7528-antimalware-service-executable",children:[]}],l={toc:s};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"msys2 - \u63d0\u4f9b\u73af\u5883"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/coreybutler/nvm-windows"},"coreybutler/nvm-windows"),"\nWindows nvm")),Object(i.b)("h2",{id:"\u7981\u7528-antimalware-service-executable"},"\u7981\u7528 Antimalware Service Executable"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5728\u5f00\u53d1\u73af\u5883\u4e0b\u5360\u7528\u5927\u91cf CPU \u8d44\u6e90 - \u626b\u63cf\u7684\u6587\u4ef6\u975e\u5e38\u591a")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-batch"},'# \u4ee5\u7ba1\u7406\u5458\u8eab\u4efd\u8fd0\u884c\nREG ADD "hklm\\software\\policies\\microsoft\\windows defender" /v DisableAntiSpyware /t REG_DWORD /d 1 /f\n')))}u.isMDXComponent=!0}}]);