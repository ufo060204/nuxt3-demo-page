<script setup lang="ts">
// 有自動引入組件就不用手動引入
// import Home from '@/components/Home.vue'

// composable 具有 auto import 功能
const { count, addCount } = useAddCount();
</script>

<template>
  <div>
    <h1>首頁：{{ count }}</h1>
    <button @click="addCount">+1</button>
    <Home />
    <Box />
  </div>
</template>

<style scoped></style>
