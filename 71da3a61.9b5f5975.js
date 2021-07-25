(window.webpackJsonp=window.webpackJsonp||[]).push([[484],{1166:function(t,e,a){"use strict";a.d(e,"a",(function(){return m})),a.d(e,"b",(function(){return o}));var n=a(0),r=a.n(n);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function b(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?b(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=r.a.createContext({}),u=function(t){var e=r.a.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=u(t.components);return r.a.createElement(p.Provider,{value:e},t.children)},O={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},j=r.a.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,b=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),m=u(a),j=n,o=m["".concat(b,".").concat(j)]||m[j]||O[j]||l;return a?r.a.createElement(o,i(i({ref:e},p),{},{components:a})):r.a.createElement(o,i({ref:e},p))}));function o(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,b=new Array(l);b[0]=j;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:n,b[1]=i;for(var p=2;p<l;p++)b[p]=a[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},558:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return b})),a.d(e,"metadata",(function(){return i})),a.d(e,"toc",(function(){return c})),a.d(e,"default",(function(){return u}));var n=a(3),r=a(8),l=(a(0),a(1166)),b={title:"Hashing"},i={unversionedId:"algorithm/hashing",id:"algorithm/hashing",isDocsHomePage:!1,title:"Hashing",description:"- Which hashing algorithm is best for uniqueness and speed?",source:"@site/notes/algorithm/hashing.md",slug:"/algorithm/hashing",permalink:"/notes/algorithm/hashing",editUrl:"https://github.com/wenerme/wener/edit/master/notes/algorithm/hashing.md",version:"current"},c=[{value:"git hash",id:"git-hash",children:[]},{value:"Cryptographic hash algorithms",id:"cryptographic-hash-algorithms",children:[]},{value:"SHA",id:"sha",children:[]},{value:"Reverse",id:"reverse",children:[]}],p={toc:c};function u(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,a,{components:e,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://softwareengineering.stackexchange.com/questions/49550"},"Which hashing algorithm is best for uniqueness and speed?"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u968f\u673a\u6027\u548c\u78b0\u649e\u6bd4\u8f83"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://cryptography.cc/"},"Cryptography Center")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://shattered.io/"},"shattered"),"\nbroken SHA-1 in practice")),Object(l.b)("h2",{id:"git-hash"},"git hash"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"git 2.12 \u4f7f\u7528\u589e\u5f3a\u540e\u7684 SHA-1"),Object(l.b)("li",{parentName:"ul"},"git \u9ed8\u8ba4\u4ece SHA-1 \u8fc1\u79fb\u4e3a SHA-256",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://stackoverflow.com/a/60088126/1870054"},"why git choose sha-256")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://git-scm.com/docs/hash-function-transition/"},"hash-function-transition"))),Object(l.b)("h2",{id:"cryptographic-hash-algorithms"},"Cryptographic hash algorithms"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"hash"),Object(l.b)("th",{parentName:"tr",align:null},"variant"),Object(l.b)("th",{parentName:"tr",align:null},"bits"),Object(l.b)("th",{parentName:"tr",align:null},"internal bites"),Object(l.b)("th",{parentName:"tr",align:null},"block bits"),Object(l.b)("th",{parentName:"tr",align:null},"rounds"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"MD5"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"128"),Object(l.b)("td",{parentName:"tr",align:null},"128=4\xd732"),Object(l.b)("td",{parentName:"tr",align:null},"512"),Object(l.b)("td",{parentName:"tr",align:null},"64")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"SHA-0"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"160"),Object(l.b)("td",{parentName:"tr",align:null},"160=5\xd732"),Object(l.b)("td",{parentName:"tr",align:null},"512"),Object(l.b)("td",{parentName:"tr",align:null},"80")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"SHA-1"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"160"),Object(l.b)("td",{parentName:"tr",align:null},"160=5\xd732"),Object(l.b)("td",{parentName:"tr",align:null},"512"),Object(l.b)("td",{parentName:"tr",align:null},"80")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"SHA-2"),Object(l.b)("td",{parentName:"tr",align:null},"224"),Object(l.b)("td",{parentName:"tr",align:null},"224"),Object(l.b)("td",{parentName:"tr",align:null},"256=8\xd732"),Object(l.b)("td",{parentName:"tr",align:null},"512"),Object(l.b)("td",{parentName:"tr",align:null},"64")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"^^"),Object(l.b)("td",{parentName:"tr",align:null},"256"),Object(l.b)("td",{parentName:"tr",align:null},"256"),Object(l.b)("td",{parentName:"tr",align:null},"^^"),Object(l.b)("td",{parentName:"tr",align:null},"^^"),Object(l.b)("td",{parentName:"tr",align:null},"^^")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"^^"),Object(l.b)("td",{parentName:"tr",align:null},"384"),Object(l.b)("td",{parentName:"tr",align:null},"384"),Object(l.b)("td",{parentName:"tr",align:null},"512=8\xd764"),Object(l.b)("td",{parentName:"tr",align:null},"1024"),Object(l.b)("td",{parentName:"tr",align:null},"80")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"^^"),Object(l.b)("td",{parentName:"tr",align:null},"512"),Object(l.b)("td",{parentName:"tr",align:null},"512"),Object(l.b)("td",{parentName:"tr",align:null},"^^"),Object(l.b)("td",{parentName:"tr",align:null},"^^"),Object(l.b)("td",{parentName:"tr",align:null},"^^")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"^^"),Object(l.b)("td",{parentName:"tr",align:null},"512/224"),Object(l.b)("td",{parentName:"tr",align:null},"224"),Object(l.b)("td",{parentName:"tr",align:null},"^^"),Object(l.b)("td",{parentName:"tr",align:null},"^^"),Object(l.b)("td",{parentName:"tr",align:null},"^^")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"^^"),Object(l.b)("td",{parentName:"tr",align:null},"512/256"),Object(l.b)("td",{parentName:"tr",align:null},"256"),Object(l.b)("td",{parentName:"tr",align:null},"^^"),Object(l.b)("td",{parentName:"tr",align:null},"^^"),Object(l.b)("td",{parentName:"tr",align:null},"^^")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"SHA-3"),Object(l.b)("td",{parentName:"tr",align:null},"224"),Object(l.b)("td",{parentName:"tr",align:null},"224"),Object(l.b)("td",{parentName:"tr",align:null},"1600=5\xd75\xd764"),Object(l.b)("td",{parentName:"tr",align:null},"1152"),Object(l.b)("td",{parentName:"tr",align:null},"24")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"^^"),Object(l.b)("td",{parentName:"tr",align:null},"256"),Object(l.b)("td",{parentName:"tr",align:null},"256"),Object(l.b)("td",{parentName:"tr",align:null},"^^"),Object(l.b)("td",{parentName:"tr",align:null},"1088"),Object(l.b)("td",{parentName:"tr",align:null},"^^")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"^^"),Object(l.b)("td",{parentName:"tr",align:null},"384"),Object(l.b)("td",{parentName:"tr",align:null},"384"),Object(l.b)("td",{parentName:"tr",align:null},"^^"),Object(l.b)("td",{parentName:"tr",align:null},"832"),Object(l.b)("td",{parentName:"tr",align:null},"^^")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"^^"),Object(l.b)("td",{parentName:"tr",align:null},"512"),Object(l.b)("td",{parentName:"tr",align:null},"512"),Object(l.b)("td",{parentName:"tr",align:null},"^^"),Object(l.b)("td",{parentName:"tr",align:null},"576"),Object(l.b)("td",{parentName:"tr",align:null},"^^")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"^^"),Object(l.b)("td",{parentName:"tr",align:null},"SHAKE128"),Object(l.b)("td",{parentName:"tr",align:null},"any"),Object(l.b)("td",{parentName:"tr",align:null},"^^"),Object(l.b)("td",{parentName:"tr",align:null},"1344"),Object(l.b)("td",{parentName:"tr",align:null},"^^")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"^^"),Object(l.b)("td",{parentName:"tr",align:null},"SHAKE256"),Object(l.b)("td",{parentName:"tr",align:null},"any"),Object(l.b)("td",{parentName:"tr",align:null},"^^"),Object(l.b)("td",{parentName:"tr",align:null},"1088"),Object(l.b)("td",{parentName:"tr",align:null},"^^")))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"x86",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"SHA3-256 - MMX,AVX-512VL, AVX2 - OpenSSL"),Object(l.b)("li",{parentName:"ul"},"SHA3 - SSE2 - Crypto++"))),Object(l.b)("li",{parentName:"ul"},"Apple A13 ARMv8",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"SHA-3/SHA-512 EOR3, RAX1, XAR, BCAX - ARMv8.2-SHA"))),Object(l.b)("li",{parentName:"ul"},"ARM",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"SVE, SVE2")))),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Cryptographic_hash_function"},"Cryptographic hash function")),Object(l.b)("li",{parentName:"ul"},"MD5"),Object(l.b)("li",{parentName:"ul"},"SHA-1"),Object(l.b)("li",{parentName:"ul"},"RIPEMD-160"),Object(l.b)("li",{parentName:"ul"},"Whirlpool"),Object(l.b)("li",{parentName:"ul"},"SHA-2"),Object(l.b)("li",{parentName:"ul"},"SHA-3"),Object(l.b)("li",{parentName:"ul"},"BLAKE2")),Object(l.b)("h2",{id:"sha"},"SHA"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"SHA - Secure Hash Algorithm"),Object(l.b)("li",{parentName:"ul"},"SHA-2 - 2001",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"224, 256, 384, 512"))),Object(l.b)("li",{parentName:"ul"},"SHA-3 - 2015",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"224, 256, 384, 512")))),Object(l.b)("h2",{id:"reverse"},"Reverse"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://md5.gromweb.com/"},"https://md5.gromweb.com/")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://sha1.gromweb.com/"},"https://sha1.gromweb.com/"))))}u.isMDXComponent=!0}}]);