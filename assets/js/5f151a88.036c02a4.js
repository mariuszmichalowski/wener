"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[19508],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=r.createContext({}),s=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(m.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(t),d=a,f=u["".concat(m,".").concat(d)]||u[d]||c[d]||l;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=u;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},84898:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return m},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),o=["components"],i={title:"sys/mman.h"},m=void 0,s={unversionedId:"os/linux/sys/mman.h",id:"os/linux/sys/mman.h",title:"sys/mman.h",description:"sys/mman.h - \u5185\u5b58\u7ba1\u7406\u5b9a\u4e49",source:"@site/notes/os/linux/sys/mman.h.md",sourceDirName:"os/linux/sys",slug:"/os/linux/sys/mman.h",permalink:"/notes/os/linux/sys/mman.h",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/sys/mman.h.md",tags:[],version:"current",frontMatter:{title:"sys/mman.h"},sidebar:"docs",previous:{title:"memtest",permalink:"/notes/os/linux/sys/memtest"},next:{title:"Swap",permalink:"/notes/os/linux/sys/swap"}},p=[{value:"sys/mman.h - \u5185\u5b58\u7ba1\u7406\u5b9a\u4e49",id:"sysmmanh---\u5185\u5b58\u7ba1\u7406\u5b9a\u4e49",children:[{value:"mmap",id:"mmap",children:[],level:3},{value:"\u5185\u5b58\u9501",id:"\u5185\u5b58\u9501",children:[],level:3}],level:2},{value:"Example",id:"example",children:[],level:2},{value:"Reference",id:"reference",children:[],level:2}],c={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"sysmmanh---\u5185\u5b58\u7ba1\u7406\u5b9a\u4e49"},"sys/mman.h - \u5185\u5b58\u7ba1\u7406\u5b9a\u4e49"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"// \u9501\u5b9a\u90e8\u5206\u8fdb\u7a0b\u5730\u5740\u7a7a\u95f4\nint mlock(const void *, size_t);\n// \u9501\u5b9a\u8fdb\u7a0b\u5730\u5740\u7a7a\u95f4\nint mlockall(int);\n// \u5efa\u7acb\u5185\u5b58\u6620\u5c04\nvoid *mmap(void *, size_t, int, int, int, off_t);\n// \u4e3a\u5185\u5b58\u6620\u5c04\u8bbe\u7f6e\u4fdd\u62a4, \u4fee\u6539 mmap \u65f6\u7684\u4fdd\u62a4\u8bbe\u7f6e\nint mprotect(void *, size_t, int);\n// \u540c\u6b65\u5185\u5b58\u5230\u7269\u7406\u5b58\u50a8\nint msync(void *, size_t, int);\n// \u89e3\u9501\u90e8\u5206\u8fdb\u7a0b\u5730\u5740\u7a7a\u95f4\nint munlock(const void *, size_t);\n// \u89e3\u9501\u8fdb\u7a0b\u5730\u5740\u7a7a\u95f4\nint munlockall(void);\n// \u53d6\u6d88\u5185\u5b58\u6620\u5c04\u9875\nint munmap(void *, size_t);\n\n\n// mmap\n// \u8bbf\u95ee\u4fdd\u62a4\u8bbe\u7f6e\nconst PROT_READ // \u53ef\u8bfb\nconst PROT_WRITE // \u53ef\u5199\nconst PROT_EXEC // \u53ef\u6267\u884c\nconst PROT_NONE // \u4e0d\u80fd\u88ab\u8bbf\u95ee\n\nconst MAP_SHARED // \u4fee\u6539\u4e3a\u5171\u4eab\nconst MAP_PRIVATE // \u4fee\u6539\u4e3a\u79c1\u6709\nconst MAP_FIXED // Interpret addr exactly.\n\n// msync\nconst MS_ASYNC // \u5f02\u6b65\u5199\nconst MS_SYNC // \u540c\u6b65\u5199\nconst MS_INVALIDATE // \u4f7f\u7f13\u5b58\u65f6\u6548\n\n// mlocalall\nconst MCL_CURRENT // \u9501\u5b9a\u5f53\u524d\u6620\u5c04\u9875\nconst MCL_FUTURE // \u9501\u5b9a\u5c06\u6765\u4f1a\u88ab\u6620\u5c04\u9875\n")),(0,l.kt)("h3",{id:"mmap"},"mmap"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"#include <sys/mman.h>\n\nvoid *mmap(void \\*addr, size_t len, int prot, int flags,int fildes, off_t off);\n")),(0,l.kt)("p",null,"\u5efa\u7acb\u8fdb\u7a0b\u5730\u5740\u7a7a\u95f4\u5230\u5185\u5b58\u5bf9\u8c61\u4e4b\u95f4\u7684\u6620\u5c04,\u652f\u6301\u4ee5\u4e0b\u5185\u5b58\u5bf9\u8c61"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5e38\u89c4\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"SHM")," \u5171\u4eab\u5185\u5b58\u5bf9\u8c61"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"TYM")," Typed memory object",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://pubs.opengroup.org/onlinepubs/9699919799/functions/posix_typed_mem_open.html"},"posix_typed_mem_open"),"\n\u7528\u4e8e\u6253\u5f00\u4e00\u4e2a Typed memory object")))),(0,l.kt)("p",null,"MAP_SHARED \u4fee\u6539\u5185\u5b58\u65f6\u5176\u4ed6\u8fdb\u7a0b\u53ef\u89c1;MAP_PRIVATE \u4fee\u6539\u65f6\u5176\u4ed6\u8fdb\u7a0b\u4e0d\u53ef\u89c1, \u5e76\u4e14\u4e0d\u4f1a\u4fee\u6539\u5e95\u5c42\u5bf9\u8c61.\nMAP_FIXED \u6307\u5b9a\u540e,\u8fd4\u56de\u503c\u5373",(0,l.kt)("inlineCode",{parentName:"p"},"addr"),",\u8be5\u64cd\u4f5c\u4f1a\u66ff\u6362\u4e4b\u524d\u7684\u6620\u5c04,\u4e0d\u63a8\u8350\u4f7f\u7528."),(0,l.kt)("p",null,"\u652f\u6301\u5185\u5b58\u4fdd\u62a4\u7684\u786c\u4ef6\u80fd\u591f\u5f88\u597d\u5730\u652f\u6301 MAP_PRIVATE, \u5728\u4e0d\u652f\u6301\u7684\u786c\u4ef6\u4e0a\u53ef\u80fd\u4f1a\u5f62\u6210\u4e00\u4efd\u5b8c\u6574\u7684\u62f7\u8d1d,\u8fd9\u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"read")," \u7c7b\u4f3c."),(0,l.kt)("h3",{id:"\u5185\u5b58\u9501"},"\u5185\u5b58\u9501"),(0,l.kt)("p",null,"\u7528\u4e8e\u5bf9\u6027\u80fd\u8981\u6c42\u975e\u5e38\u9ad8\u7684\u573a\u666f(\u5373\u4fbf\u662f\u4e00\u6b21\u5185\u5b58\u4ea4\u6362\u4e5f\u4f1a\u5bf9\u6027\u80fd\u6709\u6240\u5f71\u54cd)\u548c\u5bf9\u5b89\u5168\u8981\u6c42\u8f83\u9ad8\u7684\u5e38\u89c1(\u4e0d\u5141\u8bb8\u5185\u5b58\u88ab\u4ea4\u6362\u5230\u78c1\u76d8)."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5185\u5b58\u4e0d\u4f1a\u88ab\u4ea4\u6362\u5230\u78c1\u76d8")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u64cd\u4f5c\u65f6\u95f4\u56fa\u5b9a")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e0d\u53d7\u9875\u4ea4\u6362\u5ef6\u8fdf\u5f71\u54cd")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u9501\u4e0d\u80fd\u53e0\u52a0")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8be5\u64cd\u4f5c\u4f1a\u5f71\u54cd\u5176\u4ed6\u8fdb\u7a0b,\u5982\u679c\u6587\u4ef6\u6620\u5c04 ",(0,l.kt)("inlineCode",{parentName:"p"},"mlockall")," \u4f1a\u5bfc\u81f4\u5185\u5b58\u5360\u7528\u91cf\u4e0d\u65ad\u589e\u957f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"http://linux.die.net/man/2/mlock"},"mlock - manpage"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"http://www.gnu.org/software/libc/manual/html_node/Locked-Memory-Details.html"},"Locked Memory Details")))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"// \u83b7\u53d6\u5185\u5b58\u9875\u5927\u5c0f\nlong sz = sysconf(_SC_PAGESIZE);\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"fildes = open(...)\nlseek(fildes, some_offset)\nread(fildes, buf, len)\n/* Use data in buf. */\n\n// becomes:\n\nfildes = open(...)\naddress = mmap(0, len, PROT_READ, MAP_PRIVATE, fildes, some_offset)\n/* Use data at address. */\n")),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://pubs.opengroup.org/onlinepubs/9699919799/functions/mmap.html"},"mmap - susv4"))))}u.isMDXComponent=!0}}]);