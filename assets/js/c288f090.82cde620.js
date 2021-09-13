"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[39767],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return k}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),o=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=o(r),k=n,d=c["".concat(u,".").concat(k)]||c[k]||s[k]||l;return r?a.createElement(d,i(i({ref:t},m),{},{components:r})):a.createElement(d,i({ref:t},m))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=c;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var o=2;o<l;o++)i[o]=r[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},99757:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return o},toc:function(){return m},default:function(){return c}});var a=r(87462),n=r(63366),l=(r(67294),r(3905)),i=["components"],p={title:"Web Server FAQ"},u=void 0,o={unversionedId:"devops/web/web-server-faq",id:"devops/web/web-server-faq",isDocsHomePage:!1,title:"Web Server FAQ",description:"Caddy vs Traefik",source:"@site/notes/devops/web/web-server-faq.md",sourceDirName:"devops/web",slug:"/devops/web/web-server-faq",permalink:"/notes/devops/web/web-server-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/web/web-server-faq.md",tags:[],version:"current",frontMatter:{title:"Web Server FAQ"},sidebar:"docs",previous:{title:"Service Mesh",permalink:"/notes/devops/service/servicemesh"},next:{title:"Caddy",permalink:"/notes/devops/web/caddy"}},m=[{value:"Caddy vs Traefik",id:"caddy-vs-traefik",children:[]},{value:"Nginx vs HAProxy",id:"nginx-vs-haproxy",children:[]},{value:"Caddy v1 vs v2",id:"caddy-v1-vs-v2",children:[]},{value:"HAProxy vs Keepalived",id:"haproxy-vs-keepalived",children:[]}],s={toc:m};function c(e){var t=e.components,r=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"caddy-vs-traefik"},"Caddy vs Traefik"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Caddy",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\b \u5b9a\u4f4d\u662f Web \u670d\u52a1\u5668"),(0,l.kt)("li",{parentName:"ul"},"\u7279\u70b9\u662f HTTP2\u3001\u81ea\u52a8 HTTPS"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("del",{parentName:"li"},"V2 \u7248\u672c\u8fd8\u5728\u5f00\u53d1\u4e2d - \u53d8\u5316\u5f88\u5927")),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u591a acme \u670d\u52a1\u5546"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u4f5c\u4e3a acme \u670d\u52a1\u5546"))),(0,l.kt)("li",{parentName:"ul"},"Traefik",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5b9a\u4f4d\u662f\u5fae\u670d\u52a1\u4e0b\u7684\u8d1f\u8f7d\u5747\u8861\u3001\u8fb9\u754c\u8def\u7531\u3001\u53cd\u5411\u4ee3\u7406"),(0,l.kt)("li",{parentName:"ul"},"\u504f\u5411 Cloud Native"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9 K8S \u652f\u6301\u8f83\u597d - \u652f\u6301\u4f5c\u4e3a Ingress"),(0,l.kt)("li",{parentName:"ul"},"V2 \u7248\u672c\u8c03\u6574\u4e86\u524d\u540e\u7aef\u6982\u5ff5 - \u7ed3\u6784\u66f4\u52a0\u6e05\u6670\u6613\u4e8e\u914d\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 TCP \u548c SNI \u8d1f\u8f7d\u8def\u7531"),(0,l.kt)("li",{parentName:"ul"},"acme \u4e0d\u652f\u6301\u5206\u5e03\u5f0f - \u4ed8\u8d39")))),(0,l.kt)("h3",{id:"nginx-vs-haproxy"},"Nginx vs HAProxy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Nginx",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u64c5\u957f\u5e94\u7528\u5c42\u63a7\u5236"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 Web Hosting"),(0,l.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a\u8d1f\u8f7d\u5747\u8861\u9650\u6d41\u80fd\u529b\u8f83\u5f31"),(0,l.kt)("li",{parentName:"ul"},"\u7edf\u8ba1\u6307\u6807\u5c11"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 TCP \u548c UDP"),(0,l.kt)("li",{parentName:"ul"},"\u66f4\u591a\u5e94\u7528\u5c42\u9762\u7684\u611f\u77e5 - 7 \u5c42"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u6a21\u5757\u63d0\u4f9b\u5404\u79cd\u529f\u80fd"),(0,l.kt)("li",{parentName:"ul"},"\u6536\u8d39\u7248 ",(0,l.kt)("a",{parentName:"li",href:"https://www.nginx.com/products/nginx/#compare-versions"},"Nginx Plus")),(0,l.kt)("li",{parentName:"ul"},"\u26a0\ufe0f \u793e\u533a\u7248 upstream \u7684 host \u4e0d\u4f1a\u53d8 - \u4e0d\u4f1a\u968f dns \u53d8\u5316 - \u5bf9\u4e8e LB \u6765\u8bf4\u6bd4\u8f83\u81f4\u547d"))),(0,l.kt)("li",{parentName:"ul"},"HAProxy",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u64c5\u957f\u8d1f\u8f7d\u5747\u8861"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u4f5c\u4e3a Web \u670d\u52a1\u5668"),(0,l.kt)("li",{parentName:"ul"},"\u6bd4 Nginx \u66f4\u64c5\u957f SSL offload / SSL terminate"),(0,l.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u89d2\u8272\u662f\u8d1f\u8f7d\u5747\u8861"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u975e\u5e38\u591a\u7684\u9650\u6d41\u7b56\u7565"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u975e\u5e38\u591a\u7684\u7edf\u8ba1\u6307\u6807"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 UDP ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/haproxy/haproxy/issues/62"},"#62"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f DNS \u8d1f\u8f7d\u63a8\u8350\u7528 ",(0,l.kt)("a",{parentName:"li",href:"https://dnsdist.org"},"dnsdist")),(0,l.kt)("li",{parentName:"ul"},"2.3 \u5f00\u59cb\u652f\u6301 QUIC \u652f\u6301\u90e8\u5206 UDP \u8d1f\u8f7d"))),(0,l.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u91cf\u548c\u903b\u8f91\u6bd4 Nginx \u7b80\u5355"),(0,l.kt)("li",{parentName:"ul"},"\u6536\u8d39\u7248 - ",(0,l.kt)("a",{parentName:"li",href:"https://www.haproxy.com/products/community-vs-enterprise-edition/"},"HAProxy EE")))),(0,l.kt)("li",{parentName:"ul"},"\u9009\u62e9 HAProxy",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8d1f\u8f7d\u5747\u8861"),(0,l.kt)("li",{parentName:"ul"},"SSL Offload"),(0,l.kt)("li",{parentName:"ul"},"\u5165\u53e3 - SNI\u3001\u53cd\u5411\u4ee3\u7406\u3001SSL Offload"),(0,l.kt)("li",{parentName:"ul"},"\u5e0c\u671b\u770b\u5230\u72b6\u6001\u548c\u76d1\u63a7"))),(0,l.kt)("li",{parentName:"ul"},"\u9009\u62e9 Nginx",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u6258\u7ba1\u7f51\u7ad9"),(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u5e94\u7528\u5c42\u63a7\u5236"),(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u5b9e\u73b0\u5e94\u7528\u7f51\u5173")))),(0,l.kt)("h3",{id:"caddy-v1-vs-v2"},"Caddy v1 vs v2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"v1",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u914d\u7f6e"))),(0,l.kt)("li",{parentName:"ul"},"v2",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u63a5\u53e3\u914d\u7f6e - \u66f4\u52a0\u7075\u6d3b")))),(0,l.kt)("h2",{id:"haproxy-vs-keepalived"},"HAProxy vs Keepalived"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"HAProxy",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 4 \u5c42 TCP \u548c 7 \u5c42 HTTP"),(0,l.kt)("li",{parentName:"ul"},"\u611f\u77e5\u90e8\u5206 4 \u5c42\u534f\u8bae - \u4f8b\u5982 syslog"))),(0,l.kt)("li",{parentName:"ul"},"Keepalived",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 4 \u5c42 TCP\u3001UDP \u8d1f\u8f7d")))),(0,l.kt)("p",null,"\u4e24\u8005\u9762\u5411\u4e0d\u540c\u573a\u666f\uff0c\u5927\u90e8\u5206\u4f7f\u7528\u4f7f\u7528 haproxy\uff0c\u5982\u679c\u9700\u8981 udp \u8003\u8651 keepalived \u6216\u8005 nginx\u3002"))}c.isMDXComponent=!0}}]);