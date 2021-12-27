"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[35829],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return b}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(t),b=a,d=s["".concat(p,".").concat(b)]||s[b]||m[b]||i;return t?r.createElement(d,o(o({ref:n},u),{},{components:t})):r.createElement(d,o({ref:n},u))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=s;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},70407:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return s}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],c={title:"bramble"},p=void 0,l={unversionedId:"service/api/bramble",id:"service/api/bramble",title:"bramble",description:"- movio/bramble",source:"@site/notes/service/api/bramble.md",sourceDirName:"service/api",slug:"/service/api/bramble",permalink:"/notes/service/api/bramble",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/api/bramble.md",tags:[],version:"current",frontMatter:{title:"bramble"},sidebar:"docs",previous:{title:"Apollo Federation",permalink:"/notes/service/api/apollo-federation"},next:{title:"buf",permalink:"/notes/service/api/buf"}},u=[],m={toc:u};function s(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/movio/bramble"},"movio/bramble"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"MIT, Golang"),(0,i.kt)("li",{parentName:"ul"},"GraphQL Gateway"),(0,i.kt)("li",{parentName:"ul"},"\u5305\u542b\u7b80\u5355\u7684 AdminUI")))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u6682\u4e0d\u652f\u6301 subscription")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Service {\n  name: String!\n  version: String!\n  schema: String!\n}\n\ntype Query {\n  # \u8fd4\u56de \u670d\u52a1\u4fe1\u606f\n  service: Service!\n}\n\n# \u8de8\u670d\u52a1 \u7c7b\u578b - \u4f1a\u5408\u5e76\u7c7b\u578b\ndirective @boundary on OBJECT | FIELD_DEFINITION\n\n# \u591a\u4e2a\u670d\u52a1\u53ef\u540c\u65f6\u5728\u76f8\u540c ns \u4e0b\ndirective @namespace on OBJECT\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Gizmo @boundary {\n  id: ID!\n  size: Float!\n}\ntype Query {\n  gizmo(id: ID!): Gizmo @boundary\n}\n\ntype MyNamespaceQuery @namespace {\n  subnamespace: SubNamespaceQuery!\n}\ntype SubNamespaceQuery @namespace {\n  someField: String!\n}\ntype Query {\n  myNamespace: MyNamespaceQuery!\n}\n")))}s.isMDXComponent=!0}}]);