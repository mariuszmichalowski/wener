(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{203:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var r=a(2),n=a(7),l=(a(0),a(749)),c={title:"ArgoCD"},b={unversionedId:"devops/kubernetes/app/argocd",id:"devops/kubernetes/app/argocd",isDocsHomePage:!1,title:"ArgoCD",description:"ArgoCD",source:"@site/notes/devops/kubernetes/app/argocd.md",slug:"/devops/kubernetes/app/argocd",permalink:"/notes/devops/kubernetes/app/argocd",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/app/argocd.md",version:"current"},i=[{value:"\u5e94\u7528\u53d1\u73b0",id:"\u5e94\u7528\u53d1\u73b0",children:[]},{value:"\u7ec4\u4ef6",id:"\u7ec4\u4ef6",children:[]},{value:"\u5bc6\u94a5\u7ba1\u7406",id:"\u5bc6\u94a5\u7ba1\u7406",children:[]},{value:"\u547d\u4ee4\u884c",id:"\u547d\u4ee4\u884c",children:[]},{value:"\u591a\u96c6\u7fa4",id:"\u591a\u96c6\u7fa4",children:[]},{value:"\u9879\u76ee",id:"\u9879\u76ee",children:[]},{value:"\u540c\u6b65\u9009\u9879",id:"\u540c\u6b65\u9009\u9879",children:[]},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[{value:"argocd-cm",id:"argocd-cm",children:[]}]},{value:"ArgoCD \u7ba1\u7406 ArgoCD",id:"argocd-\u7ba1\u7406-argocd",children:[]},{value:"the server could not find the requested resource",id:"the-server-could-not-find-the-requested-resource",children:[]}],o={rightToc:i};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"argocd"},"ArgoCD"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u58f0\u660e\u5f0f K8S \u6301\u7eed\u96c6\u6210/CD \u670d\u52a1/\u63a7\u5236\u5668"),Object(l.b)("li",{parentName:"ul"},"GitOps"),Object(l.b)("li",{parentName:"ul"},"\u6709 ",Object(l.b)("strong",{parentName:"li"},"\u76f4\u89c2\u7684")," WebUI \u53ef\u4f9b\u7ba1\u7406\u548c\u95ee\u9898\u6392\u67e5"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u591a\u96c6\u7fa4\u3001\u7edf\u4e00\u767b\u5f55\u3001\u6743\u9650\u7ba1\u7406"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/argoproj/argo-cd"}),"argoproj/argo-cd"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://cd.apps.argoproj.io/"}),"DEMO")))),Object(l.b)("li",{parentName:"ul"},"\u7279\u6027",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u81ea\u52a8\u5316\u90e8\u7f72\u5e94\u7528\u5230\u6307\u5b9a\u73af\u5883"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u591a\u79cd\u914d\u7f6e - Kustomize, Helm, Ksonnet, Jsonnet, plain-YAML"),Object(l.b)("li",{parentName:"ul"},"\u591a\u96c6\u7fa4",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u65e0\u9700\u90e8\u7f72 Agent"))),Object(l.b)("li",{parentName:"ul"},"SSO - OIDC, OAuth2, LDAP, SAML 2.0, GitHub, GitLab, Microsoft, LinkedIn"),Object(l.b)("li",{parentName:"ul"},"\u591a\u79df\u6237\uff0cRBAC"),Object(l.b)("li",{parentName:"ul"},"\u56de\u6eda"),Object(l.b)("li",{parentName:"ul"},"\u5e94\u7528\u8d44\u6e90\u5065\u5eb7\u72b6\u6001"),Object(l.b)("li",{parentName:"ul"},"\u68c0\u6d4b\u672a\u540c\u6b65\u60c5\u51b5"),Object(l.b)("li",{parentName:"ul"},"\u81ea\u52a8\u6216\u624b\u52a8\u540c\u6b65"),Object(l.b)("li",{parentName:"ul"},"Web UI \u67e5\u770b\u5b9e\u65f6\u60c5\u51b5\u548c\u5e94\u7528\u6d3b\u52a8"),Object(l.b)("li",{parentName:"ul"},"CLI \u7528\u4e8e CI \u96c6\u6210"),Object(l.b)("li",{parentName:"ul"},"Webhook - GitHub, BitBucket, GitLab"),Object(l.b)("li",{parentName:"ul"},"\u7528\u4e8e\u81ea\u52a8\u5316\u7684 Access tokens"),Object(l.b)("li",{parentName:"ul"},"PreSync, Sync, PostSync \u94a9\u5b50\u652f\u6301\u590d\u6742\u5e94\u7528 - blue/green & canary upgrades"),Object(l.b)("li",{parentName:"ul"},"Audit trails for application events and API calls"),Object(l.b)("li",{parentName:"ul"},"Prometheus metrics"),Object(l.b)("li",{parentName:"ul"},"Parameter overrides for overriding ksonnet/helm parameters in Git"))),Object(l.b)("li",{parentName:"ul"},"\u5e94\u7528\u5b9a\u4e49",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Kustomize"),Object(l.b)("li",{parentName:"ul"},"Helm"),Object(l.b)("li",{parentName:"ul"},"A directory of YAML/JSON/Jsonnet manifests, including Jsonnet"),Object(l.b)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u914d\u7f6e\u7ba1\u7406\u5de5\u5177"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("del",{parentName:"li"},"Ksonnet")))),Object(l.b)("li",{parentName:"ul"},"\u7f3a\u9677",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"App of Apps \u652f\u6301\u4e0d\u597d",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"issues ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/argoproj/argo-cd/labels/component%3Aapplications-set"}),"label:applications-set")),Object(l.b)("li",{parentName:"ul"},"\u5c1d\u8bd5\u89e3\u51b3 ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/argoproj-labs/applicationset"}),"argoproj-labs/applicationset")))),Object(l.b)("li",{parentName:"ul"},"\u591a\u96c6\u7fa4\u652f\u6301\u8f83\u5f31 - fleedcd \u76f8\u5bf9\u505a\u7684\u66f4\u597d",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4e00\u4e2a App \u53ea\u80fd\u6307\u5b9a\u4e00\u4e2a\u96c6\u7fa4 ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/argoproj/argo-cd/issues/1673"}),"#1673")),Object(l.b)("li",{parentName:"ul"},"\u65e0 agent, \u65e0 crd \u5b9a\u4e49 - app of apps \u53ea\u80fd\u5728 argocd \u6240\u5728\u96c6\u7fa4",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u56e0\u4e3a\u76ee\u6807\u96c6\u7fa4\u6ca1\u6709 argocd \u56e0\u6b64\u8bbe\u7f6e application \u65e0\u6548"))),Object(l.b)("li",{parentName:"ul"},"\u56e0\u4e3a\u76f8\u540c\u5e94\u7528\u8981\u653e\u5728\u540c\u4e00\u4e2a argocd \u7a7a\u95f4\uff0c\u56e0\u6b64\u9700\u8981\u540d\u5b57\u524d\u7f00\uff0c\u4f8b\u5982 ",Object(l.b)("inlineCode",{parentName:"li"},"dev-cert-manager")),Object(l.b)("li",{parentName:"ul"},"\u56e0\u4e3a\u52a0\u4e86\u540d\u5b57\u524d\u7f00\uff0c\u8981\u6ce8\u610f\u6240\u6709\u7684 helm \u6700\u597d\u6307\u5b9a\u56fa\u5b9a\u7684 releaseName, \u4f8b\u5982 cert-manager",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u590d\u5199 releaseName \u4f1a\u6709",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://argoproj.github.io/argo-cd/user-guide/helm/#helm-release-name"}),"\u95ee\u9898"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"argocd \u4f9d\u8d56 ",Object(l.b)("inlineCode",{parentName:"li"},"app.kubernetes.io/instance")," \u5339\u914d\u5e94\u7528"),Object(l.b)("li",{parentName:"ul"},"\u590d\u5199\u53ef\u80fd\u4f1a\u4fee\u6539\u8be5 label \u5bfc\u81f4\u65e0\u6cd5\u5339\u914d\u90e8\u5206\u8d44\u6e90"),Object(l.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u5728 ",Object(l.b)("inlineCode",{parentName:"li"},"argocd-cm.yaml")," \u4fee\u6539\u914d\u7f6e ",Object(l.b)("inlineCode",{parentName:"li"},"application.instanceLabelKey")))))),Object(l.b)("li",{parentName:"ul"},"\u8de8\u96c6\u7fa4\u5e94\u7528\u65e0\u6cd5\u5220\u9664\u8d44\u6e90")))))),Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(l.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(l.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("ul",{parentName:"div"},Object(l.b)("li",{parentName:"ul"},"\u5e94\u7528\u540d\u5b57\u8981\u6c42\u5168\u5c40\u552f\u4e00",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5e94\u7528\u5c31\u662f helm \u7684 release \u540d\u5b57 - helm \u4e0d\u8981\u6c42\u5168\u5c40\u552f\u4e00\uff0c\u56e0\u6b64\u8fc1\u79fb\u8fc7\u7a0b\u53ef\u80fd\u51b2\u7a81"))),Object(l.b)("li",{parentName:"ul"},"\u52a1\u5fc5\u4fee\u6539 ",Object(l.b)("inlineCode",{parentName:"li"},"application.instanceLabelKey")," \u914d\u7f6e - \u5426\u5219 helm \u81ea\u5b9a\u4e49 releaseName \u4f1a\u6709\u95ee\u9898",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4f8b\u5982\u4fee\u6539\u4e3a ",Object(l.b)("inlineCode",{parentName:"li"},"app.kubernetes.io/argocd-instance")),Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4e0e helm \u5e38\u7528\u51b2\u7a81 ",Object(l.b)("inlineCode",{parentName:"li"},"app.kubernetes.io/instance")))),Object(l.b)("li",{parentName:"ul"},"Kustomize \u4e0d\u53ef\u4ee5\u540e\u5904\u7406 Helm",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5982\u679c\u4e00\u5b9a\u9700\u8981\uff0c\u53ef\u4ee5\u8003\u8651",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://dev.to/camptocamp-ops/use-kustomize-to-post-render-helm-charts-in-argocd-2ml6"}),"\u63d2\u4ef6")),Object(l.b)("li",{parentName:"ul"},"\u6216\u8005\u9884\u5148\u751f\u6210\u597d"))),Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528\u7a33\u5b9a\u7684 Git \u670d\u52a1",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u907f\u514d\u4f7f\u7528 Gitlab, Github - \u56e0\u4e3a\u8bbf\u95ee\u4e0d\u7a33\u5b9a\u4f1a\u5bfc\u81f4 argocd \u5f88\u6162\u6216\u8005\u540c\u6b65\u72b6\u6001\u4e0d\u53ef\u77e5"),Object(l.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u8003\u8651\u96c6\u7fa4\u5185\u90e8\u7f72 gitea \u7136\u540e\u955c\u50cf\u5916\u90e8\u4ed3\u5e93 - \u914d\u7f6e\u597d Webhook \u89e6\u53d1\u53ef\u5b9e\u73b0\u79d2\u7ea7\u540c\u6b65"))),Object(l.b)("li",{parentName:"ul"},"\u76f4\u63a5\u5e94\u7528 manifest \u5347\u7ea7\u53ef\u80fd\u5bfc\u81f4\u914d\u7f6e\u4e22\u5931 ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/argoproj/argo-cd/issues/3537"}),"#3537"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u53ef\u80fd\u4f1a\u8986\u76d6 argocd-cm")))))),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# \u5b89\u88c5\nkubectl create namespace argocd\nkubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml\n# HA\n# kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/ha/install.yaml\n\n# \u8f6c\u53d1\u5230\u672c\u5730\u76f4\u63a5\u8bbf\u95ee\n# https://localhost:8080\nkubectl port-forward svc/argocd-server -n argocd 8443:443\n# \u8d26\u53f7 admin\n# \u5bc6\u7801\nkubectl get pods -n argocd -l app.kubernetes.io/name=argocd-server -o name | cut -d'/' -f 2\n\n# argocd \u547d\u4ee4\u884c\u5de5\u5177\nbrew install argocd\n# \u767b\u9646\nargocd login localhost:8080\n\n# \u5982\u679c\u914d\u7f6e\u4e86 ingress \u9700\u8981 grpc-web \u8bbf\u95ee\n# \u9664\u975e\u5f00\u542f ssl-paththrough - nginx \u5f00\u542f\u5bf9\u6027\u80fd\u5f71\u54cd\u5f88\u5927\nargocd login argocd.my.lan:443 --grpc-web\n")),Object(l.b)("h2",{id:"\u5e94\u7528\u53d1\u73b0"},"\u5e94\u7528\u53d1\u73b0"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u76ee\u524d\u4e0d\u652f\u6301\uff0c\u4f7f\u7528 app-in-app \u6a21\u5f0f"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://argoproj.github.io/argo-cd/operator-manual/cluster-bootstrapping/"}),"Cluster Bootstrapping")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/argoproj/argo-cd/issues/1766"}),"#1766")," - Application auto-discovery"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/argoproj-labs/applicationset"}),"argoproj-labs/applicationset"))),Object(l.b)("h2",{id:"\u7ec4\u4ef6"},"\u7ec4\u4ef6"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"argocd-server",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"ArgoCD API server"))),Object(l.b)("li",{parentName:"ul"},"argocd-application-controller",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6301\u7eed\u5065\u5eb7\u8fd0\u884c\u7684\u5e94\u7528\uff0c\u5bf9\u6bd4\u72b6\u6001"),Object(l.b)("li",{parentName:"ul"},"sts \u53ef\u90e8\u7f72\u591a\u4e2a"))),Object(l.b)("li",{parentName:"ul"},"argocd-repo-server",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u7ba1\u7406 Git \u672c\u5730\u7f13\u5b58\uff0c\u7ba1\u7406\u5e94\u7528\u6e05\u5355")))),Object(l.b)("h2",{id:"\u5bc6\u94a5\u7ba1\u7406"},"\u5bc6\u94a5\u7ba1\u7406"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u95ee\u9898\u6839\u6e90",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u56e0\u4e3a GitOps \u8981\u6c42\u6240\u6709\u5185\u5bb9\u90fd\u5728\u4ed3\u5e93\uff0c\u56e0\u6b64\u5bc6\u94a5\u4e5f\u9700\u8981\u5b58\u50a8\u5728\u4ed3\u5e93"),Object(l.b)("li",{parentName:"ul"},"\u51fa\u4e8e\u5b89\u5168\u8003\u8651\u4e0d\u80fd\u76f4\u63a5\u653e\u660e\u6587\u7684 Secret\uff0c\u56e0\u6b64\u9700\u8981\u66f2\u7ebf\u63d0\u4f9b Secret"),Object(l.b)("li",{parentName:"ul"},"\u90e8\u5206\u8981\u6c42\u5728 helm values.yaml \u63d0\u4f9b\u5bc6\u94a5\u7684\u8fd8\u9700\u8981\u5148\u751f\u6210 chart \u7136\u540e\u4fee\u6539\u4e3a\u53e6\u5916\u7684\u65b9\u5f0f\u63d0\u4f9b\u5bc6\u94a5"))),Object(l.b)("li",{parentName:"ul"},"\u65b9\u6848",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/bitnami-labs/sealed-secrets"}),"bitnami-labs/sealed-secrets"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u751f\u6210\u4e0d\u53ef\u9006\u7684\u5bc6\u94a5\u5b58\u50a8\u5728\u4ed3\u5e93\uff0c\u63a7\u5236\u5668\u751f\u6210\u5bf9\u5e94 Secret - \u975e\u5bf9\u79f0\u52a0\u5bc6"),Object(l.b)("li",{parentName:"ul"},"\u6700\u7b80\u5355\u5b9e\u7528"))))),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://argoproj.github.io/argo-cd/operator-manual/secret-management/"}),"Secret Management"))))),Object(l.b)("h2",{id:"\u547d\u4ee4\u884c"},"\u547d\u4ee4\u884c"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://argoproj.github.io/argo-cd/user-guide/commands/argocd/"}),"https://argoproj.github.io/argo-cd/user-guide/commands/argocd/")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"~/.argocd/config"))),Object(l.b)("h2",{id:"\u591a\u96c6\u7fa4"},"\u591a\u96c6\u7fa4"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# kubeconfig \u7684 test \u4e0a\u4e0b\u6587\nargocd cluster add test\nargocd cluster list\n# \u90e8\u7f72\u5e94\u7528\u540e connectionState \u624d\u4f1a\u662f\u6210\u529f - \u9ed8\u8ba4\u76f8\u5f53\u4e8e\u65e0\u94fe\u63a5\nargocd cluster get 'https://192.168.1.2:6443'\n")),Object(l.b)("h2",{id:"\u9879\u76ee"},"\u9879\u76ee"),Object(l.b)("p",null,"\u5e94\u7528\u903b\u8f91\u5206\u7ec4"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"what - \u9650\u5b9a\u90e8\u7f72\u5185\u5bb9 - \u4ed3\u5e93"),Object(l.b)("li",{parentName:"ul"},"where - \u9650\u5b9a\u96c6\u7fa4\u548c\u547d\u540d\u7a7a\u95f4"),Object(l.b)("li",{parentName:"ul"},"what kind - API Kind"),Object(l.b)("li",{parentName:"ul"},"\u89d2\u8272 - RBAC")),Object(l.b)("h2",{id:"\u540c\u6b65\u9009\u9879"},"\u540c\u6b65\u9009\u9879"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"metadata:\n  annotations:\n    argocd.argoproj.io/sync-options: Prune=false\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"syncPolicy:\n  automated:\n    prune: true\n  syncOptions:\n  # \u53ea\u540c\u6b65 out of sync \u8d44\u6e90 - \u9ed8\u8ba4\u5168\u90e8\uff0c\u4f1a\u5bf9\u670d\u52a1\u7aef\u5e26\u6765\u538b\u529b\n  - ApplyOutOfSyncOnly=true\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"options"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"desc"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Prune=false"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u4e0d\u5220\u9664\u8d44\u6e90")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Validate=false"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"kubectl --validate=false")," - \u4e0d\u6821\u9a8c YAML")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"SkipDryRunOnMissingResource=true"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u65b0\u589e CRD \u65f6\u907f\u514d DryRun \u5931\u8d25")))),Object(l.b)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://argoproj.github.io/argo-cd/operator-manual/argocd-cm.yaml"}),"argocd-cm.yaml"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u57fa\u7840\u914d\u7f6e"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://argoproj.github.io/argo-cd/operator-manual/argocd-secret.yaml"}),"argocd-secret.yaml"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Password, Certificates, Signing Key"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://argoproj.github.io/argo-cd/operator-manual/argocd-rbac-cm.yaml"}),"argocd-rbac-cm.yaml")),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://argoproj.github.io/argo-cd/operator-manual/declarative-setup/"}),"Declarative Setup"))))),Object(l.b)("h3",{id:"argocd-cm"},"argocd-cm"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: argocd-cm\n  namespace: argocd\n  labels:\n    app.kubernetes.io/name: argocd-cm\n    app.kubernetes.io/part-of: argocd\ndata:\nga.trackingid: ""\nrepositories: |\n  # \u4ed3\u5e93\u5217\u8868\n\n# \u7528\u6765\u5339\u914d Application - \u5982\u679c\u4e0d\u4fee\u6539\u4f1a\u5bfc\u81f4 helm \u81ea\u5b9a\u4e49 releaseName \u6709\u95ee\u9898\napplication.instanceLabelKey: app.kubernetes.io/instance\n# \u5efa\u8bae\u4fee\u6539\n# application.instanceLabelKey: app.kubernetes.io/argocd-instance\n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"repositories")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"# \u5b9a\u4e49 Git \u4ed3\u5e93\u8d26\u53f7\u5bc6\u7801\n- passwordSecret:\n    key: password\n    name: repo-12345\n  usernameSecret:\n    key: username\n    name: repo-12345\n  type: git\n  url: https://gitlab.com/wener/repo.git\n# \u5b9a\u4e49 Git \u4ed3\u5e93 SSH \u5bc6\u94a5\n- insecure: true\n  insecureIgnoreHostKey: true\n  sshPrivateKeySecret:\n    key: sshPrivateKey\n    name: repo-1234\n  type: git\n  url: git@gitea-ssh.gitea:dev/dev-cluster\n")),Object(l.b)("h2",{id:"argocd-\u7ba1\u7406-argocd"},"ArgoCD \u7ba1\u7406 ArgoCD"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://argoproj.github.io/argo-cd/operator-manual/declarative-setup/#manage-argo-cd-using-argo-cd"}),"Manage Argo CD Using Argo CD")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/argoproj/argoproj-deployments/tree/master/argocd"}),"https://github.com/argoproj/argoproj-deployments/tree/master/argocd"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"kustomization.yaml")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"bases:\n- github.com/argoproj/argo-cd//manifests/cluster-install?ref=v1.0.1\n\n# additional resources like ingress rules, cluster and repository secrets.\nresources:\n- clusters-secrets.yaml\n- repos-secrets.yaml\n\n# \u4fee\u6539\u914d\u7f6e\npatchesStrategicMerge:\n- overlays/argo-cd-cm.yaml\n")),Object(l.b)("h1",{id:"faq"},"FAQ"),Object(l.b)("h2",{id:"the-server-could-not-find-the-requested-resource"},"the server could not find the requested resource"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"CRD \u5b9a\u4e49\u4e0d\u5b58\u5728"),Object(l.b)("li",{parentName:"ul"},"Namespace \u4e0d\u5b58\u5728")),Object(l.b)("p",null,"\u7279\u6b8a\u60c5\u51b5\u53ef\u4ee5\u8003\u8651\u8df3\u8fc7"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"metadata:\n  annotations:\n    argocd.argoproj.io/sync-options: SkipDryRunOnMissingResource=true\n")))}p.isMDXComponent=!0},749:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),p=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},u=function(e){var t=p(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=p(a),s=r,j=u["".concat(c,".").concat(s)]||u[s]||m[s]||l;return a?n.a.createElement(j,b(b({ref:t},o),{},{components:a})):n.a.createElement(j,b({ref:t},o))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,c=new Array(l);c[0]=s;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:r,c[1]=b;for(var o=2;o<l;o++)c[o]=a[o];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);