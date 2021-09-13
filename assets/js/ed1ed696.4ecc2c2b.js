"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[86456],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return g}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=u(r),g=o,f=s["".concat(c,".").concat(g)]||s[g]||p[g]||i;return r?n.createElement(f,a(a({ref:t},m),{},{components:r})):n.createElement(f,a({ref:t},m))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},86281:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return m},default:function(){return s}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],l={title:"Golang \u5fae\u670d\u52a1"},c=void 0,u={unversionedId:"languages/go/go-microservice",id:"languages/go/go-microservice",isDocsHomePage:!1,title:"Golang \u5fae\u670d\u52a1",description:"Tips",source:"@site/notes/languages/go/go-microservice.md",sourceDirName:"languages/go",slug:"/languages/go/go-microservice",permalink:"/notes/languages/go/go-microservice",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/go/go-microservice.md",tags:[],version:"current",frontMatter:{title:"Golang \u5fae\u670d\u52a1"},sidebar:"docs",previous:{title:"Golang Linter",permalink:"/notes/languages/go/go-lint"},next:{title:"Golang \u6a21\u5757",permalink:"/notes/languages/go/go-module"}},m=[{value:"Tips",id:"tips",children:[]},{value:"go-micro vs micro",id:"go-micro-vs-micro",children:[]}],p={toc:m};function s(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/go-kit/kit"},"go-kit/kit"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5fae\u670d\u52a1\u5de5\u5177\u96c6"),(0,i.kt)("li",{parentName:"ul"},"Unopinioned"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u7528\u4e8e\u6784\u5efa\u4e00\u5957\u9002\u5408\u81ea\u5df1\u7684 go-micro"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/asim/go-micro"},"asim/go-micro"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e go-kit"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/micro/micro"},"micro/micro"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Server/Client/Framework"),(0,i.kt)("li",{parentName:"ul"},"\u5fae\u670d\u52a1\u6846\u67b6\u3001\u751f\u6001\u7cfb\u7edf"),(0,i.kt)("li",{parentName:"ul"},"Opinioned")))),(0,i.kt)("h1",{id:"faq"},"FAQ"),(0,i.kt)("h2",{id:"go-micro-vs-micro"},"go-micro vs micro"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u76f8\u540c\u4f5c\u8005"),(0,i.kt)("li",{parentName:"ul"},"micro",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Cloud Native \u5f00\u53d1\u5e73\u53f0"),(0,i.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u3001\u670d\u52a1\u7aef\u3001\u6846\u67b6"))),(0,i.kt)("li",{parentName:"ul"},"go-micro",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5206\u5e03\u5f0f\u5f00\u53d1\u63d2\u4ef6\u96c6"),(0,i.kt)("li",{parentName:"ul"},"\u975e\u5546\u4e1a Free Licence")))))}s.isMDXComponent=!0}}]);