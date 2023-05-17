# VUE1S

用1秒钟开始你的vue编程，用于练习、测试、验证于vue相关的一些验证编程场景。

## 使用

```html
<div id="root"></div>

<script type="module">
  import { loadApp, Vue } from 'https://unpkg.com/vue1s'
  // import { loadApp, Vue } from 'https://unpkg.com/vue1s/dist/index.min.js' // 经过压缩，体积更小

  const app = loadApp('./app.vue')
  app.mount('#root')
</script>
```

```html
<script src="https://unpkg.com/vue1s/dist/browser.js"></script>
<script>
  const { loadApp } = window.vue1s
  const app = loadApp('./app.vue')
  app.mount('#root')
</script>
```

- 使用 `type=module`
- 使用`import`时除了`vue`，不可以直接引入包，而应该从url进行import
- 不支持ts
- 支持less
- 引入组件时也是直接import .vue文件
- 从vue1s中引入 `Vue`，而不是另外再引入vue（组件内直接`import { ref } from 'vue'`即可）
- 如果想使用自己的构建逻辑，可以 `import { loadApp } from 'vue1s'`，此时可以共享本地的vue包

`loadApp`第二个参数为配置对象，支持的配置如下：

```
loadApp('./app.vue', {
  // less编辑器的配置，可参考 https://lesscss.org/usage/#less-options
  lessConfig: {},
  // .vue内使用的模块，需要在此处传入进去，在.vue中不能直接import from一个js文件，必须在外部进行传入
  moduleConfig: {},
  // 内部用于抓取的ajax请求函数，必须与fetch功能相同
  fetchFunction: window.fetch,
})
```
