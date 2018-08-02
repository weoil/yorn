import $ from "@/util/xhr";
import Vue from "vue";
const state = {
  list: {},
  item: {},
  home: {},
  search: {}
};
const mutations = {
  setList(state, { key, type, page, data }) {
    if (!state.list[key]) Vue.set(state.list, key, {});
    if (!state.list[key][type]) Vue.set(state.list[key], type, {});
    Vue.set(state.list[key][type], page, data);
  },
  setItem(state, { key, id, data }) {
    if (!state.item[key]) Vue.set(state.item, key, {});
    Vue.set(state.item[key], id, data);
  },
  setHome(state, payload) {
    state.home = payload;
  },
  setSearch(state, { str, page, data }) {
    Vue.set(state.search, str + page, data);
  }
};
const actions = {
  async getList({ commit, state }, { key, type, page }) {
    if (
      state.list[key] &&
      state.list[key][type] &&
      state.list[key][type][page]
    ) {
      return Promise.resolve(state.list[key][type][page]);
    }
    let res = await $(`/list/${key}/${type}/${page}`);
    let data = res.data;
    commit("setList", { key, type, page, data: data });
    return Promise.resolve(data);
  },
  async getItem({ commit, state }, { key, id }) {
    if (state.item[key] && state.item[key][id]) {
      return Promise.resolve(state.item[key][id]);
    }
    let res = await $(`/${key}/${id}`);
    let data = res.data;
    commit("setItem", { key, id, data });
    return Promise.resolve(data);
  },
  async fetchHome({ commit, state }) {
    if (state.home && state.home["image"]) {
      return Promise.resolve(state.home);
    } else {
      let r = await $.get("/home");
      commit("setHome", r.data);
      return Promise.resolve(r.data);
    }
  },
  async search({ commit, state }, { str, page }) {
    console.log(str + page);
    console.log(state.search[str + page]);
    if (state.search[str + page]) {
      return Promise.resolve(state.search[str + page]);
    } else {
      let r = await $.get(`/search/${str}/${page}`);
      commit("setSearch", { str, page, data: r.data });
      return Promise.resolve(r.data);
    }
  }
};

export default {
  state,
  mutations,
  actions
};
