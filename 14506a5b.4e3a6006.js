(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{1151:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),o=b(n),u=a,j=o["".concat(c,".").concat(u)]||o[u]||m[u]||l;return n?r.a.createElement(j,i(i({ref:t},p),{},{components:n})):r.a.createElement(j,i({ref:t},p))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<l;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),l=(n(0),n(1151)),c={id:"ssl",title:"SSL"},i={unversionedId:"ops/network/application/ssl",id:"ops/network/application/ssl",isDocsHomePage:!1,title:"SSL",description:"Tips",source:"@site/notes/ops/network/application/ssl.md",slug:"/ops/network/application/ssl",permalink:"/notes/ops/network/application/ssl",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/network/application/ssl.md",version:"current",sidebar:"docs",previous:{title:"SNMP",permalink:"/notes/ops/network/application/snmp"},next:{title:"InfiniBand",permalink:"/notes/ops/network/link/infiniband"}},s=[{value:"Tips",id:"tips",children:[]},{value:"Convert",id:"convert",children:[]},{value:"CA",id:"ca",children:[]},{value:"CFSSL",id:"cfssl",children:[]},{value:"FAQ",id:"faq",children:[{value:"SSL/TLS mutual authentication",id:"ssltls-mutual-authentication",children:[]},{value:"Revoke",id:"revoke",children:[]},{value:"Java \u542f\u52a8\u65f6 ssl \u76f8\u5173\u53c2\u6570",id:"java-\u542f\u52a8\u65f6-ssl-\u76f8\u5173\u53c2\u6570",children:[]},{value:"Server Cert vs Client Cert",id:"server-cert-vs-client-cert",children:[]}]}],p={toc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Comparison_of_TLS_implementations"},"https://en.wikipedia.org/wiki/Comparison_of_TLS_implementations"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",{parentName:"p",href:"https://curl.haxx.se/docs/ssl-compared.html"},"https://curl.haxx.se/docs/ssl-compared.html"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",{parentName:"p",href:"https://www.cyberciti.biz/faq/test-ssl-certificates-diagnosis-ssl-certificate/"},"https://www.cyberciti.biz/faq/test-ssl-certificates-diagnosis-ssl-certificate/"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u8d2d\u4e70"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.sslshopper.com/certificate-authority-reviews.html"},"https://www.sslshopper.com/certificate-authority-reviews.html")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"FAQ"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Java \u662f\u4e0d\u652f\u6301\u6cdb\u57df\u540d\u7684, \u4f46\u662f\u652f\u6301 SAN"),Object(l.b)("li",{parentName:"ul"},"\u4e2d\u95f4\u8bc1\u4e66\u4e0d\u80fd\u88ab\u9650\u5236\u5bf9\u54ea\u4e9b\u57df\u540d\u8fdb\u884c\u5206\u53d1\u8bc1\u4e66, \u56e0\u6b64\u53ea\u6709\u771f\u6b63\u503c\u5f97\u4fe1\u4efb\u7684\u673a\u6784\u624d\u4f1a\u6709\u4e2d\u95f4\u8bc1\u4e66"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u5728\u7ebf\u68c0\u6d4b"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.sslchecker.com/sslchecker"},"https://www.sslchecker.com/sslchecker")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.sslshopper.com/ssl-checker.html"},"https://www.sslshopper.com/ssl-checker.html")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://sslanalyzer.comodoca.com"},"https://sslanalyzer.comodoca.com")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",{parentName:"p",href:"https://www.owasp.org/index.php/Transport_Layer_Protection_Cheat_Sheet"},"https://www.owasp.org/index.php/Transport_Layer_Protection_Cheat_Sheet"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Java Keystore"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://portecle.sourceforge.net/"},"http://portecle.sourceforge.net/")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://keystore-explorer.org/"},"http://keystore-explorer.org/")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Let's Encrypt"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://letsencrypt.org/docs/rate-limits/"},"Rate Limits"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"SAN \u6700\u591a 100"),Object(l.b)("li",{parentName:"ul"},"\u4e00\u5468\u8bc1\u4e66\u6700\u591a\u91cd\u590d 5 \u6b21"),Object(l.b)("li",{parentName:"ul"},"\u5b50\u57df\u540d\u8bc1\u4e66, \u7b2c\u4e00\u5468 20, \u7b2c\u4e8c\u5468 40, \u4ee5\u6b64\u7c7b\u63a8"),Object(l.b)("li",{parentName:"ul"},"\u9a8c\u8bc1\u5931\u8d25\u9650\u5236, 5\u6b21 \u6bcf\u8d26\u53f7 \u6bcf\u4e3b\u673a\u540d \u6bcf\u5c0f\u65f6"),Object(l.b)("li",{parentName:"ul"},"new-reg, new-authz, new-cert \u5171\u4eab 20rps \u7684\u9650\u5236"),Object(l.b)("li",{parentName:"ul"},"/directory, /acme \u5171\u4eab 40rps \u9650\u5236"),Object(l.b)("li",{parentName:"ul"},"\u6bcf IP \u6bcf\u5c0f\u65f6 \u6700\u591a\u521b\u5efa 10 \u4e2a\u8d26\u53f7"),Object(l.b)("li",{parentName:"ul"},"\u6bcf 3 \u5c0f\u65f6 \u6bcf IP \u6bb5 \u6700\u591a\u521b\u5efa 500 \u4e2a\u8d26\u53f7"),Object(l.b)("li",{parentName:"ul"},"\u5efa\u8bae\u53ea\u4f7f\u7528\u4e00\u4e2a\u8d26\u53f7"),Object(l.b)("li",{parentName:"ul"},"\u6700\u591a 300 Pending Authorizations"),Object(l.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u7533\u8bf7\u63d0\u5347\u9650\u989d"))))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Tools"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://crt.sh/"},"crt.sh"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u67e5\u8be2\u5206\u53d1\u7684\u8bc1\u4e66"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/shred/acme4j"},"shred/acme4j"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Java client for ACME (Let's Encrypt)"))))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Automatic Certificate Management Environment (ACME)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"PEM - Privacy Enhanced Mail")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"DER - Distinguished Encoding Rules,"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"-inform der")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"SNI")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",{parentName:"p",href:"https://shansing.com/read/355/"},"https://shansing.com/read/355/")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'# \u663e\u793a\u8bc1\u4e66\nopenssl s_client -showcerts -connect wener.me:443\n# SNI\nopenssl s_client -showcerts -servername wener.me -connect 104.28.26.88:443\n\n# \u622a\u53d6\u8bc1\u4e66\u90e8\u5206\necho "" | openssl s_client -connect dm-101.data.aliyun.com:443 -prexit 2>/dev/null | sed -n -e \'/BEGIN\\ CERTIFICATE/,/END\\ CERTIFICATE/ p\'\n\ncert_fetch(){\n  mkdir -p ~/.cert/$1;cd ~/.cert/$1;\n  echo "" | openssl s_client -connect $1:443 -prexit 2>/dev/null | \\\n    sed -n -e \'/BEGIN\\ CERTIFICATE/,/END\\ CERTIFICATE/ p\' > $1.pem\n}\n\n# https://developer.mozilla.org/en-US/docs/Web/HTTP/Public_Key_Pinning\nopenssl s_client -servername www.example.com -connect www.example.com:443 | openssl x509 -pubkey -noout | openssl rsa -pubin -outform der | openssl dgst -sha256 -binary | openssl enc -base64\n\n# \u4e0b\u8f7d crt\nopenssl x509 -in <(openssl s_client -connect example.com:443 -prexit 2>/dev/null) -out example.crt\n# \u5bfc\u5165 crt\nsudo keytool -importcert -file example.crt -alias example -keystore $(/usr/libexec/java_home)/jre/lib/security/cacerts -storepass changeit\n# \u5bfc\u5165 cer\nkeytool -importcert -file certificate.cer -keystore keystore.jks -alias "Alias"\n\n# \u751f\u6210 CSR\n# https://support.rackspace.com/how-to/generate-a-csr-with-openssl/\n# \u751f\u6210 Key\nopenssl genrsa -out wener.me.key 4096\n# \u751f\u6210\u65b0\u7684 CSR\npenssl req -new -sha256 -key wener.me.key -out wener.me.csr\n# \u7136\u540e\u63d0\u4ea4 wener.me.csr \u5373\u53ef\n# \u62ff\u5230\u5206\u53d1\u7684 x509 \u53ef\u751f\u6210 pem \u4ee5\u4f9b nginx \u4f7f\u7528\nopenssl x509 -in wener.me.x509 -out wener.me.pem -outform PEM\n# \u67e5\u770b\u8bc1\u4e66\u4fe1\u606f\nopenssl x509 -in wener.me.pem -text -noout\n\n# Let\'s Encrypt certbot\nbrew install certbot\ncertbot certonly --standalone --preferred-challenges tls-sni -d example.com --staple-ocsp -m example@example.com --agree-tos --work-dir . --config-dir ./config --logs-dir ./logs\n')),Object(l.b)("h2",{id:"convert"},"Convert"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://stackoverflow.com/q/13732826/1870054"},"https://stackoverflow.com/q/13732826/1870054")),Object(l.b)("h2",{id:"ca"},"CA"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://jamielinux.com/docs/openssl-certificate-authority/"},"https://jamielinux.com/docs/openssl-certificate-authority/"))),Object(l.b)("h2",{id:"cfssl"},"CFSSL"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/cloudflare/cfssl"},"https://github.com/cloudflare/cfssl")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://cfssl.org/scan"},"https://cfssl.org/scan")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/jason-riddle/generating-certs/wiki"},"https://github.com/jason-riddle/generating-certs/wiki"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# \u5b89\u88c5\ngo get -u github.com/cloudflare/cfssl/cmd/...\n")),Object(l.b)("h2",{id:"faq"},"FAQ"),Object(l.b)("h3",{id:"ssltls-mutual-authentication"},"SSL/TLS mutual authentication"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u540c\u65f6\u9a8c\u8bc1\u8bc1\u4e66, \u56e0\u6b64\u8981\u6c42\u5ba2\u6237\u7aef\u914d\u7f6e cert \u548c key"),Object(l.b)("li",{parentName:"ul"},"Golang ClientAuthType",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"NoClientCert"),Object(l.b)("li",{parentName:"ul"},"RequestClientCert"),Object(l.b)("li",{parentName:"ul"},"RequireAnyClientCert"),Object(l.b)("li",{parentName:"ul"},"VerifyClientCertIfGiven"),Object(l.b)("li",{parentName:"ul"},"RequireAndVerifyClientCert")))),Object(l.b)("h3",{id:"revoke"},"Revoke"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://jamielinux.com/docs/openssl-certificate-authority/certificate-revocation-lists.html"},"Certificate revocation lists"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ini"},"[ server_cert ]\n# \u5728\u670d\u52a1\u914d\u7f6e\u4e2d\u6307\u5b9a crl\ncrlDistributionPoints = URI:http://example.com/intermediate.crl.pem\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# \u751f\u6210 CLR\nopenssl ca -config intermediate/openssl.cnf \\\n      -gencrl -out intermediate/crl/intermediate.crl.pem\n# \u68c0\u67e5 crl \u4e2d\u7684\u5185\u5bb9\nopenssl crl -in intermediate/crl/intermediate.crl.pem -noout -text\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"crl.pem")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"R 160420124740Z 150411125310Z 1001 unknown ... /CN=bob@example.com\n")),Object(l.b)("h3",{id:"java-\u542f\u52a8\u65f6-ssl-\u76f8\u5173\u53c2\u6570"},"Java \u542f\u52a8\u65f6 ssl \u76f8\u5173\u53c2\u6570"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"http://docs.oracle.com/javase/1.5.0/docs/guide/security/jsse/JSSERefGuide.html#Debug"},"http://docs.oracle.com/javase/1.5.0/docs/guide/security/jsse/JSSERefGuide.html#Debug")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"java -Djavax.net.debug=all -Djavax.net.ssl.trustStore=trustStore ...\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"debug \u53c2\u6570",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"all            turn on all debugging"),Object(l.b)("li",{parentName:"ul"},"ssl            turn on ssl debugging"))),Object(l.b)("li",{parentName:"ul"},"ssl \u76f8\u5173\u53c2\u6570")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"record       enable per-record tracing\nhandshake    print each handshake message\nkeygen       print key generation data\nsession      print session activity\ndefaultctx   print default SSL initialization\nsslctx       print SSLContext tracing\nsessioncache print session cache tracing\nkeymanager   print key manager tracing\ntrustmanager print trust manager tracing\npluggability print pluggability tracing\n\nhandshake debugging can be widened with:\ndata         hex dump of each handshake message\nverbose      verbose handshake message printing\n\nrecord debugging can be widened with:\nplaintext    hex dump of record plaintext\npacket       print raw SSL/TLS packets\n")),Object(l.b)("h3",{id:"server-cert-vs-client-cert"},"Server Cert vs Client Cert"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://stackoverflow.com/q/24752105/1870054"},"https://stackoverflow.com/q/24752105/1870054")),Object(l.b)("li",{parentName:"ul"},"Server",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Signing",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u8bc1\u4e66\u4e2d\u7684\u79d8\u94a5\u80fd\u7528\u4e8e\u6807\u8bc6 CN \u4e2d\u8bf4\u660e\u7684\u670d\u52a1, \u5b9e\u4f53\u8ba4\u8bc1"))),Object(l.b)("li",{parentName:"ul"},"Key Encipherment",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u8bc1\u4e66\u4e2d\u7684\u79d8\u94a5\u53ef\u4ee5\u7528\u4e8e\u52a0\u5bc6\u4ece\u4f1a\u8bdd\u4e2d\u884d\u751f\u7684\u4f1a\u8bdd\u79d8\u94a5(\u5bf9\u7b49\u79d8\u94a5)"))))),Object(l.b)("li",{parentName:"ul"},"Client",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Signing")))))}b.isMDXComponent=!0}}]);