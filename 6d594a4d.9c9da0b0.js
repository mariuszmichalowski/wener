(window.webpackJsonp=window.webpackJsonp||[]).push([[468],{1169:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,O=p["".concat(l,".").concat(m)]||p[m]||s[m]||i;return n?a.a.createElement(O,c(c({ref:t},b),{},{components:n})):a.a.createElement(O,c({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var b=2;b<i;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},542:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),i=(n(0),n(1169)),l={id:"internal",title:"Kubernetes Internal"},c={unversionedId:"devops/kubernetes/internal/internal",id:"devops/kubernetes/internal/internal",isDocsHomePage:!1,title:"Kubernetes Internal",description:"Tips",source:"@site/notes/devops/kubernetes/internal/README.md",slug:"/devops/kubernetes/internal/internal",permalink:"/notes/devops/kubernetes/internal/internal",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/internal/README.md",version:"current",sidebar:"docs",previous:{title:"kine",permalink:"/notes/devops/kubernetes/distro/kine"},next:{title:"Kubernates \u63a5\u53e3",permalink:"/notes/devops/kubernetes/internal/k8s-api"}},o=[{value:"Tips",id:"tips",children:[]},{value:"\u72b6\u6001\u7ba1\u7406",id:"\u72b6\u6001\u7ba1\u7406",children:[{value:"etcd \u96c6\u7fa4\u72b6\u6001",id:"etcd-\u96c6\u7fa4\u72b6\u6001",children:[]}]},{value:"\u5e94\u7528\u72b6\u6001\u5b58\u50a8",id:"\u5e94\u7528\u72b6\u6001\u5b58\u50a8",children:[]}],b={toc:o};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u4e3b\u8981",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6267\u884c\u8c03\u5ea6")))),Object(i.b)("h2",{id:"\u72b6\u6001\u7ba1\u7406"},"\u72b6\u6001\u7ba1\u7406"),Object(i.b)("h3",{id:"etcd-\u96c6\u7fa4\u72b6\u6001"},"etcd \u96c6\u7fa4\u72b6\u6001"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"k3s \u5c06 etcd \u5916\u5316\u4e3a\u6570\u636e\u5e93\u4f9d\u8d56 - \u4f7f\u5f97\u8fd9\u90e8\u5206\u6613\u4e8e\u7ef4\u62a4\u7ba1\u7406")),Object(i.b)("h2",{id:"\u5e94\u7528\u72b6\u6001\u5b58\u50a8"},"\u5e94\u7528\u72b6\u6001\u5b58\u50a8"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u6587\u4ef6\u3001\u5757\u8bbe\u5907"),Object(i.b)("li",{parentName:"ul"},"\u96c6\u7fa4\u5185",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u96c6\u7fa4\u5185\u90e8\u7f72\u5b58\u50a8 provisioner \u5904\u7406 pvc"),Object(i.b)("li",{parentName:"ul"},"\u5206\u5e03\u5f0f\u5b58\u50a8",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"longhorn"),Object(i.b)("li",{parentName:"ul"},"ceph"))),Object(i.b)("li",{parentName:"ul"},"\u5355\u8282\u70b9\u5b58\u50a8",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"hostPath"),Object(i.b)("li",{parentName:"ul"},"local-path-provisioner"))))),Object(i.b)("li",{parentName:"ul"},"\u96c6\u7fa4\u5916 - \u4f9d\u8d56\u5916\u90e8\u5b58\u50a8",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5916\u90e8\u5e73\u53f0\u670d\u52a1 - \u4f8b\u5982 GFS\u3001OSS"),Object(i.b)("li",{parentName:"ul"},"\u5916\u90e8\u5b58\u50a8\u96c6\u7fa4",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Ceph"))),Object(i.b)("li",{parentName:"ul"},"\u5916\u90e8\u5b58\u50a8\u670d\u52a1",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"NFS"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/kubernetes-csi/external-provisioner"},"kubernetes-csi/external-provisioner"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u76d1\u542c PVC \u89e6\u53d1\u521b\u5efa\u548c\u5220\u9664\u5377")))))}u.isMDXComponent=!0}}]);