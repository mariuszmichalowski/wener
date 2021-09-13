"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[81861],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(n),f=a,m=g["".concat(u,".").concat(f)]||g[f]||s[f]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},55149:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return g}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Zig"},u=void 0,c={unversionedId:"languages/zig/README",id:"languages/zig/README",isDocsHomePage:!1,title:"Zig",description:"Tips",source:"@site/notes/languages/zig/README.md",sourceDirName:"languages/zig",slug:"/languages/zig/README",permalink:"/notes/languages/zig/README",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/zig/README.md",tags:[],version:"current",frontMatter:{title:"Zig"},sidebar:"docs",previous:{title:"V Reference",permalink:"/notes/languages/v/v-reference"},next:{title:"Alpine",permalink:"/notes/os/alpine/alpine"}},p=[{value:"Tips",id:"tips",children:[]}],s={toc:p};function g(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://ziglang.org/"},"ziglang")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/zig-lang/zig"},"zig-lang/zig")),(0,i.kt)("li",{parentName:"ul"},"Why",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4e0e C \u4ea4\u4e92\u975e\u5e38\u597d, \u53ef\u76f4\u63a5\u5bfc\u5165 C \u5934\u6587\u4ef6\u4f7f\u7528"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4e0e C \u7684\u7f16\u8bd1\u540e\u5bf9\u63a5\u8fdb\u884c\u6df7\u5408\u7f16\u8bd1")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"hello.zig")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-zig"},'const io = @import("std").io;\n\npub fn main() -> %void {\n    %%io.stdout.printf("Hello, world!\\n");\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"zig build_exe hello.zig\n")))}g.isMDXComponent=!0}}]);