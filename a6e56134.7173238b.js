(window.webpackJsonp=window.webpackJsonp||[]).push([[713],{1166:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||a;return r?o.a.createElement(d,i(i({ref:t},p),{},{components:r})):o.a.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},786:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(8),a=(r(0),r(1166)),c={title:"Wener's APIs",slug:"wener-apis",date:new Date("2020-01-28T00:00:00.000Z"),tags:["\u9879\u76ee","Nodejs"],baseUrl:"https://github.com/wenerme/apis/tree/master/"},i={permalink:"/story/wener-apis",editUrl:"https://github.com/wenerme/wener/edit/master/story/project/wener-apis.md",source:"@site/story/project/wener-apis.md",description:"Dev",date:"2020-01-28T00:00:00.000Z",tags:[{label:"\u9879\u76ee",permalink:"/story/tags/\u9879\u76ee"},{label:"Nodejs",permalink:"/story/tags/nodejs"}],title:"Wener's APIs",readingTime:.065,truncated:!1,prevItem:{title:"Hello CGO",permalink:"/story/hello-cgo"},nextItem:{title:"Jackson \u4f7f\u7528\u603b\u7ed3",permalink:"/story/jackson-summary"}},l=[{value:"Dev",id:"dev",children:[]}],p={toc:l};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"dev"},"Dev"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# lite dev\nMOD_NAME=boot,root,test,dash,geo,client yarn rollup -c rollup.mod.ts --watch\n")))}s.isMDXComponent=!0}}]);