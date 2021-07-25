(window.webpackJsonp=window.webpackJsonp||[]).push([[1036],{1109:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var a=r(3),n=r(8),o=(r(0),r(1166)),i={id:"haproxy",title:"HAProxy"},p={unversionedId:"devops/web/haproxy",id:"devops/web/haproxy",isDocsHomePage:!1,title:"HAProxy",description:"Tips",source:"@site/notes/devops/web/haproxy.md",slug:"/devops/web/haproxy",permalink:"/notes/devops/web/haproxy",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/web/haproxy.md",version:"current",sidebar:"docs",previous:{title:"HAProxy Version",permalink:"/notes/devops/web/haproxy-version"},next:{title:"Nginx \u5e38\u7528\u914d\u7f6e",permalink:"/notes/devops/web/nginx-cookbook"}},l=[{value:"Tips",id:"tips",children:[]},{value:"metrics",id:"metrics",children:[]}],c={toc:l};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"tips"},"Tips"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.haproxy.com/"},"haproxy.com")," - The #1 Open Source Software Load Balancer and Application Delivery Controller"),Object(o.b)("li",{parentName:"ul"},"\u6700\u64c5\u957f ",Object(o.b)("strong",{parentName:"li"},"\u8d1f\u8f7d\u5747\u8861")),Object(o.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u4e0d\u80fd\u8f6c\u53d1\u4efb\u610f UDP",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"2.3+ \u652f\u6301 syslog UDP, \u63a5\u4e0b\u6765\u4f1a\u652f\u6301 DNS, H3/QUIC"))))),Object(o.b)("li",{parentName:"ul"},"\u7279\u6027",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"L4(TCP) L7(HTTP) \u8d1f\u8f7d\u5747\u8861"),Object(o.b)("li",{parentName:"ul"},"URL \u91cd\u5199"),Object(o.b)("li",{parentName:"ul"},"\u9650\u6d41"),Object(o.b)("li",{parentName:"ul"},"SSL/TLS termination/offload"),Object(o.b)("li",{parentName:"ul"},"Gzip"),Object(o.b)("li",{parentName:"ul"},"\u652f\u6301 HTTP \u4ee3\u7406\u534f\u8bae"),Object(o.b)("li",{parentName:"ul"},"\u76d1\u63a7\u68c0\u67e5"),Object(o.b)("li",{parentName:"ul"},"\u94fe\u63a5\u548c HTTP \u65e5\u5fd7"),Object(o.b)("li",{parentName:"ul"},"HTTP/2"),Object(o.b)("li",{parentName:"ul"},"\u591a\u7ebf\u7a0b"),Object(o.b)("li",{parentName:"ul"},"\u65e0\u7f1d\u91cd\u8f7d"),Object(o.b)("li",{parentName:"ul"},"gRPC"),Object(o.b)("li",{parentName:"ul"},"Lua \u548c SPOE \u652f\u6301"),Object(o.b)("li",{parentName:"ul"},"L4 \u91cd\u8bd5"),Object(o.b)("li",{parentName:"ul"},"\u7b80\u5355\u7194\u65ad\u673a\u5236"))),Object(o.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"HAproxy ",Object(o.b)("a",{parentName:"li",href:"https://cbonte.github.io/haproxy-dconv/2.3/intro.html"},"Starter Guide")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.haproxy.com/user-spotlight-series/inside-the-github-load-balancer/"},"HAProxy at GitHub")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.haproxy.com/blog/5-ways-to-extend-haproxy-with-lua/"},"5 Ways to Extend HAProxy with Lua")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.haproxy.com/blog/using-haproxy-as-an-api-gateway-part-3-health-checks/"},"Using HAProxy as an API Gateway"))))),Object(o.b)("h2",{id:"metrics"},"metrics"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.haproxy.com/blog/haproxy-exposes-a-prometheus-metrics-endpoint/"},"https://www.haproxy.com/blog/haproxy-exposes-a-prometheus-metrics-endpoint/")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.haproxy.com/blog/exploring-the-haproxy-stats-page/"},"https://www.haproxy.com/blog/exploring-the-haproxy-stats-page/"))))}b.isMDXComponent=!0},1166:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),b=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=b(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=b(r),m=a,O=u["".concat(i,".").concat(m)]||u[m]||s[m]||o;return r?n.a.createElement(O,p(p({ref:t},c),{},{components:r})):n.a.createElement(O,p({ref:t},c))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);