(window.webpackJsonp=window.webpackJsonp||[]).push([[553],{1166:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),s=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||a;return t?o.a.createElement(d,l(l({ref:n},p),{},{components:t})):o.a.createElement(d,l({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},627:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(8),a=(t(0),t(1166)),i={title:"Pi Hole"},l={unversionedId:"service/network/pihole",id:"service/network/pihole",isDocsHomePage:!1,title:"Pi Hole",description:"- \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/service/network/pihole.md",slug:"/service/network/pihole",permalink:"/notes/service/network/pihole",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/network/pihole.md",version:"current",sidebar:"docs",previous:{title:"nps",permalink:"/notes/service/network/nps"},next:{title:"Privoxy Action",permalink:"/notes/service/network/privoxy-action"}},c=[{value:"internal",id:"internal",children:[]},{value:"\u907f\u514d\u89e3\u6790 local",id:"\u907f\u514d\u89e3\u6790-local",children:[]}],p={toc:c};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u57fa\u4e8e DNS \u7684 AD/Tracker Block"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/pi-hole/pi-hole/"},"pi-hole/pi-hole")),Object(a.b)("li",{parentName:"ul"},"\u7aef\u53e3")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'cat <<YAML > docker-compose.yaml\nversion: "3"\n\n# More info at https://github.com/pi-hole/docker-pi-hole/ and https://docs.pi-hole.net/\nservices:\n  pihole:\n    container_name: pihole\n    image: pihole/pihole:latest\n    ports:\n      - "53:53/tcp"\n      - "53:53/udp"\n      - "67:67/udp"\n      - "80:80/tcp"\n      - "443:443/tcp"\n    environment:\n      TZ: \'America/Chicago\'\n      WEBPASSWORD: \'password\' # \u4e0d\u8bbe\u7f6e\u5219\u4e3a\u968f\u673a\n    # Volumes store your data between container upgrades\n    volumes:\n      - \'./pihole/etc:/etc/pihole/\'\n      - \'./pihole/dnsmasq.d:/etc/dnsmasq.d/\'\n    # Recommended but not required (DHCP needs NET_ADMIN)\n    # https://github.com/pi-hole/docker-pi-hole#note-on-capabilities\n    cap_add:\n      - NET_ADMIN\n    restart: unless-stopped\nYAML\ndocker-compose up --detach\n\n# docker \u76f4\u63a5\u542f\u52a8\n# registry.cn-hongkong.aliyuncs.com/cmi\ndocker run -d --restart always\\\n  -e TZ=Asia/Shanghai \\\n  -e WEBPASSWORD=password \\\n  -v $PWD/pihole/etc:/etc/pihole \\\n  -v $PWD/pihole/dnsmasq.d:/etc/dnsmasq.d \\\n  -p 53:53 -p 53:53/udp -p 67:67/udp -p 80:80 -p 443:443 \\\n  --name pihole pihole/pihole:latest\n')),Object(a.b)("h2",{id:"internal"},"internal"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"dnsmasq"),Object(a.b)("li",{parentName:"ul"},"lighttpd"),Object(a.b)("li",{parentName:"ul"},"php"),Object(a.b)("li",{parentName:"ul"},"AdminLTE"),Object(a.b)("li",{parentName:"ul"},"sqlite3"),Object(a.b)("li",{parentName:"ul"},"pihole-FTL",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49 dnsmasq = \u6838\u5fc3 dns+dhcp+api \u670d\u52a1"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/pi-hole/FTL"},"https://github.com/pi-hole/FTL")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"telnet 127.0.0.1 471"))))),Object(a.b)("h1",{id:"faq"},"FAQ"),Object(a.b)("h2",{id:"\u907f\u514d\u89e3\u6790-local"},"\u907f\u514d\u89e3\u6790 local"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"/etc/dnsmasq.d/02-pihole.conf")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ini"},"local=/lan/\nlocal=/local/\nlocal=/internal/\n")))}s.isMDXComponent=!0}}]);