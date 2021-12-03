"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[74045],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return k}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(r),k=a,s=d["".concat(u,".").concat(k)]||d[k]||c[k]||l;return r?n.createElement(s,o(o({ref:t},m),{},{components:r})):n.createElement(s,o({ref:t},m))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},47553:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),o=["components"],i={title:"CloudFlare"},u=void 0,p={unversionedId:"devops/provider/cloudflare",id:"devops/provider/cloudflare",isDocsHomePage:!1,title:"CloudFlare",description:"- \u53c2\u8003",source:"@site/notes/devops/provider/cloudflare.md",sourceDirName:"devops/provider",slug:"/devops/provider/cloudflare",permalink:"/notes/devops/provider/cloudflare",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/provider/cloudflare.md",tags:[],version:"current",frontMatter:{title:"CloudFlare"},sidebar:"docs",previous:{title:"\u5ef6\u8fdf\u6570",permalink:"/notes/devops/concept/latency"},next:{title:"Cloudflare Team",permalink:"/notes/devops/provider/cloudflare-team"}},m=[{value:"Argo Tunnel",id:"argo-tunnel",children:[]},{value:"Worker",id:"worker",children:[]}],c={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://webmasters.stackexchange.com/a/88685"},"\u4e3a\u4ec0\u4e48\u80fd\u63d0\u4f9b\u65e0\u9650\u5e26\u5bbd\uff1f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://support.cloudflare.com/hc/en-us/articles/115003206852-Understanding-Origin-Cache-Control"},"Understanding Origin Cache-Control"))))),(0,l.kt)("h2",{id:"argo-tunnel"},"Argo Tunnel"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u6e90\u7aef\u548c Cloudflare \u4e4b\u95f4\u52a0\u5bc6\u901a\u8baf - ZeroTrust"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://support.cloudflare.com/hc/zh-cn/articles/115000224192"},"\u4ef7\u683c")," - Since 2018"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.cloudflare.com/tunnel-for-everyone/"},"\u514d\u8d39\u58f0\u660e")," - 2021-4-17",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6ca1\u6709 Argo Smart Routing \u7279\u6027"),(0,l.kt)("li",{parentName:"ul"},"\u91cd\u547d\u540d\u4e3a Cloudflare Tunnel")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Traffic"),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"$/Month")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"$/G/Month")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"< 1 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"5.90"),(0,l.kt)("td",{parentName:"tr",align:null},"0.59")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"100 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"14.90"),(0,l.kt)("td",{parentName:"tr",align:null},"0.149")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1 TB / 1000 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"104.90"),(0,l.kt)("td",{parentName:"tr",align:null},"0.1049")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10 TB"),(0,l.kt)("td",{parentName:"tr",align:null},"1004.90"),(0,l.kt)("td",{parentName:"tr",align:null},"0.10049")))),(0,l.kt)("h2",{id:"worker"},"Worker"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Free",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"100,000 \u8bf7\u6c42/\u5929",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"1000 \u8bf7\u6c42/\u5206\u949f"))),(0,l.kt)("li",{parentName:"ul"},"\u5355\u6b21\u8bf7\u6c42 CPU 10ms"),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u6b21\u8bf7\u6c42\u540e\u5ef6\u8fdf\u4f1a\u964d\u4f4e"),(0,l.kt)("li",{parentName:"ul"},"30 \u4e2a Worker"))),(0,l.kt)("li",{parentName:"ul"},"Bundled 5$/M",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"10M \u8bf7\u6c42/\u6708",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8d85\u51fa 1M \u8bf7\u6c42 ",(0,l.kt)("inlineCode",{parentName:"li"},"$0.50")))),(0,l.kt)("li",{parentName:"ul"},"\u5355\u6b21\u8bf7\u6c42 CPU 50ms"),(0,l.kt)("li",{parentName:"ul"},"\u603b\u662f\u6700\u4f4e\u5ef6\u8fdf"),(0,l.kt)("li",{parentName:"ul"},"30 \u4e2a Worker"),(0,l.kt)("li",{parentName:"ul"},"KV",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"100 \u547d\u540d\u7a7a\u95f4"),(0,l.kt)("li",{parentName:"ul"},"1G"),(0,l.kt)("li",{parentName:"ul"},"10M \u8bfb, 1M \u5199, 1M \u5220\u9664, 10M List")))))))}d.isMDXComponent=!0}}]);