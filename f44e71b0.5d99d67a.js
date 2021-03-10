(window.webpackJsonp=window.webpackJsonp||[]).push([[702],{775:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(8),l=(r(0),r(806)),i={id:"k3s-story",title:"K8S \u4f7f\u7528\u7ecf\u9a8c"},o={unversionedId:"devops/kubernetes/k3s-story",id:"devops/kubernetes/k3s-story",isDocsHomePage:!1,title:"K8S \u4f7f\u7528\u7ecf\u9a8c",description:"\u4e24\u5e74 K8S \u5fc3\u5f97",source:"@site/notes/devops/kubernetes/k8s-story.md",slug:"/devops/kubernetes/k3s-story",permalink:"/notes/devops/kubernetes/k3s-story",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/k8s-story.md",version:"current",sidebar:"docs",previous:{title:"sealed-secrets",permalink:"/notes/devops/kubernetes/app/sealed-secrets"},next:{title:"kubectl FAQ",permalink:"/notes/devops/kubernetes/kubectl-faq"}},b=[{value:"\u4e24\u5e74 K8S \u5fc3\u5f97",id:"\u4e24\u5e74-k8s-\u5fc3\u5f97",children:[]}],c={toc:b};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"\u4e24\u5e74-k8s-\u5fc3\u5f97"},"\u4e24\u5e74 K8S \u5fc3\u5f97"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://coderanger.net/lessons-learned/"},"Lessons Learned From Two Years Of Kubernetes")),Object(l.b)("li",{parentName:"ul"},"\u9009\u7528\u4e86 Traefik + Cert-Manager + Ext-DNS"),Object(l.b)("li",{parentName:"ul"},"\u7528\u4e86 Prometheus-Operator \u4f46\u89c9\u5f97 Thanos \u4e5f\u5f88\u597d"),Object(l.b)("li",{parentName:"ul"},"\u63a8\u5d07 ",Object(l.b)("a",{parentName:"li",href:"https://www.gitops.tech/"},"GitOps"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9009\u7528\u4e86 ",Object(l.b)("a",{parentName:"li",href:"https://argoproj.github.io/argo-cd/"},"ArgoCD")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/fluxcd/flux"},"FluxCD")),Object(l.b)("li",{parentName:"ul"},"\u65e0\u6cd5\u5b58\u50a8\u5230 Git \u7684\u8003\u8651\u4f7f\u7528 ",Object(l.b)("a",{parentName:"li",href:"https://velero.io/"},"velero")," \u5907\u4efd",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4f8b\u5982 cert-manager \u8bc1\u4e66"))),Object(l.b)("li",{parentName:"ul"},"\u89c9\u5f97\u5355\u4e2a Git \u4ed3\u5e93\u597d\uff0c\u4f46\u662f\u5e0c\u671b\u80fd\u5207\u5206\u4e3a\u591a\u4e2a ArgoCD \u5e94\u7528"))),Object(l.b)("li",{parentName:"ul"},"\u63a8\u8350\u591a\u4f7f\u7528 Operator \u6a21\u5f0f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5916\u90e8\u8d44\u6e90\u4ea4\u4e92"),Object(l.b)("li",{parentName:"ul"},"\u5e94\u7528\u72b6\u6001 - \u4f8b\u5982\u5e94\u7528 SQL \u8fc1\u79fb"),Object(l.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u53c2\u8003 ",Object(l.b)("a",{parentName:"li",href:"https://book.kubebuilder.io/"},"kubebuilder")))),Object(l.b)("li",{parentName:"ul"},"Secret \u7ba1\u7406\u4f9d\u7136\u56f0\u96be",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u5c1d\u8bd5 ",Object(l.b)("a",{parentName:"li",href:"https://github.com/mozilla/sops"},"mozilla/sops")))),Object(l.b)("li",{parentName:"ul"},"K8S \u539f\u751f CI \u548c\u65e5\u5fd7\u5206\u6790\u4f9d\u7136\u4e0d\u592a\u660e\u786e",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u539f\u751f CI",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"JenkinsX \u63a5\u8fd1\u4f46\u8fc7\u4e8e\u590d\u6742"),Object(l.b)("li",{parentName:"ul"},"Tekton Pipelines \u548c Argo Workflows \u90fd\u63a5\u8fd1\u539f\u751f\uff0c\u4f46\u65e0\u6cd5\u66b4\u9732\u7ed9\u56e2\u961f"))),Object(l.b)("li",{parentName:"ul"},"\u65e5\u5fd7\u5206\u6790",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://fluentbit.io/"},"fluentbit")," \u4f5c\u4e3a DaemonSet \u91c7\u96c6\u5230 ",Object(l.b)("a",{parentName:"li",href:"https://www.fluentd.org/"},"fluentd")," Pod"),Object(l.b)("li",{parentName:"ul"},"\u5b58\u50a8\u9009\u7528 ES \u6216 Loki"),Object(l.b)("li",{parentName:"ul"},"Kibana",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5f00\u6e90\u7248\u7528\u6237\u8ba4\u8bc1\u548c\u6bcf\u4e2a\u7528\u6237\u7684\u6743\u9650\u90fd\u4e0d\u5bb9\u6613\u7ba1\u7406"),Object(l.b)("li",{parentName:"ul"},"\u5206\u6790\u529f\u80fd\u5f3a"))),Object(l.b)("li",{parentName:"ul"},"Grafana",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u65e5\u5fd7\u5206\u6790\u529f\u80fd\u975e\u5e38\u5f31"),Object(l.b)("li",{parentName:"ul"},"substring searching and per-line tag searching")))))))))}p.isMDXComponent=!0},806:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,O=u["".concat(i,".").concat(m)]||u[m]||s[m]||l;return r?a.a.createElement(O,o(o({ref:t},c),{},{components:r})):a.a.createElement(O,o({ref:t},c))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);