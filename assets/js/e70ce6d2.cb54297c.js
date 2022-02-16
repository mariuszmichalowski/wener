"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[6117],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return O}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),T=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):N(N({},t),e)),n},s=function(e){var t=T(e.components);return a.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},o=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),o=T(n),O=r,_=o["".concat(m,".").concat(O)]||o[O]||p[O]||l;return n?a.createElement(_,N(N({ref:t},s),{},{components:n})):a.createElement(_,N({ref:t},s))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,N=new Array(l);N[0]=o;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,N[1]=i;for(var T=2;T<l;T++)N[T]=n[T];return a.createElement.apply(null,N)}return a.createElement.apply(null,n)}o.displayName="MDXCreateElement"},940:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return m},metadata:function(){return T},toc:function(){return s},default:function(){return o}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),N=["components"],i={title:"EdgeOS"},m=void 0,T={unversionedId:"os/network/edgeos",id:"os/network/edgeos",title:"EdgeOS",description:"Tips",source:"@site/notes/os/network/edgeos.md",sourceDirName:"os/network",slug:"/os/network/edgeos",permalink:"/notes/os/network/edgeos",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/network/edgeos.md",tags:[],version:"current",frontMatter:{title:"EdgeOS"},sidebar:"docs",previous:{title:"udhcpc",permalink:"/notes/os/busybox/udhcpc"},next:{title:"FreshTomato",permalink:"/notes/os/network/freshtomato"}},s=[{value:"Tips",id:"tips",children:[],level:2},{value:"ssh key",id:"ssh-key",children:[],level:2},{value:"\u542f\u7528 snmp",id:"\u542f\u7528-snmp",children:[],level:2},{value:"\u7aef\u53e3\u8f6c\u53d1",id:"\u7aef\u53e3\u8f6c\u53d1",children:[],level:2},{value:"PBR",id:"pbr",children:[],level:2},{value:"ipatbles",id:"ipatbles",children:[],level:2},{value:"\u8d1f\u8f7d\u5747\u8861",id:"\u8d1f\u8f7d\u5747\u8861",children:[{value:"2.0 - 2019-1-7",id:"20---2019-1-7",children:[],level:3}],level:2}],p={toc:s};function o(e){var t=e.components,n=(0,r.Z)(e,N);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"tips"},"Tips"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"EdgeOS ",(0,l.kt)("a",{parentName:"li",href:"https://dl.ubnt.com/guides/edgemax/EdgeOS_UG.pdf"},"User Guide")),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://help.ui.com/hc/en-us/articles/204952274"},"Policy-Based Routing"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://help.ui.com.cn/hc/zh-cn/articles/360000135162"},"\u7b56\u7565\u8def\u7531")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://help.ui.com/hc/en-us/articles/205145990"},"WAN Load-Balancing")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://help.ui.com.cn/hc/zh-cn/articles/360000019241"},"\u4e0d\u540c\u7f51\u6bb5\u591a\u51fa\u53e3\u8def\u7531\u6848\u5217")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://help.ui.com.cn/hc/zh-cn/articles/115000121981"},"IP \u7b56\u7565\u8def\u7531\u914d\u7f6e")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://community.ui.com/questions/9974c237-ac77-45d3-a074-3675b50412b6"},"Dual wan, port forwarding"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 DNAT"))))),(0,l.kt)("li",{parentName:"ul"},"switch0",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e\u4ea4\u6362\u673a\uff0cER-PoE-5 \u6709 switch \u82af\u7247",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u5931\u8d25 interface switch switch0: does not exist"))),(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e Linux Bridge"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u573a\u666f\u53ef\u76f4\u63a5\u63a5\u4e00\u4e2a switch"))),(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4e0d\u5141\u8bb8 ICMP - \u516c\u7f51\u5982\u679c\u5f00\u542f ICMP \u5efa\u8bae\u9650\u5236\u53ea\u5141\u8bb8 echo request"),(0,l.kt)("li",{parentName:"ul"},"load-balance \u8bbe\u7f6e\u540e\u4f1a\u5bf9 interface \u6253\u6807\u8fdb\u5165\u4e0d\u540c\u8def\u7531\u8868",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u591a wan \u65f6\u975e\u5e38\u6709\u7528 - \u5c31\u4e0d\u7528\u81ea\u884c\u7ef4\u62a4"),(0,l.kt)("li",{parentName:"ul"},"\u5373\u4fbf\u662f\u4e0d\u7528\u8d1f\u8f7d\u80fd\u529b"),(0,l.kt)("li",{parentName:"ul"},"iptable mark -> ip rule -> ip route table 201")))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u76d1\u542c nat\nshow nat translations\n\nshow ip route\nshow ip route table 102\n\nshow firewall modify PBR statistics\n")),(0,l.kt)("h1",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.kt)("h2",{id:"ssh-key"},"ssh key"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"system/login/user/<USER>/authentication/public-keys"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"mailto:user@example.com"},"user@example.com"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"key=KEY \u5185\u5bb9"),(0,l.kt)("li",{parentName:"ul"},"type=ssh-rsa")))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4e0a\u4f20\u5230\u8def\u7531\nscp ~/.ssh/id_rsa.pub ubnt@192.168.1.1:/tmp\n\n# \u901a\u8fc7 loadkey \u914d\u7f6e\nssh ubnt@192.168.1.1\nconfigure\nloadkey ubnt /tmp/id_rsa.pub\ncommit\nsave\nexit\n")),(0,l.kt)("h2",{id:"\u542f\u7528-snmp"},"\u542f\u7528 snmp"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"set service snmp community public network 192.168.0.0/16\nset service snmp listen-address 192.168.1.1 interface eth0\n")),(0,l.kt)("h2",{id:"\u7aef\u53e3\u8f6c\u53d1"},"\u7aef\u53e3\u8f6c\u53d1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7aef\u53e3\u8f6c\u53d1\u9ed8\u8ba4\u4f1a\u6dfb\u52a0\u9632\u706b\u5899\u89c4\u5219"),(0,l.kt)("li",{parentName:"ul"},"\u7b80\u5316\u914d\u7f6e DNAT")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u7aef\u53e3\u8f6c\u53d1\n# ==========\n# 8001 -> 192.168.1.2:80\n# DNAT\n-A UBNT_PFOR_DNAT_RULES -p tcp -m tcp --dport 8001 -j DNAT --to-destination 192.168.1.2:80\n# SNAT\n-A UBNT_PFOR_SNAT_RULES -d 192.168.1.2/32 -o eth2 -p tcp -m set --match-set NETv4_eth2 src -m tcp --dport 80 -j MASQUERADE\n# \u9632\u706b\u5899\n-A UBNT_PFOR_FW_RULES -d 192.168.1.2/32 -p tcp -m tcp --dport 80 -j ACCEPT\n\n# \u9632\u706b\u5899\n# ==========\n# \u7aef\u53e3\u8f6c\u53d1\u9632\u706b\u5899\u89c4\u5219\n-A UBNT_PFOR_FW_HOOK -i pppoe0 -j UBNT_PFOR_FW_RULES\n# \u5141\u8bb8\u7aef\u53e3\u8f6c\u53d1\u7684\u76ee\u6807\u901a\u8fc7\n-A UBNT_PFOR_FW_RULES -d 192.168.1.2/32 -p tcp -m tcp --dport 80 -j ACCEPT\n")),(0,l.kt)("h2",{id:"pbr"},"PBR"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://community.ui.com/questions/DNAT-connections-not-sticky/6da29ace-e0c5-4e0c-b1cf-07a7b91c11db#answer/9d66551c-0adf-48e7-a77f-2e4c1d6e57f4"},"DNAT - connections not sticky ?"))),(0,l.kt)("h2",{id:"ipatbles"},"ipatbles"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# NAT \u8868\u5904\u7406\u903b\u8f91\n*nat\n-A PREROUTING -j MINIUPNPD\n# \u7aef\u53e3\u8f6c\u53d1\n-A PREROUTING -j UBNT_PFOR_DNAT_HOOK\n-A PREROUTING -j VYATTA_PRE_DNAT_HOOK\n-A PREROUTING -j UBNT_SUSPEND_DNAT_HOOK\n# \u81ea\u5b9a\u4e49 DNAT\n-A PREROUTING -j VYATTA_DNAT\n-A POSTROUTING -j UBNT_VPN_IPSEC_SNAT_HOOK\n-A POSTROUTING -j MINIUPNPD-POSTROUTING\n-A POSTROUTING -j UBNT_PFOR_SNAT_HOOK\n-A POSTROUTING -j VYATTA_PRE_SNAT_HOOK\n# \u81ea\u5b9a\u4e49 SNAT\n-A POSTROUTING -j VYATTA_SNAT\n\n# \u5305\u5904\u7406\n*mangle\n-A PREROUTING -j MINIUPNPD\n-A PREROUTING -j VYATTA_FW_IN_HOOK\n-A PREROUTING -j UBNT_FW_MSS_CLAMP_I\n# \u8d1f\u8f7d\u5747\u8861\n-A INPUT -j UBNT_HOOK_WLBL\n-A FORWARD -j UBNT_QOS_FW_IN_HOOK\n-A FORWARD -j UBNT_HOOK_WLBI\n-A OUTPUT -j UBNT_HOOK_WLBO\n-A POSTROUTING -j VYATTA_FW_OUT_HOOK\n-A POSTROUTING -j UBNT_FW_MSS_CLAMP\n-A POSTROUTING -j UBNT_QOS_FW_OUT_HOOK\n\n# RAW\n*raw\n-A PREROUTING -j UBNT_PREROUTING_HOOK\n-A PREROUTING -j VYATTA_CT_IGNORE\n-A PREROUTING -j UBNT_CT_BRIDGE\n-A PREROUTING -j VYATTA_CT_PREROUTING_HOOK\n-A PREROUTING -j UBNT_WLB\n-A PREROUTING -j NAT_CONNTRACK\n-A PREROUTING -j PFOR_CONNTRACK\n-A PREROUTING -j FW_CONNTRACK\n-A PREROUTING -j QOS_CONNTRACK\n-A PREROUTING -j NOTRACK\n-A OUTPUT -j VYATTA_CT_IGNORE\n-A OUTPUT -j VYATTA_CT_OUTPUT_HOOK\n-A OUTPUT -j UBNT_WLB\n-A OUTPUT -j NAT_CONNTRACK\n-A OUTPUT -j PFOR_CONNTRACK\n-A OUTPUT -j FW_CONNTRACK\n-A OUTPUT -j QOS_CONNTRACK\n-A OUTPUT -j NOTRACK\n-A FW_CONNTRACK -j ACCEPT\n-A NAT_CONNTRACK -j ACCEPT\n-A PFOR_CONNTRACK -j ACCEPT\n-A QOS_CONNTRACK -j RETURN\n-A UBNT_WLB -j ACCEPT\n-A VYATTA_CT_IGNORE -j RETURN\n-A VYATTA_CT_OUTPUT_HOOK -j RETURN\n-A VYATTA_CT_PREROUTING_HOOK -j RETURN\n\n# \u9632\u706b\u5899\n*filter\n-A INPUT -j UBNT_VPN_IPSEC_FW_HOOK\n-A INPUT -j VYATTA_FW_LOCAL_HOOK\n-A INPUT -j VYATTA_POST_FW_IN_HOOK\n-A FORWARD -j MINIUPNPD\n-A FORWARD -j UBNT_VPN_IPSEC_FW_IN_HOOK\n-A FORWARD -j UBNT_PFOR_FW_HOOK\n-A FORWARD -j UBNT_FW_IN_SUSPEND_HOOK\n-A FORWARD -j VYATTA_FW_IN_HOOK\n-A FORWARD -j VYATTA_FW_OUT_HOOK\n-A FORWARD -j VYATTA_POST_FW_FWD_HOOK\n-A OUTPUT -j VYATTA_POST_FW_OUT_HOOK\n")),(0,l.kt)("h2",{id:"\u8d1f\u8f7d\u5747\u8861"},"\u8d1f\u8f7d\u5747\u8861"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://community.ui.com/questions/503d5b81-7cb5-4fe5-ba39-72df1f5eb98f"},"https://community.ui.com/questions/503d5b81-7cb5-4fe5-ba39-72df1f5eb98f"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'*nat\n# \u89c4\u5219 HOOK \u4f4d\u7f6e\n# \u6807\u8bb0\n-A INPUT -j UBNT_HOOK_WLBL\n-A FORWARD -j UBNT_QOS_FW_IN_HOOK\n# IN\n-A FORWARD -j UBNT_HOOK_WLBI\n# OUT\n-A OUTPUT -j UBNT_HOOK_WLBO\n\n-A UBNT_HOOK_WLBI -j UBNT_WLBI_LB\n-A UBNT_HOOK_WLBL -j UBNT_WLBL_LB\n-A UBNT_HOOK_WLBO -j UBNT_WLBO_LB\n\n# \u540e\u7aef\n-A UBNT_WLBE_LB -o eth1 -j RETURN\n-A UBNT_WLBE_LB -o pppoe0 -j RETURN\n-A UBNT_WLBE_LB -j ACCEPT\n\n# \u6062\u590d mark\n-A UBNT_WLBI_LB -j CONNMARK --restore-mark --nfmask 0x7f800000 --ctmask 0x7f800000\n# mark \u4e0d\u5339\u914d \u8fd4\u56de\n-A UBNT_WLBI_LB -m mark ! --mark 0x0/0x7f800000 -j RETURN\n# \u8bbe\u7f6e mark\n-A UBNT_WLBI_LB -i eth1 -m state --state NEW -j MARK --set-xmark 0x33000000/0x7f800000\n-A UBNT_WLBI_LB -i pppoe0 -m state --state NEW -j MARK --set-xmark 0x32800000/0x7f800000\n-A UBNT_WLBI_LB -m mark ! --mark 0x0/0x7f800000 -j CONNMARK --save-mark --nfmask 0x7f800000 --ctmask 0x7f800000\n-A UBNT_WLBI_LB -j RETURN\n\n# \u6062\u590d mark\n-A UBNT_WLBL_LB -j CONNMARK --restore-mark --nfmask 0x7f800000 --ctmask 0x7f800000\n# mark \u4e0d\u5339\u914d \u8fd4\u56de\n-A UBNT_WLBL_LB -m mark ! --mark 0x0/0x7f800000 -j RETURN\n# \u8bbe\u7f6e mark\n-A UBNT_WLBL_LB -i eth1 -m state --state NEW -j MARK --set-xmark 0x33000000/0x7f800000\n-A UBNT_WLBL_LB -i pppoe0 -m state --state NEW -j MARK --set-xmark 0x32800000/0x7f800000\n# \u65e0 mark \u5219\u8bbe\u7f6e\n-A UBNT_WLBL_LB -m mark ! --mark 0x0/0x7f800000 -j CONNMARK --save-mark --nfmask 0x7f800000 --ctmask 0x7f800000\n# DONE\n-A UBNT_WLBL_LB -j RETURN\n\n# \u540e\u7aef\u5904\u7406\n-A UBNT_WLBO_LB -j UBNT_WLBE_LB\n# mark \u5904\u7406\n-A UBNT_WLBO_LB -j CONNMARK --restore-mark --nfmask 0x7f800000 --ctmask 0x7f800000\n-A UBNT_WLBO_LB -m mark ! --mark 0x0/0x7f800000 -j RETURN\n-A UBNT_WLBO_LB -o eth1 -p icmp -j MARK --set-xmark 0x33000000/0x7f800000\n-A UBNT_WLBO_LB -o pppoe0 -p icmp -j MARK --set-xmark 0x32800000/0x7f800000\n-A UBNT_WLBO_LB -m mark ! --mark 0x0/0x7f800000 -j CONNMARK --save-mark --nfmask 0x7f800000 --ctmask 0x7f800000\n-A UBNT_WLBO_LB -m mark ! --mark 0x0/0x7f800000 -j RETURN\n# \u968f\u673a\u9009\u62e9\n-A UBNT_WLBO_LB -m state --state NEW -m mark --mark 0x0/0x7f800000 -m dyn_random --prob-name "LB_0"  -j MARK --set-xmark 0x33000000/0x7f800000\n-A UBNT_WLBO_LB -m state --state NEW -m mark --mark 0x0/0x7f800000 -j MARK --set-xmark 0x32800000/0x7f800000\n-A UBNT_WLBO_LB -m mark ! --mark 0x0/0x7f800000 -j CONNMARK --save-mark --nfmask 0x7f800000 --ctmask 0x7f800000\n-A UBNT_WLBO_LB -j RETURN\n\n# \u8d1f\u8f7d\u903b\u8f91\n-A UBNT_WLB_LB -j CONNMARK --restore-mark --nfmask 0x7f800000 --ctmask 0x7f800000\n-A UBNT_WLB_LB -m mark ! --mark 0x0/0x7f800000 -j RETURN\n-A UBNT_WLB_LB -m state --state NEW -m mark --mark 0x0/0x7f800000 -m dyn_random --prob-name "LB_0"  -j MARK --set-xmark 0x33000000/0x7f800000\n-A UBNT_WLB_LB -m state --state NEW -m mark --mark 0x0/0x7f800000 -j MARK --set-xmark 0x32800000/0x7f800000\n-A UBNT_WLB_LB -j CONNMARK --save-mark --nfmask 0x7f800000 --ctmask 0x7f800000\n-A UBNT_WLB_LB -j RETURN\n')),(0,l.kt)("h1",{id:"\u7b14\u8bb0"},"\u7b14\u8bb0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8def\u7531\u529f\u80fd\u4e3b\u8981\u901a\u8fc7\u914d\u7f6e\u6811\u8fdb\u884c\u5168\u5c40\u63a7\u5236"),(0,l.kt)("li",{parentName:"ul"},"\u8c03\u7528 iproute2 \u548c iptables \u8fdb\u884c\u5b9e\u9645\u914d\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 iptables \u7684 mark + iproute \u7684 rule \u5b9e\u73b0\u590d\u6742\u7684\u7b56\u7565\u8def\u7531"),(0,l.kt)("li",{parentName:"ul"},"/",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"custom-attribute"),(0,l.kt)("li",{parentName:"ul"},"firewall"),(0,l.kt)("li",{parentName:"ul"},"interfaces"),(0,l.kt)("li",{parentName:"ul"},"load-balance"),(0,l.kt)("li",{parentName:"ul"},"policy"),(0,l.kt)("li",{parentName:"ul"},"port-forward"),(0,l.kt)("li",{parentName:"ul"},"protocols"),(0,l.kt)("li",{parentName:"ul"},"service"),(0,l.kt)("li",{parentName:"ul"},"system"),(0,l.kt)("li",{parentName:"ul"},"traffic-control"),(0,l.kt)("li",{parentName:"ul"},"traffic-policy"),(0,l.kt)("li",{parentName:"ul"},"vpn"),(0,l.kt)("li",{parentName:"ul"},"zone-policy")))),(0,l.kt)("h1",{id:"\u7cfb\u7edf"},"\u7cfb\u7edf"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://community.ui.com/questions/b5e5f4c8-20b1-4fae-8689-638ab48cb595"},"EdgeOS file system layout and firmware images")),(0,l.kt)("li",{parentName:"ul"},"/proc/mtd")),(0,l.kt)("h1",{id:"\u7248\u672c"},"\u7248\u672c"),(0,l.kt)("h3",{id:"20---2019-1-7"},"2.0 - 2019-1-7"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://community.ui.com/releases/38702c1e-4bab-450e-8bc1-ff9ef863bfb4"},"v2.0.0"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ER-X/ER-X-SFP/EP-R6"))),(0,l.kt)("li",{parentName:"ul"},"Debian 9")))}o.isMDXComponent=!0}}]);