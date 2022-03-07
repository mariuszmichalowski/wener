"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[84730],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=i(n),k=a,d=m["".concat(u,".").concat(k)]||m[k]||s[k]||l;return n?r.createElement(d,p(p({ref:t},c),{},{components:n})):r.createElement(d,p({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var i=2;i<l;i++)p[i]=n[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10408:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return i},toc:function(){return c},default:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),p=["components"],o={tags:["FAQ"]},u="Kubernetest Application FAQ",i={unversionedId:"devops/kubernetes/app/k8s-app-faq",id:"devops/kubernetes/app/k8s-app-faq",title:"Kubernetest Application FAQ",description:"ArgoCD vs Flux2",source:"@site/notes/devops/kubernetes/app/k8s-app-faq.md",sourceDirName:"devops/kubernetes/app",slug:"/devops/kubernetes/app/k8s-app-faq",permalink:"/notes/devops/kubernetes/app/k8s-app-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/app/k8s-app-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",frontMatter:{tags:["FAQ"]},sidebar:"docs",previous:{title:"HELM2 - \u4e0d\u63a8\u8350",permalink:"/notes/devops/kubernetes/app/helm2"},next:{title:"Consol",permalink:"/notes/devops/kubernetes/app/k8s-consul"}},c=[{value:"ArgoCD vs Flux2",id:"argocd-vs-flux2",children:[],level:2},{value:"kubed vs reflector",id:"kubed-vs-reflector",children:[],level:2}],s={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,p);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"kubernetest-application-faq"},"Kubernetest Application FAQ"),(0,l.kt)("h2",{id:"argocd-vs-flux2"},"ArgoCD vs Flux2"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"vs."),(0,l.kt)("th",{parentName:"tr",align:null},"ArgoCD"),(0,l.kt)("th",{parentName:"tr",align:null},"Flux2"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"helm"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kustomization"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSO"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Multi-tenancy"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Image Upgrade"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"WebUI"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2b50\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ecosystem"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2b50\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Maturity"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2b50\ufe0f")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u76ee\u524d(2022)\u4f18\u5148\u9009\u62e9 ArgoCD")),(0,l.kt)("h2",{id:"kubed-vs-reflector"},"kubed vs reflector"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/kubeops/config-syncer"},"kubeops/config-syncer"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u539f kubed"),(0,l.kt)("li",{parentName:"ul"},"Go, Apache-2.0"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/emberstack/kubernetes-reflector"},"reflector"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"C#, MIT")))))}m.isMDXComponent=!0}}]);