"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[69057],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,E=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return t?a.createElement(E,s(s({ref:n},c),{},{components:t})):a.createElement(E,s({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=u;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},17576:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=t(87462),r=t(63366),l=(t(67294),t(3905)),s=["components"],o={title:"PostgreSQL Cookbook",tags:["Cookbook"]},i=void 0,p={unversionedId:"db/relational/postgresql/postgresql-cookbook",id:"db/relational/postgresql/postgresql-cookbook",title:"PostgreSQL Cookbook",description:"- String Functions and Operators",source:"@site/notes/db/relational/postgresql/postgresql-cookbook.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/postgresql-cookbook",permalink:"/notes/db/relational/postgresql/postgresql-cookbook",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/relational/postgresql/postgresql-cookbook.md",tags:[{label:"Cookbook",permalink:"/notes/tags/cookbook"}],version:"current",frontMatter:{title:"PostgreSQL Cookbook",tags:["Cookbook"]},sidebar:"docs",previous:{title:"\u547d\u4ee4\u884c\u5de5\u5177",permalink:"/notes/db/relational/postgresql/postgresql-cli"},next:{title:"PostgreSQL Extension",permalink:"/notes/db/relational/postgresql/postgresql-extension"}},c=[{value:"json \u6570\u7ec4\u53bb\u91cd",id:"json-\u6570\u7ec4\u53bb\u91cd",children:[],level:2},{value:"\u6570\u636e\u8f6c\u6362",id:"\u6570\u636e\u8f6c\u6362",children:[],level:2},{value:"\u5b57\u7b26\u4e32",id:"\u5b57\u7b26\u4e32",children:[],level:2},{value:"\u7edf\u8ba1",id:"\u7edf\u8ba1",children:[],level:2},{value:"\u673a\u5668\u5b66\u4e60",id:"\u673a\u5668\u5b66\u4e60",children:[],level:2},{value:"UUID",id:"uuid",children:[],level:2},{value:"\u5546\u4e1a",id:"\u5546\u4e1a",children:[],level:2},{value:"\u6570\u636e\u8fc1\u79fb",id:"\u6570\u636e\u8fc1\u79fb",children:[],level:2},{value:"\u56fe\u64cd\u4f5c",id:"\u56fe\u64cd\u4f5c",children:[{value:"\u67e5\u627e\u7f3a\u5931\u7684\u6570\u5b57",id:"\u67e5\u627e\u7f3a\u5931\u7684\u6570\u5b57",children:[],level:3}],level:2},{value:"null \u5b89\u5168\u7684 json \u63d0\u53d6",id:"null-\u5b89\u5168\u7684-json-\u63d0\u53d6",children:[],level:2},{value:"Functions",id:"functions",children:[{value:"table_size",id:"table_size",children:[],level:3},{value:"try_date",id:"try_date",children:[],level:3},{value:"tab_sync_id_seq",id:"tab_sync_id_seq",children:[],level:3}],level:2},{value:"\u67e5\u8be2\u5916\u952e\u548c\u7d22\u5f15",id:"\u67e5\u8be2\u5916\u952e\u548c\u7d22\u5f15",children:[],level:2},{value:"\u7d22\u5f15\u4f7f\u7528\u60c5\u51b5",id:"\u7d22\u5f15\u4f7f\u7528\u60c5\u51b5",children:[],level:2}],d={toc:c};function u(e){var n=e.components,t=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/static/functions-string.html"},"String Functions and Operators")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://hakibenita.com/postgresql-unknown-features"},"Lesser Known PostgreSQL Features")),(0,l.kt)("li",{parentName:"ul"},"\u5e38\u7528\u51fd\u6570",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"quote_literal")," - \u907f\u514d\u6ce8\u5165"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'format(formatstr text [, formatarg "any" [, ...] ])'),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%[position][flags][width]type"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"type",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"s \u7b80\u5355\u5b57\u7b26\u4e32, null \u8f93\u51fa\u7a7a\u5b57\u7b26\u4e32"),(0,l.kt)("li",{parentName:"ul"},"I \u4f5c\u4e3a SQL \u7684\u6807\u8bc6\u7b26\u53ef\u80fd\u4f1a\u52a0\u53cc\u5f15\u53f7, \u4e0d\u5141\u8bb8 null, \u7b49\u540c\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"quote_ident")),(0,l.kt)("li",{parentName:"ul"},"L \u4f5c\u4e3a SQL \u4e2d\u7684\u6587\u672c\u5bf9\u5f85\u8fdb\u884c\u52a0\u5f15\u53f7, null \u8f93\u51fa NULL, \u7b49\u540c\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"quote_nullable")))))),(0,l.kt)("li",{parentName:"ul"},"\u683c\u5f0f\u5316\u5b57\u7b26\u4e32"),(0,l.kt)("li",{parentName:"ul"},"\u6784\u5efa SQL")))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u5305\u542b\u5176\u4ed6\u8868\u7684\u5b9a\u4e49\nCREATE TABLE test_new (LIKE test_old INCLUDING ALL);\n")),(0,l.kt)("h2",{id:"json-\u6570\u7ec4\u53bb\u91cd"},"json \u6570\u7ec4\u53bb\u91cd"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'select distinct jsonb_array_elements(v)#>>\'{}\'\nfrom (select \'[\n  "1",\n  "2"\n]\'::jsonb union select \'[\n  "1",\n  "4"\n]\'::jsonb) t(v);\n')),(0,l.kt)("h2",{id:"\u6570\u636e\u8f6c\u6362"},"\u6570\u636e\u8f6c\u6362"),(0,l.kt)("p",null,"array to rows unset"),(0,l.kt)("h2",{id:"\u5b57\u7b26\u4e32"},"\u5b57\u7b26\u4e32"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select substring('abcdefgh' from n for 2) from generate_series(1, length( 'abcdefgh' ), 2) n;\n")),(0,l.kt)("h2",{id:"\u7edf\u8ba1"},"\u7edf\u8ba1"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/postgres-plr/plr"},"https://github.com/postgres-plr/plr")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.joeconway.com/presentations/oscon-pres-2003-1.pdf"},"https://www.joeconway.com/presentations/oscon-pres-2003-1.pdf"),"\nPostgreSQL-embedded Statistical\nAnalysis with PL/R\nPL/R User\u2019s Guide - R Procedural\nLanguage\n",(0,l.kt)("a",{parentName:"p",href:"http://www.joeconway.com/plr/doc/plr-US.pdf"},"http://www.joeconway.com/plr/doc/plr-US.pdf")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://www.joeconway.com/plr/"},"http://www.joeconway.com/plr/")),(0,l.kt)("h2",{id:"\u673a\u5668\u5b66\u4e60"},"\u673a\u5668\u5b66\u4e60"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://madlib.apache.org/"},"http://madlib.apache.org/"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://wiki.postgresql.org/wiki/Ecosystem:Machine_learning"},"https://wiki.postgresql.org/wiki/Ecosystem:Machine_learning")),(0,l.kt)("p",null,"/usr/local/madlib/bin/madpack -s madlib -p postgres -c ","[user[/password]@][host]","[:port][/database]"," install"),(0,l.kt)("p",null,"MADlib works with Python 2.6 and 2.7. Currently, Python 3.x is not supported."),(0,l.kt)("h2",{id:"uuid"},"UUID"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE EXTENSION IF NOT EXISTS pgcrypto;\nSELECT gen_random_uuid();\n\nCREATE EXTENSION IF NOT EXISTS uuid-ossp;\nSELECT uuid_generate_v4();\n")),(0,l.kt)("h2",{id:"\u5546\u4e1a"},"\u5546\u4e1a"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.cybertec-postgresql.com/"},"https://www.cybertec-postgresql.com/")),(0,l.kt)("h2",{id:"\u6570\u636e\u8fc1\u79fb"},"\u6570\u636e\u8fc1\u79fb"),(0,l.kt)("p",null,"psql source_database -c 'COPY table TO stdout' | psql target_database -c 'COPY table FROM stdin'"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE new_database TEMPLATE original_database;\n\nINSERT INTO t(a, b, c)\nSELECT a, b, c FROM dblink('host=xxx user=xxx password=xxx dbname=xxx', 'SELECT a, b, c FROM t') AS x(a integer, b integer, c integer)\n")),(0,l.kt)("h2",{id:"\u56fe\u64cd\u4f5c"},"\u56fe\u64cd\u4f5c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u9012\u5f52\u67e5\u627e\u81ea\u5df1\u548c\u6240\u6709\u5b50\u7ea7\nWITH RECURSIVE children(id) AS (\n  SELECT *\n  FROM items\n  WHERE id = 470569\n  UNION ALL\n  SELECT t.*\n  FROM children s, items t\n  WHERE t.parent = s.id\n) SELECT *\n  FROM children;\n\n-- \u9012\u5f52\u67e5\u627e\u81ea\u5df1\u548c\u6240\u6709\u5b50\u7ea7\u5e76\u4f53\u73b0\u5c42\u7ea7\u5173\u7cfb\nWITH RECURSIVE children(id) AS (\n  SELECT\n    *,\n    id || '' AS path\n  FROM items\n  WHERE id = 470569\n  UNION ALL\n  SELECT\n    t.*,\n    s.path || '/' || t.id\n  FROM children s, items t\n  WHERE t.parent = s.id\n) SELECT *\n  FROM children;\n\n-- \u67e5\u627e\u6240\u6709\u7236\u7ea7\n-- \u6620\u5c04 p \u662f\u5fc5\u8981\u7684, \u5426\u5219\u4f1a\u6709\u6b67\u4e49\nWITH RECURSIVE parents(p) AS (\n  SELECT parent as p,*\n  FROM items\n  WHERE id = 471118\n  UNION ALL\n  SELECT t.parent as p,t.*\n  FROM parents s, items t\n  WHERE t.id = s.p\n) SELECT *\n  FROM parents;\n")),(0,l.kt)("h3",{id:"\u67e5\u627e\u7f3a\u5931\u7684\u6570\u5b57"},"\u67e5\u627e\u7f3a\u5931\u7684\u6570\u5b57"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- find missing number\n-- mytab(id,cid) --  find missing cid\nSELECT num AS missing\nFROM generate_series(1, (SELECT max(cid) FROM mytab)) t(num)\n  LEFT JOIN mytab tab ON (t.num = tab.cid)\nWHERE tab.cid IS NULL;\n")),(0,l.kt)("h2",{id:"null-\u5b89\u5168\u7684-json-\u63d0\u53d6"},"null \u5b89\u5168\u7684 json \u63d0\u53d6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE OR REPLACE FUNCTION json_fetch(object json, variadic nodes text[])\nRETURNS json AS $$\nDECLARE\n  result json := object;\n  k text;\nBEGIN\n  foreach k in array nodes loop\n    if (result ->> k) is null then\n      result := null;\n      exit;\n    end if;\n\n    result := result -> k;\n  end loop;\n\n  return result;\nEND;\n$$ LANGUAGE plpgsql;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT id,\n  coalesce(\n    json_fetch(author, 'address', 'street_name')::text, 'No address'\n  ) AS street_name\nFROM books;\n")),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"table_size"},"table_size"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u67e5\u770b\u8868\u7a7a\u95f4\u5927\u5c0f\u4fe1\u606f\n-- table_size show statistic table size\nCREATE VIEW table_size AS\n  SELECT\n    *,\n    pg_size_pretty(total_bytes) AS total,\n    pg_size_pretty(index_bytes) AS INDEX,\n    pg_size_pretty(toast_bytes) AS toast,\n    pg_size_pretty(table_bytes) AS TABLE\n  FROM (\n         SELECT\n           *,\n           total_bytes - index_bytes - COALESCE(toast_bytes, 0) AS table_bytes\n         FROM (\n                SELECT\n                  c.oid,\n                  nspname                               AS table_schema,\n                  relname                               AS TABLE_NAME,\n                  c.reltuples                           AS row_estimate,\n                  pg_total_relation_size(c.oid)         AS total_bytes,\n                  pg_indexes_size(c.oid)                AS index_bytes,\n                  pg_total_relation_size(reltoastrelid) AS toast_bytes\n                FROM pg_class c\n                  LEFT JOIN pg_namespace n ON n.oid = c.relnamespace\n                WHERE relkind = 'r'\n              ) a\n       ) a;\n")),(0,l.kt)("h3",{id:"try_date"},"try_date"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u5c06\u7ed9\u5b9a\u7684\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u65e5\u671f, \u5982\u679c\u5931\u8d25\u8fd4\u56de null\n-- try to convert a text to date, return null if date invalid\nCREATE OR REPLACE FUNCTION try_date(s TEXT)\n  RETURNS DATE\nAS $$\nBEGIN\n  RETURN s :: DATE;\n  EXCEPTION WHEN OTHERS\n  THEN\n    RETURN NULL;\nEND;\n$$ LANGUAGE plpgsql;\n")),(0,l.kt)("h3",{id:"tab_sync_id_seq"},"tab_sync_id_seq"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u540c\u6b65\u7ed9\u5b9a\u8868\u7684 id \u5e8f\u5217\u503c\nCREATE OR REPLACE FUNCTION tab_sync_id_seq(tab TEXT)\n  RETURNS BIGINT\nLANGUAGE plpgsql\nAS $$\nDECLARE\n  seq TEXT;\nBEGIN\n  seq = tab || '_id_seq';\n  --   EXECUTE 'LOCK TABLE ' || tab || ' IN EXCLUSIVE MODE';\n  EXECUTE 'SELECT setval('' ' || seq || ' '', COALESCE((SELECT MAX(id)\n                                            FROM ' || tab || '), 1), FALSE)';\n  RETURN nextval(seq);\nEND;\n$$;\n")),(0,l.kt)("h2",{id:"\u67e5\u8be2\u5916\u952e\u548c\u7d22\u5f15"},"\u67e5\u8be2\u5916\u952e\u548c\u7d22\u5f15"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e00\u5b9a\u8981\u7d22\u5f15\u5916\u952e"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.cybertec-postgresql.com/en/index-your-foreign-key/"},"ARE YOUR FOREIGN KEYS INDEXED?"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT c.conrelid::regclass                    AS \"table\",\n    /* list of key column names in order */\n       string_agg(a.attname, ',' ORDER BY x.n) AS columns,\n       pg_catalog.pg_size_pretty(\n               pg_catalog.pg_relation_size(c.conrelid)\n           )                                   AS size,\n       c.conname                               AS constraint,\n       c.confrelid::regclass                   AS referenced_table\nFROM pg_catalog.pg_constraint c\n         /* enumerated key column numbers per foreign key */\n         CROSS JOIN LATERAL\n    unnest(c.conkey) WITH ORDINALITY AS x(attnum, n)\n    /* name for each key column */\n         JOIN pg_catalog.pg_attribute a\n              ON a.attnum = x.attnum\n                  AND a.attrelid = c.conrelid\nWHERE NOT EXISTS\n    /* is there a matching index for the constraint? */\n    (SELECT 1\n     FROM pg_catalog.pg_index i\n     WHERE i.indrelid = c.conrelid\n         /* the first index columns must be the same as the\n            key columns, but order doesn't matter */\n       AND (i.indkey::smallint[])[0:cardinality(c.conkey) - 1]\n         OPERATOR (pg_catalog.@>) c.conkey)\n  AND c.contype = 'f'\nGROUP BY c.conrelid, c.conname, c.confrelid\nORDER BY pg_catalog.pg_relation_size(c.conrelid) DESC;\n")),(0,l.kt)("h2",{id:"\u7d22\u5f15\u4f7f\u7528\u60c5\u51b5"},"\u7d22\u5f15\u4f7f\u7528\u60c5\u51b5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT nspname,\n       relname,\n       round(100 * pg_relation_size(indexrelid) /\n             pg_relation_size(indrelid)) / 100      AS index_ratio,\n       pg_size_pretty(pg_relation_size(indexrelid)) AS index_size,\n       pg_size_pretty(pg_relation_size(indrelid))   AS table_size\nFROM pg_index I\n       LEFT JOIN pg_class C ON (C.oid = I.indexrelid)\n       LEFT JOIN pg_namespace N ON (N.oid = C.relnamespace)\nWHERE nspname NOT IN ('pg_catalog', 'information_schema', 'pg_toast')\n  AND C.relkind = 'i'\n  AND pg_relation_size(indrelid) > 0;\n")))}u.isMDXComponent=!0}}]);