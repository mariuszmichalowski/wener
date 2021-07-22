(window.webpackJsonp=window.webpackJsonp||[]).push([[939],{1012:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(8),o=(r(0),r(1152)),p={title:"MitmProxy"},i={unversionedId:"os/linux/network/mitmproxy",id:"os/linux/network/mitmproxy",isDocsHomePage:!1,title:"MitmProxy",description:"mitmproxy",source:"@site/notes/os/linux/network/mitmproxy.md",slug:"/os/linux/network/mitmproxy",permalink:"/notes/os/linux/network/mitmproxy",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/network/mitmproxy.md",version:"current",sidebar:"docs",previous:{title:"IWD",permalink:"/notes/os/linux/network/iwd"},next:{title:"MTU",permalink:"/notes/os/linux/network/mtu"}},c=[{value:"Tips",id:"tips",children:[]},{value:"\u900f\u660e\u4ee3\u7406",id:"\u900f\u660e\u4ee3\u7406",children:[]}],l={toc:c};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"mitmproxy"},"mitmproxy"),Object(o.b)("h2",{id:"tips"},"Tips"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u8bc1\u4e66\u5b89\u88c5\u8bbf\u95ee ",Object(o.b)("a",{parentName:"p",href:"http://mitm.it/"},"http://mitm.it/"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\b",Object(o.b)("a",{parentName:"p",href:"http://docs.mitmproxy.org/en/stable/"},"Doc"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://docs.mitmproxy.org/stable/concepts-modes/"},"\u5de5\u4f5c\u6a21\u5f0f")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Regular Proxy",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u4f5c\u4e3a HTTP \u4ee3\u7406\u670d\u52a1\u5668"),Object(o.b)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u5b89\u88c5\u8bc1\u4e66 - \u8bbf\u95ee mitm.it \u5b89\u88c5\u8bc1\u4e66"))),Object(o.b)("li",{parentName:"ul"},"Transparent - \u900f\u660e\u4ee3\u7406",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u65e0\u6cd5\u914d\u7f6e HTTP \u4ee3\u7406\u7684\u573a\u666f"),Object(o.b)("li",{parentName:"ul"},"\u901a\u8fc7\u8def\u7531\u7b49\u624b\u6bb5\u76f4\u63a5\u5c06\u6d41\u91cf\u8f6c\u53d1\u5230 mitmproxy",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u914d\u7f6e\u9ed8\u8ba4\u7f51\u5173"),Object(o.b)("li",{parentName:"ul"},"\u914d\u7f6e\u4e0b\u4e00\u8df3\u5730\u5740"))))),Object(o.b)("li",{parentName:"ul"},"Reverse Proxy - \u53cd\u5411\u4ee3\u7406",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u914d\u7f6e\uff0c\u4ee3\u7406\u670d\u52a1\u7aef\u6d41\u91cf"))),Object(o.b)("li",{parentName:"ul"},"Uptream Proxy - \u4e0a\u6e38\u4ee3\u7406",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u4f5c\u4e3a\u4e8c\u7ea7\u4ee3\u7406\u4f7f\u7528"),Object(o.b)("li",{parentName:"ul"},"\u53ef\u914d\u7f6e\u4e0b\u4e00\u7ea7\u4ee3\u7406\u5730\u5740"))),Object(o.b)("li",{parentName:"ul"},"SOCKS Proxy",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u57fa\u4e8e SOCKS5 \u7684\u4ee3\u7406\u534f\u8bae - \u9ed8\u8ba4 HTTP \u534f\u8bae"))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"frozenpandaman/splatnet2statink - ",Object(o.b)("a",{parentName:"p",href:"https://github.com/frozenpandaman/splatnet2statink/wiki/mitmproxy-instructions"},"mitmproxy instructions")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"mitmweb --mode regular --no-web-open-browser --web-port 8080 --listen-port 8888\n\nopenssl genrsa -out cert.key 2048\nopenssl req -new -x509 -key cert.key -out cert.crt\ncat cert.key cert.crt > cert.pem\n\n# \u9ed8\u8ba4 ~/.mitmproxy/mitmproxy-ca.pem\nmitmweb --certs squid-ca-cert.pem --mode regular --no-web-open-browser --web-port 8080 --listen-port 8888\n\ndocker run --rm -it mitmproxy/mitmproxy\n")),Object(o.b)("h2",{id:"\u900f\u660e\u4ee3\u7406"},"\u900f\u660e\u4ee3\u7406"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.mitmproxy.org/stable/howto-transparent/"},"HowTo Transparent"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# \u542f\u7528\u8f6c\u53d1\nsysctl -w net.ipv4.ip_forward=1\n# \u7981\u7528 ICMP \u8f6c\u53d1\nsysctl -w net.ipv4.conf.all.send_redirects=0\n\niptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8080\niptables -t nat -A PREROUTING -i eth0 -p tcp --dport 443 -j REDIRECT --to-port 8080\n\n# IPv6\nsysctl -w net.ipv6.conf.all.forwarding=1\nip6tables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8080\nip6tables -t nat -A PREROUTING -i eth0 -p tcp --dport 443 -j REDIRECT --to-port 8080\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u542f\u52a8")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"mitmproxy --mode transparent --showhost\n")))}b.isMDXComponent=!0},1152:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=b(r),s=n,O=m["".concat(p,".").concat(s)]||m[s]||u[s]||o;return r?a.a.createElement(O,i(i({ref:t},l),{},{components:r})):a.a.createElement(O,i({ref:t},l))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var l=2;l<o;l++)p[l]=r[l];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);