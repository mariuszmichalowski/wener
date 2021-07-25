(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{1166:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(r),m=n,f=p["".concat(o,".").concat(m)]||p[m]||u[m]||c;return r?i.a.createElement(f,a(a({ref:t},s),{},{components:r})):i.a.createElement(f,a({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,o[1]=a;for(var s=2;s<c;s++)o[s]=r[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},291:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return a})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),i=r(8),c=(r(0),r(1166)),o={id:"metrics",title:"\u6307\u6807\u76d1\u63a7"},a={unversionedId:"service/observability/metrics/metrics",id:"service/observability/metrics/metrics",isDocsHomePage:!1,title:"\u6307\u6807\u76d1\u63a7",description:"Metrics",source:"@site/notes/service/observability/metrics/README.md",slug:"/service/observability/metrics/metrics",permalink:"/notes/service/observability/metrics/metrics",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/observability/metrics/README.md",version:"current",sidebar:"docs",previous:{title:"Syslog",permalink:"/notes/service/observability/logging/syslog"},next:{title:"Cortex",permalink:"/notes/service/observability/metrics/cortex"}},l=[],s={toc:l};function b(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"metrics"},"Metrics"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://micrometer.io/"},"Micrometer"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://micrometer.io/docs/concepts"},"\u6982\u5ff5"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u7eac\u5ea6\u65b9\u5f0f: \u7eac\u5ea6\u3001\u7ea7\u8054"),Object(c.b)("li",{parentName:"ul"},"\u9891\u7387\u805a\u5408: \u5ba2\u6237\u7aef\u805a\u5408\u3001\u670d\u52a1\u7aef\u805a\u5408"),Object(c.b)("li",{parentName:"ul"},"\u4e0a\u62a5\u65b9\u5f0f: \u63a8\u3001\u62c9"))))),Object(c.b)("li",{parentName:"ul"},"Spring Boot ",Object(c.b)("a",{parentName:"li",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/production-ready-metrics.html"},"Production-ready Metrics"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u57fa\u4e8e Micrometer"),Object(c.b)("li",{parentName:"ul"},"\u5bf9 Prometheus \u66b4\u9732 ",Object(c.b)("inlineCode",{parentName:"li"},"/actuator/prometheus")))),Object(c.b)("li",{parentName:"ul"},"NOTE",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u6307\u6807\u672c\u8eab\u662f\u591a\u7ef4\u6570\u636e")))))}b.isMDXComponent=!0}}]);