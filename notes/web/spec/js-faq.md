---
title: JavaScript 常见问题
tags:
  - FAQ
---

# JavaScript 常见问题

## Date.toJSON include timezone

```js
// 默认 toJSON 为 UTC
const now = new Date(2021, 12, 12, 0, 0, 0);
// now.getTimezoneOffset() // local timezone offset
console.assert(now.toJSON() === now.toISOString());
JSON.stringify({ now });

Date.prototype.toJSON = function () {
  // return moment(this).format();
  // return format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx") // date-fns
  return dayjs(this).format();
};
```

| method                                               | format                        |
| ---------------------------------------------------- | ----------------------------- |
| now.toJSON()                                         | 2022-01-11T16:00:00.000Z      |
| moment(now).format()                                 | 2022-01-12T00:00:00+08:00     |
| dayjs(now).format()                                  | 2022-01-12T00:00:00+08:00     |
| date-fns format(now, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx") | 2022-01-12T00:00:00.000+08:00 |

## tbody to array

```js
Array.prototype.map.call($0.querySelectorAll('tr'), ($tr) =>
  Array.prototype.map.call($tr.querySelectorAll('td'), ($td) => $td.innerText),
);
```

## Primitive vs Object

- [Primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
  - primitive value, primitive data type
  - 不是对象，没有方法，**不可变**
  - 7 种类型 - string, number, bigint, boolean, undefined, symbol, null
  - 除了 null 和 undefined 都有封装类型 - String, Number, BigInt, Boolean, Symbol
- Object
  - 非 Primitive
  - 集成自 Object.prototype
  - Object.create(null)
  - JS 中 **数组为对象**
- typeof
  - 会返回 function, undefined, object, string, number, boolean, bigint, symbol
  - `typeof null` 会返回 `object`

```js
// 最简单直接判断
typeof obj === 'object' && obj !== null;

// 判断是否为对象 - 非 Prim
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
function isObject(obj) {
  return obj === Object(obj);
}

// 在 Object.prototype, Object.create(null) 返回 false
val instanceof Object;
// null 返回 true
typeof val === 'object';
```

- 参考
  - 性能对比 [typeof vs Object()](https://jsbench.me/epk80dx8xr/1)
    - typeof 更快

## substr vs substring

- [substr]`(startPos, newLen)`
  - 废弃
- `substring(startPos, endPos)`
  - `substr(startPos, newLen)` -> `substring(startPos, startPos+newLen)`

[substr]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
[string.prototype.substr]: https://tc39.es/ecma262/#sec-string.prototype.substr
