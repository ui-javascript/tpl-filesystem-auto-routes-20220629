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
- 直接文件名带上后缀 `@ignore` 比 meta.enabled: false 方便多了
- 父导航Title和图标只需要一个子路由页面指定, 因为赋值的先后顺序无法轻松确定, 所以先别搞事, 免得混淆...

```
<route lang="json5">
{
    meta: {
        title: "首页Bug",
        parentTitle: "首页Bug",
        parentIcon: "sidebar-menu",
        layout: "main",
    }
}
</route>
```

- index问题
