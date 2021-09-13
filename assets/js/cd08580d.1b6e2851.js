"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[50310],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,k=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},56732:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return s},default:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],p={title:"Dapr Kubernetes"},l=void 0,d={unversionedId:"dev/cloud/dapr-k8s",id:"dev/cloud/dapr-k8s",isDocsHomePage:!1,title:"Dapr Kubernetes",description:"- \u53c2\u8003",source:"@site/notes/dev/cloud/dapr-k8s.md",sourceDirName:"dev/cloud",slug:"/dev/cloud/dapr-k8s",permalink:"/notes/dev/cloud/dapr-k8s",editUrl:"https://github.com/wenerme/wener/edit/master/notes/dev/cloud/dapr-k8s.md",tags:[],version:"current",frontMatter:{title:"Dapr Kubernetes"},sidebar:"docs",previous:{title:"Dapr",permalink:"/notes/dev/cloud/dapr"},next:{title:"Dapr Version",permalink:"/notes/dev/cloud/dapr-version"}},s=[{value:"\u7ec4\u4ef6",id:"\u7ec4\u4ef6",children:[]},{value:"annotations",id:"annotations",children:[]}],c={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"helm ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/dapr/dapr/blob/master/charts/dapr"},"charts/dapr"))))),(0,o.kt)("h2",{id:"\u7ec4\u4ef6"},"\u7ec4\u4ef6"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"dapr-operator - \u7ec4\u4ef6\u90e8\u7f72"),(0,o.kt)("li",{parentName:"ul"},"dapr-sidecar-injector - \u6ce8\u5165 sidecar"),(0,o.kt)("li",{parentName:"ul"},"dapr-placement - actor instance -> Pod"),(0,o.kt)("li",{parentName:"ul"},"dapr-sentry - mTLS, CA")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u751f\u4ea7\u8d44\u6e90\u5efa\u8bae")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Component"),(0,o.kt)("th",{parentName:"tr",align:null},"CPU"),(0,o.kt)("th",{parentName:"tr",align:null},"Memory"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Operator"),(0,o.kt)("td",{parentName:"tr",align:null},"1/100m"),(0,o.kt)("td",{parentName:"tr",align:null},"200Mi/100Mi")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Sidecar Injector"),(0,o.kt)("td",{parentName:"tr",align:null},"1/100m"),(0,o.kt)("td",{parentName:"tr",align:null},"200Mi/30Mi")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Sentry"),(0,o.kt)("td",{parentName:"tr",align:null},"1/100m"),(0,o.kt)("td",{parentName:"tr",align:null},"200Mi/30Mi")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Placement"),(0,o.kt)("td",{parentName:"tr",align:null},"1/250m"),(0,o.kt)("td",{parentName:"tr",align:null},"150Mi/75Mi")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Dashboard"),(0,o.kt)("td",{parentName:"tr",align:null},"200m/50m"),(0,o.kt)("td",{parentName:"tr",align:null},"200Mi/20Mi")))),(0,o.kt)("h2",{id:"annotations"},"annotations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.dapr.io/operations/hosting/kubernetes/kubernetes-annotations/"},"Kubernetes pod annotations"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"annotations:\n  dapr.io/enabled: 'true'\n  dapr.io/app-id: 'nodeapp'\n  dapr.io/app-port: '3000'\n  # \u914d\u7f6e CDR \u540d\u5b57\n  dapr.io/config: 'tracing'\n\n  # debug, info, warn, error\n  dapr.io/log-level: 'info'\n  dapr.io/log-as-json: 'false'\n  # port 7777\n  dapr.io/enable-profiling: 'false'\n  # token based API authentication\n  dapr.io/api-token-secret: ''\n  # grpc, http\n  dapr.io/app-protocol: 'http'\n  # \u6700\u5927\u5e76\u53d1\u6570\u9650\u5236\n  dapr.io/app-max-concurrency: ''\n  # insecure SSL\n  dapr.io/app-ssl: 'false'\n  dapr.io/metrics-port: '9090'\n\n  dapr.io/sidecar-cpu: ''\n  dapr.io/sidecar-memory: ''\n  dapr.io/sidecar-cpu-request: ''\n  dapr.io/sidecar-memory-request: ''\n\n  dapr.io/sidecar-liveness-probe-delay-seconds: '3'\n  dapr.io/sidecar-liveness-probe-timeout-seconds: '3'\n  dapr.io/sidecar-liveness-probe-period-seconds: '6'\n  dapr.io/sidecar-liveness-probe-threshold: '3'\n  dapr.io/sidecar-readiness-probe-delay-seconds: '3'\n  dapr.io/sidecar-readiness-probe-timeout-seconds: '3'\n  dapr.io/sidecar-readiness-probe-period-seconds: '6'\n  dapr.io/sidecar-readiness-probe-threshold: '3'\n\n  # \u8bf7\u6c42\u4f53\u5927\u5c0f - \u5355\u4f4d MB\n  dapr.io/http-max-request-size: '4'\n  # \u989d\u5916\u7684\u73af\u5883\u53d8\u91cf\uff0c\u9017\u53f7\u5206\u5272 key=value\n  dapr.io/env: ''\n")))}u.isMDXComponent=!0}}]);