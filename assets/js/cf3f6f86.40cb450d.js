"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[93806],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,k=p["".concat(c,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},59193:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={id:"keycloak-faq",title:"Keycloak \u5e38\u89c1\u95ee\u9898"},c="Keycloak FAQ",s={unversionedId:"service/auth/keycloak/keycloak-faq",id:"service/auth/keycloak/keycloak-faq",isDocsHomePage:!1,title:"Keycloak \u5e38\u89c1\u95ee\u9898",description:"\u9ed8\u8ba4 mapper \u5b57\u6bb5",source:"@site/notes/service/auth/keycloak/keycloak-faq.md",sourceDirName:"service/auth/keycloak",slug:"/service/auth/keycloak/keycloak-faq",permalink:"/notes/service/auth/keycloak/keycloak-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/auth/keycloak/keycloak-faq.md",tags:[],version:"current",frontMatter:{id:"keycloak-faq",title:"Keycloak \u5e38\u89c1\u95ee\u9898"},sidebar:"docs",previous:{title:"Keycloak \u5f00\u53d1",permalink:"/notes/service/auth/keycloak/keycloak-dev"},next:{title:"Keycloak JS SDK",permalink:"/notes/service/auth/keycloak/keycloak-js"}},u=[{value:"\u9ed8\u8ba4 mapper \u5b57\u6bb5",id:"\u9ed8\u8ba4-mapper-\u5b57\u6bb5",children:[]},{value:"OIDC Brokering \u65e0\u6cd5\u963b\u6b62\u521b\u5efa\u672c\u5730\u8d26\u53f7",id:"oidc-brokering-\u65e0\u6cd5\u963b\u6b62\u521b\u5efa\u672c\u5730\u8d26\u53f7",children:[]},{value:"\u670d\u52a1\u8d26\u53f7 - Service Account",id:"\u670d\u52a1\u8d26\u53f7---service-account",children:[]},{value:"\u4e3b\u57df - Master Realm",id:"\u4e3b\u57df---master-realm",children:[]},{value:"login-status-iframe.html/init 403 \u5f02\u5e38",id:"login-status-iframehtmlinit-403-\u5f02\u5e38",children:[]},{value:"invalid_grant: Code not valid",id:"invalid_grant-code-not-valid",children:[]},{value:"invalid_client_credentials CODE_TO_TOKEN_ERROR",id:"invalid_client_credentials-code_to_token_error",children:[]},{value:"Could not modify attribute for DN",id:"could-not-modify-attribute-for-dn",children:[]},{value:"Found an Attribute element with duplicated Name",id:"found-an-attribute-element-with-duplicated-name",children:[]},{value:'IDP parameter for the UID (username) not found. Possible parameters are: "Role"',id:"idp-parameter-for-the-uid-username-not-found-possible-parameters-are-role",children:[]},{value:"Access to XMLHttpRequest at keycloak from origin &#39;http://127.0.0.1:3000' has been blocked by CORS policy: No &#39;Access-Control-Allow-Origin&#39; header is present on the requested resource.",id:"access-to-xmlhttprequest-at-keycloak-from-origin-http1270013000-has-been-blocked-by-cors-policy-no-access-control-allow-origin-header-is-present-on-the-requested-resource",children:[]},{value:"JWKs \u6ca1\u6709\u7b7e\u540d\u7684\u516c\u94a5",id:"jwks-\u6ca1\u6709\u7b7e\u540d\u7684\u516c\u94a5",children:[]},{value:"\u57df\u540d\u6620\u5c04\u57df",id:"\u57df\u540d\u6620\u5c04\u57df",children:[]},{value:"Unexpected error when authenticating with identity provider",id:"unexpected-error-when-authenticating-with-identity-provider",children:[]},{value:"ISPN000474: Error processing request 4@sparkle-stack-keycloak-76f867dd87-nkpcl: protostream.com.google.protobuf.InvalidProtocolBufferException: While parsing a protocol message, the input ended unexpectedly in the middle of a field. This could mean either that the input has been truncated or that an embedded message misreported its own length.",id:"ispn000474-error-processing-request-4sparkle-stack-keycloak-76f867dd87-nkpcl-protostreamcomgoogleprotobufinvalidprotocolbufferexception-while-parsing-a-protocol-message-the-input-ended-unexpectedly-in-the-middle-of-a-field-this-could-mean-either-that-the-input-has-been-truncated-or-that-an-embedded-message-misreported-its-own-length",children:[]},{value:"failed getting JSON response from Kubernetes Client",id:"failed-getting-json-response-from-kubernetes-client",children:[]}],d={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"keycloak-faq"},"Keycloak FAQ"),(0,l.kt)("h2",{id:"\u9ed8\u8ba4-mapper-\u5b57\u6bb5"},"\u9ed8\u8ba4 mapper \u5b57\u6bb5"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"scope"),(0,l.kt)("th",{parentName:"tr",align:null},"mapper"),(0,l.kt)("th",{parentName:"tr",align:null},"field"),(0,l.kt)("th",{parentName:"tr",align:null},"to"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"roles"),(0,l.kt)("td",{parentName:"tr",align:null},"realm roles"),(0,l.kt)("td",{parentName:"tr",align:null},"realm_access.roles"),(0,l.kt)("td",{parentName:"tr",align:null},"User Realm Role")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"^"),(0,l.kt)("td",{parentName:"tr",align:null},"client roles"),(0,l.kt)("td",{parentName:"tr",align:null},"resource_access.${client_id}.roles"),(0,l.kt)("td",{parentName:"tr",align:null},"User Client Role")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"web-origins"),(0,l.kt)("td",{parentName:"tr",align:null},"allowed web origins"),(0,l.kt)("td",{parentName:"tr",align:null},"allowed-origins"),(0,l.kt)("td",{parentName:"tr",align:null},"Allowed Web Origins")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"phone"),(0,l.kt)("td",{parentName:"tr",align:null},"phone number"),(0,l.kt)("td",{parentName:"tr",align:null},"phone_number"),(0,l.kt)("td",{parentName:"tr",align:null},"Attribute - phoneNumber")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"^"),(0,l.kt)("td",{parentName:"tr",align:null},"phone number verified"),(0,l.kt)("td",{parentName:"tr",align:null},"phone_number_verified"),(0,l.kt)("td",{parentName:"tr",align:null},"Attribute - phoneNumberVerified")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"email"),(0,l.kt)("td",{parentName:"tr",align:null},"email"),(0,l.kt)("td",{parentName:"tr",align:null},"email"),(0,l.kt)("td",{parentName:"tr",align:null},"Property - phoneNumber")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"^"),(0,l.kt)("td",{parentName:"tr",align:null},"email verified"),(0,l.kt)("td",{parentName:"tr",align:null},"email_verified"),(0,l.kt)("td",{parentName:"tr",align:null},"Property - emailVerified")))),(0,l.kt)("h2",{id:"oidc-brokering-\u65e0\u6cd5\u963b\u6b62\u521b\u5efa\u672c\u5730\u8d26\u53f7"},"OIDC Brokering \u65e0\u6cd5\u963b\u6b62\u521b\u5efa\u672c\u5730\u8d26\u53f7"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u76ee\u524d\u65e0\u89e3"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://issues.redhat.com/browse/KEYCLOAK-4429"},"https://issues.redhat.com/browse/KEYCLOAK-4429")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developers.redhat.com/blog/2020/12/30/how-to-restrict-users-being-authenticated-in-keycloak-during-identity-brokering#"},"https://developers.redhat.com/blog/2020/12/30/how-to-restrict-users-being-authenticated-in-keycloak-during-identity-brokering#"))),(0,l.kt)("h2",{id:"\u670d\u52a1\u8d26\u53f7---service-account"},"\u670d\u52a1\u8d26\u53f7 - Service Account"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u76f4\u63a5\u7533\u8bf7\u83b7\u53d6 Token\uff0c\u7136\u540e\u4f7f\u7528\u7533\u8bf7\u5230\u7684 Token \u8bbf\u95ee\u670d\u52a1"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u6d89\u53ca\u7528\u6237\u548c\u6d4f\u89c8\u5668\u4ea4\u4e92"),(0,l.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u670d\u52a1\u4e4b\u95f4\u9274\u6743\uff0c\u4f8b\u5982 \u670d\u52a1\u7aef API \u6388\u6743")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://medium.com/@mihirrajdixit/getting-started-with-service-accounts-in-keycloak-c8f6798a0675"},"https://medium.com/@mihirrajdixit/getting-started-with-service-accounts-in-keycloak-c8f6798a0675"),"\ngreat for administrative tasks executed on behalf of a service instead of individual user."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://planet.jboss.org/post/service_accounts_support_in_keycloak"},"https://planet.jboss.org/post/service_accounts_support_in_keycloak"),"\nallows to authenticate the client application with Keycloak server and retrieve the access token dedicated to this application."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_admin/index.html#_service_accounts"},"https://www.keycloak.org/docs/latest/server_admin/index.html#_service_accounts")),(0,l.kt)("h2",{id:"\u4e3b\u57df---master-realm"},"\u4e3b\u57df - Master Realm"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u7528\u4e8e\u8d85\u7ba1\u8fdb\u884c\u7cfb\u7edf\u7ba1\u7406"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u5c06 Master Realm \u7528\u4e8e\u4e1a\u52a1"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5728\u5177\u4f53\u57df\u4e0b\u521b\u5efa\u7ba1\u7406\u5458\uff0c\u7136\u540e\u7981\u7528 Master Realm"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.keycloak.org/docs/latest/server_admin/#the-master-realm"},"The Master Realm"))))),(0,l.kt)("h2",{id:"login-status-iframehtmlinit-403-\u5f02\u5e38"},"login-status-iframe.html/init 403 \u5f02\u5e38"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u5f00\u542f Implicit Flow Enabled"),(0,l.kt)("li",{parentName:"ul"},"\u786e\u4fdd client_id \b \u6b63\u786e",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c client_id \u9519\u4e86\u4f1a 403\uff0c\u4f46\u6ca1\u6709\u4efb\u4f55\u5730\u65b9\u63d0\u793a client_id \u9519\u8bef"),(0,l.kt)("li",{parentName:"ul"},"\u975e\u5e38\u96be\u6392\u67e5")))),(0,l.kt)("h2",{id:"invalid_grant-code-not-valid"},"invalid_grant: Code not valid"),(0,l.kt)("h2",{id:"invalid_client_credentials-code_to_token_error"},"invalid_client_credentials CODE_TO_TOKEN_ERROR"),(0,l.kt)("p",null,"\u5982\u679c\u662f\u7eaf\u524d\u7aef\uff0c\u9700\u8981\u751f\u6210 Token"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -L -X POST 'http://localhost:8080/auth/realms/whatever-realm/protocol/openid-connect/token' \\\n  -H 'Content-Type: application/x-www-form-urlencoded' \\\n  --data-urlencode 'client_id=clientid-03' \\\n  --data-urlencode 'grant_type=password' \\\n  --data-urlencode 'client_secret=ec78c6bb-8339-4bed-9b1b-e973d27107dc' \\\n  --data-urlencode 'scope=openid' \\\n  --data-urlencode 'username=emuhamma' \\\n  --data-urlencode 'password=1'\n")),(0,l.kt)("h2",{id:"could-not-modify-attribute-for-dn"},"Could not modify attribute for DN"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f7f\u7528\u4e86 federation\uff0c\u4fee\u6539\u5bc6\u7801\u53ef\u80fd\u88ab\u7981\u6b62")),(0,l.kt)("h2",{id:"found-an-attribute-element-with-duplicated-name"},"Found an Attribute element with duplicated Name"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 SAML \u7684\u65f6\u5019 Nextcloud \u8981\u8bbe\u7f6e\u89d2\u8272\u5217\u8868\u8fd4\u56de\u5355\u4e2a\u89d2\u8272"),(0,l.kt)("li",{parentName:"ul"},"(Realm) -> Client Scopes -> role_list (saml) -> Mappers tab -> role list -> 'Single Role Attribute'.")),(0,l.kt)("h2",{id:"idp-parameter-for-the-uid-username-not-found-possible-parameters-are-role"},"IDP parameter for the UID (username) not found. Possible parameters are: ",'["Role"]'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Nextcloud + SAML \u51fa\u73b0"),(0,l.kt)("li",{parentName:"ul"},"\u5728 Keycloak Client Mappers \u6dfb\u52a0 Mapper")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Name"),(0,l.kt)("td",{parentName:"tr",align:null},"username")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mapper Type"),(0,l.kt)("td",{parentName:"tr",align:null},"User Property")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Property"),(0,l.kt)("td",{parentName:"tr",align:null},"username")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Friendly Name"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SAML Attribute Name"),(0,l.kt)("td",{parentName:"tr",align:null},"username")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SAML Attribute NameFormat"),(0,l.kt)("td",{parentName:"tr",align:null},"Basic")))),(0,l.kt)("h2",{id:"access-to-xmlhttprequest-at-keycloak-from-origin-http1270013000-has-been-blocked-by-cors-policy-no-access-control-allow-origin-header-is-present-on-the-requested-resource"},"Access to XMLHttpRequest at keycloak from origin '",(0,l.kt)("a",{parentName:"h2",href:"http://127.0.0.1:3000'"},"http://127.0.0.1:3000'")," has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u903b\u8f91\u4e0a\u6765\u8bf4\u662f\u9700\u8981\u914d\u7f6e Client \u7684 Web Origins"),(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u540e\u8fd8\u662f\u51fa\u73b0"),(0,l.kt)("li",{parentName:"ul"},"curl \u6d4b\u8bd5\u6b63\u5e38"),(0,l.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u6ca1\u6709\u53d1\u8d77 OPTIONS \u8bf7\u6c42"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u53ea\u662f\u524d\u7aef\u4f7f\u7528\uff0c\u4e00\u5b9a\u9009\u62e9 ",(0,l.kt)("strong",{parentName:"li"},"public"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u76f4\u63a5\u6d4b\u8bd5\u6709\u8fd4\u56de\ncurl \\\n--verbose \\\n--request OPTIONS \\\nhttps://keycloak \\\n--header 'Origin: http://127.0.0.1:3000' \\\n--header 'Access-Control-Request-Headers: Origin, Accept, Content-Type' \\\n--header 'Access-Control-Request-Method: POST'\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"date: Fri, 15 Jan 2021 15:41:37 GMT\ncontent-length: 0\naccess-control-allow-headers: Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization\nx-xss-protection: 1; mode=block\nreferrer-policy: no-referrer\naccess-control-allow-origin: http://127.0.0.1:3000\naccess-control-allow-credentials: true\nstrict-transport-security: max-age=15724800; includeSubDomains\nx-content-type-options: nosniff\naccess-control-allow-methods: POST, OPTIONS\naccess-control-max-age: 3600\n")),(0,l.kt)("h2",{id:"jwks-\u6ca1\u6709\u7b7e\u540d\u7684\u516c\u94a5"},"JWKs \u6ca1\u6709\u7b7e\u540d\u7684\u516c\u94a5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u662f\u6240\u6709\u7b97\u6cd5\u90fd\u6709"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u6709 Public key \u7684\u7b97\u6cd5")),(0,l.kt)("h2",{id:"\u57df\u540d\u6620\u5c04\u57df"},"\u57df\u540d\u6620\u5c04\u57df"),(0,l.kt)("p",null,"\u6ca1\u6709\u5f88\u597d\u7684\u529e\u6cd5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://keycloak.discourse.group/t/1833"},"One domain per realm, disabling unrelated keycloak pages"))))),(0,l.kt)("h2",{id:"unexpected-error-when-authenticating-with-identity-provider"},"Unexpected error when authenticating with identity provider"),(0,l.kt)("p",null,"\u53ef\u5f00\u542f login \u65e5\u5fd7\u6392\u67e5\u5177\u4f53\u9519\u8bef"),(0,l.kt)("p",null,"\u5982\u679c\u5bf9\u65b9\u6ca1\u51fa\u95ee\u9898\uff0c\u68c0\u67e5\u914d\u7f6e\u3002"),(0,l.kt)("p",null,"\u53d1\u73b0 \u5f00\u542f back-channel logout \u4e14\u8bbe\u7f6e\u4e3a basic auth \u89e3\u51b3\u4e86\u95ee\u9898\u3002"),(0,l.kt)("h2",{id:"ispn000474-error-processing-request-4sparkle-stack-keycloak-76f867dd87-nkpcl-protostreamcomgoogleprotobufinvalidprotocolbufferexception-while-parsing-a-protocol-message-the-input-ended-unexpectedly-in-the-middle-of-a-field-this-could-mean-either-that-the-input-has-been-truncated-or-that-an-embedded-message-misreported-its-own-length"},"ISPN000474: Error processing request 4@sparkle-stack-keycloak-76f867dd87-nkpcl: protostream.com.google.protobuf.InvalidProtocolBufferException: While parsing a protocol message, the input ended unexpectedly in the middle of a field. This could mean either that the input has been truncated or that an embedded message misreported its own length."),(0,l.kt)("p",null,"Kubernetes \u4e0a\u90e8\u7f72\u4fee\u6539\u53d1\u73b0\u903b\u8f91\u4e3a KUBE_PING"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"env:\n  # https://github.com/codecentric/helm-charts/issues/149\n  - name: JGROUPS_DISCOVERY_PROTOCOL\n    value: kubernetes.KUBE_PING\n  - name: JGROUPS_DISCOVERY_PROPERTIES\n    value: dump_requests=true,port_range=0,namespace={{.Release.Namespace}}\n")),(0,l.kt)("h2",{id:"failed-getting-json-response-from-kubernetes-client"},"failed getting JSON response from Kubernetes Client"))}p.isMDXComponent=!0}}]);