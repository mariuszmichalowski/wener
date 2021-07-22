(window.webpackJsonp=window.webpackJsonp||[]).push([[1047],{1120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),o=(n(0),n(1152)),i={title:"FUSE"},s={unversionedId:"ops/storage/fs/fuse",id:"ops/storage/fs/fuse",isDocsHomePage:!1,title:"FUSE",description:"* Golang",source:"@site/notes/ops/storage/fs/fuse.md",slug:"/ops/storage/fs/fuse",permalink:"/notes/ops/storage/fs/fuse",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/storage/fs/fuse.md",version:"current",sidebar:"docs",previous:{title:"DFS",permalink:"/notes/ops/storage/fs/dfs"},next:{title:"NFS",permalink:"/notes/ops/storage/fs/nfs"}},c=[{value:"zip",id:"zip",children:[]},{value:"encfs",id:"encfs",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Golang",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/bazil/fuse"},"bazil/fuse")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/fuse-friends/fuse-native"},"https://github.com/fuse-friends/fuse-native"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# Docker \u5185\u4f7f\u7528 FUSE\ndocker run --rm -it --privileged --cap-add SYS_ADMIN --cap-add MKNOD --device /dev/fuse -v $PWD:/host -w /host wener/base:alpine\n\n# \u6302\u8f7d loop\nlosetup -P /dev/loop2 harddrive.img\n")),Object(o.b)("h2",{id:"zip"},"zip"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"http://avf.sourceforge.net/"},"avfs")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://bitbucket.org/agalanin/fuse-zip/"},"fuse-zip")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"http://www.cybernoia.de/software/archivemount/"},"archivemount"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# \u53ea\u8bfb\u6302\u8f7d\nfuse-zip -r archivetest.zip ~/mnt/zip\narchivemount -o readonly archivetest.zip  /mnt\n")),Object(o.b)("h2",{id:"encfs"},"encfs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/vgough/encfs"},"https://github.com/vgough/encfs")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/vgough/encfs/blob/master/encfs/encfs.pod"},"https://github.com/vgough/encfs/blob/master/encfs/encfs.pod"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# For single file\nopenssl des3 -salt -in unencrypted-data.file -out encrypted-data.file.des3\nopenssl des3 -d -salt -in encrypted-data.file.des3 -out unencrypted-data.file\n\n# For a fs\n# \u7b2c\u4e00\u6b21\u542f\u52a8\u9700\u8981\u914d\u7f6e\nencfs -v -f ~/.crypt ~/mnt/crypt\n\n# \u914d\u5408 zip fs \u4f7f\u7528\ntouch empty\nzip encfs.zip empty\narchivemount encfs.zip ~/mnt/zip\n# \u64cd\u4f5c\u5199\u540e\n# \u6b64\u65f6\u624d\u4f1a\u60f3\u6570\u636e\u5199\u56de zip\numount ~/mnt/zip\n\n# \u914d\u5408\u5355\u6587\u4ef6\u6302\u8f7d\ndd if=/dev/zero of=image.img iflag=fullblock bs=1M count=100 && sync\n\n# \u67e5\u770b\u6240\u6709\u7684 loop fs\nlosetup\n# \u6302\u8f7d\nsudo losetup loop1 image.img\n# losetup -d /dev/loop1\n\n# macOS\nhdiutil attach -nomount image.img\ndiskutil list\n# umount /dev/disk2\n# hdiutil detach disk2\n\n# \u683c\u5f0f\u5316\u5206\u533a\nmkfs\n\n# \u6216\u8005 mac \u4e0b\n# newfs_msdos disk3\n# \u6216\u8005\n# diskutil eraseDisk JHFS+ VolumeName /dev/disk2\n# mount -t msdos /dev/disk3 ~/mnt/file/\n\n# \u6216\u8005\u4e8b\u5148\u683c\u5f0f\u5316 brew install hfsutils\n# hformat -l File image.img\n# mount -t hfs -o loop image.img /mnt/file\n")))}p.isMDXComponent=!0},1152:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(i,".").concat(b)]||u[b]||f[b]||o;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);