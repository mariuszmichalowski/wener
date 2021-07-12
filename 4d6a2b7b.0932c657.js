(window.webpackJsonp=window.webpackJsonp||[]).push([[316],{1129:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),o=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=o(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,b=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=o(a),m=r,O=s["".concat(b,".").concat(m)]||s[m]||u[m]||l;return a?n.a.createElement(O,c(c({ref:t},p),{},{components:a})):n.a.createElement(O,c({ref:t},p))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,b=new Array(l);b[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,b[1]=c;for(var p=2;p<l;p++)b[p]=a[p];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},390:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return o}));var r=a(3),n=a(8),l=(a(0),a(1129)),b={id:"fts",title:"PostgreSQL \u5168\u6587\u68c0\u7d22"},c={unversionedId:"db/relational/postgresql/fts",id:"db/relational/postgresql/fts",isDocsHomePage:!1,title:"PostgreSQL \u5168\u6587\u68c0\u7d22",description:"* Do you need a Full-Text Search in PostgreSQL ?",source:"@site/notes/db/relational/postgresql/postgresql-fts.md",slug:"/db/relational/postgresql/fts",permalink:"/notes/db/relational/postgresql/fts",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/relational/postgresql/postgresql-fts.md",version:"current",sidebar:"docs",previous:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/notes/db/relational/postgresql/faq"},next:{title:"Pg SQL \u5e38\u89c1\u95ee\u9898",permalink:"/notes/db/relational/postgresql/postgresql-sql-faq"}},i=[{value:"pg_trgm",id:"pg_trgm",children:[]},{value:"ELasticsearch",id:"elasticsearch",children:[]},{value:"\u6a21\u7cca\u641c\u7d22",id:"\u6a21\u7cca\u641c\u7d22",children:[]},{value:"pgroonga",id:"pgroonga",children:[]},{value:"zhparser",id:"zhparser",children:[]},{value:"\u5185\u5efa\u5168\u6587\u641c\u7d22",id:"\u5185\u5efa\u5168\u6587\u641c\u7d22",children:[]}],p={toc:i};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.postgresql.eu/events/pgconfeu2018/sessions/session/2116/slides/137/pgconf.eu-2018-fts.pdf"},"Do you need a Full-Text Search in PostgreSQL ?")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"\u63a8\u8350"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u7b80\u5355\u573a\u666f - 80%: like \u6216 fuzzystrmatch",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6570\u636e\u91cf\u5c11 - \u4e1a\u52a1\u6570\u636e - \u80fd\u591f\u626b\u8868"),Object(l.b)("li",{parentName:"ul"},"\u6570\u636e\u7ecf\u5e38\u53d8\u5316"))),Object(l.b)("li",{parentName:"ul"},"\u57fa\u7840\u573a\u666f - 15%: \u5185\u5efa tssearch + \u4e2d\u6587\u5206\u8bcd\u63d2\u4ef6 - zhparser",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6570\u636e\u91cf\u5927 - \u9700\u8981\u7d22\u5f15"),Object(l.b)("li",{parentName:"ul"},"\u68c0\u7d22\u5927\u91cf\u6587\u672c"),Object(l.b)("li",{parentName:"ul"},"\u76f8\u5173\u6027\u6392\u5e8f"))),Object(l.b)("li",{parentName:"ul"},"\u6269\u5c55\u573a\u666f - 3%: \u4e0d\u8003\u8651\u4f7f\u7528\u5185\u5efaFTS\u4f7f\u7528 pgroonga",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9700\u8981\u652f\u6301\u8865\u5168\u548c\u591a\u79cd\u8bed\u8a00"))),Object(l.b)("li",{parentName:"ul"},"\u641c\u7d22\u5f15\u64ce\u573a\u666f - 2%: Solr, Elasticsearch",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4e0d\u8981\u4f7f\u7528 PG - \u5c06\u6570\u636e\u540c\u6b65\u5230\u4e13\u4e1a\u7684\u641c\u7d22\u5f15\u64ce"),Object(l.b)("li",{parentName:"ul"},"\u7d22\u5f15\u7684\u5185\u5bb9\u4e0d\u600e\u4e48\u53d8\u5316"))))),Object(l.b)("li",{parentName:"ul"},"\u53ef\u901a\u8fc7 ",Object(l.b)("a",{parentName:"li",href:"https://github.com/postgrespro/rum"},"postgrespro/rum")," \u7d22\u5f15\u63d0\u9ad8\u6548\u7387",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u57fa\u4e8e GIN \u7d22\u5f15"),Object(l.b)("li",{parentName:"ul"},"\u6392\u5e8f\u66f4\u5feb"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u989d\u5916\u5b57\u6bb5\u4fe1\u606f"),Object(l.b)("li",{parentName:"ul"},"\u6784\u5efa\u548c\u63d2\u5165\u66f4\u6162")))),Object(l.b)("h2",{id:"pg_trgm"},"pg_trgm"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5c06\u6587\u672c\u8fdb\u884c ",Object(l.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/N-gram"},"ngram")," \u5206\u8bcd"),Object(l.b)("li",{parentName:"ul"},"\u66b4\u529b\u641c\u7d22\uff0c\u53ef\u4ee5\u88ab\u7d22\u5f15"),Object(l.b)("li",{parentName:"ul"},"\u4eca\u5929\u5929\u6c14\u5f88\u597d",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"2 -> ",Object(l.b)("inlineCode",{parentName:"li"},"\u4eca\u5929 \u5929\u6c14 \u5f88\u597d")),Object(l.b)("li",{parentName:"ul"},"3 -> ",Object(l.b)("inlineCode",{parentName:"li"},"\u4eca\u5929\u5929 \u6c14\u5f88\u597d"))))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sql"},"create extension pg_trgm;\n\n-- 0.2\nselect similarity('\u4eca\u5929\u5929\u6c14\u5f88\u597d\uff0c\u4f60\u8fd8\u597d\u4e48\uff1f','\u4eca\u5929\u4f60\u597d\u4e48');\n\n\n-- \u7d22\u5f15\nCREATE TABLE words AS SELECT word FROM\n        ts_stat('SELECT to_tsvector(''simple'', bodytext) FROM documents');\nCREATE INDEX words_idx ON words USING GIN (word gin_trgm_ops);\n")),Object(l.b)("h2",{id:"elasticsearch"},"ELasticsearch"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/zombodb/zombodb"},"zombodb/zombodb"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u96c6\u6210 ES \u641c\u7d22\u548c\u5206\u6790\u80fd\u529b"),Object(l.b)("li",{parentName:"ul"},"pg 10,11"),Object(l.b)("li",{parentName:"ul"},"es 5.6,6")))),Object(l.b)("h2",{id:"\u6a21\u7cca\u641c\u7d22"},"\u6a21\u7cca\u641c\u7d22"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/fuzzystrmatch.html"},"\u6a21\u7cca\u5339\u914d")),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u80fd\u88ab\u7d22\u5f15"),Object(l.b)("li",{parentName:"ul"},"\u76ee\u524d soundex, metaphone, dmetaphone \u5bf9 UTF8 \u652f\u6301\u4e0d\u592a\u597d"),Object(l.b)("li",{parentName:"ul"},"\u56e0\u6b64\u53ef\u9009\u9879\u53ea\u6709 levenshtein")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sql"},"create extension fuzzystrmatch;\n\n-- \u6765\u6587\u65af\u5766\u8ddd\u79bb\n-- 7\nselect levenshtein('\u4eca\u5929\u5929\u6c14\u5f88\u597d\uff0c\u4f60\u8fd8\u597d\u4e48\uff1f','\u4eca\u5929\u4f60\u597d\u4e48');\n")),Object(l.b)("h2",{id:"pgroonga"},"pgroonga"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://pgroonga.github.io/"},"https://pgroonga.github.io/"))),Object(l.b)("h2",{id:"zhparser"},"zhparser"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u4e2d\u6587\u5206\u8bcd"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/amutu/zhparser"},"amutu/zhparser")),Object(l.b)("li",{parentName:"ul"},"\u57fa\u4e8e ",Object(l.b)("a",{parentName:"li",href:"http://www.xunsearch.com/scws"},"scws")," \u5206\u8bcd",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/hightman/scws"},"hightman/scws"))))),Object(l.b)("h2",{id:"\u5185\u5efa\u5168\u6587\u641c\u7d22"},"\u5185\u5efa\u5168\u6587\u641c\u7d22"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u4e0d\u80fd\u652f\u6301\u4e2d\u6587 - \u65e0\u6cd5\u5206\u8bcd"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/textsearch.html"},"Full Text Search")),Object(l.b)("li",{parentName:"ul"},"\u57fa\u4e8e\u6587\u6863\u7684\u5012\u6392\u7d22\u5f15"),Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528 GIN \u8fdb\u884c\u7d22\u5f15"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/textsearch-limitations.html"},"\u9650\u5236"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"lexeme < 2Kb"),Object(l.b)("li",{parentName:"ul"},"tsvector (lexemes + positions) < 1Mb"),Object(l.b)("li",{parentName:"ul"},"lexemes \u6570\u91cf < 2^64"),Object(l.b)("li",{parentName:"ul"},"tsvector \u4e2d\u7684\u4f4d\u7f6e > 0 < 16383"),Object(l.b)("li",{parentName:"ul"},"The match distance in a ",Object(l.b)("inlineCode",{parentName:"li"},"<N>")," (FOLLOWED BY) tsquery operator cannot be more than 16,384"),Object(l.b)("li",{parentName:"ul"},"\u6bcf\u4e2a lexeme \u4e0d\u8d85\u8fc7 256 \u4e2a\u4f4d\u7f6e"),Object(l.b)("li",{parentName:"ul"},"The number of nodes (lexemes + operators) in a tsquery must be less than 32,768"))),Object(l.b)("li",{parentName:"ul"},"\u7c7b\u578b",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"document - \u6587\u6863"),Object(l.b)("li",{parentName:"ul"},"tsvector - \u6587\u672c\u641c\u7d22\u5411\u91cf"),Object(l.b)("li",{parentName:"ul"},"tsquery - \u6587\u672c\u67e5\u8be2\u5bf9\u8c61"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/textsearch-dictionaries.html"},"\u5b57\u5178"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u8f85\u52a9\u5206\u8bcd"),Object(l.b)("li",{parentName:"ul"},"\u8bb0\u5f55\u505c\u6b62\u8bcd"),Object(l.b)("li",{parentName:"ul"},"\u7cfb\u7edf\u5206\u8bcd\u5b58\u50a8\u4e8e ",Object(l.b)("inlineCode",{parentName:"li"},"$SHAREDIR/tsearch_data/english.stop"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"SHAREDIR - ",Object(l.b)("inlineCode",{parentName:"li"},"pg_config --sharedir"))))))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sql"},"-- \u5206\u8bcd\n-- have \u548c a \u4f1a\u88ab\u53bb\u6389 - 'day':4 'nice':3\n-- \u8bcd\u540e\u9762\u662f\u4f4d\u7f6e\n-- english \u53ef\u4ee5\u5199\u6210 pg_catalog.english\nSELECT to_tsvector('english', 'have a nice day');\n-- \u90fd\u4f1a\u4fdd\u7559 - 'a':2 'day':4 'have':1 'nice':3\nSELECT to_tsvector('simple', 'have a nice day');\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sql"},"-- \u81ea\u5b9a\u4e49\u5206\u8bcd\nCREATE TEXT SEARCH DICTIONARY public.simple_dict (\n    TEMPLATE = pg_catalog.simple,\n    STOPWORDS = english\n);\n\nALTER TEXT SEARCH DICTIONARY public.simple_dict ( Accept = false );\n\nSELECT ts_lexize('public.simple_dict','YeS');\n\n-- debug \u5206\u8bcd\u903b\u8f91\nSELECT * FROM ts_debug('english', 'Paris');\n")))}o.isMDXComponent=!0}}]);