"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[62360],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,k=u["".concat(o,".").concat(m)]||u[m]||c[m]||s;return t?r.createElement(k,l(l({ref:n},d),{},{components:t})):r.createElement(k,l({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,l=new Array(s);l[0]=u;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<s;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},65242:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var r=t(87462),a=t(63366),s=(t(67294),t(3905)),l=["components"],i={title:"PowerDNS"},o=void 0,p={unversionedId:"service/dns/powerdns",id:"service/dns/powerdns",title:"PowerDNS",description:"- PowerAdmin \u7f51\u9875\u7ba1\u7406\u5de5\u5177",source:"@site/notes/service/dns/powerdns.md",sourceDirName:"service/dns",slug:"/service/dns/powerdns",permalink:"/notes/service/dns/powerdns",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/dns/powerdns.md",tags:[],version:"current",frontMatter:{title:"PowerDNS"},sidebar:"docs",previous:{title:"Domain",permalink:"/notes/service/dns/domain"},next:{title:"PowerDNS FAQ",permalink:"/notes/service/dns/powerdns-faq"}},d=[{value:"Get Start",id:"get-start",children:[],level:2},{value:"GEO",id:"geo",children:[],level:2},{value:"Setting",id:"setting",children:[],level:2},{value:"\u540e\u7aef",id:"\u540e\u7aef",children:[],level:2},{value:"recursor",id:"recursor",children:[],level:2}],c={toc:d};function u(e){var n=e.components,t=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://www.poweradmin.org/"},"PowerAdmin")," \u7f51\u9875\u7ba1\u7406\u5de5\u5177"),(0,s.kt)("li",{parentName:"ul"},"Auth server ",(0,s.kt)("a",{parentName:"li",href:"https://doc.powerdns.com/md/authoritative/settings/"},"settings")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://doc.powerdns.com/authoritative/indexTOC.html"},"https://doc.powerdns.com/authoritative/indexTOC.html")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/PowerDNS/pdns"},"PowerDNS/pdns")),(0,s.kt)("li",{parentName:"ul"},"\u7279\u6027",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u591a\u79cd\u540e\u7aef"),(0,s.kt)("li",{parentName:"ul"},"\u591a\u79cd\u590d\u5236\u65b9\u5f0f"),(0,s.kt)("li",{parentName:"ul"},"\u4fee\u6539\u4e0d\u9700\u8981\u91cd\u542f"),(0,s.kt)("li",{parentName:"ul"},"\u5b9a\u5236\u7f13\u5b58"),(0,s.kt)("li",{parentName:"ul"},"Supermaster",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u5f53\u4e3a\u4e00\u4e2a\u8282\u70b9\u8bbe\u7f6e\u4e86 Supermaster \u540e,\u5728\u4e3b\u8282\u70b9\u4e0a\u521b\u5efa zone,\u6240\u6709\u5b50\u8282\u70b9\u4f1a\u81ea\u52a8\u521b\u5efa\u76f8\u5e94\u7684 zone, \u5e76\u53d1\u8d77\u4e00\u4e2a AXFR \u8bf7\u6c42"),(0,s.kt)("li",{parentName:"ul"},"bind \u4e2d\u9700\u8981\u624b\u52a8\u4e3a\u6240\u6709\u5b50\u8282\u70b9\u6dfb\u52a0 zone"))))),(0,s.kt)("li",{parentName:"ul"},"NOTES",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u5f53\u627e\u5230\u4e00\u6761\u5339\u914d\u7684\u540e\u4e0d\u4f1a\u518d\u5c1d\u8bd5\u4f7f\u7528\u901a\u914d\u7b26\u67e5\u627e",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u4f8b\u5982 ","*",".example.org A 192.168.1.1, test.example.org TXT Test, \u5f53\u67e5\u8be2 ANY test.example.org \u53ea\u4f1a\u8fd4\u56de TXT"))))),(0,s.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://doc.powerdns.com/md/appendix/backend-writers-guide/"},"Backend writers' guide")))),(0,s.kt)("li",{parentName:"ul"},"pdnsutil",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u57df\u540d\u7ba1\u7406\u5de5\u5177"),(0,s.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u4fee\u6539 DB - \u53ef\u4ee5\u8fdc\u7a0b\u4f7f\u7528")))),(0,s.kt)("p",null,"dnsdist is a DNS loadbalancer from the people behind PowerDNS that balances DNS packets based on rules."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'# macOS \u5b89\u88c5\nbrew install pdns --with-postgresql --with-remote\n\n# SQLite3\n# https://doc.powerdns.com/md/authoritative/backend-generic-sqlite/\n# \u5c06 Schema \u4fdd\u5b58\u5230 schema.sqlite3\nsqlite3 powerdns.sqlite .read schema.sqlite3\n# \u5728\u524d\u53f0\u542f\u52a8, \u4e4b\u6240\u4ee5\u4fee\u6539 \u7aef\u53e3\u548c socket-dir \u662f\u56e0\u4e3a\u53ef\u80fd\u4f1a\u6ca1\u6709\u6743\u9650\npdns_server --daemon=no --launch=gsqlite3 --local-port=5300 --socket-dir=`pwd`/socket\n# \u5c06\u914d\u7f6e\u6587\u4ef6\u5199\u5165\u5230 pdns.conf\n# launch=gsqlite3\n# local-port=5300\n# socket-dir=./socket\n# gsqlite3-database=powerdns.sqlite\n# \u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u542f\u52a8\npdns_server --daemon=yes --config-dir=.\n\npdns_server --daemon=no --launch=remote --local-port=5300 --socket-dir=`pwd`/socket\n\n# pdns_control \u7528\u4e8e\u64cd\u4f5c\u5b9e\u4f8b\n# \u7b80\u5316 pdns_control \u64cd\u4f5c\nalias pc="pdns_control --config-dir=`pwd`"\n# \u9000\u51fa\u670d\u52a1\npc quite\n# \u83b7\u53d6\u5f53\u524d\u7684\u914d\u7f6e\npc current-config\n\n# pdnsutil \u7528\u4e8e\u64cd\u4f5c\u540e\u7aef\u6570\u636e, \u5373\u4fbf\u6ca1\u6709\u542f\u52a8 server \u4e5f\u53ef\u4ee5\n# \u7b80\u5316 pdnsutil \u64cd\u4f5c\nalias pu="pdnsutil --config-dir=`pwd`"\n# \u6dfb\u52a0\u7528\u4e8e\u6d4b\u8bd5\u7684\u8bb0\u5f55\npu add-record i.wener.me @ A 127.0.0.1\npu add-record i.wener.me dev A 127.0.0.1\n\n# \u6d4b\u8bd5\u6dfb\u52a0\u7684\u8bb0\u5f55\ndig @127.0.0.1 -p 5300 dev.i.wener.me\n\n# \u5e38\u7528\u64cd\u4f5c\n# \u521b\u5efa\npdnsutil create-zone mydomain.com\n# \u68c0\u6d4b\u73b0\u6709\u7684\u95ee\u9898\npdnsutil check-zone mydomain.com\n# add-record ZONE NAME TYPE [ttl] content\n\n\n# Playground\ndocker run --rm -it -p 5353:53 --entrypoint bash wener/pdns:edge\n\n')),(0,s.kt)("h2",{id:"get-start"},"Get Start"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'docker run --rm -it -p 80:80 -p 53:53 -p 53:53/udp -v $PWD:/host -w /host wener/dns bash\n\n# \u7528\u4e8e\u63a5\u53e3\u8bf7\u6c42\nAPI_KEY=$(cat /dev/urandom | env LC_CTYPE=C tr -dc \'a-zA-Z0-9\' | head -c 32)\nWEBSERVER_PASSWORD=$(cat /dev/urandom | env LC_CTYPE=C tr -dc \'a-zA-Z0-9\' | head -c 32)\n# /etc/pdns/pdns.conf \u6807\u51c6\u914d\u7f6e\u76ee\u5f55\ncat <<EOF | tee pdns.conf > /etc/pdns/pdns.conf\n# backend\nlaunch=gsqlite3\ngsqlite3-database=$PWD/pdns.sqlite\n# handle dnssec\ngsqlite3-dnssec\n\n# server\nlocal-port=53\nlocal-address=0.0.0.0\ndaemon=yes\nguardian=yes\n\n# dyndns\ndnsupdate=yes\nallow-dnsupdate-from=\n\n# web/api\nwebserver=yes\nwebserver-address=0.0.0.0\nwebserver-password=$WEBSERVER_PASSWORD\nwebserver-loglevel=normal\nwebserver-port=80\n\napi=yes\napi-key=$API_KEY\n\n# soa default\ndefault-soa-name=ns1.wener.me\ndefault-soa-edit=\ndefault-soa-edit-signed=\ndefault-soa-mail=\nsoa-expire-default=604800\nsoa-minimum-ttl=3600\nsoa-refresh-default=10800\nsoa-retry-default=3600\nEOF\n# \u521d\u59cb\u5316 sqlite\ncurl -LO https://raw.githubusercontent.com/PowerDNS/pdns/master/modules/gsqlite3backend/schema.sqlite3.sql\nsqlite3 pdns.sqlite ".read schema.sqlite3.sql"\n\n# \u524d\u53f0\u542f\u52a8\npdns_server --daemon=no\n\n# \u4ece\u53e6\u5916\u4e00\u4e2a\u4f1a\u8bdd\u64cd\u4f5c\n\n# \u91cd\u542f - \u4fee\u6539\u914d\u7f6e\u540e\u53ef\u4ee5\u4f7f\u7528\npdns_control cycle\n\n# \u57df\u540d\u7ba1\u7406\npdnsutil create-zone wener.me\n# \u6dfb\u52a0\u8bb0\u5f55 - ns1.wener.tech \u5b9e\u9645\u4e0a\u5c31\u662f\u9700\u8981\u6307\u5411\u5f53\u524d\u7684\u670d\u52a1\u5668\npdnsutil add-record wener.me @ NS ns1.wener.tech\npdnsutil add-record wener.me @ A 127.0.0.1\npdnsutil add-record wener.me app A 127.0.0.1\n# \u68c0\u67e5\npdnsutil check-all-zones\n# \u6240\u6709\u7684\u8bb0\u5f55\nsqlite3 pdns.sqlite "select * from records"\n\n# \u5c06\u4e09\u7ea7\u57df\u540d\u4f5c\u4e3a zone\npdnsutil create-zone svc.wener.me\npdnsutil add-record svc.wener.me @ NS ns1.wener.tech\npdnsutil add-record svc.wener.me @ A 127.0.0.1\n# \u5728\u4e0a\u7ea7\u6dfb\u52a0 NS \u8bb0\u5f55\npdnsutil add-record wener.me svc NS ns1.wener.tech\n\n# NSUPDATE\n# --------------------\n# \u4e0a\u7ea7\u542f\u7528 TSIG\npdnsutil activate-tsig-key wener.me admin master\n# \u4e0b\u7ea7\u542f\u7528 TSIG slave\npdnsutil activate-tsig-key svc.wener.me admin slave\n# \u5355\u57df\u540d\u914d\u7f6e\npdnsutil generate-tsig-key svc-admin hmac-md5\npdnsutil set-meta svc.wener.me TSIG-ALLOW-DNSUPDATE svc-admin\npdnsutil set-meta svc.wener.me ALLOW-DNSUPDATE-FROM 0.0.0.0/0\n\n# \u67e5\u770b\npdnsutil list-tsig-keys\n# \u542f\u7528\u7684\u914d\u7f6e\u4fe1\u606f\nsqlite3 pdns.sqlite "select * from domainmetadata"\n\nSECRET=$(sqlite3 pdns.sqlite "select secret from tsigkeys where name=\'svc-admin\'")\n# DNS UPDATE\n# \u9ed8\u8ba4\u53ea\u652f\u6301 hmac-md5\nnsupdate <<EOF\nserver 127.0.0.1 53\nzone svc.wener.me\nupdate add web.svc.wener.me 3600 A 1.2.3.4\nkey svc-admin $SECRET\nsend\nEOF\n# \u6cdb\u57df\u540d\u4fee\u6539\nnsupdate <<EOF\nserver 127.0.0.1 53\nzone svc.wener.me\nupdate add *.svc.wener.me 3600 A 4.3.2.1\nkey svc-admin $SECRET\nsend\nEOF\n\n# \u4fee\u6539\u4e0a\u7ea7\u57df\u540d\u4f1a\u5931\u8d25\nnsupdate <<EOF\nserver 127.0.0.1 53\nzone wener.me\nupdate add web.wener.me 3600 A 1.2.3.4\nkey svc-admin $SECRET\nsend\nEOF\n\n# \u67e5\u770b\u6240\u6709\u57df\u540d\u4fe1\u606f\ndig -t axfr svc.wener.me @127.0.0.1\n\n# DNSSEC\n# --------------------\npdnsutil secure-zone wener.me\npdnsutil secure-zone svc.wener.me\n\n# \u8f93\u51fa\u7684 DS \u6dfb\u52a0\u5230\u4e0a\u7ea7\npdnsutil show-zone svc.wener.me\n\n# \u5173\u95ed - \u8bb0\u5f97\u5220\u9664\u4e0a\u7ea7\u7684 DS\npdnsutil disable-dnssec wener.me\n')),(0,s.kt)("h2",{id:"geo"},"GEO"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://doc.powerdns.com/md/authoritative/backend-geo/"},"https://doc.powerdns.com/md/authoritative/backend-geo/")),(0,s.kt)("h2",{id:"setting"},"Setting"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://doc.powerdns.com/authoritative/settings.html"},"https://doc.powerdns.com/authoritative/settings.html")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ini"},"# SQLite\n# ==========\nlaunch=gsqlite3\ngsqlite3-database=powerdns.sqlite\n\n# PostgreSQL\n# ==========\nlaunch=gpgsql\ngpgsql-host=127.0.0.1\ngpgsql-port=5432\ngpgsql-dbname=mydb\ngpgsql-user=pdns\ngpgsql-password=PASSWORD\n# \u53ef\u4ee5\u4fee\u6539\u4e3a\u4f7f\u7528\u5176\u4ed6 schema\ngpgsql-extra-connection-parameters=options='-csearch_path=public' sslmode=disable\n\n")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/PowerDNS/pdns/master/docs/http-api/swagger/authoritative-api-swagger.yaml"},"https://raw.githubusercontent.com/PowerDNS/pdns/master/docs/http-api/swagger/authoritative-api-swagger.yaml"),"\n",(0,s.kt)("a",{parentName:"p",href:"http://petstore.swagger.io/"},"http://petstore.swagger.io/")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# server id \u4e3a hostname, \u5927\u591a\u6570\u65f6\u5019\u4e3a localhost\ncurl -v -H 'X-API-Key: KEY' http://127.0.0.1:8001/api/v1/servers/localhost | jq .\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ini"},"# \u540e\u53f0\u8fd0\u884c\ndaemon=no\n\n# \u9ed8\u8ba4\u4e3a hostname\nserver-id=localhost\n\n# \u662f\u5426\u76d1\u542c TCP \u7aef\u53e3\ndisable-tcp=no\n# \u662f\u5426\u542f\u7528 RFC2136/DNS Update\ndnsupdate=no\n\n# \u5305\u542b\u5176\u4ed6\u914d\u7f6e\u76ee\u5f55\ninclude-dir=\n# \u52a0\u8f7d\u6a21\u5757, \u9017\u53f7\u5206\u9694\nload-modules=\n# \u6a21\u5757\u5730\u5740\n# \u7f16\u8bd1\u65f6 PKGLIBDIR \u6307\u5b9a\nmodule-dir=\n# \u4e0d\u8981\u5c1d\u8bd5\u8bfb\u53d6\u914d\u7f6e\u6587\u4ef6\nno-config=no\n\nlocal-ipv6=\n# \u672c\u5730\u76d1\u542c\u5730\u5740\nlocal-address=0.0.0.0\nlocal-port=53\n\ntcp-control-address=\ntcp-control-port=53000\ntcp-control-range=\ntcp-control-secret=\n\n# dig chaos txt version.bind @pdns.ip.address\n# \u53ef\u9009 anonymous, powerdns, full\nversion-string=full\n\n# Linux 3.9 SO_REUSEPORT\nreuseport=no\n# fast open \u7684\u961f\u5217\u5927\u5c0f, 0 \u4e3a\u7981\u7528\ntcp-fast-open=0\n# LOCALSTATEDIR\nsocket-dir=/var/run\n\n# \u7f13\u5b58\u6570\u636e\u5e93\u57df\u540d\u6570\u636e\u7684\u65f6\u95f4\ndomain-metadata-cache-ttl=60\n\n# Server\n# ==========\n# \u5b88\u62a4\u8005\u6a21\u5f0f - \u5f53\u4e0d\u901a\u8fc7 supervisor \u542f\u52a8\u65f6\u5efa\u8bae\u5f00\u542f\nguardian=yes\n\n# SOA\n# ==========\ndefault-soa-name=a.misconfigured.powerdns.server\ndefault-soa-edit=\ndefault-soa-edit-signed=\ndefault-soa-mail=\nsoa-expire-default=604800\nsoa-minimum-ttl=3600\nsoa-refresh-default=10800\nsoa-retry-default=3600\n\n# Logging\n# ==========\ndisable-syslog=yes\n# syslog \u7684\u7f16\u53f7\n# \u6570\u5b57, \u4f8b\u5982 1 \u4f1a\u8bb0\u5f55\u65e5\u5fd7\u5230 local1\nlogging-facility=\n# \u4fe1\u606f\u60f3\u5e72\u7684 DNS \u4e0d\u4f1a\u53d1\u9001\u5230 syslog, \u63d0\u5347\u6027\u80fd\nlog-dns-details=no\n# \u4f1a\u8bb0\u5f55\u6240\u6709 DNS \u67e5\u8be2\u8bf7\u6c42, \u4f1a\u4ea7\u751f\u8f83\u591a\u65e5\u5fd7, \u5efa\u8bae\u53ea\u7528\u4e8e\u8c03\u8bd5\nlog-dns-queries=no\nlog-timestamp=yes\n# \u5efa\u8bae\u4e0d\u8981\u4f4e\u4e8e 3\nloglevel=4\n# \u63d0\u793a\u540e\u7aef\u5bf9\u67e5\u8be2\u8fdb\u884c\u65e5\u5fd7\nquery-logging=ni\n\n# \u9ed8\u8ba4 TTL\ndefault-ttl=3600\n\n# \u7f13\u5b58\u5e26\u7ed3\u679c\u7684\u67e5\u8be2\u65f6\u95f4\nquery-cache-ttl=20\n\n# \u9012\u5f52\u67e5\u8be2\u7684\u7f13\u5b58\u4e8b\u4ef6\nrecursive-cache-ttl=10\n\n# API/Webserver\n# ==========\n# \u9690\u6027\u7684\u6307\u5b9a webserver\napi=yes\napi-key=KEY\napi-readonly=no\n\n# \u7528\u4e8e\u76d1\u63a7\u7684 web \u670d\u52a1\nwebserver=no\nwebserver-address=127.0.0.1\nwebserver-allow-from=127.0.0.1,::1\nwebserver-password=\nwebserver-port=8001\nwebserver-print-arguments=no\n\n\n# Backend\n# =========\n# \u542f\u52a8\u7684\u540e\u7aef\u540d\u5b57\n# launch=bind,gmysql,remote\n# launch=gmysql,gmysql:server2 \u4e24\u4e2a mysql, \u7b2c\u4e8c\u4e2a\u7684\u914d\u7f6e\u4e3a gmysql-server2-host\nlaunch=\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"pdns.conf")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ini"},"cache-ttl=60\nchroot=/var/empty\nconfig-dir=/etc/pdns\ndaemon=yes\ndistributor-threads=1\nguardian=yes\nlocal-port=53\nloglevel=3\nmodule-dir=/usr/lib/pdns/pdns\nnegquery-cache-ttl=60\nsetgid=pdns\nsetuid=pdns\nsocket-dir=/var/run\nuse-logfile=no\nwebserver=no\nwildcards=yes\n")),(0,s.kt)("h2",{id:"\u540e\u7aef"},"\u540e\u7aef"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u540e\u7aef\u6a21\u5757",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"sql",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"sqlite"),(0,s.kt)("li",{parentName:"ul"},"oracle"),(0,s.kt)("li",{parentName:"ul"},"mysql"),(0,s.kt)("li",{parentName:"ul"},"pgsql"),(0,s.kt)("li",{parentName:"ul"},"odbc"),(0,s.kt)("li",{parentName:"ul"},"opendb"))),(0,s.kt)("li",{parentName:"ul"},"bind"),(0,s.kt)("li",{parentName:"ul"},"tinydns"),(0,s.kt)("li",{parentName:"ul"},"remote"),(0,s.kt)("li",{parentName:"ul"},"pipe"),(0,s.kt)("li",{parentName:"ul"},"lua"),(0,s.kt)("li",{parentName:"ul"},"ldap"))),(0,s.kt)("li",{parentName:"ul"},"\u540e\u7aef\u65b9\u6cd5\u5206\u7c7b",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"minimal",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"list",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u652f\u6301 AXFR"))),(0,s.kt)("li",{parentName:"ul"},"lookup"),(0,s.kt)("li",{parentName:"ul"},"get"),(0,s.kt)("li",{parentName:"ul"},"getSOA"))),(0,s.kt)("li",{parentName:"ul"},"master",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"getUpdatedMasters"),(0,s.kt)("li",{parentName:"ul"},"setNotifed"))),(0,s.kt)("li",{parentName:"ul"},"slave",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"getDomainInfo"),(0,s.kt)("li",{parentName:"ul"},"isMaster"),(0,s.kt)("li",{parentName:"ul"},"getUnfreshSlaveInfos"),(0,s.kt)("li",{parentName:"ul"},"setFresh"),(0,s.kt)("li",{parentName:"ul"},"startTransaction"),(0,s.kt)("li",{parentName:"ul"},"commitTransaction"),(0,s.kt)("li",{parentName:"ul"},"abortTransaction"),(0,s.kt)("li",{parentName:"ul"},"feedRecord"))),(0,s.kt)("li",{parentName:"ul"},"supermaster",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"superMasterBackend"),(0,s.kt)("li",{parentName:"ul"},"createSlaveDomain"))),(0,s.kt)("li",{parentName:"ul"},"dnssec"),(0,s.kt)("li",{parentName:"ul"},"\u5176\u4ed6"))),(0,s.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u63a5\u53e3",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"BackendFactory"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"DNSBackend")," \u7684\u5de5\u5382\u7c7b"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"DNSBackend"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u540e\u7aef\u63a5\u53e3"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"XXXLoader"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u9759\u6001\u521d\u59cb\u5316\u7c7b"),(0,s.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u6ce8\u518c\u5de5\u5382\u65b9\u6cd5"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"BackendMakers().report(new XXXFactory)")))))),(0,s.kt)("li",{parentName:"ul"},"\u9700\u8981\u5b9e\u73b0 ",(0,s.kt)("inlineCode",{parentName:"li"},"pdns/dnsbackend.hh")," \u4e2d\u7684 DNSBackend"),(0,s.kt)("li",{parentName:"ul"},"AXFR")),(0,s.kt)("h2",{id:"recursor"},"recursor"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://doc.powerdns.com/md/recursor/settings/"},"https://doc.powerdns.com/md/recursor/settings/")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# macOS \u5b89\u88c5\nbrew install pdnsrec\n\n# \u751f\u6210\u914d\u7f6e\u6587\u4ef6\npdns_recursor --config > recursor.conf\n\n# \u6d4b\u8bd5\u672c\u5730\u542f\u52a8\npdns_recursor --daemon=no --local-port=5003 --socket-dir=$PWD --config-dir=$PWD\n\n# \u542f\u52a8 53 \u7aef\u53e3\u9700\u8981 root\n# LOCALSTATEDIR \u63a7\u5236 socket-dir\nsudo LOCALSTATEDIR=$PWD pdns_recursor --config-dir=$PWD\n\nsudo rec_control --config-dir=$PWD --socket-dir=$PWD ping\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ini"},"# ==========\n# simple\n# ==========\nallow-from=0.0.0.0/0\ndaemon=no\nlocal-address=127.0.0.1\nlocal-port=53\nreuseport=yes\nforward-zones=.=8.8.8.8\n\n# ==========\n# webserver\n# ==========\n#\nwebserver=yes\nwebserver-port=8082\napi-key=key\n")))}u.isMDXComponent=!0}}]);