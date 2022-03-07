"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[88056],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return N}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),k=m(n),N=r,c=k["".concat(o,".").concat(N)]||k[N]||s[N]||l;return n?a.createElement(c,i(i({ref:t},u),{},{components:n})):a.createElement(c,i({ref:t},u))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},74255:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return u},default:function(){return k}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],p={title:"IPTables"},o="IPTable",m={unversionedId:"os/linux/network/iptables",id:"os/linux/network/iptables",title:"IPTables",description:"- SNAT",source:"@site/notes/os/linux/network/iptables.md",sourceDirName:"os/linux/network",slug:"/os/linux/network/iptables",permalink:"/notes/os/linux/network/iptables",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/network/iptables.md",tags:[],version:"current",frontMatter:{title:"IPTables"},sidebar:"docs",previous:{title:"IPRoute2",permalink:"/notes/os/linux/network/iproute2"},next:{title:"IPTables Cookbook",permalink:"/notes/os/linux/network/iptables-cookbook"}},u=[{value:"empty",id:"empty",children:[],level:2},{value:"Notes",id:"notes",children:[],level:2},{value:"How to do the port forwarding from one ip to another ip in same network?",id:"how-to-do-the-port-forwarding-from-one-ip-to-another-ip-in-same-network",children:[],level:2}],s={toc:u};function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"iptable"},"IPTable"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"SNAT",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Source NAT"),(0,l.kt)("li",{parentName:"ul"},"\u5185\u90e8\u8bbf\u95ee\u5916\u90e8"))),(0,l.kt)("li",{parentName:"ul"},"NAT/DNAT",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Destination NAT"),(0,l.kt)("li",{parentName:"ul"},"\u5916\u90e8\u8bbf\u95ee\u5185\u90e8"))),(0,l.kt)("li",{parentName:"ul"},"\u64cd\u4f5c",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"-A \u8ffd\u52a0"),(0,l.kt)("li",{parentName:"ul"},"-C \u68c0\u67e5"),(0,l.kt)("li",{parentName:"ul"},"-D \u5220\u9664"),(0,l.kt)("li",{parentName:"ul"},"-I \u63d2\u5165"),(0,l.kt)("li",{parentName:"ul"},"-R \u66ff\u6362"),(0,l.kt)("li",{parentName:"ul"},"-L \u5217\u8868"),(0,l.kt)("li",{parentName:"ul"},"-S \u5217\u8868 - \u8f93\u51fa\u7ed3\u679c\u7c7b\u4f3c\u4e8e iptables-save\uff0c\u7ed3\u679c\u53ef\u4ee5\u88ab\u89e3\u6790"),(0,l.kt)("li",{parentName:"ul"},"-F \u6e05\u7a7a"),(0,l.kt)("li",{parentName:"ul"},"-Z \u91cd\u7f6e\u8ba1\u6570"),(0,l.kt)("li",{parentName:"ul"},"-N \u521b\u5efa Chain"),(0,l.kt)("li",{parentName:"ul"},"-X \u5220\u9664 Chain"),(0,l.kt)("li",{parentName:"ul"},"-P \u4e3a Chain \u8bbe\u7f6e\u76ee\u6807 - ACCEPT DROP REJECT"),(0,l.kt)("li",{parentName:"ul"},"-E \u91cd\u547d\u540d Chain"))),(0,l.kt)("li",{parentName:"ul"},"\u6761\u4ef6 - \u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"li"},"!")," \u53d6\u53cd",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"-p \u534f\u8bae all, tcp, udp, udplite, icmp, esp, ah, sctp \u6d3b\u7740 ",(0,l.kt)("inlineCode",{parentName:"li"},"/etc/protocols ")," \u4e2d\u7684\u6570\u5b57"),(0,l.kt)("li",{parentName:"ul"},"-s \u6765\u6e90\u5730\u5740 ",(0,l.kt)("inlineCode",{parentName:"li"},"address[/mask]")),(0,l.kt)("li",{parentName:"ul"},"-d \u76ee\u6807\u5730\u5740"),(0,l.kt)("li",{parentName:"ul"},"-j \u8df3\u8f6c\u5230\u76ee\u6807 - \u505c\u6b62\u5904\u7406\u5f53\u524d Chain - \u5185\u5efa\u76ee\u6807\u6216\u8005\u6269\u5c55"),(0,l.kt)("li",{parentName:"ul"},"-g \u524d\u5f80\u5230 Chain - \u7ee7\u7eed\u5904\u7406"),(0,l.kt)("li",{parentName:"ul"},"-i \u8fdb\u5165\u7684\u7f51\u53e3 - INPUT, FORWARD, PREROUTING - \u7f51\u53e3\u540d\u5b57\u5982\u679c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"eth+")," \u5219\u4f1a\u5339\u914d eth \u524d\u7f00"),(0,l.kt)("li",{parentName:"ul"},"-o \u51fa\u53bb\u7684\u7f51\u53e3 - FORWARD, OUTPUT, POSTROUTING"),(0,l.kt)("li",{parentName:"ul"},"-f \u89c4\u5219\u53ea\u4f1a\u5904\u7406\u7b2c\u4e8c\u4e2a\u548c\u4e4b\u540e\u7684 fragmented packets, \u4f8b\u5982 ICMP"),(0,l.kt)("li",{parentName:"ul"},"--src-type \u6765\u6e90\u5730\u5740\u7c7b\u578b"),(0,l.kt)("li",{parentName:"ul"},"--dst-type \u76ee\u6807\u5730\u5740\u7c7b\u578b"),(0,l.kt)("li",{parentName:"ul"},"--connbytes ",(0,l.kt)("inlineCode",{parentName:"li"},"from[:to]")," \u5339\u914d\u5305\u5927\u5c0f"),(0,l.kt)("li",{parentName:"ul"},"--ctstate \u94fe\u63a5\u72b6\u6001"),(0,l.kt)("li",{parentName:"ul"},"--ctproto \u5339\u914d 4 \u5c42\u534f\u8bae"),(0,l.kt)("li",{parentName:"ul"},"--src-range ",(0,l.kt)("inlineCode",{parentName:"li"},"from[-to]")," \u6765\u6e90\u5730\u5740\u8303\u56f4"),(0,l.kt)("li",{parentName:"ul"},"--dst-range ",(0,l.kt)("inlineCode",{parentName:"li"},"from[-to]")," \u76ee\u6807\u5730\u5740\u8303\u56f4"),(0,l.kt)("li",{parentName:"ul"},"--ipvs \u5c5e\u4e8e IPVS \u7684\u94fe\u63a5"),(0,l.kt)("li",{parentName:"ul"},"--vproto VIP \u534f\u8bae"),(0,l.kt)("li",{parentName:"ul"},"--vaddr VIP \u5730\u5740"),(0,l.kt)("li",{parentName:"ul"},"--vport VIP \u7aef\u53e3"),(0,l.kt)("li",{parentName:"ul"},"--vmethod ",(0,l.kt)("inlineCode",{parentName:"li"},"{GATE|IPIP|MASQ}")," IPVS \u8f6c\u53d1\u65b9\u6cd5"),(0,l.kt)("li",{parentName:"ul"},"--vportctl \u63a7\u5236\u7aef\u53e3 - \u4f8b\u5982 FTP \u662f 21"),(0,l.kt)("li",{parentName:"ul"},"--length ",(0,l.kt)("inlineCode",{parentName:"li"},"length[:length]")," \u5339\u914d 3 \u5c42\u7684\u5305\u957f\u5ea6 - length \u6a21\u5757"),(0,l.kt)("li",{parentName:"ul"},"--limit ",(0,l.kt)("inlineCode",{parentName:"li"},"rate[/second|/minute|/hour|/day]")," \u8fbe\u5230\u9650\u6d41\u540e\u4f1a\u5339\u914d - limit \u6a21\u5757"),(0,l.kt)("li",{parentName:"ul"},"--limit-burst \u9650\u6d41\u5cf0\u503c \u9ed8\u8ba4 5"),(0,l.kt)("li",{parentName:"ul"},"--mac-source MAC \u5730\u5740\u5339\u914d"),(0,l.kt)("li",{parentName:"ul"},"--mark ",(0,l.kt)("inlineCode",{parentName:"li"},"value[/mask]")," \u5339\u914d netfilter \u7684 mark \u5b57\u6bb5"),(0,l.kt)("li",{parentName:"ul"},"--source-ports/--sports ",(0,l.kt)("inlineCode",{parentName:"li"},"port[,port|,port:port]")," \u5339\u914d\u6765\u6e90\u7aef\u53e3"),(0,l.kt)("li",{parentName:"ul"},"--destination-ports/--dports \u76ee\u6807\u7aef\u53e3"),(0,l.kt)("li",{parentName:"ul"},"--ports \u76ee\u6807\u548c\u6765\u6e90\u7aef\u53e3"),(0,l.kt)("li",{parentName:"ul"},"--uid-owner ",(0,l.kt)("inlineCode",{parentName:"li"},"username/userid[-userid]")),(0,l.kt)("li",{parentName:"ul"},"--gid-owner ",(0,l.kt)("inlineCode",{parentName:"li"},"groupname/groupid[-groupid]")),(0,l.kt)("li",{parentName:"ul"},"--socket-exists \u5305\u5173\u8054\u5230 socket"),(0,l.kt)("li",{parentName:"ul"},"--rateest-lt \u9891\u7387\u5c0f\u4e8e"),(0,l.kt)("li",{parentName:"ul"},"--rateest-gt \u9891\u7387\u5927\u4e8e"),(0,l.kt)("li",{parentName:"ul"},"--probability \u6982\u7387\u5339\u914d"),(0,l.kt)("li",{parentName:"ul"},"--every \u6bcf N \u5305\u5339\u914d"),(0,l.kt)("li",{parentName:"ul"},"--string \u6a21\u5f0f\u5339\u914d"),(0,l.kt)("li",{parentName:"ul"},"--hex-string \u6a21\u5f0f\u5339\u914d"),(0,l.kt)("li",{parentName:"ul"},"--source-port,--sport \u6765\u6e90\u7aef\u53e3"),(0,l.kt)("li",{parentName:"ul"},"--destination-port,--dport \u76ee\u6807\u7aef\u53e3"),(0,l.kt)("li",{parentName:"ul"},"--tcp-flags \u5339\u914d TCP \u6807\u8bb0"),(0,l.kt)("li",{parentName:"ul"},"--syn \u5339\u914d SYN"),(0,l.kt)("li",{parentName:"ul"},"--tcp-option number \u5339\u914d TCP \u9009\u9879"))),(0,l.kt)("li",{parentName:"ul"},"\u52a8\u4f5c",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"--set-mark ",(0,l.kt)("inlineCode",{parentName:"li"},"value[/mask]")," \u8bbe\u7f6e mark"),(0,l.kt)("li",{parentName:"ul"},"--save-mark ","[--mask mask]"," \u4fdd\u5b58 mark"),(0,l.kt)("li",{parentName:"ul"},"--restore-mark ","[--mask mask]"," \u6062\u590d mark"),(0,l.kt)("li",{parentName:"ul"},"--notrack \u5173\u95ed\u94fe\u63a5\u8ddf\u8e2a")))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"SDNAT \u52a1\u5fc5\u9650\u5b9a\u6765\u6e90\u5730\u5740\u6216\u7f51\u53e3"),(0,l.kt)("li",{parentName:"ul"},"DNAT \u52a1\u5fc5\u9650\u5b9a\u76ee\u6807\u5730\u5740\u6216\u7f51\u53e3 - \u5426\u5219\u5168\u91cf\u66ff\u6362\u4e0d\u4e00\u5b9a\u662f\u671f\u671b\u7ed3\u679c"),(0,l.kt)("li",{parentName:"ul"},"\u5904\u7406\u7684\u662f\u8fde\u7eed\u7684\u88ab\u8ddf\u8e2a\u7684\u5305\uff0c\u800c\u4e0d\u662f\u79bb\u6563\u7684 - conntrack"),(0,l.kt)("li",{parentName:"ul"},"nat \u53ea\u4f1a\u5904\u7406\u8fde\u63a5\u7684\u7b2c\u4e00\u5305")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u5bf9\u8c61 Table/Chain",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"filter - \u9ed8\u8ba4",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"INPUT - \u76ee\u6807\u662f\u672c\u5730\u7684\u5305"),(0,l.kt)("li",{parentName:"ul"},"FORWARD - \u8def\u7531\u7ecf\u8fc7\u7684\u5305"),(0,l.kt)("li",{parentName:"ul"},"OUTPUT - \u672c\u5730\u751f\u6210\u7684\u5305"))),(0,l.kt)("li",{parentName:"ul"},"nat - \u5f53\u521b\u5efa\u65b0\u7684\u5305\u65f6\u4f1a\u4f7f\u7528\u8be5\u8868",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"PREROUTING - \u4fee\u6539\u8fdb\u5165\u7684\u5305"),(0,l.kt)("li",{parentName:"ul"},"OUTPUT - \u5728\u8def\u7531\u4e4b\u524d\u4fee\u6539\u672c\u5730\u751f\u6210\u7684\u5305"),(0,l.kt)("li",{parentName:"ul"},"POSTROUTING - \u4fee\u6539\u51fa\u53bb\u7684\u5305"))),(0,l.kt)("li",{parentName:"ul"},"mangle - \u7528\u4e8e\u7279\u6b8a\u5305\u4fee\u6539",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"PREROUTING - \u5728\u8def\u7531\u524d \u4fee\u6539\u8fdb\u5165\u7684\u5305"),(0,l.kt)("li",{parentName:"ul"},"OUTPUT - \u5728\u8def\u7531\u524d \u4fee\u6539\u672c\u5730\u751f\u6210\u7684\u5305"),(0,l.kt)("li",{parentName:"ul"},"INPUT - packets coming into the box itself"),(0,l.kt)("li",{parentName:"ul"},"FORWARD - packets being routed through the box"),(0,l.kt)("li",{parentName:"ul"},"POSTROUTING - altering packets as they are about to go out"))),(0,l.kt)("li",{parentName:"ul"},"raw - \u4e3b\u8981\u7528\u4e8e\u914d\u5408 NOTRACK \u4f7f\u7528\uff0c\u5728\u6240\u6709 IP \u8868\u4e4b\u524d\u5904\u7406",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"PREROUTING - packets arriving via any network interface"),(0,l.kt)("li",{parentName:"ul"},"OUTPUT - packets generated by local processes"))),(0,l.kt)("li",{parentName:"ul"},"security - \u7528\u4e8e Mandatory Access Control \u7f51\u7edc\u89c4\u5219\uff0cSELinux"))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Lochnair/xt_tls"},"Lochnair/xt_tls"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 SNI \u5339\u914d\u7684\u6269\u5c55")))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5904\u7406\u6d41")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"        IN                                             OUT\n         +                                              ^\n         |                                              |\n         |                                              |\n+--------v--------+                            +-----------------+\n|PREROUTING       |                            |POSTROUTING      |\n| nat             |                            | nat             |\n| mangle          |                            | raw             |\n| raw             |                            | mangle          |\n+-----------------+     +----------------+     +--------^--------+\n         |              |FORWARD         |              |\n         +--------------\x3e filter         +--------------+\n     localhost          | mangle         |              |\n+-----------------+     +----------------+     +-----------------+\n|INPUT            |                            |OUTPUT           |\n| filter          |                            | filter          |\n| mangle          +---------\x3e LOCAL +---------\x3e+ nat             |\n|                 |                            | mangle          |\n|                 |                            | raw             |\n+-----------------+                            +-----------------+\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u91cd\u7f6e iptables\n# ===============\n# \u8bbe\u7f6e\u9ed8\u8ba4\u7b56\u7565\u4e3a ACCEPT\niptables -P INPUT ACCEPT\niptables -P FORWARD ACCEPT\niptables -P OUTPUT ACCEPT\niptables -t nat -F\niptables -t mangle -F\n# \u5220\u9664\u89c4\u5219\niptables -F\n# \u5220\u9664\u989d\u5916 CHAIN\niptables -X\n# \u91cd\u7f6e counter\niptables -Z\n\n# -C --check \u68c0\u6d4b\u662f\u5426\u5b58\u5728\niptables -C FORWARD -i eth0 -j ACCEPT\n# \u4ee5\u524d\u7684\u68c0\u6d4b\u65b9\u5f0f\niptables-save | grep -- \"-A INPUT -p tcp -m tcp --dport 8080 -j ACCEPT\"\n\n# \u67e5\u770b\u72b6\u6001\niptables -nvL\n\n# \u67e5\u770b\u6240\u6709\u89c4\u5219\n# -c \u5305\u542b\u5305\u548c\u5b57\u8282\u8ba1\u6570\n# -t \u6307\u5b9a\u8868\niptables-save\n# \u7eaf\u89c4\u5219 - \u4fbf\u4e8e\u8fdb\u884c diff\niptables-save | grep -v '^#' | sed -r 's/(^:[^[]]+).*/\\1[0:0]/'\n# \u6392\u9664\u89c4\u5219 - \u6392\u9664 libvirt \u76f8\u5173\u89c4\u5219\niptables-save | grep -v LIBVIRT\n# \u5e38\u7528\nipts(){ iptables-save \"$@\" | grep -v '^#' | sed -r 's/(^:[^[]]+).*/\\1[0:0]/' | grep -v LIBVIRT | grep -i -v DOCKER; }\n\n# \u67e5\u770b nat \u8def\u7531\u8868\niptables -t nat -v -L -n --line-number\n# \u663e\u793a PREROUTING \u8868\niptables -t nat -v -L PREROUTING -n --line-number\n# \u663e\u793a POSTROUTING \u8868\niptables -t nat -v -L POSTROUTING -n --line-number\n# \u901a\u8fc7\u884c\u53f7\u5220\u9664\u89c4\u5219\niptables -t nat -D POSTROUTING 3\n# \u89c4\u5219\u5904\u7406\u7edf\u8ba1\niptables -t nat -L -v\niptables -t nat -A POSTROUTING -s 10.0.0.0/24 ! -d 10.0.0.0/24 -j MASQUERADE\n\n# \u8bbe\u7f6e\u5907\u6ce8\niptables -A INPUT -i eth1 -m comment --comment \"my local LAN\"\n\n# ICMP \u7684\u5e2e\u52a9 - \u652f\u6301 --icmp-type\niptables -p icmp -h\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"NAT \u8868")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"NIC +----\x3e PREROUTING +-------------------\x3e Local\n              +                 ^\n              |                 |\n              |                 |\n              v                 +\nNIC <----+ POSTROUTING <----+ OUTPUT <----+ Local\n")),(0,l.kt)("h2",{id:"empty"},"empty"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"*mangle\n:PREROUTING ACCEPT [8:584]\n:INPUT ACCEPT [8:584]\n:FORWARD ACCEPT [0:0]\n:OUTPUT ACCEPT [6:616]\n:POSTROUTING ACCEPT [6:616]\nCOMMIT\n*nat\n:PREROUTING ACCEPT [0:0]\n:INPUT ACCEPT [0:0]\n:OUTPUT ACCEPT [0:0]\n:POSTROUTING ACCEPT [0:0]\nCOMMIT\n*filter\n:INPUT ACCEPT [8:584]\n:FORWARD ACCEPT [0:0]\n:OUTPUT ACCEPT [11:1432]\nCOMMIT\n")),(0,l.kt)("h2",{id:"notes"},"Notes"),(0,l.kt)("h1",{id:"faq"},"FAQ"),(0,l.kt)("h2",{id:"how-to-do-the-port-forwarding-from-one-ip-to-another-ip-in-same-network"},"How to do the port forwarding from one ip to another ip in same network?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://serverfault.com/q/586486/190601"},"https://serverfault.com/q/586486/190601")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://torguard.net/knowledgebase.php?action=displayarticle&id=239"},"https://torguard.net/knowledgebase.php?action=displayarticle&id=239")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://unix.stackexchange.com/questions/499791/is-there-any-way-to-view-nfmark-like-ctmark"},"https://unix.stackexchange.com/questions/499791/is-there-any-way-to-view-nfmark-like-ctmark"))))}k.isMDXComponent=!0}}]);