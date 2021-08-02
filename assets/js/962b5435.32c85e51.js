"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[30546],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return s}});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=l.createContext({}),N=function(e){var t=l.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=N(e.components);return l.createElement(m.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,m=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),k=N(a),s=n,d=k["".concat(m,".").concat(s)]||k[s]||o[s]||r;return a?l.createElement(d,i(i({ref:t},u),{},{components:a})):l.createElement(d,i({ref:t},u))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=k;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var N=2;N<r;N++)i[N]=a[N];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}k.displayName="MDXCreateElement"},26477:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return N},toc:function(){return u},default:function(){return k}});var l=a(22122),n=a(19756),r=(a(67294),a(3905)),i=["components"],p={id:"version",title:"\u7248\u672c\u5386\u53f2"},m="Version",N={unversionedId:"db/relational/postgresql/version",id:"db/relational/postgresql/version",isDocsHomePage:!1,title:"\u7248\u672c\u5386\u53f2",description:"- \u53d1\u5e03\u5386\u53f2",source:"@site/notes/db/relational/postgresql/postgresql-version.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/version",permalink:"/notes/db/relational/postgresql/version",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/relational/postgresql/postgresql-version.md",version:"current",frontMatter:{id:"version",title:"\u7248\u672c\u5386\u53f2"},sidebar:"docs",previous:{title:"TimeScale",permalink:"/notes/db/relational/postgresql/timescale"},next:{title:"WAL-G",permalink:"/notes/db/relational/postgresql/wal-g"}},u=[{value:"14",id:"14",children:[]},{value:"13",id:"13",children:[]},{value:"12",id:"12",children:[]},{value:"11",id:"11",children:[]},{value:"10",id:"10",children:[]},{value:"9.x",id:"9x",children:[]}],o={toc:u};function k(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"version"},"Version"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/PostgreSQL#Release_history"},"\u53d1\u5e03\u5386\u53f2"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u73b0\u5728\u4e00\u822c\u6bcf\u5e74 Q4 \u53d1\u5e03\u65b0\u7248\u672c\uff0c\u6700\u8fd1\u5927\u591a\u4e3a 10 \u6708")))),(0,r.kt)("h2",{id:"14"},"14"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SELECT/INSERT",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5927\u90e8\u5206\u5173\u952e\u8bcd\u5141\u8bb8\u88ab\u7528\u4e8e\u5217\u540d"),(0,r.kt)("li",{parentName:"ul"},"\u6b63\u786e\u5904\u7406\u63d2\u5165\u591a\u5217\u65f6\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"DEFAULT")," - \u4e4b\u524d\u662f\u76f4\u63a5\u9519\u8bef"),(0,r.kt)("li",{parentName:"ul"},"CTE \u65b0\u589e SEARCH, CYCLE",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"SEARCH - \u63a7\u5236\u9012\u5f52\u7684\u67e5\u8be2\u65b9\u5f0f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SEARCH DEPTH FIRST BY id SET ordercol")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SEARCH BREADTH FIRST BY id SET ordercol")))),(0,r.kt)("li",{parentName:"ul"},"CYCLE - \u9012\u5f52\u65f6\u5224\u65ad\u662f\u5426\u662f\u5faa\u73af",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CYCLE id SET is_cycle USING path")))))))),(0,r.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u547d\u4ee4",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CREATE TRIGGER")," \u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"li"},"OR REPLACE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"REFRESH MATERIALIZED VIEW")," \u652f\u6301\u5e76\u884c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GRANT")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"REVOKE")," \u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"li"},"GRANTED BY")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TRUNCATE")," \u652f\u6301\u5916\u90e8\u8868"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ALTER SUBSCRIPTION ... ADD/DROP PUBLICATION")," - \u65b9\u4fbf\u4fee\u6539 PUBLICATION"))),(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u7c7b\u578b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6570\u5b57\u7c7b\u578b\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"li"},"infinity")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"-infinity")," - \u4e4b\u524d\u6d6e\u70b9\u6570\u5df2\u7ecf\u652f\u6301"),(0,r.kt)("li",{parentName:"ul"},"\u9664\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"li"},"infinity")," \u8fd4\u56de 0 - \u4e4b\u524d\u5f02\u5e38"),(0,r.kt)("li",{parentName:"ul"},"\u9664\u4ee5 NaN \u8fd4\u56de NaN - \u4e4b\u524d\u5f02\u5e38"))),(0,r.kt)("li",{parentName:"ul"},"\u51fd\u6570",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"function \u548c procedure \u652f\u6301\u662f SQL \u6807\u51c6\u65b9\u6cd5\u4f53",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e4b\u524d\u662f\u5355\u5f15\u53f7 \u6216 ",(0,r.kt)("inlineCode",{parentName:"li"},"$$")),(0,r.kt)("li",{parentName:"ul"},"\u73b0\u5728\u53ef\u76f4\u63a5\u5199"))),(0,r.kt)("li",{parentName:"ul"},"procedure \u652f\u6301 OUT \u53c2\u6570"),(0,r.kt)("li",{parentName:"ul"},"\u65b0\u589e trim_array()"),(0,r.kt)("li",{parentName:"ul"},"\u65b0\u589e bytea \u7684 ltrim, rtrim"),(0,r.kt)("li",{parentName:"ul"},"split_part() \u652f\u6301 \u8d1f\u7d22\u5f15"),(0,r.kt)("li",{parentName:"ul"},"bit_xor - \u4f4d\u6216\u8fd0\u7b97"),(0,r.kt)("li",{parentName:"ul"},"bit_count - \u8fd4\u56de\u591a\u5c11\u4e2a bit"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SUBSTRING(text SIMILAR pattern ESCAPE escapechar)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e4b\u524d ",(0,r.kt)("inlineCode",{parentName:"li"},"SUBSTRING(text FROM pattern FOR escapechar)")))))),(0,r.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u63a5\u53e3",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"libpq \u652f\u6301 pipeline - \u5e76\u884c\u6267\u884c\u591a\u4e2a\u8bed\u53e5\uff0c\u53ef\u6309\u9700\u7b49\u5f85\u8fd4\u56de"))),(0,r.kt)("li",{parentName:"ul"},"server",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u65b0\u589e\u9884\u5b9a\u4e49\u89d2\u8272 pg_read_all_data, pg_write_all_data"),(0,r.kt)("li",{parentName:"ul"},"\u65b0\u589e\u9884\u5b9a\u4e49\u89d2\u8272 pg_database_owner - \u5339\u914d\u6570\u636e\u5e93 owner"),(0,r.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u65ad\u5f00\u94fe\u63a5\u5219\u7ec8\u6b62\u957f\u67e5\u8be2 - client_connection_check_interval"))),(0,r.kt)("li",{parentName:"ul"},"vacuum",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5141\u8bb8\u5ffd\u7565\u7d22\u5f15 - INDEX_CLEANUP"),(0,r.kt)("li",{parentName:"ul"},"\u5141\u8bb8\u5ffd\u7565 TOST - PROCESS_TOAST"),(0,r.kt)("li",{parentName:"ul"},"\u63d0\u5347\u8f83\u591a\u5173\u8054\u5173\u7cfb\u6570\u636e\u5e93\u7684 vacuum \u901f\u5ea6"),(0,r.kt)("li",{parentName:"ul"},"autovacuum \u652f\u6301\u5206\u6790\u5206\u7247\u8868 - CONCURRENTLY"))),(0,r.kt)("li",{parentName:"ul"},"\u5206\u7247\u8868",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f18\u5316 updates/deletes \u53ea\u5f71\u54cd\u5c11\u90e8\u5206\u5206\u533a\u65f6\u7684\u6027\u80fd"),(0,r.kt)("li",{parentName:"ul"},"\u5141\u8bb8\u4e0d\u963b\u585e\u7684\u65b9\u5f0f\u8131\u79bb\u5206\u533a"))),(0,r.kt)("li",{parentName:"ul"},"\u4f18\u5316\u5668",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"IN \u652f\u6301\u4f7f\u7528 hash \u67e5\u627e\u5927\u91cf\u5e38\u91cf\u503c - \u4e4b\u524d\u662f seq scan"),(0,r.kt)("li",{parentName:"ul"},"\u6269\u5c55\u7edf\u8ba1\u652f\u6301 OR \u8bed\u53e5"),(0,r.kt)("li",{parentName:"ul"},"\u6269\u5c55\u7edf\u8ba1\u652f\u6301 \u8bed\u53e5 - \u4e4b\u524d\u662f\u5217"))),(0,r.kt)("li",{parentName:"ul"},"\u6027\u80fd\u63d0\u5347",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7a97\u53e3\u51fd\u6570\u652f\u6301\u589e\u91cf\u6392\u5e8f"),(0,r.kt)("li",{parentName:"ul"},"\u63d0\u5347\u5e76\u884c seq scan \u6027\u80fd"),(0,r.kt)("li",{parentName:"ul"},"\u591a\u5916\u90e8\u8868\u5f15\u7528\u652f\u6301\u5e76\u884c\u67e5\u8be2 - postgres_fdw \u9700\u8981\u8bbe\u7f6e async_capable"),(0,r.kt)("li",{parentName:"ul"},"\u63d0\u5347\u6b63\u5219\u6bd4\u8f83\u6027\u80fd"),(0,r.kt)("li",{parentName:"ul"},"TOAST \u652f\u6301 LZ4 \u538b\u7f29"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/14/release-14.html"},"PostgreSQL 14 Release Notes"))),(0,r.kt)("h2",{id:"13"},"13"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7d22\u5f15",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"B Tree \u7d22\u5f15\u4f18\u5316\u5bf9\u91cd\u590d\u6570\u636e\u7684\u5904\u7406\uff0c\u51cf\u5c11\u7d22\u5f15\u5927\u5c0f"))),(0,r.kt)("li",{parentName:"ul"},"\u6027\u80fd",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u589e\u91cf\u6392\u5e8f - \u67e5\u8be2\u7ed3\u679c\u5df2\u6392\u5e8f\u7684\u60c5\u51b5\u4e0b\u53ef\u52a0\u901f\u6570\u636e\u6392\u5e8f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u914d\u7f6e ",(0,r.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/13/runtime-config-query.html#GUC-ENABLE-INCREMENTALSORT"},"enable_incrementalsort")))),(0,r.kt)("li",{parentName:"ul"},"\u5927\u6570\u636e HASH \u805a\u5408\u53ef\u4f7f\u7528\u78c1\u76d8\u5b58\u50a8",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e4b\u524d\u5982\u679c HASH \u805a\u5408\u8d85\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"work_mem")," \u5219\u4e0d\u4f1a\u9009\u62e9 HASH \u805a\u5408"),(0,r.kt)("li",{parentName:"ul"},"\u914d\u7f6e ",(0,r.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/13/runtime-config-query.html#GUC-ENABLE-HASHAGG-DISK"},"enable_hashagg_disk")))),(0,r.kt)("li",{parentName:"ul"},"grouping sets \u53ef\u4f7f\u7528 hash \u805a\u5408 - \u5982\u679c\u542f\u7528\u4e86 enable_hashagg_disk"),(0,r.kt)("li",{parentName:"ul"},"insert \u53ef\u89e6\u53d1 autovacuum"),(0,r.kt)("li",{parentName:"ul"},"TOAST \u652f\u6301\u8bf7\u6c42\u90e8\u5206\u89e3\u538b - \u4e4b\u524d\u662f\u5168\u91cf"))),(0,r.kt)("li",{parentName:"ul"},"\u5de5\u5177\u547d\u4ee4",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"VACUUM PARALLEL")," - vacuum \u5e76\u884c"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"li"},"FETCH FIRST WITH TIES")," \u8bed\u6cd5 - \u5982\u679c\u6700\u540e\u4e00\u884c\u662f\u4e00\u6837\u7684\u5219\u7ee7\u7eed\u8fd4\u56de",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.db-fiddle.com/f/dMTYXbeacpQ53itrxR6iaR/0"},"demo")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"EXPLAIN")," \u8fd4\u56de\u8ba1\u5212\u65f6\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"BUFFER")," \u4f7f\u7528\u60c5\u51b5",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"explain (analyze, buffers) select * from test;")," ",(0,r.kt)("a",{parentName:"li",href:"https://www.db-fiddle.com/f/585uC9XZ73MXLzofH8HXrn/0"},"demo")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ALTER TABLE DROP EXPRESSION")," \u79fb\u9664\u5217\u4e0a\u7684\u751f\u6210\u5c5e\u6027"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ALTER VIEW RENAME COLUMN")," - \u4e4b\u524d\u53ea\u80fd ",(0,r.kt)("inlineCode",{parentName:"li"},"ALTER TABLE RENAME COLUMN")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DROP DATABASE WITH FORCE")," - \u5f3a\u5236\u65ad\u5f00\u7528\u6237\u4f7f\u5220\u9664\u5e93\u6210\u529f"))),(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u7c7b\u578b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u591a\u6001\u6570\u636e\u7c7b\u578b - ",(0,r.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/13/datatype-pseudo.html#DATATYPE-PSEUDOTYPES-TABLE"},"anycompatible")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"xid8")," - FullTransactionId"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ROW")," \u652f\u6301\u540e\u7f00\u8bbf\u95ee\u6210\u5458 ",(0,r.kt)("inlineCode",{parentName:"li"},"(ROW(4, 5.0)).f1")))),(0,r.kt)("li",{parentName:"ul"},"\u51fd\u6570",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jsonb_setI()")," - \u5bf9 NULL \u505a\u7279\u6b8a\u5904\u7406"),(0,r.kt)("li",{parentName:"ul"},"jsonpath ",(0,r.kt)("inlineCode",{parentName:"li"},".datetime()")," \u5c06 JSON \u503c\u8f6c\u6362\u4e3a SQL \u65f6\u95f4\u6233\u7c7b\u578b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NORMALIZE()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"IS NORMALIZED")," - \u8303\u5316\u548c\u68c0\u67e5 Uicode \u5b57\u7b26\u4e32\u662f\u5426\u8303\u5316"),(0,r.kt)("li",{parentName:"ul"},"Unicode \u8f6c\u4e49 - ",(0,r.kt)("inlineCode",{parentName:"li"},"E'\\u####'"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"U&'\\####'")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"to_date()")," ",(0,r.kt)("inlineCode",{parentName:"li"},"to_timestamp()")," \u652f\u6301\u975e\u82f1\u6587\u7684 \u6708\u3001\u65e5 \u540d\u5b57"),(0,r.kt)("li",{parentName:"ul"},"\u5185\u5efa ",(0,r.kt)("inlineCode",{parentName:"li"},"gen_random_uuid()")," \u751f\u6210 UUIDv4",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u9700\u8981\u5b89\u88c5\u6269\u5c55"))),(0,r.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 gcd \u548c lcm \u6765\u8ba1\u7b97\u6700\u5927\u516c\u7ea6\u6570\u548c\u6700\u5c0f\u516c\u500d\u6570"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"min_scale()")," ",(0,r.kt)("inlineCode",{parentName:"li"},"trim_scale()")," \u5904\u7406\u6d6e\u70b9\u6570"))),(0,r.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u5e94\u7528",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pg_verifybackup")," - \u9a8c\u8bc1\u5907\u4efd"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pg_dump --include-foreign-data")," - \u5bfc\u51fa\u5916\u90e8\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vacuumdb --parallel")," - \u5e76\u884c vacuum"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"reindexdb --jobs")," - \u5e76\u884c\u91cd\u65b0\u7d22\u5f15"))),(0,r.kt)("li",{parentName:"ul"},"\u989d\u5916\u6a21\u5757",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4fe1\u6269\u5c55 - \u6307\u5b9a\u5141\u8bb8\u666e\u901a\u7528\u6237\u5b89\u88c5\u7684\u6269\u5c55",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e4b\u524d\u53ea\u6709 superuser \u80fd\u5b89\u88c5"))),(0,r.kt)("li",{parentName:"ul"},"\u5141\u8bb8\u975e\u7279\u6743\u7528\u6237\u4e0d\u5e26\u5bc6\u7801\u8fde\u63a5 ",(0,r.kt)("inlineCode",{parentName:"li"},"postgres_fdw"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"alter user mapping xxx set password_required false")," \u7981\u7528"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/13/release-13.html"},"PostgreSQL 13 Release Notes"))),(0,r.kt)("h2",{id:"12"},"12"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/12/release-12.html"},"Release 12"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"SQL/JSON path"),(0,r.kt)("li",{parentName:"ul"},"\u751f\u6210\u5217"),(0,r.kt)("li",{parentName:"ul"},"JIT \u9ed8\u8ba4\u5f00\u542f"),(0,r.kt)("li",{parentName:"ul"},"\u7d22\u5f15\u5360\u7528\u78c1\u76d8\u7a7a\u95f4\u51cf\u5c11"))),(0,r.kt)("li",{parentName:"ul"},"\u5206\u7247",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5916\u952e\u5f15\u7528\u53ef\u4ee5\u6307\u5411\u5206\u7247\u8868"),(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa\u5206\u7247\u8868\u53ef\u4ee5\u4f7f\u7528\u8868\u8fbe\u5f0f - \u4e4b\u524d\u662f\u5e38\u91cf\u503c\uff0c\u4f46\u8868\u8fbe\u5f0f\u662f\u5728\u521b\u5efa\u65f6\u8fdb\u884c\u8ba1\u7b97"))),(0,r.kt)("li",{parentName:"ul"},"\u7d22\u5f15",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"btree \u4f7f\u7528\u7684\u7a7a\u95f4\u51cf\u5c11"))),(0,r.kt)("li",{parentName:"ul"},"\u4f18\u5316\u8d77",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u591a\u5217 \u5e38\u89c1\u503c(most-common-value MVC) \u7edf\u8ba1",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u5927\u6570\u636e\u6765\u8bf4\u5f88\u6709\u4ef7\u503c"))),(0,r.kt)("li",{parentName:"ul"},"CTE \u53ef\u4ee5\u88ab\u5f15\u64ce\u91cd\u5199 - \u4ee5\u524d CTE \u662f\u4f18\u5316\u7684\u8fb9\u754c"))),(0,r.kt)("li",{parentName:"ul"},"\u6027\u80fd",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"JIT \u9ed8\u8ba4\u542f\u7528"))),(0,r.kt)("li",{parentName:"ul"},"\u76d1\u63a7",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u91c7\u6837\u4e8b\u52a1\u6267\u884c\u65e5\u5fd7 - log_transaction_sample_rate"),(0,r.kt)("li",{parentName:"ul"},"\u6267\u884c\u8fdb\u5ea6\u62a5\u544a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CREATE INDEX"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"REINDEX")," - pg_stat_progress_create_index"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CLUSTER"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"VACUUM FULL")," - pg_stat_progress_cluster"))))),(0,r.kt)("li",{parentName:"ul"},"\u9274\u6743",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GSSAPI \u652f\u6301\u52a0\u5bc6"),(0,r.kt)("li",{parentName:"ul"},"LDAP \u652f\u6301\u901a\u8fc7 DNS SRV \u53d1\u73b0"))),(0,r.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u6a21\u5757",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ORDER BY \u548c LIMIT \u53ef\u4ee5\u88ab\u4e0b\u63a8\u5230 postgres_fdw"))),(0,r.kt)("li",{parentName:"ul"},"\u5de5\u5177\u547d\u4ee4",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"REINDEX CONCURRENTLY")," \u5e76\u884c\u91cd\u65b0\u7d22\u5f15"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 ",(0,r.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/12/ddl-generated-columns.html"},"\u751f\u6210\u5217"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u88ab\u63d2\u5165\u6216\u66f4\u65b0"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u88ab\u6307\u5b9a\u4e3a DEFAULT"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u4f5c\u4e3a key"),(0,r.kt)("li",{parentName:"ul"},"\u672c\u8d28\u4e0a\u76f8\u5f53\u4e8e before update \u7684 trigger\uff0c\u4f1a\u5728\u81ea\u5b9a\u4e49 trigger \u4e4b\u540e\u6267\u884c\uff0ctrigger \u91cc\u4e0d\u80fd\u8bbf\u95ee\u751f\u6210\u5217"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"COPY FROM")," \u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"li"},"WHERE")),(0,r.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"li"},"COMMIT AND CHAIN"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ROLLBACK AND CHAIN"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5b8c\u6210\u4e8b\u52a1\u9a6c\u4e0a\u53c8\u5f00\u542f"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"VACUUM")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"ANALYZE")," \u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"li"},"SKIP_LOCK")," - \u5ffd\u7565\u4e0d\u80fd\u9a6c\u4e0a\u9501\u5b9a\u7684\u8868"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CREATE AGGREGATE")," \u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"li"},"OR RELACE")))),(0,r.kt)("li",{parentName:"ul"},"\u51fd\u6570",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 ",(0,r.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/12/functions-json.html#FUNCTIONS-SQLJSON-PATH"},"SQL/JSON path"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u7ecf\u5e38\u4f7f\u7528 JSON \u6765\u8bf4\u662f\u975e\u5e38\u91cd\u8981\u7684\u7279\u6027"))),(0,r.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 ",(0,r.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/12/functions-aggregate.html#FUNCTIONS-AGGREGATE-STATISTICS-TABLE"},"\u7edf\u8ba1\u76f8\u5173\u7684\u805a\u5408\u51fd\u6570"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u5206\u6790\u573a\u666f\u6765\u8bf4\u5f88\u6709\u7528"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.postgresql.org/about/news/1976/"},"PostgreSQL 12 Released!"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u751f\u6210\u5217\ncreate table test(\n  id serial,\n  name text,\n  name_upper text generated always as upper(name) stored\n);\n")),(0,r.kt)("h2",{id:"11"},"11"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/11/static/release-11.html"},"PostgreSQL 11 Release Notes"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5206\u7247",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u4f7f\u7528 hash \u952e\u5206\u7247"),(0,r.kt)("li",{parentName:"ul"},"UPDATE \u66f4\u65b0\u5206\u7247\u952e\u65f6\u53ef\u4ee5\u5c06\u6570\u636e\u66f4\u65b0\u5230\u6b63\u786e\u7684\u5206\u7247"),(0,r.kt)("li",{parentName:"ul"},"SELECT \u6027\u80fd\u63d0\u5347"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u5206\u7247\u8868\u652f\u6301 PRIMARY KEY, FOREIGN KEY, \u7d22\u5f15\u548c\u89e6\u53d1\u5668"))),(0,r.kt)("li",{parentName:"ul"},"\u5e76\u884c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5e76\u884c hash join"),(0,r.kt)("li",{parentName:"ul"},"\u5e76\u884c CREATE INDEX \u521b\u5efa B-tree \u7d22\u5f15"),(0,r.kt)("li",{parentName:"ul"},"\u5e76\u884c CREATE TABLE .. AS, CREATE MATERIALIZED VIEW \u548c\u4e00\u4e9b UNION \u64cd\u4f5c"))),(0,r.kt)("li",{parentName:"ul"},"SQL \u5b58\u50a8\u8fc7\u7a0b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u5185\u5d4c\u4e8b\u52a1"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 CALL \u6267\u884c, CREATE/DROP/ALTER PROCEDURE"),(0,r.kt)("li",{parentName:"ul"},"\u4e5f\u53ef\u4ee5\u4f7f\u7528 DROP/ALTER ROUTINE \u5220\u9664\u548c\u4fee\u6539, \u4e5f\u53ef\u4ee5\u64cd\u4f5c\u51fd\u6570\u548c\u805a\u5408"),(0,r.kt)("li",{parentName:"ul"},"\u73b0\u5728\u7684\u5b58\u50a8\u51fd\u6570\u662f\u5728\u4e8b\u52a1\u5185\u6267\u884c"),(0,r.kt)("li",{parentName:"ul"},"\u4e8b\u52a1\u7684\u64cd\u4f5c\u53ea\u80fd\u5728\u9876\u5c42\u5b58\u50a8\u8fc7\u7a0b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/11/static/xproc.html"},"https://www.postgresql.org/docs/11/static/xproc.html")))),(0,r.kt)("li",{parentName:"ul"},"\u90e8\u5206 SQL JIT"),(0,r.kt)("li",{parentName:"ul"},"\u7a97\u53e3\u51fd\u6570\u652f\u6301\u6240\u6709 SQL:2011 \u6807\u51c6, \u5305\u62ec RANGE distance PRECEDING/FOLLOWING, GROUPS mode, and frame exclusion options"),(0,r.kt)("li",{parentName:"ul"},"\u4e4b\u524d ALTER TABLE .. ADD COLUMN \u5e76\u4e14 DEFAULT \u4e3a non-null \u65f6\u4f1a\u91cd\u5199\u6574\u4e2a\u8868, \u73b0\u5728\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\u90fd\u4e0d\u4f1a, \u8fd9\u7c7b\u64cd\u4f5c\u4f1a\u76f8\u5f53\u5feb"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u4f7f\u7528 quit \u548c exit \u9000\u51fa"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.postgresql.org/about/news/1855/"},"POSTGRESQL 11 BETA 1 RELEASED!"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=17144221"},"HN"))))),(0,r.kt)("h2",{id:"10"},"10"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://wiki.postgresql.org/wiki/New_in_postgres_10"},"New in postgres 10"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"http://h50146.www5.hpe.com/products/software/oe/linux/mainstream/support/lcc/pdf/PostgreSQL_10_New_Features_en_20170522-1.pdf"},"PostgreSQL 10 New Features With Examples"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://blog.2ndquadrant.com/postgresql-10-identity-columns/"},"https://blog.2ndquadrant.com/postgresql-10-identity-columns/"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The identity property is not inherited. For a serial column, the default expression is inherited but the sequence ownership is not (similar to the LIKE case)."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u4e4b\u524d\n-- serial \u4e0d\u4f1a\u88ab\u8bed\u53e5\u91cd\u73b0\n-- \u4f1a\u6709\u5e8f\u5217\u5f52\u5c5e\u95ee\u9898\nCREATE TABLE test_old (\n    id serial PRIMARY KEY,\n    payload text\n);\n\nINSERT INTO test_old (payload) VALUES ('a'), ('b'), ('c') RETURNING *;\n\n-- \u4e4b\u540e\n-- \u7b26\u5408 SQL \u6807\u51c6, \u517c\u5bb9 DB2, Oracle\n-- \u8bed\u53e5\u91cd\u73b0\nCREATE TABLE test_new (\n    id int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,\n    payload text\n);\n\nINSERT INTO test_new (payload) VALUES ('a'), ('b'), ('c') RETURNING *;\n")),(0,r.kt)("h2",{id:"9x"},"9.x"))}k.isMDXComponent=!0}}]);