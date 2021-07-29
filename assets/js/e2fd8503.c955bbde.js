"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[28487],{3905:function(e,t,l){l.d(t,{Zo:function(){return u},kt:function(){return d}});var n=l(67294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},u=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=m(l),d=r,k=s["".concat(p,".").concat(d)]||s[d]||c[d]||a;return l?n.createElement(k,i(i({ref:t},u),{},{components:l})):n.createElement(k,i({ref:t},u))}));function d(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,i=new Array(a);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<a;m++)i[m]=l[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}s.displayName="MDXCreateElement"},18987:function(e,t,l){l.r(t),l.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return u},default:function(){return s}});var n=l(22122),r=l(19756),a=(l(67294),l(3905)),i=["components"],o={id:"helm2",title:"HELM2 - \u4e0d\u63a8\u8350"},p="Helm 2 - \u4e0d\u63a8\u8350\u4f7f\u7528",m={unversionedId:"devops/kubernetes/app/helm2",id:"devops/kubernetes/app/helm2",isDocsHomePage:!1,title:"HELM2 - \u4e0d\u63a8\u8350",description:"V2 - V3",source:"@site/notes/devops/kubernetes/app/helm2.md",sourceDirName:"devops/kubernetes/app",slug:"/devops/kubernetes/app/helm2",permalink:"/notes/devops/kubernetes/app/helm2",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/app/helm2.md",version:"current",frontMatter:{id:"helm2",title:"HELM2 - \u4e0d\u63a8\u8350"},sidebar:"docs",previous:{title:"HELM \u5305\u7ba1\u7406\u5668",permalink:"/notes/devops/kubernetes/app/helm"},next:{title:"Consol",permalink:"/notes/devops/kubernetes/app/k8s-consul"}},u=[{value:"V2 - V3",id:"v2---v3",children:[]},{value:"Tiller \u5b89\u88c5",id:"tiller-\u5b89\u88c5",children:[]},{value:"Helm 2 Tiller",id:"helm-2-tiller",children:[]},{value:"FAQ",id:"faq",children:[{value:"Error: could not find a ready tiller pod",id:"error-could-not-find-a-ready-tiller-pod",children:[]},{value:"Helm \u547d\u4ee4 Hang \u4f4f",id:"helm-\u547d\u4ee4-hang-\u4f4f",children:[]}]}],c={toc:u};function s(e){var t=e.components,l=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"helm-2---\u4e0d\u63a8\u8350\u4f7f\u7528"},"Helm 2 - \u4e0d\u63a8\u8350\u4f7f\u7528"),(0,a.kt)("h2",{id:"v2---v3"},"V2 - V3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u79fb\u9664 Tiller - \u9700\u8981\u5b89\u88c5\u5230\u96c6\u7fa4\u91cc\u7684\u90e8\u5206"),(0,a.kt)("li",{parentName:"ul"},"\u4e09\u8def\u5408\u5e76\u66f4\u65b0\u7684\u5347\u7ea7\u7b56\u7565"),(0,a.kt)("li",{parentName:"ul"},"\u53d1\u5e03\u540d\u5728\u547d\u540d\u7a7a\u95f4\u4e0b\u800c\u4e0d\u662f\u5168\u5c40"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 secret \u4f5c\u4e3a\u9ed8\u8ba4\u5b58\u50a8"),(0,a.kt)("li",{parentName:"ul"},"Go \u5bfc\u5165\u8def\u5f84\u53d8\u5316 ",(0,a.kt)("inlineCode",{parentName:"li"},"k8s.io/helm")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"helm.sh/helm/v3")),(0,a.kt)("li",{parentName:"ul"},"\u65b0\u589e ",(0,a.kt)("a",{parentName:"li",href:"https://helm.sh/docs/chart_template_guide/builtin_objects/"},".Capabilities")," \u5185\u5efa\u5bf9\u8c61 - \u7528\u4e8e\u68c0\u6d4b\u96c6\u7fa4\u73af\u5883"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 JSONSchema \u9a8c\u8bc1 Chart"),(0,a.kt)("li",{parentName:"ul"},"\u5c06 requirements.yaml \u5408\u5e76\u5230 Chart.yaml - \u4f9d\u8d56\u5b9a\u4e49"),(0,a.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u65f6\u5fc5\u987b\u6307\u5b9a\u540d\u5b57\u6216 ",(0,a.kt)("inlineCode",{parentName:"li"},"--generate-name")),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 OCI ",(0,a.kt)("a",{parentName:"li",href:"https://helm.sh/docs/topics/registries/"},"\u6ce8\u518c\u4e2d\u5fc3")," - docker \u6ce8\u518c\u4e2d\u5fc3",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5b9e\u9a8c\u9636\u6bb5 ",(0,a.kt)("inlineCode",{parentName:"li"},"HELM_EXPERIMENTAL_OCI=1")))),(0,a.kt)("li",{parentName:"ul"},"\u79fb\u9664 ",(0,a.kt)("inlineCode",{parentName:"li"},"helm serve")),(0,a.kt)("li",{parentName:"ul"},"\u547d\u4ee4\u4fee\u6539",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"inspect")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"show")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fetch")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"pull")))),(0,a.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"li"},"--create-namespace")," \u521b\u5efa\u547d\u540d\u7a7a\u95f4"),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://helm.sh/docs/faq/#changes-since-helm-2"},"Changes since Helm 2"))))),(0,a.kt)("h2",{id:"tiller-\u5b89\u88c5"},"Tiller \u5b89\u88c5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u90e8\u5206\u7cfb\u7edf\u8fd8\u4f9d\u8d56 Tiller"),(0,a.kt)("li",{parentName:"ul"},"\u76ee\u524d\u7248\u672c v2.16.1 - 20191129"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 tiller \u9700\u8981\u4f7f\u7528\u65e7\u7248\u672c helm - \u4f8b\u5982 ",(0,a.kt)("a",{parentName:"li",href:"https://get.helm.sh/helm-v2.16.1-darwin-amd64.tar.gz"},"https://get.helm.sh/helm-v2.16.1-darwin-amd64.tar.gz"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n kube-system create serviceaccount tiller\n\nkubectl create clusterrolebinding tiller \\\n  --clusterrole=cluster-admin \\\n  --serviceaccount=kube-system:tiller\n\nhelm init --service-account tiller\n\n# \u53ef\u4ee5\u4fee\u6539\u955c\u50cf\u4ed3\u5e93 - \u907f\u514d\u65e0\u6cd5\u5b89\u88c5\n# helm init --service-account tiller --tiller-image registry.wener.me/kubernetes-helm/tiller:v2.16.1\n\n# \u83b7\u53d6\u90e8\u7f72\u72b6\u6001\nkubectl -n kube-system rollout status deploy/tiller-deploy\n# \u5982\u679c\u5931\u8d25\u53ef\u4ee5\u8003\u8651\u91cd\u8bd5\nkubectl -n kube-system rollout restart deploy/tiller-deploy\n\n# \u5f53\u524d\u7248\u672c - \u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef - \u5982\u679c\u90fd\u6709\u8f93\u51fa\u5219\u8bf4\u660e\u90e8\u7f72\u6210\u529f\nhelm version\n")),(0,a.kt)("h2",{id:"helm-2-tiller"},"Helm 2 Tiller"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"v2 ",(0,a.kt)("a",{parentName:"li",href:"https://v2.helm.sh/"},"\u6587\u6863")),(0,a.kt)("li",{parentName:"ul"},"\u6709\u4e9b\u73af\u5883\u8fd8\u662f\u4f7f\u7528\u7684 Tiller"),(0,a.kt)("li",{parentName:"ul"},"\u5168\u5c40\u53c2\u6570",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--debug")," \u8f93\u51fa\u66f4\u591a\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--home")," HELM_HOME \u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"$HOME/.helm/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--host")," HELM_HOST \u4f8b\u5982 \u4f7f\u7528\u672c\u5730 export HELM_HOST=:44134"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--kube-context")," Kube \u7684\u4e0a\u4e0b\u6587"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--kubeconfig")," \u914d\u7f6e\u8def\u5f84 KUBECONFIG \u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"$HOME/.kube/config")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--tiller-namespace")," \u4f7f\u7528\u7684\u7a7a\u95f4 - \u9ed8\u8ba4 kube-system - \u53ef\u4f7f\u7528\u73af\u5883\u53d8\u91cf TILLER_NAMESPACE")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# helm init - \u521d\u59cb\u5316\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\n# -c --client-only \u53ea\u521d\u59cb\u5316\u5ba2\u6237\u7aef\n\n# \u5b89\u88c5\u53ef\u6307\u5b9a\u8d26\u53f7 - \u9700\u8981 cluster-admin \u6743\u9650\nhelm init --service-account $tiller_account\n\n# TLS \u5b89\u88c5\n# gitlab \u7684\u5b89\u88c5\u547d\u4ee4\nhelm init --tiller-tls --tiller-tls-verify --tls-ca-cert /data/helm/helm/config/ca.pem --tiller-tls-cert /data/helm/helm/config/cert.pem --tiller-tls-key /data/helm/helm/config/key.pem --service-account tiller\n\n# \u67e5\u770b helm \u76f8\u5173\u8d44\u6e90\nkubetcl get all -l app=helm\n\n# \u5220\u9664/\u5378\u8f7d\nhelm reset\n# \u66b4\u529b\nkubetcl delete all -l app=helm\n")),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"error-could-not-find-a-ready-tiller-pod"},"Error: could not find a ready tiller pod"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u786e\u4fdd\u6709\u5de5\u4f5c\u7684 tiller-deploy\n# \u4e5f\u53ef\u80fd\u4e0d\u662f\u4f7f\u7528\u7684 kube-system \u4e0b\u7684 tiller \u9700\u8981\u6ce8\u610f\nkubectl -n kube-system get po \uff5c grep tiller-deploy\n")),(0,a.kt)("h3",{id:"helm-\u547d\u4ee4-hang-\u4f4f"},"Helm \u547d\u4ee4 Hang \u4f4f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u822c\u662f\u7f51\u7edc\u6216\u8005 CA \u7684\u95ee\u9898\u6216\u8005\u8d26\u53f7\u95ee\u9898"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u96c6\u7fa4\u90e8\u7f72\u4e86\u591a\u4e2a tiller \u53ef\u80fd\u4f1a\u6709\u95ee\u9898"),(0,a.kt)("li",{parentName:"ul"},"44134/44135")))}s.isMDXComponent=!0}}]);