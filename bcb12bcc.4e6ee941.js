(window.webpackJsonp=window.webpackJsonp||[]).push([[833],{1166:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,d=s["".concat(o,".").concat(m)]||s[m]||u[m]||l;return n?r.a.createElement(d,c(c({ref:t},b),{},{components:n})):r.a.createElement(d,c({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var b=2;b<l;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},906:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),l=(n(0),n(1166)),o={id:"haproxy-conf",title:"HAProxy \u914d\u7f6e"},c={unversionedId:"devops/web/haproxy-conf",id:"devops/web/haproxy-conf",isDocsHomePage:!1,title:"HAProxy \u914d\u7f6e",description:"balance",source:"@site/notes/devops/web/haproxy-conf.md",slug:"/devops/web/haproxy-conf",permalink:"/notes/devops/web/haproxy-conf",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/web/haproxy-conf.md",version:"current",sidebar:"docs",previous:{title:"Caddy",permalink:"/notes/devops/web/caddy"},next:{title:"HAProxy Version",permalink:"/notes/devops/web/haproxy-version"}},i=[{value:"balance",id:"balance",children:[]},{value:"HAProxy \u900f\u660e\u4ee3\u7406+Traefik",id:"haproxy-\u900f\u660e\u4ee3\u7406traefik",children:[]},{value:"\u4fdd\u7559\u72b6\u6001",id:"\u4fdd\u7559\u72b6\u6001",children:[]},{value:"\u4ea4\u4e92\u547d\u4ee4",id:"\u4ea4\u4e92\u547d\u4ee4",children:[]},{value:"SNI Proxy",id:"sni-proxy",children:[]}],b={toc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"balance"},"balance"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.haproxy.com/documentation/hapee/latest/onepage/#4.2-balance"},"balance")),Object(l.b)("li",{parentName:"ul"},"roundrobin",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6839\u636e weight \u8f6e\u8bad - weight \u53ef\u52a8\u6001\u8c03\u6574"),Object(l.b)("li",{parentName:"ul"},"\u6700\u591a 4095 server"))),Object(l.b)("li",{parentName:"ul"},"static-rr",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u540c roundrobin \u4f46\u4e0d\u652f\u6301\u8c03\u6574 weight\uff0c\u4e0d\u9650\u5236 server \u6570\u91cf"))),Object(l.b)("li",{parentName:"ul"},"leastconn",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9009\u62e9\u6700\u5c11\u8fde\u63a5\u6570\u7684 server"),Object(l.b)("li",{parentName:"ul"},"\u5728 server \u4e2d\u4f7f\u7528 rr \u5c31\u884c\u9009\u62e9 - \u652f\u6301\u52a8\u6001 weight"),Object(l.b)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u957f\u94fe\u63a5 \uff08\u4f8b\u5982\uff1aLDAP, SQL, TSE\uff09 \u4e0d\u9002\u7528\u4e8e\u77ed\u94fe\u63a5 \uff08\u4f8b\u5982\uff1a HTTP\uff09"))),Object(l.b)("li",{parentName:"ul"},"first",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u901a\u8fc7 server id \u987a\u5e8f\u9009\u62e9\u7b2c\u4e00\u4e2a slot - id \u9ed8\u8ba4\u4e3a server \u987a\u5e8f"),Object(l.b)("li",{parentName:"ul"},"\u5f53 server \u8fbe\u5230 maxconn \u65f6\u9009\u62e9\u4e0b\u4e00\u4e2a - \u4f7f\u7528\u8be5\u7b97\u6cd5\u8981\u8bbe\u7f6e\u4e86 maxconn \u624d\u6709\u610f\u4e49"),Object(l.b)("li",{parentName:"ul"},"\u8be5\u7b97\u6cd5\u53ef\u4ee5\u4f7f\u540e\u9762\u7684 server \u6309\u9700\u542f\u52a8 - \u914d\u5408\u57fa\u7840\u8bbe\u65bd\u52a8\u6001\u63a7\u5236\u670d\u52a1\u5668\u8d77\u505c"),Object(l.b)("li",{parentName:"ul"},"\u5ffd\u7565 weight\uff0c\u66f4\u9002\u7528\u4e8e\u957f\u94fe\u63a5"),Object(l.b)("li",{parentName:"ul"},"\u53ef\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"li"},"http-check send-state")," \u544a\u77e5\u670d\u52a1\u5668\u8d1f\u8f7d"))),Object(l.b)("li",{parentName:"ul"},"source",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u901a\u8fc7 IP hash \u53d6\u6a21\u9009\u62e9 server"),Object(l.b)("li",{parentName:"ul"},"\u4fee\u6539 server \u6570\u91cf\u4f1a\u5f71\u54cd\u9009\u53d6\u7ed3\u679c - server up\u3001down \u4e5f\u4f1a\u5f71\u54cd"),Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u9759\u6001 weight \u65e0\u6548\uff0c\u53ef\u914d\u7f6e hash-type"))),Object(l.b)("li",{parentName:"ul"},"uri",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"URL hash \u53d6\u6a21\u9009\u62e9 server"),Object(l.b)("li",{parentName:"ul"},"URL \u4f7f\u7528\u8def\u5f84 ",Object(l.b)("inlineCode",{parentName:"li"},"?")," \u524d\u9762\u90e8\u5206\uff0c\u53ef\u6307\u5b9a\u4e3a ",Object(l.b)("inlineCode",{parentName:"li"},"whole")," \u4f7f\u7528\u6240\u6709"),Object(l.b)("li",{parentName:"ul"},"\u53ef\u589e\u52a0\u7f13\u5b58\u547d\u4e2d\uff0c\u53ea\u9002\u7528\u4e8e HTTP \u540e\u7aef"),Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u9759\u6001 weight \u65e0\u6548\uff0c\u53ef\u914d\u7f6e hash-type"),Object(l.b)("li",{parentName:"ul"},"\u53c2\u6570",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"len - \u622a\u53d6\u957f\u5ea6"),Object(l.b)("li",{parentName:"ul"},"depth - \u76ee\u5f55\u6df1\u5ea6"))))),Object(l.b)("li",{parentName:"ul"},"url_param",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528 HTTP GET \u8bf7\u6c42\u4e0a\u7684 URL \u53c2\u6570"),Object(l.b)("li",{parentName:"ul"},"\u672a\u627e\u5230\u53c2\u6570\u5219\u4f7f\u7528 rr"),Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u9759\u6001 weight \u65e0\u6548\uff0c\u53ef\u914d\u7f6e hash-type"),Object(l.b)("li",{parentName:"ul"},"\u53c2\u6570",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"check_post - \u9488\u5bf9 POST \u4e5f\u68c0\u6d4b"))))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"hdr(<name>)"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528 HTTP \u5934 ",Object(l.b)("inlineCode",{parentName:"li"},"<name>")," - \u5927\u5c0f\u5199\u4e0d\u654f\u611f\uff0c\u4e0d\u5b58\u5728\u5219\u4f7f\u7528 rr"),Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u9759\u6001 weight \u65e0\u6548\uff0c\u53ef\u914d\u7f6e hash-type"),Object(l.b)("li",{parentName:"ul"},"\u53c2\u6570",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"use_domain_only - HASH \u57df\u540d\uff0c\u4e5f\u5c31\u662f ",Object(l.b)("inlineCode",{parentName:"li"},"Host")," \u5934"))))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"random"),", ",Object(l.b)("inlineCode",{parentName:"li"},"random(<draws>)"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u968f\u673a\u6570\uff0c\u4e00\u81f4\u6027 hash - weight \u52a8\u6001"),Object(l.b)("li",{parentName:"ul"},"\u9002\u7528\u4e8e server \u6570\u91cf\u591a\u4e14\u9891\u7e41\u52a0\u51cf\u573a\u666f - \u6bd4 roundrobin \u548c leastconn \u5f71\u54cd\u66f4\u5c0f"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<draws>")," - number of draws before selecting the least loaded of these servers",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4 2"))),Object(l.b)("li",{parentName:"ul"},"\u53c2\u6570",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"hash-balance-factor",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u53ef\u589e\u5f3a\u516c\u5e73\u6027"))))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://www.eecs.harvard.edu/~michaelm/postscripts/handbook2001.pdf"},"Power of Two Random Choices")))),Object(l.b)("li",{parentName:"ul"},"rdp-cookie, ",Object(l.b)("inlineCode",{parentName:"li"},"rdp-cookie(<name>)"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"name \u9ed8\u8ba4 ",Object(l.b)("inlineCode",{parentName:"li"},"mstshash")),Object(l.b)("li",{parentName:"ul"},"\u9700\u8981 ",Object(l.b)("inlineCode",{parentName:"li"},"tcp-request content accept")," + ",Object(l.b)("inlineCode",{parentName:"li"},"req_rdp_cookie_cnt")),Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u9759\u6001 weight \u65e0\u6548\uff0c\u53ef\u914d\u7f6e hash-type")))),Object(l.b)("h2",{id:"haproxy-\u900f\u660e\u4ee3\u7406traefik"},"HAProxy \u900f\u660e\u4ee3\u7406+Traefik"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.haproxy.com/blog/haproxy/proxy-protocol"},"haproxy/proxy-protocol")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.haproxy.org/download/2.2/doc/proxy-protocol.txt"},"proxy-protocol.txt")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://docs.traefik.io/routing/entrypoints/#proxyprotocol"},"traefik proxy protocol")),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://stackoverflow.com/a/57503161/1870054"},"HAProxy tcp mode source client ip")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://yq.aliyun.com/articles/492367"},"Haproxy\u5168\u900f\u660e\u4ee3\u7406"))))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haproxy"},"global\n  log /dev/log    local0\n  log /dev/log    local1 notice\n  chroot /var/lib/haproxy\n  # \u5e38\u89c1\u4f4d\u7f6e\n  # /run/haproxy/admin.sock\n  # /var/run/haproxy.sock\n  stats socket /var/lib/haproxy/stats mode 660 level admin\n  # stats socket ipv4@192.168.0.1:9999 level admin\n  stats timeout 30s\n  user haproxy\n  group haproxy\n  daemon\n\ndefaults\n  log global\n  retries 2\n  option  dontlognull\n  timeout connect 10000\n  timeout server 600000\n  timeout client 600000\n\nfrontend https\n  bind 0.0.0.0:443\n  default_backend https\n\nbackend https\n  mode tcp\n  balance roundrobin\n  option tcp-check\n  # traefik \u540e\u7aef\u4e5f\u652f\u6301 proxy \u534f\u8bae\n  server traefik 192.168.128.5:9443 check fall 3 rise 2 send-proxy\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"iptables -F\niptables -t mangle -N DIVERT\niptables -t mangle -A PREROUTING -p tcp -m socket -j DIVERT\niptables -t mangle -A DIVERT -j MARK --set-mark 222\niptables -t mangle -A DIVERT -j ACCEPT\nip rule add fwmark 222 lookup 100\nip route add local 0.0.0.0/0 dev lo table 100\n\n# \u5141\u8bb8ip\u8f6c\u53d1\necho 1 > /proc/sys/net/ipv4/conf/all/forwarding\n\n# \u8bbe\u7f6e\u677e\u6563\u9006\u5411\u8def\u5f84\u8fc7\u6ee4\necho 2 > /proc/sys/net/ipv4/conf/default/rp_filter\necho 2 > /proc/sys/net/ipv4/conf/all/rp_filter\necho 0 > /proc/sys/net/ipv4/conf/enp0s8/rp_filter\n\n# \u5141\u8bb8ICMP\u91cd\u5b9a\u5411\necho 1 > /proc/sys/net/ipv4/conf/all/send_redirects\necho 1 > /proc/sys/net/ipv4/conf/enp0s8/send_redirects\n")),Object(l.b)("h2",{id:"\u4fdd\u7559\u72b6\u6001"},"\u4fdd\u7559\u72b6\u6001"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u4e0d\u4f1a\u4fdd\u7559\u7edf\u8ba1\u4fe1\u606f")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"global\n  # \u72b6\u6001\u6587\u4ef6\n  server-state-file /var/lib/haproxy/server-state\n  stats socket /var/lib/haproxy/stats\n\ndefaults\n  # \u52a0\u8f7d\u7edf\u8ba1\n  load-server-state-from-file global\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'# \u4fdd\u7559\u72b6\u6001\necho "show servers state" | socat /var/lib/haproxy/stats stdio > /var/lib/haproxy/server-state\n')),Object(l.b)("h2",{id:"\u4ea4\u4e92\u547d\u4ee4"},"\u4ea4\u4e92\u547d\u4ee4"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://cbonte.github.io/haproxy-dconv/2.2/management.html#9.3"},"Unix Socket commands"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'# \u811a\u672c\u4e00\u6b21\u6267\u884c\n# socat \u53ef\u80fd\u9700\u8981 sudo\necho "show info;show stat;show table" | socat /var/lib/haproxy/stats stdio\n# \u4ea4\u4e92\u5f0f\nsocat /var/lib/haproxy/stats readline\n# prompt\n')),Object(l.b)("h2",{id:"sni-proxy"},"SNI Proxy"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://blog.haproxy.com/2012/04/13/enhanced-ssl-load-balancing-with-server-name-indication-sni-tls-extension/"},"http://blog.haproxy.com/2012/04/13/enhanced-ssl-load-balancing-with-server-name-indication-sni-tls-extension/")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.liip.ch/en/blog/haproxy-selective-tls-termination"},"HAProxy selective TLS termination"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ini"},"backend bk_ssl\n  mode tcp\n  no option checkcache\n  no option httpclose\n  tcp-request inspect-delay 5s\n  tcp-request content accept if { req.ssl_hello_type 1 }\n  tcp-request content reject\n  use-server server1 if { req.ssl_sni -m beg app1. }\n  server server1 server1:8443 check id 1 weight 0\n")),Object(l.b)("p",null,"-m end\nuse_backend apache if { ssl_fc_sni_end domain.com }"),Object(l.b)("p",null,"hdr(host)\nhdr_end(host) -i .wener.me\nhdr_beg(host) -i .wener.me"))}p.isMDXComponent=!0}}]);