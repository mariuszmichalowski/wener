(window.webpackJsonp=window.webpackJsonp||[]).push([[718],{1152:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),m=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=m(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},g=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),b=m(n),g=a,s=b["".concat(l,".").concat(g)]||b[g]||p[g]||i;return n?r.a.createElement(s,c(c({ref:t},u),{},{components:n})):r.a.createElement(s,c({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=g;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var u=2;u<i;u++)l[u]=n[u];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},791:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(8),i=(n(0),n(1152)),l={id:"mega",title:"magefile"},c={unversionedId:"dev/build/mega",id:"dev/build/mega",isDocsHomePage:!1,title:"magefile",description:"mega",source:"@site/notes/dev/build/mage.md",slug:"/dev/build/mega",permalink:"/notes/dev/build/mega",editUrl:"https://github.com/wenerme/wener/edit/master/notes/dev/build/mage.md",version:"current",sidebar:"docs",previous:{title:"ccache",permalink:"/notes/dev/build/ccache"},next:{title:"Patch",permalink:"/notes/dev/build/patch"}},o=[{value:"Tips",id:"tips",children:[]}],u={toc:o};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"mega"},"mega"),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u4f18\u52bf",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6709 Makefile \u7c7b\u4f3c\u7684\u8bed\u4e49",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Target\u3001\u4f9d\u8d56\u3001\u6587\u4ef6\u53d8\u5316\u68c0\u6d4b"))),Object(i.b)("li",{parentName:"ul"},"\u901a\u8fc7 Go \u7f16\u7801"),Object(i.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528\u4efb\u610f\u5e93"),Object(i.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u7f16\u8bd1"),Object(i.b)("li",{parentName:"ul"},"\u65b9\u4fbf\u4f9d\u8d56\u5176\u4ed6\u5730\u65b9\u7684 Target"),Object(i.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u4e0d\u7528\u5b89\u88c5\uff0c\u53ea\u9700\u8981 Go"))),Object(i.b)("li",{parentName:"ul"},"\u52a3\u52bf",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u975e\u9759\u6001\u7f16\u8bd1\u5219\u4f9d\u8d56 Go"),Object(i.b)("li",{parentName:"ul"},"\u9759\u6001\u9700\u8981\u4ea4\u53c9\u7f16\u8bd1\u591a\u5e73\u53f0 - \u5176\u4ed6\u7684 task runner \u7531\u5b98\u65b9\u63d0\u4f9b\u7f16\u8bd1\u597d\u7684"))),Object(i.b)("li",{parentName:"ul"},"\u573a\u666f",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4f8b\u5982 \u5b9a\u4e49\u4e00\u4e2a Yaml \u8868\u793a\u8981\u505a\u7684 Task\uff0c\u901a\u8fc7 Go \u89e3\u6790\u7136\u540e\u6267\u884c\u4f1a\u5f88\u5bb9\u6613"),Object(i.b)("li",{parentName:"ul"},"\u590d\u6742\u7684\u81ea\u5b9a\u4e49\u4efb\u52a1\u903b\u8f91"),Object(i.b)("li",{parentName:"ul"},"\u805a\u5408\u5176\u4ed6\u5305\u4f5c\u4e3a\u547d\u4ee4",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4f8b\u5982 shfmt\u3001sprig - \u7c7b\u4f3c\u4e8e busybox"))),Object(i.b)("li",{parentName:"ul"},"\u9a8c\u8bc1\u6d4b\u8bd5 Go \u4ee3\u7801"),Object(i.b)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u547d\u4ee4\u5de5\u5177",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e cobra - \u4f46\u53ef\u6dfb\u52a0 go \u81ea\u5b9a\u4e49"))))),Object(i.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Target \u4e0d\u652f\u6301 flag",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/magefile/mage/issues/24"},"magefile/mage#24")))))),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://magefile.org/environment/"},"ENVIRONMENT VARIABLES"))))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"go get -u -d github.com/magefile/mage\ncd $GOPATH/src/github.com/magefile/mage\ngit pull\ngo run bootstrap.go\n\nmage -init\nmage -l\n\n# \u7f16\u8bd1\u4e3a\u53ef\u6267\u884c\u6587\u4ef6 - \u4f1a\u5ffd\u7565 GOOS GOARCH\n# \u4f7f\u7528 -goos -goarch \u4ea4\u53c9\u7f16\u8bd1\nmage -compile ./builder\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-go"},'// magefile \u9700\u8981\u8be5 Tag\n// +build mage\n\nimport "github.com/magefile/mage/mg"\nimport "github.com/magefile/mage/sh"\n// Dir Glob Path\n// import "github.com/magefile/mage/target"\n\nvar Default = Build\nvar Aliases = map[string]interface{} {\n  "i":     Install,\n  "build": Build,\n  "ls":    List,\n}\n\n// \u652f\u6301\u7684 Target \u51fd\u6570\u7b7e\u540d\nfunc Install(){}\nfunc Deploy() error {return nil}\nfunc List(context.Context)\nfunc Build(context.Context) error {\n  // \u4f9d\u8d56\n  mg.Deps(Install)\n  return nil\n}\n\n// \u547d\u540d\u7a7a\u95f4\n// mage build:site\ntype Build mg.Namespace\nfunc (Build) Site() error {\n  return nil\n}\nfunc (Build) Docs() {}\n\n\n// \u5bfc\u5165\u5176\u4ed6 Target\n// \u4f1a\u5ffd\u7565 default \u548c alias\nimport (\n  // \u6ce8\u91ca\u662f\u5fc5\u987b\u7684 - \u5bfc\u5165\u5230\u6839\u547d\u540d\u7a7a\u95f4\n  // mage:import\n  _ "example.com/me/foobar" \n  // \u5bfc\u5165\u5230 build \u547d\u540d\u7a7a\u95f4 - mage build:deploy\n  // mage:import build\n  "example.com/me/builder"\n)\n\n// \u53ef\u76f4\u63a5\u4f7f\u7528 go build -tags mage \u6765\u7f16\u8bd1 \u6216 go run main.go -l \u6765\u6267\u884c\n// +build ignore\npackage main\nimport (\n    "os"\n    "github.com/magefile/mage/mage"\n)\nfunc main() {\n    os.Exit(mage.Main())\n}\n')))}m.isMDXComponent=!0}}]);