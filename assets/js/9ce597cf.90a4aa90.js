"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[92911],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,k=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21767:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={title:"K8S Features"},u=void 0,s={unversionedId:"devops/kubernetes/k8s-features",id:"devops/kubernetes/k8s-features",title:"K8S Features",description:"StatefulSetAutoDeletePVC",source:"@site/notes/devops/kubernetes/k8s-features.md",sourceDirName:"devops/kubernetes",slug:"/devops/kubernetes/k8s-features",permalink:"/notes/devops/kubernetes/k8s-features",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/k8s-features.md",tags:[],version:"current",frontMatter:{title:"K8S Features"},sidebar:"docs",previous:{title:"K8S \u5e38\u89c1\u95ee\u9898",permalink:"/notes/devops/kubernetes/k8s-faq"},next:{title:"K8S \u8bcd\u6c47\u8868",permalink:"/notes/devops/kubernetes/k8s-glossary"}},p=[{value:"StatefulSetAutoDeletePVC",id:"statefulsetautodeletepvc",children:[],level:2},{value:"CronJobControllerV2",id:"cronjobcontrollerv2",children:[],level:2},{value:"IPv6DualStack",id:"ipv6dualstack",children:[],level:2}],c={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"statefulsetautodeletepvc"},"StatefulSetAutoDeletePVC"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: StatefulSet\nspec:\n  # StatefulSetAutoDeletePVC\n  # sts \u5f02\u5e38\u540e\u7684 pvc \u56de\u6536\u7b56\u7565\n  persistentVolumeClaimRetentionPolicy:\n    whenDeleted: Retain\n    whenScaled: Delete\n")),(0,l.kt)("h2",{id:"cronjobcontrollerv2"},"CronJobControllerV2"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"schedule"),(0,l.kt)("th",{parentName:"tr",align:null},"="))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@yearly,@annually"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0 0 1 1 *"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@monthly"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0 0 1 * *"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@weekly"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0 0 * * 0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@daily,@midnight"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0 0 * * *"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@hourly"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0 * * * *"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e4b\u524d\u4e3a ScheduledJobs,\u6240\u4ee5\u8fd9\u662f v2"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/enhancements/tree/master/keps/sig-apps/19-Graduate-CronJob-to-Stable"},"KEP#19")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/cron-job-v1/"},"CronJobV1"))),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u65f6\u533a\u57fa\u4e8e kube-controller-manager"),(0,l.kt)("li",{parentName:"ul"},"\u672a\u6b63\u5f0f\u652f\u6301 CRON_TZ, TZ")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: batch/v1\nkind: CronJob\nmetadata:\n  name: hello\nspec:\n  schedule: '*/1 * * * *'\n  jobTemplate:\n    spec:\n      template:\n        spec:\n          containers:\n            - name: hello\n              image: busybox\n              imagePullPolicy: IfNotPresent\n              command:\n                - /bin/sh\n                - -c\n                - date; echo Hello from the Kubernetes cluster\n          restartPolicy: OnFailure\n")),(0,l.kt)("h2",{id:"ipv6dualstack"},"IPv6DualStack"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/enhancements/tree/master/keps/sig-network/563-dual-stack"},"KEP#563"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  name: my-service\nspec:\n  type: ClusterIP\n  selector:\n    app: MyApp\n  ports:\n    - protocol: TCP\n      port: 80\n      targetPort: 9376\n  # \u9ed8\u8ba4 SingleStack, \u652f\u6301 PreferDualStack, RequireDualStack\n  ipFamilyPolicy: RequireDualStack\n  ipFamilies:\n    - IPv4\n    - IPv6\n  # \u7533\u8bf7\u5230\u7684\u5730\u5740\n  clusterIP: 1.2.3.4\n  clusterIPs:\n    - 1.2.3.4\n    - 2001::1\n")))}m.isMDXComponent=!0}}]);