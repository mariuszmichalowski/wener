(window.webpackJsonp=window.webpackJsonp||[]).push([[371],{1152:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),u=l(r),b=n,d=u["".concat(i,".").concat(b)]||u[b]||s[b]||o;return r?a.a.createElement(d,c(c({ref:t},p),{},{components:r})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},445:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return m})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(8),o=(r(0),r(1152)),i={title:"Trusted Platform Module"},c={unversionedId:"os/linux/hardware/tpm",id:"os/linux/hardware/tpm",isDocsHomePage:!1,title:"Trusted Platform Module",description:"- tpm2-software",source:"@site/notes/os/linux/hardware/tpm.md",slug:"/os/linux/hardware/tpm",permalink:"/notes/os/linux/hardware/tpm",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/hardware/tpm.md",version:"current",sidebar:"docs",previous:{title:"Linux Hardware FAQ",permalink:"/notes/os/linux/hardware/linux-hardware-faq"},next:{title:"Init Awesome",permalink:"/notes/os/linux/init/init-awesome"}},m=[{value:"QEMU",id:"qemu",children:[]}],p={toc:m};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/tpm2-software"},"tpm2-software"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"tpm2-tool"),Object(o.b)("li",{parentName:"ul"},"tpm2-tss - tss->TPM2 Software Stack"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/stefanberger/swtpm"},"stefanberger/swtpm"),"\nTPM emulator",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"swtpm - software tpm"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://wiki.archlinux.org/title/Trusted_Platform_Module"},"Trusted Platform Module")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/latchset/clevis"},"latchset/clevis"),"\nAutomated Encryption Framework"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://qemu-project.gitlab.io/qemu/specs/tpm.html"},"QEMU TPM Device"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'# \u5185\u6838\u652f\u6301\ncat /boot/config-lts | grep CONFIG_TCG_TPM\n\n# \u68c0\u6d4b\u662f\u5426\u6709 tpm \u8bbe\u5907\ndmesg | grep -i tpm\nls /sys/kernel/security/tpm*\n# linux 5.6+\ncat /sys/class/tpm/tpm*/tpm_version_major\n\n[ -c /dev/tpmrm0 ] && echo "TPM 2.0" # since v4.12-rc1\n[ -c /dev/tpm0 ] && echo "TPM 1.2 or 2.0"\n\nmodprobe tpm\n# modprobe -a tpm_{atmel,infineon,nsc,tis,crb}\n')),Object(o.b)("h2",{id:"qemu"},"QEMU"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://tpm2-software.github.io/2020/10/19/TPM2-Device-Emulation-With-QEMU.html"},"Tpm2 Device Emulation With Qemu"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"mkdir /tmp/emulated_tpm\nswtpm socket --tpmstate dir=/tmp/emulated_tpm --ctrl type=unixio,path=/tmp/emulated_tpm/swtpm-sock --log level=20 --tpm2\n\nqemu-system-x86_64 -hda ~/qemu-images/ubuntu-20.04-amd64.img -boot d -m 2048 -enable-kvm \\\n  -chardev socket,id=chrtpm,path=/tmp/emulated_tpm/swtpm-sock \\\n  -tpmdev emulator,id=tpm0,chardev=chrtpm -device tpm-tis,tpmdev=tpm0\n")))}l.isMDXComponent=!0}}]);