(window.webpackJsonp=window.webpackJsonp||[]).push([[463],{1166:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),s=r,d=m["".concat(o,".").concat(s)]||m[s]||b[s]||i;return n?a.a.createElement(d,c(c({ref:t},u),{},{components:n})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},537:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),i=(n(0),n(1166)),o={title:"Pulumi"},c={unversionedId:"ops/infra/pulumi",id:"ops/infra/pulumi",isDocsHomePage:!1,title:"Pulumi",description:"- pulumi/pulumi \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/ops/infra/pulumi.md",slug:"/ops/infra/pulumi",permalink:"/notes/ops/infra/pulumi",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/infra/pulumi.md",version:"current",sidebar:"docs",previous:{title:"Packer",permalink:"/notes/ops/infra/packer"},next:{title:"cf-terraforming",permalink:"/notes/ops/infra/terraform-cf"}},l=[{value:"\u72b6\u6001\u540e\u7aef",id:"\u72b6\u6001\u540e\u7aef",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/pulumi/pulumi"},"pulumi/pulumi")," \u662f\u4ec0\u4e48\uff1f",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"IaC"),Object(i.b)("li",{parentName:"ul"},"\u76f8\u6bd4 Terraform \u652f\u6301\u63d0\u4f9b\u8bed\u8a00\u5b9a\u4e49 - declarative vs imperative",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/hashicorp/terraform-cdk"},"terraform-cdk")," \u5bf9\u5e94 pulumi \u573a\u666f"))),Object(i.b)("li",{parentName:"ul"},"\u8bed\u8a00\u652f\u6301 JS, TS, Go, Python, .NET - TS \u4e3a\u4e3b\u8981\u4e70\u70b9"),Object(i.b)("li",{parentName:"ul"},"\u5e73\u53f0\u652f\u6301 Kubernetes, AWS, GCP, Azure, vmware, openstack, DO")))),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\ud83d\udca1 \u5efa\u8bae\u4f7f\u7528 terraform")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"pulumi \u7684\u72b6\u6001\u662f SaaS first - \u610f\u5473\u7740\u72b6\u6001\u7ba1\u7406\u591a\u5c11\u90fd\u4f1a\u9047\u5230\u81ea\u5df1\u7ba1\u7406\u7684\u60c5\u51b5"),Object(i.b)("li",{parentName:"ul"},"terraform \u66f4\u6210\u719f"),Object(i.b)("li",{parentName:"ul"},"terraform \u751f\u6001\u5708\u66f4\u5927 - \u5927\u516c\u53f8\u66f4\u503e\u5411\u4e8e terraform - \u56e0\u4e3a\u66f4\u5c11 vendor lock"),Object(i.b)("li",{parentName:"ul"},"terraform-cdk \u5bf9\u5e94 pulumi - \u8fd8\u5904\u4e8e\u5f00\u53d1\u9636\u6bb5 - \u4f46\u81f3\u5c11\u5bf9\u6b64\u505a\u51fa\u4e86\u56de\u5e94")))),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u72b6\u6001\u7ba1\u7406\u4f9d\u8d56 pulumi \u670d\u52a1")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"brew install pulumi\n\n# pulumi new kubernetes-go\npulumi new kubernetes-typescript\n# \u5e94\u7528\u53d8\u5316\npulumi up\n")),Object(i.b)("h2",{id:"\u72b6\u6001\u540e\u7aef"},"\u72b6\u6001\u540e\u7aef"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Pulumi Self Host - \u4f01\u4e1a\u7248"),Object(i.b)("li",{parentName:"ul"},"\u672c\u5730\u6587\u4ef6"),Object(i.b)("li",{parentName:"ul"},"S3, Azure Blob Storage, Google Cloud Storage")))}p.isMDXComponent=!0}}]);