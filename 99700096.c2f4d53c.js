(window.webpackJsonp=window.webpackJsonp||[]).push([[649],{1166:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},723:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),o=(n(0),n(1166)),i={date:"2016-8-6 23:43",tags:["Game","Android"]},l={permalink:"/story/2016/08/06/tap-titans",editUrl:"https://github.com/wenerme/wener/edit/master/story/2016/2016-08-06-tap-titans.md",source:"@site/story/2016/2016-08-06-tap-titans.md",description:"Play Titans using shell",date:"2016-08-06T23:43:00.000Z",tags:[{label:"Game",permalink:"/story/tags/game"},{label:"Android",permalink:"/story/tags/android"}],title:"tap-titans",readingTime:.975,truncated:!1,prevItem:{title:"Go Redis module",permalink:"/story/go-rm"},nextItem:{title:"BBVM - BeBasic Virtual Machine",permalink:"/story/bbvm"}},c=[{value:"Features",id:"features",children:[]},{value:"Requirement",id:"requirement",children:[]},{value:"Get started",id:"get-started",children:[]},{value:"How is works ?",id:"how-is-works-",children:[{value:"Why fast ?",id:"why-fast-",children:[]},{value:"How to detect the screen event ?",id:"how-to-detect-the-screen-event-",children:[]}]},{value:"More",id:"more",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"play-titans-using-shell"},"Play Titans using shell"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.gamehivecorp.taptitans"},"Tap Titans")," on Play Store"),Object(o.b)("h2",{id:"features"},"Features"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Auto upgrade"),Object(o.b)("li",{parentName:"ul"},"Auto spell skill"),Object(o.b)("li",{parentName:"ul"},"Auto start challenge"),Object(o.b)("li",{parentName:"ul"},"Auto close ad dialog"),Object(o.b)("li",{parentName:"ul"},"Verify fast tap (0.03s/tap)")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"NOTE")),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"Only tested on Nexus 5, different devices may use different coordinates and event dev."),Object(o.b)("li",{parentName:"ul"},"Used to plat tiantis long time ago, may not works in current version.Different version may use different color and coordinates"))),Object(o.b)("h2",{id:"requirement"},"Requirement"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"ADB"),Object(o.b)("li",{parentName:"ul"},"Image Magic"),Object(o.b)("li",{parentName:"ul"},"Bash")),Object(o.b)("h2",{id:"get-started"},"Get started"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Start game"),Object(o.b)("li",{parentName:"ul"},"Get source ",Object(o.b)("a",{parentName:"li",href:"https://github.com/wenerme/wener/tree/master/story/2016/tap-titans-play.sh"},"tap-titans-play.sh"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"chmod +x play.sh\n# Connect through lan, so you don't have to use the usb\n./play.sh use-tcp\n# Push the pre-generated event file\nadb push events /mnt/sdcard\n# Start playing\n./play.sh\n")),Object(o.b)("h2",{id:"how-is-works-"},"How is works ?"),Object(o.b)("h3",{id:"why-fast-"},"Why fast ?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Because I don't use ",Object(o.b)("inlineCode",{parentName:"li"},"adb shell input tap"),", instead use a generated file that represent a tap event, then ",Object(o.b)("inlineCode",{parentName:"li"},"cat tap > /dev/input/event1"),"."),Object(o.b)("li",{parentName:"ul"},"Use generated shell run in android.")),Object(o.b)("h3",{id:"how-to-detect-the-screen-event-"},"How to detect the screen event ?"),Object(o.b)("p",null,"Use screen capture, then use the image magic to check the color,kind of slowly, but works."),Object(o.b)("h2",{id:"more"},"More"),Object(o.b)("p",null,"Check the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/wenerme/wener/tree/master/story/2016/tap-titans-play.sh"},"source")))}u.isMDXComponent=!0}}]);