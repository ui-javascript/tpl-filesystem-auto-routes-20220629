# README

> @ps 基于文件系统的约定式路由 

可以一定程度上帮助偷懒, 但存在限制, 不算特别好用...

# 改进内容

目前fantastic-admin切换成filesystem模式可以不写路由Routes, 但是菜单Menu还是需要手动编写

所以简单地修改了两点

1. 将路由Routes的扁平结构转换成树结构从而生成菜单Menu, 导航 不需要创建对应vue文件, 会自动补充生成, 其Title和Icon就记录在可点击展示内容的 页面子组件 上

2. 在文件名和目录前添加数字前缀, 例如 01-xxx, 用于指定显示时的先后顺序, 但是最终生成的路由和菜单会抹去, 不会影响url显示

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1656547087939-PyZDp4fHayMy-image.png)

# 问题填坑 @faq

- `template下必须有div单节点包裹, 否则会报下面的相关错误`

```
nextSiblings
parentNode
```

- @/views/ 模块下的目录和文件名称命名不要用数字开始(类似变量的命名), 否则抹除数字前缀时可能产生混淆

```
"/00-test/01-page1222/02-psss222".replace(/(^\/\d+-)|\/\d+-/g, "/")

===
"00-test-01-page1222-02-psss222".replace(/(^\d+-)|-\d+/g, "")

"00-test-01-1222page-02-psss222".replace(/(^\d+-)|-\d+/g, "") // 会出错
```

- `如果在开发过程中重命名目录, 可能会出现路由菜单顺序错乱, 重启能解决`

```
这应该是某种缓存...
```


- 导航的 Title和图标只需要一个 页面子组件 指定即可, 免得之后修改展示顺序难以维护

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

- `index路径与导航冲突问题` @todo

```
index.vue的所在的目录是叶子节点
下面不能再嵌套目录了

===
目前的配置规则是:
导航 不创建文件, 它的信息由 页面子组件 记录

07-index-bug-fix/01-bug11/index.vue
07-index-bug-fix/01-bug12/index.vue
07-index-bug-fix/page.vue
这三个文件的公共父导航都是 07-index-bug-fix

而07-index-bug-fix/index.vue == 07-index-bug-fix/index/index.vue 转换成路由后
会和导航 07-index-bug-fix 冲突, 所以不该创建07-index-bug-fix/index.vue

===
@ps single布局好像会吃掉主导航的模块, 没有自动合并 @todo
```


![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1656542157345-i6BfPweKKcpS-image.png)

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1656543233642-yXsY76riECN4-image.png)

- `多层嵌套无子页面而无法指定导航名称问题` @todo

```
想指定每一层的导航名称就要保证每一层导航下有一个可点击的 页面子组件
反映到文件夹结构 就是展开每一层都有至少一个 xxx.vue(index.vue是叶子节点)

===
页面子组件 包括内容+布局两部分, 代码中有个提升内容和布局的粗暴处理

@ps 还好稍微调整下, 大多数情况下可以规避这种情况
```

![](https://luo0412.oss-cn-hangzhou.aliyuncs.com/1656546420814-WSPdHW4TWWQm-image.png)

- 直接文件名带上后缀 @ignore 比 写 meta.enabled: false 方便多了

```
/folder@ignore
index.vue@ignore
```

---

# 参考 @ref

- fantastic-admin
- vite-plugin-pages
