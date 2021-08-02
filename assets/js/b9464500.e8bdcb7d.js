"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[70526],{3905:function(t,n,e){e.d(n,{Zo:function(){return u},kt:function(){return N}});var a=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var o=a.createContext({}),k=function(t){var n=a.useContext(o),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},u=function(t){var n=k(t.components);return a.createElement(o.Provider,{value:n},t.children)},m={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),d=k(e),N=r,g=d["".concat(o,".").concat(N)]||d[N]||m[N]||l;return e?a.createElement(g,i(i({ref:n},u),{},{components:e})):a.createElement(g,i({ref:n},u))}));function N(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=d;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var k=2;k<l;k++)i[k]=e[k];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}d.displayName="MDXCreateElement"},73700:function(t,n,e){e.r(n),e.d(n,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return k},toc:function(){return u},default:function(){return d}});var a=e(22122),r=e(19756),l=(e(67294),e(3905)),i=["components"],p={id:"channel",title:"Asterisk \u901a\u9053"},o=void 0,k={unversionedId:"voip/asterisk/channel",id:"voip/asterisk/channel",isDocsHomePage:!1,title:"Asterisk \u901a\u9053",description:"- Channel Drivers",source:"@site/notes/voip/asterisk/asterisk-channel.md",sourceDirName:"voip/asterisk",slug:"/voip/asterisk/channel",permalink:"/notes/voip/asterisk/channel",editUrl:"https://github.com/wenerme/wener/edit/master/notes/voip/asterisk/asterisk-channel.md",version:"current",frontMatter:{id:"channel",title:"Asterisk \u901a\u9053"},sidebar:"docs",previous:{title:"chan_sip",permalink:"/notes/voip/asterisk/chan_sip"},next:{title:"Asterisk \u7f16\u7801",permalink:"/notes/voip/asterisk/codec"}},u=[{value:"\u901a\u9053\u7c7b\u578b",id:"\u901a\u9053\u7c7b\u578b",children:[]},{value:"\u901a\u9053\u6a21\u5757",id:"\u901a\u9053\u6a21\u5757",children:[]},{value:"chan_sip vs chan_pjsip",id:"chan_sip-vs-chan_pjsip",children:[]}],m={toc:u};function d(t){var n=t.components,e=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,e,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wiki.asterisk.org/wiki/display/AST/Channel+Drivers"},"Channel Drivers"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6240\u6709\u6ce8\u518c\u7684\u901a\u9053\u7c7b\u578b\ncore show channeltypes\n")),(0,l.kt)("h2",{id:"\u901a\u9053\u7c7b\u578b"},"\u901a\u9053\u7c7b\u578b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"chan_oss\u3001chan_alsa\u3001chan_console \u53ea\u80fd\u6ce8\u518c\u4e00\u4e2a - \u56e0\u4e3a\u5728\u505a\u540c\u4e00\u4ef6\u4e8b"),(0,l.kt)("li",{parentName:"ul"},"SIP \u529f\u80fd\u53ef\u7531 chan_sip \u548c chan_pjsip \u63d0\u4f9b - \u76ee\u524d\u5efa\u8bae\u4f7f\u7528 pjsip"),(0,l.kt)("li",{parentName:"ul"},"IAX \u662f asterisk \u4e4b\u95f4\u7684\u901a\u8baf\u534f\u8bae - \u7528\u4e8e\u5b9e\u73b0\u591a\u5b9e\u4f8b\uff0c\u4e92\u76f8\u53d1\u73b0\uff0c\u5916\u90e8\u7ebf\u8def\u7b49")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Devicestate"),(0,l.kt)("th",{parentName:"tr",align:null},"Presencestate"),(0,l.kt)("th",{parentName:"tr",align:null},"Indications"),(0,l.kt)("th",{parentName:"tr",align:null},"Transfer"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Announcer"),(0,l.kt)("td",{parentName:"tr",align:null},"Bridge Media Announcing Channel Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CBAnn"),(0,l.kt)("td",{parentName:"tr",align:null},"Conference Bridge Announcing Channel"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CBRec"),(0,l.kt)("td",{parentName:"tr",align:null},"Conference Bridge Recording Channel"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Console"),(0,l.kt)("td",{parentName:"tr",align:null},"OSS Console Channel Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DAHDI"),(0,l.kt)("td",{parentName:"tr",align:null},"DAHDI Telephony w/PRI"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dongle"),(0,l.kt)("td",{parentName:"tr",align:null},"Huawei 3G Dongle Channel Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IAX2"),(0,l.kt)("td",{parentName:"tr",align:null},"Inter Asterisk eXchange Driver (Ver 2)"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Local"),(0,l.kt)("td",{parentName:"tr",align:null},"Local Proxy Channel Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MGCP"),(0,l.kt)("td",{parentName:"tr",align:null},"Media Gateway Control Protocol (MGCP)"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MulticastRTP"),(0,l.kt)("td",{parentName:"tr",align:null},"Multicast RTP Paging Channel Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PJSIP"),(0,l.kt)("td",{parentName:"tr",align:null},"PJSIP Channel Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Recorder"),(0,l.kt)("td",{parentName:"tr",align:null},"Bridge Media Recording Channel Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SIP"),(0,l.kt)("td",{parentName:"tr",align:null},"Session Initiation Protocol (SIP)"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Skinny"),(0,l.kt)("td",{parentName:"tr",align:null},"Skinny Client Control Protocol (Skinny)"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Surrogate"),(0,l.kt)("td",{parentName:"tr",align:null},"Surrogate channel used to pull channel f"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UnicastRTP"),(0,l.kt)("td",{parentName:"tr",align:null},"Unicast RTP Media Channel Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USTM"),(0,l.kt)("td",{parentName:"tr",align:null},"UNISTIM Channel Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"no")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"chan_mobile \u548c chan_dongle \u6ca1\u663e\u793a - \u56e0\u4e3a\u6ce8\u518c\u5931\u8d25")),(0,l.kt)("h2",{id:"\u901a\u9053\u6a21\u5757"},"\u901a\u9053\u6a21\u5757"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Module"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:"right"},"Support Level"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chan_bridge_media.so"),(0,l.kt)("td",{parentName:"tr",align:null},"Bridge Media Channel Driver"),(0,l.kt)("td",{parentName:"tr",align:"right"},"core")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chan_dahdi.so"),(0,l.kt)("td",{parentName:"tr",align:null},"DAHDI Telephony w/PRI"),(0,l.kt)("td",{parentName:"tr",align:"right"},"core")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chan_dongle.so"),(0,l.kt)("td",{parentName:"tr",align:null},"Huawei 3G Dongle Channel Driver"),(0,l.kt)("td",{parentName:"tr",align:"right"},"extended")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chan_iax2.so"),(0,l.kt)("td",{parentName:"tr",align:null},"Inter Asterisk eXchange (Ver 2)"),(0,l.kt)("td",{parentName:"tr",align:"right"},"core")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chan_mgcp.so"),(0,l.kt)("td",{parentName:"tr",align:null},"Media Gateway Control Protocol (MGCP)"),(0,l.kt)("td",{parentName:"tr",align:"right"},"extended")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chan_mobile.so"),(0,l.kt)("td",{parentName:"tr",align:null},"Bluetooth Mobile Device Channel Driver"),(0,l.kt)("td",{parentName:"tr",align:"right"},"extended")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chan_oss.so"),(0,l.kt)("td",{parentName:"tr",align:null},"OSS Console Channel Driver"),(0,l.kt)("td",{parentName:"tr",align:"right"},"deprecated")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chan_pjsip.so"),(0,l.kt)("td",{parentName:"tr",align:null},"PJSIP Channel Driver"),(0,l.kt)("td",{parentName:"tr",align:"right"},"core")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chan_rtp.so"),(0,l.kt)("td",{parentName:"tr",align:null},"RTP Media Channel"),(0,l.kt)("td",{parentName:"tr",align:"right"},"core")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chan_sip.so"),(0,l.kt)("td",{parentName:"tr",align:null},"Session Initiation Protocol (SIP)"),(0,l.kt)("td",{parentName:"tr",align:"right"},"extended")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chan_skinny.so"),(0,l.kt)("td",{parentName:"tr",align:null},"Skinny Client Control Protocol (Skinny)"),(0,l.kt)("td",{parentName:"tr",align:"right"},"extended")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chan_unistim.so"),(0,l.kt)("td",{parentName:"tr",align:null},"UNISTIM Protocol (USTM)"),(0,l.kt)("td",{parentName:"tr",align:"right"},"extended")))),(0,l.kt)("h1",{id:"faq"},"FAQ"),(0,l.kt)("h2",{id:"chan_sip-vs-chan_pjsip"},"chan_sip vs chan_pjsip"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"chan_sip",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"2014 \u5e74\u524d - SIP \u65e9\u671f"),(0,l.kt)("li",{parentName:"ul"},"Asterisk <= 11"))),(0,l.kt)("li",{parentName:"ul"},"chan_pjsip",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Asterisk >= 12"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e PJSIP \u5e93 - \u72ec\u7acb\u4e8e Asterisk"))),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u53ea\u5904\u7406 VoIP - chan_sip \u8db3\u77e3",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f20\u7edf\u7684\u7535\u8bdd\u7f51\u5173\u90fd\u4f7f\u7528\u975e\u5e38\u8001\u7248\u672c\u7684 asterisk - \u4f8b\u5982 1.8"))),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u9700\u8981\u5904\u7406\u73b0\u4ee3\u5316\u901a\u8baf - \u4f7f\u7528 chan_pjsip",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Websocket"),(0,l.kt)("li",{parentName:"ul"},"WebRTC"),(0,l.kt)("li",{parentName:"ul"},"\u89c6\u9891"),(0,l.kt)("li",{parentName:"ul"},"\u65b0\u7684\u7f16\u7801 - Opus, VP8, VP9"))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wiki.asterisk.org/wiki/display/AST/Migrating+from+chan_sip+to+res_pjsip"},"Migrating from chan_sip to res_pjsip"))))))}d.isMDXComponent=!0}}]);