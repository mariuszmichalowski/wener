"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[39353],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return d}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),o=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=o(t.components);return n.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=o(a),d=r,c=k["".concat(u,".").concat(d)]||k[d]||s[d]||l;return a?n.createElement(c,i(i({ref:e},m),{},{components:a})):n.createElement(c,i({ref:e},m))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},87526:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return o},toc:function(){return m},default:function(){return k}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],p={title:"Kubernates \u5b58\u50a8"},u=void 0,o={unversionedId:"devops/kubernetes/storage/README",id:"devops/kubernetes/storage/README",title:"Kubernates \u5b58\u50a8",description:"- \u5bf9\u4e8e\u7c7b\u4f3c OSS/S3/Swift \u7c7b\u7684\u5b58\u50a8\u670d\u52a1\uff0c\u5e94\u8be5\u5f53\u4f5c\u670d\u52a1\u6765\u4f7f\u7528\uff0c\u800c\u4e0d\u662f\u4f5c\u4e3a\u6587\u4ef6\u7cfb\u7edf",source:"@site/notes/devops/kubernetes/storage/README.md",sourceDirName:"devops/kubernetes/storage",slug:"/devops/kubernetes/storage/",permalink:"/notes/devops/kubernetes/storage/",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/storage/README.md",tags:[],version:"current",frontMatter:{title:"Kubernates \u5b58\u50a8"},sidebar:"docs",previous:{title:"OpenEBS Version",permalink:"/notes/devops/kubernetes/storage/openebs-version"},next:{title:"Rook",permalink:"/notes/devops/kubernetes/storage/rook"}},m=[{value:"PersistentVolume vs PersistentVolumeClaim",id:"persistentvolume-vs-persistentvolumeclaim",children:[],level:2}],s={toc:m};function k(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u7c7b\u4f3c OSS/S3/Swift \u7c7b\u7684\u5b58\u50a8\u670d\u52a1\uff0c\u5e94\u8be5\u5f53\u4f5c\u670d\u52a1\u6765\u4f7f\u7528\uff0c\u800c\u4e0d\u662f\u4f5c\u4e3a\u6587\u4ef6\u7cfb\u7edf",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u4ee3\u7801\u8bfb\u5199"))),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u591a\u4e2a Pod \u60f3\u8981\u5171\u4eab\u5b58\u50a8\uff0c\u5219\u672c\u8d28\u662f ReadWriteMany\uff0c\u6700\u7b80\u5355\u7684\u9009\u9879\u662f NFS"),(0,l.kt)("li",{parentName:"ul"},"PV - PVC - Pod \u7684\u5173\u7cfb\u5728 ReadWriteOnce \u7684\u5173\u7cfb\u4e0b\u90fd\u662f 1:1:1 \u7684"),(0,l.kt)("li",{parentName:"ul"},"PV \u53ef\u80fd\u4f1a\u5bf9\u5e94\u5b58\u50a8\u5b9e\u73b0\u5185\u90e8\u7684 Volume - \u5927\u591a\u6570\u65f6\u5019\u4e5f\u662f 1:1 \u7684"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u542f\u52a8\u4e00\u4e2a NFS \u670d\u52a1\u5728\u96c6\u7fa4\u5185\u4f7f\u7528"),(0,l.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u7684\u4f7f\u7528\u8bbe\u8ba1\u4e5f\u9075\u5faa\u4e00\u5b9a\u6a21\u5f0f - \u5b58\u50a8\u4e5f\u662f\u5e94\u7528\u5c01\u88c5\u72ec\u7acb\u7684\u4e00\u5c42")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/storage/volumes"},"Volume")," - \u5377",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6709\u751f\u547d\u5468\u671f"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u91cd\u542f\u540e\u4f9d\u7136\u4fdd\u7559"),(0,l.kt)("li",{parentName:"ul"},"\u672c\u8d28\u4e0a\u7c7b\u4f3c\u4e8e\u4e00\u4e2a\u76ee\u5f55"),(0,l.kt)("li",{parentName:"ul"},"volumeMounts \u6307\u5b9a Pod \u8981\u6302\u8f7d\u7684\u5377"),(0,l.kt)("li",{parentName:"ul"},"volumes \u6307\u5b9a\u5377\u600e\u4e48\u63d0\u4f9b"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://portworx.com/basic-guide-kubernetes-storage/"},"A Basic Guide to Kubernetes Storage: PVS, PVCs, Statefulsets")),(0,l.kt)("li",{parentName:"ul"},"\u5377\u7c7b\u578b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"awsElasticBlockStore"),(0,l.kt)("li",{parentName:"ul"},"azureDisk"),(0,l.kt)("li",{parentName:"ul"},"azureFile"),(0,l.kt)("li",{parentName:"ul"},"cephfs - Ceph \u7684\u6587\u4ef6\u7cfb\u7edf"),(0,l.kt)("li",{parentName:"ul"},"cinder - OpenStack \u5757\u5b58\u50a8"),(0,l.kt)("li",{parentName:"ul"},"configMap - \u6302\u8f7d ConfigMap \u4f5c\u4e3a\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"csi - Container Storage Interface - \u62bd\u8c61\u5c42"),(0,l.kt)("li",{parentName:"ul"},"downwardAPI"),(0,l.kt)("li",{parentName:"ul"},"emptyDir - \u7a7a\u76ee\u5f55 - \u7c7b\u4f3c\u7ad9\u4f4d"),(0,l.kt)("li",{parentName:"ul"},"fc (fibre channel)"),(0,l.kt)("li",{parentName:"ul"},"flexVolume - \u7c7b\u4f3c\u4e8e CSI \u524d\u8eab"),(0,l.kt)("li",{parentName:"ul"},"flocker"),(0,l.kt)("li",{parentName:"ul"},"gcePersistentDisk"),(0,l.kt)("li",{parentName:"ul"},"gitRepo (deprecated)"),(0,l.kt)("li",{parentName:"ul"},"glusterfs"),(0,l.kt)("li",{parentName:"ul"},"hostPath - \u4e3b\u673a\u76ee\u5f55"),(0,l.kt)("li",{parentName:"ul"},"iscsi - iSCSI \u78c1\u76d8\u5757"),(0,l.kt)("li",{parentName:"ul"},"local"),(0,l.kt)("li",{parentName:"ul"},"nfs - NFS \u7f51\u7edc\u6587\u4ef6\u7cfb\u7edf - Linux"),(0,l.kt)("li",{parentName:"ul"},"persistentVolumeClaim"),(0,l.kt)("li",{parentName:"ul"},"projected"),(0,l.kt)("li",{parentName:"ul"},"portworxVolume"),(0,l.kt)("li",{parentName:"ul"},"quobyte"),(0,l.kt)("li",{parentName:"ul"},"rbd - Ceph \u7684 RBD \u5757\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"scaleIO"),(0,l.kt)("li",{parentName:"ul"},"secret - \u6302\u8f7d secret \u4f5c\u4e3a\u6587\u4ef6\u7cfb\u7edf"),(0,l.kt)("li",{parentName:"ul"},"storageos"),(0,l.kt)("li",{parentName:"ul"},"vsphereVolume"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"},"Persistent Volume")," - \u6301\u4e45\u5377")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u5220\u9664\u6b63\u5728\u4f7f\u7528\u7684 PVC \u4e0d\u4f1a\u7acb\u5373\u5220\u9664\uff0c\u4f1a\u5728 Pod \u4e0d\u4f7f\u7528\u540e\u6267\u884c"),(0,l.kt)("li",{parentName:"ul"},"\u5220\u9664\u7ed1\u5b9a\u4e86 PVC \u7684 PV \u4e5f\u4f1a\u63a8\u8fdf\u5230 PVC \u5220\u9664\u540e\u6267\u884c")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl get storageclass\n\n# \u53d6\u6d88 sc \u7684\u9ed8\u8ba4\u503c\nkubectl patch storageclass local-path -p \'{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"false"}}}\'\n# \u8bbe\u7f6e\u9ed8\u8ba4\nkubectl patch storageclass longhorn -p \'{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}\'\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Plugin"),(0,l.kt)("th",{parentName:"tr",align:null},"RWO"),(0,l.kt)("th",{parentName:"tr",align:null},"ROM"),(0,l.kt)("th",{parentName:"tr",align:null},"RWM"),(0,l.kt)("th",{parentName:"tr",align:null},"Storage Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CephFS"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"Filesystem")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cinder"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Block")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CSI"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Interface")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FC"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Block")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FlexVolume"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Block")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Glusterfs"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"Filesystem")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HostPath"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Filesystem")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"iSCSI"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Block")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NFS"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"Filesystem")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RBD"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Block")))),(0,l.kt)("h1",{id:"faq"},"FAQ"),(0,l.kt)("h2",{id:"persistentvolume-vs-persistentvolumeclaim"},"PersistentVolume vs PersistentVolumeClaim"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"PersistentVolume, PersistentVolumeClaim - API \u5bf9\u8c61 - \u62bd\u8c61\u5b58\u50a8\u662f\u5982\u4f55\u63d0\u4f9b\u5982\u4f55\u6d88\u8d39\u7684"),(0,l.kt)("li",{parentName:"ul"},"Pod -> PVC -> PV -> \u5bbf\u4e3b\u673a")),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"PersistentVolume - PV",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u7684\u5b58\u50a8\u5377 - \u901a\u8fc7 StorageClass \u521b\u5efa"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5b9e\u9645\u8d44\u6e90")),(0,l.kt)("li",{parentName:"ul"},"\u5206\u4e3a\u9759\u6001\u548c\u52a8\u6001\u63d0\u4f9b"))),(0,l.kt)("li",{parentName:"ul"},"PersistentVolumeClaim - PVC",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Pod \u7533\u8bf7\u4f7f\u7528 PV \u8d44\u6e90\u7684 ",(0,l.kt)("strong",{parentName:"li"},"\u8bf7\u6c42\u5bf9\u8c61")),(0,l.kt)("li",{parentName:"ul"},"\u7533\u8bf7\u53ef\u80fd\u6307\u540d\u6240\u9700\u5377\u7684\u5c5e\u6027 - \u4f8b\u5982 \u6027\u80fd"),(0,l.kt)("li",{parentName:"ul"},"PVC \u4f1a\u88ab\u6700\u7ec8\u7ed1\u5b9a\u5230 PV")))))}k.isMDXComponent=!0}}]);