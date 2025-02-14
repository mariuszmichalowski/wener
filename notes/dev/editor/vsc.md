---
title: Visual Studio Code
---

# Visual Studio Code

| 快捷键                  | 说明         |
| ----------------------- | ------------ |
| <kbd>Ctrl+-</kbd>       | 后退编辑位置 |
| <kbd>Shift+Ctrl+-</kbd> | 前进编辑位置 |

## 插件

- [zenclabs/previewjs](https://github.com/zenclabs/previewjs)
  - Preview React, Vue

### Remote Development

- [ms-vscode-remote.vscode-remote-extensionpack](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)
- 支持远程开发
  - WSL
  - 容器
  - SSH
    - ~还不支持 macOS [#24](https://github.com/microsoft/vscode-remote-release/issues/24)~
    - 不支持 musl AlpineLinux
      - insider 版本似乎支持 [#54](https://github.com/microsoft/vscode-remote-release/issues/54#issuecomment-504385332)
      - musl 支持 [#423](https://github.com/microsoft/vscode-remote-release/issues/423)

```bash
# macOS 可通过容器来提供端口进行控制
docker run -d -p 2222:22 -v $HOME:/host --name sshd wener/app
docker exec sshd sh -c 'echo admin:admin | chpasswd'

docker exec sshd apk add musl libgcc libstdc++
# 测试本地登录
ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null admin@127.0.0.1 -p 2222

# glibc

# 远程打开
# code --remote ssh-remote+root@server.com <your-directory>
```

### code-server

- [cdr/code-server](https://github.com/cdr/code-server)

## setting

```json
{
  "files.associations": {
    "*.md": "mdx"
  }
}
```
