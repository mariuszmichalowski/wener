"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[41433],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,d=m["".concat(s,".").concat(f)]||m[f]||c[f]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34170:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"Longhorn \u7248\u672c"},s=void 0,p={unversionedId:"devops/kubernetes/storage/longhorn-version",id:"devops/kubernetes/storage/longhorn-version",title:"Longhorn \u7248\u672c",description:"v1.1",source:"@site/notes/devops/kubernetes/storage/longhorn-version.md",sourceDirName:"devops/kubernetes/storage",slug:"/devops/kubernetes/storage/longhorn-version",permalink:"/notes/devops/kubernetes/storage/longhorn-version",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/storage/longhorn-version.md",tags:[],version:"current",frontMatter:{title:"Longhorn \u7248\u672c"},sidebar:"docs",previous:{title:"Longhorn \u5e38\u89c1\u95ee\u9898",permalink:"/notes/devops/kubernetes/storage/longhorn-faq"},next:{title:"OpenEBS",permalink:"/notes/devops/kubernetes/storage/openebs"}},u=[{value:"v1.1",id:"v11",children:[],level:2}],c={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"v11"},"v1.1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2020-10-18"),(0,a.kt)("li",{parentName:"ul"},"\u8bd5\u9a8c\u6027 ",(0,a.kt)("a",{parentName:"li",href:"https://longhorn.io/docs/1.1.0/advanced-resources/rwx-workloads/"},"RWX"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f1a\u542f\u52a8 NFSv4 \u63d0\u4f9b\u670d\u52a1"))),(0,a.kt)("li",{parentName:"ul"},"ARM64"),(0,a.kt)("li",{parentName:"ul"},"CSI Snapshotter",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"longhornio/csi-provisioner:v1.6.0"),(0,a.kt)("li",{parentName:"ul"},"longhornio/csi-snapshotter:v2.1.1"),(0,a.kt)("li",{parentName:"ul"},"CRD ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-csi/external-snapshotter/tree/master/client/config/crd"},"kubernetes-csi/external-snapshotter/client/config/crd")),(0,a.kt)("li",{parentName:"ul"},"Controller - ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-csi/external-snapshotter/tree/master/deploy/kubernetes/snapshot-controller"},"kubernetes-csi/external-snapshotter/deploy/kubernetes/snapshot-controller")))),(0,a.kt)("li",{parentName:"ul"},"Prometheus Metrics"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://longhorn.io/docs/1.1.0/high-availability/data-locality/"},"Data Locality")),(0,a.kt)("li",{parentName:"ul"},"K8S v1.16+")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# k8s >= 1.17\nkind: VolumeSnapshotClass\napiVersion: snapshot.storage.k8s.io/v1beta1\nmetadata:\n  name: longhorn\ndriver: driver.longhorn.io\ndeletionPolicy: Delete\n")))}m.isMDXComponent=!0}}]);