"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[65440],{3905:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return c}});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=l.createContext({}),s=function(e){var t=l.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=s(e.components);return l.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,o=m(e,["components","mdxType","originalType","parentName"]),k=s(a),c=n,N=k["".concat(u,".").concat(c)]||k[c]||p[c]||r;return a?l.createElement(N,i(i({ref:t},o),{},{components:a})):l.createElement(N,i({ref:t},o))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=k;var m={};for(var u in t)hasOwnProperty.call(t,u)&&(m[u]=t[u]);m.originalType=e,m.mdxType="string"==typeof e?e:n,i[1]=m;for(var s=2;s<r;s++)i[s]=a[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}k.displayName="MDXCreateElement"},60707:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return m},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return o},default:function(){return k}});var l=a(22122),n=a(19756),r=(a(67294),a(3905)),i=["components"],m={title:"seaweedfs"},u=void 0,s={unversionedId:"service/storage/seaweedfs",id:"service/storage/seaweedfs",isDocsHomePage:!1,title:"seaweedfs",description:"- \u6ce8\u610f",source:"@site/notes/service/storage/seaweedfs.md",sourceDirName:"service/storage",slug:"/service/storage/seaweedfs",permalink:"/notes/service/storage/seaweedfs",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/storage/seaweedfs.md",version:"current",frontMatter:{title:"seaweedfs"},sidebar:"docs",previous:{title:"MinIO Operator",permalink:"/notes/service/storage/minio-operator"},next:{title:"Network FAQ",permalink:"/notes/service/network/network-faq"}},o=[{value:"volume",id:"volume",children:[]},{value:"weed shell",id:"weed-shell",children:[]},{value:"\u4f18\u5316",id:"\u4f18\u5316",children:[]},{value:"Kubernetes",id:"kubernetes",children:[]}],p={toc:o};function k(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u6784\u5efa\u7684\u5355 ",(0,r.kt)("inlineCode",{parentName:"li"},"weed volume")," \u53ea\u652f\u6301 30G - \u5bf9\u5206\u5e03\u5f0f\u6587\u4ef6\u7cfb\u7edf\u6765\u8bf4\u592a\u5c0f\u4e86"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/chrislusf/seaweedfs"},"chrislusf/seaweedfs"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8d77\u6e90\u4e8e ",(0,r.kt)("a",{parentName:"li",href:"http://www.usenix.org/event/osdi10/tech/full_papers/Beaver.pdf"},"Facebook's Haystack design paper"),", f4"),(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u6587\u4ef6 40byte \u5143\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"\u5e95\u5c42\u5bf9\u8c61\u5b58\u50a8"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7 filer \u5b9e\u73b0 POSIX \u517c\u5bb9\u6587\u4ef6\u7cfb\u7edf"),(0,r.kt)("li",{parentName:"ul"},"REST \u63a5\u53e3 - JSON\u3001JSONP \u8fd4\u56de"),(0,r.kt)("li",{parentName:"ul"},"\u67b6\u6784\u7b80\u5355"))),(0,r.kt)("li",{parentName:"ul"},"\u7279\u6027",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u51b7\u70ed\u6570\u636e\u5206\u79bb"),(0,r.kt)("li",{parentName:"ul"},"\u70ed\u6570\u636e O(1) \u8bbf\u95ee\u65f6\u95f4"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u9009\u62e9\u65e0\u526f\u672c\u6216\u4e0d\u540c\u526f\u672c\u7ea7\u522b - \u611f\u77e5 rack \u548c dc"),(0,r.kt)("li",{parentName:"ul"},"\u65e0\u5355\u70b9 - \u4e3b\u8282\u70b9 failover"),(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u6587\u4ef6 mime \u5c31\u884c gzip"),(0,r.kt)("li",{parentName:"ul"},"\u66f4\u65b0\u6216\u5220\u9664\u540e\u5c31\u884c\u7a7a\u95f4\u56de\u6536"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 TTL"),(0,r.kt)("li",{parentName:"ul"},"\u53ea\u8981\u6709\u78c1\u76d8\u7a7a\u95f4\u5c31\u53ef\u4ee5\u6dfb\u52a0\u603b\u5b58\u50a8\u7a7a\u95f4"),(0,r.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u5220\u9664\u8282\u70b9\u4e0d\u4f1a\u5bfc\u81f4\u6570\u636e\u5c31\u884c\u4ece\u65b0\u5e73\u8861"),(0,r.kt)("li",{parentName:"ul"},"\u56fe\u7247\u5927\u5c0f\u8c03\u6574 - \u53ef\u9009"),(0,r.kt)("li",{parentName:"ul"},"Tag, Accept-Range, Last-Modified \u7b49"),(0,r.kt)("li",{parentName:"ul"},"in-memory/leveldb/readonly mode tuning for memory/performance balance."),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u5728\u7ebf rebalancing"),(0,r.kt)("li",{parentName:"ul"},"\u900f\u660e\u4e91\u96c6\u6210 - \u5bf9\u70ed\u6570\u636e\u5c31\u884c\u5c42\u53e0\u7ed3\u6784\u5b58\u50a8\u5b9e\u73b0\u65e0\u9650\u7a7a\u95f4"),(0,r.kt)("li",{parentName:"ul"},"\u70ed\u6570\u636e Erasure Coding - \u611f\u77e5 Rack",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"RS(10,4) - \u5141\u8bb8\u4e22\u5931 4 \u5206\u7247\uff0c\u603b\u6570\u636e\u4e3a\u539f\u6765 1.4 \u500d"),(0,r.kt)("li",{parentName:"ul"},"1GB \u8fde\u7eed\u5757\uff0c1MB \u5757\u5927\u5c0f\uff0c\u63d0\u5347\u8bfb\u53d6\u6027\u80fd"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u4f1a\u5c06\u7d22\u5f15\u52a0\u8f7d\u5230\u5185\u5b58 - \u8282\u7701\u5185\u5b58\uff0c\u542f\u52a8\u5757"),(0,r.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5668\u7075\u6d3b\u5e03\u5c40\uff0c\u6ca1\u6709\u6700\u4f4e server \u548c rack \u8981\u6c42"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7 volume \u7ba1\u7406 ec"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u5c11\u4e8e 4 volume\uff0cec \u53ef\u4ee5\u7528\u4fdd\u62a4\u78c1\u76d8\u635f\u574f"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u5927\u4e8e\u7b49\u4e8e 4 volume\uff0cec \u53ef\u4ee5\u7528\u4e8e\u4fdd\u62a4\u7cfb\u7edf\u5931\u8d25"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u5927\u4e8e 4 rack\uff0cec \u53ef\u4fdd\u62a4 rack \u5931\u8d25"),(0,r.kt)("li",{parentName:"ul"},"\u52a3\u52bf",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e22\u5931\u5206\u7247\u5728\u8bbf\u95ee\u65f6\u4f1a\u53d8\u6162"),(0,r.kt)("li",{parentName:"ul"},"\u91cd\u6784 ec \u9700\u8981\u4f20\u8f93\u6574\u4e2a volume - \u4f20\u8f93\u91cf\u5927\u4f46\u6548\u7387\u9ad8"),(0,r.kt)("li",{parentName:"ul"},"\u53ea\u652f\u6301\u5220\u9664\u4e0d\u652f\u6301\u66f4\u65b0"),(0,r.kt)("li",{parentName:"ul"},"\u538b\u7f29\u9700\u8981\u5148\u8f6c\u6362\u4e3a\u666e\u901a volume"))))))),(0,r.kt)("li",{parentName:"ul"},"Filer \u7279\u6027",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 HTTP \u66b4\u9732\u6587\u4ef6\u548c\u76ee\u5f55"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u5927\u6587\u4ef6 - TB \u7ea7\u522b"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 FUSE \u6302\u8f7d",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"weed mount")))),(0,r.kt)("li",{parentName:"ul"},"S3 \u517c\u5bb9\u63a5\u53e3",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"weed s3")," \u542f\u52a8 Gateway"),(0,r.kt)("li",{parentName:"ul"},"Bucket \u6620\u5c04\u4e3a\u76ee\u5f55 ",(0,r.kt)("inlineCode",{parentName:"li"},"/buckets/<bucket_name>")),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 Policy"))),(0,r.kt)("li",{parentName:"ul"},"HDFS \u517c\u5bb9\u63a5\u53e3"),(0,r.kt)("li",{parentName:"ul"},"\u5f02\u6b65\u5907\u4efd\u5230 S3, Google Cloud Storage, Azure, BackBlaze"),(0,r.kt)("li",{parentName:"ul"},"WebDAV \u63a5\u53e3",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"weed webdav")),(0,r.kt)("li",{parentName:"ul"},"\u65e0\u8ba4\u8bc1"))),(0,r.kt)("li",{parentName:"ul"},"AES256-GCM \u52a0\u5bc6\u5b58\u50a8"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 TTL"),(0,r.kt)("li",{parentName:"ul"},"Kubernetes CSI \u9a71\u52a8"))),(0,r.kt)("li",{parentName:"ul"},"Filer",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5143\u4fe1\u606f\u9700\u8981\u5b58\u50a8"),(0,r.kt)("li",{parentName:"ul"},"Cassandra, Mongodb, Redis, Elastic Search, MySql, Postgres, MemSql, TiDB, CockroachDB, Etcd"),(0,r.kt)("li",{parentName:"ul"},"\u4e3a\u786e\u4fdd\u539f\u5b50\u6027\u53ef\u4f7f\u7528 Postgres, MySql",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u91cd\u547d\u540d\u3001\u76ee\u5f55\u91cd\u547d\u540d\u9700\u8981\u539f\u5b50\u6027\u652f\u6301"))),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u8ba2\u9605\u6587\u4ef6\u53d8\u5316\u53d1\u9001\u6d88\u606f"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4e0d\u652f\u6301\u9012\u5f52\u76ee\u5f55\u5220\u9664")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5982\u679c Filter \u5143\u4fe1\u606f\u4e22\u5931\uff0c\u5219\u4f1a\u5bfc\u81f4\u6587\u4ef6\u7ed3\u6784\u4fe1\u606f\u4e22\u5931")," - \u65e0\u6cd5\u6062\u590d\uff0c\u57fa\u672c\u7b49\u540c\u4e8e\u6587\u4ef6\u4e22\u5931\uff0c\u4e14\u65e0\u6cd5\u8bbf\u95ee"))),(0,r.kt)("li",{parentName:"ul"},"\u573a\u666f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u76f8\u5bf9\u5c0f\u6587\u4ef6\u9ad8\u5e76\u53d1"),(0,r.kt)("li",{parentName:"ul"},"CDN"),(0,r.kt)("li",{parentName:"ul"},"\u5206\u5e03\u5f0f\u6587\u4ef6\u7f13\u5b58"),(0,r.kt)("li",{parentName:"ul"},"\u56fe\u7247\u670d\u52a1\u5668"))),(0,r.kt)("li",{parentName:"ul"},"\u7aef\u53e3",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e3b\u8282\u70b9",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"9333"))),(0,r.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u8282\u70b9",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"8080"))))),(0,r.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u5927\u5c0f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5355\u5377\u6700\u5927 32G - 32GiB or 8x2^32 bytes",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"8 bytes \u5bf9\u9f50"),(0,r.kt)("li",{parentName:"ul"},"\u589e\u52a0\u5bf9\u9f50\u53ef\u589e\u52a0\u7a7a\u95f4\u5927\u5c0f\uff0c\u4f46\u5bf9\u9f50\u53ef\u80fd\u9700\u8981 pad \u6d6a\u8d39\u7a7a\u95f4"))),(0,r.kt)("li",{parentName:"ul"},"\u6700\u591a 4Gi / 2^32 \u5377",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u56e0\u6b64\u9ed8\u8ba4\u6700\u5927\u96c6\u7fa4 8 x 4GiB x 4GiB = 128 128EiB"))),(0,r.kt)("li",{parentName:"ul"},"\u5355\u6587\u4ef6\u6700\u5927\u4e3a\u5377\u5927\u5c0f"))),(0,r.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u5143\u4fe1\u606f\u5b58\u50a8\u4e8e\u5185\u5b58",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"key 16 bytes - ",(0,r.kt)("inlineCode",{parentName:"li"},"<64bit key, 32bit offset, 32bit size>")))),(0,r.kt)("li",{parentName:"ul"},"fid - \u6bcf\u4e2a\u88ab\u5b58\u50a8\u7684\u5bf9\u8c61\u7684\u552f\u4e00 ID - \u6587\u4ef6\u4fe1\u606f\u53ef\u7531\u5916\u90e8\u5b58\u50a8 id \u6620\u5c04\u8fdb\u884c\u8ddf\u8e2a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"3,01637037d6")," - \u5b57\u7b26\u4e32\u6700\u957f 33 bytes\uff0c\u4e8c\u8fdb\u5236\u5b58\u50a8\u6700\u957f 16 bytes",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"uint32 volume id=3"),(0,r.kt)("li",{parentName:"ul"},"uint64 file key=0x01 - \u6587\u4ef6\u6570\u91cf - \u589e\u52a0",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5927\u6587\u4ef6 chunk \u4e5f\u4f1a\u589e\u52a0"))),(0,r.kt)("li",{parentName:"ul"},"uint32 file cookie=0x637037d6 - \u7528\u4e8e\u907f\u514d URL \u731c\u6d4b\u6587\u4ef6"))))),(0,r.kt)("li",{parentName:"ul"},"\u526f\u672c\u7ea7\u522b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"xyz -> \u4e0d\u540c DC|\u540c DC \u4e0d\u540c Rack|\u540c Rack"),(0,r.kt)("li",{parentName:"ul"},"000 - \u65e0"),(0,r.kt)("li",{parentName:"ul"},"001 - \u540c rack 1 \u526f\u672c"),(0,r.kt)("li",{parentName:"ul"},"010 - \u4e0d\u540c rack \u540c dc 1 \u526f\u672c"),(0,r.kt)("li",{parentName:"ul"},"100 - \u4e0d\u540c dc 1 \u526f\u672c"),(0,r.kt)("li",{parentName:"ul"},"200 - \u4e0d\u540c dc 2 \u526f\u672c"),(0,r.kt)("li",{parentName:"ul"},"110 - \u4e0d\u540c rack 1 \u526f\u672c\uff0c\u4e0d\u540c dc 1 \u526f\u672c"))),(0,r.kt)("li",{parentName:"ul"},"Volume",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u56fa\u5b9a\u8282\u70b9 - \u4f4d\u7f6e\u53ef\u4ee5\u7f13\u5b58\uff0c\u53ef\u8ba2\u9605\u53d8\u5316"),(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e\u5206\u7247/Sharding"),(0,r.kt)("li",{parentName:"ul"},"\u5199\u5165\u5230\u6240\u6709 replica \u624d\u7b97\u6210\u529f"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u5931\u8d25\uff0c\u5219\u6807\u8bb0 volume \u53ea\u8bfb\uff0c\u4e0b\u6b21\u5206\u914d\u5176\u4ed6\u53ef\u5199\u5165 volume id"))),(0,r.kt)("li",{parentName:"ul"},"Volume Server - ",(0,r.kt)("inlineCode",{parentName:"li"},"weed volume"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6700\u591a 30G - \u6784\u5efa\u6dfb\u52a0 tag 5BytesOffset \u652f\u6301\u53ef\u6700\u591a 8T"),(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4f9b volume \u5b58\u50a8 - \u9ed8\u8ba4\u6700\u591a 8 \u4e2a volume id",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u76f8\u5f53\u4e8e\u5e73\u5747\u5355\u4e2a volume id \u6700\u591a 30G/8 ~ 3.75G"))))),(0,r.kt)("li",{parentName:"ul"},"Usually hot data are fresh and warm data are old",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"newly created volumes on local servers, and optionally upload the older volumes on the cloud"))),(0,r.kt)("li",{parentName:"ul"},"collection",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"volume \u96c6\u5408 - \u76f8\u5f53\u4e8e\u5c06\u7528\u5230\u7684 volume \u8fdb\u884c\u5206\u7c7b\uff0c\u65b9\u4fbf\u7edf\u4e00\u7ba1\u7406")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"volume -fileSizeLimitMB=256 - \u9ed8\u8ba4\u5355\u6587\u4ef6\u6700\u5927 256MB\uff0c\u914d\u7f6e\u8fc7\u5927\u53ef\u80fd\u5bfc\u81f4 OOM",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/chrislusf/seaweedfs/wiki/Large-File-Handling"},"Large file handleing"))))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# \u4e0b\u8f7d https://github.com/chrislusf/seaweedfs/releases\n# \u5b89\u88c5\ngo get -u -v github.com/chrislusf/seaweedfs/weed\n# $GOPATH/src/github.com/chrislusf/seaweedfs/weed\n\n# \u751f\u6210\u914d\u7f6e\n# \u914d\u7f6e\u76ee\u5f55 ./ $HOME/.seaweedfs /etc/seaweedfs\n# config filer|notification|replication|security|master\nweed scaffold -config master -output ./\nweed scaffold -config filer -output ./\nweed scaffold -config replication -output ./\n\n# matser\n# http://localhost:9333\n# -metrics.address Prometheus gateway\nmkdir -p meta-data v1 v2 mnt-cache mnt\nweed master -mdir=./meta-data -port=9333\n\n# volumes\n# -dataCenter\n# -rack\n# -index=memory\n# -max=8 \u5377\u6570\u91cf\nweed volume -dir=$PWD/v1 -max=5  -mserver=localhost:9333 -port=8080\nweed volume -dir=$PWD/v2 -max=10 -mserver=localhost:9333 -port=8081\n\n# \u6027\u80fd\u6d4b\u8bd5\n# 1M 1k \u7684\u6587\u4ef6\n# \u4e24\u4e2a volume - 5808.88 #/sec 5987.44 Kbytes/sec\n# \u8fd0\u884c\u5b8c\u6210\u540e\u5220\u9664 collection - http://localhost:9333/col/delete?collection=benchmark\nweed benchmark -master=localhost:9333\n\n# \u6587\u4ef6\u7cfb\u7edf\nweed filer -port=8888\n\n# \u672c\u5730\u6302\u8f7d\n# -filer.path\n# -replication\n# -ttl\n# -umask\nweed mount -filer=localhost:8888 -cacheDir=$PWD/mnt-cache -dir=$PWD/mnt -dirAutoCreate\n\n# \u533f\u540d\u8bfb public\n# admin \u7ba1\u7406\n# test \u8bbf\u95ee test bucket\ncat <<JSON > s3.json\n{\n  "identities": [\n    {\n      "name": "anonymous",\n      "actions": ["Read:public"]\n    },\n    {\n      "name": "admin",\n      "credentials": [\n        {\n          "accessKey": "admin",\n          "secretKey": "secret"\n        }\n      ],\n      "actions": ["Admin", "Read", "Write"]\n    },\n    {\n      "name": "test",\n      "credentials": [\n        {\n          "accessKey": "test",\n          "secretKey": "test"\n        }\n      ],\n      "actions": ["Read:test", "Read:test", "Write:test"]\n    }\n  ]\n}\nJSON\nweed s3 -port=8333 -filer=localhost:8888 -config s3.json\n')),(0,r.kt)("h2",{id:"volume"},"volume"),(0,r.kt)("h2",{id:"weed-shell"},"weed shell"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/chrislusf/seaweedfs/wiki/weed-shell"},"weed-shell")),(0,r.kt)("li",{parentName:"ul"},"\u547d\u4ee4\u53c2\u6570\u8981\u770b\u6e90\u7801")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u6240\u6709\nvolume.list\n\n# \u4fee\u6539\u4e4b\u524d\u9700\u8981 lock\nlock\n\n# \u5c06 volume 157 \u526f\u672c\u8bbe\u7f6e\u4e3a 001 - \u540c rack 1 \u526f\u672c\nvolume.configure.replication -volumeId=157 -replication=001\n# \u4fee\u590d\u526f\u672c\nvolume.fix.replication\n\n# \u4fee\u6539\u4e4b\u540e unlock\nunlock\n\n# \u5220\u9664\n# volume-server volume-id\nvolume.delete 127.0.0.1:8080 157\n")),(0,r.kt)("h2",{id:"\u4f18\u5316"},"\u4f18\u5316"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/chrislusf/seaweedfs/wiki/Optimization"},"https://github.com/chrislusf/seaweedfs/wiki/Optimization")),(0,r.kt)("li",{parentName:"ul"},"dc \u53ef\u7528\u4e8e\u6807\u793a\u4e0d\u540c\u5b58\u50a8\u5c42",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f8b\u5982 SSD"))),(0,r.kt)("li",{parentName:"ul"},"assign \u65f6\u53ef\u6307\u5b9a dc")),(0,r.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/seaweedfs/seaweedfs-csi-driver"},"seaweedfs/seaweedfs-csi-driver")," - \u521b\u5efa sc \u6307\u5411 filer",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"storageclass - ",(0,r.kt)("inlineCode",{parentName:"li"},"seaweedfs-storage"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f1a\u88ab\u8bbe\u7f6e\u6210\u9ed8\u8ba4\uff0c\u6309\u9700\u7f16\u8f91 yaml \u53d6\u6d88"),(0,r.kt)("li",{parentName:"ul"},"provisioner: ",(0,r.kt)("inlineCode",{parentName:"li"},"com.seaweedfs.csi")))),(0,r.kt)("li",{parentName:"ul"},"SEAWEEDFS_FILER - \u6307\u5411 filer",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7f16\u8f91 yaml \u4fee\u6539"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/seaweedfs/seaweedfs-operator"},"seaweedfs/seaweedfs-operator")),(0,r.kt)("li",{parentName:"ul"},"helm ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/chrislusf/seaweedfs/tree/master/k8s"},"chart"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u63a8\u8350\u4f7f\u7528\uff0c\u53ef\u7528\u4e8e\u53c2\u8003"),(0,r.kt)("li",{parentName:"ul"},"master/filer/volume",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"statefulsets"),(0,r.kt)("li",{parentName:"ul"},"anti-affinity on hostname"),(0,r.kt)("li",{parentName:"ul"},"memsql(mysql) filer backend"),(0,r.kt)("li",{parentName:"ul"},"secret-seaweedfs-db.yaml - mysql password"))),(0,r.kt)("li",{parentName:"ul"},"host path",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"/storage/logs/seaweedfs - \u65e5\u5fd7 ",(0,r.kt)("inlineCode",{parentName:"li"},"-logdir"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"master"),(0,r.kt)("li",{parentName:"ul"},"volume"),(0,r.kt)("li",{parentName:"ul"},"filer"))),(0,r.kt)("li",{parentName:"ul"},"/ssd/seaweed-master/ - master \u5143\u6570\u636e ",(0,r.kt)("inlineCode",{parentName:"li"},"-mdir")),(0,r.kt)("li",{parentName:"ul"},"/storage/object_store/ - volume \u6570\u636e ",(0,r.kt)("inlineCode",{parentName:"li"},"-dir")))),(0,r.kt)("li",{parentName:"ul"},"\u76ee\u524d\u6570\u636e\u8d26\u53f7\u5bc6\u7801\u662f\u786c\u7f16\u7801 - YourSWUser:HardCodedPassword"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f1a\u521b\u5efa ingress - \u4e14\u65e0\u6cd5\u81ea\u5b9a\u4e49")))))}k.isMDXComponent=!0}}]);