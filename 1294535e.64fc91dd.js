(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{1151:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return g}));var o=r(0),n=r.n(o);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),d=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=d(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(r),b=o,g=u["".concat(l,".").concat(b)]||u[b]||p[b]||i;return r?n.a.createElement(g,a(a({ref:t},s),{},{components:r})):n.a.createElement(g,a({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=b;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=r[s];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},146:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return a})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return d}));var o=r(3),n=r(8),i=(r(0),r(1151)),l={title:"Longhorn \u5e38\u89c1\u95ee\u9898"},a={unversionedId:"devops/kubernetes/storage/longhorn-faq",id:"devops/kubernetes/storage/longhorn-faq",isDocsHomePage:!1,title:"Longhorn \u5e38\u89c1\u95ee\u9898",description:"Longhorn on K3S",source:"@site/notes/devops/kubernetes/storage/longhorn-faq.md",slug:"/devops/kubernetes/storage/longhorn-faq",permalink:"/notes/devops/kubernetes/storage/longhorn-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/storage/longhorn-faq.md",version:"current",sidebar:"docs",previous:{title:"Local PV",permalink:"/notes/devops/kubernetes/storage/local-pv"},next:{title:"Longhorn \u7248\u672c",permalink:"/notes/devops/kubernetes/storage/longhorn-version"}},c=[{value:"Longhorn on K3S",id:"longhorn-on-k3s",children:[]},{value:"Error deploying driver: failed to get kubelet root dir, no related proc for root-dir detection, error out",id:"error-deploying-driver-failed-to-get-kubelet-root-dir-no-related-proc-for-root-dir-detection-error-out",children:[]},{value:"MountVolume.SetUp failed for volume &quot;registration-dir&quot; : hostPath type check failed: /var/lib/rancher/k3s/agent/kubelet/plugins_registry is not a directory",id:"mountvolumesetup-failed-for-volume-registration-dir--hostpath-type-check-failed-varlibrancherk3sagentkubeletplugins_registry-is-not-a-directory",children:[]},{value:"Unable to attach or mount volumes: unmounted volumes=registration-dir, unattached volumes=registration-dir lib-modules socket-dir host-dev host-sys longhorn-service-account-token-7ppv2 pods-mount-dir host kubernetes-csi-dir: timed out waiting for the condition",id:"unable-to-attach-or-mount-volumes-unmounted-volumesregistration-dir-unattached-volumesregistration-dir-lib-modules-socket-dir-host-dev-host-sys-longhorn-service-account-token-7ppv2-pods-mount-dir-host-kubernetes-csi-dir-timed-out-waiting-for-the-condition",children:[]},{value:"cannot find disk config file, maybe due to a mount error",id:"cannot-find-disk-config-file-maybe-due-to-a-mount-error",children:[]},{value:"\u8282\u70b9 Allocated \u4e3a\u8d1f",id:"\u8282\u70b9-allocated-\u4e3a\u8d1f",children:[]},{value:"\u5378\u8f7d",id:"\u5378\u8f7d",children:[]},{value:"driver name driver.longhorn.io not found in the list of registered CSI drivers",id:"driver-name-driverlonghornio-not-found-in-the-list-of-registered-csi-drivers",children:[]},{value:"Still connecting to unix:///csi/csi.sock",id:"still-connecting-to-unixcsicsisock",children:[]}],s={toc:c};function d(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"longhorn-on-k3s"},"Longhorn on K3S"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://longhorn.io/docs/1.1.0/advanced-resources/os-distro-specific/csi-on-k3s/"},"https://longhorn.io/docs/1.1.0/advanced-resources/os-distro-specific/csi-on-k3s/"))),Object(i.b)("h2",{id:"error-deploying-driver-failed-to-get-kubelet-root-dir-no-related-proc-for-root-dir-detection-error-out"},"Error deploying driver: failed to get kubelet root dir, no related proc for root-dir detection, error out"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"csi:\n  # 1.0.2\n  # https://github.com/longhorn/longhorn/issues/1861#issuecomment-705297295\n  kubeletRootDir: /var/lib/rancher/k3s/agent/kubelet\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/longhorn/longhorn/issues/1861"},"#1861"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'time="2021-02-23T16:39:59Z" level=error msg="failed to get arg root-dir. Need to specify \\"--kubelet-root-dir\\" in your Longhorn deployment yaml.: failed to get kubelet root dir, no related proc for root-dir detection, error out"\ntime="2021-02-23T16:39:59Z" level=fatal msg="Error deploying driver: failed to get arg root-dir. Need to specify \\"--kubelet-root-dir\\" in your Longhorn deployment yaml.: failed to get kubelet root dir, no related proc for root-dir detection, error out"\n')),Object(i.b)("h2",{id:"mountvolumesetup-failed-for-volume-registration-dir--hostpath-type-check-failed-varlibrancherk3sagentkubeletplugins_registry-is-not-a-directory"},'MountVolume.SetUp failed for volume "registration-dir" : hostPath type check failed: /var/lib/rancher/k3s/agent/kubelet/plugins_registry is not a directory'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# \u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u6267\u884c\nsudo mkdir /var/lib/rancher/k3s/agent/kubelet/plugins_registry\n")),Object(i.b)("h2",{id:"unable-to-attach-or-mount-volumes-unmounted-volumesregistration-dir-unattached-volumesregistration-dir-lib-modules-socket-dir-host-dev-host-sys-longhorn-service-account-token-7ppv2-pods-mount-dir-host-kubernetes-csi-dir-timed-out-waiting-for-the-condition"},"Unable to attach or mount volumes: unmounted volumes=","[registration-dir]",", unattached volumes=","[registration-dir lib-modules socket-dir host-dev host-sys longhorn-service-account-token-7ppv2 pods-mount-dir host kubernetes-csi-dir]",": timed out waiting for the condition"),Object(i.b)("h2",{id:"cannot-find-disk-config-file-maybe-due-to-a-mount-error"},"cannot find disk config file, maybe due to a mount error"),Object(i.b)("p",null,"\u8282\u70b9\u4e0a\u78c1\u76d8\u4e0d\u5b58\u5728\uff0c\u5220\u9664\u91cd\u5efa"),Object(i.b)("h2",{id:"\u8282\u70b9-allocated-\u4e3a\u8d1f"},"\u8282\u70b9 Allocated \u4e3a\u8d1f"),Object(i.b)("p",null,"\u5220\u9664 disk \u4ece\u65b0\u521b\u5efa\uff0c\u5982\u679c\u9009\u62e9\u7684\u76ee\u5f55\u4e0d\u5b58\u5728\u53ef\u80fd\u4e5f\u4f1a\u6709\u95ee\u9898"),Object(i.b)("h2",{id:"\u5378\u8f7d"},"\u5378\u8f7d"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"kubectl delete -f https://raw.githubusercontent.com/longhorn/longhorn/v1.1.0/deploy/longhorn.yaml\nkubectl delete -f https://raw.githubusercontent.com/longhorn/longhorn/v1.1.0/uninstall/uninstall.yaml\n\n# \u5982\u679c CRD \u8fd8\u5728\u53ef\u4ee5\u5f3a\u5236\u5220\u9664\nfor crd in $(kubectl get crd -o jsonpath={.items[*].metadata.name} | tr ' ' '\\n' | grep longhorn.rancher.io); do\n  kubectl -n ${NAMESPACE} get $crd -o yaml | sed \"s/\\- longhorn.rancher.io//g\" | kubectl apply -f -\n  kubectl -n ${NAMESPACE} delete $crd --all\n  kubectl delete crd/$crd\ndone\n")),Object(i.b)("h2",{id:"driver-name-driverlonghornio-not-found-in-the-list-of-registered-csi-drivers"},"driver name driver.longhorn.io not found in the list of registered CSI drivers"),Object(i.b)("h2",{id:"still-connecting-to-unixcsicsisock"},"Still connecting to unix:///csi/csi.sock"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"longhorn-csi-plugin \u542f\u52a8\u5931\u8d25")))}d.isMDXComponent=!0}}]);