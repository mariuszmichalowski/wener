"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[54922],{3905:function(t,a,n){n.d(a,{Zo:function(){return k},kt:function(){return g}});var e=n(67294);function l(t,a,n){return a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}function r(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.push.apply(n,e)}return n}function i(t){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(t,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))}))}return t}function p(t,a){if(null==t)return{};var n,e,l=function(t,a){if(null==t)return{};var n,e,l={},r=Object.keys(t);for(e=0;e<r.length;e++)n=r[e],a.indexOf(n)>=0||(l[n]=t[n]);return l}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(e=0;e<r.length;e++)n=r[e],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var m=e.createContext({}),d=function(t){var a=e.useContext(m),n=a;return t&&(n="function"==typeof t?t(a):i(i({},a),t)),n},k=function(t){var a=d(t.components);return e.createElement(m.Provider,{value:a},t.children)},u={inlineCode:"code",wrapper:function(t){var a=t.children;return e.createElement(e.Fragment,{},a)}},N=e.forwardRef((function(t,a){var n=t.components,l=t.mdxType,r=t.originalType,m=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),N=d(n),g=l,o=N["".concat(m,".").concat(g)]||N[g]||u[g]||r;return n?e.createElement(o,i(i({ref:a},k),{},{components:n})):e.createElement(o,i({ref:a},k))}));function g(t,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=N;var p={};for(var m in a)hasOwnProperty.call(a,m)&&(p[m]=a[m]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var d=2;d<r;d++)i[d]=n[d];return e.createElement.apply(null,i)}return e.createElement.apply(null,n)}N.displayName="MDXCreateElement"},85496:function(t,a,n){n.r(a),n.d(a,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return k},default:function(){return N}});var e=n(22122),l=n(19756),r=(n(67294),n(3905)),i=["components"],p={id:"codec",title:"Asterisk \u7f16\u7801"},m="Asterisk Codec",d={unversionedId:"voip/asterisk/codec",id:"voip/asterisk/codec",isDocsHomePage:!1,title:"Asterisk \u7f16\u7801",description:"- VoIP \u5e38\u7528\u7f16\u7801\u5305\u62ec ITU-T \u7cfb\u5217\u7684 G.7xx, GSM, iLBC",source:"@site/notes/voip/asterisk/asterisk-codec.md",sourceDirName:"voip/asterisk",slug:"/voip/asterisk/codec",permalink:"/notes/voip/asterisk/codec",editUrl:"https://github.com/wenerme/wener/edit/master/notes/voip/asterisk/asterisk-codec.md",version:"current",frontMatter:{id:"codec",title:"Asterisk \u7f16\u7801"},sidebar:"docs",previous:{title:"Asterisk \u901a\u9053",permalink:"/notes/voip/asterisk/channel"},next:{title:"Asterisk \u914d\u7f6e",permalink:"/notes/voip/asterisk/asterisk-conf"}},k=[{value:"VoIP \u5e38\u7528\u7f16\u7801",id:"voip-\u5e38\u7528\u7f16\u7801",children:[]},{value:"\u97f3\u9891\u7f16\u7801",id:"\u97f3\u9891\u7f16\u7801",children:[]},{value:"\u89c6\u9891\u7f16\u7801",id:"\u89c6\u9891\u7f16\u7801",children:[]},{value:"\u97f3\u9891\u6587\u4ef6\u8f6c\u7801",id:"\u97f3\u9891\u6587\u4ef6\u8f6c\u7801",children:[{value:"\u6279\u91cf\u8f6c\u6362",id:"\u6279\u91cf\u8f6c\u6362",children:[]}]},{value:"\u683c\u5f0f\u4e4b\u95f4\u7684\u8f6c\u7801\u65f6\u95f4",id:"\u683c\u5f0f\u4e4b\u95f4\u7684\u8f6c\u7801\u65f6\u95f4",children:[]},{value:"\u97f3\u9891\u6587\u4ef6\u7f16\u7801\u683c\u5f0f\u8bf4\u660e",id:"\u97f3\u9891\u6587\u4ef6\u7f16\u7801\u683c\u5f0f\u8bf4\u660e",children:[]},{value:"\u6587\u4ef6\u683c\u5f0f\u8bf4\u660e",id:"\u6587\u4ef6\u683c\u5f0f\u8bf4\u660e",children:[]}],u={toc:k};function N(t){var a=t.components,n=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,e.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"asterisk-codec"},"Asterisk Codec"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"VoIP \u5e38\u7528\u7f16\u7801\u5305\u62ec ITU-T \u7cfb\u5217\u7684 G.7xx, GSM, iLBC",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5176\u5b83\u7f16\u7801, speex \u7b49\u5df2\u7ecf\u4e0d\u63a8\u8350\u4f7f\u7528"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.voip-info.org/wiki/view/Asterisk+codecs"},"Asterisk codecs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/G.729"},"G.729"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9700\u8981\u7248\u6743, \u9ed8\u8ba4\u53ea\u80fd\u900f\u4f20"))),(0,r.kt)("li",{parentName:"ul"},"G.711",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/%CE%9C-law_algorithm"},"ulaw"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"US"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/A-law_algorithm"},"alaw"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Europe"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Internet_Low_Bitrate_Codec"},"iLBC"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Internet low Bitrate Codec"))),(0,r.kt)("li",{parentName:"ul"},"\u683c\u5f0f - \u4f18\u5148\u9009\u62e9 slin",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"slin: 16 bit Signed Linear PCM"),(0,r.kt)("li",{parentName:"ul"},"gsm: \u539f\u59cb GSM \u7f16\u7801\uff0c\u9002\u7528\u4e8e VoIP"),(0,r.kt)("li",{parentName:"ul"},"wav: MS wav format, 16 bit linear"),(0,r.kt)("li",{parentName:"ul"},"WAV: MS wav format, gsm encoded (wav49)"))),(0,r.kt)("li",{parentName:"ul"},"\u76ee\u524d\u5f88\u591a\u573a\u666f\u4e5f\u63a8\u8350\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"li",href:"https://wiki.asterisk.org/wiki/display/AST/Codec+Opus"},"Opus \u7f16\u7801"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5f00\u6e90\u3001\u9ad8\u6548\u3001\u652f\u6301\u7684\u5e73\u53f0\u591a"))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.voip-info.org/convert-wav-audio-files-for-use-in-asterisk/"},"Convert WAV audio files for use in Asterisk"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u7f16\u7801\u3001\u8f6c\u8bd1\u3001\u6587\u4ef6\u683c\u5f0f\ncore show codecs\ncore show translation\ncore show file format\n")),(0,r.kt)("h2",{id:"voip-\u5e38\u7528\u7f16\u7801"},"VoIP \u5e38\u7528\u7f16\u7801"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u7f16\u7801\u65f6\u949f\u9891\u7387\u5747\u4e3a 8000, \u9ed8\u8ba4\u5305\u5927\u5c0f 20"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Codec"),(0,r.kt)("th",{parentName:"tr",align:null},"PT"),(0,r.kt)("th",{parentName:"tr",align:null},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PCMU"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"G.711/ulaw")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GSM"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"G723"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PCMA"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"G.711/alaw")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"G722"),(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"G729"),(0,r.kt)("td",{parentName:"tr",align:null},"18"),(0,r.kt)("td",{parentName:"tr",align:null},"G.729a")))),(0,r.kt)("h2",{id:"\u97f3\u9891\u7f16\u7801"},"\u97f3\u9891\u7f16\u7801"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6700\u4f73\u517c\u5bb9\u7f16\u7801\u662f ulaw\u3001alaw\u3001gsm",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"allow=ulaw,alaw,g722"),(0,r.kt)("li",{parentName:"ul"},"disallow=all"))),(0,r.kt)("li",{parentName:"ul"},"\u5f00\u542f all \u76ee\u524d\u5f97\u5230\u7684\u662f codec2|g723|ulaw|alaw|gsm|g726|g726aal2|adpcm|slin|slin|slin|slin|slin|slin|slin|slin|slin|lpc10|g729|speex|speex|speex|ilbc|g722|siren7|siren14|testlaw|g719|opus|jpeg|png|h261|h263|h263p|h264|mpeg4|vp8|vp9|red|t140|t38|silk|silk|silk|silk"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e24\u7aef\u7684\u7f16\u7801\u4e0d\u4e00\u81f4\u4f1a\u7531 asterisk \u8fdb\u884c\u8f6c\u7801 - \u6709\u4e00\u5b9a\u7684\u6027\u80fd\u5f71\u54cd"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u548c\u5141\u8bb8\u7684\u7f16\u7801\u4e0d\u5339\u914d\u4f1a\u5bfc\u81f4\u62d2\u7edd",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"SDP: Incompatible media format: no common codec"))),(0,r.kt)("li",{parentName:"ul"},"SDP \u91cc\u7684 rtpmap \u6807\u793a\u652f\u6301\u7684\u7f16\u7801\u683c\u5f0f")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"SDP")," \u5934\u91cc\u7684\u7f16\u7801\u4fe1\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"m=audio 55560 RTP/AVP 0 101 3 8 110 97\na=rtpmap:101 telephone-event/8000\na=fmtp:101 0-16\na=rtpmap:110 speex/8000\na=rtpmap:97 iLBC/8000\na=fmtp:97 mode=30\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7f16\u7801\u7c7b\u578b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"u-law"),(0,r.kt)("li",{parentName:"ul"},"G726"),(0,r.kt)("li",{parentName:"ul"},"Speex Wide"),(0,r.kt)("li",{parentName:"ul"},"Speex Ultra"),(0,r.kt)("li",{parentName:"ul"},"Opus Narrow"),(0,r.kt)("li",{parentName:"ul"},"Opus Super"),(0,r.kt)("li",{parentName:"ul"},"Opus Full"),(0,r.kt)("li",{parentName:"ul"},"Opus Wide"),(0,r.kt)("li",{parentName:"ul"},"GSM"),(0,r.kt)("li",{parentName:"ul"},"a-law"),(0,r.kt)("li",{parentName:"ul"},"Speex Narrow"),(0,r.kt)("li",{parentName:"ul"},"iLBC 30"),(0,r.kt)("li",{parentName:"ul"},"G729"),(0,r.kt)("li",{parentName:"ul"},"G722")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Coded"),(0,r.kt)("th",{parentName:"tr",align:null},"Fidelity"),(0,r.kt)("th",{parentName:"tr",align:null},"Bitrate"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GSM"),(0,r.kt)("td",{parentName:"tr",align:null},"8000"),(0,r.kt)("td",{parentName:"tr",align:null},"13200")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Opus"),(0,r.kt)("td",{parentName:"tr",align:null},"48000"),(0,r.kt)("td",{parentName:"tr",align:null},"6000 - 510000")))),(0,r.kt)("h2",{id:"\u89c6\u9891\u7f16\u7801"},"\u89c6\u9891\u7f16\u7801"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"H.263 90Kbps"),(0,r.kt)("li",{parentName:"ul"},"H.264"),(0,r.kt)("li",{parentName:"ul"},"VP8"),(0,r.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u652f\u6301\u60c5\u51b5",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"XLite \u652f\u6301 H263 H263P"),(0,r.kt)("li",{parentName:"ul"},"Zoiper \u514d\u8d39\u7248\u652f\u6301 VP8 \u4ed8\u8d39\u7248\u652f\u6301 H264")))),(0,r.kt)("h2",{id:"\u97f3\u9891\u6587\u4ef6\u8f6c\u7801"},"\u97f3\u9891\u6587\u4ef6\u8f6c\u7801"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.sangoma.com/audio-converter/"},"\u5728\u7ebf\u8f6c\u7801"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u8f6c\u51fa 8K WAV\u3001GSM\u3001slin16\u3001G729"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.sangoma.com/articles/asterisk-sound-files-101/?utm_source=digium_redirect"},"Asterisk Sound Files 101!"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5982\u679c\u51fa\u73b0\u8b66\u544a, \u53ef\u4ee5\u5c1d\u8bd5\u964d\u4f4e\u97f3\u91cf  -v 0.96\nsox callwait.mp3 -c 1 -r 16000 -b 16 callwait.wav\n")),(0,r.kt)("h3",{id:"\u6279\u91cf\u8f6c\u6362"},"\u6279\u91cf\u8f6c\u6362"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sox SilentCity.mp3 -t raw -r 8000 -s -2 -c 1 SilentCity.sln\ncp *.sln /var/lib/asterisk/moh\nasterisk -rx "module reload res_musiconhold.so"\n\n# exten => 664,1,NoOp()\n#     same => n,Progress()\n#     same => n,MusicOnHold()\n\nlame --decode music.mp3 music.wav\nsox -V music.wav -r 8000 -c 1 -w music.raw\nsox -V music.wav -r 8000 -c 1 -w music.gsm\n\nfor i in *.wav; do \\\nsox $i -r 8000 -c 1 $(basename $i .wav).raw; \\\nsox $i -r 8000 -c 1 $(basename $i .wav).gsm; \\\ndone\nrm *.wav\n')),(0,r.kt)("h2",{id:"\u683c\u5f0f\u4e4b\u95f4\u7684\u8f6c\u7801\u65f6\u95f4"},"\u683c\u5f0f\u4e4b\u95f4\u7684\u8f6c\u7801\u65f6\u95f4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"         Translation times between formats (in microseconds) for one second of data\n          Source Format (Rows) Destination Format (Columns)\n\n           ulaw  alaw   gsm  g726 g726aal2 adpcm  slin  slin  slin  slin  slin  slin  slin  slin  slin lpc10  ilbc  g722 testlaw\n     ulaw     -  9150 15000 15000    15000 15000  9000 17000 17000 17000 17000 17000 17000 17000 17000 15000 15000 17250   15000\n     alaw  9150     - 15000 15000    15000 15000  9000 17000 17000 17000 17000 17000 17000 17000 17000 15000 15000 17250   15000\n      gsm 15000 15000     - 15000    15000 15000  9000 17000 17000 17000 17000 17000 17000 17000 17000 15000 15000 17250   15000\n     g726 15000 15000 15000     -    15000 15000  9000 17000 17000 17000 17000 17000 17000 17000 17000 15000 15000 17250   15000\n g726aal2 15000 15000 15000 15000        - 15000  9000 17000 17000 17000 17000 17000 17000 17000 17000 15000 15000 17250   15000\n    adpcm 15000 15000 15000 15000    15000     -  9000 17000 17000 17000 17000 17000 17000 17000 17000 15000 15000 17250   15000\n     slin  6000  6000  6000  6000     6000  6000     -  8000  8000  8000  8000  8000  8000  8000  8000  6000  6000  8250    6000\n     slin 14500 14500 14500 14500    14500 14500  8500     -  8000  8000  8000  8000  8000  8000  8000 14500 14500 14000   14500\n     slin 14500 14500 14500 14500    14500 14500  8500  8500     -  8000  8000  8000  8000  8000  8000 14500 14500  6000   14500\n     slin 14500 14500 14500 14500    14500 14500  8500  8500  8500     -  8000  8000  8000  8000  8000 14500 14500 14500   14500\n     slin 14500 14500 14500 14500    14500 14500  8500  8500  8500  8500     -  8000  8000  8000  8000 14500 14500 14500   14500\n     slin 14500 14500 14500 14500    14500 14500  8500  8500  8500  8500  8500     -  8000  8000  8000 14500 14500 14500   14500\n     slin 14500 14500 14500 14500    14500 14500  8500  8500  8500  8500  8500  8500     -  8000  8000 14500 14500 14500   14500\n     slin 14500 14500 14500 14500    14500 14500  8500  8500  8500  8500  8500  8500  8500     -  8000 14500 14500 14500   14500\n     slin 14500 14500 14500 14500    14500 14500  8500  8500  8500  8500  8500  8500  8500  8500     - 14500 14500 14500   14500\n    lpc10 15000 15000 15000 15000    15000 15000  9000 17000 17000 17000 17000 17000 17000 17000 17000     - 15000 17250   15000\n     ilbc 15000 15000 15000 15000    15000 15000  9000 17000 17000 17000 17000 17000 17000 17000 17000 15000     - 17250   15000\n     g722 15600 15600 15600 15600    15600 15600  9600 17500  9000 17000 17000 17000 17000 17000 17000 15600 15600     -   15600\n  testlaw 15000 15000 15000 15000    15000 15000  9000 17000 17000 17000 17000 17000 17000 17000 17000 15000 15000 17250       -\n")),(0,r.kt)("h2",{id:"\u97f3\u9891\u6587\u4ef6\u7f16\u7801\u683c\u5f0f\u8bf4\u660e"},"\u97f3\u9891\u6587\u4ef6\u7f16\u7801\u683c\u5f0f\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:null},"NAME"),(0,r.kt)("th",{parentName:"tr",align:null},"FORMAT"),(0,r.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"31"),(0,r.kt)("td",{parentName:"tr",align:null},"image"),(0,r.kt)("td",{parentName:"tr",align:null},"png"),(0,r.kt)("td",{parentName:"tr",align:null},"png"),(0,r.kt)("td",{parentName:"tr",align:null},"(PNG Image)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"audio"),(0,r.kt)("td",{parentName:"tr",align:null},"g726"),(0,r.kt)("td",{parentName:"tr",align:null},"g726"),(0,r.kt)("td",{parentName:"tr",align:null},"(G.726 RFC3551)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"audio"),(0,r.kt)("td",{parentName:"tr",align:null},"alaw"),(0,r.kt)("td",{parentName:"tr",align:null},"alaw"),(0,r.kt)("td",{parentName:"tr",align:null},"(G.711 a-law)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"audio"),(0,r.kt)("td",{parentName:"tr",align:null},"g723"),(0,r.kt)("td",{parentName:"tr",align:null},"g723"),(0,r.kt)("td",{parentName:"tr",align:null},"(G.723.1)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"20"),(0,r.kt)("td",{parentName:"tr",align:null},"audio"),(0,r.kt)("td",{parentName:"tr",align:null},"speex"),(0,r.kt)("td",{parentName:"tr",align:null},"speex"),(0,r.kt)("td",{parentName:"tr",align:null},"(SpeeX)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"21"),(0,r.kt)("td",{parentName:"tr",align:null},"audio"),(0,r.kt)("td",{parentName:"tr",align:null},"speex"),(0,r.kt)("td",{parentName:"tr",align:null},"speex16"),(0,r.kt)("td",{parentName:"tr",align:null},"(SpeeX 16khz)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"22"),(0,r.kt)("td",{parentName:"tr",align:null},"audio"),(0,r.kt)("td",{parentName:"tr",align:null},"speex"),(0,r.kt)("td",{parentName:"tr",align:null},"speex32"),(0,r.kt)("td",{parentName:"tr",align:null},"(SpeeX 32khz)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"24"),(0,r.kt)("td",{parentName:"tr",align:null},"audio"),(0,r.kt)("td",{parentName:"tr",align:null},"g722"),(0,r.kt)("td",{parentName:"tr",align:null},"g722"),(0,r.kt)("td",{parentName:"tr",align:null},"(G722)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"25"),(0,r.kt)("td",{parentName:"tr",align:null},"audio"),(0,r.kt)("td",{parentName:"tr",align:null},"siren7"),(0,r.kt)("td",{parentName:"tr",align:null},"siren7"),(0,r.kt)("td",{parentName:"tr",align:null},"(ITU G.722.1 (Siren7, licensed from Polycom))")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"32"),(0,r.kt)("td",{parentName:"tr",align:null},"video"),(0,r.kt)("td",{parentName:"tr",align:null},"h261"),(0,r.kt)("td",{parentName:"tr",align:null},"h261"),(0,r.kt)("td",{parentName:"tr",align:null},"(H.261 video)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"33"),(0,r.kt)("td",{parentName:"tr",align:null},"video"),(0,r.kt)("td",{parentName:"tr",align:null},"h263"),(0,r.kt)("td",{parentName:"tr",align:null},"h263"),(0,r.kt)("td",{parentName:"tr",align:null},"(H.263 video)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"audio"),(0,r.kt)("td",{parentName:"tr",align:null},"adpcm"),(0,r.kt)("td",{parentName:"tr",align:null},"adpcm"),(0,r.kt)("td",{parentName:"tr",align:null},"(Dialogic ADPCM)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"43"),(0,r.kt)("td",{parentName:"tr",align:null},"audio"),(0,r.kt)("td",{parentName:"tr",align:null},"silk"),(0,r.kt)("td",{parentName:"tr",align:null},"silk8"),(0,r.kt)("td",{parentName:"tr",align:null},"(SILK Codec (8 KHz))")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"44"),(0,r.kt)("td",{parentName:"tr",align:null},"audio"),(0,r.kt)("td",{parentName:"tr",align:null},"silk"),(0,r.kt)("td",{parentName:"tr",align:null},"silk12"),(0,r.kt)("td",{parentName:"tr",align:null},"(SILK Codec (12 KHz))")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"45"),(0,r.kt)("td",{parentName:"tr",align:null},"audio"),(0,r.kt)("td",{parentName:"tr",align:null},"silk"),(0,r.kt)("td",{parentName:"tr",align:null},"silk16"),(0,r.kt)("td",{parentName:"tr",align:null},"(SILK Codec (16 KHz))")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"46"),(0,r.kt)("td",{parentName:"tr",align:null},"audio"),(0,r.kt)("td",{parentName:"tr",align:null},"silk"),(0,r.kt)("td",{parentName:"tr",align:null},"silk24"),(0,r.kt)("td",{parentName:"tr",align:null},"(SILK Codec (24 KHz))")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"28"),(0,r.kt)("td",{parentName:"tr",align:null},"audio"),(0,r.kt)("td",{parentName:"tr",align:null},"g719"),(0,r.kt)("td",{parentName:"tr",align:null},"g719"),(0,r.kt)("td",{parentName:"tr",align:null},"(ITU G.719)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"34"),(0,r.kt)("td",{parentName:"tr",align:null},"video"),(0,r.kt)("td",{parentName:"tr",align:null},"h263p"),(0,r.kt)("td",{parentName:"tr",align:null},"h263p"),(0,r.kt)("td",{parentName:"tr",align:null},"(H.263+ video)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"35"),(0,r.kt)("td",{parentName:"tr",align:null},"video"),(0,r.kt)("td",{parentName:"tr",align:null},"h264"),(0,r.kt)("td",{parentName:"tr",align:null},"h264"),(0,r.kt)("td",{parentName:"tr",align:null},"(H.264 video)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"19"),(0,r.kt)("td",{parentName:"tr",align:null},"audio"),(0,r.kt)("td",{parentName:"tr",align:null},"g729"),(0,r.kt)("td",{parentName:"tr",align:null},"g729"),(0,r.kt)("td",{parentName:"tr",align:null},"(G.729A)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"audio"),(0,r.kt)("td",{parentName:"tr",align:null},"slin"),(0,r.kt)("td",{parentName:"tr",align:null},"slin"),(0,r.kt)("td",{parentName:"tr",align:null},"(16 bit Signed Linear PCM)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"audio"),(0,r.kt)("td",{parentName:"tr",align:null},"slin"),(0,r.kt)("td",{parentName:"tr",align:null},"slin12"),(0,r.kt)("td",{parentName:"tr",align:null},"(16 bit Signed Linear PCM (12kHz))")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"11"),(0,r.kt)("td",{parentName:"tr",align:null},"audio"),(0,r.kt)("td",{parentName:"tr",align:null},"slin"),(0,r.kt)("td",{parentName:"tr",align:null},"slin16"),(0,r.kt)("td",{parentName:"tr",align:null},"(16 bit Signed Linear PCM (16kHz))")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"audio"),(0,r.kt)("td",{parentName:"tr",align:null},"slin"),(0,r.kt)("td",{parentName:"tr",align:null},"slin24"),(0,r.kt)("td",{parentName:"tr",align:null},"(16 bit Signed Linear PCM (24kHz))")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"13"),(0,r.kt)("td",{parentName:"tr",align:null},"audio"),(0,r.kt)("td",{parentName:"tr",align:null},"slin"),(0,r.kt)("td",{parentName:"tr",align:null},"slin32"),(0,r.kt)("td",{parentName:"tr",align:null},"(16 bit Signed Linear PCM (32kHz))")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"14"),(0,r.kt)("td",{parentName:"tr",align:null},"audio"),(0,r.kt)("td",{parentName:"tr",align:null},"slin"),(0,r.kt)("td",{parentName:"tr",align:null},"slin44"),(0,r.kt)("td",{parentName:"tr",align:null},"(16 bit Signed Linear PCM (44kHz))")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"15"),(0,r.kt)("td",{parentName:"tr",align:null},"audio"),(0,r.kt)("td",{parentName:"tr",align:null},"slin"),(0,r.kt)("td",{parentName:"tr",align:null},"slin48"),(0,r.kt)("td",{parentName:"tr",align:null},"(16 bit Signed Linear PCM (48kHz))")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"16"),(0,r.kt)("td",{parentName:"tr",align:null},"audio"),(0,r.kt)("td",{parentName:"tr",align:null},"slin"),(0,r.kt)("td",{parentName:"tr",align:null},"slin96"),(0,r.kt)("td",{parentName:"tr",align:null},"(16 bit Signed Linear PCM (96kHz))")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"17"),(0,r.kt)("td",{parentName:"tr",align:null},"audio"),(0,r.kt)("td",{parentName:"tr",align:null},"slin"),(0,r.kt)("td",{parentName:"tr",align:null},"slin192"),(0,r.kt)("td",{parentName:"tr",align:null},"(16 bit Signed Linear PCM (192kHz))")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"audio"),(0,r.kt)("td",{parentName:"tr",align:null},"ulaw"),(0,r.kt)("td",{parentName:"tr",align:null},"ulaw"),(0,r.kt)("td",{parentName:"tr",align:null},"(G.711 u-law)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"18"),(0,r.kt)("td",{parentName:"tr",align:null},"audio"),(0,r.kt)("td",{parentName:"tr",align:null},"lpc10"),(0,r.kt)("td",{parentName:"tr",align:null},"lpc10"),(0,r.kt)("td",{parentName:"tr",align:null},"(LPC10)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"27"),(0,r.kt)("td",{parentName:"tr",align:null},"audio"),(0,r.kt)("td",{parentName:"tr",align:null},"testlaw"),(0,r.kt)("td",{parentName:"tr",align:null},"testlaw"),(0,r.kt)("td",{parentName:"tr",align:null},"(G.711 test-law)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"42"),(0,r.kt)("td",{parentName:"tr",align:null},"audio"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"(Null codec)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"41"),(0,r.kt)("td",{parentName:"tr",align:null},"image"),(0,r.kt)("td",{parentName:"tr",align:null},"t38"),(0,r.kt)("td",{parentName:"tr",align:null},"t38"),(0,r.kt)("td",{parentName:"tr",align:null},"(T.38 UDPTL Fax)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"38"),(0,r.kt)("td",{parentName:"tr",align:null},"video"),(0,r.kt)("td",{parentName:"tr",align:null},"vp9"),(0,r.kt)("td",{parentName:"tr",align:null},"vp9"),(0,r.kt)("td",{parentName:"tr",align:null},"(VP9 video)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"37"),(0,r.kt)("td",{parentName:"tr",align:null},"video"),(0,r.kt)("td",{parentName:"tr",align:null},"vp8"),(0,r.kt)("td",{parentName:"tr",align:null},"vp8"),(0,r.kt)("td",{parentName:"tr",align:null},"(VP8 video)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"audio"),(0,r.kt)("td",{parentName:"tr",align:null},"gsm"),(0,r.kt)("td",{parentName:"tr",align:null},"gsm"),(0,r.kt)("td",{parentName:"tr",align:null},"(GSM)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"36"),(0,r.kt)("td",{parentName:"tr",align:null},"video"),(0,r.kt)("td",{parentName:"tr",align:null},"mpeg4"),(0,r.kt)("td",{parentName:"tr",align:null},"mpeg4"),(0,r.kt)("td",{parentName:"tr",align:null},"(MPEG4 video)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"23"),(0,r.kt)("td",{parentName:"tr",align:null},"audio"),(0,r.kt)("td",{parentName:"tr",align:null},"ilbc"),(0,r.kt)("td",{parentName:"tr",align:null},"ilbc"),(0,r.kt)("td",{parentName:"tr",align:null},"(iLBC)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"39"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"red"),(0,r.kt)("td",{parentName:"tr",align:null},"red"),(0,r.kt)("td",{parentName:"tr",align:null},"(T.140 Realtime Text with redundancy)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"t140"),(0,r.kt)("td",{parentName:"tr",align:null},"t140"),(0,r.kt)("td",{parentName:"tr",align:null},"(Passthrough T.140 Realtime Text)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"29"),(0,r.kt)("td",{parentName:"tr",align:null},"audio"),(0,r.kt)("td",{parentName:"tr",align:null},"opus"),(0,r.kt)("td",{parentName:"tr",align:null},"opus"),(0,r.kt)("td",{parentName:"tr",align:null},"(Opus Codec)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"30"),(0,r.kt)("td",{parentName:"tr",align:null},"image"),(0,r.kt)("td",{parentName:"tr",align:null},"jpeg"),(0,r.kt)("td",{parentName:"tr",align:null},"jpeg"),(0,r.kt)("td",{parentName:"tr",align:null},"(JPEG image)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"audio"),(0,r.kt)("td",{parentName:"tr",align:null},"g726aal2"),(0,r.kt)("td",{parentName:"tr",align:null},"g726aal2"),(0,r.kt)("td",{parentName:"tr",align:null},"(G.726 AAL2)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"audio"),(0,r.kt)("td",{parentName:"tr",align:null},"codec2"),(0,r.kt)("td",{parentName:"tr",align:null},"codec2"),(0,r.kt)("td",{parentName:"tr",align:null},"(Codec 2)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"26"),(0,r.kt)("td",{parentName:"tr",align:null},"audio"),(0,r.kt)("td",{parentName:"tr",align:null},"siren14"),(0,r.kt)("td",{parentName:"tr",align:null},"siren14"),(0,r.kt)("td",{parentName:"tr",align:null},"(ITU G.722.1 Annex C, (Siren14, licensed from Polycom))")))),(0,r.kt)("h2",{id:"\u6587\u4ef6\u683c\u5f0f\u8bf4\u660e"},"\u6587\u4ef6\u683c\u5f0f\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Extensions"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"slin192"),(0,r.kt)("td",{parentName:"tr",align:null},"sln192"),(0,r.kt)("td",{parentName:"tr",align:null},"sln192")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"slin96"),(0,r.kt)("td",{parentName:"tr",align:null},"sln96"),(0,r.kt)("td",{parentName:"tr",align:null},"sln96")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"slin48"),(0,r.kt)("td",{parentName:"tr",align:null},"sln48"),(0,r.kt)("td",{parentName:"tr",align:null},"sln48")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"slin44"),(0,r.kt)("td",{parentName:"tr",align:null},"sln44"),(0,r.kt)("td",{parentName:"tr",align:null},"sln44")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"slin32"),(0,r.kt)("td",{parentName:"tr",align:null},"sln32"),(0,r.kt)("td",{parentName:"tr",align:null},"sln32")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"slin24"),(0,r.kt)("td",{parentName:"tr",align:null},"sln24"),(0,r.kt)("td",{parentName:"tr",align:null},"sln24")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"slin16"),(0,r.kt)("td",{parentName:"tr",align:null},"sln16"),(0,r.kt)("td",{parentName:"tr",align:null},"sln16")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"slin12"),(0,r.kt)("td",{parentName:"tr",align:null},"sln12"),(0,r.kt)("td",{parentName:"tr",align:null},"sln12")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"slin"),(0,r.kt)("td",{parentName:"tr",align:null},"sln"),(0,r.kt)("td",{parentName:"tr",align:null},"sln")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gsm"),(0,r.kt)("td",{parentName:"tr",align:null},"gsm"),(0,r.kt)("td",{parentName:"tr",align:null},"gsm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"g719"),(0,r.kt)("td",{parentName:"tr",align:null},"g719"),(0,r.kt)("td",{parentName:"tr",align:null},"g719")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"g729"),(0,r.kt)("td",{parentName:"tr",align:null},"g729"),(0,r.kt)("td",{parentName:"tr",align:null},"g729")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"g726"),(0,r.kt)("td",{parentName:"tr",align:null},"g726-16"),(0,r.kt)("td",{parentName:"tr",align:null},"g726-16")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"g726"),(0,r.kt)("td",{parentName:"tr",align:null},"g726-24"),(0,r.kt)("td",{parentName:"tr",align:null},"g726-24")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"g726"),(0,r.kt)("td",{parentName:"tr",align:null},"g726-32"),(0,r.kt)("td",{parentName:"tr",align:null},"g726-32")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"g726"),(0,r.kt)("td",{parentName:"tr",align:null},"g726-40"),(0,r.kt)("td",{parentName:"tr",align:null},"g726-40")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"slin16"),(0,r.kt)("td",{parentName:"tr",align:null},"wav16"),(0,r.kt)("td",{parentName:"tr",align:null},"wav16")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"slin"),(0,r.kt)("td",{parentName:"tr",align:null},"wav"),(0,r.kt)("td",{parentName:"tr",align:null},"wav")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"h264"),(0,r.kt)("td",{parentName:"tr",align:null},"h264"),(0,r.kt)("td",{parentName:"tr",align:null},"h264")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"h263"),(0,r.kt)("td",{parentName:"tr",align:null},"h263"),(0,r.kt)("td",{parentName:"tr",align:null},"h263")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"siren7"),(0,r.kt)("td",{parentName:"tr",align:null},"siren7"),(0,r.kt)("td",{parentName:"tr",align:null},"siren7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ilbc"),(0,r.kt)("td",{parentName:"tr",align:null},"iLBC"),(0,r.kt)("td",{parentName:"tr",align:null},"ilbc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"g723"),(0,r.kt)("td",{parentName:"tr",align:null},"g723sf"),(0,r.kt)("td",{parentName:"tr",align:null},"g723")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"g722"),(0,r.kt)("td",{parentName:"tr",align:null},"g722"),(0,r.kt)("td",{parentName:"tr",align:null},"g722")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ulaw"),(0,r.kt)("td",{parentName:"tr",align:null},"au"),(0,r.kt)("td",{parentName:"tr",align:null},"au")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"alaw"),(0,r.kt)("td",{parentName:"tr",align:null},"alaw"),(0,r.kt)("td",{parentName:"tr",align:null},"alaw")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ulaw"),(0,r.kt)("td",{parentName:"tr",align:null},"pcm"),(0,r.kt)("td",{parentName:"tr",align:null},"pcm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"siren14"),(0,r.kt)("td",{parentName:"tr",align:null},"siren14"),(0,r.kt)("td",{parentName:"tr",align:null},"siren14")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gsm"),(0,r.kt)("td",{parentName:"tr",align:null},"wav49"),(0,r.kt)("td",{parentName:"tr",align:null},"WAV")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"adpcm"),(0,r.kt)("td",{parentName:"tr",align:null},"vox"),(0,r.kt)("td",{parentName:"tr",align:null},"vox")))))}N.isMDXComponent=!0}}]);