"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[99431],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79130:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=["components"],c={title:"wayback-machine-downloader"},l=void 0,s={unversionedId:"service/data/crawler/wayback-machine-downloader",id:"service/data/crawler/wayback-machine-downloader",isDocsHomePage:!1,title:"wayback-machine-downloader",description:"wayback-machine-downloader",source:"@site/notes/service/data/crawler/wayback-machine-downloader.md",sourceDirName:"service/data/crawler",slug:"/service/data/crawler/wayback-machine-downloader",permalink:"/notes/service/data/crawler/wayback-machine-downloader",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/data/crawler/wayback-machine-downloader.md",version:"current",frontMatter:{title:"wayback-machine-downloader"},sidebar:"docs",previous:{title:"Wayback Machine",permalink:"/notes/service/data/crawler/wayback-machine"},next:{title:"ISO",permalink:"/notes/service/data/std/iso"}},d=[{value:"wayback-machine-downloader",id:"wayback-machine-downloader",children:[]}],p={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"wayback-machine-downloader"},"wayback-machine-downloader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u56fd\u5185\u9700\u8981\u5f00\u542f\u4ee3\u7406\ndocker run --rm -it \\\n  -v $PWD/websites:/websites \\\n  -e http_proxy=http://192.168.1.1:8080 \\\n  -e https_proxy=http://192.168.1.1:8080 \\\n  hartator/wayback-machine-downloader http://example.com\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'--only "/\\.(gif|jpg|jpeg)$/i"\n--only "/[^/]+/album$/i"\n-c 4\n# \u4e0b\u8f7d list \u4e3a JSON\n--list\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-d, --directory PATH             Directory to save the downloaded files into\n                                 Default is ./websites/ plus the domain name\n-s, --all-timestamps             Download all snapshots/timestamps for a given website\n-f, --from TIMESTAMP             Only files on or after timestamp supplied (ie. 20060716231334)\n-t, --to TIMESTAMP               Only files on or before timestamp supplied (ie. 20100916231334)\n-e, --exact-url                  Download only the url provied and not the full site\n-o, --only ONLY_FILTER           Restrict downloading to urls that match this filter\n                                 (use // notation for the filter to be treated as a regex)\n-x, --exclude EXCLUDE_FILTER     Skip downloading of urls that match this filter\n                                 (use // notation for the filter to be treated as a regex)\n-a, --all                        Expand downloading to error files (40x and 50x) and redirections (30x)\n-c, --concurrency NUMBER         Number of multiple files to download at a time\n                                 Default is one file at a time (ie. 20)\n-p, --maximum-snapshot NUMBER    Maximum snapshot pages to consider (Default is 100)\n                                 Count an average of 150,000 snapshots per page\n-l, --list                       Only list file urls in a JSON format with the archived timestamps, won't download anything\n")))}u.isMDXComponent=!0}}]);