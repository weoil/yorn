import axios from "axios";
import Vue from "vue";
// const { $store, $router } = self;

let baseApi;
if (process.env.NODE_ENV === "production") {
  baseApi = "http://104.128.237.183:3000/api";
} else {
  baseApi = "http://192.168.50.2:3000/api";
}

const instance = axios.create({
  baseURL: baseApi
});
instance.interceptors.request.use(config => {
  let store = Vue.prototype.$_store;
  if (store.state.user.token) {
    config.headers["x-access-token"] = store.state.user.token;
  }
  if (
    store.state.user.expire < Date.now() + 1000 * 60 * 10 &&
    !config.url.includes("/user/refresh")
  ) {
    store.dispatch("refresh");
  }
  return config;
});
instance.interceptors.response.use(res => {
  let store = Vue.prototype.$_store,
    router = Vue.prototype.$_router;
  if (res.data.code === 401) {
    store.state.user.token = "";
    store.state.user.expire = 0;
    router.push("/login");
  }
  return res.data;
});
export default instance;
