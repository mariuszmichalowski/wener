"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[70830],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return k}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),k=n,g=m["".concat(p,".").concat(k)]||m[k]||s[k]||l;return r?a.createElement(g,o(o({ref:t},c),{},{components:r})):a.createElement(g,o({ref:t},c))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},63313:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var a=r(87462),n=r(63366),l=(r(67294),r(3905)),o=["components"],i={title:"ArgoCD \u7248\u672c",tags:["Version"]},p=void 0,u={unversionedId:"devops/kubernetes/app/argo-cd-version",id:"devops/kubernetes/app/argo-cd-version",title:"ArgoCD \u7248\u672c",description:"- \u955c\u50cf argoproj/argocd:v1.8.4",source:"@site/notes/devops/kubernetes/app/argo-cd-version.md",sourceDirName:"devops/kubernetes/app",slug:"/devops/kubernetes/app/argo-cd-version",permalink:"/notes/devops/kubernetes/app/argo-cd-version",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/app/argo-cd-version.md",tags:[{label:"Version",permalink:"/notes/tags/version"}],version:"current",frontMatter:{title:"ArgoCD \u7248\u672c",tags:["Version"]},sidebar:"docs",previous:{title:"ArgoCD",permalink:"/notes/devops/kubernetes/app/argo-cd"},next:{title:"Argo Workflow",permalink:"/notes/devops/kubernetes/app/argo-workflow"}},c=[{value:"2.2",id:"22",children:[],level:2},{value:"2.1",id:"21",children:[],level:2},{value:"2.0",id:"20",children:[],level:2},{value:"1.8",id:"18",children:[],level:2}],s={toc:c};function m(e){var t=e.components,r=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u955c\u50cf argoproj/argocd:v1.8.4",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u8003\u8651\u63d0\u524d\u62c9\u597d"))),(0,l.kt)("li",{parentName:"ul"},"2.0 \u955c\u50cf quay.io/argoproj/argocd")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5b89\u88c5\u548c\u5347\u7ea7\u662f\u4e00\u6837\u7684 - \u4ed3\u5e93\u7684 stable tag \u603b\u662f\u6307\u5411\u6700\u65b0 stable \u7248\u672c\n# \u5347\u7ea7\u6ce8\u610f\u5904\u7406\u597d argocd-cm\n# \u666e\u901a\nkubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml\n# HA\nkubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/ha/install.yaml\n")),(0,l.kt)("h2",{id:"22"},"2.2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ed3\u5e93\u53ef\u4ee5\u6309\u9700\u5b9a\u4e49\uff0c\u4e0d\u9700\u8981\u9884\u5148\u5b9a\u4e49 - \u81ea\u670d\u52a1"),(0,l.kt)("li",{parentName:"ul"},"Config Management Plugins V2"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u4f7f\u7528 annotation argocd.argoproj.io/tracking-id \u8ddf\u8e2a\u8d44\u6e90",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e4b\u524d\u4f7f\u7528 label app.kubernetes.io/instance \u5bb9\u6613\u51b2\u7a81"))),(0,l.kt)("li",{parentName:"ul"},"argocd-cmp-server",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ArgoCD ConfigManagementPlugin Server"),(0,l.kt)("li",{parentName:"ul"},"sidecar container in reposerver deployment"),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u63d2\u4ef6\u7ba1\u7406\u80fd\u529b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"apiVersion: argoproj.io/v1alpha1"),(0,l.kt)("li",{parentName:"ul"},"kind: ConfigManagementPlugin"))))),(0,l.kt)("li",{parentName:"ul"},"Helm v3.7.1 - pass credentials, OCI"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u9650\u5b9a cluster,repository \u5230 project")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ConfigMap\ndata:\n  # \u9ed8\u8ba4 label - \u652f\u6301 annotation+label, annotation\n  application.resourceTrackingMethod: annotation\n")),(0,l.kt)("h2",{id:"21"},"2.1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u62c6\u5206 Argo CD Core",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u96c6\u6210 RBAC \u548c\u6743\u9650"))),(0,l.kt)("li",{parentName:"ul"},"\u589e\u52a0 Repo \u7f13\u5b58\u786e\u4fdd\u4e00\u4e2a revision \u53ea\u8bf7\u6c42\u4e00\u6b21 git - \u63d0\u9ad8\u6027\u80fd\u548c\u901f\u5ea6"),(0,l.kt)("li",{parentName:"ul"},"argocd-cm \u652f\u6301\u5f15\u7528 secret \u8fdb\u884c\u914d\u7f6e",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://argoproj.github.io/argo-cd/operator-manual/argocd-cmd-params-cm.yaml"},"argocd-cmd-params-cm.yaml")))),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u6bd4\u5ffd\u7565\u652f\u6301 jq \u8def\u5f84")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u5355\u4e2a\u5e94\u7528\nspec:\n  ignoreDifferences:\n    - group: apps\n      kind: Deployment\n      jqPathExpressions:\n        - .spec.template.spec.initContainers[] | select(.name == \"injected-init-container\")\n# \u5168\u5c40\u914d\u7f6e\ndata:\n  resource.customizations.ignoreDifferences.admissionregistration.k8s.io_MutatingWebhookConfiguration: |\n    jqPathExpressions:\n    - '.webhooks[]?.clientConfig.caBundle'\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 Secret Repositor - \u4e0d\u518d\u9700\u8981\u4fee\u6539 argocd-cm")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  annotations:\n    managed-by: argocd.argoproj.io\n  labels:\n    argocd.argoproj.io/secret-type: repository\n  name: my-repo-secret\nstringData:\n  username: my-username\n  password: my-password\n  type: git\n  url: https://github.com/argoproj/argocd-example-apps\n")),(0,l.kt)("h2",{id:"20"},"2.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Pods View",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u65b0\u589e Pod \u89c6\u56fe - \u53ef\u67e5\u770b Pod \u5206\u5e03\u60c5\u51b5"),(0,l.kt)("li",{parentName:"ul"},"Pod \u975e\u5e38\u591a\u7684\u65f6\u5019\u5f88\u6709\u7528"))),(0,l.kt)("li",{parentName:"ul"},"Logs Viewer",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u5206\u9875\u3001\u8fc7\u6ee4\u3001Dark \u6a21\u5f0f"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u805a\u5408\u591a\u4e2a Pod \u65e5\u5fd7 - Deployment\u3001ReplicaSet\u3001STS"),(0,l.kt)("li",{parentName:"ul"},"\u547d\u4ee4\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"rgocd app logs")))),(0,l.kt)("li",{parentName:"ul"},"\u65b0\u589e Banner",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ui.bannercontent"),(0,l.kt)("li",{parentName:"ul"},"ui.bannerurl"))),(0,l.kt)("li",{parentName:"ul"},"PrunePropagationPolicy=background",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u540c\u6b65\u65f6\u540e\u53f0\u6e05\u9664\u81ea\u613f - \u73b0\u5728\u7684\u903b\u8f91\u53ef\u80fd\u5bfc\u81f4 delet \u5361\u6b7b"),(0,l.kt)("li",{parentName:"ul"},"Foreground - k8s \u5fc5\u987b\u5220\u9664\u6240\u6709 child \u8d44\u6e90\u624d\u80fd\u5220\u9664\u8d44\u6e90\u672c\u8eab"))),(0,l.kt)("li",{parentName:"ul"},"finalizer resources-finalizer.argocd.argoproj.io:background",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5220\u9664\u5e94\u7528\u65f6\u540e\u53f0\u5904\u7406"))),(0,l.kt)("li",{parentName:"ul"},"ApplyOutOfSyncOnly=true",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ea\u540c\u6b65\u4e0d\u540c\u6b65\u8d44\u6e90"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u662f kubectl apply \u6240\u6709 - \u6162"))),(0,l.kt)("li",{parentName:"ul"},"PruneLast=true",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5728\u540c\u6b65\u6700\u540e\u6e05\u9664\u8d44\u6e90"),(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 \u6700\u540e\u5220\u9664\u914d\u7f6e\uff0c\u5148\u6e05\u7406 Pod \u7b49\u8d44\u6e90"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u72ec\u7acb\u8d44\u6e90\u914d\u7f6e - argocd.argoproj.io/sync-options"))),(0,l.kt)("li",{parentName:"ul"},"\u5065\u5eb7\u68c0\u67e5\u652f\u6301",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"sealed-secrets - \u4e4b\u524d\u5982\u679c secret \u9519\u8bef\u65e0\u6cd5\u53d1\u73b0"),(0,l.kt)("li",{parentName:"ul"},"kubernetes-external-secrets"),(0,l.kt)("li",{parentName:"ul"},"strimzi"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/argoproj/argo-cd/releases/tag/v2.0.0"},"v2.0.0"))),(0,l.kt)("h2",{id:"18"},"1.8"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"mono-repository \u5904\u7406\u6548\u7387\u589e\u5f3a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u76f8\u540c commit \u5e76\u884c\u5904\u7406 - \u4e4b\u524d\u662f\u6bcf\u4e2a\u90fd\u8981\u5904\u7406\u4e00\u904d"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"argocd.argoproj.io/manifest-generate-paths")),(0,l.kt)("li",{parentName:"ul"},"argocd-application-controller \u7ec4\u4ef6\u652f\u6301\u6c34\u5e73\u6269\u5bb9",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u66f4\u597d\u7ba1\u7406\u591a\u96c6\u7fa4"),(0,l.kt)("li",{parentName:"ul"},"\u26a0\ufe0f depolyment -> statuefulset",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5347\u7ea7\u540e\u9700\u8981\u624b\u52a8\u5220\u9664 ",(0,l.kt)("inlineCode",{parentName:"li"},"kubectl -n argocd delete deploy argocd-application-controller")))))),(0,l.kt)("li",{parentName:"ul"},"\u5b50\u5e94\u7528\u5065\u5eb7\u72b6\u6001\u4e0d\u5f71\u54cd\u7236\u5e94\u7528"),(0,l.kt)("li",{parentName:"ul"},"\u5168\u5c40 Project"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://argoproj.github.io/argo-cd/operator-manual/upgrading/1.7-1.8/"},"v1.7 to 1.8"))))}m.isMDXComponent=!0}}]);