"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[30212],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return s}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m=a.createContext({}),o=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),k=o(n),s=l,N=k["".concat(m,".").concat(s)]||k[s]||c[s]||r;return n?a.createElement(N,i(i({ref:t},p),{},{components:n})):a.createElement(N,i({ref:t},p))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=k;var u={};for(var m in t)hasOwnProperty.call(t,m)&&(u[m]=t[m]);u.originalType=e,u.mdxType="string"==typeof e?e:l,i[1]=u;for(var o=2;o<r;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},99611:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return o},toc:function(){return p},default:function(){return k}});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),i=["components"],u={title:"ClickHouse"},m=void 0,o={unversionedId:"db/column/clickhouse",id:"db/column/clickhouse",isDocsHomePage:!1,title:"ClickHouse",description:"- yandex/ClickHouse",source:"@site/notes/db/column/clickhouse.md",sourceDirName:"db/column",slug:"/db/column/clickhouse",permalink:"/notes/db/column/clickhouse",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/column/clickhouse.md",tags:[],version:"current",frontMatter:{title:"ClickHouse"},sidebar:"docs",previous:{title:"Apache Cassandra",permalink:"/notes/db/column/cassandra"},next:{title:"Column Store",permalink:"/notes/db/column/column"}},p=[{value:"\u6570\u636e\u7c7b\u578b",id:"\u6570\u636e\u7c7b\u578b",children:[]},{value:"Table Engine",id:"table-engine",children:[]},{value:"MergeTree",id:"mergetree",children:[]},{value:"Log",id:"log",children:[{value:"\u96c6\u6210\u5f15\u64ce",id:"\u96c6\u6210\u5f15\u64ce",children:[]},{value:"\u7279\u6b8a\u5f15\u64ce",id:"\u7279\u6b8a\u5f15\u64ce",children:[]}]},{value:"\u8fd0\u7ef4",id:"\u8fd0\u7ef4",children:[{value:"Auth",id:"auth",children:[]}]}],c={toc:p};function k(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/yandex/ClickHouse"},"yandex/ClickHouse"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Apache-2.0, C++"),(0,r.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u901a\u8fc7 Key \u8bbf\u95ee"))),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5e93 default"),(0,r.kt)("li",{parentName:"ul"},"DataGrip \u53ef\u4ee5\u4f7f\u7528 JDBC \u8fde\u63a5"),(0,r.kt)("li",{parentName:"ul"},"\u7aef\u53e3",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"8123 HTTP"),(0,r.kt)("li",{parentName:"ul"},"9000 native client"))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://clickhouse.yandex/docs/en/single/"},"\u5355\u9875\u6587\u6863")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ClickHouse"},"wiki/ClickHouse")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://clickhouse.yandex/"},"clickhouse.yandex")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://clickhouse.yandex/docs/en/development/architecture/"},"https://clickhouse.yandex/docs/en/development/architecture/"))))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\u6682\u4e0d\u652f\u6301 UDF"),(0,r.kt)("li",{parentName:"ul"},"\u5f53\u6570\u636e\u91cf\u8f83\u5c11(< 1TB)\u65f6\u4e0d\u5efa\u8bae\u4f7f\u7528"),(0,r.kt)("li",{parentName:"ul"},"\u63d2\u5165\u64cd\u4f5c\u975e\u5e38\u5feb - \u56e0\u4e3a\u662f\u5f02\u6b65\u7684\uff0c\u540e\u53f0\u4f1a\u5904\u7406")))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 UDF ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ClickHouse/ClickHouse/issues/11"},"#11")),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 UPDATE, DELETE, REPLACE, MERGE, UPSERT, INSERT UPDATE",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5 DROP PARTITION \u5b9e\u73b0\u90e8\u5206\u6570\u636e\u5220\u9664"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 mutation ",(0,r.kt)("inlineCode",{parentName:"li"},"ALTER TABLE name UPDATE/DELETE column=exp WHERE filter"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u540e\u53f0\u5f02\u6b65\u6267\u884c\uff0c\u5168\u90e8\u6570\u636e\u91cd\u5199\uff0c\u975e\u539f\u5b50\u64cd\u4f5c")))))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# https://hub.docker.com/r/yandex/clickhouse-server/\ndocker run -d --name some-clickhouse-server --ulimit nofile=262144:262144 yandex/clickhouse-server\n\ndocker run --rm -it -p 8123:8123 -p 9000:9000 --name ch-server --ulimit nofile=262144:262144 -v $PWD/data:/var/lib/clickhouse yandex/clickhouse-server\n\n# \u955c\u50cf\u62c9\u53d6\n# docker pull dockerhub.azk8s.cn/library/yandex/clickhouse-server\n# docker pull docker.mirrors.ustc.edu.cn/yandex/clickhouse-server\n\ndocker run -d --name some-clickhouse-server --ulimit nofile=262144:262144 -v /path/to/your/config.xml:/etc/clickhouse-server/config.xml yandex/clickhouse-server\n\n# Build from source\ngit clone -b stable --depth 1 --recursive https://github.com/yandex/ClickHouse.git\ncd ClickHouse\n\nmkdir build\ncd build\napk add libressl-dev\ncmake ..\nmake -j $(nproc)\ncd ..\n\n# \u542f\u52a8\nclickhouse-server --config-file=/etc/clickhouse-server/config.xml\nclickhouse-client --host=example.com\n\n# \u5bfc\u5165 CSV\ncat my.csv | clickhouse-client --host=example-perftest01j --query="INSERT INTO rankings_tiny FORMAT CSV"\n# \u5bfc\u5165 TSV, \u5e76\u8ba1\u7b97\u65f6\u95f4\ntime clickhouse-client --query="INSERT INTO trips FORMAT TabSeparated" < trips.tsv\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"COPY(\n  SELECT t.id,t.name FROM t\n) TO '/opt/data/export.tsv';\n\n-- \u4ece PostgreSQL \u5bfc\u5165\nCOPY ... TO PROGRAM\n")),(0,r.kt)("h2",{id:"\u6570\u636e\u7c7b\u578b"},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u652f\u6301\u8303\u578b\u7684\u5f3a\u7c7b\u578b Schema")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"UInt8, UInt16, UInt32, UInt64, UInt256, Int8, Int16, Int32, Int64, Int128, Int256",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Int8 \u2014 TINYINT, BOOL, BOOLEAN, INT1."),(0,r.kt)("li",{parentName:"ul"},"Int16 \u2014 SMALLINT, INT2."),(0,r.kt)("li",{parentName:"ul"},"Int32 \u2014 INT, INT4, INTEGER."),(0,r.kt)("li",{parentName:"ul"},"Int64 \u2014 BIGINT"))),(0,r.kt)("li",{parentName:"ul"},"Float32, Float64",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"FLOAT, DOUBLE"))),(0,r.kt)("li",{parentName:"ul"},"Decimal(P, S), Decimal32(S), Decimal64(S), Decimal128(S), Decimal256(S)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"P - precision - ","[ 1 : 76 ]"),(0,r.kt)("li",{parentName:"ul"},"S - scale - ","[ 0 : P ]"),(0,r.kt)("li",{parentName:"ul"},"P ","[ 1 : 9 ]"," - Decimal32(S)"),(0,r.kt)("li",{parentName:"ul"},"P ","[ 10 : 18 ]"," - Decimal64(S)"),(0,r.kt)("li",{parentName:"ul"},"P ","[ 19 : 38 ]"," - Decimal128(S)"),(0,r.kt)("li",{parentName:"ul"},"P ","[ 39 : 76 ]"," - Decimal256(S)"))),(0,r.kt)("li",{parentName:"ul"},"Boolean",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"UInt8 - 0,1"))),(0,r.kt)("li",{parentName:"ul"},"String",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u521b\u5efa VARCHAR(255) \u4f1a\u5ffd\u7565\u957f\u5ea6"))),(0,r.kt)("li",{parentName:"ul"},"FixedString(N) - N bytes"),(0,r.kt)("li",{parentName:"ul"},"UUID"),(0,r.kt)("li",{parentName:"ul"},"Date",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"2byte, days since 1970-01-01"),(0,r.kt)("li",{parentName:"ul"},"\u6700\u5927 2148 \u5e74"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DateTime([timezone])"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"unix timestamp"),(0,r.kt)("li",{parentName:"ul"},"\u6700\u5927 2105 \u5e74"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DateTime64(precision, [timezone])"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Int64, epoch"),(0,r.kt)("li",{parentName:"ul"},"precision=3 \u5219\u662f\u6beb\u79d2\u7ea7"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Enum('k1'=1,'k2'=2)")),(0,r.kt)("li",{parentName:"ul"},"LowCardinality(data_type)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"change internal to dictionary-encoded"))),(0,r.kt)("li",{parentName:"ul"},"array(T) - ",(0,r.kt)("inlineCode",{parentName:"li"},"[]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AggregateFunction(name, types_of_arguments\u2026)")),(0,r.kt)("li",{parentName:"ul"},"Nested - \u5d4c\u5957\u7c7b\u578b - \u7c7b\u4f3c\u5b9a\u4e49\u4e00\u4e2a struct")),(0,r.kt)("h2",{id:"table-engine"},"Table Engine"),(0,r.kt)("h2",{id:"mergetree"},"MergeTree"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"MergeTree \u672c\u8eab\u6bd4\u8f83\u91cd\uff0c\u5efa\u8bae\u7528\u4e8e\u8f83\u5927\u7684\u6570\u636e\u96c6\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u7279\u6027",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5217\u5b58\u50a8"),(0,r.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u5206\u7247"),(0,r.kt)("li",{parentName:"ul"},"sparse primary index"),(0,r.kt)("li",{parentName:"ul"},"secondary data-skipping indexes")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"MergeTree Engine Family")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MergeTree - \u5efa\u8bae\u7528\u4e8e\u5355\u8282\u70b9",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e PK \u6392\u5e8f"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u526f\u672c"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u91c7\u6837"))),(0,r.kt)("li",{parentName:"ul"},"ReplacingMergeTree - \u5efa\u8bae\u7528\u4e8e\u751f\u4ea7\u5206\u5e03\u5f0f\u9ad8\u53ef\u7528",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u6570\u636e\u53bb\u91cd"))),(0,r.kt)("li",{parentName:"ul"},"SummingMergeTree"),(0,r.kt)("li",{parentName:"ul"},"AggregatingMergeTree"),(0,r.kt)("li",{parentName:"ul"},"CollapsingMergeTree"),(0,r.kt)("li",{parentName:"ul"},"VersionedCollapsingMergeTree"),(0,r.kt)("li",{parentName:"ul"},"GraphiteMergeTree"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tuple(T1, T2, ...)")),(0,r.kt)("li",{parentName:"ul"},"\u7279\u6b8a\u7c7b\u578b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8868\u8fbe\u5f0f"),(0,r.kt)("li",{parentName:"ul"},"Set"),(0,r.kt)("li",{parentName:"ul"},"Nothing"),(0,r.kt)("li",{parentName:"ul"},"Interval"))),(0,r.kt)("li",{parentName:"ul"},"\u57df\u7c7b\u578b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"IPv4, IPv6"))),(0,r.kt)("li",{parentName:"ul"},"Geo \u7c7b\u578b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Point, Ring, Polygon, MultiPolygon"))),(0,r.kt)("li",{parentName:"ul"},"Map(key, value)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SimpleAggregateFunction(name, types_of_arguments\u2026)"))),(0,r.kt)("h2",{id:"log"},"Log"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"TinyLog"),(0,r.kt)("li",{parentName:"ul"},"StripeLog"),(0,r.kt)("li",{parentName:"ul"},"Log")),(0,r.kt)("h3",{id:"\u96c6\u6210\u5f15\u64ce"},"\u96c6\u6210\u5f15\u64ce"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ODBC,JDBC,MySQL,MongoDB, HDFS, S3, Kafka, RocksDB, RabbitMQ"),(0,r.kt)("li",{parentName:"ul"},"PostgreSQL",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"COPY (SELECT ...) TO STDOUT")," \u5b9e\u73b0"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 Materialized - \u521d\u6b21\u540c\u6b65\u540e\u540e\u7eed\u901a\u8fc7 WAL \u66f4\u65b0")))),(0,r.kt)("h3",{id:"\u7279\u6b8a\u5f15\u64ce"},"\u7279\u6b8a\u5f15\u64ce"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Distributed"),(0,r.kt)("li",{parentName:"ul"},"MaterializedView"),(0,r.kt)("li",{parentName:"ul"},"Dictionary"),(0,r.kt)("li",{parentName:"ul"},"Merge"),(0,r.kt)("li",{parentName:"ul"},"File"),(0,r.kt)("li",{parentName:"ul"},"Null"),(0,r.kt)("li",{parentName:"ul"},"Set"),(0,r.kt)("li",{parentName:"ul"},"Join"),(0,r.kt)("li",{parentName:"ul"},"URL"),(0,r.kt)("li",{parentName:"ul"},"View"),(0,r.kt)("li",{parentName:"ul"},"Memory"),(0,r.kt)("li",{parentName:"ul"},"Buffer")),(0,r.kt)("h2",{id:"\u8fd0\u7ef4"},"\u8fd0\u7ef4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u63a8\u8350 ext4 noatime, nobarrier")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# CPU \u4f7f\u7528\u6027\u80fd\u6a21\u5f0f\necho 'performance' | sudo tee /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor\n# \u4e0d\u8981\u7981\u7528 overcommit\necho 0 | sudo tee /proc/sys/vm/overcommit_memory\n\n# \u65e7 Linux Kernel\necho 'madvise' | sudo tee /sys/kernel/mm/transparent_hugepage/enabled\n")),(0,r.kt)("h3",{id:"auth"},"Auth"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kerberos"),(0,r.kt)("li",{parentName:"ul"},"LDAP")))}k.isMDXComponent=!0}}]);