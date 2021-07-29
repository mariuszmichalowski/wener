"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[33215],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=p(n),s=r,k=d["".concat(o,".").concat(s)]||d[s]||m[s]||l;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15250:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),i=["components"],u={title:"Apache Guacamole"},o=void 0,p={unversionedId:"ops/infra/guacamole",id:"ops/infra/guacamole",isDocsHomePage:!1,title:"Apache Guacamole",description:"\u662f\u4ec0\u4e48?",source:"@site/notes/ops/infra/guacamole.md",sourceDirName:"ops/infra",slug:"/ops/infra/guacamole",permalink:"/notes/ops/infra/guacamole",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/infra/guacamole.md",version:"current",frontMatter:{title:"Apache Guacamole"},sidebar:"docs",previous:{title:"Cloud Init",permalink:"/notes/ops/infra/cloud-init"},next:{title:"Nomad",permalink:"/notes/ops/infra/nomad"}},c=[{value:"\u7ec4\u4ef6",id:"\u7ec4\u4ef6",children:[]},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[{value:"\u8ba4\u8bc1",id:"\u8ba4\u8bc1",children:[]}]},{value:"Docker",id:"docker",children:[]}],m={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u662f\u4ec0\u4e48?")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65e0\u5ba2\u6237\u7aef\u7684\u8fdc\u7a0b\u684c\u9762\u7f51\u5173"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 VNC, RDP, SSH, telnet, Kubernetes",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Kubernetes - \u5bb9\u5668\u63a7\u5236\u53f0"))),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 mysql, postgresql, ldap, 2factor, totp, http header, cas, oidc, saml, ad-hoc \u8ba4\u8bc1"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u5f55\u5236")),(0,l.kt)("h2",{id:"\u7ec4\u4ef6"},"\u7ec4\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"guacd",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7aef\u53e3 4822"))),(0,l.kt)("li",{parentName:"ul"},"quickconnect",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ssh://linux1.example.com/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"vnc://linux1.example.com:5900/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rdp://localuser@windows1.example.com/?security=rdp&ignore-cert=true&disable-audio=true&enable-drive=true&drive-path=/mnt/usb"))))),(0,l.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://guacamole.apache.org/doc/gug/configuring-guacamole.html"},"Configuring Guacamole"))),(0,l.kt)("h3",{id:"\u8ba4\u8bc1"},"\u8ba4\u8bc1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"postgresql",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"POSTGRES_HOSTNAME"),(0,l.kt)("li",{parentName:"ul"},"POSTGRES_PORT"),(0,l.kt)("li",{parentName:"ul"},"POSTGRES_DATABASE"),(0,l.kt)("li",{parentName:"ul"},"POSTGRES_USER"),(0,l.kt)("li",{parentName:"ul"},"POSTGRES_PASSWORD"))),(0,l.kt)("li",{parentName:"ul"},"ldap",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"LDAP_HOSTNAME"),(0,l.kt)("li",{parentName:"ul"},"LDAP_PORT"),(0,l.kt)("li",{parentName:"ul"},"LDAP_ENCRYPTION_METHOD"),(0,l.kt)("li",{parentName:"ul"},"LDAP_USER_BASE_DN"))),(0,l.kt)("li",{parentName:"ul"},"header",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"HEADER_ENABLED"),(0,l.kt)("li",{parentName:"ul"},"HTTP_AUTH_HEADER=REMOTE_USER"))),(0,l.kt)("li",{parentName:"ul"},"oidc",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"openid-authorization-endpoint",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"https://identity-provider/.well-known/openid-configuration"))),(0,l.kt)("li",{parentName:"ul"},"openid-jwks-endpoint"),(0,l.kt)("li",{parentName:"ul"},"openid-issuer"),(0,l.kt)("li",{parentName:"ul"},"openid-client-id"),(0,l.kt)("li",{parentName:"ul"},"openid-redirect-uri")))),(0,l.kt)("h2",{id:"docker"},"Docker"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"guacamole/guacd",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Daemon"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 VNC, RDP, SSH, telnet, Kubernetes"))),(0,l.kt)("li",{parentName:"ul"},"guacamole/guacamole",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Web"),(0,l.kt)("li",{parentName:"ul"},"http://HOSTNAME:8080/guacamole/")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it -e GUACD_LOG_LEVEL=debug -p 4822:4822 --name guacd guacamole/guacd\n\ndocker run --rm guacamole/guacamole /opt/guacamole/bin/initdb.sh --postgres > initdb.sql\n\n# GUACD_HOSTNAME=172.17.42.1\n# GUACD_PORT=4822\ndocker run --rm -it \\\n  --link guacd:guacd \\\n  -p 8080:8080 \\\n  --name guacamole guacamole/guacamole\n")))}d.isMDXComponent=!0}}]);