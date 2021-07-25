(window.webpackJsonp=window.webpackJsonp||[]).push([[529],{1166:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(r),m=n,f=b["".concat(a,".").concat(m)]||b[m]||u[m]||o;return r?i.a.createElement(f,l(l({ref:t},p),{},{components:r})):i.a.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},603:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),i=r(8),o=(r(0),r(1166)),a={id:"voip",title:"VoIP"},l={unversionedId:"voip/voip",id:"voip/voip",isDocsHomePage:!1,title:"VoIP",description:"Tips",source:"@site/notes/voip/README.md",slug:"/voip/voip",permalink:"/notes/voip/voip",editUrl:"https://github.com/wenerme/wener/edit/master/notes/voip/README.md",version:"current",sidebar:"docs",previous:{title:"ImageMagick",permalink:"/notes/algorithm/cv/imagemagick"},next:{title:"OpenVox Asterisk",permalink:"/notes/voip/openvox-asterisk"}},c=[{value:"Tips",id:"tips",children:[]},{value:"RFCs",id:"rfcs",children:[]}],p={toc:c};function s(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"tips"},"Tips"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.linphone.org/"},"https://www.linphone.org/"))),Object(o.b)("h2",{id:"rfcs"},"RFCs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.cisco.com/c/en/us/support/docs/voice/voice-quality/46275-voice-rfcs.html"},"Voice-Related RFCs")),Object(o.b)("li",{parentName:"ul"},"RFC 3856 - A Presence Event Package for the Session Initiation Protocol"),Object(o.b)("li",{parentName:"ul"},"RFC 3262 Reliability of Provisional Responses in the Session Initiation Protocol",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u4e34\u65f6\u54cd\u5e94\u7684\u53ef\u9760\u4f20\u8f93"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.myvoipapp.com/blogs/yxh/2011/10/30/rfc4028%E7%9A%84%E4%B8%8D%E8%B6%B3%E4%B8%8Esip-keep-alive%E6%96%B9%E6%B3%95/"},"RFC4028\u7684\u4e0d\u8db3\u4e0eSIP KEEP-ALIVE\u65b9\u6cd5")))),Object(o.b)("li",{parentName:"ul"},"RFC 4028 - Session Timers in the Session Initiation Protocol",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u4f1a\u8bdd\u5237\u65b0"))),Object(o.b)("li",{parentName:"ul"},"RFC 3261 SIP: Session Initiation Protocol",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc3261"},"https://tools.ietf.org/html/rfc3261")),Object(o.b)("li",{parentName:"ul"},"\u5b9a\u4e49\u4e86\u4f7f\u7528 OPTIONS \u6765\u68c0\u6d4b\u72b6\u6001",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"asterisk \u4e2d\u7684 qualify"))))),Object(o.b)("li",{parentName:"ul"},"RFC 2833 - RTP Payload for DTMF Digits, Telephony Tones and Telephony Signals",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc2833"},"https://tools.ietf.org/html/rfc2833")))),Object(o.b)("li",{parentName:"ul"},"RFC 4733 - RTP Payload for DTMF Digits, Telephony Tones, and Telephony Signals",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u66ff\u4ee3 RFC 2833"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc4733"},"https://tools.ietf.org/html/rfc4733")))),Object(o.b)("li",{parentName:"ul"},"RFC 6913 - Indicating Fax over IP Capability in the Session Initiation Protocol (SIP)",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc6913"},"https://tools.ietf.org/html/rfc6913"))))))}s.isMDXComponent=!0}}]);