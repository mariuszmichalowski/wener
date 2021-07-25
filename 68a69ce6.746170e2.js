(window.webpackJsonp=window.webpackJsonp||[]).push([[446],{1166:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),b=p(r),O=n,s=b["".concat(i,".").concat(O)]||b[O]||m[O]||c;return r?a.a.createElement(s,u(u({ref:t},l),{},{components:r})):a.a.createElement(s,u({ref:t},l))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=O;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var l=2;l<c;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"},520:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(8),c=(r(0),r(1166)),i={title:"ActiveMQ"},u={unversionedId:"queue/activiemq",id:"queue/activiemq",isDocsHomePage:!1,title:"ActiveMQ",description:"- apache/activemq \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/queue/activiemq.md",slug:"/queue/activiemq",permalink:"/notes/queue/activiemq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/queue/activiemq.md",version:"current"},o=[{value:"Queue vs Topic",id:"queue-vs-topic",children:[]}],l={toc:o};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/apache/activemq"},"apache/activemq")," \u662f\u4ec0\u4e48\uff1f",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u652f\u6301\u534f\u8bae OpenWire, STOMP 1.0/1.1/1.2, MQTT, AMQP 1.0, REST, WebSockets"),Object(c.b)("li",{parentName:"ul"},"\u539f\u751f\u534f\u8bae Openwire \u529f\u80fd\u6700\u4e3a\u5b8c\u5584 - \u7aef\u53e3 61616"),Object(c.b)("li",{parentName:"ul"},"WebUI \u7aef\u53e3 8161"))),Object(c.b)("li",{parentName:"ul"},"\u6240\u6709\u534f\u8bae\u90fd\u53ef\u4ee5\u5728 61616"),Object(c.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/disaster37/activemq"},"disaster37/activemq"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"5.14.3")))))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"# STOMP 61613\ndocker run --rm -it \\\n  -p 8161:8161 -p 61613:61613 -p 61616:61616 \\\n  --name activemq webcenter/activemq\n")),Object(c.b)("h1",{id:"faq"},"FAQ"),Object(c.b)("h2",{id:"queue-vs-topic"},"Queue vs Topic"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Topic"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u5b9e\u73b0 Pub, Sub \u8bed\u4e49"),Object(c.b)("li",{parentName:"ul"},"\u5148 Sub \u540e Pub"),Object(c.b)("li",{parentName:"ul"},"Pub \u65f6\u6240\u6709 Sub \u90fd\u4f1a\u63a5\u6536\u6d88\u606f"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Queue"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u5b9e\u73b0\u8d1f\u8f7d\u5747\u8861\u8bed\u4e49 - fanout"),Object(c.b)("li",{parentName:"ul"},"\u4e00\u4e2a\u6d88\u606f\u53ea\u80fd\u88ab\u6d88\u8d39\u4e00\u6b21"),Object(c.b)("li",{parentName:"ul"},"\u88ab\u6d88\u8d39\u7684\u6d88\u606f\u6ca1\u6709\u88ab Ack \u4f1a\u4ece\u65b0\u5206\u53d1"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u53c2\u8003"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://activemq.apache.org/how-does-a-queue-compare-to-a-topic.html"},"https://activemq.apache.org/how-does-a-queue-compare-to-a-topic.html"))))))}p.isMDXComponent=!0}}]);