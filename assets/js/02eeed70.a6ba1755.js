"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[62270],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82472:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={title:"Riot"},s="riotjs",p={unversionedId:"web/framework/riot",id:"web/framework/riot",isDocsHomePage:!1,title:"Riot",description:"\u76f4\u63a5\u901a\u8fc7\u6d4f\u89c8\u5668\u4f7f\u7528",source:"@site/notes/web/framework/riot.md",sourceDirName:"web/framework",slug:"/web/framework/riot",permalink:"/notes/web/framework/riot",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/framework/riot.md",tags:[],version:"current",frontMatter:{title:"Riot"},sidebar:"docs",previous:{title:"Prisma2",permalink:"/notes/web/framework/prisma2"},next:{title:"solid",permalink:"/notes/web/framework/solidh"}},l=[{value:"\u76f4\u63a5\u901a\u8fc7\u6d4f\u89c8\u5668\u4f7f\u7528",id:"\u76f4\u63a5\u901a\u8fc7\u6d4f\u89c8\u5668\u4f7f\u7528",children:[]}],u={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"riotjs"},"riotjs"),(0,i.kt)("h2",{id:"\u76f4\u63a5\u901a\u8fc7\u6d4f\u89c8\u5668\u4f7f\u7528"},"\u76f4\u63a5\u901a\u8fc7\u6d4f\u89c8\u5668\u4f7f\u7528"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"var tags = `\n<pusher>\n  <h3>{ message }</h3>\n  <ul>\n    <li each={ techs }>{ name }</li>\n  </ul>\n\n  <script>\n    this.message = 'Hello, Riot!'\n    this.techs = [\n      { name: 'HTML' },\n      { name: 'JavaScript' },\n      { name: 'CSS' }\n    ]\n  <\/script>\n\n  <style scoped>\n    :scope { font-size: 2rem }\n    h3 { color: #444 }\n    ul { color: #999 }\n  </style>\n</pusher>\n`;\n\nif (!window.jQuery) {\n  document.head.appendChild(\n    Object.assign(document.createElement('script'), { src: 'https://code.jquery.com/jquery-2.2.3.js', onload: setup }),\n  );\n} else {\n  setup();\n}\n\nfunction setup() {\n  $.getScript('https://cdn.jsdelivr.net/riot/2.3/riot+compiler.min.js')\n    .done(() => $('pusher, script[type=\"riot/tag\"]').remove())\n    .done(() => $('body').append($('<script type=\"riot/tag\"><\/script>').text(tags)).append($(`<pusher></pusher>`)))\n    .done(() => riot.mount('pusher'));\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- mount point --\x3e\n<my-tag></my-tag>\n\n\x3c!-- inlined tag definition --\x3e\n<script type="riot/tag">\n  <my-tag>\n    <h3>Tag layout</h3>\n    <inner-tag />\n  </my-tag>\n<\/script>\n\n\x3c!-- <inner-tag/> is specified on external file --\x3e\n<script src="path/to/javascript/with-tags.js" type="riot/tag"><\/script>\n\n\x3c!-- include riot.js and the compiler --\x3e\n<script src="https://cdn.jsdelivr.net/riot/2.6/riot+compiler.min.js"><\/script>\n\n\x3c!-- mount normally --\x3e\n<script>\n  riot.compile(my_tag.innerHTML);\n  riot.mount(\'*\');\n<\/script>\n')))}m.isMDXComponent=!0}}]);