(window.webpackJsonp=window.webpackJsonp||[]).push([[718],{1172:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return v}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),l=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),b=r,v=u["".concat(c,".").concat(b)]||u[b]||d[b]||a;return t?i.a.createElement(v,o(o({ref:n},p),{},{components:t})):i.a.createElement(v,o({ref:n},p))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=b;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<a;p++)c[p]=t[p];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},791:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(3),i=t(8),a=(t(0),t(1172)),c={title:"IKEv2"},o={unversionedId:"service/network/ikev2",id:"service/network/ikev2",isDocsHomePage:!1,title:"IKEv2",description:"IKEv2 \u670d\u52a1\u7aef",source:"@site/notes/service/network/ikev2.md",slug:"/service/network/ikev2",permalink:"/notes/service/network/ikev2",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/network/ikev2.md",version:"current",sidebar:"docs",previous:{title:"FRP",permalink:"/notes/service/network/frp"},next:{title:"inlets \u901a\u9053",permalink:"/notes/service/network/inlets"}},s=[{value:"IKEv2 \u670d\u52a1\u7aef",id:"ikev2-\u670d\u52a1\u7aef",children:[{value:"\u542f\u52a8\u811a\u672c",id:"\u542f\u52a8\u811a\u672c",children:[]}]},{value:"IKEv2 Linux \u5ba2\u6237\u7aef",id:"ikev2-linux-\u5ba2\u6237\u7aef",children:[]},{value:"\u9ed8\u8ba4 ipsec.conf",id:"\u9ed8\u8ba4-ipsecconf",children:[]}],p={toc:s};function l(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"ikev2-\u670d\u52a1\u7aef"},"IKEv2 \u670d\u52a1\u7aef"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u901a\u8fc7 strongSwan \u63d0\u4f9b IKEv2"),Object(a.b)("li",{parentName:"ul"},"DockerHub ",Object(a.b)("a",{parentName:"li",href:"https://hub.docker.com/r/gaomd/ikev2-vpn-server"},"ikev2-vpn-server"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/gaomd/docker-ikev2-vpn-server"},"aomd/docker-ikev2-vpn-server"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/gaomd/docker-ikev2-vpn-server/blob/master/bin/start-vpn"},"bin/start-vpn"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"10.8.0.0/16"))))))),Object(a.b)("li",{parentName:"ul"},"PSK"),Object(a.b)("li",{parentName:"ul"},"500/udp 4500/udp")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'docker run -d --restart always --privileged \\\n  -p 500:500/udp -p 4500:4500/udp \\\n  --name ikev2-vpn-server gaomd/ikev2-vpn-server:0.3.0\n\n# \u5c06 vpn1.example.com \u4fee\u6539\u4e3a\u673a\u5668\u7684 IP \u5730\u5740\ndocker run -i -t --rm --volumes-from ikev2-vpn-server -e "HOST=vpn1.example.com" gaomd/ikev2-vpn-server:0.3.0 generate-mobileconfig > ikev2-vpn.mobileconfig\n\n# \u751f\u6210\u7684\u79d8\u94a5\u4f4d\u4e8e /etc/ipsec.secrets\n# \u5982\u679c\u8fd8\u60f3\u4e8c\u6b21\u4f7f\u7528, \u53ef\u4ee5\u62f7\u8d1d\u51fa\u6765\ndocker cp ikev2-vpn-server:/etc/ipsec.secrets .\n# \u5982\u679c\u5df2\u7ecf\u6709\u4e86 PKI\necho ": PSK \\"$IKEV2_PKI\\"" > ipsec.secrets\n# \u4f7f\u7528\u73b0\u6709\u7684 PKI \u542f\u52a8\ndocker run -d --restart always --privileged \\\n  -p 500:500/udp -p 4500:4500/udp -v $PWD/ipsec.secrets:/etc/ipsec.secrets  \\\n  --name ikev2-vpn-server gaomd/ikev2-vpn-server:0.3.0\n')),Object(a.b)("h3",{id:"\u542f\u52a8\u811a\u672c"},"\u542f\u52a8\u811a\u672c"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'# https://wiki.strongswan.org/projects/strongswan/wiki/ForwardingAndSplitTunneling\n# Continue reading: https://wiki.strongswan.org/projects/strongswan/wiki/VirtualIP\nsysctl net.ipv4.ip_forward=1\nsysctl net.ipv6.conf.all.forwarding=1\nsysctl net.ipv6.conf.eth0.proxy_ndp=1\niptables -t nat -A POSTROUTING -s 10.8.0.0/16 -o eth0 -m policy --dir out --pol ipsec -j ACCEPT\niptables -t nat -A POSTROUTING -s 10.8.0.0/16 -o eth0 -j MASQUERADE\nip6tables -t nat -A POSTROUTING -s fd6a:6ce3:c8d8:7caa::/64 -o eth0 -m policy --dir out --pol ipsec -j ACCEPT\nip6tables -t nat -A POSTROUTING -s fd6a:6ce3:c8d8:7caa::/64 -o eth0 -j MASQUERADE\n\n# hotfix for openssl `unable to write \'random state\'` stderr\nSHARED_SECRET="123$(openssl rand -base64 32 2>/dev/null)"\n[ -f /etc/ipsec.secrets ] || echo ": PSK \\"${SHARED_SECRET}\\"" > /etc/ipsec.secrets\n\n# hotfix for https://github.com/gaomd/docker-ikev2-vpn-server/issues/7\nrm -f /var/run/starter.charon.pid\n\nservice ndppd start\n# http://wiki.loopop.net/doku.php?id=server:vpn:strongswanonopenvz\n/usr/sbin/ipsec start --nofork\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"/etc/ipsec.conf")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ini"},"# /etc/ipsec.conf - strongSwan IPsec configuration file\n#\n# Based on http://www.strongswan.org/uml/testresults/ikev2/rw-psk-ipv4/\n\nconfig setup\n\nconn %default\n    left=%defaultroute\n    ikelifetime=60m\n    keylife=20m\n    rekeymargin=3m\n    keyingtries=1\n    keyexchange=ikev2\n    authby=secret\n\nconn rw\n    # http://wiki.loopop.net/doku.php?id=server:vpn:strongswanonopenvz\n    # https://wiki.strongswan.org/projects/strongswan/wiki/ForwardingAndSplitTunneling\n    leftsubnet=0.0.0.0/0,::/0\n    # end ref\n    leftfirewall=yes\n    right=%any\n    rightsourceip=10.8.0.0/16,fd6a:6ce3:c8d8:7caa::/64\n    auto=add\n")),Object(a.b)("h2",{id:"ikev2-linux-\u5ba2\u6237\u7aef"},"IKEv2 Linux \u5ba2\u6237\u7aef"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'apk add strongswan\nservice strongswan start\nrc-update add strongswan\n\ncat <<CONF >> /etc/ipsec.conf\nconn %default\n    ikelifetime=60m\n    keylife=20m\n    rekeymargin=3m\n    keyingtries=1\n    keyexchange=ikev2\n    authby=secret\n\nconn pri\n  left=%defaultroute\n  leftsourceip=%config\n  # \u670d\u52a1\u7aef\u5730\u5740\n  right=192.168.1.1\n  rightsubnet=0.0.0.0/0\n  type=tunnel\n  auto=add\nCONF\n# sed -i \'s/load = yes/load = no/g\' /etc/strongswan.d/charon/constraints.conf\necho ":PSK \\"${IKEV2_PKI}\\"" >> /etc/ipsec.secrets\nipsec restart\nipsec up pri\n\nipsec statusall\n')),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"ipsec rereadsecrets\nipsec reload\nipsec restart\n")),Object(a.b)("h2",{id:"\u9ed8\u8ba4-ipsecconf"},"\u9ed8\u8ba4 ipsec.conf"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ini"},'# ipsec.conf - strongSwan IPsec configuration file\n\n# basic configuration\n\nconfig setup\n    # strictcrlpolicy=yes\n    # uniqueids = no\n\n# Add connections here.\n\n# Sample VPN connections\n\n#conn sample-self-signed\n#      leftsubnet=10.1.0.0/16\n#      leftcert=selfCert.der\n#      leftsendcert=never\n#      right=192.168.0.2\n#      rightsubnet=10.2.0.0/16\n#      rightcert=peerCert.der\n#      auto=start\n\n#conn sample-with-ca-cert\n#      leftsubnet=10.1.0.0/16\n#      leftcert=myCert.pem\n#      right=192.168.0.2\n#      rightsubnet=10.2.0.0/16\n#      rightid="C=CH, O=Linux strongSwan CN=peer name"\n#      auto=start\n')))}l.isMDXComponent=!0}}]);