(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{1169:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=i.a.createContext({}),b=function(e){var t=i.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||s[d]||a;return n?i.a.createElement(m,l(l({ref:t},o),{},{components:n})):i.a.createElement(m,l({ref:t},o))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var o=2;o<a;o++)c[o]=n[o];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},214:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(3),i=n(8),a=(n(0),n(1169)),c={title:"Tinc \u5e38\u89c1\u95ee\u9898"},l={unversionedId:"service/network/tinc-faq",id:"service/network/tinc-faq",isDocsHomePage:!1,title:"Tinc \u5e38\u89c1\u95ee\u9898",description:"Tinc FAQ",source:"@site/notes/service/network/tinc-faq.md",slug:"/service/network/tinc-faq",permalink:"/notes/service/network/tinc-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/network/tinc-faq.md",version:"current",sidebar:"docs",previous:{title:"Tinc \u914d\u7f6e",permalink:"/notes/service/network/tinc-conf"},next:{title:"Tinc",permalink:"/notes/service/network/tinc"}},p=[{value:"Peer had unknown identity",id:"peer-had-unknown-identity",children:[]},{value:"Error while decrypting routines:EVP_EncryptUpdate:invalid operation",id:"error-while-decrypting-routinesevp_encryptupdateinvalid-operation",children:[]},{value:"Handshake phase not finished yet",id:"handshake-phase-not-finished-yet",children:[]},{value:"\u7f51\u7edc\u5361\u987f\uff0c\u5927\u5305\u4e22\u5931",id:"\u7f51\u7edc\u5361\u987f\uff0c\u5927\u5305\u4e22\u5931",children:[]},{value:"ping -s 1389 \u53ef\u4ee5, 1390 \u4e0d\u53ef\u4ee5",id:"ping--s-1389-\u53ef\u4ee5-1390-\u4e0d\u53ef\u4ee5",children:[]},{value:"PMTU - Path MTU",id:"pmtu---path-mtu",children:[]},{value:"Simple Peer-to-Peer Security - sptps",id:"simple-peer-to-peer-security---sptps",children:[]},{value:"Tinc 1.0 init",id:"tinc-10-init",children:[]}],o={toc:p};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"tinc-faq"},"Tinc FAQ"),Object(a.b)("h2",{id:"peer-had-unknown-identity"},"Peer had unknown identity"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"Peer 1.2.3.4 port 53291 had unknown identity (node_1)\nError while processing ID from node_1 (1.2.3.4 port 53291)\n")),Object(a.b)("h2",{id:"error-while-decrypting-routinesevp_encryptupdateinvalid-operation"},"Error while decrypting routines:EVP_EncryptUpdate:invalid operation"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"libssl - ",Object(a.b)("a",{parentName:"li",href:"https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=923438"},"tinc: breaks after upgrading libssl1.1 to v1.1.1b-1")),Object(a.b)("li",{parentName:"ul"},"pre+",Object(a.b)("inlineCode",{parentName:"li"},"ExperimentalProtocol=no")," \u4f1a\u51fa\u73b0",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u56e0\u6b64\u8981\u561b\u542f\u7528 1.1 \u534f\u8bae\uff0c\u8981\u561b\u4f7f\u7528 1.0 \u7248\u672c tinc"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/gsliepen/tinc/commit/2b0aeec02d64bb4724da9ff1dbc19b7d35d7c904"},"fix: use EVP_DecryptUpdate while decrypting"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"1.18")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"Error while decrypting: error:060A7094:digital envelope routines:EVP_EncryptUpdate:invalid operation\nError while decrypting metadata from node_1 (1.2.3.4 port 39080)\n")),Object(a.b)("h2",{id:"handshake-phase-not-finished-yet"},"Handshake phase not finished yet"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u5c1d\u8bd5 ",Object(a.b)("inlineCode",{parentName:"li"},"ExperimentalProtocol = no")),Object(a.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/gsliepen/tinc/issues/203"},"#203"),' - too many "Invalid packet seqno" in logs')))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u5173\u8054\u9519\u8bef\u4fe1\u606f")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"Handshake phase not finished yet from master_1 (192.168.1.2 port 655)\nNo key from master_1 after 10 seconds, restarting SPTPS\nGot REQ_KEY from master_1 while we already started a SPTPS session!\nInvalid packet seqno: 0 != 1 from master_1 (192.168.1.2 port 655)\nFailed to decrypt and verify packet from master_1 (192.168.1.2 port 655)\n")),Object(a.b)("h2",{id:"\u7f51\u7edc\u5361\u987f\uff0c\u5927\u5305\u4e22\u5931"},"\u7f51\u7edc\u5361\u987f\uff0c\u5927\u5305\u4e22\u5931"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u907f\u514d\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"li"},"Port=0"),", \u5373\u4fbf\u4e0d\u80fd\u5bf9\u5916\u66b4\u9732\u7aef\u53e3\uff0c\u7a33\u5b9a\u7684\u7aef\u53e3\u4f1a\u8ba9 tinc \u7ec4\u7f51\u66f4\u7a33\u5b9a\u3002"),Object(a.b)("li",{parentName:"ul"},"\u5c3d\u91cf\u5bf9\u5916\u66b4\u9732\u56fa\u5b9a\u7aef\u53e3\uff0cnat \u4f1a\u66f4\u52a0\u901a\u7545\uff0c\u66f4\u5bb9\u6613\u76f4\u8fde"),Object(a.b)("li",{parentName:"ul"},"\u914d\u7f6e Address \u8ba9\u672c\u5730\u66f4\u5bb9\u6613\u53d1\u73b0"),Object(a.b)("li",{parentName:"ul"},"\u4f7f\u7528 iperf3 \u9884\u70ed\u4e00\u4e0b\u7f51\u7edc - \u770b\u7f51\u7edc\u662f\u5426\u4f1a\u53d8\u5e73\u7a33")),Object(a.b)("h2",{id:"ping--s-1389-\u53ef\u4ee5-1390-\u4e0d\u53ef\u4ee5"},"ping -s 1389 \u53ef\u4ee5, 1390 \u4e0d\u53ef\u4ee5"),Object(a.b)("p",null,"\u5728 tinc \u4e00\u6bb5\u65f6\u95f4\u672a\u4f7f\u7528\u540e, ",Object(a.b)("inlineCode",{parentName:"p"},"ping -s 1389")," \u53ef\u901a, \u4f46\u5927\u7684\u8bf7\u6c42\u4f1a\u5361\u987f\u3002"),Object(a.b)("p",null,"ping -s 1389 \u5b9e\u9645\u53d1\u9001 1397+20=1417"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/gsliepen/tinc/commit/24d28adf64934c8d726959e25dce8c10dbd10d1f"},"Use a smarter algorithm for choosing MTU discovery probe sizes"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u521d\u59cb mtu \u53d1\u73b0 - 8 \u6b21 probe"),Object(a.b)("li",{parentName:"ul"},"1339, 1417 ~1450"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"minmtu + powf(interval, multiplier * cycle_position / (probes_per_cycle - 1))"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"multiplier = 0.982"),Object(a.b)("li",{parentName:"ul"},"cycle_position = probes_per_cycle - (n->mtuprobes % probes_per_cycle) - 1"),Object(a.b)("li",{parentName:"ul"},"minmtu \u6700\u5c0f 64"),Object(a.b)("li",{parentName:"ul"},"interval = maxmtu - minmtu")))))),Object(a.b)("h2",{id:"pmtu---path-mtu"},"PMTU - Path MTU"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u81ea\u5df1\u5230\u81ea\u5df1 9018"),Object(a.b)("li",{parentName:"ul"},"\u5982\u679c\u7f51\u7edc MTU \u662f 1500, \u90a3\u4e48 tinc \u68c0\u6d4b\u7684 PMTU \u4e3a 1451",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.tinc-vpn.org/pipermail/tinc/2014-February/003614.html"},"https://www.tinc-vpn.org/pipermail/tinc/2014-February/003614.html")))),Object(a.b)("li",{parentName:"ul"},"tinc \u53d1\u9001\u4e0d\u540c\u7684\u5305\u5927\u5c0f\u68c0\u6d4b mtu - ping"),Object(a.b)("li",{parentName:"ul"},"\u6ca1\u6709 udp \u5219\u4f7f\u7528 tcp \u8f6c\u53d1 - mtu \u5219\u4ee5\u9ed8\u8ba4\u4e3a\u4e3b - \u6b64\u65f6 mtu \u65e0\u610f\u4e49")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u670d\u52a1\u914d\u7f6e")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ini"},"PingInterval=60\nPingTimeout=5\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u4e3b\u673a\u914d\u7f6e")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ini"},"# \u8282\u70b9\u521d\u59cb\u8def\u5f84 MTU - Path MTU\nPMTU = 1514\n# \u81ea\u52a8\u53d1\u73b0\u5230\u8282\u70b9\u7684 Path MTU\nPMTUDiscovery = yes\n# \u53d1\u9001\u53d1\u73b0 MTU \u6d88\u606f\u7684\u95f4\u9694\nMTUInfoInterval = 5\n")),Object(a.b)("h2",{id:"simple-peer-to-peer-security---sptps"},"Simple Peer-to-Peer Security - sptps"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u57fa\u4e8e TLS 1.2 \u8fdb\u884c\u7cbe\u7b80",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u6ca1\u6709 PKI - \u4ea4\u6362\u516c\u94a5"),Object(a.b)("li",{parentName:"ul"},"\u6ca1\u6709 cipher suite \u534f\u5546"))),Object(a.b)("li",{parentName:"ul"},"\u8282\u70b9\u8ba4\u8bc1\u4f7f\u7528 521 bits ECC keys, Diffie-Hellman using ephemeral 521 bits ECC keys is used to provide perfect forward secrecy (PFS), AES-256-CTR is used for encryption, and HMAC-SHA-256 for message authentication."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.tinc-vpn.org/documentation-1.1/Simple-Peer_002dto_002dPeer-Security.html"},"Simple Peer-to-Peer Security"))),Object(a.b)("h2",{id:"tinc-10-init"},"Tinc 1.0 init"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.tinc-vpn.org/documentation/tinc.conf.5"},"tinc.conf.5"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"export NETWORK=kubenet\nNODENAME=$(hostname|tr - _)\n\nmodprobe tun\n\nmkdir -p /etc/tinc/$NETWORK/hosts\ncd /etc/tinc/$NETWORK\n\ntincd -n $NETWORK -K 4096\ncat <<CONF > tinc.conf\nName=$NODENAME\nMode=switch\nDevice = /dev/net/tun\nAddressFamily = ipv4\nCONF\n\ncat <<'SHELL' > tinc-up\nip link set $INTERFACE up\nip addr add 10.10.1.1 dev $INTERFACE\nip route add 10.10.1.0/24 dev $INTERFACE\nSHELL\ncat <<'SHELL' > tinc-down\nip link set $INTERFACE down\nSHELL\nchmod -v +x tinc-up tinc-down\n\ncp rsa_key.pub hosts/$NODENAME.rsa_key.pub\ncat <<CONF > hosts/$NODENAME\nPublicKeyFile=$NODENAME.rsa_key.pub\nCONF\n\n# \u524d\u53f0\u542f\u52a8 - debug\ntincd -n $NETWORK -Dd 5\n\n# \u670d\u52a1\u542f\u52a8\necho \"NETWORK: $NETWORK\" >> /etc/conf.d/tinc.networks\nservice tincd start\n")))}b.isMDXComponent=!0}}]);