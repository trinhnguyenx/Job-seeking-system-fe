/* eslint-disable prettier/prettier */
import { createApp } from "vue"
// import "./style.less"
import App from "./App.vue"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "./router"
import { createPinia } from "pinia"
import "./assets/css/global.css"
import { initAuthStore } from '@/stores'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
  app.use(router)
  // app.use(Antd)
  app.use(createPinia())
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
  await initAuthStore()
  app.use(ElementPlus)
  router.isReady().then(() => {
        app.mount("#app")
    })