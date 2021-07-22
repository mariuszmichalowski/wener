(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{1152:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var i=n(0),r=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=u(n),m=i,d=s["".concat(a,".").concat(m)]||s[m]||p[m]||o;return n?r.a.createElement(d,l(l({ref:t},c),{},{components:n})):r.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},203:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return u}));var i=n(3),r=n(8),o=(n(0),n(1152)),a={title:"Syslinux"},l={unversionedId:"os/linux/boot/syslinux",id:"os/linux/boot/syslinux",isDocsHomePage:!1,title:"Syslinux",description:"- \u53ea\u652f\u6301 X86",source:"@site/notes/os/linux/boot/syslinux.md",slug:"/os/linux/boot/syslinux",permalink:"/notes/os/linux/boot/syslinux",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/boot/syslinux.md",version:"current",sidebar:"docs",previous:{title:"initramfs",permalink:"/notes/os/linux/boot/initramfs"},next:{title:"U-Boot",permalink:"/notes/os/linux/boot/uboot"}},b=[{value:"config",id:"config",children:[]},{value:"extlinux",id:"extlinux",children:[]},{value:"MBR",id:"mbr",children:[]},{value:"extlinux: no previous syslinux boot sector found",id:"extlinux-no-previous-syslinux-boot-sector-found",children:[]}],c={toc:b};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u53ea\u652f\u6301 X86"),Object(o.b)("li",{parentName:"ul"},"\u5206\u4e3a extlinux\u3001isolinux"),Object(o.b)("li",{parentName:"ul"},"\u652f\u6301 mbr"),Object(o.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://shallowsky.com/linux/extlinux.html"},"How to install extlinux (syslinux) as a bootloader")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://wiki.syslinux.org/wiki/index.php?title=Filesystem"},"\u6587\u4ef6\u7cfb\u7edf\u652f\u6301\u60c5\u51b5"))))),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"UEFI \u652f\u6301\u4e0d\u597d - \u4e0d\u5efa\u8bae\u4f7f\u7528"),Object(o.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 exFAT"),Object(o.b)("li",{parentName:"ul"},"6.04+ \u652f\u6301 ext4 64bit")))),Object(o.b)("h2",{id:"config"},"config"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://wiki.syslinux.org/wiki/index.php?title=Config"},"Config"))),Object(o.b)("h2",{id:"extlinux"},"extlinux"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://wiki.syslinux.org/wiki/index.php?title=EXTLINUX"},"EXTLINUX"))),Object(o.b)("h2",{id:"mbr"},"MBR"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://wiki.syslinux.org/wiki/index.php?title=Mbr"},"MBR")),Object(o.b)("li",{parentName:"ul"},"mbr - dos \u5206\u533a"),Object(o.b)("li",{parentName:"ul"},"altmbr.bin - \u6307\u5b9a\u5206\u533a\uff0c\u5ffd\u7565 boot"),Object(o.b)("li",{parentName:"ul"},"gptmbr.bin - gtp \u5206\u533a"),Object(o.b)("li",{parentName:"ul"},"isohdppx.bin - ISO HDD PPX"),Object(o.b)("li",{parentName:"ul"},"isohdpfx.bin - ISO HDD PFX"),Object(o.b)("li",{parentName:"ul"},"isolinux.bin - ISO Linux"),Object(o.b)("li",{parentName:"ul"},"\u98ce\u683c",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"_c")," - \u542f\u52a8\u6309\u4f4f Ctrl\uff0ccode boots from BIOS drive 0x80"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"_f")," - \u603b\u662f boots from BIOS drive 0x80.")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# \u4fee\u590d mbr \u5206\u533a\ndd bs=440 conv=notrunc count=1 if=/usr/share/syslinux/mbr.bin of=$dev\n")),Object(o.b)("h1",{id:"faq"},"FAQ"),Object(o.b)("h2",{id:"extlinux-no-previous-syslinux-boot-sector-found"},"extlinux: no previous syslinux boot sector found"))}u.isMDXComponent=!0}}]);