"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[58245],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51318:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"sonic"},s=void 0,c={unversionedId:"db/search/sonic",id:"db/search/sonic",isDocsHomePage:!1,title:"sonic",description:"- valeriansaliou/sonic",source:"@site/notes/db/search/sonic.md",sourceDirName:"db/search",slug:"/db/search/sonic",permalink:"/notes/db/search/sonic",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/search/sonic.md",tags:[],version:"current",frontMatter:{title:"sonic"},sidebar:"docs",previous:{title:"Apache Solr",permalink:"/notes/db/search/solr"},next:{title:"GraphDB Awesome",permalink:"/notes/db/graph/graph-awesome"}},u=[{value:"config.cfg",id:"configcfg",children:[]},{value:"Telnet",id:"telnet",children:[]},{value:"push executor term-to-iids object too long",id:"push-executor-term-to-iids-object-too-long",children:[]}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/valeriansaliou/sonic"},"valeriansaliou/sonic"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"MPL-2.0, Rust"),(0,i.kt)("li",{parentName:"ul"},"schema-less search backend"),(0,i.kt)("li",{parentName:"ul"},"\u57fa\u4e8e fs \u5b58\u50a8\u641c\u7d22"),(0,i.kt)("li",{parentName:"ul"},"\u9ad8\u6027\u80fd\u3001\u4f4e\u5185\u5b58"),(0,i.kt)("li",{parentName:"ul"},"\u5355\u8282\u70b9"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u591a\u8bed\u8a00"),(0,i.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u533a\u5206 FST \u548c KV"),(0,i.kt)("li",{parentName:"ul"},"KV \u4e3a RocksDB - Workd <-> Index \u5173\u7cfb"),(0,i.kt)("li",{parentName:"ul"},"FST \u8bb0\u5f55\u51fa\u73b0\u7684\u8bcd - ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Finite-state_transducer"},"Finite-State Transducer"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6bcf\u51fa\u73b0\u4e00\u4e2a\u65b0\u8bcd\u5c31\u4f1a\u4ece\u65b0\u6784\u5efa fst"),(0,i.kt)("li",{parentName:"ul"},"SUGGEST \u57fa\u4e8e fst"),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Levenshtein distance \u77eb\u6b63 typo"))),(0,i.kt)("li",{parentName:"ul"},"\u7d22\u5f15\u8bcd\u4f1a Hash\uff0cfst \u5305\u542b\u672a hash \u8bcd\u7528\u4e8e SUGGEST"),(0,i.kt)("li",{parentName:"ul"},"\u63a8\u8350\u4f7f\u7528\u591a bucket \u6765\u5206\u62c5 kv \u538b\u529b",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u975e\u5e38\u9002\u7528\u4e8e\u804a\u5929\u8fd9\u79cd\u6709 session \u7684\u573a\u666f"))),(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u4f1a\u5b58\u50a8\u539f\u6587 - \u67e5\u8be2\u8fd4\u56de\u7ed9\u7684 ID"),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ngram/trigrams \u5206\u8bcd"))),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7aef\u53e3 1491"),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://journal.valeriansaliou.name/announcing-sonic-a-super-light-alternative-to-elasticsearch/"},"Announcing Sonic: A Super-Light Alternative to Elasticsearch"))))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"SUGGEST \u4e0d\u652f\u6301\u4e2d\u6587 - ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/valeriansaliou/sonic/issues/203"},"valeriansaliou/sonic#203")),(0,i.kt)("li",{parentName:"ul"},"\u7531\u4e8e\u4f1a\u8bbe\u7f6e retain_word_objects \u4e0a\u9650 - \u5bfc\u81f4\u90e8\u5206\u8fde\u8bcd\u65e0\u6cd5\u641c\u7d22",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4f8b\u5982 \u6587\u513f\u79d1\u6280\uff0c\u56e0\u4e3a\u79d1\u6280\u51fa\u73b0\u7684\u9891\u5ea6\u8fc7\u9ad8\uff0c\u4f1a\u5bfc\u81f4\u641c\u7d22 ",(0,i.kt)("inlineCode",{parentName:"li"},"\u6587\u513f\u79d1\u6280")," \u65e0\u7ed3\u679c\uff0c\u4f46\u641c\u7d22 ",(0,i.kt)("inlineCode",{parentName:"li"},"\u6587\u513f")," \u6709\u7ed3\u679c")))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# macOS\nbrew install sonic\n\ndocker run --rm -it \\\n  -p 1491:1491 \\\n  -v /path/to/your/sonic/config.cfg:/etc/sonic.cfg \\\n  -v /path/to/your/sonic/store/:/var/lib/sonic/store/\n  --name sonic valeriansaliou/sonic\n\ncurl -LO https://github.com/valeriansaliou/sonic/raw/master/config.cfg\nsonic -c config.cfg\n")),(0,i.kt)("h2",{id:"configcfg"},"config.cfg"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/valeriansaliou/sonic/blob/master/config.cfg"},"config.cfg")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/valeriansaliou/sonic/blob/master/CONFIGURATION.md"},"CONFIGURATION")),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528\u73af\u5883\u53d8\u91cf ",(0,i.kt)("inlineCode",{parentName:"li"},"${env.SECRET}")," - \u53ea\u80fd\u7528\u4e8e\u5b57\u7b26\u4e32")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},'[server]\n# debug, info, warn, error\nlog_level = "error"\n\n\n[channel]\n\ninet = "[::1]:1491"\ntcp_timeout = 300\nauth_password=\n\n[channel.search]\n# \u9ed8\u8ba4\u67e5\u8be2\u8fd4\u56de\u6570\u91cf\nquery_limit_default = 10\n# \u67e5\u8be2\u6700\u591a\u8fd4\u56de\nquery_limit_maximum = 100\n# \u7ed3\u679c\u4e0d\u591f\u5c1d\u8bd5\u8fd1\u4f3c\u8bcd\nquery_alternates_try = 4\n# \u9ed8\u8ba4\u63a8\u8350\u8fd4\u56de\u6570\u91cf\nsuggest_limit_default = 5\n# \u63a8\u8350\u6700\u591a\u8fd4\u56de\nsuggest_limit_maximum = 20\n\n\n[store]\n\n[store.kv]\n# \u5b58\u50a8\u4f4d\u7f6e\npath = "./data/store/kv/"\n# World -> Index \u6570\u91cf - \u6ed1\u52a8\u7a97\u53e3\n# \u4e5f\u5c31\u662f\u8bf4\u4e00\u4e2a\u641c\u7d22\u8bcd\u6700\u591a\u5173\u8054 1000 \u6761\u8bb0\u5f55 - offset 1000 \u4e0d\u4f1a\u8fd4\u56de\u6570\u636e\n# \u8bbe\u7f6e\u8fc7\u5927\u5f71\u54cd\u6027\u80fd https://github.com/valeriansaliou/sonic/issues/258\nretain_word_objects = 1000\n\n[store.kv.pool]\n# \u4e0d\u6d3b\u8dc3\u65f6\u95f4\u95f4\u9694 - \u5173\u95ed\u7f13\u5b58\u6570\u636e\u5e93\ninactive_after = 1800\n\n[store.kv.database]\n# \u5e94\u8be5\u4f4e\u4e8e store.kv.pool.inactive_after\nflush_after = 900\n# \u662f\u5426\u538b\u7f29 - zstd\ncompress = true\nparallelism = 2\n# \u6700\u591a\u6253\u5f00\u6587\u4ef6\u6570\nmax_files =\nmax_compactions = 1\nmax_flushes = 1\n# \u5355\u4f4d KB - \u9ed8\u8ba4 16MB\nwrite_buffer = 16384\n# WAL \u907f\u514d\u4e22\u5931\u672a flush \u7684\u6570\u636e\nwrite_ahead_log = true\n\n[store.fst]\n\npath = "./data/store/fst/"\n\n[store.fst.pool]\n\ninactive_after = 300\n\n[store.fst.graph]\n# \u5c0f\u4e8e store.fst.pool.inactive_after\nconsolidate_after = 180\n# graph \u6587\u4ef6\u5927\u5c0f\u9650\u5236\n# \u5355\u4f4d KB - 1024 \u500d\u6570\nmax_size = 2048\n# graph \u4e2d\u7684\u8bcd\u6570\nmax_words = 250000\n')),(0,i.kt)("h2",{id:"telnet"},"Telnet"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"telnet localhost 1491\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'CONNECTED <sonic-server v1.3.0>\nstart search SecretPassword\nsuggest foo test "wener"\nping\n')),(0,i.kt)("h1",{id:"faq"},"FAQ"),(0,i.kt)("h2",{id:"push-executor-term-to-iids-object-too-long"},"push executor term-to-iids object too long"),(0,i.kt)("p",null,"retain_word_objects \u9ed8\u8ba4 1000\uff0c\u8d85\u8fc7\u5219\u4e0d\u518d\u7d22\u5f15"))}m.isMDXComponent=!0}}]);