"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[53619],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,d=u["".concat(s,".").concat(m)]||u[m]||g[m]||i;return a?n.createElement(d,l(l({ref:t},p),{},{components:a})):n.createElement(d,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},74209:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],o={title:"Git FAQ",tags:["FAQ"]},s=void 0,c={unversionedId:"service/forge/git/git-faq",id:"service/forge/git/git-faq",title:"Git FAQ",description:"\u4fee\u6b63\u7528\u6237\u540d",source:"@site/notes/service/forge/git/git-faq.md",sourceDirName:"service/forge/git",slug:"/service/forge/git/git-faq",permalink:"/notes/service/forge/git/git-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/forge/git/git-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",frontMatter:{title:"Git FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"Git Branch FAQ",permalink:"/notes/service/forge/git/git-branch-faq"},next:{title:"Git Hook",permalink:"/notes/service/forge/git/git-hook"}},p=[{value:"\u4fee\u6b63\u7528\u6237\u540d",id:"\u4fee\u6b63\u7528\u6237\u540d",children:[],level:2},{value:"\u4fee\u6539\u5f53\u524d\u4ed3\u5e93\u5173\u8054\u7684\u7528\u6237",id:"\u4fee\u6539\u5f53\u524d\u4ed3\u5e93\u5173\u8054\u7684\u7528\u6237",children:[],level:2},{value:"\u5b50\u6a21\u5757\u521d\u59cb\u5316",id:"\u5b50\u6a21\u5757\u521d\u59cb\u5316",children:[],level:2},{value:"\u7edf\u8ba1",id:"\u7edf\u8ba1",children:[],level:2},{value:"\u79fb\u9664\u5386\u53f2\u6587\u4ef6\u548c\u654f\u611f\u6570\u636e",id:"\u79fb\u9664\u5386\u53f2\u6587\u4ef6\u548c\u654f\u611f\u6570\u636e",children:[],level:2},{value:"\u6587\u4ef6\u592a\u5927",id:"\u6587\u4ef6\u592a\u5927",children:[],level:2},{value:"\u81ea\u5b9a\u4e49\u914d\u7f6e",id:"\u81ea\u5b9a\u4e49\u914d\u7f6e",children:[],level:2},{value:"\u5c06\u53e6\u5916\u4e00\u4e2a\u4ed3\u5e93\u5408\u5e76\u4e3a\u5f53\u524d\u4ed3\u5e93\u7684\u4e00\u4e2a\u5b50\u76ee\u5f55",id:"\u5c06\u53e6\u5916\u4e00\u4e2a\u4ed3\u5e93\u5408\u5e76\u4e3a\u5f53\u524d\u4ed3\u5e93\u7684\u4e00\u4e2a\u5b50\u76ee\u5f55",children:[],level:2},{value:"Undo a commit and redo",id:"undo-a-commit-and-redo",children:[],level:2},{value:"\u663e\u793a \u4e0d\u540c",id:"\u663e\u793a-\u4e0d\u540c",children:[],level:2},{value:"\u79fb\u9664 git \u5386\u53f2",id:"\u79fb\u9664-git-\u5386\u53f2",children:[],level:2},{value:"git push tags",id:"git-push-tags",children:[],level:2},{value:"git clone tag",id:"git-clone-tag",children:[],level:2},{value:"\u751f\u6210 patch",id:"\u751f\u6210-patch",children:[],level:2},{value:"\u8ba4\u8bc1\u7f13\u5b58",id:"\u8ba4\u8bc1\u7f13\u5b58",children:[],level:2},{value:"\u5f3a\u5236 pull",id:"\u5f3a\u5236-pull",children:[],level:2},{value:"\u90e8\u5206\u514b\u9686\u8f6c\u5b8c\u6574\u514b\u9686",id:"\u90e8\u5206\u514b\u9686\u8f6c\u5b8c\u6574\u514b\u9686",children:[],level:2},{value:"signoff",id:"signoff",children:[],level:2},{value:"\u4e3a\u4ec0\u4e48\u9700\u8981 signoff",id:"\u4e3a\u4ec0\u4e48\u9700\u8981-signoff",children:[],level:2},{value:"\u8fc1\u79fb\u5b50\u76ee\u5f55\u4e3a\u4ed3\u5e93",id:"\u8fc1\u79fb\u5b50\u76ee\u5f55\u4e3a\u4ed3\u5e93",children:[],level:2},{value:"\u8fc1\u79fb\u5206\u652f\u4e3a\u4ed3\u5e93",id:"\u8fc1\u79fb\u5206\u652f\u4e3a\u4ed3\u5e93",children:[],level:2},{value:"\u53d6\u7b2c\u4e00\u4e2a commit",id:"\u53d6\u7b2c\u4e00\u4e2a-commit",children:[],level:2},{value:"\u641c\u7d22\u6587\u4ef6",id:"\u641c\u7d22\u6587\u4ef6",children:[],level:2},{value:"skip ci",id:"skip-ci",children:[],level:2},{value:"git ci info",id:"git-ci-info",children:[],level:2},{value:"annotated tag vs. unannotated tag",id:"annotated-tag-vs-unannotated-tag",children:[],level:2}],g={toc:p};function u(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u4fee\u6b63\u7528\u6237\u540d"},"\u4fee\u6b63\u7528\u6237\u540d"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'git commit --amend --author="Author Name <email@address.com>"\n')),(0,i.kt)("h2",{id:"\u4fee\u6539\u5f53\u524d\u4ed3\u5e93\u5173\u8054\u7684\u7528\u6237"},"\u4fee\u6539\u5f53\u524d\u4ed3\u5e93\u5173\u8054\u7684\u7528\u6237"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'git config --local user.name "Author Name"\ngit config --local user.email "email@address.com"\n')),(0,i.kt)("h2",{id:"\u5b50\u6a21\u5757\u521d\u59cb\u5316"},"\u5b50\u6a21\u5757\u521d\u59cb\u5316"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git pull --recurse-submodules\n# \u6216\u8005\u9012\u5f52\u62c9\u53d6\ngit clone --recursive <URL>\n")),(0,i.kt)("h2",{id:"\u7edf\u8ba1"},"\u7edf\u8ba1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/arzzen/git-quick-stats"},"https://github.com/arzzen/git-quick-stats"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u7edf\u8ba1\u6240\u6709\u5206\u652f\u7684\u7528\u6237\u63d0\u4ea4\u6570\ngit shortlog -s -n --all --no-merges\n\n# \u7edf\u8ba1 LOC\ngit ls-files | xargs -n1 git blame --line-porcelain | sed -n 's/^author //p' | sort -f | uniq -ic | sort -nr\n")),(0,i.kt)("h2",{id:"\u79fb\u9664\u5386\u53f2\u6587\u4ef6\u548c\u654f\u611f\u6570\u636e"},"\u79fb\u9664\u5386\u53f2\u6587\u4ef6\u548c\u654f\u611f\u6570\u636e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://help.github.com/articles/removing-sensitive-data-from-a-repository/"},"Removing sensitive data from a repository")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://rtyley.github.io/bfg-repo-cleaner/"},"https://rtyley.github.io/bfg-repo-cleaner/"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# BFG\n# \u6bd4 git-filter-branch \u5feb 10 - 720x\nbrew install bfg\n\n# \u5728\u5220\u9664\u524d\u5148\u505a\u4e00\u6b21\u628a\u6587\u4ef6\u5220\u9664\u7684\u63d0\u4ea4\ngit rm id_{dsa,rsa}\ngit commit -m 'remove files'\n# \u6e05\u7406\u5386\u53f2\nbfg --delete-files id_{dsa,rsa}  my-repo.git\nbfg --strip-blobs-bigger-than 50M  my-repo.git\nbfg --delete-folders dirname  my-repo.git\n\n# \u6e05\u7406\ngit reflog expire --expire=now --all && git gc --prune=now --aggressive\n")),(0,i.kt)("h2",{id:"\u6587\u4ef6\u592a\u5927"},"\u6587\u4ef6\u592a\u5927"),(0,i.kt)("p",null,"\u5982\u679c\u670d\u52a1\u5668\u9650\u5236\u4e86\u6587\u4ef6\u5927\u5c0f, \u5219\u5f53\u63a8\u9001\u4e00\u4e2a\u8f83\u5927\u7684\u4ed3\u5e93\u65f6\u4f1a\u5931\u8d25, \u5982\u679c\u65e0\u6cd5\u4fee\u6539\u670d\u52a1\u5668\u53c2\u6570, \u5219\u53ef\u4ee5\u8003\u8651\u5206\u6279\u63a8\u9001"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# \u83b7\u53d6\u603b\u5f97\u6709\u591a\u5c11\u4e2a\u63d0\u4ea4\ngut log --pretty=format:"%h" | wc -l\n# \u83b7\u53d6\u7b2c\u4e00\u5343\u4e2a\u63d0\u4ea4\ngit log --reverse --pretty=format:"%h" | sed \'1000!d\'\n# \u63a8\u9001\u524d\u4e00\u5343\u4e2a\u63d0\u4ea4\ngit push origin $(git log --reverse --pretty=format:"%h" | sed \'1000!d\'):master\n# \u5982\u679c\u51fa\u73b0\u8be5\u9519\u8bef\n# The destination refspec neither matches an existing ref on the remote nor\n# begins with refs/, and we are unable to guess a prefix based on the source ref.\n# \u5219\u4f7f\u7528\ngit push origin $(git log --reverse --pretty=format:"%h" | sed \'1000!d\'):refs/heads/master\n')),(0,i.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u914d\u7f6e"},"\u81ea\u5b9a\u4e49\u914d\u7f6e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u5b9a\u4e49 ",(0,i.kt)("a",{parentName:"li",href:"https://git-scm.com/docs/git-config"},"git-config")),(0,i.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u53c2\u8003 ",(0,i.kt)("a",{parentName:"li",href:"https://gist.github.com/pksunkara/988716"},"pksunkara/.gitconfig"))),(0,i.kt)("p",null,"Git \u4e0d\u5141\u8bb8\u76f4\u63a5\u5f15\u7528\u4ed3\u5e93\u4e2d\u7684\u6587\u4ef6\u4f5c\u4e3a\u914d\u7f6e, \u4f46\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u672c\u5730\u914d\u7f6e\u6765 include \u4ed3\u5e93\u4e2d\u7684\u914d\u7f6e\u6587\u4ef6."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u521b\u5efa\u4ed3\u5e93\u4e2d\u5171\u4eab\u7684\u914d\u7f6e\ntouch .gitconfig\n# \u4fee\u6539 .git/config \u6765\u5f15\u5165\u4ed3\u5e93\u4e2d\u7684 .gitconfig, \u8fd9\u4e2a\u547d\u4ee4\u4f1a\u6dfb\u52a0\u4e00\u4e0b\u5185\u5bb9\u5230\u914d\u7f6e\u6587\u4ef6\u4e2d\n# [include]\n#  path = ../.gitconfig\ngit config --local include.path ../.gitconfig\n")),(0,i.kt)("h2",{id:"\u5c06\u53e6\u5916\u4e00\u4e2a\u4ed3\u5e93\u5408\u5e76\u4e3a\u5f53\u524d\u4ed3\u5e93\u7684\u4e00\u4e2a\u5b50\u76ee\u5f55"},"\u5c06\u53e6\u5916\u4e00\u4e2a\u4ed3\u5e93\u5408\u5e76\u4e3a\u5f53\u524d\u4ed3\u5e93\u7684\u4e00\u4e2a\u5b50\u76ee\u5f55"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git subtree add -P <prefix> <repo> <rev>\n")),(0,i.kt)("h2",{id:"undo-a-commit-and-redo"},"Undo a commit and redo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git commit ...\ngit reset --soft 'HEAD^'\nedit\ngit add ....\ngit commit -c ORIG_HEAD\n")),(0,i.kt)("p",null,"from ",(0,i.kt)("a",{parentName:"p",href:"http://stackoverflow.com/questions/927358"},"here")),(0,i.kt)("h2",{id:"\u663e\u793a-\u4e0d\u540c"},"\u663e\u793a \u4e0d\u540c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git diff \\\n    --cached \\\n    --staged \\\n    HEAD # \u5c1a\u672a\u6682\u5b58\u7684,\u5f53\u524d\u6b63\u5728\u7f16\u8f91\u7684\n")),(0,i.kt)("p",null,"from ",(0,i.kt)("a",{parentName:"p",href:"http://stackoverflow.com/questions/1587846"},"here")),(0,i.kt)("h2",{id:"\u79fb\u9664-git-\u5386\u53f2"},"\u79fb\u9664 git \u5386\u53f2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# $sha \u4e3a\u9700\u8981\u79fb\u9664\u7684\u5386\u53f2\u4f4d\u7f6e\ngit checkout --orphan temp $sha\ngit commit -m "Truncated history"\ngit rebase --onto temp $sha master\ngit branch -D temp\n')),(0,i.kt)("h2",{id:"git-push-tags"},"git push tags"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git push --tags\n# \u53ea push \u4e00\u4e2a\ngit push origin <tag_name>\n")),(0,i.kt)("h2",{id:"git-clone-tag"},"git clone tag"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --branch <tag_name> <repo_url>\n")),(0,i.kt)("h2",{id:"\u751f\u6210-patch"},"\u751f\u6210 patch"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# git diff --cached\ngit diff > my.patch\n")),(0,i.kt)("h2",{id:"\u8ba4\u8bc1\u7f13\u5b58"},"\u8ba4\u8bc1\u7f13\u5b58"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/5343068"},"https://stackoverflow.com/questions/5343068"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# \u9ed8\u8ba4 15m\ngit config --global credential.helper "cache --timeout=3600"\n\n# macOS \u53ef\u4ee5\u4f7f\u7528 keychain\n# git config --global credential.helper osxkeychain\n\n# \u6216\u8005 ~/.netrc\n# machine <hostname> login <username> password <password>\nchmod 600 ~/.netrc\n')),(0,i.kt)("h2",{id:"\u5f3a\u5236-pull"},"\u5f3a\u5236 pull"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git fetch --all\ngit reset --hard origin/master\n")),(0,i.kt)("h2",{id:"\u90e8\u5206\u514b\u9686\u8f6c\u5b8c\u6574\u514b\u9686"},"\u90e8\u5206\u514b\u9686\u8f6c\u5b8c\u6574\u514b\u9686"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git fetch --unshallow\n")),(0,i.kt)("h2",{id:"signoff"},"signoff"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git commit --amend --no-edit --signoff\ngit push --force-with-lease origin $(git rev-parse --abbrev-ref HEAD)\n")),(0,i.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u9700\u8981-signoff"},"\u4e3a\u4ec0\u4e48\u9700\u8981 signoff"),(0,i.kt)("p",null,"signoff \u662f\u5728 commit \u6d88\u606f\u6700\u540e\u6dfb\u52a0\u4e00\u884c\u8868\u793a\u63d0\u4ea4\u4f5c\u8005\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Signed-off-by: wener <wener@wener.me>\n")),(0,i.kt)("p",null,"\u7528\u4e8e\u8ddf\u8e2a\u8c01\u7684\u63d0\u4ea4\uff0c\u5982\u679c review \u65f6\u505a\u4e86\u4fee\u6539\uff0c\u4e5f\u53ef\u4ee5\u7ee7\u7eed\u66b4\u529b signoff \u4ee5\u8ddf\u8e2a\u539f\u59cb\u63d0\u4ea4\u4eba\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6700\u521d\u662f\u56e0\u4e3a\u907f\u514d\u6cd5\u5f8b\u7ea0\u7eb7\u5f15\u5165",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developercertificate.org/"},"developer certificate"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u660e\u786e sign-off \u8eab\u4efd"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/a/1962112/1870054"},"What is the Sign Off feature in Git for?"))))),(0,i.kt)("h2",{id:"\u8fc1\u79fb\u5b50\u76ee\u5f55\u4e3a\u4ed3\u5e93"},"\u8fc1\u79fb\u5b50\u76ee\u5f55\u4e3a\u4ed3\u5e93"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/359424"},"Detach (move) subdirectory into separate Git repository"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# git filter-branch --prune-empty --subdirectory-filter FOLDER-NAME  BRANCH-NAME\n\ngit subtree split -P <name-of-folder> -b <name-of-new-branch>\n")),(0,i.kt)("h2",{id:"\u8fc1\u79fb\u5206\u652f\u4e3a\u4ed3\u5e93"},"\u8fc1\u79fb\u5206\u652f\u4e3a\u4ed3\u5e93"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'mkdir /path/to/new/repo && cd "$@"\ngit config receive.denyCurrentBranch warn\ncd -\ngit push /path/to/new/repo:optional-new-branch-name branch-name\n')),(0,i.kt)("p",null,"from ",(0,i.kt)("a",{parentName:"p",href:"http://stackoverflow.com/a/2227571/1870054"},"Here")),(0,i.kt)("h2",{id:"\u53d6\u7b2c\u4e00\u4e2a-commit"},"\u53d6\u7b2c\u4e00\u4e2a commit"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git rev-list --max-parents=0 HEAD\n")),(0,i.kt)("h2",{id:"\u641c\u7d22\u6587\u4ef6"},"\u641c\u7d22\u6587\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git log --all -- '*.wmv'\n# \u53ea\u663e\u793a hash\ngit rev-list --all -- '*.wmv'\n")),(0,i.kt)("h2",{id:"skip-ci"},"skip ci"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e00\u822c\u90fd\u652f\u6301 message \u5305\u542b ",(0,i.kt)("inlineCode",{parentName:"li"},"[ci skip]"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"[skip ci]")),(0,i.kt)("li",{parentName:"ul"},"git 2.10 \u652f\u6301\u9009\u9879 git push -o ci.skip"),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"gitlab ",(0,i.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/user/project/push_options.html#push-options-for-gitlab-cicd"},"Push Options")),(0,i.kt)("li",{parentName:"ul"},"jetbrain \u6682\u4e0d\u652f\u6301 git option ",(0,i.kt)("a",{parentName:"li",href:"https://youtrack.jetbrains.com/issue/IDEA-202210"},"IDEA-202210")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://git-scm.com/docs/git-push#Documentation/git-push.txt--oltoptiongt"},"git push -o"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'git push -o ci.skip\ngit push -o ci.variable="MAX_RETRIES=10" -o ci.variable="MAX_TIME=600"\n')),(0,i.kt)("h2",{id:"git-ci-info"},"git ci info"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/ci/variables/predefined_variables.html"},"https://docs.gitlab.com/ee/ci/variables/predefined_variables.html"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6700\u8fd1 tag + rev\n# v1.0-COMMIT_COUNT-COMMIT_ID\ngit describe --tags\n# \u6700\u8fd1 tag\n# v1.0\ngit describe --tags --abbrev=0\n# most recent annotated tag\ngit describe --abbrev=0\n# \u5f53\u524d tag\ngit tag --points-at HEAD\n# 7 \u4f4d commitid\ngit rev-parse --short HEAD\n")),(0,i.kt)("h2",{id:"annotated-tag-vs-unannotated-tag"},"annotated tag vs. unannotated tag"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"git tag <tagname>"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u65e0 -a -s -m"),(0,i.kt)("li",{parentName:"ul"},"\u65e0\u6d88\u606f"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"git tag -a <tagname> -m '<message>'"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5305\u542b tagger/auther, date \u4fe1\u606f"),(0,i.kt)("li",{parentName:"ul"},"\u5305\u542b message")))))}u.isMDXComponent=!0}}]);