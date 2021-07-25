(window.webpackJsonp=window.webpackJsonp||[]).push([[770],{1166:function(e,r,n){"use strict";n.d(r,"a",(function(){return u})),n.d(r,"b",(function(){return b}));var t=n(0),a=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var r=a.a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},u=function(e){var r=p(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=t,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?a.a.createElement(b,c(c({ref:r},s),{},{components:n})):a.a.createElement(b,c({ref:r},s))}));function b(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},843:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return i})),n.d(r,"metadata",(function(){return c})),n.d(r,"toc",(function(){return l})),n.d(r,"default",(function(){return p}));var t=n(3),a=n(8),o=(n(0),n(1166)),i={id:"terraform-provider",title:"Terraform Provider"},c={unversionedId:"ops/infra/terraform-provider",id:"ops/infra/terraform-provider",isDocsHomePage:!1,title:"Terraform Provider",description:"Tips",source:"@site/notes/ops/infra/terraform-provider.md",slug:"/ops/infra/terraform-provider",permalink:"/notes/ops/infra/terraform-provider",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/infra/terraform-provider.md",version:"current",sidebar:"docs",previous:{title:"Terraform K8S",permalink:"/notes/ops/infra/terraform-k8s"},next:{title:"Terraform",permalink:"/notes/ops/infra/terraform"}},l=[{value:"Tips",id:"tips",children:[]},{value:"keycloak",id:"keycloak",children:[]},{value:"null",id:"null",children:[]}],s={toc:l};function p(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},s,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"tips"},"Tips"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\b\u5b98\u65b9 Provider \u53d1\u5e03\u5730\u5740 ",Object(o.b)("a",{parentName:"li",href:"https://releases.hashicorp.com/"},"releases.hashicorp.com")),Object(o.b)("li",{parentName:"ul"},"\u672c\u5730\u5b89\u88c5\u76ee\u5f55 ",Object(o.b)("inlineCode",{parentName:"li"},"~/.terraform.d/plugins")),Object(o.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.terraform.io/docs/extend/writing-custom-providers.html"},"Writing Custom Providers"))))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# \u624b\u52a8\u4e0b\u8f7d\u5b89\u88c5\nos=darwin\narch=amd64\nprivder=gitlab\nver=2.10.0\ncurl -OLC- https://releases.hashicorp.com/terraform-provider-$provider/$ver/terraform-provider-${provider}_${ver}_${os}_${arch}.zip\nunzip terraform-provider-${provider}-*\nmv terraform-provider-${provider}_v* ~/.terraform.d/plugins/${os}_${arch}/terraform-provider-${provider}\n")),Object(o.b)("h2",{id:"keycloak"},"keycloak"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/mrparkers/terraform-provider-keycloak"},"mrparkers/terraform-provider-keycloak"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"")),Object(o.b)("h2",{id:"null"},"null"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u7279\u6b8a\u573a\u666f\u4f7f\u7528\uff0c\u201c\u4e0d\u505a\u201d\u4efb\u4f55\u4e8b\u60c5")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-hcl"},'resource "aws_instance" "cluster" {\n  count = 3\n}\n\nresource "null_resource" "cluster" {\n  # \u89e6\u53d1 - \u5f53\u53d1\u9001\u53d8\u5316\uff0c\u8be5\u8d44\u6e90\u4f1a\u88ab provisioner \u66ff\u4ee3\n  triggers = {\n    cluster_instance_ids = "${join(",", aws_instance.cluster.*.id)}"\n  }\n\n  # \u94fe\u63a5\u8fdc\u7a0b\n  connection {\n    host = "${element(aws_instance.cluster.*.public_ip, 0)}"\n  }\n\n  # \u6267\u884c\u672c\u5730\u547d\u4ee4\n  provisioner "local-exec" {\n    command = "bootstrap-cluster.sh ${join(" ", aws_instance.cluster.*.private_ip)}"\n  }\n}\n\n# \u6536\u96c6\u4e2d\u95f4\u503c\uff0c\u4ee5\u4fbf\u4e8e\u540e\u9762\u914d\u7f6e\u4f7f\u7528\ndata "null_data_source" "values" {\n  inputs = {\n    all_server_ids = "${concat(aws_instance.green.*.id, aws_instance.blue.*.id)}"\n    all_server_ips = "${concat(aws_instance.green.*.private_ip, aws_instance.blue.*.private_ip)}"\n  }\n\n  # \u6d4b\u8bd5\u4f7f\u7528 - \u8be5\u8d44\u6e90\u4f1a\u8fd4\u56de\u8fd9\u4e2a\u503c\n  has_computed_default = "default"\n}\n\nresource "aws_elb" "main" {\n  instances = "${data.null_data_source.values.outputs["all_server_ids"]}"\n}\n\noutput "all_server_ids" {\n  value = "${data.null_data_source.values.outputs["all_server_ids"]}"\n}\n\noutput "all_server_ips" {\n  value = "${data.null_data_source.values.outputs["all_server_ips"]}"\n}\n')))}p.isMDXComponent=!0}}]);