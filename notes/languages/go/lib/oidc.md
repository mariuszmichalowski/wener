---
title: OIDC
---

# oidc

- [caos/oidc](https://github.com/caos/oidc)
- 设置环境变量 CAOS_OIDC_DEV 进入开发模式 - 支持 http
- endpoints
  - /healthz
  - /ready
  - /.well-known/openid-configuration
  - /authorize - AuthorizationEndpoint
  - /authorize/callback?id - AuthorizationEndpoint
  - /oauth/token
  - /oauth/introspect - IntrospectionEndpoint
  - /userinfo - UserinfoEndpoint
  - /end_session - EndSessionEndpoint
  - /keys - KeysEndpoint

```bash
# http://localhost:9998/.well-known/openid-configuration
CAOS_OIDC_DEV=1 go run github.com/caos/oidc/example/server/default
# http://localhost:5556/login
CLIENT_ID=web CLIENT_SECRET=web ISSUER=http://localhost:9998/ SCOPES=openid PORT=5556 go run github.com/caos/oidc/example/client/app
```

```pre
http://localhost:9999/authorize?client_id=web&response_type=code&scope=openid&redirect_uri=http://localhost:9999/authorize/callback
```

- mock client
  - web
  - native
  - 其他
- mock login?id=id
- client 也需要设置 dev 模式 - 否则无法回调到 http
