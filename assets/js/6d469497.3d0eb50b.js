"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[88901],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,w=m["".concat(o,".").concat(d)]||m[d]||s[d]||i;return r?n.createElement(w,l(l({ref:t},c),{},{components:r})):n.createElement(w,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},45413:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l=["components"],p={title:"WireGuard"},o=void 0,u={unversionedId:"service/network/wireguard",id:"service/network/wireguard",title:"WireGuard",description:"- \u6027\u80fd\u5bf9\u6bd4",source:"@site/notes/service/network/wireguard.md",sourceDirName:"service/network",slug:"/service/network/wireguard",permalink:"/notes/service/network/wireguard",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/network/wireguard.md",tags:[],version:"current",frontMatter:{title:"WireGuard"},sidebar:"docs",previous:{title:"\u79c1\u6709\u865a\u62df\u7f51\u7edc\u5e38\u89c1\u95ee\u9898",permalink:"/notes/service/network/vpn-faq"},next:{title:"Wireshark",permalink:"/notes/service/network/wireshark"}},c=[{value:"FAQ",id:"faq",children:[{value:"\u6865\u63a5\u6216 DHCP",id:"\u6865\u63a5\u6216-dhcp",children:[],level:3}],level:2}],s={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.wireguard.com/performance"},"\u6027\u80fd\u5bf9\u6bd4")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/k4yt3x/wireguard-mesh-configurator"},"WireGuard Mesh Configurator"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"mesh \u914d\u7f6e\u5de5\u5177 - \u6279\u91cf\u751f\u6210\u914d\u7f6e"),(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u4f1a\u81ea\u52a8\u53d1\u73b0 - \u9700\u8981\u989d\u5916\u914d\u7f6e"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/WireGuard/wg-dynamic"},"wg-dynamic"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Wireguard Dynamic IP Configuration Tool"),(0,i.kt)("li",{parentName:"ul"},"\u672a\u5b8c\u6210 - \u65e0\u7ef4\u62a4"))),(0,i.kt)("li",{parentName:"ul"},"\u5e38\u89c1\u7aef\u53e3 51820"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.wireguard.com/known-limitations/"},"\u9650\u5236"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u4f1a\u5bf9\u5305\u505a\u6df7\u6dc6"),(0,i.kt)("li",{parentName:"ul"},"\u901a\u9053\u4f7f\u7528 UDP - TCP over UDP"),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ChaCha20Poly1305 \u52a0\u5bc6\uff0c\u76ee\u524d\u57fa\u672c\u4e0d\u652f\u6301\u786c\u4ef6\u52a0\u901f"),(0,i.kt)("li",{parentName:"ul"},"Roaming Mischief - \u6f2b\u6e38\u573a\u666f\u4e0d\u592a\u53cb\u597d"),(0,i.kt)("li",{parentName:"ul"},"Identity Hiding Forward Secrecy"),(0,i.kt)("li",{parentName:"ul"},"Post-Quantum Secrecy - \u52a0\u5bc6\u65b9\u5f0f\u4e0d\u662f\u540e\u91cf\u5b50\u65f6\u4ee3\u5b89\u5168\u7684"),(0,i.kt)("li",{parentName:"ul"},"Denial of Service"))),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://restoreprivacy.com/wireguard"},"WireGuard VPN: What You Need to Know")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/gsliepen/tinc/issues/179"},"gsliepen/tinc#178")," - tinc: Wireguard backend")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5185\u6838\u6a21\u5757\napk add wireguard-$(uname -r | sed -r 's/.*?-(.*)$/\\1/')\n# \u7528\u6237\u7a7a\u95f4\u5de5\u5177\napk add wireguard-tools\n\n# \u914d\u7f6e A \u7aef\n# ==========\n# \u751f\u6210\u5bc6\u94a5\u548c\u516c\u94a5\nwg genkey | tee wg0.pri | wg pubkey > wg0.pub\n# \u914d\u7f6e\u7f51\u5361\nip link add wg0 type wireguard\nip addr add 10.0.0.1/24 dev wg0\nwg set wg0 listen-port 51820 private-key wg0.pri\nip link set wg0 up\n\n# \u914d\u7f6e B \u7aef\n# ==========\n# \u751f\u6210\u5bc6\u94a5\u548c\u516c\u94a5\nwg genkey | tee wg0.pri | wg pubkey > wg0.pub\n# \u914d\u7f6e\u7f51\u5361\nip link add wg0 type wireguard\nip addr add 10.0.0.2/24 dev wg0\nwg set wg0 listen-port 51820 private-key wg0.pri\nip link set wg0 up\n\n# A -> B\n# ==========\n# \u5728 B \u6267\u884c - \u5c06\u8f93\u51fa\u7ed3\u679c\u5728 A \u6267\u884c\n# \u5982\u679c B \u6ca1\u6709 A \u80fd\u76f4\u63a5\u8bbf\u95ee\u7684\u5730\u5740 - \u5219\u5ffd\u7565 endpoint\necho wg set wg0 peer $(cat wg0.pub) persistent-keepalive 25 allowed-ips 10.0.0.2/32 endpoint <\u4e3b\u673aB\u5730\u5740>:51820\n\n# B -> A\n# ==========\n# \u5728 A \u6267\u884c - \u5c06\u8f93\u51fa\u7ed3\u679c\u5728 B \u6267\u884c\n# \u5982\u679c A \u6ca1\u6709 B \u80fd\u76f4\u63a5\u8bbf\u95ee\u7684\u5730\u5740 - \u5219\u5ffd\u7565 endpoint\necho wg set wg0 peer $(cat wg0.pub) persistent-keepalive 25 allowed-ips 10.0.0.1/32 endpoint <\u4e3b\u673aA\u5730\u5740>:51820\n\n# \u5728 B \u80fd\u8bbf\u95ee A\nping 10.0.0.1\n")),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("h3",{id:"\u6865\u63a5\u6216-dhcp"},"\u6865\u63a5\u6216 DHCP"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"wg \u53ea\u652f\u6301 L3 - TCP/IP",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"DHCP \u9700\u8981 L2 \u5c42 MAC"))),(0,i.kt)("li",{parentName:"ul"},"\u6865\u63a5\u7684\u7f51\u8def\u53ef\u4ee5\u8003\u8651\u901a\u8fc7\u8def\u7531\u5b9e\u73b0 - ",(0,i.kt)("a",{parentName:"li",href:"https://lists.zx2c4.com/pipermail/wireguard/2018-January/002341.html"},"\u4f8b\u5982")),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u9700\u8981\u6865\u63a5\u53ef\u4ee5\u8003\u8651 tinc \u7684 switch \u6a21\u5f0f\u6216\u8005 ",(0,i.kt)("a",{parentName:"li",href:"https://remote-lab.net/linux-l2tp-ethernet-pseudowires"},"l2tp"))))}m.isMDXComponent=!0}}]);