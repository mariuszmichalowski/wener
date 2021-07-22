(window.webpackJsonp=window.webpackJsonp||[]).push([[911],{1152:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(n),m=r,d=u["".concat(o,".").concat(m)]||u[m]||s[m]||i;return n?a.a.createElement(d,c(c({ref:t},p),{},{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},984:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(8),i=(n(0),n(1152)),o={id:"nginx-faq"},c={unversionedId:"devops/web/nginx-faq",id:"devops/web/nginx-faq",isDocsHomePage:!1,title:"nginx-faq",description:"Nginx FAQ",source:"@site/notes/devops/web/nginx-faq.md",slug:"/devops/web/nginx-faq",permalink:"/notes/devops/web/nginx-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/web/nginx-faq.md",version:"current",sidebar:"docs",previous:{title:"Nginx \u5e38\u7528\u914d\u7f6e",permalink:"/notes/devops/web/nginx-cookbook"},next:{title:"Nginx",permalink:"/notes/devops/web/nginx"}},l=[{value:"Tips",id:"tips",children:[]},{value:"\u91cd\u5b9a\u5411\u6ca1\u6709\u7aef\u53e3",id:"\u91cd\u5b9a\u5411\u6ca1\u6709\u7aef\u53e3",children:[]},{value:"$request_uri vs $uri",id:"request_uri-vs-uri",children:[]},{value:"$host vs $http_host",id:"host-vs-http_host",children:[]}],p={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"nginx-faq"},"Nginx FAQ"),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("h2",{id:"\u91cd\u5b9a\u5411\u6ca1\u6709\u7aef\u53e3"},"\u91cd\u5b9a\u5411\u6ca1\u6709\u7aef\u53e3"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-conf"},"# \u4f7f\u7528 http_host\nproxy_set_header Host $http_host;\n# \u6216\u8005\nproxy_set_header Host $host:$server_port;\n")),Object(i.b)("h2",{id:"request_uri-vs-uri"},"$request_uri vs $uri"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"$request_uri")," - \u4fdd\u7559\u67e5\u8be2\u53c2\u6570\uff0c",Object(i.b)("inlineCode",{parentName:"li"},"?")," \u90e8\u5206"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"$uri")," - \u53ea\u6709\u8def\u5f84")),Object(i.b)("h2",{id:"host-vs-http_host"},"$host vs $http_host"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"$host",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6a21\u5757\u5b9a\u4e49\u53d8\u91cf"),Object(i.b)("li",{parentName:"ul"},"\u53ef\u80fd\u662f HTTP Host \u5934",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6b64\u65f6\u4e0e ",Object(i.b)("inlineCode",{parentName:"li"},"$http_host")," \u7c7b\u4f3c"),Object(i.b)("li",{parentName:"ul"},"\u5c0f\u5199\uff0c\u6ca1\u6709\u7aef\u53e3"))),Object(i.b)("li",{parentName:"ul"},"\u53ef\u80fd\u662f URL \u4e2d\u7684 HOST"),Object(i.b)("li",{parentName:"ul"},"\u53ef\u80fd\u662f \u7b2c\u4e00\u4e2a server_name"),Object(i.b)("li",{parentName:"ul"},"\u5982\u679c server_name \u5305\u542b\u6b63\u5219\uff0c\u90a3\u4e48 $host \u4e5f\u4f1a - \u5bfc\u81f4\u51fa\u73b0\u96be\u770b\u7684\u8def\u5f84"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"$server_name")," \u603b\u662f\u7b2c\u4e00\u4e2a ",Object(i.b)("inlineCode",{parentName:"li"},"server_name")),Object(i.b)("li",{parentName:"ul"},"\u53ef\u80fd\u4e0d\u5305\u542b port"))),Object(i.b)("li",{parentName:"ul"},"$http_host",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u901a\u8fc7 ",Object(i.b)("a",{parentName:"li",href:"http://nginx.org/en/docs/http/ngx_http_core_module.html#variables"},"$http_HEADER")," \u5b9a\u4e49"),Object(i.b)("li",{parentName:"ul"},"\u4e0e HTTP \u5934\u4e2d\u4fe1\u606f\u4fdd\u6301\u4e00\u81f4"),Object(i.b)("li",{parentName:"ul"},"\u5305\u542b port")))))}b.isMDXComponent=!0}}]);