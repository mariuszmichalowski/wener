"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[85348],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||c;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<c;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49441:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var r=n(22122),a=n(19756),c=(n(67294),n(3905)),o=["components"],s={title:"zustand"},i=void 0,u={unversionedId:"web/react/zustand",id:"web/react/zustand",isDocsHomePage:!1,title:"zustand",description:"- pmndrs/zustand \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/web/react/zustand.md",sourceDirName:"web/react",slug:"/web/react/zustand",permalink:"/notes/web/react/zustand",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/react/zustand.md",version:"current",frontMatter:{title:"zustand"},sidebar:"docs",previous:{title:"preact",permalink:"/notes/web/react/preact"},next:{title:"NodeJS FAQ",permalink:"/notes/web/node/nodejs-faq"}},l=[{value:"\u4e0a\u4e0b\u6587",id:"\u4e0a\u4e0b\u6587",children:[]},{value:"\u5728\u5916\u90e8\u89e6\u53d1\u72b6\u6001",id:"\u5728\u5916\u90e8\u89e6\u53d1\u72b6\u6001",children:[]},{value:"\u901a\u8fc7\u5f15\u7528\u65b9\u5f0f\u4f18\u5316\u5feb\u901f\u53d8\u5316\u7684\u72b6\u6001",id:"\u901a\u8fc7\u5f15\u7528\u65b9\u5f0f\u4f18\u5316\u5feb\u901f\u53d8\u5316\u7684\u72b6\u6001",children:[]}],p={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://github.com/pmndrs/zustand"},"pmndrs/zustand")," \u662f\u4ec0\u4e48\uff1f",(0,c.kt)("ul",{parentName:"li"},(0,c.kt)("li",{parentName:"ul"},"out of tree \u72b6\u6001\u7ba1\u7406",(0,c.kt)("ul",{parentName:"li"},(0,c.kt)("li",{parentName:"ul"},"\u53ef\u5916\u90e8\u67e5\u8be2\u3001\u4fee\u6539\u3001\u8ba2\u9605"),(0,c.kt)("li",{parentName:"ul"},"\u53ef\u591a\u4e2a\u6e32\u67d3\u6811\u4f7f\u7528"))),(0,c.kt)("li",{parentName:"ul"},"\u652f\u6301 react concurrency"),(0,c.kt)("li",{parentName:"ul"},"Context \u53ef\u9009 - \u9ed8\u8ba4\u5168\u5c40 store \u5355\u4f8b"),(0,c.kt)("li",{parentName:"ul"},"\u53ef\u5728\u5176\u5b83\u6846\u67b6\u4f7f\u7528 - \u4e0d\u4f9d\u8d56 react")))),(0,c.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,c.kt)("div",{parentName:"div",className:"admonition-heading"},(0,c.kt)("h5",{parentName:"div"},(0,c.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,c.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,c.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,c.kt)("div",{parentName:"div",className:"admonition-content"},(0,c.kt)("ul",{parentName:"div"},(0,c.kt)("li",{parentName:"ul"},"useStore \u65f6\u63a8\u8350 memoize \u9009\u62e9\u5668\uff0c\u907f\u514d\u6bcf\u6b21 render \u8ba1\u7b97"),(0,c.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5c06\u9009\u62e9\u5668\u5b9a\u4e49\u5728\u5916\u90e8\u907f\u514d\u52a8\u6001\u521b\u5efa\u4ea7\u751f\u53d8\u5316"),(0,c.kt)("li",{parentName:"ul"},"\u53ef\u914d\u5408 immer \u7b80\u5316\u64cd\u4f5c"),(0,c.kt)("li",{parentName:"ul"},"create \u5305\u542b\u4e09\u4e2a\u53c2\u6570 - set,get,api - \u53ef\u62e6\u622a\u5b9e\u73b0\u4e2d\u95f4\u4ef6\u6a21\u5f0f")))),(0,c.kt)("h2",{id:"\u4e0a\u4e0b\u6587"},"\u4e0a\u4e0b\u6587"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"const { Provider, useStore, useStoreApi } = createContext();\n")),(0,c.kt)("h2",{id:"\u5728\u5916\u90e8\u89e6\u53d1\u72b6\u6001"},"\u5728\u5916\u90e8\u89e6\u53d1\u72b6\u6001"),(0,c.kt)("p",null,"\u56e0\u4e3a react \u662f\u540c\u6b65\u5904\u7406 setState\uff0c\u56e0\u6b64\u5efa\u8bae\u5305\u88c5\u5728 batchedUpdates \u5904\u7406\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"import { unstable_batchedUpdates } from 'react-dom'; // or 'react-native'\n\nconst useStore = create((set) => ({\n  fishes: 0,\n  increaseFishes: () => set((prev) => ({ fishes: prev.fishes + 1 })),\n}));\n\nconst nonReactCallback = () => {\n  unstable_batchedUpdates(() => {\n    useStore.getState().increaseFishes();\n  });\n};\n")),(0,c.kt)("h2",{id:"\u901a\u8fc7\u5f15\u7528\u65b9\u5f0f\u4f18\u5316\u5feb\u901f\u53d8\u5316\u7684\u72b6\u6001"},"\u901a\u8fc7\u5f15\u7528\u65b9\u5f0f\u4f18\u5316\u5feb\u901f\u53d8\u5316\u7684\u72b6\u6001"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u4e0d\u76f4\u63a5 useStore - \u907f\u514d react")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"const useStore = create(set => ({ scratches: 0, ... }))\n\nfunction Component() {\n  // \u521d\u59cb\u72b6\u6001\n  const scratchRef = useRef(useStore.getState().scratches)\n  // \u5c06\u53d8\u5316\u6355\u83b7\u5230\u5f15\u7528 - \u6216\u76f4\u63a5\u8c03\u7528\u5916\u90e8 set\n  useEffect(() => useStore.subscribe(\n    scratches => (scratchRef.current = scratches),\n    state => state.scratches\n  ), [])\n  return\n}\n")))}m.isMDXComponent=!0}}]);