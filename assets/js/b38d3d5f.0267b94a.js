"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[20309],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return k}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),o=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),g=o(a),k=n,d=g["".concat(u,".").concat(k)]||g[k]||m[k]||l;return a?r.createElement(d,i(i({ref:t},c),{},{components:a})):r.createElement(d,i({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=g;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},56159:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return o},toc:function(){return c},default:function(){return g}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),i=["components"],p={title:"Jaeger"},u=void 0,o={unversionedId:"service/observability/tracing/jaeger",id:"service/observability/tracing/jaeger",title:"Jaeger",description:"- jaegertracing/jaeger",source:"@site/notes/service/observability/tracing/jaeger.md",sourceDirName:"service/observability/tracing",slug:"/service/observability/tracing/jaeger",permalink:"/notes/service/observability/tracing/jaeger",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/observability/tracing/jaeger.md",tags:[],version:"current",frontMatter:{title:"Jaeger"},sidebar:"docs",previous:{title:"Tracing Awesome",permalink:"/notes/service/observability/tracing/tracing-awesome"},next:{title:"OpenTelemetry",permalink:"/notes/service/observability/tracing/opentelemetry"}},c=[{value:"agent",id:"agent",children:[],level:2},{value:"collector",id:"collector",children:[],level:2},{value:"ingester",id:"ingester",children:[],level:2},{value:"query",id:"query",children:[],level:2}],m={toc:c};function g(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/jaegertracing/jaeger"},"jaegertracing/jaeger"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"from Uber"))),(0,l.kt)("li",{parentName:"ul"},"\u5b58\u50a8",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5185\u5b58\u5b58\u50a8"),(0,l.kt)("li",{parentName:"ul"},"badger - \u672c\u5730\u6587\u4ef6\u5b58\u50a8"),(0,l.kt)("li",{parentName:"ul"},"cassandra - \u517c\u5bb9 scyllab"),(0,l.kt)("li",{parentName:"ul"},"elasticsearch"),(0,l.kt)("li",{parentName:"ul"},"kafka")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# badger \u6301\u4e45\u5b58\u50a8\ndocker run -it --rm \\\n  -v $PWD/data:/badger \\\n  -e SPAN_STORAGE_TYPE=badger \\\n  -e BADGER_EPHEMERAL=false \\\n  -e BADGER_DIRECTORY_VALUE=/badger/data \\\n  -e BADGER_DIRECTORY_KEY=/badger/key \\\n  -e COLLECTOR_ZIPKIN_HTTP_PORT=9411 \\\n  -p5775:5775/udp -p6831:6831/udp -p6832:6832/udp \\\n  -p5778:5778 -p16686:16686 -p14268:14268 -p9411:9411 \\\n  jaegertracing/all-in-one:latest\n")),(0,l.kt)("h1",{id:"\u7ec4\u4ef6"},"\u7ec4\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"collector - span -> \u5b58\u50a8"),(0,l.kt)("li",{parentName:"ul"},"ingester - kafka -> \u5b58\u50a8"),(0,l.kt)("li",{parentName:"ul"},"agent - sidecar"),(0,l.kt)("li",{parentName:"ul"},"query - api, ui")),(0,l.kt)("h2",{id:"agent"},"agent"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u4e00\u5b9a\u9700\u8981\u8fd0\u884c - \u4f46\u63a8\u8350"),(0,l.kt)("li",{parentName:"ul"},"sidecar \u89d2\u8272 - \u8d1f\u8d23\u4e0e \u5176\u5b83\u7ec4\u4ef6\u4ea4\u4e92")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"port"),(0,l.kt)("th",{parentName:"tr",align:null},"protocol"),(0,l.kt)("th",{parentName:"tr",align:null},"function"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6831"),(0,l.kt)("td",{parentName:"tr",align:null},"UDP"),(0,l.kt)("td",{parentName:"tr",align:null},"jaeger.thrift compact")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6832"),(0,l.kt)("td",{parentName:"tr",align:null},"UDP"),(0,l.kt)("td",{parentName:"tr",align:null},"jaeger.thrift binary - Node.js Jaeger client")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5778"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP"),(0,l.kt)("td",{parentName:"tr",align:null},"serve configs, sampling strategies")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5775"),(0,l.kt)("td",{parentName:"tr",align:null},"UDP"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("del",{parentName:"td"},"zipkin.thrift compact")," - 2016 \u65e9\u671f \u5ba2\u6237\u7aef")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"14271"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ba1\u7406 - \u5065\u5eb7\u68c0\u67e5 / , \u6307\u6807 /metrics")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm \\\n  -p6831:6831/udp \\\n  -p6832:6832/udp \\\n  -p5778:5778/tcp \\\n  -p5775:5775/udp \\\n  jaegertracing/jaeger-agent:1.25\n")),(0,l.kt)("h2",{id:"collector"},"collector"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65e0\u72b6\u6001"),(0,l.kt)("li",{parentName:"ul"},"\u4e0e\u5b58\u50a8\u540e\u7aef\u4ea4\u4e92 - \u5199\u5165\u5230\u5b58\u50a8"),(0,l.kt)("li",{parentName:"ul"},"SPAN_STORAGE_TYPE",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"cassandra, elasticsearch, kafka, grpc-plugin, badger, memory"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u591a\u4e2a - \u9017\u53f7\u5206\u9694 - \u67e5\u8be2\u53ea\u4f1a\u7528\u7b2c\u4e00\u4e2a"),(0,l.kt)("li",{parentName:"ul"},"\u5927\u578b\u751f\u4ea7\u63a8\u8350 es",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u56e0\u4e3a es \u652f\u6301\u641c\u7d22"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 cassandra \u9700\u8981\u5728 jeager"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.jaegertracing.io/docs/1.25/faq/#what-is-the-recommended-storage-backend"},"What is the recommended storage backend?")))))),(0,l.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u63d2\u4ef6 - \u57fa\u4e8e unix-socket ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/jaegertracing/jaeger/tree/master/plugin/storage/grpc"},"grpc"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/jaegertracing/jaeger-clickhouse"},"jaegertracing/jaeger-clickhouse"))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"port"),(0,l.kt)("th",{parentName:"tr",align:null},"protocol"),(0,l.kt)("th",{parentName:"tr",align:null},"function"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"14250"),(0,l.kt)("td",{parentName:"tr",align:null},"gRPC"),(0,l.kt)("td",{parentName:"tr",align:null},"jaeger-agent send spans - model.proto")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"14268"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP"),(0,l.kt)("td",{parentName:"tr",align:null},"spans in jaeger.thrift binary")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9411"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP"),(0,l.kt)("td",{parentName:"tr",align:null},"Zipkin spans in Thrift, JSON, Proto (disabled by default)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"14269"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ba1\u7406 - \u5065\u5eb7\u68c0\u67e5 / , \u6307\u6807 /metrics")))),(0,l.kt)("h2",{id:"ingester"},"ingester"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"kafka -> \u5176\u4ed6\u540e\u7aef\u5b58\u50a8 - es \u6216 cassandra"),(0,l.kt)("li",{parentName:"ul"},"\u7ba1\u7406\u7aef\u53e3 14270")),(0,l.kt)("h2",{id:"query"},"query"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"UI")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Port"),(0,l.kt)("th",{parentName:"tr",align:null},"Protocol"),(0,l.kt)("th",{parentName:"tr",align:null},"Function"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"16685"),(0,l.kt)("td",{parentName:"tr",align:null},"gRPC"),(0,l.kt)("td",{parentName:"tr",align:null},"gRPC QueryService")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"16686"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/api/*"),", UI /")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"16687"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ba1\u7406\u7aef\u53e3")))))}g.isMDXComponent=!0}}]);