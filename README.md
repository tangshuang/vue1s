# VUE1S

用1秒钟开始你的vue编程，用于练习、测试、验证于vue相关的一些验证编程场景。

## 使用

```html
<div id="root"></div>

<script type="module">
  import { loadApp } from 'https://unpkg.com/vue1s'

  const app = loadApp('./app.vue')
  app.mount('#root')
</script>
```
