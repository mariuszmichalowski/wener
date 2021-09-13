"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[51188],{3905:function(e,r,n){n.d(r,{Zo:function(){return m},kt:function(){return u}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),s=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},m=function(e){var r=s(e.components);return t.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=s(n),u=o,_=p["".concat(l,".").concat(u)]||p[u]||f[u]||a;return n?t.createElement(_,c(c({ref:r},m),{},{components:n})):t.createElement(_,c({ref:r},m))}));function u(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=p;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},92866:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return m},default:function(){return p}});var t=n(87462),o=n(63366),a=(n(67294),n(3905)),c=["components"],i={id:"terraform-cookbook",title:"Terraform \u5e38\u7528\u811a\u672c"},l=void 0,s={unversionedId:"ops/infra/terraform/terraform-cookbook",id:"ops/infra/terraform/terraform-cookbook",isDocsHomePage:!1,title:"Terraform \u5e38\u7528\u811a\u672c",description:"acme dns challenge",source:"@site/notes/ops/infra/terraform/terraform-cookbook.md",sourceDirName:"ops/infra/terraform",slug:"/ops/infra/terraform/terraform-cookbook",permalink:"/notes/ops/infra/terraform/terraform-cookbook",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/infra/terraform/terraform-cookbook.md",tags:[],version:"current",frontMatter:{id:"terraform-cookbook",title:"Terraform \u5e38\u7528\u811a\u672c"},sidebar:"docs",previous:{title:"cf-terraforming",permalink:"/notes/ops/infra/terraform/terraform-cf"},next:{title:"Terraform K8S",permalink:"/notes/ops/infra/terraform/terraform-k8s"}},m=[{value:"acme dns challenge",id:"acme-dns-challenge",children:[]},{value:"\u6a21\u677f\u6e32\u67d3\u89e6\u53d1\u547d\u4ee4",id:"\u6a21\u677f\u6e32\u67d3\u89e6\u53d1\u547d\u4ee4",children:[]}],f={toc:m};function p(e){var r=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"acme-dns-challenge"},"acme dns challenge"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hcl"},'variable "alicloud_access_key"{type=string}\nvariable "alicloud_secret_key"{type=string}\n\nprovider "acme" {\n  server_url = "https://acme-v02.api.letsencrypt.org/directory"\n}\n\nresource "tls_private_key" "any_wener_me_private_key" {\n  algorithm = "RSA"\n}\n\nresource "acme_registration" "any_wener_me_reg" {\n  account_key_pem = "${tls_private_key.any_wener_me_private_key.private_key_pem}"\n  email_address   = "admin@wener.me"\n}\n\nresource "acme_certificate" "any_wener_me" {\n  account_key_pem           = "${acme_registration.any_wener_me_reg.account_key_pem}"\n  common_name               = "wener.me"\n  subject_alternative_names = ["*.wener.me"]\n\n  dns_challenge {\n    provider = "alidns"\n\n    config = {\n      ALICLOUD_ACCESS_KEY    = var.alicloud_access_key\n      ALICLOUD_SECRET_KEY    = var.alicloud_secret_key\n    }\n\n    # pdns\n    # PDNS_API_KEY\n    # PDNS_API_URL\n\n    # rfc2136\n    # RFC2136_NAMESERVER - "host" or "host:port".\n    # RFC2136_TSIG_ALGORITHM - \u652f\u6301\u7b97\u6cd5 https://github.com/miekg/dns/blob/master/tsig.go#L18 - \u4e0d\u8bbe\u7f6e TSIG \u76f8\u5173\u53d8\u91cf\u5219\u7981\u7528\n    # RFC2136_TSIG_KEY\n    # RFC2136_TSIG_SECRET\n  }\n}\n\n# write cert and key\nresource "local_file" "any_wener_me_crt" {\n    sensitive_content     = acme_certificate.any_wener_me.certificate_pem\n    filename = "${path.module}/wener.me.crt"\n    file_permission = 0600\n}\nresource "local_file" "any_wener_me_key" {\n    sensitive_content     = acme_certificate.any_wener_me.private_key_pem\n    filename = "${path.module}/wener.me.key"\n    file_permission = 0600\n}\n')),(0,a.kt)("h2",{id:"\u6a21\u677f\u6e32\u67d3\u89e6\u53d1\u547d\u4ee4"},"\u6a21\u677f\u6e32\u67d3\u89e6\u53d1\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hcl"},'# \u6e32\u67d3\u6a21\u677f\ndata "template_file" "cluster-manifesto" {\n  template = "${file("${path.module}/cluster.yaml.tpl")}"\n  vars {\n    # ....\n  }\n}\n\n# \u5199\u5165\u6587\u4ef6\nresource "local_file" "saved-cluster-manifesto" {\n  content = "${data.template_file.cluster-manifesto.rendered}"\n  filename = "${local.cluster_manifesto_path}"\n}\n\n# \u4f7f\u7528\u6587\u4ef6\u8fdb\u884c\u64cd\u4f5c\nresource "null_resource" "cluster-upload" {\n  triggers {\n    file = "${data.template_file.cluster-manifesto.rendered}"\n  }\n\n  provisioner "local-exec" {\n    command = "kops -v 10 replace -f ${local.cluster_manifesto_path}\n  }\n}\n')))}p.isMDXComponent=!0}}]);