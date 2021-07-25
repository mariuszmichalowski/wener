(window.webpackJsonp=window.webpackJsonp||[]).push([[962],{1035:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return m}));var a=t(3),r=t(8),c=(t(0),t(1169)),s={id:"cert-manager",title:"Cert Manager"},l={unversionedId:"devops/kubernetes/app/cert-manager",id:"devops/kubernetes/app/cert-manager",isDocsHomePage:!1,title:"Cert Manager",description:"cert-manager",source:"@site/notes/devops/kubernetes/app/cert-manager.md",slug:"/devops/kubernetes/app/cert-manager",permalink:"/notes/devops/kubernetes/app/cert-manager",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/app/cert-manager.md",version:"current",sidebar:"docs",previous:{title:"ArgoCD Notifications",permalink:"/notes/devops/kubernetes/app/argocd-notifications"},next:{title:"external-secrets",permalink:"/notes/devops/kubernetes/app/external-secrets"}},i=[{value:"Ingress",id:"ingress",children:[]},{value:"Certificate",id:"certificate",children:[]},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[]},{value:"ACME",id:"acme",children:[]},{value:"account credentials not found for domain",id:"account-credentials-not-found-for-domain",children:[]},{value:"Error creating new order :: Domain name &quot;sub.domain.tld&quot; is redundant with a wildcard domain in the same request",id:"error-creating-new-order--domain-name-subdomaintld-is-redundant-with-a-wildcard-domain-in-the-same-request",children:[]},{value:"\u8bc1\u4e66\u8de8\u7a7a\u95f4",id:"\u8bc1\u4e66\u8de8\u7a7a\u95f4",children:[]},{value:"The request must include a value for the &quot;externalAccountBinding&quot; field",id:"the-request-must-include-a-value-for-the-externalaccountbinding-field",children:[]}],o={toc:i};function m(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"cert-manager"},"cert-manager"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/jetstack/cert-manager"},"jetstack/cert-manager")," \u662f\u4ec0\u4e48\uff1f",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u81ea\u9881\u53d1 CA \u8bc1\u4e66\u7ba1\u7406"),Object(c.b)("li",{parentName:"ul"},"ACME \u81ea\u52a8\u8bc1\u4e66\u7533\u8bf7"),Object(c.b)("li",{parentName:"ul"},"\u5916\u90e8\u8bc1\u4e66\u7ba1\u7406\u96c6\u6210"))),Object(c.b)("li",{parentName:"ul"},"crds - \u81ea\u5b9a\u4e49\u8d44\u6e90",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"issuers.cert-manager.io"),Object(c.b)("li",{parentName:"ul"},"orders.acme.cert-manager.io"),Object(c.b)("li",{parentName:"ul"},"certificaterequests.cert-manager.io"),Object(c.b)("li",{parentName:"ul"},"certificates.cert-manager.io"),Object(c.b)("li",{parentName:"ul"},"challenges.acme.cert-manager.io"),Object(c.b)("li",{parentName:"ul"},"clusterissuers.cert-manager.io"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://cert-manager.io/docs/configuration/"},"\u914d\u7f6e")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://cert-manager.io/docs/usage/ingress/"},"Ingress")),Object(c.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"DNS01 \u652f\u6301\u7684 Provider \u975e\u5e38\u5c11 - \u548c LEGO \u76f8\u6bd4",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"ACMEDNS"),Object(c.b)("li",{parentName:"ul"},"Akamai"),Object(c.b)("li",{parentName:"ul"},"AzureDNS"),Object(c.b)("li",{parentName:"ul"},"CloudFlare"),Object(c.b)("li",{parentName:"ul"},"DigitalOcean"),Object(c.b)("li",{parentName:"ul"},"Google CloudDNS"),Object(c.b)("li",{parentName:"ul"},"RFC-2136"),Object(c.b)("li",{parentName:"ul"},"Route53"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://cert-manager.io/docs/configuration/acme/dns01/webhook/"},"Webhook"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/pragkent/alidns-webhook"},"pragkent/alidns-webhook"))))))))),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("ul",{parentName:"div"},Object(c.b)("li",{parentName:"ul"},"\u5c3d\u91cf\u4e0d\u8981\u521b\u5efa\u76f8\u540c\u8bc1\u4e66 - \u5982\u679c\u9700\u8981\u53ef\u8003\u8651\u540c\u6b65"),Object(c.b)("li",{parentName:"ul"},"DNS01 \u624d\u652f\u6301\u6cdb\u57df\u540d\u8bc1\u4e66 - \u6700\u7b80\u5355\u662f\u4f7f\u7528 ACMEDNS")))),Object(c.b)("h2",{id:"ingress"},"Ingress"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://cert-manager.io/docs/usage/ingress/#supported-annotations"},"Supported Annotations"))),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"annotation"),Object(c.b)("th",{parentName:"tr",align:null},"desc"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"cert-manager.io/issuer"),Object(c.b)("td",{parentName:"tr",align:null},"Issuser")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"cert-manager.io/cluster-issuer"),Object(c.b)("td",{parentName:"tr",align:null},"ClusterIssuer")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"cert-manager.io/issuer-kind"),Object(c.b)("td",{parentName:"tr",align:null},"\u5916\u90e8 Issuers")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"cert-manager.io/issuer-group"),Object(c.b)("td",{parentName:"tr",align:null},"\u5916\u90e8 Issuers")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},'kubernetes.io/tls-acme: "true"'),Object(c.b)("td",{parentName:"tr",align:null},"\u5982\u679c\u5b89\u88c5\u65f6\u8bbe\u7f6e\u4e86 ",Object(c.b)("inlineCode",{parentName:"td"},"ingressShim.defaultIssuer")," \u5219\u4f1a\u4f7f\u7528\u9ed8\u8ba4 Issuser")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"acme.cert-manager.io/http01-ingress-class"),Object(c.b)("td",{parentName:"tr",align:null},"\u7528\u4e8e resolve \u7684 Ingress")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"acme.cert-manager.io/http01-edit-in-place:"),Object(c.b)("td",{parentName:"tr",align:null},"\u521b\u5efa\u65b0\u7684 Ingress \u914d\u7f6e\u8fd8\u662f\u4fee\u6539\u73b0\u6709\u7684 Ingress\uff0c\u4f1a\u8bbe\u7f6e ",Object(c.b)("inlineCode",{parentName:"td"},'"cert-manager.io/issue-temporary-certificate": "true"')," \u7528\u4e8e\u533a\u5206")))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: extensions/v1beta1\nkind: Ingress\nmetadata:\n  name: kuard\n  annotations:\n    kubernetes.io/ingress.class: 'nginx'\n    # \u53ef\u76f4\u63a5\u4f7f\u7528\u6307\u5b9a\u7684 issuser\n    cert-manager.io/issuer: 'letsencrypt-staging'\n\nspec:\n  tls:\n    - hosts:\n        - example.example.com\n      secretName: quickstart-example-tls\n  rules:\n    - host: example.example.com\n      http:\n        paths:\n          - path: /\n            backend:\n              serviceName: kuard\n              servicePort: 80\n")),Object(c.b)("h2",{id:"certificate"},"Certificate"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: cert-manager.io/v1\nkind: Certificate\nmetadata:\n  name: example-com\n  namespace: sandbox\nspec:\n  # Secret names are always required.\n  secretName: example-com-tls\n  duration: 2160h # 90d\n  renewBefore: 360h # 15d\n  subject:\n    organizations:\n    - jetstack\n  # The use of the common name field has been deprecated since 2000 and is\n  # discouraged from being used.\n  commonName: example.com\n  isCA: false\n  privateKey:\n    algorithm: RSA\n    encoding: PKCS1\n    size: 2048\n  usages:\n    - server auth\n    - client auth\n  # At least one of a DNS Name, URI, or IP address is required.\n  dnsNames:\n  - example.com\n  - www.example.com\n  uris:\n  - spiffe://cluster.local/ns/sandbox/sa/example\n  ipAddresses:\n  - 192.168.0.5\n  # Issuer references are always required.\n  issuerRef:\n    name: ca-issuer\n    # We can reference ClusterIssuers by changing the kind here.\n    # The default value is Issuer (i.e. a locally namespaced Issuer)\n    kind: Issuer\n    # This is optional since cert-manager will default to this value however\n    # if you are using an external issuer, change this to that issuer group.\n    group: cert-manager.io\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml"},"# ingress \u751f\u6210\u7684 certificate\nspec:\n  dnsNames:\n    - web.example.com\n  issuerRef:\n    group: cert-manager.io\n    kind: ClusterIssuer\n    name: letsencrypt\n  secretName: web-cert\n  usages:\n    - digital signature\n    - key encipherment\n")),Object(c.b)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"ver=$(curl -Ls https://api.github.com/repos/jetstack/cert-manager/releases/latest | jq -r .tag_name)\n# \u5b89\u88c5\u81ea\u5b9a\u4e49\u8d44\u6e90\ncurl -sfLO https://github.com/jetstack/cert-manager/releases/download/$ver/cert-manager.crds.yaml\nkubectl apply -f cert-manager.crds.yaml\n\n# \u521b\u5efa NS\nkubectl create namespace cert-manager\n\n# Helm \u5b89\u88c5\nhelm repo add jetstack https://charts.jetstack.io\nhelm repo update\n\nhelm install \\\n  cert-manager jetstack/cert-manager \\\n  --namespace cert-manager \\\n  --version $ver\n\n# Helm \u5b89\u88c5 - \u901a\u8fc7\u955c\u50cf\nhelm repo add wener https://charts.wener.tech\nhelm repo update\n\ncat <<YAML > cert-manager.values.yaml\nimage:\n  repository: registry.cn-hongkong.aliyuncs.com/cmi/jetstack_cert-manager-controller\nwebhook:\n  image:\n    repository: registry.cn-hongkong.aliyuncs.com/cmi/jetstack_cert-manager-webhook\ncainjector:\n  image:\n    repository: registry.cn-hongkong.aliyuncs.com/cmi/jetstack_cert-manager-cainjector\ninstallCRDs: true\n# \u7248\u672c\u76f8\u5173\nextraArgs:\n  - --acme-http01-solver-image=registry.cn-hongkong.aliyuncs.com/cmi/jetstack_cert-manager-acmesolver:$ver\nYAML\n\nhelm install \\\n  cert-manager wener/cert-manager \\\n  --namespace cert-manager --create-namespace \\\n  --version $ver -f cert-manager.values.yaml\n\n# \u67e5\u770b\u5b89\u88c5\u72b6\u6001\nkubectl -n cert-manager rollout status deploy/cert-manager\n# \u9a8c\u8bc1\u5b89\u88c5\nkubectl -n cert-manager get deploy\n")),Object(c.b)("h2",{id:"acme"},"ACME"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml"},"# Cloudflare \u63a5\u53e3 Token \u7684 Secret\napiVersion: v1\nkind: Secret\nmetadata:\n  name: cloudflare-api-token-secret\ntype: Opaque\nstringData:\n  api-token: <API Token>\n\n---\n# Cloudflare \u63a5\u53e3 Key \u7684 Secret\napiVersion: v1\nkind: Secret\nmetadata:\n  name: cloudflare-api-key-secret\ntype: Opaque\nstringData:\n  api-key: <API Key>\n\n---\n# letsencrypt staging \u73af\u5883\napiVersion: cert-manager.io/v1alpha2\nkind: ClusterIssuer\nmetadata:\n  name: letsencrypt-staging\n  namespace: default\nspec:\n  acme:\n    server: https://acme-staging-v02.api.letsencrypt.org/directory\n    # \u751f\u4ea7\u5730\u5740\n    # server: https://acme-v02.api.letsencrypt.org/directory\n    # \u8d26\u53f7\n    email: user@example.com\n    # \u5b58\u50a8 ACME \u8d26\u53f7\u79c1\u94a5\u7684 secret \u540d\u5b57\n    privateKeySecretRef:\n      name: letsencrypt-staging\n\n    # DNS-01\n    solvers:\n      # selector \u4e3a\u7a7a\u5339\u914d\u6240\u6709\u57df\u540d\n      - selector: {}\n        dns01:\n          clouddns:\n            # The ID of the GCP project\n            # reference: https://docs.cert-manager.io/en/latest/tasks/issuers/setup-acme/dns01/google.html\n            project: $PROJECT_ID\n            # This is the secret used to access the service account\n            serviceAccountSecretRef:\n              name: clouddns-dns01-solver-svc-acct\n              key: key.json\n\n      # \u4e3a foo.com \u4f7f\u7528\u8be5 provider\n      # \u8fd8\u53ef\u4ee5\u4f7f\u7528 matchLabels \u548c dnsZones\n      - selector:\n          dnsNames:\n            - foo.com\n        dns01:\n          cloudflare:\n            email: my-cloudflare-acc@example.com\n            # \u9700\u8981\u5148\u521b\u5efa secret\n            # kubectl create secret generic cloudflare-api-key-secret\n            # CF \u652f\u6301 API Token \u548c API Key\n            apiKeySecretRef:\n              name: cloudflare-api-key-secret\n              key: api-key\n")),Object(c.b)("h1",{id:"faq"},"FAQ"),Object(c.b)("h2",{id:"account-credentials-not-found-for-domain"},"account credentials not found for domain"),Object(c.b)("p",null,"\u5982\u679c\u662f dns, \u53ef\u80fd\u662f\u57df\u540d\u4e0d\u5339\u914d."),Object(c.b)("p",null,"\u4f8b\u5982 \u7533\u8bf7 sub.domain.tld. \u9700\u8981\u914d\u7f6e\u7684\u662f\u5b50\u57df\u540d, \u4e0d\u4f1a\u81ea\u52a8\u5339\u914d\u6cdb\u57df\u540d, \u4f8b\u5982\u914d\u7f6e\u8fc7 ",Object(c.b)("inlineCode",{parentName:"p"},"_acme_changlle.domain.tld")," \u4e5f\u4e0d\u4f1a\u751f\u6548"),Object(c.b)("h2",{id:"error-creating-new-order--domain-name-subdomaintld-is-redundant-with-a-wildcard-domain-in-the-same-request"},'Error creating new order :: Domain name "sub.domain.tld" is redundant with a wildcard domain in the same request'),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml"},"dnsNames:\n  - domain.tld\n  - '*.domain.tld'\n  # \u4e0d\u80fd\u6dfb\u52a0\u8fd9\u4e2a\u57df\u540d - \u5df2\u7ecf\u88ab\u4e0a\u9762\u8986\u76d6\n  # - sub.domain.tld\n  - '*.sub.domain.tld'\n")),Object(c.b)("h2",{id:"\u8bc1\u4e66\u8de8\u7a7a\u95f4"},"\u8bc1\u4e66\u8de8\u7a7a\u95f4"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\u914d\u7f6e ingress \u8bbe\u7f6e\u9ed8\u8ba4 tls secret, \u7136\u540e\u4e4b\u540e\u7684 ingress \u4e0d\u914d\u7f6e secret")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u4fee\u6539\u8f83\u5927\uff0c\u4e0d\u5efa\u8bae")),Object(c.b)("ol",{start:2},Object(c.b)("li",{parentName:"ol"},"\u540c\u6b65")),Object(c.b)("hr",null),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u76ee\u524d\u65e0\u6cd5\u4fee\u6539 secret annotations - ",Object(c.b)("a",{parentName:"li",href:"https://github.com/jetstack/cert-manager/issues/977"},"#977")),Object(c.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528\u9884\u5148\u5b58\u5728\u7684 secret - \u7136\u540e\u914d\u5408 kubed \u4f7f\u7528",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u5728\u6765\u6e90\u4e0a\u5b9a\u4e49\uff0c\u540c\u6b65\u5230\u76ee\u6807"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/emberstack/kubernetes-reflector"},"emberstack/kubernetes-reflector"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u53ef\u66ff\u4ee3 kubed - \u652f\u6301\u8bc1\u4e66 secret \u540c\u6b65"),Object(c.b)("li",{parentName:"ul"},"\u5148\u5b9a\u4e49\u76ee\u6807\u518d\u5b9a\u4e49\u6765\u6e90")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"kubed")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: default-cert\n  annotations:\n    # \u907f\u514d argocd \u5220\u9664\u548c\u540c\u6b65\n    argocd.argoproj.io/compare-options: IgnoreExtraneous\n    argocd.argoproj.io/sync-options: Prune=false\n    kubed.appscode.com/sync: ''\nstringData:\n  tls.crt: ''\n  tls.key: ''\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"reflector")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: default-cert\n  namespace: another\n  annotations:\n    argocd.argoproj.io/compare-options: IgnoreExtraneous\n    reflector.v1.k8s.emberstack.com/reflects: 'default/default-cert'\ndata: {}\n")),Object(c.b)("p",null,"\u76f4\u63a5\u652f\u6301\u8bc1\u4e66"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: cert-manager.io/v1alpha1\nkind: Certificate\nmetadata:\n  name: default-cert\n  annotations:\n    reflector.v1.k8s.emberstack.com/secret-reflection-allowed: 'true'\n    reflector.v1.k8s.emberstack.com/secret-reflection-allowed-namespaces: 'namespace-1,namespace-2,namespace-[0-9]*'\nspec:\n  secretName: certificate-secret\n")),Object(c.b)("h2",{id:"the-request-must-include-a-value-for-the-externalaccountbinding-field"},'The request must include a value for the "externalAccountBinding" field'),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"zarossl \u9700\u8981 EAB \u5916\u90e8\u8d26\u53f7\u7ed1\u5b9a")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: cert-manager.io/v1\nkind: ClusterIssuer\nmetadata:\n  name: zerossl-prod\nspec:\n  acme:\n    externalAccountBinding:\n      keyAlgorithm: HS256\n      keyID: XXX\n      keySecretRef:\n        key: secret\n        name: zerossl-eabsecret\n    preferredChain: ""\n    privateKeySecretRef:\n      name: zerossl-prod\n    server: https://acme.zerossl.com/v2/DV90\n    solvers:\n    - http01:\n        ingress:\n          class: traefik\n---\napiVersion: v1\nkind: Secret\nmetadata:\n  name: zerossl-eabsecret\n  # \u6ce8\u610f ns\n  namespace: cert-manager\ntype: Opaque\n# stringData:\n#   secret: XXX\ndata:\n  secret: XXX\n')))}m.isMDXComponent=!0},1169:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=r.a.createContext({}),m=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=m(e.components);return r.a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),b=m(t),p=a,d=b["".concat(s,".").concat(p)]||b[p]||u[p]||c;return t?r.a.createElement(d,l(l({ref:n},o),{},{components:t})):r.a.createElement(d,l({ref:n},o))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,s=new Array(c);s[0]=p;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var o=2;o<c;o++)s[o]=t[o];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);