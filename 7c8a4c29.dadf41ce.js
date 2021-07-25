(window.webpackJsonp=window.webpackJsonp||[]).push([[531],{1166:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),p=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return r.a.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,m=u["".concat(l,".").concat(d)]||u[d]||s[d]||o;return t?r.a.createElement(m,c(c({ref:n},i),{},{components:t})):r.a.createElement(m,c({ref:n},i))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var c={};for(var b in n)hasOwnProperty.call(n,b)&&(c[b]=n[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=t[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},605:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(8),o=(t(0),t(1166)),l={title:"ArangoDB"},c={unversionedId:"db/graph/arangodb",id:"db/graph/arangodb",isDocsHomePage:!1,title:"ArangoDB",description:"- arangodb/arangodb",source:"@site/notes/db/graph/arangodb.md",slug:"/db/graph/arangodb",permalink:"/notes/db/graph/arangodb",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/graph/arangodb.md",version:"current",sidebar:"docs",previous:{title:"ScyllaDB",permalink:"/notes/db/column/scylladb"},next:{title:"OLAP",permalink:"/notes/db/olap/olap"}},b=[{value:"AQL",id:"aql",children:[]},{value:"ChangeLog",id:"changelog",children:[{value:"3.2",id:"32",children:[]}]}],i={toc:b};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/arangodb/arangodb"},"arangodb/arangodb"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Apache-2.0, C++, JS"),Object(o.b)("li",{parentName:"ul"},"Graph+Document"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.arangodb.com/why-arangodb/sql-aql-comparison/"},"AQL vs SQL")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.arangodb.com/wp-content/uploads/2016/05/shell-reference-card.pdf"},"Shell cheatsheet")),Object(o.b)("li",{parentName:"ul"},"Admin",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"arangoimp",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u6570\u636e\u5bfc\u5165"),Object(o.b)("li",{parentName:"ul"},"\u652f\u6301: JSON, CSV, TSV"),Object(o.b)("li",{parentName:"ul"},"\u5bfc\u5165 CSV \u6216 TSV \u65f6\u5982\u679c\u6709\u5934,\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"li"},"--skip-lines=1")," \u8df3\u8fc7"))),Object(o.b)("li",{parentName:"ul"},"arangodump",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u6570\u636e\u8f6c\u50a8"))),Object(o.b)("li",{parentName:"ul"},"arangorestore",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u6062\u590d\u8f6c\u50a8\u7684\u6570\u636e"))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.arangodb.com/3.1/Manual/Administration/Configuration/"},"Configuration")),Object(o.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7aef\u53e3 8529, \u652f\u6301 HTTP \u548c TCP \u534f\u8bae"),Object(o.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u8d26\u53f7\u4e3a root, \u65e0\u5bc6\u7801"),Object(o.b)("li",{parentName:"ul"},"Key \u89c4\u8303",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.arangodb.com/3.1/Manual/DataModeling/NamingConventions/DocumentKeys.html"},"DocumentKeys")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"[_-:.@()+,=;$!*'%0-9a-zA-Z]{1,254}")),Object(o.b)("li",{parentName:"ul"},"UTF8 \u4e0d\u80fd\u4f5c\u4e3a key, \u53ef\u4ee5\u5148 SHA \u540e\u4f5c\u4e3a KEY")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"\ndocker run -d --restart always -v /etc/localtime:/etc/localtime:ro \\\n  -e ARANGO_RANDOM_ROOT_PASSWORD=1 \\\n  -v $PWD/arangodb/data:/var/lib/arangodb3 -v $PWD/arangodb/apps:/var/lib/arangodb3-apps \\\n  -p 8529:8529 \\\n  --name arangodb arangodb --tcp.reuse-address=true --http.hide-product-header=true --query.cache-mode=on\n\n# \u8fdc\u7a0b\u8fde\u63a5\n# \u5982\u679c\u662f https \u5219\u7528 ssl://mydomain.com\narangosh --server.endpoint http+tcp://192.168.1.1:8529 \\\n  --server.username $USERNAME --server.password $PASSWORD  --server.database Nodes\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"// https://docs.arangodb.com/3.1/Manual/Administration/ManagingUsers.html\n// \u7528\u6237\u7ba1\u7406\nvar users = require('@arangodb/users');\n// users.save(user, passwd, active, extra)\nusers.save('admin@testapp', 'mypassword');\nusers.grantDatabase('admin@testapp', 'testdb');\n\n// \u5bfc\u51fa\u67e5\u8be2\u7ed3\u679c\nrequire('fs').write('/var/lib/arangodb3/export.json', JSON.stringify(aql`FOR n IN Nodes return n`));\n// \u5bfc\u51fa\u62fc\u63a5\u540e\u7684\u6570\u636e\nrequire('fs').write(\n  '/var/lib/arangodb3/export.txt',\n  db\n    ._query(`return CONCAT_SEPARATOR(\"\\n\",FOR n IN Nodes FILTER n.name != null COLLECT col = n.name return col)`)\n    .toArray()[0],\n);\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"// \u5c06\u8fb9\u7684\u6570\u91cf\u66f4\u65b0\u5230\u8282\u70b9\u4e0a\nFOR doc IN documents\n  LET inEdgesCount = LENGTH(FOR v IN 1..1 INBOUND doc GRAPH 'edgeGraph' RETURN 1)\n  LET outEdgesCount = LENGTH(FOR v IN 1..1 OUTBOUND doc GRAPH 'edgeGraph' RETURN 1)\n  UPDATE doc WITH\n     {inEdgesCount: inEdgesCount, outEdgesCount: outEdgesCount} In Documents\n")),Object(o.b)("h2",{id:"aql"},"AQL"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://www.arangodb.com/why-arangodb/sql-aql-comparison/"},"https://www.arangodb.com/why-arangodb/sql-aql-comparison/")),Object(o.b)("h2",{id:"changelog"},"ChangeLog"),Object(o.b)("h3",{id:"32"},"3.2"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"arangoimp",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u652f\u6301 key \u8f6c\u6362"),Object(o.b)("li",{parentName:"ul"},"\u652f\u6301 jsonl \u683c\u5f0f"),Object(o.b)("li",{parentName:"ul"},"\u53ef\u6307\u5b9a\u7c7b\u578b auto \u901a\u8fc7\u6587\u4ef6\u6269\u5c55\u540d\u68c0\u6d4b\u7c7b\u578b")))))}p.isMDXComponent=!0}}]);