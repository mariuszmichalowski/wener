(window.webpackJsonp=window.webpackJsonp||[]).push([[788],{1152:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var a=r(0),i=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||b[m]||n;return r?i.a.createElement(f,o(o({ref:t},p),{},{components:r})):i.a.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<n;p++)s[p]=r[p];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},861:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var a=r(3),i=r(8),n=(r(0),r(1152)),s={id:"air",title:"ARI"},o={unversionedId:"voip/asterisk/air",id:"voip/asterisk/air",isDocsHomePage:!1,title:"ARI",description:"Asterisk REST Interface",source:"@site/notes/voip/asterisk/asterisk-ari.md",slug:"/voip/asterisk/air",permalink:"/notes/voip/asterisk/air",editUrl:"https://github.com/wenerme/wener/edit/master/notes/voip/asterisk/asterisk-ari.md",version:"current",sidebar:"docs",previous:{title:"Asterisk AMI",permalink:"/notes/voip/asterisk/asterisk-ami"},next:{title:"Asterisk Awesome",permalink:"/notes/voip/asterisk/asterisk-awesome"}},c=[{value:"Tips",id:"tips",children:[]}],p={toc:c};function l(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"asterisk-rest-interface"},"Asterisk REST Interface"),Object(n.b)("h2",{id:"tips"},"Tips"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\u542f\u52a8 ARI \u540e swagger \u5b9a\u4e49 json \u4f4d\u4e8e ",Object(n.b)("a",{parentName:"li",href:"http://127.0.0.1:8088/ari/api-docs/resources.json"},"http://127.0.0.1:8088/ari/api-docs/resources.json"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"http://ari.asterisk.org/"},"http://ari.asterisk.org/")," \u63d0\u4f9b Swagger UI \u53ef\u76f4\u63a5\u4f7f\u7528"))),Object(n.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://wiki.asterisk.org/wiki/display/AST/Getting+Started+with+ARI"},"Getting Started with ARI")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://stackoverflow.com/questions/32952007"},"How to use Asterisk ARI with socket.io & Node.js")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://wiki.asterisk.org/wiki/pages/viewpage.action?pageId=4817239"},"Asterisk Manager Interface")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://wiki.asterisk.org/wiki/pages/viewpage.action?pageId=29395573"},"Asterisk REST Interface")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/asterisk/asterisk/tree/master/res/ari"},"asterisk/res/ari")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/asterisk/asterisk/tree/master/rest-api"},"https://github.com/asterisk/asterisk/tree/master/rest-api")),Object(n.b)("li",{parentName:"ul"},"Swagger",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"http://localhost:8088/ari/api-docs/resources.json"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://raw.githubusercontent.com/asterisk/asterisk/master/rest-api/resources.json"},"https://raw.githubusercontent.com/asterisk/asterisk/master/rest-api/resources.json")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"http://ari.asterisk.org/"},"http://ari.asterisk.org/"))))),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-bash"},"")))}l.isMDXComponent=!0}}]);