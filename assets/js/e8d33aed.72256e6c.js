"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[30138],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),p=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return r.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,m=u(t,["components","mdxType","originalType","parentName"]),k=p(n),d=a,c=k["".concat(o,".").concat(d)]||k[d]||s[d]||l;return n?r.createElement(c,i(i({ref:e},m),{},{components:n})):r.createElement(c,i({ref:e},m))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=k;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u.mdxType="string"==typeof t?t:a,i[1]=u;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},69014:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return m},default:function(){return k}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],u={tags:["\u76ee\u5f55\u7ed3\u6784"]},o="Filesystem Hierarchy Standard",p={unversionedId:"os/linux/admin/fhs",id:"os/linux/admin/fhs",title:"Filesystem Hierarchy Standard",description:"- fhs-3.0",source:"@site/notes/os/linux/admin/fhs.md",sourceDirName:"os/linux/admin",slug:"/os/linux/admin/fhs",permalink:"/notes/os/linux/admin/fhs",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/admin/fhs.md",tags:[{label:"\u76ee\u5f55\u7ed3\u6784",permalink:"/notes/tags/\u76ee\u5f55\u7ed3\u6784"}],version:"current",frontMatter:{tags:["\u76ee\u5f55\u7ed3\u6784"]},sidebar:"docs",previous:{title:"auditd",permalink:"/notes/os/linux/admin/auditd"},next:{title:"Linux Admin",permalink:"/notes/os/linux/admin/"}},m=[{value:"FHS",id:"fhs",children:[],level:2},{value:"Debian",id:"debian",children:[],level:2}],s={toc:m};function k(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"filesystem-hierarchy-standard"},"Filesystem Hierarchy Standard"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://refspecs.linuxfoundation.org/FHS_3.0/fhs-3.0.html"},"fhs-3.0")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Filesystem_Hierarchy_Standard"},"Filesystem Hierarchy Standard"))),(0,l.kt)("hr",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# skeleton\n# /etc/default/useradd\nuseradd -m -k /etc/skel\n")),(0,l.kt)("h2",{id:"fhs"},"FHS"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"/boot")),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"/dev - devfs"),(0,l.kt)("li",{parentName:"ul"},"/proc - procfs"),(0,l.kt)("li",{parentName:"ul"},"/sys - sysfs")),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"/bin"),(0,l.kt)("li",{parentName:"ul"},"/lib"),(0,l.kt)("li",{parentName:"ul"},"/lib64"),(0,l.kt)("li",{parentName:"ul"},"/sbin"),(0,l.kt)("li",{parentName:"ul"},"/etc",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"opt/")))),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"/home",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"$USER"))),(0,l.kt)("li",{parentName:"ul"},"/opt"),(0,l.kt)("li",{parentName:"ul"},"/usr",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"bin/"),(0,l.kt)("li",{parentName:"ul"},"local/")))),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"/media"),(0,l.kt)("li",{parentName:"ul"},"/mnt"),(0,l.kt)("li",{parentName:"ul"},"/run - tmpfs"),(0,l.kt)("li",{parentName:"ul"},"/srv"),(0,l.kt)("li",{parentName:"ul"},"/var",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"cache/"),(0,l.kt)("li",{parentName:"ul"},"lib/"),(0,l.kt)("li",{parentName:"ul"},"lock/"),(0,l.kt)("li",{parentName:"ul"},"log/"),(0,l.kt)("li",{parentName:"ul"},"mail/"),(0,l.kt)("li",{parentName:"ul"},"opt/"),(0,l.kt)("li",{parentName:"ul"},"run/ -> /run"),(0,l.kt)("li",{parentName:"ul"},"spool/",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"mail/ -> /var/mail"))),(0,l.kt)("li",{parentName:"ul"},"tmp/")))),(0,l.kt)("h2",{id:"debian"},"Debian"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"from"),(0,l.kt)("th",{parentName:"tr",align:null},"to"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/dev/.","*"),(0,l.kt)("td",{parentName:"tr",align:null},"/run/","*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/dev/shm"),(0,l.kt)("td",{parentName:"tr",align:null},"/run/shm")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/dev/shm/","*"),(0,l.kt)("td",{parentName:"tr",align:null},"/run/","*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/etc/","*"," - writable"),(0,l.kt)("td",{parentName:"tr",align:null},"/run/","*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/lib/init/rw"),(0,l.kt)("td",{parentName:"tr",align:null},"/run")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/var/lock"),(0,l.kt)("td",{parentName:"tr",align:null},"/run/lock")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/var/run"),(0,l.kt)("td",{parentName:"tr",align:null},"/run")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/tmp"),(0,l.kt)("td",{parentName:"tr",align:null},"/run/tmp")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wiki.debian.org/ReleaseGoals/RunDirectory"},"https://wiki.debian.org/ReleaseGoals/RunDirectory"))))}k.isMDXComponent=!0}}]);