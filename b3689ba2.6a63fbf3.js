(window.webpackJsonp=window.webpackJsonp||[]).push([[775],{1152:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),b=r,d=s["".concat(a,".").concat(b)]||s[b]||f[b]||i;return n?o.a.createElement(d,c(c({ref:t},p),{},{components:n})):o.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},848:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(8),i=(n(0),n(1152)),a={id:"ifconfig",title:"ifconfig"},c={unversionedId:"ops/network/tool/ifconfig",id:"ops/network/tool/ifconfig",isDocsHomePage:!1,title:"ifconfig",description:"Tips",source:"@site/notes/ops/network/tool/ifconfig.md",slug:"/ops/network/tool/ifconfig",permalink:"/notes/ops/network/tool/ifconfig",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/network/tool/ifconfig.md",version:"current",sidebar:"docs",previous:{title:"Bonding",permalink:"/notes/ops/network/tool/bonding"},next:{title:"mDNS \u670d\u52a1\u5b9a\u4e49",permalink:"/notes/ops/network/mdns-service"}},l=[{value:"Tips",id:"tips",children:[]},{value:"\u591a\u7f51\u5361\u914d\u7f6e",id:"\u591a\u7f51\u5361\u914d\u7f6e",children:[]}],p={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# \u5224\u65ad\u8def\u7531\u4f1a\u600e\u4e48\u8d70\nip route get 192.168.8.135 from 192.168.8.140\n\nsysctl net.ipv4.ip_forward\n\nip rule add from <source>/<mask> table <name>\nip route add 1.2.3.4/24 via <router> dev eth4 table <name>\n# http://wiki.wlug.org.nz/SourceBasedRouting\n# http://lartc.org/howto/lartc.rpdb.html\n\necho 200 isp2 >> /etc/iproute2/rt_tables\nip rule add from <interface_IP> dev <interface> table isp2\nip route add default via <gateway_IP> dev <interface> table isp2\n\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"socat \u53ef\u4ee5\u6307\u5b9a interface, nc \u4e0d\u53ef\u4ee5"),Object(i.b)("li",{parentName:"ul"},"socat \u5728\u5404\u4e2a\u5e73\u53f0\u4e0b\u7edf\u4e00, nc \u6709\u517c\u5bb9\u95ee\u9898")),Object(i.b)("h2",{id:"\u591a\u7f51\u5361\u914d\u7f6e"},"\u591a\u7f51\u5361\u914d\u7f6e"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.hi-linux.com/posts/64963.html"},"https://www.hi-linux.com/posts/64963.html")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://wiki.archlinux.org/index.php/Network_configuration"},"Network configuration"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://wiki.archlinux.org/index.php/Network_configuration_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)"},"\u7b80\u4f53\u4e2d\u6587"))))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# \u5f53\u524d\u8def\u7531\u72b6\u6001\nip route show\n# main \u8868\u4e2d\u7684\u8def\u7531\nip route list table main\n\n# Linux \u652f\u6301 256 \u5f20\u8def\u7531\u8868\n# \u5f53\u524d\u8def\u7531\u8868\u522b\u540d\ncat /etc/iproute2/rt_tables\n\n# \u7b80\u5355\u7684\u8ba9\u4e00\u4e2a ip \u8d70\u5355\u4e2a\u7f51\u5361\n# \u5982\u679c\u6709\u591a\u7f51\u5361\u65f6\u53ef\u4ee5\u5229\u7528\nip route add default via 192.168.1.120 dev eth1 table 120\nip rule add from 192.168.1.120 table 120\n")))}u.isMDXComponent=!0}}]);