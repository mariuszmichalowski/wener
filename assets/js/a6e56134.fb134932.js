"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[17535],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,y=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},18738:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return s},toc:function(){return p},default:function(){return m}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={title:"Wener's APIs",slug:"wener-apis",date:new Date("2020-01-28T00:00:00.000Z"),tags:["\u9879\u76ee","Nodejs"],baseUrl:"https://github.com/wenerme/apis/tree/master/"},l=void 0,u={permalink:"/story/wener-apis",editUrl:"https://github.com/wenerme/wener/edit/master/story/project/wener-apis.md",source:"@site/story/project/wener-apis.md",title:"Wener's APIs",description:"Dev",date:"2020-01-28T00:00:00.000Z",formattedDate:"January 28, 2020",tags:[{label:"\u9879\u76ee",permalink:"/story/tags/\u9879\u76ee"},{label:"Nodejs",permalink:"/story/tags/nodejs"}],readingTime:.065,truncated:!1,authors:[],prevItem:{title:"\u4eba\u751f\u7b2c\u56db\u9636\u6bb5",permalink:"/story/stage-four-of-life"},nextItem:{title:"Java with GraphQL",permalink:"/story/jraphql"}},s={authorsImageUrls:[]},p=[{value:"Dev",id:"dev",children:[]}],f={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"dev"},"Dev"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# lite dev\nMOD_NAME=boot,root,test,dash,geo,client yarn rollup -c rollup.mod.ts --watch\n")))}m.isMDXComponent=!0}}]);