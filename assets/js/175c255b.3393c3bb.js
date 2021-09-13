"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[9916],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52638:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={id:"matomo",title:"Matomo"},p="matomo",s={unversionedId:"service/analytics/matomo",id:"service/analytics/matomo",isDocsHomePage:!1,title:"Matomo",description:"- nginx piwik recipes",source:"@site/notes/service/analytics/matomo.md",sourceDirName:"service/analytics",slug:"/service/analytics/matomo",permalink:"/notes/service/analytics/matomo",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/analytics/matomo.md",tags:[],version:"current",frontMatter:{id:"matomo",title:"Matomo"},sidebar:"docs",previous:{title:"Analytics Awesome",permalink:"/notes/service/analytics/analytics-awesome"},next:{title:"AppWrite",permalink:"/notes/service/baas/appwrite"}},c=[{value:"\u6d3b\u52a8\u652f\u6301",id:"\u6d3b\u52a8\u652f\u6301",children:[]},{value:"FAQ",id:"faq",children:[{value:"\u5173\u95ed\u7f51\u7edc\u8bbf\u95ee",id:"\u5173\u95ed\u7f51\u7edc\u8bbf\u95ee",children:[]}]},{value:"\u5982\u4f55\u68c0\u6d4b\u552f\u4e00\u7528\u6237",id:"\u5982\u4f55\u68c0\u6d4b\u552f\u4e00\u7528\u6237",children:[]}],u={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"matomo"},"matomo"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.nginx.com/resources/wiki/start/topics/recipes/piwik/"},"nginx piwik recipes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/piwik/piwik/issues/3318"},"\u81ea\u5b9a\u4e49 logo")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://piwik.org/faq/troubleshooting/#faq_121"},"\u901a\u8fc7\u4ee3\u7406\u8fdb\u884c\u5916\u90e8\u8bbf\u95ee"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u63d2\u4ef6"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/piwik/piwik-log-analytics"},"log-analytics"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://piwik.org/docs/log-analytics-tool-how-to/"},"how-to"))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it \\\n  --name matomo matomo\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"; \u5916\u90e8\u7f51\u7edc\u4ee3\u7406\n[proxy]\nhost = proxy      ; Proxy host: the host name of your proxy server (mandatory)\nport =      ; Proxy port: the port that the proxy server listens to. There is no standard default, but 80, 1080, 3128, and 8080 are popular\nusername =      ; Proxy username: optional; if specified, password is mandatory\npassword =      ; Proxy password: optional; if specified, username is mandatory\n")),(0,o.kt)("h2",{id:"\u6d3b\u52a8\u652f\u6301"},"\u6d3b\u52a8\u652f\u6301"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Piwik \u652f\u6301 GA \u7684 utm_campaign, utm_medium, utm_source, utm_term ",(0,o.kt)("a",{parentName:"li",href:"http://piwik.org/faq/general/faq_119/#faq_119"},"FAQ 119"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-nginx"},'# vhost log format\nlog_format vhosts \'$host $remote_addr - $remote_user [$time_local] "$request" $status $body_bytes_sent "$http_referer" "$http_user_agent"\';\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"piwik/config/config.ini.php")),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"\u5173\u95ed\u7f51\u7edc\u8bbf\u95ee"},"\u5173\u95ed\u7f51\u7edc\u8bbf\u95ee"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://piwik.org/faq/troubleshooting/faq_16646/"},"How do I configure Piwik on a server without Internet?")),(0,o.kt)("li",{parentName:"ul"},"\u7981\u7528\u6389 Marketplace \u63d2\u4ef6\u5373\u53ef")),(0,o.kt)("h2",{id:"\u5982\u4f55\u68c0\u6d4b\u552f\u4e00\u7528\u6237"},"\u5982\u4f55\u68c0\u6d4b\u552f\u4e00\u7528\u6237"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://matomo.org/faq/general/faq_21418/"},"https://matomo.org/faq/general/faq_21418/")),(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u8de8\u7ad9\u7528\u6237\u72ec\u7acb\u8ddf\u8e2a\uff0c\u53ef\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"enable_fingerprinting_across_websites")," \u5173\u95ed")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"[General]\n# \u4f7f\u7528 https\nassume_secure_protocol=1\n")))}m.isMDXComponent=!0}}]);