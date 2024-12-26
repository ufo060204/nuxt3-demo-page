// 具有 auto-import 功能，所以可以直接使用不用引入
// import { ref } from 'vue'

export const useAddCount = () => {
    const count = ref(0)
    const addCount = () => {
      count.value++
    }
    return {
      count,
      addCount,
    }
  }
