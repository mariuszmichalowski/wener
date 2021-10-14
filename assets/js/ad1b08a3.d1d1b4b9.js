"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[22714],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(o,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(k,l(l({ref:e},u),{},{components:n})):a.createElement(k,l({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7297:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],s={title:"res_http"},o=void 0,p={unversionedId:"voip/asterisk/res_http",id:"voip/asterisk/res_http",isDocsHomePage:!1,title:"res_http",description:"- asterisk http \u6838\u5fc3\u6a21\u5757",source:"@site/notes/voip/asterisk/res_http.md",sourceDirName:"voip/asterisk",slug:"/voip/asterisk/res_http",permalink:"/notes/voip/asterisk/res_http",editUrl:"https://github.com/wenerme/wener/edit/master/notes/voip/asterisk/res_http.md",tags:[],version:"current",frontMatter:{title:"res_http"},sidebar:"docs",previous:{title:"\u53c2\u8003",permalink:"/notes/voip/asterisk/reference"},next:{title:"phoneprov",permalink:"/notes/voip/asterisk/res_phoneprov"}},u=[{value:"http.conf",id:"httpconf",children:[]}],c={toc:u};function m(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"asterisk http \u6838\u5fc3\u6a21\u5757",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"stasis \u4f9d\u8d56"),(0,i.kt)("li",{parentName:"ul"},"webrtc \u4f9d\u8d56"),(0,i.kt)("li",{parentName:"ul"},"ari \u4f9d\u8d56"),(0,i.kt)("li",{parentName:"ul"},"manager \u53ef\u901a\u8fc7 http \u652f\u6301 AMI"),(0,i.kt)("li",{parentName:"ul"},"manager \u53ef\u901a\u8fc7 http \u4e0a\u4f20\u914d\u7f6e"))),(0,i.kt)("li",{parentName:"ul"},"\u76f8\u5173\u6a21\u5757",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"res_http_media_cache.so"),(0,i.kt)("li",{parentName:"ul"},"res_http_post.so"),(0,i.kt)("li",{parentName:"ul"},"res_http_websocket.so",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301 WebSocket - pjsip webrtc"))))),(0,i.kt)("li",{parentName:"ul"},"manager.conf",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"webenabled=yes \u5141\u8bb8\u901a\u8fc7 http \u8bbf\u95ee AMI")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u7ec8\u7aef\nhttp show status\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"endpoint"),(0,i.kt)("th",{parentName:"tr",align:null},"desc"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/httpstatus"),(0,i.kt)("td",{parentName:"tr",align:null},"Asterisk HTTP General Status")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/static/..."),(0,i.kt)("td",{parentName:"tr",align:null},"\u9759\u6001\u6587\u4ef6")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/amanager"),(0,i.kt)("td",{parentName:"tr",align:null},"HTML Manager Event Interface w/Digest authentication")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/manager"),(0,i.kt)("td",{parentName:"tr",align:null},"Manager Tester - \u6d4b\u8bd5\u6267\u884c\u7ba1\u7406\u547d\u4ee4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/arawman"),(0,i.kt)("td",{parentName:"tr",align:null},"Raw HTTP Manager Event Interface w/Digest authentication")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/rawman"),(0,i.kt)("td",{parentName:"tr",align:null},"Raw HTTP Manager Event Interface")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/amxml"),(0,i.kt)("td",{parentName:"tr",align:null},"XML Manager Event Interface w/Digest authentication")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/mxml"),(0,i.kt)("td",{parentName:"tr",align:null},"XML Manager Event Interface")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/ws"),(0,i.kt)("td",{parentName:"tr",align:null},"Asterisk HTTP WebSocket")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/ari/..."),(0,i.kt)("td",{parentName:"tr",align:null},"Asterisk RESTful API")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/phoneprov/..."),(0,i.kt)("td",{parentName:"tr",align:null},"Asterisk HTTP Phone Provisioning Tool")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/test_media_cache/..."),(0,i.kt)("td",{parentName:"tr",align:null},"HTTP Media Cache Test URI")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/moh"),(0,i.kt)("td",{parentName:"tr",align:null},"HTTP POST mapping")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/backups"),(0,i.kt)("td",{parentName:"tr",align:null},"HTTP POST mapping")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"manager \u767b\u9646",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"http://localhost:8088/manager?action=login&username=admin&secret=admin"),(0,i.kt)("li",{parentName:"ul"},"\u4f1a\u8bb0\u5f55 cookie mansession_id")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u57fa\u4e8e cookie \u767b\u9646\u4f1a\u8bdd\u8bbf\u95ee\ncurl -b cookie.txt -c cookie.txt 'http://localhost:8088/manager?action=login&username=admin&secret=admin'\n# raw\ncurl -b cookie.txt -c cookie.txt 'http://localhost:8088/rawman?action=status'\n# xml\ncurl -b cookie.txt -c cookie.txt 'http://localhost:8088/mxml?action=status'\n\n# \u76f4\u63a5\u4f7f\u7528 digest \u8ba4\u8bc1\u8bbf\u95ee\ncurl --digest -u admin:admin -k 'https://127.0.0.1:8089/arawman?action=status'\ncurl --digest -u admin:admin -k 'https://127.0.0.1:8089/amxml?action=status'\n")),(0,i.kt)("h2",{id:"httpconf"},"http.conf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-conf"},'[general]\n; \u9ed8\u8ba4 Asterisk/{version}\n; \u53ef\u8bbe\u7f6e\u4e3a\u7a7a\nservername=Asterisk\n\n; \u542f\u7528 HTTP/HTTPS - \u5f71\u54cd manager/rawman/mxml\nenabled=yes\n\n; \u76d1\u542c\u5730\u5740\nbindaddr=0.0.0.0\n\n; HTTP \u7aef\u53e3\n;bindport=8088\n\n; \u8bf7\u6c42\u524d\u7f00 - \u7c7b\u4f3c base patch \u6216 context path\n;prefix=asterisk\n\n; \u4f1a\u8bdd\u6570\u91cf\u9650\u5236 - \u9ed8\u8ba4 100\n;sessionlimit=100\n; \u4e0d\u6d3b\u8dc3\u7b49\u5f85\u65f6\u95f4 - \u5355\u4f4d ms - \u9ed8\u8ba4 30s\n;session_inactivity=30000\n; \u7b49\u5f85\u4e0b\u4e00\u4e2a\u8bf7\u6c42\u7684\u65f6\u95f4 - \u5355\u4f4d ms - \u9ed8\u8ba4 15s, 0 \u7981\u7528\n;session_keep_alive=15000\n\n; \u662f\u5426\u5141\u8bb8\u8bbf\u95ee\u9759\u6001\u6587\u4ef6\n; enablestatic=yes\n;enable_static=yes\n; \u662f\u5426\u8fd4\u56de\u72b6\u6001\u9875\n;enable_status=no\n\n; \u81ea\u5b9a\u4e49\u91cd\u5b9a\u5411 from to\n; \u4f8b\u5982 asterisk Asterisk-gui\n;redirect = / /static/config/index.html\n\n; \u542f\u7528 HTTPS\n;tlsenable=yes\n;tlsbindaddr=0.0.0.0:8089\n; \u8bc1\u4e66\n;tlscertfile=</path/to/certificate.pem>\n;tlsprivatekey=</path/to/private.pem>\n; If no path is given for tlscertfile or tlsprivatekey, default is to look in current\n; directory. If no tlsprivatekey is given, default is to search tlscertfile for private key.\n;\n; To produce a certificate you can e.g. use openssl. This places both the cert and\n; private in same .pem file.\n; openssl req -new -x509 -days 365 -nodes -out /tmp/foo.pem -keyout /tmp/foo.pem\n;\n; tlscipher=                             ; The list of allowed ciphers\n;                                        ; if none are specified the following cipher\n;                                        ; list will be used instead:\n; ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:\n; ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:\n; kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:\n; ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:\n; ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:\n; DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:\n; AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-SHA256:AES256-SHA256:AES128-SHA:AES256-SHA:\n; AES:CAMELLIA:DES-CBC3-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!aECDH:\n; !EDH-DSS-DES-CBC3-SHA:!EDH-RSA-DES-CBC3-SHA:!KRB5-DES-CBC3-SHA\n;\n; tlsdisablev1=yes                ; Disable TLSv1 support - if not set this defaults to "yes"\n; tlsdisablev11=yes               ; Disable TLSv1.1 support - if not set this defaults to "no"\n; tlsdisablev12=yes               ; Disable TLSv1.2 support - if not set this defaults to "no"\n;\n; tlsservercipherorder=yes        ; Use the server preference order instead of the client order\n;                                 ; Defaults to "yes"\n\n; \u6620\u5c04 url \u8def\u5f84\u5230\u7cfb\u7edf  - POST \u4f1a\u4e0a\u4f20\u6587\u4ef6\n; \u9700\u8981 AMI \u7684 mansession_id \u4f5c\u4e3a cookie\n;[post_mappings]\n; \u5982\u679c\u8bbe\u7f6e\u4e86\u524d\u7f00 asterisk\n; \u5219 POST /asterisk/uploads \u4f1a\u4e0a\u4f20\u5230 /var/lib/asterisk/uploads/\n;uploads = /var/lib/asterisk/uploads/\n')))}m.isMDXComponent=!0}}]);