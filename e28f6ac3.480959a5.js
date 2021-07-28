(window.webpackJsonp=window.webpackJsonp||[]).push([[981],{1054:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(8),i=(r(0),r(1172)),o={title:"Gluster"},c={unversionedId:"service/storage/gluster",id:"service/storage/gluster",isDocsHomePage:!1,title:"Gluster",description:"glusterfs",source:"@site/notes/service/storage/gluster.md",slug:"/service/storage/gluster",permalink:"/notes/service/storage/gluster",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/storage/gluster.md",version:"current",sidebar:"docs",previous:{title:"\u5206\u5e03\u5f0f\u5b58\u50a8",permalink:"/notes/service/storage/distributed-storage"},next:{title:"Minio ACL",permalink:"/notes/service/storage/minio-acl"}},l=[],s={toc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"glusterfs"},"glusterfs"),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/gluster/glusterfs/issues/268"},"#268")," - \u4e0d\u517c\u5bb9 alpine musl")))),Object(i.b)("h1",{id:"gluster-vs-ceph"},"Gluster vs Ceph"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Ceph",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u57fa\u4e8e\u5bf9\u8c61"),Object(i.b)("li",{parentName:"ul"},"\u652f\u6301\u975e\u7ed3\u6784\u5316\u6570\u636e"),Object(i.b)("li",{parentName:"ul"},"\u5e95\u5c42 RADOS \u5bf9\u8c61\u6570\u636e\u7cfb\u7edf"),Object(i.b)("li",{parentName:"ul"},"cephfs \u57fa\u4e8e\u5bf9\u8c61\u5b58\u50a8\u5b9e\u73b0 fs \u8bbf\u95ee\u5c42"),Object(i.b)("li",{parentName:"ul"},"bluestore \u53ef\u76f4\u63a5\u64cd\u4f5c\u5757\u8bbe\u5907\u4e0d\u5728\u4f9d\u8d56 fs"))),Object(i.b)("li",{parentName:"ul"},"Gluster",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u7ea7\u8054\u6587\u4ef6\u7cfb\u7edf\u7ed3\u6784"),Object(i.b)("li",{parentName:"ul"},"\u4f7f\u7528\u7b80\u5355\uff0c\u67b6\u6784\u5c42\u7ea7\u5c11"),Object(i.b)("li",{parentName:"ul"},"\u5bf9\u4f7f\u7528\u7684 FS \u6709\u8981\u6c42\u548c\u4f9d\u8d56"),Object(i.b)("li",{parentName:"ul"},"glusterfs \u5c42\u4e4b\u4e0a\u63d0\u4f9b\u4e86 swift \u4f5c\u4e3a\u5bf9\u8c61\u5b58\u50a8"),Object(i.b)("li",{parentName:"ul"},"\u9002\u5408\u987a\u5e8f\u8bbf\u95ee\uff0c\u4e0d\u9002\u5408\u6570\u636e\u5e93\u7c7b\u5bf9\u9501\u8981\u6c42\u7684\u8bbf\u95ee")))))}u.isMDXComponent=!0},1172:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,f=p["".concat(o,".").concat(m)]||p[m]||b[m]||i;return r?a.a.createElement(f,c(c({ref:t},s),{},{components:r})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);