(window.webpackJsonp=window.webpackJsonp||[]).push([[648],{1152:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return s}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),u=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,b=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(a),O=r,s=m["".concat(b,".").concat(O)]||m[O]||o[O]||l;return a?n.a.createElement(s,i(i({ref:t},p),{},{components:a})):n.a.createElement(s,i({ref:t},p))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,b=new Array(l);b[0]=O;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,b[1]=i;for(var p=2;p<l;p++)b[p]=a[p];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},722:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(8),l=(a(0),a(1152)),b={title:"Asterisk \u8bcd\u6c47"},i={unversionedId:"voip/asterisk/asterisk-glossary",id:"voip/asterisk/asterisk-glossary",isDocsHomePage:!1,title:"Asterisk \u8bcd\u6c47",description:"- ADSI",source:"@site/notes/voip/asterisk/asterisk-glossary.md",slug:"/voip/asterisk/asterisk-glossary",permalink:"/notes/voip/asterisk/asterisk-glossary",editUrl:"https://github.com/wenerme/wener/edit/master/notes/voip/asterisk/asterisk-glossary.md",version:"current",sidebar:"docs",previous:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/notes/voip/asterisk/faq"},next:{title:"Asterisk Inside",permalink:"/notes/voip/asterisk/asterisk-inside"}},c=[],p={toc:c};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.voip-info.org/adsi/"},"ADSI"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Analog Display Services Interface"))),Object(l.b)("li",{parentName:"ul"},"AGI - Asterisk Gateway Interface",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6267\u884c Dialplan \u4e2d\u7684\u811a\u672c"),Object(l.b)("li",{parentName:"ul"},"\u9488\u5bf9\u5355\u6b21\u901a\u8bdd"))),Object(l.b)("li",{parentName:"ul"},"AMI - Asterisk Manage Interface",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"manager.conf")),Object(l.b)("li",{parentName:"ul"},"\u5b9e\u65f6\u63a5\u53e3"),Object(l.b)("li",{parentName:"ul"},"Telnet"),Object(l.b)("li",{parentName:"ul"},"\u9488\u5bf9\u6574\u4e2a PBX"),Object(l.b)("li",{parentName:"ul"},"Actions"),Object(l.b)("li",{parentName:"ul"},"Events"))),Object(l.b)("li",{parentName:"ul"},"ARI - Asterisk Restful Interface",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ari.conf")),Object(l.b)("li",{parentName:"ul"},"\u901a\u8fc7\u63a5\u53e3\u7684\u65b9\u5f0f\u800c\u4e0d\u662f C \u7684\u65b9\u5f0f\u6765\u5199\u5e94\u7528"),Object(l.b)("li",{parentName:"ul"},"HTTP GET POST DELETE"),Object(l.b)("li",{parentName:"ul"},"Websocks \u7edf\u8ba1\u548c\u4e8b\u4ef6"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Advanced_Linux_Sound_Architecture"},"ALSA"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Advanced Linux Sound Architecture - \u9ad8\u7ea7 Linux \u58f0\u97f3\u4f53\u7cfb"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://wiki.asterisk.org/wiki/display/~jcolp/AORs%2C+Contacts%2C+Device+State"},"AOR"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Address of Records - \u5730\u5740\u8bb0\u5f55"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://wiki.asterisk.org/wiki/display/AST/Call+Completion+Supplementary+Services+(CCSS)"},"CCSS"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"[](Call Completion Supplementary Services)"))),Object(l.b)("li",{parentName:"ul"},"DISA (Direct Inward System Access)"),Object(l.b)("li",{parentName:"ul"},"Diaplan - \u62e8\u53f7\u8ba1\u5212"),Object(l.b)("li",{parentName:"ul"},"DAHDI",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Digium Asterisk Hardware Device Interface"))),Object(l.b)("li",{parentName:"ul"},"libpri"),Object(l.b)("li",{parentName:"ul"},"IVR",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4ea4\u4e92\u5f0f\u8bed\u97f3\u5e94\u7b54"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Secure_Real-time_Transport_Protocol"},"SRTP"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Secure Real-time Transport Protocol"),Object(l.b)("li",{parentName:"ul"},"RTP \u7684 Profile"),Object(l.b)("li",{parentName:"ul"},"\u5b89\u5168\u534f\u8bae\uff1aTLS \u4fe1\u4ee4\u5c42\uff0c",Object(l.b)("a",{parentName:"li",href:"https://wiki.asterisk.org/wiki/display/AST/Secure+Calling+Tutorial#SecureCallingTutorial-Part2(SRTP)"},"SRTP")," \u5a92\u4f53\u5c42"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.voip-info.org/asterisk-srtp/"},"Asterisk SRTP")))),Object(l.b)("li",{parentName:"ul"},"ps - pjsip"),Object(l.b)("li",{parentName:"ul"},"B2BUA",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Back to Back User Agent - \u540e\u7aef\u5230\u540e\u7aef\u7528\u6237\u4ee3\u7406"),Object(l.b)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e\u7535\u8bdd\u7ebf\u8def"))),Object(l.b)("li",{parentName:"ul"},"DPMA",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Digium Phone Module for Asterisk"),Object(l.b)("li",{parentName:"ul"},"\u79c1\u6709\u6280\u672f - \u5141\u8bb8 Asterisk \u7cfb\u7edf\u548c Digium \u7535\u8bdd\u4e4b\u95f4\u5efa\u7acb\u5b89\u5168\u8fde\u63a5"))),Object(l.b)("li",{parentName:"ul"},"SPEEX",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.speex.org/"},"speex.org")," / ",Object(l.b)("a",{parentName:"li",href:"https://github.com/xiph/speex"},"xiph/speex")),Object(l.b)("li",{parentName:"ul"},"\u4e00\u79cd\u7f16\u7801\uff0c\u5df2\u88ab opus \u5e9f\u5f03"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://wiki.asterisk.org/wiki/display/AST/Mobile+Channel"},"chan_mobile"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5c06\u84dd\u7259\u624b\u673a/\u7535\u8bdd\u4f5c\u4e3a FXO\uff0c\u5c06\u8033\u673a\u4f5c\u4e3a FXS"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Open_Sound_System"},"OSS"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Open Sound System")))),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"abbr"),Object(l.b)("th",{parentName:"tr",align:null},"stand for"),Object(l.b)("th",{parentName:"tr",align:null},"means"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AMD"),Object(l.b)("td",{parentName:"tr",align:null},"Answering Machine Detection"),Object(l.b)("td",{parentName:"tr",align:null},"\u5e94\u7b54\u673a\u68c0\u6d4b")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AOR"),Object(l.b)("td",{parentName:"tr",align:null},"Address of Records"),Object(l.b)("td",{parentName:"tr",align:null},"\u5730\u5740\u8bb0\u5f55")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"B2BUA"),Object(l.b)("td",{parentName:"tr",align:null},"Back to Back User Agent"),Object(l.b)("td",{parentName:"tr",align:null},"\u540e\u7aef\u5230\u540e\u7aef\u7528\u6237\u4ee3\u7406")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"CdPN"),Object(l.b)("td",{parentName:"tr",align:null},"Called Party Number"),Object(l.b)("td",{parentName:"tr",align:null},"\u88ab\u53eb\u53f7\u7801")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"CDR"),Object(l.b)("td",{parentName:"tr",align:null},"Call detail recording"),Object(l.b)("td",{parentName:"tr",align:null},"\u547c\u53eb\u8be6\u60c5\u8bb0\u5f55")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"CEL"),Object(l.b)("td",{parentName:"tr",align:null},"Call Event Log"),Object(l.b)("td",{parentName:"tr",align:null},"\u547c\u53eb\u4e8b\u4ef6\u65e5\u5fd7")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"CgPN"),Object(l.b)("td",{parentName:"tr",align:null},"Calling Party Number"),Object(l.b)("td",{parentName:"tr",align:null},"\u4e3b\u53eb\u53f7\u7801")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"FGB"),Object(l.b)("td",{parentName:"tr",align:null},"Feature Group B"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ISDN"),Object(l.b)("td",{parentName:"tr",align:null},"Integrated Services Digital Network"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ISUP"),Object(l.b)("td",{parentName:"tr",align:null},"ISDN User Part"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"NOA"),Object(l.b)("td",{parentName:"tr",align:null},"Nature of Address"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"NPI"),Object(l.b)("td",{parentName:"tr",align:null},"Numbering Plan Indicator"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"OSS"),Object(l.b)("td",{parentName:"tr",align:null},"Open Sound System"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"PBX"),Object(l.b)("td",{parentName:"tr",align:null},"Private Branch Exchange"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"PSTN"),Object(l.b)("td",{parentName:"tr",align:null},"Public Switched Telephone Network"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"SIP"),Object(l.b)("td",{parentName:"tr",align:null},"Session Initiation Protocol"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"SMDI"),Object(l.b)("td",{parentName:"tr",align:null},"Simplified Message Desk Interface"),Object(l.b)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);