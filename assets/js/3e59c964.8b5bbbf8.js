"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[93996],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=p(n),c=a,g=k["".concat(o,".").concat(c)]||k[c]||m[c]||l;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=k;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<l;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},50162:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return k}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),s=["components"],i={title:"Kubernetes Ingress"},o=void 0,p={unversionedId:"devops/kubernetes/network/k8s-ingress",id:"devops/kubernetes/network/k8s-ingress",isDocsHomePage:!1,title:"Kubernetes Ingress",description:"- Ingress",source:"@site/notes/devops/kubernetes/network/k8s-ingress.md",sourceDirName:"devops/kubernetes/network",slug:"/devops/kubernetes/network/k8s-ingress",permalink:"/notes/devops/kubernetes/network/k8s-ingress",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/network/k8s-ingress.md",version:"current",frontMatter:{title:"Kubernetes Ingress"},sidebar:"docs",previous:{title:"HAProxy Ingress",permalink:"/notes/devops/kubernetes/network/haproxy-ingress"},next:{title:"K8S Network FAQ",permalink:"/notes/devops/kubernetes/network/k8s-network-faq"}},u=[{value:"Ingress",id:"ingress",children:[]},{value:"IngressClass",id:"ingressclass",children:[]}],m={toc:u};function k(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"Ingress")),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u63d0\u4f9b\u80fd\u529b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8def\u7531\u89c4\u5219"),(0,l.kt)("li",{parentName:"ul"},"\u8bbf\u95ee\u89c4\u5219"),(0,l.kt)("li",{parentName:"ul"},"\u865a\u62df\u4e3b\u673a"),(0,l.kt)("li",{parentName:"ul"},"\u9274\u6743"),(0,l.kt)("li",{parentName:"ul"},"\u5355 IP \u591a\u5e94\u7528"),(0,l.kt)("li",{parentName:"ul"},"\u8d1f\u8f7d\u5747\u8861"),(0,l.kt)("li",{parentName:"ul"},"URL \u91cd\u5199"),(0,l.kt)("li",{parentName:"ul"},"TLS - LetsEncrypt \u96c6\u6210"),(0,l.kt)("li",{parentName:"ul"},"HTTP\u3001gRPC\u3001TCP\u3001UDP\u3001HTTP2\u3001WebSocket"),(0,l.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u4f53\u91cd\u5199"),(0,l.kt)("li",{parentName:"ul"},"API \u7f51\u5173"),(0,l.kt)("li",{parentName:"ul"},"\u6307\u6807"),(0,l.kt)("li",{parentName:"ul"},"\u8ddf\u8e2a"))),(0,l.kt)("li",{parentName:"ul"},"\u9009\u62e9\u7eac\u5ea6",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Ingress \u8fd8\u662f CDR"),(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u652f\u6301\u90a3\u4e9b\u534f\u8bae"),(0,l.kt)("li",{parentName:"ul"},"\u662f\u5426\u96c6\u6210 ACME"),(0,l.kt)("li",{parentName:"ul"},"\u662f\u5426\u9700\u8981\u7528\u6765\u505a API \u7f51\u5173 - \u8003\u8651\u7684\u529f\u80fd\u4e0d\u540c",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8ddf\u8e2a\u3001\u6307\u6807\u3001\u63d2\u4ef6\u4fee\u6539\u8bf7\u6c42\u3001\u9650\u6d41"))),(0,l.kt)("li",{parentName:"ul"},"\u5e73\u53f0\u9009\u62e9 - Nginx\u3001Haproxy\u3001Traefik\u3001Envoy\u3001\u786c\u4ef6",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Kong - API \u7f51\u5173"),(0,l.kt)("li",{parentName:"ul"},"Traefik - ACME"),(0,l.kt)("li",{parentName:"ul"},"HAProxy - \u8d1f\u8f7d\u5747\u8861"),(0,l.kt)("li",{parentName:"ul"},"Nginx - \u865a\u62df\u4e3b\u673a"))),(0,l.kt)("li",{parentName:"ul"},"\u5f00\u6e90\u3001\u5546\u4e1a\u652f\u6301\u3001\u79c1\u6709"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/#additional-controllers"},"Ingress Controller")," \u5b9e\u73b0",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/jcmoraisjr/haproxy-ingress"},"jcmoraisjr/haproxy-ingress")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/haproxytech/kubernetes-ingress"},"haproxytech/kubernetes-ingress")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Kong/kubernetes-ingress-controller"},"Kong/kubernetes-ingress-controller")),(0,l.kt)("li",{parentName:"ul"},"Traefik CRD ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/containous/traefik-helm-chart"},"containous/traefik-helm-chart"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u66f4\u591a\u529f\u80fd"))),(0,l.kt)("li",{parentName:"ul"},"Traefik ",(0,l.kt)("a",{parentName:"li",href:"https://docs.traefik.io/providers/kubernetes-ingress/"},"Kubernetes Ingress Controller")),(0,l.kt)("li",{parentName:"ul"},"istio ",(0,l.kt)("a",{parentName:"li",href:"https://istio.io/docs/tasks/traffic-management/ingress/"},"Ingress")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/projectcontour/contour"},"projectcontour/contour"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"envoy"))),(0,l.kt)("li",{parentName:"ul"},"Ambassador",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"envoy"))),(0,l.kt)("li",{parentName:"ul"},"apisix",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"API Gateway"),(0,l.kt)("li",{parentName:"ul"},"nginx"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/solo-io/gloo"},"solo-io/gloo"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"envoy, api gateway"))),(0,l.kt)("li",{parentName:"ul"},"kong",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"nginx"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/voyagermesh/voyager"},"voyagermesh/voyager"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"haproxy"))))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/191WWNpjJ2za6-nbG4ZoUMXMpUK8KlCIosvQB0f-oq3k/htmlview"},"Comparison of Kubernetes Ingress controllers"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Ingress \u7f51\u5173\u591a\u7eac\u5ea6\u6bd4\u8f83"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://lab.wallarm.com/choose-the-right-ingress-controller-for-your-kubernetes-environment/"},"The Right Ingress Controller for Your K8s")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://caylent.com/kubernetes-top-ingress-controllers"},"Comparison of Kubernetes Top Ingress Controllers")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://caylent.com/managing-kubernetes-ingresses"},"Managing Kubernetes Ingresses")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://medium.com/flant-com/comparing-ingress-controllers-for-kubernetes-9b397483b46b"},"Comparing Ingress controllers for Kubernetes"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/1DnsHtdHbxjvHmxvlu7VhzWcWgLAn_Mc5L1WlhLDA__k"},"Google Sheet"))))))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u8bbe\u7f6e\u4e86\u591a\u4e2a \u9ed8\u8ba4 ingressclass \u5219\u5fc5\u987b\u4e3a ingress \u6307\u5b9a class")))),(0,l.kt)("h2",{id:"ingress"},"Ingress"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="default-ingress-backend.yaml"',title:'"default-ingress-backend.yaml"'},"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: default-ingress-backend\nspec:\n  defaultBackend:\n    service:\n      name: test\n      port:\n        number: 80\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"pathType",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ImplementationSpecific - \u5927\u591a\u5b9e\u73b0\u9ed8\u8ba4\u4e3a Prefix"),(0,l.kt)("li",{parentName:"ul"},"Exact - \u5b8c\u6574\u5339\u914d"),(0,l.kt)("li",{parentName:"ul"},"Prefix - \u524d\u7f00\u5339\u914d",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8def\u5f84 Prefix \u800c\u4e0d\u662f \u5b57\u7b26\u4e32 Prefix"),(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 /a \u5339\u914d /a/ \u548c /a/b \u4f46\u662f\u4e0d\u5339\u914d /aa"))),(0,l.kt)("li",{parentName:"ul"},"Mixed - Prefix+Exact")))),(0,l.kt)("h2",{id:"ingressclass"},"IngressClass"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: IngressClass\nmetadata:\n  name: external-lb\n  annotations:\n    # \u6807\u8bb0\u4e3a\u9ed8\u8ba4 ingress\n    ingressclass.kubernetes.io/is-default-class: true\nspec:\n  controller: example.com/ingress-controller\n  parameters:\n    apiGroup: k8s.example.com\n    kind: IngressParameters\n    name: external-lb\n    namespace: external-configuration\n    # v1.22 beta\n    scope: Namespace\n")))}k.isMDXComponent=!0}}]);