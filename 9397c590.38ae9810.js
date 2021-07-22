(window.webpackJsonp=window.webpackJsonp||[]).push([[622],{1152:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,d=p["".concat(o,".").concat(m)]||p[m]||s[m]||l;return n?r.a.createElement(d,c(c({ref:t},b),{},{components:n})):r.a.createElement(d,c({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var b=2;b<l;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},696:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(8),l=(n(0),n(1152)),o={title:"Go FAQ"},c={unversionedId:"languages/go/go-faq",id:"languages/go/go-faq",isDocsHomePage:!1,title:"Go FAQ",description:"\u4f9d\u8d56\u66f4\u65b0",source:"@site/notes/languages/go/go-faq.md",slug:"/languages/go/go-faq",permalink:"/notes/languages/go/go-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/go/go-faq.md",version:"current",sidebar:"docs",previous:{title:"CGO",permalink:"/notes/languages/go/go-cgo"},next:{title:"Go GUI Awesome",permalink:"/notes/languages/go/go-gui-awesome"}},i=[{value:"\u4f9d\u8d56\u66f4\u65b0",id:"\u4f9d\u8d56\u66f4\u65b0",children:[]},{value:"\u67e5\u770b\u6a21\u5757\u6240\u5728\u4f4d\u7f6e",id:"\u67e5\u770b\u6a21\u5757\u6240\u5728\u4f4d\u7f6e",children:[]},{value:"Struct \u662f\u5426\u4f7f\u7528\u6307\u9488",id:"struct-\u662f\u5426\u4f7f\u7528\u6307\u9488",children:[]},{value:"text/template vs html/template",id:"texttemplate-vs-htmltemplate",children:[]},{value:"\u4e0d\u4f1a\u4f7f\u7528 /etc/hosts \u5c31\u884c\u89e3\u6790",id:"\u4e0d\u4f1a\u4f7f\u7528-etchosts-\u5c31\u884c\u89e3\u6790",children:[]},{value:"Windows \u5b89\u88c5",id:"windows-\u5b89\u88c5",children:[]},{value:"reflect.Value.Interface: cannot return value obtained from unexported field or method",id:"reflectvalueinterface-cannot-return-value-obtained-from-unexported-field-or-method",children:[]},{value:"bufio.Reader vs bufio.Scanner",id:"bufioreader-vs-bufioscanner",children:[]},{value:"pq vs pgx",id:"pq-vs-pgx",children:[]}],b={toc:i};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"\u4f9d\u8d56\u66f4\u65b0"},"\u4f9d\u8d56\u66f4\u65b0"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u6709\u66f4\u65b0\u7684\u6a21\u5757\ngo list -u -m all\n# \u67e5\u770b\u76f4\u63a5\u4f9d\u8d56\n# https://pkg.go.dev/cmd/go/internal/modinfo#ModulePublic\ngo list -u -m -f '{{.}}{{if .Indirect}} IAMINDIRECT{{end}}' all\n# \u53ea\u663e\u793a\u6709\u66f4\u65b0\u7684\ngo list -u -m -f '{{if .Update}}{{.}}{{end}}' all\n# \u53ea\u663e\u793a\u76f4\u63a5\u4f9d\u8d56\ngo list -u -m -f '{{if not .Indirect}}{{.}}{{end}}' all\n\n# \u66f4\u65b0 minor \u548c patch\ngo get -u -v ./...\n# \u66f4\u65b0 patch\ngo get -u=patch -v ./...\n# \u66f4\u65b0\u6d4b\u8bd5\u4f9d\u8d56\ngo get -t -u ./...\n")),Object(l.b)("h2",{id:"\u67e5\u770b\u6a21\u5757\u6240\u5728\u4f4d\u7f6e"},"\u67e5\u770b\u6a21\u5757\u6240\u5728\u4f4d\u7f6e"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"go list -f '{{.Dir}}' -m github.com/pkg/errors\n\n# \u6a21\u5757\u7f13\u5b58\u76ee\u5f55\ngo env GOMODCACHE\n")),Object(l.b)("h2",{id:"struct-\u662f\u5426\u4f7f\u7528\u6307\u9488"},"Struct \u662f\u5426\u4f7f\u7528\u6307\u9488"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5c3d\u91cf\u4e0d\u4f7f\u7528\u6307\u9488 - \u76f4\u63a5\u4f7f\u7528 Struct \u4f1a\u66f4\u5feb",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528\u6307\u9488\u4f1a\u7528\u5230\u5168\u5c40\u5806\uff0c\u4f7f\u7528 struct \u526f\u672c\u53ef\u76f4\u63a5\u653e\u5230\u6808"),Object(l.b)("li",{parentName:"ul"},"\u7528\u5230\u5806\u5c31\u4f1a\u6d89\u53ca\u5230 GC"))),Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528 Pointer",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u8c03\u7528\u5bc6\u5ea6\u9ad8"),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u9700\u8981\u526f\u672c\u573a\u666f"))),Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528 Struct",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6570\u636e\u5bc6\u5ea6\u9ad8\u4f46\u4e0d\u9700\u8981\u7ecf\u5e38\u8c03\u7528"),Object(l.b)("li",{parentName:"ul"},"\u786e\u4fdd\u6570\u636e\u4e0d\u53d1\u751f\u53d8\u5316"))),Object(l.b)("li",{parentName:"ul"},"\u5982\u679c Struct \u5305\u542b\u4e86\u4e0d\u53ef\u590d\u5236\u5bf9\u8c61\uff0c\u5219\u4e00\u5b9a\u8981\u7528\u6307\u9488 - \u4f8b\u5982 sycn.Mutex"),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://medium.com/a-journey-with-go/44b43b104963"},"Go: Should I Use a Pointer instead of a Copy of my Struct?"))))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-golang"},'type Server struct {\n  // \u5185\u90e8\u914d\u7f6e\u5bf9\u8c61\u53ef\u4f7f\u7528 Struct\n  conf ServerConf\n}\n// \u56e0\u4e3a\u4f1a\u5bf9 conf \u8fdb\u884c\u9ed8\u8ba4\u503c\u8865\u9f50 - \u56e0\u6b64\u4f20\u5165\u6307\u9488\nfunc NewServer(conf *ServerConf)*Server{\n  // \u4fee\u6539\n  if conf.Bind == "" {\n    conf.Bind = "0.0.0.0"\n  }\n  // \u590d\u5236\u4e00\u4e2a conf \u907f\u514d\u5916\u90e8\u66f4\u6539\n  // Server \u4f7f\u7528\u6307\u9488\uff0c\u56e0\u4e3a\u4e0d\u9700\u8981\u526f\u672c\n  return &Server{ Conf = *conf }\n}\n')),Object(l.b)("h2",{id:"texttemplate-vs-htmltemplate"},"text/template vs html/template"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"html/template",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u8f93\u51fa\u5185\u5bb9\u88ab\u8f6c\u4e49\uff0c\u907f\u514d\u4ee3\u7801\u6ce8\u5165")))),Object(l.b)("h2",{id:"\u4e0d\u4f1a\u4f7f\u7528-etchosts-\u5c31\u884c\u89e3\u6790"},"\u4e0d\u4f1a\u4f7f\u7528 /etc/hosts \u5c31\u884c\u89e3\u6790"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u6dfb\u52a0 ",Object(l.b)("inlineCode",{parentName:"li"},"/etc/nsswitch.conf")," \u53ef\u4ee5\u89e3\u51b3",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'echo "hosts: files dns" > /etc/nsswitch.conf')))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/golang/go/issues/35305"},"#35305")," - net: prefer /etc/hosts over DNS when no /etc/nsswitch.conf is present"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/golang/go/issues/22846"},"#22846")," - net: Go DNS resolver does not read /etc/hosts")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"/etc/nsswitch.conf")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"# /etc/nsswitch.conf\n#\n# As described on the web page https://man7.org/linux/man-pages/man3/gethostbyname.3.html,\n# without the nsswitch.conf file, the gethostbyname() and gethostbyaddr() domain queries\n# will fail to a local name server, thus the /etc/hosts will take no effect.\n#\n# For example, when hostaliases are specified for a kubernetes pod, without proper settings\n# defined in this file, the hostaliases settings will not take effect.\n#\n# Following contents of this file is from the ubuntu:16.04 docker image.\n\npasswd:         compat\ngroup:          compat\nshadow:         compat\ngshadow:        files\n\nhosts:          files dns\nnetworks:       files\n\nprotocols:      db files\nservices:       db files\nethers:         db files\nrpc:            db files\n\nnetgroup:       nis\n")),Object(l.b)("h2",{id:"windows-\u5b89\u88c5"},"Windows \u5b89\u88c5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://golang.org/dl/"},"https://golang.org/dl/")," - \u4e0b\u8f7d MSI \u6216 Zip",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"MSI \u9ed8\u8ba4\u5b89\u88c5\u5728 ",Object(l.b)("inlineCode",{parentName:"li"},"C:\\GO"))))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'# msys \u4e0b\nexport GOPATH=$HOME/go\nexport PATH="$PATH:/c/GO/bin:$HOME/go/bin"\nexport GO111MODULE=on\nexport GOPROXY=https://goproxy.io\n')),Object(l.b)("h2",{id:"reflectvalueinterface-cannot-return-value-obtained-from-unexported-field-or-method"},"reflect.Value.Interface: cannot return value obtained from unexported field or method"),Object(l.b)("p",null,"relfect \u4e0d\u5141\u8bb8\u8bbf\u95ee\u672a\u5bfc\u51fa\u5b57\u6bb5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Hack access ",Object(l.b)("a",{parentName:"li",href:"https://stackoverflow.com/a/43918797/1870054"},"https://stackoverflow.com/a/43918797/1870054"))),Object(l.b)("h2",{id:"bufioreader-vs-bufioscanner"},"bufio.Reader vs bufio.Scanner"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"bufio.Scanner",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4e00\u6b21\u8bfb\u4e00\u884c - \u4e0d\u5305\u542b\u5206\u9694\u7b26 ",Object(l.b)("inlineCode",{parentName:"li"},"\\r\\n")),Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4 64k \u884c\u9650\u5236"),Object(l.b)("li",{parentName:"ul"},"\u63a5\u53e3\u4f7f\u7528\u53cb\u597d\uff0cScan \u548c \u9519\u8bef \u72ec\u7acb"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"io.EOF")," \u65f6 Err \u4e3a nil"))),Object(l.b)("li",{parentName:"ul"},"bufio.Reader"),Object(l.b)("li",{parentName:"ul"},"\u5185\u90e8 4k \u7f13\u51b2"),Object(l.b)("li",{parentName:"ul"},"ReadLine \u4e0d\u8fd4\u56de\u6362\u884c\uff0c\u7c7b\u4f3c Scanner\uff0c\u4f46\u8fd4\u56de ",Object(l.b)("inlineCode",{parentName:"li"},"[]byte")," - ",Object(l.b)("strong",{parentName:"li"},"\u4e0d\u63a8\u8350")," \u4f7f\u7528"),Object(l.b)("li",{parentName:"ul"},"ReadString - \u8bfb\u53d6\u76f4\u5230\u6307\u5b9a\u5206\u9694\u7b26\uff0c\u8fd4\u56de\u5206\u9694\u7b26 - \u7c7b\u4f3c Scanner"),Object(l.b)("li",{parentName:"ul"},"\u5b9e\u73b0 ",Object(l.b)("inlineCode",{parentName:"li"},"io.Reader")," - \u5f88\u591a\u65f6\u5019\u8fd9\u4e2a\u662f\u9009\u62e9\u7684 ",Object(l.b)("em",{parentName:"li"},"\u51b3\u5b9a\u56e0\u7d20"))),Object(l.b)("h2",{id:"pq-vs-pgx"},"pq vs pgx"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"pq \u4f5c\u8005\u63a8\u8350\u63a8\u8350\u4f7f\u7528 pgx")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/lib/pq"},"pq"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9879\u76ee\u5904\u4e8e\u7ef4\u62a4\u6a21\u5f0f"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/jackc/pgx"},"pgx"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u6240\u6709 native \u7c7b\u578b"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u903b\u8f91\u590d\u5236\u534f\u8bae")))))}u.isMDXComponent=!0}}]);