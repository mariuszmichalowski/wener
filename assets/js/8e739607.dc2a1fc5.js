"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[31809],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),u=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},m=function(t){var e=u(t.components);return a.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),k=u(n),c=r,N=k["".concat(i,".").concat(c)]||k[c]||s[c]||l;return n?a.createElement(N,p(p({ref:e},m),{},{components:n})):a.createElement(N,p({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=k;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:r,p[1]=o;for(var u=2;u<l;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},54420:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return m},default:function(){return k}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),p=["components"],o={id:"jwt",title:"JWT"},i=void 0,u={unversionedId:"service/auth/oauth/jwt",id:"service/auth/oauth/jwt",isDocsHomePage:!1,title:"JWT",description:"- JWT",source:"@site/notes/service/auth/oauth/jwt.md",sourceDirName:"service/auth/oauth",slug:"/service/auth/oauth/jwt",permalink:"/notes/service/auth/oauth/jwt",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/auth/oauth/jwt.md",tags:[],version:"current",frontMatter:{id:"jwt",title:"JWT"},sidebar:"docs",previous:{title:"JWK",permalink:"/notes/service/auth/oauth/jwk"},next:{title:"OpenID Connect",permalink:"/notes/service/auth/oauth/oidc"}},m=[{value:"JWKS",id:"jwks",children:[]}],s={toc:m};function k(t){var e=t.components,n=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://jwt.io/"},"JWT")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://openid.net/developers/jwt/"},"https://openid.net/developers/jwt/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://mkjwk.org/"},"https://mkjwk.org/"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u751f\u6210 JWK"))),(0,l.kt)("li",{parentName:"ul"},"\u662f\u4e00\u5957\u8ba4\u8bc1\u534f\u8bae"),(0,l.kt)("li",{parentName:"ul"},"\u534f\u8bae\u7b80\u5355\u4e14\u6613\u4e8e\u5b9e\u73b0"),(0,l.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u7528\u4e8e\u5206\u5e03\u5f0f\u7684\u65e0\u72b6\u6001\u63a5\u53e3\u8c03\u7528")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://auth0.com/blog/cookies-vs-tokens-definitive-guide/"},"https://auth0.com/blog/cookies-vs-tokens-definitive-guide/")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc7515"},"JWS#rfc7515")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc7516"},"JWE#rfc7516")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc7517"},"JWK#rfc7517")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc7518"},"JWA#rfc7518")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc7519"},"JWT#rfc7519"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5f3a\u9879")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5feb\u901f\u5f00\u53d1"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u9700\u8981 Cookie"),(0,l.kt)("li",{parentName:"ul"},"JSON \u76f8\u5bf9\u53cb\u597d"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u4f9d\u8d56\u793e\u4ea4\u767b\u9646"),(0,l.kt)("li",{parentName:"ul"},"\u6982\u5ff5\u7b80\u5355\u6613\u4e8e\u7406\u89e3")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u9650\u5236")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Token \u6709\u5927\u5c0f\u9650\u5236"),(0,l.kt)("li",{parentName:"ul"},"Token \u4e0d\u80fd\u88ab\u56de\u6536"),(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981 Token \u6709\u4e2a\u8f83\u77ed\u7684\u5931\u6548\u5468\u671f")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"field"),(0,l.kt)("th",{parentName:"tr",align:null},"stand for"),(0,l.kt)("th",{parentName:"tr",align:null},"meanning"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"iss"),(0,l.kt)("td",{parentName:"tr",align:null},"Issuer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u51fa\u8005")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sub"),(0,l.kt)("td",{parentName:"tr",align:null},"Subject"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e00\u822c\u4e3a\u7528\u6237 id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"aud"),(0,l.kt)("td",{parentName:"tr",align:null},"Audience"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53d7\u8005")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"exp"),(0,l.kt)("td",{parentName:"tr",align:null},"Expiration time"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5931\u6548\u65f6\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nbf"),(0,l.kt)("td",{parentName:"tr",align:null},"Not before"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u8fd9\u4e4b\u524d\u4e0d\u751f\u6548")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"iat"),(0,l.kt)("td",{parentName:"tr",align:null},"Issued at"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u51fa\u65f6\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jti"),(0,l.kt)("td",{parentName:"tr",align:null},"JWT ID"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"typ"),(0,l.kt)("td",{parentName:"tr",align:null},"Type"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7c7b\u578b,\u7531\u7528\u6237\u6269\u5c55, e.g. ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"azp"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nonce"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"acr"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sid"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"at_hash"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auth_time"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"\u5e38\u89c1\u7b97\u6cd5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"HMAC + SHA256"),(0,l.kt)("li",{parentName:"ul"},"RSASSA-PKCS1-v1_5 + SHA256"),(0,l.kt)("li",{parentName:"ul"},"ECDSA + P-256 + SHA256"),(0,l.kt)("li",{parentName:"ul"},"RSA vs ECDSA",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u540c\u7b49\u5b89\u5168\u5ea6\u4e0b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"RSA \u66f4\u957f, \u7b7e\u540d\u9a8c\u8bc1\u66f4\u5feb"),(0,l.kt)("li",{parentName:"ul"},"ECDSA \u66f4\u77ed, \u751f\u6210\u7b7e\u540d\u548c\u5bc6\u94a5\u65f6\u5feb\u5f97\u591a"))))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc7518#section-3"},"https://datatracker.ietf.org/doc/html/rfc7518#section-3"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "iss": "http://example.org",\n  "aud": "http://example.com",\n  "iat": 1356999524,\n  "nbf": 1357000000\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "iss": "https://oidc.my.com",\n  "x5t": "AAAAAAAAAAAAAAAAAAAA"\n  "typ": "JWT"\n  "alg": "RS265"\n}\n\n{\n  "sub": "wener"\n  "name": "Wener"\n  "email": "wener@wener.me"\n  "phone_number": "1852159826715"\n  "aud": "https://otheremail.com"\n  "iss": "https://oidc.my.com"\n  "nbf": 1497868409096\n  "jti": "ANpzy7AyyANx0Cn8WMP5N7bG3E8awOhB"\n  "exp": 1497868509096\n  "nbf": 1497868409096\n}\n')),(0,l.kt)("h2",{id:"jwks"},"JWKS"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/auth0/node-jwks-rsa"},"https://github.com/auth0/node-jwks-rsa")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.googleapis.com/oauth2/v3/certs"},"https://www.googleapis.com/oauth2/v3/certs")),(0,l.kt)("li",{parentName:"ul"},"Firebase",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com"},"https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com"))))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com"},"https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://auth0.com/docs/tokens/reference/jwt/jwks-properties"},"https://auth0.com/docs/tokens/reference/jwt/jwks-properties")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://sandrino.auth0.com/.well-known/jwks.json"},"https://sandrino.auth0.com/.well-known/jwks.json"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://sandrino.auth0.com/pem"},"https://sandrino.auth0.com/pem")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.hasura.io/1.0/graphql/manual/auth/authentication/jwt.html"},"https://docs.hasura.io/1.0/graphql/manual/auth/authentication/jwt.html")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "keys": [\n    {\n      "alg": "RS256",\n      "kty": "RSA",\n      "use": "sig",\n      "n": "",\n      "e": "AQAB",\n      "kid": "RkI5MjI5OUY5ODc1N0Q4QzM0OUYzNkVGMTJDOUEzQkFCOTU3NjE2Rg",\n      "x5t": "RkI5MjI5OUY5ODc1N0Q4QzM0OUYzNkVGMTJDOUEzQkFCOTU3NjE2Rg",\n      "x5c": [\n        // base64 \u7f16\u7801\n        ""\n      ]\n    }\n  ]\n}\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developers.google.com/identity/protocols/OpenIDConnect"},"https://developers.google.com/identity/protocols/OpenIDConnect")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "keys": [\n    {\n      "e": "AQAB",\n      "kty": "RSA",\n      "alg": "RS256",\n      "n": "1Zi0-4bNwZ7gGefz17U2NoKT4xBq-nzAa899teHxB2Q9KVCZYDhbQkpiIrBNg2u8s6TtoSljpq6MJpsKJVJgpT70gDCCgaUsGNYql9-kwWNKd80FlU1sjDEGouUIVEoYHzooPyn9r027KzMnTv5LGRYjxb5lvGnb4UCw5MF_EeSTNpGD7zb0b6juXwBxPi0oIUbQxAcGgH3oS40hXAjJ_U2T3Hln8lBlnVhLbrh-5qF-uoYDxjtAY9XyEJQH_rGiRfXWgBfSM02t9DCB46sQbEMM2iLe7mkGrZtCHR4zbAsAP0s2VGqSmwszNTWqqsdOccbfXp3i_ThkR3pDdTSIQQ",\n      "use": "sig",\n      "kid": "57b1928f2f63329f2e92f4f278f94ee1038c923c"\n    },\n    {\n      "e": "AQAB",\n      "kty": "RSA",\n      "alg": "RS256",\n      "n": "rEpSQ8IO8Gauj5AGRbgfwfaxHRMGONuTog4fWKWzZYxdWa76khbynWTAzUJVzw_FaAiZGnl7tlmD7pdKWOHszrcK2Hru87KzeRnnqvWlSqdKValu6x5TfBnJwxgr-L8Mnu4xNnrMG2AWcRkjFVWQmwZyEF3WroRzbxrVTlChD_UydnRuiV1z0BPkLOxTzF5RH21ukImElOm3AFIFXP5h8Z0yLrFEcxzLgDIt7wC68apH7uRmy2-a9D4b4Jwi3HRlAgsYAKXYeEQC3f8Mv03liJBv3CPZU4EyXLQUJA28b8l5NUSDI9tnbrfP8SIXlqLz8mNfuKR18LAU3s9sv-sR3Q",\n      "use": "sig",\n      "kid": "47456b8069e4365e517ca5e29757d1a9efa567ba"\n    }\n  ]\n}\n')))}k.isMDXComponent=!0}}]);