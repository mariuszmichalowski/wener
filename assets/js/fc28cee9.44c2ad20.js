"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[58344],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return g}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),u=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},m=function(t){var e=u(t.components);return r.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},N=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),N=u(n),g=a,s=N["".concat(o,".").concat(g)]||N[g]||d[g]||l;return n?r.createElement(s,p(p({ref:e},m),{},{components:n})):r.createElement(s,p({ref:e},m))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,p=new Array(l);p[0]=N;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:a,p[1]=i;for(var u=2;u<l;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}N.displayName="MDXCreateElement"},69588:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return m},default:function(){return N}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),p=["components"],i={title:"pgadmin4"},o=void 0,u={unversionedId:"db/relational/postgresql/pgadmin4",id:"db/relational/postgresql/pgadmin4",isDocsHomePage:!1,title:"pgadmin4",description:"- postgres/pgadmin4 \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/db/relational/postgresql/pgadmin4.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/pgadmin4",permalink:"/notes/db/relational/postgresql/pgadmin4",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/relational/postgresql/pgadmin4.md",version:"current",frontMatter:{title:"pgadmin4"},sidebar:"docs",previous:{title:"pg_cron",permalink:"/notes/db/relational/postgresql/pg_cron"},next:{title:"PgBouncer",permalink:"/notes/db/relational/postgresql/pgbouncer"}},m=[{value:"Container",id:"container",children:[]}],d={toc:m};function N(t){var e=t.components,n=(0,a.Z)(t,p);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/postgres/pgadmin4"},"postgres/pgadmin4")," \u662f\u4ec0\u4e48\uff1f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e Web \u7684 PG \u7ba1\u7406\u5de5\u5177"),(0,l.kt)("li",{parentName:"ul"},"Python+jQuery+Bootstrap"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u684c\u9762 - NWjs \u5c01\u88c5")))),(0,l.kt)("h2",{id:"container"},"Container"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.pgadmin.org/docs/pgadmin4/latest/container_deployment.html"},"Container Deployment"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# PG \u5de5\u5177\u76ee\u5f55\n# /usr/local/pgsql-9.6\n# /usr/local/pgsql-10\n# /usr/local/pgsql-11\n# /usr/local/pgsql-12\n# /usr/local/pgsql-13\ndocker pull dpage/pgadmin4\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u52a0\u8f7d\u987a\u5e8f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"/pgadmin4/config.py"),(0,l.kt)("li",{parentName:"ul"},"/pgadmin4/config_distro.py"),(0,l.kt)("li",{parentName:"ul"},"/pgadmin4/config_local.py"))),(0,l.kt)("li",{parentName:"ul"},"\u76ee\u5f55",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"/var/lib/pgadmin",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5de5\u4f5c\u76ee\u5f55 - \u6240\u6709\u64cd\u4f5c\uff0c\u5305\u62ec\u914d\u7f6e\u6570\u636e\u5e93\uff08SQLite\uff09"))),(0,l.kt)("li",{parentName:"ul"},"/pgadmin4/servers.json",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"PG \u670d\u52a1\u5b9a\u4e49 - \u7b2c\u4e00\u6b21\u542f\u52a8\u52a0\u8f7d"))),(0,l.kt)("li",{parentName:"ul"},"/certs/server.cert"),(0,l.kt)("li",{parentName:"ul"},"/certs/server.key")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"env"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null},"desc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PGADMIN_DEFAULT_EMAIL"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PGADMIN_DEFAULT_PASSWORD"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PGADMIN_DISABLE_POSTFIX"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PGADMIN_ENABLE_TLS"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PGADMIN_LISTEN_ADDRESS"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0.0.0"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PGADMIN_LISTEN_PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"80,443"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PGADMIN_SERVER_JSON_FILE"),(0,l.kt)("td",{parentName:"tr",align:null},"/pgadmin4/servers.json"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GUNICORN_ACCESS_LOGFILE"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"stdout")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GUNICORN_THREADS"),(0,l.kt)("td",{parentName:"tr",align:null},"25"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PGADMIN_CONFIG_<NAME>")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"/pgadmin4/config_distro.py")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SCRIPT_NAME"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"subpath")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"conf"),(0,l.kt)("th",{parentName:"tr",align:null},"demo"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PGADMIN_CONFIG_ENHANCED_COOKIE_PROTECTION"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PGADMIN_CONFIG_LOGIN_BANNER"),(0,l.kt)("td",{parentName:"tr",align:null},"My DB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PGADMIN_CONFIG_CONSOLE_LOG_LEVEL"),(0,l.kt)("td",{parentName:"tr",align:null},"10")))))}N.isMDXComponent=!0}}]);