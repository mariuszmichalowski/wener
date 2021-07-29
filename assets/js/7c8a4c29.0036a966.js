"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[40],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return t?a.createElement(g,l(l({ref:n},s),{},{components:t})):a.createElement(g,l({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},21061:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var a=t(22122),r=t(19756),o=(t(67294),t(3905)),l=["components"],i={title:"ArangoDB"},p=void 0,u={unversionedId:"db/graph/arangodb",id:"db/graph/arangodb",isDocsHomePage:!1,title:"ArangoDB",description:"- arangodb/arangodb",source:"@site/notes/db/graph/arangodb.md",sourceDirName:"db/graph",slug:"/db/graph/arangodb",permalink:"/notes/db/graph/arangodb",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/graph/arangodb.md",version:"current",frontMatter:{title:"ArangoDB"},sidebar:"docs",previous:{title:"ScyllaDB",permalink:"/notes/db/column/scylladb"},next:{title:"Graph Database Awesome",permalink:"/notes/db/graph/graphdb-awesome"}},s=[{value:"AQL",id:"aql",children:[]},{value:"ChangeLog",id:"changelog",children:[{value:"3.2",id:"32",children:[]}]}],c={toc:s};function d(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/arangodb/arangodb"},"arangodb/arangodb"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Apache-2.0, C++, JS"),(0,o.kt)("li",{parentName:"ul"},"Graph+Document"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.arangodb.com/why-arangodb/sql-aql-comparison/"},"AQL vs SQL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.arangodb.com/wp-content/uploads/2016/05/shell-reference-card.pdf"},"Shell cheatsheet")),(0,o.kt)("li",{parentName:"ul"},"Admin",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"arangoimp",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u6570\u636e\u5bfc\u5165"),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301: JSON, CSV, TSV"),(0,o.kt)("li",{parentName:"ul"},"\u5bfc\u5165 CSV \u6216 TSV \u65f6\u5982\u679c\u6709\u5934,\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"--skip-lines=1")," \u8df3\u8fc7"))),(0,o.kt)("li",{parentName:"ul"},"arangodump",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u6570\u636e\u8f6c\u50a8"))),(0,o.kt)("li",{parentName:"ul"},"arangorestore",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u6062\u590d\u8f6c\u50a8\u7684\u6570\u636e"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.arangodb.com/3.1/Manual/Administration/Configuration/"},"Configuration")),(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7aef\u53e3 8529, \u652f\u6301 HTTP \u548c TCP \u534f\u8bae"),(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u8d26\u53f7\u4e3a root, \u65e0\u5bc6\u7801"),(0,o.kt)("li",{parentName:"ul"},"Key \u89c4\u8303",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.arangodb.com/3.1/Manual/DataModeling/NamingConventions/DocumentKeys.html"},"DocumentKeys")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[_-:.@()+,=;$!*'%0-9a-zA-Z]{1,254}")),(0,o.kt)("li",{parentName:"ul"},"UTF8 \u4e0d\u80fd\u4f5c\u4e3a key, \u53ef\u4ee5\u5148 SHA \u540e\u4f5c\u4e3a KEY")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\ndocker run -d --restart always -v /etc/localtime:/etc/localtime:ro \\\n  -e ARANGO_RANDOM_ROOT_PASSWORD=1 \\\n  -v $PWD/arangodb/data:/var/lib/arangodb3 -v $PWD/arangodb/apps:/var/lib/arangodb3-apps \\\n  -p 8529:8529 \\\n  --name arangodb arangodb --tcp.reuse-address=true --http.hide-product-header=true --query.cache-mode=on\n\n# \u8fdc\u7a0b\u8fde\u63a5\n# \u5982\u679c\u662f https \u5219\u7528 ssl://mydomain.com\narangosh --server.endpoint http+tcp://192.168.1.1:8529 \\\n  --server.username $USERNAME --server.password $PASSWORD  --server.database Nodes\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// https://docs.arangodb.com/3.1/Manual/Administration/ManagingUsers.html\n// \u7528\u6237\u7ba1\u7406\nvar users = require('@arangodb/users');\n// users.save(user, passwd, active, extra)\nusers.save('admin@testapp', 'mypassword');\nusers.grantDatabase('admin@testapp', 'testdb');\n\n// \u5bfc\u51fa\u67e5\u8be2\u7ed3\u679c\nrequire('fs').write('/var/lib/arangodb3/export.json', JSON.stringify(aql`FOR n IN Nodes return n`));\n// \u5bfc\u51fa\u62fc\u63a5\u540e\u7684\u6570\u636e\nrequire('fs').write(\n  '/var/lib/arangodb3/export.txt',\n  db\n    ._query(`return CONCAT_SEPARATOR(\"\\n\",FOR n IN Nodes FILTER n.name != null COLLECT col = n.name return col)`)\n    .toArray()[0],\n);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// \u5c06\u8fb9\u7684\u6570\u91cf\u66f4\u65b0\u5230\u8282\u70b9\u4e0a\nFOR doc IN documents\n  LET inEdgesCount = LENGTH(FOR v IN 1..1 INBOUND doc GRAPH 'edgeGraph' RETURN 1)\n  LET outEdgesCount = LENGTH(FOR v IN 1..1 OUTBOUND doc GRAPH 'edgeGraph' RETURN 1)\n  UPDATE doc WITH\n     {inEdgesCount: inEdgesCount, outEdgesCount: outEdgesCount} In Documents\n")),(0,o.kt)("h2",{id:"aql"},"AQL"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.arangodb.com/why-arangodb/sql-aql-comparison/"},"https://www.arangodb.com/why-arangodb/sql-aql-comparison/")),(0,o.kt)("h2",{id:"changelog"},"ChangeLog"),(0,o.kt)("h3",{id:"32"},"3.2"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"arangoimp",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301 key \u8f6c\u6362"),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301 jsonl \u683c\u5f0f"),(0,o.kt)("li",{parentName:"ul"},"\u53ef\u6307\u5b9a\u7c7b\u578b auto \u901a\u8fc7\u6587\u4ef6\u6269\u5c55\u540d\u68c0\u6d4b\u7c7b\u578b")))))}d.isMDXComponent=!0}}]);