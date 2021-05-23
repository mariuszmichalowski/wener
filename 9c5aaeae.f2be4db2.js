(window.webpackJsonp=window.webpackJsonp||[]).push([[580],{1027:function(e,a,n){"use strict";n.d(a,"a",(function(){return p})),n.d(a,"b",(function(){return g}));var t=n(0),r=n.n(t);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var a=r.a.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},p=function(e){var a=b(e.components);return r.a.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},f=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),f=t,g=p["".concat(i,".").concat(f)]||p[f]||u[f]||l;return n?r.a.createElement(g,o(o({ref:a},s),{},{components:n})):r.a.createElement(g,o({ref:a},s))}));function g(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o.mdxType="string"==typeof e?e:t,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},654:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return i})),n.d(a,"metadata",(function(){return o})),n.d(a,"toc",(function(){return c})),n.d(a,"default",(function(){return b}));var t=n(3),r=n(8),l=(n(0),n(1027)),i={id:"grafana",title:"Grafana"},o={unversionedId:"service/observability/grafana",id:"service/observability/grafana",isDocsHomePage:!1,title:"Grafana",description:"Tips",source:"@site/notes/service/observability/grafana.md",slug:"/service/observability/grafana",permalink:"/notes/service/observability/grafana",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/observability/grafana.md",version:"current",sidebar:"docs",previous:{title:"Grafana Version",permalink:"/notes/service/observability/grafana-version"},next:{title:"netdata",permalink:"/notes/service/observability/netdata"}},c=[{value:"Tips",id:"tips",children:[]},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]},{value:"FAQ",id:"faq",children:[]},{value:"msg=&quot;Failed to look up user based on cookie&quot; logger=context error=&quot;user token not found&quot;",id:"msgfailed-to-look-up-user-based-on-cookie-loggercontext-erroruser-token-not-found",children:[]}],s={toc:c};function b(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(t.a)({},s,n,{components:a,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u8981\u6c42",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"255 MB\uff0c1 CPU"),Object(l.b)("li",{parentName:"ul"},"\u6570\u636e\u5e93",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"SQLite"),Object(l.b)("li",{parentName:"ul"},"MySQL"),Object(l.b)("li",{parentName:"ul"},"PostgreSQL"))))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://grafana.com/grafana/plugins"},"\u63d2\u4ef6\u5217\u8868")),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u6388\u6743\u65b9\u5f0f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"basic\u3001generic oauth\u3001anonymous\u3001azuread\u3001github\u3001gitlab\u3001google\u3001grafana_com\u3001grafananet\u3001ldap\u3001okta\u3001proxy\u3001saml"))),Object(l.b)("li",{parentName:"ul"},"\u4f01\u4e1a\u7248",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6570\u636e\u6e90\u6743\u9650"),Object(l.b)("li",{parentName:"ul"},"\u62a5\u8868"),Object(l.b)("li",{parentName:"ul"},"SAML"),Object(l.b)("li",{parentName:"ul"},"\u589e\u5f3a LDAP"),Object(l.b)("li",{parentName:"ul"},"\u56e2\u961f\u540c\u6b65 - LDAP, GitHub OAuth, Auth Proxy, Okta - Grafana \u4f5c\u4e3a IdP"),Object(l.b)("li",{parentName:"ul"},"White labeling"),Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528\u7edf\u8ba1"),Object(l.b)("li",{parentName:"ul"},"\u9762\u677f\u70ed\u95e8\u6392\u5e8f"),Object(l.b)("li",{parentName:"ul"},"\u67e5\u627e\u672a\u4f7f\u7528\u9762\u677f"),Object(l.b)("li",{parentName:"ul"},"\u4f01\u4e1a\u63d2\u4ef6 - Oracle\u3001Splunk\u3001Service Now\u3001Dynatrace\u3001DataDog\u3001AppDynamics"))),Object(l.b)("li",{parentName:"ul"},"\u95ee\u9898",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/grafana/grafana/issues/11418"},"#11418")," - Conditional formatting"),Object(l.b)("li",{parentName:"ul"},"Legend \u65e0\u6cd5\u683c\u5f0f\u5316\uff0c\u4f7f\u7528 prometheus \u53ef\u4ee5\u4fee\u6539 label",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'label_replace(my_vector, "short_hostname", "$1", "hostname", "(.*):.*")')),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'label_replace(up{instance=~"$instance"}, "instance_ip", "$2", "instance", "(192[.]168[.])?([0-9.+]+|.*).*")')))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/grafana/grafana/issues/11170"},"#11170")," - \u65e0\u6cd5\u9690\u85cf Table \u7684 Filter for value"))),Object(l.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Value Mapping \u4e0d\u652f\u6301\u6587\u672c\u5339\u914d")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'brew install grafana\n\n# \u624b\u52a8\u5b89\u88c5\nwget https://dl.grafana.com/oss/release/grafana-7.1.1.darwin-amd64.tar.gz\ntar -zxvf grafana-7.1.1.darwin-amd64.tar.gz\n\n# docker\n# https://grafana.com/docs/grafana/latest/installation/docker/\n# \u63d2\u4ef6\n# -e "GF_INSTALL_PLUGINS=grafana-clock-panel,grafana-simple-json-datasource"\n# \u53ef\u6307\u5b9a\u7248\u672c\n# -e "GF_INSTALL_PLUGINS=grafana-clock-panel 1.0.1,grafana-simple-json-datasource 1.3.5"\n# \u81ea\u5b9a\u4e49\u6765\u6e90\n# -e "GF_INSTALL_PLUGINS=http://plugin-domain.com/my-custom-plugin.zip;custom-plugin"\n# \u9ed8\u8ba4\u914d\u7f6e /usr/share/grafana/conf/defaults.ini /etc/grafana/grafana.ini\n# default.paths.data=/var/lib/grafana\n# default.paths.logs=/var/log/grafana\n# default.paths.plugins=/var/lib/grafana/plugins\n# default.paths.provisioning=/etc/grafana/provisioning\n# default.log.mode=console\ndocker run --rm -it -e TZ=Asia/Shanghai \\\n  -p 3000:3000 \\\n  --name=grafana grafana/grafana\n\n# \u9ed8\u8ba4\u670d\u52a1\u7aef\u914d\u7f6e\ngrafana-server \\\n  --config=/opt/grafana/grafana.ini \\\n  --homepath /usr/local/share/grafana \\\n  --packaging=brew cfg:default.paths.logs=/usr/local/var/log/grafana cfg:default.paths.data=/usr/local/var/lib/grafana cfg:default.paths.plugins=/usr/local/var/lib/grafana/plugins\n\n# \u542f\u52a8\u670d\u52a1\nbrew services start grafana\n\ncode /opt/grafana/grafana.ini\ngrafana-server --config /opt/grafana/grafana.ini --homepath /usr/local/share/grafana --packaging=brew\n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u57fa\u672c\u914d\u7f6e")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ini"},"[path]\ndata = /opt/grafana\nlogs = /opt/grafana\nplugins = /usr/local/var/lib/grafana/plugins\n\n[server]\nhttp_port = 3030\n\n[database]\ntype=sqlite3\n\n[remote_cache]\n\n[analytics]\nreporting_enabled = false\n")),Object(l.b)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://grafana.com/docs/grafana/latest/administration/configuration/"},"Configuration")),Object(l.b)("li",{parentName:"ul"},"\u6240\u6709\u7684\u914d\u7f6e\u90fd\u53ef\u4ee5\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u914d\u7f6e",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"GF_<SectionName>_<KeyName>"))))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ini"},"[database]\n# mysql, postgres, sqlite3\ntype=postgres\n# SQLite3\npath=\nhost=\nname=\nuser=\npassword=\n# mysql://user:secret@host:port/database\n# mysql://user:secret@host:port/database\nurl=\n# pg - disable, require, verify-full\n# mysql - true, false, skip-verify\nssl_mode=\n\n[remote_cache]\n# redis, memcached, database\ntype=database\n# database, redis, memcache\nconnstr=\ndatabase=\nredis=addr=127.0.0.1:6379,pool_size=100,db=0,ssl=false\nmemcache=127.0.0.1:11211\n")),Object(l.b)("h2",{id:"faq"},"FAQ"),Object(l.b)("h2",{id:"msgfailed-to-look-up-user-based-on-cookie-loggercontext-erroruser-token-not-found"},'msg="Failed to look up user based on cookie" logger=context error="user token not found"'))}b.isMDXComponent=!0}}]);