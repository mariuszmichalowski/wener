(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{1152:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),u=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,f=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return t?a.a.createElement(f,s(s({ref:n},c),{},{components:t})):a.a.createElement(f,s({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},370:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(8),o=(t(0),t(1152)),i={title:"Ansible Network"},s={unversionedId:"ops/infra/ansible-network",id:"ops/infra/ansible-network",isDocsHomePage:!1,title:"Ansible Network",description:"- \u7f51\u7edc\u6a21\u5757",source:"@site/notes/ops/infra/ansible-network.md",slug:"/ops/infra/ansible-network",permalink:"/notes/ops/infra/ansible-network",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/infra/ansible-network.md",version:"current",sidebar:"docs",previous:{title:"ansible-faq",permalink:"/notes/ops/infra/ansible-faq"},next:{title:"Ansible Pull",permalink:"/notes/ops/infra/ansible-pull"}},l=[{value:"EdgeRouter \u914d\u7f6e",id:"edgerouter-\u914d\u7f6e",children:[{value:"socket_path must be a value",id:"socket_path-must-be-a-value",children:[]}]}],c={toc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.ansible.com/ansible/2.9/modules/list_of_network_modules.html"},"\u7f51\u7edc\u6a21\u5757")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/claytono/edgerouter-ansible"},"https://github.com/claytono/edgerouter-ansible"))),Object(o.b)("h2",{id:"edgerouter-\u914d\u7f6e"},"EdgeRouter \u914d\u7f6e"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# \u6dfb\u52a0 ssh key\nscp admin_rsa.pub admin@192.168.1.1:/tmp/key\n\nssh admin@192.168.1.1\nconfigure\n# key \u9700\u8981\u6709\u8bf4\u660e\u5426\u5219\u4f1a\u8bf4\u4e0d\u5408\u6cd5\nloadkey admin /tmp/key\ncommit\nsave\nexit\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"edgerouter:\n  hosts:\n    er-1:\n      ansible_host: 192.168.1.1\n      ansible_user: admin\n      ansible_network_os: edgeos\n      connection: network_cli\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"net-facts.yaml")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"- name: Network facts\n  connection: network_cli\n  gather_facts: false\n  hosts: edgerouter\n  tasks:\n    - name: Get facts\n      edgeos_facts:\n        gather_subset: all\n\n    - name: Display the config\n      debug:\n        msg:\n          - 'Hostname : {{ansible_net_hostname}}'\n          - 'Model    : {{ansible_net_model}} v{{ ansible_net_version }}'\n          - 'Serial   : {{ansible_net_serialnum}}'\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"ansible -m ping edgerouter\nansible-playbook net-facts.yaml\n")),Object(o.b)("h3",{id:"socket_path-must-be-a-value"},"socket_path must be a value"))}u.isMDXComponent=!0}}]);