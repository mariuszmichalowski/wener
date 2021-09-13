"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[28554],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=s(n),f=i,v=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(v,p(p({ref:t},l),{},{components:n})):r.createElement(v,p({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,p=new Array(o);p[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,p[1]=a;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4808:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),p=["components"],a={title:"sipp"},c=void 0,s={unversionedId:"service/telecom/sip/sipp",id:"service/telecom/sip/sipp",isDocsHomePage:!1,title:"sipp",description:"- SIPp/sipp \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/service/telecom/sip/sipp.md",sourceDirName:"service/telecom/sip",slug:"/service/telecom/sip/sipp",permalink:"/notes/service/telecom/sip/sipp",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/telecom/sip/sipp.md",tags:[],version:"current",frontMatter:{title:"sipp"},sidebar:"docs",previous:{title:"SIP Awesome",permalink:"/notes/service/telecom/sip/sip-awesome"},next:{title:"DNS Service",permalink:"/notes/service/dns/dns"}},l=[],u={toc:l};function m(e){var t=e.components,n=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SIPp/sipp"},"SIPp/sipp")," \u662f\u4ec0\u4e48\uff1f",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"SIP \u534f\u8bae\u6d4b\u8bd5\u5de5\u5177"))),(0,o.kt)("li",{parentName:"ul"},"SER - Session Establishment Rate"),(0,o.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=LWjfA06443g"},"SIP Performance Benchmark"))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# macOS\nbrew install sipp\n# AlpineLinux\napk add sipp\n\n# \u670d\u52a1\u7aef\nsipp -sn uas\n# \u5ba2\u6237\u7aef\n# 1 \u6d4b\u8bd5\u573a\u666f 2 \u7edf\u8ba1 3 \u54cd\u5e94\u5ef6\u65f6\u5206\u5e03 4 \u6d4b\u8bd5\u53d8\u91cf\nsipp -sn uac 127.0.0.1\n")))}m.isMDXComponent=!0}}]);