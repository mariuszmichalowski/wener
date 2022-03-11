"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[13791],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),o=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=o(n),d=a,k=s["".concat(u,".").concat(d)]||s[d]||m[d]||l;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},75527:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return o},assets:function(){return c},toc:function(){return m},default:function(){return d}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],p={slug:"why-need-graphql",title:"\u4e3a\u4ec0\u4e48\u9700\u8981 GraphQL",tags:["\u5f00\u53d1","\u67b6\u6784","GraphQL"]},u=void 0,o={permalink:"/story/why-need-graphql",editUrl:"https://github.com/wenerme/wener/edit/master/story/2021/2021-01-16-why-need-graphql.md",source:"@site/story/2021/2021-01-16-why-need-graphql.md",title:"\u4e3a\u4ec0\u4e48\u9700\u8981 GraphQL",description:"\u9879\u76ee\u5f00\u59cb\u65f6\u4eba\u5458\u914d\u5907\u4e00\u822c\u6709\u51e0\u79cd\u60c5\u51b5",date:"2022-03-11T09:14:18.258Z",formattedDate:"March 11, 2022",tags:[{label:"\u5f00\u53d1",permalink:"/story/tags/\u5f00\u53d1"},{label:"\u67b6\u6784",permalink:"/story/tags/\u67b6\u6784"},{label:"GraphQL",permalink:"/story/tags/graph-ql"}],readingTime:4.72,truncated:!0,authors:[],prevItem:{title:"\u7406\u89e3\u5b69\u5b50\u7684\u89c6\u529b",permalink:"/story/understand-baby-vision"},nextItem:{title:"AlpineLinux \u5b89\u88c5 Xfce \u684c\u9762",permalink:"/story/alpinelinux-setup-xfce"}},c={authorsImageUrls:[]},m=[{value:"GraphQL \u4e0d\u9002\u5408\u573a\u666f",id:"graphql-\u4e0d\u9002\u5408\u573a\u666f",children:[],level:2},{value:"\u5e94\u7528\u573a\u666f\u4e3e\u4f8b",id:"\u5e94\u7528\u573a\u666f\u4e3e\u4f8b",children:[{value:"\u9009\u62e9\u6027\u7684\u8fd4\u56de\u8f83\u91cd\u7684\u8bf7\u6c42",id:"\u9009\u62e9\u6027\u7684\u8fd4\u56de\u8f83\u91cd\u7684\u8bf7\u6c42",children:[],level:3},{value:"\u590d\u6742\u5173\u8054\u5173\u7cfb",id:"\u590d\u6742\u5173\u8054\u5173\u7cfb",children:[],level:3},{value:"\u7f51\u5173\u6574\u5408\u670d\u52a1",id:"\u7f51\u5173\u6574\u5408\u670d\u52a1",children:[],level:3}],level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[],level:2}],s={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u9879\u76ee\u5f00\u59cb\u65f6\u4eba\u5458\u914d\u5907\u4e00\u822c\u6709\u51e0\u79cd\u60c5\u51b5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u524d\u540e\u7aef\u540c\u4e00\u4e2a\u4eba"),(0,l.kt)("li",{parentName:"ul"},"\u524d\u540e\u7aef\u540c\u4e00\u4e2a\u56e2\u961f"),(0,l.kt)("li",{parentName:"ul"},"\u524d\u540e\u7aef\u4e0d\u540c\u4eba\u540c\u4e00\u4e2a\u56e2\u961f"),(0,l.kt)("li",{parentName:"ul"},"\u524d\u540e\u7aef\u4e0d\u540c\u4eba\u4e0d\u540c\u56e2\u961f")),(0,l.kt)("p",null,"\u5f00\u53d1\u7684\u5e94\u7528\u4e00\u822c\u533a\u5206\u4e3a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u91cd\u524d\u7aef"),(0,l.kt)("li",{parentName:"ul"},"\u91cd\u540e\u7aef"),(0,l.kt)("li",{parentName:"ul"},"\u4e1a\u52a1\u6027"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u6027"),(0,l.kt)("li",{parentName:"ul"},"\u5185\u5bb9\u6027")),(0,l.kt)("p",null,"\u56e0\u6b64\u4f1a\u9047\u5230\u51e0\u4e2a\u73b0\u8c61"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u524d\u540e\u7aef\u5f00\u53d1\u8fdb\u5ea6\u4e0d\u540c"),(0,l.kt)("li",{parentName:"ul"},"\u524d\u540e\u7aef\u76f8\u540c\u6a21\u5757\u529f\u80fd\u590d\u6742\u5ea6\u4e0d\u540c"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u540c\u7684\u540e\u7aef\u5bf9\u8c61\u6709\u76f8\u540c\u7684\u6570\u636e\u5173\u8054"),(0,l.kt)("li",{parentName:"ul"},"\u76f8\u540c\u524d\u7aef\u4e0d\u540c\u6a21\u5757\u9700\u8981\u4e0d\u540c\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u540c\u524d\u7aef\u9700\u8981\u4f7f\u7528\u4e0d\u540c\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"\u524d\u7aef\u8bf7\u6c42\u4e00\u6b21\u6570\u636e\u540e\u4f1a\u518d\u6b21\u53d1\u8d77 N \u6b21\u8bf7\u6c42 - N+1"),(0,l.kt)("li",{parentName:"ul"},"\u524d\u7aef\u4e00\u4e2a\u6a21\u5757\u9700\u8981\u5bf9\u5e94\u591a\u4e2a\u540e\u7aef")),(0,l.kt)("p",null,"\u90a3\u4e48\u5c31\u4f1a\u8003\u8651\u51e0\u4e2a\u573a\u666f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u524d\u7aef\u81ea\u884c\u9009\u62e9\u8981\u54ea\u4e9b\u6570\u636e\u5b57\u6bb5"),(0,l.kt)("li",{parentName:"ul"},"\u524d\u7aef\u63d0\u4f9b\u5173\u8054\u7684\u6570\u636e\u9879\u8fdb\u884c\u4e00\u6b21\u6027\u8fd4\u56de"),(0,l.kt)("li",{parentName:"ul"},"\u540e\u7aef\u6574\u5408\u5176\u4ed6\u670d\u52a1\u8fd4\u56de\u7ed3\u679c\u8fdb\u884c\u4e00\u6b21\u6027\u8fd4\u56de")),(0,l.kt)("p",null,"\u90a3\u4e48\u8fd9\u65f6\u5019\u5c31\u53ef\u4ee5\u9009\u62e9\u4f7f\u7528 GraphQL\u3002"),(0,l.kt)("h2",{id:"graphql-\u4e0d\u9002\u5408\u573a\u666f"},"GraphQL \u4e0d\u9002\u5408\u573a\u666f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5feb\u901f\u8fdb\u5165\u5f00\u53d1 - \u5982\u679c\u9879\u76ee\u521a\u5f00\u59cb\u60f3\u8981\u901f\u5ea6\u5feb\uff0c\u90a3\u6700\u597d\u8fd8\u662f REST",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u65f6\u95f4\u6295\u5165\u4e86\u89e3 GraphQL \u65b9\u6848"))),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u524d\u7aef\u4e00\u4e2a\u540e\u7aef\uff0c\u524d\u7aef\u903b\u8f91\u786e\u5b9a\uff0c\u540e\u7aef\u4e0d\u9700\u8981\u53d8\u52a8\u5219\u6ca1\u5fc5\u8981\u4f7f\u7528 GraphQL",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e00\u6b21\u6027\u5de5\u4f5c\uff0c\u9879\u76ee\u4e0d\u9700\u8981\u6f14\u8fdb")))),(0,l.kt)("h2",{id:"\u5e94\u7528\u573a\u666f\u4e3e\u4f8b"},"\u5e94\u7528\u573a\u666f\u4e3e\u4f8b"),(0,l.kt)("h3",{id:"\u9009\u62e9\u6027\u7684\u8fd4\u56de\u8f83\u91cd\u7684\u8bf7\u6c42"},"\u9009\u62e9\u6027\u7684\u8fd4\u56de\u8f83\u91cd\u7684\u8bf7\u6c42"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"create table users (\n  id bigint,\n  name text\n);\ncreate table orders (\n  id bigint,\n  user_id bigint,\n  title text\n);\n")),(0,l.kt)("p",null,"\u73b0\u5728 \u4e2a\u4eba\u9875 \u9700\u8981\u5728\u8bf7\u6c42\u7528\u6237\u65f6\u540c\u65f6\u8fd4\u56de\u7528\u6237\u7684\u8ba2\u5355\u603b\u6570\uff0c\u4f46\u5176\u4ed6\u573a\u666f\u4e0d\u9700\u8981\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"object User {\n  id: Int\n  name: String\n  orderCount: Int # -> select count(*) from orders where user_id = source.id\n}\n")),(0,l.kt)("p",null,"\u901a\u8fc7 GraphQL \u53ef\u4ee5\u5c06\u9009\u62e9\u7559\u7ed9\u524d\u7aef\uff0c\u4e0d\u9700\u8981\u7531\u540e\u7aef\u53bb\u51b3\u5b9a\u4ec0\u4e48\u65f6\u5019\u8981\u8fd4\u56de\u4e00\u4e2a\u76f8\u5bf9\u201c\u6602\u8d35\u201d\u7684\u8bf7\u6c42\u3002"),(0,l.kt)("h3",{id:"\u590d\u6742\u5173\u8054\u5173\u7cfb"},"\u590d\u6742\u5173\u8054\u5173\u7cfb"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"create table users (\n  id bigint,\n  name text\n);\ncreate table articles (\n  id bigint,\n  title text\n);\ncreate table lables (\n  id bigint,\n  color_id bigint,\n  name text\n  target_id bigint,\n  target_type bigint -- User, Label\n);\ncreate table lable_colors (\n  id bigint,\n  color text\n)\n")),(0,l.kt)("p",null,"\u56e0\u4e3a \u7528\u6237 \u548c \u6587\u7ae0 \u90fd\u652f\u6301\u6253\u6807\u7b7e\uff0c\u56e0\u6b64\u5728\u5b9e\u73b0\u65f6\u76f8\u540c\u7684\u903b\u8f91\u9700\u8981\u591a\u6b21\u5b9e\u73b0\u3002\n\u4f7f\u7528 GraphQL \u7b80\u5316\u5173\u8054\u5bf9\u8c61\u67e5\u8be2\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"object User {\n  id: Int\n  name: String\n  lables: Label[] # -> select * from lables where target_id = source.id and target_type = 'User'\n}\nobject Article {\n  id: Int\n  title: String\n  lables: Label[] # -> select * from lables where target_id = source.id and target_type = 'Article'\n}\nobject Lable {\n  name: String\n  color: LableColor\n}\nobject LableColor {\n  color: String\n}\n")),(0,l.kt)("p",null,"\u5728\u67e5\u8be2\u65f6\u5373\u53ef\u4e00\u6b21\u6027\u67e5\u8be2\uff0c\u800c\u4e14\u589e\u52a0\u989d\u5916\u7684\u5173\u8054\u4e5f\u76f8\u5bf9\u7b80\u5355\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"user:User{\n  name\n  lables: {\n    name\n    color: {\n      color\n    }\n  }\n}\narticle:Article {\n  title\n  labels: {\n    name\n  }\n}\n")),(0,l.kt)("h3",{id:"\u7f51\u5173\u6574\u5408\u670d\u52a1"},"\u7f51\u5173\u6574\u5408\u670d\u52a1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5047\u8bbe\u6709\u4e00\u4e2a \u5916\u90e8\u7684 \u90ae\u4ef6\u670d\u52a1\uff0c\u73b0\u5728\u9700\u8981\u5728\u83b7\u53d6\u7528\u6237\u65f6\u540c\u65f6\u8fd4\u56de\u90ae\u4ef6\u6570\u91cf"),(0,l.kt)("li",{parentName:"ul"},"\u6b64\u65f6\u53ef\u4ee5\u901a\u8fc7\u7f51\u5173\u5c06\u8be5\u670d\u52a1\u6574\u5408\u5230\u73b0\u6709\u7684 GraphQL \u670d\u52a1\u4e2d")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"object User {\n  id: Int\n  name: String # \u8be5\u5b57\u6bb5\u7531\u5b9e\u9645\u540e\u7aef\u5904\u7406\n  emailCount: Int # \u8be5\u5b57\u6bb5\u7531\u7f51\u5173\u5c42\u8fdb\u884c\u5904\u7406\n}\n")),(0,l.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,l.kt)("p",null,"\u9700\u8981 GraphQL \u7684\u7406\u7531\u5176\u5b9e\u5f88\u7b80\u5355\uff0c\u5c31\u662f\u5f53\u540e\u7aef\u7684\u67e5\u8be2\u4ee3\u7801\u5199\u7684 \u201c\u5f88\u70e6\u201d \u7684\u65f6\u5019\uff0c\u9700\u8981\u4ece\u4e2d\u89e3\u8131\u51fa\u6765\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u9009\u62e9\u4f7f\u7528 GraphQL\uff0c\u7ed9\u524d\u7aef\u66f4\u5927\u7684\u9009\u62e9\u548c\u63a7\u5236\u6743\u3002"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u4f7f\u7528\u6ce8\u610f\u4e8b\u9879")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"GraphQL \u672c\u8eab\u5c31\u5305\u542b\u4e86\u6587\u6863",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u50cf REST \u8fd8\u8981\u7ef4\u62a4 Swagger/OpenAPI"))),(0,l.kt)("li",{parentName:"ul"},"\u524d\u540e\u7aef\u5c3d\u91cf\u9009\u62e9\u652f\u6301\u751f\u6210 GraphQL \u7684 \u65b9\u5f0f/\u6846\u67b6/\u5de5\u5177"),(0,l.kt)("li",{parentName:"ul"},"\u751f\u6210\u533a\u5206\u4e3a \u5148 Schema \u6216 \u5148 Entity - \u770b\u60c5\u51b5\u6309\u9700"),(0,l.kt)("li",{parentName:"ul"},"\u524d\u7aef\u4f7f\u7528 TypeScript \u80fd\u591f\u5229\u7528 GraphQL Schema \u7c7b\u578b\u4fe1\u606f"),(0,l.kt)("li",{parentName:"ul"},"\u6700\u597d\u662f\u989d\u5916\u63d0\u4f9b Entity Schema/Metadata/JSONSchema \u7ed9\u524d\u7aef",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u91cd\u6570\u636e\u573a\u666f\u524d\u7aef\u7ec4\u4ef6\u53ef\u76f4\u63a5\u751f\u6210"),(0,l.kt)("li",{parentName:"ul"},"\u524d\u7aef\u53ef\u6309\u7167 Schema \u751f\u6210\u67e5\u8be2")))))))}d.isMDXComponent=!0}}]);