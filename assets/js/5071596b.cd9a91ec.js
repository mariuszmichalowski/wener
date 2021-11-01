"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[83429],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return k}});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=i.createContext({}),o=function(e){var t=i.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=o(e.components);return i.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=o(a),k=n,c=d["".concat(u,".").concat(k)]||d[k]||s[k]||l;return a?i.createElement(c,r(r({ref:t},m),{},{components:a})):i.createElement(c,r({ref:t},m))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:n,r[1]=p;for(var o=2;o<l;o++)r[o]=a[o];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},31822:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return o},toc:function(){return m},default:function(){return d}});var i=a(87462),n=a(63366),l=(a(67294),a(3905)),r=["components"],p={title:"DAHDI"},u=void 0,o={unversionedId:"voip/asterisk/dahdi",id:"voip/asterisk/dahdi",isDocsHomePage:!1,title:"DAHDI",description:"- \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/voip/asterisk/dahdi.md",sourceDirName:"voip/asterisk",slug:"/voip/asterisk/dahdi",permalink:"/notes/voip/asterisk/dahdi",editUrl:"https://github.com/wenerme/wener/edit/master/notes/voip/asterisk/dahdi.md",tags:[],version:"current",frontMatter:{title:"DAHDI"},sidebar:"docs",previous:{title:"Asterisk \u7f16\u7801",permalink:"/notes/voip/asterisk/codec"},next:{title:"\u5f00\u53d1",permalink:"/notes/voip/asterisk/dev"}},m=[{value:"OpenVox \u9a71\u52a8",id:"openvox-\u9a71\u52a8",children:[{value:"\u5176\u4ed6\u9a71\u52a8",id:"\u5176\u4ed6\u9a71\u52a8",children:[]}]},{value:"Digium \u6570\u5b57\u5361",id:"digium-\u6570\u5b57\u5361",children:[]},{value:"Digium \u6a21\u62df\u5361",id:"digium-\u6a21\u62df\u5361",children:[]},{value:"OpenVox",id:"openvox",children:[]}],s={toc:m};function d(e){var t=e.components,a=(0,n.Z)(e,r);return(0,l.kt)("wrapper",(0,i.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Digium Asterisk Hardware Device Interface"),(0,l.kt)("li",{parentName:"ul"},"Digium \u5f00\u53d1\u7684 Asterisk \u786c\u4ef6\u8bbe\u5907\u63a5\u53e3"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://docs.tzafrir.org.il/dahdi-linux/README.html"},"DAHDI Telephony Interface Driver")),(0,l.kt)("li",{parentName:"ul"},"dahdi tools \u5b9e\u9645\u64cd\u4f5c\u7684\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"/dev/dahdi/ctl")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://downloads.asterisk.org/pub/telephony/dahdi-linux-complete/"},"\u6e90\u7801\u4e0b\u8f7d")," / ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/asterisk/dahdi-linux"},"asterisk/dahdi-linux")),(0,l.kt)("li",{parentName:"ul"},"\u7248\u672c\u5386\u53f2",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"3.1 - 2019-10-7"),(0,l.kt)("li",{parentName:"ul"},"3.0 - 2018-11-15"),(0,l.kt)("li",{parentName:"ul"},"2.11 - 2015-12-22"))),(0,l.kt)("li",{parentName:"ul"},"\u7f16\u8bd1\u95ee\u9898",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"5.4 \u540e linux/pci-aspm.h \u53d8\u4e3a linux/pci.h"),(0,l.kt)("li",{parentName:"ul"},"5.0",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SUBDIRS=$(PWD)")," -> ",(0,l.kt)("inlineCode",{parentName:"li"},"M=$(shell pwd)")),(0,l.kt)("li",{parentName:"ul"},"implicit declaration of function ",(0,l.kt)("inlineCode",{parentName:"li"},"do_gettimeofday"),"; did you mean 'do_settimeofday64'?",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4ee5\u524d\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"linux/timekeeping32.h")," \u4e4b\u540e\u88ab\u5220\u9664"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://git.asterisk.org/gitweb/?p=dahdi/linux.git;a=blobdiff;f=drivers/dahdi/xpp/xbus-pcm.c;h=8bb2fe76c66a143242730e022cf8af3a6268b062;hp=37f9260e7ecb1c7b3e00b7bd942eac7bc95d6d05;hb=ffcd08205c71dcb0e060836359418bef20f07ffa;hpb=8468250328b607cbd2774c2209fbe5826be01098"},"xpp patch")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"do_gettimeofday(&di->last_lost_tick.tv);")," -> ",(0,l.kt)("inlineCode",{parentName:"li"},"di->last_lost_tick = ktime_get();")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"struct timeval now")," -> ",(0,l.kt)("inlineCode",{parentName:"li"},"const ktime_t now"),";"))),(0,l.kt)("li",{parentName:"ul"},"implicit declaration of function ",(0,l.kt)("inlineCode",{parentName:"li"},"touch_softlockup_watchdog"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4ee5\u524d ",(0,l.kt)("inlineCode",{parentName:"li"},"linux/sched.h")," \u73b0\u5728\u5728 ",(0,l.kt)("a",{parentName:"li",href:"https://elixir.bootlin.com/linux/v5.4/ident/touch_softlockup_watchdog"},"linux/nmi.h")))))),(0,l.kt)("li",{parentName:"ul"},"Openvox 2.11",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"include/kernel.h ",(0,l.kt)("inlineCode",{parentName:"li"},"#define dahdi_pci_module pci_register_driver")))),(0,l.kt)("li",{parentName:"ul"},"Ubuntu \u7684 DAHDi \u8865\u4e01\u53ef\u4ee5\u4f5c\u4e3a\u53c2\u8003 ",(0,l.kt)("a",{parentName:"li",href:"https://launchpad.net/ubuntu/+source/dahdi-linux/+changelog"},"https://launchpad.net/ubuntu/+source/dahdi-linux/+changelog")),(0,l.kt)("li",{parentName:"ul"},"Alpine \u7684 DAHDi \u9a71\u52a8\u5e26\u4e86 zaphfc \u7684\u8865\u4e01",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://community.asterisk.org/t/dahdi-with-hfc-s-pci-card/39320"},"https://community.asterisk.org/t/dahdi-with-hfc-s-pci-card/39320")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://gitlab.alpinelinux.org/alpine/aports/tree/v3.10.3/main/dahdi-linux-vanilla"},"https://gitlab.alpinelinux.org/alpine/aports/tree/v3.10.3/main/dahdi-linux-vanilla")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.voip-info.org/asterisk-zaphfc/"},"https://www.voip-info.org/asterisk-zaphfc/")))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wiki.asterisk.org/wiki/display/DAHDI/DAHDI"},"https://wiki.asterisk.org/wiki/display/DAHDI/DAHDI")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://git.asterisk.org/gitweb/?p=dahdi/tools.git;a=summary"},"http://git.asterisk.org/gitweb/?p=dahdi/tools.git;a=summary")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wiki.asterisk.org/wiki/display/DAHDI/Quick+Start+From+Source"},"https://wiki.asterisk.org/wiki/display/DAHDI/Quick+Start+From+Source"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4e2d\u65ad\ncat /proc/interrupts\n\n# \u7aef\u53e3\u4fe1\u606f\ngrep . /sys/bus/dahdi_spans/devices/span-*/{alarms,basechan,channels,desc,is_digital,is_sync_master,lbo,linecompat,lineconfig,local_spanno,name,spantype,syncsrc,uevent}\n# \u8bbe\u5907\u4fe1\u606f\ngrep . /sys/bus/dahdi_devices/devices/*/{assign_span,auto_assign,hardware_id,location,manufacturer,registration_time,span_count,spantype,type,uevent}\n\n# \u67e5\u770b\u7ebf\u8def\u7c7b\u578b\ngrep . /sys/bus/dahdi_devices/devices/*/spantype\nhead -q /proc/dahdi/*\n")),(0,l.kt)("h2",{id:"openvox-\u9a71\u52a8"},"OpenVox \u9a71\u52a8"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6e90\u7801\u4e0b\u8f7d",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.openvox.cn/pub/drivers/dahdi-linux-complete/releases/"},"http://www.openvox.cn/pub/drivers/dahdi-linux-complete/releases/")),(0,l.kt)("li",{parentName:"ul"},"2.11.1 \u5b98\u65b9\u7684\u6709\u4e00\u70b9\u95ee\u9898, \u53ef\u4ee5\u5c1d\u8bd5\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/wenerme/openvox-dahdi-linux"},"https://github.com/wenerme/openvox-dahdi-linux")," \u7684 myfix \u5206\u652f"))),(0,l.kt)("li",{parentName:"ul"},"NOTE",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"hardened \u7684\u5185\u6838\u7f16\u8bd1\u4f1a\u5931\u8d25, \u5e76\u4e14\u5728\u7f16\u8bd1\u8fc7\u7a0b\u4e2d\u4f1a\u62a5\u5f88\u591a\u5f02\u5e38",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"can't find starting instruction / can't decode instruction",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/torvalds/linux/blob/master/tools/objtool/Documentation/stack-validation.txt#L224"},"stack-validation.txt:224")))))),(0,l.kt)("li",{parentName:"ul"},"DAHDi \u7684 hardened \u7f16\u8bd1\u4e5f\u52a0\u4e86\u4e0d\u5c11\u8865\u4e01",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://git.alpinelinux.org/cgit/aports/tree/main/dahdi-linux-hardened/"},"https://git.alpinelinux.org/cgit/aports/tree/main/dahdi-linux-hardened/")))),(0,l.kt)("li",{parentName:"ul"},"vaillian \u7684\u5185\u6838\u80fd\u76f4\u63a5\u7f16\u8bd1\u6210\u529f")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://www.openvox.cn/pub/drivers/dahdi-linux-complete/openvox_dahdi-linux-complete-current.tar.gz\ntar zxvf openvox_dahdi-linux-complete-current.tar.gz\ncd dahdi-linux-complete*\n\nhttps://www.openvox.cn/pub/drivers/dahdi-linux-complete/openvox_dahdi-linux-complete-2.11.1.gz\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"apk add bison zlib{,-dev} ncurses{,-dev} libxml2{,-dev} openssl{,-dev} gnutls{,-dev} linux-headers make abuild gcc g++ perl git wget\n\n# \u8981\u770b\u5177\u4f53\u4f7f\u7528\u7684\u4ec0\u4e48\u5185\u6838 uname -r\n# apk add linux-hardened{,-dev}\napk add linux-vanilla{,-dev}\n\n# \u6216\u8005\u7528 docker \u7f16\u8bd1\ndocker run -it --rm -v $PWD:/src wener/asterisk:builder bash\n\n# \u5148\u7f16\u8bd1 dahdi \u9a71\u52a8\nmake install -C linux KVERS=4.9.49 DESTDIR=$PWD/dist/4.9.49\n\n# \u5982\u679c\u662f hardened \u90a3\u4e48\u4e00\u822c\u662f\u8fd9\u6837\u7684\nmake install KVERS=4.9.32-0-hardened\n# \u5b89\u88c5\u5230\u5176\u4ed6\u5730\u65b9\nmake install KVERS=4.9.32-0-hardened DESTDIR=$PWD/dist/4.9.32-0-hardened\n")),(0,l.kt)("h3",{id:"\u5176\u4ed6\u9a71\u52a8"},"\u5176\u4ed6\u9a71\u52a8"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"wctdmc1k")),(0,l.kt)("h2",{id:"digium-\u6570\u5b57\u5361"},"Digium \u6570\u5b57\u5361"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"wcte43x:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Digium TE435: PCI express quad-port T1/E1/J1"),(0,l.kt)("li",{parentName:"ul"},"Digium TE436: PCI quad-port T1/E1/J1"),(0,l.kt)("li",{parentName:"ul"},"Digium TE235: PCI express dual-port T1/E1/J1"),(0,l.kt)("li",{parentName:"ul"},"Digium TE236: PCI dual-port T1/E1/J1"))),(0,l.kt)("li",{parentName:"ul"},"wcte13xp:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Digium TE131: PCI express single-port T1/E1/J1"),(0,l.kt)("li",{parentName:"ul"},"Digium TE133: PCI express single-port T1/E1/J1 with echocan"),(0,l.kt)("li",{parentName:"ul"},"Digium TE132: PCI single-port T1/E1/J1"),(0,l.kt)("li",{parentName:"ul"},"Digium TE134: PCI single-port T1/E1/J1 with echocan"))),(0,l.kt)("li",{parentName:"ul"},"wct4xxp:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Digium TE205P/TE207P/TE210P/TE212P: PCI dual-port T1/E1/J1"),(0,l.kt)("li",{parentName:"ul"},"Digium TE405P/TE407P/TE410P/TE412P: PCI quad-port T1/E1/J1"),(0,l.kt)("li",{parentName:"ul"},"Digium TE220: PCI-Express dual-port T1/E1/J1"),(0,l.kt)("li",{parentName:"ul"},"Digium TE420: PCI-Express quad-port T1/E1/J1"),(0,l.kt)("li",{parentName:"ul"},"Digium TE820: PCI-Express eight-port T1/E1/J1"))),(0,l.kt)("li",{parentName:"ul"},"wcte12xp:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Digium TE120P: PCI single-port T1/E1/J1"),(0,l.kt)("li",{parentName:"ul"},"Digium TE121: PCI-Express single-port T1/E1/J1"),(0,l.kt)("li",{parentName:"ul"},"Digium TE122: PCI single-port T1/E1/J1"))),(0,l.kt)("li",{parentName:"ul"},"wcte11xp:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Digium TE110P: PCI single-port T1/E1/J1"))),(0,l.kt)("li",{parentName:"ul"},"wct1xxp:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Digium T100P: PCI single-port T1"),(0,l.kt)("li",{parentName:"ul"},"Digium E100P: PCI single-port E1"))),(0,l.kt)("li",{parentName:"ul"},"wcb4xxp:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Digium B410: PCI quad-port BRI"))),(0,l.kt)("li",{parentName:"ul"},"tor2: Tormenta quad-span T1/E1 card from the Zapata Telephony project")),(0,l.kt)("h2",{id:"digium-\u6a21\u62df\u5361"},"Digium \u6a21\u62df\u5361"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"wcaxx:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Digium A8A: PCI up to 8 mixed FXS/FXO ports"),(0,l.kt)("li",{parentName:"ul"},"Digium A8B: PCI express up to 8 mixed FXS/FXO ports"),(0,l.kt)("li",{parentName:"ul"},"Digium A4A: PCI up to 4 mixed FXS/FXO ports"),(0,l.kt)("li",{parentName:"ul"},"Digium A4B: PCI express up to 4 mixed FXS/FXO ports"))),(0,l.kt)("li",{parentName:"ul"},"wctdm24xxp:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Digium TDM2400P/AEX2400: up to 24 analog ports"),(0,l.kt)("li",{parentName:"ul"},"Digium TDM800P/AEX800: up to 8 analog ports"),(0,l.kt)("li",{parentName:"ul"},"Digium TDM410P/AEX410: up to 4 analog ports"),(0,l.kt)("li",{parentName:"ul"},"Digium Hx8 Series: Up to 8 analog or BRI ports"))),(0,l.kt)("li",{parentName:"ul"},"wctdm:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Digium TDM400P: up to 4 analog ports"))),(0,l.kt)("li",{parentName:"ul"},"xpp: Xorcom Astribank: a USB connected unit of up to 32 ports",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"including the digital BRI and E1/T1 modules"))),(0,l.kt)("li",{parentName:"ul"},"wcfxo: X100P, similar and clones. A simple single-port FXO card")),(0,l.kt)("h2",{id:"openvox"},"OpenVox"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"D110",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"wcte11xp"))),(0,l.kt)("li",{parentName:"ul"},"D130/D115",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"opvxd115"))),(0,l.kt)("li",{parentName:"ul"},"D230/D210 D430/D410 D830",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"wct4xxp"))),(0,l.kt)("li",{parentName:"ul"},"A400",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"modprobe wctdm opermode=CHINA"))),(0,l.kt)("li",{parentName:"ul"},"A800 A1200",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"modprobe opvxa1200 opermode=CHINA"))),(0,l.kt)("li",{parentName:"ul"},"A810 A2410",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"modprobe opvxa24xx opermode=CHINA"))),(0,l.kt)("li",{parentName:"ul"},"B400 B800",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"modprobe wcb4xxp te_nt_override=0x03"))),(0,l.kt)("li",{parentName:"ul"},"OpenVox G400P GSM/CDMA PCI",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"GSM \u9a71\u52a8"),(0,l.kt)("li",{parentName:"ul"},"opvxg4xx")))))}d.isMDXComponent=!0}}]);