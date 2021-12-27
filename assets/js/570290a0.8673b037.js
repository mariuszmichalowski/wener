"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[78877],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(t),m=a,d=f["".concat(p,".").concat(m)]||f[m]||l[m]||o;return t?n.createElement(d,i(i({ref:r},u),{},{components:t})):n.createElement(d,i({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},89875:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],c={title:"AppWrite"},p=void 0,s={unversionedId:"service/baas/appwrite",id:"service/baas/appwrite",title:"AppWrite",description:"- docker-compose.yml & .env",source:"@site/notes/service/baas/appwrite.md",sourceDirName:"service/baas",slug:"/service/baas/appwrite",permalink:"/notes/service/baas/appwrite",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/baas/appwrite.md",tags:[],version:"current",frontMatter:{title:"AppWrite"},sidebar:"docs",previous:{title:"ISO/IEC 11179",permalink:"/notes/service/data/std/iso-11179"},next:{title:"BaaS Awesome",permalink:"/notes/service/baas/baas-awesome"}},u=[],l={toc:u};function f(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gist.github.com/eldadfux/977869ff6bdd7312adfd4e629ee15cc5"},"docker-compose.yml & .env "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose up -d --remove-orphans")),(0,o.kt)("li",{parentName:"ul"},"mariadb, redis, traefik, influxdb, telegraf"),(0,o.kt)("li",{parentName:"ul"},"appwrite \u5165\u53e3 worker-usage, worker-audits, worker-webhooks, worker-tasks, worker-deletes, worker-certificates, worker-functions, worker-mails, appwrite-maintenance, appwrite-schedule")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'docker run -it --rm \\\n  --volume /var/run/docker.sock:/var/run/docker.sock \\\n  --volume "$(pwd)"/appwrite:/usr/src/code/appwrite:rw \\\n  --entrypoint="install" \\\n  appwrite/appwrite:0.8.0\n')))}f.isMDXComponent=!0}}]);