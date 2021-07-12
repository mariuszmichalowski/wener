(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1129:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),b=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=b(a),u=n,d=p["".concat(c,".").concat(u)]||p[u]||m[u]||s;return a?r.a.createElement(d,l(l({ref:t},o),{},{components:a})):r.a.createElement(d,l({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,c=new Array(s);c[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var o=2;o<s;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},94:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(8),s=(a(0),a(1129)),c={title:"sealed-secrets"},l={unversionedId:"devops/kubernetes/app/sealed-secrets",id:"devops/kubernetes/app/sealed-secrets",isDocsHomePage:!1,title:"sealed-secrets",description:"- \u6ce8\u610f",source:"@site/notes/devops/kubernetes/app/sealed-secrets.md",slug:"/devops/kubernetes/app/sealed-secrets",permalink:"/notes/devops/kubernetes/app/sealed-secrets",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/app/sealed-secrets.md",version:"current",sidebar:"docs",previous:{title:"MinIO Kubernetes Operator",permalink:"/notes/devops/kubernetes/app/minio-operator"},next:{title:"zalando/postgres-operator",permalink:"/notes/devops/kubernetes/app/zalando-postgres-operator"}},i=[{value:"already exists and is not managed by SealedSecret",id:"already-exists-and-is-not-managed-by-sealedsecret",children:[]},{value:"\u5220\u9664 secret \u91cd\u5efa",id:"\u5220\u9664-secret-\u91cd\u5efa",children:[]}],o={toc:i};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"SealdSecret \u662f\u7ed1\u5b9a namespace\uff0ckubeseal \u7684\u65f6\u5019\u6307\u5b9a\u6216\u539f secret \u5305\u542b\uff0c\u4e0d\u53ef\u4fee\u6539",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"\u6216\u8005\u6307\u5b9a ",Object(s.b)("inlineCode",{parentName:"li"},'sealedsecrets.bitnami.com/cluster-wide": "true"')," \u96c6\u7fa4\u5185\u53ef\u7528"))))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/helm/charts/tree/master/stable/sealed-secrets"},"stable/sealed-secrets")),Object(s.b)("li",{parentName:"ul"},"\u6a21\u5f0f",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"strict - \u9ed8\u8ba4 - \u540d\u5b57\u548c namespace \u5339\u914d"),Object(s.b)("li",{parentName:"ul"},"namespace-wide - \u76f8\u540c namespace \u5185\u53ef\u4fee\u6539 name"),Object(s.b)("li",{parentName:"ul"},"cluster-wide - \u53ef\u4fee\u6539 namespace \u548c name")))),Object(s.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("ul",{parentName:"div"},Object(s.b)("li",{parentName:"ul"},"\u5982\u679c\u4e00\u4e2a yaml \u5305\u542b\u591a\u4e2a secret \u53ea\u6709\u7b2c\u4e00\u4e2a\u4f1a seal - ",Object(s.b)("a",{parentName:"li",href:"https://github.com/bitnami-labs/sealed-secrets/issues/114"},"#114")),Object(s.b)("li",{parentName:"ul"},"\u5220\u9664 secret \u4e0d\u4f1a\u91cd\u5efa - ",Object(s.b)("a",{parentName:"li",href:"https://github.com/bitnami-labs/sealed-secrets/issues/224"},"bitnami-labs/sealed-secrets#224"))))),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"# \u96c6\u7fa4\u5b89\u88c5\n# \u67e5\u770b\u7248\u672c https://github.com/bitnami-labs/sealed-secrets/releases\nkubectl apply -f https://github.com/bitnami-labs/sealed-secrets/releases/download/v0.13.1/controller.yaml\n\nbrew install kubeseal\n\n# \u6b63\u5e38 secret\necho -n bar | kubectl create secret generic mysecret --dry-run=client --from-file=foo=/dev/stdin -o json >mysecret.json\n# seal\nkubeseal <mysecret.json >mysealedsecret.json\n# \u521b\u5efa seal\nkubectl create -f mysealedsecret.json\n# \u751f\u6210 secret\nkubectl get secret mysecret\n\n# \u9650\u5b9a\u8303\u56f4\nkubeseal --scope cluster-wide <secret.yaml >sealed-secret.json\n\n# \u5907\u4efd master.key - \u6062\u590d\u5219\u53ef\u4ee5\u4f7f\u5f97\u4e4b\u524d\u7684\u52a0\u5bc6\u6570\u636e\u751f\u6548\nkubectl get secret -n kube-system -l sealedsecrets.bitnami.com/sealed-secrets-key -o yaml >master.key\n\n# \u6062\u590d master.key\nkubectl apply -f master.key\n# \u751f\u6548\nkubectl delete pod -n kube-system -l name=sealed-secrets-controller\n\n# \u79bb\u7ebf\u89e3\u5bc6\nkubeseal --recovery-unseal --recovery-private-key file1.key\n")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"annotations:\n  # \u96c6\u7fa4\u5185\u53ef\u89e3\u5bc6 - \u4e0d\u7ed1\u5b9a namespace\n  sealedsecrets.bitnami.com/cluster-wide\": 'true'\n  # \u4e0d\u7ed1\u5b9a name\n  sealedsecrets.bitnami.com/namespace-wide: 'true'\n")),Object(s.b)("h1",{id:"faq"},"FAQ"),Object(s.b)("h2",{id:"already-exists-and-is-not-managed-by-sealedsecret"},"already exists and is not managed by SealedSecret"),Object(s.b)("p",null,"\u5b58\u5728\u4e8e\u5c06 secret \u8fc1\u79fb\u4e3a sealed-secrets \u7684\u60c5\u51b5"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/bitnami-labs/sealed-secrets/issues/288"},"bitnami-labs/sealed-secrets#288"))),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"annotations:\n  # \u8bc6\u522b\u65b9\u5f0f\n  sealedsecrets.bitnami.com/managed: 'true'\n")),Object(s.b)("h2",{id:"\u5220\u9664-secret-\u91cd\u5efa"},"\u5220\u9664 secret \u91cd\u5efa"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"\u76ee\u524d\u4e0d\u652f\u6301"),Object(s.b)("li",{parentName:"ul"},"\u91cd\u542f controller \u53ef\u4ee5 - \u4f46\u662f sealedsecrets \u591a\u7684\u65f6\u5019\u975e\u5e38\u6162",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"\u5355\u4e2a\u4e00\u822c 0.7 - 1.2s")))),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/bitnami-labs/sealed-secrets/issues/224"},"bitnami-labs/sealed-secrets#224"))))}b.isMDXComponent=!0}}]);