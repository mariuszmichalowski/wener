"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[25796],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return m}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),f=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},s=function(e){var n=f(e.components);return t.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=f(r),m=o,d=p["".concat(c,".").concat(m)]||p[m]||u[m]||l;return r?t.createElement(d,a(a({ref:n},s),{},{components:r})):t.createElement(d,a({ref:n},s))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var f=2;f<l;f++)a[f]=r[f];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6665:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return f},toc:function(){return s},default:function(){return p}});var t=r(22122),o=r(19756),l=(r(67294),r(3905)),a=["components"],i={id:"collabora",title:"Collabora Online"},c=void 0,f={unversionedId:"service/office/collabora",id:"service/office/collabora",isDocsHomePage:!1,title:"Collabora Online",description:"* \u670d\u52a1\u7aef\u8fd0\u884c Libreoffice",source:"@site/notes/service/office/collabora.md",sourceDirName:"service/office",slug:"/service/office/collabora",permalink:"/notes/service/office/collabora",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/office/collabora.md",version:"current",frontMatter:{id:"collabora",title:"Collabora Online"},sidebar:"docs",previous:{title:"\u529e\u516c\u5957\u4ef6",permalink:"/notes/service/office/office"},next:{title:"LibreOffice Online",permalink:"/notes/service/office/libreoffice-online"}},s=[],u={toc:s};function p(e){var n=e.components,r=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u8fd0\u884c Libreoffice"),(0,l.kt)("li",{parentName:"ul"},"\u754c\u9762\u6e32\u67d3\u5230\u6d4f\u89c8\u5668\u5ba2\u6237\u7aef"),(0,l.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u5904\u7406\u83dc\u5355\u3001\u5149\u6807\u3001\u6587\u672c\u9009\u62e9\u7b49"),(0,l.kt)("li",{parentName:"ul"},"\u5f39\u51fa\u83dc\u5355\u548c\u4fa7\u8fb9\u680f\u4e5f\u662f\u7531\u670d\u52a1\u7aef\u6e32\u67d3"),(0,l.kt)("li",{parentName:"ul"},"Collabora Online CODE \u5b9e\u73b0\u57fa\u4e8e LibreOffice Online LOOL (LOOLWSD)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"20 \u4eba\u9650\u5236\uff0c\u53ef\u81ea\u5df1\u7f16\u8bd1\u53d6\u6d88\u9650\u5236"),(0,l.kt)("li",{parentName:"ul"},"\u4e24\u8005\u533a\u522b\u5e76\u4e0d\u5927"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/libreoffice/online"},"libreoffice/online")," \u955c\u50cf")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# https://www.collaboraoffice.com/code/docker/\n# \u7ba1\u7406\n# http://collabora.localhost/loleaflet/dist/admin/admin.html\n# -v $PWD/loolwsd.xml:/etc/loolwsd/loolwsd.xml \n# -e "extra_params=--o:ssl.enable=false" \u4e0d\u542f\u7528 ssl\n# \u652f\u6301\u591a\u4e2a\u57df\u540d \'domain=collaboradomain\\\\.tld|nextclouddomain\\\\.tld\'\n# \u57df\u540d\u4e3a nextcloud \u7684\u57df\u540d - \u8bbf\u95ee\u8005\u7684\u57df\u540d\n# \u542f\u52a8\u6bd4\u8f83\u6162 - \u4f1a link \u5f88\u591a\u8d44\u6e90\ndocker run --rm -it \\\n  -p 9980:9980 \\\n  -e "domain=collabora.localhost" \\\n  -e "username=admin" -e "password=S3cRet" \\\n  -e "extra_params=--o:ssl.enable=false --o:allowed_languages=zh_CN" \\\n  --cap-add MKNO \\\n  -e \'dictionaries=zh en\' \\\n  --name collabora collabora/code\n\n# \u62f7\u8d1d\u914d\u7f6e\ndocker cp collabora:/etc/loolwsd/loolwsd.xml loolwsd.xml\n')))}p.isMDXComponent=!0}}]);