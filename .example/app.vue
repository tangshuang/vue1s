<script setup>
import { ref } from 'vue'

const a = ref('111')

function change() {
  a.value = '222'
}
</script>

<template>
  <div class="a">
    a: <a>{{ a }}</a>
    <button @click="change">change</button>
  </div>
</template>

<style lang="less" scoped>
.a {
  color: red;

  a {
    color: blue;
  }
}
</style>
