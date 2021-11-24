"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[67171],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56868:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={title:"K8S \u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},s=void 0,u={unversionedId:"devops/kubernetes/k8s-faq",id:"devops/kubernetes/k8s-faq",isDocsHomePage:!1,title:"K8S \u5e38\u89c1\u95ee\u9898",description:"cni-plugins \u4e0d\u518d\u5305\u542b flannel",source:"@site/notes/devops/kubernetes/k8s-faq.md",sourceDirName:"devops/kubernetes",slug:"/devops/kubernetes/k8s-faq",permalink:"/notes/devops/kubernetes/k8s-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/k8s-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",frontMatter:{title:"K8S \u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},sidebar:"docs",previous:{title:"Kubernates \u9762\u677f",permalink:"/notes/devops/kubernetes/k8s-dashboard"},next:{title:"K8S \u8bcd\u6c47\u8868",permalink:"/notes/devops/kubernetes/k8s-glossary"}},p=[{value:"cni-plugins \u4e0d\u518d\u5305\u542b flannel",id:"cni-plugins-\u4e0d\u518d\u5305\u542b-flannel",children:[]},{value:"\u8d44\u6e90\u9650\u5236",id:"\u8d44\u6e90\u9650\u5236",children:[]},{value:"K3S \u5e38\u89c1\u95ee\u9898",id:"k3s-\u5e38\u89c1\u95ee\u9898",children:[]},{value:"Pod \u65f6\u533a",id:"pod-\u65f6\u533a",children:[]},{value:"taint",id:"taint",children:[]},{value:"\u96c6\u7fa4\u9650\u5236",id:"\u96c6\u7fa4\u9650\u5236",children:[]},{value:"\u64cd\u4f5c\u7cfb\u7edf\u8981\u6c42 / Linux Kernel Requirement",id:"\u64cd\u4f5c\u7cfb\u7edf\u8981\u6c42--linux-kernel-requirement",children:[]},{value:"Docker \u4e0e CRI \u5bf9 K8S \u7684\u5f71\u54cd",id:"docker-\u4e0e-cri-\u5bf9-k8s-\u7684\u5f71\u54cd",children:[]},{value:"\u5bfc\u51fa\u8d44\u6e90\u5ffd\u7565\u72b6\u6001\u5b57\u6bb5",id:"\u5bfc\u51fa\u8d44\u6e90\u5ffd\u7565\u72b6\u6001\u5b57\u6bb5",children:[]},{value:"\u5220\u9664\u5361\u5728 Terminating \u72b6\u6001",id:"\u5220\u9664\u5361\u5728-terminating-\u72b6\u6001",children:[]},{value:"\u5220\u9664 rancher \u9879\u76ee\u7a7a\u95f4",id:"\u5220\u9664-rancher-\u9879\u76ee\u7a7a\u95f4",children:[]},{value:"Unable to connect to the server: x509: certificate is valid for 10.10.1.2, 10.43.0.1, 127.0.0.1, 192.168.1.10, not 123.123.123.123",id:"unable-to-connect-to-the-server-x509-certificate-is-valid-for-101012-104301-127001-192168110-not-123123123123",children:[]},{value:"Failed to create pod sandbox: rpc error: code = Unknown desc = failed to create a sandbox for pod &quot;cron-1594372200-lmkcb&quot;: operation timeout: context deadline exceeded",id:"failed-to-create-pod-sandbox-rpc-error-code--unknown-desc--failed-to-create-a-sandbox-for-pod-cron-1594372200-lmkcb-operation-timeout-context-deadline-exceeded",children:[]},{value:"error: specifying a root certificates file with the insecure flag is not allowed",id:"error-specifying-a-root-certificates-file-with-the-insecure-flag-is-not-allowed",children:[]},{value:"node_lifecycle_controller.go:1433 Initializing eviction metric for zone",id:"node_lifecycle_controllergo1433-initializing-eviction-metric-for-zone",children:[]},{value:"running &quot;VolumeBinding&quot; filter plugin for pod &quot;web-0&quot;: pod has unbound immediate PersistentVolumeClaims",id:"running-volumebinding-filter-plugin-for-pod-web-0-pod-has-unbound-immediate-persistentvolumeclaims",children:[]},{value:"error: unable to retrieve the complete list of server APIs: write: broken pipe",id:"error-unable-to-retrieve-the-complete-list-of-server-apis-write-broken-pipe",children:[]},{value:"dns \u4e0d\u901a",id:"dns-\u4e0d\u901a",children:[]},{value:"MountVolume.SetUp failed for volume &quot;config-volume&quot; : failed to sync secret cache: timed out waiting for the condition",id:"mountvolumesetup-failed-for-volume-config-volume--failed-to-sync-secret-cache-timed-out-waiting-for-the-condition",children:[]},{value:"kubernetes swap",id:"kubernetes-swap",children:[]},{value:"didn&#39;t have free ports for the requested pod ports",id:"didnt-have-free-ports-for-the-requested-pod-ports",children:[]},{value:"scale to zero",id:"scale-to-zero",children:[]},{value:"The StorageClass is invalid: provisioner: Forbidden: updates to provisioner are forbidden.",id:"the-storageclass-is-invalid-provisioner-forbidden-updates-to-provisioner-are-forbidden",children:[]},{value:"\u9884\u7559\u8d44\u6e90",id:"\u9884\u7559\u8d44\u6e90",children:[]},{value:"node(s) had volume node affinity conflict",id:"nodes-had-volume-node-affinity-conflict",children:[]}],c={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"cni-plugins-\u4e0d\u518d\u5305\u542b-flannel"},"cni-plugins \u4e0d\u518d\u5305\u542b flannel"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"flannel \u72ec\u7acb\u51fa\u5355\u72ec\u7684 repo ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/flannel-io/cni-plugin"},"flannel-io/cni-plugin")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/containernetworking/plugins/issues/655"},"https://github.com/containernetworking/plugins/issues/655"))),(0,l.kt)("h2",{id:"\u8d44\u6e90\u9650\u5236"},"\u8d44\u6e90\u9650\u5236"),(0,l.kt)("h2",{id:"k3s-\u5e38\u89c1\u95ee\u9898"},"K3S \u5e38\u89c1\u95ee\u9898"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/rancher/k3s/issues/396"},"#396")," - Initializing eviction metric for zone")),(0,l.kt)("h2",{id:"pod-\u65f6\u533a"},"Pod \u65f6\u533a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"TZ \u73af\u5883\u53d8\u91cf")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8981\u6c42 \u8bed\u8a00/runtime \u652f\u6301"),(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981 tzdata")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u6620\u5c04 tz \u4fe1\u606f")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4e0e host \u4fdd\u6301\u4e00\u81f4"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4e0d\u9700\u8981\u5b89\u88c5 tzdata"),(0,l.kt)("li",{parentName:"ul"},"\u8981\u6c42 host \u5b89\u88c5\u4e86 tzdata"),(0,l.kt)("li",{parentName:"ul"},"\u8981\u6c42\u8c03\u6574 Pod")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u4ee3\u7801\u5185\u63a7\u5236")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"bundle tzdata\uff0c\u8fd0\u884c\u65f6\u52a0\u8f7d"),(0,l.kt)("li",{parentName:"ul"},"golang ",(0,l.kt)("inlineCode",{parentName:"li"},'import _ "time/tzdata"'),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u589e\u52a0\u7ea6 450 KB")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: busybox-sleep\nspec:\n  containers:\n    - name: busybox\n      image: busybox\n      args:\n        - sleep\n        - '1000000'\n      env:\n        - name: TZ\n          value: Asia/Shanghai\n      volumeMounts:\n        - name: tz-config\n          mountPath: /etc/localtime\n  volumes:\n    - name: tz-config\n      hostPath:\n        path: /usr/share/zoneinfo/Asia/Shanghai\n        type: File\n")),(0,l.kt)("h2",{id:"taint"},"taint"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"node.kubernetes.io/disk-pressure:NoSchedule"),(0,l.kt)("li",{parentName:"ul"},"\u4e3a pod \u8bbe\u7f6e priorityClassName \u786e\u4fdd\u8c03\u5ea6\uff0c\u907f\u514d\u9a71\u9010",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"system-node-critical,system-cluster-critical")))),(0,l.kt)("h2",{id:"\u96c6\u7fa4\u9650\u5236"},"\u96c6\u7fa4\u9650\u5236"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"5000 \u8282\u70b9"),(0,l.kt)("li",{parentName:"ul"},"150000 \u603b Pod"),(0,l.kt)("li",{parentName:"ul"},"300000 \u603b\u5bb9\u5668"),(0,l.kt)("li",{parentName:"ul"},"100 \u8282\u70b9 Pod"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/setup/best-practices/cluster-large/"},"Building large clusters")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://cloud.google.com/compute/docs/machine-types"},"GCE Type"))),(0,l.kt)("p",null,"\u96c6\u7fa4 Master \u6027\u80fd\u63a8\u8350"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Nodes"),(0,l.kt)("th",{parentName:"tr",align:null},"GCE Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Spec"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1-5"),(0,l.kt)("td",{parentName:"tr",align:null},"n1-standard-1"),(0,l.kt)("td",{parentName:"tr",align:null},"1 \u6838 4G")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6-10"),(0,l.kt)("td",{parentName:"tr",align:null},"n1-standard-2"),(0,l.kt)("td",{parentName:"tr",align:null},"2 \u6838 8G")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"11-100"),(0,l.kt)("td",{parentName:"tr",align:null},"n1-standard-4"),(0,l.kt)("td",{parentName:"tr",align:null},"4 \u6838 16G")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"101-250"),(0,l.kt)("td",{parentName:"tr",align:null},"n1-standard-8"),(0,l.kt)("td",{parentName:"tr",align:null},"8 \u6838 32G")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"251-500"),(0,l.kt)("td",{parentName:"tr",align:null},"n1-standard-16"),(0,l.kt)("td",{parentName:"tr",align:null},"16 \u6838 64G")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"500+"),(0,l.kt)("td",{parentName:"tr",align:null},"n1-standard-32"),(0,l.kt)("td",{parentName:"tr",align:null},"32 \u6838 128G")))),(0,l.kt)("h2",{id:"\u64cd\u4f5c\u7cfb\u7edf\u8981\u6c42--linux-kernel-requirement"},"\u64cd\u4f5c\u7cfb\u7edf\u8981\u6c42 / Linux Kernel Requirement"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Linux Kernel 3.10+"),(0,l.kt)("li",{parentName:"ul"},"moby ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/moby/moby/blob/master/contrib/check-config.sh"},"contrib/check-config.sh")),(0,l.kt)("li",{parentName:"ul"},"Calico ",(0,l.kt)("a",{parentName:"li",href:"https://docs.projectcalico.org/getting-started/kubernetes/requirements"},"System requirements"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Linux Kernel 3.10+")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./check-config.sh kernel.config\n")),(0,l.kt)("h2",{id:"docker-\u4e0e-cri-\u5bf9-k8s-\u7684\u5f71\u54cd"},"Docker \u4e0e CRI \u5bf9 K8S \u7684\u5f71\u54cd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"invalid capacity 0 on image filesystem",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/kubernetes/issues/51798#issuecomment-481366041"},"kubernetes/kubernetes#51798")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/issues/1857#issuecomment-637852959"},"k3s-io/k3s#1857"))))),(0,l.kt)("h2",{id:"\u5bfc\u51fa\u8d44\u6e90\u5ffd\u7565\u72b6\u6001\u5b57\u6bb5"},"\u5bfc\u51fa\u8d44\u6e90\u5ffd\u7565\u72b6\u6001\u5b57\u6bb5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5e38\u89c1\u5b57\u6bb5",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"status"),(0,l.kt)("li",{parentName:"ul"},"metadata.managedFields"),(0,l.kt)("li",{parentName:"ul"},"metadata",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"annotations",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"kubectl.kubernetes.io/last-applied-configuration"),(0,l.kt)("li",{parentName:"ul"},"deployment.kubernetes.io/revision"))),(0,l.kt)("li",{parentName:"ul"},"resourceVersion"),(0,l.kt)("li",{parentName:"ul"},"selfLink"),(0,l.kt)("li",{parentName:"ul"},"uid"),(0,l.kt)("li",{parentName:"ul"},"creationTimestamp"),(0,l.kt)("li",{parentName:"ul"},"generation")))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get -o=yaml deploy whoami | yq d - status | yq d - 'metadata.managedFields'\n")),(0,l.kt)("h2",{id:"\u5220\u9664\u5361\u5728-terminating-\u72b6\u6001"},"\u5220\u9664\u5361\u5728 Terminating \u72b6\u6001"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# \u4f8b\u5982 NS\nkubectl get ns --field-selector status.phase=Terminating\n\n# \u6240\u6709 NS\nkubectl get ns --field-selector status.phase=Terminating -o jsonpath=\'{..metadata.name}\'\n\n# \u6279\u91cf\n# kubectl patch ns -p \'{"metadata":{"finalizers": null}}\' $NS\n# kubectl patch ns -p \'{"metadata":{"finalizers":[]}}\' --type=merge $NS\nkubectl patch ns -p \'{"metadata":{"finalizers":[]}}\' --type=merge $(kubectl get ns --field-selector status.phase=Terminating -o jsonpath=\'{..metadata.name}\')\n')),(0,l.kt)("h2",{id:"\u5220\u9664-rancher-\u9879\u76ee\u7a7a\u95f4"},"\u5220\u9664 rancher \u9879\u76ee\u7a7a\u95f4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u96be\u70b9\u5728\u4e8e get all \u4e0d\u4f1a\u8fd4\u56de\u6240\u6709\u8d44\u6e90",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ef\u5c1d\u8bd5 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/corneliusweig/ketall#via-krew"},"ketall")))),(0,l.kt)("li",{parentName:"ul"},"\u90e8\u5206\u8d44\u6e90\u9700\u8981\u5148 patch \u624d\u80fd\u5220\u9664")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'for ns in local p-66lfd ; do\n  for error in app.project.cattle.io/cluster-alerting app.project.cattle.io/cluster-monitoring app.project.cattle.io/monitoring-operator app.project.cattle.io/project-monitoring clusteralertgroup.management.cattle.io/cluster-scan-alert clusteralertgroup.management.cattle.io/etcd-alert clusteralertgroup.management.cattle.io/event-alert clusteralertgroup.management.cattle.io/kube-components-alert clusteralertgroup.management.cattle.io/node-alert clusterroletemplatebinding.management.cattle.io/creator-cluster-owner clusterroletemplatebinding.management.cattle.io/u-b4qkhsnliz-admin node.management.cattle.io/machine-9sssc node.management.cattle.io/machine-ks6z6 node.management.cattle.io/machine-v4v89 project.management.cattle.io/p-cnj28 project.management.cattle.io/p-mbvfd projectalertgroup.management.cattle.io/projectalert-workload-alert projectalertrule.management.cattle.io/less-than-half-workload-available projectalertrule.management.cattle.io/memory-close-to-resource-limited projectroletemplatebinding.management.cattle.io/app-jdnmz projectroletemplatebinding.management.cattle.io/creator-project-owner projectroletemplatebinding.management.cattle.io/prtb-s6fhc projectroletemplatebinding.management.cattle.io/u-2gacgc4nfu-member projectroletemplatebinding.management.cattle.io/u-efxo6n6ndd-member  ; do\n    for resource in `kubectl get -n $ns $error -o name` ; do\n      kubectl patch -n $ns $resource -p \'{"metadata": {"finalizers": []}}\' --type=\'merge\'\n    done\n  done\ndone\n\n# \u5168\u5c40\u8d44\u6e90\nfor res in $(kubectl api-resources --namespaced=false --api-group management.cattle.io | cut -d \' \' -f 1); do\n  echo "=== $res.management.cattle.io ==="\n  kubectl get $res.management.cattle.io\ndone\n\n\n# namespaced\ngroups="management.cattle.io catalog.cattle.io project.cattle.io"\nfor grp in $groups; do\nfor res in $(kubectl api-resources --namespaced=true --api-group $grp -o name); do\n  echo "=== $res ==="\n  kubectl get --all-namespaces $res\ndone\ndone\n\n\n# \u6e05\u9664\u8d44\u6e90\ncleargroup(){\n  kubectl patch $1 -p \'{"metadata":{"finalizers":[]}}\' --type=merge $(kubectl get $1 -o jsonpath=\'{..metadata.name}\')\n  kubectl delete --all $1\n}\n\ncleargroup globalroles.management.cattle.io\n')),(0,l.kt)("h2",{id:"unable-to-connect-to-the-server-x509-certificate-is-valid-for-101012-104301-127001-192168110-not-123123123123"},"Unable to connect to the server: x509: certificate is valid for 10.10.1.2, 10.43.0.1, 127.0.0.1, 192.168.1.10, not 123.123.123.123"),(0,l.kt)("p",null,"\u7b7e\u53d1\u7684\u8bc1\u4e66\u4e0d\u5305\u542b IP\uff0c\u521d\u59cb\u5316\u7684\u65f6\u5019\u53ef\u4ee5\u6dfb\u52a0\uff0c\u5efa\u8bae\u65b0\u5efa\u5b50\u8d26\u53f7\u7ba1\u7406\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u539f\u5148\u7684\u4f4d\u4e8e\n# /etc/kubernetes/pki/apiserver.*\nkubeadm init --apiserver-cert-extra-sans=123.123.123.123\n")),(0,l.kt)("h2",{id:"failed-to-create-pod-sandbox-rpc-error-code--unknown-desc--failed-to-create-a-sandbox-for-pod-cron-1594372200-lmkcb-operation-timeout-context-deadline-exceeded"},'Failed to create pod sandbox: rpc error: code = Unknown desc = failed to create a sandbox for pod "cron-1594372200-lmkcb": operation timeout: context deadline exceeded'),(0,l.kt)("p",null,"\u6d4b\u8bd5\u662f\u5426\u6b63\u5e38"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: alpine-pwd\nspec:\n  template:\n    spec:\n      containers:\n        - name: alpine\n          image: wener/base\n          command: ['pwd']\n      restartPolicy: Never\n  backoffLimit: 4\n")),(0,l.kt)("p",null,"\u4e00\u4e2a\u4e3b\u8282\u70b9\u5f02\u5e38\uff0c\u91cd\u542f\u89e3\u51b3\u3002"),(0,l.kt)("h2",{id:"error-specifying-a-root-certificates-file-with-the-insecure-flag-is-not-allowed"},"error: specifying a root certificates file with the insecure flag is not allowed"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"insecure-skip-tls-verify")," \u4e0d\u80fd\u7528\u4e8e\u6839\u8bc1\u4e66\uff0c\u65b0\u5efa\u5b50\u8d26\u53f7\u3002"),(0,l.kt)("h2",{id:"node_lifecycle_controllergo1433-initializing-eviction-metric-for-zone"},"node_lifecycle_controller.go:1433 Initializing eviction metric for zone"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5f53\u6709\u65b0\u7684 zone \u65f6\u4f1a\u521d\u59cb\u5316 metric"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/kubernetes/blob/d01cc01ab4455d1c0db84d2cc79d963a1b15d292/pkg/controller/nodelifecycle/node_lifecycle_controller.go#L1429"},"node_lifecycle_controller.go:1433")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/setup/best-practices/multiple-zones/"},"\u591a\u53ef\u7528\u533a\u5b9e\u8df5"))))),(0,l.kt)("h2",{id:"running-volumebinding-filter-plugin-for-pod-web-0-pod-has-unbound-immediate-persistentvolumeclaims"},'running "VolumeBinding" filter plugin for pod "web-0": pod has unbound immediate PersistentVolumeClaims'),(0,l.kt)("h2",{id:"error-unable-to-retrieve-the-complete-list-of-server-apis-write-broken-pipe"},"error: unable to retrieve the complete list of server APIs: write: broken pipe"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u4e0d\u7a33\u5b9a\u4e5f\u53ef\u80fd\u5bfc\u81f4",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 \u5728\u4f7f\u7528 sshuttle \u7684\u65f6\u5019\u5076\u5c14\u5c31\u4f1a\u51fa\u73b0"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u8003\u8651\u4f7f\u7528 ssh \u8f6c\u53d1 - ",(0,l.kt)("inlineCode",{parentName:"li"},"ssh -vNL 6443:10.10.1.1:6443 admin@192.168.1.2 -o ExitOnForwardFailure=yes")))),(0,l.kt)("li",{parentName:"ul"},'an error on the server ("") has prevented the request from succeeding')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6982\u7387\u5931\u8d25\nkubectl api-resources\n\n# \u786e\u4fdd metric \u6b63\u5e38\nkubectl get apiservices\n# \u786e\u4fdd \u7cfb\u7edf\u670d\u52a1 \u6b63\u5e38\nkubectl get pods -n kube-system\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/prometheus-operator/kube-prometheus/issues/275"},"https://github.com/prometheus-operator/kube-prometheus/issues/275"))),(0,l.kt)("h2",{id:"dns-\u4e0d\u901a"},"dns \u4e0d\u901a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u73b0\u8c61 - \u6240\u6709 \u670d\u52a1 504\uff0c\u7f51\u5173\u8d85\u65f6"),(0,l.kt)("li",{parentName:"ul"},"\u6392\u67e5",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1 kube-dns 53 \u80fd\u5426\u89e3\u6790"),(0,l.kt)("li",{parentName:"ul"},"\u6240\u6709\u8282\u70b9\u90fd\u6709\u95ee\u9898\u8fd8\u662f\u5355\u4e2a\u8282\u70b9",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6240\u6709\u8282\u70b9\u90fd\u6709\u95ee\u9898\u5219\u53ef\u80fd\u662f\u670d\u52a1\u7684\u95ee\u9898"),(0,l.kt)("li",{parentName:"ul"},"\u5355\u4e2a\u8282\u70b9\u5219\u53ef\u80fd\u662f\u73af\u5883\u95ee\u9898"))),(0,l.kt)("li",{parentName:"ul"},"ping \u540e\u7aef endpoint"),(0,l.kt)("li",{parentName:"ul"},"ping \u4e0d\u901a\u5219\u8bf4\u660e\u53ef\u80fd\u662f flannel \u63d2\u4ef6\u4e4b\u7c7b\u5f02\u5e38\u6216\u8005\u4f7f\u7528\u7684\u5e95\u5c42 interface \u5f02\u5e38"))),(0,l.kt)("li",{parentName:"ul"},"\u89e3\u51b3",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5c1d\u8bd5\u91cd\u542f k3s"),(0,l.kt)("li",{parentName:"ul"},"\u5c1d\u8bd5\u91cd\u542f \u7f51\u7edc"),(0,l.kt)("li",{parentName:"ul"},"\u5c1d\u8bd5\u91cd\u542f \u7cfb\u7edf")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u9a8c\u8bc1 DNS \u80fd\u5426\u89e3\u6790\n# k3s \u9ed8\u8ba4\u4f7f\u7528 10.43.0.10\n# kube-dns.kube-system.svc\nnslookup wener.me 10.43.0.10\n# \u6216\ndig @10.43.0.10 wener.me\n")),(0,l.kt)("h2",{id:"mountvolumesetup-failed-for-volume-config-volume--failed-to-sync-secret-cache-timed-out-waiting-for-the-condition"},'MountVolume.SetUp failed for volume "config-volume" : failed to sync secret cache: timed out waiting for the condition'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6761\u4ef6\u672a\u6ee1\u8db3\uff0c\u65e0\u6cd5\u7ee7\u7eed\u6267\u884c\uff0c\u4e14\u7b49\u5f85\u8d85\u65f6"),(0,l.kt)("li",{parentName:"ul"},"\u89e3\u51b3\u529e\u6cd5",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7b49\u5f85 \u6216 \u5220\u9664 Pod")))),(0,l.kt)("p",null,"\u67e5\u770b\u6761\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"status:\n  phase: Pending\n  conditions:\n    - type: Initialized\n      status: 'True'\n      lastProbeTime: null\n      lastTransitionTime: '2020-09-04T10:09:51Z'\n    - type: Ready\n      status: 'False'\n      lastProbeTime: null\n      lastTransitionTime: '2020-09-04T10:09:51Z'\n      reason: ContainersNotReady\n      message: 'containers with unready status: [alertmanager config-reloader]'\n    # \u8fd9\u4e00\u6b65\u672a\u80fd\u6210\u529f\n    - type: ContainersReady\n      status: 'False'\n      lastProbeTime: null\n      lastTransitionTime: '2020-09-04T10:09:51Z'\n      reason: ContainersNotReady\n      message: 'containers with unready status: [alertmanager config-reloader]'\n    - type: PodScheduled\n      status: 'True'\n      lastProbeTime: null\n      lastTransitionTime: '2020-09-04T10:09:51Z'\n")),(0,l.kt)("h2",{id:"kubernetes-swap"},"kubernetes swap"),(0,l.kt)("p",null,"\u4e0d\u5efa\u8bae\u4f7f\u7528 swap"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/kubernetes/issues/53533"},"kubernetes/kubernetes#3533")," - Kubelet/Kubernetes should work with Swap Enabled")),(0,l.kt)("h2",{id:"didnt-have-free-ports-for-the-requested-pod-ports"},"didn't have free ports for the requested pod ports"),(0,l.kt)("p",null,"deploy \u5982\u679c\u53ea\u6709\u4e00\u4e2a\u8282\u70b9\uff0c\u4f7f\u7528 Recreate\uff0c RollingUpdate \u4f1a\u5931\u8d25\u3002"),(0,l.kt)("h2",{id:"scale-to-zero"},"scale to zero"),(0,l.kt)("p",null,"\u4f7f\u7528 keda \u6216\u8005 knative"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"keda \u7b80\u5355 - \u8d1f\u8d23 autoscaler"),(0,l.kt)("li",{parentName:"ul"},"knative \u590d\u6742 - \u6574\u5957\u5f00\u53d1\u903b\u8f91")),(0,l.kt)("h2",{id:"the-storageclass-is-invalid-provisioner-forbidden-updates-to-provisioner-are-forbidden"},"The StorageClass is invalid: provisioner: Forbidden: updates to provisioner are forbidden."),(0,l.kt)("p",null,"provisioner \u540d\u5b57\u4e0d\u5339\u914d\uff0c\u8fd8 sc \u540d\u5b57\u6216\u5220\u4e86\u91cd\u5efa\u3002"),(0,l.kt)("h2",{id:"\u9884\u7559\u8d44\u6e90"},"\u9884\u7559\u8d44\u6e90"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/administer-cluster/reserve-compute-resources/"},"Reserve Compute Resources for System Daemons"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"--kube-reserved=[cpu=100m][,][memory=100Mi][,][ephemeral-storage=1Gi][,][pid=1000]\n--system-reserved=[cpu=100m][,][memory=100Mi][,][ephemeral-storage=1Gi][,][pid=1000]\n--reserved-cpus=0-3\n# \u5f00\u59cb\u9a71\u9010\u7684\u9600\u503c\n--eviction-hard=[memory.available<500Mi]\n--enforce-node-allocatable=pods[,][system-reserved][,][kube-reserved]\n\n# \u6307\u5411\u73b0\u6709\u7684 cgroup\n--kube-reserved-cgroup=\n--system-reserved-cgroup=\n")),(0,l.kt)("h2",{id:"nodes-had-volume-node-affinity-conflict"},"node(s) had volume node affinity conflict"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f pv \u65e0\u6cd5\u8fc1\u79fb\uff0c\u5207\u5f71\u54cd\u4e0d\u5927\uff0c\u53ef\u4ee5\u8003\u8651\u5220\u9664\u4e86\u4ece\u5efa")),(0,l.kt)("p",null,"\u53ef\u80fd pvc \u548c pod zone \u51b2\u7a81\uff0c\u53ef\u4ee5\u9488\u5bf9 zone \u521b\u5efa sc"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: StorageClass\napiVersion: storage.k8s.io/v1\nmetadata:\n  name: region1storageclass\nprovisioner: kubernetes.io/aws-ebs\nvolumeBindingMode: WaitForFirstConsumer\nallowedTopologies:\n  - matchLabelExpressions:\n      - key: failure-domain.beta.kubernetes.io/zone\n        values:\n          - eu-west-2b\n")))}m.isMDXComponent=!0}}]);