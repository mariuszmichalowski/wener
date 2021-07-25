(window.webpackJsonp=window.webpackJsonp||[]).push([[616],{1169:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),s=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=s.a.createContext({}),l=function(e){var n=s.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=l(e.components);return s.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return s.a.createElement(s.a.Fragment,{},n)}},g=s.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),b=l(t),g=r,m=b["".concat(o,".").concat(g)]||b[g]||p[g]||a;return t?s.a.createElement(m,i(i({ref:n},c),{},{components:t})):s.a.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=g;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<a;c++)o[c]=t[c];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},690:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return l}));var r=t(3),s=t(8),a=(t(0),t(1169)),o={title:"Nginx Ingress \u5e38\u89c1\u95ee\u9898"},i={unversionedId:"devops/kubernetes/network/nginx-ingress-faq",id:"devops/kubernetes/network/nginx-ingress-faq",isDocsHomePage:!1,title:"Nginx Ingress \u5e38\u89c1\u95ee\u9898",description:"\u6cdb\u57df\u540d Host \u8def\u7531",source:"@site/notes/devops/kubernetes/network/nginx-ingress-faq.md",slug:"/devops/kubernetes/network/nginx-ingress-faq",permalink:"/notes/devops/kubernetes/network/nginx-ingress-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/network/nginx-ingress-faq.md",version:"current",sidebar:"docs",previous:{title:"MetalLB",permalink:"/notes/devops/kubernetes/network/metallb"},next:{title:"Nginx Ingress",permalink:"/notes/devops/kubernetes/network/nginx-ingress"}},u=[{value:"\u6cdb\u57df\u540d Host \u8def\u7531",id:"\u6cdb\u57df\u540d-host-\u8def\u7531",children:[]},{value:"SSL Passthrough",id:"ssl-passthrough",children:[]},{value:"HTTPS SNI \u8def\u7531",id:"https-sni-\u8def\u7531",children:[]}],c={toc:u};function l(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u6cdb\u57df\u540d-host-\u8def\u7531"},"\u6cdb\u57df\u540d Host \u8def\u7531"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301")),Object(a.b)("h2",{id:"ssl-passthrough"},"SSL Passthrough"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5173\u95ed - ",Object(a.b)("inlineCode",{parentName:"li"},"--enable-ssl-passthrough")),Object(a.b)("li",{parentName:"ul"},"\u901a\u8fc7\u62e6\u622a 443 \u7aef\u53e3\u5230\u672c\u5730 TCP \u4ee3\u7406, bypass NGINX, \u6027\u80fd\u5f71\u54cd\u5f88\u5927",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u672c\u5730\u4ee3\u7406\u7aef\u53e3 442"),Object(a.b)("li",{parentName:"ul"},"\u5982\u679c hostname \u672a\u88ab\u5904\u7406\u5219\u53c8\u4ea4\u7531 NGINX \u5904\u7406"))),Object(a.b)("li",{parentName:"ul"},"\u900f\u4f20\u662f\u53d1\u9001\u5230 service \u800c\u4e0d\u662f\u72ec\u7acb\u7684 endpoint"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/kubernetes/ingress-nginx/issues/5686"},"#5686")," - \u53ef\u80fd\u5f00\u542f\u4e86\u4e5f\u4e0d\u751f\u6548")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"# HELM values\ncontroller:\n  extraArgs:\n    enable-ssl-passthrough: true\n")),Object(a.b)("h2",{id:"https-sni-\u8def\u7531"},"HTTPS SNI \u8def\u7531"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"# \u76f8\u5173\u914d\u7f6e\n# https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#backend-certificate-authentication\nannotations:\n  # \u4fee\u6539 SNI\n  nginx.ingress.kubernetes.io/proxy-ssl-name: wener.me\n  nginx.ingress.kubernetes.io/proxy-ssl-protocols: HTTPS\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/kubernetes/kubernetes/issues/19333"},"kubernetes/kubernetes#19333")," - HTTPS Ingress controller for SNI based routing"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#ssl-passthrough"}))))))}l.isMDXComponent=!0}}]);