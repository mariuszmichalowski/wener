"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[9173],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return g}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),s=u(n),g=a,k=s["".concat(c,".").concat(g)]||s[g]||m[g]||o;return n?r.createElement(k,l(l({ref:e},p),{},{components:n})):r.createElement(k,l({ref:e},p))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3267:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={title:"C Cookbook",tags:["Cookbook"]},c=void 0,u={unversionedId:"languages/c/c-cookbook",id:"languages/c/c-cookbook",isDocsHomePage:!1,title:"C Cookbook",description:"- git/banned.h",source:"@site/notes/languages/c/c-cookbook.md",sourceDirName:"languages/c",slug:"/languages/c/c-cookbook",permalink:"/notes/languages/c/c-cookbook",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/c/c-cookbook.md",tags:[{label:"Cookbook",permalink:"/notes/tags/cookbook"}],version:"current",frontMatter:{title:"C Cookbook",tags:["Cookbook"]},sidebar:"docs",previous:{title:"C Build",permalink:"/notes/languages/c/c-build"},next:{title:"libmagic",permalink:"/notes/languages/c/lib/libmagic"}},p=[{value:"\u5b9a\u4e49\u5b8f\u79fb\u9664\u65b9\u6cd5",id:"\u5b9a\u4e49\u5b8f\u79fb\u9664\u65b9\u6cd5",children:[]}],m={toc:p};function s(t){var e=t.components,n=(0,a.Z)(t,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/git/git/blob/master/banned.h"},"git/banned.h"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u4e0d\u63a8\u8350\u7528\u8fd9\u4e9b\u63a5\u53e3"),(0,o.kt)("li",{parentName:"ul"},"\u56e0\u4e3a\u5bb9\u6613\u6709\u6b67\u4e49\uff0c\u7ecf\u5e38\u8e29\u5751"),(0,o.kt)("li",{parentName:"ul"},"\u770b",(0,o.kt)("a",{parentName:"li",href:"https://github.com/git/git/commits/master/banned.h"},"\u63d0\u4ea4\u5386\u53f2"),"\u6709\u539f\u56e0\u8bf4\u660e")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"banned"),(0,o.kt)("th",{parentName:"tr",align:null},"alt"),(0,o.kt)("th",{parentName:"tr",align:null},"reason"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ctime_r, asctime_r"),(0,o.kt)("td",{parentName:"tr",align:null},"strftime,strbuf_addftime"),(0,o.kt)("td",{parentName:"tr",align:null},"reentrant, but no check the buffer is long enough")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"gmtime,localtime,ctime,asctime"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"return pointers to shared storage, not thread-safe")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sprintf,vsprintf"),(0,o.kt)("td",{parentName:"tr",align:null},"strbuf,xstrfmt,xsnprintf"),(0,o.kt)("td",{parentName:"tr",align:null},"buffer overflow")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"strcpy,strcat,"),(0,o.kt)("td",{parentName:"tr",align:null},"strbuf,xstrfmt,xsnprintf"),(0,o.kt)("td",{parentName:"tr",align:null},"\u8d8a\u754c")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"strncpy"),(0,o.kt)("td",{parentName:"tr",align:null},"strlcpy,strbuf,xstrfmt,xsnprintf"),(0,o.kt)("td",{parentName:"tr",align:null},"NUL terminator")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"strncat"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"quadratic behavior")))),(0,o.kt)("h2",{id:"\u5b9a\u4e49\u5b8f\u79fb\u9664\u65b9\u6cd5"},"\u5b9a\u4e49\u5b8f\u79fb\u9664\u65b9\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"#define assert(x) (void)0\n")))}s.isMDXComponent=!0}}]);