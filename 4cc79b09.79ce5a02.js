(window.webpackJsonp=window.webpackJsonp||[]).push([[322],{1152:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),m=n,f=s["".concat(c,".").concat(m)]||s[m]||b[m]||o;return r?a.a.createElement(f,l(l({ref:t},u),{},{components:r})):a.a.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},396:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(8),o=(r(0),r(1152)),c={title:"Vault on Kubernetes",sidebar_title:"Vault on K8S"},l={unversionedId:"ops/service/vault-k8s",id:"ops/service/vault-k8s",isDocsHomePage:!1,title:"Vault on Kubernetes",description:"- Vault on Kubernetes",source:"@site/notes/ops/service/vault-k8s.md",slug:"/ops/service/vault-k8s",permalink:"/notes/ops/service/vault-k8s",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/service/vault-k8s.md",version:"current",sidebar:"docs",previous:{title:"\u8fdc\u7a0b\u684c\u9762",permalink:"/notes/ops/service/remote-desktop"},next:{title:"Vault \u5bc6\u94a5\u5f15\u64ce",permalink:"/notes/ops/service/vault-secret"}},i=[{value:"Best practices",id:"best-practices",children:[]}],u={toc:i};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.vaultproject.io/docs/platform/k8s"},"Vault on Kubernetes"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"HA Vault \u670d\u52a1"),Object(o.b)("li",{parentName:"ul"},"\u8bfb\u5199 Secret"),Object(o.b)("li",{parentName:"ul"},"Encryption as a Service"),Object(o.b)("li",{parentName:"ul"},"Audit Logs for Vault"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/Boostport/kubernetes-vault"},"Boostport/kubernetes-vault"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"allows pods to automatically receive a Vault token using Vault's AppRole auth backend.")))),Object(o.b)("h2",{id:"best-practices"},"Best practices"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/Boostport/kubernetes-vault/blob/master/best-practices.md"},"Best practices for running Kubernetes-Vault in production")),Object(o.b)("li",{parentName:"ul"},"Vault \u914d\u7f6e\u4e3a\u4f7f\u7528 HTTPS"),Object(o.b)("li",{parentName:"ul"},"Kubernetes-Vault \u4e0d\u5e94\u8be5\u4f7f\u7528 root token\uff0c\u4f7f\u7528\u4e00\u4e2a\u5468\u671f\u6027\u7684 token",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u652f\u6301\u81ea\u52a8 renew - \u4e0d\u9700\u8981\u66f4\u6362 token"))),Object(o.b)("li",{parentName:"ul"},"\u4f7f\u7528 AppRole\uff0csecret_id \u53ea\u4f1a\u6709\u4e00\u6b21\u4f7f\u7528\uff0c\u6bcf\u4e2a pod \u6709\u81ea\u5df1\u7684 secret_id",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"AppRole \u5e94\u8be5\u751f\u6210\u5468\u671f\u6027\u7684 token"))),Object(o.b)("li",{parentName:"ul"},"\u9650\u5b9a AppRole \u8bbf\u95ee\u6709\u6743\u9650\u8bbf\u95ee\u7684\u5bc6\u94a5 - \u6743\u9650\u53ef\u6309\u9700\u4fee\u6539"),Object(o.b)("li",{parentName:"ul"},"metrics \u5e94\u8be5\u4f7f\u7528 httls \u4e14\u5c3d\u91cf\u542f\u7528 TLS Client Authentication"),Object(o.b)("li",{parentName:"ul"},"\u8fd0\u884c\u591a\u4e2a Kubernetes-Vault \u5b9e\u4f8b")))}p.isMDXComponent=!0}}]);