"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[13005],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),m=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=m(r),f=a,d=s["".concat(c,".").concat(f)]||s[f]||p[f]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},5179:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return u},default:function(){return s}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={title:"React Hook Form"},c=void 0,m={unversionedId:"web/react/react-hook-form",id:"web/react/react-hook-form",isDocsHomePage:!1,title:"React Hook Form",description:"- react-hook-form/react-hook-form \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/web/react/react-hook-form.md",sourceDirName:"web/react",slug:"/web/react/react-hook-form",permalink:"/notes/web/react/react-hook-form",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/react/react-hook-form.md",tags:[],version:"current",frontMatter:{title:"React Hook Form"},sidebar:"docs",previous:{title:"react-grid-layout",permalink:"/notes/web/react/react-grid-layout"},next:{title:"React Internal",permalink:"/notes/web/react/react-internal"}},u=[],p={toc:u};function s(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/react-hook-form/react-hook-form"},"react-hook-form/react-hook-form")," \u662f\u4ec0\u4e48\uff1f",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u57fa\u4e8e Hook \u7684\u8f7b\u91cf\u7ea7\u8868\u5355\u7ec4\u4ef6 - 5KB"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://react-hook-form.com/zh/api/"},"\u63a5\u53e3")),(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u901a\u8fc7 ref \u7684\u65b9\u5f0f\u8fdb\u884c\u6ce8\u518c",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u83b7\u53d6 name, type, value"),(0,o.kt)("li",{parentName:"ul"},"\u5728\u8bbe\u7f6e ref \u65f6\u5019\u5c31\u4f1a\u521d\u59cb\u5316\u8fdb\u884c\u6ce8\u518c"),(0,o.kt)("li",{parentName:"ul"},"\u4f1a\u5224\u65ad\u662f\u5426\u4e3a checkbox \u548c radio - \u4f7f\u7528 checked"),(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f html \u5143\u7d20 ref - \u4f1a\u6dfb\u52a0\u4e8b\u4ef6\u76d1\u542c"))),(0,o.kt)("li",{parentName:"ul"},"Controller - \u57fa\u4e8e useController \u5b9e\u73b0\u7684\u81ea\u5b9a\u4e49\u63a7\u4ef6\u5c01\u88c5",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5904\u7406\u6ca1\u6709 ref \u8fdb\u884c\u6ce8\u518c\u7684\u573a\u666f"),(0,o.kt)("li",{parentName:"ul"},"\u6838\u5fc3\u903b\u8f91\u5728 useController"),(0,o.kt)("li",{parentName:"ul"},"Controller \u53ea\u5305\u542b\u57fa\u7840\u6e32\u67d3\u903b\u8f91 - \u6e32\u67d3 as \u6216\u8005\u4f7f\u7528 render \u51fd\u6570\u6e32\u67d3"))),(0,o.kt)("li",{parentName:"ul"},"useController - \u63d0\u4f9b\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u6240\u9700\u7684\u4e0a\u4e0b\u6587",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u63d0\u4f9b onChange, onBlur, name, value, ref,"),(0,o.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u5143\u6570\u636e invalid, isDirty, isTouched")))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"\u80fd\u4f7f\u7528 ref \u5c3d\u91cf\u4f7f\u7528 ref \u6ce8\u518c")))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 mode \u4e3a onSubmit - \u4e5f\u5c31\u662f\u5728\u63d0\u4ea4\u7684\u65f6\u5019\u624d\u4f1a\u6821\u9a8c"),(0,o.kt)("li",{parentName:"ul"},"\u5143\u7d20\u4e0a\u7684 required \u4f1a\u7531\u6d4f\u89c8\u5668\u5904\u7406\uff0c\u800c\u4e0d\u4f1a\u6dfb\u52a0\u5230 rhf \u7684\u89c4\u5219\u91cc")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const MyForm: React.FC<{ onSubmit; defaultValue }> = ({ onSubmit, defaultValue }) => {\n  const formMethods = useForm({ mode: \'onBlur\', defaultValues: defaultValue });\n  const { register, handleSubmit } = formMethods;\n  return (\n    <FormProvider {...formMethods}>\n      <form onSubmit={handleSubmit(onSubmit)}>\n        <input name="name" ref={register} />\n        <input name="age" type="number" ref={register} />\n        <button type="submit">Submit</button>\n      </form>\n    </FormProvider>\n  );\n};\n')))}s.isMDXComponent=!0}}]);