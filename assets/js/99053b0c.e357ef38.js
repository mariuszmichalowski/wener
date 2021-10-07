"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[94551],{3905:function(t,e,n){n.d(e,{Zo:function(){return k},kt:function(){return N}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),m=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=m(t.components);return a.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),u=m(n),N=r,g=u["".concat(o,".").concat(N)]||u[N]||s[N]||l;return n?a.createElement(g,i(i({ref:e},k),{},{components:n})):a.createElement(g,i({ref:e},k))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},87637:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return k},default:function(){return u}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],p={title:"Networking Awesome",tags:["Awesome"]},o="Kubernetes Networking Awesome",m={unversionedId:"devops/kubernetes/network/k8s-network-awesome",id:"devops/kubernetes/network/k8s-network-awesome",isDocsHomePage:!1,title:"Networking Awesome",description:"- kube-router",source:"@site/notes/devops/kubernetes/network/k8s-network-awesome.md",sourceDirName:"devops/kubernetes/network",slug:"/devops/kubernetes/network/k8s-network-awesome",permalink:"/notes/devops/kubernetes/network/k8s-network-awesome",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/network/k8s-network-awesome.md",tags:[{label:"Awesome",permalink:"/notes/tags/awesome"}],version:"current",frontMatter:{title:"Networking Awesome",tags:["Awesome"]},sidebar:"docs",previous:{title:"Kubernetes Ingress",permalink:"/notes/devops/kubernetes/network/k8s-ingress"},next:{title:"K8S Network FAQ",permalink:"/notes/devops/kubernetes/network/k8s-network-faq"}},k=[{value:"Ingress &amp; Gateway",id:"ingress--gateway",children:[]},{value:"CNI",id:"cni",children:[]},{value:"Network",id:"network",children:[]}],s={toc:k};function u(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"kubernetes-networking-awesome"},"Kubernetes Networking Awesome"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"kube-router"),(0,l.kt)("li",{parentName:"ul"},"metallb"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://rancher.com/blog/2019/2019-03-21-comparing-kubernetes-cni-providers-flannel-calico-canal-and-weave/"},"Comparing Kubernetes CNI Providers: Flannel, Calico, Canal, and Weave"))))),(0,l.kt)("h2",{id:"ingress--gateway"},"Ingress & Gateway"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/#additional-controllers"},"Ingress Controller")," \u5b9e\u73b0")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Ingress \u5b9e\u73b0\u60c5\u51b5")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol"},"\u9488\u5bf9\u5b9e\u73b0 Ingress API",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u901a\u5e38\u4e0d\u66b4\u9732\u989d\u5916\u7684 CDR"),(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 ingress-nginx"))),(0,l.kt)("li",{parentName:"ol"},"\u57fa\u4e8e\u73b0\u6709 Web \u670d\u52a1\u652f\u6301 Ingress",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u901a\u5e38\u652f\u6301\u81ea\u5b9a\u4e49 CDR"),(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 traefik"))),(0,l.kt)("li",{parentName:"ol"},"\u57fa\u4e8e\u73b0\u6709 \u5e73\u53f0 \u652f\u6301 Ingress",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u901a\u5e38\u652f\u6301 \u63a5\u53e3 \u64cd\u4f5c\u89c4\u5219"),(0,l.kt)("li",{parentName:"ul"},"\u670d\u52a1\u6709\u72b6\u6001"),(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 kong, apisix")))))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Ingress \u9009\u62e9")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u6700\u597d\u9009\u62e9\u7b80\u5355\u5b9e\u7528\u719f\u6089\u7684",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 \u5df2\u77e5\u600e\u4e48\u5b9a\u4e49\u4e00\u4e9b\u7279\u6b8a\u89c4\u5219"))),(0,l.kt)("li",{parentName:"ul"},"\u9009\u62e9\u8f7b\u91cf\uff0c\u529f\u80fd\u5355\u4e00\u7684",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 \u8bc1\u4e66\u5c3d\u91cf\u914d\u5408 cert-manager \u4f7f\u7528"))),(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u652f\u6301\u590d\u6742 API \u7f51\u5173\u573a\u666f\u6700\u597d\u5229\u7528\u591a IngressClass \u6216 \u901a\u8fc7\u670d\u52a1 \u8fdb\u884c\u7ee7\u627f\u4f7f\u7528",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 \u4f7f\u7528 kong \u6216 apisix \u7edf\u4e00\u7ba1\u7406 API - ingress \u6267\u884c \u7f51\u5173\u670d\u52a1"))),(0,l.kt)("li",{parentName:"ul"},"\u5c06 Ingress \u770b\u4f5c\u662f\u53cd\u5411\u4ee3\u7406\u7684\u66ff\u4ee3"),(0,l.kt)("li",{parentName:"ul"},"\u63a8\u8350 - ingress-nginx"),(0,l.kt)("li",{parentName:"ul"},"IngressClass \u53ef\u914d\u5408\u4f7f\u7528",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"HAProxy \u64c5\u957f TLS\u3001SNI\u3001LB"),(0,l.kt)("li",{parentName:"ul"},"Nginx \u64c5\u957f \u53cd\u5411\u4ee3\u7406"),(0,l.kt)("li",{parentName:"ul"},"Envoy \u64c5\u957f \u534f\u8bae\u611f\u77e5\u3001\u5b9a\u5236\u6027\u9ad8"),(0,l.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u7f51\u5173 \u64c5\u957f API \u7ba1\u7406\u3001\u96c6\u6210\u3001Web \u53ef\u89c6\u5316\u7ba1\u7406")))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"-"),(0,l.kt)("th",{parentName:"tr",align:null},"based on"),(0,l.kt)("th",{parentName:"tr",align:null},"ingress"),(0,l.kt)("th",{parentName:"tr",align:null},"gateway"),(0,l.kt)("th",{parentName:"tr",align:null},"governance"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/kubernetes/ingress-nginx"},"ingress-nginx")),(0,l.kt)("td",{parentName:"tr",align:null},"nginx"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe2"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udd34"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/jcmoraisjr/haproxy-ingress"},"haproxy-ingress")),(0,l.kt)("td",{parentName:"tr",align:null},"haproxy"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe2"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe2"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/haproxytech/kubernetes-ingress"},"haproxytech-ingress")),(0,l.kt)("td",{parentName:"tr",align:null},"haproxy"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe2"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udd34"),(0,l.kt)("td",{parentName:"tr",align:null},"haproxytech")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"istio"),(0,l.kt)("td",{parentName:"tr",align:null},"envoy"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe2"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe2"),(0,l.kt)("td",{parentName:"tr",align:null},"CNCF/google")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/projectcontour/contour"},"contour")),(0,l.kt)("td",{parentName:"tr",align:null},"envoy"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe2"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe2"),(0,l.kt)("td",{parentName:"tr",align:null},"CNCF")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://traefik.io/"},"traefik")),(0,l.kt)("td",{parentName:"tr",align:null},"traefik"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe2"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe2"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/solo-io/gloo"},"gloo")),(0,l.kt)("td",{parentName:"tr",align:null},"envoy"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe2"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe1"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Emissary-Ingress"),(0,l.kt)("td",{parentName:"tr",align:null},"envoy"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe2"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe2"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Kong/kubernetes-ingress-controller"},"kong")),(0,l.kt)("td",{parentName:"tr",align:null},"nginx/kong"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe2"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe1"),(0,l.kt)("td",{parentName:"tr",align:null},"Kong")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/apache/apisix-ingress-controller"},"apisix")),(0,l.kt)("td",{parentName:"tr",align:null},"nginx/apisix"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe2"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe1"),(0,l.kt)("td",{parentName:"tr",align:null},"Apache")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/citrix/citrix-k8s-ingress-controller"},"citrix")),(0,l.kt)("td",{parentName:"tr",align:null},"Citrix ADC"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe2"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/saarasio/enroute"},"enroute")),(0,l.kt)("td",{parentName:"tr",align:null},"envoy"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe2"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"CNCF/saarasio")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/megaease/easegress"},"easegress")),(0,l.kt)("td",{parentName:"tr",align:null},"easegress"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe2"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"megaease")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/voyagermesh/voyager"},"voyager")),(0,l.kt)("td",{parentName:"tr",align:null},"haproxy"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe2"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"AppsCode")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/TykTechnologies/tyk-operator"},"tyk")),(0,l.kt)("td",{parentName:"tr",align:null},"typ"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe2"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/zalando/skipper"},"skipper")),(0,l.kt)("td",{parentName:"tr",align:null},"skipper"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe2"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"cni"},"CNI"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"flannel",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"layer 2, overlay"))),(0,l.kt)("li",{parentName:"ul"},"calico",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"layer 3, BGP"))),(0,l.kt)("li",{parentName:"ul"},"canal"),(0,l.kt)("li",{parentName:"ul"},"weave",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"IPsec ESP")))),(0,l.kt)("h2",{id:"network"},"Network"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"kube-router"),(0,l.kt)("li",{parentName:"ul"},"tinc"),(0,l.kt)("li",{parentName:"ul"},"n2n")))}u.isMDXComponent=!0}}]);