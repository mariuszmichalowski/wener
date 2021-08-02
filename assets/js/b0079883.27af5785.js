"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[2005],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return c}});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),k=o(a),c=l,N=k["".concat(p,".").concat(c)]||k[c]||m[c]||r;return a?n.createElement(N,i(i({ref:t},s),{},{components:a})):n.createElement(N,i({ref:t},s))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=k;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:l,i[1]=u;for(var o=2;o<r;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},5220:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return s},default:function(){return k}});var n=a(22122),l=a(19756),r=(a(67294),a(3905)),i=["components"],u={title:"musl"},p=void 0,o={unversionedId:"os/linux/lib/musl",id:"os/linux/lib/musl",isDocsHomePage:!1,title:"musl",description:"- musl - MIT",source:"@site/notes/os/linux/lib/musl.md",sourceDirName:"os/linux/lib",slug:"/os/linux/lib/musl",permalink:"/notes/os/linux/lib/musl",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/lib/musl.md",version:"current",frontMatter:{title:"musl"},sidebar:"docs",previous:{title:"libc",permalink:"/notes/os/linux/lib/libc"},next:{title:"Partition",permalink:"/notes/os/linux/partition"}},s=[{value:"\u73af\u5883\u53d8\u91cf",id:"\u73af\u5883\u53d8\u91cf",children:[]},{value:"DNS \u95ee\u9898",id:"dns-\u95ee\u9898",children:[]},{value:"musl \u95ee\u9898",id:"musl-\u95ee\u9898",children:[]}],m={toc:s};function k(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://musl.libc.org/"},"musl")," - MIT",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.musl-libc.org/faq.html"},"FAQ")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.musl-libc.org/functional-differences-from-glibc.html"},"\u4e0e glibc \u7684\u4e0d\u540c\u70b9"))),(0,r.kt)("h2",{id:"\u73af\u5883\u53d8\u91cf"},"\u73af\u5883\u53d8\u91cf"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.musl-libc.org/environment-variables.html"},"Environment Variables"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Env"),(0,r.kt)("th",{parentName:"tr",align:null},"Used by"),(0,r.kt)("th",{parentName:"tr",align:null},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PATH"),(0,r.kt)("td",{parentName:"tr",align:null},"execvp, execlp, posix_spawnp"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TZ"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"stdoffset[dst[offset][,start[/time],end[/time]]")," \u6216 \u540d\u5b57")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATEMSK"),(0,r.kt)("td",{parentName:"tr",align:null},"getdate"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PWD"),(0,r.kt)("td",{parentName:"tr",align:null},"get_current_dir_name, getcwd"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LOGNAME"),(0,r.kt)("td",{parentName:"tr",align:null},"getlogin"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LD_PRELOAD"),(0,r.kt)("td",{parentName:"tr",align:null},"setuid, setgid \u5ffd\u7565"),(0,r.kt)("td",{parentName:"tr",align:null},"dl \u9884\u52a0\u8f7d\u52a8\u6001\u5e93\u5217\u8868")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LD_LIBRARY_PATH"),(0,r.kt)("td",{parentName:"tr",align:null},"setuid, setgid \u5ffd\u7565"),(0,r.kt)("td",{parentName:"tr",align:null},"\u52a8\u6001\u5e93\u641c\u7d22\u76ee\u5f55\u5217\u8868")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"TZ \u641c\u7d22\u76ee\u5f55",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"/usr/share/zoneinfo"),(0,r.kt)("li",{parentName:"ul"},"/share/zoneinfo"),(0,r.kt)("li",{parentName:"ul"},"/etc/zoneinfo")))),(0,r.kt)("h2",{id:"dns-\u95ee\u9898"},"DNS \u95ee\u9898"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u95ee\u9898",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gitlab.alpinelinux.org/alpine/aports/issues/9734"},"alpine/aports#9734")," - DNS resolver patch",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"AAAA \u4e0d\u8bc6\u522b NotImp \u5bfc\u81f4\u7b49\u5f85\u8d85\u65f6"))),(0,r.kt)("li",{parentName:"ul"},"\u4f1a\u540c\u65f6\u53d1\u8d77 A \u548c AAAA \u8bf7\u6c42"),(0,r.kt)("li",{parentName:"ul"},"glibc's DNS resolver only generates AAAA queries if it can create an IPv6 socket."),(0,r.kt)("li",{parentName:"ul"},"5s \u8d85\u65f6\u91cd\u8bd5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options single-request")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options timeout:1")))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/weaveworks/weave/issues/3287"},"weaveworks/weave#3287")," DNS lookup timeouts due to races in conntrack"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gliderlabs/docker-alpine/issues/255"},"gliderlabs/docker-alpine#255")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/kubernetes/issues/56903#issuecomment-462252499"},"kubernetes/kubernetes#56903")," - DNS intermittent delays of 5s"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/techmindtickle/e9de8239e2fa"},"Intermittent delays in Kubernetes"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"resolve.conf \u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"li"},"options single-request-reopen")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dzone.com/articles/racy-conntrack-and-dns-lookup-timeouts"},"Racy conntrack and DNS Lookup Timeouts"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u56e0\u4e3a A \u548c AAAA \u901a\u8fc7\u540c\u4e00\u4e2a\u7aef\u53e3\u53d1\u8d77\u8bf7\u6c42\u5bfc\u81f4\u5f02\u5e38"),(0,r.kt)("li",{parentName:"ul"},"disable parallel lookups, disable IPv6 to avoid AAAA lookups, use TCP for lookups"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.openwall.com/lists/musl/2018/03/30/4"},"resolver: only exit the search path loop there are a positive number of results give")," - DNS \u670d\u52a1\u5f02\u5e38\u5bfc\u81f4 musl \u884c\u4e3a\u5f02\u5e38"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.openwall.com/lists/musl/2017/10/04/6"},"DNS resolution happenning only after timeout"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u56e0\u4e3a AAAA \u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"\u76ee\u524d\u65e0\u6cd5\u7981\u6b62"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://serverfault.com/questions/632665"},"How to disable AAAA lookups?"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u76ee\u524d\u6ca1\u6709\u597d\u7684\u65b9\u5f0f"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.math.tamu.edu/~comech/tools/linux-slow-dns-lookup/"},"Linux slow dns lookup (delay = 5 seconds)")),(0,r.kt)("li",{parentName:"ul"},"dnsmasq \u4e5f\u6ca1\u6709\u76f4\u63a5\u9488\u5bf9 aaaa \u8fd4\u56de nx \u7684\u65b9\u5f0f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://lists.thekelleys.org.uk/pipermail/dnsmasq-discuss/2005q2/000229.html"},'Is there a way to "block" IPv6 address queries?')),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u901a\u8fc7\u51cf\u5c11 DNS \u5916\u90e8\u67e5\u8be2\u4ee5\u8fbe\u5230\u7c7b\u4f3c\u76ee\u7684"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cache-size=65535")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"min-cache-ttl=300")," \u589e\u52a0\u7f13\u5b58"))),(0,r.kt)("li",{parentName:"ul"},"iptables \u7981\u7528 aaaa \u8bb0\u5f55\u67e5\u8be2",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/oskar456/xt_dns"},"oskar456/xt_dns")," \u6a21\u5757\u53ef\u4ee5\u5b9e\u73b0 dns \u5339\u914d"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.v2ex.com/t/242793"},"https://www.v2ex.com/t/242793")))),(0,r.kt)("li",{parentName:"ul"},"\u8f6c\u53d1\u5904\u7406 AAAA",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/shawn1m/overture"},"shawn1m/overture")," - \u652f\u6301 reject qtype - \u4f46\u662f\u8fd4\u56de ServFail"),(0,r.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u8fd4\u56de NXDOMAIN ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/weaveworks/weave/issues/2244"},"weaveworks/weave#2244"))))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u76d1\u63a7 DNS \u8bf7\u6c42\ntcpdump -ni eth0 port 53\n\n# \u5b8c\u6574\u67e5\u8be2\u5185\u5bb9\u4f8b\u5982 |03|www|07|example|03|com\n# \u4f7f\u7528 match-set \u7981\u7528 AAAA\niptables -N AAAA\n# iptables -I FORWARD 1 -p udp -s 192.168.0.0/16 --dport 53 -j AAAA\niptables -I OUTPUT 1 -p udp --dport 53 -j AAAA\n# drop \u4f1a\u5bfc\u81f4\u8d85\u65f6 - \u6700\u597d\u662f\u8fd4\u56de NXDATA \u6216\u8005 NXDOMAIN\niptables -A AAAA -m string --algo bm --from 40 --hex-string '|001c|' -j DROP\n")),(0,r.kt)("h2",{id:"musl-\u95ee\u9898"},"musl \u95ee\u9898"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 nsswitch",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/pikhq/musl-nscd"},"pikhq/musl-nscd")))),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 res_uinit",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"asterisk \u65e0\u6cd5\u83b7\u53d6 nameserver"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/golang/go/issues/13492"},"golang/go#13492"),"\nruntime: c-shared builds fail with musllibc"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.musl-libc.org/bugs-found-by-musl.html"},"bugs-found-by-musl"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u8f6f\u4ef6\u5df2\u77e5\u56e0\u4e3a musl \u5bfc\u81f4\u7684 bug")))))}k.isMDXComponent=!0}}]);