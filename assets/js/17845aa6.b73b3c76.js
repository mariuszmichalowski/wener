"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[93695],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),o=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=o(n),k=a,N=m["".concat(u,".").concat(k)]||m[k]||s[k]||i;return n?r.createElement(N,l(l({ref:t},c),{},{components:n})):r.createElement(N,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68761:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return o},toc:function(){return c},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],p={id:"ipsec",title:"IPSec"},u=void 0,o={unversionedId:"service/network/ipsec",id:"service/network/ipsec",title:"IPSec",description:"Tips",source:"@site/notes/service/network/ipsec.md",sourceDirName:"service/network",slug:"/service/network/ipsec",permalink:"/notes/service/network/ipsec",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/network/ipsec.md",tags:[],version:"current",frontMatter:{id:"ipsec",title:"IPSec"},sidebar:"docs",previous:{title:"inlets \u901a\u9053",permalink:"/notes/service/network/inlets"},next:{title:"MitmProxy",permalink:"/notes/service/network/mitmproxy"}},c=[{value:"Tips",id:"tips",children:[],level:2},{value:"\u6982\u5ff5",id:"\u6982\u5ff5",children:[],level:2},{value:"Opportunistic IPsec",id:"opportunistic-ipsec",children:[],level:2}],s={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e00\u5957\u534f\u8bae\u800c\u4e0d\u662f\u5355\u4e2a\u534f\u8bae"),(0,i.kt)("li",{parentName:"ul"},"\u52a0\u5bc6\u6570\u636e"),(0,i.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1\u6765\u6e90"),(0,i.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1\u6570\u636e\u5b8c\u6574\u6027"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/IPsec"},"IPsec")," - Internet Protocol Security"),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.usenix.org/sites/default/files/conference/protected-files/srecon16europe_slides_garcia.pdf"},"Full-mesh IPsec network"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ntop/n2n"},"n2n")," \u8fc1\u79fb IPSec"),(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u4f7f\u7528 ipsec-tools/racoon"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://docs.ruckuswireless.com/fastiron/08.0.80/fastiron-08080-securityguide/GUID-0F5E2C64-B9B8-4900-A446-F44FBEA493C1.html"},"IPSec over NAT")),(0,i.kt)("li",{parentName:"ul"},"RHEL 8 ",(0,i.kt)("a",{parentName:"li",href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/securing_networks/configuring-a-vpn-with-ipsec_securing-networks"},"CONFIGURING A VPN WITH IPSEC")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://backreference.org/2014/11/12/on-the-fly-ipsec-vpn-with-iproute2/"},"\u201cOn the fly\u201d IPsec VPN with iproute2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.unixwiz.net/techtips/iguide-ipsec.html"},"http://www.unixwiz.net/techtips/iguide-ipsec.html"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# ip xfrm\n# =========\n# http://man7.org/linux/man-pages/man8/ip-xfrm.8.html\n# \u5f53\u524d\u7684 SPDB\nip xfrm policy\n# \u5f53\u524d\u7684 SADB\nip xfrm state\n# \u76d1\u63a7 SADB \u548c SPDB \u53d8\u66f4\nip xfrm monitor\n# \u5220\u9664\u6240\u6709 SADB\nip xfrm state flush\n\n# \u5185\u6838\u7684 xfrm \u7edf\u8ba1\u4fe1\u606f\n# https://www.kernel.org/doc/Documentation/networking/xfrm_proc.txt\ncat /proc/net/xfrm_stat\n")),(0,i.kt)("h2",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e00\u7ec4\u534f\u8bae - \u5f00\u653e\u6807\u51c6"),(0,i.kt)("li",{parentName:"ul"},"\u6838\u5fc3\u80fd\u529b",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6570\u636e\u52a0\u5bc6"),(0,i.kt)("li",{parentName:"ul"},"\u6570\u636e\u6765\u6e90\u9a8c\u8bc1"),(0,i.kt)("li",{parentName:"ul"},"\u6570\u636e\u5b8c\u6574\u6027"))),(0,i.kt)("li",{parentName:"ul"},"\u7279\u6027",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5185\u6838\u52a0\u5bc6 - \u901f\u5ea6\u5feb"),(0,i.kt)("li",{parentName:"ul"},"\u52a0\u5bc6\u5f3a\u5ea6\u8f83\u9ad8"),(0,i.kt)("li",{parentName:"ul"},"\u5f00\u653e\u534f\u8bae"))),(0,i.kt)("li",{parentName:"ul"},"\u534f\u8bae\u65b9\u5f0f",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"AH - Authentication Header - \u6570\u636e\u5b8c\u6574\u6027\u548c\u6765\u6e90\u6821\u9a8c"),(0,i.kt)("li",{parentName:"ul"},"ESP - Encapsulating Security Payload - \u6570\u636e\u52a0\u5bc6"),(0,i.kt)("li",{parentName:"ul"},"AH+ESP"))),(0,i.kt)("li",{parentName:"ul"},"SP - Security Policy - \u5b89\u5168\u7b56\u7565",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u5728 SPD - Security Policy Database"),(0,i.kt)("li",{parentName:"ul"},"\u7531\u5185\u6838\u4f7f\u7528\uff0c\u8868\u8ff0\u5982\u4e0b\u8bed\u4e49",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4ece A \u5230 B \u4f7f\u7528 ESP \u7684\u4f20\u8f93\u6a21\u5f0f"),(0,i.kt)("li",{parentName:"ul"},"\u4ece C \u5230 D \u7684 443 \u7aef\u53e3\u4e0d\u4f7f\u7528 IPSec"))))),(0,i.kt)("li",{parentName:"ul"},"SPD - Security Policy Database - \u5b89\u5168\u7b56\u7565\u6570\u636e\u5e93",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5b9a\u4e49 SA \u8def\u7531 - \u5305 \u5339\u914d \u5f97\u51fa\u76ee\u6807 SA"))),(0,i.kt)("li",{parentName:"ul"},"SA - Security Association - \u5b89\u5168\u5173\u7cfb",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5355\u5411\u7684\u70b9\u4e4b\u95f4\u5b89\u5168\u914d\u7f6e"),(0,i.kt)("li",{parentName:"ul"},"\u5305\u542b\u70b9\u7684\u57fa\u672c\u4fe1\u606f"),(0,i.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u5728 SAD"),(0,i.kt)("li",{parentName:"ul"},"wikipedia ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Security_association"},"SA")))),(0,i.kt)("li",{parentName:"ul"},"IKE - Internet Key Exchange",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u534f\u5546\u7528\u4e8e\u5efa\u7acb\u5b89\u5168\u901a\u9053\u7684\u7b97\u6cd5\u548c\u5bc6\u94a5"),(0,i.kt)("li",{parentName:"ul"},"\u534f\u5546\u5b8c\u6210\u540e\u7684\u4fe1\u606f\u8bb0\u5f55\u4e3a SA"))),(0,i.kt)("li",{parentName:"ul"},"\u5de5\u4f5c\u65b9\u5f0f",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u901a\u9053\u6a21\u5f0f"),(0,i.kt)("li",{parentName:"ul"},"\u4f20\u8f93\u6a21\u5f0f - transport")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5de5\u4f5c\u6a21\u5f0f")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u6a21\u5f0f\\\u65b9\u5f0f"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5c01\u88c5\u6d88\u606f\u5934"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5c01\u88c5\u6d88\u606f\u4f53"),(0,i.kt)("th",{parentName:"tr",align:null},"\u4e3b\u673a\u5bf9\u4e3b\u673a"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7ad9\u70b9\u5bf9\u7ad9\u70b9"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u901a\u9053\u6a21\u5f0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u4f20\u8f93\u6a21\u5f0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u4f20\u8f93\u6a21\u5f0f\u914d\u7f6e\u66f4\u7b80\u5355\uff0c\u6027\u80fd\u66f4\u597d")),(0,i.kt)("h2",{id:"opportunistic-ipsec"},"Opportunistic IPsec"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"libreswan HowTo ",(0,i.kt)("a",{parentName:"li",href:"https://libreswan.org/wiki/HOWTO:_Opportunistic_IPsec"},"Opportunistic IPsec")),(0,i.kt)("li",{parentName:"ul"},"\u5927\u91cf\u8282\u70b9\u4f7f\u7528\u76f8\u540c\u7684\u914d\u7f6e\u6765\u90e8\u7f72 IPsec - \u6dfb\u52a0\u8282\u70b9\u4e0d\u9700\u8981\u4ece\u65b0\u914d\u7f6e\u73b0\u6709\u8282\u70b9"),(0,i.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u7528\u4e8e\u4f01\u4e1a\u6216\u4e91\u90e8\u7f72"),(0,i.kt)("li",{parentName:"ul"},"\u4e5f\u53eb Mesh Encryption / ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Opportunistic_encryption"},"Opportunistic encryption")),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/cn/about-aws/whats-new/2019/05/new-quick-start-deploys-opportunistic-ipsec-mesh-on-aws/"},"Quick Start: \u5728 AWS \u4e91\u4e0a\u90e8\u7f72\u673a\u4f1a\u6027 IPsec \u7f51\u683c")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://events17.linuxfoundation.org/sites/events/files/slides/LinuxSecuritySummit-2016-OE-16x9.pdf"},"OPPORTUNISTIC ENCRYPTION USING IPSEC"))))))}m.isMDXComponent=!0}}]);