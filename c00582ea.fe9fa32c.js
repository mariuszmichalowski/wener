(window.webpackJsonp=window.webpackJsonp||[]).push([[585],{658:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(8),l=(a(0),a(836)),b={title:"\u7f51\u7edc\u5e38\u89c1\u95ee\u9898"},c={unversionedId:"os/linux/network/network-faq",id:"os/linux/network/network-faq",isDocsHomePage:!1,title:"\u7f51\u7edc\u5e38\u89c1\u95ee\u9898",description:"VTI vs XFRM",source:"@site/notes/os/linux/network/network-faq.md",slug:"/os/linux/network/network-faq",permalink:"/notes/os/linux/network/network-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/network/network-faq.md",version:"current",sidebar:"docs",previous:{title:"MitmProxy",permalink:"/notes/os/linux/network/mitmproxy"},next:{title:"nftables \u89c4\u5219",permalink:"/notes/os/linux/network/nftables-rule"}},i=[],u={toc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"vti-vs-xfrm"},"VTI vs XFRM"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"XFRM \u6bd4 VTI \u66f4\u597d")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"VTI - Linux 3.6+"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"L3 \u901a\u9053\uff0c\u6307\u5b9a\u7ec8\u7aef\u5730\u5740"),Object(l.b)("li",{parentName:"ul"},"\u5355\u5730\u5740\u65cf"),Object(l.b)("li",{parentName:"ul"},"\u53ea\u652f\u6301\u901a\u9053\u6a21\u5f0f"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"XFRM - Linux 4.19+"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4e0d\u9700\u8981\u914d\u7f6e\u901a\u9053\u5730\u5740",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u907f\u514d VTI SAs:interface \u7684 1:1 \u5173\u7cfb"),Object(l.b)("li",{parentName:"ul"},"SAs peers \u5171\u4eab interface"))),Object(l.b)("li",{parentName:"ul"},"\u540c\u65f6\u652f\u6301 IPv4 IPv6"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u5305\u62ec\u901a\u9053\u7684\u5176\u4ed6\u6a21\u5f0f"),Object(l.b)("li",{parentName:"ul"},"XFRM interface ID \u914d\u7f6e",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u907f\u514d GRP key \u548c XFRM mark \u914d\u7f6e"))))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u53c2\u8003"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://wiki.strongswan.org/projects/strongswan/wiki/RouteBasedVPN"},"RouteBasedVPN"))))),Object(l.b)("h1",{id:"vpn-vs-mesh-network"},"VPN vs Mesh Network"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"VPN",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u901a\u5e38\u6307\u4f20\u7edf VPN - \u4f8b\u5982 OpenVPN, IPSec"),Object(l.b)("li",{parentName:"ul"},"\u6240\u6709 Endpoint \u8fde\u4e0a\u4e00\u4e2a Server, \u7f51\u7edc\u901a\u8fc7\u6307\u5b9a\u7684\u8282\u70b9\u51fa"),Object(l.b)("li",{parentName:"ul"},"\u591a\u4e3a Client, Server \u6a21\u5f0f"),Object(l.b)("li",{parentName:"ul"},"\u591a\u9762\u6d88\u8d39\u7aef - Consumer"))),Object(l.b)("li",{parentName:"ul"},"Mesh Network",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u7528\u4e8e\u7ec4\u5efa\u79c1\u6709\u7f51\u7edc\u7684\u6280\u672f - VPN"),Object(l.b)("li",{parentName:"ul"},"\u70b9\u5bf9\u70b9\u76f4\u8fde"),Object(l.b)("li",{parentName:"ul"},"\u591a\u4e3a\u5e73\u7b49\u8282\u70b9\u5173\u7cfb - Server to Server"),Object(l.b)("li",{parentName:"ul"},"\u591a\u7528\u4e8e\u57fa\u7840\u7f51\u7edc\u5efa\u8bbe")))),Object(l.b)("h1",{id:"bridge-vs-macvlan"},"bridge vs macvlan"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"bridge",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5b8c\u6574\u529f\u80fd"),Object(l.b)("li",{parentName:"ul"},"\u4f1a\u5b66\u4e60 Mac \u5730\u5740"),Object(l.b)("li",{parentName:"ul"},"\u4f1a\u5185\u90e8\u8f6c\u53d1\u5339\u914d Mac \u7684\u5305"))),Object(l.b)("li",{parentName:"ul"},"macvlan",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u53ef\u7406\u89e3\u4e3a\u7b80\u5355\u7684 bridge"),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u4f1a\u5b66\u4e60 Mac \u5730\u5740\uff0c\u4e0d\u4f1a\u5185\u90e8\u8f6c\u53d1 - \u56e0\u6b64\u7a0d\u5fae\u4f1a\u5feb\u4e00\u70b9\uff0c\u5185\u5b58\u5c11\u4e00\u70b9"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://hicu.be/bridge-vs-macvlan"},"Bridge vs Macvlan"))),Object(l.b)("h1",{id:"drop-vs-reject"},"DROP vs REJECT"),Object(l.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"\u5efa\u8bae\u4f7f\u7528 REJECT"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"DROP - \u4e0d\u5904\u7406\u76f4\u63a5\u4e22\u5305",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"TCP \u4f1a\u8d85\u65f6",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"TCP \u4f1a\u53d1\u8d77\u591a\u6b21\uff0c\u56e0\u4e3a TCP \u672c\u8eab\u534f\u8bae\u53ef\u9760\u4f1a\u91cd\u590d\u53d1\u5305"))),Object(l.b)("li",{parentName:"ul"},"UDP \u8ba4\u4e3a\u670d\u52a1\u7aef\u5df2\u7ecf\u63a5\u6536"),Object(l.b)("li",{parentName:"ul"},"\u9488\u5bf9\u6076\u610f\u653b\u51fb\u4f1a\u8017\u8d39\u66f4\u591a\u5ba2\u6237\u7aef\u8d44\u6e90",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4f46\u4e13\u4e1a\u7684\u5de5\u5177\u4e00\u822c\u4e0d\u53d7\u5f71\u54cd"))))),Object(l.b)("li",{parentName:"ul"},"REJECT \u8fd4\u56de\u5931\u8d25 - \u5ba2\u6237\u7aef\u63a5\u6536\u5230\u65e0\u6cd5\u5230\u8fbe",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u901a\u8fc7 ICMP \u8fd4\u56de"),Object(l.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u5305\u542b\u539f\u56e0"),Object(l.b)("li",{parentName:"ul"},"\u5bf9\u4e8e\u6076\u610f\u653b\u51fb\u53ef\u55c5\u63a2\u5219\u4f1a\u7acb\u5373\u8fd4\u56de\u589e\u52a0\u68c0\u6d4b\u901f\u5ea6"),Object(l.b)("li",{parentName:"ul"},"\u7528\u6237\u4f53\u9a8c\u4f1a\u66f4\u597d")))),Object(l.b)("h1",{id:"mangle-vs-nat"},"mangle vs nat"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u4e24\u8005\u90fd\u662f\u64cd\u4f5c\u3001\u4fee\u6539\u5305"),Object(l.b)("li",{parentName:"ul"},"mangle \u5148\u4e8e nat"),Object(l.b)("li",{parentName:"ul"},"mangle",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u670d\u52a1\u7c7b\u578b"),Object(l.b)("li",{parentName:"ul"},"TTL"),Object(l.b)("li",{parentName:"ul"},"Mark"),Object(l.b)("li",{parentName:"ul"},"POSTROUTING \u5728\u8def\u7531\u51b3\u7b56\u4e4b\u524d\uff0c\u56e0\u6b64 mark \u6807\u8bb0\u8fdb\u5165\u4e0d\u540c\u7684\u8def\u7531\u8868\u6bd4\u8f83\u91cd\u8981"))),Object(l.b)("li",{parentName:"ul"},"nat",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5730\u5740\u8f6c\u6362")))),Object(l.b)("h1",{id:"masquerade-vs-snat"},"MASQUERADE vs SNAT"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u4e24\u8005\u90fd\u505a \u6765\u6e90\u5730\u5740\u8f6c\u6362 - Source NAT")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"SNAT",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u56fa\u5b9a\u76ee\u6807 IP - ",Object(l.b)("inlineCode",{parentName:"li"},"--to-source")))),Object(l.b)("li",{parentName:"ul"},"MASQUERADE",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u52a8\u6001\u5730\u5740"),Object(l.b)("li",{parentName:"ul"},"\u6bd4 SNAT \u6162 - \u6bcf\u4e2a\u5305\u90fd\u9700\u8981\u68c0\u6d4b\u5e94\u8be5\u4f7f\u7528\u7684\u5730\u5740")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"iptables -t nat -D POSTROUTING -o eth0 -j MASQUERADE\niptables -t nat -A POSTROUTING -o eth0 -j SNAT --to-source 192.168.8.2\n")))}p.isMDXComponent=!0},836:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),p=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},o=function(e){var t=p(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),o=p(a),O=n,j=o["".concat(b,".").concat(O)]||o[O]||m[O]||l;return a?r.a.createElement(j,c(c({ref:t},u),{},{components:a})):r.a.createElement(j,c({ref:t},u))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=O;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var u=2;u<l;u++)b[u]=a[u];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);