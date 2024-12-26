// https://nuxt.com/docs/api/configuration/nuxt-config
// 原始配置文件
// export default defineNuxtConfig({
//   compatibilityDate: '2024-11-01',
//   devtools: { enabled: true }
// })

// 自定義配置文件 - 設定全域元件(指定某資料夾下的元件為全域元件(auto-import 自動引入))
export default defineNuxtConfig({
  components: {
    dirs: [
      {
        path: "~/components/global", // 指定 global 資料夹下的元件为全局元件
        global: true,
      },
    ],
  },

  compatibilityDate: "2024-12-27",
});