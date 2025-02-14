---
title: Intellij IDEA
---

# Intellij IDEA

## 实现自定义语言插件

- [Custom Language Support Tutorial](http://www.jetbrains.org/intellij/sdk/docs/tutorials/custom_language_support_tutorial.html)
- Language and File Type
- Syntax Highlighter and Color Settings Page
- Annotator
- Line Marker Provider
- Completion Contributor
- Reference Contributor
- Find Usages Provider
- Folding Builder
- Go To Symbol Contributor
- Structure View Factory
- Formatter
- Code Style Settings
- Commenter
- Quick Fix

## Grammar-Kit

- [JetBrains/Grammar-Kit](https://github.com/JetBrains/Grammar-Kit)
- BNF 基于 PEG
- 使用 JFlex 做词法解析
- Antlr 生成 Psi
  - [antlr/jetbrains](https://github.com/antlr/jetbrains)
    - 提供 Antlr 到 Psi 的适配
  - [antlr/intellij-plugin-v4](https://github.com/antlr/intellij-plugin-v4)
    - Antlr 的插件是基于 Antlr 实现的

## Diff

```bash
idea diff path1 path2 path3
```

## Github Copilot IDEA Shortcut

|                                              key | for            |
| -----------------------------------------------: | -------------- |
|                                   <kbd>Tab</kbd> | 接受建议       |
|                                   <kbd>Esc</kbd> | 取消建议       |
|         <kbd>Alt + ]</kbd>,<kbd>Option + ]</kbd> | 下一个建议     |
|         <kbd>Alt + [</kbd>,<kbd>Option + [</kbd> | 上一个建议     |
|         <kbd>Alt + \</kbd>,<kbd>Option + \</kbd> | 触发建议       |
| <kbd>Alt + Enter</kbd>,<kbd>Option + Enter</kbd> | 显示建议侧边栏 |
