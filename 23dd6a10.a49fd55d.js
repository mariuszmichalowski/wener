(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{1151:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),b=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},l=function(e){var t=b(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=b(r),m=n,f=l["".concat(i,".").concat(m)]||l[m]||s[m]||a;return r?o.a.createElement(f,u(u({ref:t},c),{},{components:r})):o.a.createElement(f,u({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var c=2;c<a;c++)i[c]=r[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},234:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(3),o=r(8),a=(r(0),r(1151)),i={title:"KubeVirt"},u={unversionedId:"devops/kubernetes/app/kubevirt",id:"devops/kubernetes/app/kubevirt",isDocsHomePage:!1,title:"KubeVirt",description:"- kubevirt/kubevirt",source:"@site/notes/devops/kubernetes/app/kubevirt.md",slug:"/devops/kubernetes/app/kubevirt",permalink:"/notes/devops/kubernetes/app/kubevirt",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/app/kubevirt.md",version:"current",sidebar:"docs",previous:{title:"kubed",permalink:"/notes/devops/kubernetes/app/kubed"},next:{title:"Lens",permalink:"/notes/devops/kubernetes/app/lens"}},p=[],c={toc:p};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/kubevirt/kubevirt"},"kubevirt/kubevirt"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u652f\u6301 QEMU"),Object(a.b)("li",{parentName:"ul"},"\u652f\u6301\u5bb9\u5668\u8fd0\u884c\u65f6 docker, crio/runv"))),Object(a.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://kubevirt.io/2020/Multiple-Network-Attachments-with-bridge-CNI.html"},"Multiple Network Attachments with bridge CNI"))))))}b.isMDXComponent=!0}}]);