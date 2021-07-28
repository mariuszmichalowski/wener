(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{1172:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),u=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,d=p["".concat(s,".").concat(m)]||p[m]||b[m]||i;return t?r.a.createElement(d,l(l({ref:n},c),{},{components:t})):r.a.createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=m;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<i;c++)s[c]=t[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},285:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return u}));var a=t(3),r=t(8),i=(t(0),t(1172)),s={title:"chan_iax"},l={unversionedId:"voip/asterisk/chan_iax",id:"voip/asterisk/chan_iax",isDocsHomePage:!1,title:"chan_iax",description:"- IAX - Inter-Asterisk-eXchange",source:"@site/notes/voip/asterisk/chan_iax.md",slug:"/voip/asterisk/chan_iax",permalink:"/notes/voip/asterisk/chan_iax",editUrl:"https://github.com/wenerme/wener/edit/master/notes/voip/asterisk/chan_iax.md",version:"current",sidebar:"docs",previous:{title:"chan_extra",permalink:"/notes/voip/asterisk/chan_extra"},next:{title:"chan_pjsip",permalink:"/notes/voip/asterisk/chan_pjsip"}},o=[{value:"iax.conf",id:"iaxconf",children:[{value:"general",id:"general",children:[]},{value:"user/peer",id:"userpeer",children:[]}]},{value:"Unable to support trunking on peer without a timing interface",id:"unable-to-support-trunking-on-peer-without-a-timing-interface",children:[]},{value:"IAX2 Trunk",id:"iax2-trunk",children:[]},{value:"unmonitored",id:"unmonitored",children:[]}],c={toc:o};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"IAX - Inter-Asterisk-eXchange",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5355 TCP \u652f\u6301\u591a\u7ebf\u8def"),Object(i.b)("li",{parentName:"ul"},"\u65e9\u671f\u7528\u4e8e\u5ba2\u670d NAT \u95ee\u9898"),Object(i.b)("li",{parentName:"ul"},"2015 \u5e74 \u540e\u76f8\u5173\u5f00\u53d1\u8f83\u5c11"),Object(i.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7aef\u53e3 4569/udp"),Object(i.b)("li",{parentName:"ul"},"AES-128"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc5456"},"rfc5456"),"\nIAX: Inter-Asterisk eXchange Version 2"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://wiki.asterisk.org/wiki/pages/viewpage.action?pageId=4817138"},"Why IAX2?"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"NAT"),Object(i.b)("li",{parentName:"ul"},"High performance, low overhead protocol",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"4 bytes overhead"))),Object(i.b)("li",{parentName:"ul"},"Internationalization - \u4f20\u8f93\u5305\u542b\u8bed\u8a00\u4fe1\u606f"),Object(i.b)("li",{parentName:"ul"},"Remote dialplan polling"),Object(i.b)("li",{parentName:"ul"},"Flexible authentication"),Object(i.b)("li",{parentName:"ul"},"Multimedia protocol"),Object(i.b)("li",{parentName:"ul"},"Call statistic gathering"),Object(i.b)("li",{parentName:"ul"},"Call parameter communication"),Object(i.b)("li",{parentName:"ul"},"Single socket design"))),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://community.freepbx.org/t/is-iax2-still-best-trunk-type-for-internal-calling-between-freepbx-systems-specifically-related-to-encryption/61907/7"},"Is IAX2 still best trunk type for Internal Calling between FreePBX Systems?")))),Object(i.b)("li",{parentName:"ul"},"\u51fa\u5c40 ",Object(i.b)("inlineCode",{parentName:"li"},"IAX2/[<user>[:<secret>]@]<peer>[:<port_number>][/<extension>[@<context>][/<option>]]")),Object(i.b)("li",{parentName:"ul"},"\u5165\u5c40 ",Object(i.b)("inlineCode",{parentName:"li"},"IAX2/[[<username>@]<host>]/<call_number>"))),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"\u548c\u8001\u8bbe\u5907\u4ea4\u4e92\u4e0d\u80fd\u76f4\u8fde\u7684\u65f6\u5019\u53ef\u4ee5\u8003\u8651 IAX"),Object(i.b)("li",{parentName:"ul"},"\u5bb9\u5668\u90e8\u7f72\uff0c\u63d0\u4f9b webrtc\uff0c\u5bf9\u63a5\u4e0a\u6e38\u7ebf\u8def\u53ef\u4ee5\u8003\u8651 IAX")))),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"iax \u9700\u8981\u53cc\u5411\u6ce8\u518c - \u53d6\u51b3\u4e8e\u7f51\u7edc\u60c5\u51b5\uff0c\u53ef\u80fd\u4f1a\u6709\u70b9\u9ebb\u70e6",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"A -> B"),Object(i.b)("li",{parentName:"ul"},"A <- B"))),Object(i.b)("li",{parentName:"ul"},"iax \u51fa\u73b0\u65e0\u6cd5\u6ce8\u518c\uff0c\u9700\u8981\u91cd\u542f\u624d\u80fd\u6ce8\u518c\u4e0a\u7684\u95ee\u9898")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-conf"},"load => chan_iax2\n; trunk \u9700\u8981 timing interface\nload => res_timing_timerfd\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# \u68c0\u6d4b iax2 \u7aef\u53e3\u662f\u5426\u5f00\u653e\nnmap -sU --script iax2-version.nse -p 4569 192.168.1.2\n")),Object(i.b)("h2",{id:"iaxconf"},"iax.conf"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"type=user",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u5b9a\u4e49 - \u63a5\u53d7\u5ba2\u6237\u7aef - \u63a5\u53d7\u547c\u53eb"))),Object(i.b)("li",{parentName:"ul"},"type=peer",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u5b9a\u4e49 - \u6ce8\u518c\u5230\u5bf9\u65b9 - \u53d1\u8d77\u547c\u53eb"),Object(i.b)("li",{parentName:"ul"},"\u5982\u679c host \u4e3a dynamic \u5219\u9700\u8981 register \u6ce8\u518c"))),Object(i.b)("li",{parentName:"ul"},"type=friend",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u521b\u5efa user+peer"),Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u8bbe\u7f6e\u4e86 host=hostname,domain.ext \u5219\u4f1a\u9650\u5b9a\u53ef\u53d1\u8d77\u8bf7\u6c42\u7684 peer"))),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.voip-info.org/asterisk-iax-qualify/"},"Asterisk iax qualify"))))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"iax2 reload\n")),Object(i.b)("h3",{id:"general"},"general"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-conf"},"[general]\n; \u914d\u7f6e\u9700\u8981\u5728 bindaddr \u4e4b\u524d\nbindport=4569\n\n; \u9ed8\u8ba4\u76d1\u542c\u6240\u6709\n; \u4e5f\u53ef\u4ee5\u5305\u542b\u7aef\u53e3 192.168.0.1:4569\n;bindaddr=192.168.0.1\n\n; \u72ec\u7acb\u7ebf\u7a0b\u5904\u7406 IAX2 DPREQ - \u4e00\u5b9a\u7684\u6027\u80fd\u6362\u53d6\u66f4\u597d\u7684\u5ef6\u65f6\n; \u9ed8\u8ba4 block \u5904\u7406\n; iaxcompat=yes\n\n; UDP checksum\n;nochecksums=yes\n\n; \u907f\u514d\u5bc6\u7801\u7206\u7834 - \u5ef6\u8fdf reject\n;delayreject=yes\n\n\n; \u5168\u5c40 iaxtel AMA flag - \u751f\u6210 cdr \u4f1a\u7528\u5230\n; default, omit, billing, documentation\n;amaflags=billing\n\n; ADSI/Analog Display Services Interface \u517c\u5bb9 CPE \u8bbe\u5907\n;adsi=yes\n\n; \u547c\u51fa\u65f6\u67e5\u8be2 SRV\n;srvlookup=yes\n\n; \u9ed8\u8ba4 CDR \u8d26\u53f7\n;accountcode=lss0101\n\n; \u9ed8\u8ba4\u8bed\u8a00\u4ee3\u7801\n;language=en\n\n; This option specifies a preference for which music-on-hold class this channel\n; should listen to when put on hold if the music class has not been set on the\n; channel with Set(CHANNEL(musicclass)=whatever) in the dialplan, and the peer\n; channel putting this one on hold did not suggest a music class.\n;\n; If this option is set to \"passthrough\", then the hold message will always be\n; passed through as signalling instead of generating hold music locally.\n;\n; This option may be specified globally, or on a per-user or per-peer basis.\n;\n; Accepted values: passthrough, or any music-on-hold class name\n; Default value:   <empty>\n;\n;mohinterpret=default\n;\n\n;\n; The 'mohsuggest' option specifies which music on hold class to suggest to the\n; peer channel when this channel places the peer on hold. It may be specified\n; globally or on a per-user or per-peer basis.\n;\n;mohsuggest=default\n;\n\n; \u5e26\u5bbd\u60c5\u51b5\n; low, medium, high\nbandwidth=low\n\n; \u7f16\u7801\u914d\u7f6e\n;allow=all\n;disallow=g723.1\ndisallow=lpc10\n;allow=gsm\n\n\n; Jitter Buffer/\u6296\u52a8\u7f13\u51b2\u5668\n; ======================\n;\n; You can adjust several parameters relating to the jitter buffer.  The jitter\n; buffer's function is to compensate for varying network delay.\n;\n; All of the jitter buffer settings are in milliseconds.  The jitter buffer\n; works for INCOMING audio only - the outbound audio will be dejittered by the\n; jitter buffer at the other end.\n;\n; jitterbuffer=yes|no: global default as to whether you want\n; the jitter buffer at all.\n;\n; maxjitterbuffer: a maximum size for the jitter buffer.\n; Setting a reasonable maximum here will prevent the call delay\n; from rising to silly values in extreme situations; you'll hear\n; SOMETHING, even though it will be jittery.\n;\n; resyncthreshold: when the jitterbuffer notices a significant change in delay\n; that continues over a few frames, it will resync, assuming that the change in\n; delay was caused by a timestamping mix-up. The threshold for noticing a\n; change in delay is measured as twice the measured jitter plus this resync\n; threshold.\n; Resyncing can be disabled by setting this parameter to -1.\n;\n; maxjitterinterps: the maximum number of interpolation frames the jitterbuffer\n; should return in a row. Since some clients do not send CNG/DTX frames to\n; indicate silence, the jitterbuffer will assume silence has begun after\n; returning this many interpolations. This prevents interpolating throughout\n; a long silence.\n;\n; jittertargetextra: number of milliseconds by which the new jitter buffer\n; will pad its size. the default is 40, so without modification, the new\n; jitter buffer will set its size to the jitter value plus 40 milliseconds.\n; increasing this value may help if your network normally has low jitter,\n; but occasionally has spikes.\n;\n\njitterbuffer=no\n;maxjitterbuffer=1000\n;maxjitterinterps=10\n;resyncthreshold=1000\n;jittertargetextra=40\n\n\n; IAX2 Encryption\n; ===============\n; \u5f00\u542f\u52a0\u5bc6\n;encryption=yes\n\n; \u5f3a\u5236\u52a0\u5bc6 - \u9690\u542b encryption=yes\n;forceencryption=yes\n\n; IAX2 trunk \u6700\u5927 payload - \u5355\u4f4d byte\n; \u4f8b\u5982 \u6700\u5927800\u901a\u8bdd\uff0c 20ms \u6bcf frame\uff0c\u4f7f\u7528 ulaw\n;\n;     (8000hz / 1000ms) * 20ms * 1 byte per sample = 160 bytes per frame\n;\n; \u6700\u5927\u5e26\u5bbd\u4e3a:\n;\n;     (160 bytes per frame) * (800 calls) = 128000 bytes\n;\n; \u8d85\u8fc7\u9650\u5236\u547c\u53eb\u53ef\u80fd\u4f1a\u88ab\u5ffd\u7565\n; \u9ed8\u8ba4 128000 - 128k\n; trunkmaxsize = 128000\n\n; \u6d41\u91cf\u5927\u7684\u65f6\u5019\u7531\u7cfb\u7edf\u5904\u7406 udp \u5206\u7247\u53ef\u80fd\u5f71\u54cd\u901a\u8bdd\u8d28\u91cf\n; \u8bbe\u7f6e mtu \u907f\u514d\u7cfb\u7edf\u5904\u7406 udp \u5206\u7247 - \u8bbe\u7f6e\u4e3a 0 \u5219\u7531\u7cfb\u7edf\u5904\u7406\n; trunkmtu = 1240\n\n; \u6d88\u606f\u53d1\u9001\u9891\u7387 - \u5355\u4f4d ms \u9ed8\u8ba4 20ms\uff0c\u63a5\u53d7 10ms - 1000ms\n; \u5982\u679c\u6d88\u606f\u8fbe\u5230\u4e86 trunkmtu \u4e5f\u4f1a\u53d1\u9001\n; trunkfreq=20\n\n; Should we send timestamps for the individual sub-frames within trunk frames?\n; There is a small bandwidth use for these (less than 1kbps/call), but they\n; ensure that frame timestamps get sent end-to-end properly.  If both ends of\n; all your trunks go directly to TDM, _and_ your trunkfreq equals the frame\n; length for your codecs, you can probably suppress these.  The receiver must\n; also support this feature, although they do not also need to have it enabled.\n;\n; trunktimestamps=yes\n\n; \u6ce8\u518c\u95f4\u9694 - \u5355\u4f4d \u79d2\n; minregexpire = 60\n; maxregexpire = 60\n\n; IAX2 helper threads\n\n; Establishes the number of iax helper threads to handle I/O.\n; iaxthreadcount = 10\n\n; Establishes the number of extra dynamic threads that may be spawned to handle I/O\n; iaxmaxthreadcount = 100\n\n; \u6ce8\u518c\u5230\u53e6\u5916\u4e00\u4e2a IAX2 \u670d\u52a1\u5668 - \u53d1\u73b0 IP\n;\n;register => marko:secretpass@tormenta.linux-support.net\n;\n; \u65e0\u5bc6\u7801\n;\n;register => joe@remotehost:5656\n;\n; RSA key \u6ce8\u518c\n;\n;register => marko:[torkey]@tormenta.linux-support.net\n;\n; Sample Registration for iaxtel\n;\n; Visit http://www.iaxtel.com to register with iaxtel.  Replace \"user\"\n; and \"pass\" with your username and password for iaxtel.  Incoming\n; calls arrive at the \"s\" extension of \"default\" context.\n;\n;register => user:pass@iaxtel.com\n;\n; Sample Registration for IAX2 + FWD\n;\n; To register using IAX2 with FWD, it must be enabled by visiting the URL\n; http://www.fwdnet.net/index.php?section_id=112\n;\n; Note that you need an extension in you default context which matches\n; your free world dialup number.  Please replace \"FWDNumber\" with your\n; FWD number and \"passwd\" with your password.\n;\n;register => FWDNumber:passwd@iax.fwdnet.net\n\n\n; \u5f00\u542f res_stun_monitor \u6a21\u5757\u540e\u53ef\u8ba2\u9605\u7f51\u7edc\u53d8\u5316\uff0c\u7f51\u7edc\u53d8\u5316\u540e\u91cd\u65b0\u6ce8\u518c\n; \u9ed8\u8ba4\u5f00\u542f\n; subscribe_network_change_event = yes\n\n; \u5f00\u542f\u8ba4\u8bc1\u8c03\u8bd5\u65e5\u5fd7\n;authdebug = yes\n;\n; See https://wiki.asterisk.org/wiki/display/AST/IP+Quality+of+Service for a description of these parameters.\n;tos=ef\n;cos=5\n\n; \u8bbe\u7f6e\u540e\u4f1a\u52a8\u6001\u521b\u5efa NoOp extension\n; & \u5206\u9694\u6307\u5b9a\u591a\u4e2a\n;regcontext=iaxregistrations\n\n; NEW \u540e 2000ms \u672a\u54cd\u5e94 ACK \u5219 \u81ea\u52a8 kill - \u907f\u514d\u5f02\u5e38\u5bfc\u81f4\u5361\u6b7b\n; \u4e5f\u53ef\u4ee5\u76f4\u63a5\u6307\u5b9a \u65f6\u95f4 - \u5355\u4f4d ms\n; \u5355\u4e2a peer \u4f7f\u7528 qualify \u63a7\u5236\nautokill=yes\n\n; \u7f16\u7801\u534f\u5546\u903b\u8f91 - \u9ed8\u8ba4 host\n; caller - \u4f18\u5148 caller \u5b9a\u4e49\u7684\u7f16\u7801\n; host - host \u5b9a\u4e49\u7684\u7f16\u7801\n; disabled\n; reqonly - \u7c7b\u4f3c disabled\uff0c\u4f46\u5982\u679c\u7f16\u7801\u4e0d\u652f\u6301\u53ef\u4ee5\u8bf7\u6c42\u65b0\u7684\u7f16\u7801\n;codecpriority=host\n;\n; allowfwdownload controls whether this host will serve out firmware to\n; IAX2 clients which request it.  This has only been used for the IAXy,\n; and it has been recently proven that this firmware distribution method\n; can be used as a source of traffic amplification attacks.  Also, the\n; IAXy firmware has not been updated for at least 18 months, so unless\n; you are provisioning IAXys in a secure network, we recommend that you\n; leave this option to the default, off.\n; IAXy \u76f8\u5173\n;allowfwdownload=yes\n\n;rtcachefriends=yes ; Cache realtime friends by adding them to the internal list\n                    ; just like friends added from the config file only on a\n                    ; as-needed basis? (yes|no)\n\n;rtsavesysname=yes  ; Save systemname in realtime database at registration\n                    ; Default = no\n\n;rtupdate=yes       ; Send registry updates to database using realtime? (yes|no)\n                    ; If set to yes, when a IAX2 peer registers successfully,\n                    ; the IP address, the origination port, the registration period,\n                    ; and the username of the peer will be set to database via realtime.\n                    ; If not present, defaults to 'yes'.\n\n;rtautoclear=yes    ; Auto-Expire friends created on the fly on the same schedule\n                    ; as if it had just registered? (yes|no|<seconds>)\n                    ; If set to yes, when the registration expires, the friend will\n                    ; vanish from the configuration until requested again.\n                    ; If set to an integer, friends expire within this number of\n                    ; seconds instead of the registration interval.\n\n;rtignoreregexpire=yes ; When reading a peer from Realtime, if the peer's registration\n                       ; has expired based on its registration interval, used the stored\n                       ; address information regardless. (yes|no)\n\n;parkinglot=edvina     ; Default parkinglot for IAX2 peers and users\n                       ; This can also be configured per device\n                       ; Parkinglots are defined in features.conf\n\n;\n; The following two options are used to disable call token validation for the\n; purposes of interoperability with IAX2 endpoints that do not yet support it.\n;\n; Call token validation can be set as optional for a single IP address or IP\n; address range by using the 'calltokenoptional' option. 'calltokenoptional' is\n; only a global option.\n;\n;calltokenoptional=209.16.236.73/255.255.255.0\n\n; \u8bbe\u7f6e\u4e3a no \u5219\u4e0d\u9700\u8981\u9a8c\u8bc1 call token - \u5728\u5b9a\u4e49 peer/user/friend \u65f6\u4f7f\u7528\n; \u9ed8\u8ba4 yes\n;requirecalltoken=no\n; \u6700\u5927 call token \u8ba4\u8bc1\u63e1\u624b\u65f6\u95f4 -  \u5355\u4f4d \u79d2\n;calltokenexpiration=10\n\n; \u6bcf\u4e2a\u8fdc\u7a0b IP \u5141\u8bb8\u7684\u62e8\u53f7\u6570\u91cf - \u8d85\u8fc7\u4e0d\u518d\u5efa\u7acb\u65b0\u94fe\u63a5\n;maxcallnumbers=512\n; \u8be5\u9650\u5236\u4e0d\u533a\u5206 IP - \u8ba1\u7b97\u672a\u9a8c\u8bc1 call token \u7684\u6570\u91cf\n; \u9ed8\u8ba4 8192\n;maxcallnumbers_nonvalidated=1024\n\n; \u6839\u636e IP \u9650\u5b9a\u547c\u53eb\u6570\u91cf\n;[callnumberlimits]\n; \u8303\u56f4\u5185\u72ec\u7acb IP \u9650\u5236\u800c\u4e0d\u662f IP \u6bb5\u603b\u6570\n;10.1.1.0/255.255.255.0 = 24\n;10.1.2.0/255.255.255.0 = 32\n\n; \u79fb\u9664 '(', ' ', ')', non-trailing '.', and '-' not in square brackets\n; \u4f8b\u5982 555.5555 -> 5555555\n; \u9ed8\u8ba4 \u5f00\u542f\n;shrinkcallerid=yes     ; on by default\n")),Object(i.b)("h3",{id:"userpeer"},"user/peer"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"register \u6620\u5c04 peer - \u52a8\u6001 IP \u573a\u666f",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u53cd\u5411\u6ce8\u518c\u5230\u5bf9\u65b9\uff0c\u800c\u4e0d\u662f\u5bf9\u65b9\u901a\u8fc7 peer \u5b9a\u4e49\u94fe\u63a5"))),Object(i.b)("li",{parentName:"ul"},"\u7528\u6237\u8ba4\u8bc1\u65b9\u5f0f - username+secret"),Object(i.b)("li",{parentName:"ul"},"\u5bc6\u94a5\u65b9\u5f0f",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"plaintext"),Object(i.b)("li",{parentName:"ul"},"md5"),Object(i.b)("li",{parentName:"ul"},"rsa",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"inkeys - \u63a5\u53d7\u7684 pubkey - ",Object(i.b)("inlineCode",{parentName:"li"},"/var/lib/asterisk/keys/<name>.pub"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},":")," \u5206\u5272"))),Object(i.b)("li",{parentName:"ul"},"outkey - \u53d1\u8d77\u8bf7\u6c42\u7684 key - ",Object(i.b)("inlineCode",{parentName:"li"},"/var/lib/asterisk/keys/<name>.key"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"3DES encrypted"))))))),Object(i.b)("li",{parentName:"ul"},"\u8bbf\u95ee\u63a7\u5236 - permit,deny,acl")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-conf"},'; guest \u914d\u7f6e\u672a\u8ba4\u8bc1\u8fde\u63a5\u8bf7\u6c42 - \u53ef\u914d\u7f6e secret\n[guest]\ntype=user\ncontext=public\ncallerid="Guest IAX User"\n\n; \u7528\u6237\u914d\u7f6e\n;[markster]\n;type=user\n;context=default\n;context=local\n;auth=md5,plaintext,rsa\n; \u53ef\u5199\u591a\u884c secret \u5b9e\u73b0\u591a\u5bc6\u7801\n;secret=markpasswd\n;setvar=ATTENDED_TRANSFER_COMPLETE_SOUND=beep   ; This channel variable will\n                                                ; cause the given audio file to\n                                                ; be played upon completion of\n                                                ; an attended transfer to the\n                                                ; target of the transfer.\n;dbsecret=mysecrets/place    ; Secrets can be stored in astdb, too\n;transfer=no                 ; Disable IAX2 native transfer\n;transfer=mediaonly          ; When doing IAX2 native transfers, transfer only\n                             ; the media stream\n;jitterbuffer=yes            ; Override the global setting and enable the jitter\n                             ; buffer for this user\n;maxauthreq=10               ; Set the maximum number of outstanding AUTHREQs\n                             ; waiting for replies. If this limit is reached,\n                             ; any further authentication will be blocked, until\n                             ; the pending requests expire or a reply is\n                             ; received.\n; \u8986\u76d6 CallerID\n;callerid="Mark Spencer" <(256) 428-6275>\n;deny=0.0.0.0/0.0.0.0\n;permit=209.16.236.73/255.255.255.0\n;accountcode=markster0101\n;language=en                 ; Use english as default language\n;encryption=yes              ; \u5f00\u542f\u52a0\u5bc6\n;keyrotate=off               ; \u9ed8\u8ba4\u5f00\u542f - \u65e7\u7248\u672c\u4e0d\u77e5\u652f\u6301 - IAX_COMMAND_RTENC\n\n;\n; \u5b9a\u4e49\u8fdc\u7a0b\u8282\u70b9 peer\n;\n;[demo]\n;type=peer\n;username=asterisk\n;secret=supersecret\n; \u4e3b\u673a\n;host=192.168.10.10\n; iax2 show peers \u63cf\u8ff0\n;description=My IAX2 Peer\n;sendani=no\n;host=asterisk.linux-support.net\n;port=5036\n;mask=255.255.255.255\n;qualify=yes                ; Make sure this peer is alive.\n;qualifysmoothing = yes     ; Use an average of the last two PONG results to\n                            ; reduce falsely detected LAGGED hosts.  The default\n                            ; is \'no.\'\n;qualifyfreqok = 60000      ; OK \u72b6\u6001 PING \u95f4\u9694 - \u5355\u4f4d ms\n;qualifyfreqnotok = 10000   ; \u975e OK\uff08LAGGED/UNAVAILABLE\uff09 \u72b6\u6001 PING \u95f4\u9694 - \u5355\u4f4d ms\n;jitterbuffer=no            ; Turn off jitter buffer for this peer\n;\n;encryption=yes             ; \u9ed8\u8ba4\u4e0d\u5f00\u542f\n;keyrotate=off              ; \u9ed8\u8ba4\u4e0d\u5f00\u542f\n\n; Peers can remotely register as well, so that they can be mobile.  Default\n; IPs can also optionally be given but are not required.  Caller*ID can be\n; suggested to the other side as well if it is for example a phone instead of\n; another PBX.\n; yes - \u53d1\u9001\u63a5\u53d7 connected line\n; send - \u53ea\u53d1\u9001\n; receive\n; no - Asterisk v1.4 peer \u9700\u8981\u8bbe\u7f6e no\n; \u4e0d\u517c\u5bb9\u8868\u73b0\u4e3a\u901a\u8bdd\u5f02\u5e38\u4e2d\u65ad\n;connectedline=yes\n\n\n;[dynamichost]\n;host=dynamic\n;secret=mysecret\n; Note: app_voicemail mailboxes must be in the form of mailbox@context.\n;mailbox=1234       ; Notify about mailbox 1234\n;inkeys=key1:key2\n;peercontext=local  ; Default context to request for calls to peer\n;defaultip=216.207.245.34\n;callerid="Some Host" <(256) 428-6011>\n\n;[biggateway]\n;type=peer\n;host=192.168.0.1\n;description=Gateway to PSTN\n;context=*\n;secret=myscret\n;trunk=yes          ; Use IAX2 trunking with this host\n;timezone=America/New_York  ; Set a timezone for the date/time IE\n\n;\n; Friends are a shortcut for creating a user and a peer with the same values.\n;\n\n;[marko]\n;type=friend\n;host=dynamic\n;regexten=1234\n;secret=moofoo   ; Multiple secrets may be specified. For a "user", all\n;secret=foomoo   ; specified entries will be accepted as valid. For a "peer",\n;secret=shazbot  ; only the last specified secret will be used.\n;context=default\n;permit=0.0.0.0/0.0.0.0\n;acl=example_named_acl\n\n;\n; With immediate=yes, an IAX2 phone or a phone on an IAXy acts as a hot-line\n; which goes immediately to the s extension when picked up.  Useful for\n; elevator phones, manual service, or other similar applications.\n;\n;[manual]\n;type=friend\n;host=dynamic\n;immediate=yes  ; go immediately to s extension when picked up\n;secret=moofoo  ; when immediate=yes is specified, secret is required\n;context=number-please ; we start at the s extension in this context\n;\n\n; Trust Caller*ID Coming from iaxtel.com\n[iaxtel]\ntype=user\ncontext=default\nauth=rsa\ninkeys=iaxtel\n\n; Trust Caller*ID Coming from iax.fwdnet.net\n[iaxfwd]\ntype=user\ncontext=default\nauth=rsa\ninkeys=freeworlddialup\n\n; Trust Caller*ID delivered over DUNDi/e164\n;[dundi]\n;type=user\n;dbsecret=dundi/secret\n;context=dundi-e164-local\n')),Object(i.b)("h1",{id:"faq"},"FAQ"),Object(i.b)("h2",{id:"unable-to-support-trunking-on-peer-without-a-timing-interface"},"Unable to support trunking on peer without a timing interface"),Object(i.b)("p",null,"\u52a0\u8f7d\u4e00\u4e2a timing interface \u5b9e\u73b0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"res_timing_timerfd"),Object(i.b)("li",{parentName:"ul"},"res_timing_pthread"),Object(i.b)("li",{parentName:"ul"},"res_timing_dahdi"),Object(i.b)("li",{parentName:"ul"},"res_timing_kqueue")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"module load res_timing_timerfd\n")),Object(i.b)("h1",{id:"faq-1"},"FAQ"),Object(i.b)("h2",{id:"iax2-trunk"},"IAX2 Trunk"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u4e92\u76f8 register"),Object(i.b)("li",{parentName:"ul"},"\u4e92\u76f8\u6dfb\u52a0 friend"),Object(i.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u901a\u8fc7 deny+permit \u6765\u63d0\u9ad8\u5b89\u5168\u6027")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"A/iax.conf")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"[general]\nregister => B:B@192.168.1.2\n\n[B]\ntype=friend\nhost=dynamic\ntrunk=yes\nsecret=B\ncontext=iaxinbound\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"B/iax.conf")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"[general]\nregister => A:A@192.168.1.2\n\n[A]\ntype=friend\nhost=dynamic\ntrunk=yes\nsecret=A\ncontext=iaxinbound\n")),Object(i.b)("h2",{id:"unmonitored"},"unmonitored"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"reload"),Object(i.b)("li",{parentName:"ul"},"qualify",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u65e0 qualify \u4f1a\u53d8\u6210 unmonitored"),Object(i.b)("li",{parentName:"ul"},"qualify \u540e\u53ef\u80fd\u662f offline"))),Object(i.b)("li",{parentName:"ul"},"restart",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u4e00\u76f4 offline\uff0c\u6ce8\u518c\u6709\u53d1\u9001\uff0c\u5c1d\u8bd5\u91cd\u542f\u8fdc\u7a0b asterisk"),Object(i.b)("li",{parentName:"ul"},"\u9047\u5230\u8fc7\u51e0\u6b21")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# \u5c1d\u8bd5 reload\nmodule unload chan_iax2\nmodule load chan_iax2\n")))}u.isMDXComponent=!0}}]);