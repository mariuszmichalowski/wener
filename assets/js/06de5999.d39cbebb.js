"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[20583],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(n),h=l,f=c["".concat(u,".").concat(h)]||c[h]||m[h]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8907:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var r=n(87462),l=n(63366),a=(n(67294),n(3905)),i=["components"],o={title:"zsh"},u=void 0,p={unversionedId:"os/linux/shell/zsh",id:"os/linux/shell/zsh",title:"zsh",description:"- \u914d\u7f6e",source:"@site/notes/os/linux/shell/zsh.md",sourceDirName:"os/linux/shell",slug:"/os/linux/shell/zsh",permalink:"/notes/os/linux/shell/zsh",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/shell/zsh.md",tags:[],version:"current",frontMatter:{title:"zsh"},sidebar:"docs",previous:{title:"Terminal",permalink:"/notes/os/linux/shell/terminal"},next:{title:"\u865a\u62df\u5316",permalink:"/notes/os/virt/"}},s=[{value:"Why ZSH",id:"why-zsh",children:[],level:2}],m={toc:s};function c(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u914d\u7f6e",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},".zshrc - \u4ea4\u4e92 shell"),(0,a.kt)("li",{parentName:"ul"},".zprofile - \u767b\u9646 shell"))),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/robbyrussell/oh-my-zsh"},"robbyrussell/oh-my-zsh")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/zsh-users/antigen"},"zsh-users/antigen"))))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"feature"),(0,a.kt)("th",{parentName:"tr",align:null},"zsh"),(0,a.kt)("th",{parentName:"tr",align:null},"bash"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Automatic cd"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Recursive path expansion"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Spelling correction and approximate completion"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Plugin and theme suppor"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h1",{id:"faq"},"FAQ"),(0,a.kt)("h2",{id:"why-zsh"},"Why ZSH"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pros",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"macOS \u9ed8\u8ba4 Shell"))),(0,a.kt)("li",{parentName:"ul"},"Cons",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5927\u591a ZSH \u6709\u7684\u7279\u6027 Bash \u4e5f\u6709",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f46 zsh \u53ef\u80fd\u652f\u6301\u7684\u66f4\u5b8c\u5584"))),(0,a.kt)("li",{parentName:"ul"},"\u5927\u591a\u670d\u52a1\u5668\u73af\u5883\u90fd\u662f Bash \u6216 POSIX Shell",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5e73\u65f6\u4f7f\u7528 bash \u66f4\u5229\u4e8e\u670d\u52a1\u7aef\u7f16\u7801"),(0,a.kt)("li",{parentName:"ul"},"\u8fc7\u591a\u4f7f\u7528 zsh \u76f8\u5173\u7279\u6027\u4f1a\u4ea7\u751f\u4f9d\u8d56")))))))}c.isMDXComponent=!0}}]);