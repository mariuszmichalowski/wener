"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[73590],{3905:function(e,n,l){l.d(n,{Zo:function(){return m},kt:function(){return b}});var t=l(67294);function a(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function o(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,t)}return l}function i(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?o(Object(l),!0).forEach((function(n){a(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}function r(e,n){if(null==e)return{};var l,t,a=function(e,n){if(null==e)return{};var l,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)l=o[t],n.indexOf(l)>=0||(a[l]=e[l]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)l=o[t],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var s=t.createContext({}),c=function(e){var n=t.useContext(s),l=n;return e&&(l="function"==typeof e?e(n):i(i({},n),e)),l},m=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var l=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),u=c(l),b=a,y=u["".concat(s,".").concat(b)]||u[b]||p[b]||o;return l?t.createElement(y,i(i({ref:n},m),{},{components:l})):t.createElement(y,i({ref:n},m))}));function b(e,n){var l=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=l.length,i=new Array(o);i[0]=u;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var c=2;c<o;c++)i[c]=l[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,l)}u.displayName="MDXCreateElement"},85242:function(e,n,l){l.r(n),l.d(n,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return m},default:function(){return u}});var t=l(22122),a=l(19756),o=(l(67294),l(3905)),i=["components"],r={title:"Ansible Collection"},s=void 0,c={unversionedId:"ops/infra/ansible/ansible-collection",id:"ops/infra/ansible/ansible-collection",isDocsHomePage:!1,title:"Ansible Collection",description:"- Collection \u662f Ansible Galaxy Role \u7684\u7ee7\u627f\u8005",source:"@site/notes/ops/infra/ansible/ansible-collection.md",sourceDirName:"ops/infra/ansible",slug:"/ops/infra/ansible/ansible-collection",permalink:"/notes/ops/infra/ansible/ansible-collection",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/infra/ansible/ansible-collection.md",version:"current",frontMatter:{title:"Ansible Collection"},sidebar:"docs",previous:{title:"Ansible AWX",permalink:"/notes/ops/infra/ansible/ansible-awx"},next:{title:"Ansible Cookbook",permalink:"/notes/ops/infra/ansible/ansible-cookbook"}},m=[{value:"dev",id:"dev",children:[]},{value:"lint",id:"lint",children:[]},{value:"playbook",id:"playbook",children:[]},{value:"requirements.yml",id:"requirementsyml",children:[]},{value:"ansible.cfg",id:"ansiblecfg",children:[]},{value:"\u5185\u7f6e",id:"\u5185\u7f6e",children:[]}],p={toc:m};function u(e){var n=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Collection \u662f Ansible Galaxy Role \u7684\u7ee7\u627f\u8005"),(0,o.kt)("li",{parentName:"ul"},"\u4e0d\u53ea\u80fd\u5305\u542b role\uff0c\u8fd8\u80fd\u5305\u542b\u5404\u79cd\u63d2\u4ef6\uff0c\u6587\u6863\uff0c\u4efb\u52a1\u7b49"),(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5b89\u88c5\u76ee\u5f55 ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.ansible/collections")," - COLLECTIONS_PATHS,"),(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u670d\u52a1\u5668 ",(0,o.kt)("a",{parentName:"li",href:"https://galaxy.ansible.com"},"https://galaxy.ansible.com")," - GALAXY_SERVER"),(0,o.kt)("li",{parentName:"ul"},"server_list \u6216 GALAXY_SERVER_LIST \u53ef\u6307\u5b9a\u4e00\u7ec4\u670d\u52a1"),(0,o.kt)("li",{parentName:"ul"},"\u5185\u5efa collections \u5b89\u88c5\u4f4d\u7f6e ",(0,o.kt)("inlineCode",{parentName:"li"},"/usr/lib/python3.8/site-packages/ansible_collections")),(0,o.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.ansible.com/ansible/devel/user_guide/collections_using.html"},"\u4f7f\u7528\u6587\u6863"))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# namespace.collection\nansible-galaxy collection install wenerme.alpine\n# \u53ef\u4ee5\u4e0b\u8f7d\u79bb\u7ebf\u4f7f\u7528\nansible-galaxy collection download wenerme.alpine\n\n# \u53ef\u4ee5\u76f4\u63a5\u5b89\u88c5 tar\uff0c\u53ef\u4ee5\u6307\u5b9a\u76ee\u5f55\n# \u76ee\u5f55\u4f1a\u6dfb\u52a0 ansible_collections\nansible-galaxy collection install my_namespace-my_collection-1.0.0.tar.gz -p ./collections\n\n# \u53ef\u4ee5\u9650\u5b9a\u7248\u672c\nansible-galaxy collection install 'my_namespace.my_collection:>=1.0.0,<2.0.0'\n\n# \u80fd\u4ece\u4ed3\u5e93\u5b89\u88c5\n# \u4e5f\u65b9\u4fbf\u4f7f\u7528\u79c1\u6709 collection\nansible-galaxy collection install git+https://github.com/organization/repo_name.git,devel\nansible-galaxy collection install git@github.com:organization/repo_name.git\nansible-galaxy collection install git+file:///home/user/path/to/repo/.git\n\n# \u5b89\u88c5\u4f9d\u8d56\n# \u7b49\u540c\u4e8e ansible-galaxy role install -r + ansible-galaxy collection install -r\nansible-galaxy install -r requirements.yml\n# \u53ef\u4ee5\u4e0b\u8f7d\u6240\u6709\u4f9d\u8d56\nansible-galaxy collection download -r requirements.yml\n\n# \u67e5\u770b\u5df2\u5b89\u88c5\nansible-galaxy collection list\n# \b\u67e5\u770b\u76ee\u5f55\u4e0b\u5185\u5bb9\nansible-galaxy collection list -p '/opt/ansible/collections:/etc/ansible/collections'\n# \u9a8c\u8bc1\nansible-galaxy collection verify wenerme.alpine -vvv\n")),(0,o.kt)("h2",{id:"dev"},"dev"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.ansible.com/ansible/latest/dev_guide/developing_collections.html"},"Developing collections"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-galaxy collection init my_namespace.my_collection\n")),(0,o.kt)("h2",{id:"lint"},"lint"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u6240\u6709\u89c4\u5219\nansible-lint -L\n# \u53ea\u6267\u884c\u90e8\u5206\u89c4\u5219\nansible-lint --enable-list command-instead-of-shell\n\n# auto lint\nansible-lint\n")),(0,o.kt)("h2",{id:"playbook"},"playbook"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# FQDN\n- hosts: all\n  tasks:\n  - my_namespace.my_collection.mymodule:\n      option1: value\n  - import_role:\n      name: my_namespace.my_collection.role1\n  - debug:\n      msg: '{{ lookup(\"my_namespace.my_collection.lookup1\", 'param1')| my_namespace.my_collection.filter1 }}'\n---\n# use collections\n- hosts: all\n  collections:\n  - my_namespace.my_collection\n  tasks:\n  - import_role:\n      name: role1\n  - mymodule:\n      option1: value\n  - debug:\n      msg: '{{ lookup(\"my_namespace.my_collection.lookup1\", 'param1')| my_namespace.my_collection.filter1 }}'\n")),(0,o.kt)("h2",{id:"requirementsyml"},"requirements.yml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Ansible Galaxy \u89d2\u8272\nroles:\n  - name: geerlingguy.java\n    version: 1.9.6\n\ncollections:\n  # \u540d\u5b57\n  - wenerme.alpine\n  # \u8be6\u7ec6\u4fe1\u606f\n  - name: https://github.com/organization/repo_name.git\n    type: git\n    version: devel\n\n  - name: geerlingguy.php_roles\n    version: 0.9.3\n    source: https://galaxy.ansible.com\n")),(0,o.kt)("h2",{id:"ansiblecfg"},"ansible.cfg"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"[default]\n# \u5b89\u88c5\u5230\u5f53\u524d\u76ee\u5f55\n# ./ansible_collections/<namespace>/<collection>\ncollections_paths = ./\n# ./roles/<namespace>.<collection>\nroles_path = ./roles\n\n# \u5b9a\u4e49\u670d\u52a1\u7aef\n[galaxy]\nserver_list = automation_hub, my_org_hub, release_galaxy, test_galaxy\n\n[galaxy_server.automation_hub]\n# url, token, username, password, auth_url\n# ANSIBLE_GALAXY_SERVER_{{ id }}_{{ key }}\nurl=https://cloud.redhat.com/api/automation-hub/\nauth_url=https://sso.redhat.com/auth/realms/redhat-external/protocol/openid-connect/token\ntoken=my_ah_token\n\n[galaxy_server.my_org_hub]\nurl=https://automation.my_org/\nusername=my_user\npassword=my_pass\n\n[galaxy_server.release_galaxy]\nurl=https://galaxy.ansible.com/\ntoken=my_token\n\n[galaxy_server.test_galaxy]\nurl=https://galaxy-dev.ansible.com/\ntoken=my_test_token\n")),(0,o.kt)("h2",{id:"\u5185\u7f6e"},"\u5185\u7f6e"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.ansible.com/ansible/latest/collections/index.html"},"Collection Index"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.ansible.com/ansible/latest/collections/ansible/builtin/index.html"},"ansible.builtin"))))))}u.isMDXComponent=!0}}]);