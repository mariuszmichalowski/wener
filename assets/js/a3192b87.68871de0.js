"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[20639],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,g=m["".concat(p,".").concat(f)]||m[f]||c[f]||o;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58326:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],i={title:"PostgreSQL \u94fe\u63a5\u6c60"},p=void 0,s={unversionedId:"db/relational/postgresql/postgresql-pool",id:"db/relational/postgresql/postgresql-pool",title:"PostgreSQL \u94fe\u63a5\u6c60",description:"- \u6bcf\u4e2a\u94fe\u63a5\u4e00\u4e2a\u8fdb\u7a0b",source:"@site/notes/db/relational/postgresql/postgresql-pool.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/postgresql-pool",permalink:"/notes/db/relational/postgresql/postgresql-pool",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/relational/postgresql/postgresql-pool.md",tags:[],version:"current",frontMatter:{title:"PostgreSQL \u94fe\u63a5\u6c60"},sidebar:"docs",previous:{title:"PL/pgSQL",permalink:"/notes/db/relational/postgresql/postgresql-plpgsql"},next:{title:"PostgreSQL Replicate",permalink:"/notes/db/relational/postgresql/postgresql-replication"}},u=[],c={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u94fe\u63a5\u4e00\u4e2a\u8fdb\u7a0b"),(0,o.kt)("li",{parentName:"ul"},"\u6700\u5927\u94fe\u63a5\u6570 max_connections"),(0,o.kt)("li",{parentName:"ul"},"\u8fdb\u7a0b\u5185\u5b58\u5206\u4e3a - \u9ed8\u8ba4\u6bcf\u4e2a\u94fe\u63a5 10M \u5de6\u53f3",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u672c\u5730\u5185\u5b58",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"work_mem - \u9ed8\u8ba4 4M",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"ORDER BY, DISTINCT, JOIN"))),(0,o.kt)("li",{parentName:"ul"},"maintenance_work_mem",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"autovacuum_work_mem"),(0,o.kt)("li",{parentName:"ul"},"VACUUM"))),(0,o.kt)("li",{parentName:"ul"},"temp_buffers - \u9ed8\u8ba4 8M",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u4e34\u65f6\u8868"))))),(0,o.kt)("li",{parentName:"ul"},"\u5171\u4eab\u5185\u5b58",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"shared_buffers"),(0,o.kt)("li",{parentName:"ul"},"wal_buffers"),(0,o.kt)("li",{parentName:"ul"},"Commit Log"))))),(0,o.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://severalnines.com/database-blog/what-check-if-postgresql-memory-utilization-high"},"What to Check if PostgreSQL Memory Utilization is High")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.citusdata.com/blog/2017/05/10/scaling-connections-in-postgres"},"Scaling Connections in Postgres")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pgtune.leopard.in.ua/"},"https://pgtune.leopard.in.ua/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gist.github.com/rgreenjr/3637525"},"https://gist.github.com/rgreenjr/3637525"))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select * from pg_stat_activity;\nselect * FROM pg_stat_activity where state <> 'idle';\n\nshow max_connections;\n\nshow work_mem;\nshow autovacuum_work_mem;\nshow maintenance_work_mem;\nshow temp_buffers;\nshow shared_buffers;\nshow wal_buffers;\n")))}m.isMDXComponent=!0}}]);