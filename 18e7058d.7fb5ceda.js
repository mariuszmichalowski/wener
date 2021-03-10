(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),i=(n(0),n(806)),l={title:"Kubernetes \u7248\u672c"},b={unversionedId:"devops/kubernetes/k8s-version",id:"devops/kubernetes/k8s-version",isDocsHomePage:!1,title:"Kubernetes \u7248\u672c",description:"1.20 - 2020-12-08",source:"@site/notes/devops/kubernetes/k8s-version.md",slug:"/devops/kubernetes/k8s-version",permalink:"/notes/devops/kubernetes/k8s-version",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/k8s-version.md",version:"current",sidebar:"docs",previous:{title:"\u6211\u7684 K8S \u5b9e\u8df5",permalink:"/notes/devops/kubernetes/k8s-my-practice"},next:{title:"Kubernates \u7f51\u7edc",permalink:"/notes/devops/kubernetes/network/network"}},c=[{value:"1.20 - 2020-12-08",id:"120---2020-12-08",children:[]},{value:"1.19",id:"119",children:[]}],o={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"120---2020-12-08"},"1.20 - 2020-12-08"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"11 stable, 15 beta, 16 alpha"),Object(i.b)("li",{parentName:"ul"},"\u5e9f\u5f03 dockershim",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u53ea\u662f\u5e9f\u5f03 dockershim - \u6682\u65e0\u79fb\u9664\u8ba1\u5212"),Object(i.b)("li",{parentName:"ul"},"\u4f7f\u7528 CRI \u6807\u51c6\u63a5\u53e3 - \u76ee\u524d docker \u4e0d\u652f\u6301, containerd \u9ed8\u8ba4\u5b9e\u73b0"),Object(i.b)("li",{parentName:"ul"},"docker \u5e95\u5c42\u4f7f\u7528 containerd, docker \u4f9d\u7136\u80fd\u6b63\u5e38\u4f7f\u7528, \u53ea\u662f\u79fb\u9664\u4e86\u7279\u6b8a\u4e2d\u95f4\u5c42\u652f\u6301: docker -> shim -> containerd"),Object(i.b)("li",{parentName:"ul"},"\u975e Linux \u5e73\u53f0 containerd \u65e0\u652f\u6301\uff0c\u9700\u8981 docker"),Object(i.b)("li",{parentName:"ul"},"Mirantis \u4f1a\u901a\u8fc7 ",Object(i.b)("a",{parentName:"li",href:"https://github.com/Mirantis/cri-dockerd"},"Mirantis/cri-dockerd")," \u6dfb\u52a0 docker \u7684 cri \u652f\u6301"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u7ed3\u8bba"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u7ef4\u6301\u73b0\u72b6"))))),Object(i.b)("li",{parentName:"ul"},"go 1.15.5"),Object(i.b)("li",{parentName:"ul"},"\u4e0d\u518d\u9ed8\u8ba4\u5305\u542b\u4e91\u5e73\u53f0\u63a7\u5236\u5668 - \u7531\u4e91\u5e73\u53f0\u81ea\u884c\u63d0\u4f9b"),Object(i.b)("li",{parentName:"ul"},"Stable/GA",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"CSI \u5377\u5feb\u7167"),Object(i.b)("li",{parentName:"ul"},"PID \u9650\u5236 - SupportNodePidsLimit"),Object(i.b)("li",{parentName:"ul"},"TokenRequest/TokenRequestProjection - \u76ee\u524d\u8fd8\u9700\u8981\u6253\u5f00\u7279\u6027\uff0c1.21 \u4f1a\u9ed8\u8ba4\u6253\u5f00"),Object(i.b)("li",{parentName:"ul"},"node.k8s.io API \u8fdb\u5165 ",Object(i.b)("inlineCode",{parentName:"li"},"v1")," \u5e9f\u5f03 ",Object(i.b)("inlineCode",{parentName:"li"},"v1beta1")))),Object(i.b)("li",{parentName:"ul"},"Beta",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"API \u4f18\u5148\u7ea7\u5904\u7406 - \u5bf9 API \u8fdb\u884c\u4f18\u5148\u7ea7\u5206\u5c42\uff0c\u4f18\u5148\u5904\u7406\u91cd\u8981 API \u8bf7\u6c42"),Object(i.b)("li",{parentName:"ul"},"\u975e\u9012\u5f52 \u5377\u6240\u5f52\u5c5e\u5173\u7cfb/fsgroup - \u53ef\u7406\u89e3\u4e3a ",Object(i.b)("inlineCode",{parentName:"li"},"chown $GROUP:$USER $VOLUME")),Object(i.b)("li",{parentName:"ul"},"FSGroup CSIDriver \u7b56\u7565"),Object(i.b)("li",{parentName:"ul"},"RootCAConfigMap - \u6240\u6709 NS \u53ef\u8bbf\u95ee\uff0c\u7528\u4e8e\u6821\u9a8c kube-apiserver \u94fe\u63a5"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"kubectl debug")),Object(i.b)("li",{parentName:"ul"},"SetHostnameAsFQDN"))),Object(i.b)("li",{parentName:"ul"},"Alpha",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"CronJob v2"),Object(i.b)("li",{parentName:"ul"},"\u4ece\u65b0\u5b9e\u73b0 IPv4/IPv6 \u53cc\u6808"),Object(i.b)("li",{parentName:"ul"},"CSI \u5b89\u5168\u589e\u5f3a - CSIServiceAccountToken - \u4f7f\u7528\u5176\u4ed6 SA \u800c\u975e\u5f53\u524d"),Object(i.b)("li",{parentName:"ul"},"\u4f18\u96c5\u7684\u8282\u70b9\u505c\u6b62 - GracefulNodeShutdown"),Object(i.b)("li",{parentName:"ul"},"\u79fb\u9664\u65e5\u5fd7\u654f\u611f\u4fe1\u606f - ",Object(i.b)("inlineCode",{parentName:"li"},"--experimental-logging-sanitization"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u79fb\u9664\u5b57\u6bb5 passwords, keys, tokens"),Object(i.b)("li",{parentName:"ul"},"\u652f\u6301\u7ec4\u4ef6 - \u4e0d\u652f\u6301\u7528\u6237 Pod \u7ef4\u5ea6\u76f8\u5173\u65e5\u5fd7",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"kube-controller-manager"),Object(i.b)("li",{parentName:"ul"},"kube-apiserver"),Object(i.b)("li",{parentName:"ul"},"kube-scheduler"),Object(i.b)("li",{parentName:"ul"},"kubelet"))))),Object(i.b)("li",{parentName:"ul"},"\u6240\u6709 Pod \u8d44\u6e90\u6307\u6807 ",Object(i.b)("inlineCode",{parentName:"li"},"/metrics/resources")," - ",Object(i.b)("inlineCode",{parentName:"li"},"--show-hidden-metrics-for-version=1.20"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/cluster-administration/system-metrics/#kube-scheduler-metrics"},"kube-scheduler metrics")))))),Object(i.b)("li",{parentName:"ul"},"\u53ef\u80fd\u9047\u5230\u7684\u95ee\u9898",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"exec probe \u4e0d\u4f1a\u8d85\u65f6\uff0c\u73b0\u5728 ExecProbeTimeout \u4f1a\u751f\u6548\uff0c\u6ca1\u6709\u914d\u7f6e\u7684\u9ed8\u8ba4 1s"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.20.md"},"CHANGELOG-1.20"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"# IPv4/IPv6 \u53cc\u6808\napiVersion: v1\nkind: Service\nmetadata:\n  name: my-service\n  labels:\n    app: MyApp\nspec:\n  # \u53ef\u96c6\u7fa4\u7ef4\u5ea6\u914d\u7f6e\n  # ipFamilyPolicy: SingleStack # \u5355\u6808\n  ipFamilyPolicy: PreferDualStack\n  # \u53ef\u9009\n  ipFamilies:\n  - IPv6\n  - IPv4\n  selector:\n    app: MyApp\n  ports:\n    - protocol: TCP\n      port: 80\n")),Object(i.b)("h2",{id:"119"},"1.19"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"EndpointSlices \u9ed8\u8ba4\u542f\u7528"),Object(i.b)("li",{parentName:"ul"},"Ingress GA"),Object(i.b)("li",{parentName:"ul"},"seccomp GA"),Object(i.b)("li",{parentName:"ul"},"KubeSchedulerConfiguration Beta"),Object(i.b)("li",{parentName:"ul"},"\u5b58\u50a8\u5bb9\u91cf\u8ddf\u8e2a - Alpha",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4e4b\u524d\u8c03\u5ea6\u65f6\u90fd\u4e0d\u4f1a\u8003\u8651\u8282\u70b9\u5b58\u50a8\u5bb9\u91cf"))),Object(i.b)("li",{parentName:"ul"},"\u901a\u7528\u4e34\u65f6\u5b58\u50a8\u5377"),Object(i.b)("li",{parentName:"ul"},"\u4e0d\u53ef\u53d8\u7684 Secrets \u548c ConfigMaps - Beta"),Object(i.b)("li",{parentName:"ul"},"kubernetes/dashboard v2"),Object(i.b)("li",{parentName:"ul"},"\u901a\u7528 ",Object(i.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/storage/ephemeral-volumes/"},"ephemeral volumes"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u751f\u547d\u5468\u671f\u4e0e pod \u7ed1\u5b9a"),Object(i.b)("li",{parentName:"ul"},"\u652f\u6301\u4f7f\u7528\u52a8\u6001 provisioning \u5b58\u50a8\u4f5c\u4e3a\u4e34\u65f6\u5377 - ALPHA"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.19.md"},"CHANGELOG-1.19"))))}p.isMDXComponent=!0},806:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,O=u["".concat(l,".").concat(m)]||u[m]||s[m]||i;return n?a.a.createElement(O,b(b({ref:t},o),{},{components:n})):a.a.createElement(O,b({ref:t},o))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:r,l[1]=b;for(var o=2;o<i;o++)l[o]=n[o];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);