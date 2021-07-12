(window.webpackJsonp=window.webpackJsonp||[]).push([[666],{1129:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.a.createContext({}),c=function(e){var t=a.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),b=r,d=p["".concat(l,".").concat(b)]||p[b]||u[b]||o;return n?a.a.createElement(d,i(i({ref:t},m),{},{components:n})):a.a.createElement(d,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},740:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var r=n(3),a=n(8),o=(n(0),n(1129)),l={title:"ESXi"},i={unversionedId:"os/virt/esxi",id:"os/virt/esxi",isDocsHomePage:!1,title:"ESXi",description:"- wikipedia VMFS",source:"@site/notes/os/virt/esxi.md",slug:"/os/virt/esxi",permalink:"/notes/os/virt/esxi",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/virt/esxi.md",version:"current",sidebar:"docs",previous:{title:"\u865a\u62df\u5316",permalink:"/notes/os/virt/virt"},next:{title:"Firecracker",permalink:"/notes/os/virt/firecracker"}},s=[{value:"esxcli",id:"esxcli",children:[]}],m={toc:s};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"wikipedia ",Object(o.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/VMware_VMFS"},"VMFS")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/VMware_ESXi"},"VMware ESXi"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Elastic Sky X integrated"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.vmware.com/content/dam/digitalmarketing/vmware/en/pdf/vsphere/vmw-feature-comparison.pdf"},"VMware vSphere\xae Feature Comparison")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.vmware.com/reusable_content/vsphere_pricing.html"},"Pricing")),Object(o.b)("li",{parentName:"ul"},".vmx, .vmdk, .vmsd, .vmsn")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Item"),Object(o.b)("th",{parentName:"tr",align:null},"Free"),Object(o.b)("th",{parentName:"tr",align:null},"Paid"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"physical CPUs"),Object(o.b)("td",{parentName:"tr",align:null},"2"),Object(o.b)("td",{parentName:"tr",align:null},"768")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"physical memory"),Object(o.b)("td",{parentName:"tr",align:null},"16TB"),Object(o.b)("td",{parentName:"tr",align:null},"16TB")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"vCPUs per VM"),Object(o.b)("td",{parentName:"tr",align:null},"8 vCPUs"),Object(o.b)("td",{parentName:"tr",align:null},"256 vCPUs")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"vRAM per VM"),Object(o.b)("td",{parentName:"tr",align:null},"6TB"),Object(o.b)("td",{parentName:"tr",align:null},"6TB")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"qemu-img convert -f qcow2 -O vmdk -o adapter_type=lsilogic,subformat=streamOptimized,compat6 SC-1.qcow2 SC-1.vmdk\n\n# https://github.com/alpinelinux/alpine-make-vm-image#creating-image-for-vmware-esxi\nqemu-img convert -f qcow2 -O vmdk -o adapter_type=lsilogic,subformat=monolithicFlat alpine.qcow2 alpine.vmdk\n")),Object(o.b)("h2",{id:"esxcli"},"esxcli"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://code.vmware.com/docs/11743/esxi-7-0-esxcli-command-reference"},"ESXi 7.0 ESXCLI Command Reference"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# \u670d\u52a1\u5668\u4fe1\u606f\nesxcli --server myESXi --username user1 --password 'my_password' --thumbprint\n\n# \u8f93\u51fa\u683c\u5f0f\nesxcli --formatter=csv storage filesystem list\n\nesxcli --server MyVC --vihost MyESXi storage filesystem list\n\n# \u5347\u7ea7\nesxcli software vib\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# \u7cfb\u7edf\u7ba1\u7406\n# ==========\n# \u7ef4\u62a4\u6a21\u5f0f\nsystem maintenanceMode set --enable true\n\n# system module list --module=<module_name>\nsystem module list --enabled=true\nsystem module list --loaded=true\n# \u542f\u7528\nsystem module set --module=<module_name> --enabled=true\n# \u53c2\u6570\nsystem module parameters set --module=<module_name> --parameter-string=<parameter_string>\n# \u9a8c\u8bc1\nsystem module parameters list --module=<module_name>\n\n\n# \u7ec4\u4ef6\u7ba1\u7406\n# ==========\n# \u7cfb\u7edf\u7ec4\u4ef6\nsoftware component list\n# \u7ec4\u4ef6\u4fe1\u606f <component_name>:<version>\nsoftware component get -n <component_name>\nsoftware baseimage get\nsoftware addon get\n# \u4ed3\u5e93 - index.xml \u6216\u8005 zip\nsoftware sources component list -d <depot_url_or_offline_bundle_path>\n# \u8be6\u7ec6\u4fe1\u606f\nsoftware sources component get -n <component_name> -d <depot_url_or_offline_bundle_path>\n# \u5b89\u88c5\nsoftware component apply -n <component_name>:<version> -d <depot_url_or_offline_bundle_path>\n# \u79fb\u9664\nsoftware component remove -n <component_name>\n\n# \u7ba1\u7406 baseimage\nsoftware sources baseimage list -d <depot_url_or_offline_bundle_path>\nsoftware sources baseimage get -b <base_image_version> -d <depot_url_or_offline_bundle_path>\nsoftware sources addon list -d <depot_url_or_offline_bundle_path>\nsoftware sources addon get -a <add-on_name> -d <depot_url_or_offline_bundle_path>\n\n# \u901a\u8fc7 JSON \u914d\u7f6e\nsoftware apply -s <location_of_software_spec>.json -d <depot_url_or_offline_bundle_path>\n\n\n# \u5b58\u50a8\u7ba1\u7406\n# ==========\n# \u6302\u8f7d\u7684\u5377\nstorage filesystem list\n# \u5378\u8f7d\nstorage filesystem unmount\n# \u5feb\u7167\nstorage vmfs\n\n# \u6302\u8f7d\nstorage filesystem volume mount --volume-label=<label>|--volume-uuid=<VMFSUUID>\n# \u5378\u8f7d\nstorage filesystem volume unmount --volume-label=<label>|--volume-uuid=<VMFSUUID>\n\n# \u5feb\u7167\u5217\u8868\nstorage vmfs snapshot list\nstorage filesystem unmount\nstorage vmfs snapshot resignature --volume-label=<label>|--volume-uuid=<id>\n")))}c.isMDXComponent=!0}}]);