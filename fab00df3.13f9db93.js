(window.webpackJsonp=window.webpackJsonp||[]).push([[1050],{1123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return i}));var a=n(3),l=n(8),r=(n(0),n(1151)),c={id:"vault",title:"Vault"},u={unversionedId:"ops/service/vault",id:"ops/service/vault",isDocsHomePage:!1,title:"Vault",description:"- hashicorp/vault \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/ops/service/vault.md",slug:"/ops/service/vault",permalink:"/notes/ops/service/vault",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/service/vault.md",version:"current",sidebar:"docs",previous:{title:"Vault \u5bc6\u94a5\u5f15\u64ce",permalink:"/notes/ops/service/vault-secret"},next:{title:"\u786c\u4ef6\u8bcd\u6c47",permalink:"/notes/hardware/glossary"}},o=[{value:"\u57fa\u7840\u64cd\u4f5c",id:"\u57fa\u7840\u64cd\u4f5c",children:[]},{value:"approle",id:"approle",children:[]},{value:"vault agent",id:"vault-agent",children:[]},{value:"Consul Secret",id:"consul-secret",children:[]},{value:"PostgreSQL \u5b58\u50a8",id:"postgresql-\u5b58\u50a8",children:[]},{value:"\u5bc6\u7801\u751f\u6210",id:"\u5bc6\u7801\u751f\u6210",children:[]},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]},{value:"Consul vs Vault",id:"consul-vs-vault",children:[]}],s={toc:o};function i(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/hashicorp/vault"},"hashicorp/vault")," \u662f\u4ec0\u4e48\uff1f",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u63d0\u4f9b\u5bc6\u94a5\u7ba1\u7406\u3001\u8bc1\u4e66\u7ba1\u7406\u3001\u5916\u90e8\u6388\u6743\u96c6\u6210"),Object(r.b)("li",{parentName:"ul"},"\u63d0\u4f9b\u89d2\u8272\u8bbf\u95ee\u5bc6\u94a5\u6743\u9650\u63a7\u5236"),Object(r.b)("li",{parentName:"ul"},"\u5b9e\u73b0 CA \u670d\u52a1"),Object(r.b)("li",{parentName:"ul"},"Secret as a Service - \u5bc6\u94a5\u5373\u670d\u52a1",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u4f8b\u5982 \u963f\u91cc\u4e91 KMS\u3001AWS KMS"))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.vaultproject.io/"},"Vault project")),Object(r.b)("li",{parentName:"ul"},"\u4e3a\u4ec0\u4e48\u4f7f\u7528 Vault",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u907f\u514d\u5bc6\u94a5\u5230\u5904\u653e"),Object(r.b)("li",{parentName:"ul"},"\u63d0\u4f9b\u52a8\u6001\u5bc6\u94a5"),Object(r.b)("li",{parentName:"ul"},"\u52a0\u5bc6\u670d\u52a1"),Object(r.b)("li",{parentName:"ul"},"\u5ba1\u8ba1\u65e5\u5fd7"),Object(r.b)("li",{parentName:"ul"},"\u4fbf\u4e8e\u64a4\u9500\u8bbf\u95ee"),Object(r.b)("li",{parentName:"ul"},"\u670d\u52a1\u5e94\u7528\u96c6\u6210",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u4f8b\u5982 \u81ea\u52a8\u521b\u5efa db \u8d26\u53f7\u5bc6\u7801\u3001SSH \u5bc6\u94a5\u7ba1\u7406"))))),Object(r.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u670d\u52a1\u7aef\u53e3 8200"),Object(r.b)("li",{parentName:"ul"},"\u652f\u6301\u591a\u79cd\u6388\u6743\u65b9\u5f0f",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"AppRole"),Object(r.b)("li",{parentName:"ul"},"alicloud"),Object(r.b)("li",{parentName:"ul"},"LDAP"),Object(r.b)("li",{parentName:"ul"},"GitHub"),Object(r.b)("li",{parentName:"ul"},"JWT/OIDC"),Object(r.b)("li",{parentName:"ul"},"RADIUS"),Object(r.b)("li",{parentName:"ul"},"Username/Password"),Object(r.b)("li",{parentName:"ul"},"Tokens"),Object(r.b)("li",{parentName:"ul"},"Kubernetes"),Object(r.b)("li",{parentName:"ul"},"Kerberos"))),Object(r.b)("li",{parentName:"ul"},"\u652f\u6301\u591a\u79cd\u540e\u7aef\u5b58\u50a8 - consul,etcd,file,inmem,mysql,postgresql,raft,s3,zppkeeper"),Object(r.b)("li",{parentName:"ul"},"\u6982\u5ff5",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u540e\u7aef\u5b58\u50a8",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5b58\u50a8\u7684\u662f Vault \u7684\u4fe1\u606f"))),Object(r.b)("li",{parentName:"ul"},"\u5bc6\u94a5\u5f15\u64ce",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5b58\u50a8\u3001\u751f\u6210\u3001\u52a0\u5bc6\u6570\u636e"),Object(r.b)("li",{parentName:"ul"},"\u88ab\u6302\u8f7d\u5230\u4e00\u4e2a\u76ee\u5f55"),Object(r.b)("li",{parentName:"ul"},"\u90e8\u5206\u76f4\u63a5\u5b58\u50a8\u6570\u636e\uff0c\u90e8\u5206\u4e0e\u5916\u90e8\u7cfb\u7edf\u4ea4\u4e92"),Object(r.b)("li",{parentName:"ul"},"\u751f\u547d\u5468\u671f\uff1a Enable\u3001Disable\u3001Move\u3001Tune",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Tune \u7c7b\u4f3c\u4e8e\u914d\u7f6e"))),Object(r.b)("li",{parentName:"ul"},"\u5f15\u64ce\u53ea\u80fd\u770b\u5230\u6302\u8f7d\u76ee\u5f55\u4e0b\u5185\u5bb9 - \u7c7b\u4f3c\u4e8e chroot"))))),Object(r.b)("li",{parentName:"ul"},"\u73af\u5883\u53d8\u91cf",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"VAULT_ADDR \u670d\u52a1\u7aef\u5730\u5740"),Object(r.b)("li",{parentName:"ul"},"VAULT_TOKEN \u8bf7\u6c42\u7684 Token")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'# macOS\nbrew instal vault\n\n# \u542f\u52a8\u5f00\u53d1\u6a21\u5f0f\u7684\u670d\u52a1 - \u7528\u4e8e\u672c\u5730\u5b9e\u9a8c\n# \u4f1a\u8f93\u51fa root token - \u7528\u4e8e\u767b\u9646\u6388\u6743\n# unseal key\n# \u56fa\u5b9a root token \u65b9\u4fbf\u8c03\u8bd5\nvault server -dev -dev-root-token-id="root"\nexport VAULT_ADDR=\'http://127.0.0.1:8200\'\nvault plugin list\n\n# docker \u542f\u52a8 - \u5f00\u53d1\u6a21\u5f0f\n# VAULT_LOCAL_CONFIG \u53ef\u4ee5\u7528 JSON \u8fdb\u884c\u914d\u7f6e\n# VAULT_DEV_ROOT_TOKEN_ID - \u81ea\u5b9a\u4e49 Token\ndocker run --rm -it \\\n  -p 8200:8200 \\\n  -v $PWD/vault/log:/vault/logs \\\n  -v $PWD/vault/data:/vault/file \\\n  -v $PWD/vault/config:/vault/config \\\n  --cap-add=IPC_LOCK \\\n  --name vault vault\n\n# \u751f\u4ea7\u8fd0\u884c\n# \u5982\u679c\u6570\u636e\u76ee\u5f55\u6ca1\u6709\u6570\u636e - \u90a3\u4e48\u8fdb\u5165 UI \u4f1a\u8fdb\u884c\u521d\u59cb\u5316\ndocker run --rm -it \\\n  -p 8200:8200 \\\n  -v $PWD/vault/log:/vault/logs \\\n  -v $PWD/vault/data:/vault/file \\\n  -v $PWD/vault/config:/vault/config \\\n  -e \'VAULT_LOCAL_CONFIG={"ui":true,"listener":{"tcp":{"address":"0.0.0.0:8200","tls_disable":true}},"backend": {"file": {"path": "/vault/file"}}, "default_lease_ttl": "168h", "max_lease_ttl": "720h"}\' \\\n  --cap-add=IPC_LOCK \\\n  --name vault vault server\n\n# \u5ba2\u6237\u7aef\u7684\u94fe\u63a5\u5730\u5740\nexport VAULT_ADDR=\'http://127.0.0.1:8200\'\n')),Object(r.b)("h2",{id:"\u57fa\u7840\u64cd\u4f5c"},"\u57fa\u7840\u64cd\u4f5c"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'echo \'{"ui":true,"listener":{"tcp":{"address":"0.0.0.0:8200","tls_disable":true}},"backend": {"file": {"path": "vault-file"}}, "default_lease_ttl": "168h", "max_lease_ttl": "720h"}\' > config.json\n# \u542f\u52a8\u670d\u52a1\u7aef\nvault server -config=config.json > vault.log &\nexport VAULT_ADDR=\'http://127.0.0.1:8200\'\nvault init -key-shares=2 -key-threshold=1\nvault unseal\nvault login\n# KV \u5199\u5165\nvault write secret/hello value=world\necho -n \'{"value":"itsasecret"}\' | vault write secret/password -\necho -n "itsasecret" | vault write secret/password value=-\n# { "value": "itsasecret" }\ncat data.json\nvault write secret/password @data.json\n# itsasecret\ncat data.txt\nvault write secret/password value=@data.txt\nvault read secret/hello\nvault read -format=json secret/hello | jq ".data.value" -r\nvault read -field=value secret/password\n')),Object(r.b)("h2",{id:"approle"},"approle"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'# \u5148\u4f7f\u7528 ROOT \u767b\u9646\nvault login\n\n# \u53ea\u8bfb\ncat <<EOF | vault policy write secret-read -\npath "secret/*" {\n  capabilities = [ "read" ]\n}\nEOF\n\ncat <<EOF | vault policy write secret-management -\npath "secret/*" {\n  capabilities = [ "create", "read", "update", "delete", "list" ]\n}\nEOF\n\n# \u542f\u7528 approle\nvault auth enable approle\n\n# macOS \u4e0b\u662f\u5927\u5199\n# \u4e5f\u53ef\u4ee5\u4e0d\u9884\u5b9a\u4e49 ROLE_ID\nROLE_ID=$(uuidgen|tr \'[:upper:]\' \'[:lower:]\')\nvault write auth/approle/role/secret-reader role_id=$ROLE_ID\n# \u8d4b\u4e88\u7b56\u7565\nvault write auth/approle/role/secret-reader policies="secret-read"\n# \u521a\u624d\u521b\u5efa\u7684\u89d2\u8272 ID\nvault read auth/approle/role/secret-reader/role-id\n# secret \u4e0d\u80fd\u67e5\u770b - \u53ef\u4ee5\u4fee\u6539\nvault read auth/approle/role/secret-reader/secret-id\n# \u4ece\u65b0\u751f\u6210 SECRET_ID\n# \u5c06\u7ed3\u679c\u66f4\u65b0\u5230\u53d8\u91cf\nSECRET_ID=$(vault write -f auth/approle/role/secret-reader/secret-id -format=json | jq -r \'.data.secret_id\')\n# \u6dfb\u52a0\u5230\u767b\u9646\n# \u4f1a\u751f\u6210 TOKEN - \u91cd\u590d\u64cd\u4f5c\u4f1a\u751f\u6210\u65b0\u7684 Token \u4f46\u4e4b\u524d\u7684\u4e5f\u4f1a\u6709\u6548\nTOKEN=$(vault write --format=json auth/approle/login role_id=$ROLE_ID secret_id=$SECRET_ID | jq -r \'.auth.client_token\')\n\n# \u9a8c\u8bc1 Token \u6709\u6548\nVAULT_TOKEN=$TOKEN vault read auth/token/lookup-self\n\n# \u5199\u5165\u6d4b\u8bd5\u6570\u636e\nvault secrets enable -path=secret kv\nvault kv put secret/test test_password=$ROLE_ID\n\n# \u4f7f\u7528\u8be5 TOKEN \u67e5\u8be2\nVAULT_TOKEN=$TOKEN vault kv get -field=test_password secret/test\n\n# \u53ef\u4ee5\u5c1d\u8bd5\u5728\u53e6\u5916\u4e00\u4e2a\u4f1a\u8bdd\u4f7f\u7528 TOKEN \u767b\u9646\nvault login $TOKEN\n')),Object(r.b)("h2",{id:"vault-agent"},"vault agent"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u81ea\u52a8\u6388\u6743"),Object(r.b)("li",{parentName:"ul"},"\u7f13\u5b58"),Object(r.b)("li",{parentName:"ul"},"\u6a21\u677f"),Object(r.b)("li",{parentName:"ul"},"Agent \u914d\u7f6e\u5bf9\u8c61\u5b9a\u4e49 ",Object(r.b)("a",{parentName:"li",href:"https://gopkgs.io/src/github.com/hashicorp/vault/command/agent/config/config.go"},"config.go"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'# APP ROLE \u62ff\u5230\u7684\u89d2\u8272\u4fe1\u606f\necho $ROLE_ID > role_id.vault.txt\necho $SECRET_ID > secret_id.vault.txt\n\n# remove_secret_id_file_after_reading - \u9ed8\u8ba4\u4e3a true - secret_id \u8bfb\u53d6\u540e\u4f1a\u88ab\u5220\u9664\ncat <<EOF > agent.json\n{\n  "pid_file": "./vault.pid",\n  "vault": {\n    "address": "$VAULT_ADDR"\n  },\n  "listener": {\n    "tcp": {\n      "address": "0.0.0.0:8200",\n      "tls_disable": true\n    }\n  },\n  "auto_auth": {\n    "method": {\n      "type": "approle",\n      "config": {\n        "role_id_file_path": "role_id.vault.txt",\n        "secret_id_file_path": "secret_id.vault.txt"\n      }\n    },\n    "sink": [\n      {\n        "type": "file",\n        "config": {\n          "path": "./agent-token.file"\n        }\n      }\n    ]\n  },\n  "cache": {\n    "use_auto_auth_token": true\n  }\n}\nEOF\n\nvault agent -config agent.json\n\n# \u4f7f\u7528\u672c\u5730\u548c\u83b7\u53d6\u5230\u7684 Token\nexport VAULT_ADDR=http://127.0.0.1:8200\nVAULT_TOKEN=$(cat agent-token.file) vault read auth/token/lookup-self\n\n# \u767b\u9646\u540e\u5219\u53ef\u4ee5\u4e00\u76f4\u8bbf\u95ee\nvault login $(cat agent-token.file)\nvault read auth/token/lookup-self\n')),Object(r.b)("h2",{id:"consul-secret"},"Consul Secret"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u57fa\u4e8e Consul \u7684 ACL \u7b56\u7565\u52a8\u6001\u751f\u6210 Consul API \u7684 Token"),Object(r.b)("li",{parentName:"ul"},"\u4f9d\u8d56 global-management \u7684 token")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'# \u5982\u679c\u6ca1\u6709\u914d\u7f6e\u8fc7 token\nconsul acl bootstrap\n\n# \u542f\u7528 consul secret\nvault secrets enable consul\n# \u521b\u5efa token\nCONSUL_HTTP_TOKEN=d54fe46a-1f57-a589-3583-6b78e334b03b consul acl token create -policy-name=global-management\n# \u4f7f\u7528\u65b0\u521b\u5efa\u7684 token\nvault write consul/config/access \\\n    address=127.0.0.1:8500 \\\n    token=7652ba4c-0f6e-8e75-5724-5e083d72cfe4\n\n# \u65b0\u589e\u89d2\u8272 - \u5173\u8054\u7b56\u7565\nvault write consul/roles/my-role policy=$(base64 <<< \'key "" { policy = "read" }\')\n# \u89d2\u8272\u5173\u8054\u73b0\u6709\u7b56\u7565\nvault write consul/roles/my-role policies=readonly\n# \u83b7\u53d6\u6388\u6743\u4fe1\u606f\nvault read consul/creds/my-role\n')),Object(r.b)("h2",{id:"postgresql-\u5b58\u50a8"},"PostgreSQL \u5b58\u50a8"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE vault_kv_store (\n  parent_path TEXT COLLATE "C" NOT NULL,\n  path        TEXT COLLATE "C",\n  key         TEXT COLLATE "C",\n  value       BYTEA,\n  CONSTRAINT pkey PRIMARY KEY (path, key)\n);\n\nCREATE INDEX parent_path_idx ON vault_kv_store (parent_path);\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-hcl"},'storage "postgresql" {\n  connection_url = "postgres://user123:secret123!@localhost:5432/vault?sslmode=disable"\n}\n')),Object(r.b)("h2",{id:"\u5bc6\u7801\u751f\u6210"},"\u5bc6\u7801\u751f\u6210"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'vault write sys/plugins/catalog/secrets-gen \\\n  sha_256=$(docker run --rm wener/vault sha256sum /etc/vault/plugins/vault-secrets-gen|cut -d \' \' -f 1) \\\n  command=vault-secrets-gen\n\nvault secrets enable -path=gen -plugin-name=secrets-gen plugin\n\nvault write gen/password length=36 symbols=0\n\nvault write sys/plugins/catalog/secrets-gen \\\n    sha_256="${SHA256}" \\\n    command="vault-secrets-gen"\n')),Object(r.b)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.vaultproject.io/docs/configuration/"},"https://www.vaultproject.io/docs/configuration/"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-hcl"},'# \u5b58\u50a8\nstorage "consul" {\n  address = "127.0.0.1:8500"\n  path    = "vault"\n  # token   = "abcd1234"\n}\n\nlistener "tcp" {\n  address     = "127.0.0.1:8200"\n  tls_disable = 1\n}\n\nui = true\n\n#telemetry {\n#  statsite_address = "127.0.0.1:8125"\n#  disable_hostname = true\n#}\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"vault server -config=vault.hcl\nexport VAULT_ADDR='http://127.0.0.1:8200'\nvault operator init\n# \u8f93\u5165\u6307\u5b9a\u6b21\u6570 unseal token\nvault operator unseal\n# \u4f7f\u7528 root token \u767b\u9646\nvault login\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"consul.acl.json")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "key_prefix": {\n    "vault/": {\n      "policy": "write"\n    }\n  },\n  "node_prefix": {\n    "": {\n      "policy": "write"\n    }\n  },\n  "service": {\n    "vault": {\n      "policy": "write"\n    }\n  },\n  "agent_prefix": {\n    "": {\n      "policy": "write"\n    }\n  },\n  "session_prefix": {\n    "": {\n      "policy": "write"\n    }\n  }\n}\n')),Object(r.b)("h1",{id:"faq"},"FAQ"),Object(r.b)("h2",{id:"consul-vs-vault"},"Consul vs Vault"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u6700\u5927\u7684\u533a\u522b\u662f\u4e00\u4e2a\u5f3a\u8c03\u52a0\u5bc6\u4e00\u4e2a\u5f3a\u8c03\u670d\u52a1\u53d1\u73b0"),Object(r.b)("li",{parentName:"ul"},"Consul \u7684\u914d\u7f6e\u662f KV"),Object(r.b)("li",{parentName:"ul"},"Vault \u7684\u662f\u76ee\u5f55\u683c\u5f0f - \u4e24\u4e2a\u5f62\u5f0f\u4e0a\u6709\u4e9b\u7c7b\u4f3c")))}i.isMDXComponent=!0},1151:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=l.a.createContext({}),i=function(e){var t=l.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=i(e.components);return l.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=i(n),d=a,O=p["".concat(c,".").concat(d)]||p[d]||b[d]||r;return n?l.a.createElement(O,u(u({ref:t},s),{},{components:n})):l.a.createElement(O,u({ref:t},s))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,c[1]=u;for(var s=2;s<r;s++)c[s]=n[s];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);