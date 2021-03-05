(window.webpackJsonp=window.webpackJsonp||[]).push([[631],{691:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(7),c=(n(0),n(771)),l={id:"cert-manager",title:"Cert Manager"},s={unversionedId:"devops/kubernetes/app/cert-manager",id:"devops/kubernetes/app/cert-manager",isDocsHomePage:!1,title:"Cert Manager",description:"cert-manager",source:"@site/notes/devops/kubernetes/app/cert-manager.md",slug:"/devops/kubernetes/app/cert-manager",permalink:"/notes/devops/kubernetes/app/cert-manager",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/app/cert-manager.md",version:"current",sidebar:"docs",previous:{title:"Argo Workflow",permalink:"/notes/devops/kubernetes/app/argo-workflow"},next:{title:"FleetCD",permalink:"/notes/devops/kubernetes/app/fleet"}},i=[{value:"Tips",id:"tips",children:[]},{value:"Ingress",id:"ingress",children:[]},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[]},{value:"ACME",id:"acme",children:[]}],o={rightToc:i};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"cert-manager"},"cert-manager"),Object(c.b)("h2",{id:"tips"},"Tips"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u81ea\u9881\u53d1 CA \u8bc1\u4e66\u7ba1\u7406"),Object(c.b)("li",{parentName:"ul"},"ACME \u81ea\u52a8\u8bc1\u4e66\u7533\u8bf7"),Object(c.b)("li",{parentName:"ul"},"\u5916\u90e8\u8bc1\u4e66\u7ba1\u7406\u96c6\u6210"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/jetstack/cert-manager"}),"jetstack/cert-manager")),Object(c.b)("li",{parentName:"ul"},"crds - \u81ea\u5b9a\u4e49\u8d44\u6e90",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"issuers.cert-manager.io"),Object(c.b)("li",{parentName:"ul"},"orders.acme.cert-manager.io"),Object(c.b)("li",{parentName:"ul"},"certificaterequests.cert-manager.io"),Object(c.b)("li",{parentName:"ul"},"certificates.cert-manager.io"),Object(c.b)("li",{parentName:"ul"},"challenges.acme.cert-manager.io"),Object(c.b)("li",{parentName:"ul"},"clusterissuers.cert-manager.io"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://cert-manager.io/docs/configuration/"}),"\u914d\u7f6e")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://cert-manager.io/docs/usage/ingress/"}),"Ingress")),Object(c.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"DNS01 \u652f\u6301\u7684 Provider \u975e\u5e38\u5c11 - \u548c LEGO \u76f8\u6bd4",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"ACMEDNS"),Object(c.b)("li",{parentName:"ul"},"Akamai"),Object(c.b)("li",{parentName:"ul"},"AzureDNS"),Object(c.b)("li",{parentName:"ul"},"CloudFlare"),Object(c.b)("li",{parentName:"ul"},"DigitalOcean"),Object(c.b)("li",{parentName:"ul"},"Google CloudDNS"),Object(c.b)("li",{parentName:"ul"},"RFC-2136"),Object(c.b)("li",{parentName:"ul"},"Route53"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://cert-manager.io/docs/configuration/acme/dns01/webhook/"}),"Webhook"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/pragkent/alidns-webhook"}),"pragkent/alidns-webhook"))))))))),Object(c.b)("h2",{id:"ingress"},"Ingress"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://cert-manager.io/docs/usage/ingress/#supported-annotations"}),"Supported Annotations"))),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"annotation"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"desc"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"cert-manager.io/issuer"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Issuser")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"cert-manager.io/cluster-issuer"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ClusterIssuer")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"cert-manager.io/issuer-kind"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5916\u90e8 Issuers")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"cert-manager.io/issuer-group"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5916\u90e8 Issuers")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'kubernetes.io/tls-acme: "true"'),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5982\u679c\u5b89\u88c5\u65f6\u8bbe\u7f6e\u4e86 ",Object(c.b)("inlineCode",{parentName:"td"},"ingressShim.defaultIssuer")," \u5219\u4f1a\u4f7f\u7528\u9ed8\u8ba4 Issuser")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"acme.cert-manager.io/http01-ingress-class"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u7528\u4e8e resolve \u7684 Ingress")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"acme.cert-manager.io/http01-edit-in-place:"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u521b\u5efa\u65b0\u7684 Ingress \u914d\u7f6e\u8fd8\u662f\u4fee\u6539\u73b0\u6709\u7684 Ingress\uff0c\u4f1a\u8bbe\u7f6e ",Object(c.b)("inlineCode",{parentName:"td"},'"cert-manager.io/issue-temporary-certificate": "true"')," \u7528\u4e8e\u533a\u5206")))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: extensions/v1beta1\nkind: Ingress\nmetadata:\n  name: kuard\n  annotations:\n    kubernetes.io/ingress.class: 'nginx'\n    # \u53ef\u76f4\u63a5\u4f7f\u7528\u6307\u5b9a\u7684 issuser\n    cert-manager.io/issuer: 'letsencrypt-staging'\n\nspec:\n  tls:\n    - hosts:\n        - example.example.com\n      secretName: quickstart-example-tls\n  rules:\n    - host: example.example.com\n      http:\n        paths:\n          - path: /\n            backend:\n              serviceName: kuard\n              servicePort: 80\n")),Object(c.b)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"ver=$(curl -Ls https://api.github.com/repos/jetstack/cert-manager/releases/latest | jq -r .tag_name)\n# \u5b89\u88c5\u81ea\u5b9a\u4e49\u8d44\u6e90\ncurl -sfLO https://github.com/jetstack/cert-manager/releases/download/$ver/cert-manager.crds.yaml\nkubectl apply -f cert-manager.crds.yaml\n\n# \u521b\u5efa NS\nkubectl create namespace cert-manager\n\n# Helm \u5b89\u88c5\nhelm repo add jetstack https://charts.jetstack.io\nhelm repo update\n\nhelm install \\\n  cert-manager jetstack/cert-manager \\\n  --namespace cert-manager \\\n  --version $ver\n\n# Helm \u5b89\u88c5 - \u901a\u8fc7\u955c\u50cf\nhelm repo add wener https://charts.wener.tech\nhelm repo update\n\ncat <<YAML > cert-manager.values.yaml\nimage:\n  repository: registry.cn-hongkong.aliyuncs.com/cmi/jetstack_cert-manager-controller\nwebhook:\n  image:\n    repository: registry.cn-hongkong.aliyuncs.com/cmi/jetstack_cert-manager-webhook\ncainjector:\n  image:\n    repository: registry.cn-hongkong.aliyuncs.com/cmi/jetstack_cert-manager-cainjector\ninstallCRDs: true\n# \u7248\u672c\u76f8\u5173\nextraArgs:\n  - --acme-http01-solver-image=registry.cn-hongkong.aliyuncs.com/cmi/jetstack_cert-manager-acmesolver:$ver\nYAML\n\nhelm install \\\n  cert-manager wener/cert-manager \\\n  --namespace cert-manager --create-namespace \\\n  --version $ver -f cert-manager.values.yaml\n\n# \u67e5\u770b\u5b89\u88c5\u72b6\u6001\nkubectl -n cert-manager rollout status deploy/cert-manager\n# \u9a8c\u8bc1\u5b89\u88c5\nkubectl -n cert-manager get deploy\n")),Object(c.b)("h2",{id:"acme"},"ACME"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Cloudflare \u63a5\u53e3 Token \u7684 Secret\napiVersion: v1\nkind: Secret\nmetadata:\n  name: cloudflare-api-token-secret\ntype: Opaque\nstringData:\n  api-token: <API Token>\n\n---\n# Cloudflare \u63a5\u53e3 Key \u7684 Secret\napiVersion: v1\nkind: Secret\nmetadata:\n  name: cloudflare-api-key-secret\ntype: Opaque\nstringData:\n  api-key: <API Key>\n\n---\n# letsencrypt staging \u73af\u5883\napiVersion: cert-manager.io/v1alpha2\nkind: ClusterIssuer\nmetadata:\n  name: letsencrypt-staging\n  namespace: default\nspec:\n  acme:\n    server: https://acme-staging-v02.api.letsencrypt.org/directory\n    # \u751f\u4ea7\u5730\u5740\n    # server: https://acme-v02.api.letsencrypt.org/directory\n    # \u8d26\u53f7\n    email: user@example.com\n    # \u5b58\u50a8 ACME \u8d26\u53f7\u79c1\u94a5\u7684 secret \u540d\u5b57\n    privateKeySecretRef:\n      name: letsencrypt-staging\n\n    # DNS-01\n    solvers:\n      # selector \u4e3a\u7a7a\u5339\u914d\u6240\u6709\u57df\u540d\n      - selector: {}\n        dns01:\n          clouddns:\n            # The ID of the GCP project\n            # reference: https://docs.cert-manager.io/en/latest/tasks/issuers/setup-acme/dns01/google.html\n            project: $PROJECT_ID\n            # This is the secret used to access the service account\n            serviceAccountSecretRef:\n              name: clouddns-dns01-solver-svc-acct\n              key: key.json\n\n      # \u4e3a foo.com \u4f7f\u7528\u8be5 provider\n      # \u8fd8\u53ef\u4ee5\u4f7f\u7528 matchLabels \u548c dnsZones\n      - selector:\n          dnsNames:\n            - foo.com\n        dns01:\n          cloudflare:\n            email: my-cloudflare-acc@example.com\n            # \u9700\u8981\u5148\u521b\u5efa secret\n            # kubectl create secret generic cloudflare-api-key-secret\n            # CF \u652f\u6301 API Token \u548c API Key\n            apiKeySecretRef:\n              name: cloudflare-api-key-secret\n              key: api-key\n")))}b.isMDXComponent=!0},771:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),b=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,g=p["".concat(l,".").concat(u)]||p[u]||m[u]||c;return n?r.a.createElement(g,s(s({ref:t},o),{},{components:n})):r.a.createElement(g,s({ref:t},o))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var o=2;o<c;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);