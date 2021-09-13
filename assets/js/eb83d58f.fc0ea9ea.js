"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[71614],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,b=d["".concat(u,".").concat(f)]||d[f]||c[f]||i;return n?r.createElement(b,a(a({ref:t},s),{},{components:n})):r.createElement(b,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},199:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={title:"NodeJS FAQ",tags:["FAQ"]},u=void 0,p={unversionedId:"web/node/nodejs-faq",id:"web/node/nodejs-faq",isDocsHomePage:!1,title:"NodeJS FAQ",description:"\u76f4\u63a5\u6267\u884c typescript \u6216 esnext",source:"@site/notes/web/node/nodejs-faq.md",sourceDirName:"web/node",slug:"/web/node/nodejs-faq",permalink:"/notes/web/node/nodejs-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/node/nodejs-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",frontMatter:{title:"NodeJS FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"zustand",permalink:"/notes/web/react/zustand"},next:{title:"NodeJS \u7248\u672c",permalink:"/notes/web/node/nodejs-version"}},s=[{value:"\u76f4\u63a5\u6267\u884c typescript \u6216 esnext",id:"\u76f4\u63a5\u6267\u884c-typescript-\u6216-esnext",children:[]},{value:"Package &#39;OpenEXR&#39;, required by &#39;vips&#39;, not found",id:"package-openexr-required-by-vips-not-found",children:[]},{value:"libtool: unrecognized option -static when building",id:"libtool-unrecognized-option--static-when-building",children:[]},{value:"require() of ES modules is not supported",id:"require-of-es-modules-is-not-supported",children:[]}],c={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u76f4\u63a5\u6267\u884c-typescript-\u6216-esnext"},"\u76f4\u63a5\u6267\u884c typescript \u6216 esnext"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"node -r @ts-node/register app.ts\nnode -r @babel/register app.js\n")),(0,i.kt)("h2",{id:"package-openexr-required-by-vips-not-found"},"Package 'OpenEXR', required by 'vips', not found"),(0,i.kt)("p",null,"\u627e\u4e0d\u5230 brew \u5b89\u88c5\u7684 pc"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"PKG_CONFIG_PATH=/usr/local/opt/openexr/lib/pkgconfig:/usr/local/opt/imath/lib/pkgconfig npm up\n")),(0,i.kt)("h2",{id:"libtool-unrecognized-option--static-when-building"},"libtool: unrecognized option -static when building"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"brew unlink libtool\nrm -rf /usr/local/bin/libtool\nwhich libtool\n\n# \u5982\u679c\u6dfb\u52a0\u4e86 /usr/local/opt/libtool/libexec/gnubin\nexport PATH=$(echo $PATH |sed -r 's/:[^:]*?libtool[^:]*:/:/')\n")),(0,i.kt)("h2",{id:"require-of-es-modules-is-not-supported"},"require() of ES modules is not supported"),(0,i.kt)("p",null,"\u5c1d\u8bd5\u964d\u7ea7\u4f9d\u8d56"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'ts \u53ef\u914d\u7f6e "module": "esnext"'),(0,i.kt)("li",{parentName:"ul"},"\u7136\u540e package.json \u4fee\u6539 type: module",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5f71\u54cd\u5f88\u5927"))),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/node-fetch/node-fetch/issues/1266"},"node-fetch/node-fetch#1266"))))))}d.isMDXComponent=!0}}]);