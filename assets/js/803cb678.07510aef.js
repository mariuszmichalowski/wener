"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[71834],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return k}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(r),k=a,f=s["".concat(o,".").concat(k)]||s[k]||m[k]||l;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=s;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},59521:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return c},default:function(){return s}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),i=["components"],u={id:"k8s-my-practice",title:"\u6211\u7684 K8S \u5b9e\u8df5"},o=void 0,p={unversionedId:"devops/kubernetes/k8s-my-practice",id:"devops/kubernetes/k8s-my-practice",isDocsHomePage:!1,title:"\u6211\u7684 K8S \u5b9e\u8df5",description:"- \u670d\u52a1\u4e4b\u95f4\u8bb2\u6c42\u914d\u5408",source:"@site/notes/devops/kubernetes/k8s-my-practice.md",sourceDirName:"devops/kubernetes",slug:"/devops/kubernetes/k8s-my-practice",permalink:"/notes/devops/kubernetes/k8s-my-practice",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/k8s-my-practice.md",tags:[],version:"current",frontMatter:{id:"k8s-my-practice",title:"\u6211\u7684 K8S \u5b9e\u8df5"},sidebar:"docs",previous:{title:"K8S \u8bcd\u6c47\u8868",permalink:"/notes/devops/kubernetes/k8s-glossary"},next:{title:"Kubernetes \u7248\u672c",permalink:"/notes/devops/kubernetes/k8s-version"}},c=[{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",children:[]},{value:"\u8d44\u6e90",id:"\u8d44\u6e90",children:[]}],m={toc:c};function s(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u670d\u52a1\u4e4b\u95f4\u8bb2\u6c42\u914d\u5408",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6240\u4ee5\u624d\u9700\u8981\u7f16\u6392"),(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 \u503e\u5411\u4e8e nginx \u800c\u4e0d\u662f traeifk"),(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 \u4f7f\u7528 cert-manager \u800c\u4e0d\u662f web server \u81ea\u5e26\u7684 acme")))),(0,l.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u90e8\u7f72\u6df7\u5408\u67b6\u6784",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u610f\u90e8\u5206\u7ec4\u4ef6\u9650\u5b9a\u4e86 Linux",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"metallb"))),(0,l.kt)("li",{parentName:"ul"},"\u955c\u50cf\u9700\u8981\u652f\u6301\u591a\u67b6\u6784 - \u5927\u591a\u955c\u50cf\u90fd\u662f\u5355\u67b6\u6784"),(0,l.kt)("li",{parentName:"ul"},"\u9664\u975e\u6709\u660e\u663e\u7684\u9700\u8981\uff0c\u5426\u5219\u907f\u514d\u6df7\u5408\u67b6\u6784"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u8003\u8651\u90e8\u7f72\u4e00\u4e2a\u7eaf aarch64 \u67b6\u6784\u4e5f\u4e0d\u8981\u548c x86 \u6df7\u5408"))),(0,l.kt)("li",{parentName:"ul"},"\u5206\u5e03\u5f0f\u5b58\u50a8/\u975e\u672c\u5730\u5b58\u50a8",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9664\u975e\u5fc5\u8981\u5426\u5219\u4e0d\u8981\u4f7f\u7528\u5206\u5e03\u5f0f\u5b58\u50a8"),(0,l.kt)("li",{parentName:"ul"},"\u601d\u8003\u5206\u5e03\u5f0f\u5b58\u50a8\u7684\u76ee\u7684\u548c\u6536\u76ca"),(0,l.kt)("li",{parentName:"ul"},"\u5206\u5e03\u5f0f\u5b58\u50a8\u90fd\u6709\u5341\u5206\u660e\u663e\u7684\u526f\u4f5c\u7528"),(0,l.kt)("li",{parentName:"ul"},"\u5f53\u9700\u8981\u72b6\u6001\u7684\u65f6\u5019\u53ef\u4ee5\u8003\u8651\u8d2d\u4e70\u670d\u52a1\u6216\u8005\u989d\u5916\u63d0\u4f9b\u76f8\u5173\u670d\u52a1",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u8c61\u5b58\u50a8"))))),(0,l.kt)("li",{parentName:"ul"},"StatefulSet \u5176\u4ed6\u4f5c\u7528",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u7528\u4e8e\u83b7\u53d6\u7a33\u5b9a\u7684 Hostname \u548c IP - \u4e0d\u4e00\u5b9a\u662f\u56e0\u4e3a\u9700\u8981\u4f7f\u7528\u5b58\u50a8"),(0,l.kt)("li",{parentName:"ul"},"Pod \u7684\u540d\u5b57\u53ef\u4ee5\u66f4\u77ed - \u907f\u514d\u8d85\u51fa\u9650\u5236\u6216\u88ab\u622a\u53d6"))),(0,l.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u5c0f\u7684\u65f6\u5019 mount \u4e3b\u673a\u76ee\u5f55\u6216\u8005\u4f7f\u7528 local pvc \u4e5f\u4e0d\u5931\u4e3a\u7ba1\u7406\u5b58\u50a8\u7684\u529e\u6cd5")),(0,l.kt)("h2",{id:"\u8d44\u6e90"},"\u8d44\u6e90"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Prometheus \u4f1a\u5360\u7528\u8f83\u591a\u5185\u5b58\u548c\u90e8\u5206 CPU",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u5c3d\u91cf\u590d\u7528\uff0c\u907f\u514d\u91cd\u590d\u90e8\u7f72"),(0,l.kt)("li",{parentName:"ul"},"linkerd \u4f1a\u90e8\u7f72 prometheus"),(0,l.kt)("li",{parentName:"ul"},"lens \u4f1a\u90e8\u7f72 prometheus"),(0,l.kt)("li",{parentName:"ul"},"consul \u76f8\u5173\u670d\u52a1\u4e5f\u53ef\u4ee5\u96c6\u6210 prometheus"))),(0,l.kt)("li",{parentName:"ul"},"\u5173\u6ce8 DaemonSet",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ingress \u90e8\u7f72\u4e3a DS \u65b9\u4fbf\u4f7f\u7528 - \u56e0\u4e3a\u662f nginx+controller\uff0c \u5185\u5b58\u5927\u7ea6 100M - request 100m, 90Mi"),(0,l.kt)("li",{parentName:"ul"},"consul \u90e8\u7f72\u4f1a\u6709\u4e00\u4e2a\u8282\u70b9 agent DS - limit 100\uff0c100"),(0,l.kt)("li",{parentName:"ul"},"node-exporter \u4f1a\u90e8\u7f72\u4e3a DS - \u8d44\u6e90\u5360\u7528\u975e\u5e38\u5c0f - r 10m, 24Mi, limit: 200m, 100Mi"),(0,l.kt)("li",{parentName:"ul"},"metallb \u4f1a\u90e8\u7f72 DS \u4f5c\u4e3a speaker")))))}s.isMDXComponent=!0}}]);