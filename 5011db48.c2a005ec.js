(window.webpackJsonp=window.webpackJsonp||[]).push([[343],{1169:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},v=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),v=n,d=m["".concat(c,".").concat(v)]||m[v]||u[v]||i;return r?o.a.createElement(d,a(a({ref:t},p),{},{components:r})):o.a.createElement(d,a({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=v;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var p=2;p<i;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}v.displayName="MDXCreateElement"},417:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return a})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(8),i=(r(0),r(1169)),c={title:"MicroVM"},a={unversionedId:"os/virt/microvm",id:"os/virt/microvm",isDocsHomePage:!1,title:"MicroVM",description:"* \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/os/virt/microvm.md",slug:"/os/virt/microvm",permalink:"/notes/os/virt/microvm",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/virt/microvm.md",version:"current",sidebar:"docs",previous:{title:"Libvirt Daemon",permalink:"/notes/os/virt/libvirtd"},next:{title:"QEMU \u6587\u6863",permalink:"/notes/os/virt/qemu-doc"}},s=[],p={toc:s};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"QEMU \u53d7 Firecracker \u542f\u53d1\u5f00\u53d1\u7684\u4e00\u79cd\u673a\u5668\u7c7b\u578b"),Object(i.b)("li",{parentName:"ul"},"\u6700\u5c0f\u5316 - \u4e0d\u652f\u6301 PCI \u548c ACPI"),Object(i.b)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u77ed\u671f\u8fd0\u884c Guest"))),Object(i.b)("li",{parentName:"ul"},"QEMU ",Object(i.b)("a",{parentName:"li",href:"https://github.com/qemu/qemu/blob/master/docs/system/i386/microvm.rst"},"microvm"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'# with Legacy\nqemu-system-x86_64 -M microvm \\\n   -enable-kvm -cpu host -m 512m -smp 2 \\\n   -kernel vmlinux -append "earlyprintk=ttyS0 console=ttyS0 root=/dev/vda" \\\n   -nodefaults -no-user-config -nographic \\\n   -serial stdio \\\n   -drive id=test,file=test.img,format=raw,if=none \\\n   -device virtio-blk-device,drive=test \\\n   -netdev tap,id=tap0,script=no,downscript=no \\\n   -device virtio-net-device,netdev=tap0\n\n# no Legacy\nqemu-system-x86_64 \\\n   -M microvm,x-option-roms=off,pit=off,pic=off,isa-serial=off,rtc=off \\\n   -enable-kvm -cpu host -m 512m -smp 2 \\\n   -kernel vmlinux -append "console=hvc0 root=/dev/vda" \\\n   -nodefaults -no-user-config -nographic \\\n   -chardev stdio,id=virtiocon0 \\\n   -device virtio-serial-device \\\n   -device virtconsole,chardev=virtiocon0 \\\n   -drive id=test,file=test.img,format=raw,if=none \\\n   -device virtio-blk-device,drive=test \\\n   -netdev tap,id=tap0,script=no,downscript=no \\\n   -device virtio-net-device,netdev=tap0\n')))}l.isMDXComponent=!0}}]);