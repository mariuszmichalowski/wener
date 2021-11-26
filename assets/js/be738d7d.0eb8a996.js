"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[59237],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,v=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return t?a.createElement(v,l(l({ref:n},p),{},{components:t})):a.createElement(v,l({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},29043:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),l=["components"],o={id:"knative",title:"Knative"},s=void 0,c={unversionedId:"devops/kubernetes/platform/knative",id:"devops/kubernetes/platform/knative",isDocsHomePage:!1,title:"Knative",description:"- knative/community",source:"@site/notes/devops/kubernetes/platform/knative.md",sourceDirName:"devops/kubernetes/platform",slug:"/devops/kubernetes/platform/knative",permalink:"/notes/devops/kubernetes/platform/knative",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/platform/knative.md",tags:[],version:"current",frontMatter:{id:"knative",title:"Knative"},sidebar:"docs",previous:{title:"KEDA",permalink:"/notes/devops/kubernetes/platform/keda"},next:{title:"kubeless",permalink:"/notes/devops/kubernetes/platform/kubeless"}},p=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[]},{value:"\u90e8\u7f72\u670d\u52a1",id:"\u90e8\u7f72\u670d\u52a1",children:[]},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[{value:"config-autoscaler",id:"config-autoscaler",children:[]},{value:"config-domain",id:"config-domain",children:[]},{value:"config-tracing",id:"config-tracing",children:[]}]},{value:"operator",id:"operator",children:[]}],u={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/knative/community"},"knative/community"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"by Google"))),(0,i.kt)("li",{parentName:"ul"},"KNative \u63d0\u4f9b\u6807\u51c6\u5316\u7684 serverless \u5f00\u53d1\u6240\u9700\u7ec4\u4ef6 - \u63d0\u4f9b\u57fa\u77f3",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"OpenFaas\u3001OpenWhisk \u53ef\u4ee5\u8fd0\u884c\u5728 KNative \u4e4b\u4e0a"))),(0,i.kt)("li",{parentName:"ul"},"Gitlab \u96c6\u6210\u4e86 KNative \u4f5c\u4e3a Serveless \u8fd0\u884c\u73af\u5883"),(0,i.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6700\u4f4e\u7cfb\u7edf\u8981\u6c42 3 \u8282\u70b9 6vCPU 22.5G \u5185\u5b58 \u542f\u7528 RBAC"),(0,i.kt)("li",{parentName:"ul"},"knative \u8fd8\u4e0d\u652f\u6301 istio \u7684 mTLS",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/knative/serving/issues/3903"},"knative/serving#3903")))),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u914d\u7f6e\u5931\u8d25\u4f1a\u5bfc\u81f4\u4e00\u76f4\u5931\u8d25 - \u5982\u679c\u4e00\u76f4\u51fa\u73b0 CrashLoopBackOff \u9700\u8981\u68c0\u67e5\u914d\u7f6e"))),(0,i.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"knative-eventing - \u4e8b\u4ef6 - \u7ba1\u7406\u548c\u5206\u53d1\u4e8b\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"knative-serving - \u670d\u52a1 - \u8bf7\u6c42\u9a71\u52a8\u7684\u8ba1\u7b97 - \u53ef\u7f29\u5bb9\u5230 0"),(0,i.kt)("li",{parentName:"ul"},"knative-monitoring - \u76d1\u63a7\u548c\u65e5\u5fd7 - elastic/kibana/fluentd/prometheus"),(0,i.kt)("li",{parentName:"ul"},"\u7f51\u7edc - Gatway API",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Istio - \u9ed8\u8ba4"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/knative-sandbox/net-kourier"},"knative-sandbox/net-kourier"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Envoy proxy"))),(0,i.kt)("li",{parentName:"ul"},"Ambassador, Contour, Gloo, Kong"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/ingress-nginx/issues/7517"},"ingress-nginx#7517")))),(0,i.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u6e90",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Ceph"),(0,i.kt)("li",{parentName:"ul"},"Apache CouchDB"),(0,i.kt)("li",{parentName:"ul"},"GitHub"),(0,i.kt)("li",{parentName:"ul"},"GitLab"),(0,i.kt)("li",{parentName:"ul"},"Apache Kafka"),(0,i.kt)("li",{parentName:"ul"},"NATS Streaming"),(0,i.kt)("li",{parentName:"ul"},"Prometheus"),(0,i.kt)("li",{parentName:"ul"},"RabbitMQ"),(0,i.kt)("li",{parentName:"ul"},"Redis"))))),(0,i.kt)("li",{parentName:"ul"},"knative \u6ca1\u6709\u63d0\u4f9b helm\uff0c\u5b98\u65b9\u503e\u5411\u4e8e operator")),(0,i.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://knative.dev/docs/install/any-kubernetes-cluster/"},"https://knative.dev/docs/install/any-kubernetes-cluster/"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4efb\u610f k8s \u7684\u5b89\u88c5\u903b\u8f91\n# \u76ee\u524d\u8fd8\u6ca1\u6709\u6b63\u5f0f\u53d1\u5e03 - 20191130 - \u56e0\u6b64\u53d6\u5230\u7684\u662f\u9884\u53d1\u5e03\u7248\u672c\nknative_version=$(curl -s https://api.github.com/repos/knative/serving/releases | jq -r '.[0].tag_name')\n\n# crd \u5b89\u88c5 - \u907f\u514d race conditions\nkubectl apply --selector knative.dev/crd-install=true \\\n--filename https://github.com/knative/serving/releases/download/$knative_version/serving.yaml \\\n--filename https://github.com/knative/eventing/releases/download/$knative_version/release.yaml \\\n--filename https://github.com/knative/serving/releases/download/$knative_version/monitoring.yaml\n\n# \u518d\u6b21\u6267\u884c\nkubectl apply \\\n--filename https://github.com/knative/serving/releases/download/$knative_version/serving.yaml \\\n--filename https://github.com/knative/eventing/releases/download/$knative_version/release.yaml \\\n--filename https://github.com/knative/serving/releases/download/$knative_version/monitoring.yaml\n\n# \u5b89\u88c5\u5b8c\u6210\u67e5\u770b\u5b89\u88c5\u5185\u5bb9\nkubectl get pods --namespace knative-serving\nkubectl get pods --namespace knative-eventing\nkubectl get pods --namespace knative-monitoring\n")),(0,i.kt)("h2",{id:"\u90e8\u7f72\u670d\u52a1"},"\u90e8\u7f72\u670d\u52a1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# \u90e8\u7f72\u4e00\u4e2a\u670d\u52a1\nkubectl apply -f- <<YAML\napiVersion: serving.knative.dev/v1 # Knative \u5f53\u524d\u7248\u672c\nkind: Service\nmetadata:\n  name: helloworld-go # \u5e94\u7528\u540d\u5b57\n  namespace: default # \u90e8\u7f72\u7684\u7a7a\u95f4\nspec:\n  template:\n    spec:\n      containers:\n        - image: gcr.io/knative-samples/helloworld-go # \u5e94\u7528\u7684\u955c\u50cf\n          env:\n            - name: TARGET # \u73af\u5883\u53d8\u91cf\u5b9a\u4e49\n              value: "Go Sample v1"\nYAML\n\n# \u4f1a\u83b7\u53d6\u5230\u8be5\u670d\u52a1\u7684 URL\n# \u5982\u679c\u8bbe\u7f6e\u8fc7\u57df\u540d\uff0c\u90a3\u4e48\u770b\u5230\u7684\u5c31\u662f\u5e26\u57df\u540d\u7684 URL - \u683c\u5f0f\u4e3a http://\u670d\u52a1\u540d.\u7a7a\u95f4.\u57df\u540d - \u4f8b\u5982 http://helloworld-go.default.wener.me\n# \u67e5\u770b\u57df\u540d\u914d\u7f6e - kubectl get cm config-domain -n knative-serving -o jsonpath={.data}\nkubectl get ksvc helloworld-go -n default\n\n# \u83b7\u53d6 URL\nkubectl get route helloworld-go --output jsonpath="{.status.url}" -n default\n\n# \u5b9e\u9645\u670d\u52a1\u8bbf\u95ee\u662f\u901a\u8fc7 istio-ingressgateway \u66b4\u9732\u7684\n# \u53ef\u901a\u8fc7 istio \u7684\u8d1f\u8f7d\u5747\u8861\u5730\u5740\u8fdb\u884c\u8bbf\u95ee\nkubectl get svc istio-ingressgateway --namespace istio-system --output jsonpath="{.status.loadBalancer.ingress[*][\'ip\']}"\n\n# \u5220\u9664\u670d\u52a1\nkubectl -n default delete ksvc helloworld-go\n')),(0,i.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6240\u6709\u7684\u914d\u7f6e\u5916\u9762\u90fd\u6709\u4e00\u4e2a Key")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"my_config: |\n  # \u8fd9\u91cc\u624d\u662f\u5b9e\u9645\u7684\u914d\u7f6e - \u4e0b\u9762\u7684\u914d\u7f6e\u90fd\u53ea\u662f\u8fd9\u90e8\u5206\u5185\u5bb9\n")),(0,i.kt)("h3",{id:"config-autoscaler"},"config-autoscaler"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u914d\u7f6e\u4e2d\u7684 ContainerConcurrency \u6307\u5b9a\u4e86\u5bb9\u5668\u80fd\u5904\u7406\u7684\u5e76\u53d1\u6570\n# \u8fd9\u4e2a\u914d\u7f6e\u662f\u5728\u603b\u91cf\u7684\u591a\u5c11\u7b97\u662f\u6b63\u5e38\u72b6\u6001 - \u4f8b\u5982 \u603b\u91cf\u662f 10 \u8fd9\u91cc\u914d\u7f6e 70 \u5219 <= 7 \u7684\u65f6\u5019\u7b97\u662f\u7a33\u5b9a\u7684\u91cf\ncontainer-concurrency-target-percentage: '70'\n\n# The container concurrency target default is what the Autoscaler will\n# try to maintain when concurrency is used as the scaling metric for a\n# Revision and the Revision specifies unlimited concurrency.\n# Even when specifying unlimited concurrency, the autoscaler will\n# horizontally scale the application based on this target concurrency.\n# NOTE: Only one metric can be used for autoscaling a Revision.\ncontainer-concurrency-target-default: '100'\n\n# The requests per second (RPS) target default is what the Autoscaler will\n# try to maintain when RPS is used as the scaling metric for a Revision and\n# the Revision specifies unlimited RPS. Even when specifying unlimited RPS,\n# the autoscaler will horizontally scale the application based on this\n# target RPS.\n# Must be greater than 1.0.\n# NOTE: Only one metric can be used for autoscaling a Revision.\nrequests-per-second-target-default: '200'\n\n# The target burst capacity specifies the size of burst in concurrent\n# requests that the system operator expects the system will receive.\n# Autoscaler will try to protect the system from queueing by introducing\n# Activator in the request path if the current spare capacity of the\n# service is less than this setting.\n# If this setting is 0, then Activator will be in the request path only\n# when the revision is scaled to 0.\n# If this setting is > 0 and container-concurrency-target-percentage is\n# 100% or 1.0, then activator will always be in the request path.\n# -1 denotes unlimited target-burst-capacity and activator will always\n# be in the request path.\n# Other negative values are invalid.\ntarget-burst-capacity: '200'\n\n# When operating in a stable mode, the autoscaler operates on the\n# average concurrency over the stable window.\nstable-window: '60s'\n\n# When observed average concurrency during the panic window reaches\n# panic-threshold-percentage the target concurrency, the autoscaler\n# enters panic mode. When operating in panic mode, the autoscaler\n# scales on the average concurrency over the panic window which is\n# panic-window-percentage of the stable-window.\npanic-window-percentage: '10.0'\n\n# Absolute panic window duration.\n# Deprecated in favor of panic-window-percentage.\n# Existing revisions will continue to scale based on panic-window\n# but new revisions will default to panic-window-percentage.\npanic-window: '6s'\n\n# The percentage of the container concurrency target at which to\n# enter panic mode when reached within the panic window.\npanic-threshold-percentage: '200.0'\n\n# \u6700\u5927\u6269\u5bb9\u7387 - \u5fc5\u987b > 1\nmax-scale-up-rate: '1000.0'\n\n# \u6700\u5927\u7f29\u5bb9\u7387 - \u5fc5\u987b > 1\nmax-scale-down-rate: '2.0'\n\n# \u662f\u5426\u7f29\u5bb9\u5230 0\nenable-scale-to-zero: 'true'\n\n# autoscaling \u7684\u8ba1\u7b97\u95f4\u9694\ntick-interval: '2s'\n\n# \u52a8\u6001\u53c2\u6570 - \u5728 configmap \u66f4\u65b0\u540e\u751f\u6548\n\n# \u7f29\u5bb9\u5230 0 \u7684\u7b49\u5f85\u65f6\u95f4\nscale-to-zero-grace-period: '30s'\n")),(0,i.kt)("h3",{id:"config-domain"},"config-domain"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://knative.dev/docs/serving/using-a-custom-domain/"},"\u4f7f\u7528\u81ea\u5b9a\u4e49\u57df\u540d"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'# \u6700\u540e\u9009\u62e9\u7684\u57df\u540d - \u56e0\u4e3a\u914d\u7f6e\u4fe1\u606f\u6700\u5c11\nexample.com: |\n\n# \u4e3a\u5e94\u7528\u6307\u5b9a\u5206\u914d\u7684\u57df\u540d\nexample.org: |\n  selector:\n    app: nonprofit\n\n# svc.cluster.local \u57df\u540d\u4e0d\u4f1a\u901a\u8fc7 Ingress \u66b4\u9732\n# \u4e5f\u53ef\u4ee5\u8bbe\u7f6e \u6807\u7b7e "serving.knative.dev/visibility=cluster-local" \u6765\u8fbe\u5230\u540c\u6837\u7684\u76ee\u7684\nsvc.cluster.local: |\n  selector:\n    app: secret\n')),(0,i.kt)("h3",{id:"config-tracing"},"config-tracing"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u540e\u7aef - \u53ef\u9009\u4e3a none zipkin stackdriver\nbackend: 'none'\n\n# zipkin \u7684\u540e\u7aef\u5730\u5740\nzipkin-endpoint: 'http://zipkin.istio-system.svc.cluster.local:9411/api/v2/spans'\n\n# stackdriver \u7684\u9879\u76ee ID\nstackdriver-project-id: 'my-project'\n\n# zipkin \u7684 debug \u6a21\u5f0f - \u5f00\u542f\u540e\u4e0d\u4f1a\u8fdb\u884c\u91c7\u6837\u800c\u662f\u5168\u91cf\u8f93\u51fa\ndebug: 'false'\n\n# 0-1 \u7684\u91c7\u6837\u7387\nsample-rate: '0.1'\n")),(0,i.kt)("h2",{id:"operator"},"operator"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://knative.dev/docs/install/operator/knative-with-operators/"},"https://knative.dev/docs/install/operator/knative-with-operators/"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://github.com/knative/operator/releases/download/knative-v1.0.0/operator.yaml\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: operator.knative.dev/v1alpha1\nkind: KnativeServing\nmetadata:\n  name: knative-serving\n  namespace: knative-serving\n")))}m.isMDXComponent=!0}}]);