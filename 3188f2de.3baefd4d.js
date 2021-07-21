(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{1151:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},287:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),o=(n(0),n(1151)),i={title:"IPTables Cookbook"},c={unversionedId:"os/linux/network/iptables-cookbook",id:"os/linux/network/iptables-cookbook",isDocsHomePage:!1,title:"IPTables Cookbook",description:"\u5141\u8bb8\u4e00\u4e2a\u7f51\u5361\u8def\u7531\u8f6c\u53d1\u5230\u53e6\u5916\u4e00\u4e2a\u7f51\u5361",source:"@site/notes/os/linux/network/iptables-cookbook.md",slug:"/os/linux/network/iptables-cookbook",permalink:"/notes/os/linux/network/iptables-cookbook",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/network/iptables-cookbook.md",version:"current",sidebar:"docs",previous:{title:"IPRoute2",permalink:"/notes/os/linux/network/iproute2"},next:{title:"iptables \u53c2\u8003",permalink:"/notes/os/linux/network/iptables-ref"}},l=[{value:"\u5141\u8bb8\u4e00\u4e2a\u7f51\u5361\u8def\u7531\u8f6c\u53d1\u5230\u53e6\u5916\u4e00\u4e2a\u7f51\u5361",id:"\u5141\u8bb8\u4e00\u4e2a\u7f51\u5361\u8def\u7531\u8f6c\u53d1\u5230\u53e6\u5916\u4e00\u4e2a\u7f51\u5361",children:[]},{value:"NAT with IPSec",id:"nat-with-ipsec",children:[]},{value:"stun/turn",id:"stunturn",children:[]}],p={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u5141\u8bb8\u4e00\u4e2a\u7f51\u5361\u8def\u7531\u8f6c\u53d1\u5230\u53e6\u5916\u4e00\u4e2a\u7f51\u5361"},"\u5141\u8bb8\u4e00\u4e2a\u7f51\u5361\u8def\u7531\u8f6c\u53d1\u5230\u53e6\u5916\u4e00\u4e2a\u7f51\u5361"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5141\u8bb8 wlan1 -> wlan0")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"iptables -A FORWARD -i wlan1 -o wlan0 -j ACCEPT\niptables -A FORWARD -i wlan0 -o wlan1 -m state --state ESTABLISHED,RELATED -j ACCEPT\niptables -t nat -A POSTROUTING -o wlan0 -j MASQUERADE\n")),Object(o.b)("h2",{id:"nat-with-ipsec"},"NAT with IPSec"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"echo 1 > /proc/sys/net/ipv4/ip_forward\niptables -A FORWARD -i eth1 -j ACCEPT\n\nip link add ipsec0 type xfrm dev eth0 if_id 42\nip link set ipsec0 up\n# \u914d\u7f6e\u57fa\u4e8e xfrm \u7684 vpn\niptables -A FORWARD -i ipsec0 -j ACCEPT\n\n# \u67e5\u770b\u5f53\u524d\u5730\u5740\nip xfrm policy\n# \u5982\u679c\u662f\u4f7f\u7528\u7684 swanctl\nVPN=vpn\nVIP=$(swanctl -l -i $VPN -P | grep local-vips -A1 | tail -1 | tr -d ' ')\n# \u6dfb\u52a0\u5730\u5740 - xfrm \u4e0d\u9700\u8981\u5730\u5740\u4e5f\u80fd\u5de5\u4f5c\uff0c\u4f46 MASQUERADE \u9700\u8981\u8f6c\u6362\u51fa\u6b63\u786e\u7684\u5730\u5740\u9700\u8981\nip addr add $VIP/32 dev ipsec0\n# \u6d4b\u8bd5\nip ro add 8.8.8.8 dev ipsec0 src $VIP\nping 8.8.8.8\n\n# NAT\niptables -t nat -A POSTROUTING -o ipsec0 -j MASQUERADE\nRIP=$(swanctl -l -i $VPN -P | grep remote-host | egrep -o '[0-9.]+')\n# \u8fdc\u7a0b IP \u8d70\u9ed8\u8ba4\nip ro add $RIP dev eth0 src 192.168.1.2 via 192.168.1.1\n# \u672c\u5730\u9ed8\u8ba4\u8def\u7531\nip ro add default dev ipsec0 src $VIP\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://tldp.org/HOWTO/VPN-Masquerade-HOWTO-6.html"},"IPsec masquerade technical notes and special security considerations"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"AH protocol cannot be masqueraded"),Object(o.b)("li",{parentName:"ul"},"transport-mode ESP also cannot be reliably masqueraded"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/NAT_traversal#IPsec"},"NAT#IPsec"))),Object(o.b)("h2",{id:"stunturn"},"stun/turn"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://askubuntu.com/a/1044171/267103"},"https://askubuntu.com/a/1044171/267103"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"")))}s.isMDXComponent=!0}}]);