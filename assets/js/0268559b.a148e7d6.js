"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[43922],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(n),m=a,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},95069:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=["components"],l={id:"go-task",title:"Go Task"},u=void 0,c={unversionedId:"dev/build/go-task",id:"dev/build/go-task",isDocsHomePage:!1,title:"Go Task",description:"* go-task/task",source:"@site/notes/dev/build/task.md",sourceDirName:"dev/build",slug:"/dev/build/go-task",permalink:"/notes/dev/build/go-task",editUrl:"https://github.com/wenerme/wener/edit/master/notes/dev/build/task.md",version:"current",frontMatter:{id:"go-task",title:"Go Task"},sidebar:"docs",previous:{title:"Patch",permalink:"/notes/dev/build/patch"},next:{title:"\u5f00\u53d1\u7528\u8bcd\u5b57\u5178",permalink:"/notes/dev/dict"}},s=[],p={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-task/task"},"go-task/task")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://taskfile.dev/"},"taskfile.dev")),(0,o.kt)("li",{parentName:"ul"},"\u7279\u6027",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u4efb\u52a1\u5b9a\u4e49\u57fa\u4e8e Yaml"),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301 shell - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/mvdan/sh"},"mvdan/sh"))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3'\n\ntasks:\n  hello:\n    cmds:\n      - echo 'Hello World from Task!'\n    silent: true\n")))}f.isMDXComponent=!0}}]);