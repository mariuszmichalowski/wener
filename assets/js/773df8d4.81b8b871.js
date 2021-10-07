"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[54286],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(n),m=a,g=f["".concat(i,".").concat(m)]||f[m]||u[m]||o;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},17209:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return f}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],s={title:"PostgreSQL & ZFS"},i=void 0,p={unversionedId:"db/relational/postgresql/postgresql-zfs",id:"db/relational/postgresql/postgresql-zfs",isDocsHomePage:!1,title:"PostgreSQL & ZFS",description:"- \u4e3a\u4ec0\u4e48\uff1f",source:"@site/notes/db/relational/postgresql/postgresql-zfs.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/postgresql-zfs",permalink:"/notes/db/relational/postgresql/postgresql-zfs",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/relational/postgresql/postgresql-zfs.md",tags:[],version:"current",frontMatter:{title:"PostgreSQL & ZFS"},sidebar:"docs",previous:{title:"\u89c6\u56fe",permalink:"/notes/db/relational/postgresql/postgresql-view"},next:{title:"Citus",permalink:"/notes/db/relational/postgresql/citus"}},c=[{value:"\u5f02\u6b65\u63d0\u4ea4",id:"\u5f02\u6b65\u63d0\u4ea4",children:[]}],u={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e3a\u4ec0\u4e48\uff1f",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5229\u7528 ZFS \u5b58\u50a8\u7279\u6027 - \u5feb\u7167\u3001\u6062\u590d\u3001\u514b\u9686\u3001\u538b\u7f29\u3001\u4e00\u81f4"))),(0,o.kt)("li",{parentName:"ul"},"PostgreSQL \u914d\u7f6e",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"full_page_writes"),(0,o.kt)("li",{parentName:"ul"},"random_page_cost"),(0,o.kt)("li",{parentName:"ul"},"effective_io_concurrency"))),(0,o.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.slideshare.net/SeanChittenden/postgresql-zfs-best-practices"},"postgresql-zfs-best-practices")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gist.github.com/artizirk/e144065165b07dff1accc608c7e83f5a"},"PostgreSQL optimize")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gist.github.com/saurabhnanda/5258207935bf23cd112be292d22f00d5"},"Tuning ZFS + Postgres to outperform EXT4 + Postgres"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"postgresql.conf")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"# ZFS \u603b\u662f\u4e00\u81f4\u7684 - 2\u500d\u6027\u80fd\nfull_page_writes=false\n\n# ZFS \u53c2\u8003\nrandom_page_cost = 1\neffective_io_concurrency = 20\n\n# pgtune https://pgtune.leopard.in.ua/\n# SSD\nrandom_page_cost = 1.1\neffective_io_concurrency = 200\n# HDD\nrandom_page_cost = 4\neffective_io_concurrency = 2\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"zfs")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"atime = off\nrelatime = on\n# 2.0 \u540e\u53ef\u4ee5\u4f7f\u7528 zstd\n# CPU \u65f6\u95f4\u6362 IO \u65f6\u95f4\ncompression = lz4\n# db \u9ed8\u8ba4 8k, \u4f46\u538b\u7f29\u7387\u4f4e\nrecordsize = 128K\n# \u53ea\u7f13\u5b58\u5143\u6570\u636e - \u907f\u514d\u53cc\u4efd\u6570\u636e\u7f13\u5b58\nprimarycache = metadata\n")),(0,o.kt)("h2",{id:"\u5f02\u6b65\u63d0\u4ea4"},"\u5f02\u6b65\u63d0\u4ea4"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u63a5\u53d7\u5f02\u5e38\u4e22\u5931\u90e8\u5206\u6570\u636e"),(0,o.kt)("li",{parentName:"ul"},"\u6362\u53d6 ",(0,o.kt)("strong",{parentName:"li"},"20 \u500d")," \u7684\u6027\u80fd"),(0,o.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e \u6570\u4ed3\u573a\u666f\u6216\u5927\u91cf\u5199\u5165\u573a\u666f")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# 1s \u8d85\u65f6, \u6700\u591a\u4e22\u5931 1s \u6570\u636e\necho 1 > /sys/module/zfs/parameters/zfs_txg_timeout\necho 'options zfs zfs_txg_timeout=1' >> /etc/modprobe.d/zfs.conf\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"zfs")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"logbias=throughput\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"pg")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"# \u5173\u95ed\u540c\u6b65\u63d0\u4ea4\nsynchronous_commit = off\n")))}f.isMDXComponent=!0}}]);