"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[40],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(a),c=r,g=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return a?n.createElement(g,o(o({ref:t},s),{},{components:a})):n.createElement(g,o({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1189:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=["components"],i={title:"ArangoDB"},p=void 0,u={unversionedId:"db/graph/arangodb",id:"db/graph/arangodb",title:"ArangoDB",description:"- arangodb/arangodb",source:"@site/notes/db/graph/arangodb.md",sourceDirName:"db/graph",slug:"/db/graph/arangodb",permalink:"/notes/db/graph/arangodb",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/graph/arangodb.md",tags:[],version:"current",frontMatter:{title:"ArangoDB"},sidebar:"docs",previous:{title:"GraphDB Awesome",permalink:"/notes/db/graph/graph-awesome"},next:{title:"Cayley",permalink:"/notes/db/graph/cayley"}},s=[{value:"AQL",id:"aql",children:[],level:2},{value:"FTS",id:"fts",children:[],level:2},{value:"ChangeLog",id:"changelog",children:[{value:"3.5",id:"35",children:[],level:3},{value:"3.2",id:"32",children:[],level:3}],level:2}],m={toc:s};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/arangodb/arangodb"},"arangodb/arangodb"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Apache-2.0, C++, JS"),(0,l.kt)("li",{parentName:"ul"},"Graph+Document+KV"),(0,l.kt)("li",{parentName:"ul"},"\u540e\u7aef\u5b58\u50a8 rocksdb"),(0,l.kt)("li",{parentName:"ul"},"\u5185\u7f6e V8"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.arangodb.com/why-arangodb/sql-aql-comparison/"},"AQL vs SQL")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.arangodb.com/wp-content/uploads/2016/05/shell-reference-card.pdf"},"Shell cheatsheet")),(0,l.kt)("li",{parentName:"ul"},"Admin",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"arangoimp",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u5bfc\u5165"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301: JSON, CSV, TSV"),(0,l.kt)("li",{parentName:"ul"},"\u5bfc\u5165 CSV \u6216 TSV \u65f6\u5982\u679c\u6709\u5934,\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"--skip-lines=1")," \u8df3\u8fc7"))),(0,l.kt)("li",{parentName:"ul"},"arangodump",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u8f6c\u50a8"))),(0,l.kt)("li",{parentName:"ul"},"arangorestore",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6062\u590d\u8f6c\u50a8\u7684\u6570\u636e"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.arangodb.com/3.1/Manual/Administration/Configuration/"},"Configuration")),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7aef\u53e3 8529, \u652f\u6301 HTTP \u548c TCP \u534f\u8bae"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u8d26\u53f7\u4e3a root, \u65e0\u5bc6\u7801"),(0,l.kt)("li",{parentName:"ul"},"Key \u89c4\u8303",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.arangodb.com/3.1/Manual/DataModeling/NamingConventions/DocumentKeys.html"},"DocumentKeys")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[_-:.@()+,=;$!*'%0-9a-zA-Z]{1,254}")),(0,l.kt)("li",{parentName:"ul"},"UTF8 \u4e0d\u80fd\u4f5c\u4e3a key, \u53ef\u4ee5\u5148 SHA \u540e\u4f5c\u4e3a KEY"))),(0,l.kt)("li",{parentName:"ul"},"ARANGO_RANDOM_ROOT_PASSWORD=1"),(0,l.kt)("li",{parentName:"ul"},"ARANGO_NO_AUTH=1"),(0,l.kt)("li",{parentName:"ul"},"ARANGO_ROOT_PASSWORD=somepassword"),(0,l.kt)("li",{parentName:"ul"},"\u9650\u5236\u8d44\u6e90\u4f7f\u7528",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ARANGODB_OVERRIDE_DETECTED_TOTAL_MEMORY"),(0,l.kt)("li",{parentName:"ul"},"ARANGODB_OVERRIDE_DETECTED_NUMBER_OF_CORES"))),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u5347\u7ea7\u4e86\u7248\u672c\uff0c\u7b2c\u4e00\u6b21\u542f\u52a8\u6dfb\u52a0 --database.auto-upgrade"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.arangodb.com/solutions/case-studies/fbi-grade-case-mgmt-investigative-community/"},"Meet Kaseware: FBI-grade case management for the larger investigative community"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it -v /etc/localtime:/etc/localtime:ro \\\n  -e ARANGO_ROOT_PASSWORD=password \\\n  -v $PWD/arangodb/data:/var/lib/arangodb3 -v $PWD/arangodb/apps:/var/lib/arangodb3-apps \\\n  -p 8529:8529 \\\n  --name arangodb arangodb --tcp.reuse-address=true --http.hide-product-header=true --query.cache-mode=on\n\n# \u8fdc\u7a0b\u8fde\u63a5\n# \u5982\u679c\u662f https \u5219\u7528 ssl://mydomain.com\narangosh --server.endpoint http+tcp://192.168.1.1:8529 \\\n  --server.username $USERNAME --server.password $PASSWORD  --server.database Nodes\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// https://docs.arangodb.com/3.1/Manual/Administration/ManagingUsers.html\n// \u7528\u6237\u7ba1\u7406\nvar users = require('@arangodb/users');\n// users.save(user, passwd, active, extra)\nusers.save('admin@testapp', 'mypassword');\nusers.grantDatabase('admin@testapp', 'testdb');\n\n// \u5bfc\u51fa\u67e5\u8be2\u7ed3\u679c\nrequire('fs').write('/var/lib/arangodb3/export.json', JSON.stringify(aql`FOR n IN Nodes return n`));\n// \u5bfc\u51fa\u62fc\u63a5\u540e\u7684\u6570\u636e\nrequire('fs').write(\n  '/var/lib/arangodb3/export.txt',\n  db\n    ._query(`return CONCAT_SEPARATOR(\"\\n\",FOR n IN Nodes FILTER n.name != null COLLECT col = n.name return col)`)\n    .toArray()[0],\n);\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"// \u5c06\u8fb9\u7684\u6570\u91cf\u66f4\u65b0\u5230\u8282\u70b9\u4e0a\nFOR doc IN documents\n  LET inEdgesCount = LENGTH(FOR v IN 1..1 INBOUND doc GRAPH 'edgeGraph' RETURN 1)\n  LET outEdgesCount = LENGTH(FOR v IN 1..1 OUTBOUND doc GRAPH 'edgeGraph' RETURN 1)\n  UPDATE doc WITH\n     {inEdgesCount: inEdgesCount, outEdgesCount: outEdgesCount} In Documents\n")),(0,l.kt)("h2",{id:"aql"},"AQL"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.arangodb.com/why-arangodb/sql-aql-comparison/"},"https://www.arangodb.com/why-arangodb/sql-aql-comparison/")),(0,l.kt)("h2",{id:"fts"},"FTS"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'RETURN TOKENS("\u4eca\u5929\u7684\u5929\u6c14\u771f\u7684\u5f88\u597d", "text_zh")\n')),(0,l.kt)("h2",{id:"changelog"},"ChangeLog"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.arangodb.com/docs/stable/release-notes.html"},"Release Notes"))),(0,l.kt)("h3",{id:"35"},"3.5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ArangoSearch \u641c\u7d22\u652f\u6301\u4e2d\u6587",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"TFIDF BM25"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u4e2d\u6587")))),(0,l.kt)("h3",{id:"32"},"3.2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"arangoimp",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 key \u8f6c\u6362"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 jsonl \u683c\u5f0f"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u6307\u5b9a\u7c7b\u578b auto \u901a\u8fc7\u6587\u4ef6\u6269\u5c55\u540d\u68c0\u6d4b\u7c7b\u578b")))))}d.isMDXComponent=!0}}]);