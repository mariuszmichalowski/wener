(window.webpackJsonp=window.webpackJsonp||[]).push([[510],{1151:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=b(r),s=n,f=m["".concat(c,".").concat(s)]||m[s]||p[s]||o;return r?a.a.createElement(f,i(i({ref:t},u),{},{components:r})):a.a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},584:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(8),o=(r(0),r(1151)),c={title:"React Hook Form"},i={unversionedId:"web/react/react-hook-form",id:"web/react/react-hook-form",isDocsHomePage:!1,title:"React Hook Form",description:"- \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/web/react/react-hook-form.md",slug:"/web/react/react-hook-form",permalink:"/notes/web/react/react-hook-form",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/react/react-hook-form.md",version:"current",sidebar:"docs",previous:{title:"React FAQ",permalink:"/notes/web/react/react-faq"},next:{title:"React Internal",permalink:"/notes/web/react/react-internal"}},l=[],u={toc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u57fa\u4e8e Hook \u7684\u8f7b\u91cf\u7ea7\u8868\u5355\u7ec4\u4ef6 - 5KB"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://react-hook-form.com/zh/api/"},"\u63a5\u53e3")),Object(o.b)("li",{parentName:"ul"},"\u6ce8\u610f \u26a0\ufe0f",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u9ed8\u8ba4 mode \u4e3a onSubmit - \u4e5f\u5c31\u662f\u5728\u63d0\u4ea4\u7684\u65f6\u5019\u624d\u4f1a\u6821\u9a8c"),Object(o.b)("li",{parentName:"ul"},"\u5143\u7d20\u4e0a\u7684 required \u4f1a\u7531\u6d4f\u89c8\u5668\u5904\u7406\uff0c\u800c\u4e0d\u4f1a\u6dfb\u52a0\u5230 rhf \u7684\u89c4\u5219\u91cc"))),Object(o.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u901a\u8fc7 ref \u7684\u65b9\u5f0f\u8fdb\u884c\u6ce8\u518c",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u83b7\u53d6 name, type, value"),Object(o.b)("li",{parentName:"ul"},"\u5728\u8bbe\u7f6e ref \u65f6\u5019\u5c31\u4f1a\u521d\u59cb\u5316\u8fdb\u884c\u6ce8\u518c"),Object(o.b)("li",{parentName:"ul"},"\u4f1a\u5224\u65ad\u662f\u5426\u4e3a checkbox \u548c radio - \u4f7f\u7528 checked"),Object(o.b)("li",{parentName:"ul"},"\u5982\u679c\u662f html \u5143\u7d20 ref - \u4f1a\u6dfb\u52a0\u4e8b\u4ef6\u76d1\u542c"))),Object(o.b)("li",{parentName:"ul"},"Controller - \u57fa\u4e8e useController \u5b9e\u73b0\u7684\u81ea\u5b9a\u4e49\u63a7\u4ef6\u5c01\u88c5",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u5904\u7406\u6ca1\u6709 ref \u8fdb\u884c\u6ce8\u518c\u7684\u573a\u666f"),Object(o.b)("li",{parentName:"ul"},"\u6838\u5fc3\u903b\u8f91\u5728 useController"),Object(o.b)("li",{parentName:"ul"},"Controller \u53ea\u5305\u542b\u57fa\u7840\u6e32\u67d3\u903b\u8f91 - \u6e32\u67d3 as \u6216\u8005\u4f7f\u7528 render \u51fd\u6570\u6e32\u67d3"))),Object(o.b)("li",{parentName:"ul"},"useController - \u63d0\u4f9b\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u6240\u9700\u7684\u4e0a\u4e0b\u6587",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u63d0\u4f9b onChange, onBlur, name, value, ref,"),Object(o.b)("li",{parentName:"ul"},"\u63d0\u4f9b\u5143\u6570\u636e invalid, isDirty, isTouched")))),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"\u80fd\u4f7f\u7528 ref \u5c3d\u91cf\u4f7f\u7528 ref \u6ce8\u518c")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},'const MyForm: React.FC<{ onSubmit; defaultValue }> = ({ onSubmit, defaultValue }) => {\n  const formMethods = useForm({ mode: \'onBlur\', defaultValues: defaultValue });\n  const { register, handleSubmit } = formMethods;\n  return (\n    <FormProvider {...formMethods}>\n      <form onSubmit={handleSubmit(onSubmit)}>\n        <input name="name" ref={register} />\n        <input name="age" type="number" ref={register} />\n        <button type="submit">Submit</button>\n      </form>\n    </FormProvider>\n  );\n};\n')))}b.isMDXComponent=!0}}]);