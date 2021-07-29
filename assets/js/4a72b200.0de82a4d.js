"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[59869],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),g=l,d=m["".concat(u,".").concat(g)]||m[g]||s[g]||a;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64649:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(22122),l=n(19756),a=(n(67294),n(3905)),o=["components"],i={title:"CGO"},u=void 0,p={unversionedId:"languages/go/go-cgo",id:"languages/go/go-cgo",isDocsHomePage:!1,title:"CGO",description:"- \u907f\u514d CGO",source:"@site/notes/languages/go/go-cgo.md",sourceDirName:"languages/go",slug:"/languages/go/go-cgo",permalink:"/notes/languages/go/go-cgo",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/go/go-cgo.md",version:"current",frontMatter:{title:"CGO"},sidebar:"docs",previous:{title:"Go Build",permalink:"/notes/languages/go/go-build"},next:{title:"Go FAQ",permalink:"/notes/languages/go/go-faq"}},c=[{value:"dlopen",id:"dlopen",children:[]},{value:"sqlite",id:"sqlite",children:[]}],s={toc:c};function m(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u907f\u514d CGO",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/notti/nocgo"},"notti/nocgo")," - dlopen without cgo",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"dlopen, dlclose, dlerror, dlsym"),(0,a.kt)("li",{parentName:"ul"},"ffi \u6c47\u7f16, \u652f\u6301 386 \u548c amd64"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/rainycape/dl"},"rainycape/dl")," - dlopen / dlsym"))),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/golang/go/issues/18296"},"golang/go#18296")," - runtime: dlopen/dlsym without CGo")))),(0,a.kt)("h2",{id:"dlopen"},"dlopen"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b so symbol\n# \u6ca1\u6709\u5730\u5740\u7684 symbol \u662f\u52a8\u6001\u7684\nnm -gDC /usr/lib/libsqlite3.so\nobjdump -TC libz.so\nreadelf -Ws libz.so\n# \u53ea\u770b symbol\nreadelf -Ws /usr/lib/libsqlite3.so | awk '{print $8}';\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// +build !cgo\n\npackage dlopen\n\n// we have to use the 3 argument format here :( - 2 argument format is only allowed from inside cgo\n\n//go:cgo_import_dynamic libc_dlopen_x dlopen "libdl.so.2"\n//go:cgo_import_dynamic libc_dlclose_x dlclose "libdl.so.2"\n//go:cgo_import_dynamic libc_dlsym_x dlsym "libdl.so.2"\n//go:cgo_import_dynamic libc_dlerror_x dlerror "libdl.so.2"\n\n// on amd64 we don\'t need the following line - on 386 we do...\n// anyway - with those lines the output is better (but doesn\'t matter) - without it on amd64 we get multiple DT_NEEDED with "libc.so.6" etc\n\n//go:cgo_import_dynamic _ _ "libdl.so.2"\n')),(0,a.kt)("h2",{id:"sqlite"},"sqlite"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/mattn/go-sqlite3"},"mattn/go-sqlite3"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-tags libsqlite3")," \u53ef link libsqlite3.so"))),(0,a.kt)("li",{parentName:"ul"},"No CGO",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/iamacarpet/go-sqlite3-win64"},"iamacarpet/go-sqlite3-win64"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"sqlite3.dll wrapper"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/cvilsmeier/sqinn-go"},"cvilsmeier/sqinn-go"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e sqlite \u547d\u4ee4\u884c\u8fdb\u884c IO \u64cd\u4f5c"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/alicebob/sqlittle"},"alicebob/sqlittle"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u8bfb\u53d6\u6587\u4ef6 - \u4e0d\u652f\u6301 SQL"),(0,a.kt)("li",{parentName:"ul"},"\u53ea\u8bfb"),(0,a.kt)("li",{parentName:"ul"},"incompatible database version",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8981\u6c42 journal mode"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 WAL"),(0,a.kt)("li",{parentName:"ul"},"schema format > 1"),(0,a.kt)("li",{parentName:"ul"},"UTF8 encoding")))))))))}m.isMDXComponent=!0}}]);