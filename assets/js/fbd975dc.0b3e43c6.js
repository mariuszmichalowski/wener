"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[9327],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,s=d["".concat(c,".").concat(m)]||d[m]||k[m]||o;return n?r.createElement(s,i(i({ref:t},p),{},{components:n})):r.createElement(s,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20400:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Keycloak Admin"},c=void 0,u={unversionedId:"service/auth/keycloak/keycloak-admin",id:"service/auth/keycloak/keycloak-admin",isDocsHomePage:!1,title:"Keycloak Admin",description:"Identity Provider",source:"@site/notes/service/auth/keycloak/keycloak-admin.md",sourceDirName:"service/auth/keycloak",slug:"/service/auth/keycloak/keycloak-admin",permalink:"/notes/service/auth/keycloak/keycloak-admin",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/auth/keycloak/keycloak-admin.md",tags:[],version:"current",frontMatter:{title:"Keycloak Admin"},sidebar:"docs",previous:{title:"Keycloak",permalink:"/notes/service/auth/keycloak/keycloak"},next:{title:"Keycloak AuthN",permalink:"/notes/service/auth/keycloak/keycloak-authn"}},p=[{value:"Identity Provider",id:"identity-provider",children:[]}],k={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"identity-provider"},"Identity Provider"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"oidc v1 \u4f7f\u7528 Authorization Code Flow"),(0,o.kt)("li",{parentName:"ul"},"\u5bfc\u5165\u914d\u7f6e ",(0,o.kt)("inlineCode",{parentName:"li"},"<root>/auth/realms/{realm-name}/.well-known/openid-configuration")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"?kc_idp_hint=github")," \u5ba2\u6237\u7aef hint \u4f7f\u7528\u7684 provider"),(0,o.kt)("li",{parentName:"ul"},"\u4fdd\u5b58 Token \u540e\u83b7\u53d6\u65b9\u5f0f ",(0,o.kt)("inlineCode",{parentName:"li"},"/auth/realms/{realm}/broker/{provider_alias}/token"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"keycloak.createLoginUrl({\n  idpHint: 'github',\n});\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"conf"),(0,o.kt)("th",{parentName:"tr",align:null},"kc ",(0,o.kt)("inlineCode",{parentName:"th"},"<root>/auth/realms/<realm>")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Authorization URL"),(0,o.kt)("td",{parentName:"tr",align:null},"/protocol/openid-connect/auth")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Token URL"),(0,o.kt)("td",{parentName:"tr",align:null},"/protocol/openid-connect/token")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Logout URL"),(0,o.kt)("td",{parentName:"tr",align:null},"/protocol/openid-connect/logout")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"User Info URL"),(0,o.kt)("td",{parentName:"tr",align:null},"/protocol/openid-connect/userinfo")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Issuer"),(0,o.kt)("td",{parentName:"tr",align:null},".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"JWKS URL"),(0,o.kt)("td",{parentName:"tr",align:null},"/protocol/openid-connect/certs")))))}d.isMDXComponent=!0}}]);