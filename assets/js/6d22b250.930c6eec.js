"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[39442],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,f=s["".concat(u,".").concat(d)]||s[d]||c[d]||i;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},82594:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return s}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=["components"],l={title:"Pulumi"},u=void 0,p={unversionedId:"ops/infra/pulumi",id:"ops/infra/pulumi",isDocsHomePage:!1,title:"Pulumi",description:"- pulumi/pulumi \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/ops/infra/pulumi.md",sourceDirName:"ops/infra",slug:"/ops/infra/pulumi",permalink:"/notes/ops/infra/pulumi",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/infra/pulumi.md",version:"current",frontMatter:{title:"Pulumi"},sidebar:"docs",previous:{title:"Packer",permalink:"/notes/ops/infra/packer"},next:{title:"DNS",permalink:"/notes/ops/network/application/dns"}},m=[{value:"\u72b6\u6001\u540e\u7aef",id:"\u72b6\u6001\u540e\u7aef",children:[]}],c={toc:m};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/pulumi/pulumi"},"pulumi/pulumi")," \u662f\u4ec0\u4e48\uff1f",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"IaC"),(0,i.kt)("li",{parentName:"ul"},"\u76f8\u6bd4 Terraform \u652f\u6301\u63d0\u4f9b\u8bed\u8a00\u5b9a\u4e49 - declarative vs imperative",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hashicorp/terraform-cdk"},"terraform-cdk")," \u5bf9\u5e94 pulumi \u573a\u666f"))),(0,i.kt)("li",{parentName:"ul"},"\u8bed\u8a00\u652f\u6301 JS, TS, Go, Python, .NET - TS \u4e3a\u4e3b\u8981\u4e70\u70b9"),(0,i.kt)("li",{parentName:"ul"},"\u5e73\u53f0\u652f\u6301 Kubernetes, AWS, GCP, Azure, vmware, openstack, DO")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\ud83d\udca1 \u5efa\u8bae\u4f7f\u7528 terraform")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"pulumi \u7684\u72b6\u6001\u662f SaaS first - \u610f\u5473\u7740\u72b6\u6001\u7ba1\u7406\u591a\u5c11\u90fd\u4f1a\u9047\u5230\u81ea\u5df1\u7ba1\u7406\u7684\u60c5\u51b5"),(0,i.kt)("li",{parentName:"ul"},"terraform \u66f4\u6210\u719f"),(0,i.kt)("li",{parentName:"ul"},"terraform \u751f\u6001\u5708\u66f4\u5927 - \u5927\u516c\u53f8\u66f4\u503e\u5411\u4e8e terraform - \u56e0\u4e3a\u66f4\u5c11 vendor lock"),(0,i.kt)("li",{parentName:"ul"},"terraform-cdk \u5bf9\u5e94 pulumi - \u8fd8\u5904\u4e8e\u5f00\u53d1\u9636\u6bb5 - \u4f46\u81f3\u5c11\u5bf9\u6b64\u505a\u51fa\u4e86\u56de\u5e94")))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u72b6\u6001\u7ba1\u7406\u4f9d\u8d56 pulumi \u670d\u52a1")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"brew install pulumi\n\n# pulumi new kubernetes-go\npulumi new kubernetes-typescript\n# \u5e94\u7528\u53d8\u5316\npulumi up\n")),(0,i.kt)("h2",{id:"\u72b6\u6001\u540e\u7aef"},"\u72b6\u6001\u540e\u7aef"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pulumi Self Host - \u4f01\u4e1a\u7248"),(0,i.kt)("li",{parentName:"ul"},"\u672c\u5730\u6587\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"S3, Azure Blob Storage, Google Cloud Storage")))}s.isMDXComponent=!0}}]);