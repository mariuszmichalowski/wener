(window.webpackJsonp=window.webpackJsonp||[]).push([[406],{1129:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,b=d["".concat(a,".").concat(m)]||d[m]||p[m]||i;return n?o.a.createElement(b,l(l({ref:t},s),{},{components:n})):o.a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},480:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(8),i=(n(0),n(1129)),a={id:"nextcloud-faq",title:"Nextcloud FAQ"},l={unversionedId:"service/file/nextcloud-faq",id:"service/file/nextcloud-faq",isDocsHomePage:!1,title:"Nextcloud FAQ",description:"Auto provisioning not allowed and user hello does not exist",source:"@site/notes/service/file/nextcloud-faq.md",slug:"/service/file/nextcloud-faq",permalink:"/notes/service/file/nextcloud-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/file/nextcloud-faq.md",version:"current",sidebar:"docs",previous:{title:"Nextcloud \u5f00\u53d1",permalink:"/notes/service/file/nextcloud-dev"},next:{title:"Nextcloud \u7248\u672c",permalink:"/notes/service/file/nextcloud-version"}},c=[{value:"Auto provisioning not allowed and user hello does not exist",id:"auto-provisioning-not-allowed-and-user-hello-does-not-exist",children:[]},{value:"Found an Attribute element with duplicated Name",id:"found-an-attribute-element-with-duplicated-name",children:[]},{value:"Command &quot;maintenance:install&quot; is not defined.",id:"command-maintenanceinstall-is-not-defined",children:[]},{value:"cURL error 28: Operation timed out after XXXXXX milliseconds",id:"curl-error-28-operation-timed-out-after-xxxxxx-milliseconds",children:[]},{value:"Error when trying to connect (Host violates local access rules)",id:"error-when-trying-to-connect-host-violates-local-access-rules",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"auto-provisioning-not-allowed-and-user-hello-does-not-exist"},"Auto provisioning not allowed and user hello does not exist"),Object(i.b)("h2",{id:"found-an-attribute-element-with-duplicated-name"},"Found an Attribute element with duplicated Name"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Keycloak"),Object(i.b)("li",{parentName:"ul"},"(Realm) -> Client Scopes -> role_list (saml) -> Mappers tab -> role list -> 'Single Role Attribute'.")),Object(i.b)("h2",{id:"command-maintenanceinstall-is-not-defined"},'Command "maintenance:install" is not defined.'),Object(i.b)("p",null,"\u5e94\u7528\u88ab\u91cd\u65b0\u5b89\u88c5\u4e86\uff0c\u56e0\u4e3a\u6ca1\u6709\u68c0\u6d4b\u5230 ",Object(i.b)("inlineCode",{parentName:"p"},"/var/www/html/version.php"),"\uff0c\u9700\u8981\u6ce8\u610f\u6302\u8f7d\u8def\u5f84"),Object(i.b)("h2",{id:"curl-error-28-operation-timed-out-after-xxxxxx-milliseconds"},"cURL error 28: Operation timed out after XXXXXX milliseconds"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/nextcloud/server/issues/18103"},"#18103"))),Object(i.b)("h2",{id:"error-when-trying-to-connect-host-violates-local-access-rules"},"Error when trying to connect (Host violates local access rules)"),Object(i.b)("p",null,"\u914d\u7f6e"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"'allow_local_remote_servers'=>true,\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"sudo -u www-data ./occ config:system:set allow_local_remote_servers --value=true --type=boolean\n")))}u.isMDXComponent=!0}}]);