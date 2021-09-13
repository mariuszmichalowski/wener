"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[96831],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(n),k=r,d=c["".concat(u,".").concat(k)]||c[k]||p[k]||i;return n?a.createElement(d,l(l({ref:t},m),{},{components:n})):a.createElement(d,l({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},46361:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return m},default:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"kustomize"},u=void 0,s={unversionedId:"devops/kubernetes/tool/kustomize",id:"devops/kubernetes/tool/kustomize",isDocsHomePage:!1,title:"kustomize",description:"- kubernetes-sigs/kustomize",source:"@site/notes/devops/kubernetes/tool/kustomize.md",sourceDirName:"devops/kubernetes/tool",slug:"/devops/kubernetes/tool/kustomize",permalink:"/notes/devops/kubernetes/tool/kustomize",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/tool/kustomize.md",tags:[],version:"current",frontMatter:{title:"kustomize"},sidebar:"docs",previous:{title:"krew",permalink:"/notes/devops/kubernetes/tool/krew"},next:{title:"Linux Awesome",permalink:"/notes/os/linux/linux-awesome"}},m=[{value:"\u76ee\u5f55\u7ed3\u6784",id:"\u76ee\u5f55\u7ed3\u6784",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u6279\u91cf\u5408\u5e76\u4fee\u6539",id:"\u6279\u91cf\u5408\u5e76\u4fee\u6539",children:[]},{value:"accumulating resources: accumulation err=&#39;merging resources from &#39;res.yaml&#39;: may not add resource with an already registered id",id:"accumulating-resources-accumulation-errmerging-resources-from-resyaml-may-not-add-resource-with-an-already-registered-id",children:[]},{value:"index out of range 4 with length 4",id:"index-out-of-range-4-with-length-4",children:[]}],p={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/kustomize"},"kubernetes-sigs/kustomize")),(0,i.kt)("li",{parentName:"ul"},"kustomize ",(0,i.kt)("a",{parentName:"li",href:"https://kubectl.docs.kubernetes.io/references/kustomize/"},"reference")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubectl.docs.kubernetes.io/pages/app_management/introduction.html"},"kubectl apply -k"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"v1.14+"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/kustomize/issues/1500"},"#1500")," - \u5347\u7ea7\u5230\u65b0\u7248\u53d7\u5230\u963b\u788d"))),(0,i.kt)("li",{parentName:"ul"},"\u7279\u70b9",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u57fa\u4e8e\u5b57\u7b26\u4e32\u6a21\u677f"),(0,i.kt)("li",{parentName:"ul"},"\u53d8\u91cf\u5f15\u7528",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"vars"))),(0,i.kt)("li",{parentName:"ul"},"Patch \u4fee\u6539\u5b9a\u4e49",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"JSON Patch"),(0,i.kt)("li",{parentName:"ul"},"patchesStrategicMerge"),(0,i.kt)("li",{parentName:"ul"},"patchesJson6902"))),(0,i.kt)("li",{parentName:"ul"},"DSL \u4fee\u6539\u5b9a\u4e49",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"namespace"),(0,i.kt)("li",{parentName:"ul"},"namePrefix"),(0,i.kt)("li",{parentName:"ul"},"nameSuffix"),(0,i.kt)("li",{parentName:"ul"},"commonLabels"),(0,i.kt)("li",{parentName:"ul"},"commonAnnotations"),(0,i.kt)("li",{parentName:"ul"},"images - \u955c\u50cf\u66ff\u6362"))),(0,i.kt)("li",{parentName:"ul"},"DSL \u751f\u6210\u5b9a\u4e49",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"configmapGenerator"),(0,i.kt)("li",{parentName:"ul"},"secretGenerator"),(0,i.kt)("li",{parentName:"ul"},"generatorOptions"))),(0,i.kt)("li",{parentName:"ul"},"\u8d44\u6e90\u805a\u5408",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"resources"),(0,i.kt)("li",{parentName:"ul"},"bases - overlay \u591a\u5c42\u76ee\u5f55"),(0,i.kt)("li",{parentName:"ul"},"configurations"),(0,i.kt)("li",{parentName:"ul"},"crds"))))),(0,i.kt)("li",{parentName:"ul"},"kustomization.yaml - \u6838\u5fc3\u5b9a\u4e49\u6587\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/"},"Declarative Management of Kubernetes Objects Using Kustomize"))))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u79fb\u9664\u8d44\u6e90 - ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/kustomize/issues/1593"},"#1593"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# macOS\nbrew install kustomize\n")),(0,i.kt)("h2",{id:"\u76ee\u5f55\u7ed3\u6784"},"\u76ee\u5f55\u7ed3\u6784"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5e94\u7528\u57fa\u7840\u76ee\u5f55\nmkdir -p app/base app/overlays/{staging,production}\n\n# kustomize build \u751f\u6210 yaml\n# \u90e8\u7f72\u4e0d\u540c\u73af\u5883\nkustomize build ~/ldap/overlays/staging | kubectl apply -f - --context staging\nkustomize build ~/ldap/overlays/production | kubectl apply -f - --context production\n\n# -k \u53ef\u76f4\u63a5 apply\nkubectl apply -k ~/ldap/overlays/staging --context staging\nkubectl apply -k ~/ldap/overlays/production --context production\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"~/someApp - \u57fa\u7840\u5e94\u7528\u76ee\u5f55\n\u251c\u2500\u2500 base - \u57fa\u7840\u5c42\n\u2502   \u251c\u2500\u2500 deployment.yaml\n\u2502   \u251c\u2500\u2500 kustomization.yaml\n\u2502   \u2514\u2500\u2500 service.yaml\n\u2514\u2500\u2500 overlays - \u53e0\u52a0\u5c42\n    \u251c\u2500\u2500 development - base+\u5f00\u53d1\u73af\u5883\u81ea\u5b9a\u4e49\u5185\u5bb9\n    \u2502   \u251c\u2500\u2500 cpu_count.yaml\n    \u2502   \u251c\u2500\u2500 kustomization.yaml\n    \u2502   \u2514\u2500\u2500 replica_count.yaml\n    \u2514\u2500\u2500 production - base+\u751f\u4ea7\u73af\u5883\u81ea\u5b9a\u4e49\u5185\u5bb9\n        \u251c\u2500\u2500 cpu_count.yaml\n        \u251c\u2500\u2500 kustomization.yaml\n        \u2514\u2500\u2500 replica_count.yaml\n")),(0,i.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/kustomize/tree/master/examples/transformerconfigs"},"https://github.com/kubernetes-sigs/kustomize/tree/master/examples/transformerconfigs"))),(0,i.kt)("h2",{id:"\u6279\u91cf\u5408\u5e76\u4fee\u6539"},"\u6279\u91cf\u5408\u5e76\u4fee\u6539"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"kustomization.yaml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"patches:\n  - target:\n      kind: Application\n    path: patch.yaml\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"patch.yaml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"apiVersion: argoproj.io/v1alpha1\nkind: Application\nmetadata:\n  # \u5339\u914d\u6240\u6709\n  name: '*'\nspec:\n  project: dev-cluster\n")),(0,i.kt)("h1",{id:"faq"},"FAQ"),(0,i.kt)("h2",{id:"accumulating-resources-accumulation-errmerging-resources-from-resyaml-may-not-add-resource-with-an-already-registered-id"},"accumulating resources: accumulation err='merging resources from 'res.yaml': may not add resource with an already registered id"),(0,i.kt)("p",null,"\u68c0\u67e5\u662f\u5426\u5df2\u7ecf\u5b9a\u4e49\u8fc7\u8d44\u6e90"),(0,i.kt)("h2",{id:"index-out-of-range-4-with-length-4"},"index out of range ","[4]"," with length 4"),(0,i.kt)("p",null,"YAML \u8bed\u6cd5\u53ef\u80fd\u6ca1\u6709\u95ee\u9898\uff0c\u4f46\u662f\u6709 CJK \u53ef\u80fd\u4f1a\u5bfc\u81f4\u8fd9\u4e2a\u5f02\u5e38"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/kustomize/issues/3778"},"kubernetes-sigs/kustomize#3778")," - Can not add any comment in .yaml",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"go-yaml \u5305\u7248\u672c\u95ee\u9898")))))}c.isMDXComponent=!0}}]);