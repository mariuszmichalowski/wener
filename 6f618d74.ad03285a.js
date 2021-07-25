(window.webpackJsonp=window.webpackJsonp||[]).push([[476],{1169:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),m=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},o=function(e){var t=m(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),o=m(n),s=a,O=o["".concat(l,".").concat(s)]||o[s]||u[s]||i;return n?r.a.createElement(O,b(b({ref:t},p),{},{components:n})):r.a.createElement(O,b({ref:t},p))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var p=2;p<i;p++)l[p]=n[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},550:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(8),i=(n(0),n(1169)),l={title:"SNMP MIB"},b={unversionedId:"service/network/snmp-mib",id:"service/network/snmp-mib",isDocsHomePage:!1,title:"SNMP MIB",description:"- \u53c2\u8003",source:"@site/notes/service/network/snmp-mib.md",slug:"/service/network/snmp-mib",permalink:"/notes/service/network/snmp-mib",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/network/snmp-mib.md",version:"current",sidebar:"docs",previous:{title:"\u4ee3\u7406",permalink:"/notes/service/network/proxy-awesome"},next:{title:"Squid",permalink:"/notes/service/network/squid"}},c=[{value:"General",id:"general",children:[]},{value:"Printer",id:"printer",children:[]},{value:"HOST-RESOURCES-MIB",id:"host-resources-mib",children:[]},{value:"UCD-SNMP-MIB",id:"ucd-snmp-mib",children:[]},{value:"UBNT",id:"ubnt",children:[]}],p={toc:c};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://www.mibdepot.com"},"mibDepot")," - Free SNMP MIB Search Engine for SNMP MIBs"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/prometheus/snmp_exporter/blob/main/generator/generator.yml"},"prometheus/snmp_exporter/generator/generator.yml"))))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"net-snmp-config --default-mibdirs\nmkdir -p ~/.snmp/mibs\n# --create-dirs\ncurl --output-dir ~/.snmp/mibs -O ftp://ftp.cisco.com/pub/mibs/v2/CISCO-SMI.my\ncurl --output-dir ~/.snmp/mibs -O ftp://ftp.cisco.com/pub/mibs/v2/CISCO-RHINO-MIB.my\n\nsnmptranslate -m +CISCO-RHINO-MIB -IR -On ciscoLS1010ChassisFanLed\nsnmptranslate -On CISCO-RHINO-MIB::ciscoLS1010ChassisFanLed\n\n# mibs +ALL\ncat <<CONF >> $HOME/.snmp/snmp.conf\nmibs +CISCO-RHINO-MIB\nCONF\n\n# env\nMIBS=+CISCO-RHINO-MIB:SOME-OTHER-SPIFFY-MIB\nexport MIBS\n")),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"sysLocation ",Object(i.b)("a",{parentName:"li",href:"https://www.alvestrand.no/objectid/1.3.6.1.2.1.1.6.html"},"https://www.alvestrand.no/objectid/1.3.6.1.2.1.1.6.html"))),Object(i.b)("h2",{id:"printer"},"Printer"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Printer MIB v2 ",Object(i.b)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc3805"},"https://tools.ietf.org/html/rfc3805")),Object(i.b)("li",{parentName:"ul"},"Printer MIB ",Object(i.b)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc1759"},"https://tools.ietf.org/html/rfc1759"))),Object(i.b)("h2",{id:"host-resources-mib"},"HOST-RESOURCES-MIB"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://www.oidview.com/mibs/0/HOST-RESOURCES-MIB.html"},"HOST-RESOURCES-MIB"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u7cfb\u7edf\u8fd0\u884c\u60c5\u51b5",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"hrProcessorLoad=1.3.6.1.2.1.25.3.3 CPU %"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://www.oidview.com/mibs/0/HOST-RESOURCES-TYPES.html"},"http://www.oidview.com/mibs/0/HOST-RESOURCES-TYPES.html")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc2790"},"rfc2790"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"snmpwalk -Os -c public -v 2c 192.168.1.1 host\n# \u6216\nsnmpwalk -Os -c public -v 2c 192.168.1.1 1.3.6.1.2.1.25\n")),Object(i.b)("h2",{id:"ucd-snmp-mib"},"UCD-SNMP-MIB"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://www.oidview.com/mibs/2021/UCD-SNMP-MIB.html"},"UCD-SNMP-MIB")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://www.debianadmin.com/linux-snmp-oids-for-cpumemory-and-disk-statistics.html"},"http://www.debianadmin.com/linux-snmp-oids-for-cpumemory-and-disk-statistics.html"))),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"name"),Object(i.b)("th",{parentName:"tr",align:null},"oid"),Object(i.b)("th",{parentName:"tr",align:null},"desc"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"UCD-SNMP-MIB::laLoad.1"),Object(i.b)("td",{parentName:"tr",align:null},"1.3.6.1.4.1.2021.10.1.3.1"),Object(i.b)("td",{parentName:"tr",align:null},"1min load")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"UCD-SNMP-MIB::laLoad.2"),Object(i.b)("td",{parentName:"tr",align:null},"1.3.6.1.4.1.2021.10.1.3.2"),Object(i.b)("td",{parentName:"tr",align:null},"5min load")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"UCD-SNMP-MIB::laLoad.3"),Object(i.b)("td",{parentName:"tr",align:null},"1.3.6.1.4.1.2021.10.1.3.3"),Object(i.b)("td",{parentName:"tr",align:null},"15min load")))),Object(i.b)("h2",{id:"ubnt"},"UBNT"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://www.circitor.fr/Mibs/Html/U/UBNT-UniFi-MIB.php"},"UBNT UniFi MIB")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://dl.ubnt-ut.com/snmp/UBNT-MIB"},"http://dl.ubnt-ut.com/snmp/UBNT-MIB")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://dl.ubnt-ut.com/snmp/UBNT-UniFi-MIB"},"http://dl.ubnt-ut.com/snmp/UBNT-UniFi-MIB")),Object(i.b)("li",{parentName:"ul"},"unifiIfRxBytes \u4e3a 802.3 - ethternet"),Object(i.b)("li",{parentName:"ul"},"unifiVapTxBytes \u4e3a 802.11 - \u65e0\u7ebf"),Object(i.b)("li",{parentName:"ul"},"ng - 2.4 GHz"),Object(i.b)("li",{parentName:"ul"},"na/ac - 5 GHz"),Object(i.b)("li",{parentName:"ul"},"\u5e38\u7528",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"sysUpTime"),Object(i.b)("li",{parentName:"ul"},"interfaces"),Object(i.b)("li",{parentName:"ul"},"ifXTable"),Object(i.b)("li",{parentName:"ul"},"1.3.6.1.4.1.41112.1.4 # ubntAirMAX"),Object(i.b)("li",{parentName:"ul"},"1.3.6.1.4.1.41112.1.6 # ubntUniFi")))),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"\u5f00\u542f ",Object(i.b)("inlineCode",{parentName:"li"},"\u9ad8\u6027\u80fd\u8bbe\u5907")," \u9009\u9879\u4f1a\u5bfc\u81f4 unifiVapNumStations \u9519\u8bef\u8ba1\u6570",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4ec5\u5c06\u9ad8\u6027\u80fd\u5ba2\u6237\u7aef\u8fde\u63a5\u5230 5G"),Object(i.b)("li",{parentName:"ul"},"unifiVapNumStations.0 \u548c unifiVapNumStations.1 \u8fd4\u56de\u76f8\u540c\u6570\u503c - guest \u548c user")))))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"curl --output-dir ~/.snmp/mibs -O http://dl.ubnt-ut.com/snmp/UBNT-MIB\ncurl --output-dir ~/.snmp/mibs -O http://dl.ubnt-ut.com/snmp/UBNT-UniFi-MIB\n\nsnmpwalk -v 2c -c public -m +UBNT-UniFi-MIB 192.168.1.1 1.3.6.1.4.1.41112.1.6\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'unifiVapEssId * on(unifiVapIndex) group_right(unifiVapEssId) (unifiVapRadio * on(unifiVapIndex) group_right(unifiVapRadio) unifiVapNumStations)\n\nunifiVapEssId{instance="$instance"} * on(unifiVapIndex) group_right(unifiVapEssId) (unifiVapRadio{instance="$instance"}  * on(unifiVapIndex) group_right(unifiVapRadio)  unifiVapNumStations{instance="$instance"})\n')))}m.isMDXComponent=!0}}]);