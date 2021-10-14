"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[73143],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),g=l,f=m["".concat(u,".").concat(g)]||m[g]||c[g]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51330:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(87462),l=n(63366),a=(n(67294),n(3905)),i=["components"],o={title:"Logging Awesome",tags:["Awesome"]},u=void 0,s={unversionedId:"service/observability/logging/logging-awesome",id:"service/observability/logging/logging-awesome",isDocsHomePage:!1,title:"Logging Awesome",description:"- fluent/fluentd",source:"@site/notes/service/observability/logging/logging-awesome.md",sourceDirName:"service/observability/logging",slug:"/service/observability/logging/logging-awesome",permalink:"/notes/service/observability/logging/logging-awesome",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/observability/logging/logging-awesome.md",tags:[{label:"Awesome",permalink:"/notes/tags/awesome"}],version:"current",frontMatter:{title:"Logging Awesome",tags:["Awesome"]},sidebar:"docs",previous:{title:"DevOps \u5e38\u89c1\u95ee\u9898",permalink:"/notes/devops/devops-faq"},next:{title:"Fluentbit",permalink:"/notes/service/observability/logging/fluentbit"}},p=[{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]},{value:"fluent-bit vs Fluentd",id:"fluent-bit-vs-fluentd",children:[]},{value:"Fluentd vs Logstash",id:"fluentd-vs-logstash",children:[]}],c={toc:p};function m(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/fluent/fluentd"},"fluent/fluentd"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Apache-2.0, Ruby+C"),(0,a.kt)("li",{parentName:"ul"},"\u53bb\u4e2d\u5fc3\u5316\u63d2\u4ef6\u7cfb\u7edf"),(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e Tag \u8def\u7531"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/fluent/fluent-bit"},"fluent/fluent-bit"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Apache-2.0, C"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 Go \u63d2\u4ef6 - musl \u4e0d\u652f\u6301"))),(0,a.kt)("li",{parentName:"ul"},"Logstash",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e2d\u5fc3\u5316\u63d2\u4ef6\u7cfb\u7edf"),(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u8bed\u53e5\u8def\u7531"))),(0,a.kt)("li",{parentName:"ul"},"beats",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"filebeat"),(0,a.kt)("li",{parentName:"ul"},"metricbeat"),(0,a.kt)("li",{parentName:"ul"},"packetbeat"),(0,a.kt)("li",{parentName:"ul"},"winlogbeat"),(0,a.kt)("li",{parentName:"ul"},"auditbeat"),(0,a.kt)("li",{parentName:"ul"},"heartbeat"),(0,a.kt)("li",{parentName:"ul"},"functionbeat"))),(0,a.kt)("li",{parentName:"ul"},"Splunk")),(0,a.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://eng.uber.com/logging"},"Fast and Reliable Schema-Agnostic Log Analytics Platform"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ELK -> Clickhouse")))),(0,a.kt)("h1",{id:"faq"},"FAQ"),(0,a.kt)("h2",{id:"fluent-bit-vs-fluentd"},"fluent-bit vs Fluentd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"fluent-bit",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u66f4\u52a0\u8f7b\u91cf - \u8fd0\u884c\u5185\u5b58 450K"),(0,a.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u8f83\u5c11 - 35+"),(0,a.kt)("li",{parentName:"ul"},"\u5f3a\u8c03\u53f6\u5b50\u8282\u70b9\u65e5\u5fd7\u91c7\u96c6 - \u7c7b\u4f3c \u5404\u79cd beats \u96c6\u5408"))),(0,a.kt)("li",{parentName:"ul"},"Fluentd",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Ruby+C - \u8fd0\u884c\u5185\u5b58 40MB"),(0,a.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u591a - 650+"),(0,a.kt)("li",{parentName:"ul"},"\u5f3a\u8c03\u65e5\u5fd7\u805a\u5408\u5206\u6790\u5904\u7406")))),(0,a.kt)("h2",{id:"fluentd-vs-logstash"},"Fluentd vs Logstash"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://logz.io/blog/fluentd-logstash/"},"Fluentd vs Logstash"))))))}m.isMDXComponent=!0}}]);