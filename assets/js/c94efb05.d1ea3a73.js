"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[46003],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return o}});var l=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,l,n=function(t,e){if(null==t)return{};var a,l,n={},r=Object.keys(t);for(l=0;l<r.length;l++)a=r[l],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)a=r[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var m=l.createContext({}),N=function(t){var e=l.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=N(t.components);return l.createElement(m.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},d=l.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,m=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),d=N(a),o=n,s=d["".concat(m,".").concat(o)]||d[o]||k[o]||r;return a?l.createElement(s,i(i({ref:e},u),{},{components:a})):l.createElement(s,i({ref:e},u))}));function o(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,i=new Array(r);i[0]=d;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var N=2;N<r;N++)i[N]=a[N];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}d.displayName="MDXCreateElement"},83856:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return N},toc:function(){return u},default:function(){return d}});var l=a(87462),n=a(63366),r=(a(67294),a(3905)),i=["components"],p={title:"SQLite"},m=void 0,N={unversionedId:"db/relational/sqlite",id:"db/relational/sqlite",title:"SQLite",description:"- \u6570\u636e\u7c7b\u578b",source:"@site/notes/db/relational/sqlite.md",sourceDirName:"db/relational",slug:"/db/relational/sqlite",permalink:"/notes/db/relational/sqlite",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/relational/sqlite.md",tags:[],version:"current",frontMatter:{title:"SQLite"},sidebar:"docs",previous:{title:"sqlar",permalink:"/notes/db/relational/sqlar"},next:{title:"CouchDB",permalink:"/notes/db/document/couchdb"}},u=[{value:"\u6570\u636e\u64cd\u4f5c",id:"\u6570\u636e\u64cd\u4f5c",children:[{value:"\u5bfc\u5165 csv",id:"\u5bfc\u5165-csv",children:[],level:3},{value:"\u5bfc\u51fa csv",id:"\u5bfc\u51fa-csv",children:[],level:3}],level:2},{value:"DateTime",id:"datetime",children:[],level:2},{value:"Notes",id:"notes",children:[],level:2},{value:".help",id:"help",children:[],level:2},{value:"Deeper",id:"deeper",children:[],level:2},{value:"Node",id:"node",children:[],level:2},{value:"Java",id:"java",children:[],level:2},{value:"UDF",id:"udf",children:[],level:2},{value:"Build",id:"build",children:[],level:2},{value:"DEV",id:"dev",children:[],level:2}],k={toc:u};function d(t){var e=t.components,a=(0,n.Z)(t,i);return(0,r.kt)("wrapper",(0,l.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://sqlite.org/datatype3.html"},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"NULL"),(0,r.kt)("li",{parentName:"ul"},"INTEGER - 1, 2, 3, 4, 6, 8"),(0,r.kt)("li",{parentName:"ul"},"REAL - 8 byte"),(0,r.kt)("li",{parentName:"ul"},"TEXT - UTF-8, UTF-16BE, UTF-16LE"),(0,r.kt)("li",{parentName:"ul"},"BLOB"))),(0,r.kt)("li",{parentName:"ul"},"\u8bed\u6cd5",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.sqlite.org/lang_expr.html"},"expr")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.sqlite.org/pragma.html"},"pragma")))),(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"SQLite \u7684\u6838\u5fc3\u9650\u5236\u662f\u5e76\u53d1\u5199\u5165\u6027\u80fd - \u5982\u679c\u9700\u8981\u5e76\u53d1\u5199\u5165\uff0c\u4e0d\u5efa\u8bae\u7528 SQLite"),(0,r.kt)("li",{parentName:"ul"},"DATETIME \u4e0d\u4f1a\u5b58\u50a8\u6beb\u79d2"),(0,r.kt)("li",{parentName:"ul"},"\u6ca1\u6709 Base64 \u51fd\u6570"),(0,r.kt)("li",{parentName:"ul"},"BLOB \u4f5c\u4e3a\u4e8c\u8fdb\u5236\u5b58\u50a8\u90e8\u5206\u8bed\u8a00\u7684 Driver \u652f\u6301\u4e0d\u592a\u597d"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u6700\u591a 999 \u4e2a\u53d8\u91cf"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u914d\u5408 zfs \u8fdb\u884c\u538b\u7f29 - \u6ce8\u610f\u4f7f\u7528\u76f8\u540c\u7684 page size",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"page_size \u4e00\u822c 4096, cache_size \u4e00\u822c -2000 \u5373 2000 kb"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PRAGMA schema.page_size"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"PRAGMA schema.cache_size")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.mail-archive.com/sqlite-users@mailinglists.sqlite.org/msg114729.html"},"compressed sqlite3 database file?")))))),(0,r.kt)("li",{parentName:"ul"},"\u9650\u5236",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.sqlite.org/limits.html"},"Limits In SQLite")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.sqlite.org/c3ref/c_limit_attached.htm"},"c_limit_attached"))))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"SQLite \u7684\u7c7b\u578b\u662f\u52a8\u6001\u7684 - \u4e0d\u5f3a\u5236")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# macOS \u5b89\u88c5\nbrew install sqlite3\n# \u56e0\u4e3a\u7cfb\u7edf\u81ea\u5e26 - \u6240\u4ee5\u9ed8\u8ba4\u4e0d\u4f1a\u6dfb\u52a0\u5230 PATH\n$(brew --prefix sqlite3)/bin/sqlite3\n# \u6dfb\u52a0\u5b89\u88c5\u7684 sqlite3 \u5230 PATH\nexport PATH="/usr/local/opt/sqlite/bin:$PATH"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u65e5\u671f\u51fd\u6570\n-- https://sqlite.org/lang_datefunc.html\n-- \u8f6c\u6362\u65f6\u95f4\u6233\nselect datetime( 1323648000, 'unixepoch' );\n-- \u83b7\u53d6\u65f6\u95f4\u6233, \u5e26\u6beb\u79d2\nSELECT CAST((julianday('now') - 2440587.5) * 86400000 AS INTEGER);\n-- \u9ed8\u8ba4\u503c\u5e26\u6beb\u79d2\nCREATE TABLE IF NOT EXISTS event\n(\n  create_at DATETIME DEFAULT (STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW'))\n);\n\n-- \u9644\u52a0\u5176\u4ed6\u6587\u4ef6\u5230\u6570\u636e\u5e93\nATTACH 'cache.db' AS cache;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u6240\u6709\u8868\n.tables\n-- \u663e\u793a create \u8868\n.schema urls\n")),(0,r.kt)("h2",{id:"\u6570\u636e\u64cd\u4f5c"},"\u6570\u636e\u64cd\u4f5c"),(0,r.kt)("h3",{id:"\u5bfc\u5165-csv"},"\u5bfc\u5165 csv"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u53ef\u4ee5\u4e0d\u7528\u521b\u5efa\ncreate table foo(a, b);\n.mode csv\n.import test.csv foo\n")),(0,r.kt)("h3",{id:"\u5bfc\u51fa-csv"},"\u5bfc\u51fa csv"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},".output data.csv\nselect * from foo;\n")),(0,r.kt)("h2",{id:"datetime"},"DateTime"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- epoch to datetime\nselect datetime(1580000000,'unixepoch');\n-- \u6dfb\u52a0\u65f6\u533a\nselect datetime(1580000000,'unixepoch','localtime');\n-- datetime to epoch\nselect strftime('%s', datetime(1580000000,'unixepoch','localtime'));\n-- \u5f53\u524d epoch\nselect strftime('%s', 'now');\n")),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.sqlite.org/optoverview.html"},"The SQLite Query Optimizer Overview")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"WHERE \u6761\u4ef6\u5206\u6790",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7d22\u5f15\u9009\u62e9"))),(0,r.kt)("li",{parentName:"ul"},"BETWEEN \u4f18\u5316",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8f6c\u6362\u4e3a >= <="),(0,r.kt)("li",{parentName:"ul"},"\u4e0e\u7d22\u5f15\u5224\u65ad"))),(0,r.kt)("li",{parentName:"ul"},"OR \u4f18\u5316",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u76f8\u540c\u5217\u8bed\u610f\u4e0a\u53ef\u8f6c\u6362\u4e3a IN"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u540c\u5217 OR \u9700\u8981\u6309 Cost \u9009\u62e9"))),(0,r.kt)("li",{parentName:"ul"},"LIKE \u4f18\u5316",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u524d\u7f00\u7d22\u5f15"))),(0,r.kt)("li",{parentName:"ul"},"Skip-Scan \u4f18\u5316",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6761\u4ef6\u4e0d\u4ee5\u7d22\u5f15\u6700\u5de6\u5217\u5f00\u59cb"),(0,r.kt)("li",{parentName:"ul"},"\u5c1d\u8bd5\u9650\u5b9a\u6700\u5de6\u5217\u6761\u4ef6\u6765\u5229\u7528\u7d22\u5f15"),(0,r.kt)("li",{parentName:"ul"},"\u4f8b\u5982\u5f53\u6700\u5de6\u5217\u53ea\u6709\u56fa\u5b9a\u51e0\u4e2a\u503c\u7684\u65f6\u5019"))),(0,r.kt)("li",{parentName:"ul"},"JOIN",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"JOIN \u91cd\u6392\u5e8f"),(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e SQLITE_STAT \u9009\u62e9\u987a\u5e8f"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7 CROSS JOIN \u63a7\u5236\u67e5\u8be2"))),(0,r.kt)("li",{parentName:"ul"},"\u591a\u4e2a\u7d22\u5f15\u7684\u9009\u62e9",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u7edf\u8ba1"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"+a = 4")," \u7684\u65b9\u5f0f\u6765\u6697\u793a\u4e0d\u5b9e\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"a")," \u7684\u7d22\u5f15"),(0,r.kt)("li",{parentName:"ul"},"\u8303\u56f4\u67e5\u8be2"))),(0,r.kt)("li",{parentName:"ul"},"\u8986\u76d6\u7d22\u5f15",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5168\u8868\u626b\u63cf\u65f6\u9009\u62e9\u5305\u542b rowid \u7684\u7d22\u5f15"))),(0,r.kt)("li",{parentName:"ul"},"ORDER BY \u4f18\u5316",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5c1d\u8bd5\u4f7f\u7528\u7b26\u5408 ORDER BY \u8981\u6c42\u7684\u7d22\u5f15"))),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u7d22\u5f15\u8fdb\u884c\u90e8\u5206 ORDER BY",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5305\u542b\u591a\u4e2a ORDER BY \u65f6"))),(0,r.kt)("li",{parentName:"ul"},"\u62c9\u5e73\u5b50\u67e5\u8be2",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5c06\u5b50\u67e5\u8be2\u4f18\u5316\u4e3a JOIN"))),(0,r.kt)("li",{parentName:"ul"},"\u534f\u7a0b\u6267\u884c\u5b50\u67e5\u8be2",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u90e8\u5206\u5b50\u67e5\u8be2\u53ef\u4ee5\u4e0e\u5f53\u524d\u67e5\u8be2\u5e76\u884c\u6267\u884c"))),(0,r.kt)("li",{parentName:"ul"},"MIN/MAX \u4f18\u5316",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u5217\u662f\u67d0\u7d22\u5f15\u7684\u6700\u5de6\u5217\u53ef\u4ee5\u4f7f\u7528\u7d22\u5f15"))),(0,r.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u7d22\u5f15",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5f53\u67e5\u8be2\u6ca1\u6709\u7d22\u5f15\u65f6\uff0c\u53ef\u80fd\u4f1a\u5728\u8bed\u53e5\u6267\u884c\u671f\u95f4\u81ea\u52a8\u521b\u5efa\u4e00\u4e2a\u7d22\u5f15\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa\u7d22\u5f15 O(NlogN) \u5168\u8868\u626b\u63cf O(N)"))),(0,r.kt)("li",{parentName:"ul"},"\u4e0b\u63a8\u4f18\u5316/Push-Down Optimization",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u5b50\u67e5\u8be2\u65e0\u6cd5\u88ab\u5e73\u6574\u4e3a\u5916\u90e8\u67e5\u8be2\uff0c\u53ef\u5c1d\u8bd5\u5c06\u5916\u90e8\u67e5\u8be2\u7684\u6761\u4ef6\u4e0b\u63a8\u5230\u5b50\u67e5\u8be2\u4e2d\u3002"))),(0,r.kt)("li",{parentName:"ul"},"LEFT JOIN Strength Reduction Optimization",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6709\u65f6\u4e00\u4e2a LEFT JOIN \u53ef\u4ee5\u8f6c\u6362\u4e3a\u4e00\u4e2a\u666e\u901a\u7684 JOIN\uff0c\u53ea\u8981\u4e24\u8005\u7ed3\u679c\u76f8\u540c\u3002"),(0,r.kt)("li",{parentName:"ul"},"if any column in the right-hand table of the LEFT JOIN must be non-NULL in order for the WHERE clause to be true, then the LEFT JOIN is demoted to an ordinary JOIN."))),(0,r.kt)("li",{parentName:"ul"},"\u5ffd\u7565 LEFT JOIN",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6709\u65f6 LEFT JOIN \u53ef\u4ee5\u5b8c\u5168\u5457\u5ffd\u7565",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u98de\u805a\u5408\u67e5\u8be2"),(0,r.kt)("li",{parentName:"ul"},"DISTINC \u67e5\u8be2\u6216\u4f7f\u7528 ON/USING \u6765\u9650\u5236 JOIN \u53ea\u5339\u914d\u4e00\u5217"),(0,r.kt)("li",{parentName:"ul"},"LETF JOIN \u53f3\u8fb9\u8868\u7684\u5217\u672a\u5728\u5916\u90e8\u67e5\u8be2\u4f7f\u7528")))))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.sqlite.org/queryplanner-ng.html"},"The Next-Generation Query Planner")),(0,r.kt)("p",null,"\u7edf\u8ba1\u4fe1\u606f\n",(0,r.kt)("a",{parentName:"p",href:"https://www.sqlite.org/fileformat2.html#stat1tab"},"https://www.sqlite.org/fileformat2.html#stat1tab"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.sqlite.org/lang_analyze.html"},"https://www.sqlite.org/lang_analyze.html"),"\nANALYZE \u4f1a\u751f\u6210\u7edf\u8ba1\u4fe1\u606f\u8868"),(0,r.kt)("p",null,"sqlite_stat1\n\u53ef\u66f4\u65b0\u6216\u5220\u9664\uff0c\u4e0d\u53ef alter \u6216\u521b\u5efa"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE sqlite_stat1(tbl,idx,stat);\nCREATE TABLE sqlite_stat2(tbl,idx,sampleno,sample);\nCREATE TABLE sqlite_stat3(tbl,idx,nEq,nLt,nDLt,sample);\nCREATE TABLE sqlite_stat4(tbl,idx,nEq,nLt,nDLt,sample);\n")),(0,r.kt)("h2",{id:"help"},".help"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u4ee4"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".backup ?DB? FILE"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5907\u4efd\u6570\u636e\u5e93(\u9ed8\u8ba4\u4e3a main)\u5230 FILE"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".bail `on"),(0,r.kt)("td",{parentName:"tr",align:null},"off`"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9519\u8bef\u65f6\u505c\u6b62")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".binary `on"),(0,r.kt)("td",{parentName:"tr",align:null},"off`"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e8c\u8fdb\u5236\u8f93\u51fa")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".clone NEWDB"),(0,r.kt)("td",{parentName:"tr",align:null},"\u514b\u9686\u73b0\u6709\u7684\u6570\u636e\u5e93\u5230 NEWDB"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".databases"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f8b\u4e3e\u6dfb\u52a0\u7684\u6570\u636e\u5e93\u540d\u548c\u6587\u4ef6"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".dbinfo ?DB?"),(0,r.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u6570\u636e\u5e93\u72b6\u6001\u4fe1\u606f"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".dump ?TABLE? ..."),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee5 SQL \u7684\u5f62\u5f0f\u8f6c\u50a8\u6570\u636e\u5e93",(0,r.kt)("br",null),"\u5982\u679c\u6307\u5b9a\u4e86\u8868,\u5219\u53ea\u8f6c\u50a8\u5339\u914d LIKE \u6a21\u5f0f\u7684\u8868."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".echo `on"),(0,r.kt)("td",{parentName:"tr",align:null},"off`"),(0,r.kt)("td",{parentName:"tr",align:null},"\u547d\u4ee4\u56de\u663e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".eqp `on"),(0,r.kt)("td",{parentName:"tr",align:null},"off`"),(0,r.kt)("td",{parentName:"tr",align:null},"\u81ea\u52a8\u6267\u884c EXPLAIN QUERY PLAN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".exit"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9000\u51fa"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".explain `?on"),(0,r.kt)("td",{parentName:"tr",align:null},"off?`"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u9002\u5408 EXPLAIN \u7684\u8f93\u51fa\u6a21\u5f0f",(0,r.kt)("br",null),"\u5982\u679c\u672a\u6307\u5b9a\u53c2\u6570,\u5219\u4e3a\u6253\u5f00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".fullschema"),(0,r.kt)("td",{parentName:"tr",align:null},"\u663e\u793a sqlite_stat \u7684 schema \u548c\u5185\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".headers `on"),(0,r.kt)("td",{parentName:"tr",align:null},"off`"),(0,r.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u5934")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".help"),(0,r.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u8be5\u4fe1\u606f"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".import FILE TABLE"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bfc\u5165 FILE \u5185\u5bb9\u4e3a TABLE"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".indexes ?TABLE?"),(0,r.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u6240\u6709\u7d22\u5f15",(0,r.kt)("br",null),"\u5982\u679c\u6307\u5b9a\u4e86\u8868,\u5219\u53ea\u663e\u793a\u5339\u914d LIKE \u6a21\u5f0f\u7684\u8868."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".limit ?LIMIT? ?VAL?"),(0,r.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u6216\u66f4\u6539 SQLITE_LIMIT \u7684\u503c"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".log `FILE"),(0,r.kt)("td",{parentName:"tr",align:null},"off`"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e5\u5fd7, FILE \u53ef\u4ee5\u4e3a stderr/stdout")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".mode MODE ?TABLE?"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u8f93\u51fa\u6a21\u5f0f"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"ascii \u884c\u5217\u4f7f\u7528 0x1F \u548c 0x1E \u5206\u9694"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"csv \u9017\u53f7\u5206\u9694\u7684\u503c"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"column \u5de6\u5bf9\u9f50\u5217 (\u53c2\u89c1 .width)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"html HTML ",(0,r.kt)("inlineCode",{parentName:"td"},"<table>")," \u4ee3\u7801"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"insert Insert \u8bed\u53e5 TABLE"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"line \u6bcf\u884c\u53ea\u6709\u503c"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"list \u4f7f\u7528 .separator \u5206\u9694\u7684\u503c"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"tabs \u5236\u8868\u7b26\u5206\u5272\u7684\u503c"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"tcl TCL list \u5143\u7d20"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".nullvalue STRING"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 STRING \u6765\u66ff\u4ee3 NULL \u503c"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".once FILENAME"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8f93\u51fa\u4e0b\u4e00\u4e2a SQL \u6307\u4ee4\u5230 FILENAME"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".open ?FILENAME?"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4fbf\u4e8e\u73b0\u6709\u6570\u636e\u5e93\u5e76\u6253\u5f00 FILENAME"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".output ?FILENAME?"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u8f93\u51fa\u5230 FILENAME \u6216 stdout"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".print STRING..."),(0,r.kt)("td",{parentName:"tr",align:null},"\u663e\u793a STRING"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".prompt MAIN CONTINUE"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4fee\u6539\u63d0\u793a\u7b26"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".quit"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9000\u51fa"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".read FILENAME"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6267\u884c FILENAME \u4e2d\u7684 SQL"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".restore ?DB? FILE"),(0,r.kt)("td",{parentName:"tr",align:null},'\u6062\u590d DB(\u9ed8\u8ba4 "main") \u7684\u5185\u5bb9\u5230 FILE'),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".save FILE"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c06\u5185\u5b58\u6570\u636e\u5e93\u5199\u5165\u5230 FILE"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".scanstats `on"),(0,r.kt)("td",{parentName:"tr",align:null},"off`"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6253\u5f00\u6216\u5173\u95ed sqlite3_stmt_scanstatus() \u76d1\u6d4b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".schema ?TABLE?"),(0,r.kt)("td",{parentName:"tr",align:null},"\u663e\u793a CREATE \u8bed\u53e5",(0,r.kt)("br",null),"\u5982\u679c\u6307\u5b9a\u4e86\u8868,\u5219\u53ea\u663e\u793a\u5339\u914d LIKE \u6a21\u5f0f\u7684\u8868."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".separator COL ?ROW?"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4fee\u6539\u5217\u548c\u884c\u7684\u5206\u9694\u7b26,\u4f1a\u5f71\u54cd\u8f93\u51fa\u548c .import"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".shell CMD ARGS..."),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u7cfb\u7edf shell \u4e2d\u6267\u884c CMD ARGS..."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".show"),(0,r.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u5f53\u524d\u7684\u5404\u79cd\u8bbe\u7f6e"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".stats `on"),(0,r.kt)("td",{parentName:"tr",align:null},"off`"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7edf\u8ba1\u5f00\u5173")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".system CMD ARGS..."),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u7cfb\u7edf shell \u4e2d\u6267\u884c CMD ARGS..."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".tables ?TABLE?"),(0,r.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u8868\u540d",(0,r.kt)("br",null),"\u5982\u679c\u6307\u5b9a\u4e86\u8868,\u5219\u53ea\u663e\u793a\u5339\u914d LIKE \u6a21\u5f0f\u7684\u8868."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".timeout MS"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6253\u5f00\u88ab\u9501\u8868\u7684\u8d85\u65f6\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".timer `on"),(0,r.kt)("td",{parentName:"tr",align:null},"off`"),(0,r.kt)("td",{parentName:"tr",align:null},"SQL \u8ba1\u65f6\u5668\u5f00\u5173")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".trace `FILE"),(0,r.kt)("td",{parentName:"tr",align:null},"off`"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8f93\u51fa\u6bcf\u4e2a SQL \u8bed\u53e5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".vfsname ?AUX?"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8f93\u51fa VFS \u6808"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".width NUM1 NUM2 ..."),(0,r.kt)("td",{parentName:"tr",align:null},'\u8bbe\u7f6e "column" \u6a21\u5f0f\u7684\u5bbd\u5ea6,\u8d1f\u503c\u4e3a\u53f3\u5bf9\u9f50'),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"deeper"},"Deeper"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://dzone.com/articles/how-sqlite-database-works"},"https://dzone.com/articles/how-sqlite-database-works")),(0,r.kt)("h2",{id:"node"},"Node"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# pre gyp \u9ed8\u8ba4\u4ece s3 \u4e0b\u8f7d - \u53ef\u6307\u5b9a\u955c\u50cf\nyarn add sqlite3 --sqlite3_binary_host_mirror=https://npm.taobao.org/mirrors/sqlite3/\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// \u83b7\u53d6\u7248\u672c\nconst db = new Database(':memory:');\ndb.serialize(() => {\n  db.each('select sqlite_version() as version', (err, row) => {\n    console.log(`sqlite version ${row.version}`);\n  });\n});\ndb.close();\n")),(0,r.kt)("h2",{id:"java"},"Java"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"xerial sqlite-jdbc ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/xerial/sqlite-jdbc/blob/master/Usage.md"},"Usage"))),(0,r.kt)("h2",{id:"udf"},"UDF"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.sqlite.org/c3ref/create_function.html"},"Create Or Redefine SQL Functions")),(0,r.kt)("li",{parentName:"ul"},"PHP \u652f\u6301 ",(0,r.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/sqlite3.createfunction.php"},"SQLite3::createFunction")),(0,r.kt)("li",{parentName:"ul"},"Java Xerial \u652f\u6301 ",(0,r.kt)("a",{parentName:"li",href:"https://www.javadoc.io/doc/org.xerial/sqlite-jdbc/3.30.1/org/sqlite/Function.html"},"org.sqlite.Function")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/mapbox/node-sqlite3/issues/140"},"mapbox/node-sqlite3#140"))),(0,r.kt)("h2",{id:"build"},"Build"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://sqlite.org/howtocompile.html"},"How To Compile SQLite"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://sqlite.org/amalgamation.html"},"amalgamation")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5408\u5e76\u540e\u7684 sqlite \u6e90\u7801"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/sqlite/sqlite"},"sqlite/sqlite")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"mirror"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.sqlite.org/chronology.html"},"chronology")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7248\u672c\u5386\u53f2"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f9d\u8d56"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"pthread - \u591a\u7ebf\u7a0b\u652f\u6301\uff0c\u53ef\u5173\u95ed ",(0,r.kt)("inlineCode",{parentName:"li"},"SQLITE_THREADSAFE=0")),(0,r.kt)("li",{parentName:"ul"},"dl - \u6269\u5c55\u6a21\u5757\u652f\u6301\uff0c\u53ef\u5173\u95ed ",(0,r.kt)("inlineCode",{parentName:"li"},"-DSQLITE_OMIT_LOAD_EXTENSION"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# http://www.sqlite.org/\u5e74/sqlite-amalgamation-\u7248\u672c\u53f7.zip\n# 2013-04-12    3.7.16.2\ncurl -O http://www.sqlite.org/2013/sqlite-amalgamation-3071602.zip\n\n# \u6b63\u5e38\u7f16\u8bd1\ngcc shell.c sqlite3.c -lpthread -ldl -lm\n# \u5355\u7ebf\u7a0b - sqlite shell \u4e0d\u9700\u8981\u7ebf\u7a0b\u652f\u6301\ngcc -DSQLITE_THREADSAFE=0 shell.c sqlite3.c -ldl -lm\n# \u5355\u7ebf\u7a0b \u65e0\u6269\u5c55\ngcc -DSQLITE_THREADSAFE=0 -DSQLITE_OMIT_LOAD_EXTENSION shell.c sqlite3.c\n# \u5355\u7ebf\u7a0b \u65e0\u6269\u5c55 \u9759\u6001 - \u65b9\u4fbf\u79fb\u690d\ngcc -DSQLITE_THREADSAFE=0 -DSQLITE_OMIT_LOAD_EXTENSION -static shell.c sqlite3.c\n\n# \u4ea4\u53c9\u7f16\u8bd1\n# arm-none \u65e0\u6cd5\u7f16\u8bd1 - \u7f3a\u5c11 stdlib.h, stdlb.h\narm-none-eabi-gcc -DSQLITE_THREADSAFE=0 -DSQLITE_OMIT_LOAD_EXTENSION -static shell.c sqlite3.c\n")),(0,r.kt)("h2",{id:"dev"},"DEV"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zetcode.com/db/sqlitec/"},"SQLite C tutorial"))))}d.isMDXComponent=!0}}]);