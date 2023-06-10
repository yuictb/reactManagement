import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import uView from '@/uni_modules/uview-ui'
import store from "@/store";

// #ifdef MP-WEIXIN
import tabBar from '@/components/tabbar/TabBar.vue'
// #endif

Vue.use(uView)
Vue.use(store)
Vue.config.productionTip = false
Vue.prototype.$store = store;
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
  createSSRApp
} from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app,
    store
  }
}
// #endif
