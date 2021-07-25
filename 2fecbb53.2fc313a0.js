(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{1169:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var r=t(0),l=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var d=l.a.createContext({}),i=function(e){var n=l.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=i(e.components);return l.a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},f=l.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),s=i(t),f=r,b=s["".concat(o,".").concat(f)]||s[f]||p[f]||a;return t?l.a.createElement(b,c(c({ref:n},d),{},{components:t})):l.a.createElement(b,c({ref:n},d))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=f;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var d=2;d<a;d++)o[d]=t[d];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},286:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return i}));var r=t(3),l=t(8),a=(t(0),t(1169)),o={title:"cloudflared"},c={unversionedId:"devops/provider/cloudflared",id:"devops/provider/cloudflared",isDocsHomePage:!1,title:"cloudflared",description:"* \u9ed8\u8ba4\u914d\u7f6e ~/.cloudflared/config.yml",source:"@site/notes/devops/provider/cloudflared.md",slug:"/devops/provider/cloudflared",permalink:"/notes/devops/provider/cloudflared",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/provider/cloudflared.md",version:"current"},u=[{value:"tunnel",id:"tunnel",children:[]},{value:"\u8fdc\u7a0b\u542f\u52a8 tunner",id:"\u8fdc\u7a0b\u542f\u52a8-tunner",children:[]},{value:"config.yaml",id:"configyaml",children:[{value:"ingress",id:"ingress",children:[]}]}],d={toc:u};function i(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u914d\u7f6e ",Object(a.b)("inlineCode",{parentName:"li"},"~/.cloudflared/config.yml"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# macOS \u5b89\u88c5\nbrew install cloudflare/cloudflare/cloudflared\n# Docker \u8fd0\u884c\ndocker run -v ~/.cloudflared:/etc/cloudflared \\\n  --name cfd cloudflare/cloudflared:2021.4.0 \\\n  tunnel --no-autoupdate --hostname demo.wener.me --url http://localhost:8080\n# Linux \u5b89\u88c5\ncurl -Lo cloudflared https://github.com/cloudflare/cloudflared/releases/download/2021.4.0/cloudflared-linux-amd64\nchmod +x cloudflared\nsudo mv cloudflared /usr/local/bin/\n\n# \u5347\u7ea7\u7248\u672c\ncloudflared update\n")),Object(a.b)("h2",{id:"tunnel"},"tunnel"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# \u767b\u9646\u540e\u751f\u6210\u8bc1\u4e66 \uff5e/.cloudflared/cert.pem\ncloudflared tunnel login\n\n# \u521b\u5efa\u540e\u751f\u6210\u914d\u7f6e ~/.cloudflared/UUID.json\ncloudflared tunnel create dev\ncloudflared tunnel list\n\n# cloudflared tunnel delete dev\n\nTUNNEL_ID=6ff42ae2-765d-4adf-8112-31c55c1551ef\ncat <<YAML > ~/.cloudflared/config.yml\ntunnel: dev\ncredentials-file: $HOME/.cloudflared/$TUNNEL_ID.json\n\ningress:\n  - hostname: demo.wener.me\n    service: http://localhost:3000\n  - service: http_status:404\nYAML\n# \u6821\u9a8c\u8def\u7531\u89c4\u5219\ncloudflared tunnel ingress validate\n# \u6d4b\u8bd5\u8def\u7531\ncloudflared tunnel ingress rule https://demo.wener.me\n# \u542f\u52a8\ncloudflared tunnel run dev\n\n# \u8bbf\u95ee\u670d\u52a1\u9700\u8981\n# CNAME demo.wener.me \u5230 ${TUNNEL_ID}.cfargotunnel.com\ncloudflared tunnel route dns dev demo.wener.me\n# \u81f3\u6b64\u53ef\u4ee5\u901a\u8fc7\u901a\u9053\u8bbf\u95ee\u670d\u52a1\ncurl -L demo.wener.me\n")),Object(a.b)("h2",{id:"\u8fdc\u7a0b\u542f\u52a8-tunner"},"\u8fdc\u7a0b\u542f\u52a8 tunner"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"cloudflared tunnel list\n# \u53ea\u9700\u8981 tunnel json\nTUNNEL_ID=6ff42ae2-765d-4adf-8112-31c55c1551ef\n# rsync \u65b9\u4fbf\u521b\u5efa\u76ee\u5f55\nrsync --no-owner ~/.cloudflared/$TUNNEL_ID.json admin@192.168.1.1:~/.cloudflared/\nrsync --no-owner ~/.cloudflared/config.yml admin@192.168.1.1:~/.cloudflared/\n")),Object(a.b)("h2",{id:"configyaml"},"config.yaml"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"# \u53ef\u662f\u540d\u5b57\u6216\u8005 ID\n# cloudflared tunnel run NAME-OR-ID\ntunnel: dev\ncredentials-file: /root/.cloudflared/6ff42ae2-765d-4adf-8112-31c55c1551ef.json\ningress:\n- service: hello_world\n")),Object(a.b)("h3",{id:"ingress"},"ingress"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},'# \u8def\u7531\u89c4\u5219\ningress:\n  # \u57df\u540d\u8def\u7531\n  - hostname: example.com\n    service: https://localhost:8000\n  # \u57df\u540d+\u8def\u5f84\u89c4\u5219\n  - hostname: static.example.com\n    path: /*.(jpg|png|css|js)\n    service: https://localhost:8001\n  # \u6cdb\u57df\u540d\n  - hostname: "*.example.com"\n    service: https://localhost:8002\n  # \u5339\u914d\u6240\u6709 - \u5fc5\u987b\u5305\u542b\u4e00\u4e2a\u6355\u83b7\u6240\u6709\u7684\u89c4\u5219\n  # \u672a\u5339\u914d\u7684\u8bf7\u6c42\u8fd9\u4e2a\u670d\u52a1\n  - service: https://localhost:8003\n  # \u672a\u5339\u914d\u7684\u8fd4\u56de 404\n  - service: http_status:404\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"service \u89c4\u5219")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"https://localhost:8000"),Object(a.b)("li",{parentName:"ul"},"ssh://localhost:2222",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"TCP, RDP, SSH, SMB, kubectl"))),Object(a.b)("li",{parentName:"ul"},"bastion",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"TCP, RDP, SSH, SMB, kubectl"),Object(a.b)("li",{parentName:"ul"},"cloudflared \u4f5c\u4e3a\u8df3\u677f\u673a"))),Object(a.b)("li",{parentName:"ul"},"hello_world",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u6d4b\u8bd5\u670d\u52a1"))),Object(a.b)("li",{parentName:"ul"},"tcp://localhost:8000"),Object(a.b)("li",{parentName:"ul"},"unix:/home/production/echo.sock"),Object(a.b)("li",{parentName:"ul"},"http_status:404",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u8fd4\u56de\u72b6\u6001\u7801")))))}i.isMDXComponent=!0}}]);