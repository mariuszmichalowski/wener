"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[15380],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},75006:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i=["components"],l={id:"gradle",title:"Gradle"},p=void 0,u={unversionedId:"java/gradle",id:"java/gradle",isDocsHomePage:!1,title:"Gradle",description:"Tips",source:"@site/notes/java/gradle.md",sourceDirName:"java",slug:"/java/gradle",permalink:"/notes/java/gradle",editUrl:"https://github.com/wenerme/wener/edit/master/notes/java/gradle.md",version:"current",frontMatter:{id:"gradle",title:"Gradle"},sidebar:"docs",previous:{title:"Java",permalink:"/notes/java/java"},next:{title:"\u70ed\u95e8\u95ee\u9898",permalink:"/notes/java/hot-qa"}},s=[{value:"Tips",id:"tips",children:[]}],c={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"tips"},"Tips"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.gradle.org/current/userguide/userguide.html"},"Userguide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://guides.gradle.org/building-java-9-modules/"},"Building Java 9 Modules")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://sagioto.github.io/maven2gradle/"},"maven 2 gradle"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u8f6c\u6362 dependency")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# https://docs.gradle.org/current/userguide/build_init_plugin.html\n# \u751f\u6210\u57fa\u672c\u914d\u7f6e\n# --type pom,java-application,java-library,scala-library,groovy-library,basic\ngradle init\n\n# \u5237\u65b0\u4f9d\u8d56\ngradlew build --refresh-dependencies\n# \u4ee3\u7406\ngradlew -Dhttp.proxyHost=127.0.0.1 -Dhttp.proxyPort=1234 -Dhttps.proxyHost=127.0.0.1 -Dhttps.proxyPort=1234 build\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"gradle.properties")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"# \u4ee3\u7406\u914d\u7f6e\nsystemProp.http.proxyHost=127.0.0.1\nsystemProp.http.proxyPort=1234\nsystemProp.https.proxyHost=127.0.0.1\nsystemProp.https.proxyPort=1234\n\n# \u5982\u679c\u9700\u8981\u6388\u6743\n# http.proxyUser=usernameProxy\n# http.proxyPassword=yourPassoword\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},'// https://docs.gradle.org/current/userguide/declaring_repositories.html\nmavenCentral()\nmaven {\n    url "http://maven.aliyun.com/nexus/content/groups/public"\n}\n')))}d.isMDXComponent=!0}}]);