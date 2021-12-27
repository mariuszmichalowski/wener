"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[25163],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83450:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"\u89c6\u56fe"},s=void 0,p={unversionedId:"db/relational/postgresql/postgresql-view",id:"db/relational/postgresql/postgresql-view",title:"\u89c6\u56fe",description:"\u53ef\u66f4\u65b0\u89c6\u56fe",source:"@site/notes/db/relational/postgresql/postgresql-view.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/postgresql-view",permalink:"/notes/db/relational/postgresql/postgresql-view",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/relational/postgresql/postgresql-view.md",tags:[],version:"current",frontMatter:{title:"\u89c6\u56fe"},sidebar:"docs",previous:{title:"PostgreSQL Upgrade",permalink:"/notes/db/relational/postgresql/postgresql-upgrade"},next:{title:"PostgreSQL & ZFS",permalink:"/notes/db/relational/postgresql/postgresql-zfs"}},c=[{value:"\u53ef\u66f4\u65b0\u89c6\u56fe",id:"\u53ef\u66f4\u65b0\u89c6\u56fe",children:[],level:2}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u53ef\u66f4\u65b0\u89c6\u56fe"},"\u53ef\u66f4\u65b0\u89c6\u56fe"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"\u5217\u6ca1\u6709\u9ed8\u8ba4\u503c"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ON CONFLICT")," \u65e0\u6548")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9650\u5236",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"FROM \u53ea\u80fd\u6709\u4e00\u4e2a\u8868\uff0c\u53ef\u4ee5\u662f\u53e6\u5916\u4e00\u4e2a\u53ef\u66f4\u65b0\u89c6\u56fe"),(0,o.kt)("li",{parentName:"ul"},"\u9876\u7ea7\u5b9a\u4e49\u4e0d\u5141\u8bb8\u5305\u542b WITH, DISTINCT, GROUP BY, HAVING, LIMIT, OFFSET"),(0,o.kt)("li",{parentName:"ul"},"\u9876\u7ea7\u5b9a\u4e49\u4e0d\u5141\u8bb8\u5305\u542b\u96c6\u5408\u64cd\u4f5c UNION, INTERSECT, EXCEPT"),(0,o.kt)("li",{parentName:"ul"},"\u89c6\u56fe\u5217\u4e0d\u5141\u8bb8\u5305\u542b\u805a\u5408\u3001\u7a97\u53e3\u51fd\u6570\u3001\u96c6\u5408\u8fd4\u56de\u51fd\u6570"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hasura.io/blog/the-pros-and-cons-of-updatable-views/"},"The pros and cons of updatable views in PostgreSQL"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE articles (\n  id integer NOT NULL PRIMARY KEY\n  , title text NOT NULL\n  , description text\n  , public bool NOT NULL DEFAULT 'false'\n);\n\nCREATE VIEW public_articles AS\n  SELECT * FROM articles\n  WHERE public;\n")))}m.isMDXComponent=!0}}]);