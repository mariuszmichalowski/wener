(window.webpackJsonp=window.webpackJsonp||[]).push([[365],{1172:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),b=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=b(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=b(r),u=a,m=d["".concat(s,".").concat(u)]||d[u]||p[u]||i;return r?n.a.createElement(m,o(o({ref:t},l),{},{components:r})):n.a.createElement(m,o({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},439:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return b}));var a=r(3),n=r(8),i=(r(0),r(1172)),s={id:"redis",title:"Redis"},o={unversionedId:"db/kv/redis",id:"db/kv/redis",isDocsHomePage:!1,title:"Redis",description:"Tips",source:"@site/notes/db/kv/redis.md",slug:"/db/kv/redis",permalink:"/notes/db/kv/redis",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/kv/redis.md",version:"current",sidebar:"docs",previous:{title:"Redis Version",permalink:"/notes/db/kv/redis-version"},next:{title:"Apache Cassandra",permalink:"/notes/db/column/cassandra"}},c=[{value:"Tips",id:"tips",children:[]},{value:"Stream",id:"stream",children:[]},{value:"Module",id:"module",children:[]},{value:"FAQ",id:"faq",children:[{value:"MISCONF Redis is configured to save RDB snapshots, but is currently not able to persist on disk. Commands that may modify the data set are disabled.",id:"misconf-redis-is-configured-to-save-rdb-snapshots-but-is-currently-not-able-to-persist-on-disk-commands-that-may-modify-the-data-set-are-disabled",children:[]},{value:"RESP3",id:"resp3",children:[]}]}],l={toc:c};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://download.redis.io/redis-stable/redis.conf"},"redis.conf")),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://redislabs.com/blog/5-key-takeaways-for-developing-with-redis"},"5 Key Takeaways for Developing with Redis"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Keep Track of Your Keys"),Object(i.b)("li",{parentName:"ol"},"Keep Track of the Length of Your Key Names"),Object(i.b)("li",{parentName:"ol"},"Use the Right Data Structures"),Object(i.b)("li",{parentName:"ol"},"Use SCAN, Never Use KEYS"),Object(i.b)("li",{parentName:"ol"},"Use Server-Side Lua Scripts"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://scaleyourcode.com/blog/article/15"},"Redis configuration for production"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=X01gn5a2WQ0"},"YouTube")))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/RedisLabsModules/redis-graph/"},"RedisGraph"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"A graph database as a Redis module")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# \u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u542f\u52a8\nwget http://download.redis.io/redis-stable/redis.conf\nredis-server redis.conf\n# macOS \u5b89\u88c5\nbrew install redis\n# \u901a\u8fc7 docker \u542f\u52a8\n# \u6570\u636e\u5b58\u50a8\u4e8e ~/data/redis\ndocker run --rm -it -v ~/data/redis:/data -p 6379:6379 --name my-redis redis redis-server --appendonly ye\n\nredis-server --bind=0.0.0.0\n")),Object(i.b)("h2",{id:"stream"},"Stream"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"redis ",Object(i.b)("a",{parentName:"li",href:"https://gist.github.com/antirez/4e7049ce4fce4aa61bf0cfbc3672e64d"},"api")),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://gist.github.com/antirez/68e67f3251d10f026861be2d0fe0d2f4"},"Redis Streams: consumer groups v2 specification document")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://antirez.com/news/116"},"An update on Redis Streams development"))))),Object(i.b)("h2",{id:"module"},"Module"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://redislabs.com/blog/writing-redis-modules"},"\u5199 Redis \u6a21\u5757\u7684\u6559\u7a0b")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://redismodules.com/"},"Redis \u6a21\u5757\u4ed3\u5e93")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://antirez.com/news/106"},"Antirez \u5173\u4e8e Redis \u6a21\u5757\u7684\u535a\u5ba2")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/wenerme/go-rm"},"wenerme/go-rm"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4f7f\u7528 Golang \u5199 Redis \u6a21\u5757")))),Object(i.b)("h2",{id:"faq"},"FAQ"),Object(i.b)("h3",{id:"misconf-redis-is-configured-to-save-rdb-snapshots-but-is-currently-not-able-to-persist-on-disk-commands-that-may-modify-the-data-set-are-disabled"},"MISCONF Redis is configured to save RDB snapshots, but is currently not able to persist on disk. Commands that may modify the data set are disabled."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://gist.github.com/kapkaev/4619127"},"https://gist.github.com/kapkaev/4619127"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"redis-cli\n# config set stop-writes-on-bgsave-error no\n")),Object(i.b)("h3",{id:"resp3"},"RESP3"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://gist.github.com/antirez/2bc68a9e9e45395e297d288453d5d54c"},"https://gist.github.com/antirez/2bc68a9e9e45395e297d288453d5d54c")),Object(i.b)("p",null,"\u76ee\u524d\u7684 RESP \u662f QA \u6a21\u5f0f\uff0c\u6027\u80fd\u548c\u5904\u7406\u80fd\u529b\u4e0a\u6709\u9650"))}b.isMDXComponent=!0}}]);