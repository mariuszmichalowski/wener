(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{77:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(8),c=(t(0),t(836)),a={title:"strongSwan Cookbook"},s={unversionedId:"service/network/strongswan-cookbook",id:"service/network/strongswan-cookbook",isDocsHomePage:!1,title:"strongSwan Cookbook",description:"* strongSwan swanctl Tests",source:"@site/notes/service/network/strongswan-cookbook.md",slug:"/service/network/strongswan-cookbook",permalink:"/notes/service/network/strongswan-cookbook",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/network/strongswan-cookbook.md",version:"current",sidebar:"docs",previous:{title:"strongSwan \u914d\u7f6e",permalink:"/notes/service/network/strongswan-conf"},next:{title:"strongSwan FAQ",permalink:"/notes/service/network/strongswan-faq"}},i=[{value:"\u57fa\u7840 ipsec.conf",id:"\u57fa\u7840-ipsecconf",children:[{value:"\u57fa\u7840 swanctl.conf",id:"\u57fa\u7840-swanctlconf",children:[]}]}],l={toc:i};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://www.strongswan.org/testing/testresults/swanctl/"},"strongSwan swanctl Tests"))),Object(c.b)("h2",{id:"\u57fa\u7840-ipsecconf"},"\u57fa\u7840 ipsec.conf"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ini"},"config setup\n    # strictcrlpolicy=yes\n    uniqueids = no\n\nconn %default\n    ikelifetime=60m\n    keylife=20m\n    rekeymargin=3m\n    keyingtries=1\n    keyexchange=ikev2\n    authby=secret\n\nconn vpn\n  left=%any\n  leftsourceip=%config\n  # \u8fdc\u7a0b\u5730\u5740\n  right=1.2.3.4\n  rightsubnet=0.0.0.0/0\n  type=tunnel\n  auto=start\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"ipsec.secrets")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},'# \u5bc6\u94a5\n: PSK "12345678"\n')),Object(c.b)("h3",{id:"\u57fa\u7840-swanctlconf"},"\u57fa\u7840 swanctl.conf"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'connections {\n    vpn {\n        include /etc/swanctl/conf.d/ike_sa_default.conf\n        remote_addrs=1.2.3.4\n        local_addrs=%any\n        vips=0.0.0.0\n        children {\n            vpn {\n                include /etc/swanctl/conf.d/child_sa_default.conf\n                start_action=start\n                remote_ts=0.0.0.0/0\n            }\n        }\n    remote {\n      id="vpn"\n      auth=psk\n    }\n    local {\n      id="vpn"\n      auth=psk\n    }\n    }\n}\npools {\n}\nauthorities {\n}\nsecrets {\n    ike- {\n    id="vpn"\n        secret="12345678"\n    }\n}\n')))}p.isMDXComponent=!0},836:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(t),b=r,d=u["".concat(a,".").concat(b)]||u[b]||f[b]||c;return t?o.a.createElement(d,s(s({ref:n},l),{},{components:t})):o.a.createElement(d,s({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,a=new Array(c);a[0]=b;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<c;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);