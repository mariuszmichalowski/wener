(window.webpackJsonp=window.webpackJsonp||[]).push([[860],{1169:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return O}));var a=r(0),n=r.n(a);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),u=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},o=function(e){var t=u(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),o=u(r),s=a,O=o["".concat(b,".").concat(s)]||o[s]||m[s]||l;return r?n.a.createElement(O,i(i({ref:t},p),{},{components:r})):n.a.createElement(O,i({ref:t},p))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,b=new Array(l);b[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var p=2;p<l;p++)b[p]=r[p];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},933:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(8),l=(r(0),r(1169)),b={title:"Web Server FAQ"},i={unversionedId:"devops/web/web-server-faq",id:"devops/web/web-server-faq",isDocsHomePage:!1,title:"Web Server FAQ",description:"Caddy vs Traefik",source:"@site/notes/devops/web/web-server-faq.md",slug:"/devops/web/web-server-faq",permalink:"/notes/devops/web/web-server-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/web/web-server-faq.md",version:"current",sidebar:"docs",previous:{title:"Tyk",permalink:"/notes/devops/web/tyk"},next:{title:"Tenant DB Schema",permalink:"/notes/devops/xaas/db-schema"}},c=[{value:"Caddy vs Traefik",id:"caddy-vs-traefik",children:[]},{value:"Nginx vs HAProxy",id:"nginx-vs-haproxy",children:[]},{value:"Caddy v1 vs v2",id:"caddy-v1-vs-v2",children:[]},{value:"HAproxy vs Keepalived",id:"haproxy-vs-keepalived",children:[]}],p={toc:c};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"caddy-vs-traefik"},"Caddy vs Traefik"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Caddy",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\b \u5b9a\u4f4d\u662f Web \u670d\u52a1\u5668"),Object(l.b)("li",{parentName:"ul"},"\u7279\u70b9\u662f HTTP2\u3001\u81ea\u52a8 HTTPS"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("del",{parentName:"li"},"V2 \u7248\u672c\u8fd8\u5728\u5f00\u53d1\u4e2d - \u53d8\u5316\u5f88\u5927")),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u591a acme \u670d\u52a1\u5546"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u4f5c\u4e3a acme \u670d\u52a1\u5546"))),Object(l.b)("li",{parentName:"ul"},"Traefik",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5b9a\u4f4d\u662f\u5fae\u670d\u52a1\u4e0b\u7684\u8d1f\u8f7d\u5747\u8861\u3001\u8fb9\u754c\u8def\u7531\u3001\u53cd\u5411\u4ee3\u7406"),Object(l.b)("li",{parentName:"ul"},"\u504f\u5411 Cloud Native"),Object(l.b)("li",{parentName:"ul"},"\u5bf9 K8S \u652f\u6301\u8f83\u597d - \u652f\u6301\u4f5c\u4e3a Ingress"),Object(l.b)("li",{parentName:"ul"},"V2 \u7248\u672c\u8c03\u6574\u4e86\u524d\u540e\u7aef\u6982\u5ff5 - \u7ed3\u6784\u66f4\u52a0\u6e05\u6670\u6613\u4e8e\u914d\u7f6e"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 TCP \u548c SNI \u8d1f\u8f7d\u8def\u7531"),Object(l.b)("li",{parentName:"ul"},"acme \u4e0d\u652f\u6301\u5206\u5e03\u5f0f - \u4ed8\u8d39")))),Object(l.b)("h3",{id:"nginx-vs-haproxy"},"Nginx vs HAProxy"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Nginx",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u64c5\u957f\u5e94\u7528\u5c42\u63a7\u5236"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 Web Hosting"),Object(l.b)("li",{parentName:"ul"},"\u4f5c\u4e3a\u8d1f\u8f7d\u5747\u8861\u9650\u6d41\u80fd\u529b\u8f83\u5f31"),Object(l.b)("li",{parentName:"ul"},"\u7edf\u8ba1\u6307\u6807\u5c11"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 TCP \u548c UDP"),Object(l.b)("li",{parentName:"ul"},"\u66f4\u591a\u5e94\u7528\u5c42\u9762\u7684\u611f\u77e5 - 7 \u5c42"),Object(l.b)("li",{parentName:"ul"},"\u901a\u8fc7\u6a21\u5757\u63d0\u4f9b\u5404\u79cd\u529f\u80fd"),Object(l.b)("li",{parentName:"ul"},"\u6536\u8d39\u7248 ",Object(l.b)("a",{parentName:"li",href:"https://www.nginx.com/products/nginx/#compare-versions"},"Nginx Plus")),Object(l.b)("li",{parentName:"ul"},"\u26a0\ufe0f \u793e\u533a\u7248 upstream \u7684 host \u4e0d\u4f1a\u53d8 - \u4e0d\u4f1a\u968f dns \u53d8\u5316 - \u5bf9\u4e8e LB \u6765\u8bf4\u6bd4\u8f83\u81f4\u547d"))),Object(l.b)("li",{parentName:"ul"},"HAProxy",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u64c5\u957f\u8d1f\u8f7d\u5747\u8861"),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u4f5c\u4e3a Web \u670d\u52a1\u5668"),Object(l.b)("li",{parentName:"ul"},"\u6bd4 Nginx \u66f4\u64c5\u957f SSL offload / SSL terminate"),Object(l.b)("li",{parentName:"ul"},"\u4e3b\u8981\u89d2\u8272\u662f\u8d1f\u8f7d\u5747\u8861"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u975e\u5e38\u591a\u7684\u9650\u6d41\u7b56\u7565"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u975e\u5e38\u591a\u7684\u7edf\u8ba1\u6307\u6807"),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 UDP ",Object(l.b)("a",{parentName:"li",href:"https://github.com/haproxy/haproxy/issues/62"},"#62"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5982\u679c\u662f DNS \u8d1f\u8f7d\u63a8\u8350\u7528 ",Object(l.b)("a",{parentName:"li",href:"https://dnsdist.org"},"dnsdist")),Object(l.b)("li",{parentName:"ul"},"2.3 \u5f00\u59cb\u652f\u6301 QUIC \u652f\u6301\u90e8\u5206 UDP \u8d1f\u8f7d"))),Object(l.b)("li",{parentName:"ul"},"\u4ee3\u7801\u91cf\u548c\u903b\u8f91\u6bd4 Nginx \u7b80\u5355"),Object(l.b)("li",{parentName:"ul"},"\u6536\u8d39\u7248 - ",Object(l.b)("a",{parentName:"li",href:"https://www.haproxy.com/products/community-vs-enterprise-edition/"},"HAProxy EE")))),Object(l.b)("li",{parentName:"ul"},"\u9009\u62e9 HAProxy",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u8d1f\u8f7d\u5747\u8861"),Object(l.b)("li",{parentName:"ul"},"SSL Offload"),Object(l.b)("li",{parentName:"ul"},"\u5165\u53e3 - SNI\u3001\u53cd\u5411\u4ee3\u7406\u3001SSL Offload"),Object(l.b)("li",{parentName:"ul"},"\u5e0c\u671b\u770b\u5230\u72b6\u6001\u548c\u76d1\u63a7"))),Object(l.b)("li",{parentName:"ul"},"\u9009\u62e9 Nginx",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9700\u8981\u6258\u7ba1\u7f51\u7ad9"),Object(l.b)("li",{parentName:"ul"},"\u9700\u8981\u5e94\u7528\u5c42\u63a7\u5236"),Object(l.b)("li",{parentName:"ul"},"\u9700\u8981\u5b9e\u73b0\u5e94\u7528\u7f51\u5173")))),Object(l.b)("h3",{id:"caddy-v1-vs-v2"},"Caddy v1 vs v2"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"v1",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u914d\u7f6e"))),Object(l.b)("li",{parentName:"ul"},"v2",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u901a\u8fc7\u63a5\u53e3\u914d\u7f6e - \u66f4\u52a0\u7075\u6d3b")))),Object(l.b)("h2",{id:"haproxy-vs-keepalived"},"HAproxy vs Keepalived"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"HAproxy",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 4 \u5c42 TCP \u548c 7 \u5c42 HTTP"),Object(l.b)("li",{parentName:"ul"},"\u611f\u77e5\u90e8\u5206 4 \u5c42\u534f\u8bae - \u4f8b\u5982 syslog"))),Object(l.b)("li",{parentName:"ul"},"Keepalived",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 4 \u5c42 TCP\u3001UDP \u8d1f\u8f7d")))),Object(l.b)("p",null,"\u4e24\u8005\u9762\u5411\u4e0d\u540c\u573a\u666f\uff0c\u5927\u90e8\u5206\u4f7f\u7528\u4f7f\u7528 haproxy\uff0c\u5982\u679c\u9700\u8981 udp \u8003\u8651 keepalived \u6216\u8005 nginx\u3002"))}u.isMDXComponent=!0}}]);