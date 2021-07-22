(window.webpackJsonp=window.webpackJsonp||[]).push([[792],{1152:function(e,r,n){"use strict";n.d(r,"a",(function(){return u})),n.d(r,"b",(function(){return g}));var t=n(0),i=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),l=function(e){var r=i.a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},u=function(e){var r=l(e.components);return i.a.createElement(s.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},d=i.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=t,g=u["".concat(o,".").concat(d)]||u[d]||f[d]||a;return n?i.a.createElement(g,c(c({ref:r},s),{},{components:n})):i.a.createElement(g,c({ref:r},s))}));function g(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:t,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},865:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return o})),n.d(r,"metadata",(function(){return c})),n.d(r,"toc",(function(){return p})),n.d(r,"default",(function(){return l}));var t=n(3),i=n(8),a=(n(0),n(1152)),o={id:"spring",title:"Spring"},c={unversionedId:"java/spring/spring",id:"java/spring/spring",isDocsHomePage:!1,title:"Spring",description:"Spring Initializer",source:"@site/notes/java/spring/README.md",slug:"/java/spring/spring",permalink:"/notes/java/spring/spring",editUrl:"https://github.com/wenerme/wener/edit/master/notes/java/spring/README.md",version:"current",sidebar:"docs",previous:{title:"Java 9",permalink:"/notes/java/version/java-9"},next:{title:"\u53d1\u5e03\u5386\u53f2",permalink:"/notes/java/spring/releases"}},p=[{value:"Spring Initializer",id:"spring-initializer",children:[]},{value:"\u6587\u6863\u8def\u5f84",id:"\u6587\u6863\u8def\u5f84",children:[]}],s={toc:p};function l(e){var r=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},s,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"spring-initializer"},"Spring Initializer"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"http://start.spring.io/"},"Spring Initializer")," \u53ef\u7528\u4e8e\u5feb\u901f\u7684\u521b\u5efa\u9879\u76ee\u57fa\u7840."),Object(a.b)("h2",{id:"\u6587\u6863\u8def\u5f84"},"\u6587\u6863\u8def\u5f84"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# \u6240\u6709\u6587\u6863\nhttp://spring.io/docs/reference\n\n# PDF\nhttp://docs.spring.io/spring-$PROJECT_NAME/docs/current/reference/pdf/spring-$PROJECT_NAME-reference.pdf\n# \u5355\u9875 HTML\nhttp://docs.spring.io/spring-$PROJECT_NAME/docs/current/reference/htmlsingle/\n# \u5206\u7ae0\u8282 HTML\nhttp://docs.spring.io/spring-$PROJECT_NAME/docs/current/reference/html/\n\nenv PROJECT_NAME=boot sh -c 'echo http://docs.spring.io/spring-$PROJECT_NAME/docs/current/reference/pdf/spring-$PROJECT_NAME-reference.pdf'\n\n# \u6709\u5b50\u9879\u76ee\u7684\u6587\u6863\u5730\u5740\nhttp://docs.spring.io/spring-data/data-jpa/docs/current/reference/html/\n")))}l.isMDXComponent=!0}}]);