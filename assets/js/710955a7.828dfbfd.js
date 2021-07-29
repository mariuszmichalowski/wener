"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[94469],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,h=m["".concat(p,".").concat(f)]||m[f]||c[f]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},49770:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i=["components"],s={title:"HAProxy Ingress"},p=void 0,l={unversionedId:"devops/kubernetes/network/haproxy-ingress",id:"devops/kubernetes/network/haproxy-ingress",isDocsHomePage:!1,title:"HAProxy Ingress",description:"Tips",source:"@site/notes/devops/kubernetes/network/haproxy-ingress.md",sourceDirName:"devops/kubernetes/network",slug:"/devops/kubernetes/network/haproxy-ingress",permalink:"/notes/devops/kubernetes/network/haproxy-ingress",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/network/haproxy-ingress.md",version:"current",frontMatter:{title:"HAProxy Ingress"},sidebar:"docs",previous:{title:"Flannel",permalink:"/notes/devops/kubernetes/network/flannel"},next:{title:"Kubernetes Ingress",permalink:"/notes/devops/kubernetes/network/k8s-ingress"}},u=[{value:"Tips",id:"tips",children:[]}],c={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"tips"},"Tips"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/jcmoraisjr/haproxy-ingress"},"jcmoraisjr/haproxy-ingress"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://haproxy-ingress.github.io/docs/"},"\u6587\u6863")),(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e",(0,a.kt)("a",{parentName:"li",href:"https://github.com/jcmoraisjr/haproxy-ingress/blob/master/rootfs/etc/haproxy/template/haproxy.tmpl"},"\u6a21\u677f"),"\u751f\u6210\u914d\u7f6e"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 acme"),(0,a.kt)("li",{parentName:"ul"},"\u6709\u5f88\u591a\u8f85\u52a9\u914d\u7f6e\u80fd\u591f\u4f7f\u5f97\u914d\u7f6e\u66f4\u52a0\u65b9\u4fbf"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 modsecurity"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/haproxytech/kubernetes-ingress"},"haproxytech/kubernetes-ingress"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/haproxytech/kubernetes-ingress/tree/master/documentation"},"\u6587\u6863")),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/haproxytech/dataplaneapi"},"haproxytech/dataplaneapi")," \u7ba1\u7406\u914d\u7f6e"),(0,a.kt)("li",{parentName:"ul"},"\u955c\u50cf ",(0,a.kt)("inlineCode",{parentName:"li"},"haproxytech/kubernetes-ingress")," \u57fa\u4e8e ",(0,a.kt)("inlineCode",{parentName:"li"},"haproxytech/haproxy-alpine")),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 configmap\u3001ingress\u3001service \u914d\u7f6e")))))}m.isMDXComponent=!0}}]);