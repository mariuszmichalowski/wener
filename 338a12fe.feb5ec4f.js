(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{1152:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return b}));var t=n(0),o=n.n(t);function s(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){s(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var r=o.a.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},p=function(e){var r=l(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,s=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),f=t,b=p["".concat(a,".").concat(f)]||p[f]||d[f]||s;return n?o.a.createElement(b,c(c({ref:r},u),{},{components:n})):o.a.createElement(b,c({ref:r},u))}));function b(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var s=n.length,a=new Array(s);a[0]=f;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:t,a[1]=c;for(var u=2;u<s;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},293:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return a})),n.d(r,"metadata",(function(){return c})),n.d(r,"toc",(function(){return i})),n.d(r,"default",(function(){return l}));var t=n(3),o=n(8),s=(n(0),n(1152)),a={title:"res_resolver_unbound"},c={unversionedId:"voip/asterisk/res_resolver_unbound",id:"voip/asterisk/res_resolver_unbound",isDocsHomePage:!1,title:"res_resolver_unbound",description:"- \u5b9e\u73b0 astdnsresolver",source:"@site/notes/voip/asterisk/res_resolver_unbound.md",slug:"/voip/asterisk/res_resolver_unbound",permalink:"/notes/voip/asterisk/res_resolver_unbound",editUrl:"https://github.com/wenerme/wener/edit/master/notes/voip/asterisk/res_resolver_unbound.md",version:"current",sidebar:"docs",previous:{title:"res_http",permalink:"/notes/voip/asterisk/res_http"},next:{title:"res_sorcery",permalink:"/notes/voip/asterisk/res_sorcery"}},i=[{value:"resolver_unbound.conf",id:"resolver_unboundconf",children:[]}],u={toc:i};function l(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(t.a)({},u,n,{components:r,mdxType:"MDXLayout"}),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"\u5b9e\u73b0 ast_dns_resolver")),Object(s.b)("h2",{id:"resolver_unboundconf"},"resolver_unbound.conf"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-conf"},"[general]\n; \u9ed8\u8ba4 system\n;hosts = /etc/hosts\n; \u9ed8\u8ba4 system\n;resolv = /etc/resolv.conf\n; \u53ef\u6307\u5b9a\u591a\u6b21\uff0c\u7b2c\u4e00\u4e2a\u4e3a\u4e3b\u8981\n;nameserver = 127.0.0.1\n;debug = 99\n; DNSSEC trusted anchors key\n;ta_file = /etc/asterisk/dnssec_keys\n")))}l.isMDXComponent=!0}}]);