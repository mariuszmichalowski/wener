(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{1152:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=b(r),m=n,d=u["".concat(c,".").concat(m)]||u[m]||s[m]||i;return r?a.a.createElement(d,o(o({ref:t},l),{},{components:r})):a.a.createElement(d,o({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},314:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(8),i=(r(0),r(1152)),c={title:"Dapr Version"},o={unversionedId:"dev/cloud/dapr-version",id:"dev/cloud/dapr-version",isDocsHomePage:!1,title:"Dapr Version",description:"\u5173\u6ce8\u7279\u6027",source:"@site/notes/dev/cloud/dapr-version.md",slug:"/dev/cloud/dapr-version",permalink:"/notes/dev/cloud/dapr-version",editUrl:"https://github.com/wenerme/wener/edit/master/notes/dev/cloud/dapr-version.md",version:"current",sidebar:"docs",previous:{title:"Dapr Kubernetes",permalink:"/notes/dev/cloud/dapr-k8s"},next:{title:"Dapr",permalink:"/notes/dev/cloud/dapr"}},p=[{value:"1.2 - 2021-05-27",id:"12---2021-05-27",children:[]}],l={toc:p};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u5173\u6ce8\u7279\u6027")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/dapr/dapr/issues/2988"},"dapr/dapr#2988"),"\ndapr \u652f\u6301\u914d\u7f6e\u63a5\u53e3"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/dapr/dapr/issues/1339"},"dapr/dapr#1339"),"\n\u72b6\u6001\u67e5\u8be2"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/dapr/dapr/issues/2836"},"dapr/dapr#2836"),"\nTrace \u652f\u6301 OpenTelemetry"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/dapr/go-sdk/issues/21"},"dapr/go-sdk#21"),"\ngolang \u652f\u6301 actor")),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u57fa\u672c\u7684 Name resolve",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u56e0\u6b64 \u4e0d\u652f\u6301 VM \u573a\u666f"))),Object(i.b)("li",{parentName:"ul"},"sidecar \u548c\u5e94\u7528\u5fc5\u987b\u7ed1\u5b9a\u8fd0\u884c - ",Object(i.b)("a",{parentName:"li",href:"https://github.com/dapr/dapr/issues/2864"},"dapr/dapr#2864"))))),Object(i.b)("h2",{id:"12---2021-05-27"},"1.2 - 2021-05-27"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Pub/Sub without ",Object(i.b)("a",{parentName:"p",href:"https://github.com/cloudevents/spec"},"CloudEvents"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Sidecar API ACL")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5141\u8bb8\u5f00\u542f\u9884\u89c8\u7279\u6027"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Actor Re-entrancy",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4e00\u4e2a Actor \u540c\u65f6\u53ea\u80fd\u5904\u7406\u4e00\u4e2a\u8bf7\u6c42 - Lock"),Object(i.b)("li",{parentName:"ul"},"\u91cd\u5165\u4f7f\u5f97\u5728\u5904\u7406\u8bf7\u6c42\u65f6\u80fd\u518d\u88ab\u540c\u4e00\u4e2a\u4e0a\u4e0b\u6587\u8bf7\u6c42"),Object(i.b)("li",{parentName:"ul"},"\u8bf7\u6c42\u5934\u6dfb\u52a0 ",Object(i.b)("inlineCode",{parentName:"li"},"Dapr-Reentrancy-Id")))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Consul \u4f5c\u4e3a DNS \u7ec4\u4ef6")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Name resolution components is first class component")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u65b0\u7ec4\u4ef6"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u9489\u9489 Webhook \u7ed1\u5b9a"),Object(i.b)("li",{parentName:"ul"},"Zeebe \u5de5\u4f5c\u6d41\u5f15\u64ce"),Object(i.b)("li",{parentName:"ul"},"\u963f\u91cc Sentinel \u4e2d\u95f4\u4ef6"),Object(i.b)("li",{parentName:"ul"},"Consule name resolution \u7ec4\u4ef6")),Object(i.b)("h2",{parentName:"li",id:"11---2021-04-02"},"1.1 - 2021-04-02"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Sidecar env var"),Object(i.b)("li",{parentName:"ul"},"Local storage \u7ed1\u5b9a")),Object(i.b)("h2",{parentName:"li",id:"10---2021-02-17"},"1.0 - 2021-02-17"))))}b.isMDXComponent=!0}}]);