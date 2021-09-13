"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[88402],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,w=m["".concat(u,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(w,o(o({ref:t},c),{},{components:n})):r.createElement(w,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66743:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={id:"iwd",title:"IWD"},u="iwd",p={unversionedId:"os/linux/network/iwd",id:"os/linux/network/iwd",isDocsHomePage:!1,title:"IWD",description:"Tips",source:"@site/notes/os/linux/network/iwd.md",sourceDirName:"os/linux/network",slug:"/os/linux/network/iwd",permalink:"/notes/os/linux/network/iwd",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/network/iwd.md",tags:[],version:"current",frontMatter:{id:"iwd",title:"IWD"},sidebar:"docs",previous:{title:"iptables \u89c4\u5219",permalink:"/notes/os/linux/network/iptables-rule"},next:{title:"MitmProxy",permalink:"/notes/os/linux/network/mitmproxy"}},c=[{value:"Tips",id:"tips",children:[]}],s={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"iwd"},"iwd"),(0,a.kt)("h2",{id:"tips"},"Tips"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pkgs.alpinelinux.org/contents?branch=edge&name=iwd&arch=x86_64&repo=community"},"iwd"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/usr/libexec/iwd")," - \u5b88\u62a4\u8fdb\u7a0b"),(0,a.kt)("li",{parentName:"ul"},"/usr/libexec/ead -  Ethernet authentication daemon"),(0,a.kt)("li",{parentName:"ul"},"/usr/bin/iwmon - \u76d1\u542c RF \u5305"),(0,a.kt)("li",{parentName:"ul"},"/usr/bin/iwctl - \u901a\u8fc7 dbus \u4e0e iwd \u4ea4\u4e92",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e09\u79cd\u6a21\u5f0f\u5206\u522b\u4f7f\u7528\u76f8\u540c\u540d\u5b57\u7684\u547d\u4ee4\u53bb\u63a7\u5236"))))),(0,a.kt)("li",{parentName:"ul"},"\u5bc6\u7801\u4f4d\u4e8e ",(0,a.kt)("inlineCode",{parentName:"li"},"/var/lib/iwd")),(0,a.kt)("li",{parentName:"ul"},"\u5bc6\u7801\u8981\u6c42 8-63 \u4f4d ASCII \u7f16\u7801"),(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u5907\u6709\u4e09\u79cd\u6a21\u5f0f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"station"),(0,a.kt)("li",{parentName:"ul"},"ap"),(0,a.kt)("li",{parentName:"ul"},"ad-hoc",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Wireless_ad_hoc_network"},"WANET"))))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \ndevice list\ndevice wlan0 show\ndevice wlan0 set-property Powered on\ndevice wlan0 set-property Mode station\n\nstation wlan0 scan\n# \u8fde\u63a5 - \u4f1a\u63d0\u793a\u8f93\u5165\u5bc6\u7801\nstation wlan0 connect <SSID>\n\n# \u67e5\u770b\u8bbe\u5907\u4fe1\u606f\nadapter list\nadapter wlan0 show\n# \u67e5\u770b\u8fde\u63a5\u8fc7\u7684\u7f51\u7edc\n# \u53ef\u4ee5\u8bbe\u7f6e AutoConnect - \u9ed8\u8ba4\u5f00\u542f\nknown-networks list\n\n# \u67e5\u770b\u652f\u6301 wsc \u7684\u8bbe\u5907\nwsc list\n")))}m.isMDXComponent=!0}}]);