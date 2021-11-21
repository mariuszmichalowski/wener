"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[98186],{3905:function(e,n,a){a.d(n,{Zo:function(){return c},kt:function(){return m}});var t=a(67294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=t.createContext({}),s=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},c=function(e){var n=s(e.components);return t.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(a),m=i,k=d["".concat(o,".").concat(m)]||d[m]||u[m]||r;return a?t.createElement(k,l(l({ref:n},c),{},{components:a})):t.createElement(k,l({ref:n},c))}));function m(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=d;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var s=2;s<r;s++)l[s]=a[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},49250:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var t=a(87462),i=a(63366),r=(a(67294),a(3905)),l=["components"],p={title:"Alpine \u5305\u7ef4\u62a4"},o="Alpine Package",s={unversionedId:"os/alpine/alpine-pkgs",id:"os/alpine/alpine-pkgs",isDocsHomePage:!1,title:"Alpine \u5305\u7ef4\u62a4",description:"- Creating an Alpine package",source:"@site/notes/os/alpine/alpine-pkgs.md",sourceDirName:"os/alpine",slug:"/os/alpine/alpine-pkgs",permalink:"/notes/os/alpine/alpine-pkgs",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/alpine/alpine-pkgs.md",tags:[],version:"current",frontMatter:{title:"Alpine \u5305\u7ef4\u62a4"},sidebar:"docs",previous:{title:"Alpine \u8fd0\u7ef4\u7b14\u8bb0",permalink:"/notes/os/alpine/alpine-ops"},next:{title:"AlpineLinux Setup",permalink:"/notes/os/alpine/alpine-setup"}},c=[{value:"abuild",id:"abuild",children:[]},{value:"abuild.conf",id:"abuildconf",children:[]},{value:"\u751f\u6210\u548c\u4f7f\u7528 Patch",id:"\u751f\u6210\u548c\u4f7f\u7528-patch",children:[]},{value:"\u65b0\u589e",id:"\u65b0\u589e",children:[]},{value:"APKBUILD",id:"apkbuild",children:[]},{value:"init tips",id:"init-tips",children:[{value:"\u5f00\u53d1",id:"\u5f00\u53d1",children:[]}]},{value:"Invalid configuration <code>x86_64-alpine-linux-musl</code>: machine <code>x86_64-alpine-linux</code> not recognized",id:"invalid-configuration-x86_64-alpine-linux-musl-machine-x86_64-alpine-linux-not-recognized",children:[]},{value:"\u5347\u7ea7\u5305\u4e5f\u9700\u8981\u5347\u7ea7\u4f9d\u8d56",id:"\u5347\u7ea7\u5305\u4e5f\u9700\u8981\u5347\u7ea7\u4f9d\u8d56",children:[]}],u={toc:c};function d(e){var n=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"alpine-package"},"Alpine Package"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.alpinelinux.org/wiki/Creating_an_Alpine_package"},"Creating an Alpine package")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.alpinelinux.org/wiki/APKBUILD_Reference"},"https://wiki.alpinelinux.org/wiki/APKBUILD_Reference")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.alpinelinux.org/wiki/Apkindex_format"},"Apkindex format")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.alpinelinux.org/wiki/Abuild_and_Helpers"},"Abuild and Helpers")),(0,r.kt)("li",{parentName:"ul"},"\u955c\u50cf\u72b6\u6001 ",(0,r.kt)("a",{parentName:"li",href:"https://mirrors.alpinelinux.org/status.json"},"https://mirrors.alpinelinux.org/status.json")),(0,r.kt)("li",{parentName:"ul"},"\u955c\u50cf\u5217\u8868 ",(0,r.kt)("a",{parentName:"li",href:"http://nl.alpinelinux.org/alpine/MIRRORS.txt"},"http://nl.alpinelinux.org/alpine/MIRRORS.txt")),(0,r.kt)("li",{parentName:"ul"},"Golang",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://git.alpinelinux.org/cgit/aports/tree/community/godep/APKBUILD"},"https://git.alpinelinux.org/cgit/aports/tree/community/godep/APKBUILD")))),(0,r.kt)("li",{parentName:"ul"},"aports ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/alpinelinux/aports/blob/master/.github/CONTRIBUTING.md"},"How to contribute")),(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4ea4\u65b0\u7684\u5305",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"fork aports"),(0,r.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u65b0\u7684\u5305"),(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4ea4 PR"),(0,r.kt)("li",{parentName:"ul"},"\u65b0\u7684\u5305\u53ea\u80fd\u6dfb\u52a0\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"testing/"),", \u5728\u7ed3\u679c\u4e00\u6bb5\u65f6\u95f4\u6d4b\u8bd5\u540e\u624d\u4f1a\u79fb\u52a8\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"main/")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"li"},"community/")),(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4ea4\u7684\u4fe1\u606f\u683c\u5f0f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"${repo}/${pkgname}: new aport")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"${repo}/${pkgname}: move from testing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"${repo}/${pkgname}: upgrade to 3.1.0")))),(0,r.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u4f7f\u7528 Tab \u800c\u4e0d\u662f \u7a7a\u683c"))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/alpinelinux/abuild"},"alpinelinux/abuild")," - abuild \u6e90\u7801"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://build.alpinelinux.org/"},"build.alpinelinux.org"),"\n\u6784\u5efa\u72b6\u6001")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# \u51c6\u5907\nmkdir buiild && cd build\ngit clone --depth 50 https://gitlab.alpinelinux.org/alpine/aports\n\n# \u542f\u52a8\u73af\u5883\n# \u914d\u7f6e\u7f13\u5b58\ndocker run --rm -it \\\n    -v $PWD:/build \\\n    -v $PWD/distfiles:/var/cache/distfiles \\\n    -v $PWD/cache:/etc/apk/cache \\\n    --name builder wener/base:builder\n\n# \u66f4\u65b0\u4ed3\u5e93\nsudo apk update\n\n# git \u7528\u6237\u914d\u7f6e\ngit config --global user.name "Your Full Name"\ngit config --global user.email "your@email.address"\n# \u4e2a\u4eba\u4fe1\u606f\n[ -e ~/.abuild/abuild.conf ] || { mkdir -p ~/.abuild; echo "PACKAGER=\\"$(git config --global user.name) <$(git config --global user.email)>\\"" > ~/.abuild/abuild.conf; }\n# \u751f\u6210\u5bc6\u94a5\ngrep PACKAGER_PRIVKEY ~/.abuild/abuild.conf || abuild-keygen -ani\n\n# \u6253\u5305\n# community/grpc\ncd aports/community/grpc\n# \u7f16\u8bd1\u6784\u5efa\u5230 ~/packages\n# -K \u4fdd\u7559 src \u548c pkg - \u7528\u4e8e\u5f00\u53d1\u8c03\u8bd5\n# -r \u5b89\u88c5\u4f9d\u8d56\nabuild -Kr\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# /var/cache/distfiles\nabuild checksum\nabuild -r\n# \u4f4d\u4e8e $HOME/packages/main/x86_64\n\nabuild -Kf\n\n# \u9488\u5bf9\u5355\u4e2a\u5305\u64cd\u4f5c\nabuild package dev\n\n# \u79fb\u9664\u6240\u6709\u6784\u5efa\u65f6\u5b89\u88c5\u7684\u4f9d\u8d56\n# \u76f4\u63a5\u7f16\u8f91 /etc/apk/world \u7136\u540e apk fix \u4e5f\u53ef\u4ee5\napk del '.makedepends-*'\n\nrsync -avz --no-perms --no-owner --no-group --exclude='src,pkg' mnt/wener abuild/\n")),(0,r.kt)("h2",{id:"abuild"},"abuild"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# \u9ed8\u8ba4\u73af\u5883\nstartdir="${APKBUILD%/*}"\nsrcdir=${srcdir:-"$startdir/src"}\npkgbasedir=${pkgbasedir:-"$startdir/pkg"}\n\nrepo=${startdir%/*}\nrepo=${repo##*/}\n\nbuilddir=${builddir:-"$srcdir/$pkgname-$pkgver"}\n')),(0,r.kt)("h2",{id:"abuildconf"},"abuild.conf"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/alpinelinux/abuild/blob/master/abuild.conf"},"abuild.conf"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'export CFLAGS="-Os -fomit-frame-pointer"\nexport CXXFLAGS="$CFLAGS"\nexport CPPFLAGS="$CFLAGS"\nexport LDFLAGS="-Wl,--as-needed"\nexport GOFLAGS="-buildmode=pie"\n# Do note that these should work with at least GDC and LDC\nexport DFLAGS="-Os"\n\nexport JOBS=2\nexport MAKEFLAGS=-j$JOBS\n\n# remove line below to disable colors\nUSE_COLORS=1\n\n# uncomment line below to enable ccache support.\n#USE_CCACHE=1\n\nSRCDEST=/var/cache/distfiles\n\n# uncomment line below to store built packages in other location\n# The package will be stored as $REPODEST/$repo/$pkgname-$pkgver-r$pkgrel.apk\n# where $repo is the name of the parent directory of $startdir.\nREPODEST=$HOME/packages/\n\n# PACKAGER and MAINTAINER are used by newapkbuild when creating new aports for\n# the APKBUILD\'s "Contributor:" and "Maintainer:" comments, respectively.\n#PACKAGER="Your Name <your@email.address>"\n#MAINTAINER="$PACKAGER"\n\n# what to clean up after a successful build\nCLEANUP="srcdir bldroot pkgdir deps"\n\n# what to cleanup after a failed build\nERROR_CLEANUP="bldroot deps"\n')),(0,r.kt)("h2",{id:"\u751f\u6210\u548c\u4f7f\u7528-patch"},"\u751f\u6210\u548c\u4f7f\u7528 Patch"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd src/dahdi-linux-3.1.0/\ncp include/kernel.h include/kernel.h.new\nnano include/kernel.h.new\ndiff -u include/kernel.h include/kernel.h.new > ../../kernel-compact-5.4.patch\n\n# \u6dfb\u52a0 patch\nnano APKBUILD\nabuild checksum\n# \u9a8c\u8bc1 patch \u6b63\u786e\u6027\nrm -rf src; abuild prepare && abuild prepare\n# \u6784\u5efa\nabuild -r\n")),(0,r.kt)("h2",{id:"\u65b0\u589e"},"\u65b0\u589e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# -c \u6dfb\u52a0 init.d \u548c conf.d\nnewapkbuild -n frp \\\n  -d 'A fast reverse proxy to help you expose a local server behind a NAT or firewall to the internet.' \\\n  -l 'Apache-2.0' \\\n  -u https://github.com/fatedier/frp \\\n  -c \\\n  https://github.com/fatedier/frp/archive/v0.35.1.tar.gz\n")),(0,r.kt)("h2",{id:"apkbuild"},"APKBUILD"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'install="$pkgname.pre-install $pkgname.post-install"\n\n# cmake check\ncheck() {\n  CTEST_OUTPUT_ON_FAILURE=1 make -C build check\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6d4b\u8bd5\u6253\u5305\u811a\u672c\nrm -rf pkg && abuild rootpkg\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"pre.install")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/sh\n\naddgroup -S nebula 2>/dev/null\nadduser -S -D -H -s /bin/false -G nebula -g nebula nebula 2>/dev/null\n\nexit 0\n")),(0,r.kt)("h2",{id:"init-tips"},"init tips"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# \u652f\u6301\u591a init\n[ "${RC_SVCNAME}" != "${RC_SVCNAME##*.}" ] && INSTANCE=${RC_SVCNAME##*.}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u68c0\u67e5\u5305\u5185\u5185\u5bb9\ntar -tvf ~/packages/testing/x86_64/frp-openrc-*.apk\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#!/sbin/openrc-run\nname="Nebula Networking"\ndescription="Scalable overlay networking tool"\n\ninstance=${RC_SVCNAME##*.}\ncfgfile="/etc/nebula/${instance:-config}.yml"\ncommand="/usr/sbin/nebula"\ncommand_args="-config $cfgfile"\ncommand_user="nebula"\nsupervisor="supervise-daemon"\noutput_log="/var/log/${RC_SVCNAME}.log"\nerror_log="/var/log/${RC_SVCNAME}.log"\n\ndepend() {\n        need net\n        use logger dns\n        after firewall\n}\n\nstart_pre() {\n        $command -config $cfgfile -test\n        checkpath -f -m 0644 -o "$command_user" "$output_log" "$error_log"\n        checkpath -f -m 0640 -o "$command_user" "$cfgfile"\n}\n')),(0,r.kt)("h3",{id:"\u5f00\u53d1"},"\u5f00\u53d1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.alpinelinux.org/wiki/Creating_an_Alpine_package"},"https://wiki.alpinelinux.org/wiki/Creating_an_Alpine_package"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Usage: newapkbuild [-n PKGNAME] [-d PKGDESC] [-l LICENSE] [-u URL]\n       [-a | -C | -m | -p | -y | -r] [-s] [-c] [-f] [-h]\n       PKGNAME[-PKGVER] | SRCURL\nOptions:\n  -n  Set package name to PKGNAME (only use with SRCURL)\n  -d  Set package description to PKGDESC\n  -l  Set package license to LICENSE, use identifiers from:\n      <https://spdx.org/licenses/>\n  -u  Set package URL\n  -a  Create autotools package (use ./configure ...)\n  -C  Create CMake package (Assume cmake/ is there)\n  -m  Create meson package (Assume meson.build is there)\n  -p  Create perl package (Assume Makefile.PL is there)\n  -y  Create python package (Assume setup.py is there)\n  -r  Crate rust package (Assume Cargo.toml is there)\n  -s  Use sourceforge source URL\n  -c  Copy a sample init.d, conf.d, and install script\n  -f  Force even if directory already exists\n  -h  Show this help\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ abuild -h\nusage: abuild [options] [-P REPODEST] [-s SRCDEST] [-D DESCRIPTION] [cmd] ...\n       abuild [-c] -n PKGNAME[-PKGVER]\nOptions:\n -A  Print CARCH and exit\n -c  Enable colored output\n -d  Disable dependency checking\n -D  Set APKINDEX description (default: $repo $(git describe))\n -f  Force specified cmd (skip checks: apk up to date, arch, libc)\n -F  Force run as root\n -h  Show this help\n -k  Keep built packages, even if APKBUILD or sources are newer\n -K  Keep buildtime temp dirs and files (srcdir/pkgdir/deps)\n -m  Disable colors (monochrome)\n -P  Set REPODEST as the repository location for created packages\n -q  Quiet\n -r  Install missing dependencies from system repository (using sudo)\n -s  Set source package destination directory\n -v  Verbose: show every command as it is run (very noisy)\n\nCommands:\n  build       Compile and install package into $pkgdir\n  check       Run any defined tests concerning the package\n  checksum    Generate checksum to be included in APKBUILD\n  clean       Remove temp build and install dirs\n  cleancache  Remove downloaded files from $SRCDEST\n  cleanoldpkg Remove binary packages except current version\n  cleanpkg    Remove already built binary and source package\n  deps        Install packages listed in makedepends and depends\n  fetch       Fetch sources to $SRCDEST (consider: 'abuild fetch verify')\n  index       Regenerate indexes in $REPODEST\n  listpkg     List target packages\n  package     Install project into\n  prepare     Apply patches\n  rootbld     Build package in clean chroot\n  rootpkg     Run 'package', the split functions and create apks as fakeroot\n  sanitycheck Basic sanity check of APKBUILD\n  snapshot    Create a $giturl or $svnurl snapshot and upload to $disturl\n  sourcecheck Check if remote source package exists upstream\n  srcpkg      Make a source package\n  undeps      Uninstall packages listed in makedepends and depends\n  unpack      Unpack sources to $srcdir\n  up2date     Compare target and sources dates\n  verify      Verify checksums\n\nTo activate cross compilation specify in environment:\n  CHOST       Arch or hostspec of machine to generate packages for\n  CTARGET     Arch or hostspec of machine to generate compiler for\n")),(0,r.kt)("h1",{id:"faq"},"FAQ"),(0,r.kt)("h2",{id:"invalid-configuration-x86_64-alpine-linux-musl-machine-x86_64-alpine-linux-not-recognized"},"Invalid configuration ",(0,r.kt)("inlineCode",{parentName:"h2"},"x86_64-alpine-linux-musl"),": machine ",(0,r.kt)("inlineCode",{parentName:"h2"},"x86_64-alpine-linux")," not recognized"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"--build")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"--host")," \u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"x86_64-alpine-linux")),(0,r.kt)("li",{parentName:"ul"},"\u56e0\u4e3a\u90e8\u5206\u9879\u76ee\u6784\u5efa\u662f\u65e0\u6cd5\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"musl")," \u8bc6\u522b\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"gnu"))),(0,r.kt)("h2",{id:"\u5347\u7ea7\u5305\u4e5f\u9700\u8981\u5347\u7ea7\u4f9d\u8d56"},"\u5347\u7ea7\u5305\u4e5f\u9700\u8981\u5347\u7ea7\u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apk add lua-aports\n# \u5728 aports \u4ed3\u5e93\u4e0b\u8fd0\u884c - \u6bcf\u4e2a\u4ed3\u5e93\u90fd\u8981\n# ap revdep grpc-dev\necho -n main,community,testing | tr ',' '\\n' | xargs -I {} sh -c 'cd {}; ap revdep grpc-dev'\n# \u5c06\u4f9d\u8d56\u7684 rev \u589e\u52a0\n")))}d.isMDXComponent=!0}}]);