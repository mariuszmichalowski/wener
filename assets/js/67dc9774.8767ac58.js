"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[89178],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return k}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=u(r),k=n,h=c["".concat(s,".").concat(k)]||c[k]||p[k]||o;return r?a.createElement(h,l(l({ref:t},m),{},{components:r})):a.createElement(h,l({ref:t},m))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},93926:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return m},default:function(){return c}});var a=r(22122),n=r(19756),o=(r(67294),r(3905)),l=["components"],i={id:"prometheus-k8s",title:"Prometheus K8S"},s=void 0,u={unversionedId:"service/observability/metrics/prometheus/prometheus-k8s",id:"service/observability/metrics/prometheus/prometheus-k8s",isDocsHomePage:!1,title:"Prometheus K8S",description:"Tips",source:"@site/notes/service/observability/metrics/prometheus/prometheus-k8s.md",sourceDirName:"service/observability/metrics/prometheus",slug:"/service/observability/metrics/prometheus/prometheus-k8s",permalink:"/notes/service/observability/metrics/prometheus/prometheus-k8s",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/observability/metrics/prometheus/prometheus-k8s.md",version:"current",frontMatter:{id:"prometheus-k8s",title:"Prometheus K8S"},sidebar:"docs",previous:{title:"Prometheus \u8054\u90a6",permalink:"/notes/service/observability/metrics/prometheus/prometheus-federation"},next:{title:"Prometheus \u5b58\u50a8",permalink:"/notes/service/observability/metrics/prometheus/prometheus-storage"}},m=[{value:"Tips",id:"tips",children:[]},{value:"kubernetes_sd_config",id:"kubernetes_sd_config",children:[]},{value:"prometheus-operator",id:"prometheus-operator",children:[]},{value:"kube-prometheus",id:"kube-prometheus",children:[]},{value:"stable/prometheus-operator",id:"stableprometheus-operator",children:[]},{value:"stable/prometheus",id:"stableprometheus",children:[]},{value:"bitnami/kube-prometheus",id:"bitnamikube-prometheus",children:[]}],p={toc:m};function c(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"tips"},"Tips"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/metrics-server"},"metrics-server"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/metrics-server/issues/7"},"https://github.com/kubernetes-sigs/metrics-server/issues/7")),(0,o.kt)("li",{parentName:"ul"},"\u4e0d\u662f\u7528\u6765\u5bf9\u5916\u63d0\u4f9b\u6307\u6807\u7684\u670d\u52a1"),(0,o.kt)("li",{parentName:"ul"},"\u4e3a\u5185\u90e8 HPA VPA \u670d\u52a1\u63d0\u4f9b Pod \u8d44\u6e90\u6307\u6807"),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6781\u5c11\u7684\u8d44\u6e90 -  0.5m CPU, 4 MB \u6bcf\u8282\u70b9"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-monitoring/kubernetes-mixin"},"kubernetes-monitoring/kubernetes-mixin"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Grafana dashboards and Prometheus alerts for Kubernetes."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/kube-state-metrics"},"kubernetes/kube-state-metrics"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Add-on agent to generate and expose cluster-level metrics.")))),(0,o.kt)("h2",{id:"kubernetes_sd_config"},"kubernetes_sd_config"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#kubernetes_sd_config"},"kubernetes_sd_config")),(0,o.kt)("li",{parentName:"ul"},"\u793a\u4f8b\u914d\u7f6e ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/prometheus/prometheus/blob/master/documentation/examples/prometheus-kubernetes.yml"},"prometheus-kubernetes.yml")),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"node"),(0,o.kt)("li",{parentName:"ul"},"service"),(0,o.kt)("li",{parentName:"ul"},"pod"),(0,o.kt)("li",{parentName:"ul"},"endpoints"),(0,o.kt)("li",{parentName:"ul"},"ingres")))),(0,o.kt)("h2",{id:"prometheus-operator"},"prometheus-operator"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/prometheus-operator/prometheus-operator"},"prometheus-operator/prometheus-operator")),(0,o.kt)("li",{parentName:"ul"},"\u529f\u80fd",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u901a\u8fc7 CRD \u6765\u90e8\u7f72\u7ba1\u7406 Prometheus\uff0cAlertmanager \u7b49\u7ec4\u4ef6"),(0,o.kt)("li",{parentName:"ul"},"\u7b80\u5316\u914d\u7f6e - versions, persistence, retention policies, replicas"),(0,o.kt)("li",{parentName:"ul"},"Prometheus Target \u914d\u7f6e - \u81ea\u52a8\u76d1\u63a7\u76ee\u6807\u914d\u7f6e - \u901a\u8fc7 annotation \u53d1\u73b0"))),(0,o.kt)("li",{parentName:"ul"},"\u4e4b\u524d\u662f coreos/prometheus-operator\uff0c\u81ea 0.41 \u5f00\u59cb\u53bb coreos\uff0c\u79fb\u5230\u72ec\u7acb\u7ec4\u7ec7 prometheus-operator \u4e0b"),(0,o.kt)("li",{parentName:"ul"},"CRD",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Prometheus - \u90e8\u7f72 Prometheus"),(0,o.kt)("li",{parentName:"ul"},"Alertmanager - \u90e8\u7f72 Alertmanager"),(0,o.kt)("li",{parentName:"ul"},"ThanosRuler - \u90e8\u7f72 thano rule"),(0,o.kt)("li",{parentName:"ul"},"ServiceMonitor - \u914d\u7f6e service \u76d1\u63a7"),(0,o.kt)("li",{parentName:"ul"},"PodMonitor - \u914d\u7f6e pod \u76d1\u63a7"),(0,o.kt)("li",{parentName:"ul"},"Probe - \u914d\u7f6e\u9759\u6001\u76d1\u63a7\u76ee\u6807",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"blackbox_exporter"))),(0,o.kt)("li",{parentName:"ul"},"PrometheusRule - \u914d\u7f6e \u544a\u8b66/\u8bb0\u5f55 \u89c4\u5219"))),(0,o.kt)("li",{parentName:"ul"},"\u76d1\u63a7\u5916\u90e8\u53ef\u4f7f\u7528 Service/externalName + ServiceMonitor \u6216\u4f7f\u7528 additionalScrapeConfigs \u9759\u6001\u914d\u7f6e"),(0,o.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/api.md"},"API"))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl api-resources --api-group monitoring.coreos.com\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\n# \u5b9a\u4e49\u90e8\u7f72 Prometheus\nkind: Prometheus\napiVersion: monitoring.coreos.com/v1\nmetadata:\n  name: kube-prometheus-prometheus\n  namespace: monitoring\nspec:\n  # \u989d\u5916\u7684\u6293\u53d6\u914d\u7f6e\n  additionalScrapeConfigs:\n    name: additional-scrape-configs\n    key: prometheus-additional.yaml\n  affinity: {} # \u8282\u70b9\u4eb2\u548c\n  alerting:\n    alertmanagers:\n      - name: kube-prometheus-alertmanager\n        namespace: monitoring\n        pathPrefix: /\n        port: http\n  enableAdminAPI: false\n  # \u6dfb\u52a0\u989d\u5916\u6807\u7b7e - \u591a\u96c6\u7fa4/\u79df\u6237 \u53ef\u7528\u4e8e\u6807\u8bb0\n  externalLabels:\n    cluster: wener\n  externalUrl: 'http://kube-prometheus-prometheus.monitoring:9090/'\n  image: 'docker.io/bitnami/prometheus:2.20.1-debian-10-r12'\n  listenLocal: false\n  logFormat: logfmt\n  logLevel: info\n  paused: false\n  podMetadata:\n    labels:\n      app.kubernetes.io/component: prometheus\n      app.kubernetes.io/instance: kube-prometheus\n      app.kubernetes.io/name: kube-prometheus\n  podMonitorNamespaceSelector: {}\n  podMonitorSelector: {}\n  probeNamespaceSelector: {}\n  probeSelector: {}\n  # \u8fdc\u7a0b\u5199 - \u914d\u7f6e\u7c7b\u4f3c\u4e8e prometheus \u7684 remote_write\n  remoteWrite:\n    - name: my-remote\n      remoteTimeout: 120s\n      url: 'https://receive.example.com/api/v1/receive'\n      # proxyUrl: ''\n      # tlsConfig: {}\n      # writeRelabelConfigs: {}\n\n      # basic auth \u7684 secret\n      basicAuth:\n        password:\n          key: password\n          name: prometheus-basic-auth\n          optional: false\n        username:\n          key: username\n          name: prometheus-basic-auth\n          optional: false\n      # \u961f\u5217\u914d\u7f6e - \u8c03\u4f18\u65f6\u4f7f\u7528\n      queueConfig:\n        # \u9ed8\u8ba4 5s\n        batchSendDeadline: 10s\n        # \u9ed8\u8ba4 500\n        capacity: 2500\n\n        # \u76ee\u524d promethues \u662f\u6ca1\u6709\u5b9e\u73b0\u7684\n        maxRetries: 0\n        # \u9ed8\u8ba4 100\n        maxSamplesPerSend: 5000\n        maxShards: 1000\n        minShards: 1\n\n        minBackoff: 30ms\n        maxBackoff: 100ms\n  remoteRead: []\n  replicas: 1\n  resources: {}\n  retention: 10d\n  retentionSize: 6GB\n  routePrefix: /\n  ruleNamespaceSelector: {}\n  ruleSelector: {}\n  securityContext:\n    fsGroup: 1001\n    runAsUser: 1001\n  serviceAccountName: kube-prometheus-prometheus\n  serviceMonitorNamespaceSelector: {}\n  serviceMonitorSelector: {}\n  # Prometheus \u672c\u5730\u5b58\u50a8\n  storage:\n    volumeClaimTemplate:\n      spec:\n        accessModes:\n          - ReadWriteOnce\n        resources:\n          requests:\n            storage: 8Gi\n        storageClassName: local-path\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"additionalScrapeConfigs")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'- job_name: "prometheus"\n  static_configs:\n  - targets: ["localhost:9090"]\n')),(0,o.kt)("h2",{id:"kube-prometheus"},"kube-prometheus"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u901a\u8fc7 jsonet \u5b9a\u5236\u5316\u548c\u5b89\u88c5"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/prometheus-operator/kube-prometheus"},"prometheus-operator/kube-prometheus"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Prometheus Operator"),(0,o.kt)("li",{parentName:"ul"},"HA Prometheus"),(0,o.kt)("li",{parentName:"ul"},"HA Alertmanager"),(0,o.kt)("li",{parentName:"ul"},"node-exporter"),(0,o.kt)("li",{parentName:"ul"},"Kubernetes Metrics APIs Prometheus Adapter"),(0,o.kt)("li",{parentName:"ul"},"kube-state-metrics"),(0,o.kt)("li",{parentName:"ul"},"Grafana")))))),(0,o.kt)("h2",{id:"stableprometheus-operator"},"stable/prometheus-operator"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"helm ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/helm/charts/tree/master/stable/prometheus-operator"},"stable/prometheus-operator")),(0,o.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e kube-prometheus\uff0c\u4f46\u901a\u8fc7 helm \u5b89\u88c5"),(0,o.kt)("li",{parentName:"ul"},"\u66f4\u65b0\u7ef4\u62a4\u8f83\u6162",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u76ee\u524d\u8fd8\u662f\u57fa\u4e8e coreos/prometheus-operator 0.38"))),(0,o.kt)("li",{parentName:"ul"},"\u5185\u5bb9",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"stable/kube-state-metrics"),(0,o.kt)("li",{parentName:"ul"},"stable/prometheus-node-exporter"),(0,o.kt)("li",{parentName:"ul"},"stable/grafana"),(0,o.kt)("li",{parentName:"ul"},"prometheus-operator"),(0,o.kt)("li",{parentName:"ul"},"prometheus"),(0,o.kt)("li",{parentName:"ul"},"alertmanager"),(0,o.kt)("li",{parentName:"ul"},"node-exporter"),(0,o.kt)("li",{parentName:"ul"},"kube-state-metrics"),(0,o.kt)("li",{parentName:"ul"},"service monitors",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u76d1\u63a7 kube \u7ec4\u4ef6"),(0,o.kt)("li",{parentName:"ul"},"kube-apiserver\u3001kube-scheduler\u3001kube-controller-manager\u3001etcd\u3001kube-dns/coredns\u3001kube-proxy"))),(0,o.kt)("li",{parentName:"ul"},"\u4f1a\u914d\u7f6e dashboards \u548c alters"))),(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5bfc\u5165 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-monitoring/kubernetes-mixin"},"kubernetes-monitoring/kubernetes-mixin")," \u56fe\u8868"),(0,o.kt)("li",{parentName:"ul"},"\u4e0e stable/prometheus \u76f8\u6bd4",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u591a\u4e86 grafana",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u9762\u677f\u914d\u7f6e"))),(0,o.kt)("li",{parentName:"ul"},"\u591a\u4e86 kube \u7ec4\u4ef6\u76d1\u63a7"),(0,o.kt)("li",{parentName:"ul"},"\u591a\u4e86 operator \u7528\u4e8e\u90e8\u7f72",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Prometheus"),(0,o.kt)("li",{parentName:"ul"},"Alertmanager"),(0,o.kt)("li",{parentName:"ul"},"ThanosRuler"),(0,o.kt)("li",{parentName:"ul"},"ServiceMonitor"),(0,o.kt)("li",{parentName:"ul"},"PodMonitor"),(0,o.kt)("li",{parentName:"ul"},"Probe"),(0,o.kt)("li",{parentName:"ul"},"PrometheusRule")))))),(0,o.kt)("h2",{id:"stableprometheus"},"stable/prometheus"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5355\u7eaf\u90e8\u7f72 prometheus"),(0,o.kt)("li",{parentName:"ul"},"\u5305\u542b",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"alertmanager"),(0,o.kt)("li",{parentName:"ul"},"node-exporter"),(0,o.kt)("li",{parentName:"ul"},"pushgateway"),(0,o.kt)("li",{parentName:"ul"},"configmap-reload - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/jimmidyson/configmap-reload"},"https://github.com/jimmidyson/configmap-reload")),(0,o.kt)("li",{parentName:"ul"},"kube-state-metrics"))),(0,o.kt)("li",{parentName:"ul"},"Pod \u6ce8\u89e3",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'prometheus.io/scrape: "true"'),(0,o.kt)("li",{parentName:"ul"},"prometheus.io/path: /metrics"),(0,o.kt)("li",{parentName:"ul"},'prometheus.io/port: "8080"'))),(0,o.kt)("li",{parentName:"ul"},"prometheus \u9ed8\u8ba4 ",(0,o.kt)("inlineCode",{parentName:"li"},"--storage.tsdb.retention.time")," 15d")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  persistentVolume:\n    enabled: false\n  global:\n    scrape_interval: 10s\n\nalertmanager:\n  enabled: false\npushgateway:\n  enabled: false\n")),(0,o.kt)("h2",{id:"bitnamikube-prometheus"},"bitnami/kube-prometheus"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/bitnami/charts/tree/master/bitnami/kube-prometheus"},"https://github.com/bitnami/charts/tree/master/bitnami/kube-prometheus")),(0,o.kt)("li",{parentName:"ul"},"\u5305\u542b",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Prometheus Operator"),(0,o.kt)("li",{parentName:"ul"},"Prometheus",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u4f1a\u901a\u8fc7 Operator \u90e8\u7f72"))),(0,o.kt)("li",{parentName:"ul"},"Alertmanager"))),(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 scrapeInterval: 30s")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u56fd\u5185\u65e0\u6cd5\u8bbf\u95ee\u8be5 Repo\uff0c\u53ef\u4f7f\u7528 https://charts.wener.tech \u6216 https://wenerme.github.io/charts\nhelm repo add bitnami https://charts.bitnami.com/bitnami\nhelm install kube-prometheus -n monitoring bitnami/kube-prometheus\n\nkubectl -n monitoring describe svc/kube-prometheus-prometheus\n\n# http://127.0.0.1:9090\nkubectl -n monitoring port-forward svc/kube-prometheus-prometheus 9090\n")))}c.isMDXComponent=!0}}]);