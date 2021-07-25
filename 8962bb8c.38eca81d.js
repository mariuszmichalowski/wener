(window.webpackJsonp=window.webpackJsonp||[]).push([[592],{1166:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=a.a.createContext({}),p=function(t){var e=a.a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):b(b({},e),t)),n},s=function(t){var e=p(t.components);return a.a.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},u=a.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,i=l(t,["components","mdxType","originalType","parentName"]),s=p(n),u=r,m=s["".concat(c,".").concat(u)]||s[u]||d[u]||o;return n?a.a.createElement(m,b(b({ref:e},i),{},{components:n})):a.a.createElement(m,b({ref:e},i))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,c=new Array(o);c[0]=u;var b={};for(var l in e)hasOwnProperty.call(e,l)&&(b[l]=e[l]);b.originalType=t,b.mdxType="string"==typeof t?t:r,c[1]=b;for(var i=2;i<o;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},666:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return c})),n.d(e,"metadata",(function(){return b})),n.d(e,"toc",(function(){return l})),n.d(e,"default",(function(){return p}));var r=n(3),a=n(8),o=(n(0),n(1166)),c={title:"socat"},b={unversionedId:"os/linux/network/socat",id:"os/linux/network/socat",isDocsHomePage:!1,title:"socat",description:"- man page",source:"@site/notes/os/linux/network/socat.md",slug:"/os/linux/network/socat",permalink:"/notes/os/linux/network/socat",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/network/socat.md",version:"current",sidebar:"docs",previous:{title:"NMap",permalink:"/notes/os/linux/network/nmap"},next:{title:"tcpdump",permalink:"/notes/os/linux/network/tcpdump"}},l=[],i={toc:l};function p(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"http://www.dest-unreach.org/socat/doc/socat.html"},"man page")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/craSH/socat/blob/master/EXAMPLES"},"EXAMPLES"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# \u8f6c\u53d1\u672c\u5730\u7684 8080 \u5230 \u767e\u5ea6\n# -d \u7528\u4e8e\u6253\u5f00\u65e5\u5fd7\nsocat -v -d TCP-LISTEN:8080,fork,reuseaddr TCP:baidu.com:80\n\n# \u6d4b\u8bd5\ncurl -H 'Host: baidu.com' 127.0.0.1:8080\n\n# \u8f6c\u53d1\u672c\u5730 1053 \u5230\u963f\u91cc\u516c\u7f51 dns\nsocat TCP-LISTEN:1053,fork,reuseaddr TCP:223.5.5.5:53\nsocat UDP-RECVFROM:1053,fork,reuseaddr UDP:223.5.5.5:53\n\n# \u6d4b\u8bd5\ndig -p 1053 baidu.com @127.0.0.1\n\n# \u8f6c\u53d1\u672c\u5730\u5230\u8c37\u6b4c DNS\nsocat TCP-LISTEN:53,fork,reuseaddr TCP:8.8.8.8:53\nsocat UDP-RECVFROM:53,fork,reuseaddr UDP:8.8.8.8:53\n\n# \u5e38\u7528\u547d\u4ee4\n# \u907f\u514d\u540e\u9762 SUDO \u8981\u6c42\u5bc6\u7801\nsudo ls\nsudo `which socat` TCP-LISTEN:53,fork,reuseaddr TCP:8.8.8.8:53 > socat.tcp.53.log &\nsudo `which socat` UDP-RECVFROM:53,fork,reuseaddr UDP:8.8.8.8:53 > socat.udp.53.log &\n\n# \u4f46 \"\u9632\u706b\u5899\" \u4f1a\u68c0\u6d4b\u51fa\u6765,\u4e00\u4f1a\u513f\u8f6c\u53d1\u7684 DNS \u5c31\u4e0d\u80fd\u7528\u4e86\n\n# \u76d1\u542c UDP, \u5c06\u5185\u5bb9\u8f93\u51fa\u5230 stdio\nsocat -u udp4-recv:8123 -\n# \u5ba2\u6237\u7aef\u53d1\u9001\necho \"test\" | socat - udp4-sendto:127.0.0.1:8123\n\n# \u8fde\u63a5\u540e\u542f\u52a8\u7a0b\u5e8f\nsocat -u udp-l:8123,fork exec:/bin/cat\n# tcp\nsocat -u tcp-l:80,fork exec:/bin/cat\n\n# \u8f93\u51fa\u5230\u6587\u4ef6\nsocat -u TCP-LISTEN:12456,keepalive,reuseaddr,rcvbuf=131071 STDOUT\n\n# server\nsocat exec:'bash -li',pty,stderr,setsid  tcp-listen:8999,reuseaddr\n# cli\nsocat tcp-connect:127.0.0.1:8999 file:`tty`,raw,echo=0\n\n# over socks\n# socks 10.10.1.1:1080\nsocat TCP-LISTEN:8080 SOCKS:10.10.1.1:216.58.200.238:80,socksport=1080\ncurl localhost:8080\n\n# dns udp\nsocat -v UDP-LISTEN:15353,fork,reuseaddr SOCKS:10.10.1.1:8.8.8.8:53,socksport=1080\n\n# \u914d\u5408 SSH \u4f7f\u7528\n# ProxyCommand socat - socks:127.0.0.1:%h:%p,socksport=3333\n\n# \u53ef\u4ee5\u6307\u5b9a\u672c\u5730\u5730\u5740\nSOCAT_SOCKADDR=x.y.z.t socat TCP-LISTEN:80,reuseaddr,fork,su=nobody TCP:a.b.c.d:80\n")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"right"},"opt"),Object(o.b)("th",{parentName:"tr",align:null},"desc"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"right"},"-d"),Object(o.b)("td",{parentName:"tr",align:null},"fatal")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"right"},"-dd"),Object(o.b)("td",{parentName:"tr",align:null},"notice")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"right"},"-ddd"),Object(o.b)("td",{parentName:"tr",align:null},"info")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"right"},"-dddd"),Object(o.b)("td",{parentName:"tr",align:null},"debug")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"right"},"-D"),Object(o.b)("td",{parentName:"tr",align:null},"log file descriptors")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"right"},"-u"),Object(o.b)("td",{parentName:"tr",align:null},"\u53cc\u5411\u6a21\u5f0f - \u7b2c\u4e00\u4e2a\u8bfb\uff0c\u7b2c\u4e8c\u4e2a\u5199")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"right"},"-U"),Object(o.b)("td",{parentName:"tr",align:null},"\u53cc\u5411\u6a21\u5f0f - \u7b2c\u4e00\u4e2a\u5199\uff0c\u7b2c\u4e8c\u4e2a\u8bfb")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"right"},"-4"),Object(o.b)("td",{parentName:"tr",align:null},"IPv4")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"right"},"-6"),Object(o.b)("td",{parentName:"tr",align:null},"IPv6")))),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"address type"),Object(o.b)("th",{parentName:"tr",align:null},"short"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"tcp-connect"),Object(o.b)("td",{parentName:"tr",align:null},"tcp")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"tcp-listen"),Object(o.b)("td",{parentName:"tr",align:null},"tcp-l")))))}p.isMDXComponent=!0}}]);