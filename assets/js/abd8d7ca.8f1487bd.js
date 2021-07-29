"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[13193],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return k}});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(r),k=l,d=c["".concat(u,".").concat(k)]||c[k]||m[k]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},92732:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var n=r(22122),l=r(19756),a=(r(67294),r(3905)),i=["components"],o={title:"Linux Releases"},u=void 0,p={unversionedId:"os/linux/linux-version",id:"os/linux/linux-version",isDocsHomePage:!1,title:"Linux Releases",description:"Tips",source:"@site/notes/os/linux/linux-version.md",sourceDirName:"os/linux",slug:"/os/linux/linux-version",permalink:"/notes/os/linux/linux-version",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/linux-version.md",version:"current",frontMatter:{title:"Linux Releases"},sidebar:"docs",previous:{title:"Linux FAQ",permalink:"/notes/os/linux/linux-faq"},next:{title:"dracut",permalink:"/notes/os/linux/boot/dracut"}},s=[{value:"Tips",id:"tips",children:[]},{value:"5.10 - LTS",id:"510---lts",children:[]},{value:"5.8",id:"58",children:[]},{value:"5.4",id:"54",children:[]},{value:"4.8",id:"48",children:[]},{value:"4.7",id:"47",children:[]},{value:"4.6",id:"46",children:[{value:"4.5",id:"45",children:[]},{value:"4.4",id:"44",children:[]},{value:"4.3",id:"43",children:[]}]}],m={toc:s};function c(e){var t=e.components,r=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"tips"},"Tips"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kernelnewbies.org/LinuxVersions"},"https://kernelnewbies.org/LinuxVersions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Linux_kernel_version_history"},"Linux kernel version history")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.kernel.org/category/releases.html"},"Active kernel releases"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e00\u822c\u5e74\u5e95\u7684\u6700\u540e\u4e00\u4e2a\u7248\u672c\u4f1a\u53d8\u6210 LTS")))),(0,a.kt)("h2",{id:"510---lts"},"5.10 - LTS"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"EXT4",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 fast commit - fsync \u548c\u5143\u6570\u636e\u64cd\u4f5c\u66f4\u5feb - mkfs \u542f\u7528"),(0,a.kt)("li",{parentName:"ul"},"\u4f18\u5316\u6587\u4ef6\u8986\u5199"))),(0,a.kt)("li",{parentName:"ul"},"XFS",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u6233 2038 -> 2468"))),(0,a.kt)("li",{parentName:"ul"},"Nintendo Switch Joy Cons \u548c Pro \u624b\u67c4\u63a7\u5236\u5668 - USB \u548c \u84dd\u7259"),(0,a.kt)("li",{parentName:"ul"},"Raspberry Pi 4 VC4"),(0,a.kt)("li",{parentName:"ul"},"RISC-V boot EFI"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kernelnewbies.org/Linux_5.10"},"Linux 5.10"))),(0,a.kt)("h2",{id:"58"},"5.8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Raspberry Pi 4"),(0,a.kt)("li",{parentName:"ul"},"Broadcom BCM2711")),(0,a.kt)("h2",{id:"54"},"5.4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"virtio-fs"),(0,a.kt)("li",{parentName:"ul"},"fs-verity - \u68c0\u6d4b\u6587\u4ef6\u4fee\u6539",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5757\u7ea7\u522b\uff0c\u7c7b\u4f3c dm-verity\uff0c\u652f\u6301 ext4\u3001f2fs"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kernelnewbies.org/Linux_5.4"},"Linux 5.10"))),(0,a.kt)("h2",{id:"48"},"4.8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Support for using Transparent Huge Pages in the page cache"),(0,a.kt)("li",{parentName:"ul"},"Support for eXpress Data Path"),(0,a.kt)("li",{parentName:"ul"},"XFS reverse mapping"),(0,a.kt)("li",{parentName:"ul"},"Stricter checking of memory copies with hardened usercopy"),(0,a.kt)("li",{parentName:"ul"},"GCC plugin support"),(0,a.kt)("li",{parentName:"ul"},"virtio-vsocks for easier guest/host communication"),(0,a.kt)("li",{parentName:"ul"},"Support IPv6 security labeling (CALIPSO, RFC 5570)"),(0,a.kt)("li",{parentName:"ul"},"Add New Vegas TCP congestion control"),(0,a.kt)("li",{parentName:"ul"},"Documentation moved to the reStructuredText format")),(0,a.kt)("h2",{id:"47"},"4.7"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Support for Radeon RX480 GPUs"),(0,a.kt)("li",{parentName:"ul"},"Parallel directory lookups"),(0,a.kt)("li",{parentName:"ul"},"New 'schedutil\" frequency governor"),(0,a.kt)("li",{parentName:"ul"},"Histograms of events in ftrace"),(0,a.kt)("li",{parentName:"ul"},"perf trace calls stack"),(0,a.kt)("li",{parentName:"ul"},"Allow BPF programs to attach to tracepoints"),(0,a.kt)("li",{parentName:"ul"},"EFI 'Capsule' firmware updates"),(0,a.kt)("li",{parentName:"ul"},"Support for creating virtual USB Device Controllers in USB/IP"),(0,a.kt)("li",{parentName:"ul"},"Android's sync_file fencing mechanism considered stable"),(0,a.kt)("li",{parentName:"ul"},"LoadPin, a security module to restrict the origin of kernel modules")),(0,a.kt)("h2",{id:"46"},"4.6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"USB 3.1 SuperSpeedPlus (10 Gbps) support"),(0,a.kt)("li",{parentName:"ul"},"Improve the reliability of the Out Of Memory task killer"),(0,a.kt)("li",{parentName:"ul"},"Support for Intel memory protection keys"),(0,a.kt)("li",{parentName:"ul"},"OrangeFS, a new distributed file system"),(0,a.kt)("li",{parentName:"ul"},"Kernel Connection Multiplexor, a facility for accelerating application layer protocols"),(0,a.kt)("li",{parentName:"ul"},"802.1AE MAC-level encryption (MACsec)"),(0,a.kt)("li",{parentName:"ul"},"BATMAN V protocol"),(0,a.kt)("li",{parentName:"ul"},"dma-buf: new ioctl to manage cache coherency between CPU and GPU"),(0,a.kt)("li",{parentName:"ul"},"OCFS2 online inode checker"),(0,a.kt)("li",{parentName:"ul"},"Support for cgroup namespaces"),(0,a.kt)("li",{parentName:"ul"},"Add support for the pNFS SCSI layout")),(0,a.kt)("h3",{id:"45"},"4.5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Copy offloading with new copy_file_range(2) system call"),(0,a.kt)("li",{parentName:"ul"},"Experimental PowerPlay supports brings high performance to the amdgpu driver"),(0,a.kt)("li",{parentName:"ul"},"Btrfs free space handling scalability improvements"),(0,a.kt)("li",{parentName:"ul"},"Support for GCC's Undefined Behavior Sanitizer (-fsanitize=undefined)"),(0,a.kt)("li",{parentName:"ul"},"Forwarded Error Correction support in the device-mapper's verity target"),(0,a.kt)("li",{parentName:"ul"},"Add MADV_FREE flag to madvise(2)"),(0,a.kt)("li",{parentName:"ul"},"Better epoll multithread scalability"),(0,a.kt)("li",{parentName:"ul"},"cgroup unified hierarchy is considered stable"),(0,a.kt)("li",{parentName:"ul"},"Performance improvements for SO_REUSEPORT UDP sockets"),(0,a.kt)("li",{parentName:"ul"},"Proper control of socket memory usage in the memory controller")),(0,a.kt)("h3",{id:"44"},"4.4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kernelnewbies.org/Linux_4.4"},"https://kernelnewbies.org/Linux_4.4")),(0,a.kt)("li",{parentName:"ul"},"Faster and leaner loop device with Direct I/O and Asynchronous I/O support"),(0,a.kt)("li",{parentName:"ul"},"3D support in virtual GPU driver",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"3D \u652f\u6301\u865a\u62df GPU"))),(0,a.kt)("li",{parentName:"ul"},"LightNVM adds support for Open-Channel SSDs"),(0,a.kt)("li",{parentName:"ul"},"TCP listener handling completely lockless, making TCP servers faster and more scalable",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"TCP \u76d1\u542c\u5904\u7406\u5b8c\u5168\u65e0\u9501, \u4f7f\u5f97 TCP \u670d\u52a1\u66f4\u5feb\u66f4\u9ad8\u6548."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=c3fc7ac9a0b978ee8538058743d21feef25f7b33"},"Commit")))),(0,a.kt)("li",{parentName:"ul"},"Journalled RAID5 MD support"),(0,a.kt)("li",{parentName:"ul"},"Unprivileged eBPF + persistent eBPF programs"),(0,a.kt)("li",{parentName:"ul"},"perf + eBPF integration"),(0,a.kt)("li",{parentName:"ul"},"Block polling support"),(0,a.kt)("li",{parentName:"ul"},"mlock2() syscall allow users to request memory to be locked on page fault")),(0,a.kt)("h3",{id:"43"},"4.3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Ext3 filesystem has been removed"),(0,a.kt)("li",{parentName:"ul"},"userfaultfd(), a system call for handling page-faults in user space"),(0,a.kt)("li",{parentName:"ul"},"membarrier(), a system call for issuing memory barriers on a set of threads"),(0,a.kt)("li",{parentName:"ul"},"New PID controller for limiting the number of PIDs in cgroups"),(0,a.kt)("li",{parentName:"ul"},"Ambient capabilities"),(0,a.kt)("li",{parentName:"ul"},"Introduce idle page tracking, a more precise way to track the memory being used by applications"),(0,a.kt)("li",{parentName:"ul"},"Support for IPv6 Identifier Locator Addressing"),(0,a.kt)("li",{parentName:"ul"},"Network light weight tunnels"),(0,a.kt)("li",{parentName:"ul"},"Virtual Routing and Forwarding (Lite) support")))}c.isMDXComponent=!0}}]);