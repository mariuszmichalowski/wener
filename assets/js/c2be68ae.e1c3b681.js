"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[20527],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=l(n),k=a,b=m["".concat(i,".").concat(k)]||m[k]||c[k]||s;return n?r.createElement(b,o(o({ref:t},p),{},{components:n})):r.createElement(b,o({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71091:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),o=["components"],u={id:"nats",title:"NATS"},i=void 0,l={unversionedId:"queue/nats/nats",id:"queue/nats/nats",isDocsHomePage:!1,title:"NATS",description:"- nats-io/nats-server \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/queue/nats/README.md",sourceDirName:"queue/nats",slug:"/queue/nats/nats",permalink:"/notes/queue/nats/nats",editUrl:"https://github.com/wenerme/wener/edit/master/notes/queue/nats/README.md",tags:[],version:"current",frontMatter:{id:"nats",title:"NATS"},sidebar:"docs",previous:{title:"mosquitto",permalink:"/notes/queue/mosquitto"},next:{title:"nats",permalink:"/notes/queue/nats/nats-cli"}},p=[{value:"nats-server.conf",id:"nats-serverconf",children:[]},{value:"Notes",id:"notes",children:[]},{value:"auth",id:"auth",children:[]},{value:"nats-account-server",id:"nats-account-server",children:[]},{value:"nats-top",id:"nats-top",children:[]},{value:"cannot create a queue subscription for a consumer without a deliver group",id:"cannot-create-a-queue-subscription-for-a-consumer-without-a-deliver-group",children:[]}],c={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/nats-io/nats-server"},"nats-io/nats-server")," \u662f\u4ec0\u4e48\uff1f",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\b \u504f\u5411\u901a\u8baf\u534f\u8bae\uff0c\u7528\u4f5c \u6d88\u606f\u961f\u5217"),(0,s.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u6ca1\u6709\u6301\u4e45\u5316"),(0,s.kt)("li",{parentName:"ul"},"\u534f\u8bae\u652f\u6301 MQTT, NATS, WebSocket"))),(0,s.kt)("li",{parentName:"ul"},"\u7aef\u53e3",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"4222 \u5ba2\u6237\u7aef"),(0,s.kt)("li",{parentName:"ul"},"8222 HTTP \u7ba1\u7406\u548c\u4fe1\u606f\u4e0a\u62a5"),(0,s.kt)("li",{parentName:"ul"},"6222 \u96c6\u7fa4\u8def\u7531"))),(0,s.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/nats-io/natscli"},"nats-io/natscli"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u547d\u4ee4\u884c\u5de5\u5177"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/nats-io/nsc"},"nats-io/nsc"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"nats \u8d26\u53f7\u7ba1\u7406\u529f\u80fd"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.nats.io/compare-nats"},"compare-nats")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.nats.io/nats-protocol/nats-protocol"},"Client Protocol"))))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# \u670d\u52a1\u7aef - \u5927\u7ea6 10mb\n# docker \u542f\u52a8\ndocker run -d --name nats-main -p 4222:4222 -p 6222:6222 -p 8222:8222 nats:alpine\n# macOS \u5b89\u88c5\u542f\u52a8\nbrew install nats-server\nnats-server\n\n# nats \u5de5\u5177\u9700\u8981\u989d\u5916 tap \u6216\u8005\u76f4\u63a5\u4e0b\u8f7d https://github.com/nats-io/natscli/releases\nbrew tap nats-io/nats-tools\nbrew install nats-io/nats-tools/nats\nnats --help\n\nnats account info\nnats rtt\n")),(0,s.kt)("h2",{id:"nats-serverconf"},"nats-server.conf"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-conf"},"# Client port of 4222 on all interfaces\nport: 4222\n\n# HTTP monitoring port\nmonitor_port: 8222\n\n# NSC \u751f\u6210\u7684 Operator JWT\noperator: $HOME/.nsc/nats/O/O.jwt\n# Account Server\nresolver: URL(http://localhost:9090/jwt/v1/accounts/)\n\n# This is for clustering multiple servers together.\ncluster {\n\n  # Route connections to be received on any interface on port 6222\n  port: 6222\n\n  # Routes are protected, so need to use them with --routes flag\n  # e.g. --routes=nats-route://ruser:T0pS3cr3t@otherdockerhost:6222\n  authorization {\n    user: ruser\n    password: T0pS3cr3t\n    timeout: 2\n  }\n\n  # Routes are actively solicited and connected to from this server.\n  # This Docker image has none by default, but you can pass a\n  # flag to the gnatsd docker image to create one to an existing server.\n  routes = []\n}\n")),(0,s.kt)("h2",{id:"notes"},"Notes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Subject-Based Messaging",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Subject \u540d\u5b57 ",(0,s.kt)("inlineCode",{parentName:"li"},"[a-z0-9.]+")),(0,s.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,s.kt)("inlineCode",{parentName:"li"},"time.us")," \u65b9\u5f0f\u5b9e\u73b0\u7ea7\u8054"),(0,s.kt)("li",{parentName:"ul"},"\u5355\u5c42\u5339\u914d ",(0,s.kt)("inlineCode",{parentName:"li"},"time.*.east")),(0,s.kt)("li",{parentName:"ul"},"\u591a\u5c42\u5339\u914d ",(0,s.kt)("inlineCode",{parentName:"li"},"time.us.>")))),(0,s.kt)("li",{parentName:"ul"},"Publish-Subscribe"),(0,s.kt)("li",{parentName:"ul"},"Request-Reply"),(0,s.kt)("li",{parentName:"ul"},"Queue Groups / Queue Subscribe / Consumer Group",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Kafka Consumer Group \u6982\u5ff5"),(0,s.kt)("li",{parentName:"ul"},"\u591a\u4e2a consumer \u5171\u4eab\u6d88\u8d39\u4f4d\u7f6e"),(0,s.kt)("li",{parentName:"ul"},"queue \u8868\u793a\u8fd9\u4e2a group - \u6709\u552f\u4e00\u7684\u540d\u5b57"),(0,s.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u8bbe\u7f6e durable \u5219\u4f1a\u5728 consumer \u5173\u95ed\u5b8c\u65f6\u79fb\u9664 queue \u4fe1\u606f"),(0,s.kt)("li",{parentName:"ul"},"durable \u4e3a\u4e00\u4e2a consumer \u7684\u540d\u5b57"),(0,s.kt)("li",{parentName:"ul"},"\u5f53\u6240\u6709 consumer unsub \u65f6\uff0c\u4e5f\u4f1a\u79fb\u9664 queue \u4fe1\u606f"))),(0,s.kt)("li",{parentName:"ul"},"ACK",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u54cd\u5e94\u4e00\u6761\u6d88\u8d39\u7684\u6d88\u606f"),(0,s.kt)("li",{parentName:"ul"},"\u8fd4\u56de ",(0,s.kt)("inlineCode",{parentName:"li"},"+ACK")))),(0,s.kt)("li",{parentName:"ul"},"Sequence Numbers"),(0,s.kt)("li",{parentName:"ul"},"Leaf Nodes",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u8def\u7531\u6d88\u606f\u5230\u5176\u4ed6\u96c6\u7fa4")))),(0,s.kt)("h2",{id:"auth"},"auth"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"nats \u901a\u8fc7 account \u5b9e\u73b0\u79df\u6237\u9694\u79bb"),(0,s.kt)("li",{parentName:"ul"},"\u4f7f\u7528 account \u9700\u8981\u8bbe\u7f6e auth"),(0,s.kt)("li",{parentName:"ul"},"\u8ba4\u8bc1\u65b9\u5f0f",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"token - \u53ef\u4ee5\u914d\u7f6e\u660e\u6587\u6216 bcrypt \u52a0\u5bc6\u7684 token"),(0,s.kt)("li",{parentName:"ul"},"user+password - \u5bc6\u7801\u652f\u6301 bcrypt \u52a0\u5bc6"),(0,s.kt)("li",{parentName:"ul"},"tls"),(0,s.kt)("li",{parentName:"ul"},"nkey"))),(0,s.kt)("li",{parentName:"ul"},"\u6388\u6743",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"publish"),(0,s.kt)("li",{parentName:"ul"},"subscribe"),(0,s.kt)("li",{parentName:"ul"},"allow_responses - max,expires")))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'authorization {\n  default_permissions = {\n    publish = "SANDBOX.*"\n    subscribe = ["PUBLIC.>", "_INBOX.>"]\n  }\n  ADMIN = {\n    publish = ">"\n    subscribe = ">"\n  }\n  REQUESTOR = {\n    publish = ["req.a", "req.b"]\n    subscribe = "_INBOX.>"\n  }\n  RESPONDER = {\n    subscribe = ["req.a", "req.b"]\n    publish = "_INBOX.>"\n  }\n  users = [\n    {user: admin,   password: $ADMIN_PASS, permissions: $ADMIN}\n    {user: client,  password: $CLIENT_PASS, permissions: $REQUESTOR}\n    {user: service,  password: $SERVICE_PASS, permissions: $RESPONDER}\n    {user: other, password: $OTHER_PASS}\n    {\n      user: test\n      password: test\n      permissions: {\n          publish: {\n              deny: ">"\n          },\n          subscribe: {\n              allow: "client.>"\n          }\n      }\n    }\n    { user: b, password: b, permissions: {subscribe: "q", allow_responses: true } },\n    { user: c, password: c, permissions: {subscribe: "q", allow_responses: { max: 5, expires: "1m" } } }\n  ]\n}\n\naccounts: {\n  A: {\n    users: [\n      {user: a, password: a}\n    ]\n    exports: [\n      {stream: puba.>}\n      {service: pubq.>}\n      {stream: b.>, accounts: [B]}\n      {service: q.b, accounts: [B]}\n    ]\n  },\n  B: {\n    users: [\n      {user: b, password: b}\n    ]\n    imports: [\n      {stream: {account: A, subject: b.>}}\n      {service: {account: A, subject: q.b}}\n    ]\n  },\n  C: {\n    users: [\n      {user: c, password: c}\n    ]\n    imports: [\n      {stream: {account: A, subject: puba.>}, prefix: from_a}\n      {service: {account: A, subject: pubq.C}, to: Q}\n    ]\n  }\n}\nno_auth_user: a\n')),(0,s.kt)("h2",{id:"nats-account-server"},"nats-account-server"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/nats-io/nats-account-server"},"nats-io/nats-account-server"))),(0,s.kt)("h2",{id:"nats-top"},"nats-top"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/nats-io/nats-top"},"nats-io/nats-top"))),(0,s.kt)("h1",{id:"faq"},"FAQ"),(0,s.kt)("h2",{id:"cannot-create-a-queue-subscription-for-a-consumer-without-a-deliver-group"},"cannot create a queue subscription for a consumer without a deliver group"))}m.isMDXComponent=!0}}]);