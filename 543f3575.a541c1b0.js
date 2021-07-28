(window.webpackJsonp=window.webpackJsonp||[]).push([[372],{1172:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),b=r,m=d["".concat(c,".").concat(b)]||d[b]||p[b]||a;return t?o.a.createElement(m,i(i({ref:n},l),{},{components:t})):o.a.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=b;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},446:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(8),a=(t(0),t(1172)),c={title:"Minio ACL"},i={unversionedId:"service/storage/minio-acl",id:"service/storage/minio-acl",isDocsHomePage:!1,title:"Minio ACL",description:"\u53ea\u5141\u8bb8\u8bbf\u95ee\u5355\u4e2a Bucket",source:"@site/notes/service/storage/minio-acl.md",slug:"/service/storage/minio-acl",permalink:"/notes/service/storage/minio-acl",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/storage/minio-acl.md",version:"current",sidebar:"docs",previous:{title:"Gluster",permalink:"/notes/service/storage/gluster"},next:{title:"Minio FAQ",permalink:"/notes/service/storage/minio-faq"}},s=[{value:"\u53ea\u5141\u8bb8\u8bbf\u95ee\u5355\u4e2a Bucket",id:"\u53ea\u5141\u8bb8\u8bbf\u95ee\u5355\u4e2a-bucket",children:[]},{value:"\u57fa\u4e8e Bucket \u524d\u7f00\u9650\u5236\u8bbf\u95ee",id:"\u57fa\u4e8e-bucket-\u524d\u7f00\u9650\u5236\u8bbf\u95ee",children:[]},{value:"writeonly",id:"writeonly",children:[]},{value:"readonly",id:"readonly",children:[]},{value:"readwrite",id:"readwrite",children:[]},{value:"ConsoleAdmin",id:"consoleadmin",children:[]},{value:"diagnostics",id:"diagnostics",children:[]}],l={toc:s};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u53ea\u5141\u8bb8\u8bbf\u95ee\u5355\u4e2a-bucket"},"\u53ea\u5141\u8bb8\u8bbf\u95ee\u5355\u4e2a Bucket"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": ["s3:*"],\n      "Resource": ["arn:aws:s3:::demo/*"]\n    }\n  ]\n}\n')),Object(a.b)("h2",{id:"\u57fa\u4e8e-bucket-\u524d\u7f00\u9650\u5236\u8bbf\u95ee"},"\u57fa\u4e8e Bucket \u524d\u7f00\u9650\u5236\u8bbf\u95ee"),Object(a.b)("p",null,"\u5b9e\u73b0\u7c7b\u4f3c\u591a\u79df\u6237\u80fd\u529b"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": ["s3:*"],\n      "Resource": ["arn:aws:s3:::demo-*"]\n    }\n  ]\n}\n')),Object(a.b)("h2",{id:"writeonly"},"writeonly"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": ["s3:PutObject"],\n      "Resource": ["arn:aws:s3:::*"]\n    }\n  ]\n}\n')),Object(a.b)("h2",{id:"readonly"},"readonly"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": ["s3:GetBucketLocation", "s3:GetObject"],\n      "Resource": ["arn:aws:s3:::*"]\n    }\n  ]\n}\n')),Object(a.b)("h2",{id:"readwrite"},"readwrite"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": ["s3:*"],\n      "Resource": ["arn:aws:s3:::*"]\n    }\n  ]\n}\n')),Object(a.b)("h2",{id:"consoleadmin"},"ConsoleAdmin"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": ["admin:*"]\n    },\n    {\n      "Effect": "Allow",\n      "Action": ["s3:*"],\n      "Resource": ["arn:aws:s3:::*"]\n    }\n  ]\n}\n')),Object(a.b)("h2",{id:"diagnostics"},"diagnostics"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": [\n        "admin:OBDInfo",\n        "admin:Profiling",\n        "admin:ServerInfo",\n        "admin:ServerTrace",\n        "admin:TopLocksInfo",\n        "admin:ConsoleLog"\n      ],\n      "Resource": ["arn:aws:s3:::*"]\n    }\n  ]\n}\n')))}u.isMDXComponent=!0}}]);