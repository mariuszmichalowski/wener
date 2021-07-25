(window.webpackJsonp=window.webpackJsonp||[]).push([[770],{1169:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=b(r),s=n,d=p["".concat(l,".").concat(s)]||p[s]||m[s]||i;return r?a.a.createElement(d,o(o({ref:t},u),{},{components:r})):a.a.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},843:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(8),i=(r(0),r(1169)),l={title:"Intellij IDEA"},o={unversionedId:"dev/editor/intellij",id:"dev/editor/intellij",isDocsHomePage:!1,title:"Intellij IDEA",description:"Tips",source:"@site/notes/dev/editor/intellij.md",slug:"/dev/editor/intellij",permalink:"/notes/dev/editor/intellij",editUrl:"https://github.com/wenerme/wener/edit/master/notes/dev/editor/intellij.md",version:"current",sidebar:"docs",previous:{title:"\u65e5\u5386",permalink:"/notes/dev/domain/calender"},next:{title:"Visual Studio Code",permalink:"/notes/dev/editor/vsc"}},c=[{value:"Tips",id:"tips",children:[]},{value:"\u5b9e\u73b0\u81ea\u5b9a\u4e49\u8bed\u8a00\u63d2\u4ef6",id:"\u5b9e\u73b0\u81ea\u5b9a\u4e49\u8bed\u8a00\u63d2\u4ef6",children:[]},{value:"Grammar-Kit",id:"grammar-kit",children:[]}],u={toc:c};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("h2",{id:"\u5b9e\u73b0\u81ea\u5b9a\u4e49\u8bed\u8a00\u63d2\u4ef6"},"\u5b9e\u73b0\u81ea\u5b9a\u4e49\u8bed\u8a00\u63d2\u4ef6"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://www.jetbrains.org/intellij/sdk/docs/tutorials/custom_language_support_tutorial.html"},"Custom Language Support Tutorial")),Object(i.b)("li",{parentName:"ul"},"Language and File Type"),Object(i.b)("li",{parentName:"ul"},"Syntax Highlighter and Color Settings Page"),Object(i.b)("li",{parentName:"ul"},"Annotator"),Object(i.b)("li",{parentName:"ul"},"Line Marker Provider"),Object(i.b)("li",{parentName:"ul"},"Completion Contributor"),Object(i.b)("li",{parentName:"ul"},"Reference Contributor"),Object(i.b)("li",{parentName:"ul"},"Find Usages Provider"),Object(i.b)("li",{parentName:"ul"},"Folding Builder"),Object(i.b)("li",{parentName:"ul"},"Go To Symbol Contributor"),Object(i.b)("li",{parentName:"ul"},"Structure View Factory"),Object(i.b)("li",{parentName:"ul"},"Formatter"),Object(i.b)("li",{parentName:"ul"},"Code Style Settings"),Object(i.b)("li",{parentName:"ul"},"Commenter"),Object(i.b)("li",{parentName:"ul"},"Quick Fix")),Object(i.b)("h2",{id:"grammar-kit"},"Grammar-Kit"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/JetBrains/Grammar-Kit"},"JetBrains/Grammar-Kit")),Object(i.b)("li",{parentName:"ul"},"BNF \u57fa\u4e8e PEG"),Object(i.b)("li",{parentName:"ul"},"\u4f7f\u7528 JFlex \u505a\u8bcd\u6cd5\u89e3\u6790"),Object(i.b)("li",{parentName:"ul"},"Antlr \u751f\u6210 Psi",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/antlr/jetbrains"},"antlr/jetbrains"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u63d0\u4f9b Antlr \u5230 Psi \u7684\u9002\u914d"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/antlr/intellij-plugin-v4"},"antlr/intellij-plugin-v4"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Antlr \u7684\u63d2\u4ef6\u662f\u57fa\u4e8e Antlr \u5b9e\u73b0\u7684")))))))}b.isMDXComponent=!0}}]);