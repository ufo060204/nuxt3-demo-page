<script setup lang="ts">
// 在 UI 組件中通常還是會用引入的方式清楚知道依賴關係
import Btn from "./Btn.vue";
</script>

<template>
  <div class="box">
    <h1>我是 box UI 組件</h1>
    <Btn />
  </div>
</template>

<style scoped>
.box {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px;
}
</style>
