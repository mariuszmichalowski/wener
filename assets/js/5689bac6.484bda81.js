"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[6577],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return k}});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=a.createContext({}),s=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,p=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),k=i,N=c["".concat(o,".").concat(k)]||c[k]||m[k]||p;return r?a.createElement(N,n(n({ref:t},u),{},{components:r})):a.createElement(N,n({ref:t},u))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var p=r.length,n=new Array(p);n[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,n[1]=l;for(var s=2;s<p;s++)n[s]=r[s];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},45379:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var a=r(22122),i=r(19756),p=(r(67294),r(3905)),n=["components"],l={title:"PJSIP"},o=void 0,s={unversionedId:"voip/dev/pjsip",id:"voip/dev/pjsip",isDocsHomePage:!1,title:"PJSIP",description:"Tips",source:"@site/notes/voip/dev/pjsip.md",sourceDirName:"voip/dev",slug:"/voip/dev/pjsip",permalink:"/notes/voip/dev/pjsip",editUrl:"https://github.com/wenerme/wener/edit/master/notes/voip/dev/pjsip.md",version:"current",frontMatter:{title:"PJSIP"},sidebar:"docs",previous:{title:"Asterisk \u7248\u672c",permalink:"/notes/voip/asterisk/version"},next:{title:"FreePBX",permalink:"/notes/voip/freepbx/intro"}},u=[{value:"Tips",id:"tips",children:[]},{value:"Versions",id:"versions",children:[]},{value:"FAQ",id:"faq",children:[{value:"How can I apply a fix from a particular ticket ?",id:"how-can-i-apply-a-fix-from-a-particular-ticket-",children:[]}]}],m={toc:u};function c(e){var t=e.components,r=(0,i.Z)(e,n);return(0,p.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"tips"},"Tips"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"http://www.pjsip.org/"},"pjsip.org"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"Write in C"),(0,p.kt)("li",{parentName:"ul"},"\u652f\u6301 C++\uff0c Pythone \u548c Java",(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"http://www.pjsip.org/docs/book-latest/html/intro_pjsua2.html"},"http://www.pjsip.org/docs/book-latest/html/intro_pjsua2.html")))))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/pjsip/pjproject"},"pjsip/pjproject")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://git.alpinelinux.org/cgit/aports/tree/main/pjproject/APKBUILD"},"pjproject/APKBUILD")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://trac.pjsip.org/repos/wiki/PJSIP-Datasheet"},"PJSIP-Datasheet")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://trac.pjsip.org/repos/roadmap"},"Roadmap")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"http://www.pjsip.org/links.htm"},"Open Source SIP Stack and Media Links")),(0,p.kt)("li",{parentName:"ul"},"Asterisk 13 \u5f00\u59cb\u53ef\u4ee5\u9009\u62e9\u4f7f\u7528\u5c01\u88c5\u7684 pjsip"),(0,p.kt)("li",{parentName:"ul"},"WebRTC",(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/pjsip/pjproject/tree/master/third_party/webrtc"},"https://github.com/pjsip/pjproject/tree/master/third_party/webrtc")))),(0,p.kt)("li",{parentName:"ul"},"SRTP \u57fa\u4e8e ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/cisco/libsrtp"},"https://github.com/cisco/libsrtp")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/pjsip/pjproject/tree/master/pjsip-apps/src/swig"},"https://github.com/pjsip/pjproject/tree/master/pjsip-apps/src/swig"))),(0,p.kt)("h2",{id:"versions"},"Versions"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/pjsip/pjproject/releases/tag/2.11"},"2.11"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"2021-03-17"),(0,p.kt)("li",{parentName:"ul"},"Trickle ICE"),(0,p.kt)("li",{parentName:"ul"},"iOS native SSL"),(0,p.kt)("li",{parentName:"ul"},"Android native codecs - H264, VP8, VP9, AMR-NB, AMR-WB"),(0,p.kt)("li",{parentName:"ul"},"iOS Swift \u548c Android Kotlin ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/pjsip/pjproject/tree/2.11/pjsip-apps"},"\u793a\u4f8b\u5e94\u7528")))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://trac.pjsip.org/repos/milestone/release-2.10"},"2.10"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"2019-12-31"),(0,p.kt)("li",{parentName:"ul"},"WebRTC \u89c6\u9891\u4ea4\u4e92 - RTCP-FB PLI, VP8 VP9 \u7f16\u7801"),(0,p.kt)("li",{parentName:"ul"},"\u97f3\u9891",(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"\u57fa\u4e8e RTCP \u52a8\u6001\u8c03\u6574\u7801\u7387 - Opus, AMR, Speex"),(0,p.kt)("li",{parentName:"ul"},"MacOS Voice Processing IO"))))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://trac.pjsip.org/repos/milestone/release-2.9"},"2.9"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"2019-6-13"),(0,p.kt)("li",{parentName:"ul"},"\u89c6\u9891\u4f1a\u8bae"),(0,p.kt)("li",{parentName:"ul"},"macOS & iOS native SSL backen"),(0,p.kt)("li",{parentName:"ul"},"TURN over TLS"),(0,p.kt)("li",{parentName:"ul"},"SIP \u591a\u8def\u76d1\u542c"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://trac.pjsip.org/repos/milestone/release-2.8"},"2.8"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"2018-9-5"),(0,p.kt)("li",{parentName:"ul"},"\u4e3b\u8981",(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"OPUS param on the fly"),(0,p.kt)("li",{parentName:"ul"},"WebRTC interopability - RTP/SAVPF - SSRC"))))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://trac.pjsip.org/repos/milestone/release-2.7"},"2.7"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"2017-9-25"),(0,p.kt)("li",{parentName:"ul"},"\u4e3b\u8981",(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"DTLS for SRTP keying"),(0,p.kt)("li",{parentName:"ul"},"iOS (and Mac) H.264 Native Encoder and Decoder"),(0,p.kt)("li",{parentName:"ul"},"NAT64"))))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"http://trac.pjsip.org/repos/milestone/release-2.6"},"2.6"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"2017-1-25"),(0,p.kt)("li",{parentName:"ul"},"\u4e3b\u8981",(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"WinRT/Win10 support"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://trac.pjsip.org/repos/ticket/1946"},"#1946"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"Assertion in deinitializing client auth session when dialog creation fails"),(0,p.kt)("li",{parentName:"ul"},"\u5728\u4e4b\u524d\u7248\u672c\u4e2d\u5bfc\u81f4\u4e86\u5927\u91cf\u5f02\u5e38")))))),(0,p.kt)("h2",{id:"faq"},"FAQ"),(0,p.kt)("h3",{id:"how-can-i-apply-a-fix-from-a-particular-ticket-"},"How can I apply a fix from a particular ticket ?"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://trac.pjsip.org/repos/wiki/FAQ#afix"},"https://trac.pjsip.org/repos/wiki/FAQ#afix")),(0,p.kt)("li",{parentName:"ul"},"\u627e\u5230\u5bf9\u5e94\u7684 Ticket"),(0,p.kt)("li",{parentName:"ul"},"\u627e\u5230\u6240\u6709 Ticket \u7684 Change Set"),(0,p.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d Change Set \u4e3a Unified Diff",(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"curl 'https://trac.pjsip.org/repos/changeset/5401?format=diff' -o changeset_r5401.patch")))),(0,p.kt)("li",{parentName:"ul"},"\u5e94\u7528\u8865\u4e01",(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"patch -p4 --dry-run < changeset_r3743.diff"))))))}c.isMDXComponent=!0}}]);