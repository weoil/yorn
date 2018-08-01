import Vue from "vue";
import Vuex from "vuex";
import userModule from "./module/userModule";
// import textModule from "./module/textModule";
// import videoModule from "./module/videoModule";
// import imageModule from "./module/imageModule";
import itemModule from "./module/itemModule";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: userModule,
    // text: textModule,
    // image: imageModule,
    // video: videoModule,
    item: itemModule
  }
});
