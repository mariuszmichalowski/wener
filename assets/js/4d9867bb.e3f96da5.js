"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[36262],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=i(n),f=o,y=c["".concat(s,".").concat(f)]||c[f]||m[f]||a;return n?r.createElement(y,p(p({ref:t},u),{},{components:n})):r.createElement(y,p({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,p[1]=l;for(var i=2;i<a;i++)p[i]=n[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},22530:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return u},default:function(){return c}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),p=["components"],l={title:"Playroom"},s=void 0,i={unversionedId:"web/ui/playroom",id:"web/ui/playroom",title:"Playroom",description:"- seek-oss/playroom",source:"@site/notes/web/ui/playroom.md",sourceDirName:"web/ui",slug:"/web/ui/playroom",permalink:"/notes/web/ui/playroom",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/ui/playroom.md",tags:[],version:"current",frontMatter:{title:"Playroom"},sidebar:"docs",previous:{title:"Icon Awesome",permalink:"/notes/web/ui/icon-awesome"},next:{title:"Storybook",permalink:"/notes/web/ui/storybook"}},u=[],m={toc:u};function c(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/seek-oss/playroom"},"seek-oss/playroom"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"JSX \u8bbe\u8ba1\u7cfb\u7edf\u8bd5\u9a8c\u73af\u5883"),(0,a.kt)("li",{parentName:"ul"},"\u591a\u5c3a\u5bf8\u3001\u591a\u4e3b\u9898"),(0,a.kt)("li",{parentName:"ul"},"\u5b9e\u65f6\u7f16\u8f91\u548c\u67e5\u770b"),(0,a.kt)("li",{parentName:"ul"},"\u9884\u89c8\u63d2\u5165 Snippte"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u901a\u8fc7 URL \u5206\u4eab")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm add -D playroom\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"package.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "playroom:start": "playroom start",\n    "playroom:build": "playroom build"\n  }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"playroom.config.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  components: './src/components',\n  outputPath: './dist/playroom',\n\n  // Optional:\n  title: 'My Awesome Library',\n  themes: './src/themes',\n  snippets: './playroom/snippets.js',\n  frameComponent: './playroom/FrameComponent.js',\n  scope: './playroom/useScope.js',\n  widths: [320, 768, 1024],\n  port: 9000,\n  openBrowser: true,\n  paramType: 'search', // default is 'hash'\n  exampleCode: `\n    <Button>\n      Hello World!\n    </Button>\n  `,\n  baseUrl: '/playroom/',\n  webpackConfig: () => ({\n    // Custom webpack config goes here...\n  }),\n  iframeSandbox: 'allow-scripts',\n  typeScriptFiles: ['src/components/**/*.{ts,tsx}', '!**/node_modules'],\n};\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"snippets.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import dedent from 'dedent';\n\nexport default [\n  {\n    group: 'Text',\n    name: 'Default',\n    code: dedent`\n      <Text>Text</Text>\n    `,\n  },\n];\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"themes.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export { default as themeA } from './themeA';\nexport { default as themeB } from './themeB';\n")))}c.isMDXComponent=!0}}]);