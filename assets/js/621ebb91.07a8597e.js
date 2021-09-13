"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[54785],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return f}});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},s=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=u(r),f=i,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||o;return r?t.createElement(d,l(l({ref:n},s),{},{components:r})):t.createElement(d,l({ref:n},s))}));function f(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=p;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var u=2;u<o;u++)l[u]=r[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},38279:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var t=r(87462),i=r(63366),o=(r(67294),r(3905)),l=["components"],a={title:"Terminal"},c=void 0,u={unversionedId:"os/linux/shell/terminal",id:"os/linux/shell/terminal",isDocsHomePage:!1,title:"Terminal",description:"screen",source:"@site/notes/os/linux/shell/terminal.md",sourceDirName:"os/linux/shell",slug:"/os/linux/shell/terminal",permalink:"/notes/os/linux/shell/terminal",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/shell/terminal.md",tags:[],version:"current",frontMatter:{title:"Terminal"},sidebar:"docs",previous:{title:"Shell FAQ",permalink:"/notes/os/linux/shell/shell-faq"},next:{title:"\u865a\u62df\u5316",permalink:"/notes/os/virt/virt"}},s=[{value:"screen",id:"screen",children:[]},{value:"minicom",id:"minicom",children:[]}],m={toc:s};function p(e){var n=e.components,r=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"screen"},"screen"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://aperiodic.net/screen/quick_reference"},"Screen quick reference")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.gnu.org/software/screen/manual/screen.html"},"Screen manual")),(0,o.kt)("li",{parentName:"ul"},"FAQ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5f53\u8fde\u63a5\u4e32\u53e3, \u5f3a\u5236\u628a screen kill \u540e, screen \u53ef\u80fd\u51fa\u73b0 100% CPU \u5360\u7528, \u6b64\u65f6\u53ea\u80fd\u91cd\u542f\u4e86")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u6240\u6709\u7684\u4f1a\u8bdd\nscreen -ls\n# \u9000\u51fa\nscreen -X -S ${SESSION} quit\n# \u8fde\u4e0a screen \u4f1a\u8bdd\nscreen -r ${SESSION}\n")),(0,o.kt)("h2",{id:"minicom"},"minicom"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 Meta \u4e3a ESC")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+-------------------------------------------------------------------+\n|                      Minicom Command Summary                      |\n|                                                                   |\n|               Commands can be called by Meta-<key>                |\n|                                                                   |\n|               Main Functions                  Other Functions     |\n|                                                                   |\n| Dialing directory..D  run script (Go)....G | Clear Screen.......C |\n| Send files.........S  Receive files......R | cOnfigure Minicom..O |\n| comm Parameters....P  Add linefeed.......A | Suspend minicom....J |\n| Capture on/off.....L  Hangup.............H | eXit and reset.....X |\n| send break.........F  initialize Modem...M | Quit with no reset.Q |\n| Terminal settings..T  run Kermit.........K | Cursor key mode....I |\n| lineWrap on/off....W  local Echo on/off..E | Help screen........Z |\n| Paste file.........Y  Timestamp toggle...N | scroll Back........B |\n| Add Carriage Ret...U                                              |\n|                                                                   |\n|             Select function or press Enter for none.              |\n+-------------------------------------------------------------------+\n")))}p.isMDXComponent=!0}}]);