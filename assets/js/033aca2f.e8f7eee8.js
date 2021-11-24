"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[84725],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||i;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},99145:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={title:"bitwarden"},s=void 0,u={unversionedId:"service/selfhost/bitwarden",id:"service/selfhost/bitwarden",isDocsHomePage:!1,title:"bitwarden",description:"- bitwarden",source:"@site/notes/service/selfhost/bitwarden.md",sourceDirName:"service/selfhost",slug:"/service/selfhost/bitwarden",permalink:"/notes/service/selfhost/bitwarden",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/selfhost/bitwarden.md",tags:[],version:"current",frontMatter:{title:"bitwarden"},sidebar:"docs",previous:{title:"Selfhost Awesome",permalink:"/notes/service/selfhost/selfhost-awesome"},next:{title:"PhotoPrism",permalink:"/notes/service/selfhost/photoprism"}},c=[],p={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"bitwarden",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5bc6\u7801\u7ba1\u7406\u5668"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/bitwarden/browser"},"Chrome extension"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"GPL-3.0, TypeScript"),(0,i.kt)("li",{parentName:"ul"},"\u53ea\u652f\u6301\u4e00\u4e2a\u8d26\u53f7"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/dani-garcia/vaultwarden"},"dani-garcia/vaultwarden"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u975e\u5b98\u65b9 bitwarden \u517c\u5bb9\u670d\u52a1\u5b9e\u73b0"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301 LDAP"),(0,i.kt)("li",{parentName:"ul"},"\u5fc5\u987b\u8981\u6c42 HTTPS"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301 SQLite, MySQL, PostgreSQL"),(0,i.kt)("li",{parentName:"ul"},"Feature Requests ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/dani-garcia/vaultwarden/issues/246"},"dani-garcia/vaultwarden#246"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 SSO"),(0,i.kt)("li",{parentName:"ul"},"\u6682\u4e0d\u652f\u6301 2FA \u7ba1\u7406"))))),(0,i.kt)("li",{parentName:"ul"},"SIGNUPS_ALLOWED=false - \u7981\u6b62\u6ce8\u518c - \u4f46\u8fd8\u662f\u53ef\u4ee5\u9080\u8bf7"),(0,i.kt)("li",{parentName:"ul"},"INVITATIONS_ALLOWED - \u662f\u5426\u5141\u8bb8\u9080\u8bf7"),(0,i.kt)("li",{parentName:"ul"},"ADMIN_TOKEN - \u5f00\u542f admin",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"https://localhost/admin")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it \\\n  -v $PWD/bitwarden/data/:/data/ \\\n  -p 80:80 \\\n  --name bitwarden bitwardenrs/server:latest\n\n# \u751f\u6210 admin token\nopenssl rand -base64 48\n")))}m.isMDXComponent=!0}}]);