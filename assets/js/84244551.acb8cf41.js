"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[22589],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,f=s["".concat(u,".").concat(d)]||s[d]||c[d]||l;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},62688:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return s}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={title:"JavaScript \u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},u=void 0,p={unversionedId:"languages/js/js-faq",id:"languages/js/js-faq",isDocsHomePage:!1,title:"JavaScript \u5e38\u89c1\u95ee\u9898",description:"Date.toJSON include timezone",source:"@site/notes/languages/js/js-faq.md",sourceDirName:"languages/js",slug:"/languages/js/js-faq",permalink:"/notes/languages/js/js-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/js/js-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",frontMatter:{title:"JavaScript \u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},sidebar:"docs",previous:{title:"\u8bed\u6cd5",permalink:"/notes/languages/grammar/README"},next:{title:"LLVM",permalink:"/notes/languages/llvm/llvm"}},m=[{value:"Date.toJSON include timezone",id:"datetojson-include-timezone",children:[]},{value:"tbody to array",id:"tbody-to-array",children:[]},{value:"Primitive vs Object",id:"primitive-vs-object",children:[]}],c={toc:m};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"datetojson-include-timezone"},"Date.toJSON include timezone"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u9ed8\u8ba4 toJSON \u4e3a UTC\nconst now = new Date(2021, 12, 12, 0, 0, 0);\n// now.getTimezoneOffset() // local timezone offset\nconsole.assert(now.toJSON() === now.toISOString());\nJSON.stringify({ now });\n\nDate.prototype.toJSON = function () {\n  // return moment(this).format();\n  // return format(new Date(2016, 0, 1), \"yyyy-MM-dd'T'HH:mm:ss.SSSxxx\") // date-fns\n  return dayjs(this).format();\n};\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"method"),(0,l.kt)("th",{parentName:"tr",align:null},"format"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"now.toJSON()"),(0,l.kt)("td",{parentName:"tr",align:null},"2022-01-11T16:00:00.000Z")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"moment(now).format()"),(0,l.kt)("td",{parentName:"tr",align:null},"2022-01-12T00:00:00+08:00")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dayjs(now).format()"),(0,l.kt)("td",{parentName:"tr",align:null},"2022-01-12T00:00:00+08:00")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"date-fns format(now, \"yyyy-MM-dd'T'HH:mm:ss.SSSxxx\")"),(0,l.kt)("td",{parentName:"tr",align:null},"2022-01-12T00:00:00.000+08:00")))),(0,l.kt)("h2",{id:"tbody-to-array"},"tbody to array"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"Array.prototype.map.call($0.querySelectorAll('tr'), ($tr) =>\n  Array.prototype.map.call($tr.querySelectorAll('td'), ($td) => $td.innerText),\n);\n")),(0,l.kt)("h2",{id:"primitive-vs-object"},"Primitive vs Object"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Glossary/Primitive"},"Primitive"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"primitive value, primitive data type"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u662f\u5bf9\u8c61\uff0c\u6ca1\u6709\u65b9\u6cd5\uff0c",(0,l.kt)("strong",{parentName:"li"},"\u4e0d\u53ef\u53d8")),(0,l.kt)("li",{parentName:"ul"},"7 \u79cd\u7c7b\u578b - string, number, bigint, boolean, undefined, symbol, null"),(0,l.kt)("li",{parentName:"ul"},"\u9664\u4e86 null \u548c undefined \u90fd\u6709\u5c01\u88c5\u7c7b\u578b - String, Number, BigInt, Boolean, Symbol"))),(0,l.kt)("li",{parentName:"ul"},"Object",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u975e Primitive"),(0,l.kt)("li",{parentName:"ul"},"\u96c6\u6210\u81ea Object.prototype"),(0,l.kt)("li",{parentName:"ul"},"Object.create(null)"),(0,l.kt)("li",{parentName:"ul"},"JS \u4e2d ",(0,l.kt)("strong",{parentName:"li"},"\u6570\u7ec4\u4e3a\u5bf9\u8c61")))),(0,l.kt)("li",{parentName:"ul"},"typeof",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f1a\u8fd4\u56de function, undefined, object, string, number, boolean, bigint, symbol"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"typeof null")," \u4f1a\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"li"},"object"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u6700\u7b80\u5355\u76f4\u63a5\u5224\u65ad\ntypeof obj === 'object' && obj !== null;\n\n// \u5224\u65ad\u662f\u5426\u4e3a\u5bf9\u8c61 - \u975e Prim\n// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\nfunction isObject(obj) {\n  return obj === Object(obj);\n}\n\n// \u5728 Object.prototype, Object.create(null) \u8fd4\u56de false\nval instanceof Object;\n// null \u8fd4\u56de true\ntypeof val === 'object';\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6027\u80fd\u5bf9\u6bd4 ",(0,l.kt)("a",{parentName:"li",href:"https://jsbench.me/epk80dx8xr/1"},"typeof vs Object()"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"typeof \u66f4\u5feb")))))))}s.isMDXComponent=!0}}]);