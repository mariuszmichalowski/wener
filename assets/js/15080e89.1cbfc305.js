"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[8869],{3905:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return k}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),m=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),u=m(a),k=n,d=u["".concat(c,".").concat(k)]||u[k]||s[k]||l;return a?r.createElement(d,i(i({ref:t},o),{},{components:a})):r.createElement(d,i({ref:t},o))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3603:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return o},default:function(){return u}});var r=a(22122),n=a(19756),l=(a(67294),a(3905)),i=["components"],p={title:"ACME"},c=void 0,m={unversionedId:"security/acme-awesome",id:"security/acme-awesome",isDocsHomePage:!1,title:"ACME",description:"Provider",source:"@site/notes/security/acme-awesome.md",sourceDirName:"security",slug:"/security/acme-awesome",permalink:"/notes/security/acme-awesome",editUrl:"https://github.com/wenerme/wener/edit/master/notes/security/acme-awesome.md",version:"current",frontMatter:{title:"ACME"},sidebar:"docs",previous:{title:"Security Awesome",permalink:"/notes/security/security-awesome"},next:{title:"Crypto",permalink:"/notes/security/crypto"}},o=[{value:"Provider",id:"provider",children:[]},{value:"Challenge",id:"challenge",children:[]},{value:"Client",id:"client",children:[]}],s={toc:o};function u(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"provider"},"Provider"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"letsencrypt"),(0,l.kt)("li",{parentName:"ul"},"ZeroSSL",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 ACME \u8d26\u53f7\u81ea\u52a8\u7533\u8bf7 - \u9700\u8981\u6ce8\u518c\u8d26\u53f7, \u5ba2\u6237\u7aef\u8981\u652f\u6301 EAB"),(0,l.kt)("li",{parentName:"ul"},"Maximum NIST P-384"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 certificate revocation"))),(0,l.kt)("li",{parentName:"ul"},"BuyPass",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ea\u5bf9 ACME \u8d26\u53f7\u63d0\u4f9b RSA \u8bc1\u4e66"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u81ea\u52a8 ACME account \u7533\u8bf7"),(0,l.kt)("li",{parentName:"ul"},"Maximum NIST P256 certs"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 certificate revocation"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u8bc1\u4e66 6 \u4e2a\u6708 - \u5bf9\u4e8e ACME \u81ea\u52a8\u5316\u6765\u8bf4\u5e76\u4e0d\u662f\u7279\u522b\u597d"))),(0,l.kt)("li",{parentName:"ul"},"sslcom",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u8d26\u53f7"),(0,l.kt)("li",{parentName:"ul"},"\u5355\u8bc1\u4e66 500 \u57df\u540d"),(0,l.kt)("li",{parentName:"ul"},"\u57df\u540d\u8bc1\u4e66\u4e0d\u9650"))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/letsencrypt/boulder"},"letsencrypt/boulder"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ACME CA"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/letsencrypt/pebble"},"letsencrypt/pebble"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"small RFC 8555 ACME test server"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://crt.sh/"},"crt.sh"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8bc1\u4e66\u8bb0\u5f55\u67e5\u8be2"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/hashicorp/vault/issues/8690"},"hashicorp/vault#8690"),"\nVault as an ACME-based CA"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/acmesh-official/acme.sh/wiki/Server"},"acmesh-official/acme.sh/wiki/Server"))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Provider"),(0,l.kt)("th",{parentName:"tr",align:null},"ACME server URL"),(0,l.kt)("th",{parentName:"tr",align:null},"Doc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"letsencrypt"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://acme-v02.api.letsencrypt.org/directory"},"https://acme-v02.api.letsencrypt.org/directory")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://letsencrypt.org/docs/rate-limits/"},"https://letsencrypt.org/docs/rate-limits/"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"letsencrypt_test"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://acme-staging-v02.api.letsencrypt.org/directory"},"https://acme-staging-v02.api.letsencrypt.org/directory")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"buypass"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://api.buypass.com/acme/directory"},"https://api.buypass.com/acme/directory")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"buypass_test"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://api.test4.buypass.no/acme/directory"},"https://api.test4.buypass.no/acme/directory")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zerossl"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://acme.zerossl.com/v2/DV90"},"https://acme.zerossl.com/v2/DV90")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://zerossl.com/documentation/acme/"},"https://zerossl.com/documentation/acme/"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sslcom"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://acme.ssl.com/sslcom-dv-rsa"},"https://acme.ssl.com/sslcom-dv-rsa"),", ",(0,l.kt)("a",{parentName:"td",href:"https://acme.ssl.com/sslcom-dv-ecc"},"https://acme.ssl.com/sslcom-dv-ecc")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"challenge"},"Challenge"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"HTTP-01",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"http://example.com/.well-known/acme-challenge/<challenge>")),(0,l.kt)("li",{parentName:"ul"},"\u8981\u6c42\u80fd\u88ab\u5916\u90e8\u8bbf\u95ee"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u6b21\u4e00\u4e2a\u57df\u540d"))),(0,l.kt)("li",{parentName:"ul"},"DNS-01",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TXT _acme-challenge.example.com <challenge>")),(0,l.kt)("li",{parentName:"ul"},"\u8981\u6c42\u80fd\u4fee\u6539 DNS"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u6cdb\u57df\u540d\u8bc1\u4e66")))),(0,l.kt)("h2",{id:"client"},"Client"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/acmesh-official/acme.sh"},"acmesh-official/acme.sh"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"GPL-3.0, Shell"))),(0,l.kt)("li",{parentName:"ul"},"Caddy Server"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/certbot/certbot"},"certbot/certbot"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Apache-2.0, Python")))))}u.isMDXComponent=!0}}]);