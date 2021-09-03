"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[33085],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91479:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),i=["components"],o={title:"Pg SQL \u5e38\u89c1\u95ee\u9898"},s="PostgreSQL SQL \u95ee\u9898",p={unversionedId:"db/relational/postgresql/postgresql-sql-faq",id:"db/relational/postgresql/postgresql-sql-faq",isDocsHomePage:!1,title:"Pg SQL \u5e38\u89c1\u95ee\u9898",description:"- JSON Functions and Operators",source:"@site/notes/db/relational/postgresql/postgresql-sql-faq.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/postgresql-sql-faq",permalink:"/notes/db/relational/postgresql/postgresql-sql-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/relational/postgresql/postgresql-sql-faq.md",version:"current",frontMatter:{title:"Pg SQL \u5e38\u89c1\u95ee\u9898"},sidebar:"docs",previous:{title:"Postgresql Scale",permalink:"/notes/db/relational/postgresql/postgresql-scale"},next:{title:"\u53ef\u66f4\u65b0\u89c6\u56fe",permalink:"/notes/db/relational/postgresql/postgresql-view"}},u=[{value:"JSON FAQ",id:"json-faq",children:[]},{value:"JSON \u6570\u7ec4\u8f6c\u884c",id:"json-\u6570\u7ec4\u8f6c\u884c",children:[]},{value:"JSON \u5bf9\u8c61\u904d\u5386",id:"json-\u5bf9\u8c61\u904d\u5386",children:[]},{value:"\u9759\u6001\u6570\u636e\u884c",id:"\u9759\u6001\u6570\u636e\u884c",children:[]},{value:"\u5206\u7ec4\u805a\u5408",id:"\u5206\u7ec4\u805a\u5408",children:[]},{value:"function vs procedure",id:"function-vs-procedure",children:[]},{value:"\u51fd\u6570\u8fd4\u56de\u5f71\u54cd\u884c",id:"\u51fd\u6570\u8fd4\u56de\u5f71\u54cd\u884c",children:[]},{value:"\u65f6\u95f4\u65e5\u671f\u5904\u7406",id:"\u65f6\u95f4\u65e5\u671f\u5904\u7406",children:[]},{value:"\u6b63\u5219",id:"\u6b63\u5219",children:[]},{value:"\u751f\u6210\u5e26\u524d\u7f00\u7684 UUID \u4e3b\u952e",id:"\u751f\u6210\u5e26\u524d\u7f00\u7684-uuid-\u4e3b\u952e",children:[]},{value:"\u63a8\u8350\u4e3b\u952e\u521b\u5efa\u65b9\u5f0f",id:"\u63a8\u8350\u4e3b\u952e\u521b\u5efa\u65b9\u5f0f",children:[]},{value:"Operator",id:"operator",children:[]},{value:"\u5206\u7ec4\u91cc\u9009\u62e9\u6700\u540e\u4e00\u6761\u6570\u636e",id:"\u5206\u7ec4\u91cc\u9009\u62e9\u6700\u540e\u4e00\u6761\u6570\u636e",children:[]}],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"postgresql-sql-\u95ee\u9898"},"PostgreSQL SQL \u95ee\u9898"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/functions-json.html"},"JSON Functions and Operators")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PRIMARY KEY")," ~= ",(0,l.kt)("inlineCode",{parentName:"li"},"UNIQUE")," + ",(0,l.kt)("inlineCode",{parentName:"li"},"NOT NULL"))),(0,l.kt)("h2",{id:"json-faq"},"JSON FAQ"),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"data->'field' is not null")," \u65e0\u6cd5\u68c0\u6d4b null \u6570\u636e - \u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},"->>")," \u53ef\u4ee5\u68c0\u6d4b\u5230 null")))),(0,l.kt)("h2",{id:"json-\u6570\u7ec4\u8f6c\u884c"},"JSON \u6570\u7ec4\u8f6c\u884c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'-- \u8f6c\u6362\u4e3a\u5355\u884c JSON \u5bf9\u8c61\nselect * from json_array_elements(\'[{"a":1},{"a":2}]\');\n\n-- \u540c\u65f6\u63d0\u53d6\u5217\nselect * from json_to_recordset(\'[{"a":1,"b":"first"},{"a":2,"b":"second"}]\') as (a int, b text);\n')),(0,l.kt)("h2",{id:"json-\u5bf9\u8c61\u904d\u5386"},"JSON \u5bf9\u8c61\u904d\u5386"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'-- (key,value)\nselect * from json_each_text(\'{"a":1,"b":2}\') as d;\n')),(0,l.kt)("h2",{id:"\u9759\u6001\u6570\u636e\u884c"},"\u9759\u6001\u6570\u636e\u884c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM (VALUES (1, 'one'), (2, 'two'), (3, 'three')) AS t (num, letter);\n")),(0,l.kt)("h2",{id:"\u5206\u7ec4\u805a\u5408"},"\u5206\u7ec4\u805a\u5408"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/cube.html"},"cube")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/devel/queries-table-expressions.html#QUERIES-GROUPING-SETS"},"GROUPING SETS, CUBE, ROLLUP")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rollup(a,b,c)")," => ",(0,l.kt)("inlineCode",{parentName:"li"},"grouping sets((a,b,c),(a,b),(a),())")),(0,l.kt)("li",{parentName:"ul"},"cube((a),(b),(c)) grouping sets((a,b,c),(a,b),(a,c),(a),(b,c),(b),(c),())")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"GROUP BY a, b, c\n-- \u5bf9\u7b49\n\n\nROLLUP ( a, b , c)\n-- \u5bf9\u7b49\nGROUPING SETS (\n    ( a, b, c ),\n    ( a, b    ),\n    ( a       ),\n    (         )\n)\n\nCUBE ( a, b, c )\n-- \u5bf9\u7b49\nGROUPING SETS (\n    ( a, b, c ),\n    ( a, b    ),\n    ( a,    c ),\n    ( a       ),\n    (    b, c ),\n    (    b    ),\n    (       c ),\n    (         )\n)\n\nCUBE ( (a, b), (c, d) )\n-- \u5bf9\u7b49\nGROUPING SETS (\n    ( a, b, c, d ),\n    ( a, b       ),\n    (       c, d ),\n    (            )\n)\n")),(0,l.kt)("h2",{id:"function-vs-procedure"},"function vs procedure"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"function",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u53ef\u4ee5\u64cd\u4f5c\u4e8b\u7269"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 SELECT \u8c03\u7528"))),(0,l.kt)("li",{parentName:"ul"},"procedure",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u8fd4\u56de\u503c"),(0,l.kt)("li",{parentName:"ul"},"\u6709 INOUT \u53c2\u6570"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5 commit \u548c rollback"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 CALL \u8c03\u7528"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u53ef\u4ee5\u5d4c\u5957\u5230\u5176\u4ed6 DDL - SELECT,INSERT,UPDATE,DELETE")))),(0,l.kt)("h2",{id:"\u51fd\u6570\u8fd4\u56de\u5f71\u54cd\u884c"},"\u51fd\u6570\u8fd4\u56de\u5f71\u54cd\u884c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"get diagnostics cnt = row_count;\nreturn cnt;\n")),(0,l.kt)("h2",{id:"\u65f6\u95f4\u65e5\u671f\u5904\u7406"},"\u65f6\u95f4\u65e5\u671f\u5904\u7406"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"to_timestamp \u8f6c timestamptz"),(0,l.kt)("li",{parentName:"ul"},"to_date \u8f6c date"),(0,l.kt)("li",{parentName:"ul"},"to_char \u8f6c text"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/functions-formatting.html"},"Data Type Formatting Functions")))),(0,l.kt)("li",{parentName:"ul"},"ts \u652f\u6301\u5c0f\u6570\u70b9\u540e\u516d\u4f4d - nano \u7cbe\u5ea6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT TO_DATE('20170103','YYYYMMDD');\nSELECT TO_DATE('2020\u5e747\u670828\u65e5','YYYY\u5e74MM\u6708DD\u65e5');\nSELECT TO_CHAR(TO_DATE('2020\u5e747\u670828\u65e5','YYYY\u5e74MM\u6708DD\u65e5'),'YYYY-MM-DD');\n\n-- ms \u8f6c ts - \u652f\u6301\u5c0f\u6570\u70b9\nselect to_timestamp(1630402380252::float / 1000);\n-- ts \u8f6c epoch - \u5305\u542b\u5c0f\u6570\u70b9\nselect extract(epoch from now());\n")),(0,l.kt)("h2",{id:"\u6b63\u5219"},"\u6b63\u5219"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"regexp_match(string, pattern [, flags ]) returns text[]\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"flags",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"g - global")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT (regexp_match('200\u4e07\u4eba\u6c11\u5e01', '[\\d.]+'))[1];\nSELECT (regexp_match('200\u4e07\u4eba\u6c11\u5e01', '\\D+$'))[1];\n")),(0,l.kt)("h2",{id:"\u751f\u6210\u5e26\u524d\u7f00\u7684-uuid-\u4e3b\u952e"},"\u751f\u6210\u5e26\u524d\u7f00\u7684 UUID \u4e3b\u952e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982\u7528\u4e8e GraphQL \u901a\u8fc7 ID \u5224\u65ad\u7c7b\u578b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"create table test\n(\n    id    text default 'test-' || public.gen_random_uuid() primary key,\n    value text\n);\n\ninsert into test(value)\nvalues ('test');\n\nselect *\nfrom test;\n")),(0,l.kt)("h2",{id:"\u63a8\u8350\u4e3b\u952e\u521b\u5efa\u65b9\u5f0f"},"\u63a8\u8350\u4e3b\u952e\u521b\u5efa\u65b9\u5f0f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u6bd4 serial",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6709\u5f52\u5c5e\u5173\u7cfb"),(0,l.kt)("li",{parentName:"ul"},"\u66f4\u52a0\u89c4\u8303")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE users (\n   id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY\n);\n-- \u4e5f\u53ef\u4ee5\u9488\u5bf9\u751f\u6210\u8bbe\u7f6e\u66f4\u591a\u53c2\u6570\nCREATE TABLE users (\n   id bigint GENERATED ALWAYS AS IDENTITY\n             (MINVALUE 0 START WITH 0 CACHE 20)\n             PRIMARY KEY,\n);\n")),(0,l.kt)("h2",{id:"operator"},"Operator"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u64cd\u4f5c\u7b26\u4e5f\u662f\u51fd\u6570\nSELECT 3 OPERATOR(pg_catalog.+) 4;\n")),(0,l.kt)("h2",{id:"\u5206\u7ec4\u91cc\u9009\u62e9\u6700\u540e\u4e00\u6761\u6570\u636e"},"\u5206\u7ec4\u91cc\u9009\u62e9\u6700\u540e\u4e00\u6761\u6570\u636e"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"distinct - \u63a8\u8350")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select distinct on (id) id, date, another_info\nfrom the_table\norder by id, date desc;\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"window")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select data\nfrom (\n        select data,\n                row_number()\n                over (partition by data ->> 'groupId' order by item_date desc) as rn\n        from pulled_items\n    ) lt\nwhere rn = 1\n")))}d.isMDXComponent=!0}}]);