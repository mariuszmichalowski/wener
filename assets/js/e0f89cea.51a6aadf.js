"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[28259],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,d=m["".concat(l,".").concat(f)]||m[f]||s[f]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},15981:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],p={title:"iOS Backup"},l=void 0,u={unversionedId:"platform/apple/ios-backup",id:"platform/apple/ios-backup",title:"iOS Backup",description:"- jfarley248/iTunesBackupReader",source:"@site/notes/platform/apple/ios-backup.md",sourceDirName:"platform/apple",slug:"/platform/apple/ios-backup",permalink:"/notes/platform/apple/ios-backup",editUrl:"https://github.com/wenerme/wener/edit/master/notes/platform/apple/ios-backup.md",tags:[],version:"current",frontMatter:{title:"iOS Backup"}},c=[{value:"Move messages from iPhone to Android",id:"move-messages-from-iphone-to-android",children:[],level:2}],s={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/jfarley248/iTunes_Backup_Reader"},"jfarley248/iTunes_Backup_Reader")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/avibrazil/iOSbackup"},"avibrazil/iOSbackup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/knoopx/mobilesync"},"knoopx/mobilesync")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/richinfante/iphonebackuptools"},"richinfante/iphonebackuptools")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Siguza/imobax"},"Siguza/imobax"))),(0,o.kt)("h1",{id:"faq"},"FAQ"),(0,o.kt)("h2",{id:"move-messages-from-iphone-to-android"},"Move messages from iPhone to Android"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gist.github.com/perplexes/2884630"},"https://gist.github.com/perplexes/2884630"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},".output iphone_sms_content.xml\nSELECT '  <sms protocol=\"0\" address=\"'||address||'\" date=\"'||date||'000\" type=\"'||(flags-1)||'\" subject=\"null\" body=\"'|| REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(text,'&','&amp;'),'<','&lt;'),'>','&gt;'),'\"','&quot;'),x'0d0a','#13;')||'\" toa=\"null\" sc_toa=\"null\" service_center=\"null\" read=\"1\" status=\"-1\" locked=\"0\" />' FROM message;\n.quit\n")))}m.isMDXComponent=!0}}]);