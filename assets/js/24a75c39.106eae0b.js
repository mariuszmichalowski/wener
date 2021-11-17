"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[20063],{3905:function(t,e,r){r.d(e,{Zo:function(){return k},kt:function(){return g}});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),m=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},k=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,k=o(t,["components","mdxType","originalType","parentName"]),u=m(r),g=n,s=u["".concat(p,".").concat(g)]||u[g]||d[g]||l;return r?a.createElement(s,i(i({ref:e},k),{},{components:r})):a.createElement(s,i({ref:e},k))}));function g(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var m=2;m<l;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},37446:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return k},default:function(){return u}});var a=r(87462),n=r(63366),l=(r(67294),r(3905)),i=["components"],o={title:"\u6587\u4ef6\u7cfb\u7edf\u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},p=void 0,m={unversionedId:"os/linux/fs/fs-faq",id:"os/linux/fs/fs-faq",isDocsHomePage:!1,title:"\u6587\u4ef6\u7cfb\u7edf\u5e38\u89c1\u95ee\u9898",description:"\u6587\u4ef6\u7cfb\u7edf\u9650\u5236",source:"@site/notes/os/linux/fs/fs-faq.md",sourceDirName:"os/linux/fs",slug:"/os/linux/fs/fs-faq",permalink:"/notes/os/linux/fs/fs-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/fs/fs-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",frontMatter:{title:"\u6587\u4ef6\u7cfb\u7edf\u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},sidebar:"docs",previous:{title:"ext4",permalink:"/notes/os/linux/fs/ext4"},next:{title:"NTFS",permalink:"/notes/os/linux/fs/ntfs"}},k=[{value:"\u6587\u4ef6\u7cfb\u7edf\u9650\u5236",id:"\u6587\u4ef6\u7cfb\u7edf\u9650\u5236",children:[]},{value:"MBR vs GPT",id:"mbr-vs-gpt",children:[]},{value:"\u91cd\u65b0\u6302\u8f7d\u4e3a\u53ef\u8bfb\u5199",id:"\u91cd\u65b0\u6302\u8f7d\u4e3a\u53ef\u8bfb\u5199",children:[]},{value:"Do you want to remove the signature?",id:"do-you-want-to-remove-the-signature",children:[]},{value:"cluster size for NTFS, FAT, and exFAT",id:"cluster-size-for-ntfs-fat-and-exfat",children:[]}],d={toc:k};function u(t){var e=t.components,r=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u6587\u4ef6\u7cfb\u7edf\u9650\u5236"},"\u6587\u4ef6\u7cfb\u7edf\u9650\u5236"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://access.redhat.com/solutions/1532"},"What are the file and file system size limitations for Red Hat Enterprise Linux?"))),(0,l.kt)("h2",{id:"mbr-vs-gpt"},"MBR vs GPT"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"MBR - Master Boot Record",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e5f\u53eb DOS \u5206\u533a - \u6700\u65e9\u4e8e IBM PC DOS 2.0"))),(0,l.kt)("li",{parentName:"ul"},"GPT - GUID Partition Table",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u56e0\u4e3a UEFI \u800c\u8bde\u751f"))),(0,l.kt)("li",{parentName:"ul"},"4096 disk sector - AFD - Advanced Format - 4Kn",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u81ea 2010 \u5e74\u5f00\u59cb\uff0c\u5382\u5546\u5927\u591a\u91c7\u7528 4k sector"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 512 \u5b9e\u9645\u662f\u4f7f\u7528\u6a21\u62df\u540e\u7684\u5730\u5740 - 512e")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"-"),(0,l.kt)("th",{parentName:"tr",align:null},"mbr"),(0,l.kt)("th",{parentName:"tr",align:null},"gpt"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"since"),(0,l.kt)("td",{parentName:"tr",align:null},"1983"),(0,l.kt)("td",{parentName:"tr",align:null},"2005 - UEFI")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"interface"),(0,l.kt)("td",{parentName:"tr",align:null},"BIOS"),(0,l.kt)("td",{parentName:"tr",align:null},"UEFI")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"512b sector"),(0,l.kt)("td",{parentName:"tr",align:null},"2TiB = 2^32 \xd7 512"),(0,l.kt)("td",{parentName:"tr",align:null},"8 ZiB = 2^64 \xd7 512")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4096b sector"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"64 ZiB = 2^64 \xd7 4096")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"CHS - Cylinder-head-sector"),(0,l.kt)("td",{parentName:"tr",align:null},"LBA - Logical Block Addressing")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bits"),(0,l.kt)("td",{parentName:"tr",align:null},"32"),(0,l.kt)("td",{parentName:"tr",align:null},"64")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The size of this disk is 2 TiB (2199023255552 bytes). DOS partition table format cannot be used on drives for volumes larger than 2199023255040 bytes for 512-byte sectors. Use GUID partition table format (GPT).")),(0,l.kt)("h2",{id:"\u91cd\u65b0\u6302\u8f7d\u4e3a\u53ef\u8bfb\u5199"},"\u91cd\u65b0\u6302\u8f7d\u4e3a\u53ef\u8bfb\u5199"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mount -o rw,remount /\n")),(0,l.kt)("h2",{id:"do-you-want-to-remove-the-signature"},"Do you want to remove the signature?"),(0,l.kt)("p",null,"\u5982\u679c\u4e0d\u5e0c\u671b\u5220\u9664 fs \u5219\u9009\u62e9 No"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://unix.stackexchange.com/a/478001/47774"},"What is a vfat signature?"))),(0,l.kt)("h2",{id:"cluster-size-for-ntfs-fat-and-exfat"},"cluster size for NTFS, FAT, and exFAT"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"NTFS")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"volumn"),(0,l.kt)("th",{parentName:"tr",align:"right"},"block"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"7 MB\u201316 TB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"4 KB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"16 TB\u201332 TB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"8 KB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"32 TB\u201364 TB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"16 KB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"64 TB\u2013128 TB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"32 KB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"128 TB\u2013256 TB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"64 KB")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"exFAT")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"volumn"),(0,l.kt)("th",{parentName:"tr",align:"right"},"block"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"7 MB\u2013256 MB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"4 KB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"256 MB\u201332 GB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"32 KB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"32 GB\u2013256 TB"),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("strong",{parentName:"td"},"128 KB"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"FAT32")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"volumn"),(0,l.kt)("th",{parentName:"tr",align:"right"},"block"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"32 MB\u201364 MB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"512 bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"64 MB\u2013128 MB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"1 KB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"128 MB\u2013256 MB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"2 KB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"256 MB\u20138 GB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"4 KB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"8 GB\u201316 GB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"8 KB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"16 GB\u201332 GB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"16 KB")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"FAT16")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"volumn"),(0,l.kt)("th",{parentName:"tr",align:"right"},"block"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"8 MB\u201332 MB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"512 bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"32 MB\u201364 MB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"1 KB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"64 MB\u2013128 MB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"2 KB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"128 MB\u2013256 MB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"4 KB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"256 MB\u2013512 MB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"8 KB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"512 MB\u20131 GB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"16 KB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"1 GB\u20132 GB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"32 KB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"2 GB\u20134 GB"),(0,l.kt)("td",{parentName:"tr",align:"right"},"64 KB")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"NAND flash \u5927\u591a\u4e3a 128 KB blocksize\uff0c\u6240\u4ee5 extFAT \u5f88\u9002\u5408\u95ea\u5b58")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://support.microsoft.com/en-gb/topic/9772e6f1-e31a-00d7-e18f-73169155af95"},"Default cluster size for NTFS, FAT, and exFAT"))))}u.isMDXComponent=!0}}]);