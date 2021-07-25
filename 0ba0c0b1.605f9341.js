(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1169:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=o(n),m=a,s=d["".concat(b,".").concat(m)]||d[m]||u[m]||l;return n?r.a.createElement(s,i(i({ref:t},p),{},{components:n})):r.a.createElement(s,i({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var p=2;p<l;p++)b[p]=n[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return o}));var a=n(3),r=n(8),l=(n(0),n(1169)),b={title:"\u6865\u63a5\u7f51\u7edc"},i={unversionedId:"os/linux/network/bridge",id:"os/linux/network/bridge",isDocsHomePage:!1,title:"\u6865\u63a5\u7f51\u7edc",description:"Bridge",source:"@site/notes/os/linux/network/bridge.md",slug:"/os/linux/network/bridge",permalink:"/notes/os/linux/network/bridge",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/network/bridge.md",version:"current",sidebar:"docs",previous:{title:"Linux \u7f51\u7edc",permalink:"/notes/os/linux/network/network"},next:{title:"ifupdown",permalink:"/notes/os/linux/network/ifupdown"}},c=[{value:"STP",id:"stp",children:[]},{value:"\u6865\u63a5\u7f51\u5361\u4e0d\u4f7f\u7528\u5b9e\u9645\u7f51\u5361 Mac \u5730\u5740",id:"\u6865\u63a5\u7f51\u5361\u4e0d\u4f7f\u7528\u5b9e\u9645\u7f51\u5361-mac-\u5730\u5740",children:[]},{value:"tinc \u8282\u70b9\u907f\u514d mac \u51b2\u7a81",id:"tinc-\u8282\u70b9\u907f\u514d-mac-\u51b2\u7a81",children:[]}],p={toc:c};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"bridge"},"Bridge"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-interfaces"},"auto eth0\niface eth0 inet manual\n\nauto br0\niface br0 inet dhcp\n    bridge-ports eth0\n    bridge-stp on\n  # \u81ea\u5b9a\u4e49 mac \u786e\u4fdd dhcp \u7a33\u5b9a\n    # bridge-hw 00:00:00:00:00:00\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# ip link set dev $IFACE type bridge ageing_time $IF_BRIDGE_AGEING\n# brctl setageing\n\n# ip link set dev $IFACE type bridge priority $IF_BRIDGE_BRIDGEPRIO\n# brctl setbridgeprio\n\n# ip link set dev $IFACE type bridge forward_delay $IF_BRIDGE_FD\n# brctl setfd\n\n# ip link set dev $IFACE type bridge hello_time $IF_BRIDGE_HELLO\n# brctl sethello\n\n# ip link set dev $IFACE type bridge max_age $IF_BRIDGE_MAXAGE\n# brctl setmaxage\n\n# bridge link set dev $IFACE cost $IF_BRIDGE_PATHCOST\n# brctl setpathcost\n\n# bridge link set dev $IFACE priority $IF_BRIDGE_PORTPRIO\n# brctl setportprio\n\n# ip link set dev $IFACE type bridge stp $(yesno $IF_BRIDGE_STP)\nbrctl stp br0 off\n\n# vlan\n# ip link set dev $IFACE type bridge vlan_filtering $(yesno $IF_BRIDGE_VLAN_AWARE)\n")),Object(l.b)("h2",{id:"stp"},"STP"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"BPDU - Bridge Protocol Data Unit")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u89d2\u8272")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Role"),Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Chinese"),Object(l.b)("th",{parentName:"tr",align:null},"Desc"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"RB"),Object(l.b)("td",{parentName:"tr",align:null},"Root Bridge"),Object(l.b)("td",{parentName:"tr",align:null},"\u6839\u6865"),Object(l.b)("td",{parentName:"tr",align:null},"ID \u6700\u5c0f\u6865")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"RP"),Object(l.b)("td",{parentName:"tr",align:null},"Root Port"),Object(l.b)("td",{parentName:"tr",align:null},"\u6839\u7aef\u53e3"),Object(l.b)("td",{parentName:"tr",align:null},"\u6700\u4f73\u8def\u5f84\u7aef\u53e3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"DP"),Object(l.b)("td",{parentName:"tr",align:null},"Designated Port"),Object(l.b)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u7aef\u53e3"),Object(l.b)("td",{parentName:"tr",align:null},"\u6bcf\u4e00\u4e2a\u7f51\u6bb5\u9009\u62e9\u5230\u6839\u6865\u6700\u8fd1\u7684\u7f51\u6865\u4f5c\u4e3a\u6307\u5b9a\u7f51\u6865, \u8be5\u7f51\u6865\u5230\u8fd9\u4e00\u7f51\u6bb5\u7684\u7aef\u53e3\u4e3a\u6307\u5b9a\u7aef\u53e3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AP"),Object(l.b)("td",{parentName:"tr",align:null},"Alternated Port"),Object(l.b)("td",{parentName:"tr",align:null},"\u53ef\u9009\u7aef\u53e3"),Object(l.b)("td",{parentName:"tr",align:null},"\u5373\u963b\u585e\u7aef\u53e3, \u65e2\u4e0d\u662f\u6307\u5b9a\u7aef\u53e3, \u4e5f\u4e0d\u662f\u6839\u7aef\u53e3\u7684\u7aef\u53e3")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u7aef\u53e3\u72b6\u6001")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Status"),Object(l.b)("th",{parentName:"tr",align:null},"Data"),Object(l.b)("th",{parentName:"tr",align:null},"BPDU"),Object(l.b)("th",{parentName:"tr",align:null},"Learn Address"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Disabled"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"no")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Blocking"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"recv"),Object(l.b)("td",{parentName:"tr",align:null},"no")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Listening"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"yes"),Object(l.b)("td",{parentName:"tr",align:null},"no")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Learning"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"yes"),Object(l.b)("td",{parentName:"tr",align:null},"start")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Forwarding"),Object(l.b)("td",{parentName:"tr",align:null},"yes"),Object(l.b)("td",{parentName:"tr",align:null},"yes"),Object(l.b)("td",{parentName:"tr",align:null},"yes")))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Blocking(20s) \u2013> Listening(15s) \u2013> Learning(15s) \u2013> Forwarding")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/mstpd/mstpd"},"mstpd/mstpd")," - Multiple Spanning Tree Protocol Daemon"),Object(l.b)("li",{parentName:"ul"},"wikipedia ",Object(l.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Spanning_Tree_Protocol"},"Spanning Tree Protocol")),Object(l.b)("li",{parentName:"ul"},"wikipedia ",Object(l.b)("a",{parentName:"li",href:"https://zh.wikipedia.org/wiki/%E7%94%9F%E6%88%90%E6%A0%91%E5%8D%8F%E8%AE%AE"},"\u751f\u6210\u6811\u534f\u8bae")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.cnblogs.com/hzl6255/p/3259909.html"},"Linux STP \u4ecb\u7ecd")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://tldp.org/HOWTO/BRIDGE-STP-HOWTO/"},"Linux BRIDGE-STP-HOWTO")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://www.embeddedlinux.org.cn/linux_net/0596002556/understandlni-CHP-16-SECT-16.html"},"Spanning Tree Protocol")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://serverfault.com/questions/824621"},"Linux: bridges, VLANs and RSTP"))))),Object(l.b)("h1",{id:"faq"},"FAQ"),Object(l.b)("h2",{id:"\u6865\u63a5\u7f51\u5361\u4e0d\u4f7f\u7528\u5b9e\u9645\u7f51\u5361-mac-\u5730\u5740"},"\u6865\u63a5\u7f51\u5361\u4e0d\u4f7f\u7528\u5b9e\u9645\u7f51\u5361 Mac \u5730\u5740"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u6865\u63a5\u7f51\u5361 MAC \u5730\u5740\u4f1a\u53d8\u5bfc\u81f4 dhcp \u83b7\u53d6\u7684\u5730\u5740\u4e0d\u7a33\u5b9a")),Object(l.b)("p",null,"\u9ed8\u8ba4\u9009\u62e9\u6700\u4f4e mac - \u6392\u5e8f\u6700\u524d\uff0c\u4e00\u822c\u865a\u62df\u7f51\u5361\u7684 mac \u4f1a\u6bd4\u5b9e\u9645\u7684\u66f4\u4f4e\uff0c\u5bfc\u81f4\u88ab\u4f18\u5148\u9009\u62e9\u3002"),Object(l.b)("p",null,"brctl addif \u6dfb\u52a0 slave \u7684\u65f6\u5019\u4e5f\u4f1a\u53d8"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"\u6dfb\u52a0 slave \u7684\u65f6\u5019\u8bb0\u5f55 mac \u518d\u8bbe\u7f6e\u56de\u53bb"),Object(l.b)("li",{parentName:"ol"},"\u5c06\u865a\u62df\u7f51\u5361\u7684 mac \u8bbe\u7f6e\u9ad8\u4e00\u70b9")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u63a8\u8350")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# \u65b9\u6cd5 1\nmac=$(cat /etc/tinc/br0/address)\nip li set $IFACE master br0\nip li set br0 address $mac\n\n# \u65b9\u6cd5 2\nip link set $IFACE address fe:12:34:56:78:9a\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://lists.linuxfoundation.org/pipermail/bridge/2006-January/003036.html"},"Bridge Interface MAC address assignment")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/hansode/linux-bridge-mac-addresses-and-dynamic-ports"},"hansode/linux-bridge-mac-addresses-and-dynamic-ports"))))),Object(l.b)("h2",{id:"tinc-\u8282\u70b9\u907f\u514d-mac-\u51b2\u7a81"},"tinc \u8282\u70b9\u907f\u514d mac \u51b2\u7a81"),Object(l.b)("p",null,"\u8bbe\u7f6e\u9ad8 mac"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"ip li set $INTERFACE address fe:fe:12:34:56:78\nip li set $INTERFACE master br0\nip li set $INTERFACE up\nip addr add 10.10.1.1/16 dev br0\n")))}o.isMDXComponent=!0}}]);