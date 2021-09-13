"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[47151],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,b=f["".concat(u,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(b,c(c({ref:t},p),{},{components:r})):n.createElement(b,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},388:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c=["components"],i={title:"React Route"},u=void 0,l={unversionedId:"web/react/react-router",id:"web/react/react-router",isDocsHomePage:!1,title:"React Route",description:"`bash",source:"@site/notes/web/react/react-router.md",sourceDirName:"web/react",slug:"/web/react/react-router",permalink:"/notes/web/react/react-router",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/react/react-router.md",tags:[],version:"current",frontMatter:{title:"React Route"},sidebar:"docs",previous:{title:"React Query",permalink:"/notes/web/react/react-query"},next:{title:"react-table",permalink:"/notes/web/react/react-table"}},p=[{value:"Switch vs Route",id:"switch-vs-route",children:[]}],s={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-router-dom\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from \'react\';\nimport { HashRouter as Router, Link, Route, Switch } from \'react-router-dom\';\n\nexport const MainRoute: React.FC = () => {\n  return (\n    <Router>\n      <nav>\n        <ul>\n          <li>\n            <Link to="/">Home</Link>\n          </li>\n          <li>\n            <Link to="/about">About</Link>\n          </li>\n          <li>\n            <Link to="/users">Users</Link>\n          </li>\n        </ul>\n      </nav>\n\n      {/* Switch \u6e32\u67d3\u5339\u914d\u7684\u7b2c\u4e00\u4e2a */}\n      <Switch>\n        <Route path="/about">\n          <About />\n        </Route>\n        <Route path="/users">\n          <Users />\n        </Route>\n        <Route path="/">\n          <Home />\n        </Route>\n      </Switch>\n    </Router>\n  );\n};\n\n')),(0,a.kt)("h1",{id:"faq"},"FAQ"),(0,a.kt)("h2",{id:"switch-vs-route"},"Switch vs Route"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<Switch>")," \u53ea\u6e32\u67d3\u4e00\u4e2a\u8def\u7531. \u800c ",(0,a.kt)("inlineCode",{parentName:"p"},"<Route>")," \u4f1a\u6e32\u67d3\u6240\u6709\u5339\u914d\u7684\u8def\u7531\u3002"))}f.isMDXComponent=!0}}]);