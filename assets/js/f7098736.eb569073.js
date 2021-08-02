"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[72289],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return k}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),g=d(a),k=r,N=g["".concat(o,".").concat(k)]||g[k]||s[k]||l;return a?n.createElement(N,p(p({ref:e},m),{},{components:a})):n.createElement(N,p({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=g;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var d=2;d<l;d++)p[d]=a[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},61203:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return m},default:function(){return g}});var n=a(22122),r=a(19756),l=(a(67294),a(3905)),p=["components"],i={title:"PostgreSQL Extension"},o=void 0,d={unversionedId:"db/relational/postgresql/postgresql-extension",id:"db/relational/postgresql/postgresql-extension",isDocsHomePage:!1,title:"PostgreSQL Extension",description:"- pgpartman/pgpartman",source:"@site/notes/db/relational/postgresql/postgresql-extension.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/postgresql-extension",permalink:"/notes/db/relational/postgresql/postgresql-extension",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/relational/postgresql/postgresql-extension.md",version:"current",frontMatter:{title:"PostgreSQL Extension"},sidebar:"docs",previous:{title:"\u547d\u4ee4\u884c\u5de5\u5177",permalink:"/notes/db/relational/postgresql/postgresql-cli"},next:{title:"PostgreSQL FDW",permalink:"/notes/db/relational/postgresql/postgresql-fdw"}},m=[],s={toc:m};function g(t){var e=t.components,a=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/pgpartman/pg_partman"},"pgpartman/pg_partman"),"\nPartition management extension for PostgreSQL"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/omniti-labs/pg_jobmon"},"omniti-labs/pg_jobmon"),"\nPostgreSQL Extension for logging and monitoring automated jobs"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/2ndQuadrant/repmgr"},"2ndQuadrant/repmgr")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/xocolatl/periods"},"xocolatl/periods"),"\nPERIODs and SYSTEM VERSIONING for PostgreSQL"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/dimitri/pgextwlist"},"dimitri/pgextwlist"),"\nPostgreSQL Extension Whitelisting"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/pgq/pgq"},"pgq/pgq"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"FDW")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"desc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dblink"),(0,l.kt)("td",{parentName:"tr",align:null},"connect to other PostgreSQL databases from within a database")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"file_fdw"),(0,l.kt)("td",{parentName:"tr",align:null},"foreign-data wrapper for flat file access")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hstore"),(0,l.kt)("td",{parentName:"tr",align:null},"data type for storing sets of (key, value) pairs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hstore_pllua"),(0,l.kt)("td",{parentName:"tr",align:null},"Hstore transform for Lua")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hstore_plluau"),(0,l.kt)("td",{parentName:"tr",align:null},"Hstore transform for untrusted Lua")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hstore_plpython3u"),(0,l.kt)("td",{parentName:"tr",align:null},"transform between hstore and plpython3u")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"postgres_fdw"),(0,l.kt)("td",{parentName:"tr",align:null},"foreign-data wrapper for remote PostgreSQL servers")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"DateType")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"desc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"citext"),(0,l.kt)("td",{parentName:"tr",align:null},"data type for case-insensitive character strings")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cube"),(0,l.kt)("td",{parentName:"tr",align:null},"data type for multidimensional cubes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isn"),(0,l.kt)("td",{parentName:"tr",align:null},"data types for international product numbering standards")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ltree"),(0,l.kt)("td",{parentName:"tr",align:null},"data type for hierarchical tree-like structures")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ltree_plpython3u"),(0,l.kt)("td",{parentName:"tr",align:null},"transform between ltree and plpython3u")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Index")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"desc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bloom"),(0,l.kt)("td",{parentName:"tr",align:null},"bloom access method - signature file based index")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"btree_gin"),(0,l.kt)("td",{parentName:"tr",align:null},"support for indexing common datatypes in GIN")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"btree_gist"),(0,l.kt)("td",{parentName:"tr",align:null},"support for indexing common datatypes in GiST")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hypopg"),(0,l.kt)("td",{parentName:"tr",align:null},"Hypothetical indexes for PostgreSQL")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u529f\u80fd")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"desc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pg_cron"),(0,l.kt)("td",{parentName:"tr",align:null},"Job scheduler for PostgreSQL")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"DB")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"desc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timescaledb"),(0,l.kt)("td",{parentName:"tr",align:null},"Enables scalable inserts and complex queries for time-series data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pgq"),(0,l.kt)("td",{parentName:"tr",align:null},"Generic queue for PostgreSQL")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"PL")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"desc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pldbgapi"),(0,l.kt)("td",{parentName:"tr",align:null},"server-side support for debugging PL/pgSQL functions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pllua"),(0,l.kt)("td",{parentName:"tr",align:null},"Lua as a procedural language")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"plluau"),(0,l.kt)("td",{parentName:"tr",align:null},"Lua as an untrusted procedural language")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"plpgsql"),(0,l.kt)("td",{parentName:"tr",align:null},"PL/pgSQL procedural language")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"plpgsql_check"),(0,l.kt)("td",{parentName:"tr",align:null},"extended check for plpgsql functions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"plprofiler"),(0,l.kt)("td",{parentName:"tr",align:null},"server-side support for profiling PL/pgSQL functions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"plproxy"),(0,l.kt)("td",{parentName:"tr",align:null},"Database partitioning implemented as procedural language")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"plpython3u"),(0,l.kt)("td",{parentName:"tr",align:null},"PL/Python3U untrusted procedural language")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pltcl"),(0,l.kt)("td",{parentName:"tr",align:null},"PL/Tcl procedural language")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pltclu"),(0,l.kt)("td",{parentName:"tr",align:null},"PL/TclU untrusted procedural language")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"postgis")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"desc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"postgis"),(0,l.kt)("td",{parentName:"tr",align:null},"PostGIS geometry and geography spatial types and functions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"postgis_raster"),(0,l.kt)("td",{parentName:"tr",align:null},"PostGIS raster types and functions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"postgis_raster-3"),(0,l.kt)("td",{parentName:"tr",align:null},"PostGIS raster types and functions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"postgis_sfcgal"),(0,l.kt)("td",{parentName:"tr",align:null},"PostGIS SFCGAL functions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"postgis_sfcgal-3"),(0,l.kt)("td",{parentName:"tr",align:null},"PostGIS SFCGAL functions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"postgis_tiger_geocoder"),(0,l.kt)("td",{parentName:"tr",align:null},"PostGIS tiger geocoder and reverse geocoder")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"postgis_tiger_geocoder-3"),(0,l.kt)("td",{parentName:"tr",align:null},"PostGIS tiger geocoder and reverse geocoder")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"postgis_topology"),(0,l.kt)("td",{parentName:"tr",align:null},"PostGIS topology spatial types and functions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"postgis_topology-3"),(0,l.kt)("td",{parentName:"tr",align:null},"PostGIS topology spatial types and functions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"postgis-3"),(0,l.kt)("td",{parentName:"tr",align:null},"PostGIS geometry and geography spatial types and functions")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"MISC")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"desc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"address_standardizer"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Used to parse an address into constituent elements. Generally used to support geocoding address normalization step.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"address_standardizer_data_us"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Address Standardizer US dataset example")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"address_standardizer_data_us-3"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Address Standardizer US dataset example")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"address_standardizer-3"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Used to parse an address into constituent elements. Generally used to support geocoding address normalization step.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"adminpack"),(0,l.kt)("td",{parentName:"tr",align:"left"},"administrative functions for PostgreSQL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"amcheck"),(0,l.kt)("td",{parentName:"tr",align:"left"},"functions for verifying relation integrity")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"autoinc"),(0,l.kt)("td",{parentName:"tr",align:"left"},"functions for autoincrementing fields")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"decoderbufs"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Logical decoding plugin that delivers WAL stream changes using a Protocol Buffer format")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"dict_int"),(0,l.kt)("td",{parentName:"tr",align:"left"},"text search dictionary template for integers")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"dict_xsyn"),(0,l.kt)("td",{parentName:"tr",align:"left"},"text search dictionary template for extended synonym processing")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"earthdistance"),(0,l.kt)("td",{parentName:"tr",align:"left"},"calculate great-circle distances on the surface of the Earth")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"fuzzystrmatch"),(0,l.kt)("td",{parentName:"tr",align:"left"},"determine similarities and distance between strings")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"insert_username"),(0,l.kt)("td",{parentName:"tr",align:"left"},"functions for tracking who changed a table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"intagg"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer aggregator and enumerator (obsolete)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"intarray"),(0,l.kt)("td",{parentName:"tr",align:"left"},"functions, operators, and index support for 1-D arrays of integers")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"jsonb_plpython3u"),(0,l.kt)("td",{parentName:"tr",align:"left"},"transform between jsonb and plpython3u")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"lo"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Large Object maintenance")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"moddatetime"),(0,l.kt)("td",{parentName:"tr",align:"left"},"functions for tracking last modification time")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"pageinspect"),(0,l.kt)("td",{parentName:"tr",align:"left"},"inspect the contents of database pages at a low level")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"pg_auth_mon"),(0,l.kt)("td",{parentName:"tr",align:"left"},"monitor connection attempts per user")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"pg_buffercache"),(0,l.kt)("td",{parentName:"tr",align:"left"},"examine the shared buffer cache")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"pg_freespacemap"),(0,l.kt)("td",{parentName:"tr",align:"left"},"examine the free space map (FSM)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"pg_mon"),(0,l.kt)("td",{parentName:"tr",align:"left"},"monitor queries")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"pg_partman"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Extension to manage partitioned tables by time or ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"pg_permissions"),(0,l.kt)("td",{parentName:"tr",align:"left"},"view object permissions and compare them with the desired state")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"pg_prewarm"),(0,l.kt)("td",{parentName:"tr",align:"left"},"prewarm relation data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"pg_repack"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Reorganize tables in PostgreSQL databases with minimal locks")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"pg_stat_kcache"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Kernel statistics gathering")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"pg_stat_statements"),(0,l.kt)("td",{parentName:"tr",align:"left"},"track planning and execution statistics of all SQL statements executed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"pg_trgm"),(0,l.kt)("td",{parentName:"tr",align:"left"},"text similarity measurement and index searching based on trigrams")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"pg_visibility"),(0,l.kt)("td",{parentName:"tr",align:"left"},"examine the visibility map (VM) and page-level visibility info")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"pgaudit"),(0,l.kt)("td",{parentName:"tr",align:"left"},"provides auditing functionality")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"pgcrypto"),(0,l.kt)("td",{parentName:"tr",align:"left"},"cryptographic functions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"pgl_ddl_deploy"),(0,l.kt)("td",{parentName:"tr",align:"left"},"automated ddl deployment using pglogical")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"pglogical"),(0,l.kt)("td",{parentName:"tr",align:"left"},"PostgreSQL Logical Replication")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"pglogical_origin"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Dummy extension for compatibility when upgrading from Postgres 9.4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"pglogical_ticker"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Have an accurate view on pglogical replication delay")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"pgrowlocks"),(0,l.kt)("td",{parentName:"tr",align:"left"},"show row-level locking information")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"pgstattuple"),(0,l.kt)("td",{parentName:"tr",align:"left"},"show tuple-level statistics")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"refint"),(0,l.kt)("td",{parentName:"tr",align:"left"},"functions for implementing referential integrity (obsolete)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"seg"),(0,l.kt)("td",{parentName:"tr",align:"left"},"data type for representing line segments or floating-point intervals")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"set_user"),(0,l.kt)("td",{parentName:"tr",align:"left"},"similar to SET ROLE but with added logging")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"sslinfo"),(0,l.kt)("td",{parentName:"tr",align:"left"},"information about SSL certificates")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"tablefunc"),(0,l.kt)("td",{parentName:"tr",align:"left"},"functions that manipulate whole tables, including crosstab")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"tcn"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Triggered change notifications")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"tsm_system_rows"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TABLESAMPLE method which accepts number of rows as a limit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"tsm_system_time"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TABLESAMPLE method which accepts time in milliseconds as a limit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"unaccent"),(0,l.kt)("td",{parentName:"tr",align:"left"},"text search dictionary that removes accents")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"uuid-ossp"),(0,l.kt)("td",{parentName:"tr",align:"left"},"generate universally unique identifiers (UUIDs)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"xml2"),(0,l.kt)("td",{parentName:"tr",align:"left"},"XPath querying and XSLT")))))}g.isMDXComponent=!0}}]);