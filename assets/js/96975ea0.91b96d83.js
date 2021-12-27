"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[52985],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),k=a,h=m["".concat(p,".").concat(k)]||m[k]||s[k]||i;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96864:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"http",title:"HTTP"},p=void 0,c={unversionedId:"ops/network/application/http",id:"ops/network/application/http",title:"HTTP",description:"- 301 vs 302",source:"@site/notes/ops/network/application/http.md",sourceDirName:"ops/network/application",slug:"/ops/network/application/http",permalink:"/notes/ops/network/application/http",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/network/application/http.md",tags:[],version:"current",frontMatter:{id:"http",title:"HTTP"},sidebar:"docs",previous:{title:"DNS",permalink:"/notes/ops/network/application/dns"},next:{title:"SNMP",permalink:"/notes/ops/network/application/snmp"}},u=[{value:"CORS",id:"cors",children:[],level:2},{value:"HTTP2",id:"http2",children:[],level:2},{value:"QUIC",id:"quic",children:[],level:2},{value:"Digest",id:"digest",children:[],level:2}],s={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"301 vs 302",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"301 Moved Permanently"),(0,i.kt)("li",{parentName:"ul"},"302 Found / Moved Temporarily")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# \u5355\u4f4d\u4e3a\u79d2\nCache-Control: public, max-age=3600\nExpires: Thu, 01 Dec 2014 16:00:00 GMT\n")),(0,i.kt)("h2",{id:"cors"},"CORS"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5141\u8bb8\u5934",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Cache-Control"),(0,i.kt)("li",{parentName:"ul"},"Content-Language"),(0,i.kt)("li",{parentName:"ul"},"Content-Type"),(0,i.kt)("li",{parentName:"ul"},"Expires"),(0,i.kt)("li",{parentName:"ul"},"Last-Modified"),(0,i.kt)("li",{parentName:"ul"},"Pragma"))),(0,i.kt)("li",{parentName:"ul"},"access-control-expose-headers - \u63a7\u5236\u66b4\u9732\u5934")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u8bf7\u6c42\nAccess-Control-Request-Headers: authorization\nAccess-Control-Request-Method: GET\n\n# \u54cd\u5e94\nAccess-Control-Allow-Headers: authorization\nAccess-Control-Allow-Methods: POST,GET\nAccess-Control-Allow-Origin: http://127.0.0.1:3000\n")),(0,i.kt)("h2",{id:"http2"},"HTTP2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/http2-and-spdy-indicator/mpbpobfflnpcgagjijhmgnchggcjblin"},"HTTP/2 and SPDY indicator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"chrome://net-internals/#http2"},"chrome://net-internals/#http2"))),(0,i.kt)("h2",{id:"quic"},"QUIC"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Quick UDP Internet Connections"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/FelisCatus/SwitchyOmega/issues/706"},"SwitchyOmega#706")," - Support QUIC proxies"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"chrome://net-internals/#quic"},"chrome://net-internals/#quic")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/QUIC"},"https://en.wikipedia.org/wiki/QUIC")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/curl/curl/wiki/QUIC"},"https://github.com/curl/curl/wiki/QUIC")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.chromium.org/quic"},"https://www.chromium.org/quic")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/mholt/caddy/wiki/QUIC"},"https://github.com/mholt/caddy/wiki/QUIC")),(0,i.kt)("li",{parentName:"ul"},"QUIC \u5e0c\u671b\u80fd\u591f\u63d0\u4f9b\u7b49\u540c\u4e8e SSL/TLS \u5c42\u7ea7\u7684\u7f51\u7edc\u5b89\u5168\u4fdd\u62a4\uff0c\u51cf\u5c11\u6570\u636e\u4f20\u8f93\u53ca\u521b\u5efa\u8fde\u63a5\u65f6\u7684\u5ef6\u8fdf\u65f6\u95f4\uff0c\u53cc\u5411\u63a7\u5236\u5e26\u5bbd\uff0c\u4ee5\u907f\u514d\u7f51\u7edc\u62e5\u585e\u3002")),(0,i.kt)("h2",{id:"digest"},"Digest"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Digest_access_authentication"},"Digest access authentication")),(0,i.kt)("li",{parentName:"ul"},"\u73b0\u5728\u4f7f\u7528 digest \u573a\u666f\u6bd4\u8f83\u5c11 - \u56e0\u4e3a\u9700\u8981\u5b58\u50a8\u660e\u6587"),(0,i.kt)("li",{parentName:"ul"},"SIP \u4f7f\u7528 digest"),(0,i.kt)("li",{parentName:"ul"},"\u4e00\u822c\u4f7f\u7528 Basic over HTTPS"),(0,i.kt)("li",{parentName:"ul"},"\u7b97\u6cd5",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"MD5"),(0,i.kt)("li",{parentName:"ul"},"MD5-sess - HA1 = MD5(MD5(username:realm:password):nonce:cnonce)"),(0,i.kt)("li",{parentName:"ul"},"SHA-256"),(0,i.kt)("li",{parentName:"ul"},"SHA-256-sess"),(0,i.kt)("li",{parentName:"ul"},"SHA-512"),(0,i.kt)("li",{parentName:"ul"},"SHA-512-sess"))),(0,i.kt)("li",{parentName:"ul"},"qop - quality of protection",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"auth",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"HA2 = MD5(method:digestURI)"),(0,i.kt)("li",{parentName:"ul"},"response = MD5(HA1:nonce:nonceCount:cnonce:qop:HA2)"))),(0,i.kt)("li",{parentName:"ul"},"auth-int",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"HA2 = MD5(method:digestURI:MD5(entityBody))"),(0,i.kt)("li",{parentName:"ul"},"response = MD5(HA1:nonce:nonceCount:cnonce:qop:HA2)"))),(0,i.kt)("li",{parentName:"ul"},"\u65e0 - response = MD5(HA1:nonce:HA2)")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"HA1 = MD5(username:realm:password)\nHA2 = MD5(method:digestURI)\nresponse = MD5(HA1:nonce:HA2)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u670d\u52a1\u7aef\u8fd4\u56de challange")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'HTTP/1.0 401 Unauthorized\nServer: HTTPd/0.9\nDate: Sun, 10 Apr 2014 20:26:47 GMT\nWWW-Authenticate: Digest realm="testrealm@host.com",\n                        qop="auth,auth-int",\n                        nonce="dcd98b7102dd2f0e8b11d0f600bfb0c093",\n                        opaque="5ccc069c403ebaf9f0171e9517f40e41"\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5e26 Auth \u8bf7\u6c42")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'GET /dir/index.html HTTP/1.0\nHost: localhost\nAuthorization: Digest username="Mufasa",\n                     realm="testrealm@host.com",\n                     nonce="dcd98b7102dd2f0e8b11d0f600bfb0c093",\n                     uri="/dir/index.html",\n                     qop=auth,\n                     nc=00000001,\n                     cnonce="0a4f113b",\n                     response="6629fae49393a05397450978507c4ef1",\n                     opaque="5ccc069c403ebaf9f0171e9517f40e41"\n')))}m.isMDXComponent=!0}}]);