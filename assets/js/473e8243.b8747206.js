"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[92358],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(r),h=i,k=m["".concat(l,".").concat(h)]||m[h]||u[h]||a;return r?n.createElement(k,o(o({ref:t},c),{},{components:r})):n.createElement(k,o({ref:t},c))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},49075:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],p={id:"wireshark",title:"Wireshark"},l=void 0,s={unversionedId:"service/network/wireshark",id:"service/network/wireshark",title:"Wireshark",description:"Tips",source:"@site/notes/service/network/wireshark.md",sourceDirName:"service/network",slug:"/service/network/wireshark",permalink:"/notes/service/network/wireshark",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/network/wireshark.md",tags:[],version:"current",frontMatter:{id:"wireshark",title:"Wireshark"},sidebar:"docs",previous:{title:"WireGuard",permalink:"/notes/service/network/wireguard"},next:{title:"Zerotier",permalink:"/notes/service/network/zerotier"}},c=[{value:"Tips",id:"tips",children:[],level:2},{value:"Filter",id:"filter",children:[],level:2},{value:"Remote",id:"remote",children:[],level:2}],u={toc:c};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"tips"},"Tips"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://packetlife.net/library/cheat-sheets/"},"http://packetlife.net/library/cheat-sheets/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.wireshark.org/tools/"},"Wireshark \u5de5\u5177")),(0,a.kt)("li",{parentName:"ul"},"How I use Wireshark ",(0,a.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=17344342"},"https://news.ycombinator.com/item?id=17344342"))),(0,a.kt)("h2",{id:"filter"},"Filter"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Display",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wiki.wireshark.org/DisplayFilters"},"https://wiki.wireshark.org/DisplayFilters")))),(0,a.kt)("li",{parentName:"ul"},"Capture",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wiki.wireshark.org/CaptureFilters"},"https://wiki.wireshark.org/CaptureFilters")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.wireshark.org/docs/wsug_html_chunked/ChCapCaptureFilterSection.html"},"https://www.wireshark.org/docs/wsug_html_chunked/ChCapCaptureFilterSection.html")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.tcpdump.org/manpages/pcap-filter.7.html"},"http://www.tcpdump.org/manpages/pcap-filter.7.html")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.wireshark.org/tools/string-cf.html"},"\u5b57\u7b26\u4e32\u5339\u914d\u751f\u6210\u5668"))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dst host <name/ip>\nsrc host <name/ip>\nhost <name/ip>\n\ndst port <port>\nsrc port <port>\nport <port>\n\nicmp\nudp\ntcp\nrtsp\nrtp\n\nand &&\nor ||\nnot !\n")),(0,a.kt)("h2",{id:"remote"},"Remote"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.wireshark.org/docs/man-pages/sshdump.html"},"https://www.wireshark.org/docs/man-pages/sshdump.html")),(0,a.kt)("li",{parentName:"ul"},"Provide interfaces to capture from a remote host through SSH using a remote capture binary."),(0,a.kt)("li",{parentName:"ul"},"tshark")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ssh admin@192.168.1.2 tcpdump -U -s0 'not port 22' -i eth0 -w - | wireshark -k -i -\n\nmkfifo /tmp/remote\nwireshark -k -i /tmp/remote\nssh root@firewall \"tcpdump -s 0 -U -n -w - -i eth0 not port 22\" > /tmp/remote\n")))}m.isMDXComponent=!0}}]);