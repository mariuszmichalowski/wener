"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[25196],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),m=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=m(n),s=a,f=g["".concat(u,".").concat(s)]||g[s]||c[s]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},85900:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return p},default:function(){return g}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={title:"magefile"},u="mega",m={unversionedId:"dev/build/mage",id:"dev/build/mage",isDocsHomePage:!1,title:"magefile",description:"- \u4f18\u52bf",source:"@site/notes/dev/build/mage.md",sourceDirName:"dev/build",slug:"/dev/build/mage",permalink:"/notes/dev/build/mage",editUrl:"https://github.com/wenerme/wener/edit/master/notes/dev/build/mage.md",tags:[],version:"current",frontMatter:{title:"magefile"},sidebar:"docs",previous:{title:"LLVM IR",permalink:"/notes/dev/build/llvm"},next:{title:"make",permalink:"/notes/dev/build/make"}},p=[],c={toc:p};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mega"},"mega"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f18\u52bf",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6709 Makefile \u7c7b\u4f3c\u7684\u8bed\u4e49",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Target\u3001\u4f9d\u8d56\u3001\u6587\u4ef6\u53d8\u5316\u68c0\u6d4b"))),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 Go \u7f16\u7801"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528\u4efb\u610f\u5e93"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u7f16\u8bd1"),(0,l.kt)("li",{parentName:"ul"},"\u65b9\u4fbf\u4f9d\u8d56\u5176\u4ed6\u5730\u65b9\u7684 Target"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4e0d\u7528\u5b89\u88c5\uff0c\u53ea\u9700\u8981 Go"))),(0,l.kt)("li",{parentName:"ul"},"\u52a3\u52bf",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u975e\u9759\u6001\u7f16\u8bd1\u5219\u4f9d\u8d56 Go"),(0,l.kt)("li",{parentName:"ul"},"\u9759\u6001\u9700\u8981\u4ea4\u53c9\u7f16\u8bd1\u591a\u5e73\u53f0 - \u5176\u4ed6\u7684 task runner \u7531\u5b98\u65b9\u63d0\u4f9b\u7f16\u8bd1\u597d\u7684"))),(0,l.kt)("li",{parentName:"ul"},"\u573a\u666f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 \u5b9a\u4e49\u4e00\u4e2a Yaml \u8868\u793a\u8981\u505a\u7684 Task\uff0c\u901a\u8fc7 Go \u89e3\u6790\u7136\u540e\u6267\u884c\u4f1a\u5f88\u5bb9\u6613"),(0,l.kt)("li",{parentName:"ul"},"\u590d\u6742\u7684\u81ea\u5b9a\u4e49\u4efb\u52a1\u903b\u8f91"),(0,l.kt)("li",{parentName:"ul"},"\u805a\u5408\u5176\u4ed6\u5305\u4f5c\u4e3a\u547d\u4ee4",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 shfmt\u3001sprig - \u7c7b\u4f3c\u4e8e busybox"))),(0,l.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1\u6d4b\u8bd5 Go \u4ee3\u7801"),(0,l.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u547d\u4ee4\u5de5\u5177",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e cobra - \u4f46\u53ef\u6dfb\u52a0 go \u81ea\u5b9a\u4e49"))))),(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Target \u4e0d\u652f\u6301 flag",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/magefile/mage/issues/24"},"magefile/mage#24")))))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://magefile.org/environment/"},"ENVIRONMENT VARIABLES"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"go get -u -d github.com/magefile/mage\ncd $GOPATH/src/github.com/magefile/mage\ngit pull\ngo run bootstrap.go\n\nmage -init\nmage -l\n\n# \u7f16\u8bd1\u4e3a\u53ef\u6267\u884c\u6587\u4ef6 - \u4f1a\u5ffd\u7565 GOOS GOARCH\n# \u4f7f\u7528 -goos -goarch \u4ea4\u53c9\u7f16\u8bd1\nmage -compile ./builder\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'// magefile \u9700\u8981\u8be5 Tag\n// +build mage\n\nimport "github.com/magefile/mage/mg"\nimport "github.com/magefile/mage/sh"\n// Dir Glob Path\n// import "github.com/magefile/mage/target"\n\nvar Default = Build\nvar Aliases = map[string]interface{} {\n  "i":     Install,\n  "build": Build,\n  "ls":    List,\n}\n\n// \u652f\u6301\u7684 Target \u51fd\u6570\u7b7e\u540d\nfunc Install(){}\nfunc Deploy() error {return nil}\nfunc List(context.Context)\nfunc Build(context.Context) error {\n  // \u4f9d\u8d56\n  mg.Deps(Install)\n  return nil\n}\n\n// \u547d\u540d\u7a7a\u95f4\n// mage build:site\ntype Build mg.Namespace\nfunc (Build) Site() error {\n  return nil\n}\nfunc (Build) Docs() {}\n\n\n// \u5bfc\u5165\u5176\u4ed6 Target\n// \u4f1a\u5ffd\u7565 default \u548c alias\nimport (\n  // \u6ce8\u91ca\u662f\u5fc5\u987b\u7684 - \u5bfc\u5165\u5230\u6839\u547d\u540d\u7a7a\u95f4\n  // mage:import\n  _ "example.com/me/foobar"\n  // \u5bfc\u5165\u5230 build \u547d\u540d\u7a7a\u95f4 - mage build:deploy\n  // mage:import build\n  "example.com/me/builder"\n)\n\n// \u53ef\u76f4\u63a5\u4f7f\u7528 go build -tags mage \u6765\u7f16\u8bd1 \u6216 go run main.go -l \u6765\u6267\u884c\n// +build ignore\npackage main\nimport (\n    "os"\n    "github.com/magefile/mage/mage"\n)\nfunc main() {\n    os.Exit(mage.Main())\n}\n')))}g.isMDXComponent=!0}}]);