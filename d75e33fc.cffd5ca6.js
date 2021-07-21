(window.webpackJsonp=window.webpackJsonp||[]).push([[914],{1151:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},p=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(t),p=r,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||i;return t?o.a.createElement(f,a(a({ref:n},l),{},{components:t})):o.a.createElement(f,a({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=p;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var l=2;l<i;l++)s[l]=t[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},987:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(8),i=(t(0),t(1151)),s={title:"Windows Manifest"},a={unversionedId:"dev/windows/windows-manifest",id:"dev/windows/windows-manifest",isDocsHomePage:!1,title:"Windows Manifest",description:"* What is a Manifest (in Windows)?",source:"@site/notes/dev/windows/windows-manifest.md",slug:"/dev/windows/windows-manifest",permalink:"/notes/dev/windows/windows-manifest",editUrl:"https://github.com/wenerme/wener/edit/master/notes/dev/windows/windows-manifest.md",version:"current",sidebar:"docs",previous:{title:"Mysy2",permalink:"/notes/dev/windows/msys2"},next:{title:"Fluentbit",permalink:"/notes/service/observability/logging/fluentbit"}},c=[],l={toc:c};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.samlogic.net/articles/manifest.htm"},"What is a Manifest (in Windows)?"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<assembly xmlns="urn:schemas-microsoft-com:asm.v1" manifestVersion="1.0">\n<assemblyIdentity\n    version="1.0.0.0"\n    processorArchitecture="x86"\n    name="controls"\n    type="win32"\n></assemblyIdentity>\n<dependency>\n    <dependentAssembly>\n        <assemblyIdentity\n            type="win32"\n            name="Microsoft.Windows.Common-Controls"\n            version="6.0.0.0"\n            processorArchitecture="*"\n            publicKeyToken="6595b64144ccf1df"\n            language="*"\n        ></assemblyIdentity>\n    </dependentAssembly>\n</dependency>\n<trustInfo xmlns="urn:schemas-microsoft-com:asm.v3">\n    <security>\n        <requestedPrivileges>\n            <requestedExecutionLevel level="requireAdministrator" uiAccess="false"/>\n        </requestedPrivileges>\n    </security>\n</trustInfo>\n</assembly>\n')),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cmd"},"# C:\\Program Files\\Microsoft SDKs\\Windows\\v6.1\\bin\nmt -inputresource:dll_with_manifest.dll;#1 -out:extracted.manifest\n")))}u.isMDXComponent=!0}}]);