(window.webpackJsonp=window.webpackJsonp||[]).push([[357],{431:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return o}));var n=r(3),a=r(8),l=(r(0),r(806)),i={id:"k8s-my-practice",title:"\u6211\u7684 K8S \u5b9e\u8df5"},c={unversionedId:"devops/kubernetes/k8s-my-practice",id:"devops/kubernetes/k8s-my-practice",isDocsHomePage:!1,title:"\u6211\u7684 K8S \u5b9e\u8df5",description:"Tips",source:"@site/notes/devops/kubernetes/k8s-my-practice.md",slug:"/devops/kubernetes/k8s-my-practice",permalink:"/notes/devops/kubernetes/k8s-my-practice",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/k8s-my-practice.md",version:"current",sidebar:"docs",previous:{title:"K8S \u8bcd\u6c47\u8868",permalink:"/notes/devops/kubernetes/k8s-glossary"},next:{title:"Kubernetes \u7248\u672c",permalink:"/notes/devops/kubernetes/k8s-version"}},p=[{value:"Tips",id:"tips",children:[]},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",children:[]},{value:"\u8d44\u6e90",id:"\u8d44\u6e90",children:[]}],b={toc:p};function o(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u90e8\u7f72\u6df7\u5408\u67b6\u6784"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6ce8\u610f\u90e8\u5206\u7ec4\u4ef6\u9650\u5b9a\u4e86 Linux",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"metallb"))),Object(l.b)("li",{parentName:"ul"},"\u955c\u50cf\u9700\u8981\u652f\u6301\u591a\u67b6\u6784 - \u5927\u591a\u955c\u50cf\u90fd\u662f\u5355\u67b6\u6784"),Object(l.b)("li",{parentName:"ul"},"\u9664\u975e\u6709\u660e\u663e\u7684\u9700\u8981\uff0c\u5426\u5219\u907f\u514d\u6df7\u5408\u67b6\u6784"),Object(l.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u8003\u8651\u90e8\u7f72\u4e00\u4e2a\u7eaf aarch64 \u67b6\u6784\u4e5f\u4e0d\u8981\u548c x86 \u6df7\u5408"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u5206\u5e03\u5f0f\u5b58\u50a8/\u975e\u672c\u5730\u5b58\u50a8"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9664\u975e\u5fc5\u8981\u5426\u5219\u4e0d\u8981\u4f7f\u7528\u5206\u5e03\u5f0f\u5b58\u50a8"),Object(l.b)("li",{parentName:"ul"},"\u601d\u8003\u5206\u5e03\u5f0f\u5b58\u50a8\u7684\u76ee\u7684\u548c\u6536\u76ca"),Object(l.b)("li",{parentName:"ul"},"\u5206\u5e03\u5f0f\u5b58\u50a8\u90fd\u6709\u5341\u5206\u660e\u663e\u7684\u526f\u4f5c\u7528"),Object(l.b)("li",{parentName:"ul"},"\u5f53\u9700\u8981\u72b6\u6001\u7684\u65f6\u5019\u53ef\u4ee5\u8003\u8651\u8d2d\u4e70\u670d\u52a1\u6216\u8005\u989d\u5916\u63d0\u4f9b\u76f8\u5173\u670d\u52a1",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6570\u636e\u5e93"),Object(l.b)("li",{parentName:"ul"},"\u5bf9\u8c61\u5b58\u50a8"))))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"StatefulSet \u5176\u4ed6\u4f5c\u7528"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u7528\u4e8e\u83b7\u53d6\u7a33\u5b9a\u7684 Hostname \u548c IP - \u4e0d\u4e00\u5b9a\u662f\u56e0\u4e3a\u9700\u8981\u4f7f\u7528\u5b58\u50a8"),Object(l.b)("li",{parentName:"ul"},"Pod \u7684\u540d\u5b57\u53ef\u4ee5\u66f4\u77ed - \u907f\u514d\u8d85\u51fa\u9650\u5236\u6216\u88ab\u622a\u53d6"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u96c6\u7fa4\u5c0f\u7684\u65f6\u5019 mount \u4e3b\u673a\u76ee\u5f55\u6216\u8005\u4f7f\u7528 local pvc \u4e5f\u4e0d\u5931\u4e3a\u7ba1\u7406\u5b58\u50a8\u7684\u529e\u6cd5"))),Object(l.b)("h2",{id:"\u8d44\u6e90"},"\u8d44\u6e90"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Prometheus \u4f1a\u5360\u7528\u8f83\u591a\u5185\u5b58\u548c\u90e8\u5206 CPU"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5efa\u8bae\u5c3d\u91cf\u590d\u7528\uff0c\u907f\u514d\u91cd\u590d\u90e8\u7f72"),Object(l.b)("li",{parentName:"ul"},"linkerd \u4f1a\u90e8\u7f72 prometheus"),Object(l.b)("li",{parentName:"ul"},"lens \u4f1a\u90e8\u7f72 prometheus"),Object(l.b)("li",{parentName:"ul"},"consul \u76f8\u5173\u670d\u52a1\u4e5f\u53ef\u4ee5\u96c6\u6210 prometheus"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u5173\u6ce8 DaemonSet"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"ingress \u90e8\u7f72\u4e3a DS \u65b9\u4fbf\u4f7f\u7528 - \u56e0\u4e3a\u662f nginx+controller\uff0c \u5185\u5b58\u5927\u7ea6 100M - request 100m, 90Mi"),Object(l.b)("li",{parentName:"ul"},"consul \u90e8\u7f72\u4f1a\u6709\u4e00\u4e2a\u8282\u70b9 agent DS - limit 100\uff0c100"),Object(l.b)("li",{parentName:"ul"},"node-exporter \u4f1a\u90e8\u7f72\u4e3a DS - \u8d44\u6e90\u5360\u7528\u975e\u5e38\u5c0f - r 10m, 24Mi, limit: 200m, 100Mi"),Object(l.b)("li",{parentName:"ul"},"metallb \u4f1a\u90e8\u7f72 DS \u4f5c\u4e3a speaker")))))}o.isMDXComponent=!0},806:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),o=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=o(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),u=o(r),s=n,O=u["".concat(i,".").concat(s)]||u[s]||m[s]||l;return r?a.a.createElement(O,c(c({ref:t},b),{},{components:r})):a.a.createElement(O,c({ref:t},b))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var b=2;b<l;b++)i[b]=r[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);