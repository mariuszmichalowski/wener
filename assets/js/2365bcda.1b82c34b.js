"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[79792],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(t),m=r,d=h["".concat(i,".").concat(m)]||h[m]||u[m]||l;return t?a.createElement(d,o(o({ref:n},p),{},{components:t})):a.createElement(d,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=h;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},98014:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var a=t(22122),r=t(19756),l=(t(67294),t(3905)),o=["components"],s={title:"Bash"},i=void 0,c={unversionedId:"manual/bash",id:"manual/bash",isDocsHomePage:!1,title:"Bash",description:"`bash",source:"@site/notes/manual/bash.md",sourceDirName:"manual",slug:"/manual/bash",permalink:"/notes/manual/bash",editUrl:"https://github.com/wenerme/wener/edit/master/notes/manual/bash.md",version:"current",frontMatter:{title:"Bash"}},p=[{value:".inputrc",id:"inputrc",children:[]},{value:"FAQ",id:"faq",children:[{value:"Find max file",id:"find-max-file",children:[]},{value:"Prefix/Suffix",id:"prefixsuffix",children:[]}]},{value:"\u66ff\u6362",id:"\u66ff\u6362",children:[]},{value:"Parallels",id:"parallels",children:[]},{value:"Base N",id:"base-n",children:[]},{value:"SSH",id:"ssh",children:[]},{value:"xargs",id:"xargs",children:[]},{value:"case",id:"case",children:[]},{value:"\u4f7f\u7528\u53d8\u91cf\u540d\u5b57\u8bbf\u95ee\u53d8\u91cf",id:"\u4f7f\u7528\u53d8\u91cf\u540d\u5b57\u8bbf\u95ee\u53d8\u91cf",children:[]}],u={toc:p};function h(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# empty shell\nenv -i /usr/local/bin/bash\n\n# empty env\nenv -i HOME=\"$HOME\" /usr/local/bin/bash -c 'env'\n\n# login shell\ntime env -i HOME=\"$HOME\" LOG4BASH_LOG_LEVE=DEBUG /usr/local/bin/bash -l -c 'env'\n")),(0,l.kt)("p",null,"set -o allexport"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# glob \u5927\u5c0f\u5199\u4e0d\u654f\u611f\nshopt -s nocaseglob\n\n# \u8ffd\u52a0\u5230\u5386\u53f2\u800c\u4e0d\u662f\u91cd\u5199\nshopt -s histappend\n\n# \u4f7f\u7528 cd \u65f6\u81ea\u52a8\u6821\u6b63\u4e66\u5199\nshopt -s cdspell\n\n# Bash 4\n# ==========\n# `**/qux` will enter `./foo/bar/baz/qux`\nshopt -s autocd\n# Recursive globbing, e.g. `echo **/*.txt`\nshopt -s globstar\n\n")),(0,l.kt)("h2",{id:"inputrc"},".inputrc"),(0,l.kt)("p",null,"C-x C-r is bound to re-read-init-file."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/bash/manual/html_node/Readline-Init-File.html"},"https://www.gnu.org/software/bash/manual/html_node/Readline-Init-File.html")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/bash/manual/bashref.html#Miscellaneous-Commands"},"https://www.gnu.org/software/bash/manual/bashref.html#Miscellaneous-Commands")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# Make Tab autocomplete regardless of filename case\nset completion-ignore-case on\n\n# List all matches in case multiple possible completions are possible\nset show-all-if-ambiguous on\n\n# Immediately add a trailing slash when autocompleting symlinks to directories\nset mark-symlinked-directories on\n\n# Use the text that has already been typed as the prefix for searching through\n# commands (i.e. more intelligent Up/Down behavior)\n"\\eOA": history-search-backward\n"\\e[A": history-search-backward\n"\\eOB": history-search-forward\n"\\e[B": history-search-forward\n\n')),(0,l.kt)("h2",{id:"faq"},"FAQ"),(0,l.kt)("h3",{id:"find-max-file"},"Find max file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"find . -printf '%s %p\\n' | sort -nr | head\nfind . -maxdepth 1 -printf '%s %p\\n' | sort -nr | head\ndu -a . | sort -nr | head\n")),(0,l.kt)("h3",{id:"prefixsuffix"},"Prefix/Suffix"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# \u53bb\u9664\u524d\u7f00\u548c\u540e\u7f00\nx="/foo/fizzbuzz.bar"\ny=${x%.bar}\necho ${y##*/}\n#> fizzbuzz\n\n# \u53bb\u9664\u540e\u7f00\nx="/foo/fizzbuzz.bar.quux"\ny=${x%.*}\necho $y\n#> /foo/fizzbuzz.bar\ny=${x%%.*}\necho $y\n#> /foo/fizzbuzz\n\n# \u53bb\u9664\u524d\u7f00\nx=/foo/bar/bim/baz/file.gif\ny=${path##*/}\necho $y\n#> file.gif\n')),(0,l.kt)("h2",{id:"\u66ff\u6362"},"\u66ff\u6362"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"a=abc/da\n# zbc/da\necho ${a/a/z}\n# // \u662f\u6240\u6709\n# zbc/dz\necho ${a//a/z}\n# \u8f6c\u610f\n# abczda\necho ${a//\\//z}\n")),(0,l.kt)("h2",{id:"parallels"},"Parallels"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# do it once\nseq 1 | parallel -n0 "curl -H \'Content-Type: application/json\' http://httpbin.org/post -X POST -d \'{\\"url\\":\\"http://google.com/\\"}\'"\n\n# do it twice\nseq 2 | parallel -n0 "curl -H \'Content-Type: application/json\' http://httpbin.org/post -X POST -d \'{\\"url\\":\\"http://google.com/\\"}\'"\n\n# do it 4 times, but at 2 a time\nseq 4 | parallel -n0 -j2 "curl -H \'Content-Type: application/json\' http://httpbin.org/post -X POST -d \'{\\"url\\":\\"http://google.com/\\"}\'"\n\n# you can also put all your commands into a file\necho "ls\\nls" > somefile\ncat somefile | parallel\n\n# finally, just straight command line parameters\nparallel echo ::: a b c\n\n# by default, it runs as many jobs in parallel as there are cores in your computer\n\n# if you try and set more jobs than there are cores, they will be concurrent, but\n# they will only ever be parallel up to your core count\n\n# for httpie use the --ignore-stdin flag, or else it gets mixed up\nseq 1 | parallel -n0 "http --ignore-stdin POST http://httpbin.org/post url=http://google.com/"\n')),(0,l.kt)("h2",{id:"base-n"},"Base N"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'# Encode base62\nBASE62=($(echo {0..9} {a..z} {A..Z}))\nfor i in $(bc <<< "obase=62; 9207903953"); do\n    echo -n ${BASE62[$(( 10#$i ))]}\ndone && echo\n# Decode base62\nbase62_decode() { echo $((62#$1)) }\n')),(0,l.kt)("h2",{id:"ssh"},"SSH"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# download: remote -> local\n# local_file \u53ef\u4ee5\u4e3a\u76ee\u5f55\u7528 -r \u9012\u5f52\nscp user@remote_host:remote_file local_file\n# upload: local -> remote\nscp local_file user@remote_host:remote_file\n\n# To Forward sshtalk.in:8080 -> Cort.local:4567, you can do\nlocal="Cort.local:4567" # or "localhost:4567"\nremot="*:8080" # "*" for all interfaces (default is loopback)\n\nssh -R ${remote}:${local} sshtalk.in\n\n# To forward localhost:1234 -> private-host:443, through public-host you can do\nlocal="localhost:1234" # or just "1234" default is localhost\nremot="private-host:443" # "*" for all interfaces (default is loopback)\n\nssh -L ${local}:${remote} public-host\n\n# \u987b\u5728\u5728Server\u7aef\u5141\u8bb8\u8f6c\u53d1\n# \u5728 /etc/ssh/sshd_config \u4e2d\u6dfb\u52a0\n# GatewayPorts yes\n# \u7136\u540e\u91cd\u542f\nsudo service sshd restart\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# scp to \u591a\u53f0\nfor dest in $(<destfile.txt); do\n  scp ourfile.txt ${dest}:remote/path/\ndone\n\n# \u5728\u4e0d\u7528 scp \u7684\u60c5\u51b5\u4e0b \u62f7\u8d1d\u5230\u591a\u53f0\ncat file.txt | tee >(ssh user@ip1.com "cat > file.txt") \\\n                   >(ssh user@ip2.com "cat > file.txt")\n\ntar cz file1 file2 file3 | tee >(ssh user@ip1.com "tar xz") \\\n                               >( ... )\n')),(0,l.kt)("h2",{id:"xargs"},"xargs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.thegeekstuff.com/2013/12/xargs-examples/"},"xargs example"))),(0,l.kt)("h2",{id:"case"},"case"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'case $space in\n[1-6]*)\n  Message="All is quiet."\n  ;;\n[7-8]*)\n  Message="Start thinking about cleaning out some stuff.  There\'s a partition that is $space % full."\n  ;;\n9[1-8])\n  Message="Better hurry with that new disk...  One partition is $space % full."\n  ;;\n99)\n  Message="I\'m drowning here!  There\'s a partition at $space %!"\n  ;;\n*)\n  Message="I seem to be running with an nonexistent amount of disk space..."\n  ;;\nesac\n')),(0,l.kt)("h2",{id:"\u4f7f\u7528\u53d8\u91cf\u540d\u5b57\u8bbf\u95ee\u53d8\u91cf"},"\u4f7f\u7528\u53d8\u91cf\u540d\u5b57\u8bbf\u95ee\u53d8\u91cf"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.gnu.org/software/bash/manual/html_node/Shell-Parameter-Expansion.html"},"Shell Parameter Expansion"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"a=PATH\necho ${!a}\n")))}h.isMDXComponent=!0}}]);