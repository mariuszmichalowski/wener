"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[18833],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return N}});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),k=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=k(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},o=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),o=k(a),N=l,s=o["".concat(p,".").concat(N)]||o[N]||u[N]||r;return a?n.createElement(s,i(i({ref:t},d),{},{components:a})):n.createElement(s,i({ref:t},d))}));function N(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=o;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m.mdxType="string"==typeof e?e:l,i[1]=m;for(var k=2;k<r;k++)i[k]=a[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},43723:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return k},toc:function(){return d},default:function(){return o}});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),i=["components"],m={title:"make"},p=void 0,k={unversionedId:"dev/build/make",id:"dev/build/make",title:"make",description:"- Automatic-Variables",source:"@site/notes/dev/build/make.md",sourceDirName:"dev/build",slug:"/dev/build/make",permalink:"/notes/dev/build/make",editUrl:"https://github.com/wenerme/wener/edit/master/notes/dev/build/make.md",tags:[],version:"current",frontMatter:{title:"make"},sidebar:"docs",previous:{title:"magefile",permalink:"/notes/dev/build/mage"},next:{title:"Patch",permalink:"/notes/dev/build/patch"}},d=[{value:"\u8981\u6c42\u73af\u5883\u53d8\u91cf",id:"\u8981\u6c42\u73af\u5883\u53d8\u91cf",children:[],level:2},{value:"\u63a5\u6536\u4efb\u610f\u989d\u5916\u53c2\u6570",id:"\u63a5\u6536\u4efb\u610f\u989d\u5916\u53c2\u6570",children:[],level:2},{value:"\u5e2e\u52a9\u6587\u6863",id:"\u5e2e\u52a9\u6587\u6863",children:[],level:2},{value:"Variables",id:"variables",children:[{value:"\u7279\u6b8a\u53d8\u91cf",id:"\u7279\u6b8a\u53d8\u91cf",children:[],level:3}],level:2},{value:"Targets",id:"targets",children:[{value:"\u7279\u6b8a\u76ee\u6807",id:"\u7279\u6b8a\u76ee\u6807",children:[],level:3}],level:2},{value:"\u51fd\u6570",id:"\u51fd\u6570",children:[],level:2},{value:"Recipes",id:"recipes",children:[],level:2},{value:"\u5e26\u5e2e\u52a9\u7684 Makefile",id:"\u5e26\u5e2e\u52a9\u7684-makefile",children:[],level:2}],u={toc:d};function o(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.gnu.org/software/make/manual/html_node/Automatic-Variables.html"},"Automatic-Variables")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://devhints.io/makefile"},"Makefile cheatsheet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://clarkgrubb.com/makefile-style-guide"},"makefile style guide")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.gnu.org/software/make/manual/make.html#Special-Built_002din-Target-Names"},"Special Built-in Target Names"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Makefile"},"# \u4fee\u6539\u9ed8\u8ba4 shell\nSHELL=/bin/bash\n\n# \u4fdd\u7559\u4e2d\u95f4\u6587\u4ef6\n.PRECIOUS: public/modules/wener-apis-%.system.js\n# \u4e8c\u6b21\u6c42\u503c $$\n# \u8fd9\u4e2a\u9700\u8981\u653e\u5728\u524d\u9762\n.SECONDEXPANSION:\n\n# \u603b\u662f\u6267\u884c\n.PHONEY: always\nalways:\n\n# export \u6240\u6709\u53d8\u91cf\n.EXPORT_ALL_VARIABLES:\n\n# makefile \u6240\u5728\u76ee\u5f55\ncwd := $(notdir $(patsubst %/,%,$(dir $(abspath $(lastword $(MAKEFILE_LIST))))))\n\n# \u66ff\u6362\u7a7a\u683c\u4e3a\u9017\u53f7\ntext := hello a b c\ncomma:= ,\nempty:=\nspace:= $(empty) $(empty)\nrel  := $(subst $(space),$(comma),${text})\n\n# @ \u4e0d\u8f93\u51fa\u8fd9\u884c\u547d\u4ee4\nok:\n    @echo OK\n# \u4e8c\u6b21\u6c42\u503c\ndo-%: ok $$(wildcard src/modules/%/*.c)\n  # ? ok - @ do-xxx - % - < ok - ^ ok - + ok - | - * xxx\n    echo '?' $? - '@' $@ - '%' $% - '<' $< - '^' $^ - '+' $+ - '|' $| - '*' $*\n\nmake-%: always\n# \u5982\u679c\u6587\u4ef6\u5b58\u5728\u624d\u6267\u884c\nifneq (\"$$(wildcard src/modules/$*/Makefile)\",\"\")\n    $(MAKE) -f src/modules/$*/Makefile build\nelse\n    @echo Skip - no makefile\nendif\n\n\n# \u5faa\u73af\nLIST = one two three\nforeach:\n  for i in $(LIST); do \\\n      echo $$i; \\\n  done\n\n# \u76ee\u5f55\u5207\u6362\nfoo : bar/lose\n  cd $(<D) && gobble $(<F) > ../$@\n# \u4f7f\u7528 ONESHELL \u5219\u7b80\u5355\u4e00\u4e9b\n.ONESHELL:\nfoo : bar/lose\n  cd $(@D)\n  gobble $(@F) > ../$@\n")),(0,r.kt)("h2",{id:"\u8981\u6c42\u73af\u5883\u53d8\u91cf"},"\u8981\u6c42\u73af\u5883\u53d8\u91cf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-makefile"},"check-env:\nifndef ENV\n    $(error ENV is undefined)\nendif\n")),(0,r.kt)("h2",{id:"\u63a5\u6536\u4efb\u610f\u989d\u5916\u53c2\u6570"},"\u63a5\u6536\u4efb\u610f\u989d\u5916\u53c2\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-makefile"},"CMD_ARGS = $(filter-out $@,$(MAKECMDGOALS))\n%:\n    @:\nrun:\n  @echo RUN $(CMD_ARGS)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make run app\n")),(0,r.kt)("h2",{id:"\u5e2e\u52a9\u6587\u6863"},"\u5e2e\u52a9\u6587\u6863"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html"},"Self-Documented Makefile"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-makefile"},".PHONY: help\n.DEFAULT_GOAL := help\nhelp:\n    @grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = \":.*?## \"}; {printf \"\\033[36m%-30s\\033[0m %s\\n\", $$1, $$2}'\n")),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"${foo}"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"$(foo)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$foo")," \u5b9e\u9645\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"$(f)oo")," - \u6240\u4ee5\u4e0d\u8981\u8fd9\u6837\u7528"))),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u573a\u666f targets, prerequisites, recipes, most directives, new variable values"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"="),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"set variable - \u9012\u5f52\u5c55\u5f00\uff0c\u6bcf\u6b21\u6c42\u503c\u5c55\u5f00"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u53ef\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"li"},"CFLAGS = $(CFLAGS) -O"),", \u4f1a\u5bfc\u81f4\u65e0\u9650\u5faa\u73af",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"+=")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},":="),",",(0,r.kt)("inlineCode",{parentName:"li"},"::="),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Simply expanded variables"),(0,r.kt)("li",{parentName:"ul"},"\u7acb\u5373\u5c55\u5f00\uff0c\u6267\u884c\u4e00\u6b21"),(0,r.kt)("li",{parentName:"ul"},"\u9012\u5f52\u5c55\u5f00 ",(0,r.kt)("inlineCode",{parentName:"li"},"a := $($(x))")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"?="),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"override variable := value"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8986\u76d6\u53d8\u91cf\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"="),",",(0,r.kt)("inlineCode",{parentName:"li"},":="),",",(0,r.kt)("inlineCode",{parentName:"li"},"+=")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"undefine variable"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53d6\u6d88\u53d8\u91cf\u5b9a\u4e49"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"${var:a=b}"),",",(0,r.kt)("inlineCode",{parentName:"li"},"$(var:a=b)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u66ff\u6362"),(0,r.kt)("li",{parentName:"ul"},"\u7b49\u540c\u4e8e ",(0,r.kt)("inlineCode",{parentName:"li"},"$(patsubst %a,%b,var)")))),(0,r.kt)("li",{parentName:"ul"},"\u6c42\u503c\u987a\u5e8f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8986\u76d6\u53d8\u91cf"),(0,r.kt)("li",{parentName:"ul"},"Setting Variables, verbatim definition - Defining Multi-Line Variables"),(0,r.kt)("li",{parentName:"ul"},"\u73af\u5883\u53d8\u91cf"),(0,r.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u53d8\u91cf"),(0,r.kt)("li",{parentName:"ul"},"\u5e38\u91cf\u53d8\u91cf\u3001\u9690\u6027\u89c4\u5219"))),(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f9d\u8d56\u9879\u4f1a\u7ee7\u627f\u53d8\u91cf")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"var"),(0,r.kt)("th",{parentName:"tr",align:null},"desc"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$@")),(0,r.kt)("td",{parentName:"tr",align:null},"target")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$*")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%")," in target")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-makefile"},"# \u591a\u884c\u53d8\u91cf\n# \u7b49\u540c\u4e8e two-lines = echo foo; echo $(bar)\ndefine two-lines\necho foo\necho $(bar)\nendef\n\n$(info $(origin foo))\n$(info $(flavor bar))\n\n\nEXTRA_CFLAGS =\n# \u79c1\u6709\u53d8\u91cf\nprog: private EXTRA_CFLAGS = -L/usr/local/lib\nprog: a.o b.o\n\n# ?=\nifeq ($(origin FOO), undefined)\n  FOO = bar\nendif\n")),(0,r.kt)("h3",{id:"\u7279\u6b8a\u53d8\u91cf"},"\u7279\u6b8a\u53d8\u91cf"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"var"),(0,r.kt)("th",{parentName:"tr",align:null},"desc"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MAKEFILE_LIST"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".DEFAULT_GOAL"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MAKE_RESTARTS"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MAKE_TERMOUT,MAKE_TERMERR"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".RECIPEPREFIX"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".VARIABLES"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".FEATURES"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".INCLUDE_DIRS"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".EXTRA_PREREQS"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MAKECMDGOALS"),(0,r.kt)("td",{parentName:"tr",align:null},"make \u65f6\u7684\u76ee\u6807")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MAKE"),(0,r.kt)("td",{parentName:"tr",align:null},"make")))),(0,r.kt)("h2",{id:"targets"},"Targets"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/make/manual/make.html#Standard-Targets"},"Standard Targets")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"target"),(0,r.kt)("th",{parentName:"tr",align:null},"desc"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"all"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clean"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mostlyclean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4fdd\u7559\u4e0d\u60f3\u91cd\u65b0\u7f16\u8bd1\u7684\u6587\u4ef6\uff0c\u4f8b\u5982 libgcc.a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"distclean,realclean,clobber"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6bd4 clean \u6e05\u9664\u66f4\u591a\u6587\u4ef6\uff0c\u4f8b\u5982\u914d\u7f6e\u6587\u4ef6\uff0clink")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"install"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"print"),(0,r.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u53d8\u5316\u4e86\u7684\u6e90\u6587\u4ef6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tar"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6e90\u6587\u4ef6 tar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"shar"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6e90\u6587\u4ef6 shar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dist"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TAGS"),(0,r.kt)("td",{parentName:"tr",align:null},"\u66f4\u65b0 tags \u6587\u4ef6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"check,test"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d4b\u8bd5")))),(0,r.kt)("h3",{id:"\u7279\u6b8a\u76ee\u6807"},"\u7279\u6b8a\u76ee\u6807"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.gnu.org/software/make/manual/make.html#Special-Targets"},"Special-Targets"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"target"),(0,r.kt)("th",{parentName:"tr",align:null},"desc"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".PHONY"),(0,r.kt)("td",{parentName:"tr",align:null},"\u603b\u662f\u8fd0\u884c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".SUFFIXES"),(0,r.kt)("td",{parentName:"tr",align:null},"\u540e\u7f00\u6a21\u5f0f\u81ea\u52a8\u5339\u914d\uff0c\u73b0\u5728\u4e00\u822c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},"%"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".DEFAULT"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6ca1\u627e\u5230\u89c4\u5219\u65f6\u7684\u9ed8\u8ba4\u76ee\u6807")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".PRECIOUS"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4fdd\u7559\u4e2d\u95f4\u6587\u4ef6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".INTERMEDIATE"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8868\u660e\u662f\u4e2d\u95f4\u6587\u4ef6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".SECONDARY"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u4f9d\u8d56\u4e3a\u4e8c\u6b21\u5c55\u5f00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".SECONDEXPANSION"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$$")," \u4e8c\u6b21\u5c55\u5f00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".DELETE_ON_ERROR"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9519\u8bef\u65f6\u5220\u9664\u6587\u4ef6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".IGNORE"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5ffd\u7565\u9519\u8bef\uff0c\u73b0\u5728\u4e00\u822c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},"-"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".LOW_RESOLUTION_TIME"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u6587\u4ef6\u4fee\u6539\u65f6\u95f4\u65f6\u7528\u66f4\u4f4e\u7cbe\u5ea6\uff0c\u73b0\u5728\u4e00\u822c\u4e0d\u4f7f\u7528")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".SILENT"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0d\u8f93\u51fa\uff0c\u7c7b\u4f3c ",(0,r.kt)("inlineCode",{parentName:"td"},"-s"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".EXPORT_ALL_VARIABLES"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bfc\u51fa\u6240\u6709\u53d8\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".NOTPARALLEL"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0d\u5e76\u884c\uff0c\u5ffd\u7565 ",(0,r.kt)("inlineCode",{parentName:"td"},"-j"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".ONESHELL"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd0\u884c\u5728\u4e00\u4e2a shell \u91cc\u800c\u4e0d\u662f\u6bcf\u884c\u4e00\u4e2a shell")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".POSIX"),(0,r.kt)("td",{parentName:"tr",align:null},"POSIX \u517c\u5bb9\u6a21\u5f0f")))),(0,r.kt)("h2",{id:"\u51fd\u6570"},"\u51fd\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.gnu.org/software/make/manual/html_node/File-Name-Functions.html"},"https://www.gnu.org/software/make/manual/html_node/File-Name-Functions.html"))),(0,r.kt)("h2",{id:"recipes"},"Recipes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.gnu.org/software/make/manual/make.html#Recipes"},"Recipes"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-makefile"},"subsystem:\n  # \u900f\u4f20 make\n  cd subdir && $(MAKE) $(MFLAGS)\n\nifeq (0,${MAKELEVEL})\nwhoami    := $(shell whoami)\nhost-type := $(shell arch)\nMAKE := ${MAKE} host-type=${host-type} whoami=${whoami}\nendif\n")),(0,r.kt)("h2",{id:"\u5e26\u5e2e\u52a9\u7684-makefile"},"\u5e26\u5e2e\u52a9\u7684 Makefile"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-makefile"},"build: ## Build\n  echo BUILD\n.PHONY: help\nhelp: ## \u5e2e\u52a9\n    @egrep -h '\\s##\\s' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = \":.*?## \"}; {printf \"\\033[36m%-20s\\033[0m %s\\n\", $$1, $$2}'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make help\n")))}o.isMDXComponent=!0}}]);