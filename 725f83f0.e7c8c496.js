(window.webpackJsonp=window.webpackJsonp||[]).push([[481],{1152:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=n.a.createContext({}),p=function(e){var t=n.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=p(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),o=p(a),m=r,j=o["".concat(l,".").concat(m)]||o[m]||O[m]||b;return a?n.a.createElement(j,i(i({ref:t},u),{},{components:a})):n.a.createElement(j,i({ref:t},u))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,l=new Array(b);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<b;u++)l[u]=a[u];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},555:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(8),b=(a(0),a(1152)),l={id:"auth-faq",title:"\u8ba4\u8bc1\u6388\u6743\u5e38\u89c1\u95ee\u9898"},i={unversionedId:"service/auth/auth-faq",id:"service/auth/auth-faq",isDocsHomePage:!1,title:"\u8ba4\u8bc1\u6388\u6743\u5e38\u89c1\u95ee\u9898",description:"|                ver | date       |",source:"@site/notes/service/auth/auth-faq.md",slug:"/service/auth/auth-faq",permalink:"/notes/service/auth/auth-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/auth/auth-faq.md",version:"current",sidebar:"docs",previous:{title:"Auth Awesome",permalink:"/notes/service/auth/auth-awesome"},next:{title:"Casbin",permalink:"/notes/service/auth/casbin"}},c=[{value:"OIDC vs OAuth",id:"oidc-vs-oauth",children:[]},{value:"Authentication vs Authorization",id:"authentication-vs-authorization",children:[]},{value:"Proxy Auth vs Forward Auth",id:"proxy-auth-vs-forward-auth",children:[]},{value:"louketo-proxy vs oauth2-proxy",id:"louketo-proxy-vs-oauth2-proxy",children:[]}],u={toc:c};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"right"},"ver"),Object(b.b)("th",{parentName:"tr",align:null},"date"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"right"},"Kerberos 4.0"),Object(b.b)("td",{parentName:"tr",align:null},"1980s")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"right"},"LDAPv3"),Object(b.b)("td",{parentName:"tr",align:null},"1997")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"right"},"Kerberos 5.0"),Object(b.b)("td",{parentName:"tr",align:null},"1993")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"right"},"SAML 1.0"),Object(b.b)("td",{parentName:"tr",align:null},"2002")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"right"},"SAML 1.1"),Object(b.b)("td",{parentName:"tr",align:null},"2003")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"right"},"SAML 2.0"),Object(b.b)("td",{parentName:"tr",align:null},"2005")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"right"},"OpenID 1.0"),Object(b.b)("td",{parentName:"tr",align:null},"2006")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"right"},"OpenID 2.0"),Object(b.b)("td",{parentName:"tr",align:null},"2007")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"right"},"OAuth 1.0"),Object(b.b)("td",{parentName:"tr",align:null},"2010")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"right"},"OAuth 2.0"),Object(b.b)("td",{parentName:"tr",align:null},"2012")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"right"},"OpenID Connect 1.0"),Object(b.b)("td",{parentName:"tr",align:null},"2014")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"right"},"WebAuthn Level 1"),Object(b.b)("td",{parentName:"tr",align:null},"2019-03-04")))),Object(b.b)("h2",{id:"oidc-vs-oauth"},"OIDC vs OAuth"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"OIDC - OpenID Connect",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u6807\u51c6\u5316\u4e86\u4f7f\u7528 OAuth 2.0 \u8ba4\u8bc1\u7684\u903b\u8f91"),Object(b.b)("li",{parentName:"ul"},"\u6709\u88ab \u6388\u6743/\u7528\u6237/subject \u5bf9\u8c61"),Object(b.b)("li",{parentName:"ul"},"\u6709 subject \u7684\u57fa\u7840\u5c5e\u6027",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"profile, emial, \u552f\u4e00\u6807\u8bc6\u7b26, group"))),Object(b.b)("li",{parentName:"ul"},"\u6709 subject \u6388\u6743\u4e0a\u4e0b\u6587",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"issuer, \u65f6\u95f4"))))),Object(b.b)("li",{parentName:"ul"},"OAuth 2.0",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u4e0d\u662f\u8ba4\u8bc1\u534f\u8bae"),Object(b.b)("li",{parentName:"ul"},"\u4e3b\u8981\u5728\u4e8e \u4ee3\u7406/\u59d4\u6258/delegated \u8bbf\u95ee\u8d44\u6e90"),Object(b.b)("li",{parentName:"ul"},"\u6ca1\u6709\u88ab\u6388\u6743\u5bf9\u8c61/\u7528\u6237 \u6982\u5ff5"),Object(b.b)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u5ba2\u6237\u7aef\u573a\u666f"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://oauth.net/articles/authentication/"},"User Authentication with OAuth 2.0"))),Object(b.b)("h2",{id:"authentication-vs-authorization"},"Authentication vs Authorization"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Authentication",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5f53\u524d\u7528\u6237\u662f\u4e0d\u662f\u5b83\u6240\u4ee3\u8868\u7684\u7528\u6237",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u4f8b\u5982 \u4e00\u4e2a\u58f0\u79f0 admin \u7684 token \u662f\u4e0d\u662f\u4ee3\u8868\u7684\u5b9e\u9645\u7684 admin"))))),Object(b.b)("li",{parentName:"ul"},"Authorization",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5df2\u7ecf Authentication"),Object(b.b)("li",{parentName:"ul"},"\u5224\u65ad\u662f\u5426\u6709\u6743\u9650")))),Object(b.b)("h2",{id:"proxy-auth-vs-forward-auth"},"Proxy Auth vs Forward Auth"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Proxy - \u4ee3\u7406\u6388\u6743",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u62e6\u622a\u6240\u6709\u8bf7\u6c42"),Object(b.b)("li",{parentName:"ul"},"\u8bf7\u6c42\u8f6c\u53d1\u7ed9\u4e0a\u6e38"),Object(b.b)("li",{parentName:"ul"},"\u4e0d\u9700\u8981\u989d\u5916\u53cd\u5411\u4ee3\u7406\u914d\u7f6e"),Object(b.b)("li",{parentName:"ul"},"\u4f18\u52bf",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5355\u6b21\u8bf7\u6c42\u5b8c\u6210\u9a8c\u8bc1"))),Object(b.b)("li",{parentName:"ul"},"\u52a3\u52bf",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5b9e\u73b0\u66f4\u590d\u6742",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u9664\u4e86\u9700\u8981\u5b9e\u73b0 auth \u80fd\u529b\u8fd8\u9700\u8981\u5b9e\u73b0 proxy \u80fd\u529b"))),Object(b.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u4e0d\u4f9d\u8d56\u989d\u5916 Nginx/\u53cd\u5411\u4ee3\u7406 - \u4f46\u4e00\u822c\u90fd\u4f1a\u6709",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u6240\u4ee5\u8fd8\u662f\u7b49\u540c\u4e8e\u591a\u4e00\u6b21\u8bf7\u6c42"))),Object(b.b)("li",{parentName:"ul"},"\u6bcf\u4e2a\u4e0a\u6e38\u90e8\u7f72\u4e00\u4e2a"))))),Object(b.b)("li",{parentName:"ul"},"Forward - \u8f6c\u53d1\u6388\u6743",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u7f51\u5173\u8bf7\u6c42\u65f6\u53d1\u8d77\u4e00\u4e2a\u989d\u5916\u7684\u8ba4\u8bc1\u8bf7\u6c42"),Object(b.b)("li",{parentName:"ul"},"\u9700\u8981\u914d\u7f6e\u989d\u5916\u7684\u53cd\u5411\u4ee3\u7406 - \u4f46\u4e00\u822c\u4e00\u4e2a\u57df\u540d\u4e00\u6b21\u914d\u7f6e"),Object(b.b)("li",{parentName:"ul"},"\u4f18\u52bf",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5b9e\u73b0\u7b80\u5355"),Object(b.b)("li",{parentName:"ul"},"\u90e8\u7f72\u4e00\u4e2a\u7ed9\u591a\u4e2a\u4e0a\u6e38\u4f7f\u7528"))),Object(b.b)("li",{parentName:"ul"},"\u52a3\u52bf",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u591a\u4e00\u6b21\u8bf7\u6c42"),Object(b.b)("li",{parentName:"ul"},"\u65e0\u6cd5\u4f20\u9012\u989d\u5916\u4fe1\u606f\u5230\u4e0a\u6e38",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u4f8b\u5982 \u65e0\u6cd5\u4f20\u9012 JWT \u5934")))))))),Object(b.b)("h2",{id:"louketo-proxy-vs-oauth2-proxy"},"louketo-proxy vs oauth2-proxy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"louketo",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u4ee3\u7406\u6388\u6743\u4e3a\u4e3b"),Object(b.b)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e\u4e00\u4e2a Nginx \u7f51\u5173\uff0c\u6d41\u91cf\u4ece\u4e2d\u8fc7"),Object(b.b)("li",{parentName:"ul"},"\u4ee5\u96c6\u6210 Keycloak \u4e3a\u4e3b"),Object(b.b)("li",{parentName:"ul"},"\u6bcf\u4e2a\u4e0a\u6e38\u90fd\u9700\u8981\u90e8\u7f72\u4e00\u4e2a"),Object(b.b)("li",{parentName:"ul"},"\u8131\u80ce\u4e8e Keycloak Gateway - \u56e0\u6b64\u80fd\u66f4\u597d\u4e0e KC \u96c6\u6210",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u7b80\u6613\u914d\u7f6e"),Object(b.b)("li",{parentName:"ul"},"\u89d2\u8272"),Object(b.b)("li",{parentName:"ul"},"\u6743\u9650"),Object(b.b)("li",{parentName:"ul"},"\u8def\u5f84\u8d44\u6e90\u63a7\u5236"),Object(b.b)("li",{parentName:"ul"},"\u900f\u4f20 logout \u5230 KC"))))),Object(b.b)("li",{parentName:"ul"},"oauth2",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u8f6c\u53d1\u6388\u6743\u4e3a\u4e3b"),Object(b.b)("li",{parentName:"ul"},"\u652f\u6301\u4ee3\u7406\u6a21\u5f0f"),Object(b.b)("li",{parentName:"ul"},"\u652f\u6301\u66f4\u591a\u4e09\u65b9 Oauth2 \u96c6\u6210"),Object(b.b)("li",{parentName:"ul"},"Nginx \u8bf7\u6c42\u4e4b\u524d\u9a8c\u8bc1"),Object(b.b)("li",{parentName:"ul"},"\u7b80\u5355\u7684\u9a8c\u8bc1"),Object(b.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u53ea\u90e8\u7f72\u4e00\u4e2a\u7ed9\u591a\u4e2a\u4e0a\u6e38\u4f7f\u7528 - \u8f6c\u53d1\u6a21\u5f0f"),Object(b.b)("li",{parentName:"ul"},"Keycloak \u96c6\u6210",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u4ec5\u652f\u6301 ",Object(b.b)("inlineCode",{parentName:"li"},"--keycloak-group")),Object(b.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 cookie-refresh"),Object(b.b)("li",{parentName:"ul"},"\u65e0\u6cd5\u8bbf\u95ee\u539f\u59cb jwt \u4fe1\u606f"),Object(b.b)("li",{parentName:"ul"},"\u65e0\u6cd5\u6b63\u786e logout")))))))}p.isMDXComponent=!0}}]);