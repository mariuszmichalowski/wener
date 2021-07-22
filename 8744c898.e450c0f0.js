(window.webpackJsonp=window.webpackJsonp||[]).push([[571],{1152:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=b(n),m=a,u=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.a.createElement(u,o(o({ref:t},c),{},{components:n})):r.a.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},645:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),i=(n(0),n(1152)),l={title:"chan_dongle"},o={unversionedId:"voip/asterisk/chan_dongle",id:"voip/asterisk/chan_dongle",isDocsHomePage:!1,title:"chan_dongle",description:"- \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/voip/asterisk/chan_dongle.md",slug:"/voip/asterisk/chan_dongle",permalink:"/notes/voip/asterisk/chan_dongle",editUrl:"https://github.com/wenerme/wener/edit/master/notes/voip/asterisk/chan_dongle.md",version:"current",sidebar:"docs",previous:{title:"DAHDi Channel",permalink:"/notes/voip/asterisk/chan_dahdi"},next:{title:"chan_extra",permalink:"/notes/voip/asterisk/chan_extra"}},s=[{value:"dongle.conf",id:"dongleconf",children:[]},{value:"command",id:"command",children:[]}],c={toc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Asterisk \u652f\u6301\u5916\u7f6e GSM \u6a21\u5757"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/bg111/asterisk-chan-dongle/wiki/Requirements-and-Limitations"},"Requirements and Limitations")),Object(i.b)("li",{parentName:"ul"},"\u6e90\u7801",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u76ee\u524d\u5927\u591a\u4f7f\u7528 ",Object(i.b)("a",{parentName:"li",href:"https://github.com/oleg-krv/asterisk-chan-dongle"},"oleg-krv/asterisk-chan-dongle"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6700\u8fd1\u63d0\u4ea4 fork ",Object(i.b)("a",{parentName:"li",href:"https://github.com/phcoder/asterisk-chan-dongle"},"phcoder/asterisk-chan-dongle")))))),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/100809316"},"OpenWRT\u901a\u8fc73G Modem\u52a0asterisk\u5c06GSM\u901a\u8bdd\u8f6c\u4e3aSIP"))))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"apk add asterisk-chan-dongle\n\n# \u914d\u7f6e\ncp /etc/asterisk/dongle.conf.sample /etc/asterisk/dongle.conf\n\n# \u52a0\u8f7d\u6a21\u5757\nasterisk -rx 'module load chan_dongle.so'\n")),Object(i.b)("h2",{id:"dongleconf"},"dongle.conf"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ini"},"[general]\n\ninterval=15         ; \u5c1d\u8bd5\u8fde\u63a5\u8bbe\u5907\u7684\u95f4\u9694\n\n;------------------------------ JITTER BUFFER CONFIGURATION --------------------------\n;jbenable = yes         ; Enables the use of a jitterbuffer on the receiving side of a\n                ; Dongle channel. Defaults to \"no\". An enabled jitterbuffer will\n                ; be used only if the sending side can create and the receiving\n                ; side can not accept jitter. The Dongle channel can't accept jitter,\n                ; thus an enabled jitterbuffer on the receive Dongle side will always\n                ; be used if the sending side can create jitter.\n\n;jbforce = no           ; Forces the use of a jitterbuffer on the receive side of a Dongle\n                ; channel. Defaults to \"no\".\n\n;jbmaxsize = 200        ; Max length of the jitterbuffer in milliseconds.\n\n;jbresyncthreshold = 1000   ; Jump in the frame timestamps over which the jitterbuffer is\n                ; resynchronized. Useful to improve the quality of the voice, with\n                ; big jumps in/broken timestamps, usually sent from exotic devices\n                ; and programs. Defaults to 1000.\n\n;jbimpl = fixed         ; Jitterbuffer implementation, used on the receiving side of a Dongle\n                ; channel. Two implementations are currently available - \"fixed\"\n                ; (with size always equals to jbmaxsize) and \"adaptive\" (with\n                ; variable size, actually the new jb of IAX2). Defaults to fixed.\n\n;jbtargetextra = 40     ; This option only affects the jb when 'jbimpl = adaptive' is set.\n                ; The option represents the number of milliseconds by which the new jitter buffer\n                ; will pad its size. the default is 40, so without modification, the new\n                ; jitter buffer will set its size to the jitter value plus 40 milliseconds.\n                ; increasing this value may help if your network normally has low jitter,\n                ; but occasionally has spikes.\n\n;jblog = no         ; Enables jitterbuffer frame logging. Defaults to \"no\".\n;-----------------------------------------------------------------------------------\n\n; \u9ed8\u8ba4\u8bbe\u7f6e\n[defaults]\n\ncontext=default         ; \u547c\u5165\u9ed8\u8ba4 context\ngroup=0                   ; calling group\nrxgain=0                  ; increase the incoming volume; may be negative\ntxgain=0                  ; increase the outgoint volume; may be negative\nautodeletesms=yes       ; \u81ea\u52a8\u5220\u9664\u6536\u5230\u7684\u77ed\u4fe1\nresetdongle=yes         ; reset dongle during initialization with ATZ command\nu2diag=-1                 ; set ^U2DIAG parameter on device (0 = disable everything except modem function) ; -1 not use ^U2DIAG command\nusecallingpres=yes  ; use the caller ID presentation or not\ncallingpres=allowed_passed_screen ; set caller ID presentation      by default use default network settings\ndisablesms=no           ; disable of SMS reading from device when received\n                ;  chan_dongle has currently a bug with SMS reception. When a SMS gets in during a\n                ;  call chan_dongle might crash. Enable this option to disable sms reception.\n                ;  default = no\n\nlanguage=en           ; \u901a\u9053\u9ed8\u8ba4\u8bed\u8a00\nsmsaspdu=yes            ; PDU \u65b9\u5f0f\u53d1\u9001\u77ed\u4fe1\nmindtmfgap=45           ; minimal interval from end of previews DTMF from begining of next in ms\nmindtmfduration=80      ; minimal DTMF tone duration in ms\nmindtmfinterval=200     ; minimal interval between ends of DTMF of same digits in ms\n\ncallwaiting=auto        ; if 'yes' allow incoming calls waiting; by default use network settings\n                ; if 'no' waiting calls just ignored\ndisable=no          ; OBSOLETED by initstate: if 'yes' no load this device and just ignore this section\n\ninitstate=start         ; specified initial state of device, must be one of 'stop' 'start' 'remote'\n                ;   'remove' same as 'disable=yes'\n\nexten=+1234567890       ; exten for start incoming calls, only in case of Subscriber Number not available!, also set to CALLERID(ndid)\n\ndtmf=relax          ; control of incoming DTMF detection, possible values:\n                ;   off    - off DTMF tones detection, voice data passed to asterisk unaltered\n                ;              use this value for gateways or if not use DTMF for AVR or inside dialplan\n                ;   inband - do DTMF tones detection\n                ;   relax  - like inband but with relaxdtmf option\n                ;  default is 'relax' by compatibility reason\n\n; \u8bbe\u5907\n[dongle0]\naudio=/dev/ttyUSB1      ; \u97f3\u9891 tty \u7aef\u53e3\ndata=/dev/ttyUSB2         ; AT \u547d\u4ee4 tty \u7aef\u53e3\n\n; \u4f7f\u7528 imei, imsi \u53ef\u5ffd\u7565 audio, data \u914d\u7f6e - Linux \u4e0b\u80fd\u81ea\u52a8\u53d1\u73b0\n; audio \u548c data \u914d\u7f6e\u4f18\u5148\n; 15 \u4e2a\u6570\u5b57\nimei=123456789012345\nimsi=123456789012345\n")),Object(i.b)("h2",{id:"command"},"command"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"cmd"),Object(i.b)("th",{parentName:"tr",align:null},"desc"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"dongle callwaiting"),Object(i.b)("td",{parentName:"tr",align:null},"Enable/Disable Call-Waiting on the dongle")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"dongle cmd"),Object(i.b)("td",{parentName:"tr",align:null},"Send commands to port for debugging")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"dongle discovery"),Object(i.b)("td",{parentName:"tr",align:null},"Discovery devices and create config")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"dongle pdu"),Object(i.b)("td",{parentName:"tr",align:null},"Send PDU of SMS from the dongle")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"dongle reload"),Object(i.b)("td",{parentName:"tr",align:null},"Reload dongle")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"dongle remove"),Object(i.b)("td",{parentName:"tr",align:null},"Remove dongle")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"dongle reset"),Object(i.b)("td",{parentName:"tr",align:null},"Reset dongle now")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"dongle restart"),Object(i.b)("td",{parentName:"tr",align:null},"Restart dongle")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"dongle show device settings"),Object(i.b)("td",{parentName:"tr",align:null},"Show Dongle device settings")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"dongle show device state"),Object(i.b)("td",{parentName:"tr",align:null},"Show Dongle device state")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"dongle show device statistics"),Object(i.b)("td",{parentName:"tr",align:null},"Show Dongle device statistics")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"dongle show devices"),Object(i.b)("td",{parentName:"tr",align:null},"Show Dongle devices state")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"dongle show version"),Object(i.b)("td",{parentName:"tr",align:null},"Show module version")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"dongle sms"),Object(i.b)("td",{parentName:"tr",align:null},"Send SMS from the dongle")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"dongle start"),Object(i.b)("td",{parentName:"tr",align:null},"Start dongle")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"`dongle stop <now"),Object(i.b)("td",{parentName:"tr",align:null},"gracefully")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"dongle ussd"),Object(i.b)("td",{parentName:"tr",align:null},"Send USSD commands to the dongle")))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"IMSI ",Object(i.b)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/%E5%9B%BD%E9%99%85%E7%A7%BB%E5%8A%A8%E7%94%A8%E6%88%B7%E8%AF%86%E5%88%AB%E7%A0%81"},"https://zh.wikipedia.org/wiki/\u56fd\u9645\u79fb\u52a8\u7528\u6237\u8bc6\u522b\u7801"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"IMEI ",Object(i.b)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/IMEI"},"https://zh.wikipedia.org/wiki/IMEI"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"https://www.quora.com/What-is-the-difference-between-ICCID-IMSI-and-IMEI-numbers"},"https://www.quora.com/What-is-the-difference-between-ICCID-IMSI-and-IMEI-numbers"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"iPhone \u83b7\u53d6\u65b9\u5f0f",Object(i.b)("a",{parentName:"p",href:"https://support.apple.com/zh-cn/HT204073"},"https://support.apple.com/zh-cn/HT204073"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"https://www.dc-unlocker.com/"},"https://www.dc-unlocker.com/"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"http://a-zgsm.com/huawei.php"},"http://a-zgsm.com/huawei.php"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"https://github.com/bg111/asterisk-chan-dongle"},"https://github.com/bg111/asterisk-chan-dongle"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"http://www.modemunlock.com/huawei-modem-firmwares-download-all-huawei-firmwares"},"http://www.modemunlock.com/huawei-modem-firmwares-download-all-huawei-firmwares")))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"USSD -> ",Object(i.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Unstructured_Supplementary_Service_Data"},"https://en.wikipedia.org/wiki/Unstructured_Supplementary_Service_Data"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"PDU ",Object(i.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Protocol_data_unit"},"https://en.wikipedia.org/wiki/Protocol_data_unit"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"http://www.smartposition.nl/resources/sms_pdu.html"},"http://www.smartposition.nl/resources/sms_pdu.html"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"smsc Short Message Service Center\uff08\u77ed\u6d88\u606f\u670d\u52a1\u4e2d\u5fc3\uff09"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'$ blkid /dev/sr1\n# /dev/sr1: UUID="2009-12-16-02-00-00-00" LABEL="Mobile Partner" TYPE="iso9660" PTTYPE="mac"\nmount -t iso9660 /dev/sr1 /mnt/a\n\n# MAC\nioreg -p IOUSB -l -b | grep -10 -i huawei\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://m2msupport.net/m2msupport/module-tester/"},"http://m2msupport.net/m2msupport/module-tester/")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://wiki.archlinux.org/index.php/Huawei_E1550_3G_modem"},"https://wiki.archlinux.org/index.php/Huawei_E1550_3G_modem"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'apk add screen usb-modeswitch-udev usbutils\n\n# \u63d2\u5165 USB\n# \u53ef\u4ee5\u8bbf\u95ee\u5230\u9644\u5e26\u7684\u5b58\u50a8\nblkid /dev/sr1\n# /dev/sr1: UUID="2009-12-16-02-00-00-00" LABEL="Mobile Partner" TYPE="iso9660" PTTYPE="mac"\n# mount -t iso9660 /dev/sr1 /mnt/a\n# \u67e5\u770b product\nlsusb.py\n# \u5207\u6362\u4e3a modem \u6a21\u5f0f, \u66ff\u6362\u4e3a\u81ea\u5df1\u7684\n# lsusb.py 2>/dev/null | sed -nre \'s/^.*?12d1:(\\S+).*/\\1/p\'\nPRODUCT_ID=`lsusb.py 2>/dev/null | sed -nre \'s/^.*?12d1:(\\S+).*/\\1/p\'`\n/lib/udev/usb_modeswitch --vendor 0x12d1 --product=0x$PRODUCT_ID --type option-zerocd\nmodprobe usbserial vendor=0x12d1 product=0x$PRODUCT_ID\n\n# 1001 \u7684\u4f1a\u51fa\u6765\u4e09\u4e2a\u7aef\u53e3, \u5206\u522b\u4e3a modem,diag,pcui\n# 1003 \u7684\u4e0d\u4f1a\u6709 diag, \u76ee\u524d\u731c\u6d4b\u4e3a\u8bed\u97f3\u62e8\u53f7\n')))}b.isMDXComponent=!0}}]);