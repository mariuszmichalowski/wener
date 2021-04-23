(window.webpackJsonp=window.webpackJsonp||[]).push([[374],{448:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var c=n(3),r=n(8),a=(n(0),n(935)),l={id:"ccache"},o={unversionedId:"dev/build/ccache",id:"dev/build/ccache",isDocsHomePage:!1,title:"ccache",description:"ccache",source:"@site/notes/dev/build/ccache.md",slug:"/dev/build/ccache",permalink:"/notes/dev/build/ccache",editUrl:"https://github.com/wenerme/wener/edit/master/notes/dev/build/ccache.md",version:"current",sidebar:"docs",previous:{title:"sqlc",permalink:"/notes/languages/go/lib/sqlc"},next:{title:"magefile",permalink:"/notes/dev/build/mega"}},i=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]}],u={toc:i};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(c.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"ccache"},"ccache"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u7f13\u5b58\u7f16\u8bd1\u5355\u4e2a\u6587\u4ef6 C/C++/Objective-C/Objective-C++",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u4e0d\u5904\u7406\u591a\u6587\u4ef6\u7f16\u8bd1\u548c\u94fe\u63a5"))),Object(a.b)("li",{parentName:"ul"},"\u9700\u8981\u8fdb\u884c\u5c0f\u4fee\u6539\u7136\u540e\u91cd\u590d\u7f16\u8bd1\u7684\u573a\u666f\u975e\u5e38\u6709\u7528"))),Object(a.b)("li",{parentName:"ul"},"man ",Object(a.b)("a",{parentName:"li",href:"https://ccache.dev/manual/latest.html"},"ccache"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# \u5b89\u88c5\u4f7f\u7528 - \u901a\u8fc7\u5305\u5b89\u88c5\u7684\u4e00\u822c\u4f1a\u81ea\u5df1\u505a\u8fd9\u4e00\u6b65\ncp ccache /usr/local/bin/\nln -s ccache /usr/local/bin/gcc\nln -s ccache /usr/local/bin/g++\nln -s ccache /usr/local/bin/cc\nln -s ccache /usr/local/bin/c++\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u7edf\u8ba1\n# \u9ed8\u8ba4\u914d\u7f6e ~/.ccache/ccache.conf\nccache -s\n")),Object(a.b)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\uff5e/.ccache/ccache.conf"),Object(a.b)("li",{parentName:"ul"},"/etc/ccache.conf")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ini"},"# \u7f13\u5b58\u5927\u5c0f\nmax_size = 10.0G\n")))}b.isMDXComponent=!0},935:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var c=n(0),r=n.n(c);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),b=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,c=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=b(n),m=c,d=p["".concat(l,".").concat(m)]||p[m]||s[m]||a;return n?r.a.createElement(d,o(o({ref:t},u),{},{components:n})):r.a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:c,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);