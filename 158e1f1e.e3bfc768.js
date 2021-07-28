(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{1172:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||a;return t?o.a.createElement(m,i(i({ref:n},s),{},{components:t})):o.a.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},165:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(8),a=(t(0),t(1172)),l={title:"Shell FAQ"},i={unversionedId:"os/linux/shell/shell-faq",id:"os/linux/shell/shell-faq",isDocsHomePage:!1,title:"Shell FAQ",description:"\u6279\u91cf\u91cd\u547d\u540d",source:"@site/notes/os/linux/shell/shell-faq.md",slug:"/os/linux/shell/shell-faq",permalink:"/notes/os/linux/shell/shell-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/shell/shell-faq.md",version:"current",sidebar:"docs",previous:{title:"Shell Awesome",permalink:"/notes/os/linux/shell/shell-awesome"},next:{title:"\u80fd\u529b\u7ba1\u7406",permalink:"/notes/os/linux/sys/capabilities"}},c=[{value:"\u6279\u91cf\u91cd\u547d\u540d",id:"\u6279\u91cf\u91cd\u547d\u540d",children:[]},{value:"\u4fee\u590d\u4e00\u822c\u6587\u4ef6\u548c\u76ee\u5f55 mod",id:"\u4fee\u590d\u4e00\u822c\u6587\u4ef6\u548c\u76ee\u5f55-mod",children:[]}],s={toc:c};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u6279\u91cf\u91cd\u547d\u540d"},"\u6279\u91cf\u91cd\u547d\u540d"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'# \u6b63\u5219\nfind . -type f | perl -pe \'print $_; s/input/output/\' | xargs -d "\\n" -n2 mv\n\n# \u53bb\u6389\u5355\u5f15\u53f7 - escape \u6bd4\u8f83\u590d\u6742\nfind . -type f | grep "[\']" | perl -pe "print \\$_; s/\'//g" | xargs -d "\\n" -n2 mv\n\n# \u7535\u89c6\u5267\u7b2cN\u96c6 -> \u7535\u89c6\u5267 N\n# echo - dry run\nfind . -type f | perl -pe \'print $_; s/\u7b2c(\\d+)\u96c6/ \\1/\' | xargs -d "\\n" -n2 echo mv\n# \u7535\u89c6\u5267.01.mp4 -> \u7535\u89c6\u5267.EP01.mp4\nfind . -type f | perl -pe \'print $_; s/[.](\\d+)[.]/.EP\\1./\' | xargs -d "\\n" -n2 echo mv\n')),Object(a.b)("h2",{id:"\u4fee\u590d\u4e00\u822c\u6587\u4ef6\u548c\u76ee\u5f55-mod"},"\u4fee\u590d\u4e00\u822c\u6587\u4ef6\u548c\u76ee\u5f55 mod"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"find . -type d -exec chmod 0755 {} \\;\nfind . -type f -exec chmod 0644 {} \\;\n\n# \u4fee\u590d \u67d0\u4e2a owner\nfind . -type d -user harry -exec chown daisy {} \\;\n")))}p.isMDXComponent=!0}}]);