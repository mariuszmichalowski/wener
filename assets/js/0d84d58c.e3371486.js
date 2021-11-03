"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[35480],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},d=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=i(n),m=a,E=s["".concat(l,".").concat(m)]||s[m]||p[m]||o;return n?r.createElement(E,u(u({ref:t},d),{},{components:n})):r.createElement(E,u({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,u[1]=c;for(var i=2;i<o;i++)u[i]=n[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},86339:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return d},default:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),u=["components"],c={title:"DuckDB"},l=void 0,i={unversionedId:"db/column/duckdb",id:"db/column/duckdb",isDocsHomePage:!1,title:"DuckDB",description:"- duckdb/duckdb",source:"@site/notes/db/column/duckdb.md",sourceDirName:"db/column",slug:"/db/column/duckdb",permalink:"/notes/db/column/duckdb",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/column/duckdb.md",tags:[],version:"current",frontMatter:{title:"DuckDB"},sidebar:"docs",previous:{title:"Column Store",permalink:"/notes/db/column/column"},next:{title:"ScyllaDB",permalink:"/notes/db/column/scylladb"}},d=[],p={toc:d};function s(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/duckdb/duckdb"},"duckdb/duckdb"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"MIT, C++"),(0,o.kt)("li",{parentName:"ul"},"\u5d4c\u5165\u5f0f OLAP \u6570\u636e\u5e93"),(0,o.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c SQLite - \u4f46\u5217\u5b58\u50a8\uff0c\u9762\u5411\u5206\u6790"),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301\u67e5\u8be2 Parquet, CSV"),(0,o.kt)("li",{parentName:"ul"},"\u5411\u91cf\u5f15\u64ce\uff0c\u5e76\u884c\u67e5\u8be2"),(0,o.kt)("li",{parentName:"ul"},"\u5b98\u65b9\u652f\u6301 SDK: Python, Java, C++, NodeJS, R"))),(0,o.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/duckdb/duckdb-wasm"},"duckdb/duckdb-wasm"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5728 Web \u5185\u6267\u884c\uff0c\u57fa\u4e8e FS API \u8fdb\u884c IO \u4ea4\u4e92")))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -LO https://github.com/duckdb/duckdb/releases/download/v0.2.7/duckdb_cli-osx-amd64.zip\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"-- CSV\nSELECT * FROM read_csv_auto('test.csv');\n-- HEADER=TRUE\n-- read_csv_auto -> read_csv(AUTO_DETECT=TRUE)\nSELECT * FROM read_csv_auto('test.csv', SAMPLE_SIZE=20000);\n-- \u5bfc\u5165\nCREATE TABLE ontime AS SELECT * FROM read_csv_auto('test.csv');\n-- \u4e5f\u53ef\u4ee5\u5148\u521b\u5efa\u8868\u518d\u901a\u8fc7 COPY \u5bfc\u5165\nCOPY ontime FROM 'test.csv' ( DELIMITER '|', HEADER, AUTO_DETECT TRUE );\n\n-- PARQUET\nSELECT * FROM parquet_scan('test.parquet');\nSELECT * FROM 'test.parquet';\n-- \u591a\u6587\u4ef6\nSELECT * FROM parquet_scan('test/*.parquet');\n-- \u4e0d\u5bfc\u5165\u4f46\u4e5f\u63d0\u4f9b\u67e5\u8be2\nCREATE VIEW people AS SELECT * FROM parquet_scan('test.parquet');\n-- \u5bfc\u5165\u5e26\u538b\u7f29\nCOPY tbl TO 'result-zstd.parquet' (FORMAT 'PARQUET', CODEC 'ZSTD')\n\n-- \u5bfc\u51fa\u8868 - \u53ef\u4ee5 FORMAT PARQUET\nCOPY lineitem TO 'lineitem.tbl' ( DELIMITER '|', HEADER );\nCOPY lineitem(l_orderkey) TO 'orderkey.tbl' ( DELIMITER '|' );\nCOPY (SELECT 42 AS a, 'hello' AS b) TO 'query.csv' WITH (HEADER 1, DELIMITER ',');\n\n-- \u5bfc\u51fa\u6570\u636e\u5e93\n-- \u5bfc\u51fa\u5230\u76ee\u5f55\nEXPORT DATABASE 'target_directory';\n-- \u5bfc\u51fa CSV\nEXPORT DATABASE 'target_directory' (FORMAT CSV, DELIMITER '|');\n-- \u5bfc\u51fa parquet \u683c\u5f0f\nEXPORT DATABASE 'target_directory' (FORMAT PARQUET);\n-- \u5bfc\u5165\nIMPORT DATABASE 'target_directory'\n")))}s.isMDXComponent=!0}}]);