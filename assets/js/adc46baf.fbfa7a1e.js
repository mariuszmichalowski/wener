"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[47957],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=o,d=s["".concat(l,".").concat(m)]||s[m]||f[m]||a;return n?r.createElement(d,c(c({ref:t},u),{},{components:n})):r.createElement(d,c({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},11366:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),c=["components"],i={title:"Patch"},l=void 0,p={unversionedId:"dev/build/patch",id:"dev/build/patch",isDocsHomePage:!1,title:"Patch",description:"- 7 Patch Command Examples to Apply Diff Patch Files in Linux",source:"@site/notes/dev/build/patch.md",sourceDirName:"dev/build",slug:"/dev/build/patch",permalink:"/notes/dev/build/patch",editUrl:"https://github.com/wenerme/wener/edit/master/notes/dev/build/patch.md",tags:[],version:"current",frontMatter:{title:"Patch"},sidebar:"docs",previous:{title:"make",permalink:"/notes/dev/build/make"},next:{title:"HTTP 2",permalink:"/notes/dev/protocol/http2"}},u=[],f={toc:u};function s(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.thegeekstuff.com/2014/12/patch-command-examples"},"7 Patch Command Examples to Apply Diff Patch Files in Linux"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# -p,-u,--patch \u751f\u6210 patch\ndiff -u hello.c hello_new.c > hello.patch\n\n# patch -p[num] < patchfile\n# patch [options] originalfile patchfile\n\n# \u9ed8\u8ba4\u8bfb\u53d6 stdin, \u4f7f\u7528 patch \u91cc\u6307\u5b9a\u7684\u6587\u4ef6\npatch -u -b hello.c -i hello.patch -o hello_new.c\n")))}s.isMDXComponent=!0}}]);