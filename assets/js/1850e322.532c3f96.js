"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[15718],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return N}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),g=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=g(t.components);return r.createElement(p.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,d=m(t,["components","mdxType","originalType","parentName"]),k=g(a),N=n,u=k["".concat(p,".").concat(N)]||k[N]||o[N]||l;return a?r.createElement(u,i(i({ref:e},d),{},{components:a})):r.createElement(u,i({ref:e},d))}));function N(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=k;var m={};for(var p in e)hasOwnProperty.call(e,p)&&(m[p]=e[p]);m.originalType=t,m.mdxType="string"==typeof t?t:n,i[1]=m;for(var g=2;g<l;g++)i[g]=a[g];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},64931:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return g},toc:function(){return d},default:function(){return k}});var r=a(22122),n=a(19756),l=(a(67294),a(3905)),i=["components"],m={title:"\u5ef6\u8fdf\u6570"},p=void 0,g={unversionedId:"devops/concept/latency",id:"devops/concept/latency",isDocsHomePage:!1,title:"\u5ef6\u8fdf\u6570",description:"- VoIP \u53ef\u63a5\u53d7 150ms - 300ms",source:"@site/notes/devops/concept/latency.md",sourceDirName:"devops/concept",slug:"/devops/concept/latency",permalink:"/notes/devops/concept/latency",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/concept/latency.md",version:"current",frontMatter:{title:"\u5ef6\u8fdf\u6570"},sidebar:"docs",previous:{title:"\u6bd4\u7279\u7387",permalink:"/notes/devops/concept/bitrate"},next:{title:"Cloudflare Team",permalink:"/notes/devops/provider/cloudflare-team"}},d=[{value:"Latency Comparison Numbers ~ 2012",id:"latency-comparison-numbers--2012",children:[]},{value:"Misc",id:"misc",children:[]},{value:"Unit",id:"unit",children:[]}],o={toc:d};function k(t){var e=t.components,a=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"VoIP \u53ef\u63a5\u53d7 150ms - 300ms")),(0,l.kt)("h2",{id:"latency-comparison-numbers--2012"},"Latency Comparison Numbers ~ 2012"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Interactive ",(0,l.kt)("a",{parentName:"li",href:"https://colin-scott.github.io/personal_website/research/interactive_latency.html"},"Latency Numbers Every Programmer Should Know")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=13530820"},"HN")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://gist.github.com/jboner/2841832"},"Gist")," ",(0,l.kt)("a",{parentName:"li",href:"https://gist.github.com/GLMeece/b00c9c97a06a957af7426b1be5bc8be6"},"Neo")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=JEpsKnWZrJ8"},"Grace Hopper explains Nanoseconds")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wondernetwork.com/pings/"},"Global Ping"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"computer latency"),(0,l.kt)("th",{parentName:"tr",align:"right"},"nano seconds"),(0,l.kt)("th",{parentName:"tr",align:"right"},"micro seconds"),(0,l.kt)("th",{parentName:"tr",align:"right"},"milliseconds"),(0,l.kt)("th",{parentName:"tr",align:null},"relative"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"L1 cache reference"),(0,l.kt)("td",{parentName:"tr",align:"right"},"0.5 ns"),(0,l.kt)("td",{parentName:"tr",align:"right"}),(0,l.kt)("td",{parentName:"tr",align:"right"}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Branch mispredict"),(0,l.kt)("td",{parentName:"tr",align:"right"},"5.0 ns"),(0,l.kt)("td",{parentName:"tr",align:"right"}),(0,l.kt)("td",{parentName:"tr",align:"right"}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"L2 cache reference"),(0,l.kt)("td",{parentName:"tr",align:"right"},"7.0 ns"),(0,l.kt)("td",{parentName:"tr",align:"right"}),(0,l.kt)("td",{parentName:"tr",align:"right"}),(0,l.kt)("td",{parentName:"tr",align:null},"14x L1 cache")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mutex lock/unlock"),(0,l.kt)("td",{parentName:"tr",align:"right"},"25.0 ns"),(0,l.kt)("td",{parentName:"tr",align:"right"}),(0,l.kt)("td",{parentName:"tr",align:"right"}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Main memory reference"),(0,l.kt)("td",{parentName:"tr",align:"right"},"100.0 ns"),(0,l.kt)("td",{parentName:"tr",align:"right"}),(0,l.kt)("td",{parentName:"tr",align:"right"}),(0,l.kt)("td",{parentName:"tr",align:null},"20x L2 cache, 200x L1 cache")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Compress 1K bytes with Zippy"),(0,l.kt)("td",{parentName:"tr",align:"right"},"3,000.0 ns"),(0,l.kt)("td",{parentName:"tr",align:"right"},"3 us"),(0,l.kt)("td",{parentName:"tr",align:"right"}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Send 1K bytes over 1 Gbps network"),(0,l.kt)("td",{parentName:"tr",align:"right"},"10,000.0 ns"),(0,l.kt)("td",{parentName:"tr",align:"right"},"10 us"),(0,l.kt)("td",{parentName:"tr",align:"right"}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Read 4K randomly from SSD"),(0,l.kt)("td",{parentName:"tr",align:"right"},"150,000.0 ns"),(0,l.kt)("td",{parentName:"tr",align:"right"},"150 us"),(0,l.kt)("td",{parentName:"tr",align:"right"}),(0,l.kt)("td",{parentName:"tr",align:null},"~1GB/sec SSD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Read 1 MB sequentially from memory"),(0,l.kt)("td",{parentName:"tr",align:"right"},"250,000.0 ns"),(0,l.kt)("td",{parentName:"tr",align:"right"},"250 us"),(0,l.kt)("td",{parentName:"tr",align:"right"}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Round trip within same datacenter"),(0,l.kt)("td",{parentName:"tr",align:"right"},"500,000.0 ns"),(0,l.kt)("td",{parentName:"tr",align:"right"},"500 us"),(0,l.kt)("td",{parentName:"tr",align:"right"},"0.5 ms"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Read 1 MB sequentially from SSD"),(0,l.kt)("td",{parentName:"tr",align:"right"},"1,000,000.0 ns"),(0,l.kt)("td",{parentName:"tr",align:"right"},"1,000 us"),(0,l.kt)("td",{parentName:"tr",align:"right"},"1 ms"),(0,l.kt)("td",{parentName:"tr",align:null},"~1GB/sec SSD, 4X memory")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Disk seek"),(0,l.kt)("td",{parentName:"tr",align:"right"},"10,000,000.0 ns"),(0,l.kt)("td",{parentName:"tr",align:"right"},"10,000 us"),(0,l.kt)("td",{parentName:"tr",align:"right"},"10 ms"),(0,l.kt)("td",{parentName:"tr",align:null},"20x datacenter roundtrip")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Read 1 MB sequentially from disk"),(0,l.kt)("td",{parentName:"tr",align:"right"},"20,000,000.0 ns"),(0,l.kt)("td",{parentName:"tr",align:"right"},"20,000 us"),(0,l.kt)("td",{parentName:"tr",align:"right"},"20 ms"),(0,l.kt)("td",{parentName:"tr",align:null},"80x memory, 20X SSD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Send packet CA->Netherlands->CA"),(0,l.kt)("td",{parentName:"tr",align:"right"},"150,000,000.0 ns"),(0,l.kt)("td",{parentName:"tr",align:"right"},"150,000 us"),(0,l.kt)("td",{parentName:"tr",align:"right"},"150 ms"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"misc"},"Misc"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"common latency"),(0,l.kt)("th",{parentName:"tr",align:"right"},"ms"),(0,l.kt)("th",{parentName:"tr",align:"right"},"s"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"120 fps"),(0,l.kt)("td",{parentName:"tr",align:"right"},"8 ms"),(0,l.kt)("td",{parentName:"tr",align:"right"},"1/120 s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"60 fps"),(0,l.kt)("td",{parentName:"tr",align:"right"},"16 ms"),(0,l.kt)("td",{parentName:"tr",align:"right"},"1/60 s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"24 fps"),(0,l.kt)("td",{parentName:"tr",align:"right"},"41 ms"),(0,l.kt)("td",{parentName:"tr",align:"right"},"1/24 s")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"human lantency"),(0,l.kt)("th",{parentName:"tr",align:"right"},"ms"),(0,l.kt)("th",{parentName:"tr",align:"right"},"s"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"eye blink"),(0,l.kt)("td",{parentName:"tr",align:"right"},"100-150 ms"),(0,l.kt)("td",{parentName:"tr",align:"right"},"0.1-0.5 s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"human reaction time"),(0,l.kt)("td",{parentName:"tr",align:"right"},"250 ms"),(0,l.kt)("td",{parentName:"tr",align:"right"},"0.25 s")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Nerve conduction velocity/\u795e\u7ecf\u4f20\u5bfc\u901f\u5ea6 ~ 40m/s"),(0,l.kt)("li",{parentName:"ul"},"\u97f3\u901f - 343 m/s"),(0,l.kt)("li",{parentName:"ul"},"\u5149\u901f - 299,792,458 m / s")),(0,l.kt)("h2",{id:"unit"},"Unit"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"unit"),(0,l.kt)("th",{parentName:"tr",align:"right"},"stand for"),(0,l.kt)("th",{parentName:"tr",align:null},"n"),(0,l.kt)("th",{parentName:"tr",align:"right"},"mean"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"ns"),(0,l.kt)("td",{parentName:"tr",align:"right"},"nano second"),(0,l.kt)("td",{parentName:"tr",align:null},"10^9"),(0,l.kt)("td",{parentName:"tr",align:"right"},"\u7eb3\u79d2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"us"),(0,l.kt)("td",{parentName:"tr",align:"right"},"micro second"),(0,l.kt)("td",{parentName:"tr",align:null},"10^6"),(0,l.kt)("td",{parentName:"tr",align:"right"},"\u5fae\u79d2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"ms"),(0,l.kt)("td",{parentName:"tr",align:"right"},"milli second"),(0,l.kt)("td",{parentName:"tr",align:null},"10^3"),(0,l.kt)("td",{parentName:"tr",align:"right"},"\u6beb\u79d2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"s"),(0,l.kt)("td",{parentName:"tr",align:"right"},"second"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:"right"},"\u79d2")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ns"),(0,l.kt)("th",{parentName:"tr",align:null},"us"),(0,l.kt)("th",{parentName:"tr",align:null},"ms"),(0,l.kt)("th",{parentName:"tr",align:null},"s"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"10^-3"),(0,l.kt)("td",{parentName:"tr",align:null},"10^-6"),(0,l.kt)("td",{parentName:"tr",align:null},"10^-9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1000"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"10^-3"),(0,l.kt)("td",{parentName:"tr",align:null},"10^-6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10^6"),(0,l.kt)("td",{parentName:"tr",align:null},"1000"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"10^-3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10^9"),(0,l.kt)("td",{parentName:"tr",align:null},"10^6"),(0,l.kt)("td",{parentName:"tr",align:null},"1000"),(0,l.kt)("td",{parentName:"tr",align:null},"1")))))}k.isMDXComponent=!0}}]);