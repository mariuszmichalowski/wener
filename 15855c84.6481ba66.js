(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{1166:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),d=r,f=l["".concat(a,".").concat(d)]||l[d]||b[d]||i;return n?o.a.createElement(f,c(c({ref:t},u),{},{components:n})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(8),i=(n(0),n(1166)),a={title:"kine"},c={unversionedId:"devops/kubernetes/distro/kine",id:"devops/kubernetes/distro/kine",isDocsHomePage:!1,title:"kine",description:"- k3s-io/kine \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/devops/kubernetes/distro/kine.md",slug:"/devops/kubernetes/distro/kine",permalink:"/notes/devops/kubernetes/distro/kine",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/distro/kine.md",version:"current",sidebar:"docs",previous:{title:"K3S",permalink:"/notes/devops/kubernetes/distro/k3s"},next:{title:"Kubernetes Internal",permalink:"/notes/devops/kubernetes/internal/internal"}},s=[],u={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/k3s-io/kine"},"k3s-io/kine")," \u662f\u4ec0\u4e48\uff1f",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"kine -> Kine is not etcd"),Object(i.b)("li",{parentName:"ul"},"etcd \u9002\u914d\u5668, \u652f\u6301\u90e8\u5206 etcd \u529f\u80fd - \u6ee1\u8db3 k8s \u4f7f\u7528"),Object(i.b)("li",{parentName:"ul"},"\u540e\u7aef\u652f\u6301 postgres, mysql, sqlite, dqlite"),Object(i.b)("li",{parentName:"ul"},"\u53ef\u72ec\u7acb\u542f\u52a8"),Object(i.b)("li",{parentName:"ul"},"k3s \u548c k0s \u4f7f\u7528\u4e86 kine")))))}p.isMDXComponent=!0}}]);