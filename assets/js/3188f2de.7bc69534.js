"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[37687],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96349:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i=["components"],l={title:"IPTables Cookbook"},s=void 0,p={unversionedId:"os/linux/network/iptables-cookbook",id:"os/linux/network/iptables-cookbook",isDocsHomePage:!1,title:"IPTables Cookbook",description:"\u5141\u8bb8\u4e00\u4e2a\u7f51\u5361\u8def\u7531\u8f6c\u53d1\u5230\u53e6\u5916\u4e00\u4e2a\u7f51\u5361",source:"@site/notes/os/linux/network/iptables-cookbook.md",sourceDirName:"os/linux/network",slug:"/os/linux/network/iptables-cookbook",permalink:"/notes/os/linux/network/iptables-cookbook",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/network/iptables-cookbook.md",version:"current",frontMatter:{title:"IPTables Cookbook"},sidebar:"docs",previous:{title:"IPRoute2",permalink:"/notes/os/linux/network/iproute2"},next:{title:"iptables \u53c2\u8003",permalink:"/notes/os/linux/network/iptables-ref"}},c=[{value:"\u5141\u8bb8\u4e00\u4e2a\u7f51\u5361\u8def\u7531\u8f6c\u53d1\u5230\u53e6\u5916\u4e00\u4e2a\u7f51\u5361",id:"\u5141\u8bb8\u4e00\u4e2a\u7f51\u5361\u8def\u7531\u8f6c\u53d1\u5230\u53e6\u5916\u4e00\u4e2a\u7f51\u5361",children:[]},{value:"NAT with IPSec",id:"nat-with-ipsec",children:[]},{value:"stun/turn",id:"stunturn",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5141\u8bb8\u4e00\u4e2a\u7f51\u5361\u8def\u7531\u8f6c\u53d1\u5230\u53e6\u5916\u4e00\u4e2a\u7f51\u5361"},"\u5141\u8bb8\u4e00\u4e2a\u7f51\u5361\u8def\u7531\u8f6c\u53d1\u5230\u53e6\u5916\u4e00\u4e2a\u7f51\u5361"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5141\u8bb8 wlan1 -> wlan0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"iptables -A FORWARD -i wlan1 -o wlan0 -j ACCEPT\niptables -A FORWARD -i wlan0 -o wlan1 -m state --state ESTABLISHED,RELATED -j ACCEPT\niptables -t nat -A POSTROUTING -o wlan0 -j MASQUERADE\n")),(0,a.kt)("h2",{id:"nat-with-ipsec"},"NAT with IPSec"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"echo 1 > /proc/sys/net/ipv4/ip_forward\niptables -A FORWARD -i eth1 -j ACCEPT\n\nip link add ipsec0 type xfrm dev eth0 if_id 42\nip link set ipsec0 up\n# \u914d\u7f6e\u57fa\u4e8e xfrm \u7684 vpn\niptables -A FORWARD -i ipsec0 -j ACCEPT\n\n# \u67e5\u770b\u5f53\u524d\u5730\u5740\nip xfrm policy\n# \u5982\u679c\u662f\u4f7f\u7528\u7684 swanctl\nVPN=vpn\nVIP=$(swanctl -l -i $VPN -P | grep local-vips -A1 | tail -1 | tr -d ' ')\n# \u6dfb\u52a0\u5730\u5740 - xfrm \u4e0d\u9700\u8981\u5730\u5740\u4e5f\u80fd\u5de5\u4f5c\uff0c\u4f46 MASQUERADE \u9700\u8981\u8f6c\u6362\u51fa\u6b63\u786e\u7684\u5730\u5740\u9700\u8981\nip addr add $VIP/32 dev ipsec0\n# \u6d4b\u8bd5\nip ro add 8.8.8.8 dev ipsec0 src $VIP\nping 8.8.8.8\n\n# NAT\niptables -t nat -A POSTROUTING -o ipsec0 -j MASQUERADE\nRIP=$(swanctl -l -i $VPN -P | grep remote-host | egrep -o '[0-9.]+')\n# \u8fdc\u7a0b IP \u8d70\u9ed8\u8ba4\nip ro add $RIP dev eth0 src 192.168.1.2 via 192.168.1.1\n# \u672c\u5730\u9ed8\u8ba4\u8def\u7531\nip ro add default dev ipsec0 src $VIP\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tldp.org/HOWTO/VPN-Masquerade-HOWTO-6.html"},"IPsec masquerade technical notes and special security considerations"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"AH protocol cannot be masqueraded"),(0,a.kt)("li",{parentName:"ul"},"transport-mode ESP also cannot be reliably masqueraded"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/NAT_traversal#IPsec"},"NAT#IPsec"))),(0,a.kt)("h2",{id:"stunturn"},"stun/turn"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://askubuntu.com/a/1044171/267103"},"https://askubuntu.com/a/1044171/267103"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"")))}d.isMDXComponent=!0}}]);