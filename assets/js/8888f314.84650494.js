"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[19780],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=l,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},93589:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=t(87462),l=t(63366),a=(t(67294),t(3905)),o=["components"],i={title:"Rollup FAQ",tags:["FAQ"]},u=void 0,s={unversionedId:"web/dev/bundle/rollup-faq",id:"web/dev/bundle/rollup-faq",title:"Rollup FAQ",description:"this has been rewritten to undefined",source:"@site/notes/web/dev/bundle/rollup-faq.md",sourceDirName:"web/dev/bundle",slug:"/web/dev/bundle/rollup-faq",permalink:"/notes/web/dev/bundle/rollup-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/dev/bundle/rollup-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",frontMatter:{title:"Rollup FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"Rollup Awesome",permalink:"/notes/web/dev/bundle/rollup-awesome"},next:{title:"Lerna",permalink:"/notes/web/dev/lerna"}},p=[{value:"<code>this</code> has been rewritten to <code>undefined</code>",id:"this-has-been-rewritten-to-undefined",children:[],level:2},{value:"Rollup requires that your Babel configuration keeps ES6 module syntax intact.",id:"rollup-requires-that-your-babel-configuration-keeps-es6-module-syntax-intact",children:[],level:2},{value:"SyntaxError: Unexpected token: punc (.)",id:"syntaxerror-unexpected-token-punc-",children:[],level:2},{value:"Missing class properties transform.",id:"missing-class-properties-transform",children:[],level:2},{value:"&#39;default&#39; is not exported by",id:"default-is-not-exported-by",children:[],level:2},{value:"xxx.default is not a function",id:"xxxdefault-is-not-a-function",children:[],level:2},{value:"lodash \u6ca1\u80fd \u5254\u9664/tree shake",id:"lodash-\u6ca1\u80fd-\u5254\u9664tree-shake",children:[],level:2},{value:"angularCompilerOptions",id:"angularcompileroptions",children:[],level:2}],c={toc:p};function d(e){var n=e.components,t=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"this-has-been-rewritten-to-undefined"},(0,a.kt)("inlineCode",{parentName:"h2"},"this")," has been rewritten to ",(0,a.kt)("inlineCode",{parentName:"h2"},"undefined")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u914d\u5408 typescript \u4f1a\u51fa\u73b0\uff0c\u4e0d\u5f71\u54cd\u4f7f\u7528\uff0c\u4f46\u5f88\u70e6")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5ffd\u7565\u8be5\u9519\u8bef")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{\n  onwarn(warning) {\n      if (warning.code === 'THIS_IS_UNDEFINED') {\n        return;\n      }\n      console.warn('THIS_IS_UNDEFINED', warning.message);\n    },\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rollupjs.org/guide/en/#error-this-is-undefined"},"this-is-undefined"))),(0,a.kt)("h2",{id:"rollup-requires-that-your-babel-configuration-keeps-es6-module-syntax-intact"},"Rollup requires that your Babel configuration keeps ES6 module syntax intact."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{\n  plugins: [\n    babel({\n      babelHelpers: 'bundled',\n      babelrc: false,\n    }),\n    terser({ ecma: 6, module: true }),\n  ],\n}\n")),(0,a.kt)("h2",{id:"syntaxerror-unexpected-token-punc-"},"SyntaxError: Unexpected token: punc (.)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining"},"Optional chaining")),(0,a.kt)("li",{parentName:"ul"},"\u8c03\u6574 transpile \u6216\u8005 ts \u7684 target")),(0,a.kt)("h2",{id:"missing-class-properties-transform"},"Missing class properties transform."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@babel/plugin-proposal-class-properties"))),(0,a.kt)("h2",{id:"default-is-not-exported-by"},"'default' is not exported by"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5bfc\u5165\u65b9\u5f0f\u7684\u95ee\u9898"),(0,a.kt)("li",{parentName:"ul"},"commonjs \u95ee\u9898")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// \u8fd9\u6837\u4e0d\u4f1a\u4f7f\u7528 default\n// TS \u4e2d\u7684 allowSyntheticDefaultImports \u53c2\u6570\nimport * as Abc from './abc';\n")),(0,a.kt)("h2",{id:"xxxdefault-is-not-a-function"},"xxx.default is not a function"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u822c\u662f commonjs \u7684\u95ee\u9898")),(0,a.kt)("p",null,"\u53ef\u4ee5\u624b\u52a8\u6dfb\u52a0\u547d\u540d\u5bfc\u51fa"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"commonjs({\n  include: 'node_modules/**',\n  // \u65b0\u7248\u672c\u63d2\u4ef6\u4f1a\u81ea\u5e26\u5904\u7406\uff0c\u6ca1\u6709\u4e86\u8be5\u53c2\u6570\n  namedExports: {\n    'node_modules/@emotion/memoize/dist/memoize.cjs.js': ['memoize'],\n  },\n});\n")),(0,a.kt)("h2",{id:"lodash-\u6ca1\u80fd-\u5254\u9664tree-shake"},"lodash \u6ca1\u80fd \u5254\u9664/tree shake"),(0,a.kt)("p",null,"\u4f7f\u7528 lodash-es\uff0c\u4e0d\u8981\u4f7f\u7528 lodash"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"lodash \u662f cjs"),(0,a.kt)("li",{parentName:"ul"},"lodash-es \u662f esm")),(0,a.kt)("h2",{id:"angularcompileroptions"},"angularCompilerOptions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://angular.io/guide/angular-compiler-options"},"https://angular.io/guide/angular-compiler-options"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "fullTemplateTypeCheck": true,\n  "preserveWhitespaces": true\n}\n')))}d.isMDXComponent=!0}}]);