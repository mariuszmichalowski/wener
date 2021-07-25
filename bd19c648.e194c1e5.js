(window.webpackJsonp=window.webpackJsonp||[]).push([[836],{1169:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||l;return n?r.a.createElement(d,s(s({ref:t},o),{},{components:n})):r.a.createElement(d,s({ref:t},o))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var o=2;o<l;o++)c[o]=n[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},909:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),l=(n(0),n(1169)),c={id:"faq",title:"\u5e38\u89c1\u95ee\u9898"},s={unversionedId:"db/relational/postgresql/faq",id:"db/relational/postgresql/faq",isDocsHomePage:!1,title:"\u5e38\u89c1\u95ee\u9898",description:"PostgreSQL FAQ",source:"@site/notes/db/relational/postgresql/postgresql-faq.md",slug:"/db/relational/postgresql/faq",permalink:"/notes/db/relational/postgresql/faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/relational/postgresql/postgresql-faq.md",version:"current",sidebar:"docs",previous:{title:"PostgreSQL Extension",permalink:"/notes/db/relational/postgresql/postgresql-extension"},next:{title:"PostgreSQL FDW",permalink:"/notes/db/relational/postgresql/postgresql-fdw"}},i=[{value:"\u9650\u5236",id:"\u9650\u5236",children:[]},{value:"\u670d\u52a1\u91cd\u8f7d",id:"\u670d\u52a1\u91cd\u8f7d",children:[]},{value:"\u7ef4\u62a4",id:"\u7ef4\u62a4",children:[]},{value:"\u5347\u7ea7",id:"\u5347\u7ea7",children:[]},{value:"Dump",id:"dump",children:[]},{value:"CTID",id:"ctid",children:[]},{value:"\u65f6\u533a\u95ee\u9898",id:"\u65f6\u533a\u95ee\u9898",children:[]},{value:"NULL \u5b57\u7b26 / <code>\0</code> \u5b57\u7b26",id:"null-\u5b57\u7b26--0-\u5b57\u7b26",children:[]},{value:"\u5207\u6362\u7528\u6237",id:"\u5207\u6362\u7528\u6237",children:[]},{value:"\u5207\u6362\u6570\u636e\u5e93",id:"\u5207\u6362\u6570\u636e\u5e93",children:[]},{value:"\u5bc6\u7801\u5b58\u50a8",id:"\u5bc6\u7801\u5b58\u50a8",children:[]},{value:"Calculating and Saving Space in PostgreSQL",id:"calculating-and-saving-space-in-postgresql",children:[]},{value:"unsupported Unicode escape sequence",id:"unsupported-unicode-escape-sequence",children:[]},{value:"psql \u5f00\u542f\u65f6\u95f4\u8bb0\u5f55",id:"psql-\u5f00\u542f\u65f6\u95f4\u8bb0\u5f55",children:[]},{value:"\u6570\u7ec4\u7d22\u5f15",id:"\u6570\u7ec4\u7d22\u5f15",children:[]},{value:"\u6570\u7ec4\u5916\u952e",id:"\u6570\u7ec4\u5916\u952e",children:[]},{value:"ERROR: cannot alter type of a column used by a view or rule",id:"error-cannot-alter-type-of-a-column-used-by-a-view-or-rule",children:[]},{value:"\u65f6\u95f4\u6233\u4e0a\u7684\u6beb\u79d2\u5904\u7406",id:"\u65f6\u95f4\u6233\u4e0a\u7684\u6beb\u79d2\u5904\u7406",children:[]},{value:"\u67e5\u8be2\u8bed\u53e5\u7684\u6700\u5927\u5927\u5c0f",id:"\u67e5\u8be2\u8bed\u53e5\u7684\u6700\u5927\u5927\u5c0f",children:[]},{value:"IN vs any",id:"in-vs-any",children:[]},{value:"\u91cd\u7f6e schema",id:"\u91cd\u7f6e-schema",children:[]},{value:"psql \u4f7f\u7528\u8fde\u63a5\u5b57\u7b26\u4e32",id:"psql-\u4f7f\u7528\u8fde\u63a5\u5b57\u7b26\u4e32",children:[]},{value:"query has no destination for result data",id:"query-has-no-destination-for-result-data",children:[]}],o={toc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"postgresql-faq"},"PostgreSQL FAQ"),Object(l.b)("h2",{id:"\u9650\u5236"},"\u9650\u5236"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"db \u540d\u5b57",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6700\u957f 63 byte")))),Object(l.b)("h2",{id:"\u670d\u52a1\u91cd\u8f7d"},"\u670d\u52a1\u91cd\u8f7d"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"pg_ctl")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"su postgres\npg_ctl reload\n")),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"sql")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"psql -U postgres\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sql"},"SELECT pg_reload_conf();\n")),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},"service")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"service postgresql restart\n")),Object(l.b)("h2",{id:"\u7ef4\u62a4"},"\u7ef4\u62a4"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://gist.github.com/rgreenjr/3637525"},"postgres_queries_and_commands.sql")," - Useful PostgreSQL Queries and Commands")),Object(l.b)("h2",{id:"\u5347\u7ea7"},"\u5347\u7ea7"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.xf.is/2019/02/26/convert-postgresql-cluster-to-use-page-checksums/"},"https://www.xf.is/2019/02/26/convert-postgresql-cluster-to-use-page-checksums/"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"show data_checksums"))))),Object(l.b)("p",null,"\u53ef\u4ee5\u6784\u9020\u4e00\u4e2a\u5305\u542b\u6240\u6709\u7248\u672c\u7684\u955c\u50cf\uff0c\u7136\u540e\u8fdb\u884c\u5347\u7ea7 - ",Object(l.b)("a",{parentName:"p",href:"https://github.com/postgres/pgadmin4/blob/master/Dockerfile"},"Dockerfile")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# https://github.com/tianon/docker-postgres-upgrade\ndocker run --rm \\\n    -v PGDATAOLD:/var/lib/postgresql/OLD/data \\\n    -v PGDATANEW:/var/lib/postgresql/NEW/data \\\n    tianon/postgres-upgrade:OLD-to-NEW\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"pg_upgrade --old-datadir /var/lib/pgsql/data/ --new-datadir /var/lib/pgsql/10/data/ \\\n--old-bindir /usr/bin/ --new-bindir /usr/pgsql-10/bin/\n")),Object(l.b)("h2",{id:"dump"},"Dump"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/app-pg-dumpall.html"},"pg_dumpall")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/app-pgdump.html"},"https://www.postgresql.org/docs/current/app-pgdump.html")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/app-pgrestore.html"},"https://www.postgresql.org/docs/current/app-pgrestore.html")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.percona.com/blog/2019/03/27/postgresql-upgrade-using-pg_dump-pg_restore/"},"https://www.percona.com/blog/2019/03/27/postgresql-upgrade-using-pg_dump-pg_restore/"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# -Z compress\npg_dump -Fc -Z 9 -j $(nproc) --file=file.dump myDb\npg_restore -Fc -j $(nproc)  file.dump\n")),Object(l.b)("h2",{id:"ctid"},"CTID"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://dba.stackexchange.com/questions/203989/what-is-the-data-type-of-the-ctid-system-column-in-postgres"},"https://dba.stackexchange.com/questions/203989/what-is-the-data-type-of-the-ctid-system-column-in-postgres")),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://postgresql.verite.pro/blog/2019/04/24/oid-column.html"},"https://postgresql.verite.pro/blog/2019/04/24/oid-column.html")),Object(l.b)("h2",{id:"\u65f6\u533a\u95ee\u9898"},"\u65f6\u533a\u95ee\u9898"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"PG \u5b9e\u9645\u5b58\u50a8\u7684\u662f UTC \u4e0d\u4f1a\u5b58\u50a8\u65f6\u533a"),Object(l.b)("li",{parentName:"ul"},"\u65f6\u533a\u4fe1\u606f\u4f1a\u7528\u4e8e\u8f6c\u6362")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sql"},"-- \u5f53\u524d\u65f6\u533a\nshow timezone;\nshow timezone_abbreviations;\n-- \u53ef\u7528\u65f6\u533a\nSELECT * FROM pg_timezone_names;\n\n-- date \u8f6c tz \u5e94\u8be5\u662f\u6b63\u5e38\u7684\nselect ('2020-01-02'::date)::TIMESTAMPTZ;\n\n-- session \u6709\u6548\nSET TIME ZONE TO 'UTC';\nSET TIMEZONE TO 'UTC';\n-- \u4e5f\u53ef\u4ee5\u76f4\u63a5\u6307\u5b9a offset\nSET timezone=-4;\n\n-- \u5f53\u524d\u65f6\u95f4\n-- UTC \u53ef\u4ee5\u4f7f\u7528 localtime\nSELECT LOCALTIMESTAMP AT TIME ZONE 'Asia/Shanghai';\n-- timestamp \u4e0d\u663e\u793a TZ \u4fe1\u606f\nSELECT NOW()::TIMESTAMP;\n-- current_timestamp \u662f timestamptz\n-- \u53ef\u4ee5\u63d0\u53d6 tz \u4fe1\u606f \u79d2\u3001\u5c0f\u65f6\nselect current_timestamp,\n       pg_typeof(current_timestamp),\n       extract(timezone from current_timestamp::timestamptz),\n       extract(timezone_h from current_timestamp::timestamptz)\n;\n\n-- db \u914d\u7f6e\nALTER SYSTEM SET timezone = 'UTC';\n\n-- \u4fee\u6539\u89d2\u8272\u65f6\u533a\nALTER ROLE my_role SET TIMEZONE = '+1';\n")),Object(l.b)("h2",{id:"null-\u5b57\u7b26--0-\u5b57\u7b26"},"NULL \u5b57\u7b26 / ",Object(l.b)("inlineCode",{parentName:"h2"},"\\0")," \u5b57\u7b26"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"PG \u4e0d\u5141\u8bb8\u5b57\u7b26\u4e32\u5305\u542b ",Object(l.b)("inlineCode",{parentName:"li"},"\\0")),Object(l.b)("li",{parentName:"ul"},"\u4f20\u5165\u4e4b\u524d\u66ff\u6362\u6216\u7528 bytea \u5b58\u50a8"),Object(l.b)("li",{parentName:"ul"},"JSON \u4e5f\u4e0d\u5141\u8bb8\u5305\u542b\u7a7a\u5b57\u7b26")),Object(l.b)("h2",{id:"\u5207\u6362\u7528\u6237"},"\u5207\u6362\u7528\u6237"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sql"},"set role user;\n")),Object(l.b)("h2",{id:"\u5207\u6362\u6570\u636e\u5e93"},"\u5207\u6362\u6570\u636e\u5e93"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u53ea\u80fd\u91cd\u65b0\u94fe\u63a5")),Object(l.b)("h2",{id:"\u5bc6\u7801\u5b58\u50a8"},"\u5bc6\u7801\u5b58\u50a8"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/pgcrypto.html"},"pgcrypto")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.meetspaceapp.com/2016/04/12/passwords-postgresql-pgcrypto.html"},"Hashed Passwords with PostgreSQL's pgcrypto")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://stackoverflow.com/questions/15733196/where-2x-prefix-are-used-in-bcrypt"},"https://stackoverflow.com/questions/15733196/where-2x-prefix-are-used-in-bcrypt"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sql"},"-- \u751f\u6210 Hash\nselect crypt('12345', gen_salt('bf', 8));\n-- \u5224\u65ad\u5bc6\u7801\u76f8\u7b49\nselect crypt('12345', password) = password\n\n-- PG \u65e0\u6cd5\u5904\u7406 2b - \u6216\u8005\u63d2\u5165\u65f6\u4fee\u6539\u4e3a 2a\nselect *\nfrom users\nwhere username = 'admin'\n  and  regexp_replace(password,'^[$]2b','$2a') = crypt('admin', regexp_replace(salt,'^[$]2b','$2a'));\n")),Object(l.b)("h2",{id:"calculating-and-saving-space-in-postgresql"},"Calculating and Saving Space in PostgreSQL"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://stackoverflow.com/a/7431468/1870054"},"Column Tetris")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=16471242"},"HN")),Object(l.b)("li",{parentName:"ul"},"\u6bcf\u79cd\u6570\u636e\u7c7b\u578b\u90fd\u6709\u7279\u5b9a\u7684\u5bf9\u9f50\u8981\u6c42 - ",Object(l.b)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/static/catalog-pg-type.html"},"pg-type")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/static/app-pgcontroldata.html"},"pg_controldata"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u83b7\u53d6\u6570\u636e\u7684\u65cf\u7fa4\u4fe1\u606f"),Object(l.b)("li",{parentName:"ul"},"Maximum data alignment \u663e\u793a\u6570\u636e\u7684\u5bf9\u9f50\u8981\u6c42"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/static/functions-admin.html#FUNCTIONS-ADMIN-DBSIZE"},"Database Object Size Functions"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"pg_controldata data/\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sql"},"-- \u5217\u5bbd\nselect pg_column_size('int');\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"pg_control version number:            1002\nCatalog version number:               201707211\nDatabase system identifier:           6502788473953883273\nDatabase cluster state:               in production\npg_control last modified:             \u4e94  3/ 9 12:04:15 2018\nLatest checkpoint location:           0/32F8A88\nPrior checkpoint location:            0/32DA0D0\nLatest checkpoint's REDO location:    0/32F8A50\nLatest checkpoint's REDO WAL file:    000000010000000000000003\nLatest checkpoint's TimeLineID:       1\nLatest checkpoint's PrevTimeLineID:   1\nLatest checkpoint's full_page_writes: on\nLatest checkpoint's NextXID:          0:730\nLatest checkpoint's NextOID:          25609\nLatest checkpoint's NextMultiXactId:  1\nLatest checkpoint's NextMultiOffset:  0\nLatest checkpoint's oldestXID:        548\nLatest checkpoint's oldestXID's DB:   1\nLatest checkpoint's oldestActiveXID:  730\nLatest checkpoint's oldestMultiXid:   1\nLatest checkpoint's oldestMulti's DB: 1\nLatest checkpoint's oldestCommitTsXid:0\nLatest checkpoint's newestCommitTsXid:0\nTime of latest checkpoint:            \u4e94  3/ 9 12:04:12 2018\nFake LSN counter for unlogged rels:   0/1\nMinimum recovery ending location:     0/0\nMin recovery ending loc's timeline:   0\nBackup start location:                0/0\nBackup end location:                  0/0\nEnd-of-backup record required:        no\nwal_level setting:                    replica\nwal_log_hints setting:                off\nmax_connections setting:              100\nmax_worker_processes setting:         8\nmax_prepared_xacts setting:           200\nmax_locks_per_xact setting:           64\ntrack_commit_timestamp setting:       off\nMaximum data alignment:               8\nDatabase block size:                  8192\nBlocks per segment of large relation: 131072\nWAL block size:                       8192\nBytes per WAL segment:                16777216\nMaximum length of identifiers:        64\nMaximum columns in an index:          32\nMaximum size of a TOAST chunk:        1996\nSize of a large-object chunk:         2048\nDate/time type storage:               64-bit integers\nFloat4 argument passing:              by value\nFloat8 argument passing:              by value\nData page checksum version:           1\nMock authentication nonce:            32f8310a0cf344f7c1432dd733d3cf6065b748697485724af31fbaf7605f50bc\n")),Object(l.b)("h2",{id:"unsupported-unicode-escape-sequence"},"unsupported Unicode escape sequence"),Object(l.b)("p",null,"\u4e00\u822c\u662f\u56e0\u4e3a ",Object(l.b)("inlineCode",{parentName:"p"},"\\u0000"),", \u66ff\u6362\u6389\u5373\u53ef, pg \u7684\u5b57\u7b26\u4e32\u4e0d\u652f\u6301 ",Object(l.b)("inlineCode",{parentName:"p"},"\\u0000")),Object(l.b)("h2",{id:"psql-\u5f00\u542f\u65f6\u95f4\u8bb0\u5f55"},"psql \u5f00\u542f\u65f6\u95f4\u8bb0\u5f55"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"\\timing"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# \u76f4\u63a5\u547d\u4ee4\u884c\u4f7f\u7528\npsql -c '\\timing' -c 'select 1'\n")),Object(l.b)("h2",{id:"\u6570\u7ec4\u7d22\u5f15"},"\u6570\u7ec4\u7d22\u5f15"),Object(l.b)("p",null,"GIN \u7d22\u5f15\u662f\u53cd\u5411\u7d22\u5f15(inverted indexes), \u9002\u7528\u4e8e\u5305\u542b\u591a\u4e2a\u503c\u7684\u60c5\u51b5."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u7684\u64cd\u4f5c\u7b26",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<@")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"@>")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"=")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"&&"))))),Object(l.b)("h2",{id:"\u6570\u7ec4\u5916\u952e"},"\u6570\u7ec4\u5916\u952e"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301")),Object(l.b)("h2",{id:"error-cannot-alter-type-of-a-column-used-by-a-view-or-rule"},"ERROR: cannot alter type of a column used by a view or rule"),Object(l.b)("p",null,"\u5fc5\u987b\u8981\u5148 drop view \u518d\u64cd\u4f5c, \u76ee\u524d\u6ca1\u6709\u6bd4\u8f83\u597d\u7684\u64cd\u4f5c\u65b9\u5f0f, \u4f46\u64cd\u4f5c\u90fd\u53ef\u4ee5\u5728\u4e00\u4e2a\u4e8b\u52a1\u4e2d\u5b8c\u6210"),Object(l.b)("p",null,"\u6709\u4e9b\u4fee\u6539\u53ef\u4ee5\u901a\u8fc7\u76f4\u63a5\u4fee\u6539 pg_attribute \u6765\u8fbe\u5230\u76ee\u7684, \u4f46\u662f\u975e\u5e38\u4e0d\u5efa\u8bae."),Object(l.b)("h2",{id:"\u65f6\u95f4\u6233\u4e0a\u7684\u6beb\u79d2\u5904\u7406"},"\u65f6\u95f4\u6233\u4e0a\u7684\u6beb\u79d2\u5904\u7406"),Object(l.b)("p",null,"\u76ee\u524d\u6ca1\u6709\u6bd4\u8f83\u597d\u7684\u5904\u7406\u65b9\u5f0f"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sql"},"-- \u5c06\u4e00\u4e2a\u6beb\u79d2\u7684 ts \u8f6c\u4e3a timestamp \u7c7b\u578b\nALTER TABLE  my_info\n  ALTER COLUMN tstmp TYPE TIMESTAMP USING to_timestamp(tstmp / 1000) + ((tstmp % 1000) || ' milliseconds') :: INTERVAL;\n")),Object(l.b)("h2",{id:"\u67e5\u8be2\u8bed\u53e5\u7684\u6700\u5927\u5927\u5c0f"},"\u67e5\u8be2\u8bed\u53e5\u7684\u6700\u5927\u5927\u5c0f"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u76ee\u524d\u4e3a 1G"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://dba.stackexchange.com/q/131399"},"Is there a maximum length constraint for a postgres query?")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/postgres/postgres/blob/REL_10_1/src/common/psprintf.c#L28"},"src/common/psprintf.c#L28"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c"},"#define MaxAllocSize   ((Size) 0x3fffffff) /* 1 gigabyte - 1 */\n")),Object(l.b)("h2",{id:"in-vs-any"},"IN vs any"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://stackoverflow.com/a/28995514/1870054"},"https://stackoverflow.com/a/28995514/1870054")),Object(l.b)("li",{parentName:"ul"},"IN",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Bitmap \u626b\u63cf"),Object(l.b)("li",{parentName:"ul"},"\u6570\u636e\u91cf\u5927\u65f6, \u6267\u884c\u65f6\u95f4\u66f4\u6162\u8ba1\u5212\u65f6\u95f4\u66f4\u4e45"))),Object(l.b)("li",{parentName:"ul"},"ANY",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4f1a\u4f7f\u7528\u4e34\u65f6\u8868\u505a JOIN"),Object(l.b)("li",{parentName:"ul"},"\u6570\u636e\u91cf\u5927\u65f6, \u6267\u884c\u65f6\u95f4\u66f4\u4e45\u8ba1\u5212\u65f6\u95f4\u66f4\u5feb")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test (\n  id  BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,\n  val TEXT\n);\n\n-- \u63d2\u5165\u6d4b\u8bd5\u6570\u636e\nDO\n$$\nBEGIN\n  FOR i IN 1..100000 LOOP\n    INSERT INTO test (val) VALUES ('val#' || i);\n  END LOOP;\nEND\n$$;\n\nEXPLAIN SELECT *\n        FROM test\n        WHERE id IN (1, 2, 3);\n\nEXPLAIN SELECT *\n        FROM test\n        WHERE id = ANY (VALUES (1), (2), (3));\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'# IN\nBitmap Heap Scan on test  (cost=12.86..19.97 rows=3 width=40)\n  Recheck Cond: (id = ANY (\'{1,2,3}\'::bigint[]))\n  ->  Bitmap Index Scan on test_pkey  (cost=0.00..12.86 rows=3 width=0)\n        Index Cond: (id = ANY (\'{1,2,3}\'::bigint[]))\n\n# ANY\nNested Loop  (cost=0.32..25.00 rows=3 width=40)\n  ->  HashAggregate  (cost=0.05..0.08 rows=3 width=4)\n        Group Key: ""*VALUES*"".column1\n        ->  Values Scan on ""*VALUES*""  (cost=0.00..0.04 rows=3 width=4)\n  ->  Index Scan using test_pkey on test  (cost=0.28..8.29 rows=1 width=40)\n        Index Cond: (id = ""*VALUES*"".column1)\n')),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-SQL"},"-- \u6d4b\u8bd5 IN\nDO\n$$\nDECLARE\n  x   TEXT = '';\n  r   REFCURSOR;\n  rec RECORD;\nBEGIN\n  x = '0';\n  FOR i IN 1..1000 LOOP\n    x = x || ',' || i;\n  END LOOP;\n  OPEN r FOR EXECUTE 'EXPLAIN ANALYSE SELECT *\n        FROM test\n        WHERE id IN (' || x || ')';\n\n  FOR i IN 1..6 LOOP\n    FETCH r INTO rec;\n    RAISE NOTICE 'ROW %', rec;\n  END LOOP;\nEND\n$$;\n\n-- \u6d4b\u8bd5 ANY\nDO\n$$\nDECLARE\n  x   TEXT;\n  r   REFCURSOR;\n  rec RECORD;\nBEGIN\n  x = '(0)';\n  FOR i IN 1..1000 LOOP\n    x = x || ',(' || i || ')';\n  END LOOP;\n  OPEN r FOR EXECUTE 'EXPLAIN ANALYSE SELECT *\n        FROM test\n        WHERE id = any (VALUES ' || x || ')';\n\n  FOR i IN 1..10 LOOP\n    FETCH r INTO rec;\n    RAISE NOTICE 'ROW %', rec;\n  END LOOP;\nEND\n$$;\n")),Object(l.b)("h2",{id:"\u91cd\u7f6e-schema"},"\u91cd\u7f6e schema"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sql"},"DROP SCHEMA public CASCADE;\nCREATE SCHEMA public;\n\n-- 9.3+ \u53ef\u80fd\u9700\u8981\nGRANT ALL ON SCHEMA public TO postgres;\nGRANT ALL ON SCHEMA public TO public;\n")),Object(l.b)("h2",{id:"psql-\u4f7f\u7528\u8fde\u63a5\u5b57\u7b26\u4e32"},"psql \u4f7f\u7528\u8fde\u63a5\u5b57\u7b26\u4e32"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'psql -Atx "host=localhost port=5432 dbname=taop user=taop" -c \'select current_date\'\n\n# -d database\npsql -d "host=localhost port=5432 dbname=taop user=taop"\n')),Object(l.b)("h2",{id:"query-has-no-destination-for-result-data"},"query has no destination for result data"),Object(l.b)("p",null,"\u5b58\u50a8\u8fc7\u7a0b\u5982\u679c\u4e0d\u9700\u8981\u7ed3\u679c\uff0c\u5219\u4e0d\u8981\u7528 select \u7528 execute"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sql"},"create or replace function sync_events_trigger() returns trigger\nas\n$$\nbegin\n  -- \u4e0d\u8981\u4f7f\u7528 select\uff0c\u4f7f\u7528 execute\n  execute sync_events();\nend;\n$$ language plpgsql;\n")))}p.isMDXComponent=!0}}]);