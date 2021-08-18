"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[78459],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=m(n),d=r,T=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return n?a.createElement(T,l(l({ref:t},p),{},{components:n})):a.createElement(T,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37090:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return p},default:function(){return u}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),l=["components"],o={title:"Postgresql Scale"},s=void 0,m={unversionedId:"db/relational/postgresql/postgresql-scale",id:"db/relational/postgresql/postgresql-scale",isDocsHomePage:!1,title:"Postgresql Scale",description:"PostgreSQL \u5e76\u4e0d\u662f OLAP \u6570\u636e\u5e93\uff0c\u80fd\u529b\u6709\u4e0a\u9650\uff0c\u5f53\u53d1\u73b0\u6709\u66f4\u591a\u7684\u65f6\u95f4\u548c\u8d44\u6e90\u6295\u5165 \u6570\u636e\u4ed3\u5e93 \u65f6\uff0c\u53ef\u4ee5\u8003\u8651\u9009\u62e9\u4e00\u4e2a\u771f\u6b63\u7684\u6570\u4ed3\u6570\u636e\u5e93\u3002",source:"@site/notes/db/relational/postgresql/postgresql-scale.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/postgresql-scale",permalink:"/notes/db/relational/postgresql/postgresql-scale",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/relational/postgresql/postgresql-scale.md",version:"current",frontMatter:{title:"Postgresql Scale"},sidebar:"docs",previous:{title:"PostgreSQL \u94fe\u63a5\u6c60",permalink:"/notes/db/relational/postgresql/postgresql-pool"},next:{title:"Pg SQL \u5e38\u89c1\u95ee\u9898",permalink:"/notes/db/relational/postgresql/postgresql-sql-faq"}},p=[{value:"Table Partitioning",id:"table-partitioning",children:[]}],c={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"PostgreSQL \u5e76\u4e0d\u662f OLAP \u6570\u636e\u5e93\uff0c\u80fd\u529b\u6709\u4e0a\u9650\uff0c\u5f53\u53d1\u73b0\u6709\u66f4\u591a\u7684\u65f6\u95f4\u548c\u8d44\u6e90\u6295\u5165 \u6570\u636e\u4ed3\u5e93 \u65f6\uff0c\u53ef\u4ee5\u8003\u8651\u9009\u62e9\u4e00\u4e2a\u771f\u6b63\u7684\u6570\u4ed3\u6570\u636e\u5e93\u3002"))),(0,i.kt)("h2",{id:"table-partitioning"},"Table Partitioning"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u6027\u80fd\u63d0\u5347",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5f53\u4e3b\u8981\u67e5\u8be2\u7684\u6570\u636e\u90fd\u5728\u4e00\u4e2a\u5206\u7247\u91cc\u65f6\uff0c\u7d22\u5f15\u52a0\u8f7d\u5230\u5185\u5b58\u4f7f\u7528\u7387\u66f4\u9ad8"))),(0,i.kt)("li",{parentName:"ul"},"\u5f53\u66f4\u65b0\u548c\u67e5\u8be2\u5355\u4e2a\u5206\u7247\u65f6\u6027\u80fd\u63d0\u5347",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6b64\u65f6\u53ef\u80fd\u901a\u8fc7 seq scan \u800c\u4e0d\u9700\u8981\u4f7f\u7528\u7d22\u5f15\uff0c\u5bfc\u81f4\u968f\u673a\u8bbf\u95ee"))),(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u64cd\u4f5c\u5206\u7247\u8868\u6765\u6279\u91cf\u64cd\u4f5c\u6570\u636e\uff0c\u6027\u80fd\u5927\u5e45\u5ea6\u63d0\u9ad8"),(0,i.kt)("li",{parentName:"ul"},"\u8f83\u5c11\u4f7f\u7528\u7684\u5206\u7247\u53ef\u79fb\u5230\u66f4\u4fbf\u5b9c\u7684\u5b58\u50a8\u4e0a")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u5f53\u5355\u8868\u5927\u5c0f\u8d85\u8fc7\u7269\u7406\u5185\u5b58\u65f6\uff0c\u5efa\u8bae\u5206\u8868")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u5206\u8868\u7d22\u5f15\u4e0d\u53ef\u4ee5 CONCURRENTLY",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u9664\u975e\u5148 DETACH"))),(0,i.kt)("li",{parentName:"ul"},"\u5206\u8868\u53ef\u4ee5\u521b\u5efa CREATE INDEX ON ONLY",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u521b\u5efa\u540e\u7d22\u5f15\u662f\u65e0\u6548\u7684"),(0,i.kt)("li",{parentName:"ul"},"\u5728\u5355\u72ec\u5206\u7247\u4e0a\u521b\u5efa\u7136\u540e ATTACH"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528\u8be5\u65b9\u5f0f\u6765\u521b\u5efa UNIQUE \u548c PRIMARY KEY"))),(0,i.kt)("li",{parentName:"ul"},"\u6709\u65f6\u5019\u8868\u7ee7\u627f\u6bd4\u5206\u7247\u66f4\u597d\u7528")))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u552f\u4e00 \u9650\u5236\u5fc5\u987b\u5305\u542b\u6240\u6709 partition key columns"),(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u521b\u5efa\u8de8\u8868 exclusion constraint",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u8de8\u5206\u7247\u9650\u5236"))),(0,i.kt)("li",{parentName:"ul"},"\u9488\u5bf9 INSERT \u7684 BEFORE ROW \u89e6\u53d1\u5668\u65e0\u6cd5\u66f4\u6539\u5206\u7247"),(0,i.kt)("li",{parentName:"ul"},"\u4e34\u65f6\u8868\u548c\u6301\u4e45\u8868\u4e0d\u53ef\u4ee5\u6df7\u7528")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5206\u8868\u7b56\u7565")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8303\u56f4 - \u4f8b\u5982 \u65f6\u95f4\u5b57\u6bb5"),(0,i.kt)("li",{parentName:"ul"},"\u5217\u8868 - \u4f8b\u5982 \u5e74\u5b57\u6bb5"),(0,i.kt)("li",{parentName:"ul"},"\u54c8\u5e0c - \u4f8b\u5982 UUID \u5b57\u6bb5")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5e38\u89c1\u7b56\u7565")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u4f7f\u7528\u573a\u666f\u7684\u51b7\u70ed\u6570\u636e\u533a\u5206 - \u4f8b\u5982 \u6700\u8fd1\u4e00\u5468\u6570\u636e\u5355\u72ec\u8868"),(0,i.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u6570\u636e\u672c\u8eab\u7684\u903b\u8f91\u7ed3\u6784\u533a\u5206 - \u4f8b\u5982 \u533a\u57df\u3001\u5e74\u4efd")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"-- RANGE \u5206\u7247\n-- \u521b\u5efa\u865a\u62df\u8868\nCREATE TABLE measurement (\n    city_id         int not null,\n    logdate         date not null,\n    peaktemp        int,\n    unitsales       int\n) PARTITION BY RANGE (logdate);\n\n-- LIST \u5206\u7247\nCREATE TABLE cities (\n    city_id      bigserial not null,\n    name         text not null,\n    population   bigint\n) PARTITION BY LIST (left(lower(name), 1));\n-- LIST \u5b50\u8868\nCREATE TABLE cities_ab\n    PARTITION OF cities (\n    CONSTRAINT city_id_nonzero CHECK (city_id != 0)\n) FOR VALUES IN ('a', 'b');\n-- \u9ed8\u8ba4\u5206\u7247\nCREATE TABLE cities_partdef\n    PARTITION OF cities DEFAULT;\n\n-- HASH \u5206\u7247\nCREATE TABLE orders (\n    order_id     bigint not null,\n    cust_id      bigint not null,\n    status       text\n) PARTITION BY HASH (order_id);\n-- HASH \u5b50\u8868\nCREATE TABLE orders_p1 PARTITION OF orders\n    FOR VALUES WITH (MODULUS 4, REMAINDER 0);\nCREATE TABLE orders_p2 PARTITION OF orders\n    FOR VALUES WITH (MODULUS 4, REMAINDER 1);\nCREATE TABLE orders_p3 PARTITION OF orders\n    FOR VALUES WITH (MODULUS 4, REMAINDER 2);\nCREATE TABLE orders_p4 PARTITION OF orders\n    FOR VALUES WITH (MODULUS 4, REMAINDER 3);\n\n-- \u53ef\u76f4\u63a5\u521b\u5efa\u7d22\u5f15 - \u5f53\u589e\u52a0\u5206\u7247\u65f6\u4f1a\u5bf9\u5206\u7247\u52a0\u7d22\u5f15\nCREATE INDEX ON measurement (logdate);\n\nCREATE TABLE measurement_y2006m02 PARTITION OF measurement\n    FOR VALUES FROM ('2006-02-01') TO ('2006-03-01');\n-- \u53ef\u4fee\u6539 TABLESPACE \u9009\u62e9\u4e0d\u540c\u5b58\u50a8\u4ecb\u8d28\nCREATE TABLE measurement_y2006m03 PARTITION OF measurement\n    FOR VALUES FROM ('2006-03-01') TO ('2006-04-01')\n    TABLESPACE fasttablespace;;\n\n-- \u5206\u7247\u8868\u53ef\u4ee5\u518d\u5206\u7247\nCREATE TABLE measurement_y2006m02 PARTITION OF measurement\n    FOR VALUES FROM ('2006-02-01') TO ('2006-03-01')\n    PARTITION BY RANGE (peaktemp);\n\n-- \u53d6\u4fdd\u5f00\u542f\u5206\u7247\u88c1\u526a\u914d\u7f6e - \u9ed8\u8ba4\u5f00\u542f\nselect * from pg_settings where name='enable_partition_pruning';\n\n-- \u53ef\u4ee5\u76f4\u63a5\u5220\u9664\u5206\u7247\u8868 - \u4f1a\u9501\u4e3b\u8868\nDROP TABLE measurement_y2006m02;\n-- \u53ef\u4ee5\u6392\u9664\u5206\u7247\nALTER TABLE measurement DETACH PARTITION measurement_y2006m02;\n\n\n-- \u5355\u72ec\u521b\u5efa\u5206\u7247\uff0c\u6dfb\u52a0\u6821\u9a8c\uff0c\u5bfc\u5165\u6570\u636e\uff0c\u52a0\u5165\u5230\u5206\u7247\nCREATE TABLE measurement_y2008m02\n  (LIKE measurement INCLUDING DEFAULTS INCLUDING CONSTRAINTS)\n  TABLESPACE fasttablespace;\n-- \u63d0\u524d\u521b\u5efa\u597d CONSTRAINT - \u5426\u5219 ATTACH \u65f6\u8fd8\u662f\u4f1a\u521b\u5efa\u4e14\u9700\u8981 ACCESS EXCLUSIVE\nALTER TABLE measurement_y2008m02 ADD CONSTRAINT y2008m02\n   CHECK ( logdate >= DATE '2008-02-01' AND logdate < DATE '2008-03-01' );\n\\copy measurement_y2008m02 from 'measurement_y2008m02'\n-- possibly some other data preparation work\n-- SHARE UPDATE EXCLUSIVE\n-- ATTACH \u540e\u53ef\u4ee5\u5220\u9664\u521b\u5efa\u7684 CHECK\n-- \u5982\u679c\u6709 DEFAULT \u4e5f\u4f1a\u68c0\u67e5\uff0c\u9664\u975e\u521b\u5efa\u4e86\u6392\u9664 CHECK\nALTER TABLE measurement ATTACH PARTITION measurement_y2008m02\n    FOR VALUES FROM ('2008-02-01') TO ('2008-03-01' );\n")))}u.isMDXComponent=!0}}]);