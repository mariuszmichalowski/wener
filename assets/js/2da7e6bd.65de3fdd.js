"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[9502],{3905:function(e,t,n){n.d(t,{Zo:function(){return w},kt:function(){return u}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},w=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,w=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,m=d["".concat(s,".").concat(u)]||d[u]||p[u]||a;return n?r.createElement(m,i(i({ref:t},w),{},{components:n})):r.createElement(m,i({ref:t},w))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87329:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return w},default:function(){return d}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i=["components"],l={title:"Windows \u5f00\u53d1"},s=void 0,c={unversionedId:"os/windows/windows-dev",id:"os/windows/windows-dev",isDocsHomePage:!1,title:"Windows \u5f00\u53d1",description:"- msys2 - \u63d0\u4f9b\u73af\u5883",source:"@site/notes/os/windows/windows-dev.md",sourceDirName:"os/windows",slug:"/os/windows/windows-dev",permalink:"/notes/os/windows/windows-dev",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/windows/windows-dev.md",version:"current",frontMatter:{title:"Windows \u5f00\u53d1"},sidebar:"docs",previous:{title:"Windows \u57df\u63a7",permalink:"/notes/os/windows/windows-dc"},next:{title:"Windows \u73af\u5883",permalink:"/notes/os/windows/windows-env"}},w=[{value:"\u7981\u7528 Antimalware Service Executable",id:"\u7981\u7528-antimalware-service-executable",children:[]},{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",children:[]}],p={toc:w};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"msys2 - \u63d0\u4f9b\u73af\u5883"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/coreybutler/nvm-windows"},"coreybutler/nvm-windows"),"\nWindows nvm")),(0,a.kt)("h2",{id:"\u7981\u7528-antimalware-service-executable"},"\u7981\u7528 Antimalware Service Executable"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u5f00\u53d1\u73af\u5883\u4e0b\u5360\u7528\u5927\u91cf CPU \u8d44\u6e90 - \u626b\u63cf\u7684\u6587\u4ef6\u975e\u5e38\u591a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-batch"},'# \u4ee5\u7ba1\u7406\u5458\u8eab\u4efd\u8fd0\u884c\nREG ADD "hklm\\software\\policies\\microsoft\\windows defender" /v DisableAntiSpyware /t REG_DWORD /d 1 /f\n')),(0,a.kt)("h2",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.dependencywalker.com/"},"http://www.dependencywalker.com/")),(0,a.kt)("li",{parentName:"ul"},"\u5e38\u89c1\u4f9d\u8d56",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.microsoft.com/zh-cn/download/details.aspx?id=48145"},"VS 2015")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.microsoft.com/zh-cn/download/details.aspx?id=40784"},"VS 2013")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.microsoft.com/zh-cn/download/details.aspx?id=5555"},"VS 2010")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.microsoft.com/zh-cn/download/details.aspx?id=29"},"VS 2008")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.microsoft.com/zh-cn/download/details.aspx?id=15336"},"VS 2008 x64")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.microsoft.com/zh-cn/download/details.aspx?id=5582"},"VS 2008 x64 SP1"))))))}d.isMDXComponent=!0}}]);