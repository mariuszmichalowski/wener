(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),i=(n(0),n(836)),l={id:"ipsec",title:"IPSec"},c={unversionedId:"service/network/ipsec",id:"service/network/ipsec",isDocsHomePage:!1,title:"IPSec",description:"Tips",source:"@site/notes/service/network/ipsec.md",slug:"/service/network/ipsec",permalink:"/notes/service/network/ipsec",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/network/ipsec.md",version:"current",sidebar:"docs",previous:{title:"inlets \u901a\u9053",permalink:"/notes/service/network/inlets"},next:{title:"nebula",permalink:"/notes/service/network/nebula"}},b=[{value:"Tips",id:"tips",children:[]},{value:"\u6982\u5ff5",id:"\u6982\u5ff5",children:[]},{value:"Opportunistic IPsec",id:"opportunistic-ipsec",children:[]}],p={toc:b};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u4e00\u5957\u534f\u8bae\u800c\u4e0d\u662f\u5355\u4e2a\u534f\u8bae"),Object(i.b)("li",{parentName:"ul"},"\u52a0\u5bc6\u6570\u636e"),Object(i.b)("li",{parentName:"ul"},"\u9a8c\u8bc1\u6765\u6e90"),Object(i.b)("li",{parentName:"ul"},"\u9a8c\u8bc1\u6570\u636e\u5b8c\u6574\u6027"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/IPsec"},"IPsec")," - Internet Protocol Security"),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.usenix.org/sites/default/files/conference/protected-files/srecon16europe_slides_garcia.pdf"},"Full-mesh IPsec network"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/ntop/n2n"},"n2n")," \u8fc1\u79fb IPSec"),Object(i.b)("li",{parentName:"ul"},"\u4e0d\u8981\u4f7f\u7528 ipsec-tools/racoon"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://docs.ruckuswireless.com/fastiron/08.0.80/fastiron-08080-securityguide/GUID-0F5E2C64-B9B8-4900-A446-F44FBEA493C1.html"},"IPSec over NAT")),Object(i.b)("li",{parentName:"ul"},"RHEL 8 ",Object(i.b)("a",{parentName:"li",href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/securing_networks/configuring-a-vpn-with-ipsec_securing-networks"},"CONFIGURING A VPN WITH IPSEC")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://backreference.org/2014/11/12/on-the-fly-ipsec-vpn-with-iproute2/"},"\u201cOn the fly\u201d IPsec VPN with iproute2")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://www.unixwiz.net/techtips/iguide-ipsec.html"},"http://www.unixwiz.net/techtips/iguide-ipsec.html"))))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# ip xfrm\n# =========\n# http://man7.org/linux/man-pages/man8/ip-xfrm.8.html\n# \u5f53\u524d\u7684 SPDB\nip xfrm policy\n# \u5f53\u524d\u7684 SADB\nip xfrm state\n# \u76d1\u63a7 SADB \u548c SPDB \u53d8\u66f4\nip xfrm monitor\n# \u5220\u9664\u6240\u6709 SADB\nip xfrm state flush\n\n# \u5185\u6838\u7684 xfrm \u7edf\u8ba1\u4fe1\u606f\n# https://www.kernel.org/doc/Documentation/networking/xfrm_proc.txt\ncat /proc/net/xfrm_stat\n")),Object(i.b)("h2",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u4e00\u7ec4\u534f\u8bae - \u5f00\u653e\u6807\u51c6"),Object(i.b)("li",{parentName:"ul"},"\u6838\u5fc3\u80fd\u529b",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6570\u636e\u52a0\u5bc6"),Object(i.b)("li",{parentName:"ul"},"\u6570\u636e\u6765\u6e90\u9a8c\u8bc1"),Object(i.b)("li",{parentName:"ul"},"\u6570\u636e\u5b8c\u6574\u6027"))),Object(i.b)("li",{parentName:"ul"},"\u7279\u6027",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5185\u6838\u52a0\u5bc6 - \u901f\u5ea6\u5feb"),Object(i.b)("li",{parentName:"ul"},"\u52a0\u5bc6\u5f3a\u5ea6\u8f83\u9ad8"),Object(i.b)("li",{parentName:"ul"},"\u5f00\u653e\u534f\u8bae"))),Object(i.b)("li",{parentName:"ul"},"\u534f\u8bae\u65b9\u5f0f",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"AH - Authentication Header - \u6570\u636e\u5b8c\u6574\u6027\u548c\u6765\u6e90\u6821\u9a8c"),Object(i.b)("li",{parentName:"ul"},"ESP - Encapsulating Security Payload - \u6570\u636e\u52a0\u5bc6"),Object(i.b)("li",{parentName:"ul"},"AH+ESP"))),Object(i.b)("li",{parentName:"ul"},"SP - Security Policy - \u5b89\u5168\u7b56\u7565",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5b58\u50a8\u5728 SPD - Security Policy Database"),Object(i.b)("li",{parentName:"ul"},"\u7531\u5185\u6838\u4f7f\u7528\uff0c\u8868\u8ff0\u5982\u4e0b\u8bed\u4e49",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4ece A \u5230 B \u4f7f\u7528 ESP \u7684\u4f20\u8f93\u6a21\u5f0f"),Object(i.b)("li",{parentName:"ul"},"\u4ece C \u5230 D \u7684 443 \u7aef\u53e3\u4e0d\u4f7f\u7528 IPSec"))))),Object(i.b)("li",{parentName:"ul"},"SPD - Security Policy Database - \u5b89\u5168\u7b56\u7565\u6570\u636e\u5e93",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5b9a\u4e49 SA \u8def\u7531 - \u5305 \u5339\u914d \u5f97\u51fa\u76ee\u6807 SA"))),Object(i.b)("li",{parentName:"ul"},"SA - Security Association - \u5b89\u5168\u5173\u7cfb",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5355\u5411\u7684\u70b9\u4e4b\u95f4\u5b89\u5168\u914d\u7f6e"),Object(i.b)("li",{parentName:"ul"},"\u5305\u542b\u70b9\u7684\u57fa\u672c\u4fe1\u606f"),Object(i.b)("li",{parentName:"ul"},"\u5b58\u50a8\u5728 SAD"),Object(i.b)("li",{parentName:"ul"},"wikipedia ",Object(i.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Security_association"},"SA")))),Object(i.b)("li",{parentName:"ul"},"IKE - Internet Key Exchange",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u534f\u5546\u7528\u4e8e\u5efa\u7acb\u5b89\u5168\u901a\u9053\u7684\u7b97\u6cd5\u548c\u5bc6\u94a5"),Object(i.b)("li",{parentName:"ul"},"\u534f\u5546\u5b8c\u6210\u540e\u7684\u4fe1\u606f\u8bb0\u5f55\u4e3a SA"))),Object(i.b)("li",{parentName:"ul"},"\u5de5\u4f5c\u65b9\u5f0f",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u901a\u9053\u6a21\u5f0f"),Object(i.b)("li",{parentName:"ul"},"\u4f20\u8f93\u6a21\u5f0f - transport")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u5de5\u4f5c\u6a21\u5f0f")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"\u6a21\u5f0f\\\u65b9\u5f0f"),Object(i.b)("th",{parentName:"tr",align:null},"\u5c01\u88c5\u6d88\u606f\u5934"),Object(i.b)("th",{parentName:"tr",align:null},"\u5c01\u88c5\u6d88\u606f\u4f53"),Object(i.b)("th",{parentName:"tr",align:null},"\u4e3b\u673a\u5bf9\u4e3b\u673a"),Object(i.b)("th",{parentName:"tr",align:null},"\u7ad9\u70b9\u5bf9\u7ad9\u70b9"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"\u901a\u9053\u6a21\u5f0f"),Object(i.b)("td",{parentName:"tr",align:null},"\u2705"),Object(i.b)("td",{parentName:"tr",align:null},"\u2705"),Object(i.b)("td",{parentName:"tr",align:null},"\u2705"),Object(i.b)("td",{parentName:"tr",align:null},"\u2705")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"\u4f20\u8f93\u6a21\u5f0f"),Object(i.b)("td",{parentName:"tr",align:null},"\u274c"),Object(i.b)("td",{parentName:"tr",align:null},"\u2705"),Object(i.b)("td",{parentName:"tr",align:null},"\u2705"),Object(i.b)("td",{parentName:"tr",align:null},"\u274c")))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u4f20\u8f93\u6a21\u5f0f\u914d\u7f6e\u66f4\u7b80\u5355\uff0c\u6027\u80fd\u66f4\u597d")),Object(i.b)("h2",{id:"opportunistic-ipsec"},"Opportunistic IPsec"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"libreswan HowTo ",Object(i.b)("a",{parentName:"li",href:"https://libreswan.org/wiki/HOWTO:_Opportunistic_IPsec"},"Opportunistic IPsec")),Object(i.b)("li",{parentName:"ul"},"\u5927\u91cf\u8282\u70b9\u4f7f\u7528\u76f8\u540c\u7684\u914d\u7f6e\u6765\u90e8\u7f72 IPsec - \u6dfb\u52a0\u8282\u70b9\u4e0d\u9700\u8981\u4ece\u65b0\u914d\u7f6e\u73b0\u6709\u8282\u70b9"),Object(i.b)("li",{parentName:"ul"},"\u4e3b\u8981\u7528\u4e8e\u4f01\u4e1a\u6216\u4e91\u90e8\u7f72"),Object(i.b)("li",{parentName:"ul"},"\u4e5f\u53eb Mesh Encryption / ",Object(i.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Opportunistic_encryption"},"Opportunistic encryption")),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://aws.amazon.com/cn/about-aws/whats-new/2019/05/new-quick-start-deploys-opportunistic-ipsec-mesh-on-aws/"},"Quick Start: \u5728 AWS \u4e91\u4e0a\u90e8\u7f72\u673a\u4f1a\u6027 IPsec \u7f51\u683c")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://events17.linuxfoundation.org/sites/events/files/slides/LinuxSecuritySummit-2016-OE-16x9.pdf"},"OPPORTUNISTIC ENCRYPTION USING IPSEC"))))))}u.isMDXComponent=!0},836:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},o=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),o=u(n),m=r,O=o["".concat(l,".").concat(m)]||o[m]||s[m]||i;return n?a.a.createElement(O,c(c({ref:t},p),{},{components:n})):a.a.createElement(O,c({ref:t},p))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var p=2;p<i;p++)l[p]=n[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);