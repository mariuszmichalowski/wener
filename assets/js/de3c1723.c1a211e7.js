"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[91054],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return k}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),u=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=u(t.components);return n.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),d=u(a),k=r,c=d["".concat(o,".").concat(k)]||d[k]||s[k]||l;return a?n.createElement(c,i(i({ref:e},m),{},{components:a})):n.createElement(c,i({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=d;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},92159:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return m},default:function(){return d}});var n=a(22122),r=a(19756),l=(a(67294),a(3905)),i=["components"],p={id:"datatype",title:"\u6570\u636e\u7c7b\u578b"},o="Postgres \u6570\u636e\u7c7b\u578b",u={unversionedId:"db/relational/postgresql/datatype",id:"db/relational/postgresql/datatype",isDocsHomePage:!1,title:"\u6570\u636e\u7c7b\u578b",description:"VARCHAR vs TEXT",source:"@site/notes/db/relational/postgresql/postgresql-datatype.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/datatype",permalink:"/notes/db/relational/postgresql/datatype",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/relational/postgresql/postgresql-datatype.md",version:"current",frontMatter:{id:"datatype",title:"\u6570\u636e\u7c7b\u578b"},sidebar:"docs",previous:{title:"PostGraphile",permalink:"/notes/db/relational/postgresql/postgraphile"},next:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/notes/db/relational/postgresql/faq"}},m=[{value:"VARCHAR vs TEXT",id:"varchar-vs-text",children:[]},{value:"INT vs BIGINT",id:"int-vs-bigint",children:[]},{value:"UUID",id:"uuid",children:[]},{value:"\u65f6\u95f4\u65e5\u671f",id:"\u65f6\u95f4\u65e5\u671f",children:[]},{value:"\u4e8c\u8fdb\u5236\u6570\u636e",id:"\u4e8c\u8fdb\u5236\u6570\u636e",children:[]},{value:"\u91d1\u989d\u7c7b\u578b",id:"\u91d1\u989d\u7c7b\u578b",children:[]},{value:"\u7ecf\u7eac\u5ea6",id:"\u7ecf\u7eac\u5ea6",children:[]}],s={toc:m};function d(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"postgres-\u6570\u636e\u7c7b\u578b"},"Postgres \u6570\u636e\u7c7b\u578b"),(0,l.kt)("h2",{id:"varchar-vs-text"},"VARCHAR vs TEXT"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u5b8c\u5168\u76f8\u540c"),(0,l.kt)("li",{parentName:"ul"},"\u53ea\u662f VARCHAR \u4f1a\u505a\u957f\u5ea6\u9a8c\u8bc1"),(0,l.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u90fd\u4f7f\u7528 TEXT, \u5728\u5e94\u7528\u5c42\u505a\u9650\u5236"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://stackoverflow.com/a/4849030/1870054"},"PostgreSQL: Difference between text and varchar (character varying)"))))),(0,l.kt)("h2",{id:"int-vs-bigint"},"INT vs BIGINT"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728 64 \u4f4d\u7684\u670d\u52a1\u5668\u4e0a, \u4e24\u8005\u5360\u7528\u7684\u7a7a\u95f4\u76f8\u540c"),(0,l.kt)("li",{parentName:"ul"},"\u56e0\u6b64\u5efa\u8bae\u4f7f\u7528 bigint")),(0,l.kt)("h2",{id:"uuid"},"UUID"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u539f\u751f\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"li"},"uuid")," \u7c7b\u578b"),(0,l.kt)("li",{parentName:"ul"},"\u751f\u6210 UUID \u9700\u8981\u6269\u5c55")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE EXTENSION IF NOT EXISTS pgcrypto;\n-- pg 13 \u540e\u4e0d\u9700\u8981\u6269\u5c55\u4e5f\u80fd\u4f7f\u7528\u8be5\u51fd\u6570\nSELECT gen_random_uuid();\n")),(0,l.kt)("h2",{id:"\u65f6\u95f4\u65e5\u671f"},"\u65f6\u95f4\u65e5\u671f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/datatype-datetime.html"},"Date/Time Types"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Min"),(0,l.kt)("th",{parentName:"tr",align:null},"Max"),(0,l.kt)("th",{parentName:"tr",align:null},"Resolution"),(0,l.kt)("th",{parentName:"tr",align:null},"Size"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,l.kt)("td",{parentName:"tr",align:null},"4713 BC"),(0,l.kt)("td",{parentName:"tr",align:null},"294276 AD"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fae\u79d2"),(0,l.kt)("td",{parentName:"tr",align:null},"8 bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timestamptz"),(0,l.kt)("td",{parentName:"tr",align:null},"4713 BC"),(0,l.kt)("td",{parentName:"tr",align:null},"294276 AD"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fae\u79d2"),(0,l.kt)("td",{parentName:"tr",align:null},"8 bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"date"),(0,l.kt)("td",{parentName:"tr",align:null},"4713 BC"),(0,l.kt)("td",{parentName:"tr",align:null},"5874897 AD"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5929"),(0,l.kt)("td",{parentName:"tr",align:null},"4 bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"time"),(0,l.kt)("td",{parentName:"tr",align:null},"00:00:00"),(0,l.kt)("td",{parentName:"tr",align:null},"24:00:00"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fae\u79d2"),(0,l.kt)("td",{parentName:"tr",align:null},"8 bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timetz"),(0,l.kt)("td",{parentName:"tr",align:null},"00:00:00+1459"),(0,l.kt)("td",{parentName:"tr",align:null},"24:00:00-1459"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fae\u79d2"),(0,l.kt)("td",{parentName:"tr",align:null},"12 bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"interval"),(0,l.kt)("td",{parentName:"tr",align:null},"-178000000 years"),(0,l.kt)("td",{parentName:"tr",align:null},"178000000 years"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fae\u79d2"),(0,l.kt)("td",{parentName:"tr",align:null},"16 bytes")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u65f6\u533a\u7f29\u5199\nselect * from pg_timezone_abbrevs;\n-- \u65f6\u533a\u540d\u5b57\nselect * from pg_timezone_names;\n")),(0,l.kt)("h2",{id:"\u4e8c\u8fdb\u5236\u6570\u636e"},"\u4e8c\u8fdb\u5236\u6570\u636e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wiki.postgresql.org/wiki/BinaryFilesInDB"},"BinaryFilesInDB")),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 bytea \u6216 text\uff0c\u90fd\u4f7f\u7528 toast"),(0,l.kt)("li",{parentName:"ul"},"\u5355\u8bb0\u5f55\u6700\u5927 1G"),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u8868\u6700\u591a 40\u4ebf > 2KB \u7684\u8bb0\u5f55"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u8bfb\u5199\u65f6\u53ef\u80fd\u9700\u8981\u7f16\u7801\u89e3\u7801"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u5185\u5b58\u8981\u6c42\u8f83\u9ad8\uff0c\u5373\u4fbf\u6570\u636e\u91cf\u8f83\u5c11")),(0,l.kt)("h2",{id:"\u91d1\u989d\u7c7b\u578b"},"\u91d1\u989d\u7c7b\u578b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5927\u90e8\u5206\u60c5\u51b5\u4f1a\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"decimal(12,2)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"decimal")," \u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"numeric")," \u7684\u522b\u540d"),(0,l.kt)("li",{parentName:"ul"},"\u4e5f\u53ef\u4ee5\u8003\u8651\u76f4\u63a5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"integer")," \u6765\u5b58\u5206"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/static/datatype-money.html"},"money"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u529f\u80fd\u6709\u9650"),(0,l.kt)("li",{parentName:"ul"},"\u6bd4 ",(0,l.kt)("inlineCode",{parentName:"li"},"numeric")," \u6027\u80fd\u66f4\u597d"),(0,l.kt)("li",{parentName:"ul"},"\u5386\u53f2\u9057\u7559 - \u4e0d\u8981\u4f7f\u7528"))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://stackoverflow.com/q/15726535/1870054"},"PostgreSQL: Which Datatype should be used for Currency?")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/static/datatype-numeric.html"},"\u6570\u5b57\u7c7b\u578b"))))),(0,l.kt)("h2",{id:"\u7ecf\u7eac\u5ea6"},"\u7ecf\u7eac\u5ea6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"float8 \u5b58\u50a8\u5355\u5b57\u6bb5"),(0,l.kt)("li",{parentName:"ul"},"point \u5b58\u50a8\u4e24\u4e2a\u5b57\u6bb5"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f7f\u7528\u4e86 PostGIS \u5219\u7528 geometry \u6216 geography \u7c7b\u578b"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://stackoverflow.com/a/8150944/1870054"},"Which data type for latitude and longitude?"))))))}d.isMDXComponent=!0}}]);