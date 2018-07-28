import Vue from "vue"
import App from "./App.vue"
import router from "@/router"
import iView from "iview"
import store from "@/store"
import lodash from "lodash"
import xhr from "@/util/xhr"
import "@/assets/iview.less"
Vue.config.productionTip = false
Vue.use(iView)
Vue.prototype.$xhr = xhr
Vue.prototype._ = lodash
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
