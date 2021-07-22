(window.webpackJsonp=window.webpackJsonp||[]).push([[578],{1152:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),c=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(n),m=r,O=s["".concat(o,".").concat(m)]||s[m]||b[m]||a;return n?i.a.createElement(O,l(l({ref:t},u),{},{components:n})):i.a.createElement(O,l({ref:t},u))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},652:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return c}));var r=n(3),i=n(8),a=(n(0),n(1152)),o={title:"Supervisor"},l={unversionedId:"os/linux/init/supervisor",id:"os/linux/init/supervisor",isDocsHomePage:!1,title:"Supervisor",description:"- supervisor",source:"@site/notes/os/linux/init/supervisor.md",slug:"/os/linux/init/supervisor",permalink:"/notes/os/linux/init/supervisor",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/init/supervisor.md",version:"current",sidebar:"docs",previous:{title:"Process supervision",permalink:"/notes/os/linux/init/supervision"},next:{title:"systemd",permalink:"/notes/os/linux/init/systemd"}},p=[{value:"docker",id:"docker",children:[]}],u={toc:p};function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"supervisor",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"size: 4161536"),Object(a.b)("li",{parentName:"ul"},"Python"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://pkgs.alpinelinux.org/package/edge/main/x86_64/supervisor"},"https://pkgs.alpinelinux.org/package/edge/main/x86_64/supervisor")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"http://smarden.org/runit/"},"runit"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://pkgs.alpinelinux.org/package/edge/community/x86_64/runit"},"https://pkgs.alpinelinux.org/package/edge/community/x86_64/runit")),Object(a.b)("li",{parentName:"ul"},"size: 258048"))),Object(a.b)("li",{parentName:"ul"},"systemd",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Pythonee"))),Object(a.b)("li",{parentName:"ul"},"initd"),Object(a.b)("li",{parentName:"ul"},"upstart"),Object(a.b)("li",{parentName:"ul"},"tini",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/krallin/tini"},"https://github.com/krallin/tini")),Object(a.b)("li",{parentName:"ul"},"size: 40960"),Object(a.b)("li",{parentName:"ul"},"docker 1.13 \u540e\u5185\u5efa"),Object(a.b)("li",{parentName:"ul"},"\u4e3b\u8981\u7528\u4e8e\u5904\u7406\u50f5\u5c38\u96c6\u6210\u548c\u4fe1\u53f7\u91cf\u5904\u7406"))),Object(a.b)("li",{parentName:"ul"},"dump-init",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://pkgs.alpinelinux.org/package/edge/community/x86_64/dumb-init"},"https://pkgs.alpinelinux.org/package/edge/community/x86_64/dumb-init")))),Object(a.b)("li",{parentName:"ul"},"openrc"),Object(a.b)("li",{parentName:"ul"},"Gentoo ",Object(a.b)("a",{parentName:"li",href:"https://wiki.gentoo.org/wiki/Comparison_of_init_systems"},"Comparison of init systems")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://wiki.gentoo.org/wiki/OpenRC_to_systemd_Cheatsheet"},"OpenRC to systemd Cheatsheet"))),Object(a.b)("h2",{id:"docker"},"docker"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"tinit - \u5982\u679c\u4f7f\u7528\u5355\u4e2a\u8fdb\u7a0b"),Object(a.b)("li",{parentName:"ul"},"\u5982\u679c\u8981\u5141\u8bb8\u591a\u4e2a\u670d\u52a1\uff0c\u9009\u62e9 s6 \u6216 runit")))}c.isMDXComponent=!0}}]);