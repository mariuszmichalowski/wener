"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[97399],{3905:function(t,e,n){n.d(e,{Zo:function(){return k},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),o=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=o(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,k=u(t,["components","mdxType","originalType","parentName"]),s=o(n),m=r,g=s["".concat(p,".").concat(m)]||s[m]||d[m]||l;return n?a.createElement(g,i(i({ref:e},k),{},{components:n})):a.createElement(g,i({ref:e},k))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=t,u.mdxType="string"==typeof t?t:r,i[1]=u;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},88720:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return k},default:function(){return s}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],u={id:"kubectl",title:"Kubectl"},p=void 0,o={unversionedId:"devops/kubernetes/ops/kubectl",id:"devops/kubernetes/ops/kubectl",isDocsHomePage:!1,title:"Kubectl",description:"- kubernetes-sigs/krew - Find and install kubectl plugins",source:"@site/notes/devops/kubernetes/ops/kubectl.md",sourceDirName:"devops/kubernetes/ops",slug:"/devops/kubernetes/ops/kubectl",permalink:"/notes/devops/kubernetes/ops/kubectl",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/ops/kubectl.md",tags:[],version:"current",frontMatter:{id:"kubectl",title:"Kubectl"},sidebar:"docs",previous:{title:"kops",permalink:"/notes/devops/kubernetes/ops/kops"},next:{title:"kubectl FAQ",permalink:"/notes/devops/kubernetes/ops/kubectl-faq"}},k=[{value:"\u7aef\u53e3\u6620\u5c04",id:"\u7aef\u53e3\u6620\u5c04",children:[]},{value:"\u79c1\u6709\u4ed3\u5e93",id:"\u79c1\u6709\u4ed3\u5e93",children:[]},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]},{value:"Kubectl \u8d44\u6e90\u7c7b\u578b\u7f29\u5199",id:"kubectl-\u8d44\u6e90\u7c7b\u578b\u7f29\u5199",children:[]}],d={toc:k};function s(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/krew/"},"kubernetes-sigs/krew")," - Find and install kubectl plugins"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/ahmetb/kubectx"},"ahmetb/kubectx")," - \u8f85\u52a9\u4e0a\u4e0b\u6587\u63a7\u5236"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/kubectl/cheatsheet/"},"cheatsheet"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install kubectl kubectx\n# k9s - k8s \u7684 top - \u53ef\u4ee5 shell\u3001log \u7b49\nbrew install derailed/k9s/k9s\n\n# \u8865\u5168\nsource <(kubectl completion bash)\n\n# \u53ef\u4ee5\u7528\u522b\u540d\nalias k=kubectl\ncomplete -F __start_kubectl k\n\n# \u67e5\u770b\u6240\u6709\u4e0a\u4e0b\u6587\nkubectx\n# \u67e5\u770b\u547d\u540d\u7a7a\u95f4\nkubens\n\n# K9S \u6240\u6709\u547d\u540d\u7a7a\u95f4 \u4e0d\u663e\u793a\u5934\nk9s -A --headless\n\n# \u79fb\u9664\u8282\u70b9\n# https://kubernetes.io/docs/tasks/administer-cluster/safely-drain-node/\nkubectl drain node-3 --delete-local-data --ignore-daemonsets --force\n# \u4fdd\u7559\u8282\u70b9\u5728\u96c6\u7fa4\u4e2d - \u7ef4\u62a4\u6a21\u5f0f\n# kubectl uncordon node-3\n")),(0,l.kt)("h2",{id:"\u7aef\u53e3\u6620\u5c04"},"\u7aef\u53e3\u6620\u5c04"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5355\u4e2a\u90e8\u7f72\nkubectl port-forward pod/mypod 5000 6000\n# \u4f7f\u7528 deploy \u9009\u62e9\nkubectl port-forward deployment/mydeployment 5000 6000\n# \u670d\u52a1\nkubectl port-forward service/myservice 5000 6000\n# \u672c\u5730\u76d1\u542c\u5730\u5740\nkubectl port-forward --address 0.0.0.0 pod/mypod 8888:5000\n\n# \u8f6c\u53d1 kubernetes-dashboard\nkubectl -n kubernetes-dashboard port-forward svc/kubernetes-dashboard 8443:https\n")),(0,l.kt)("h2",{id:"\u79c1\u6709\u4ed3\u5e93"},"\u79c1\u6709\u4ed3\u5e93"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# \u4f7f\u7528\u5df2\u6709\u7684\u8ba4\u8bc1\u4fe1\u606f\u521b\u5efa\nkubectl create secret generic regcred \\\n    --from-file=.dockerconfigjson=$HOME/.docker/config.json \\\n    --type=kubernetes.io/dockerconfigjson\n\n# \u63d0\u4f9b\u8d26\u53f7\u5bc6\u7801\u521b\u5efa\n# \u955c\u50cf\u5730\u5740\uff0c\u4f8b\u5982 https://index.docker.io/v1/  \u6216\u8005 registry.gitlab.com\nkubectl create secret docker-registry regcred \\\n  -docker-server=<your-registry-server> \\\n  --docker-username=<your-name> --docker-password=<your-pword> --docker-email=<your-email>\n\nkubectl get secret regcred --output=yaml\n# \u660e\u6587\nkubectl get secret regcred --output="jsonpath={.data.\\.dockerconfigjson}" | base64 --decode | jq\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: private-reg\nspec:\n  containers:\n    - name: private-reg-container\n      image: <your-private-image>\n  imagePullSecrets:\n    # \u4f7f\u7528\u79c1\u94a5\n    - name: regcred\n")),(0,l.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"li"},"~/.kube/config")),(0,l.kt)("li",{parentName:"ul"},"\u73af\u5883\u53d8\u91cf\u63a7\u5236 ",(0,l.kt)("inlineCode",{parentName:"li"},"KUBECONFIG"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ef\u914d\u7f6e\u591a\u4e2a ",(0,l.kt)("inlineCode",{parentName:"li"},"KUBECONFIG=~/.kube/config:~/.kube/kubconfig2")),(0,l.kt)("li",{parentName:"ul"},"\u4f1a\u8fdb\u884c\u5408\u5e76")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u914d\u7f6e\nkubectl config view --kubecoonfig=~/.kube/dev\n# \u53ea\u67e5\u770b\u751f\u6548\u914d\u7f6e\nkubectl config view --minify\n# \u67e5\u770b\u7528\u6237\u5bc6\u7801\nkubectl config view -o jsonpath='{.users[?(@.name == \"admin\")].user.password}'\n# \u6240\u6709\u7528\u6237\nkubectl config view -o jsonpath='{.users[*].name}'\n\n# \u6240\u6709\u4e0a\u4e0b\u6587\nkubectl config get-contexts\n# \u5f53\u524d\u4e0a\u4e0b\u6587\nkubectl config current-context\n# \u4f7f\u7528\u4e0a\u4e0b\u6587\nkubectl config use-context my-cluster-name\n\n# \u6dfb\u52a0\u7528\u6237\nkubectl config set-credentials kubeuser/foo.kubernetes.com --username=kubeuser --password=kubepassword\n\n# \u8bbe\u7f6e\u5f53\u524d\u6b63\u5728\u4f7f\u7528\u7684\u547d\u540d\u7a7a\u95f4\nkubectl config set-context --current --namespace=myapp\n\n# \u5220\u9664 \u7528\u6237\u3001\u96c6\u7fa4\u3001\u4e0a\u4e0b\u6587\nkubectl --kubeconfig=config-demo config unset users.<name>\nkubectl --kubeconfig=config-demo config unset clusters.<name>\nkubectl --kubeconfig=config-demo config unset contexts.<name>\n\n# \u521b\u5efa\u4e00\u4e2a\u5b8c\u6574\u914d\u7f6e\nkubectl config --kubeconfig=test set-cluster default --server=https://5.6.7.8 --insecure-skip-tls-verify\n# \u4f7f\u7528 TOKEN \u65b9\u5f0f - serviceToken \u5bb9\u6613\u83b7\u53d6\nkubectl config --kubeconfig=test set-credentials default --token=ABCD\nkubectl config --kubeconfig=test set-context default --cluster=default --namespace=default --user=default\nkubectl config --kubeconfig=test use-context default\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Config\n# \u5f53\u524d\u4e0a\u4e0b\u6587\ncurrent-context: ''\npreferences: {}\n\n# \u96c6\u7fa4\nclusters:\n  - cluster:\n      # \u8bc1\u4e66\u4fe1\u606f\n      certificate-authority: ca-file\n      # Base64 \u7f16\u7801\u7684\u8bc1\u4e66\u4fe1\u606f\n      certificate-authority-data: ABCD==\n      # \u4e0d\u6821\u9a8c TLS\n      # insecure-skip-tls-verify: true\n      # \u670d\u52a1\u5730\u5740\n      server: https://1.2.3.4\n    # \u96c6\u7fa4\u540d\u5b57\n    name: dev\n  - cluster:\n      server: https://5.6.7.8\n    name: staging\n\n# \u7528\u6237\u4fe1\u606f\nusers:\n  - name: developer\n    user:\n      # \u8bc1\u4e66\u8ba4\u771f\n      client-certificate: fake-cert-file\n      client-key: fake-key-file\n  - name: admin\n    user:\n      # \u7528\u6237\u540d\u5bc6\u7801\u8ba4\u8bc1\n      password: Admin\n      username: admin\n# \u4e0a\u4e0b\u6587 = \u96c6\u7fa4+\u7528\u6237+\u547d\u540d\u7a7a\u95f4\ncontexts:\n  - context:\n      cluster: dev\n      namespace: frontend\n      user: developer\n    name: dev-frontend\n  - context:\n      cluster: dev\n      namespace: storage\n      user: developer\n    name: dev-storage\n")),(0,l.kt)("h2",{id:"kubectl-\u8d44\u6e90\u7c7b\u578b\u7f29\u5199"},"Kubectl \u8d44\u6e90\u7c7b\u578b\u7f29\u5199"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/kubectl/overview/#resource-types"},"Resource types"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Resource"),(0,l.kt)("th",{parentName:"tr",align:null},"Short"),(0,l.kt)("th",{parentName:"tr",align:null},"API Group"),(0,l.kt)("th",{parentName:"tr",align:null},"Namespaced"),(0,l.kt)("th",{parentName:"tr",align:null},"Resource Kind"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"apiservices"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"apiregistration.k8s.io"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"APIService")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bindings"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Binding")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"certificatesigningrequests"),(0,l.kt)("td",{parentName:"tr",align:null},"csr"),(0,l.kt)("td",{parentName:"tr",align:null},"certificates.k8s.io"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"CertificateSigningRequest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clusterrolebindings"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"rbac.authorization.k8s.io"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"ClusterRoleBinding")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clusterroles"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"rbac.authorization.k8s.io"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"ClusterRole")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"componentstatuses"),(0,l.kt)("td",{parentName:"tr",align:null},"cs"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"ComponentStatus")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"configmaps"),(0,l.kt)("td",{parentName:"tr",align:null},"cm"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"ConfigMap")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"controllerrevisions"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"apps"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"ControllerRevision")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cronjobs"),(0,l.kt)("td",{parentName:"tr",align:null},"cj"),(0,l.kt)("td",{parentName:"tr",align:null},"batch"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"CronJob")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"csidrivers"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"storage.k8s.io"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"CSIDriver")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"csinodes"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"storage.k8s.io"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"CSINode")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"customresourcedefinitions"),(0,l.kt)("td",{parentName:"tr",align:null},"crd, crds"),(0,l.kt)("td",{parentName:"tr",align:null},"apiextensions.k8s.io"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"CustomResourceDefinition")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"daemonsets"),(0,l.kt)("td",{parentName:"tr",align:null},"ds"),(0,l.kt)("td",{parentName:"tr",align:null},"apps"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"DaemonSet")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"deployments"),(0,l.kt)("td",{parentName:"tr",align:null},"deploy"),(0,l.kt)("td",{parentName:"tr",align:null},"apps"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Deployment")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endpoints"),(0,l.kt)("td",{parentName:"tr",align:null},"ep"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Endpoints")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"events"),(0,l.kt)("td",{parentName:"tr",align:null},"ev"),(0,l.kt)("td",{parentName:"tr",align:null},"events.k8s.io"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"horizontalpodautoscalers"),(0,l.kt)("td",{parentName:"tr",align:null},"hpa"),(0,l.kt)("td",{parentName:"tr",align:null},"autoscaling"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"HorizontalPodAutoscaler")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ingresses"),(0,l.kt)("td",{parentName:"tr",align:null},"ing"),(0,l.kt)("td",{parentName:"tr",align:null},"extensions"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Ingress")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jobs"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"batch"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Job")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"leases"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"coordination.k8s.io"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Lease")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"limitranges"),(0,l.kt)("td",{parentName:"tr",align:null},"limits"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"LimitRange")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"localsubjectaccessreviews"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"authorization.k8s.io"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"LocalSubjectAccessReview")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mutatingwebhookconfigurations"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"admissionregistration.k8s.io"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"MutatingWebhookConfiguration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"namespaces"),(0,l.kt)("td",{parentName:"tr",align:null},"ns"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Namespace")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"networkpolicies"),(0,l.kt)("td",{parentName:"tr",align:null},"netpol"),(0,l.kt)("td",{parentName:"tr",align:null},"networking.k8s.io"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"NetworkPolicy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Node")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"persistentvolumeclaims"),(0,l.kt)("td",{parentName:"tr",align:null},"pvc"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"PersistentVolumeClaim")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"persistentvolumes"),(0,l.kt)("td",{parentName:"tr",align:null},"pv"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"PersistentVolume")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"poddisruptionbudgets"),(0,l.kt)("td",{parentName:"tr",align:null},"pdb"),(0,l.kt)("td",{parentName:"tr",align:null},"policy"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"PodDisruptionBudget")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pods"),(0,l.kt)("td",{parentName:"tr",align:null},"po"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Pod")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"podsecuritypolicies"),(0,l.kt)("td",{parentName:"tr",align:null},"psp"),(0,l.kt)("td",{parentName:"tr",align:null},"policy"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"PodSecurityPolicy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"podtemplates"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"PodTemplate")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"priorityclasses"),(0,l.kt)("td",{parentName:"tr",align:null},"pc"),(0,l.kt)("td",{parentName:"tr",align:null},"scheduling.k8s.io"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"PriorityClass")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"replicasets"),(0,l.kt)("td",{parentName:"tr",align:null},"rs"),(0,l.kt)("td",{parentName:"tr",align:null},"apps"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"ReplicaSet")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"replicationcontrollers"),(0,l.kt)("td",{parentName:"tr",align:null},"rc"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"ReplicationController")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"resourcequotas"),(0,l.kt)("td",{parentName:"tr",align:null},"quota"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"ResourceQuota")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rolebindings"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"rbac.authorization.k8s.io"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"RoleBinding")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"roles"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"rbac.authorization.k8s.io"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Role")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secrets"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Secret")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"selfsubjectaccessreviews"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"authorization.k8s.io"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"SelfSubjectAccessReview")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"selfsubjectrulesreviews"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"authorization.k8s.io"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"SelfSubjectRulesReview")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"serviceaccounts"),(0,l.kt)("td",{parentName:"tr",align:null},"sa"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"ServiceAccount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"services"),(0,l.kt)("td",{parentName:"tr",align:null},"svc"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Service")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"statefulsets"),(0,l.kt)("td",{parentName:"tr",align:null},"sts"),(0,l.kt)("td",{parentName:"tr",align:null},"apps"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"StatefulSet")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"storageclasses"),(0,l.kt)("td",{parentName:"tr",align:null},"sc"),(0,l.kt)("td",{parentName:"tr",align:null},"storage.k8s.io"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"StorageClass")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"subjectaccessreviews"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"authorization.k8s.io"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"SubjectAccessReview")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tokenreviews"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"authentication.k8s.io"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"TokenReview")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"validatingwebhookconfigurations"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"admissionregistration.k8s.io"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"ValidatingWebhookConfiguration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"volumeattachments"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"storage.k8s.io"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"VolumeAttachment")))))}s.isMDXComponent=!0}}]);