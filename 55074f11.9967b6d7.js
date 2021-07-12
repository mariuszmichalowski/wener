(window.webpackJsonp=window.webpackJsonp||[]).push([[360],{1129:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),f=r,m=s["".concat(i,".").concat(f)]||s[f]||b[f]||a;return t?o.a.createElement(m,c(c({ref:n},p),{},{components:t})):o.a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},434:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(8),a=(t(0),t(1129)),i={title:"NFTables Cookbook"},c={unversionedId:"os/linux/network/nftables-cookbook",id:"os/linux/network/nftables-cookbook",isDocsHomePage:!1,title:"NFTables Cookbook",description:"- \u53c2\u8003",source:"@site/notes/os/linux/network/nftables-cookbook.md",slug:"/os/linux/network/nftables-cookbook",permalink:"/notes/os/linux/network/nftables-cookbook",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/network/nftables-cookbook.md",version:"current",sidebar:"docs",previous:{title:"\u7f51\u7edc\u5e38\u89c1\u95ee\u9898",permalink:"/notes/os/linux/network/network-faq"},next:{title:"nftables \u89c4\u5219",permalink:"/notes/os/linux/network/nftables-rule"}},l=[{value:"\u9632\u706b\u5899\u529f\u80fd",id:"\u9632\u706b\u5899\u529f\u80fd",children:[]},{value:"\u57fa\u7840 NAT \u529f\u80fd",id:"\u57fa\u7840-nat-\u529f\u80fd",children:[]}],p={toc:l};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://wiki.nftables.org/wiki-nftables/index.php/Quick_reference-nftables_in_10_minutes"},"Quick reference-nftables in 10 minutes")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://wiki.gentoo.org/wiki/Nftables/Examples"},"Nftables/Examples")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://wiki.nftables.org/wiki-nftables/index.php/Performing_Network_Address_Translation_(NAT)"},"Performing Network Address Translation (NAT)"))))),Object(a.b)("h2",{id:"\u9632\u706b\u5899\u529f\u80fd"},"\u9632\u706b\u5899\u529f\u80fd"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-nft"},'table ip filter {\n  # \u5141\u8bb8\u672c\u5730\u8bf7\u6c42\n    chain output {\n        type filter hook output priority 100; policy accept;\n    }\n\n  # \u5141\u8bb8\u5c40\u57df\u7f51\u5230 fw\uff0c\u4e0d\u5141\u8bb8 WAN \u5230 fw\n    chain input {\n        type filter hook input priority 0; policy accept;\n        iifname "lan0" accept\n        iifname "wan0" drop\n    }\n\n  # \u5141\u8bb8 LAN \u8bf7\u6c42 WAN - \u5141\u8bb8 WAN \u56de\u5e94 LAN \u8bf7\u6c42\n    chain forward {\n        type filter hook forward priority 0; policy drop;\n        iifname "lan0" oifname "wan0" accept\n        iifname "wan0" oifname "lan0" ct state related,established accept\n    }\n}\n')),Object(a.b)("h2",{id:"\u57fa\u7840-nat-\u529f\u80fd"},"\u57fa\u7840 NAT \u529f\u80fd"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'table ip nat {\n    chain prerouting {\n        type nat hook prerouting priority 0; policy accept;\n    }\n\n  # \u4ece WAN \u51fa\u7684\u5305\uff0c\u5728\u7ed3\u675f\u8def\u7531\u540e\u66ff\u6362 \u6765\u6e90\u5730\u5740 \u4e3a wan0 \u7684\u4e3b\u8981\u5730\u5740\n    chain postrouting {\n        type nat hook postrouting priority 100; policy accept;\n        oifname "wan0" masquerade\n    }\n}\n')))}u.isMDXComponent=!0}}]);