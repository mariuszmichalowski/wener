---
title: fx
---

# fx

- [uber-go/fx](https://github.com/uber-go/fx)
  - 基于反射的动态 IoC 容器
  - 内部为 [uber-go/dig](https://github.com/uber-go/dig) - DI

:::tip

- fx.Supply 不能直接提供 interface
  - Go 类型检测不到, 使用 constructor 返回
- fx.In 和 fx.Out 要求字段 exported

:::

```go
type HandlerParams struct {
  fx.In // consume - 多入参 - 增强可读性

  Users    *UserGateway
  Comments *CommentGateway
  Posts    *PostGateway
  Votes    *VoteGateway
  AuthZ    *AuthZGateway

  Cache *redis.Client `optional:"true"` // 可选参数

  WriteToConn  *sql.DB `name:"rw"`      // 命名
  ReadFromConn *sql.DB `name:"ro" optional:"true"`

  Handlers []Handler `group:"server"`   // 多实例 - 不保证顺序
}

type ConnectionResult struct {
  fx.Out // provide

  ReadWrite *sql.DB `name:"rw"`
  ReadOnly  *sql.DB `name:"ro"`

  Handler Handler `group:"server"`

  Handler []int `group:"server"`         // Consume as [][]int
  Handler []int `group:"server,flatten"` // Consume as []int
}

func NewConnection(p HandlerParams) ConnectionResult {
  // ...
}

// 可以直接使用 Annotated 配置名字和分组
fx.Provide(fx.Annotated{
  Name: "ro",
  Group: "server",
  Target: NewReadOnlyConnection,
})
```
