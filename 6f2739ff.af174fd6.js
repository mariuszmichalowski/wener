(window.webpackJsonp=window.webpackJsonp||[]).push([[458],{1129:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return n?a.a.createElement(d,l(l({ref:t},b),{},{components:n})):a.a.createElement(d,l({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},532:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),o=(n(0),n(1129)),i={title:"NFS"},l={unversionedId:"ops/storage/network/nfs",id:"ops/storage/network/nfs",isDocsHomePage:!1,title:"NFS",description:"Tips",source:"@site/notes/ops/storage/network/nfs.md",slug:"/ops/storage/network/nfs",permalink:"/notes/ops/storage/network/nfs",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/storage/network/nfs.md",version:"current",sidebar:"docs",previous:{title:"FTP",permalink:"/notes/ops/storage/network/ftp"},next:{title:"Share",permalink:"/notes/ops/storage/network/share"}},c=[{value:"Tips",id:"tips",children:[]},{value:"exports",id:"exports",children:[]},{value:"Neither &#39;subtree_check&#39; or &#39;no_subtree_check&#39; specified for export",id:"neither-subtree_check-or-no_subtree_check-specified-for-export",children:[]},{value:"mount.nfs: rpc.statd is not running but is required for remote locking. mount.nfs: Either use &#39;-o nolock&#39; to keep locks local, or start statd",id:"mountnfs-rpcstatd-is-not-running-but-is-required-for-remote-locking-mountnfs-either-use--o-nolock-to-keep-locks-local-or-start-statd",children:[]}],b={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"tips"},"Tips"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"http://linux-nfs.org/"},"nfs"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"ArchLinux ",Object(o.b)("a",{parentName:"li",href:"https://wiki.archlinux.org/index.php/NFS"},"NFS")))),Object(o.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.cyberciti.biz/faq/linux-unix-tuning-nfs-server-client-performance/"},"NFS \u6027\u80fd\u8c03\u4f18")))),Object(o.b)("li",{parentName:"ul"},"\u7ec4\u4ef6",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"rpc.nfsd"),Object(o.b)("li",{parentName:"ul"},"rpc.idmapd"),Object(o.b)("li",{parentName:"ul"},"rpc.mountd - NFS mount daemon",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"-p 32767"))),Object(o.b)("li",{parentName:"ul"},"rpc.statd - NSM service daemon",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"A daemon that listens for reboot notifications from other hosts, and manages the list of hosts to be notified when the local system reboots"),Object(o.b)("li",{parentName:"ul"},"-p 32765 -o 32766"),Object(o.b)("li",{parentName:"ul"},"\u9501\u670d\u52a1"),Object(o.b)("li",{parentName:"ul"},"\u6302\u8f7d\u53ef\u4f7f\u7528 nolock \u6307\u5b9a\u4e0d\u542f\u7528\u9501"),Object(o.b)("li",{parentName:"ul"},"sm-notify - A helper program that notifies NFS peers after the local system reboots"))),Object(o.b)("li",{parentName:"ul"},"rpc.gssd - gss-api generic security api to provide security for protocols using rpc"),Object(o.b)("li",{parentName:"ul"},"rpc.svcgssd"),Object(o.b)("li",{parentName:"ul"},"rpc.rquotad - remote quota server")))),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"\u907f\u514d NAT \u4f7f\u7528 nfs - \u90e8\u5206\u670d\u52a1\u53ef\u80fd\u6709\u95ee\u9898\uff0c\u4f8b\u5982 statd")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"apk add nfs-utils\n# \u542f\u52a8\nservice nfs start\n# \u5f00\u673a\u542f\u52a8\nrc-update add nfs\n# \u5bfc\u51fa\u6240\u6709\u5b9a\u4e49\u7684\u5171\u4eab\n# \u5c06 /etc/exports \u5b9a\u4e49\u8f93\u51fa\u5230 /var/lib/nfs/etab\nexportfs -a\n# \u53d6\u6d88\u6240\u6709\u5171\u4eab - \u6e05\u9664 /var/lib/nfs/etab\nexportfs -au\n\n# \u67e5\u770b\u670d\u52a1\u63d0\u4f9b\u7684\u5171\u4eab\nshowmount -e localhost\n\n# NFSv4 \u53ef\u4ee5\u6302\u5728\u6839\u76ee\u5f55\nmount server:/ /mountpoint/on/client\n# \u6302\u8f7d\u5355\u4e2a\u76ee\u5f55\nmount -t nfs -o vers=4 servername:/srv/nfs/music /mountpoint/on/client\n# fstab\n# servername:/music   /mountpoint/on/client   nfs   defaults,timeo=900,retrans=5,_netdev    0 0\n\n")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u6587\u4ef6"),Object(o.b)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),Object(o.b)("th",{parentName:"tr",align:null},"\u5185\u5bb9\u793a\u4f8b"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"/etc/exports"),Object(o.b)("td",{parentName:"tr",align:null},"\u5bf9\u5916\u66b4\u9732\u7684\u6587\u4ef6"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"/usr/local 192.168.0.1(ro) 192.168.0.2(ro)"),Object(o.b)("br",null),Object(o.b)("inlineCode",{parentName:"td"},"/home 192.168.0.0/255.255.255.0(rw)"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"/etc/hosts.allow"),Object(o.b)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u8bbf\u95ee\u7684\u4e3b\u673a"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"portmap:ALL"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"/etc/hosts.deny"),Object(o.b)("td",{parentName:"tr",align:null},"\u7981\u6b62\u8bbf\u95ee\u7684\u4e3b\u673a"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"lockd: 192.168.0.1 , 192.168.0.2"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"/var/lib/nfs/etab"),Object(o.b)("td",{parentName:"tr",align:null},"\u5bfc\u51fa\u7684\u4e3b\u8868"),Object(o.b)("td",{parentName:"tr",align:null})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"/var/lib/nfs/rmtab"),Object(o.b)("td",{parentName:"tr",align:null},"\u8bbf\u95ee\u670d\u52a1\u7aef\u7684\u5ba2\u6237\u7aef"),Object(o.b)("td",{parentName:"tr",align:null})))),Object(o.b)("h2",{id:"exports"},"exports"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://linux.die.net/man/5/exports"},"https://linux.die.net/man/5/exports"))),Object(o.b)("h1",{id:"faq"},"FAQ"),Object(o.b)("h2",{id:"neither-subtree_check-or-no_subtree_check-specified-for-export"},"Neither 'subtree_check' or 'no_subtree_check' specified for export"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u4e0d\u5f71\u54cd\uff0c\u53ea\u662f\u8b66\u544a\u9ed8\u8ba4\u4e3a\u4e86 ",Object(o.b)("inlineCode",{parentName:"li"},"no_subtree_check"),"\uff0c\u4e4b\u524d\u662f ",Object(o.b)("inlineCode",{parentName:"li"},"subtree_check"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"/data0    *(rw,no_root_squash,no_subtree_check)\n")),Object(o.b)("h2",{id:"mountnfs-rpcstatd-is-not-running-but-is-required-for-remote-locking-mountnfs-either-use--o-nolock-to-keep-locks-local-or-start-statd"},"mount.nfs: rpc.statd is not running but is required for remote locking. mount.nfs: Either use '-o nolock' to keep locks local, or start statd"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5f53\u5ba2\u6237\u7aef\u5728 NAT \u540e\u65f6\u53ef\u80fd\u4f1a\u6709\u8fd9\u4e2a\u95ee\u9898 - \u56e0\u4e3a\u7aef\u53e3\u4ece\u65b0\u6620\u5c04\u540e\u4e0d\u4f1a\u662f\u4fdd\u7559\u7aef\u53e3"),Object(o.b)("li",{parentName:"ul"},"exports \u6dfb\u52a0 ",Object(o.b)("inlineCode",{parentName:"li"},"insecure")," \u9009\u9879\u5373\u53ef",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5f00\u542f\u4e86 secure\uff0c\u8981\u6c42\u7aef\u53e3 \u5c0f\u4e8e 1024 IPPORT_RESERVED")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"mount.nfs: rpc.statd is not running but is required for remote locking.\nmount.nfs: Either use '-o nolock' to keep locks local, or start statd.\nmount.nfs: Operation not permitted\n")))}s.isMDXComponent=!0}}]);