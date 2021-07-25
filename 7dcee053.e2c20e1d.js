(window.webpackJsonp=window.webpackJsonp||[]).push([[536],{1166:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return b}));var t=r(0),a=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),d=function(e){var n=a.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},p=function(e){var n=d(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(r),m=t,b=p["".concat(o,".").concat(m)]||p[m]||s[m]||i;return r?a.a.createElement(b,c(c({ref:n},u),{},{components:r})):a.a.createElement(b,c({ref:n},u))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},610:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return l})),r.d(n,"default",(function(){return d}));var t=r(3),a=r(8),i=(r(0),r(1166)),o={id:"arduino",title:"Arduino"},c={unversionedId:"hardware/microcontroller/dev/arduino",id:"hardware/microcontroller/dev/arduino",isDocsHomePage:!1,title:"Arduino",description:"* arduino/arduino-cli",source:"@site/notes/hardware/microcontroller/dev/arduino.md",slug:"/hardware/microcontroller/dev/arduino",permalink:"/notes/hardware/microcontroller/dev/arduino",editUrl:"https://github.com/wenerme/wener/edit/master/notes/hardware/microcontroller/dev/arduino.md",version:"current",sidebar:"docs",previous:{title:"RISC-V",permalink:"/notes/hardware/arch/riscv/riscv"},next:{title:"ESP32",permalink:"/notes/hardware/soc/esp32/esp32"}},l=[{value:"managers",id:"managers",children:[]},{value:"cli",id:"cli",children:[]}],u={toc:l};function d(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/arduino/arduino-cli"},"arduino/arduino-cli"))),Object(i.b)("h2",{id:"managers"},"managers"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://arduino.esp8266.com/stable/package_esp8266com_index.json"},"http://arduino.esp8266.com/stable/package_esp8266com_index.json")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://digistump.com/package_digistump_index.json"},"http://digistump.com/package_digistump_index.json")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://drazzy.com/package_drazzy.com_index.json"},"http://drazzy.com/package_drazzy.com_index.json"))),Object(i.b)("h2",{id:"cli"},"cli"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://arduino.stackexchange.com/questions/15893"},"How to compile, upload and monitor via the Linux command line?")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/arduino/serial-discovery"},"https://github.com/arduino/serial-discovery")),Object(i.b)("li",{parentName:"ul"},"\u914d\u7f6e",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"macOS - $HOME/Library/Arduino15/arduino-cli.yaml")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# macos\nbrew install arduino-cli\n\n# linux\ncurl -LO https://downloads.arduino.cc/arduino-cli/arduino-cli_latest_Linux_64bit.tar.gz\ntar zxvf arduino-cli_latest_Linux_64bit.tar.gz\nsudo mv arduino-cli /usr/local/bin/\n\n# alpinelinux\n# \u4f9d\u7136\u4f1a\u6709 __strdup: symbol not found\n# \u9664\u975e\u4f7f\u7528 glibc \u5426\u5219\u65e0\u89e3\napk add libc6-compat gcompat\n\narduino-cli config init\n\narduino-cli core update-index\narduino-cli core search\n\n# \u5305\u542b\u5f88\u591a\u57fa\u7840\u5de5\u5177\narduino-cli coree install arduino:avr\n\narduino-cli core update-index --additional-urls http://digistump.com/package_digistump_index.json\narduino-cli core install digistump:avr --additional-urls http://digistump.com/package_digistump_index.json\n\n# \u5141\u8bb8\u64cd\u4f5c serial\nsudo adduser $USER dialout\n\narduino-cli board list\n\narduino-cli sketch new FirstSketch\ncd FirstSketch\n# arduino:avr:uno\narduino-cli compile -b digistump:avr:digispark-tiny\n")))}d.isMDXComponent=!0}}]);