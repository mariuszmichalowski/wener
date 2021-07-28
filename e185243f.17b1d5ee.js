(window.webpackJsonp=window.webpackJsonp||[]).push([[976],{1049:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),l=(n(0),n(1172)),b={title:"Vlang Build"},c={unversionedId:"languages/v/v-build",id:"languages/v/v-build",isDocsHomePage:!1,title:"Vlang Build",description:"`bash",source:"@site/notes/languages/v/v-build.md",slug:"/languages/v/v-build",permalink:"/notes/languages/v/v-build",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/v/v-build.md",version:"current",sidebar:"docs",previous:{title:"V",permalink:"/notes/languages/v/v"},next:{title:"Vlang FAQ",permalink:"/notes/languages/v/v-faq"}},o=[],i={toc:o};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"\n# \u652f\u6301\u4ee3\u7801\u70ed\u91cd\u8f7d\n# \u51fd\u6570\u6dfb\u52a0 [live]\nv -live message.v\n\n# \u4ea4\u53c9\u7f16\u8bd1\nv -os windows .\nv -os linux .\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"pseudo variables")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"var"),Object(l.b)("th",{parentName:"tr",align:null},"desc"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"@FN"),Object(l.b)("td",{parentName:"tr",align:null},"name of the current V function")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"@METHOD"),Object(l.b)("td",{parentName:"tr",align:null},"replaced with ReceiverType.MethodName")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"@MOD"),Object(l.b)("td",{parentName:"tr",align:null},"name of the current V module")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"@STRUCT"),Object(l.b)("td",{parentName:"tr",align:null},"name of the current V struct")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"@FILE"),Object(l.b)("td",{parentName:"tr",align:null},"path of the V source file")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"@LINE"),Object(l.b)("td",{parentName:"tr",align:null},"V line number where it appears (as a string).")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"@COLUMN"),Object(l.b)("td",{parentName:"tr",align:null},"column where it appears (as a string).")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"@VEXE"),Object(l.b)("td",{parentName:"tr",align:null},"path to the V compiler")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"@VEXEROOT"),Object(l.b)("td",{parentName:"tr",align:null},"folder, where the V executable is (as a string).")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"@VHASH"),Object(l.b)("td",{parentName:"tr",align:null},"shortened commit hash of the V compiler (as a string).")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"@VMOD_FILE"),Object(l.b)("td",{parentName:"tr",align:null},"contents of the nearest v.mod file (as a string).")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"@VMODROOT"),Object(l.b)("td",{parentName:"tr",align:null},"folder, where the nearest v.mod file is (as a string).")))))}u.isMDXComponent=!0},1172:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=u(n),s=r,d=p["".concat(b,".").concat(s)]||p[s]||m[s]||l;return n?a.a.createElement(d,c(c({ref:t},i),{},{components:n})):a.a.createElement(d,c({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,b=new Array(l);b[0]=s;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,b[1]=c;for(var i=2;i<l;i++)b[i]=n[i];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);