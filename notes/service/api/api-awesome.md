---
title: API Awesome
tags:
  - Awesome
---

# API Awesome

## API/RPC 考虑因素

- 灵活
  - 静态结构
  - 动态结构
  - 兼容性
- 性能
  - 延时要求
  - 服务对服务
  - 服务对客户端
- 序列化
  - 二进制
  - 文本 - JSON
- 语言兼容
  - 需要支持什么语言
  - 自用只需考虑个别语言
  - 对外则需要考虑通用
- 接口模式
  - 请求响应
  - 流式请求
  - 流式响应
- 规范
  - 生成友好
  - 元数据信息完整
- 场景
  - 自用 - 满足内部使用即可
  - 对外 - 采用现有标准规范
- 生态
  - 可观察性
    - Metric
    - Trace
  - 网关
  - 中间件感知

## API Gateway 考虑因素

- 管理能力
  - 负责 增删改 Endpoint - vendor lockin
  - 使用现有配置 - 控制能力弱
- 可观察性能力
  - Metric 集成
  - Trace 集成
  - 内置 - 网关采集、内置显示
  - 外部 - grafana、jeager、prometheus
- 控制能力
  - Auth
  - Threshold
  - 注入自定义逻辑 - Hook
- 协议感知能力
  - gRPC
  - HTTP
  - GraphQL
  - TCP、UDP
- 平台集成能力
  - Kubernetes Service、Annotatation
  - Consul Service
  - ETCD、ZK
- 实现模式
  - 无侵入 - 直接网络拦截
    - 网络层处理 - Cilium
  - 侵入 - 修改代码逻辑
    - 中间件 - 集成 metric、trace 等能力
    - SQL Trace
  - Sidecar - 按应用网络拦截
    - 获取基础 metric 信息、可能能实现 trace 能力
    - Agent 能代表应用身份
    - 通常还能实现 E2E 加密认证
- 元数据存储方式
  - CRD
  - DB - PostgreSQL、MySQL - 需要额外维护、但方便排查使用
  - KV - ETCD、ZK

## 规范

- Google [AIP](https://google.aip.dev/general) - API Improvement Proposals
- [Financial-grade API](https://fapi.openid.net)
- [Microsoft Graph](https://docs.microsoft.com/zh-cn/graph/overview)
  - github [microsoftgraph](https://github.com/microsoftgraph)
  - [graph-explorer](https://developer.microsoft.com/zh-cn/graph/graph-explorer)
- [WangNingkai/OLAINDEX](https://github.com/WangNingkai/OLAINDEX)
- https://www.asyncapi.com/docs/specifications/v2.3.0
  - [swaggest/go-asyncapi](https://github.com/swaggest/go-asyncapi)
  - https://medium.com/event-driven-utopia/understanding-asyncapis-with-a-practical-example-ee2b4be221d8
- https://swagger.io/specification/

## RPC

:::caution

- rpc 和 serialization 主要的区别在于 **服务** 是否为第一公民
- 除了 grpc, jsonrpc 其他 rpc 实现基本都是语言相关的
  - 意味着 非第一方语言的支持相对较弱

:::

- JSON RPC
- gRPC
- Thrift
- Avro
- Dubbo
- [json-api/json-api](https://github.com/json-api/json-api)
  - application/vnd.api+json
- [only-cliches/NoProto](https://github.com/only-cliches/NoProto)
  - MIT, Rust
  - Flexible, Fast & Compact Serialization with RPC
- [tal-tech/go-zero](https://github.com/tal-tech/go-zero)
  - 好未来技术
  - 自定义 DSL + goctl 生成
- [cloudwego/kitex](https://github.com/cloudwego/kitex)
  - Apache-2.0, Go
  - 字节跳动 RPC 框架
- [sofastack/sofa-rpc](https://github.com/sofastack/sofa-rpc)
  - Apache-2.0, Java
  - 蚂蚁金服 RPC 框架
- [tarsCloud/tars](https://github.com/tarsCloud/tars)
  - BSD-3, C++
  - 腾讯 RPC 框架
  - 多语言 - Go、Java、NodeJS、PHP、Web

## Serialization

- ASN.1 PER
- Avro, CapnProto, Protobufs, Flatbuffers
- Schema-ful, copying: Protobuf, Thrift, plenty more
- Schema-ful, zero-copy: Cap'n'proto, Flatbuffers
- Schema-less, copying: Json (binary and other variants included), XML
- Schema-less, zero-copy: Flexbuffers (Any others? This seems new to me)
- Avro is also another data serialization format. Schema-Ful,
- Arrow would be schema-ful, zero-copy
- CBOR - Concise Binary Object Representation
  - 与 JSON 混用

## Data Gateway

- Hasura
- graphile
- PostREST
- Prisma2
- [stargate/stargate](https://github.com/stargate/stargate)
  - Java, Apache-2.0
- [urigo/graphql-mesh](https://github.com/urigo/graphql-mesh)
  - GraphQL Adapter
  - 后端支持 GraphQL, JSON Schema, gRPC, Swagger, OpenAPI, SOAP, Postgres, Mongo, OData, Thrift, SQLite, MySQL, Neo4j

## OpenAPI

- [getkin/kin-openapi](https://github.com/getkin/kin-openapi)
  - MIT, Golang
  - OpenAPIv3 for Go

## API Gateway

> API 生命周期管理

- [apache/apisix](https://github.com/apache/apisix)
- [apache/incubator-shenyu](https://github.com/apache/incubator-shenyu)
  - 可扩展、高性能、响应式的 **Java** API 网关
- Kong
- Tyk
- [luraproject/lura](https://github.com/luraproject/lura)
- [How to choose the right API Gateway for your platform](https://www.moesif.com/blog/technical/api-gateways/How-to-Choose-The-Right-API-Gateway-For-Your-Platform-Comparison-Of-Kong-Tyk-Apigee-And-Alternatives/)
- [api-platform/api-platform](https://github.com/api-platform/api-platform)
  - Create REST and GraphQL APIs, scaffold Jamstack webapps, stream changes in real-time.

## Doc

- [slatedocs/slate](https://github.com/slatedocs/slate)
- swagger
- graphql
- OpenAPI

## Tool

- Hoppscotch
- [google/gnostic](https://github.com/google/gnostic)
- [Kong/insomnia](https://github.com/Kong/insomnia)
- [OpenAPITools/openapi-generator](https://github.com/OpenAPITools/openapi-generator)
- [EsperoTech/yaade](https://github.com/EsperoTech/yaade)
  - self-hosted, collaborative API development environment

## 参考

- [public-apis/public-apis](https://github.com/public-apis/public-apis)
- [How Uber Engineering Evaluated JSON Encoding and Compression Algorithms to Put the Squeeze on Trip Data](https://eng.uber.com/trip-data-squeeze-json-encoding-compression/)
  - 2016-02
