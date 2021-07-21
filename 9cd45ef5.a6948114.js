(window.webpackJsonp=window.webpackJsonp||[]).push([[656],{1151:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),m=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=m(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=m(r),b=n,d=l["".concat(s,".").concat(b)]||l[b]||u[b]||i;return r?a.a.createElement(d,o(o({ref:t},p),{},{components:r})):a.a.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var p=2;p<i;p++)s[p]=r[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},730:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return m}));var n=r(3),a=r(8),i=(r(0),r(1151)),s={title:"Prometheus FAQ"},o={unversionedId:"service/observability/metrics/prometheus/prometheus-faq",id:"service/observability/metrics/prometheus/prometheus-faq",isDocsHomePage:!1,title:"Prometheus FAQ",description:"Prometheus \u5e38\u89c1\u95ee\u9898",source:"@site/notes/service/observability/metrics/prometheus/prometheus-faq.md",slug:"/service/observability/metrics/prometheus/prometheus-faq",permalink:"/notes/service/observability/metrics/prometheus/prometheus-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/observability/metrics/prometheus/prometheus-faq.md",version:"current",sidebar:"docs",previous:{title:"Prometheus Exporter",permalink:"/notes/service/observability/metrics/prometheus/prometheus-exporter"},next:{title:"Prometheus \u8054\u90a6",permalink:"/notes/service/observability/metrics/prometheus/prometheus-federation"}},c=[{value:"remote write \u8c03\u4f18",id:"remote-write-\u8c03\u4f18",children:[]},{value:"open /prometheus/queries.active: permission denied",id:"open-prometheusqueriesactive-permission-denied",children:[]}],p={toc:c};function m(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"prometheus-\u5e38\u89c1\u95ee\u9898"},"Prometheus \u5e38\u89c1\u95ee\u9898"),Object(i.b)("h2",{id:"remote-write-\u8c03\u4f18"},"remote write \u8c03\u4f18"),Object(i.b)("p",null,"*",Object(i.b)("a",{parentName:"p",href:"https://prometheus.io/docs/practices/remote_write/"},"REMOTE WRITE TUNING")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u8c03\u4f18\u76ee\u6807 \u5ef6\u65f6\u3001QPS\u3001\u5185\u5b58\u5360\u7528"),Object(i.b)("li",{parentName:"ul"},"\u51cf\u5c11\u5185\u5b58\u5360\u7528",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u964d\u4f4e max_shards, \u589e\u52a0 capacity \u548c max_samples_per_send"),Object(i.b)("li",{parentName:"ul"},"\u5206\u7247\u5185\u5b58\u5360\u7528\u5f71\u54cd\u56e0\u7d20 ",Object(i.b)("inlineCode",{parentName:"li"},"number of shards * (capacity + max_samples_per_send)")))),Object(i.b)("li",{parentName:"ul"},"\u51cf\u5c11\u5ef6\u65f6",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u51cf\u5c11 batch_send_deadline, \u589e\u52a0 max_samples_per_send"))),Object(i.b)("li",{parentName:"ul"},"\u51cf\u5c11 QPS",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u589e\u52a0 max_samples_per_send, \u589e\u52a0 capacity"),Object(i.b)("li",{parentName:"ul"},"\u51cf\u5c11 QPS \u4e5f\u80fd\u51cf\u5c11\u670d\u52a1\u7aef\u538b\u529b"))),Object(i.b)("li",{parentName:"ul"},"shards \u4f1a\u81ea\u52a8\u589e\u51cf - \u901a\u8fc7 min_shards \u548c max_shards \u9650\u5b9a\u8303\u56f4")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"# \u9ed8\u8ba4\n# \u4e00\u4e2a\u5206\u7247\u5927\u7ea6 500k\ncapacity: 2500\nmax_samples_per_send: 500\n\nmax_shards: 1000\nmin_shards: 1\nmax_samples_per_send: 100\nbatch_send_deadline: 5s\n\n# capacity\n# \u6bcf\u4e2a\u5206\u7247\u961f\u5217\u7684\u5bb9\u91cf\n# \u9700\u8981\u8bbe\u7f6e\u9ad8\u4e00\u70b9\u907f\u514d\u963b\u585e\u8bfb\u53d6 wal\n# \u4e00\u822c 3-10 \u500d\u4e8e max_samples_per_send\ncapacity:\n\n# \u6279\u91cf\u53d1\u9001\u66b4\u529b\u914d\u7f6e\ncapacity: 10000\nmax_shards: 1000\nmin_shards: 1\nmax_samples_per_send: 5000\nbatch_send_deadline: 10s\n")),Object(i.b)("h2",{id:"open-prometheusqueriesactive-permission-denied"},"open /prometheus/queries.active: permission denied"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"prometheus operator \u90e8\u7f72\u7684\u8bdd\u53ef\u80fd\u5728 volume \u51fa\u73b0\u95ee\u9898\u7684\u65f6\u5019\u51fa\u73b0\u8be5\u9519\u8bef"),Object(i.b)("li",{parentName:"ul"},"\u4f7f\u7528 emptyDir \u6302\u8f7d\u53ef\u907f\u514d\uff0c\u6216\u8005\u4fee\u590d volume")))}m.isMDXComponent=!0}}]);