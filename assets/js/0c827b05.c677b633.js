"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[79654],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,v=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return t?n.createElement(v,i(i({ref:r},p),{},{components:t})):n.createElement(v,i({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},54627:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],c={title:"Verdaccio"},l="verdaccio",s={unversionedId:"service/repository/verdaccio",id:"service/repository/verdaccio",isDocsHomePage:!1,title:"Verdaccio",description:"- \u63d2\u4ef6",source:"@site/notes/service/repository/verdaccio.md",sourceDirName:"service/repository",slug:"/service/repository/verdaccio",permalink:"/notes/service/repository/verdaccio",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/repository/verdaccio.md",tags:[],version:"current",frontMatter:{title:"Verdaccio"},sidebar:"docs",previous:{title:"Nexus",permalink:"/notes/service/repository/nexus"},next:{title:"Forge",permalink:"/notes/service/forge/forge"}},p=[{value:"docker",id:"docker",children:[]},{value:"minio",id:"minio",children:[]}],u={toc:p};function m(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"verdaccio"},"verdaccio"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u63d2\u4ef6",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/verdaccio/monorepo/tree/9.x/plugins"},"https://github.com/verdaccio/monorepo/tree/9.x/plugins")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Alexandre-io/verdaccio-ldap"},"Alexandre-io/verdaccio-ldap")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/verdaccio-aws-s3-storage"},"verdaccio-aws-s3-storage"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 minio"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/verdaccio/verdaccio/blob/master/docker-examples/v4/amazon-s3-docker-example/s3Plugin/Dockerfile"},"https://github.com/verdaccio/verdaccio/blob/master/docker-examples/v4/amazon-s3-docker-example/s3Plugin/Dockerfile")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/verdaccio-minio"},"verdaccio-minio"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e Minio SDK"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/barolab/verdaccio-minio/blob/master/Dockerfile"},"https://github.com/barolab/verdaccio-minio/blob/master/Dockerfile")))))),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7aef\u53e3 4873"),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844904193501691917"},"Verdaccio \u79c1\u4ed3\u642d\u5efa"))))),(0,a.kt)("h2",{id:"docker"},"docker"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"/verdaccio/storage/htpasswd"),(0,a.kt)("li",{parentName:"ul"},"/verdaccio/conf/config.yaml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"htpasswd -bc htpasswd admin admin\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"auth:\n  htpasswd:\n    file: ./htpasswd\n\nuplinks:\n  npmjs:\n    url: https://registry.npmjs.org/\n")),(0,a.kt)("h2",{id:"minio"},"minio"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"barolab/verdaccio")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Dockerfile"},"FROM verdaccio/verdaccio:4\nUSER root\nENV NODE_ENV=production\nRUN yarn global add verdaccio-minio && \\\n  ln -s /usr/local/share/.config/yarn/global/node_modules/verdaccio-minio /verdaccio/plugins/verdaccio-minio  && \\\n  chown -R 10001 /usr/local/share/.config/yarn/global/node_modules/verdaccio-minio && \\\n  chown -R 10001 /verdaccio/plugins\n\nUSER verdaccio\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"/verdaccio/conf/config.yaml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# This points to the plugin folder above\nplugins: /verdaccio/plugins\n# This is mandatory, otherwise verdaccio won't boot\nstorage: /verdaccio/storage/data\n\nstore:\n  minio:\n    port: 9000\n    endPoint: minio.minio.svc.cluster.local\n    accessKey: this-is-not-so-secret\n    secretKey: this-is-not-so-secret\n    useSSL: false\n    region: eu-west-1\n    bucket: 'npm'\n    retries: 3\n    delay: 50\n")))}m.isMDXComponent=!0}}]);