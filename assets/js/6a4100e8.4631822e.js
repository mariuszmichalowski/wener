"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[48505],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return f}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,k=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return r?t.createElement(k,i(i({ref:n},u),{},{components:r})):t.createElement(k,i({ref:n},u))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},96401:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var t=r(22122),a=r(19756),o=(r(67294),r(3905)),i=["components"],s={title:"K3S \u914d\u7f6e"},l=void 0,c={unversionedId:"devops/kubernetes/distro/k3s-conf",id:"devops/kubernetes/distro/k3s-conf",isDocsHomePage:!1,title:"K3S \u914d\u7f6e",description:"- \u81ea v1.19 \u652f\u6301 yaml \u914d\u7f6e",source:"@site/notes/devops/kubernetes/distro/k3s-conf.md",sourceDirName:"devops/kubernetes/distro",slug:"/devops/kubernetes/distro/k3s-conf",permalink:"/notes/devops/kubernetes/distro/k3s-conf",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/distro/k3s-conf.md",version:"current",frontMatter:{title:"K3S \u914d\u7f6e"},sidebar:"docs",previous:{title:"K3S in Docker",permalink:"/notes/devops/kubernetes/distro/k3d"},next:{title:"K3S Cookbook",permalink:"/notes/devops/kubernetes/distro/k3s-cookbook"}},u=[{value:"registries.yaml",id:"registriesyaml",children:[]},{value:"config.yaml",id:"configyaml",children:[{value:"server",id:"server",children:[]},{value:"agent",id:"agent",children:[]}]}],d={toc:u};function p(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u81ea v1.19 \u652f\u6301 yaml \u914d\u7f6e"),(0,o.kt)("li",{parentName:"ul"},"/etc/rancher/k3s/config.yaml - K3S_CONFIG_FILE, --config, -c",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"yaml \u914d\u7f6e"),(0,o.kt)("li",{parentName:"ul"},"\u53c2\u6570\u57fa\u672c\u4e0e\u547d\u4ee4\u884c\u53c2\u6570\u4e00\u81f4"))),(0,o.kt)("li",{parentName:"ul"},"/etc/rancher/k3s/k3s.yaml - KUBECONFIG"),(0,o.kt)("li",{parentName:"ul"},"/etc/rancher/k3s/registries.yaml - \u5bb9\u5668\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e")),(0,o.kt)("h2",{id:"registriesyaml"},"registries.yaml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'mirrors:\n  # \u9488\u5bf9 docker.io \u7684\u955c\u50cf\u4ed3\u5e93\n  docker.io:\n    endpoint:\n      - https://fogjl973.mirror.aliyuncs.com\n      - https://8x40wsit.mirror.aliyuncs.com\n      - https://docker.mirrors.ustc.edu.cn\n      - https://registry-1.docker.io\n# \u79c1\u6709\u4ed3\u5e93\u8fd8\u9700\u8981\u914d\u7f6e\u8ba4\u8bc1\u4fe1\u606f\n# configs:\n#   # \u6dfb\u52a0\u6388\u6743\u548c\u8bc1\u4e66\n#   "mycustomreg:5000":\n#     auth:\n#       username: xxxxxx\n#       password: xxxxxx\n#     tls:\n#       cert_file:\n#       key_file:\n#       ca_file:\n')),(0,o.kt)("h2",{id:"configyaml"},"config.yaml"),(0,o.kt)("h3",{id:"server"},"server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u6570\u636e\u5e93\u914d\u7f6e\ndatastore-endpoint:\n# TLS \u8fde\u63a5 - \u6bd4\u5982 PG\ndatastore-cafile:\ndatastore-certfile:\ndatastore-keyfile:\n\n# \u52a0\u5165 server \u548c agent\ntoken:\ntoken-file:\n\n# \u5199\u5165 kubeconfig\nwrite-kubeconfig: /etc/rancher/k3s/k3s.yml\nwrite-kubeconfig-mode: '0644'\n\n# Agent \u914d\u7f6e - server \u4e5f\u4f1a\u8fd0\u884c agent\uff0c\u914d\u7f6e\u540c agent \u914d\u7f6e\n#\n\n# \u76d1\u542c\u914d\u7f6e\nbind-address: 0.0.0.0\nhttps-listen-port: 6443\nadvertise-address: #node-external-ip/node-ip\nadvertise-port:\n# \u5982\u679c\u5e0c\u671b\u8bc1\u4e66\u5728\u67d0\u4e2a\u57df\u540d\u4e0b\u53ef\u4f7f\u7528\u5219\u9700\u8981\u6dfb\u52a0 SAN\ntls-san:\n\n# \u5982\u679c\u975e ROOT ${HOME}/.rancher/k3s\ndata-dir: /var/lib/rancher/k3s\n\n# \u7f51\u7edc\ncluster-cidr: 10.42.0.0/16\nservice-cidr: 10.43.0.0/16\n# CoreDNS\ncluster-dns: 10.43.0.10\ncluster-domain: cluster.local\n# none,vxlan,ipsec,host-gw,wireguard\nflannel-backend: vxlan\n\n# \u81ea\u5b9a\u4e49\nkube-apiserver-arg:\nkube-scheduler-arg:\nkube-controller-manager-arg:\nkube-cloud-controller-manager-arg:\n\nkubelet-arg:\nkube-proxy-arg:\n\n# \u9ed8\u8ba4\u672c\u5730\u57fa\u4e8e path \u7684 sc \u5b58\u50a8\u8def\u5f84\ndefault-local-storage-path:\n\n# \u7ec4\u4ef6\n# coredns, servicelb, traefik, local-storage, metrics-server\ndisable:\n  - servicelb\n  - traefik\ndisable-scheduler: false\ndisable-cloud-controller: false\ndisable-network-policy: false\n\n# \u5b9e\u9a8c\u9636\u6bb5\nrootless: false\nagent-token:\nagent-token-file:\nserver:\n\n# --cluster-init\n# --cluster-reset\n\n# Secret encryption at rest\nsecrets-encryption: false\n")),(0,o.kt)("h3",{id:"agent"},"agent"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/installation/install-options/agent-config/"},"K3s Agent Configuration Reference"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"token: value\ntoken-file: k3s-agent.token\nserver: value\n\ndata-dir: /var/lib/rancher/k3s\n\n# Note\nnode-name: hostname\n# with-node-id: true\n# node-label\n# node-taint\n\n# Runtime\ndocker: true\ncontainer-runtime-endpoint:\npause-image: docker.io/rancher/pause:3.1\nprivate-registry: /etc/rancher/k3s/registries.yaml\n\n# Networking\n# node-ip:\n# node-external-ip:\n# resolv-conf\nflannel-iface:\nflannel-conf:\n\nkubelet-arg:\nkube-proxy-arg:\n\nrootless: true\n")))}p.isMDXComponent=!0}}]);