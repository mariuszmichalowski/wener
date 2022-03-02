"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[93802],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return k}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=u(r),k=n,N=c["".concat(s,".").concat(k)]||c[k]||o[k]||i;return r?a.createElement(N,l(l({ref:t},m),{},{components:r})):a.createElement(N,l({ref:t},m))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var u=2;u<i;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},96176:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return m},default:function(){return c}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),l=["components"],p={title:"Service Mesh"},s=void 0,u={unversionedId:"devops/service/servicemesh",id:"devops/service/servicemesh",title:"Service Mesh",description:"- Observability, Security, Reliability",source:"@site/notes/devops/service/servicemesh.md",sourceDirName:"devops/service",slug:"/devops/service/servicemesh",permalink:"/notes/devops/service/servicemesh",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/service/servicemesh.md",tags:[],version:"current",frontMatter:{title:"Service Mesh"},sidebar:"docs",previous:{title:"Serverless Awesome",permalink:"/notes/devops/service/serverless-awesome"},next:{title:"Apache APISIX",permalink:"/notes/devops/web/apisix"}},m=[{value:"Notes",id:"notes",children:[],level:2},{value:"SMI",id:"smi",children:[],level:2}],o={toc:m};function c(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Observability, Security, Reliability"),(0,i.kt)("li",{parentName:"ul"},"Why",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7edf\u4e00\u5904\u7406 \u6a2a\u5207\u5173\u6ce8\u70b9/",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Cross-cutting_concern"},"Cross-cutting_concern"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e AOP \u7684\u5207\u9762"),(0,i.kt)("li",{parentName:"ul"},"Service Mesh \u5904\u7406\u6240\u6709\u670d\u52a1\u4e4b\u95f4\u7684\u5207\u9762"),(0,i.kt)("li",{parentName:"ul"},"\u6d41\u91cf\u76d1\u63a7, HTTP \u5f02\u5e38\u76d1\u63a7"),(0,i.kt)("li",{parentName:"ul"},"mTLS"))),(0,i.kt)("li",{parentName:"ul"},"\u5feb\u901f\u8fed\u4ee3 - \u63a5\u53e3/\u670d\u52a1\u4f5c\u4e3a\u4ea7\u54c1\u5feb\u901f\u8fdb\u5165\u5e02\u573a"),(0,i.kt)("li",{parentName:"ul"},"\u5904\u7406 ",(0,i.kt)("strong",{parentName:"li"},"\u670d\u52a1\u4e4b\u95f4")," / ",(0,i.kt)("strong",{parentName:"li"},"\u5916\u90e8")," \u901a\u4fe1"))),(0,i.kt)("li",{parentName:"ul"},"Why not",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5e26\u6765\u989d\u5916\u7684\u5ef6\u8fdf"),(0,i.kt)("li",{parentName:"ul"},"\u590d\u6742\u7684\u8fd0\u7ef4\u90e8\u7f72"),(0,i.kt)("li",{parentName:"ul"},"sidecar \u8017\u8d39\u989d\u5916\u7684\u8d44\u6e90"))),(0,i.kt)("li",{parentName:"ul"},"When",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u540c\u6b65\u901a\u4fe1\u573a\u666f"),(0,i.kt)("li",{parentName:"ul"},"\u4ea7\u54c1\u662f API/\u670d\u52a1/\u63a5\u53e3"))),(0,i.kt)("li",{parentName:"ul"},"\u529f\u80fd/\u76ee\u7684/CCC",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u8def\u7531",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u8d1f\u8f7d\u5747\u8861"),(0,i.kt)("li",{parentName:"ul"},"\u767e\u5206\u6bd4\u6d41\u91cf\u5207\u5206"),(0,i.kt)("li",{parentName:"ul"},"\u57fa\u4e8e \u5934/\u8def\u7531 \u6d41\u91cf\u5207\u5206"),(0,i.kt)("li",{parentName:"ul"},"\u4ee3\u7406"))),(0,i.kt)("li",{parentName:"ul"},"\u6d41\u91cf",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u8bbf\u95ee\u63a7\u5236"),(0,i.kt)("li",{parentName:"ul"},"\u6d41\u91cf\u5207\u5206"),(0,i.kt)("li",{parentName:"ul"},"\u6d41\u91cf\u89c4\u683c\u5b9a\u4e49"),(0,i.kt)("li",{parentName:"ul"},"\u6d41\u91cf\u6307\u6807"))),(0,i.kt)("li",{parentName:"ul"},"\u76d1\u63a7",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u8bbf\u95ee\u65e5\u5fd7"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://landing.google.com/sre/sre-book/chapters/monitoring-distributed-systems/#xref_monitoring_golden-signals"},"\u9ec4\u91d1\u6307\u6807"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5ef6\u8fdf\u3001\u6d41\u91cf\u3001\u9519\u8bef\u3001\u9971\u548c"))),(0,i.kt)("li",{parentName:"ul"},"\u8def\u7531\u7ea7\u76d1\u63a7"),(0,i.kt)("li",{parentName:"ul"},"\u8ddf\u8e2a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Jaeger, Zipkin, OpenCensus, OpenTracing"))))),(0,i.kt)("li",{parentName:"ul"},"\u5f39\u6027",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7194\u65ad"),(0,i.kt)("li",{parentName:"ul"},"\u91cd\u8bd5\u548c\u8d85\u65f6"),(0,i.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u8def\u5f84\u7684\u91cd\u8bd5\u548c\u8d85\u65f6"),(0,i.kt)("li",{parentName:"ul"},"\u9519\u8bef\u6ce8\u5165"),(0,i.kt)("li",{parentName:"ul"},"\u5ef6\u8fdf\u6ce8\u5165"))),(0,i.kt)("li",{parentName:"ul"},"\u5b89\u5168",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"mTLS"),(0,i.kt)("li",{parentName:"ul"},"CA \u8bc1\u4e66\u7ba1\u7406/\u96c6\u6210"),(0,i.kt)("li",{parentName:"ul"},"\u9274\u6743\u89c4\u5219"))),(0,i.kt)("li",{parentName:"ul"},"\u8fde\u63a5",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u3001VM\u3001\u5bb9\u5668"))))),(0,i.kt)("li",{parentName:"ul"},"\u7ec4\u6210\u90e8\u5206",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"control plane"),(0,i.kt)("li",{parentName:"ul"},"data plane"),(0,i.kt)("li",{parentName:"ul"},"proxy"))),(0,i.kt)("li",{parentName:"ul"},"Traffic Shiffting",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Istio ",(0,i.kt)("a",{parentName:"li",href:"https://istio.io/latest/docs/tasks/traffic-management/traffic-shifting/"},"Traffic Shifting")))),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://layer5.io/service-mesh-landscape/"},"Service Mesh Landscape")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://servicemesh.es/"},"Service Mesh Comparison")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://flagger.app/"},"flagger")," - Progressive Delivery Operator for Kubernetes",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Canary - progressive traffic shifting"),(0,i.kt)("li",{parentName:"ul"},"A/B Testing - HTTP headers and cookies traffic routing"),(0,i.kt)("li",{parentName:"ul"},"Blue/Green - traffic switching and mirroring"))))),(0,i.kt)("li",{parentName:"ul"},"\u6ce8\u610f \u26a0\ufe0f - \u76ee\u524d=2020",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"istio \u662f\u76ee\u524d\u529f\u80fd\u6700\u4e3a\u5b8c\u5584\u7684 service mesh\uff0c\u4f46\u4f53\u79ef\u548c\u8d44\u6e90\u5360\u7528\u4e5f\u662f\u76f8\u5f53\u53ef\u89c2"),(0,i.kt)("li",{parentName:"ul"},"linkerd2 \u662f\u76ee\u524d\u6781\u4e3a\u8f7b\u91cf\uff0c\u4fb5\u5165\u6027\u6781\u5c0f\uff0c\u529f\u80fd\u6709\u9650\u4f46\u80fd\u4e0a\u751f\u4ea7\u7684\u7684 service mesh")))),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5fae\u670d\u52a1\u7684 observability, reliability, security"),(0,i.kt)("li",{parentName:"ul"},"Service Mesh \u7684\u7ed3\u6784\u90fd\u662f CP+DP"),(0,i.kt)("li",{parentName:"ul"},"DP \u4e3a\u5e94\u7528\u7684 Sidecar"),(0,i.kt)("li",{parentName:"ul"},"Service Mesh \u5c31\u662f\u5c06\u5e94\u7528\u901a\u4fe1\u7f51\u7edc\u5c42\u7684\u57fa\u7840\u529f\u80fd\u62bd\u8c61\u4e3a DP",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u670d\u52a1\u53d1\u73b0 - \u5982\u4f55\u8bf7\u6c42 \u670d\u52a1 A"),(0,i.kt)("li",{parentName:"ul"},"\u65e5\u5fd7"),(0,i.kt)("li",{parentName:"ul"},"\u8ddf\u8e2a"),(0,i.kt)("li",{parentName:"ul"},"\u670d\u52a1\u6743\u9650"),(0,i.kt)("li",{parentName:"ul"},"\u6307\u6807\u76d1\u63a7"),(0,i.kt)("li",{parentName:"ul"},"\u4f8b\u5982 dubbo RPC \u4e2d\u5173\u4e8e\u5ba2\u6237\u7aef\u4e0e\u6ce8\u518c\u4e2d\u5fc3\u901a\u4fe1\u8fd9\u90e8\u5206\u529f\u80fd"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u91cd")," \u5ba2\u6237\u7aef\u5230 \u8f7b\u5ba2\u6237\u7aef\u7684\u8fc7\u7a0b"),(0,i.kt)("li",{parentName:"ul"},"Service Mesh \u7684 Service \u662f\u5e94\u7528\u7eac\u5ea6\uff0c\u4e0d\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"me.wener.test.PingService")," \u8fd9\u6837\u7684\u63a5\u53e3\u7eac\u5ea6"),(0,i.kt)("li",{parentName:"ul"},"\u9762\u5411 Service \u66f4\u50cf\u662f\u9762\u5411 Dataplane"),(0,i.kt)("li",{parentName:"ul"},"\u8981\u6c42\u5e73\u5766\u7684\u7f51\u7edc\u7ed3\u6784 - \u8282\u70b9\u4e92\u901a"),(0,i.kt)("li",{parentName:"ul"},"Dataplane \u7c7b\u4f3c\u4e00\u4e2a\u8282\u70b9\u7684\u7f51\u5173\uff0c\u5904\u7406\u6240\u6709\u7684\u51fa\u5165\u6d41\u91cf")),(0,i.kt)("h2",{id:"smi"},"SMI"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://smi-spec.io/"},"Service Mesh Interface")," / ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/servicemeshinterface/smi-spec"},"servicemeshinterface/smi-spec"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Traffic Access Control - \u8bbf\u95ee\u63a7\u5236"),(0,i.kt)("li",{parentName:"ul"},"Traffic Metrics - \u6307\u6807"),(0,i.kt)("li",{parentName:"ul"},"Traffic Specs"),(0,i.kt)("li",{parentName:"ul"},"Traffic Split - \u6d41\u91cf\u5207\u5206")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: TrafficSplit\nmetadata:\n  name: canary\nspec:\n  # The root service that clients use to connect to the destination application.\n  service: website\n  # Services inside the namespace with their own selectors, endpoints and configuration.\n  backends:\n    - service: website-v1\n      weight: 90\n    - service: website-v2\n      weight: 10\n")))}c.isMDXComponent=!0}}]);