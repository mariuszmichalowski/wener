"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[15473],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return y}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),s=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),y=a,d=m["".concat(p,".").concat(y)]||m[y]||u[y]||o;return r?t.createElement(d,i(i({ref:n},c),{},{components:r})):t.createElement(d,i({ref:n},c))}));function y(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},42595:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var t=r(22122),a=r(19756),o=(r(67294),r(3905)),i=["components"],l={title:"Yarn"},p=void 0,s={unversionedId:"web/node/yarn",id:"web/node/yarn",isDocsHomePage:!1,title:"Yarn",description:"- nohoist in Workspaces",source:"@site/notes/web/node/yarn.md",sourceDirName:"web/node",slug:"/web/node/yarn",permalink:"/notes/web/node/yarn",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/node/yarn.md",version:"current",frontMatter:{title:"Yarn"},sidebar:"docs",previous:{title:"Rollup Awesome",permalink:"/notes/web/node/rollup-awesome"},next:{title:"yarn version",permalink:"/notes/web/node/yarn-version"}},c=[{value:".yarnrc",id:"yarnrc",children:[]},{value:"berry",id:"berry",children:[]},{value:"yarnrc.yml",id:"yarnrcyml",children:[]},{value:"yarn set version \u6162",id:"yarn-set-version-\u6162",children:[]}],u={toc:c};function m(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://classic.yarnpkg.com/blog/2018/02/15/nohoist/"},"nohoist in Workspaces"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# $HOME/.yarn/global\nyarn global dir\n# \u53ef\u5347\u7ea7\u4f9d\u8d56\nyarn outdated\n# \u5347\u7ea7\u4f9d\u8d56\nyarn upgrade\n")),(0,o.kt)("h2",{id:"yarnrc"},".yarnrc"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://npm.taobao.org/mirrors"},"https://npm.taobao.org/mirrors"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'registry "https://registry.npm.taobao.org"\ndisturl "https://npm.taobao.org/dist"\n\nnetwork-timeout 60000\n\nchromedriver_cdnurl "http://cdn.npm.taobao.org/dist/chromedriver"\nelectron_mirror "http://cdn.npm.taobao.org/dist/electron/"\nELECTRON_BUILDER_BINARIES_MIRROR http://npm.taobao.org/mirrors/electron-builder-binaries/\nfse_binary_host_mirror "https://npm.taobao.org/mirrors/fsevents"\nnode_inspector_cdnurl "https://npm.taobao.org/mirrors/node-inspector"\nNODEJS_ORG_MIRROR "http://npm.taobao.org/mirrors/node"\nnvm_nodejs_org_mirror "http://npm.taobao.org/mirrors/node"\noperadriver_cdnurl "https://npm.taobao.org/mirrors/operadriver"\nphantomjs_cdnurl "https://npm.taobao.org/mirrors/phantomjs"\nprofiler_binary_host_mirror "http://npm.taobao.org/mirrors/node-inspector/"\npuppeteer_download_host "https://npm.taobao.org/mirrors"\nsass_binary_site "http://npm.taobao.org/mirrors/node-sass"\nselenium_cdnurl "http://npm.taobao.org/mirrors/selenium"\nSQLITE3_BINARY_SITE "http://npm.taobao.org/mirrors/sqlite3"\n')),(0,o.kt)("h2",{id:"berry"},"berry"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e3a\u4ec0\u4e48\u7528 yarn2",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u6ca1\u6709 node_moduels"),(0,o.kt)("li",{parentName:"ul"},"\u4f9d\u8d56\u4ee5\u538b\u7f29\u5305\u5f62\u5f0f\u5b58\u5728",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5360\u7528\u7a7a\u95f4\u66f4\u5c11"),(0,o.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u6570\u5c11"))),(0,o.kt)("li",{parentName:"ul"},"\u4f9d\u8d56\u538b\u7f29\u5305\u4e0d\u53ef\u53d8",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u7f13\u5b58"),(0,o.kt)("li",{parentName:"ul"},"\u6784\u5efa\u66f4\u52a0\u5feb\u901f"),(0,o.kt)("li",{parentName:"ul"},"\u80fd\u5b9e\u73b0\u79bb\u7ebf\u5b89\u88c5\u6784\u5efa"))),(0,o.kt)("li",{parentName:"ul"},"\u8bbf\u95ee\u754c\u9650\u66f4\u52a0\u4e25\u8c28",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u6ca1\u6709\u5b9a\u4e49\u4f9d\u8d56\uff0c\u5219 impor \u4f1a\u5931\u8d25"),(0,o.kt)("li",{parentName:"ul"},"node_moduels \u65f6\u53ea\u8981\u6709\u90fd\u80fd import"))),(0,o.kt)("li",{parentName:"ul"},"\u6784\u5efa\u901f\u5ea6\u66f4\u5feb"),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301\u63d2\u4ef6"),(0,o.kt)("li",{parentName:"ul"},"\u65b0\u589e dlx \u547d\u4ee4 - \u7b49\u540c\u4e8e ",(0,o.kt)("inlineCode",{parentName:"li"},"npm dlx")))),(0,o.kt)("li",{parentName:"ul"},"\u6240\u6709 .yarnrc.yml \u4e2d\u7684\u914d\u7f6e\u90fd\u53ef\u4ee5\u7528\u73af\u5883\u53d8\u91cf",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u4f8b\u5982 YARN_HTTPS_PROXY - \u4e0d\u4f1a\u4f7f\u7528 HTTPS_PROXY"))),(0,o.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u914d\u7f6e ",(0,o.kt)("a",{parentName:"li",href:"https://yarnpkg.com/configuration/yarnrc#nodeLinker"},"nodeLinker")," \u4e3a ",(0,o.kt)("inlineCode",{parentName:"li"},"node-modules")," \u53ef\u4f7f\u7528\u4ee5\u524d\u7684\u65b9\u5f0f")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5b89\u88c5/\u5347\u7ea7\n# yarn >= 1.22\nyarn set version berry\n# yarn < v1.22\nyarn policies set-version berry\n\nyarn config set enableTelemetry 0\nyarn config set --home enableTelemetry 0\n\n# \u5e38\u7528\u63d2\u4ef6\n# ====================\n# https://github.com/yarnpkg/berry/blob/master/plugins.yml\n# yarn workspaces \u547d\u4ee4 - yarn workspaces foreach -pt run build\nyarn plugin import workspace-tools\nyarn plugin import pnp\n# yarn version \u547d\u4ee4 - \u4fee\u6539\u7248\u672c\u53f7 - yarn version check\nyarn plugin import version\n# yarn upgrade-interactive - \u4ea4\u4e92\u5347\u7ea7\nyarn plugin import interactive-tools\n# yarn stage - \u5c06 yarn \u76f8\u5173\u6587\u4ef6\u6dfb\u52a0\u5230 git\nyarn plugin import stage\n# \u81ea\u52a8\u6dfb\u52a0 @types \u4f9d\u8d56\nyarn plugin import typescript\n\n# \u5f53\u524d\u63d2\u4ef6\u5217\u8868\nyarn plugin list\n\n# \u5e76\u884c\u6784\u5efa\u6240\u6709 workspace\nyarn workspaces foreach -pt run build\n\n# plugins \u548c releases \u9700\u8981\u63d0\u4ea4\ngit add .yarn/plugins .yarn/releases\n\n# \u914d\u7f6e IDE - vscode vim emacs\n# https://yarnpkg.com/advanced/editor-sdks\nyarn dlx @yarnpkg/pnpify --sdk\n\n# \u68c0\u67e5\u4f9d\u8d56\nyarn dlx @yarnpkg/doctor .\n\n# \u4ea4\u4e92\u5347\u7ea7\nyarn upgrade-interactive\n\n# \u624b\u52a8\u5b89\u88c5\u65b0\u7248\ncurl -LC- -o .yarn/releases/yarn-berry.js https://github.com/yarnpkg/berry/raw/master/packages/yarnpkg-cli/bin/yarn.js\nyarn -v\n\n# \u624b\u52a8\u5b89\u88c5\u65b0\u7248\u63d2\u4ef6\ncurl -LC- -o .yarn/plugins/@yarnpkg/plugin-version.js https://github.com/yarnpkg/berry/raw/master/packages/plugin-version/bin/@yarnpkg/plugin-version.js\n# \u518d\u6b21 import \u4e5f\u53ef\u4ee5\nyarn plugin import version\n")),(0,o.kt)("h2",{id:"yarnrcyml"},"yarnrc.yml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"packageExtensions:\n  webpack@*:\n    dependencies:\n      lodash: '^4.15.0'\n    peerDependencies:\n      webpack-cli: '*'\n  # \u6ce8\u610f\u5f15\u53f7\n  '@storybook/core@*':\n    dependencies:\n      '@storybook/addon-essentials': '*'\n")),(0,o.kt)("h1",{id:"faq"},"FAQ"),(0,o.kt)("h2",{id:"yarn-set-version-\u6162"},"yarn set version \u6162"),(0,o.kt)("p",null,"\u53ef\u4ee5\u4ece\u73b0\u6709\u9879\u76ee\u62f7\u8d1d\uff0c\u514d\u5b89\u88c5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u914c\u60c5\u8003\u8651\u662f\u5426\u9700\u8981\u62f7\u8d1d\u7f13\u5b58 - \u4e00\u822c\u672c\u5730\u6709\u5168\u5c40\u7f13\u5b58\uff0c\u4e0d\u62f7\u95ee\u9898\u4e0d\u5927")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"PROJ=/other/porject\ncp $PROJ/.yarnrc.yml ./\nrsync -a --include=releases --include=plugins $PROJ/.yarn/ .yarn/\n")))}m.isMDXComponent=!0}}]);