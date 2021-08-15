"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[29859],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,b=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(b,s(s({ref:t},p),{},{components:n})):r.createElement(b,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36650:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),s=["components"],l={title:"Database FAQ"},i=void 0,c={unversionedId:"db/db-faq",id:"db/db-faq",isDocsHomePage:!1,title:"Database FAQ",description:"Connect String / DSN",source:"@site/notes/db/db-faq.md",sourceDirName:"db",slug:"/db/db-faq",permalink:"/notes/db/db-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/db-faq.md",version:"current",frontMatter:{title:"Database FAQ"},sidebar:"docs",previous:{title:"Database Awesome",permalink:"/notes/db/db-awesome"},next:{title:"PostgresSQL",permalink:"/notes/db/relational/postgresql/postgresql"}},p=[{value:"Connect String / DSN",id:"connect-string--dsn",children:[{value:"PostgreSQL",id:"postgresql",children:[]}]}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"connect-string--dsn"},"Connect String / DSN"),(0,o.kt)("h3",{id:"postgresql"},"PostgreSQL"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING"},"libpq connect")),(0,o.kt)("li",{parentName:"ul"},"host, hostaddr, port, dbname, user, password, passfile"),(0,o.kt)("li",{parentName:"ul"},"channel_binding, connect_timeout, client_encoding"),(0,o.kt)("li",{parentName:"ul"},"options"),(0,o.kt)("li",{parentName:"ul"},"application_name, fallback_application_name"),(0,o.kt)("li",{parentName:"ul"},"keepalives, keepalives_idle, keepalives_interval, keepalives_count"),(0,o.kt)("li",{parentName:"ul"},"tcp_user_timeout, tty"),(0,o.kt)("li",{parentName:"ul"},"replication"),(0,o.kt)("li",{parentName:"ul"},"gssencmode, krbsrvname, gsslib"),(0,o.kt)("li",{parentName:"ul"},"sslmode - prefer,disable,allow,require,verify-ca,verify-full"),(0,o.kt)("li",{parentName:"ul"},"requiressl, sslcompression, sslcert, sslkey, sslpassword, sslrootcert, sslcrl"),(0,o.kt)("li",{parentName:"ul"},"ssl_min_protocol_version, ssl_max_protocol_version"),(0,o.kt)("li",{parentName:"ul"},"requirepeer"),(0,o.kt)("li",{parentName:"ul"},"service"),(0,o.kt)("li",{parentName:"ul"},"target_session_attrs")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"# postgres\nhost=localhost port=5432 dbname=mydb connect_timeout=10\n# postgresql://[user[:password]@][host][:port][,...][/dbname][?param1=value1&...]\npostgresql://\npostgres://\n\npostgresql://other@localhost/otherdb?connect_timeout=10&application_name=myapp\npostgresql://host1:123,host2:456/somedb?target_session_attrs=any&application_name=myapp\n\npostgresql:///dbname?host=/var/lib/postgresql\n")),(0,o.kt)("p",null,"\b \u4e0d\u652f\u6301\u8bbe\u7f6e schema\uff0c\u53ef\u670d\u52a1\u7aef\u63a7\u5236"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u9488\u5bf9\u7528\u6237\u4fee\u6539\nALTER ROLE username SET search_path TO a,b,c;\n-- \u9488\u5bf9 db \u4fee\u6539\nALTER DATABASE database_name SET search_path TO schema1,schema2;\n-- \u5168\u90e8\u53ea\u5141\u8bb8\u8bbf\u95ee\u81ea\u5df1 schema\nALTER ROLE ALL SET search_path = \"$user\";\n\nSELECT pg_catalog.set_config('search_path', '', false);\n")))}m.isMDXComponent=!0}}]);