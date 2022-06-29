# README

- template下必须有div单节点包裹, 否则会报错
- 路径替换

```
"/00-test/01-page1222/02-psss222".replace(/(^\/\d+-)|\/\d+-/g, "/")

===
"00-test-01-page1222-02-psss222".replace(/(^\d+-)|-\d+/g, "")
```
