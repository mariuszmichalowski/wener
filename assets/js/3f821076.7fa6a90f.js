"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[75769],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,y=p["".concat(s,".").concat(m)]||p[m]||g[m]||l;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},81054:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(87462),o=n(63366),l=(n(67294),n(3905)),i=["components"],a={title:"Syslog"},s=void 0,c={unversionedId:"service/observability/logging/syslog",id:"service/observability/logging/syslog",title:"Syslog",description:"- \u5b9e\u73b0",source:"@site/notes/service/observability/logging/syslog.md",sourceDirName:"service/observability/logging",slug:"/service/observability/logging/syslog",permalink:"/notes/service/observability/logging/syslog",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/observability/logging/syslog.md",tags:[],version:"current",frontMatter:{title:"Syslog"},sidebar:"docs",previous:{title:"Loki",permalink:"/notes/service/observability/logging/loki"},next:{title:"\u6307\u6807\u670d\u52a1\u5e38\u89c1\u95ee\u9898",permalink:"/notes/service/observability/metrics/metrics-faq"}},u=[{value:"busybox syslog",id:"busybox-syslog",children:[],level:2},{value:"rsyslog",id:"rsyslog",children:[],level:2},{value:"syslog-ng",id:"syslog-ng",children:[],level:2}],g={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u73b0",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"busybox syslog"),(0,l.kt)("li",{parentName:"ul"},"rsyslog"),(0,l.kt)("li",{parentName:"ul"},"syslog-ng"),(0,l.kt)("li",{parentName:"ul"},"fluentbit"))),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7aef\u53e3 514"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 UNIX Socket /dev/log"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://serverfault.com/questions/692309"},"What is the difference between syslog, rsyslog and syslog-ng?"))))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"AlpineLinux \u9ed8\u8ba4 busybox syslog"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u9700\u8981\u4f7f\u7528\u66f4\u591a\u529f\u80fd\uff0c\u5efa\u8bae\u9009\u62e9 rsyslog")))),(0,l.kt)("h2",{id:"busybox-syslog"},"busybox syslog"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"syslogd"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://git.busybox.net/busybox/tree/docs/syslog.conf.txt"},"/etc/syslog.conf"))),(0,l.kt)("h2",{id:"rsyslog"},"rsyslog"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"rsyslog ",(0,l.kt)("a",{parentName:"li",href:"http://www.rsyslog.com/rsyslog-configuration-builder/"},"Configuration Wizard"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install rsyslog\n")),(0,l.kt)("h2",{id:"syslog-ng"},"syslog-ng"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/balabit/syslog-ng/blob/master/contrib/syslog-ng.conf.doc"},"syslog-ng.conf.doc")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/balabit/syslog-ng/blob/master/contrib/rhel-packaging/syslog-ng.conf"},"syslog-ng.conf")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.syslog-ng.com/technical-documents/doc/syslog-ng-open-source-edition/3.22/administration-guide/12"},"Administration Guide"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-conf"},'@version: 3.9\n\ndestination d_general {\n  file("/data/log/general.log");\n};\n\nsource s_remote {\n    tcp(ip(0.0.0.0) port(10514));\n    udp(ip(0.0.0.0) port(10514));\n};\n\nlog {\n  source(s_remote);\n  destination(d_general);\n};\n')))}p.isMDXComponent=!0}}]);