(window.webpackJsonp=window.webpackJsonp||[]).push([[509],{1166:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return O}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),u=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},o=function(e){var t=u(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),o=u(r),s=a,O=o["".concat(l,".").concat(s)]||o[s]||m[s]||i;return r?n.a.createElement(O,b(b({ref:t},p),{},{components:r})):n.a.createElement(O,b({ref:t},p))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=s;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var p=2;p<i;p++)l[p]=r[p];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},583:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return b})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(8),i=(r(0),r(1166)),l={id:"vmware",title:"VmWare"},b={unversionedId:"os/virt/vmware",id:"os/virt/vmware",isDocsHomePage:!1,title:"VmWare",description:"Tips",source:"@site/notes/os/virt/vmware.md",slug:"/os/virt/vmware",permalink:"/notes/os/virt/vmware",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/virt/vmware.md",version:"current",sidebar:"docs",previous:{title:"Virtio",permalink:"/notes/os/virt/virtio"},next:{title:"Darwin",permalink:"/notes/os/darwin/README"}},c=[{value:"Tips",id:"tips",children:[]},{value:"ESXi vs vSphere vs vCenter",id:"esxi-vs-vsphere-vs-vcenter",children:[]},{value:"\u78c1\u76d8\u6ca1\u6709 UUID",id:"\u78c1\u76d8\u6ca1\u6709-uuid",children:[]}],p={toc:c};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u684c\u9762\u4ea7\u54c1",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Workstation"),Object(i.b)("li",{parentName:"ul"},"Fusion"),Object(i.b)("li",{parentName:"ul"},"Workstation Player - \u514d\u8d39\u975e\u5546\u4e1a\u7248"))),Object(i.b)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u4ea7\u54c1",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"ESXi"))),Object(i.b)("li",{parentName:"ul"},"\u4e91\u4ea7\u54c1",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"VMware vRealize Suite - \u6df7\u5408\u4e91\u7ba1\u7406\u5e73\u53f0"),Object(i.b)("li",{parentName:"ul"},"VMware Go - VMware vSphere Hypervisor Web \u5b89\u88c5\u5de5\u5177"),Object(i.b)("li",{parentName:"ul"},"VMware Cloud Foundation - \u79c1\u6709\u4e91\u5b89\u88c5\u90e8\u7f72 - SDDC \u7cfb\u7edf\u96c6\u6210"),Object(i.b)("li",{parentName:"ul"},"VMware Horizon View - virtual desktop infrastructure (VDI)"),Object(i.b)("li",{parentName:"ul"},"VMware vSphere",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"VMware Infrastructure 4 \u4e4b\u524d\u540d\u5b57"))))),Object(i.b)("li",{parentName:"ul"},"vCenter Server Appliance with an Embedded Platform Services Controller (PSC)"),Object(i.b)("li",{parentName:"ul"},"Wikipedia ",Object(i.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/VMware_VMFS"},"VMFS")),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://kb.vmware.com/s/article/1003746"},"Virtual machine hardware versions"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"ESXi 7.0 vmx-17+"),Object(i.b)("li",{parentName:"ul"},"ESXi 6.0 vmx-11+"),Object(i.b)("li",{parentName:"ul"},"ESXi 5.0 vmx-8+")))))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# QCOW2 \u8f6c vmdk\n# flat \u683c\u5f0f\uff0c\u80fd\u5bfc\u5165\uff0c\u4f46\u662f\u662f\u5b8c\u6574\u5927\u5c0f\u955c\u50cf\uff0c\u4e0a\u4f20\u975e\u5e38\u6162\nqemu-img convert -f qcow2 -O vmdk -o adapter_type=lsilogic,subformat=monolithicFlat alpine.qcow2 alpine.vmdk\n# https://kb.vmware.com/s/article/2144687\nqemu-img convert -f qcow2 -O vmdk -o subformat=streamOptimized alpine.qcow2 alpine.vmdk\nprintf '\\x03' | dd conv=notrunc of=alpine.vmdk bs=1 seek=$((0x4))\n")),Object(i.b)("h1",{id:"faq"},"FAQ"),Object(i.b)("h2",{id:"esxi-vs-vsphere-vs-vcenter"},"ESXi vs vSphere vs vCenter"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"vSphere",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4ea7\u54c1\u96c6/\u5e73\u53f0"),Object(i.b)("li",{parentName:"ul"},"\u5176\u4e2d Hypervisor \u4e3a ESXi"),Object(i.b)("li",{parentName:"ul"},"Web \u7ba1\u7406\u7aef\u64cd\u4f5c ESXi"),Object(i.b)("li",{parentName:"ul"},"\u529f\u80fd",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u865a\u62df\u6570\u636e\u4e2d\u5fc3\u7ba1\u7406"),Object(i.b)("li",{parentName:"ul"},"\u8fc1\u79fb"),Object(i.b)("li",{parentName:"ul"},"\u8fdc\u7a0b\u7ba1\u7406"))))),Object(i.b)("li",{parentName:"ul"},"vCenter",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u96c6\u4e2d\u7ba1\u7406 - \u7ba1\u7406 ESXi \u96c6\u7fa4"),Object(i.b)("li",{parentName:"ul"},"\u4e00\u822c\u865a\u62df\u673a\u65b9\u5f0f\u5b89\u88c5"),Object(i.b)("li",{parentName:"ul"},"\u529f\u80fd",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5355\u70b9\u767b\u9646"),Object(i.b)("li",{parentName:"ul"},"\u8bbe\u5907\u8bbe\u65bd\u4ed3\u5e93"),Object(i.b)("li",{parentName:"ul"},"\u901a\u77e5\u544a\u8b66"),Object(i.b)("li",{parentName:"ul"},"\u4e3b\u673a\u4fe1\u606f"))))),Object(i.b)("li",{parentName:"ul"},"ESXi",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Hypervisor"),Object(i.b)("li",{parentName:"ul"},"\u76f4\u63a5\u5b89\u88c5\u5728\u7269\u7406\u673a\u4e0a"),Object(i.b)("li",{parentName:"ul"},"\u5b9e\u9645\u8fd0\u884c\u865a\u62df\u673a"),Object(i.b)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e Xen \u7684 dom0"),Object(i.b)("li",{parentName:"ul"},"\u5355\u8282\u70b9")))),Object(i.b)("h2",{id:"\u78c1\u76d8\u6ca1\u6709-uuid"},"\u78c1\u76d8\u6ca1\u6709 UUID"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"ESX/ESXi 4.1 \u589e\u52a0\u53c2\u6570 disk.enableUUID"),Object(i.b)("li",{parentName:"ul"},"\u65e9\u8d77\u7248\u672c\u8fc1\u79fb\u53ef\u80fd\u4f1a\u6709\u51b2\u7a81"),Object(i.b)("li",{parentName:"ul"},"\u5c06 disk.enableUUID \u8bbe\u7f6e\u4e3a true \u542f\u7528 UUID"),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://kb.vmware.com/s/article/2009065"},"https://kb.vmware.com/s/article/2009065")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://communities.vmware.com/t5/VMware-vSphere-Discussions/Why-is-disk-enableuuid-TRUE-not-the-default/td-p/518472"},"Why is disk.enableuuid=TRUE not the default?"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4e3b\u8981\u5f71\u54cd clone")))))))}u.isMDXComponent=!0}}]);