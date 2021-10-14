"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[6203],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return d}});var l=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},i=Object.keys(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=l.createContext({}),p=function(t){var e=l.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},m=function(t){var e=p(t.components);return l.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},c=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,o=t.parentName,m=u(t,["components","mdxType","originalType","parentName"]),c=p(n),d=a,k=c["".concat(o,".").concat(d)]||c[d]||s[d]||i;return n?l.createElement(k,r(r({ref:e},m),{},{components:n})):l.createElement(k,r({ref:e},m))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,r=new Array(i);r[0]=c;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u.mdxType="string"==typeof t?t:a,r[1]=u;for(var p=2;p<i;p++)r[p]=n[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85891:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var l=n(87462),a=n(63366),i=(n(67294),n(3905)),r=["components"],u={title:"Fluentbit"},o=void 0,p={unversionedId:"service/observability/logging/fluentbit",id:"service/observability/logging/fluentbit",isDocsHomePage:!1,title:"Fluentbit",description:"- fluentbit",source:"@site/notes/service/observability/logging/fluentbit.md",sourceDirName:"service/observability/logging",slug:"/service/observability/logging/fluentbit",permalink:"/notes/service/observability/logging/fluentbit",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/observability/logging/fluentbit.md",tags:[],version:"current",frontMatter:{title:"Fluentbit"},sidebar:"docs",previous:{title:"Logging Awesome",permalink:"/notes/service/observability/logging/logging-awesome"},next:{title:"Loki",permalink:"/notes/service/observability/logging/loki"}},m=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]},{value:"Input",id:"input",children:[]},{value:"Fliter",id:"fliter",children:[]},{value:"Output",id:"output",children:[]},{value:"\u63d2\u4ef6",id:"\u63d2\u4ef6",children:[]},{value:"Build",id:"build",children:[]},{value:"Fluentd vs Fluentbit",id:"fluentd-vs-fluentbit",children:[]},{value:"core stack size",id:"core-stack-size",children:[]}],s={toc:m};function c(t){var e=t.components,n=(0,a.Z)(t,r);return(0,i.kt)("wrapper",(0,l.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://fluentbit.io/"},"fluentbit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/fluent/fluent-bit"},"fluent/fluent-bit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.fluentbit.io/manual/installation/sources/build-and-install"},"Build Options")),(0,i.kt)("li",{parentName:"ul"},"\u6570\u636e\u5904\u7406\u6d41\u7a0b",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"input - ",(0,i.kt)("inlineCode",{parentName:"li"},"-i, --input")),(0,i.kt)("li",{parentName:"ul"},"parser - ",(0,i.kt)("inlineCode",{parentName:"li"},"-R, --parser")),(0,i.kt)("li",{parentName:"ul"},"fliter - ",(0,i.kt)("inlineCode",{parentName:"li"},"-F, --fliter")),(0,i.kt)("li",{parentName:"ul"},"buffer",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-b --storage_path=PATH")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-f, --flush=SECONDS")))),(0,i.kt)("li",{parentName:"ul"},"router",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\b \u5339\u914d",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-m, --match")," - \u7b49\u540c\u4e8e ",(0,i.kt)("inlineCode",{parentName:"li"},"-p match=abc")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-t, --tag")," - \u8bbe\u7f6e tag\uff0c\u7b49\u540c\u4e8e ",(0,i.kt)("inlineCode",{parentName:"li"},"-p tag=abc")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'-p, --prop="A=B"')," - \u8bbe\u7f6e\u63d2\u4ef6\u5c5e\u6027"))))),(0,i.kt)("li",{parentName:"ul"},"output - \u591a\u4e2a")))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/fluent/fluent-bit/issues/2464"},"fluent/fluent-bit#464")," \u5b98\u65b9\u4e0d\u652f\u6301 musl",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Go \u5728 musl \u4e0b\u4e0d\u652f\u6301\u63d2\u4ef6")))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# macOS\nbrew install fluent-bit\n# AlpineLinux\napk add fluent-bit -X https://mirrors.aliyun.com/alpine/edge/testing/\n\n# \u8bfb\u53d6 kernel \u6d88\u606f\uff0c\u8f93\u51fa\u5230 stdout\nfluent-bit -i kmsg -t kernel -o stdout -m '*'\n# Windows Event Log \u8f93\u51fa\u5230 stdout\nfluent-bit -i winlog -p 'channels=Setup,Windows PowerShell' -o stdout\n\n# \u76d1\u542c MQTT - 0.0.0.0:1883\nfluent-bit -i mqtt -t data -o stdout -m '*'\n# \u53d1\u9001 MQTT\nmosquitto_pub  -m '{\"key1\": 123, \"key2\": 456}' -t some/topic\n# Listen=0.0.0.0\n# macOS /usr/local/opt/fluent-bit/etc/fluent-bit/parsers.conf\n# alpinelinux\nfluent-bit -R /usr/local/opt/fluent-bit/etc/fluent-bit/parsers.conf -i syslog -p path=/tmp/flb_syslog -o stdout\nlogger -u /tmp/flb_syslog my_ident my_message\n\n# syslog\n# rfc3164 - \u5e9f\u5f03\u7684 BSD syslog \u534f\u8bae\n# rfc5424 - \u65b0\u7684\u683c\u5f0f\nfluent-bit -R /etc/fluent-bit/parsers.conf \\\n  -i syslog -p mode=tcp -p listen=0.0.0.0 -p port=5140 -o stdout\n# \u65e5\u5fd7\nlogger -T -n 127.0.0.1 -P 5140 wener\n")),(0,i.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.fluentbit.io/manual/administration/configuring-fluent-bit"},"Configuring Fluent Bit"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"# \u5f15\u5165\u6587\u4ef6\n@INCLUDE somefile.conf\n@INCLUDE input_*.conf\n\n[SERVICE]\n    # \u4e00\u4e2a\u6bb5\u843d\u7f29\u8fdb 4 \u4e2a\u7a7a\u683c\n    # \u53ef\u4ee5\u5b58\u5728\u76f8\u540c\u540d\u5b57 key\n\n    # seconds.nanoseconds\n    Flush     5\n    Daemon    off\n    Log_Level debug\n\u200b\n[INPUT]\n    Name  cpu\n    Tag   my_cpu\n\n[FILTER]\n    Name  stdout\n    Match *\u200b\n\n[OUTPUT]\n    Name  stdout\n    Match my*cpu\n\n[OUTPUT]\n    # \u53ef\u4ee5\u4f7f\u7528\u73af\u5883\u53d8\u91cf\n    Name  ${MY_OUTPUT}\n    Match *\n\n# \u76f4\u63a5\u8bbe\u7f6e\u53d8\u91cf\n@SET KEY=VAL\n\n# \u4e0a\u6e38\u914d\u7f6e\n[UPSTREAM]\n    name       forward-balancing\n\n[NODE]\n    name       node-1\n    host       127.0.0.1\n    port       43000\n\n[NODE]\n    name       node-2\n    host       127.0.0.1\n    port       44000\n\n[NODE]\n    name       node-3\n    host       127.0.0.1\n    port       45000\n    tls        on\n    tls.verify off\n    shared_key secret\n")),(0,i.kt)("h2",{id:"input"},"Input"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/fluent/fluent-bit#input-plugins"},"Input Plugins")),(0,i.kt)("li",{parentName:"ul"},"collectd"),(0,i.kt)("li",{parentName:"ul"},"dummy - \u968f\u673a\u751f\u6210\u65e5\u5fd7"),(0,i.kt)("li",{parentName:"ul"},"exec - \u6267\u884c\u5916\u90e8\u547d\u4ee4"),(0,i.kt)("li",{parentName:"ul"},"forwad"),(0,i.kt)("li",{parentName:"ul"},"head - \u8bfb\u53d6\u6587\u4ef6\u524d\u9762\u51e0\u884c"),(0,i.kt)("li",{parentName:"ul"},"health - TCP \u5065\u5eb7\u68c0\u67e5"),(0,i.kt)("li",{parentName:"ul"},"\u7cfb\u7edf - cpu\u3001disk\u3001mem\u3001netif\u3001proc\u3001thermal"),(0,i.kt)("li",{parentName:"ul"},"kmsg - \u5185\u6838\u65e5\u5fd7"),(0,i.kt)("li",{parentName:"ul"},"mqtt - MQTT \u670d\u52a1"),(0,i.kt)("li",{parentName:"ul"},"random - \u751f\u6210\u968f\u673a\u6837\u672c"),(0,i.kt)("li",{parentName:"ul"},"serial - \u4e32\u53e3"),(0,i.kt)("li",{parentName:"ul"},"stdin"),(0,i.kt)("li",{parentName:"ul"},"syslog"),(0,i.kt)("li",{parentName:"ul"},"systemd"),(0,i.kt)("li",{parentName:"ul"},"tail"),(0,i.kt)("li",{parentName:"ul"},"tcp"),(0,i.kt)("li",{parentName:"ul"},"winlog - Windows Event Log")),(0,i.kt)("h2",{id:"fliter"},"Fliter"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/fluent/fluent-bit#filter-plugins"},"Fliter Plugins")),(0,i.kt)("li",{parentName:"ul"},"expect - \u6761\u4ef6\u8fc7\u6ee4"),(0,i.kt)("li",{parentName:"ul"},"grep"),(0,i.kt)("li",{parentName:"ul"},"kubernetes - \u6dfb\u52a0\u5143\u4fe1\u606f"),(0,i.kt)("li",{parentName:"ul"},"lua"),(0,i.kt)("li",{parentName:"ul"},"parser - \u89e3\u6790\u8bb0\u5f55"),(0,i.kt)("li",{parentName:"ul"},"record_modifier - \u4fee\u6539\u8bb0\u5f55"),(0,i.kt)("li",{parentName:"ul"},"rewrite_tag - \u6807\u7b7e\u91cd\u5199"),(0,i.kt)("li",{parentName:"ul"},"stdout"),(0,i.kt)("li",{parentName:"ul"},"throttle"),(0,i.kt)("li",{parentName:"ul"},"nest - \u5d4c\u5957\u8bb0\u5f55"),(0,i.kt)("li",{parentName:"ul"},"modify")),(0,i.kt)("h2",{id:"output"},"Output"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/fluent/fluent-bit#output-plugins"},"Output Plugins")),(0,i.kt)("li",{parentName:"ul"},"es - Elasticsearch"),(0,i.kt)("li",{parentName:"ul"},"file"),(0,i.kt)("li",{parentName:"ul"},"forward"),(0,i.kt)("li",{parentName:"ul"},"http"),(0,i.kt)("li",{parentName:"ul"},"influxdb"),(0,i.kt)("li",{parentName:"ul"},"kafka"),(0,i.kt)("li",{parentName:"ul"},"kafka-rest"),(0,i.kt)("li",{parentName:"ul"},"nats"),(0,i.kt)("li",{parentName:"ul"},"null"),(0,i.kt)("li",{parentName:"ul"},"stdout"),(0,i.kt)("li",{parentName:"ul"},"tcp"),(0,i.kt)("li",{parentName:"ul"},"postgresql"),(0,i.kt)("li",{parentName:"ul"},"cockroachdb - v1.6+")),(0,i.kt)("h2",{id:"\u63d2\u4ef6"},"\u63d2\u4ef6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/fluent/fluent-bit-go"},"fluent/fluent-bit-go")," - Golang package to build Fluentbit plugins")),(0,i.kt)("h2",{id:"build"},"Build"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.fluentbit.io/manual/installation/sources/build-and-install"},"https://docs.fluentbit.io/manual/installation/sources/build-and-install")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/nih-at/libzip/issues/98"},"nih-at/libzip#98")," - undefined reference to `fts_read' and 'fts_close'")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'if [ "$CBUILD" != "$CHOST" ]; then\n  CMAKE_CROSSOPTS="-DCMAKE_SYSTEM_NAME=Linux -DCMAKE_HOST_SYSTEM_NAME=Linux"\nfi\n\n# default CORE_STACK_SIZE=((3 * PTHREAD_STACK_MIN) / 2)=3072 is invalid\n# based on https://docs.fluentbit.io/manual/administration/configuring-fluent-bit/configuration-file\n# set default to 24576\ncmake -B build \\\n  -DCMAKE_INSTALL_PREFIX=/usr \\\n  -DCMAKE_INSTALL_LIBDIR=lib \\\n  -DCMAKE_BUILD_TYPE=None \\\n  -DFLB_CORO_STACK_SIZE=24576 \\\n  -DFLB_TESTS_INTERNAL=Yes \\\n  -DFLB_TLS=On \\\n  -DFLB_JEMALLOC=Off \\\n  $CMAKE_CROSSOPTS .\nmake -C build\n')),(0,i.kt)("h1",{id:"faq"},"FAQ"),(0,i.kt)("h2",{id:"fluentd-vs-fluentbit"},"Fluentd vs Fluentbit"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://fluentbit.io/documentation/0.8/about/fluentd_and_fluentbit.html"},"https://fluentbit.io/documentation/0.8/about/fluentd_and_fluentbit.html"))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"-"),(0,i.kt)("th",{parentName:"tr",align:null},"Fluentd"),(0,i.kt)("th",{parentName:"tr",align:null},"Fluent Bit"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Scope"),(0,i.kt)("td",{parentName:"tr",align:null},"Servers"),(0,i.kt)("td",{parentName:"tr",align:null},"Embedded & IoT devices")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Language"),(0,i.kt)("td",{parentName:"tr",align:null},"C & Ruby"),(0,i.kt)("td",{parentName:"tr",align:null},"C")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Memory"),(0,i.kt)("td",{parentName:"tr",align:null},"~20MB"),(0,i.kt)("td",{parentName:"tr",align:null},"~150KB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Performance"),(0,i.kt)("td",{parentName:"tr",align:null},"High Performance"),(0,i.kt)("td",{parentName:"tr",align:null},"High Performance")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Dependencies"),(0,i.kt)("td",{parentName:"tr",align:null},"Ruby Gem, need gems."),(0,i.kt)("td",{parentName:"tr",align:null},"no dependencies, unless some special plugin requires them.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Plugins"),(0,i.kt)("td",{parentName:"tr",align:null},"300+ plugins available"),(0,i.kt)("td",{parentName:"tr",align:null},"~15 plugins available")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache License v2.0"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache License v2.0")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# fluentd\nresources:\n  limits:\n    memory: 500Mi\n  requests:\n    cpu: 100m\n    memory: 200Mi\n\n# fluentbit\nresources:\n  requests:\n    cpu: 5m\n    memory: 10Mi\n  limits:\n    cpu: 50m\n    memory: 60Mi\n")),(0,i.kt)("h2",{id:"core-stack-size"},"core stack size"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"PTHREAD_STACK_MIN",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"musl \u4e0b\u4e3a 2048"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FLB_CORO_STACK_SIZE=((3 * PTHREAD_STACK_MIN) / 2)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"musl \u4e0b\u4e3a 3072 - \u662f\u65e0\u6548\u7684 core stack size"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u8003\u8651\u8bbe\u7f6e\u4e3a 24576")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"// \u9ed8\u8ba4\n#define FLB_CORO_STACK_SIZE      ((3 * PTHREAD_STACK_MIN) / 2)\n")))}c.isMDXComponent=!0}}]);