"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[45677],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56859:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"aria2"},s=void 0,c={unversionedId:"service/download/aria2",id:"service/download/aria2",title:"aria2",description:"- webui",source:"@site/notes/service/download/aria2.md",sourceDirName:"service/download",slug:"/service/download/aria2",permalink:"/notes/service/download/aria2",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/download/aria2.md",tags:[],version:"current",frontMatter:{title:"aria2"},sidebar:"docs",previous:{title:"nocodb",permalink:"/notes/service/collaboration/nocodb"},next:{title:"transmission",permalink:"/notes/service/download/transmission"}},u=[{value:"explain",id:"explain",children:[],level:2},{value:"bt tracker",id:"bt-tracker",children:[],level:2},{value:"conf demo",id:"conf-demo",children:[],level:2}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"webui",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/mayswind/AriaNg"},"mayswind/AriaNg")," - Web",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://ariang.mayswind.net/latest"},"\u5728\u7ebf")))),(0,i.kt)("li",{parentName:"ul"},"Aria2WebUI"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ziahamza/webui-aria2"},"ziahamza/webui-aria2")))),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/P3TERX/Aria2-Pro-Docker"},"P3TERX/Aria2-Pro-Docker")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/P3TERX/aria2.conf"},"P3TERX/aria2.conf")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gist.github.com/qzm/a54559726896d5e6bf21adf2363ad334"},"qzm/aria2.conf"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# RPC \u542f\u52a8 - \u4e0d\u8bbe\u7f6e\u6743\u9650\naria2c --enable-rpc --rpc-allow-origin-all --rpc-listen-all\n\n# bt \u9009\u62e9\u4e0b\u8f7d\u6587\u4ef6\naria2c --show-files your-torrent-file.torrent\naria2c --select-file=3,6 your-torrent-file.torrent\n\n# \u4fdd\u5b58\u78c1\u529b\u94fe\u63a5\u5173\u8054\u7684 torrent \u6587\u4ef6\naria2c --bt-metadata-only=true --bt-save-metadata=true <magnet link>\n\naria2c --help=#rpc\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"$XDG_CACHE_HOME/aria2"),(0,i.kt)("li",{parentName:"ul"},"$HOME/.aria2")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-conf"},"# default 10M\ndisk-cache=128M\n# default 20M\nmin-split-size=10M\n\n# \u5355\u4e2a\u79cd\u5b50\u6700\u5927\u8fde\u63a5\u6570, \u9ed8\u8ba4:55\n# \u6b64\u9879\u65e0\u8bbaBT\u8fd8\u662fPT\u90fd\u5efa\u8bae\u8bbe\u5230999\uff0c\u8981\u60f3\u4e0b\u8f7d\u901f\u5ea6\u5feb\uff0c\u79cd\u5b50\u8fde\u63a5\u591a\u591a\u76ca\u5584\nbt-max-peers=999\n# \u6253\u5f00DHT\u529f\u80fd, PT\u9700\u8981\u7981\u7528, \u9ed8\u8ba4:true\n# \u6b64\u9879PT\u4e0b\u8f7d\u5fc5\u987b\u8bbe\u4e3afalse\uff0c\u5426\u5219\u6709\u5c01\u53f7\u98ce\u9669\u3002BT\u4e0b\u8f7d\u52a1\u5fc5\u8bbe\u4e3atrue\uff0c\u8ddf\u6d41\u6c13\u8f6f\u4ef6\u62a2\u8fde\u63a5\u5168\u9760\u5b83\u3002\nenable-dht=true\n# \u672c\u5730\u8282\u70b9\u67e5\u627e, PT\u9700\u8981\u7981\u7528, \u9ed8\u8ba4:false\n# \u6b64\u9879PT\u4e0b\u8f7d\u5fc5\u987b\u8bbe\u4e3afalse\uff0c\u5426\u5219\u6709\u5c01\u53f7\u98ce\u9669\u3002BT\u4e0b\u8f7d\u53ef\u4ee5\u8bbe\u4e3atrue\uff0c\u4e2a\u4eba\u8ba4\u4e3a\u63d0\u5347\u8fde\u63a5\u7684\u80fd\u529b\u5e76\u4e0d\u5f3a\uff0c\u4f46\u603b\u597d\u8fc7\u6ca1\u6709\u5427\u3002\nbt-enable-lpd=true\n# \u79cd\u5b50\u4ea4\u6362, PT\u9700\u8981\u7981\u7528, \u9ed8\u8ba4:true\n# \u6b64\u9879PT\u4e0b\u8f7d\u5fc5\u987b\u8bbe\u4e3afalse\uff0c\u5426\u5219\u6709\u5c01\u53f7\u98ce\u9669\u3002BT\u4e0b\u8f7d\u52a1\u5fc5\u8bbe\u4e3atrue\uff0c\u53ef\u4ee5\u8fde\u63a5\u5230\u66f4\u591a\u79cd\u5b50\u3002\nenable-peer-exchange=true\n# \u5ba2\u6237\u7aef\u4f2a\u88c5, PT\u9700\u8981\n#peer-id-prefix=-TR2770-\n#user-agent=Transmission/2.77\n\n#\u5f3a\u5236\u52a0\u5bc6, \u9632\u8fc5\u96f7\u5fc5\u5907\n#bt-require-crypto=true\n#\u5f53\u4e0b\u8f7d\u7684\u6587\u4ef6\u662f\u4e00\u4e2a\u79cd\u5b50(\u4ee5.torrent\u7ed3\u5c3e)\u65f6, \u81ea\u52a8\u4e0b\u8f7dBT\nfollow-torrent=true\n#\u542f\u7528\u672c\u5730\u8282\u70b9\u67e5\u627e\nbt-enable-lpd=true\n")),(0,i.kt)("h2",{id:"explain"},"explain"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[#2089b0 400.0KiB/33.2MiB(1%) CN:1 DL:115.7KiB ETA:4m51s]\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"#NNNNNN -GID \u524d 6 \u4f4d"),(0,i.kt)("li",{parentName:"ul"},"X/Y(Z%) - Completed length, the total file length and its ratio. If --select-file is used, this is the sum of selected file."),(0,i.kt)("li",{parentName:"ul"},"SEED Share ratio. The client is now seeding. After BitTorrent download finished, size information is replaced with this."),(0,i.kt)("li",{parentName:"ul"},"CN - \u94fe\u63a5\u6570"),(0,i.kt)("li",{parentName:"ul"},"SD - seeder \u8fde\u63a5\u6570"),(0,i.kt)("li",{parentName:"ul"},"DL - \u4e0b\u8f7d\u901f\u7387")),(0,i.kt)("h2",{id:"bt-tracker"},"bt tracker"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -LO https://github.com/ngosang/trackerslist/raw/master/trackers_all_ip.txt\necho bt-tracker=$(grep . trackers_all_ip.txt | tr '\\n' ',') > ~/.aria2/aria2.conf\n")),(0,i.kt)("h2",{id:"conf-demo"},"conf demo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"summary-interval=0\nlowest-speed-limit=50K\nmax-concurrent-downloads=10\nmax-connection-per-server=10\nmin-split-size=5M\nsplit=10\n\nenable-rpc\nrpc-listen-all\nrpc-allow-origin-all\nrpc-save-upload-metadata\n\nenable-dht\nbt-save-metadata\nbt-load-saved-metadata\nbt-seed-unverified\nbt-max-peers=0\nbt-max-open-files=2000\nbt-request-peer-speed-limit=100K\nbt-tracker-interval=120\nbt-request-peer-speed-limit=5M\nsave-session=${HOME}/.aria2/session\nsave-session-interval=300\ninput-file=${HOME}/.aria2/session\nmax-concurrent-downloads=99999\nseed-time=180\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"touch $HOME/.aria2/session\n")))}m.isMDXComponent=!0}}]);