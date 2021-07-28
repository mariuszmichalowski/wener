(window.webpackJsonp=window.webpackJsonp||[]).push([[775],{1172:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,m=u["".concat(s,".").concat(d)]||u[d]||b[d]||o;return t?a.a.createElement(m,c(c({ref:n},l),{},{components:t})):a.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<o;l++)s[l]=t[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},848:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(8),o=(t(0),t(1172)),s={id:"rsync",title:"Rsync"},c={unversionedId:"ops/storage/tool/rsync",id:"ops/storage/tool/rsync",isDocsHomePage:!1,title:"Rsync",description:"rsync",source:"@site/notes/ops/storage/tool/rsync.md",slug:"/ops/storage/tool/rsync",permalink:"/notes/ops/storage/tool/rsync",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/storage/tool/rsync.md",version:"current",sidebar:"docs",previous:{title:"Compress",permalink:"/notes/ops/storage/tool/compress"},next:{title:"Fiber Channel",permalink:"/notes/ops/storage/block/fc"}},i=[{value:"Tips",id:"tips",children:[]},{value:"\u5e76\u884c",id:"\u5e76\u884c",children:[]}],l={toc:i};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"rsync"},"rsync"),Object(o.b)("h2",{id:"tips"},"Tips"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.cheatography.com/richardjh/cheat-sheets/rsync/"},"https://www.cheatography.com/richardjh/cheat-sheets/rsync/")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://wiki.archlinux.org/index.php/rsync"},"https://wiki.archlinux.org/index.php/rsync")),Object(o.b)("li",{parentName:"ul"},"unison",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.cis.upenn.edu/~bcpierce/unison/"},"https://www.cis.upenn.edu/~bcpierce/unison/")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"--info=progress2")," \u663e\u793a\u901f\u5ea6")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'# \u4f7f\u7528 SSH \u540c\u6b65\nrsync -avz -e ssh remoteuser@remotehost:/remote/dir /this/dir/\n\n# \u8fdc\u7a0b\u4f7f\u7528 sudo\nrsync --rsync-path="sudo rsync" -avz dnsmasq/ admin@10.1.1.1:/etc/dnsmasq/\n\n# \u5907\u4efd\u6574\u4e2a\u7cfb\u7edf\nrsync -aAXv --exclude={"/dev/*","/proc/*","/sys/*","/tmp/*","/run/*","/mnt/*","/media/*","/lost+found"} / /path/to/backup/folder\n# \u4f7f\u7528 --info=progress2 \u663e\u793a\u603b\u4f53\u7684\u8fdb\u5ea6, \u800c\u4e0d\u662f\u6bcf\u4e2a\u6587\u4ef6\nrsync -aAX --info=progress2 --exclude={"/dev/*","/proc/*","/sys/*","/tmp/*","/run/*","/mnt/*","/media/*","/lost+found"} / /path/to/backup/folder\n\n# \u4e0d\u540c\u6b65\u6743\u9650\u7528\u6237\u5206\u7ec4\u4fe1\u606f\nrsync -avz --no-perms --no-owner --no-group mnt/wener abuild/\n\n# \u914d\u5408 fswatch \u4f7f\u7528\n# \u62f7\u8d1d\nfswatch ./ | xargs -I{} cp {} ~/Dropbox/backup/latest/\n# rsync\nalias run_rsync=\'rsync -azP --exclude ".*/" --exclude ".*" --exclude "tmp/" ~/Documents/repos/my_repository username@host:~\'\nrun_rsync; fswatch -o . | while read f; do run_rsync; done\n')),Object(o.b)("h2",{id:"\u5e76\u884c"},"\u5e76\u884c"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://wiki.ncsa.illinois.edu/display/~wglick/2013/11/01/Parallel+Rsync"},"https://wiki.ncsa.illinois.edu/display/~wglick/2013/11/01/Parallel+Rsync")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://unix.stackexchange.com/questions/189878"},"https://unix.stackexchange.com/questions/189878"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"rsync -avzm --stats --safe-links --ignore-existing --dry-run \\\n    --human-readable /data/projects REMOTE-HOST:/data/ > /tmp/transfer.log\n\n# --relative \u8981\u6c42\u5728 /data/projects \u6267\u884c\ncat /tmp/transfer.log | \\\n    parallel --will-cite -j 5 rsync -avzm --relative \\\n      --stats --safe-links --ignore-existing \\\n      --human-readable {} REMOTE-HOST:/data/ > result.log\n")))}p.isMDXComponent=!0}}]);