"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[11601],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=u(n),s=r,b=d["".concat(o,".").concat(s)]||d[s]||k[s]||l;return n?a.createElement(b,i(i({ref:t},m),{},{components:n})):a.createElement(b,i({ref:t},m))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82380:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return m},default:function(){return d}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),i=["components"],p={title:"Kubernetes \u6807\u7b7e"},o=void 0,u={unversionedId:"devops/kubernetes/internal/k8s-labels",id:"devops/kubernetes/internal/k8s-labels",isDocsHomePage:!1,title:"Kubernetes \u6807\u7b7e",description:"- https://kubernetes.io/docs/reference/kubernetes-api/labels-annotations-taints",source:"@site/notes/devops/kubernetes/internal/k8s-labels.md",sourceDirName:"devops/kubernetes/internal",slug:"/devops/kubernetes/internal/k8s-labels",permalink:"/notes/devops/kubernetes/internal/k8s-labels",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/internal/k8s-labels.md",version:"current",frontMatter:{title:"Kubernetes \u6807\u7b7e"},sidebar:"docs",previous:{title:"Kubernetes DNS",permalink:"/notes/devops/kubernetes/internal/k8s-dns"},next:{title:"K8S \u4f7f\u7528\u7ecf\u9a8c",permalink:"/notes/devops/kubernetes/k3s-story"}},m=[{value:"\u8282\u70b9\u6807\u7b7e",id:"\u8282\u70b9\u6807\u7b7e",children:[{value:"Deprecated",id:"deprecated",children:[]}]},{value:"\u8d44\u6e90\u6807\u7b7e",id:"\u8d44\u6e90\u6807\u7b7e",children:[]},{value:"\u5e94\u7528\u6807\u7b7e",id:"\u5e94\u7528\u6807\u7b7e",children:[]},{value:"Helm \u6807\u7b7e",id:"helm-\u6807\u7b7e",children:[]},{value:"Helm \u6ce8\u89e3",id:"helm-\u6ce8\u89e3",children:[]}],k={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/kubernetes-api/labels-annotations-taints"},"https://kubernetes.io/docs/reference/kubernetes-api/labels-annotations-taints"))),(0,l.kt)("h2",{id:"\u8282\u70b9\u6807\u7b7e"},"\u8282\u70b9\u6807\u7b7e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"kubernetes.io/ingress.class")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"label"),(0,l.kt)("th",{parentName:"tr",align:null},"demo"),(0,l.kt)("th",{parentName:"tr",align:null},"desc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"k3s.io/hostname"),(0,l.kt)("td",{parentName:"tr",align:null},"node-3"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"k3s.io/internal-ip"),(0,l.kt)("td",{parentName:"tr",align:null},"10.10.1.1"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kubernetes.io/arch"),(0,l.kt)("td",{parentName:"tr",align:null},"amd64"),(0,l.kt)("td",{parentName:"tr",align:null},"+v1.14")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kubernetes.io/hostname"),(0,l.kt)("td",{parentName:"tr",align:null},"node-3"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kubernetes.io/os"),(0,l.kt)("td",{parentName:"tr",align:null},"linux"),(0,l.kt)("td",{parentName:"tr",align:null},"+v1.14")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node-role.kubernetes.io/",(0,l.kt)("inlineCode",{parentName:"td"},"<role>")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node-role.kubernetes.io/master"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Master node")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node.kubernetes.io/instance-type"),(0,l.kt)("td",{parentName:"tr",align:null},"k3s"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"topology.kubernetes.io/region"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"+v1.17")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"topology.kubernetes.io/zone"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"+v1.17")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u8bbe\u7f6e node role \u4e3a worker\n# role \u540d\u5b57\u4efb\u610f\n# value \u4e0d\u91cd\u8981\uff0c\u4e3b\u8981\u662f\u5b58\u5728\u8be5 label\nkubectl label node-2 node-role.kubernetes.io/worker=true\n")),(0,l.kt)("h3",{id:"deprecated"},"Deprecated"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"label"),(0,l.kt)("th",{parentName:"tr",align:null},"demo"),(0,l.kt)("th",{parentName:"tr",align:null},"desc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"beta.kubernetes.io/arch"),(0,l.kt)("td",{parentName:"tr",align:null},"amd64"),(0,l.kt)("td",{parentName:"tr",align:null},"!v1.14, -v1.18")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"beta.kubernetes.io/instance-type"),(0,l.kt)("td",{parentName:"tr",align:null},"k3s"),(0,l.kt)("td",{parentName:"tr",align:null},"!v1.17")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"beta.kubernetes.io/os"),(0,l.kt)("td",{parentName:"tr",align:null},"linux"),(0,l.kt)("td",{parentName:"tr",align:null},"!v1.14, -v1.18")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"failure-domain.beta.kubernetes.io/region"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"!v1.17")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"failure-domain.beta.kubernetes.io/zone"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"!v1.17")))),(0,l.kt)("h2",{id:"\u8d44\u6e90\u6807\u7b7e"},"\u8d44\u6e90\u6807\u7b7e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"kind"),(0,l.kt)("th",{parentName:"tr",align:null},"annotation"),(0,l.kt)("th",{parentName:"tr",align:null},"demo"),(0,l.kt)("th",{parentName:"tr",align:null},"desc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"StorageClass"),(0,l.kt)("td",{parentName:"tr",align:null},"storageclass.kubernetes.io/is-default-class"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4 StorageClass")))),(0,l.kt)("h2",{id:"\u5e94\u7528\u6807\u7b7e"},"\u5e94\u7528\u6807\u7b7e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/common-labels/"},"Recommanded Lables")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://helm.sh/docs/chart_best_practices/labels/"},"Helm Labels"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"label"),(0,l.kt)("th",{parentName:"tr",align:null},"example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"app.kubernetes.io/name"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mysql"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"app.kubernetes.io/instance"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mysql-abcd"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"app.kubernetes.io/version"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"5.7"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"app.kubernetes.io/component"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"database"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"app.kubernetes.io/part-of"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ghost"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"app.kubernetes.io/managed-by"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"helm"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"podAntiAffinity:\n  preferredDuringSchedulingIgnoredDuringExecution:\n    - weight: 100\n      podAffinityTerm:\n        labelSelector:\n          matchLabels:\n            app.kubernetes.io/component: prometheus\n            app.kubernetes.io/instance: kube-prometheus\n            app.kubernetes.io/name: kube-prometheus\n        topologyKey: kubernetes.io/hostname\n")),(0,l.kt)("h2",{id:"helm-\u6807\u7b7e"},"Helm \u6807\u7b7e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"label"),(0,l.kt)("th",{parentName:"tr",align:null},"example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"app.kubernetes.io/managed-by"),(0,l.kt)("td",{parentName:"tr",align:null},"Helm")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u8d44\u6e90 label\nlabels:\n  app.kubernetes.io/component: controller\n  app.kubernetes.io/instance: ingress-nginx\n  app.kubernetes.io/managed-by: Helm\n  app.kubernetes.io/name: ingress-nginx\n  app.kubernetes.io/version: 0.35.0\n  helm.sh/chart: ingress-nginx-2.16.0\n\n# selector label\nmatchLabels:\n  app.kubernetes.io/component: controller\n  app.kubernetes.io/instance: ingress-nginx\n  app.kubernetes.io/name: ingress-nginx\n")),(0,l.kt)("h2",{id:"helm-\u6ce8\u89e3"},"Helm \u6ce8\u89e3"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"annotation"),(0,l.kt)("th",{parentName:"tr",align:null},"value"),(0,l.kt)("th",{parentName:"tr",align:null},"desc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"meta.helm.sh/release-name"),(0,l.kt)("td",{parentName:"tr",align:null},"linkerd2"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"meta.helm.sh/release-namespace"),(0,l.kt)("td",{parentName:"tr",align:null},"linkerd"),(0,l.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);