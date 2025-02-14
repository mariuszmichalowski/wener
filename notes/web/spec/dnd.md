---
title: Drag & Drop
---

# Drag & Drop

- [HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)

| event     |
| --------- | ------------------------- |
| drag      | 拖动元素                  |
| dragend   | 拖动结束                  |
| dragenter | 拖动元素进入 可 drop 区域 |
| dragleave | 离开 drop 目标            |
| dragover  |
| dragstart | 开始拖动一个元素          |
| drop      | drop 元素                 |

- 定义了 ondragover, ondrop 表示为可 drop 区域
- e.dataTransfer.dropEffect
  - copy
  - move
  - link

```js
function onDragStart(ev) {
  // 限定
  ev.dataTransfer.setData('application/my-app', ev.target.id);
  ev.dataTransfer.effectAllowed = 'move';

  // 检测文件
  const isFiles = ev.dataTransfer.types.indexOf('Files') >= 0;
}
```
