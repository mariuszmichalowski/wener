(window.webpackJsonp=window.webpackJsonp||[]).push([[573],{1172:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=b(n),u=a,m=d["".concat(i,".").concat(u)]||d[u]||p[u]||l;return n?r.a.createElement(m,o(o({ref:t},c),{},{components:n})):r.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},647:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),l=(n(0),n(1172)),i={title:"Asterisk WebRTC"},o={unversionedId:"voip/asterisk/asterisk-webrtc",id:"voip/asterisk/asterisk-webrtc",isDocsHomePage:!1,title:"Asterisk WebRTC",description:"- client",source:"@site/notes/voip/asterisk/asterisk-webrtc.md",slug:"/voip/asterisk/asterisk-webrtc",permalink:"/notes/voip/asterisk/asterisk-webrtc",editUrl:"https://github.com/wenerme/wener/edit/master/notes/voip/asterisk/asterisk-webrtc.md",version:"current",sidebar:"docs",previous:{title:"Asterisk \u7248\u672c",permalink:"/notes/voip/asterisk/version"},next:{title:"DAHDi Channel",permalink:"/notes/voip/asterisk/chan_dahdi"}},s=[{value:"rtp.conf",id:"rtpconf",children:[]},{value:"res_stun_monitor.conf",id:"res_stun_monitorconf",children:[]},{value:"Shutting down transport &#39;WSS to 172.17.0.1:57434&#39; since no request was received in 32 seconds",id:"shutting-down-transport-wss-to-172170157434-since-no-request-was-received-in-32-seconds",children:[]},{value:"Couldn&#39;t negotiate stream 0:audio-0:audio:sendrecv (nothing)",id:"couldnt-negotiate-stream-0audio-0audiosendrecv-nothing",children:[]},{value:"No translator path: (starting codec is not valid)",id:"no-translator-path-starting-codec-is-not-valid",children:[]}],c={toc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"client",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/versatica/JsSIP"},"versatica/JsSIP")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/onsip/SIP.js"},"onsip/SIP.js")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/DoubangoTelecom/sipml5"},"DoubangoTelecom/sipml5"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"MIT"),Object(l.b)("li",{parentName:"ul"},"\u6700\u65e9, \u4e0d\u6d3b\u8dc3, \u6700\u540e\u63d0\u4ea4 2018 \u5e74"))))),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://wiki.asterisk.org/wiki/display/AST/Configuring+res_pjsip+to+work+through+NAT"},"Configuring res_pjsip to work through NAT")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://wiki.asterisk.org/wiki/display/AST/Configuring+Asterisk+for+WebRTC+Clients"},"Configuring Asterisk for WebRTC Clients"))))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-conf"},"; webrtc\nload => res_crypto\nload => res_http_websocket\nload => res_pjsip_transport_websocket\nload => res_srtp\nload => codec_opus_open_source\nload => res_format_attr_opus\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# \u5f00\u542f pjsip \u65e5\u5fd7\npjsip set logger on\n")),Object(l.b)("h2",{id:"rtpconf"},"rtp.conf"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-conf"},"[general]\n; RTP \u5f00\u59cb\u7ed3\u675f\u7aef\u53e3\n; \u4f8b\u5982 10000-20000\nrtpstart=5000\nrtpend=31000\n\n; RTP checksum\n;rtpchecksums=no\n\n; DTMF digit with no 'end' marker \u8fde\u7eed\u65f6\u95f4 (in 'samples', 1/8000 of a second)\n;dtmftimeout=3000\n; rtcp reports \u95f4\u9694 - \u5355\u4f4d ms\n; min 500, max 60000\nrtcpinterval = 5000\n\n; \u542f\u7528\u4e25\u683c RTP \u4fdd\u62a4\n; \u4e22\u5f03 RTP \u6d41\u4e2d\u672a\u77e5\u6765\u6e90\u7684 RTP \u5305\n; \u5728\u5efa\u7acb\u8fde\u63a5\u524d\u548c\u5904\u7406\u8fde\u63a5\u4e2d\u90fd\u4f1a\u6821\u9a8c\u6765\u6e90 (e.g., transfers and direct media)\n;\n; Initial connection and renegotiation starts a learning mode to qualify\n; stream source addresses.  Once Asterisk has recognized a stream it will\n; allow other streams to qualify and replace the current stream for 5\n; seconds after starting learning mode.  Once learning mode completes the\n; current stream is locked in and cannot change until the next\n; renegotiation.\n; Valid options are \"no\" to disable strictrtp, \"yes\" to enable strictrtp,\n; and \"seqno\", which does the same thing as strictrtp=yes, but only checks\n; to make sure the sequence number is correct rather than checking the time\n; interval as well.\n; This option is enabled by default.\nstrictrtp=yes\n\n; Number of packets containing consecutive sequence values needed\n; to change the RTP source socket address. This option only comes\n; into play while using strictrtp=yes. Consider changing this value\n; if rtp packets are dropped from one or both ends after a call is\n; connected. This option is set to 4 by default.\n; probation=8\n;\n; Enable sRTP replay protection. Buggy SIP user agents (UAs) reset the\n; sequence number (RTP-SEQ) on a re-INVITE, for example, with Session Timers\n; or on Call Hold/Resume, but keep the synchronization source (RTP-SSRC). If\n; the new RTP-SEQ is higher than the previous one, the call continues if the\n; roll-over counter (sRTP-ROC) is zero (the call lasted less than 22 minutes).\n; In all other cases, the call faces one-way audio or even no audio at all.\n; \"replay check failed (index too old)\" gets printed continuously. This is a\n; software bug. You have to report this to the creator of that UA. Until it is\n; fixed, you could disable sRTP replay protection (see RFC 3711 section 3.3.2).\n; This option is enabled by default.\n; srtpreplayprotection=yes\n;\n; \u542f\u7528 ICE \u652f\u6301\nicesupport=true\n\n; STUN \u5730\u5740\uff0c\u9ed8\u8ba4\u7aef\u53e3 3478\n; stunaddr=\n;\n; Some multihomed servers have IP interfaces that cannot reach the STUN\n; server specified by stunaddr.  Blacklist those interface subnets from\n; trying to send a STUN packet to find the external IP address.\n; Attempting to send the STUN packet needlessly delays processing incoming\n; and outgoing SIP INVITEs because we will wait for a response that can\n; never come until we give up on the response.\n; * Multiple subnets may be listed.\n; * Blacklisting applies to IPv4 only.  STUN isn't needed for IPv6.\n; * Blacklisting applies when binding RTP to specific IP addresses and not\n; the wildcard 0.0.0.0 address.  e.g., A PJSIP endpoint binding RTP to a\n; specific address using the bind_rtp_to_media_address and media_address\n; options.  Or the PJSIP endpoint specifies an explicit transport that binds\n; to a specific IP address.  Blacklisting is done via ACL infrastructure\n; so it's possible to whitelist as well.\n;\n; stun_acl = named_acl\n; stun_deny = 0.0.0.0/0\n; stun_permit = 1.2.3.4/32\n; stun_deny \u522b\u540d\n; stun_blacklist=\n\n; TURN \u670d\u52a1\uff0c\u9ed8\u8ba4\u7aef\u53e3 3478\n; turnaddr=\n; TURN relay \u7528\u6237\u540d\n; turnusername=\n; TURN relay \u5bc6\u94a5\n; turnpassword=\n\n\n; \u63a7\u5236 ICE \u53d1\u73b0\u5730\u5740\u7684 ACL - srflx and relay discovery\n; \u53ef\u5217\u591a\u4e2a\uff0c\u9ed8\u8ba4\u6240\u6709\u90fd\u63a5\u53d7\n; ice_acl = named_acl\n; ice_deny = 0.0.0.0/0\n; ice_permit = 1.2.3.4/32\n; ice_deny \u522b\u540d\n; ice_blacklist =\n\n; DTLS \u5305\u5206\u7247 MTU - \u6700\u4f4e 256\ndtls_mtu = 1200\n\n[ice_host_candidates]\n;\n; When Asterisk is behind a static one-to-one NAT and ICE is in use, ICE will\n; expose the server's internal IP address as one of the host candidates.\n; Although using STUN (see the 'stunaddr' configuration option) will provide a\n; publicly accessible IP, the internal IP will still be sent to the remote\n; peer. To help hide the topology of your internal network, you can override\n; the host candidates that Asterisk will send to the remote peer.\n;\n; IMPORTANT: Only use this functionality when your Asterisk server is behind a\n; one-to-one NAT and you know what you're doing. If you do define anything\n; here, you almost certainly will NOT want to specify 'stunaddr' or 'turnaddr'\n; above.\n;\n; The format for these overrides is:\n;\n;    <local address> => <advertised address>,[include_local_address]\n;\n; The following will replace 192.168.1.10 with 1.2.3.4 during ICE\n; negotiation:\n;\n;192.168.1.10 => 1.2.3.4\n;\n; The following will include BOTH 192.168.1.10 and 1.2.3.4 during ICE\n; negotiation instead of replacing 192.168.1.10.  This can make it easier\n; to serve both local and remote clients.\n;\n;192.168.1.10 => 1.2.3.4,include_local_address\n;\n; You can define an override for more than 1 interface if you have a multihomed\n; server. Any local interface that is not matched will be passed through\n; unaltered. Both IPv4 and IPv6 addresses are supported.\n\n")),Object(l.b)("h2",{id:"res_stun_monitorconf"},"res_stun_monitor.conf"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"stun set debug on\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-conf"},";\n; Configuration file for the res_stun_monitor module\n;\n; The res_stun_monitor module sends STUN requests to a configured STUN server\n; periodically.  If the monitor detects a change in the external IP address or port\n; provided by the STUN server an event is sent out internally within Asterisk\n; to alert all listeners to that event of the change.\n\n; The current default listeners for the network change event include chan_sip\n; and chan_iax.  Both of these channel drivers by default react to this event\n; by renewing all outbound registrations.  This allows the endpoints Asterisk\n; is registering with to become aware of the address change and know the new\n; location.\n;\n[general]\n;\n; ---- STUN Server configuration ---\n;  Setting the 'stunaddr' option to a valid address enables the STUN monitor.\n;\n;stunaddr = mystunserver.com    ; Address of the STUN server to query.\n                                ; Valid form:\n                                ;   [(hostname | IP-address) [':' port]]\n                                ; The port defaults to the standard STUN port (3478).\n                                ; Set to an empty value to disable STUN monitoring.\n                                ;   Default is disabled.\n;stunrefresh = 30               ; Number of seconds between STUN refreshes.\n                                ;   Default is 30.\n")),Object(l.b)("h1",{id:"faq"},"FAQ"),Object(l.b)("h2",{id:"shutting-down-transport-wss-to-172170157434-since-no-request-was-received-in-32-seconds"},"Shutting down transport 'WSS to 172.17.0.1:57434' since no request was received in 32 seconds"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"asterisk 16.2.2 \u4fee\u590d")),Object(l.b)("h2",{id:"couldnt-negotiate-stream-0audio-0audiosendrecv-nothing"},"Couldn't negotiate stream 0:audio-0:audio:sendrecv (nothing)"),Object(l.b)("p",null,"\u68c0\u67e5\u7f16\u7801\u548c\u52a0\u5bc6\u95ee\u9898"),Object(l.b)("h2",{id:"no-translator-path-starting-codec-is-not-valid"},"No translator path: (starting codec is not valid)"),Object(l.b)("p",null,"\u52a0\u8f7d opus, \u786e\u4fdd\u8f6c\u6362\u8def\u5f84"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-conf"},"load => codec_opus_open_source\nload => res_format_attr_opus\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"core show translation paths opus\n")),Object(l.b)("p",null,"from opus:48000 to"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"to"),Object(l.b)("th",{parentName:"tr",align:null},"path"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"amr:8000"),Object(l.b)("td",{parentName:"tr",align:null},"No Translation Path")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"amrwb:16000"),Object(l.b)("td",{parentName:"tr",align:null},"No Translation Path")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"codec2:8000"),Object(l.b)("td",{parentName:"tr",align:null},"No Translation Path")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"g723:8000"),Object(l.b)("td",{parentName:"tr",align:null},"No Translation Path")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ulaw:8000"),Object(l.b)("td",{parentName:"tr",align:null},"(opus@48000)->(slin@8000)->(ulaw@8000)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"alaw:8000"),Object(l.b)("td",{parentName:"tr",align:null},"(opus@48000)->(slin@8000)->(alaw@8000)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"gsm:8000"),Object(l.b)("td",{parentName:"tr",align:null},"(opus@48000)->(slin@8000)->(gsm@8000)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"g726:8000"),Object(l.b)("td",{parentName:"tr",align:null},"(opus@48000)->(slin@8000)->(g726@8000)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"g726aal2:8000"),Object(l.b)("td",{parentName:"tr",align:null},"(opus@48000)->(slin@8000)->(g726aal2@8000)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"adpcm:8000"),Object(l.b)("td",{parentName:"tr",align:null},"(opus@48000)->(slin@8000)->(adpcm@8000)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"slin:8000"),Object(l.b)("td",{parentName:"tr",align:null},"(opus@48000)->(slin@8000)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"slin:12000"),Object(l.b)("td",{parentName:"tr",align:null},"(opus@48000)->(slin@12000)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"slin:16000"),Object(l.b)("td",{parentName:"tr",align:null},"(opus@48000)->(slin@16000)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"slin:24000"),Object(l.b)("td",{parentName:"tr",align:null},"(opus@48000)->(slin@24000)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"slin:32000"),Object(l.b)("td",{parentName:"tr",align:null},"(opus@48000)->(slin@24000)->(slin@32000)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"slin:44100"),Object(l.b)("td",{parentName:"tr",align:null},"(opus@48000)->(slin@24000)->(slin@44100)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"slin:48000"),Object(l.b)("td",{parentName:"tr",align:null},"(opus@48000)->(slin@48000)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"slin:96000"),Object(l.b)("td",{parentName:"tr",align:null},"(opus@48000)->(slin@48000)->(slin@96000)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"slin:192000"),Object(l.b)("td",{parentName:"tr",align:null},"(opus@48000)->(slin@48000)->(slin@192000)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"lpc10:8000"),Object(l.b)("td",{parentName:"tr",align:null},"(opus@48000)->(slin@8000)->(lpc10@8000)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"g729:8000"),Object(l.b)("td",{parentName:"tr",align:null},"No Translation Path")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"speex:8000"),Object(l.b)("td",{parentName:"tr",align:null},"No Translation Path")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"speex:16000"),Object(l.b)("td",{parentName:"tr",align:null},"No Translation Path")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"speex:32000"),Object(l.b)("td",{parentName:"tr",align:null},"No Translation Path")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ilbc:8000"),Object(l.b)("td",{parentName:"tr",align:null},"No Translation Path")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"g722:16000"),Object(l.b)("td",{parentName:"tr",align:null},"(opus@48000)->(slin@16000)->(g722@16000)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"siren7:16000"),Object(l.b)("td",{parentName:"tr",align:null},"No Translation Path")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"siren14:32000"),Object(l.b)("td",{parentName:"tr",align:null},"No Translation Path")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"testlaw:8000"),Object(l.b)("td",{parentName:"tr",align:null},"(opus@48000)->(slin@8000)->(testlaw@8000)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"g719:48000"),Object(l.b)("td",{parentName:"tr",align:null},"No Translation Path")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"none:8000"),Object(l.b)("td",{parentName:"tr",align:null},"No Translation Path")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"silk:8000"),Object(l.b)("td",{parentName:"tr",align:null},"No Translation Path")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"silk:12000"),Object(l.b)("td",{parentName:"tr",align:null},"No Translation Path")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"silk:16000"),Object(l.b)("td",{parentName:"tr",align:null},"No Translation Path")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"silk:24000"),Object(l.b)("td",{parentName:"tr",align:null},"No Translation Path")))))}b.isMDXComponent=!0}}]);