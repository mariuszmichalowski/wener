(window.webpackJsonp=window.webpackJsonp||[]).push([[748],{1027:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,d=p["".concat(i,".").concat(b)]||p[b]||m[b]||o;return r?a.a.createElement(d,c(c({ref:t},l),{},{components:r})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},821:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(8),o=(r(0),r(1027)),i={title:"Prometheus \u8054\u90a6"},c={unversionedId:"service/observability/metrics/prometheus/prometheus-federation",id:"service/observability/metrics/prometheus/prometheus-federation",isDocsHomePage:!1,title:"Prometheus \u8054\u90a6",description:"* \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/service/observability/metrics/prometheus/prometheus-federation.md",slug:"/service/observability/metrics/prometheus/prometheus-federation",permalink:"/notes/service/observability/metrics/prometheus/prometheus-federation",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/observability/metrics/prometheus/prometheus-federation.md",version:"current",sidebar:"docs",previous:{title:"Prometheus FAQ",permalink:"/notes/service/observability/metrics/prometheus/prometheus-faq"},next:{title:"Prometheus K8S",permalink:"/notes/service/observability/metrics/prometheus/prometheus-k8s"}},s=[],l={toc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Prometheus \u91c7\u96c6 Prometheus"),Object(o.b)("li",{parentName:"ul"},"\u7ea7\u8054\u8054\u90a6/Hierarchical federation - \u5168\u91cf\u91c7\u96c6 - \u4f8b\u5982 \u591a\u4e2a\u96c6\u7fa4\u73af\u5883"),Object(o.b)("li",{parentName:"ul"},"\u8de8\u670d\u52a1\u8054\u90a6/Cross-service federation - \u90e8\u5206\u91c7\u96c6 - \u4f8b\u5982 \u591a\u4e2a\u96c6\u7fa4\u90e8\u7f72\u76f8\u540c\u670d\u52a1"))),Object(o.b)("li",{parentName:"ul"},"\u4f18\u52bf",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u7b80\u5355\u7684\u89e3\u51b3\u5206\u5e03\u5f0f\u6307\u6807\u91c7\u96c6\u95ee\u9898"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://prometheus.io/docs/prometheus/latest/federation/"},"FEDERATION")),Object(o.b)("li",{parentName:"ul"},"\u5efa\u8bae",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u5982\u679c\u6709\u66f4\u597d\u7684\u6761\u4ef6\u5219\u9009\u62e9 Thanos")))),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"\u8054\u90a6/Federation \u89e3\u51b3\u7684\u662f\u91c7\u96c6\u95ee\u9898\uff0c\u6ca1\u6709\u89e3\u51b3\u5b58\u50a8\u548c\u67e5\u8be2\u95ee\u9898"),Object(o.b)("li",{parentName:"ul"},"\u5b58\u50a8\u548c\u67e5\u8be2\u80fd\u529b\u53d7\u5355\u673a\u6027\u80fd\u5f71\u54cd"),Object(o.b)("li",{parentName:"ul"},"\u6ca1\u6709\u7f13\u5b58\u3001\u6ca1\u6709\u67e5\u8be2\u5206\u53d1\u3001\u6ca1\u6709\u5b58\u50a8\u5207\u5206\u5e26\u6765\u7684\u95ee\u9898\u662f",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u65e0\u6cd5\u89c4\u6a21\u5316"),Object(o.b)("li",{parentName:"ul"},"\u6570\u636e\u91c7\u96c6\u5ef6\u8fdf - \u96be\u4ee5\u96c6\u4e2d\u544a\u8b66"),Object(o.b)("li",{parentName:"ul"},"\u5b58\u50a8\u5bb9\u91cf\u65e0\u6cd5\u6269\u5c55"),Object(o.b)("li",{parentName:"ul"},"\u5927\u91cf\u67e5\u8be2\u6162")))))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"scrape_configs:\n  - job_name: 'federate'\n    scrape_interval: 15s\n    # \u4fdd\u7559\u6240\u6709\u6807\u7b7e\n    honor_labels: true\n    # \u66b4\u9732\u7684\u8054\u90a6\u63a5\u53e3\n    metrics_path: '/federate'\n    # \u9009\u62e9\u6307\u6807 -\n    params:\n      'match[]':\n        - '{job=\"prometheus\"}'\n        - '{__name__=~\"job:.*\"}'\n    # \u9700\u8981\u91c7\u96c6\u7684\u5b9e\u4f8b\n    static_configs:\n      - targets:\n        - 'source-prometheus-1:9090'\n        - 'source-prometheus-2:9090'\n        - 'source-prometheus-3:9090'\n")))}u.isMDXComponent=!0}}]);