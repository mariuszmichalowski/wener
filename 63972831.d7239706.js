(window.webpackJsonp=window.webpackJsonp||[]).push([[422],{1169:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return s}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),p=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),m=p(a),f=r,s=m["".concat(i,".").concat(f)]||m[f]||u[f]||c;return a?n.a.createElement(s,o(o({ref:t},b),{},{components:a})):n.a.createElement(s,o({ref:t},b))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,i=new Array(c);i[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var b=2;b<c;b++)i[b]=a[b];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"},496:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(8),c=(a(0),a(1169)),i={title:"JSON"},o={unversionedId:"dev/format/json",id:"dev/format/json",isDocsHomePage:!1,title:"JSON",description:"- rfc6901 - JavaScript Object Notation (JSON) Pointer",source:"@site/notes/dev/format/json.md",slug:"/dev/format/json",permalink:"/notes/dev/format/json",editUrl:"https://github.com/wenerme/wener/edit/master/notes/dev/format/json.md",version:"current",sidebar:"docs",previous:{title:"Format Awesome",permalink:"/notes/dev/format/format-awesome"},next:{title:"RIFF",permalink:"/notes/dev/format/riff"}},l=[{value:"Schema",id:"schema",children:[]},{value:"Patch",id:"patch",children:[]},{value:"Diff",id:"diff",children:[]},{value:"FAQ",id:"faq",children:[{value:"JSON Patch and JSON Merge Patch",id:"json-patch-and-json-merge-patch",children:[]},{value:"\u65f6\u95f4\u683c\u5f0f\u9009\u62e9",id:"\u65f6\u95f4\u683c\u5f0f\u9009\u62e9",children:[]}]}],b={toc:l};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc6901"},"rfc6901")," - JavaScript Object Notation (JSON) Pointer"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/automerge/automerge"},"automerge/automerge"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"A JSON-like data structure that can be modified concurrently by different users, and merged again automatically.")))),Object(c.b)("h2",{id:"schema"},"Schema"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"http://json-schema.org/"},"json-schema")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"http://www.jsonschema2pojo.org/"},"jsonschema2pojo"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Json Schema \u751f\u6210 Pojo")))),Object(c.b)("h2",{id:"patch"},"Patch"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc6902"},"rfc6902")," - JSON Patch",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u57fa\u4e8e\u64cd\u4f5c - op, path, value - \u66f4\u9002\u7528\u4e8e\u590d\u6742\u573a\u666f"),Object(c.b)("li",{parentName:"ul"},"op = add, remove, replace, move, copy, test"),Object(c.b)("li",{parentName:"ul"},"test \u7528\u4e8e\u65ad\u8a00\uff0c\u65ad\u8a00\u5931\u8d25\u5219\u64cd\u4f5c\u5931\u8d25",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u4f8b\u5982 ",Object(c.b)("inlineCode",{parentName:"li"},'{ "op": "test", "path": "/a/b/c", "value": "foo" }')))))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc7396"},"rfc7396")," - JSON Merge Patch",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u57fa\u4e8e\u6587\u6863\u5408\u5e76 - ",Object(c.b)("inlineCode",{parentName:"li"},'{"key":"new value"}')," - \u9002\u7528\u4e8e\u7b80\u5355\u573a\u666f"),Object(c.b)("li",{parentName:"ul"},"\u8bbe\u7f6e key \u4e3a null \u8868\u793a\u5220\u9664"),Object(c.b)("li",{parentName:"ul"},"\u6570\u7ec4\u53ea\u80fd\u66ff\u6362"),Object(c.b)("li",{parentName:"ul"},"\u5408\u5e76\u64cd\u4f5c\u4e0d\u4f1a\u51fa\u9519"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"http://jsonpatch.com/"},"jsonpatch")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/flipkart-incubator/zjsonpatch"},"flipkart-incubator/zjsonpatch"))),Object(c.b)("h2",{id:"diff"},"Diff"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/andreyvit/json-diff"},"https://github.com/andreyvit/json-diff")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"http://www.jsondiff.com/"},"http://www.jsondiff.com/")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://json-diff.com/"},"https://json-diff.com/")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/benjamine/jsondiffpatch/blob/master/docs/formatters.md"},"https://github.com/benjamine/jsondiffpatch/blob/master/docs/formatters.md")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://benjamine.github.io/jsondiffpatch"},"https://benjamine.github.io/jsondiffpatch")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/google/diff-match-patch"},"google/diff-match-patch")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://www.sanity.io/blog/mendoza"},"Mendoza: Use stack machines to compute efficient JSON diffs"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=24943775"},"HN"))))),Object(c.b)("h2",{id:"faq"},"FAQ"),Object(c.b)("h3",{id:"json-patch-and-json-merge-patch"},"JSON Patch and JSON Merge Patch"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"rfc6902 vs rfc7396"),Object(c.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://erosb.github.io/post/json-patch-vs-merge-patch/"},"JSON Patch and JSON Merge Patch"))))),Object(c.b)("h3",{id:"\u65f6\u95f4\u683c\u5f0f\u9009\u62e9"},"\u65f6\u95f4\u683c\u5f0f\u9009\u62e9"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://stackoverflow.com/q/10286204/1870054"},"The \u201cright\u201d JSON date format")),Object(c.b)("li",{parentName:"ul"},"ISO 8601"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"new Date().toJSON()")),Object(c.b)("li",{parentName:"ul"},"2018-04-16T05:24:53.603Z"),Object(c.b)("li",{parentName:"ul"},"Java ",Object(c.b)("inlineCode",{parentName:"li"},"new SimpleDateFormat(\"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'\", Locale.CHINA)"))))}p.isMDXComponent=!0}}]);