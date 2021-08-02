"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[50793],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=i.createContext({}),s=function(e){var t=i.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,k=u["".concat(m,".").concat(d)]||u[d]||p[d]||r;return n?i.createElement(k,o(o({ref:t},c),{},{components:n})):i.createElement(k,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},67600:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var i=n(22122),a=n(19756),r=(n(67294),n(3905)),o=["components"],l={title:"MinIO"},m=void 0,s={unversionedId:"service/storage/minio",id:"service/storage/minio",isDocsHomePage:!1,title:"MinIO",description:"- minio \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/service/storage/minio.md",sourceDirName:"service/storage",slug:"/service/storage/minio",permalink:"/notes/service/storage/minio",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/storage/minio.md",version:"current",frontMatter:{title:"MinIO"},sidebar:"docs",previous:{title:"Gluster",permalink:"/notes/service/storage/gluster"},next:{title:"Minio ACL",permalink:"/notes/service/storage/minio-acl"}},c=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]},{value:"Docker",id:"docker",children:[]},{value:"KMS",id:"kms",children:[]},{value:"ACL",id:"acl",children:[]},{value:"console",id:"console",children:[]},{value:"\u96c6\u7fa4",id:"\u96c6\u7fa4",children:[]},{value:"\u8054\u90a6",id:"\u8054\u90a6",children:[]},{value:"Unsupported backend format",id:"unsupported-backend-format",children:[]},{value:"Let&#39;s Encrypt Certbot",id:"lets-encrypt-certbot",children:[]},{value:"Unable to initialize config system: Invalid credentials",id:"unable-to-initialize-config-system-invalid-credentials",children:[]},{value:"This &#39;admin&#39; API is not supported by server in &#39;mode-server-fs&#39;.",id:"this-admin-api-is-not-supported-by-server-in-mode-server-fs",children:[]}],p={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/minio/minio"},"minio")," \u662f\u4ec0\u4e48\uff1f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MinIO \u5168\u7ebf\u4ea7\u54c1 AGPL \u534f\u8bae"),(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4f9b S3 \u5bf9\u8c61\u5b58\u50a8\u534f\u8bae\u7684\u670d\u52a1"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u5206\u5e03\u5f0f\u9ad8\u53ef\u7528"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u7528\u6237\u3001\u5206\u7ec4\u3001\u7b56\u7565\u3001KMS"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 OpenID \u548c LDAP"),(0,r.kt)("li",{parentName:"ul"},"Audit Webhook\u3001Logger Webhook"),(0,r.kt)("li",{parentName:"ul"},"\u5185\u7f6e\u538b\u7f29\u80fd\u529b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/minio/console"},"console")," \u63d0\u4f9b\u7ba1\u7406\u754c\u9762"))),(0,r.kt)("li",{parentName:"ul"},"Reed-Solomon code"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/minio/awesome-minio"},"minio/awesome-minio")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://play.minio.io:9000"},"https://play.minio.io:9000"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Q3AM3UQ867SPQQA43P2F"),(0,r.kt)("li",{parentName:"ul"},"zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.minio.io/docs/minio-server-configuration-guide"},"config.json"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u914d\u7f6e\u76ee\u5f55\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"${HOME}/.minio")),(0,r.kt)("li",{parentName:"ul"},"\u542f\u52a8\u65f6\u53ef\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"--config-dir")," \u6307\u5b9a"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.minio.io/docs/minio-bucket-notification-guide"},"Minio Bucket Notification Guide")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.minio.io/docs/minio-server-limits-per-tenant"},"Minio Server Limits Per Tenant"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u7684 S3 \u63a5\u53e3",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"BucketACL (Use bucket policies instead)"),(0,r.kt)("li",{parentName:"ul"},"BucketCORS (CORS enabled by default on all buckets for all HTTP verbs)"),(0,r.kt)("li",{parentName:"ul"},"BucketLifecycle (Not required for Minio erasure coded backend)"),(0,r.kt)("li",{parentName:"ul"},"BucketReplication (Use mc mirror instead)"),(0,r.kt)("li",{parentName:"ul"},"BucketVersions, BucketVersioning (Use s3git)"),(0,r.kt)("li",{parentName:"ul"},"BucketWebsite (Use caddy or nginx)"),(0,r.kt)("li",{parentName:"ul"},"BucketAnalytics, BucketMetrics, BucketLogging (Use bucket notification APIs)"),(0,r.kt)("li",{parentName:"ul"},"BucketRequestPayment"),(0,r.kt)("li",{parentName:"ul"},"BucketTagging"),(0,r.kt)("li",{parentName:"ul"},"ObjectACL (Use bucket policies instead)"),(0,r.kt)("li",{parentName:"ul"},"ObjectTorrent"))))),(0,r.kt)("li",{parentName:"ul"},"Cyberduck s3 http ",(0,r.kt)("a",{parentName:"li",href:"https://svn.cyberduck.io/trunk/profiles/S3%20(HTTP).cyberduckprofile"},"https://svn.cyberduck.io/trunk/profiles/S3%20(HTTP).cyberduckprofile")),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.minio.io/docs/setup-nginx-proxy-with-minio"},"Set up Nginx proxy with MinIO Server"))))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"access key \u81f3\u5c11 3 \u5b57\u7b26"),(0,r.kt)("li",{parentName:"ul"},"secret key \u81f3\u5c11 8 \u5b57\u7b26"),(0,r.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u6a21\u5f0f\u4e0d\u652f\u6301\u589e\u52a0\u8282\u70b9",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u8054\u90a6\u8fdb\u884c bucket \u5206\u6d41"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u51cf\u5c11")))))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u9650\u5236"),(0,r.kt)("th",{parentName:"tr",align:null},"\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6700\u591a\u78c1\u76d8\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"16")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6700\u5c0f\u78c1\u76d8\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Read quorum"),(0,r.kt)("td",{parentName:"tr",align:null},"N/2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Write quorum"),(0,r.kt)("td",{parentName:"tr",align:null},"N/2+1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6d4f\u89c8\u5668\u4e0a\u4f20\u9650\u5236"),(0,r.kt)("td",{parentName:"tr",align:null},"5GiB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6700\u5927\u5bf9\u8c61"),(0,r.kt)("td",{parentName:"tr",align:null},"5TiB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5757\u5927\u5c0f"),(0,r.kt)("td",{parentName:"tr",align:null},"5 MiB - 5 GiB")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# minio \u4ed3\u5e93 - \u53ef\u80fd\u66f4\u65b0\n# brew install minio/stable/minio\n# brew install minio/stable/mc\n# \u5b98\u65b9\u4ed3\u5e93\nbrew install minio-c minio\n\ndocker pull minio/minio\n# \u5355\u8282\u70b9\u542f\u52a8\ndocker run -p 9000:9000 --name minio -v /mnt/data:/data -v /mnt/config:/root/.minio minio/minio server /data\n\n# \u96c6\u7fa4\u542f\u52a8\u9700\u8981\u6307\u5b9a MINIO_ACCESS_KEY \u548c MINIO_SECRET_KEY\nMINIO_ACCESS_KEY=$(cat /dev/urandom | env LC_CTYPE=C tr -dc 'a-zA-Z0-9' | head -c 32)\nMINIO_SECRET_KEY=$(cat /dev/urandom | env LC_CTYPE=C tr -dc 'a-zA-Z0-9' | head -c 32)\n\ndocker network create minio-net\nfor i in {1..4}; do\ndocker run -d -p 900$i:9000 --network minio-net --name m$i \\\n  -e \"MINIO_ACCESS_KEY=${MINIO_ACCESS_KEY}\" \\\n  -e \"MINIO_SECRET_KEY=${MINIO_SECRET_KEY}\" \\\n  -v $PWD/m$i/data:/data \\\n  -v $PWD/m$i/config:/root/.minio \\\n  minio/minio server http://m1:9000/data http://m2:9000/data http://m3:9000/data http://m4:9000/data\ndone\n\n# \u53ef\u4ee5\u4f7f\u7528 docker \u4f5c\u4e3a\u5ba2\u6237\u7aef\ndocker pull minio/mc\nalias mc='docker run -v ~/.mc:/root/.mc -v $PWD:/pwd --workdir /pwd --rm -it minio/mc'\n# \u914d\u7f6e\u6587\u4ef6\u4f4d\u4e8e ~/.mc/\nmc config host add m1 http://$(docker-machine ip):9001 $MINIO_ACCESS_KEY $MINIO_SECRET_KEY S3v4\nbash\n# \u7b80\u5316\u4f7f\u7528\nalias ls='mc ls'\nalias cp='mc cp'\nalias cat='mc cat'\nalias mkdir='mc mb'\nalias pipe='mc pipe'\n\nmc mb m1/test\necho Hello Minio ! | mc pipe m1/test/test.txt\nmc cat m1/test/test.txt\n\nmc cp m1/test/test.txt m1/test/bk.txt\nmc cat m1/test/bk.txt\nmc rm m1/test/bk.txt\n\n# download/upload/list\nmc share download m1/test/test.txt\n\n# \u7c7b\u4f3c\u4e8e rsync\n# --force \u5f3a\u5236\u8986\u5199 --watch, -w \u76d1\u63a7\u53d8\u66f4 --remove \u5220\u9664\u76ee\u7684\u7684\u5176\u4f59\u5185\u5bb9 --fake\nmc mb m1/test-m\nmc mirror m1/test m1/test-m -w --remove --force\necho One more | mc pipe m1/test/more.txt\nmc rm m1/test/more.txt\n# \u53ea\u6709\u4e4b\u524d\u7684 test.txt\nmc ls m1/test-m\n\ndocker stop m4\n# \u4f9d\u7136\u80fd\u521b\u5efa\u6587\u4ef6\necho Touch| mc pipe m1/test/$(date +\"%Y-%m-%d.%H-%M-%S\").txt\ndocker stop m3\n# \u80fd\u8bfb\nmc cat m1/test/test.txt\n# \u4e0d\u80fd\u5199\u5165, \u4f1a\u4e00\u76f4\u7b49\u5f85\necho Touch| mc pipe m1/test/$(date +\"%Y-%m-%d.%H-%M-%S\").txt\n# \u6b64\u65f6\u65e0\u6cd5\u542f\u52a8 m3, \u56e0\u4e3a m4 \u672a\u542f\u52a8\ndocker start m3\n# \u4e24\u4e2a\u8282\u70b9\u90fd\u542f\u52a8\u6210\u529f, \u4e4b\u524d\u7684\u64cd\u4f5c\u7ee7\u7eed\u8fdb\u884c\ndocker start m4\n\n# Stop all\ndocker rm -f m{1,2,3,4}\n\n\n# https://github.com/minio/minfs\n\n# rclone\necho \"\n[oss]\ntype=s3\nenv_auth=false\naccess_key_id=${MINIO_ACCESS_KEY}\nsecret_access_key=${MINIO_SECRET_KEY}\nregion=us-east-1\nendpoint=http://127.0.0.1:9000\nlocation_constraint=\nserver_side_encryption=\n\" >> ~/.rclone.conf\nrclone lsd oss:\n\n")),(0,r.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.min.io/docs/minio-server-configuration-guide.html"},"https://docs.min.io/docs/minio-server-configuration-guide.html")),(0,r.kt)("li",{parentName:"ul"},"\u73b0\u5728\u914d\u7f6e\u4f1a\u5b58\u50a8\u5230\u540e\u7aef\u5b58\u50a8\u76ee\u5f55\u4e0b\uff0c ",(0,r.kt)("inlineCode",{parentName:"li"},".minio.sys")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/minio/minio/tree/master/docs/config"},"https://github.com/minio/minio/tree/master/docs/config"))),(0,r.kt)("h2",{id:"docker"},"Docker"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'docker run -p 9000:9000 --name minio1 \\\n  -e "MINIO_ACCESS_KEY=changeme" \\\n  -e "MINIO_SECRET_KEY=changeme" \\\n  -v /mnt/data:/data \\\n  minio/minio server /data\n')),(0,r.kt)("h2",{id:"kms"},"KMS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.min.io/docs/minio-kms-quickstart-guide.html"},"https://docs.min.io/docs/minio-kms-quickstart-guide.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/files/gitlab-config-template/gitlab.rb.template#L355"},"https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/files/gitlab-config-template/gitlab.rb.template#L355"))),(0,r.kt)("h2",{id:"acl"},"ACL"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.min.io/docs/minio-admin-complete-guide.html"},"https://docs.min.io/docs/minio-admin-complete-guide.html"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# \u521b\u5efa\u4e00\u4e2a sites \u7684 bucket\nmc mb myminio/sites\n# \u521b\u5efa\u4e00\u4e2a sites \u6765\u7ba1\u7406\nmc admin user add myminio/ sites $(uuidgen | tee)\n# \u6dfb\u52a0\u7b56\u7565\necho \'{"Version":"2012-10-17","Statement":[{"Action":["s3:*"],"Effect":"Allow","Resource":["arn:aws:s3:::crm/*"],"Sid":""}]}\' > minio-sites-admin-policy.json\nmc admin policy add myminio/ sites-admin minio-sites-admin-policy.json\n# \u7ed9\u7528\u6237\u8d4b\u6743\nmc admin policy set myminio sites-admin user=sites\n')),(0,r.kt)("h2",{id:"console"},"console"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/minio/console"},"minio/console"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 operator - ",(0,r.kt)("inlineCode",{parentName:"li"},"CONSOLE_OPERATOR_MODE=on"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9700\u8981\u751f\u6210 JWT \u767b\u9646 - operator \u7684 ServiceAccount")))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'mc config host add test http://minio.cluster.internal/ YOURACCESSKEY YOURSECRETKEY\nmc ls test\n\nmc admin user add test console YOURCONSOLESECRET\n\ncat > consoleAdmin.json << EOF\n{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Action": ["admin:*"],\n      "Effect": "Allow",\n      "Sid": ""\n    },\n    {\n      "Action": ["s3:*"],\n      "Effect": "Allow",\n      "Resource": ["arn:aws:s3:::*"],\n      "Sid": ""\n    }\n  ]\n}\nEOF\nmc admin policy add test ConsoleAdmin consoleAdmin.json\nmc admin policy set test ConsoleAdmin user=console\n\n# export CONSOLE_HMAC_JWT_SECRET=YOURJWTSIGNINGSECRET\n#required to encrypt jwet payload\n# export CONSOLE_PBKDF_PASSPHRASE=SECRET\n#required to encrypt jwet payload\n# export CONSOLE_PBKDF_SALT=SECRET\n\ndocker run --rm -it \\\n  -e CONSOLE_MINIO_SERVER=http://minio.cluster.internal \\\n  -e CONSOLE_ACCESS_KEY=console \\\n  -e CONSOLE_SECRET_KEY=YOURCONSOLESECRET \\\n  -p 9090:9090 \\\n  --name console minio/console server\n')),(0,r.kt)("h2",{id:"\u96c6\u7fa4"},"\u96c6\u7fa4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.minio.io/docs/distributed-minio-quickstart-guide.html"},"Distributed MinIO Quickstart Guide")),(0,r.kt)("li",{parentName:"ul"},"\u96c6\u7fa4",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u81f3\u5c11\u9700\u8981 4 \u4e2a\u8282\u70b9\uff0c\u6700\u591a 32 \u4e2a\u8282\u70b9\uff0c\u6700\u591a"),(0,r.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u542f\u52a8\u540e ",(0,r.kt)("strong",{parentName:"li"},"\u8282\u70b9\u4e0d\u53ef\u589e\u52a0")),(0,r.kt)("li",{parentName:"ul"},"\u542f\u52a8\u9700\u8981\u53cc\u6570\u78c1\u76d8"),(0,r.kt)("li",{parentName:"ul"},"\u6700\u591a 16 \u4e2a\u78c1\u76d8, erasure code"),(0,r.kt)("li",{parentName:"ul"},"\u5728 (n/2 + 1) \u78c1\u76d8\u6709\u6548\u65f6, \u96c6\u7fa4\u6709\u6548, \u53ef\u5199\uff0c\u53ef\u521b\u5efa Bucket"),(0,r.kt)("li",{parentName:"ul"},"\u53ea\u6709 n/2 \u78c1\u76d8\u6709\u6548\u65f6, \u53ea\u8bfb"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u8282\u70b9\u53ef\u4ee5\u5305\u542b\u591a\u4e2a\u78c1\u76d8")))),(0,r.kt)("h2",{id:"\u8054\u90a6"},"\u8054\u90a6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.minio.io/docs/minio-federation-quickstart-guide.html"},"Federation Quickstart Guide")),(0,r.kt)("li",{parentName:"ul"},"\u591a\u4e2a\u96c6\u7fa4 Bucket \u5206\u6d41"),(0,r.kt)("li",{parentName:"ul"},"\u4f9d\u8d56",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"etcd"),(0,r.kt)("li",{parentName:"ul"},"CoreDNS - \u53ef\u9009")))),(0,r.kt)("h1",{id:"faq"},"FAQ"),(0,r.kt)("h2",{id:"unsupported-backend-format"},"Unsupported backend format"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/minio/minio/issues/4104"},"#4104")),(0,r.kt)("li",{parentName:"ul"},"\u5220\u9664\u65e7\u7684\u542f\u52a8\u6587\u4ef6")),(0,r.kt)("h2",{id:"lets-encrypt-certbot"},"Let's Encrypt Certbot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install certbot\n")),(0,r.kt)("h2",{id:"unable-to-initialize-config-system-invalid-credentials"},"Unable to initialize config system: Invalid credentials"),(0,r.kt)("p",null,"key/secret \u9519\u8bef"),(0,r.kt)("h2",{id:"this-admin-api-is-not-supported-by-server-in-mode-server-fs"},"This 'admin' API is not supported by server in 'mode-server-fs'."))}u.isMDXComponent=!0}}]);