---
title: C Awesome
tags:
  - Awesome
---

# C Awesome

- [tccboot](https://bellard.org/tcc/tccboot.html) - TinyCC Boot Loader
- [simdjson/simdjson](https://github.com/simdjson/simdjson)
- [yue/yue](https://github.com/yue/yue)
- https://cppinsights.io/
- https://c2rust.com/
- https://c9x.me/compile/
- Writing a register based VM in less than 125 lines of C code
  - https://news.ycombinator.com/item?id=29492183
- Address Sanitizer
- [valgrind](https://valgrind.org/)
  - 内存溢出检测
  - 源码 [valgrind](https://sourceware.org/git/valgrind)
  - 通过 LD_PRELOAD

## GL

- [rswinkle/PortableGL](https://github.com/rswinkle/PortableGL)
  - implementation of OpenGL 3.x-ish in clean C
  - [HN](https://news.ycombinator.com/item?id=29745029)

## Version

- C89,C90 - ANSI C
- [C99](https://en.wikipedia.org/wiki/C99)
  - ISO/IEC 9899:1999
- [C11](https://en.wikipedia.org/wiki/C11_(C_standard_revision))
  - ISO/IEC 9899:2011
- [C17](https://en.wikipedia.org/wiki/C17_(C_standard_revision))
- C23

```c
void c89(){
  int i;
  for(i = 0; i < 10; i++) {
  }
}

void c99(){
  for(int i = 0; i < 10; i++) {
  }
}
```
