(window.webpackJsonp=window.webpackJsonp||[]).push([[507],{1152:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return s}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),p=function(e){var r=a.a.useContext(b),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=p(e.components);return a.a.createElement(b.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},O=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=p(t),O=n,s=u["".concat(i,".").concat(O)]||u[O]||m[O]||o;return t?a.a.createElement(s,l(l({ref:r},b),{},{components:t})):a.a.createElement(s,l({ref:r},b))}));function s(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=O;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var b=2;b<o;b++)i[b]=t[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}O.displayName="MDXCreateElement"},581:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return l})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return p}));var n=t(3),a=t(8),o=(t(0),t(1152)),i={id:"zerotier",title:"Zerotier"},l={unversionedId:"service/network/zerotier",id:"service/network/zerotier",isDocsHomePage:!1,title:"Zerotier",description:"- Manual",source:"@site/notes/service/network/zerotier.md",slug:"/service/network/zerotier",permalink:"/notes/service/network/zerotier",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/network/zerotier.md",version:"current",sidebar:"docs",previous:{title:"Wireshark",permalink:"/notes/service/network/wireshark"},next:{title:"\u7535\u4fe1\u672f\u8bed",permalink:"/notes/service/telecom/glossary"}},c=[{value:"controller",id:"controller",children:[]},{value:"\u7b14\u8bb0",id:"\u7b14\u8bb0",children:[]},{value:"FAQ",id:"faq",children:[{value:"\u8df3\u8fc7 ZeroTier \u670d\u52a1\u5668",id:"\u8df3\u8fc7-zerotier-\u670d\u52a1\u5668",children:[]},{value:"REQUESTING_CONFIGURATION",id:"requesting_configuration",children:[]}]}],b={toc:c};function p(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.zerotier.com/manual"},"Manual")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://zerotier.atlassian.net/wiki/spaces/SD/pages/6815768/Router+Configuration+Tips"},"Router Configuration Tips")),Object(o.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7aef\u53e3 9993"),Object(o.b)("li",{parentName:"ul"},"\u652f\u6301 uPnP \u6216 NAT-PMP \u76f4\u63a5\u6620\u5c04\u7aef\u53e3\u80fd\u66f4\u5bb9\u6613\u76f4\u8fde"),Object(o.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u5982\u679c\u5927\u91cf\u4f20\u8f93\u6570\u636e\u53ef\u80fd\u5bfc\u81f4\u88ab\u5b98\u65b9 ZTC block\uff0c\u72b6\u6001\u4e00\u76f4\u5904\u4e8e REQUESTING_CONFIGURATION",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u5220\u9664\u672c\u5730 ID \u91cd\u8fde\u5e94\u8be5\u53ef\u4ee5\u89e3\u51b3"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/var/lib/zerotier-one/identity.*"))))))),Object(o.b)("h2",{id:"controller"},"controller"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"zerotier-one ",Object(o.b)("a",{parentName:"li",href:"https://github.com/zerotier/ZeroTierOne/blob/master/one.cpp"},"one.cpp"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"idtool \u548c cli \u662f\u516c\u7528\u540c\u4e00\u4e2a bin"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/zerotier/ZeroTierOne/blob/master/controller/EmbeddedNetworkController.cpp"},"EmbeddedNetworkController.cpp")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/zerotier/ZeroTierOne/blob/db813db7e875c257e42c41ab8091c3df1e9300a5/osdep/OSUtils.cpp#L382"},"platformDefaultHomePath"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"macOS ",Object(o.b)("inlineCode",{parentName:"li"},"/Library/Application Support/ZeroTier/One")),Object(o.b)("li",{parentName:"ul"},"linux ",Object(o.b)("inlineCode",{parentName:"li"},"/var/lib/zerotier-one")),Object(o.b)("li",{parentName:"ul"},"windows ",Object(o.b)("inlineCode",{parentName:"li"},"C:\\ProgramData\\ZeroTier\\One"))))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# macOS controller\n# \u4f7f\u7528 $PWD/controller \u4f5c\u4e3a HOME\nsudo /Library/Application\\ Support/ZeroTier/One/zerotier-one $PWD/controller\n\n\n# docker controller\ndocker run --rm -it -p 9993:9993 wener:edge\napk update && apk add zerotier-one\n# controller \u9ed8\u8ba4\u7aef\u53e3 9993\nzerotier-one -p9993\n")),Object(o.b)("h2",{id:"\u7b14\u8bb0"},"\u7b14\u8bb0"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"V1 \u7f51\u7edc\u5c42",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"P2P"),Object(o.b)("li",{parentName:"ul"},"\u901a\u8fc7\u6839\u670d\u52a1\u7ec4\u7f51"),Object(o.b)("li",{parentName:"ul"},"0 \u914d\u7f6e"),Object(o.b)("li",{parentName:"ul"},"1 \u4e2a earth \u6839\u670d\u52a1\u5668\uff0c\u7531 ZeroTier \u8fd0\u8425\uff1b12 \u4e2a\u6839\u670d\u52a1\u5668"),Object(o.b)("li",{parentName:"ul"},"\u56f4\u7ed5 earth \u7684\u4e3a moon\uff1b \u7528\u4e8e\u6dfb\u52a0\u7528\u6237\u5b9a\u4e49\u7684\u6839\u670d\u52a1\uff1b\u4f7f\u7528 moon \u8282\u70b9\u53ef\u907f\u514d\u4f9d\u8d56 ZeroTier \u7684\u57fa\u7840\u8bbe\u65bd\uff1b\u53ef\u63d0\u4f9b\u66f4\u597d\u7684\u6027\u80fd"),Object(o.b)("li",{parentName:"ul"},"\u6bcf\u4e2a\u51e0\u70b9\u4e00\u4e2a\u5168\u5c40\u552f\u4e00\u7684 40 \u4f4d\uff0810 \u4f4d 16 \u8fdb\u5236\u5b57\u7b26\uff09 \u7684\u6807\u8bc6\u7b26\uff1b\u901a\u8fc7\u516c\u94a5\u548c\u79c1\u94a5\u8ba1\u7b97\uff1b")))),Object(o.b)("h2",{id:"faq"},"FAQ"),Object(o.b)("h3",{id:"\u8df3\u8fc7-zerotier-\u670d\u52a1\u5668"},"\u8df3\u8fc7 ZeroTier \u670d\u52a1\u5668"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/zerotier/ZeroTierOne/issues/610"},"#610"))),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/zerotier/ZeroTierOne/blob/master/attic/world/mkworld.cpp"},"mkworld.cpp")," \u521d\u59cb\u5316\u57fa\u7840\u4fe1\u606f\uff0c\u5305\u542b\u6240\u6709\u7684 root \u670d\u52a1\u5668\uff0c\u9700\u8981\u8df3\u8fc7\u8fd9\u4e9b\u670d\u52a1\u5668\u5219\u9700\u8981\u4fee\u6539\u4ece\u65b0\u751f\u6210\u3002"),Object(o.b)("h3",{id:"requesting_configuration"},"REQUESTING_CONFIGURATION"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/zerotier/ZeroTierOne/issues/1214"},"#1214")),Object(o.b)("li",{parentName:"ul"},"\u5c1d\u8bd5\u51cf\u5c11 network \u540e\u6062\u590d\u4e86",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u975e\u5e38\u9ebb\u70e6\uff0c\u4e0d\u597d\u6062\u590d")))))}p.isMDXComponent=!0}}]);