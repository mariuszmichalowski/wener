(window.webpackJsonp=window.webpackJsonp||[]).push([[542],{602:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return o}));var a=r(2),n=r(7),i=(r(0),r(766)),c={id:"tracing",title:"Tracing"},p={unversionedId:"devops/tracing/tracing",id:"devops/tracing/tracing",isDocsHomePage:!1,title:"Tracing",description:"Tips",source:"@site/notes/devops/tracing/README.md",slug:"/devops/tracing/tracing",permalink:"/notes/devops/tracing/tracing",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/tracing/README.md",version:"current",sidebar:"docs",previous:{title:"VictoriaMetrics",permalink:"/notes/devops/metrics/victoria-metrics"},next:{title:"\u65e5\u5fd7",permalink:"/notes/service/logging/logging"}},b=[{value:"Tips",id:"tips",children:[]},{value:"FAQ",id:"faq",children:[{value:"Jaeger vs Zipkin",id:"jaeger-vs-zipkin",children:[]}]}],l={rightToc:b};function o(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Tracing_(software)"}),"Tracing")),Object(i.b)("li",{parentName:"ul"},"Google ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://research.google.com/pubs/pub36356.html"}),"Dapper"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"a Large-Scale Distributed Systems Tracing Infrastructure"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"http://opentracing.io/"}),"opentracing"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Vendor-neutral APIs and instrumentation for distributed tracing"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/openzipkin/zipkin"}),"openzipkin/zipkin"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Java"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/jaegertracing/jaeger"}),"jaegertracing/jaeger"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Golang"),Object(i.b)("li",{parentName:"ul"},"Thrift"),Object(i.b)("li",{parentName:"ul"},"CNCF Jaeger, a Distributed Tracing System"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://jaegertracing.io/"}),"https://jaegertracing.io/")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/apache/incubator-skywalking"}),"apache/skywalking"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Java"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://spring.io/projects/spring-cloud-sleuth"}),"Spring Cloud Sleuth"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://cloud.spring.io/spring-cloud-sleuth/reference/html/"}),"\u53c2\u8003\u624b\u518c")),Object(i.b)("li",{parentName:"ul"},"spring-cloud-sleuth-zipkin \u652f\u6301\u96c6\u6210 Zipkin\uff0c\u9ed8\u8ba4\u53d1\u9001\u5230 ",Object(i.b)("inlineCode",{parentName:"li"},"http://localhost:9411"),"\uff0c\u901a\u8fc7 ",Object(i.b)("inlineCode",{parentName:"li"},"spring.zipkin.baseUrl")," \u914d\u7f6e"),Object(i.b)("li",{parentName:"ul"},"\u4f1a\u8bb0\u5f55 trace \u4fe1\u606f\u5230 Slf4J MDC"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/openzipkin-contrib/brave-opentracing"}),"openzipkin-contrib/brave-opentracing"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"OpenTracing \u9002\u914d Zipkin"))),Object(i.b)("li",{parentName:"ul"},"W3C ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/w3c/trace-context"}),"trace-context"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"HTTP \u6dfb\u52a0 trace \u5934 traceparent,traceparent"),Object(i.b)("li",{parentName:"ul"},"\u5934\u4e2d\u4fe1\u606f\u5305\u542b version\u3001trace-id\u3001parent-id\u3001trace-flags"))),Object(i.b)("li",{parentName:"ul"},"APM (application performance monitor)")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker run -it --rm \\\n  -e COLLECTOR_ZIPKIN_HTTP_PORT=9411 \\\n  -p5775:5775/udp -p6831:6831/udp -p6832:6832/udp \\\n  -p5778:5778 -p16686:16686 -p14268:14268 -p9411:9411 \\\n  jaegertracing/all-in-one:latest\n")),Object(i.b)("h2",{id:"faq"},"FAQ"),Object(i.b)("h3",{id:"jaeger-vs-zipkin"},"Jaeger vs Zipkin"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Jaeger",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Golang"),Object(i.b)("li",{parentName:"ul"},"CNCF \u9879\u76ee"),Object(i.b)("li",{parentName:"ul"},"\u66f4\u9002\u7528\u4e8e Kubernates \u73af\u5883"),Object(i.b)("li",{parentName:"ul"},"\u5206\u4e3a agent\u3001collector\u3001query \u7b49\u89d2\u8272"),Object(i.b)("li",{parentName:"ul"},"\u9ed8\u8ba4 0.1% \u91c7\u6837"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/spring-cloud/spring-cloud-sleuth/issues/628"}),"spring-cloud-sleuth#628")," - Jaeger integration",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u53ef\u901a\u8fc7 ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/openzipkin-contrib/brave-opentracing"}),"brave-opentracing")," \u6765\u4f7f\u7528\uff0c\u4f46\u4f1a\u4e22\u5931\u4e00\u4e9b jaeger \u7684\u7279\u6027"))))),Object(i.b)("li",{parentName:"ul"},"Zipkin",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Java"),Object(i.b)("li",{parentName:"ul"},"\u5728\u5bb9\u5668\u5316\u6f6e\u6d41\u524d\u4fbf\u5df2\u5b58\u5728"),Object(i.b)("li",{parentName:"ul"},"\u5355\u670d\u52a1\uff0c\u62a5\u8868\u3001\u91c7\u96c6"),Object(i.b)("li",{parentName:"ul"},"Spring Cloud Sleuth \u6709\u96c6\u6210")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"jaeger")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.jaegertracing.io/docs/1.12/architecture/"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://www.jaegertracing.io/img/architecture-v1.png",alt:"jaeger architecture"})))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"zipkin"),"\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://zipkin.io/pages/architecture.html"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://zipkin.io/public/img/architecture-1.png",alt:"zipkin architecture"})))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.bizety.com/2019/01/14/distributed-tracing-for-microservices-jaeger-vs-zipkin/"}),"Distributed Tracing for Microservices: Jaeger vs. Zipkin")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://logz.io/blog/zipkin-vs-jaeger/"}),"Zipkin vs Jaeger: Getting Started With Tracing"))))))}o.isMDXComponent=!0},766:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return j}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),o=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=o(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),u=o(r),m=a,j=u["".concat(c,".").concat(m)]||u[m]||s[m]||i;return r?n.a.createElement(j,p(p({ref:t},l),{},{components:r})):n.a.createElement(j,p({ref:t},l))}));function j(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=m;var p={};for(var b in t)hasOwnProperty.call(t,b)&&(p[b]=t[b]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var l=2;l<i;l++)c[l]=r[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);