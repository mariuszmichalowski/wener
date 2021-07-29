"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[43330],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return _}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),o=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=o(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=o(n),_=a,f=m["".concat(l,".").concat(_)]||m[_]||u[_]||i;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function _(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var o=2;o<i;o++)c[o]=n[o];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28639:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return o},toc:function(){return s},default:function(){return m}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),c=["components"],p={id:"capabilities",title:"\u80fd\u529b\u7ba1\u7406"},l="Capabilities",o={unversionedId:"os/linux/sys/capabilities",id:"os/linux/sys/capabilities",isDocsHomePage:!1,title:"\u80fd\u529b\u7ba1\u7406",description:"Tips",source:"@site/notes/os/linux/sys/capabilities.md",sourceDirName:"os/linux/sys",slug:"/os/linux/sys/capabilities",permalink:"/notes/os/linux/sys/capabilities",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/sys/capabilities.md",version:"current",frontMatter:{id:"capabilities",title:"\u80fd\u529b\u7ba1\u7406"},sidebar:"docs",previous:{title:"Shell FAQ",permalink:"/notes/os/linux/shell/shell-faq"},next:{title:"cgroup",permalink:"/notes/os/linux/sys/cgroup"}},s=[{value:"Tips",id:"tips",children:[]}],u={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"capabilities"},"Capabilities"),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://man7.org/linux/man-pages/man7/capabilities.7.html"},"capabilities.7"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u81ea 2.2 \u5c06 root \u6743\u9650\u62c6\u5206\u4e3a\u591a\u4e2a\u80fd\u529b"),(0,i.kt)("li",{parentName:"ul"},"\u80fd\u529b\u662f\u7ebf\u7a0b\u7ea7\u522b\u7684\u5c5e\u6027"))),(0,i.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u80fd\u529b",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"CAP_NET_ADMIN",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7f51\u5361\u914d\u7f6e"),(0,i.kt)("li",{parentName:"ul"},"IP \u7ba1\u7406"),(0,i.kt)("li",{parentName:"ul"},"\u8def\u7531\u8868"),(0,i.kt)("li",{parentName:"ul"},"\u5efa\u7acb\u5e7f\u64ad"))),(0,i.kt)("li",{parentName:"ul"},"CAP_SYS_ADMIN",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6302\u8f7d\u3001\u8d54\u989d"),(0,i.kt)("li",{parentName:"ul"},"\u4e3b\u673a\u540d")))))),(0,i.kt)("p",null,'"cap_chown",\n"cap_dac_override",\n"cap_dac_read_search",\n"cap_fowner",\n"cap_fsetid",\n"cap_kill",\n"cap_setgid",\n"cap_setuid",\n"cap_setpcap",\n"cap_linux_immutable",\n"cap_net_bind_service",\n"cap_net_broadcast",\n"cap_net_admin",\n"cap_net_raw",\n"cap_ipc_lock",\n"cap_ipc_owner",\n"cap_sys_module",\n"cap_sys_rawio",\n"cap_sys_chroot",\n"cap_sys_ptrace",\n"cap_sys_pacct",\n"cap_sys_admin",\n"cap_sys_boot",\n"cap_sys_nice",\n"cap_sys_resource",\n"cap_sys_time",\n"cap_sys_tty_config",\n"cap_mknod",\n"cap_lease",\n"cap_audit_write",\n"cap_audit_control",\n"cap_setfcap",\n"cap_mac_override",\n"cap_mac_admin",\n"cap_syslog",\n"35",\n"36+ep"'))}m.isMDXComponent=!0}}]);