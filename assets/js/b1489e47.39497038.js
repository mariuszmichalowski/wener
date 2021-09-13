"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[25222],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},577:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],i={title:"rsync"},c=void 0,l={unversionedId:"ops/storage/tool/rsync",id:"ops/storage/tool/rsync",isDocsHomePage:!1,title:"rsync",description:"Tips",source:"@site/notes/ops/storage/tool/rsync.md",sourceDirName:"ops/storage/tool",slug:"/ops/storage/tool/rsync",permalink:"/notes/ops/storage/tool/rsync",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/storage/tool/rsync.md",tags:[],version:"current",frontMatter:{title:"rsync"},sidebar:"docs",previous:{title:"rclone",permalink:"/notes/ops/storage/tool/rclone"},next:{title:"\u8fdc\u7a0b\u684c\u9762",permalink:"/notes/ops/service/remote-desktop"}},p=[{value:"Tips",id:"tips",children:[]},{value:"\u5e76\u884c",id:"\u5e76\u884c",children:[]}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"tips"},"Tips"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.cheatography.com/richardjh/cheat-sheets/rsync/"},"https://www.cheatography.com/richardjh/cheat-sheets/rsync/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wiki.archlinux.org/index.php/rsync"},"https://wiki.archlinux.org/index.php/rsync")),(0,o.kt)("li",{parentName:"ul"},"unison",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.cis.upenn.edu/~bcpierce/unison/"},"https://www.cis.upenn.edu/~bcpierce/unison/")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--info=progress2")," \u663e\u793a\u901f\u5ea6")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# \u4f7f\u7528 SSH \u540c\u6b65\nrsync -avz -e ssh remoteuser@remotehost:/remote/dir /this/dir/\n\n# \u8fdc\u7a0b\u4f7f\u7528 sudo\nrsync --rsync-path="sudo rsync" -avz dnsmasq/ admin@10.1.1.1:/etc/dnsmasq/\n\n# \u5907\u4efd\u6574\u4e2a\u7cfb\u7edf\nrsync -aAXv --exclude={"/dev/*","/proc/*","/sys/*","/tmp/*","/run/*","/mnt/*","/media/*","/lost+found"} / /path/to/backup/folder\n# \u4f7f\u7528 --info=progress2 \u663e\u793a\u603b\u4f53\u7684\u8fdb\u5ea6, \u800c\u4e0d\u662f\u6bcf\u4e2a\u6587\u4ef6\nrsync -aAX --info=progress2 --exclude={"/dev/*","/proc/*","/sys/*","/tmp/*","/run/*","/mnt/*","/media/*","/lost+found"} / /path/to/backup/folder\n\n# \u4e0d\u540c\u6b65\u6743\u9650\u7528\u6237\u5206\u7ec4\u4fe1\u606f\nrsync -avz --no-perms --no-owner --no-group mnt/wener abuild/\n\n# \u914d\u5408 fswatch \u4f7f\u7528\n# \u62f7\u8d1d\nfswatch ./ | xargs -I{} cp {} ~/Dropbox/backup/latest/\n# rsync\nalias run_rsync=\'rsync -azP --exclude ".*/" --exclude ".*" --exclude "tmp/" ~/Documents/repos/my_repository username@host:~\'\nrun_rsync; fswatch -o . | while read f; do run_rsync; done\n')),(0,o.kt)("h2",{id:"\u5e76\u884c"},"\u5e76\u884c"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wiki.ncsa.illinois.edu/display/~wglick/2013/11/01/Parallel+Rsync"},"https://wiki.ncsa.illinois.edu/display/~wglick/2013/11/01/Parallel+Rsync")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://unix.stackexchange.com/questions/189878"},"https://unix.stackexchange.com/questions/189878"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rsync -avzm --stats --safe-links --ignore-existing --dry-run \\\n    --human-readable /data/projects REMOTE-HOST:/data/ > /tmp/transfer.log\n\n# --relative \u8981\u6c42\u5728 /data/projects \u6267\u884c\ncat /tmp/transfer.log | \\\n    parallel --will-cite -j 5 rsync -avzm --relative \\\n      --stats --safe-links --ignore-existing \\\n      --human-readable {} REMOTE-HOST:/data/ > result.log\n")))}m.isMDXComponent=!0}}]);