"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[6610],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,g=m["".concat(s,".").concat(f)]||m[f]||p[f]||i;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52515:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={title:"Gluster"},s="glusterfs",u={unversionedId:"service/storage/gluster",id:"service/storage/gluster",isDocsHomePage:!1,title:"Gluster",description:"- #268 - \u4e0d\u517c\u5bb9 alpine musl",source:"@site/notes/service/storage/gluster.md",sourceDirName:"service/storage",slug:"/service/storage/gluster",permalink:"/notes/service/storage/gluster",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/storage/gluster.md",tags:[],version:"current",frontMatter:{title:"Gluster"},sidebar:"docs",previous:{title:"\u5206\u5e03\u5f0f\u5b58\u50a8",permalink:"/notes/service/storage/distributed-storage"},next:{title:"MinIO",permalink:"/notes/service/storage/minio"}},c=[],p={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"glusterfs"},"glusterfs"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/gluster/glusterfs/issues/268"},"#268")," - \u4e0d\u517c\u5bb9 alpine musl")))),(0,i.kt)("h1",{id:"gluster-vs-ceph"},"Gluster vs Ceph"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ceph",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u5bf9\u8c61"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u975e\u7ed3\u6784\u5316\u6570\u636e"),(0,i.kt)("li",{parentName:"ul"},"\u5e95\u5c42 RADOS \u5bf9\u8c61\u6570\u636e\u7cfb\u7edf"),(0,i.kt)("li",{parentName:"ul"},"cephfs \u57fa\u4e8e\u5bf9\u8c61\u5b58\u50a8\u5b9e\u73b0 fs \u8bbf\u95ee\u5c42"),(0,i.kt)("li",{parentName:"ul"},"bluestore \u53ef\u76f4\u63a5\u64cd\u4f5c\u5757\u8bbe\u5907\u4e0d\u5728\u4f9d\u8d56 fs"))),(0,i.kt)("li",{parentName:"ul"},"Gluster",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7ea7\u8054\u6587\u4ef6\u7cfb\u7edf\u7ed3\u6784"),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u7b80\u5355\uff0c\u67b6\u6784\u5c42\u7ea7\u5c11"),(0,i.kt)("li",{parentName:"ul"},"\u5bf9\u4f7f\u7528\u7684 FS \u6709\u8981\u6c42\u548c\u4f9d\u8d56"),(0,i.kt)("li",{parentName:"ul"},"glusterfs \u5c42\u4e4b\u4e0a\u63d0\u4f9b\u4e86 swift \u4f5c\u4e3a\u5bf9\u8c61\u5b58\u50a8"),(0,i.kt)("li",{parentName:"ul"},"\u9002\u5408\u987a\u5e8f\u8bbf\u95ee\uff0c\u4e0d\u9002\u5408\u6570\u636e\u5e93\u7c7b\u5bf9\u9501\u8981\u6c42\u7684\u8bbf\u95ee")))))}m.isMDXComponent=!0}}]);