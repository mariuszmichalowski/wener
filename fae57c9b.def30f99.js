(window.webpackJsonp=window.webpackJsonp||[]).push([[1054],{1127:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(8),i=(r(0),r(1152)),o={title:"smithy"},c={unversionedId:"service/api/smithy",id:"service/api/smithy",isDocsHomePage:!1,title:"smithy",description:"- awslabs/smithy \u662f\u4ec0\u4e48",source:"@site/notes/service/api/smithy.md",slug:"/service/api/smithy",permalink:"/notes/service/api/smithy",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/api/smithy.md",version:"current",sidebar:"docs",previous:{title:"Protobuf",permalink:"/notes/service/api/protobuf"},next:{title:"URQL",permalink:"/notes/service/api/urql"}},p=[],l={toc:p};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/awslabs/smithy"},"awslabs/smithy")," \u662f\u4ec0\u4e48",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u670d\u52a1\u5b9a\u4e49 DSL"),Object(i.b)("li",{parentName:"ul"},"DSL \u652f\u6301 JSON \u6a21\u5f0f - \u5bf9\u751f\u6210\u53cb\u597d"),Object(i.b)("li",{parentName:"ul"},"\u6ce8\u91cd\u5143\u6570\u636e - \u534f\u8bae\u65e0\u5173 - \u4e3b\u8981\u7528\u4e8e\u4ee3\u7801\u751f\u6210",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u8fd9\u4e00\u70b9\u76f4\u63a5\u533a\u522b\u4e8e gql, grpc, openapi"))),Object(i.b)("li",{parentName:"ul"},"\u8868\u8fbe\u80fd\u529b\u8f83\u5f3a - \u652f\u6301\u6269\u5c55\u3001\u9650\u5236\u3001\u81ea\u5b9a\u4e49\u7c7b\u578b\u3001Annotation"),Object(i.b)("li",{parentName:"ul"},"\u5b9e\u73b0\u57fa\u4e8e Java - \u4f7f\u7528\u8d77\u6765\u76f8\u5bf9\u9ebb\u70e6"))),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://awslabs.github.io/smithy/1.0/spec/index.html"},"smithy 1.0 spec"))))))}u.isMDXComponent=!0},1152:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(r),m=n,f=s["".concat(o,".").concat(m)]||s[m]||b[m]||i;return r?a.a.createElement(f,c(c({ref:t},l),{},{components:r})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);