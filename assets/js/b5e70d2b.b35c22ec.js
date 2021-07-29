"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[99061],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return v}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(t),v=r,h=u["".concat(l,".").concat(v)]||u[v]||m[v]||i;return t?a.createElement(h,c(c({ref:n},p),{},{components:t})):a.createElement(h,c({ref:n},p))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=t[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},55356:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var a=t(22122),r=t(19756),i=(t(67294),t(3905)),c=["components"],o={id:"consul-connect",title:"Consule Connect Mesh"},l=void 0,s={unversionedId:"devops/service/consul-connect",id:"devops/service/consul-connect",isDocsHomePage:!1,title:"Consule Connect Mesh",description:"Tips",source:"@site/notes/devops/service/consul-connect.md",sourceDirName:"devops/service",slug:"/devops/service/consul-connect",permalink:"/notes/devops/service/consul-connect",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/service/consul-connect.md",version:"current",frontMatter:{id:"consul-connect",title:"Consule Connect Mesh"},sidebar:"docs",previous:{title:"Consul \u914d\u7f6e",permalink:"/notes/devops/service/consul-conf"},next:{title:"Consul",permalink:"/notes/devops/service/consul"}},p=[{value:"Tips",id:"tips",children:[]},{value:"annotations",id:"annotations",children:[]},{value:"k8s",id:"k8s",children:[]},{value:"whomai",id:"whomai",children:[]}],m={toc:p};function u(e){var n=e.components,t=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f18\u52bf",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"mesh gateway \u6253\u901a\u96c6\u7fa4"),(0,i.kt)("li",{parentName:"ul"},"ingress gateway \u5141\u8bb8\u5916\u90e8\u8bbf\u95ee\u5185\u90e8\u670d\u52a1"),(0,i.kt)("li",{parentName:"ul"},"terminating gateway \u5141\u8bb8\u5185\u90e8 mtls \u8bbf\u95ee\u5916\u90e8\u670d\u52a1"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u4ee3\u7801\u5c42\u96c6\u6210 - \u63d0\u4f9b Go SDK"),(0,i.kt)("li",{parentName:"ul"},"\u8fde\u901a\u6027\u597d"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301 7 \u5c42\u8def\u7531"),(0,i.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u96c6\u6210 prometheus \u548c grafana - \u66f4\u9002\u5408\u5229\u7528\u73b0\u6709\u5b9e\u4f8b"))),(0,i.kt)("li",{parentName:"ul"},"\u52a3\u52bf",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u9700\u8981\u4e24\u4e2a sidecard",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"consul-connect-inject-init"),(0,i.kt)("li",{parentName:"ul"},"consul-connect-envoy-sidecar"),(0,i.kt)("li",{parentName:"ul"},"consul-connect-lifecycle-sidecar"))),(0,i.kt)("li",{parentName:"ul"},"connect \u4e3b\u8981 \u652f\u6301\u8fde\u901a\u6027\uff0c\u8ddf\u8e2a\u548c\u6307\u6807\u90fd\u6ca1\u6709\u652f\u6301"),(0,i.kt)("li",{parentName:"ul"},"\u754c\u9762\u529f\u80fd\u8f83\u5f31"),(0,i.kt)("li",{parentName:"ul"},"\u6d41\u91cf\u5207\u5206\u5b9e\u4f8b\u5206\u7ec4\u9700\u8981\u914d\u7f6e\uff0c\u6ca1\u6709\u754c\u9762"),(0,i.kt)("li",{parentName:"ul"},"observability \u548c \u6307\u6807\u90fd\u4f9d\u8d56 envoy - \u6ca1\u6709\u9ed8\u8ba4\u914d\u7f6e"))),(0,i.kt)("li",{parentName:"ul"},"\u7279\u6027",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"mtls"),(0,i.kt)("li",{parentName:"ul"},"intention - Service-to-Service \u6743\u9650",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"consul intention create -deny web '*'")))),(0,i.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u6ce8\u5165",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"consul.hashicorp.com/connect-inject: 'true'")))))),(0,i.kt)("li",{parentName:"ul"},"Control Plane",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Consul UI"))),(0,i.kt)("li",{parentName:"ul"},"Data Plane",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5185\u5efa - \u4e3b\u8981\u7528\u4e8e\u5f00\u53d1"),(0,i.kt)("li",{parentName:"ul"},"envoy"))),(0,i.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5fc5\u987b\u914d\u5408 consule \u4f7f\u7528"))),(0,i.kt)("li",{parentName:"ul"},"Mesh Gateway",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7f51\u5173\u4e92\u901a - \u8de8\u96c6\u7fa4/\u533a\u57df"),(0,i.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5230\u670d\u52a1"))),(0,i.kt)("li",{parentName:"ul"},"Ingress Gateway",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u63a5\u53d7\u5916\u90e8\u6d41\u91cf"),(0,i.kt)("li",{parentName:"ul"},"\u5916\u90e8\u8bbf\u95ee\u5185\u90e8\u670d\u52a1"))),(0,i.kt)("li",{parentName:"ul"},"Terminating Gateway",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5185\u90e8\u8bbf\u95ee\u5916\u90e8"))),(0,i.kt)("li",{parentName:"ul"},"Intention - ACL \u63a7\u5236"),(0,i.kt)("li",{parentName:"ul"},"\u4ee3\u7406",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5185\u5efa - \u4e0d\u9002\u7528\u4e8e\u751f\u4ea7"),(0,i.kt)("li",{parentName:"ul"},"Envoy"))),(0,i.kt)("li",{parentName:"ul"},"\u8bc1\u4e66\u7ba1\u7406",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5185\u5efa CA"),(0,i.kt)("li",{parentName:"ul"},"Vault"))),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hashicorp/consul-k8s-prometheus-grafana-hashicups-demoapp"},"hashicorp/consul-k8s-prometheus-grafana-hashicups-demoapp"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl port-forward service/consul-server 8500:8500\n# tls\n# kubectl port-forward service/consul-server 8501:8501\n\n# token\nexport CONSUL_HTTP_TOKEN=$(kubectl get secrets/consul-bootstrap-acl-token --template={{.data.token}} | base64 -d)\nconsul info\n\n# in pod\nexport CONSUL_HTTP_ADDR="${HOST_IP}:8500"\n\n# \u547d\u4ee4\u884c\u542f\u52a8\n# -- -l trace - envoy \u7684 trace \u65e5\u5fd7\nconsul connect envoy \\\n  -sidecar-for echo -http-addr http://127.0.0.1:8500 \\\n  -grpc-addr http://127.0.0.1:8502 \\\n  -admin-bind 127.0.0.1:0\n')),(0,i.kt)("h2",{id:"annotations"},"annotations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"consul.hashicorp.com/connect-inject",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"bool"),(0,i.kt)("li",{parentName:"ul"},"\u662f\u5426\u6ce8\u5165 sidecard"))),(0,i.kt)("li",{parentName:"ul"},"consul.hashicorp.com/connect-service",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7684\u540d\u5b57"),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4e3a\u7b2c\u4e00\u4e2a container \u7684\u540d\u5b57"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u542f\u7528\u4e86 acl\uff0c\u540d\u5b57\u5fc5\u987b\u4e0e ServiceAccount \u76f8\u540c"))),(0,i.kt)("li",{parentName:"ul"},"consul.hashicorp.com/connect-service-port",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u63a5\u53d7\u8bf7\u6c42\u7684\u7aef\u53e3"),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4e3a\u7b2c\u4e00\u4e2a\u66b4\u9732\u7aef\u53e3"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u662f\u540d\u5b57\u4e5f\u53ef\u4ee5\u662f\u7aef\u53e3\u53f7"),(0,i.kt)("li",{parentName:"ul"},"proxy \u76d1\u542c\u52a8\u6001\u7aef\u53e3"))),(0,i.kt)("li",{parentName:"ul"},"consul.hashicorp.com/connect-service-upstreams",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u8fde\u63a5\u5230\u7684\u4e0a\u6e38\u670d\u52a1"),(0,i.kt)("li",{parentName:"ul"},"\u9017\u53f7\u5206\u5272\u6307\u5b9a\u591a\u4e2a"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[service-name]:[port]:[optional datacenter]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prepared_query:[query name]:[port]")))),(0,i.kt)("li",{parentName:"ul"},"consul.hashicorp.com/connect-service-protocol ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6ce8\u518c\u534f\u8bae"),(0,i.kt)("li",{parentName:"ul"},"helm \u5b89\u88c5\u65f6\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"defaultProtocol")," \u6307\u5b9a\u9ed8\u8ba4\u534f\u8bae",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u6307\u5b9a\u4e3a http"))))),(0,i.kt)("li",{parentName:"ul"},"consul.hashicorp.com/service-tags",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u9017\u53f7\u5206\u5272\u6307\u5b9a\u591a\u4e2a"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"consul.hashicorp.com/service-meta-<KEY>")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"consul.hashicorp.com/sidecar-proxy-")," - proxy \u914d\u7f6e",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"cpu/memory-limit/request"),(0,i.kt)("li",{parentName:"ul"},"helm \u9ed8\u8ba4\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"li"},"connectInject.sidecarProxy.resources"))))),(0,i.kt)("h2",{id:"k8s"},"k8s"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: alpine-connect\n---\napiVersion: v1\nkind: Pod\nmetadata:\n  name: alpine-connect\n  annotations:\n    consul.hashicorp.com/connect-inject: 'true'\n    consul.hashicorp.com/connect-service-upstreams: consul:8500,static-server:1234,web-test:2019,whoami-v1:1992\nspec:\n  serviceAccountName: alpine-connect\n  containers:\n  - name: alpine-connect\n    image: wener/base\n    command:\n    - tail\n    args:\n    - -f\n    - /dev/null\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl exec alpine-connect -it -c alpine-connect -- sh\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: static-server\n---\napiVersion: v1\nkind: Pod\nmetadata:\n  name: static-server\n  annotations:\n    consul.hashicorp.com/connect-inject: 'true'\nspec:\n  containers:\n    # consule \u4e2d\u7684\u670d\u52a1\u540d\n    - name: static-server\n      image: hashicorp/http-echo:latest\n      args:\n        - -text=\"hello world\"\n        - -listen=:8080\n      ports:\n        - containerPort: 8080\n          name: http\n  # \u5982\u679c\u542f\u7528\u4e86 ACL\uff0c serviceAccountName \u5fc5\u987b\u8981\u5339\u914d Consil \u4e2d\u7684\u670d\u52a1\u540d\n  serviceAccountName: static-server\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: static-client\n---\napiVersion: v1\nkind: Pod\nmetadata:\n  name: static-client\n  annotations:\n    'consul.hashicorp.com/connect-inject': 'true'\n    'consul.hashicorp.com/connect-service-upstreams': 'static-server:1234'\nspec:\n  containers:\n    # \u670d\u52a1\u540d\n    - name: static-client\n      image: tutum/curl:latest\n      # \u4fdd\u6301\u8fd0\u884c\n      command: ['/bin/sh', '-c', '--']\n      args: ['while true; do sleep 30; done;']\n  # ACL \u8981\u6c42\n  serviceAccountName: static-client\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: web-test\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: web-test\n  labels:\n    app: web-test\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: web-test\n  template:\n    metadata:\n      name: web-test\n      labels:\n        app: web-test\n      annotations:\n        consul.hashicorp.com/connect-service-upstreams: 'static-server:1234'\n        consul.hashicorp.com/connect-inject: 'true'\n    spec:\n      containers:\n        - name: web-test\n          image: nginx:alpine\n          ports:\n            - containerPort: 80\n      serviceAccountName: web-test\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: static-server-next\n---\napiVersion: v1\nkind: Pod\nmetadata:\n  name: static-server-next\n  annotations:\n    consul.hashicorp.com/connect-inject: 'true'\nspec:\n  containers:\n    - name: static-server-next\n      image: hashicorp/http-echo:latest\n      args:\n        - -text=\"hello world\"\n        - -listen=:8080\n      ports:\n        - containerPort: 8080\n          name: http\n  serviceAccountName: static-server-next\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'cat <<HCL | consul config write -\nKind      = "service-defaults"\nName      = "static-server"\nProtocol  = "http"\nHCL\ncat <<HCL | consul config write -\nKind      = "service-defaults"\nName      = "static-server-next"\nProtocol  = "http"\nHCL\ncat <<HCL | consul config write -\nKind = "service-router"\nName = "static-server"\nRoutes = [\n  {\n    Match {\n      HTTP {\n        PathPrefix = "/next"\n      }\n    }\n\n    Destination {\n      Service = "static-server-next"\n    }\n  },\n]\nHCL\n')),(0,i.kt)("h2",{id:"whomai"},"whomai"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: whoami\n---\nkind: Deployment\napiVersion: apps/v1\nmetadata:\n  name: whoami-v1\n  labels:\n    app: whoami-v1\nspec:\n  replicas: 2\n  selector:\n    matchLabels:\n      app: whoami-v1\n  template:\n    metadata:\n      labels:\n        app: whoami-v1\n      annotations:\n        consul.hashicorp.com/connect-inject: 'true'\n        consul.hashicorp.com/connect-service-protocol: http\n        consul.hashicorp.com/service-tags: app=whoami\n        consul.hashicorp.com/service-meta-version: v1\n    spec:\n      serviceAccountName: whoami\n      containers:\n        - name: whoami\n          image: containous/whoami\n          # diff\n          env:\n          - name: WHOAMI_NAME\n            value: V1\n          ports:\n            - containerPort: 80\n          livenessProbe:\n            httpGet:\n              path: /health\n              port: 80\n            initialDelaySeconds: 3\n            periodSeconds: 3\n---\nkind: Deployment\napiVersion: apps/v1\nmetadata:\n  name: whoami-v2\n  labels:\n    app: whoami-v2\nspec:\n  replicas: 2\n  selector:\n    matchLabels:\n      app: whoami-v2\n  template:\n    metadata:\n      labels:\n        app: whoami-v2\n      annotations:\n        consul.hashicorp.com/connect-inject: 'true'\n        consul.hashicorp.com/connect-service-protocol: http\n        consul.hashicorp.com/service-tags: app=whoami\n        consul.hashicorp.com/service-meta-version: v2\n    spec:\n      # same service\n      serviceAccountName: whoami\n      containers:\n        - name: whoami\n          image: containous/whoami\n          # diff\n          env:\n          - name: WHOAMI_NAME\n            value: V2\n          ports:\n            - containerPort: 80\n          livenessProbe:\n            httpGet:\n              path: /health\n              port: 80\n            initialDelaySeconds: 3\n            periodSeconds: 3\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'cat <<HCL | consul config write -\nKind      = "service-defaults"\nName      = "whoami"\nProtocol  = "http"\nExpose    = {\n  Checks = true\n  Paths = [{\n    Path = "/health"\n  }]\n}\nHCL\ncat <<HCL | consul config write -\nKind          = "service-resolver"\nName          = "whoami"\nDefaultSubset = "v2"\nSubsets = {\n  "v1" = {\n    Filter = "Service.Meta.version == v1"\n  }\n  "v2" = {\n    Filter = "Service.Meta.version == v2"\n  }\n}\nHCL\n\ncat <<HCL | consul config write -\nKind = "service-router"\nName = "whoami"\nRoutes = [\n  {\n    Match {\n      HTTP {\n        Header = [\n          {\n            Name  = "x-version"\n            Exact = "2"\n          },\n        ]\n      }\n    }\n    Destination {\n      Service       = "whoami"\n      ServiceSubset = "v2"\n    }\n  },\n  {\n    Match {\n      HTTP {\n        PathPrefix = "/v2"\n      }\n    }\n    Destination {\n      Service       = "whoami"\n      ServiceSubset = "v2"\n    }\n  },\n\n    {\n    Match {\n      HTTP {\n        Header = [\n          {\n            Name  = "x-version"\n            Exact = "1"\n          },\n        ]\n      }\n    }\n    Destination {\n      Service       = "whoami"\n      ServiceSubset = "v1"\n    }\n  },\n    {\n    Match {\n      HTTP {\n        PathPrefix = "/v1"\n      }\n    }\n    Destination {\n      Service       = "whoami"\n      ServiceSubset = "v1"\n    }\n  },\n]\nHCL\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5206\u7ec4")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hcl"},'Kind          = "service-resolver"\nName          = "whoami"\nDefaultSubset = "v1"\nSubsets = {\n  "v1" = {\n    Filter = "Service.Meta.version == v1"\n  }\n  "v2" = {\n    Filter = "Service.Meta.version == v2"\n  }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6d41\u91cf\u5207\u5206")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hcl"},'Kind = "service-splitter"\nName = "web"\nSplits = [\n  {\n    Weight        = 90\n    ServiceSubset = "v1"\n  },\n  {\n    Weight        = 10\n    ServiceSubset = "v2"\n  },\n]\n')))}u.isMDXComponent=!0}}]);