"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[44190],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return m}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var f=n.createContext({}),u=function(e){var r=n.useContext(f),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(f.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,f=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(t),m=o,d=s["".concat(f,".").concat(m)]||s[m]||p[m]||a;return t?n.createElement(d,i(i({ref:r},l),{},{components:t})):n.createElement(d,i({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=s;var c={};for(var f in r)hasOwnProperty.call(r,f)&&(c[f]=r[f]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},17432:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return f},metadata:function(){return u},toc:function(){return l},default:function(){return s}});var n=t(22122),o=t(19756),a=(t(67294),t(3905)),i=["components"],c={title:"cf-terraforming"},f=void 0,u={unversionedId:"ops/infra/terraform-cf",id:"ops/infra/terraform-cf",isDocsHomePage:!1,title:"cf-terraforming",description:"* cloudflare/cf-terraforming",source:"@site/notes/ops/infra/terraform-cf.md",sourceDirName:"ops/infra",slug:"/ops/infra/terraform-cf",permalink:"/notes/ops/infra/terraform-cf",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/infra/terraform-cf.md",version:"current",frontMatter:{title:"cf-terraforming"},sidebar:"docs",previous:{title:"Pulumi",permalink:"/notes/ops/infra/pulumi"},next:{title:"Terraform \u5e38\u7528\u811a\u672c",permalink:"/notes/ops/infra/terraform-cookbook"}},l=[],p={toc:l};function s(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/cloudflare/cf-terraforming"},"cloudflare/cf-terraforming"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew install --cask cloudflare/cloudflare/cf-terraforming\n")))}s.isMDXComponent=!0}}]);