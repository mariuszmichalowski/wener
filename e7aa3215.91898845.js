(window.webpackJsonp=window.webpackJsonp||[]).push([[982],{1055:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(8),i=(t(0),t(1151)),a={id:"winrm",title:"Windows Remote Management"},c={unversionedId:"os/windows/winrm",id:"os/windows/winrm",isDocsHomePage:!1,title:"Windows Remote Management",description:"Tips",source:"@site/notes/os/windows/winrm.md",slug:"/os/windows/winrm",permalink:"/notes/os/windows/winrm",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/windows/winrm.md",version:"current",sidebar:"docs",previous:{title:"Windows XP",permalink:"/notes/os/windows/windows-xp"},next:{title:"centos",permalink:"/notes/os/centos/centos"}},l=[{value:"Tips",id:"tips",children:[]}],s={toc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7aef\u53e3 HTTP 5985, HTTPS 5986"),Object(i.b)("li",{parentName:"ul"},"Windows Remote Shell (WinRS)",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Windows 2008+"))),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://pentestlab.blog/tag/winrm/"},"https://pentestlab.blog/tag/winrm/"))))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"apk add nmap-scripts nmap-nselibs\n\nnmap -p 5985,5986 -sV 192.168.0.0/24\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-powershell"},'Invoke-Command -ComputerName TARGET -ScriptBlock { dir c:\\ }\nImport-Module ./Invoke-Mimikatz.ps1\nInvoke-Mimikatz -ComputerName TARGET\n\nEnable-PSRemoting -Force\n\nwinrm quickconfig\nwinrm set winrm/config/Client @{AllowUnencrypted = "true"}\nSet-Item WSMan:localhost\\client\\trustedhosts -value *\n')),Object(i.b)("p",null,"winrm enumerate winrm/config/Listener"),Object(i.b)("p",null,"winrm quickconfig -transport:http"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cmd"},'winrm e winrm/config/listener\n\n# \u8fdc\u7a0b\u6267\u884c\nwinrs -r:http://WIN-2NE38K15TGH/wsman "cmd"\nwinrs -r:http://WIN-2NE38K15TGH/wsman "net localgroup administrators"\n')))}p.isMDXComponent=!0},1151:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(t),b=r,d=m["".concat(a,".").concat(b)]||m[b]||u[b]||i;return t?o.a.createElement(d,c(c({ref:n},s),{},{components:t})):o.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);