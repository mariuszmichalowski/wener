"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[51826],{3905:function(e,n,t){t.d(n,{Zo:function(){return i},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},i=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||s;return t?r.createElement(f,o(o({ref:n},i),{},{components:t})):r.createElement(f,o({ref:n},i))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<s;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},92126:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return i},default:function(){return m}});var r=t(87462),a=t(63366),s=(t(67294),t(3905)),o=["components"],l={id:"k8s-consul",title:"Consol"},c=void 0,u={unversionedId:"devops/kubernetes/app/k8s-consul",id:"devops/kubernetes/app/k8s-consul",title:"Consol",description:"Tips",source:"@site/notes/devops/kubernetes/app/k8s-consul.md",sourceDirName:"devops/kubernetes/app",slug:"/devops/kubernetes/app/k8s-consul",permalink:"/notes/devops/kubernetes/app/k8s-consul",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/app/k8s-consul.md",tags:[],version:"current",frontMatter:{id:"k8s-consul",title:"Consol"},sidebar:"docs",previous:{title:"Kubernetest Application FAQ",permalink:"/notes/devops/kubernetes/app/k8s-app-faq"},next:{title:"Minio",permalink:"/notes/devops/kubernetes/app/k8s-minio"}},i=[{value:"Tips",id:"tips",children:[],level:2},{value:"DNS",id:"dns",children:[],level:2},{value:"ACL",id:"acl",children:[],level:2}],p={toc:i};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"tips"},"Tips"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/hashicorp/consul-k8s"},"Consul K8S")," \u4f7f\u7528\u573a\u666f",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u90e8\u7f72 Consul \u96c6\u7fa4\u670d\u52a1"),(0,s.kt)("li",{parentName:"ul"},"\u5141\u8bb8 Consol \u5ba2\u6237\u7aef\u6253\u901a\u670d\u52a1"),(0,s.kt)("li",{parentName:"ul"},"Connect Service Mesh"),(0,s.kt)("li",{parentName:"ul"},"\u540c\u6b65 K8S \u670d\u52a1\u5230 Consul"))),(0,s.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u4f9d\u8d56 PV \u5b58\u50a8"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.consul.io/docs/k8s"},"\u6587\u6863"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'helm repo add hashicorp https://helm.releases.hashicorp.com\n\n# \u9ed8\u8ba4\u90e8\u7f72    server client dns ui\n# \u9ed8\u8ba4\u4e0d\u90e8\u7f72 tls acl federation externalService snapshotAgent syncCatalog \n#   connectInject centralConfig meshGateway ingressGateways terminatingGateways\n# \u9ed8\u8ba4 datacenter \u4e3a dc1\n# \u5b89\u88c5\u5230 service \u7a7a\u95f4\n# --set server.affinity=null \u5141\u8bb8\u5b89\u88c5\u5230\u5355\u673a\n# server.storageClass \u4fee\u6539\u5b58\u50a8\u7c7b\u578b\nhelm install consul hashicorp/consul \\\n  -n consul --create-namespace \\\n  --set global.name=consul --set global.datacenter=center\n\n# \u8f6c\u53d1 UI\n# \u9ed8\u8ba4\u6ca1\u6709 tls \u548c acl\nkubectl port-forward -n consul svc/consul-server 8500:8500\n# \u5982\u679c\u542f\u7528\u4e86 ACL\nkubectl get -n consul secrets/consul-bootstrap-acl-token --template={{.data.token}} | base64 -d\n\n# \u8bbf\u95ee consul\n# \u6bcf\u4e2a\u8282\u70b9\u90fd\u6709 agent \u56e0\u6b64\u76f4\u63a5\u4f7f\u7528 HOST_IP \u5373\u53ef\nexport CONSUL_HTTP_ADDR="${HOST_IP}:8500"\nconsul kv put hello world\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"env:\n- name: ADVERTISE_IP\n  valueFrom:\n    fieldRef:\n      fieldPath: status.podIP\n- name: NAMESPACE\n  valueFrom:\n    fieldRef:\n      fieldPath: metadata.namespace\n- name: NODE\n  valueFrom:\n    fieldRef:\n      fieldPath: status.nodeName\n- name: HOST_IP\n  valueFrom:\n    fieldRef:\n      fieldPath: status.hostIP\n- name: CONSUL_HTTP_ADDR\n  value: $(HOST_IP):8500\n")),(0,s.kt)("h2",{id:"dns"},"DNS"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'\n# KubeDNS\n# ==========\nCONSUL_DNS_IP=$(kubectl get svc consul-dns -o jsonpath=\'{.spec.clusterIP}\' -n service)\ncat <<EOF | kubectl apply -f -\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  labels:\n    addonmanager.kubernetes.io/mode: EnsureExists\n  name: kube-dns\n  namespace: kube-system\ndata:\n  stubDomains: |\n    {"consul": ["$CONSUL_DNS_IP"]}\nEOF\n\nkubectl get configmap kube-dns -n kube-system -o yaml\n\n# CoreDNS\n# ==========\nkubectl edit configmap coredns -n kube-system\n# Corefile: |\n#   consul {\n#     errors\n#     cache 30\n#     forward . <consul-dns-service-cluster-ip>\n#   }\n\n# \u6d4b\u8bd5\u89e3\u6790\nkubectl run --rm -i -t dns-test --image=wener/base --restart=Never -- nslookup consul.service.consul\n')),(0,s.kt)("h2",{id:"acl"},"ACL"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.consul.io/docs/security/acl/auth-methods/kubernetes"},"Kubernetes Auth Method"))))}m.isMDXComponent=!0}}]);