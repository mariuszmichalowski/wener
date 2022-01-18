"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[23702],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=l.createContext({}),u=function(e){var t=l.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return l.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),d=n,k=c["".concat(m,".").concat(d)]||c[d]||s[d]||r;return a?l.createElement(k,i(i({ref:t},p),{},{components:a})):l.createElement(k,i({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=c;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<r;u++)i[u]=a[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},11811:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var l=a(87462),n=a(63366),r=(a(67294),a(3905)),i=["components"],o={title:"Bazel"},m=void 0,u={unversionedId:"dev/build/bazel/README",id:"dev/build/bazel/README",title:"Bazel",description:"- bazelbuild/bazel",source:"@site/notes/dev/build/bazel/README.md",sourceDirName:"dev/build/bazel",slug:"/dev/build/bazel/",permalink:"/notes/dev/build/bazel/",editUrl:"https://github.com/wenerme/wener/edit/master/notes/dev/build/bazel/README.md",tags:[],version:"current",frontMatter:{title:"Bazel"},sidebar:"docs",previous:{title:"Bazel Java",permalink:"/notes/dev/build/bazel/bazel-java"},next:{title:"ccache",permalink:"/notes/dev/build/ccache"}},p=[{value:"Starlark",id:"starlark",children:[],level:2},{value:"Notes",id:"notes",children:[],level:2},{value:"Remote Execution",id:"remote-execution",children:[],level:2},{value:"Remote Caching",id:"remote-caching",children:[],level:2},{value:"The remote downloader can only be used in combination with gRPC caching",id:"the-remote-downloader-can-only-be-used-in-combination-with-grpc-caching",children:[],level:2},{value:"Failed to query remote execution capabilities: INTERNAL: http2 exception",id:"failed-to-query-remote-execution-capabilities-internal-http2-exception",children:[],level:2},{value:".bazelrc",id:"bazelrc",children:[],level:2},{value:"Notes",id:"notes-1",children:[],level:2},{value:"query",id:"query",children:[],level:2},{value:"bzlmod",id:"bzlmod",children:[],level:2},{value:"BUILD vs BUILD.bazel",id:"build-vs-buildbazel",children:[],level:2},{value:"Fetching @local_config_xcode",id:"fetching-local_config_xcode",children:[],level:2},{value:"from google",id:"from-google",children:[],level:2},{value:"output",id:"output",children:[],level:2}],s={toc:p};function c(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bazelbuild/bazel"},"bazelbuild/bazel"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u591a\u8bed\u8a00"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u591a\u5e73\u53f0"),(0,r.kt)("li",{parentName:"ul"},"Starlark DSL"),(0,r.kt)("li",{parentName:"ul"},"reproduce build"),(0,r.kt)("li",{parentName:"ul"},"remote cache",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"WebDAV"),(0,r.kt)("li",{parentName:"ul"},"bazel-remote"))),(0,r.kt)("li",{parentName:"ul"},"remote build"),(0,r.kt)("li",{parentName:"ul"},"\u81ea\u884c\u51c6\u5907\u73af\u5883 - \u4e0b\u8f7d JDK\u3001\u4e0b\u8f7d Golang SDK \u7b49"),(0,r.kt)("li",{parentName:"ul"},"\u81ea\u884c\u7ef4\u62a4\u4f9d\u8d56 - \u4e0b\u8f7d JAR\u3001\u4e0b\u8f7d go mod"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bazelbuild/examples"},"bazelbuild/examples")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/google/bazel-common"},"google/bazel-common")),(0,r.kt)("li",{parentName:"ul"},"\u955c\u50cf",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mirror.bazel.build"},"https://mirror.bazel.build"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bazelbuild/rules_python/issues/400#issuecomment-776810051"},"https://github.com/bazelbuild/rules_python/issues/400#issuecomment-776810051")))),(0,r.kt)("li",{parentName:"ul"},"Bazel \u955c\u50cf",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mirrors.huaweicloud.com/bazel/"},"https://mirrors.huaweicloud.com/bazel/")))))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bazel.build/users.html"},"Users"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Abseil, TensorFlow, gRPC"))),(0,r.kt)("li",{parentName:"ul"},"Kubernetes 1.21 \u79fb\u9664 bazel \u6784\u5efa - ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/BenTheElder/enhancements/blob/master/keps/sig-testing/2420-reducing-kubernetes-build-maintenance/README.md"},"KEP#2420"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"go build cache \u8db3\u591f\u4f18\u79c0"))),(0,r.kt)("li",{parentName:"ul"},"Pants, Buck: created and developed by ex-Googlers at Twitter and Foursquare, and Facebook")))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"When to use Bazel")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\u58f0\u660e\u5f0f\u6784\u5efa"),(0,r.kt)("li",{parentName:"ul"},"\u589e\u91cf\u7f16\u8bd1"),(0,r.kt)("li",{parentName:"ul"},"Remote Cache \u548c Remote Execution"),(0,r.kt)("li",{parentName:"ul"},"Reproduce \u6784\u5efa"),(0,r.kt)("li",{parentName:"ul"},"\u591a\u8bed\u8a00\u591a\u5e73\u53f0\u590d\u6742\u6784\u5efa")))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Bazel \u5b98\u65b9\u6784\u5efa\u7684\u4e0d\u652f\u6301 musl")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'brew install bazel\n\n# \u6784\u5efa\nbazel build //:ProjectRunner\n# \u67e5\u770b\u4f9d\u8d56\u56fe\nbazel query  --nohost_deps --noimplicit_deps "deps(//:ProjectRunner)" --output graph | dot -Tpng -o graph.png\nimgcat graph.png\n\n# \u505c\u6b62\u540e\u53f0\u670d\u52a1\nbazel shutdown\n\n# Build all\nbazel build //...\n')),(0,r.kt)("h2",{id:"starlark"},"Starlark"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/skylark/language.html"},"https://docs.bazel.build/versions/master/skylark/language.html")),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"workspace - \u5de5\u4f5c\u7a7a\u95f4",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"WORKSPACE, WORKSPACE.bazel \u6240\u5728\u76ee\u5f55"))),(0,r.kt)("li",{parentName:"ul"},"repository - \u4ed3\u5e93",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@")," - root repository - WORKSPACE \u6240\u5728\u76ee\u5f55"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u5b9a\u4e49\u5916\u90e8\u4ed3\u5e93 - ",(0,r.kt)("a",{parentName:"li",href:"https://docs.bazel.build/versions/main/external.html"},"external"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"bind, local_repository, new_local_repository"))))),(0,r.kt)("li",{parentName:"ul"},"package",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"BUILD \u6240\u5728\u76ee\u5f55"))),(0,r.kt)("li",{parentName:"ul"},"target",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"=files+rules"),(0,r.kt)("li",{parentName:"ul"},"files \u5206\u4e3a\u6e90\u6587\u4ef6\u548c\u751f\u6210\u6587\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"package_group"))),(0,r.kt)("li",{parentName:"ul"},"label - \u6807\u7b7e",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"target \u7684\u540d\u5b57\u53eb\u505a label - label \u552f\u4e00\u6807\u8bc6 target"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@myrepo//my/app/main:app_binary"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"@myrepo// - \u4ed3\u5e93\u540d\u5b57",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5728 repo \u5185\u53ef\u5ffd\u7565\uff0c\u5199\u4f5c ",(0,r.kt)("inlineCode",{parentName:"li"},"//my/app/main:app_binary")))),(0,r.kt)("li",{parentName:"ul"},"my/app/main - un-qualified package name - \u5305\u540d",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"+repo=fully-qualified package name"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u5305\u5185\u53ef\u5ffd\u7565\uff0c\u5199\u4f5c ",(0,r.kt)("inlineCode",{parentName:"li"},":app_binary")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"li"},"app_binary")))),(0,r.kt)("li",{parentName:"ul"},"app_binary - un-qualified target name",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u540d\u5b57\u4e0e\u6700\u540e\u90e8\u5206\u540d\u5b57\u76f8\u540c\uff0c\u53ef\u5ffd\u7565",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"//my/app/lib:lib")," = ",(0,r.kt)("inlineCode",{parentName:"li"},"//my/app/lib")))))))))),(0,r.kt)("li",{parentName:"ul"},".bzl - extension"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.bazel.build/versions/main/be/overview.html"},"be")," - Bazel BUILD Encyclopedia")),(0,r.kt)("h2",{id:"remote-execution"},"Remote Execution"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.bazel.build/versions/master/remote-execution.html"},"Remote Execution")),(0,r.kt)("li",{parentName:"ul"},"Self Host",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/twitter/scoot"},"twitter/scoot")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bazelbuild/bazel-buildfarm"},"bazelbuild/bazel-buildfarm"))))),(0,r.kt)("h2",{id:"remote-caching"},"Remote Caching"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.bazel.build/versions/master/remote-caching.html"},"Remote Caching")),(0,r.kt)("li",{parentName:"ul"},"\u5b58\u50a8",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"nginx"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/buchgr/bazel-remote/"},"bazel-remote")))),(0,r.kt)("li",{parentName:"ul"},"ac.v2 cas.v2 raw.v2",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"hash, blob"),(0,r.kt)("li",{parentName:"ul"},"cas=Content addressed storage"),(0,r.kt)("li",{parentName:"ul"},"ac=Action cache"))),(0,r.kt)("li",{parentName:"ul"},"bazel \u4e0d\u8d1f\u8d23\u5220\u9664\u7f13\u5b58"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.bazel.build/versions/main/command-line-reference.html#flag--experimental_remote_downloader"},"--experimental_remote_downloader")),(0,r.kt)("li",{parentName:"ul"},"HTTP 8080"),(0,r.kt)("li",{parentName:"ul"},"gRPC 9092"),(0,r.kt)("li",{parentName:"ul"},"Profiling 6060"),(0,r.kt)("li",{parentName:"ul"},"--config_file BAZEL_REMOTE_CONFIG_FILE"),(0,r.kt)("li",{parentName:"ul"},"--experimental_remote_asset_api")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it \\\n  -u 1000 \\\n  -v $PWD/cache:/data -p 8080:8080 -p 9092:9092 \\\n  --name bazel-remote-cache buchgr/bazel-remote-cache\ncurl http://localhost:8080/status\n\nbazel build //src/main:app --remote_cache=http://localhost:9092\n# remote asset\nbazel build //src/main:app --experimental_remote_downloader=grpc://localhost:9092 --remote_cache=grpc://localhost:9092\n")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"remote asset is broken")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"not works with go-sdk ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bazelbuild/bazel/issues/13206"},"#13206"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"build:cache --remote_download_minimal\nbuild:cache --remote_cache=http://localhost:8080\n")),(0,r.kt)("h2",{id:"the-remote-downloader-can-only-be-used-in-combination-with-grpc-caching"},"The remote downloader can only be used in combination with gRPC caching"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# from\nbazel build //src/main:app --experimental_remote_downloader=grpc://localhost:9090 --remote_cache=http://localhost:9090\n# to\nbazel build //src/main:app --experimental_remote_downloader=grpc://localhost:9090 --remote_cache=grpc://localhost:9090\n")),(0,r.kt)("h2",{id:"failed-to-query-remote-execution-capabilities-internal-http2-exception"},"Failed to query remote execution capabilities: INTERNAL: http2 exception"),(0,r.kt)("h2",{id:"bazelrc"},".bazelrc"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},".bazelignore")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u4f7f\u7528\u4efb\u610f\u73af\u5883\u53d8\u91cf",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53ef\u8003\u8651\u9884\u5148\u751f\u6210 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/stratum/stratum/pull/878/files"},"https://github.com/stratum/stratum/pull/878/files"))))))),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"system",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"/etc/bazel.bazelrc"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%ProgramData%\\bazel.bazelrc")),(0,r.kt)("li",{parentName:"ul"},"BAZEL_SYSTEM_BAZELRC_PATH"),(0,r.kt)("li",{parentName:"ul"},"--nosystem_rc"))),(0,r.kt)("li",{parentName:"ul"},"workspace",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},".bazelrc"),(0,r.kt)("li",{parentName:"ul"},"--noworkspace_rc"),(0,r.kt)("li",{parentName:"ul"},"$workspace/tools/bazel.rc"),(0,r.kt)("li",{parentName:"ul"},"--nomaster_bazelrc"))),(0,r.kt)("li",{parentName:"ul"},"home",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"$HOME/.bazelrc"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%USERPROFILE%\\.bazelrc"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%HOME%/.bazelrc")),(0,r.kt)("li",{parentName:"ul"},"--nohome_rc"))),(0,r.kt)("li",{parentName:"ul"},"--bazelrc"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/tensorflow/tensorflow/blob/master/.bazelrc"},"https://github.com/tensorflow/tensorflow/blob/master/.bazelrc")),(0,r.kt)("li",{parentName:"ul"},"\u53d8\u91cf",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"%workspace%")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"build --announce_rc\nbuild --copt -O0\nbuild --disk_cache=/tmp/bazel-disk-cache\n# Set convenient location for Bazel files to cache\nstartup --output_user_root=/tmp/bazel-cache/output-root\n\nbuild --verbose_failures=true\n# Profile build\nbuild --profile=/tmp/bazel.profile.json\n\n# JVM \u9650\u5236\n# startup --host_jvm_args=-Xmx3g --host_jvm_args=-Xms2g\n\n\ntry-import %workspace%/.bazelrc.user\n\n# Include git version info\nbuild --stamp\nbuild --workspace_status_command 'echo STABLE_GIT_COMMIT $(git rev-parse HEAD)'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# https://github.com/bazelbuild/bazelisk/blob/master/stamp.sh\nbuild:release -c opt --stamp --workspace_status_command="$PWD/stamp.sh"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Running bazel inside a `docker build` command causes trouble, cf:\n#   https://github.com/bazelbuild/bazel/issues/134\n# The easiest solution is to set up a bazelrc file forcing --batch.\nstartup --batch\n\n# Similarly, we need to workaround sandboxing issues:\n#   https://github.com/bazelbuild/bazel/issues/418\nbuild  --verbose_failures --spawn_strategy=standalone --strategy=Genrule=standalone\ntest --spawn_strategy=standalone\n\n# Force bazel output to use colors (good for jenkins) and print useful errors.\ncommon --color=yes\n\n# Configure tests - increase timeout, print errors and timeout warnings\ntest --verbose_failures --test_output=errors --test_verbose_timeout_warnings\n")),(0,r.kt)("h2",{id:"notes-1"},"Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.bazel.build/versions/main/build-ref.html"},"https://docs.bazel.build/versions/main/build-ref.html")),(0,r.kt)("li",{parentName:"ul"},"workspace"),(0,r.kt)("li",{parentName:"ul"},"package",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"BUILD"))),(0,r.kt)("li",{parentName:"ul"},"target"),(0,r.kt)("li",{parentName:"ul"},"label")),(0,r.kt)("h2",{id:"query"},"query"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"bazel-collector"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.bazel.build/versions/main/query.html"},"https://docs.bazel.build/versions/main/query.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.bazel.build/versions/main/query-how-to.html"},"https://docs.bazel.build/versions/main/query-how-to.html"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'bazel query //...\n\nbazel query set(BUILD, some-dir/BUILD)\nbazel query rdeps(//..., set(//:all //some-dir:all))\nbazel query rdeps(//..., set(some-file.java, some-file.sh))\n\nbazel query rebuildfiles(some-ext.bzl, some-dir/another-ext.bzl)\n\nbazel query kind("*_test", <sub query>)\nbazel query kind("artifact_ci_release", <sub query>)\n\nbazel query "allpaths(//foo, third_party/...)" --notool_deps --output graph | dot -Tsvg > /tmp/deps.svg\n')),(0,r.kt)("h2",{id:"bzlmod"},"bzlmod"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"bazel 5.0+"),(0,r.kt)("li",{parentName:"ul"},"MODULE.bazel"),(0,r.kt)("li",{parentName:"ul"},"--experimental_enable_bzlmod"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bazelbuild/bazel-central-registry"},"https://github.com/bazelbuild/bazel-central-registry")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.bazel.build/versions/main/bzlmod.html"},"https://docs.bazel.build/versions/main/bzlmod.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1moQfNcEIttsk6vYanNKIy3ZuK53hQUFq1b1r0rmsYVg/edit"},"https://docs.google.com/document/d/1moQfNcEIttsk6vYanNKIy3ZuK53hQUFq1b1r0rmsYVg/edit"))),(0,r.kt)("h1",{id:"faq"},"FAQ"),(0,r.kt)("h2",{id:"build-vs-buildbazel"},"BUILD vs BUILD.bazel"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bazelbuild/bazel/issues/4517"},"bazel#4517"))),(0,r.kt)("h2",{id:"fetching-local_config_xcode"},"Fetching @local_config_xcode"),(0,r.kt)("h2",{id:"from-google"},"from google"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"google"),(0,r.kt)("th",{parentName:"tr",align:null},"os"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"blaze"),(0,r.kt)("td",{parentName:"tr",align:null},"bazel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sponge"),(0,r.kt)("td",{parentName:"tr",align:null},"bru, BuildBuddy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tap"),(0,r.kt)("td",{parentName:"tr",align:null},"BuildKite, CircleCI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"forge"),(0,r.kt)("td",{parentName:"tr",align:null},"BuildFarm, BuildBarn")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cider"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"output"},"output"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"macOS /private/var/tmp"),(0,r.kt)("li",{parentName:"ul"},"Linux ~/.cache/bazel"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.bazel.build/versions/main/output_directories.html"},"https://docs.bazel.build/versions/main/output_directories.html")),(0,r.kt)("li",{parentName:"ul"},"out/",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_bazel_$USER")," - outputUserRoot - ",(0,r.kt)("inlineCode",{parentName:"li"},"--output_user_root"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"install/ - installBase",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"$MD5(installation manifest)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"_","embedded_binaries/"),(0,r.kt)("li",{parentName:"ul"},"builtins_bzl/"),(0,r.kt)("li",{parentName:"ul"},"platforms/"))))),(0,r.kt)("li",{parentName:"ul"},"$MD5(workspace path) - outputBase - ",(0,r.kt)("inlineCode",{parentName:"li"},"--output_base"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"command.log"),(0,r.kt)("li",{parentName:"ul"},"java.log"),(0,r.kt)("li",{parentName:"ul"},"action_cache/"),(0,r.kt)("li",{parentName:"ul"},"action_outs/"),(0,r.kt)("li",{parentName:"ul"},"external/",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"go_sdk/ - \u7f13\u5b58\u7684 Go SDK"),(0,r.kt)("li",{parentName:"ul"},"bazel_gazelle_go_repository_cache/ - \u7f13\u5b58\u7684 Go \u4ed3\u5e93"),(0,r.kt)("li",{parentName:"ul"},"org_golang_google_genproto/"),(0,r.kt)("li",{parentName:"ul"},"remotejdk11_macos/"),(0,r.kt)("li",{parentName:"ul"},"remote_java_tools_darwin/"),(0,r.kt)("li",{parentName:"ul"},"com_google_protobuf/"))),(0,r.kt)("li",{parentName:"ul"},"server/",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"jvm.out"))),(0,r.kt)("li",{parentName:"ul"},"execroot/",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"__main__"),"/ - $WORKSPACE",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"bazel-out/ - outputPath",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"stable-status.txt"),(0,r.kt)("li",{parentName:"ul"},"volatile-status.txt"),(0,r.kt)("li",{parentName:"ul"},"darwin-fastbuild/",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"bin/ - $(BINDIR)"))),(0,r.kt)("li",{parentName:"ul"},"host/ - BuildConfiguration"))),(0,r.kt)("li",{parentName:"ul"},"external"),(0,r.kt)("li",{parentName:"ul"},"$PACKAGES -> realpath"))))),(0,r.kt)("li",{parentName:"ul"},"bazel-remote-logs/"),(0,r.kt)("li",{parentName:"ul"},"bazel-workers/"),(0,r.kt)("li",{parentName:"ul"},"install -> installBase"))))))),(0,r.kt)("li",{parentName:"ul"},"bazel-out"),(0,r.kt)("li",{parentName:"ul"},"bazel-bin"),(0,r.kt)("li",{parentName:"ul"},"bazel-testlogs"),(0,r.kt)("li",{parentName:"ul"},"bazel-$WORKSPACE"),(0,r.kt)("li",{parentName:"ul"},"TEST_TMPDIR=~/.cache/bazel"),(0,r.kt)("li",{parentName:"ul"},"--output_user_root"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"project_dir = ctx.path(ctx.attr.file_in_project).dirname"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"__workspace_dir__"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# all go_sdk - \u6bcf\u4e2a 400MB\ndu -csh /private/var/tmp/_bazel_$USER/*/external/go_sdk\n\n# outputPath & action_cache\nbazel clean\n")))}c.isMDXComponent=!0}}]);