"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[22050],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(r),f=a,k=c["".concat(p,".").concat(f)]||c[f]||s[f]||i;return r?n.createElement(k,l(l({ref:t},m),{},{components:r})):n.createElement(k,l({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},75709:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return m},default:function(){return c}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),l=["components"],o={id:"infra",title:"\u57fa\u7840\u8bbe\u65bd"},p=void 0,u={unversionedId:"ops/infra/infra",id:"ops/infra/infra",isDocsHomePage:!1,title:"\u57fa\u7840\u8bbe\u65bd",description:"Tips",source:"@site/notes/ops/infra/README.md",sourceDirName:"ops/infra",slug:"/ops/infra/infra",permalink:"/notes/ops/infra/infra",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/infra/README.md",version:"current",frontMatter:{id:"infra",title:"\u57fa\u7840\u8bbe\u65bd"},sidebar:"docs",previous:{title:"VirtualBox",permalink:"/notes/ops/admin/vbox"},next:{title:"Ansible AWX",permalink:"/notes/ops/infra/ansible-awx"}},m=[{value:"Tips",id:"tips",children:[]},{value:"Terraform vs Ansible",id:"terraform-vs-ansible",children:[]}],s={toc:m};function c(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u573a\u666f\u9886\u57df",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u90e8\u7f72"),(0,i.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u7ba1\u7406"),(0,i.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u72b6\u6001\u7ba1\u7406"),(0,i.kt)("li",{parentName:"ul"},"\u4e91\u5e73\u53f0\u57fa\u7840\u8bbe\u65bd\u8d44\u6e90\u7ba1\u7406 - Terraform"))),(0,i.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u5f0f",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u671f\u671b\u72b6\u6001"),(0,i.kt)("li",{parentName:"ul"},"Agent \u8d1f\u8d23\u7ef4\u62a4\u72b6\u6001"),(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7 diff \u72b6\u6001\u6765\u51b3\u5b9a\u8981\u505a\u4ec0\u4e48\u64cd\u4f5c"))),(0,i.kt)("li",{parentName:"ul"},"\u8fc7\u7a0b\u5f0f",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6267\u884c\u547d\u4ee4\uff0c\u63a8\u9001\u811a\u672c"))),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Infrastructure_as_code#Tools"},"Infrastructure as code \u5de5\u5177")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Comparison_of_open-source_configuration_management_software"},"Comparison of open-source configuration management software")))),(0,i.kt)("li",{parentName:"ul"},"\u914d\u7f6e - \u5e42\u7b49",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u9700\u8981\u66f4\u65b0"))),(0,i.kt)("li",{parentName:"ul"},"\u5f00\u901a\u670d\u52a1 - Provisioning - \u901a\u5e38\u662f\u4e00\u6b21\u6027\u64cd\u4f5c")),(0,i.kt)("h1",{id:"faq"},"FAQ"),(0,i.kt)("h2",{id:"terraform-vs-ansible"},"Terraform vs Ansible"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u90fd\u662f IaC - Infrastructure as code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Ansible"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u64c5\u957f\u90e8\u7f72 - \u56e0\u4e3a\u6307\u4ee4\u5f0f\uff0c\u4e00\u6b21\u6027\u6267\u884c\uff0c\u65e0\u72b6\u6001"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Terraform"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u64c5\u957f\u8fd0\u7ef4 - \u5b9a\u4e49\u72b6\u6001\u8fdb\u884c\u7ef4\u62a4\uff0c\u901a\u8fc7 GitOps \u7ef4\u62a4\u8d44\u6e90")))),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Terraform",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u64cd\u4f5c ",(0,i.kt)("strong",{parentName:"li"},"\u63a5\u53e3")),(0,i.kt)("li",{parentName:"ul"},"\u53ea\u80fd\u662f Declarative - \u5b9a\u4e49\u5f0f"),(0,i.kt)("li",{parentName:"ul"},"\u6709\u72b6\u6001 - \u901a\u8fc7\u72b6\u6001 diff \u6765\u51b3\u5b9a\u8981\u505a\u4ec0\u4e48"),(0,i.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u6307\u5b9a\u6761\u4ef6\u3001\u8fc7\u6ee4 - \u8fbe\u5230\u5168\u91cf\u72b6\u6001"))),(0,i.kt)("li",{parentName:"ul"},"Ansible",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,i.kt)("strong",{parentName:"li"},"\u4e3b\u673a")," \u6267\u884c"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u662f Declarative \u548c Imperative - \u5b9a\u4e49\u5f0f\u6216\u8fc7\u7a0b\u5f0f"),(0,i.kt)("li",{parentName:"ul"},"\u65e0\u72b6\u6001\uff0c\u5728\u6267\u884c\u65f6\u5224\u65ad\u662f\u5426\u5df2\u7ecf\u8fbe\u5230\u671f\u671b\u72b6\u6001\u518d\u51b3\u5b9a\u662f\u5426\u6267\u884c"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u6307\u5b9a\u5404\u79cd\u8bed\u4e49 - \u811a\u672c"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u7406\u89e3\u6210\u662f Terraform \u7684\u8d85\u96c6\uff0c\u4f46\u5728 Terraform \u7684\u9886\u57df\u8fd8\u662f Terraform \u505a\u7684\u66f4\u597d"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u64cd\u4f5c Terraform\uff0c\u6700\u597d\u914d\u5408\u4f7f\u7528"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u7528\u4e8e\u751f\u6210 Terraform \u811a\u672c")))))}c.isMDXComponent=!0}}]);