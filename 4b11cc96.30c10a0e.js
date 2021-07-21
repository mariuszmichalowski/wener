(window.webpackJsonp=window.webpackJsonp||[]).push([[313],{1151:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,g=u["".concat(p,".").concat(m)]||u[m]||b[m]||o;return n?a.a.createElement(g,i(i({ref:t},l),{},{components:n})):a.a.createElement(g,i({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var l=2;l<o;l++)p[l]=n[l];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},387:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),o=(n(0),n(1151)),p={title:"ArgoCD ApplicationSet"},i={unversionedId:"devops/kubernetes/app/argocd-applicationset",id:"devops/kubernetes/app/argocd-applicationset",isDocsHomePage:!1,title:"ArgoCD ApplicationSet",description:"- argoproj-labs/applicationset",source:"@site/notes/devops/kubernetes/app/argocd-applicationset.md",slug:"/devops/kubernetes/app/argocd-applicationset",permalink:"/notes/devops/kubernetes/app/argocd-applicationset",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/app/argocd-applicationset.md",version:"current",sidebar:"docs",previous:{title:"Argo Workflow",permalink:"/notes/devops/kubernetes/app/argo-workflow"},next:{title:"ArgoCD Image Updater",permalink:"/notes/devops/kubernetes/app/argocd-image-updater"}},c=[],l={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/argoproj-labs/applicationset"},"argoproj-labs/applicationset"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u89e3\u51b3\u73b0\u5728 ArgoCD app of app \u95ee\u9898"),Object(o.b)("li",{parentName:"ul"},"ApplicationSet CRD"),Object(o.b)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u591a\u96c6\u7fa4\u591a\u79df\u6237\uff0c\u9002\u7528\u4e8e monorepo \u573a\u666f"),Object(o.b)("li",{parentName:"ul"},"\u57fa\u4e8e\u6a21\u7248\u751f\u6210\u64cd\u4f5c Application"))),Object(o.b)("li",{parentName:"ul"},"generator",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"list"),Object(o.b)("li",{parentName:"ul"},"cluster"),Object(o.b)("li",{parentName:"ul"},"git")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# \u5b89\u88c5 applicationset - \u8981\u786e\u4fdd\u5148\u5b89\u88c5\u4e86 argocd\nkubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj-labs/applicationset/master/manifests/install.yaml\n\n# \u9ed8\u8ba4\u5220\u9664 ApplicationSet \u4f1a\u5220\u9664\u751f\u6210\u7684 Application\n# \u4e0d\u7ea7\u8054\u5220\u9664\nkubectl delete ApplicationSet <NAME> --cascade=false\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: argoproj.io/v1alpha1\nkind: ApplicationSet\nmetadata:\n name: guestbook\nspec:\n  generators:\n  # List \u751f\u6210\uff0c\u53d8\u91cf\u66ff\u4ee3\n  - list:\n     elements:\n     - cluster: engineering-dev\n       url: https://kubernetes.default.svc\n    # generator \u4e5f\u53ef\u4ee5\u5b9a\u4e49 \u6a21\u677f - \u4f18\u5148 - \u4f1a\u8fdb\u884c\u5408\u5e76\n    template:\n  # \u57fa\u4e8e\u96c6\u7fa4\u751f\u6210\n  # secret argocd.argoproj.io/secret-type=cluster\n  # \u80fd\u4f7f\u7528 secret \u91cc\u7684\u53d8\u91cf\uff0c\u4e3b\u8981\u662f server \u548c name\n  - clusters:\n      # \u7b5b\u9009\u96c6\u7fa4 - \u9ed8\u8ba4\u6240\u6709\n      selector:\n        # \u5339\u914d \u96c6\u7fa4 secret \u7684 label\n        matchLabels:\n          staging: true\n  # \u57fa\u4e8e git \u751f\u6210\n  - git:\n      repoURL: https://github.com/argoproj-labs/applicationset.git\n      revision: HEAD\n      directories:\n      # \u57fa\u4e8e\u76ee\u5f55\u751f\u6210\n      # \u53ef\u7528\u53d8\u91cf path, path.basename\n      - path: examples/git-generator-directory/cluster-addons/*\n      # \u57fa\u4e8e\u6587\u4ef6\u751f\u6210\n      # \u652f\u6301\u89e3\u6790 JSON,YAML(0.2+)\n      # \u53ef\u4ee5\u4f7f\u7528 json \u91cc\u5b9a\u4e49\u7684\u6570\u636e\u4f5c\u4e3a\u53d8\u91cf\n      - path: \"examples/git-generator-files-discovery/cluster-config/**/config.json\"\n  # Application \u6a21\u677f\n  template:\n    metadata:\n      name: '{{cluster}}-guestbook'\n    spec:\n      project: default\n      source:\n        repoURL: https://github.com/argoproj-labs/applicationset.git\n        targetRevision: HEAD\n        path: examples/list-generator/guestbook/{{cluster}}\n      destination:\n        # name \u548c server \u4e8c\u9009\u4e00\n        # name: # cluster name\n        server: '{{url}}' # \u9ed8\u8ba4 https://kubernetes.default.svc\n        namespace: guestbook\n")))}s.isMDXComponent=!0}}]);