(window.webpackJsonp=window.webpackJsonp||[]).push([[675],{1152:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(n),d=r,m=l["".concat(i,".").concat(d)]||l[d]||b[d]||a;return n?o.a.createElement(m,s(s({ref:t},u),{},{components:n})):o.a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},749:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(8),a=(n(0),n(1152)),i={title:"krew"},s={unversionedId:"devops/kubernetes/tool/krew",id:"devops/kubernetes/tool/krew",isDocsHomePage:!1,title:"krew",description:"Tips",source:"@site/notes/devops/kubernetes/tool/krew.md",slug:"/devops/kubernetes/tool/krew",permalink:"/notes/devops/kubernetes/tool/krew",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/tool/krew.md",version:"current",sidebar:"docs",previous:{title:"RKE - \u5b89\u88c5\u5668",permalink:"/notes/devops/kubernetes/ops/rke"},next:{title:"kustomize",permalink:"/notes/devops/kubernetes/tool/kustomize"}},c=[{value:"Tips",id:"tips",children:[]}],u={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"tips"},"Tips"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://krew.sigs.k8s.io/docs/user-guide/setup/install/"},"\u5b89\u88c5")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://sigs.k8s.io/krew-index/plugins.md"},"https://sigs.k8s.io/krew-index/plugins.md"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'# \u5b89\u88c5\n(\n  set -x; cd "$(mktemp -d)" &&\n  curl -fsSLO "https://github.com/kubernetes-sigs/krew/releases/latest/download/krew.{tar.gz,yaml}" &&\n  tar zxvf krew.tar.gz &&\n  KREW=./krew-"$(uname | tr \'[:upper:]\' \'[:lower:]\')_amd64" &&\n  "$KREW" install --manifest=krew.yaml --archive=krew.tar.gz &&\n  "$KREW" update\n)\n\n# \u9ed8\u8ba4\u76ee\u5f55 ~/.krew/bin/\nexport PATH="${KREW_ROOT:-$HOME/.krew}/bin:$PATH"\n\nkubectl krew update\nkubectl krew search whoami\nkubectl krew install whoami\n\nkubectl whoami\nkubectl krew upgrade\n\n# \u670d\u52a1\u7ba1\u7406\nkubectl krew install ingress-nginx\n\n# popeye - \u626b\u63cf\u96c6\u7fa4\u8d44\u6e90\u95ee\u9898\n# doctor - \u626b\u63cf\u96c6\u7fa4\u5f02\u5e38\n# access-matrix - \u6743\u9650\u68c0\u67e5 - https://github.com/corneliusweig/rakkess\n# ctx ns - \u4e0a\u4e0b\u6587\u548c\u7a7a\u95f4\u5207\u6362 - \u7c7b\u4f3c kubectx\n# tree - \u67e5\u770b\u8d44\u6e90\u5c42\u7ea7\n# konfig - \u5408\u5e76\u6216\u5206\u5272\u914d\u7f6e\n# oidc-login\n# outdated\n# rbac-lookup rbac-view\n# sniff - Start a remote packet capture on pods using tcpdump and wireshark\n# tail - multiple pods and containers using simple, dynamic source selection.\n# view-secret\n')))}p.isMDXComponent=!0}}]);