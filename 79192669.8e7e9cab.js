(window.webpackJsonp=window.webpackJsonp||[]).push([[516],{1172:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,s=d["".concat(l,".").concat(m)]||d[m]||b[m]||i;return n?a.a.createElement(s,c(c({ref:t},p),{},{components:n})):a.a.createElement(s,c({ref:t},p))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var p=2;p<i;p++)l[p]=n[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},590:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),i=(n(0),n(1172)),l={id:"calender",title:"\u65e5\u5386"},c={unversionedId:"dev/domain/calender",id:"dev/domain/calender",isDocsHomePage:!1,title:"\u65e5\u5386",description:"Calender",source:"@site/notes/dev/domain/calender.md",slug:"/dev/domain/calender",permalink:"/notes/dev/domain/calender",editUrl:"https://github.com/wenerme/wener/edit/master/notes/dev/domain/calender.md",version:"current",sidebar:"docs",previous:{title:"Dapr",permalink:"/notes/dev/cloud/dapr"},next:{title:"Intellij IDEA",permalink:"/notes/dev/editor/intellij"}},o=[{value:"Tips",id:"tips",children:[]},{value:"FAQ",id:"faq",children:[{value:"CalDAV vs iCalender",id:"caldav-vs-icalender",children:[]}]}],p={toc:o};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"calender"},"Calender"),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ICalendar"},"iCalender"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u540e\u7f00 .ical, .ics, .ifb, .icalendar"),Object(i.b)("li",{parentName:"ul"},"\u5a92\u4f53\u7c7b\u578b text/calendar"),Object(i.b)("li",{parentName:"ul"},"RFC5545 -> RFC5546, RFC6868, RFC7529"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/CalDAV"},"CalDAV"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"ics"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/infinet/lunar-calendar"},"infinet/lunar")," - iCal\u519c\u5386, \u8282\u6c14, \u4f20\u7edf\u8282\u65e5"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Comparison_of_CalDAV_and_CardDAV_implementations"},"Comparison of CalDAV and CardDAV implementations")),Object(i.b)("li",{parentName:"ul"},"ical, caldav, exchange, ews",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"MS Exchange EWS"),Object(i.b)("li",{parentName:"ul"},"caldav - ",Object(i.b)("a",{parentName:"li",href:"https://www.google.com/calendar/dav/username@gmail.com/events/"},"https://www.google.com/calendar/dav/username@gmail.com/events/"))))),Object(i.b)("h2",{id:"faq"},"FAQ"),Object(i.b)("h3",{id:"caldav-vs-icalender"},"CalDAV vs iCalender"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"CalDAV",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"HTTP/WebDAV \u6269\u5c55"))),Object(i.b)("li",{parentName:"ul"},"iCalender",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4e00\u79cd\u6587\u4ef6\u683c\u5f0f")))))}u.isMDXComponent=!0}}]);