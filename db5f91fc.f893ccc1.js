(window.webpackJsonp=window.webpackJsonp||[]).push([[932],{1005:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(8),a=(r(0),r(1151)),c={title:"kubectl FAQ"},u={unversionedId:"devops/kubernetes/kubectl-faq",id:"devops/kubernetes/kubectl-faq",isDocsHomePage:!1,title:"kubectl FAQ",description:"\u7aef\u53e3\u8f6c\u53d1\u8d85\u65f6/\u7aef\u53e3\u8f6c\u53d1\u91cd\u8054",source:"@site/notes/devops/kubernetes/kubectl-faq.md",slug:"/devops/kubernetes/kubectl-faq",permalink:"/notes/devops/kubernetes/kubectl-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/kubectl-faq.md",version:"current",sidebar:"docs",previous:{title:"K8S \u4f7f\u7528\u7ecf\u9a8c",permalink:"/notes/devops/kubernetes/k3s-story"},next:{title:"Kubernetes \u5f00\u53d1",permalink:"/notes/devops/kubernetes/dev/README"}},p=[{value:"\u7aef\u53e3\u8f6c\u53d1\u8d85\u65f6/\u7aef\u53e3\u8f6c\u53d1\u91cd\u8054",id:"\u7aef\u53e3\u8f6c\u53d1\u8d85\u65f6\u7aef\u53e3\u8f6c\u53d1\u91cd\u8054",children:[]}],l={toc:p};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u7aef\u53e3\u8f6c\u53d1\u8d85\u65f6\u7aef\u53e3\u8f6c\u53d1\u91cd\u8054"},"\u7aef\u53e3\u8f6c\u53d1\u8d85\u65f6/\u7aef\u53e3\u8f6c\u53d1\u91cd\u8054"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u9ed8\u8ba4 5\u5206\u949f \u8d85\u65f6")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# \u5173\u95ed\u8d85\u65f6\nkubectl port-forward -n postgres-operator svc/postgres-operator-ui 8080:80 --request-timeout 0\n")),Object(a.b)("p",null,"Shell \u5faa\u73af"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"while :;do kubectl port-forward -n postgres-operator svc/postgres-operator-ui 8080:80; done\n")),Object(a.b)("p",null,"Windows BAT \u5faa\u73af"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bat"},":1\noc port-forward PODNAME 8003:8080\ngoto 1\n")))}s.isMDXComponent=!0},1151:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},i=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),i=s(r),f=n,d=i["".concat(c,".").concat(f)]||i[f]||b[f]||a;return r?o.a.createElement(d,u(u({ref:t},l),{},{components:r})):o.a.createElement(d,u({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=f;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);