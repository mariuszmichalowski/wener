"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[46811],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=i,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},43057:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],l={title:"Dev Awesome",tags:["Awesome"]},c=void 0,s={unversionedId:"dev/dev-awesome",id:"dev/dev-awesome",isDocsHomePage:!1,title:"Dev Awesome",description:"Design",source:"@site/notes/dev/dev-awesome.md",sourceDirName:"dev",slug:"/dev/dev-awesome",permalink:"/notes/dev/dev-awesome",editUrl:"https://github.com/wenerme/wener/edit/master/notes/dev/dev-awesome.md",tags:[{label:"Awesome",permalink:"/notes/tags/awesome"}],version:"current",frontMatter:{title:"Dev Awesome",tags:["Awesome"]},sidebar:"docs",previous:{title:"SIP \u63d0\u4f9b\u5546",permalink:"/notes/voip/sip/provider"},next:{title:"Dev FAQ",permalink:"/notes/dev/dev-faq"}},u=[{value:"Design",id:"design",children:[]},{value:"Read",id:"read",children:[]},{value:"Misc",id:"misc",children:[]},{value:"Service Discovery",id:"service-discovery",children:[]},{value:"Conf",id:"conf",children:[]},{value:"Audio",id:"audio",children:[]},{value:"Metrics",id:"metrics",children:[]},{value:"\u534f\u4f5c",id:"\u534f\u4f5c",children:[]},{value:"Microservices",id:"microservices",children:[]},{value:"Conf",id:"conf-1",children:[]}],p={toc:u};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"design"},"Design"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/architecture/patterns/"},"https://docs.microsoft.com/en-us/azure/architecture/patterns/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/"},"https://microservices.io/patterns/"))),(0,a.kt)("h2",{id:"read"},"Read"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/cs-books/influential-cs-books"},"cs-books/influential-cs-books")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://engineering.linkedin.com/distributed-systems/log-what-every-software-engineer-should-know-about-real-time-datas-unifying"},"The Log: What every software engineer should know about real-time data's unifying abstraction"))),(0,a.kt)("h2",{id:"misc"},"Misc"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/google/or-tools"},"google/or-tools")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/boyter/scc"},"boyter/scc"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"fast accurate code counter")))),(0,a.kt)("h2",{id:"service-discovery"},"Service Discovery"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"consul"),(0,a.kt)("li",{parentName:"ul"},"zookeeper"),(0,a.kt)("li",{parentName:"ul"},"mDNS")),(0,a.kt)("h2",{id:"conf"},"Conf"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"consul"),(0,a.kt)("li",{parentName:"ul"},"zookeeper"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ctripcorp/apollo"},"ctripcorp/apollo"))),(0,a.kt)("h2",{id:"audio"},"Audio"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/emicklei/melrose"},"emicklei/melrose")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/katspaugh/wavesurfer.js"},"katspaugh/wavesurfer.js")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/plewto/Pigiron"},"plewto/Pigiron"))),(0,a.kt)("h2",{id:"metrics"},"Metrics"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"cloc"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/boyter/scc"},"boyter/scc"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# -M '[.]pb[.]' -M 'generated'\nscc --exclude-dir vendor --no-gen .\n")),(0,a.kt)("h2",{id:"\u534f\u4f5c"},"\u534f\u4f5c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A simple way to build collaborative web apps",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=28209736"},"HN"))))),(0,a.kt)("h2",{id:"microservices"},"Microservices"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.nginx.com/blog/event-driven-data-management-microservices/"},"Event-Driven Data Management for Microservices"))),(0,a.kt)("h2",{id:"conf-1"},"Conf"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Flagsmith/flagsmith"},"Flagsmith/flagsmith"))))}m.isMDXComponent=!0}}]);