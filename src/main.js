import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import iView from "iview";
import store from "@/store";
import lodash from "lodash";
import xhr from "@/util/xhr";
import sr from "scrollreveal";
import dayjs from "dayjs";
import "@/util/directive";
import "@/assets/iview.less";
import "@/util/mock.js";
Vue.config.productionTip = false;
Vue.use(iView);
Vue.prototype.$_store = store;
Vue.prototype.$_router = router;
Vue.prototype.$format = (date, format = "YYYY-MM-DD hh:mm") =>
  dayjs(date).format(format);
Vue.prototype.$xhr = xhr;
Vue.prototype._ = lodash;
Vue.prototype.$sr = sr();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
