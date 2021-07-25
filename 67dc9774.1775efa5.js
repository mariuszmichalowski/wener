(window.webpackJsonp=window.webpackJsonp||[]).push([[440],{1166:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),m=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=m(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},c=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,b=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=m(r),c=a,h=u["".concat(b,".").concat(c)]||u[c]||p[c]||o;return r?n.a.createElement(h,l(l({ref:t},s),{},{components:r})):n.a.createElement(h,l({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,b=new Array(o);b[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,b[1]=l;for(var s=2;s<o;s++)b[s]=r[s];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},514:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return m}));var a=r(3),n=r(8),o=(r(0),r(1166)),b={id:"prometheus-k8s",title:"Prometheus K8S"},l={unversionedId:"service/observability/metrics/prometheus/prometheus-k8s",id:"service/observability/metrics/prometheus/prometheus-k8s",isDocsHomePage:!1,title:"Prometheus K8S",description:"Tips",source:"@site/notes/service/observability/metrics/prometheus/prometheus-k8s.md",slug:"/service/observability/metrics/prometheus/prometheus-k8s",permalink:"/notes/service/observability/metrics/prometheus/prometheus-k8s",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/observability/metrics/prometheus/prometheus-k8s.md",version:"current",sidebar:"docs",previous:{title:"Prometheus \u8054\u90a6",permalink:"/notes/service/observability/metrics/prometheus/prometheus-federation"},next:{title:"Prometheus \u5b58\u50a8",permalink:"/notes/service/observability/metrics/prometheus/prometheus-storage"}},i=[{value:"Tips",id:"tips",children:[]},{value:"kubernetes_sd_config",id:"kubernetes_sd_config",children:[]},{value:"prometheus-operator",id:"prometheus-operator",children:[]},{value:"kube-prometheus",id:"kube-prometheus",children:[]},{value:"stable/prometheus-operator",id:"stableprometheus-operator",children:[]},{value:"stable/prometheus",id:"stableprometheus",children:[]},{value:"bitnami/kube-prometheus",id:"bitnamikube-prometheus",children:[]}],s={toc:i};function m(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"tips"},"Tips"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/metrics-server"},"metrics-server"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/metrics-server/issues/7"},"https://github.com/kubernetes-sigs/metrics-server/issues/7")),Object(o.b)("li",{parentName:"ul"},"\u4e0d\u662f\u7528\u6765\u5bf9\u5916\u63d0\u4f9b\u6307\u6807\u7684\u670d\u52a1"),Object(o.b)("li",{parentName:"ul"},"\u4e3a\u5185\u90e8 HPA VPA \u670d\u52a1\u63d0\u4f9b Pod \u8d44\u6e90\u6307\u6807"),Object(o.b)("li",{parentName:"ul"},"\u4f7f\u7528\u6781\u5c11\u7684\u8d44\u6e90 -  0.5m CPU, 4 MB \u6bcf\u8282\u70b9"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/kubernetes-monitoring/kubernetes-mixin"},"kubernetes-monitoring/kubernetes-mixin"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Grafana dashboards and Prometheus alerts for Kubernetes."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/kubernetes/kube-state-metrics"},"kubernetes/kube-state-metrics"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Add-on agent to generate and expose cluster-level metrics.")))),Object(o.b)("h2",{id:"kubernetes_sd_config"},"kubernetes_sd_config"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#kubernetes_sd_config"},"kubernetes_sd_config")),Object(o.b)("li",{parentName:"ul"},"\u793a\u4f8b\u914d\u7f6e ",Object(o.b)("a",{parentName:"li",href:"https://github.com/prometheus/prometheus/blob/master/documentation/examples/prometheus-kubernetes.yml"},"prometheus-kubernetes.yml")),Object(o.b)("li",{parentName:"ul"},"\u652f\u6301",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"node"),Object(o.b)("li",{parentName:"ul"},"service"),Object(o.b)("li",{parentName:"ul"},"pod"),Object(o.b)("li",{parentName:"ul"},"endpoints"),Object(o.b)("li",{parentName:"ul"},"ingres")))),Object(o.b)("h2",{id:"prometheus-operator"},"prometheus-operator"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/prometheus-operator/prometheus-operator"},"prometheus-operator/prometheus-operator")),Object(o.b)("li",{parentName:"ul"},"\u529f\u80fd",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u901a\u8fc7 CRD \u6765\u90e8\u7f72\u7ba1\u7406 Prometheus\uff0cAlertmanager \u7b49\u7ec4\u4ef6"),Object(o.b)("li",{parentName:"ul"},"\u7b80\u5316\u914d\u7f6e - versions, persistence, retention policies, replicas"),Object(o.b)("li",{parentName:"ul"},"Prometheus Target \u914d\u7f6e - \u81ea\u52a8\u76d1\u63a7\u76ee\u6807\u914d\u7f6e - \u901a\u8fc7 annotation \u53d1\u73b0"))),Object(o.b)("li",{parentName:"ul"},"\u4e4b\u524d\u662f coreos/prometheus-operator\uff0c\u81ea 0.41 \u5f00\u59cb\u53bb coreos\uff0c\u79fb\u5230\u72ec\u7acb\u7ec4\u7ec7 prometheus-operator \u4e0b"),Object(o.b)("li",{parentName:"ul"},"CRD",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Prometheus - \u90e8\u7f72 Prometheus"),Object(o.b)("li",{parentName:"ul"},"Alertmanager - \u90e8\u7f72 Alertmanager"),Object(o.b)("li",{parentName:"ul"},"ThanosRuler - \u90e8\u7f72 thano rule"),Object(o.b)("li",{parentName:"ul"},"ServiceMonitor - \u914d\u7f6e service \u76d1\u63a7"),Object(o.b)("li",{parentName:"ul"},"PodMonitor - \u914d\u7f6e pod \u76d1\u63a7"),Object(o.b)("li",{parentName:"ul"},"Probe - \u914d\u7f6e\u9759\u6001\u76d1\u63a7\u76ee\u6807",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"blackbox_exporter"))),Object(o.b)("li",{parentName:"ul"},"PrometheusRule - \u914d\u7f6e \u544a\u8b66/\u8bb0\u5f55 \u89c4\u5219"))),Object(o.b)("li",{parentName:"ul"},"\u76d1\u63a7\u5916\u90e8\u53ef\u4f7f\u7528 Service/externalName + ServiceMonitor \u6216\u4f7f\u7528 additionalScrapeConfigs \u9759\u6001\u914d\u7f6e"),Object(o.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/api.md"},"API"))))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"kubectl api-resources --api-group monitoring.coreos.com\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"---\n# \u5b9a\u4e49\u90e8\u7f72 Prometheus\nkind: Prometheus\napiVersion: monitoring.coreos.com/v1\nmetadata:\n  name: kube-prometheus-prometheus\n  namespace: monitoring\nspec:\n  # \u989d\u5916\u7684\u6293\u53d6\u914d\u7f6e\n  additionalScrapeConfigs:\n    name: additional-scrape-configs\n    key: prometheus-additional.yaml\n  affinity: {} # \u8282\u70b9\u4eb2\u548c\n  alerting:\n    alertmanagers:\n      - name: kube-prometheus-alertmanager\n        namespace: monitoring\n        pathPrefix: /\n        port: http\n  enableAdminAPI: false\n  # \u6dfb\u52a0\u989d\u5916\u6807\u7b7e - \u591a\u96c6\u7fa4/\u79df\u6237 \u53ef\u7528\u4e8e\u6807\u8bb0\n  externalLabels:\n    cluster: wener\n  externalUrl: 'http://kube-prometheus-prometheus.monitoring:9090/'\n  image: 'docker.io/bitnami/prometheus:2.20.1-debian-10-r12'\n  listenLocal: false\n  logFormat: logfmt\n  logLevel: info\n  paused: false\n  podMetadata:\n    labels:\n      app.kubernetes.io/component: prometheus\n      app.kubernetes.io/instance: kube-prometheus\n      app.kubernetes.io/name: kube-prometheus\n  podMonitorNamespaceSelector: {}\n  podMonitorSelector: {}\n  probeNamespaceSelector: {}\n  probeSelector: {}\n  # \u8fdc\u7a0b\u5199 - \u914d\u7f6e\u7c7b\u4f3c\u4e8e prometheus \u7684 remote_write\n  remoteWrite:\n    - name: my-remote\n      remoteTimeout: 120s\n      url: 'https://receive.example.com/api/v1/receive'\n      # proxyUrl: ''\n      # tlsConfig: {}\n      # writeRelabelConfigs: {}\n\n      # basic auth \u7684 secret\n      basicAuth:\n        password:\n          key: password\n          name: prometheus-basic-auth\n          optional: false\n        username:\n          key: username\n          name: prometheus-basic-auth\n          optional: false\n      # \u961f\u5217\u914d\u7f6e - \u8c03\u4f18\u65f6\u4f7f\u7528\n      queueConfig:\n        # \u9ed8\u8ba4 5s\n        batchSendDeadline: 10s\n        # \u9ed8\u8ba4 500\n        capacity: 2500\n\n        # \u76ee\u524d promethues \u662f\u6ca1\u6709\u5b9e\u73b0\u7684\n        maxRetries: 0\n        # \u9ed8\u8ba4 100\n        maxSamplesPerSend: 5000\n        maxShards: 1000\n        minShards: 1\n\n        minBackoff: 30ms\n        maxBackoff: 100ms\n  remoteRead: []\n  replicas: 1\n  resources: {}\n  retention: 10d\n  retentionSize: 6GB\n  routePrefix: /\n  ruleNamespaceSelector: {}\n  ruleSelector: {}\n  securityContext:\n    fsGroup: 1001\n    runAsUser: 1001\n  serviceAccountName: kube-prometheus-prometheus\n  serviceMonitorNamespaceSelector: {}\n  serviceMonitorSelector: {}\n  # Prometheus \u672c\u5730\u5b58\u50a8\n  storage:\n    volumeClaimTemplate:\n      spec:\n        accessModes:\n          - ReadWriteOnce\n        resources:\n          requests:\n            storage: 8Gi\n        storageClassName: local-path\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"additionalScrapeConfigs")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'- job_name: "prometheus"\n  static_configs:\n  - targets: ["localhost:9090"]\n')),Object(o.b)("h2",{id:"kube-prometheus"},"kube-prometheus"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u901a\u8fc7 jsonet \u5b9a\u5236\u5316\u548c\u5b89\u88c5"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/prometheus-operator/kube-prometheus"},"prometheus-operator/kube-prometheus"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u7ec4\u4ef6",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Prometheus Operator"),Object(o.b)("li",{parentName:"ul"},"HA Prometheus"),Object(o.b)("li",{parentName:"ul"},"HA Alertmanager"),Object(o.b)("li",{parentName:"ul"},"node-exporter"),Object(o.b)("li",{parentName:"ul"},"Kubernetes Metrics APIs Prometheus Adapter"),Object(o.b)("li",{parentName:"ul"},"kube-state-metrics"),Object(o.b)("li",{parentName:"ul"},"Grafana")))))),Object(o.b)("h2",{id:"stableprometheus-operator"},"stable/prometheus-operator"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"helm ",Object(o.b)("a",{parentName:"li",href:"https://github.com/helm/charts/tree/master/stable/prometheus-operator"},"stable/prometheus-operator")),Object(o.b)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e kube-prometheus\uff0c\u4f46\u901a\u8fc7 helm \u5b89\u88c5"),Object(o.b)("li",{parentName:"ul"},"\u66f4\u65b0\u7ef4\u62a4\u8f83\u6162",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u76ee\u524d\u8fd8\u662f\u57fa\u4e8e coreos/prometheus-operator 0.38"))),Object(o.b)("li",{parentName:"ul"},"\u5185\u5bb9",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"stable/kube-state-metrics"),Object(o.b)("li",{parentName:"ul"},"stable/prometheus-node-exporter"),Object(o.b)("li",{parentName:"ul"},"stable/grafana"),Object(o.b)("li",{parentName:"ul"},"prometheus-operator"),Object(o.b)("li",{parentName:"ul"},"prometheus"),Object(o.b)("li",{parentName:"ul"},"alertmanager"),Object(o.b)("li",{parentName:"ul"},"node-exporter"),Object(o.b)("li",{parentName:"ul"},"kube-state-metrics"),Object(o.b)("li",{parentName:"ul"},"service monitors",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u76d1\u63a7 kube \u7ec4\u4ef6"),Object(o.b)("li",{parentName:"ul"},"kube-apiserver\u3001kube-scheduler\u3001kube-controller-manager\u3001etcd\u3001kube-dns/coredns\u3001kube-proxy"))),Object(o.b)("li",{parentName:"ul"},"\u4f1a\u914d\u7f6e dashboards \u548c alters"))),Object(o.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5bfc\u5165 ",Object(o.b)("a",{parentName:"li",href:"https://github.com/kubernetes-monitoring/kubernetes-mixin"},"kubernetes-monitoring/kubernetes-mixin")," \u56fe\u8868"),Object(o.b)("li",{parentName:"ul"},"\u4e0e stable/prometheus \u76f8\u6bd4",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u591a\u4e86 grafana",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u9762\u677f\u914d\u7f6e"))),Object(o.b)("li",{parentName:"ul"},"\u591a\u4e86 kube \u7ec4\u4ef6\u76d1\u63a7"),Object(o.b)("li",{parentName:"ul"},"\u591a\u4e86 operator \u7528\u4e8e\u90e8\u7f72",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Prometheus"),Object(o.b)("li",{parentName:"ul"},"Alertmanager"),Object(o.b)("li",{parentName:"ul"},"ThanosRuler"),Object(o.b)("li",{parentName:"ul"},"ServiceMonitor"),Object(o.b)("li",{parentName:"ul"},"PodMonitor"),Object(o.b)("li",{parentName:"ul"},"Probe"),Object(o.b)("li",{parentName:"ul"},"PrometheusRule")))))),Object(o.b)("h2",{id:"stableprometheus"},"stable/prometheus"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5355\u7eaf\u90e8\u7f72 prometheus"),Object(o.b)("li",{parentName:"ul"},"\u5305\u542b",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"alertmanager"),Object(o.b)("li",{parentName:"ul"},"node-exporter"),Object(o.b)("li",{parentName:"ul"},"pushgateway"),Object(o.b)("li",{parentName:"ul"},"configmap-reload - ",Object(o.b)("a",{parentName:"li",href:"https://github.com/jimmidyson/configmap-reload"},"https://github.com/jimmidyson/configmap-reload")),Object(o.b)("li",{parentName:"ul"},"kube-state-metrics"))),Object(o.b)("li",{parentName:"ul"},"Pod \u6ce8\u89e3",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},'prometheus.io/scrape: "true"'),Object(o.b)("li",{parentName:"ul"},"prometheus.io/path: /metrics"),Object(o.b)("li",{parentName:"ul"},'prometheus.io/port: "8080"'))),Object(o.b)("li",{parentName:"ul"},"prometheus \u9ed8\u8ba4 ",Object(o.b)("inlineCode",{parentName:"li"},"--storage.tsdb.retention.time")," 15d")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"server:\n  persistentVolume:\n    enabled: false\n  global:\n    scrape_interval: 10s\n\nalertmanager:\n  enabled: false\npushgateway:\n  enabled: false\n")),Object(o.b)("h2",{id:"bitnamikube-prometheus"},"bitnami/kube-prometheus"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/bitnami/charts/tree/master/bitnami/kube-prometheus"},"https://github.com/bitnami/charts/tree/master/bitnami/kube-prometheus")),Object(o.b)("li",{parentName:"ul"},"\u5305\u542b",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Prometheus Operator"),Object(o.b)("li",{parentName:"ul"},"Prometheus",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u4f1a\u901a\u8fc7 Operator \u90e8\u7f72"))),Object(o.b)("li",{parentName:"ul"},"Alertmanager"))),Object(o.b)("li",{parentName:"ul"},"\u9ed8\u8ba4 scrapeInterval: 30s")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# \u56fd\u5185\u65e0\u6cd5\u8bbf\u95ee\u8be5 Repo\uff0c\u53ef\u4f7f\u7528 https://charts.wener.tech \u6216 https://wenerme.github.io/charts\nhelm repo add bitnami https://charts.bitnami.com/bitnami\nhelm install kube-prometheus -n monitoring bitnami/kube-prometheus\n\nkubectl -n monitoring describe svc/kube-prometheus-prometheus\n\n# http://127.0.0.1:9090\nkubectl -n monitoring port-forward svc/kube-prometheus-prometheus 9090\n")))}m.isMDXComponent=!0}}]);