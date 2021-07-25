(window.webpackJsonp=window.webpackJsonp||[]).push([[734],{1169:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},o=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),o=p(a),s=n,d=o["".concat(b,".").concat(s)]||o[s]||m[s]||l;return a?r.a.createElement(d,u(u({ref:t},c),{},{components:a})):r.a.createElement(d,u({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=s;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,b[1]=u;for(var c=2;c<l;c++)b[c]=a[c];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},807:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return u})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(8),l=(a(0),a(1169)),b={id:"quarkus",title:"Quarkus"},u={unversionedId:"java/library/quarkus",id:"java/library/quarkus",isDocsHomePage:!1,title:"Quarkus",description:"Tips",source:"@site/notes/java/library/quarkus.md",slug:"/java/library/quarkus",permalink:"/notes/java/library/quarkus",editUrl:"https://github.com/wenerme/wener/edit/master/notes/java/library/quarkus.md",version:"current",sidebar:"docs",previous:{title:"\u751f\u4ea7\u529b",permalink:"/notes/java/library/productive"},next:{title:"AlpineJS",permalink:"/notes/web/framework/alpinejs"}},i=[{value:"Tips",id:"tips",children:[]},{value:"quarkus-maven-plugin",id:"quarkus-maven-plugin",children:[]}],c={toc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://quarkus.io/"},"Quarkus")," - Kubernetes Native Java stack tailored for GraalVM & OpenJDK HotSpot"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://code.quarkus.io/"},"code.quarkus.io")," \u9879\u76ee\u751f\u6210\uff0c\u7c7b\u4f3c\u4e8e spring \u7684 start"),Object(l.b)("li",{parentName:"ul"},"RedHat \u56e2\u961f - \u4f9d\u8d56\u7684\u4e3b\u8981\u662f RH \u76f8\u5173\u7684\u4e2d\u95f4\u4ef6"),Object(l.b)("li",{parentName:"ul"},"\u4e3b\u8981\u4f18\u52bf",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5feb\u901f\u542f\u52a8"),Object(l.b)("li",{parentName:"ul"},"\u5185\u5b58\u5360\u7528\u5c11"),Object(l.b)("li",{parentName:"ul"},"quarkus-maven-plugin \u5bf9\u5f00\u53d1\u53cb\u597d"),Object(l.b)("li",{parentName:"ul"},"cdi+resteasy = 20mb \u4e8c\u8fdb\u5236"))),Object(l.b)("li",{parentName:"ul"},"\u4e3b\u8981\u4f9d\u8d56",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"quarkus arc - CDI",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u975e\u53cd\u5c04 - \u56e0\u4e3a Graalvm \u4e0d\u652f\u6301\u5927\u90e8\u5206\u53cd\u5c04"),Object(l.b)("li",{parentName:"ul"},"\u5728\u90e8\u7f72\u65f6\u751f\u6210\u5143\u6570\u636e\u7c7b",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"META-INF/jandex.idx"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"*.zig")," - Jvm IR"),Object(l.b)("li",{parentName:"ul"},"quarkus.index-dependency \u914d\u7f6e\u9879"))))),Object(l.b)("li",{parentName:"ul"},"Substrate VM"),Object(l.b)("li",{parentName:"ul"},"undertow - \u9ed8\u8ba4 servlet \u5bb9\u5668"),Object(l.b)("li",{parentName:"ul"},"resteasy - jaxrs \u5b9e\u73b0"),Object(l.b)("li",{parentName:"ul"},"quarkus-hibernate-orm-panache - \u7c7b\u4f3c\u4e8e ActiveRecord \u7684\u6269\u5c55"),Object(l.b)("li",{parentName:"ul"},"MicroProfile - \u5fae\u670d\u52a1\u76f8\u5173\u80fd\u529b")))),Object(l.b)("h2",{id:"quarkus-maven-plugin"},"quarkus-maven-plugin"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u547d\u4ee4"),Object(l.b)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"mvn quarkus:add-extension"),Object(l.b)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u6269\u5c55")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"mvn quarkus:add-extensions"),Object(l.b)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u6269\u5c55")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"mvn quarkus:analyze-call-tree"),Object(l.b)("td",{parentName:"tr",align:null},"\u5206\u6790\u8c03\u7528\u6811")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"mvn quarkus:build"),Object(l.b)("td",{parentName:"tr",align:null},"\u6784\u5efa")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"mvn quarkus:create"),Object(l.b)("td",{parentName:"tr",align:null},"\u521b\u5efa\u9879\u76ee\uff0c\u751f\u6210\u6587\u4ef6")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"mvn quarkus:create-extension"),Object(l.b)("td",{parentName:"tr",align:null},"\u521b\u5efa\u6269\u5c55")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"mvn quarkus:dev"),Object(l.b)("td",{parentName:"tr",align:null},"\u542f\u52a8\u5f00\u53d1\u670d\u52a1")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"mvn quarkus:generate-config"),Object(l.b)("td",{parentName:"tr",align:null},"\u751f\u6210\u793a\u4f8b\u914d\u7f6e")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"mvn quarkus:help"),Object(l.b)("td",{parentName:"tr",align:null},"\u5e2e\u52a9")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"mvn quarkus:list-extensions"),Object(l.b)("td",{parentName:"tr",align:null},"\u67e5\u770b\u6269\u5c55")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"mvn quarkus:native-image"),Object(l.b)("td",{parentName:"tr",align:null},"\u6784\u5efa\u672c\u5730\u955c\u50cf")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"mvn quarkus:remote-dev"),Object(l.b)("td",{parentName:"tr",align:null},"\u8fdc\u7a0b\u5f00\u53d1")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'# \u542f\u52a8\u5f00\u53d1\u670d\u52a1\nmvn compile quarkus:dev\n\n# \u6784\u5efa native \u955c\u50cf\nmvn package -Pnative\n# \u5982\u679c\u6ca1\u6709\u8bbe\u7f6e GRAALVM_HOME \u53ef\u4ee5\u624b\u52a8\u8bbe\u7f6e\nGRAALVM_HOME=~/jdk/graalvm/Contents/Home/ mvn package -Pnative\n# \u5982\u679c\u5931\u8d25\uff0c\u5c1d\u8bd5\u5b89\u88c5 native-image\n\n\n# \u521b\u5efa\u9879\u76ee\nmvn io.quarkus:quarkus-maven-plugin:0.22.0:create \\\n    -DprojectGroupId=org.acme \\\n    -DprojectArtifactId=application-lifecycle-events \\\n    -DclassName="org.acme.events.GreetingResource" \\\n    -Dpath="/hello"\n')))}p.isMDXComponent=!0}}]);