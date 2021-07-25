(window.webpackJsonp=window.webpackJsonp||[]).push([[1073],{1146:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return o}));var r=a(3),n=a(8),i=(a(0),a(1166)),l={title:"Build Asterisk"},s={unversionedId:"voip/asterisk/asterisk-build",id:"voip/asterisk/asterisk-build",isDocsHomePage:!1,title:"Build Asterisk",description:"- debian \u80fd\u5b89\u88c5 16",source:"@site/notes/voip/asterisk/asterisk-build.md",slug:"/voip/asterisk/asterisk-build",permalink:"/notes/voip/asterisk/asterisk-build",editUrl:"https://github.com/wenerme/wener/edit/master/notes/voip/asterisk/asterisk-build.md",version:"current",sidebar:"docs",previous:{title:"Asterisk Awesome",permalink:"/notes/voip/asterisk/asterisk-awesome"},next:{title:"Asterisk \u901a\u9053",permalink:"/notes/voip/asterisk/channel"}},c=[{value:"Asterisk Crash",id:"asterisk-crash",children:[]},{value:"There are no local system nameservers configured, resorting to system resolution",id:"there-are-no-local-system-nameservers-configured-resorting-to-system-resolution",children:[]},{value:"AlpineLinux musl \u95ee\u9898",id:"alpinelinux-musl-\u95ee\u9898",children:[]}],b={toc:c};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"debian \u80fd\u5b89\u88c5 16",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6ca1\u6709 codec_ilbc, app_meetme",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"ilbc -> opus"),Object(i.b)("li",{parentName:"ul"},"meetme -> ConfBridge"))))),Object(i.b)("li",{parentName:"ul"},"alpine \u80fd\u5b89\u88c5 18 - \u6700\u65b0 \b lts \u7248 - \u4f46\u6709\u4e9b\u573a\u666f\u53ef\u80fd crash",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u8003\u8651\u57fa\u4e8e frolvlad/alpine-glibc \u4ece\u65b0\u6784\u5efa"),Object(i.b)("li",{parentName:"ul"},"\u6ca1\u6709 codec_opus_open_source - ",Object(i.b)("a",{parentName:"li",href:"https://gitlab.alpinelinux.org/alpine/aports/-/issues/12808"},"#12808")))),Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u9700\u8981 certificated asterisk \u7248\u672c\u53ea\u80fd\u81ea\u5df1\u6784\u5efa"),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"aports ",Object(i.b)("a",{parentName:"li",href:"https://github.com/alpinelinux/aports/blob/master/main/asterisk/APKBUILD"},"main/asterisk/APKBUILD")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/andrius/asterisk"},"andrius/asterisk"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"debian, centos \u6784\u5efa\u4e2a\u4e2a\u7248\u672c asterisk"))))),Object(i.b)("li",{parentName:"ul"},"debian",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5171\u4eab\u8d44\u6e90\u4f4d\u4e8e /usr/share/asterisk")))),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"opus \u7f16\u7801\u6a21\u5757\u4e0d\u662f\u5f00\u6e90\u7684 - \u9ed8\u8ba4\u5b89\u88c5\u662f\u7528\u5b98\u65b9\u4e0b\u8f7d - \u4f1a phonehome \u5230 stats.asterisk.org",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"debian \u7684 opus \u57fa\u4e8e ",Object(i.b)("a",{parentName:"li",href:"https://github.com/traud/asterisk-opus"},"traud/asterisk-opus")),Object(i.b)("li",{parentName:"ul"},"\u4e3b\u8981\u5305\u542b codec_opus \u548c format_ogg_opus"),Object(i.b)("li",{parentName:"ul"},"debian \u6e90\u7801 ",Object(i.b)("a",{parentName:"li",href:"https://salsa.debian.org/pkg-voip-team/asterisk-opus"},"pkg-voip-team/asterisk-opus")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://web.archive.org/web/20161003135358/http://blogs.digium.com/2016/09/30/opus-in-asterisk/"},"Opus for Asterisk"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5b98\u65b9\u7684\u8bf4\u6cd5\u662f\u56e0\u4e3a\u6cd5\u5f8b\u5173\u7cfb\u6240\u4ee5\u4e0d\u5f00\u653e\u6e90\u7801")))))))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# \u6784\u5efa doc xml\n# \u53ef\u7528\u4e8e\u751f\u6210\u4ee3\u7801\u6216\u6587\u6863\n# core \u505a\u4e86 html escape, full \u6ca1\u6709 - \u4e24\u4e2a\u533a\u522b\u4e0d\u5927\nmake doc/core-en_US.xml\nmake doc/full-en_US.xml\n\n# \u6a21\u5757\u652f\u6301\u72b6\u6001\ngrep -rP '^\\t<support_level>' $(find . -name '*.c') | sed -re 's#</?support_level>##g' | sort\n")),Object(i.b)("h1",{id:"faq"},"FAQ"),Object(i.b)("h2",{id:"asterisk-crash"},"Asterisk Crash"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Dial \u65f6 WebSocket \u53d1\u9001 DTMF",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Debian 16.16 crash"))),Object(i.b)("li",{parentName:"ul"},"Echo \u5e94\u7528\u6309\u4efb\u610f\u952e",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"18 alpinelinux crash"))),Object(i.b)("li",{parentName:"ul"},"Asterisk crashes during call transfer ",Object(i.b)("a",{parentName:"li",href:"https://issues.asterisk.org/jira/browse/ASTERISK-29168"},"ASTERISK-29168"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"pbx_realtime diaplans")))),Object(i.b)("h2",{id:"there-are-no-local-system-nameservers-configured-resorting-to-system-resolution"},"There are no local system nameservers configured, resorting to system resolution"),Object(i.b)("p",null,"musl \u4e0d\u652f\u6301"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5bfc\u81f4 pjsip \u65e0\u6cd5\u4f7f\u7528 DNS SRV \u800c\u4f7f\u7528 A \u548c AAAA \u89e3\u6790"),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/asterisk/asterisk/blob/b4347c486150653ec7ce1d129e8f9017c69344da/res/res_pjsip/config_system.c#L266-L270"},"res/res_pjsip/config_system.c#L266-L270"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u8dd1\u51fa\u5f02\u5e38\u7684\u5730\u65b9"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/asterisk/asterisk/blob/b4347c486150653ec7ce1d129e8f9017c69344da/configure.ac#L1415-L1471"},"configure.ac#L1415-L1471"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4f9d\u8d56\u7684\u7cfb\u7edf\u51fd\u6570"))),Object(i.b)("li",{parentName:"ul"},"musl \u672a\u5b9e\u73b0 res_ninit"),Object(i.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u5c1d\u8bd5\u8be5 patch ",Object(i.b)("a",{parentName:"li",href:"https://github.com/openembedded/openembedded-core/blob/master/meta/recipes-connectivity/connman/connman/0002-resolve-musl-does-not-implement-res_ninit.patch"},"0002-resolve-musl-does-not-implement-res_ninit.patch"))))),Object(i.b)("h2",{id:"alpinelinux-musl-\u95ee\u9898"},"AlpineLinux musl \u95ee\u9898"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"segfault",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"agi dump html"))),Object(i.b)("li",{parentName:"ul"},"pjsip \u65e0\u6cd5\u83b7\u53d6 nameserver")))}o.isMDXComponent=!0},1166:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),o=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=o(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=o(a),m=r,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return a?n.a.createElement(d,s(s({ref:t},b),{},{components:a})):n.a.createElement(d,s({ref:t},b))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var b=2;b<i;b++)l[b]=a[b];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);