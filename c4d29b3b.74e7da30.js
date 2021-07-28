(window.webpackJsonp=window.webpackJsonp||[]).push([[875],{1172:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),m=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=m(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),b=m(n),p=a,O=b["".concat(l,".").concat(p)]||b[p]||u[p]||s;return n?r.a.createElement(O,c(c({ref:t},i),{},{components:n})):r.a.createElement(O,c({ref:t},i))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=p;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<s;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},948:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(8),s=(n(0),n(1172)),l={title:"NATS JetStream"},c={unversionedId:"queue/nats-jetstream",id:"queue/nats-jetstream",isDocsHomePage:!1,title:"NATS JetStream",description:"- nats-io/jetstream",source:"@site/notes/queue/nats-jetstream.md",slug:"/queue/nats-jetstream",permalink:"/notes/queue/nats-jetstream",editUrl:"https://github.com/wenerme/wener/edit/master/notes/queue/nats-jetstream.md",version:"current"},o=[],i={toc:o};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/nats-io/jetstream"},"nats-io/jetstream")),Object(s.b)("li",{parentName:"ul"},"\u7279\u6027",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"At-least-once delivery; exactly once within a window"),Object(s.b)("li",{parentName:"ul"},"Store messages and replay by time or sequence"),Object(s.b)("li",{parentName:"ul"},"Wildcard support"),Object(s.b)("li",{parentName:"ul"},"Account aware"),Object(s.b)("li",{parentName:"ul"},"Data at rest encryption"),Object(s.b)("li",{parentName:"ul"},"Cleanse specific messages (GDPR)"),Object(s.b)("li",{parentName:"ul"},"Horizontal scalability"),Object(s.b)("li",{parentName:"ul"},"Persist Streams and replay via Consumers"))),Object(s.b)("li",{parentName:"ul"},"Replica",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Source",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"\u521b\u5efa\u7684 stream \u6307\u5b9a source \u540e\u4f1a\u53bb\u6d88\u8d39\uff0c\u53ef\u591a\u4e2a source"),Object(s.b)("li",{parentName:"ul"},"\u53ef\u88ab\u89c6\u4e3a\u526f\u672c - \u8be5 stream \u591a\u8282\u70b9\u8fd0\u884c\u53ef\u5b9e\u73b0\u591a\u526f\u672c"),Object(s.b)("li",{parentName:"ul"},"\u914d\u7f6e\u4e0d\u540c\u7684\u6301\u4e45\u5316\u7b56\u7565"))),Object(s.b)("li",{parentName:"ul"},"Mirror",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"\u955c\u50cf\u53e6\u5916\u4e00\u4e2a stream"),Object(s.b)("li",{parentName:"ul"},"\u53ea\u80fd\u6d88\u8d39"),Object(s.b)("li",{parentName:"ul"},"\u4f8b\u5982 mirror \u4e00\u4e2a \u526f\u672c stream \u63d0\u4f9b\u8fd1\u671f\u67e5\u8be2\u548c\u6d88\u8d39"))))),Object(s.b)("li",{parentName:"ul"},"\u96c6\u7fa4",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Raft \u5b9e\u73b0"),Object(s.b)("li",{parentName:"ul"},"\u6240\u6709\u8282\u70b9\u52a0\u5165 Meta Group"),Object(s.b)("li",{parentName:"ul"},"\u6bcf\u4e2a stream \u7ec4\u6210\u4e00\u4e2a Stream Group"),Object(s.b)("li",{parentName:"ul"},"\u6bcf\u4e2a consumer \u7ec4\u6210\u4e00\u4e2a Consumer Group"),Object(s.b)("li",{parentName:"ul"},"\u63a8\u8350\u6df7\u5408 JetStream \u548c\u4e00\u822c Nats",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"\u56e0\u4e3a JetStream \u9700\u8981\u5b58\u50a8 - \u914d\u7f6e\u540e\u53ef\u9488\u5bf9\u8282\u70b9\u4f7f\u7528 JetStream \u4f18\u5316\u5b58\u50a8"))))),Object(s.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/nats-io/jsm.go"},"nats-io/jsm.go"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"JetStream Management Library for Golang"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/nats-io/nats-surveyor"},"nats-io/nats-surveyor"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"metrics, dashboard"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/nats-io/terraform-provider-jetstream/"},"nats-io/terraform-provider-jetstream"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Terraform \u7ba1\u7406 JetStream"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/nats-io/nack"},"nats-io/nack"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"K8S Controller")))))),Object(s.b)("p",null,":::"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"\u5b58\u50a8\u5c1a\u4e0d\u652f\u6301\u96c6\u7fa4")),Object(s.b)("p",null,":::"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},'# \u542f\u52a8 jetstream\nnats-server -js\n# \u914d\u7f6e\u542f\u52a8\nnats-server -c js.conf\n\n# \u5bb9\u5668\u542f\u52a8\n# \u9ed8\u8ba4 scrach \u955c\u50cf\u53ea\u5305\u542b /nats-server\ndocker run --rm -it -p 4222:4222 --name js nats:alpine -js\n\n\n# nats stream\n# ==================\n# \u521b\u5efa Stream\nnats str add ORDERS --subjects "ORDERS.*" --ack --max-msgs=-1 --max-bytes=-1 --max-age=1y --storage file --retention limits --max-msg-size=-1 --discard=old --replicas 3 --dupe-window=2m\n# \u8f93\u51fa stream \u914d\u7f6e\nnats str info ORDERS -j | jq .config\n# \u901a\u8fc7\u914d\u7f6e\u521b\u5efa\nnats str add ORDERS --config orders.json\n\n# \u6240\u6709 stream\nnats str ls\n# stream \u4fe1\u606f\nnats str info ORDERS\n# \u590d\u5236 stream\nnats str cp ORDERS ARCHIVE --subjects "ORDERS_ARCVHIVE.*" --max-age 2y\n# \u4fee\u6539 stream \u5355\u9879\u914d\u7f6e\nnats str edit ORDERS --subjects "ORDERS.*"\n# \u914d\u7f6e\u8986\u76d6\nnats str edit ORDERS --config orders.json\n\n# \u53d1\u5e03\u6d88\u606f\nnats pub ORDERS.scratch hello\n# \u53d1\u5e03\u5e26 ACK - \u786e\u8ba4\u6536\u5230\u6301\u4e45\u5316\nnats req ORDERS.scratch hello\n# \u6e05\u9664\u6240\u6709\u6d88\u606f\nnats str purge ORDERS -f\n# \u5220\u9664\u4e00\u6761\u6d88\u606f - SEQ\nnats str rmm ORDERS 1 -f\n\n# \u79fb\u9664 steam\nnats str rm ORDERS -f\n\n# nats consumer\n# ==================\n# \u6240\u6709 consumer\nnats con ls ORDERS\nnats con add ORDERS DISPATCH --filter ORDERS.processed --ack explicit --pull --deliver all --sample 100 --max-deliver 20 --replay instant --max-pending 0\nnats con add ORDERS NEW --filter ORDERS.received --ack explicit --pull --deliver all --max-deliver=-1 --sample 100\n# \u914d\u7f6e\nnats con info ORDERS DISPATCH -j | jq .config\n# MONITOR push\nnats con add ORDERS MONITOR --filter \'\' --ack none --target monitor.ORDERS --deliver last --replay instant\n\n# consumer \u72b6\u6001\nnats con info ORDERS DISPATCH\n\nnats pub ORDERS.processed "order 1"\nnats pub ORDERS.processed "order 2"\nnats pub ORDERS.processed "order 3"\n\n# Pull \u6d88\u8d39 \bACK \u6d88\u606f\n# --no-ack \u4e0d ACK \u7ee7\u7eed\u6d88\u8d39\n# ACK \u6267\u884c\u4e00\u6b21\u6d88\u8d39\u4e00\u6761\nnats con next ORDERS DISPATCH\nnats req \'$JS.API.CONSUMER.MSG.NEXT.ORDERS.DISPATCH\' \'\'\n\nnats con info ORDERS MONITOR\n# push \u6d88\u8d39 - \u4f1a\u4e00\u6b21\u6027\u6d88\u8d39\u6240\u6709\nnats sub monitor.ORDERS\n\n# nats \u76d1\u63a7\n# ==========\nnats event --js-advisory\n\n\n# nats \u5176\u4ed6\n# ==========\n# \u62a5\u544a\u7edf\u8ba1\nnats s report\n# \u53d1\u9001\u591a\u6761\u6d88\u606f\nnats req ORDERS.new "ORDER {{Count}}" --count 100\n\n# \u8f93\u51fa\u526f\u672c\u5173\u7cfb\u4e3a dot \u56fe\nnats s report --dot replication.dot\n\n# \u521b\u5efa\u6a21\u677f - \u5728 pub \u7684\u65f6\u5019\u751f\u6210\n# \u5220\u9664 template \u4f1a\u5220\u9664 \u6240\u6709 stream\nnats str template add CLIENTS --subjects "CLIENT.*" --ack --max-msgs=-1 --max-bytes=-1 --max-age=1y --storage file --retention limits --max-msg-size 2048 --max-streams 1024 --discard old\n')),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-conf"},"jetstream {\n   store_dir=nats\n}\n")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"stream.json")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "ORDERS",\n  "subjects": ["ORDERS.*"],\n  "retention": "limits",\n  "max_consumers": -1,\n  "max_msgs": -1,\n  "max_bytes": -1,\n  "max_age": 31536000000000000,\n  "max_msg_size": -1,\n  "storage": "file",\n  "discard": "old",\n  "num_replicas": 1,\n  "duplicate_window": 120000000000\n}\n')))}m.isMDXComponent=!0}}]);