(window.webpackJsonp=window.webpackJsonp||[]).push([[510],{1166:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),m=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=m(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=m(n),d=r,s=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return n?a.a.createElement(s,c(c({ref:t},u),{},{components:n})):a.a.createElement(s,c({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},584:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(8),i=(n(0),n(1166)),o={title:"mtd"},c={unversionedId:"os/linux/dev/mtd",id:"os/linux/dev/mtd",isDocsHomePage:!1,title:"mtd",description:"- \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/os/linux/dev/mtd.md",slug:"/os/linux/dev/mtd",permalink:"/notes/os/linux/dev/mtd",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/dev/mtd.md",version:"current",sidebar:"docs",previous:{title:"Linux Device",permalink:"/notes/os/linux/dev/dev"},next:{title:"PCI",permalink:"/notes/os/linux/dev/pci"}},l=[],u={toc:l};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"memory technology device - Linux \u8bbf\u95ee \u5185\u5b58\u8bbe\u5907(rom, flash) \u7684\u5b50\u7cfb\u7edf"),Object(i.b)("li",{parentName:"ul"},"\u5e38\u7528\u4e8e\u5d4c\u5165\u5f0f\u8bbe\u5907 Flash \u5b58\u50a8"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://www.linux-mtd.infradead.org/"},"mtd-utils")),Object(i.b)("li",{parentName:"ul"},"flash, jffs, nand, ubi"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/dev/mtdN")," - \u5b57\u7b26\u8bbe\u5907",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"ioctl"),Object(i.b)("li",{parentName:"ul"},"MEMGETINFO, MEMERASE"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/dev/mtdblockN")," - \u4f2a\u88c5\u5757\u8bbe\u5907"),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://my.oschina.net/shelllife/blog/123482"},"https://my.oschina.net/shelllife/blog/123482")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://unix.stackexchange.com/questions/513415"},"https://unix.stackexchange.com/questions/513415"))))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b mtd \u548c ubi \u5206\u533a\ncat /proc/partitions\n# mtd \u5757\ncat /proc/mtd\n\nnanddump -f /tmp/mtd0.bin /dev/mtd0\n\n/usr/bin/ubiattach /dev/ubi_ctrl -m <MTD_partition> -O <block_size>\n/bin/mount -t ubifs ubi1:rootfs0 /media/mnt\n\n# \u5982\u679c\u6ca1\u6709 fs\nnanddump -f /tmp/mtd0.bin /dev/mtdblock0\n# data flash / NOR\ndd if=/dev/mtdblock1 of=/tmp/mtd1.bin\n\n\nmknod -m 644 /dev/mtd9        c 90 9\nmknod -m 644 /dev/mtdblock9   b 31 9\nmount -t jffs2 /dev/mtdblock9 /mnt\n")))}m.isMDXComponent=!0}}]);