# README

> fantastic-admin 基于文件系统的约定式路由测试

# 改进内容

目前fantastic-admin切换成filesystem模式可以不写路由, 但是menu还是需要手写

所以简单地修改了两点, 进一步帮助偷懒

1. 由路由的扁平结构转换成树结构从而生成菜单, 中间的导航组件不需要创建, 会自动生成, Title和Icon信息就直接记录在子组件上

2. 在文件名和目录前添加数字前缀, 例如 01-xxx, 用于指定显示时的先后顺序, 但是最终生成的路由和菜单会抹去的做这些, 不会影响url

# 问题填坑 @faq

- `template下必须有div单节点包裹, 否则会报下面的相关错误`

```
nextSiblings
parentNode
```

- 页面的模块名称不要用数字开始, 否则抹除数字前缀会出错

```
"/00-test/01-page1222/02-psss222".replace(/(^\/\d+-)|\/\d+-/g, "/")

===
"00-test-01-page1222-02-psss222".replace(/(^\d+-)|-\d+/g, "")

"00-test-01-1222page-02-psss222".replace(/(^\d+-)|-\d+/g, "") // 会出错
```

- `如果在开发过程中重命名目录, 偶尔会出现路由菜单顺序错乱, 一般重启能解决`

```
这应该也是某种缓存吧...
```


- 父导航Title和图标只需要一个子路由页面指定即可, 免得改展示顺序以后又混淆了...

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

- `index路径覆盖失效问题` @todo

```
目前的配置规则是:
非展示页面的导航不应该创建文件, 它的信息由子页面记录
==> (页面组件包括内容+布局两部分, 代码有个提升布局的骚操作, 目前处理地比较粗暴...)

07-index-bug-fix/01-bug11/index.vue
07-index-bug-fix/01-bug12/index.vue
07-index-bug-fix/page.vue
这三个文件的公共父节点都是07-index-bug-fix

而07-index-bug-fix
== 07-index-bug-fix/index.vue
== 07-index-bug-fix/index/index.vue  

这个父节点是导航, 所以不该创建这个文件

===
@ps 当然像下面那样只保留一个index.vue也是可以的
但是目前这个布局组件不支持

但是输入url还是可以显示的
http://localhost:9000/#/index-bug-fix

===
@ps 还有single布局好像会吃掉主导航的模块, 没有自动合并 @todo
```

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1656542157345-i6BfPweKKcpS-image.png)

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1656543233642-yXsY76riECN4-image.png)

- `直接文件名带上后缀 @ignore 比 写 meta.enabled: false 方便多了`

---

# 参考 @ref
