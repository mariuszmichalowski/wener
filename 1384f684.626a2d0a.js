(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return o}));var a=n(2),r=n(7),l=(n(0),n(726)),b={id:"iptables",title:"IPTables"},i={unversionedId:"os/linux/network/iptables",id:"os/linux/network/iptables",isDocsHomePage:!1,title:"IPTables",description:"IPTable",source:"@site/notes/os/linux/network/iptables.md",slug:"/os/linux/network/iptables",permalink:"/notes/os/linux/network/iptables",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/network/iptables.md",version:"current"},p=[{value:"Tips",id:"tips",children:[]},{value:"empty",id:"empty",children:[]},{value:"Notes",id:"notes",children:[]},{value:"FAQ",id:"faq",children:[{value:"How to do the port forwarding from one ip to another ip in same network?",id:"how-to-do-the-port-forwarding-from-one-ip-to-another-ip-in-same-network",children:[]}]}],c={rightToc:p};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"iptable"},"IPTable"),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"SNAT"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Source NAT"),Object(l.b)("li",{parentName:"ul"},"\u5185\u90e8\u8bbf\u95ee\u5916\u90e8"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"NAT/DNAT"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Destination NAT"),Object(l.b)("li",{parentName:"ul"},"\u5916\u90e8\u8bbf\u95ee\u5185\u90e8"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u64cd\u4f5c"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"-A \u8ffd\u52a0"),Object(l.b)("li",{parentName:"ul"},"-C \u68c0\u67e5"),Object(l.b)("li",{parentName:"ul"},"-D \u5220\u9664"),Object(l.b)("li",{parentName:"ul"},"-I \u63d2\u5165"),Object(l.b)("li",{parentName:"ul"},"-R \u66ff\u6362"),Object(l.b)("li",{parentName:"ul"},"-L \u5217\u8868"),Object(l.b)("li",{parentName:"ul"},"-S \u5217\u8868 - \u8f93\u51fa\u7ed3\u679c\u7c7b\u4f3c\u4e8e iptables-save\uff0c\u7ed3\u679c\u53ef\u4ee5\u88ab\u89e3\u6790"),Object(l.b)("li",{parentName:"ul"},"-F \u6e05\u7a7a"),Object(l.b)("li",{parentName:"ul"},"-Z \u91cd\u7f6e\u8ba1\u6570"),Object(l.b)("li",{parentName:"ul"},"-N \u521b\u5efa Chain"),Object(l.b)("li",{parentName:"ul"},"-X \u5220\u9664 Chain"),Object(l.b)("li",{parentName:"ul"},"-P \u4e3a Chain \u8bbe\u7f6e\u76ee\u6807 - ACCEPT DROP REJECT"),Object(l.b)("li",{parentName:"ul"},"-E \u91cd\u547d\u540d Chain"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u6761\u4ef6 - \u652f\u6301 ",Object(l.b)("inlineCode",{parentName:"p"},"!")," \u53d6\u53cd"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"-p \u534f\u8bae all, tcp, udp, udplite, icmp, esp, ah, sctp \u6d3b\u7740 ",Object(l.b)("inlineCode",{parentName:"li"},"/etc/protocols ")," \u4e2d\u7684\u6570\u5b57"),Object(l.b)("li",{parentName:"ul"},"-s \u6765\u6e90\u5730\u5740 ",Object(l.b)("inlineCode",{parentName:"li"},"address[/mask]")),Object(l.b)("li",{parentName:"ul"},"-d \u76ee\u6807\u5730\u5740"),Object(l.b)("li",{parentName:"ul"},"-j \u8df3\u8f6c\u5230\u76ee\u6807 - \u505c\u6b62\u5904\u7406\u5f53\u524d Chain - \u5185\u5efa\u76ee\u6807\u6216\u8005\u6269\u5c55"),Object(l.b)("li",{parentName:"ul"},"-g \u524d\u5f80\u5230 Chain - \u7ee7\u7eed\u5904\u7406"),Object(l.b)("li",{parentName:"ul"},"-i \u8fdb\u5165\u7684\u7f51\u53e3 - INPUT, FORWARD, PREROUTING - \u7f51\u53e3\u540d\u5b57\u5982\u679c\u4e3a ",Object(l.b)("inlineCode",{parentName:"li"},"eth+")," \u5219\u4f1a\u5339\u914d eth \u524d\u7f00"),Object(l.b)("li",{parentName:"ul"},"-o \u51fa\u53bb\u7684\u7f51\u53e3 - FORWARD, OUTPUT, POSTROUTING"),Object(l.b)("li",{parentName:"ul"},"-f \u89c4\u5219\u53ea\u4f1a\u5904\u7406\u7b2c\u4e8c\u4e2a\u548c\u4e4b\u540e\u7684 fragmented packets, \u4f8b\u5982 ICMP"),Object(l.b)("li",{parentName:"ul"},"--src-type \u6765\u6e90\u5730\u5740\u7c7b\u578b"),Object(l.b)("li",{parentName:"ul"},"--dst-type \u76ee\u6807\u5730\u5740\u7c7b\u578b"),Object(l.b)("li",{parentName:"ul"},"--connbytes ",Object(l.b)("inlineCode",{parentName:"li"},"from[:to]")," \u5339\u914d\u5305\u5927\u5c0f"),Object(l.b)("li",{parentName:"ul"},"--ctstate \u94fe\u63a5\u72b6\u6001"),Object(l.b)("li",{parentName:"ul"},"--ctproto \u5339\u914d4\u5c42\u534f\u8bae"),Object(l.b)("li",{parentName:"ul"},"--src-range ",Object(l.b)("inlineCode",{parentName:"li"},"from[-to]")," \u6765\u6e90\u5730\u5740\u8303\u56f4"),Object(l.b)("li",{parentName:"ul"},"--dst-range ",Object(l.b)("inlineCode",{parentName:"li"},"from[-to]")," \u76ee\u6807\u5730\u5740\u8303\u56f4"),Object(l.b)("li",{parentName:"ul"},"--ipvs \u5c5e\u4e8e IPVS \u7684\u94fe\u63a5"),Object(l.b)("li",{parentName:"ul"},"--vproto VIP \u534f\u8bae"),Object(l.b)("li",{parentName:"ul"},"--vaddr VIP \u5730\u5740"),Object(l.b)("li",{parentName:"ul"},"--vport VIP \u7aef\u53e3"),Object(l.b)("li",{parentName:"ul"},"--vmethod ",Object(l.b)("inlineCode",{parentName:"li"},"{GATE|IPIP|MASQ}")," IPVS \u8f6c\u53d1\u65b9\u6cd5"),Object(l.b)("li",{parentName:"ul"},"--vportctl \u63a7\u5236\u7aef\u53e3 - \u4f8b\u5982 FTP \u662f 21"),Object(l.b)("li",{parentName:"ul"},"--length ",Object(l.b)("inlineCode",{parentName:"li"},"length[:length]")," \u5339\u914d3\u5c42\u7684\u5305\u957f\u5ea6 - length \u6a21\u5757"),Object(l.b)("li",{parentName:"ul"},"--limit ",Object(l.b)("inlineCode",{parentName:"li"},"rate[/second|/minute|/hour|/day]")," \u8fbe\u5230\u9650\u6d41\u540e\u4f1a\u5339\u914d - limit \u6a21\u5757"),Object(l.b)("li",{parentName:"ul"},"--limit-burst \u9650\u6d41\u5cf0\u503c \u9ed8\u8ba4 5"),Object(l.b)("li",{parentName:"ul"},"--mac-source MAC \u5730\u5740\u5339\u914d"),Object(l.b)("li",{parentName:"ul"},"--mark ",Object(l.b)("inlineCode",{parentName:"li"},"value[/mask]")," \u5339\u914d netfilter \u7684 mark \u5b57\u6bb5"),Object(l.b)("li",{parentName:"ul"},"--source-ports/--sports ",Object(l.b)("inlineCode",{parentName:"li"},"port[,port|,port:port]")," \u5339\u914d\u6765\u6e90\u7aef\u53e3"),Object(l.b)("li",{parentName:"ul"},"--destination-ports/--dports \u76ee\u6807\u7aef\u53e3"),Object(l.b)("li",{parentName:"ul"},"--ports \u76ee\u6807\u548c\u6765\u6e90\u7aef\u53e3"),Object(l.b)("li",{parentName:"ul"},"--uid-owner ",Object(l.b)("inlineCode",{parentName:"li"},"username/userid[-userid]")),Object(l.b)("li",{parentName:"ul"},"--gid-owner ",Object(l.b)("inlineCode",{parentName:"li"},"groupname/groupid[-groupid]")),Object(l.b)("li",{parentName:"ul"},"--socket-exists \u5305\u5173\u8054\u5230 socket"),Object(l.b)("li",{parentName:"ul"},"--rateest-lt \u9891\u7387\u5c0f\u4e8e"),Object(l.b)("li",{parentName:"ul"},"--rateest-gt \u9891\u7387\u5927\u4e8e"),Object(l.b)("li",{parentName:"ul"},"--probability \u6982\u7387\u5339\u914d"),Object(l.b)("li",{parentName:"ul"},"--every \u6bcf N \u5305\u5339\u914d"),Object(l.b)("li",{parentName:"ul"},"--string \u6a21\u5f0f\u5339\u914d"),Object(l.b)("li",{parentName:"ul"},"--hex-string \u6a21\u5f0f\u5339\u914d"),Object(l.b)("li",{parentName:"ul"},"--source-port,--sport \u6765\u6e90\u7aef\u53e3"),Object(l.b)("li",{parentName:"ul"},"--destination-port,--dport \u76ee\u6807\u7aef\u53e3"),Object(l.b)("li",{parentName:"ul"},"--tcp-flags \u5339\u914d TCP \u6807\u8bb0"),Object(l.b)("li",{parentName:"ul"},"--syn \u5339\u914d SYN"),Object(l.b)("li",{parentName:"ul"},"--tcp-option number \u5339\u914d TCP \u9009\u9879"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u52a8\u4f5c"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"--set-mark ",Object(l.b)("inlineCode",{parentName:"li"},"value[/mask]")," \u8bbe\u7f6e mark"),Object(l.b)("li",{parentName:"ul"},"--save-mark ","[--mask mask]"," \u4fdd\u5b58 mark"),Object(l.b)("li",{parentName:"ul"},"--restore-mark ","[--mask mask]"," \u6062\u590d mark"),Object(l.b)("li",{parentName:"ul"},"--notrack \u5173\u95ed\u94fe\u63a5\u8ddf\u8e2a"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u6ce8\u610f"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"SDNAT \u52a1\u5fc5\u9650\u5b9a\u6765\u6e90\u5730\u5740\u6216\u7f51\u53e3"),Object(l.b)("li",{parentName:"ul"},"DNAT \u52a1\u5fc5\u9650\u5b9a\u76ee\u6807\u5730\u5740\u6216\u7f51\u53e3 - \u5426\u5219\u5168\u91cf\u66ff\u6362\u4e0d\u4e00\u5b9a\u662f\u671f\u671b\u7ed3\u679c"),Object(l.b)("li",{parentName:"ul"},"\u5904\u7406\u7684\u662f\u8fde\u7eed\u7684\u88ab\u8ddf\u8e2a\u7684\u5305\uff0c\u800c\u4e0d\u662f\u79bb\u6563\u7684"),Object(l.b)("li",{parentName:"ul"},"nat \u53ea\u4f1a\u5904\u7406\u8fde\u63a5\u7684\u7b2c\u4e00\u5305"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u64cd\u4f5c\u5bf9\u8c61 Table/Chain"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"filter - \u9ed8\u8ba4",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"INPUT - \u76ee\u6807\u662f\u672c\u5730\u7684\u5305"),Object(l.b)("li",{parentName:"ul"},"FORWARD - \u8def\u7531\u7ecf\u8fc7\u7684\u5305"),Object(l.b)("li",{parentName:"ul"},"OUTPUT - \u672c\u5730\u751f\u6210\u7684\u5305"))),Object(l.b)("li",{parentName:"ul"},"nat - \u5f53\u521b\u5efa\u65b0\u7684\u5305\u65f6\u4f1a\u4f7f\u7528\u8be5\u8868",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"PREROUTING - \u4fee\u6539\u8fdb\u5165\u7684\u5305"),Object(l.b)("li",{parentName:"ul"},"OUTPUT - \u5728\u8def\u7531\u4e4b\u524d\u4fee\u6539\u672c\u5730\u751f\u6210\u7684\u5305"),Object(l.b)("li",{parentName:"ul"},"POSTROUTING - \u4fee\u6539\u51fa\u53bb\u7684\u5305"))),Object(l.b)("li",{parentName:"ul"},"mangle - \u7528\u4e8e\u7279\u6b8a\u5305\u4fee\u6539",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"PREROUTING - \u5728\u8def\u7531\u524d \u4fee\u6539\u8fdb\u5165\u7684\u5305"),Object(l.b)("li",{parentName:"ul"},"OUTPUT - \u5728\u8def\u7531\u524d \u4fee\u6539\u672c\u5730\u751f\u6210\u7684\u5305"),Object(l.b)("li",{parentName:"ul"},"INPUT - packets coming into the box itself"),Object(l.b)("li",{parentName:"ul"},"FORWARD - packets being routed through the box"),Object(l.b)("li",{parentName:"ul"},"POSTROUTING - altering packets as they are about to go out"))),Object(l.b)("li",{parentName:"ul"},"raw - \u4e3b\u8981\u7528\u4e8e\u914d\u5408 NOTRACK \u4f7f\u7528\uff0c\u5728\u6240\u6709 IP \u8868\u4e4b\u524d\u5904\u7406",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"PREROUTING - packets  arriving  via  any  network interface"),Object(l.b)("li",{parentName:"ul"},"OUTPUT - packets generated by local processes"))),Object(l.b)("li",{parentName:"ul"},"security - \u7528\u4e8e Mandatory Access Control \u7f51\u7edc\u89c4\u5219\uff0cSELinux")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u5904\u7406\u6d41")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"        IN                                             OUT\n         +                                              ^\n         |                                              |\n         |                                              |\n+--------v--------+                            +-----------------+\n|PREROUTING       |                            |POSTROUTING      |\n| nat             |                            | nat             |\n| mangle          |                            | raw             |\n| raw             |                            | mangle          |\n+-----------------+     +----------------+     +--------^--------+\n         |              |FORWARD         |              |\n         +--------------\x3e filter         +--------------+\n     localhost          | mangle         |              |\n+-----------------+     +----------------+     +-----------------+\n|INPUT            |                            |OUTPUT           |\n| filter          |                            | filter          |\n| mangle          +---------\x3e LOCAL +---------\x3e+ nat             |\n|                 |                            | mangle          |\n|                 |                            | raw             |\n+-----------------+                            +-----------------+\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u91cd\u7f6e iptables\n# ===============\n# \u8bbe\u7f6e\u9ed8\u8ba4\u7b56\u7565\u4e3a ACCEPT\niptables -P INPUT ACCEPT\niptables -P FORWARD ACCEPT\niptables -P OUTPUT ACCEPT\niptables -t nat -F\niptables -t mangle -F\n# \u5220\u9664\u89c4\u5219\niptables -F\n# \u5220\u9664\u989d\u5916 CHAIN\niptables -X\n# \u91cd\u7f6e counter\niptables -Z\n\n# -C --check \u68c0\u6d4b\u662f\u5426\u5b58\u5728\niptables -C FORWARD -i eth0 -j ACCEPT \n# \u4ee5\u524d\u7684\u68c0\u6d4b\u65b9\u5f0f\niptables-save | grep -- \"-A INPUT -p tcp -m tcp --dport 8080 -j ACCEPT\"\n\n# \u67e5\u770b\u72b6\u6001\niptables -nvL\n\n# \u67e5\u770b\u6240\u6709\u89c4\u5219\n# -c \u5305\u542b\u5305\u548c\u5b57\u8282\u8ba1\u6570\n# -t \u6307\u5b9a\u8868\niptables-save \n# \u7eaf\u89c4\u5219 - \u4fbf\u4e8e\u8fdb\u884c diff\niptables-save | grep -v '^#' | sed -r 's/(^:[^[]]+).*/\\1[0:0]/'\n# \u6392\u9664\u89c4\u5219 - \u6392\u9664 libvirt \u76f8\u5173\u89c4\u5219\niptables-save | grep -v LIBVIRT\n# \u5e38\u7528\nipts(){ iptables-save \"$@\" | grep -v '^#' | sed -r 's/(^:[^[]]+).*/\\1[0:0]/' | grep -v LIBVIRT | grep -i -v DOCKER; }\n\n# \u67e5\u770b nat \u8def\u7531\u8868\niptables -t nat -v -L -n --line-number\n# \u663e\u793a PREROUTING \u8868\niptables -t nat -v -L PREROUTING -n --line-number\n# \u663e\u793a POSTROUTING \u8868\niptables -t nat -v -L POSTROUTING -n --line-number\n# \u901a\u8fc7\u884c\u53f7\u5220\u9664\u89c4\u5219\niptables -t nat -D POSTROUTING 3\n# \u89c4\u5219\u5904\u7406\u7edf\u8ba1\niptables -t nat -L -v\niptables -t nat -A POSTROUTING -s 10.0.0.0/24 ! -d 10.0.0.0/24 -j MASQUERADE\n\n# \u8bbe\u7f6e\u5907\u6ce8\niptables -A INPUT -i eth1 -m comment --comment \"my local LAN\"\n\n# ICMP \u7684\u5e2e\u52a9 - \u652f\u6301 --icmp-type\niptables -p icmp -h\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"NAT \u8868")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"NIC +----\x3e PREROUTING +-------------------\x3e Local\n              +                 ^\n              |                 |\n              |                 |\n              v                 +\nNIC <----+ POSTROUTING <----+ OUTPUT <----+ Local\n")),Object(l.b)("h2",{id:"empty"},"empty"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"*mangle\n:PREROUTING ACCEPT [8:584]\n:INPUT ACCEPT [8:584]\n:FORWARD ACCEPT [0:0]\n:OUTPUT ACCEPT [6:616]\n:POSTROUTING ACCEPT [6:616]\nCOMMIT\n*nat\n:PREROUTING ACCEPT [0:0]\n:INPUT ACCEPT [0:0]\n:OUTPUT ACCEPT [0:0]\n:POSTROUTING ACCEPT [0:0]\nCOMMIT\n*filter\n:INPUT ACCEPT [8:584]\n:FORWARD ACCEPT [0:0]\n:OUTPUT ACCEPT [11:1432]\nCOMMIT\n")),Object(l.b)("h2",{id:"notes"},"Notes"),Object(l.b)("h2",{id:"faq"},"FAQ"),Object(l.b)("h3",{id:"how-to-do-the-port-forwarding-from-one-ip-to-another-ip-in-same-network"},"How to do the port forwarding from one ip to another ip in same network?"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://serverfault.com/q/586486/190601"}),"https://serverfault.com/q/586486/190601"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://torguard.net/knowledgebase.php?action=displayarticle&id=239"}),"https://torguard.net/knowledgebase.php?action=displayarticle&id=239"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://unix.stackexchange.com/questions/499791/is-there-any-way-to-view-nfmark-like-ctmark"}),"https://unix.stackexchange.com/questions/499791/is-there-any-way-to-view-nfmark-like-ctmark")))))}o.isMDXComponent=!0},726:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),o=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},O=function(e){var t=o(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),O=o(n),u=a,s=O["".concat(b,".").concat(u)]||O[u]||m[u]||l;return n?r.a.createElement(s,i(i({ref:t},c),{},{components:n})):r.a.createElement(s,i({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var c=2;c<l;c++)b[c]=n[c];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);