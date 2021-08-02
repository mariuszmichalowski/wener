"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[96822],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,k=c["".concat(o,".").concat(d)]||c[d]||s[d]||l;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},62988:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return m},default:function(){return c}});var n=a(22122),r=a(19756),l=(a(67294),a(3905)),i=["components"],p={title:"Dapr"},o=void 0,u={unversionedId:"dev/cloud/dapr",id:"dev/cloud/dapr",isDocsHomePage:!1,title:"Dapr",description:"- dapr/dapr \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/dev/cloud/dapr.md",sourceDirName:"dev/cloud",slug:"/dev/cloud/dapr",permalink:"/notes/dev/cloud/dapr",editUrl:"https://github.com/wenerme/wener/edit/master/notes/dev/cloud/dapr.md",version:"current",frontMatter:{title:"Dapr"},sidebar:"docs",previous:{title:"WAV",permalink:"/notes/dev/format/wav"},next:{title:"Dapr Kubernetes",permalink:"/notes/dev/cloud/dapr-k8s"}},m=[{value:"SDK",id:"sdk",children:[]},{value:"Sidecar",id:"sidecar",children:[]},{value:"Actor",id:"actor",children:[]},{value:"Notes",id:"notes",children:[]},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]}],s={toc:m};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/dapr/dapr"},"dapr/dapr")," \u662f\u4ec0\u4e48\uff1f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e91\u539f\u751f\u5f00\u53d1\u5de5\u5177\u96c6")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install dapr/tap/dapr-cli\n\n# \u672c\u5730\u542f\u52a8 Go \u5e94\u7528\ndapr run --app-id example-service \\\n  --app-protocol grpc \\\n  --app-port 50001 \\\n  go run main.go\n\n# \u542f\u52a8 JS \u5e94\u7528\ndapr run --app-id nodeapp --app-port 3000 --dapr-http-port 3500 app.js\n")),(0,l.kt)("h2",{id:"sdk"},"SDK"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Language"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Client"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Server"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Actor"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},".NET"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Stable"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:"center"},"ASP.NET Core"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Stable"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:"center"},"gRPC"),(0,l.kt)("td",{parentName:"tr",align:"center"},"FastAPI",(0,l.kt)("br",null),"Flask")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Java"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Stable"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Spring Boot"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Go"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Stable"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PHP"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Stable"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Client",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u670d\u52a1\u65b9\u6cd5\u8bf7\u6c42"),(0,l.kt)("li",{parentName:"ul"},"\u72b6\u6001\u5b58\u50a8"),(0,l.kt)("li",{parentName:"ul"},"PubSub"),(0,l.kt)("li",{parentName:"ul"},"\u7ed1\u5b9a\u64cd\u4f5c"),(0,l.kt)("li",{parentName:"ul"},"Secret \u83b7\u53d6"),(0,l.kt)("li",{parentName:"ul"},"Virtual Actor \u4ea4\u4e92"))),(0,l.kt)("li",{parentName:"ul"},"Server \u6269\u5c55 - Dapr \u670d\u52a1\u6269\u5c55",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u80fd\u88ab\u5176\u4ed6\u670d\u52a1\u8c03\u7528"),(0,l.kt)("li",{parentName:"ul"},"\u8ba2\u9605\u4e3b\u9898"))),(0,l.kt)("li",{parentName:"ul"},"Actor",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u65b9\u6cd5\u88ab\u8bf7\u6c42"),(0,l.kt)("li",{parentName:"ul"},"\u72b6\u6001\u4fdd\u5b58\u83b7\u53d6"),(0,l.kt)("li",{parentName:"ul"},"Timer \u56de\u8c03"),(0,l.kt)("li",{parentName:"ul"},"\u6301\u4e45\u5316 reminder")))),(0,l.kt)("h2",{id:"sidecar"},"Sidecar"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7aef\u53e3 3500"),(0,l.kt)("li",{parentName:"ul"},"\u5143\u6570\u636e - /v1.0/metadata"),(0,l.kt)("li",{parentName:"ul"},"\u5065\u5eb7 - /v1.0/healthz"),(0,l.kt)("li",{parentName:"ul"},"\u670d\u52a1\u8c03\u7528 - /v1.0/invoke",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"gRPC, HTTP"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/v1.0/invoke/<appId>/method/<method-name>"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},"/v1.0/invoke/nodeapp.production/method/neworder"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"production \u4e3a namespace"))))),(0,l.kt)("li",{parentName:"ul"},"NameResolution - consul, dns, kubernetes, mdns"))),(0,l.kt)("li",{parentName:"ul"},"\u72b6\u6001\u7ba1\u7406 - /v1.0/state",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 Redis, PostgreSQL, MySQL, Hazelcast, Consul, MongoDB, Zookeeper"))),(0,l.kt)("li",{parentName:"ul"},"PubSub - /v1.0/publish, /v1.0/subscribe",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 Kafka, Hazelcast, MQTT, NATS Streaming, Pulsar, RabbitMQ, Redis"))),(0,l.kt)("li",{parentName:"ul"},"Binding - /v1.0/bindings",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 APN, Cron, HTTP, Kafka, MQTT, MySQL, PostgreSQL, RabbitMQ, Redis, SMTP, Local Storage, AliOSS"))),(0,l.kt)("li",{parentName:"ul"},"Actor - /v1.0/actors",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f9d\u8d56 state - etag, tx \u652f\u6301"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/v1.0/actors/<actorType>/<actorId>/<method/state/timers/reminders>")))),(0,l.kt)("li",{parentName:"ul"},"Observability"),(0,l.kt)("li",{parentName:"ul"},"\u5bc6\u94a5\u7ba1\u7406 - /v1.0/secrets",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Env, File, Vault, Kubernetes Vault")))),(0,l.kt)("h2",{id:"actor"},"Actor"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Actor_model"},"Actor")," - lowest-level \u201cunit of computation\u201d"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.microsoft.com/en-us/research/project/orleans-virtual-actors/"},"Virtual Actors")),(0,l.kt)("li",{parentName:"ul"},"Go \u4e0d\u652f\u6301 actor"),(0,l.kt)("li",{parentName:"ul"},"actor",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 state"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 sub - \u53ef\u4ee5 pub")))),(0,l.kt)("h2",{id:"notes"},"Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"dapr - \u547d\u4ee4\u884c"),(0,l.kt)("li",{parentName:"ul"},"daprd - sidecar"),(0,l.kt)("li",{parentName:"ul"},"dashboard - \u9762\u677f"),(0,l.kt)("li",{parentName:"ul"},"placement",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"distributed hashing - distribute the actor instances across various pods of the user service"),(0,l.kt)("li",{parentName:"ul"},"\u53ea\u7528\u4e8e actor"))))),(0,l.kt)("li",{parentName:"ul"},"SDK - Go, Java, PHP, Python, .NET - WIP JS, Rust, C++",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.dapr.io/developing-applications/sdks/sdk-serialization/"},"Serialization")))),(0,l.kt)("li",{parentName:"ul"},"Middleware",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9650\u6d41\u3001OAuth2\u3001OAuth2 client credentials\u3001Bearer\u3001OPA"),(0,l.kt)("li",{parentName:"ul"},"Uppercase - \u6d4b\u8bd5\u4f7f\u7528"))),(0,l.kt)("li",{parentName:"ul"},"~/.dapr/",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"config.yaml"),(0,l.kt)("li",{parentName:"ul"},"components/",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"pubsub.yaml"),(0,l.kt)("li",{parentName:"ul"},"statestore.yaml"))),(0,l.kt)("li",{parentName:"ul"},"bin/",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"daprd"),(0,l.kt)("li",{parentName:"ul"},"dashboard"),(0,l.kt)("li",{parentName:"ul"},"web/"))))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.dapr.io/reference/"},"Dapr Reference"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# self-host \u521d\u59cb\u5316 - docker - placement :50005, redis :6379, zipkin :9411\n# --network \u6307\u5b9a docker network\ndapr init\ndapr init -s # slim self-hosted - \u4e0d\u542f\u52a8 placement service, Redis, Zipkin\n\n# k8s \u521d\u59cb\u5316\n# --enable-ha\n# --enable-mtls - \u9ed8\u8ba4\u5f00\u542f\n# -n dapr-system\ndapr init -k\ndapr init -k --wait --timeout 600 --runtime-version 1.1.0 # \u6307\u5b9a\u7248\u672c\u3001\u8d85\u65f6\u3001\u7b49\u5f85\u5b8c\u6210\n\n# \u9762\u677f - \u76ee\u524d\u529f\u80fd\u6bd4\u8f83\u7b80\u5355\ndapr dashboard -p 9999\n\n# \u5b9e\u9a8c sidecar\ndapr run --app-id myapp --dapr-http-port 3500\n# \u5b58\u50a8\u72b6\u6001\ncurl -X POST -H "Content-Type: application/json" -d \'[{ "key": "name", "value": "Bruce Wayne"}]\' http://localhost:3500/v1.0/state/statestore\ndocker exec -it dapr_redis redis-cli keys \'*\'\n# hash "myapp||name"\n\n# \u5b9e\u9a8c\u5b9a\u4e49 secret \u7ec4\u4ef6\necho \'{"my-secret" : "Secret here"}\' > mysecrets.json\nmkdir my-components\ncat <<CONF > my-components/localSecretStore.yaml\napiVersion: dapr.io/v1alpha1\nkind: Component\nmetadata:\n  name: my-secret-store\n  namespace: default\nspec:\n  type: secretstores.local.file\n  version: v1\n  metadata:\n  - name: secretsFile\n    value: $PWD/mysecrets.json\n  - name: nestedSeparator\n    value: ":"\nCONF\ndapr run --app-id myapp --dapr-http-port 3500 --components-path ./my-components\n# \u8bf7\u6c42 json \u4e2d\u7684\u5185\u5bb9\ncurl http://localhost:3500/v1.0/secrets/my-secret-store/my-secret\n')),(0,l.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"CDR Configuration"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},'dapr.io/config: "zipkin"')," \u4f7f\u7528")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: dapr.io/v1alpha1\nkind: Configuration\nmetadata:\n  name: zipkin\n  namespace: default\nspec:\n  tracing:\n    samplingRate: "1"\n    zipkin:\n      # \u53ef\u4ee5 selfhost\n      endpointAddress: "http://localhost:9411/api/v2/spans"\n      # k8s\n      endpointAddress: "http://zipkin.default.svc.cluster.local:9411/api/v2/spans"\n\n  # API ACL\n  api:\n    allowed:\n    - name: state # state, invoke, secrets, bindings, publish, actors, metadata\n      version: v1.0\n      protocol: http # http, grpc\n\n  # \u670d\u52a1\u8bbf\u95ee\u63a7\u5236\n  accessControl:\n    defaultAction: deny\n    trustDomain: "public"\n    policies:\n    - appId: app1\n      defaultAction: allow\n      trustDomain: \'public\'\n      namespace: "default"\n    - appId: app1\n      defaultAction: deny\n      trustDomain: \'public\'\n      namespace: "default"\n      operations:\n      - name: /op1 # /op1/*\n        httpVerb: [\'POST\', \'PUT\'] # [\'*\']\n        action: allow\n\n  # \u9884\u89c8\u7279\u6027\n  features:\n  - name: Feature1\n    enabled: true\n')))}c.isMDXComponent=!0}}]);