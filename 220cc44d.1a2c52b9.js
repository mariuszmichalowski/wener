(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{1166:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=b(n),f=r,m=s["".concat(o,".").concat(f)]||s[f]||p[f]||i;return n?a.a.createElement(m,l(l({ref:t},u),{},{components:n})):a.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},232:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(8),i=(n(0),n(1166)),o={title:"fyne"},l={unversionedId:"languages/go/lib/fyne",id:"languages/go/lib/fyne",isDocsHomePage:!1,title:"fyne",description:"- fyne-io/fyne",source:"@site/notes/languages/go/lib/fyne.md",slug:"/languages/go/lib/fyne",permalink:"/notes/languages/go/lib/fyne",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/go/lib/fyne.md",version:"current",sidebar:"docs",previous:{title:"entgo",permalink:"/notes/languages/go/lib/ent"},next:{title:"Golang \u5e93\u5e38\u89c1\u95ee\u9898",permalink:"/notes/languages/go/lib/go-lib-faq"}},c=[],u={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/fyne-io/fyne"},"fyne-io/fyne"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"MIT, Golang"),Object(i.b)("li",{parentName:"ul"},"\u8de8\u5e73\u53f0 GUI \u5e93 - \u7ec4\u4ef6"),Object(i.b)("li",{parentName:"ul"},"Material Design \u98ce\u683c"))),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/pal1000/mesa-dist-win"},"Pre-built Mesa3D drivers for Windows")))),Object(i.b)("li",{parentName:"ul"},"\u95ee\u9898",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5fc5\u987b\u8981\u6709 OpenGL 2.0+ \u73af\u5883 - Windows Server \u73af\u5883\u4e0d\u4e00\u5b9a\u80fd\u7528"),Object(i.b)("li",{parentName:"ul"},"Windows VM \u53ef\u80fd\u6709\u95ee\u9898 - ",Object(i.b)("a",{parentName:"li",href:"https://github.com/fyne-io/fyne/issues/410"},"https://github.com/fyne-io/fyne/issues/410")),Object(i.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 DnD - ",Object(i.b)("a",{parentName:"li",href:"https://github.com/fyne-io/fyne/issues/142"},"https://github.com/fyne-io/fyne/issues/142")),Object(i.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u6258\u76d8 - ",Object(i.b)("a",{parentName:"li",href:"https://github.com/fyne-io/fyne/issues/283"},"https://github.com/fyne-io/fyne/issues/283"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u73b0\u6709\u7684 tray \u90fd\u9700\u8981\u8fd0\u884c\u5728 main \u7ebf\u7a0b\uff0c\u4e14\u662f\u963b\u585e\u8fd0\u884c - \u56e0\u6b64\u901a\u5e38\u65e0\u6cd5\u5171\u5b58")))))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# windows \u6784\u5efa\nGOOS=windows GOARCH=amd64 CGO_ENABLED=1 CC=x86_64-w64-mingw32-gcc go build main.go\n")))}b.isMDXComponent=!0}}]);