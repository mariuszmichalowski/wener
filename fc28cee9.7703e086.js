(window.webpackJsonp=window.webpackJsonp||[]).push([[1082],{1155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return o}));var a=n(3),r=n(8),l=(n(0),n(1172)),b={title:"pgadmin4"},c={unversionedId:"db/relational/postgresql/pgadmin4",id:"db/relational/postgresql/pgadmin4",isDocsHomePage:!1,title:"pgadmin4",description:"- postgres/pgadmin4 \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/db/relational/postgresql/pgadmin4.md",slug:"/db/relational/postgresql/pgadmin4",permalink:"/notes/db/relational/postgresql/pgadmin4",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/relational/postgresql/pgadmin4.md",version:"current",sidebar:"docs",previous:{title:"pg_cron",permalink:"/notes/db/relational/postgresql/pg_cron"},next:{title:"PgBouncer",permalink:"/notes/db/relational/postgresql/pgbouncer"}},p=[{value:"Container",id:"container",children:[]}],i={toc:p};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/postgres/pgadmin4"},"postgres/pgadmin4")," \u662f\u4ec0\u4e48\uff1f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u57fa\u4e8e Web \u7684 PG \u7ba1\u7406\u5de5\u5177"),Object(l.b)("li",{parentName:"ul"},"Python+jQuery+Bootstrap"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u684c\u9762 - NWjs \u5c01\u88c5")))),Object(l.b)("h2",{id:"container"},"Container"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.pgadmin.org/docs/pgadmin4/latest/container_deployment.html"},"Container Deployment"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# PG \u5de5\u5177\u76ee\u5f55\n# /usr/local/pgsql-9.6\n# /usr/local/pgsql-10\n# /usr/local/pgsql-11\n# /usr/local/pgsql-12\n# /usr/local/pgsql-13\ndocker pull dpage/pgadmin4\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u914d\u7f6e\u52a0\u8f7d\u987a\u5e8f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"/pgadmin4/config.py"),Object(l.b)("li",{parentName:"ul"},"/pgadmin4/config_distro.py"),Object(l.b)("li",{parentName:"ul"},"/pgadmin4/config_local.py"))),Object(l.b)("li",{parentName:"ul"},"\u76ee\u5f55",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"/var/lib/pgadmin",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5de5\u4f5c\u76ee\u5f55 - \u6240\u6709\u64cd\u4f5c\uff0c\u5305\u62ec\u914d\u7f6e\u6570\u636e\u5e93\uff08SQLite\uff09"))),Object(l.b)("li",{parentName:"ul"},"/pgadmin4/servers.json",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"PG \u670d\u52a1\u5b9a\u4e49 - \u7b2c\u4e00\u6b21\u542f\u52a8\u52a0\u8f7d"))),Object(l.b)("li",{parentName:"ul"},"/certs/server.cert"),Object(l.b)("li",{parentName:"ul"},"/certs/server.key")))),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"env"),Object(l.b)("th",{parentName:"tr",align:null},"default"),Object(l.b)("th",{parentName:"tr",align:null},"desc"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"PGADMIN_DEFAULT_EMAIL"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"PGADMIN_DEFAULT_PASSWORD"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"PGADMIN_DISABLE_POSTFIX"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"PGADMIN_ENABLE_TLS"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"PGADMIN_LISTEN_ADDRESS"),Object(l.b)("td",{parentName:"tr",align:null},"0.0.0.0"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"PGADMIN_LISTEN_PORT"),Object(l.b)("td",{parentName:"tr",align:null},"80,443"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"PGADMIN_SERVER_JSON_FILE"),Object(l.b)("td",{parentName:"tr",align:null},"/pgadmin4/servers.json"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"GUNICORN_ACCESS_LOGFILE"),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"stdout")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"GUNICORN_THREADS"),Object(l.b)("td",{parentName:"tr",align:null},"25"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"PGADMIN_CONFIG_<NAME>")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"/pgadmin4/config_distro.py")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"SCRIPT_NAME"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"subpath")))),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"conf"),Object(l.b)("th",{parentName:"tr",align:null},"demo"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"PGADMIN_CONFIG_ENHANCED_COOKIE_PROTECTION"),Object(l.b)("td",{parentName:"tr",align:null},"True")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"PGADMIN_CONFIG_LOGIN_BANNER"),Object(l.b)("td",{parentName:"tr",align:null},"My DB")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"PGADMIN_CONFIG_CONSOLE_LOG_LEVEL"),Object(l.b)("td",{parentName:"tr",align:null},"10")))))}o.isMDXComponent=!0},1172:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),o=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=o(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=o(n),O=a,d=u["".concat(b,".").concat(O)]||u[O]||m[O]||l;return n?r.a.createElement(d,c(c({ref:t},i),{},{components:n})):r.a.createElement(d,c({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=O;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,b[1]=c;for(var i=2;i<l;i++)b[i]=n[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);