"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[64591],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),k=o,g=m["".concat(s,".").concat(k)]||m[k]||c[k]||a;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96268:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),l=["components"],i={title:"Kong Ingress"},s=void 0,u={unversionedId:"devops/kubernetes/network/kong-ingress",id:"devops/kubernetes/network/kong-ingress",title:"Kong Ingress",description:"* Kong/kubernetes-ingress-controller",source:"@site/notes/devops/kubernetes/network/kong-ingress.md",sourceDirName:"devops/kubernetes/network",slug:"/devops/kubernetes/network/kong-ingress",permalink:"/notes/devops/kubernetes/network/kong-ingress",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/network/kong-ingress.md",tags:[],version:"current",frontMatter:{title:"Kong Ingress"},sidebar:"docs",previous:{title:"K8S Network FAQ",permalink:"/notes/devops/kubernetes/network/k8s-network-faq"},next:{title:"kube-router",permalink:"/notes/devops/kubernetes/network/kube-router"}},p=[],c={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Kong/kubernetes-ingress-controller"},"Kong/kubernetes-ingress-controller")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Kong/kubernetes-ingress-controller/blob/master/docs/deployment/k4k8s.md"},"Kong for Kubernetes")," \u90e8\u7f72",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Kong/kubernetes-ingress-controller/blob/master/docs/concepts/deployment.md"},"\u90e8\u7f72\u6982\u5ff5")))),(0,a.kt)("li",{parentName:"ul"},"\u7279\u6027",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Ingres"),(0,a.kt)("li",{parentName:"ul"},"API \u7ba1\u7406",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"kong \u6709\u5927\u91cf\u63d2\u4ef6"))),(0,a.kt)("li",{parentName:"ul"},"gRPC \u652f\u6301"),(0,a.kt)("li",{parentName:"ul"},"Health checking, Load-balancing",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u4e3b\u52a8\u88ab\u52a8\u68c0\u67e5"))),(0,a.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u54cd\u5e94\u8f6c\u6362",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u63d2\u4ef6\u62e6\u622a\u4fee\u6539"))),(0,a.kt)("li",{parentName:"ul"},"\u8ba4\u8bc1"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Kong/kubernetes-ingress-controller/blob/main/docs/concepts/custom-resources.md"},"CRD \u914d\u7f6e"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"KongIngress",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6269\u5c55\u9ed8\u8ba4\u7684 Ingress"),(0,a.kt)("li",{parentName:"ul"},"Ingress \u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"configuration.konghq.com")," Annotation \u6307\u5411\u8be5\u914d\u7f6e"))),(0,a.kt)("li",{parentName:"ul"},"KongPlugin",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Ingress \u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"plugins.konghq.com")," Annotation \u6307\u5411\u8be5\u914d\u7f6e"))),(0,a.kt)("li",{parentName:"ul"},"KongClusterPlugin",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u7eac\u5ea6\u63d2\u4ef6\u914d\u7f6e"))),(0,a.kt)("li",{parentName:"ul"},"KongConsumer",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Kong \u7684 Consumers \u5bf9\u8c61"))),(0,a.kt)("li",{parentName:"ul"},"TCPIngress"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Kong/kubernetes-ingress-controller/blob/main/docs/concepts/design.md"},"\u67b6\u6784")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Kong/kubernetes-ingress-controller/tree/main/docs/guides"},"\u6587\u6863")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Kong/kubernetes-ingress-controller/blob/main/docs/references/annotations.md"},"annotations"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'helm repo add kong https://charts.konghq.com\nhelm repo update\n\nhelm install kong/kong --generate-name --set ingressController.installCRDs=false\n# \u8bbf\u95ee\u4ee3\u7406\u5730\u5740\nexport PROXY_IP=$(kubectl get -o jsonpath="{.status.loadBalancer.ingress[0].ip}" service -n kong demo-kong-proxy)\n')))}m.isMDXComponent=!0}}]);