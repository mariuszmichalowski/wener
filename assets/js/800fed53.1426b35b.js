"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[62837],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),g=a,d=m["".concat(p,".").concat(g)]||m[g]||s[g]||l;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47889:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={id:"pgbouncer",title:"PgBouncer"},p=void 0,u={unversionedId:"db/relational/postgresql/pgbouncer",id:"db/relational/postgresql/pgbouncer",title:"PgBouncer",description:"- pgbouncer/pgbouncer",source:"@site/notes/db/relational/postgresql/pgbouncer.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/pgbouncer",permalink:"/notes/db/relational/postgresql/pgbouncer",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/relational/postgresql/pgbouncer.md",tags:[],version:"current",frontMatter:{id:"pgbouncer",title:"PgBouncer"},sidebar:"docs",previous:{title:"pgadmin4",permalink:"/notes/db/relational/postgresql/pgadmin4"},next:{title:"pgloader",permalink:"/notes/db/relational/postgresql/pgloader"}},c=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[{value:"\u57fa\u7840\u914d\u7f6e",id:"\u57fa\u7840\u914d\u7f6e",children:[],level:3}],level:2},{value:"\u7ba1\u7406",id:"\u7ba1\u7406",children:[],level:2}],s={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/pgbouncer/pgbouncer"},"pgbouncer/pgbouncer"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.pgbouncer.org/features.html"},"\u7279\u6027")),(0,l.kt)("li",{parentName:"ul"},"Session pooling",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u94fe\u63a5\u7eac\u5ea6"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u6240\u6709\u7279\u6027"))),(0,l.kt)("li",{parentName:"ul"},"Transaction pooling",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f1a\u8bdd\u7eac\u5ea6"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u7279\u6027",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"SET/RESET"),(0,l.kt)("li",{parentName:"ul"},"LISTEN/NOTIFY"),(0,l.kt)("li",{parentName:"ul"},"WITH HOLD CURSOR"),(0,l.kt)("li",{parentName:"ul"},"Protocol-level prepared plans"),(0,l.kt)("li",{parentName:"ul"},"PREPARE / DEALLOCATE"),(0,l.kt)("li",{parentName:"ul"},"PRESERVE/DELETE ROWS temp tables"),(0,l.kt)("li",{parentName:"ul"},"LOAD"))))),(0,l.kt)("li",{parentName:"ul"},"Statement pooling",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8bed\u53e5\u7eac\u5ea6"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u4e8b\u52a1"),(0,l.kt)("li",{parentName:"ul"},"\u5f3a\u5236 autocommit"))),(0,l.kt)("li",{parentName:"ul"},"2 kB per connection by default"),(0,l.kt)("li",{parentName:"ul"},"\u591a\u540e\u7aef\u670d\u52a1"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u7ebf\u4ece\u65b0\u914d\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u7ebf restart/upgrade"))),(0,l.kt)("li",{parentName:"ul"},"\u7ba1\u7406",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/kwent/pgbouncerhero"},"kwent/pgbouncerhero")," - PgBouncer WebUI"))),(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"prepared statements \u53ea\u80fd\u5728 session \u6a21\u5f0f\u4e0b\uff0c\u4e14 ",(0,l.kt)("inlineCode",{parentName:"li"},"server_reset_query = DISCARD ALL;")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"DEALLOCATE ALL;"))))),(0,l.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.pgbouncer.org/config.html"},"\u914d\u7f6e"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"# \u5f15\u5165\u5176\u4ed6\u914d\u7f6e\n%include filename\n")),(0,l.kt)("h3",{id:"\u57fa\u7840\u914d\u7f6e"},"\u57fa\u7840\u914d\u7f6e"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"/etc/pgbouncer/pgbouncer.ini")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"[databases]\nmydbuser = host=192.168.1.2 port=5433 user=mydb\n\n[pgbouncer]\nlisten_addr = 0.0.0.0\n# \u4e0d\u540c\u7aef\u53e3\nlisten_port = 15432\nunix_socket_dir =\nuser = postgres\nauth_file = /etc/pgbouncer/userlist.txt\nauth_type = md5\nignore_startup_parameters = extra_float_digits\n\nadmin_users = postgres\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"/etc/pgbouncer/userlist.txt")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},'"mydbuser" "password"\n')),(0,l.kt)("h2",{id:"\u7ba1\u7406"},"\u7ba1\u7406"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6e admin_users"),(0,l.kt)("li",{parentName:"ul"},"\u94fe\u63a5",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5916\u90e8 ",(0,l.kt)("inlineCode",{parentName:"li"},"postgres://postgres@hostname-of-container/pgbouncer")),(0,l.kt)("li",{parentName:"ul"},"\u5185\u90e8 ",(0,l.kt)("inlineCode",{parentName:"li"},"postgres://postgres://127.0.0.1/pgbouncer"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u81ea\u5b9a\u4e49\u914d\u7f6e\nSHOW STATS;\nSHOW SERVERS;\nSHOW CLIENTS;\nSHOW POOLS;\n\n# \u53ef\u4ee5\u96f6\u65f6\u65ad\u5f00\u540e\u7aef\u94fe\u63a5\uff0c\u4f8b\u5982\u540e\u7aef\u5347\u7ea7\uff0c\u524d\u7aef\u94fe\u63a5\u4e0d\u65ad\nPAUSE;\nRESUME;\n")))}m.isMDXComponent=!0}}]);