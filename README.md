# README

- template下必须有div单节点包裹, 否则会报错

```
nextSiblings
parentNode
```

- 路径替换前置的排序数字时, 要保证模块名不以数字开始

```
"/00-test/01-page1222/02-psss222".replace(/(^\/\d+-)|\/\d+-/g, "/")

===
"00-test-01-page1222-02-psss222".replace(/(^\d+-)|-\d+/g, "")
```

- 开发中重命名目录, 偶尔会出现路由菜单顺序错乱, 一般重启就能解决
