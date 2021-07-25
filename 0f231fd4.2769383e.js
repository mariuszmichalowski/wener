(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{1166:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=r,f=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return t?a.a.createElement(f,c(c({ref:n},p),{},{components:t})):a.a.createElement(f,c({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},136:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(8),i=(t(0),t(1166)),o={title:"strongSwan FAQ"},c={unversionedId:"service/network/strongswan-faq",id:"service/network/strongswan-faq",isDocsHomePage:!1,title:"strongSwan FAQ",description:"no IDi configured, fall back on IP address",source:"@site/notes/service/network/strongswan-faq.md",slug:"/service/network/strongswan-faq",permalink:"/notes/service/network/strongswan-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/network/strongswan-faq.md",version:"current",sidebar:"docs",previous:{title:"strongSwan Cookbook",permalink:"/notes/service/network/strongswan-cookbook"},next:{title:"strongSwan",permalink:"/notes/service/network/strongswan"}},s=[{value:"no IDi configured, fall back on IP address",id:"no-idi-configured-fall-back-on-ip-address",children:[]},{value:"ipsec.conf \u81ea\u52a8\u91cd\u8fde",id:"ipsecconf-\u81ea\u52a8\u91cd\u8fde",children:[]},{value:"peer didn&#39;t accept DH group ECP_256, it requested MODP_2048",id:"peer-didnt-accept-dh-group-ecp_256-it-requested-modp_2048",children:[]},{value:"giving up after 5 retransmits",id:"giving-up-after-5-retransmits",children:[]},{value:"virtual ip \u603b\u662f\u8fd4\u56de\u540c\u4e00\u4e2a",id:"virtual-ip-\u603b\u662f\u8fd4\u56de\u540c\u4e00\u4e2a",children:[]},{value:"\u591a\u4e2a\u5ba2\u6237\u7aef\u8bbf\u95ee\u4f1a\u6389",id:"\u591a\u4e2a\u5ba2\u6237\u7aef\u8bbf\u95ee\u4f1a\u6389",children:[]}],p={toc:s};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"no-idi-configured-fall-back-on-ip-address"},"no IDi configured, fall back on IP address"),Object(i.b)("h2",{id:"ipsecconf-\u81ea\u52a8\u91cd\u8fde"},"ipsec.conf \u81ea\u52a8\u91cd\u8fde"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ini"},"# \u542f\u52a8\u81ea\u52a8\u542f\u52a8\nauto=start\n\ndpdaction=restart\ncloseaction=restart\nkeyingtries=%forever\n")),Object(i.b)("h2",{id:"peer-didnt-accept-dh-group-ecp_256-it-requested-modp_2048"},"peer didn't accept DH group ECP_256, it requested MODP_2048"),Object(i.b)("p",null,"\u6ce8\u610f\u9009\u62e9 cipher suit, \u5982\u679c\u670d\u52a1\u7aef\u4e0d\u652f\u6301\u5219\u4f1a\u51fa\u73b0\u8be5\u5f02\u5e38"),Object(i.b)("p",null,"ipsec \u4f7f\u7528 aes128-sha256 AES_CBC_128/HMAC_SHA1_96, \u4f46 swanctl \u4e0d\u4f1a\u4f18\u5148\u5c1d\u8bd5\u3002"),Object(i.b)("p",null,"\u4e4b\u540e\u4f1a\u4ece\u65b0\u9009\u62e9"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"selected proposal: IKE:AES_CBC_128/HMAC_SHA1_96/PRF_HMAC_SHA1/MODP_2048\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"ipsec.conf \u914d\u7f6e esp \u6216\u8005 ah"),Object(i.b)("li",{parentName:"ul"},"swanctl.conf \u914d\u7f6e esp_proposal")),Object(i.b)("h2",{id:"giving-up-after-5-retransmits"},"giving up after 5 retransmits"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"12[IKE] establishing IKE_SA failed, peer not responding\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"ipsec.conf")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ini"},"dpdaction=restart\nretransmit_tries=5\n# default 3\nkeyingtries=%forever\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"swanctl.conf")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"connections {\n  conn {\n    # default 1\n    keyingtries=0\n    children {\n      child {\n        dpd_action=start\n      }\n    }\n  }\n}\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://wiki.strongswan.org/issues/2665"},"https://wiki.strongswan.org/issues/2665"))))),Object(i.b)("h2",{id:"virtual-ip-\u603b\u662f\u8fd4\u56de\u540c\u4e00\u4e2a"},"virtual ip \u603b\u662f\u8fd4\u56de\u540c\u4e00\u4e2a"),Object(i.b)("p",null,"\u4fee\u6539 id \u4f1a\u8fd4\u56de\u4e0d\u540c ip"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"connections {\n  vpn {\n    remote {\n      id=vpnx\n      auth=psk\n    }\n    local {\n      # \u4f7f\u7528\u4e0d\u540c ID\n      id=vpnx\n      auth=psk\n    }\n  }\n")),Object(i.b)("h2",{id:"\u591a\u4e2a\u5ba2\u6237\u7aef\u8bbf\u95ee\u4f1a\u6389"},"\u591a\u4e2a\u5ba2\u6237\u7aef\u8bbf\u95ee\u4f1a\u6389"),Object(i.b)("p",null,"\u68c0\u67e5\u662f\u4e0d\u662f id \u76f8\u540c\uff0c\u83b7\u53d6\u5230\u7684 vip \u76f8\u540c\uff0c\u5bfc\u81f4\u4e00\u4e2a\u4e0a\u53e6\u5916\u4e00\u4e2a\u4f1a\u88ab\u6324\u4e0b\u53bb\u3002"))}l.isMDXComponent=!0}}]);