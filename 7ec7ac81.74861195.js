(window.webpackJsonp=window.webpackJsonp||[]).push([[540],{1169:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var a=r(0),n=r.n(a);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=n.a.createContext({}),p=function(e){var t=n.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=p(r),s=a,O=u["".concat(b,".").concat(s)]||u[s]||m[s]||l;return r?n.a.createElement(O,i(i({ref:t},o),{},{components:r})):n.a.createElement(O,i({ref:t},o))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,b=new Array(l);b[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var o=2;o<l;o++)b[o]=r[o];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},614:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(8),l=(r(0),r(1169)),b={id:"harbor",title:"Harbor"},i={unversionedId:"devops/kubernetes/app/harbor",id:"devops/kubernetes/app/harbor",isDocsHomePage:!1,title:"Harbor",description:"Habor",source:"@site/notes/devops/kubernetes/app/harbor.md",slug:"/devops/kubernetes/app/harbor",permalink:"/notes/devops/kubernetes/app/harbor",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/app/harbor.md",version:"current",sidebar:"docs",previous:{title:"FluxCD",permalink:"/notes/devops/kubernetes/app/flux"},next:{title:"HELM \u5305\u7ba1\u7406\u5668",permalink:"/notes/devops/kubernetes/app/helm"}},c=[{value:"Tips",id:"tips",children:[]},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[]},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]},{value:"\u7ec4\u4ef6",id:"\u7ec4\u4ef6",children:[]},{value:"Helm",id:"helm",children:[]}],o={toc:c};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"habor"},"Habor"),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/goharbor/harbor-helm"},"goharbor/harbor-helm")," - trusted cloud native repository for Kubernetes"),Object(l.b)("li",{parentName:"ul"},"\u5c5e\u4e8e CI \u548c CD \u4e4b\u95f4\uff0cNexus \u504f\u5411\u5f00\u53d1\uff0cHarbor \u504f\u5411\u751f\u4ea7\u90e8\u7f72\u4ea4\u4ed8"),Object(l.b)("li",{parentName:"ul"},"\u7279\u6027",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"trivy \u5b89\u5168\u5206\u6790"),Object(l.b)("li",{parentName:"ul"},"\u8d26\u53f7\u7ba1\u7406\u3001\u591a\u79df\u6237\u3001RBAC"),Object(l.b)("li",{parentName:"ul"},"\u955c\u50cf\u526f\u672c\u3001Harbor \u4e4b\u95f4\u526f\u672c\u590d\u5236"),Object(l.b)("li",{parentName:"ul"},"WebUI"))),Object(l.b)("li",{parentName:"ul"},"\u914d\u7f6e",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f1a\u90e8\u7f72 ingress"),Object(l.b)("li",{parentName:"ul"},"\u8981\u6307\u5b9a externalURL \u786e\u4fdd\u751f\u6210\u5730\u5740\u6b63\u786e"),Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5173\u95ed\u5185\u90e8 TLS - internalTLS"),Object(l.b)("li",{parentName:"ul"},"\u5b58\u50a8",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"registry - 5Gi"),Object(l.b)("li",{parentName:"ul"},"chartmuseum - 5Gi"),Object(l.b)("li",{parentName:"ul"},"jobservice - 1Gi"),Object(l.b)("li",{parentName:"ul"},"database - 1Gi - \u53ef\u7528\u5916\u90e8",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5982\u679c\u4f7f\u7528\u5185\u90e8\u6570\u636e\u5e93\u8bb0\u5f97\u4fee\u6539\u8d26\u53f7\u5bc6\u7801"))),Object(l.b)("li",{parentName:"ul"},"redis - 1Gi - \u53ef\u7528\u5916\u90e8"),Object(l.b)("li",{parentName:"ul"},"trivy - 2Gi"),Object(l.b)("li",{parentName:"ul"},"imageChartStorage",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 azure,gcs,s3,swift,oss"))))))),Object(l.b)("li",{parentName:"ul"},"\u7aef\u53e3",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"443"),Object(l.b)("li",{parentName:"ul"},"80"),Object(l.b)("li",{parentName:"ul"},"4443",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Notary - Docker Content Trust"))))),Object(l.b)("li",{parentName:"ul"},"\u6587\u6863",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://goharbor.io/docs/2.2.0/install-config/harbor-compatibility-list/"},"Harbor Compatibility List"))))),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Resource"),Object(l.b)("th",{parentName:"tr",align:null},"Minimum"),Object(l.b)("th",{parentName:"tr",align:null},"Recommended"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"CPU"),Object(l.b)("td",{parentName:"tr",align:null},"2 CPU"),Object(l.b)("td",{parentName:"tr",align:null},"4 CPU")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Mem"),Object(l.b)("td",{parentName:"tr",align:null},"4 GB"),Object(l.b)("td",{parentName:"tr",align:null},"8 GB")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Disk"),Object(l.b)("td",{parentName:"tr",align:null},"40 GB"),Object(l.b)("td",{parentName:"tr",align:null},"160 GB")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"helm repo add harbor https://helm.goharbor.io\n")),Object(l.b)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"docker \u5b89\u88c5\u8fc7\u7a0b\u4f1a\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"li"},"goharbor/prepare")," \u8fdb\u884c\u6784\u5efa\u9700\u8981\u7684 docker compose")),Object(l.b)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://goharbor.io/docs/2.0.0/install-config/configure-yml-file/"},"https://goharbor.io/docs/2.0.0/install-config/configure-yml-file/"))),Object(l.b)("h2",{id:"\u7ec4\u4ef6"},"\u7ec4\u4ef6"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"postgresql"),Object(l.b)("li",{parentName:"ul"},"redis"),Object(l.b)("li",{parentName:"ul"},"clari"),Object(l.b)("li",{parentName:"ul"},"beego"),Object(l.b)("li",{parentName:"ul"},"chartmuseum"),Object(l.b)("li",{parentName:"ul"},"docker/distribution"),Object(l.b)("li",{parentName:"ul"},"docker/notary"),Object(l.b)("li",{parentName:"ul"},"helm"),Object(l.b)("li",{parentName:"ul"},"swagger-ui")),Object(l.b)("h2",{id:"helm"},"Helm"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},'harborAdminPassword: "Harbor12345"\n\n# \u90e8\u7f72\u7ec4\u4ef6\n# =========\n# \u4e0d\u4f7f\u7528 Ingress \u5219\u4f1a\u90e8\u7f72 nginx\nnginx:\nportal:\ncore:\njobservice:\nregistry:\nchartmuseum:\nclair:\ntrivy:\nnotary:\n\ndatabase:\n  # \u8bbe\u7f6e\u4e3a external \u4f7f\u7528\u5916\u90e8\u6570\u636e\u5e93\n  type: internal\n  # \u914d\u7f6e\u5916\u90e8\u6570\u636e\u5e93\n  external:\n    host: "192.168.0.1"\n    port: "5432"\n    username: "user"\n    password: "password"\n    # coreDatabase: "registry"\n    # clairDatabase: "clair"\n    # notaryServerDatabase: "notary_server"\n    # notarySignerDatabase: "notary_signer"\nredis:\n  type: internal\n')))}p.isMDXComponent=!0}}]);