"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[18886],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=l.createContext({}),u=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return l.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(n),k=r,N=c["".concat(o,".").concat(k)]||c[k]||m[k]||a;return n?l.createElement(N,i(i({ref:t},s),{},{components:n})):l.createElement(N,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<a;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},98364:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return s},default:function(){return c}});var l=n(22122),r=n(19756),a=(n(67294),n(3905)),i=["components"],p={title:"svelte"},o=void 0,u={unversionedId:"web/framework/svelte",id:"web/framework/svelte",isDocsHomePage:!1,title:"svelte",description:"- sveltejs/svelte",source:"@site/notes/web/framework/svelte.md",sourceDirName:"web/framework",slug:"/web/framework/svelte",permalink:"/notes/web/framework/svelte",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/framework/svelte.md",version:"current",frontMatter:{title:"svelte"},sidebar:"docs",previous:{title:"solid",permalink:"/notes/web/framework/solidh"},next:{title:"Vue",permalink:"/notes/web/framework/vue"}},s=[{value:"Rollup",id:"rollup",children:[]},{value:"typescript",id:"typescript",children:[]},{value:"@tsconfig/svelte",id:"tsconfigsvelte",children:[]},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",children:[]}],m={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/sveltejs/svelte"},"sveltejs/svelte"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u54cd\u5e94\u5f0f\u3001\u975e VDOM"),(0,a.kt)("li",{parentName:"ul"},"\u6709\u70b9\u50cf React+Vue \u7684\u7ed3\u5408\u4f53"),(0,a.kt)("li",{parentName:"ul"},"\u65e0 Runtime - \u65e0\u4f9d\u8d56",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"bundle \u540e 11k - \u5df2\u5305\u542b\u57fa\u7840 svelte \u7ec4\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"min \u540e 3k"),(0,a.kt)("li",{parentName:"ul"},"svelte/internal \u53ef\u4ee5\u4f5c\u4e3a\u5916\u90e8\u4f9d\u8d56 - bundle - 9k, min -2k"))),(0,a.kt)("li",{parentName:"ul"},"\u7c7b Vue",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5355\u6587\u4ef6\u6a21\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u5c5e\u6027\u7ed1\u5b9a\u65b9\u5f0f"))),(0,a.kt)("li",{parentName:"ul"},"\u7c7b React",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u72b6\u6001\u5904\u7406"),(0,a.kt)("li",{parentName:"ul"},"\u7c7b JSX \u8bed\u6cd5"))),(0,a.kt)("li",{parentName:"ul"},"\u7279\u6b8a\u8bed\u6cd5 - \u9700\u8981\u7f16\u8bd1\u5668\u9884\u5904\u7406",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8bed\u6cd5\u76f4\u89c2"))),(0,a.kt)("li",{parentName:"ul"},"\u5185\u7f6e\u72b6\u6001\u7ba1\u7406"),(0,a.kt)("li",{parentName:"ul"},"CSS \u6837\u5f0f\u96c6\u6210\u5ea6\u5f88\u9ad8"))),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/sveltejs/kit"},"sveltejs/kit"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c NextJS \u4e4b\u4e8e React"),(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c Vite")))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n  $: name = 'world';\n<\/script>\n\n<input bind:value=\"{name}\" />\n<h1>Hello {name}!</h1>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import App from './index.svelte';\n\n// \u6302\u8f7d\u5230 Dom\nnew App({\n  target: document.body,\n  props: {\n    name: 'Wener',\n  },\n});\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# typescript check\nnpx svelte-check\n")),(0,a.kt)("h2",{id:"rollup"},"Rollup"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add -D svelte rollup-plugin-svelte svelte-preprocess rollup rollup-plugin-terser @rollup/plugin-{typescript,node-resolve,commonjs}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="rollup.config.ts"',title:'"rollup.config.ts"'},"import svelte from 'rollup-plugin-svelte';\nimport resolve from '@rollup/plugin-node-resolve';\nimport typescript from '@rollup/plugin-typescript';\nimport sveltePreprocess from 'svelte-preprocess';\nimport commonjs from '@rollup/plugin-commonjs';\nimport { terser } from 'rollup-plugin-terser';\n\nconst production = !process.env.ROLLUP_WATCH;\n\nexport default {\n  input: 'src/main.ts',\n  output: [\n    {\n      file: 'public/build/bundle.js',\n      format: 'iife',\n      name: 'app',\n      sourcemap: true,\n    },\n    {\n      file: 'public/build/bundle.min.js',\n      format: 'iife',\n      name: 'app',\n      sourcemap: true,\n      plugins: [terser()],\n    },\n  ],\n  // external:['svelte/internal'],\n  plugins: [\n    svelte({\n      preprocess: sveltePreprocess(),\n      include: 'src/**/*.svelte',\n    }),\n    resolve({ browser: true, dedupe: ['svelte'] }),\n    commonjs(),\n    typescript(),\n  ],\n};\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u66f4\u590d\u6742\u7684 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/sveltejs/language-tools/issues/161#issuecomment-642120838"},"rollup.config"))),(0,a.kt)("h2",{id:"typescript"},"typescript"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/typings/svelte.d.ts"',title:'"src/typings/svelte.d.ts"'},"declare module '*.svelte' {\n  const value: any;\n  export default value;\n}\n")),(0,a.kt)("h2",{id:"tsconfigsvelte"},"@tsconfig/svelte"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tsconfig/bases"},"tsconfig/bases"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "https://json.schemastore.org/tsconfig",\n  "display": "Svelte",\n  "_version": "2.0.0",\n\n  "compilerOptions": {\n    "moduleResolution": "node",\n    "target": "es2017",\n    /**\n      Svelte Preprocess cannot figure out whether you have a value or a type, so tell TypeScript\n      to enforce using `import type` instead of `import` for Types.\n     */\n    "importsNotUsedAsValues": "error",\n    "isolatedModules": true,\n    /**\n      To have warnings/errors of the Svelte compiler at the correct position,\n      enable source maps by default.\n     */\n    "sourceMap": true,\n\n    "strict": false,\n    "esModuleInterop": true,\n    "skipLibCheck": true,\n    "forceConsistentCasingInFileNames": true\n  }\n}\n')),(0,a.kt)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$:")," \u8868\u793a\u72b6\u6001 reactive"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$<\u53d8\u91cf\u540d>")," \u83b7\u53d6 reactive \u53d8\u91cf\u503c - \u7c7b\u4f3c\u8ba2\u9605\u72b6\u6001\u53d8\u5316"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$$props")," \u6240\u6709 props"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$$restProps")," \u5904\u7406\u5269\u4e0b\u7684 props"),(0,a.kt)("li",{parentName:"ul"},"\u63a7\u5236\u6d41\u8bed\u6cd5 ",(0,a.kt)("inlineCode",{parentName:"li"},"{#if }{:else}{/if}"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"if, each, await, key"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{@html }")," - \u6ce8\u5165 html \u5185\u5bb9"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{@debug }")," - console.log"),(0,a.kt)("li",{parentName:"ul"},"on:eventname",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"forward \u4e8b\u4ef6"))),(0,a.kt)("li",{parentName:"ul"},"on:eventname={handler}",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u53ef\u591a\u6b21\u76d1\u542c"))),(0,a.kt)("li",{parentName:"ul"},"on:eventname|modifers={handler}",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"preventDefault"),(0,a.kt)("li",{parentName:"ul"},"stopPropagation"),(0,a.kt)("li",{parentName:"ul"},"passive"),(0,a.kt)("li",{parentName:"ul"},"nonpassive"),(0,a.kt)("li",{parentName:"ul"},"capture"),(0,a.kt)("li",{parentName:"ul"},"once"),(0,a.kt)("li",{parentName:"ul"},"self"),(0,a.kt)("li",{parentName:"ul"},"trusted"))),(0,a.kt)("li",{parentName:"ul"},"bind:property={variable}",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"bind:value - \u76f4\u63a5\u7ed1\u5b9a value \u5230 value"),(0,a.kt)("li",{parentName:"ul"},"bind:group={variable}"),(0,a.kt)("li",{parentName:"ul"},"bind:this={dom_node}"))),(0,a.kt)("li",{parentName:"ul"},"class:name={value}"),(0,a.kt)("li",{parentName:"ul"},"use:action"),(0,a.kt)("li",{parentName:"ul"},"use:action={parameters}",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7ed1\u5b9a\u751f\u547d\u5468\u671f\u5230 action \u51fd\u6570\u8fd4\u56de\u5bf9\u8c61"),(0,a.kt)("li",{parentName:"ul"},"destroy"),(0,a.kt)("li",{parentName:"ul"},"update"))),(0,a.kt)("li",{parentName:"ul"},"transition:fn",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"in/out:fn"),(0,a.kt)("li",{parentName:"ul"},"in/out:fn={params}"),(0,a.kt)("li",{parentName:"ul"},"in/out:fn|local"),(0,a.kt)("li",{parentName:"ul"},"in/out:fn|local={params}",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"fn",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"introstart"),(0,a.kt)("li",{parentName:"ul"},"introend"),(0,a.kt)("li",{parentName:"ul"},"outrostart"),(0,a.kt)("li",{parentName:"ul"},"outroend"))))))),(0,a.kt)("li",{parentName:"ul"},"transition:fn={params}"),(0,a.kt)("li",{parentName:"ul"},"transition:fn|local"),(0,a.kt)("li",{parentName:"ul"},"transition:fn|local={params}"),(0,a.kt)("li",{parentName:"ul"},"animate:name"),(0,a.kt)("li",{parentName:"ul"},"animate:name={params}"),(0,a.kt)("li",{parentName:"ul"},'--style-props="anycssvalue"',(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f20\u9012 css \u53d8\u91cf"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'<slot name="" prop={value}>\x3c!-- optional fallback --\x3e</slot>')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$$slots")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<svelte:window on:keydown={handleKeydown}/>"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"body"),(0,a.kt)("li",{parentName:"ul"},"head"),(0,a.kt)("li",{parentName:"ul"},"options - compiler options"),(0,a.kt)("li",{parentName:"ul"},"fragment")))))}c.isMDXComponent=!0}}]);