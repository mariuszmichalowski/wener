"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[45641],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},22466:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var n=a(22122),r=a(19756),l=(a(67294),a(3905)),i=["components"],o={id:"hasura",title:"Hasura"},s=void 0,u={unversionedId:"db/relational/postgresql/hasura",id:"db/relational/postgresql/hasura",isDocsHomePage:!1,title:"Hasura",description:"Tips",source:"@site/notes/db/relational/postgresql/hasura.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/hasura",permalink:"/notes/db/relational/postgresql/hasura",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/relational/postgresql/hasura.md",version:"current",frontMatter:{id:"hasura",title:"Hasura"},sidebar:"docs",previous:{title:"PostgresSQL",permalink:"/notes/db/relational/postgresql/postgresql"},next:{title:"libpq",permalink:"/notes/db/relational/postgresql/libpq"}},p=[{value:"Tips",id:"tips",children:[]},{value:"JWT \u9274\u6743",id:"jwt-\u9274\u6743",children:[]},{value:"\u6388\u6743\u8bbf\u95ee\u63a7\u5236",id:"\u6388\u6743\u8bbf\u95ee\u63a7\u5236",children:[]}],m={toc:p};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"tips"},"Tips"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/hasura/graphql-engine"},"hasura/graphql-engine"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Haskell"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.hasura.io/574a1ee2e87f"},"Working with schemaless data using GraphQL on Postgres")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.hasura.io/1.0/graphql/manual/deployment/graphql-engine-flags/reference.html"},"\u914d\u7f6e"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--unauthorized-role"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"HASURA_GRAPHQL_UNAUTHORIZED_ROLE")," - \u533f\u540d\u89d2\u8272",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982\u914d\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"anonymous")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--admin-secret"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"HASURA_GRAPHQL_ADMIN_SECRET")," - \u7ba1\u7406\u5458\u5bc6\u94a5"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--cors-domain <DOMAINS>"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"HASURA_GRAPHQL_CORS_DOMAIN")," - CORS \u57df\u540d"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--disable-cors")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--enable-telemetry <true|false>"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"HASURA_GRAPHQL_ENABLE_TELEMETRY")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.hasura.io/1.0/graphql/manual/api-reference/index.html"},"\u63a5\u53e3\u6587\u6863"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/v1/graphql")," - \u4e3b\u8981\u7684 GraphQL \u5165\u53e3 - \u751f\u4ea7\u53ef\u4ee5\u53ea\u66b4\u9732\u8fd9\u4e00\u4e2a"))),(0,l.kt)("li",{parentName:"ul"},"Hasura \u7684\u7cfb\u7edf\u4fe1\u606f\u5b58\u50a8\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"hdb_catalog")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"hdb_view")," \u4e2d"),(0,l.kt)("li",{parentName:"ul"},"\u95ee\u9898",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/hasura/graphql-engine/issues/2208"},"#2208")," - \u591a JWT \u652f\u6301"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/hasura/graphql-engine/issues/519"},"#519")," upk \u67e5\u8be2")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u521b\u5efa\u4e00\u4e2a\u6570\u636e\u5e93\nUSERNAME=hasura\nPASSWORD=hasura\nDATABASE=hasura\n# \u767b\u9646 console \u4f7f\u7528\u7684 token\nTOKEN=$(cat /dev/urandom | env LC_CTYPE=C tr -dc 'a-zA-Z0-9' | head -c 32 | tee -)\n\ndocker run -d \\\n  -e POSTGRES_USER=$USERNAME -e POSTGRES_PASSWORD=$PASSWORD -e POSTGRES_DB=$DATABASE \\\n  -v $PWD/postgres/data:/var/lib/postgresql/data -p 5432:5432 \\\n  --name postgres postgres:12-alpine\n\n# \u4f7f\u7528\u5df2\u6709\u6570\u636e\u5e93\n# \u63a7\u5236\u53f0 http://localhost:8080/console\ndocker run -it --rm -p 8080:8080 \\\n  --link postgres:db \\\n  -e HASURA_GRAPHQL_DATABASE_URL=postgres://$USERNAME:$PASSWORD@db:5432/$DATABASE \\\n  -e HASURA_GRAPHQL_ENABLE_CONSOLE=true \\\n  -e HASURA_GRAPHQL_ADMIN_SECRET=$TOKEN \\\n  -e HASURA_GRAPHQL_UNAUTHORIZED_ROLE=anonymous \\\n  -e HASURA_GRAPHQL_ENABLE_TELEMETRY=false \\\n  --name hasura hasura/graphql-engine:latest\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- Hasura \u751f\u6210 UUID \u9700\u8981 pgcrypto\nCREATE EXTENSION IF NOT EXISTS pgcrypto;\n")),(0,l.kt)("h2",{id:"jwt-\u9274\u6743"},"JWT \u9274\u6743"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},"--jwt-secret")," \u542f\u7528 - \u9700\u8981\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"li"},"HASURA_GRAPHQL_JWT_SECRET")),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u5934\u4f20\u9012 JWT \u4fe1\u606f ",(0,l.kt)("inlineCode",{parentName:"li"},"Authorization: Bearer <JWT>")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"X-Hasura-Role")," \u5f53\u524d\u89d2\u8272")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"HASURA_GRAPHQL_JWT_SECRET")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // \u52a0\u5bc6\u7b97\u6cd5 - \u4f8b\u5982 \u5bf9\u79f0\u52a0\u5bc6 HS* \u6216 \u975e\u5bf9\u79f0\u52a0\u5bc6 RS*\n  "type": "<standard-JWT-algorithms>",\n  // \u5bf9\u79f0\u52a0\u5bc6\u4f7f\u7528\u5bc6\u7801 - HMAC\n  // \u975e\u5bf9\u79f0\u5219\u4e3a\u516c\u94a5 - \u53ef\u4ee5\u4f7f\u7528 JWKs \u800c\u4e0d\u914d\u7f6e\n  "key": "<optional-key-as-string>",\n  // well known \u7684 url - \u5305\u542b\u516c\u94a5\u7b49\u4fe1\u606f\n  "jwk_url": "<optional-url-to-refresh-jwks>",\n  // \u547d\u540d\u7a7a\u95f4 - \u9ed8\u8ba4 https://hasura.io/jwt/claims\n  "claims_namespace": "<optional-key-name-in-claims>",\n  // jwt claims \u4e2d\u7684\u683c\u5f0f - JSON \u5bf9\u8c61\u6216\u5b57\u7b26\u4e32\u7f16\u7801\u7684 JSON\n  "claims_format": "json|stringified_json",\n  // jwt \u76ee\u6807\u5bf9\u8c61 - \u4f8b\u5982\u6307\u5b9a myapp-1 - \u4e00\u822c\u7528\u4e8e\u591a\u79df\u6237\u6216\u591a\u5e94\u7528\n  "audience": "<optional-string-or-list-of-strings-to-verify-audience>",\n  // \u5728\u6821\u9a8c\u65f6\u9a8c\u8bc1\u53d1\u9001\u65b9\n  "issuer": "<optional-string-to-verify-issuer>"\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"JWT\u5185\u5bb9")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sub": "1234567890",\n  "name": "John Doe",\n  "admin": true,\n  "iat": 1516239022,\n  "https://hasura.io/jwt/claims": {\n    // \u5141\u8bb8\u7684\u89d2\u8272 - \u81ea\u5b9a\u4e49 - \u5bf9\u5e94\u540e\u53f0\u914d\u7f6e\u7684\u6743\u9650\n    "x-hasura-allowed-roles": ["editor","user", "mod"],\n    // \u9ed8\u8ba4\u89d2\u8272 - \u53ef\u4ee5\u76f4\u63a5\u5934\u90e8\u6307\u5b9a x-hasura-role\n    "x-hasura-default-role": "user",\n    "x-hasura-user-id": "1234567890",\n    "x-hasura-org-id": "123",\n    "x-hasura-custom": "custom-value"\n  }\n}\n')),(0,l.kt)("h2",{id:"\u6388\u6743\u8bbf\u95ee\u63a7\u5236"},"\u6388\u6743\u8bbf\u95ee\u63a7\u5236"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"X-Hasura-Admin-Secret")," \u5934\u7528\u4e8e\u4f20\u9012\u7ba1\u7406\u5458\u5bc6\u94a5 - admin \u89d2\u8272"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Authorization: Bearer <JWT>")," JWT \u9274\u6743"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u89d2\u8272\u7684\u6743\u9650\u63a7\u5236 - \u4e0d\u652f\u6301\u7ea7\u8054\u89d2\u8272 - \u89d2\u8272\u5fc5\u987b\u5e73\u5766",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"X-Hasura-Role"),(0,l.kt)("li",{parentName:"ul"},"X-Hasura-Allowed-Roles"))),(0,l.kt)("li",{parentName:"ul"},"\u5217\u63a7\u5236",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ef\u89c1\u6027"))),(0,l.kt)("li",{parentName:"ul"},"\u884c\u63a7\u5236",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u8868\u8fbe\u5f0f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'{"user_id":{"_eq":"X-Hasura-User-Id"}}')," - \u5176\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"X-Hasura-*")," \u4f1a\u88ab\u66ff\u6362"))))),(0,l.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u63a7\u5236",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"CRUD"))),(0,l.kt)("li",{parentName:"ul"},"\u9488\u5bf9\u4e0d\u540c\u89d2\u8272\u4f1a\u751f\u6210\u4e0d\u540c schema"),(0,l.kt)("li",{parentName:"ul"},"JWT",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u987b\u5305\u542b\u5b57\u6bb5 x-hasura-default-role, x-hasura-allowed-roles"),(0,l.kt)("li",{parentName:"ul"},"\u5934\u91cc\u53ef\u6307\u5b9a x-hasura-role \u6765\u9009\u5b9a\u89d2\u8272")))))}c.isMDXComponent=!0}}]);