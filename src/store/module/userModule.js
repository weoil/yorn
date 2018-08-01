import Vue from "vue";
import $ from "@/util/xhr.js";
const state = {
  username: "",
  loginDate: "",
  token: "",
  expire: 0,
  lastRecordKey: "",
  record: [],
  star: [],
  redirect: "/"
};
const mutations = {
  setToken(state, { token, expire }) {
    state.token = token;
    state.expire = expire;
    localStorage.setItem("token", token);
    localStorage.setItem("expire", expire);
  },
  setStar(state, { type, id, title }) {
    let finded = false;
    for (let star of state.star) {
      if (star["type"] === type) {
        star["data"].push({ id, title });
        finded = true;
      }
    }
    if (!finded) {
      state.star.push({ type: type, data: [{ id, title }] });
    }
  },
  setRecord(state, { key, data }) {
    state.record.push({ key, data });
  },
  setPosition(state, { key, position }) {
    for (let r of state.record) {
      if (r["key"] === key) {
        r["data"]["position"] = position;
      }
    }
  }
};
const actions = {
  star({ commit }, payload) {
    //type,id,title
    payload["date"] = Date.now();
    return $.post("/user/star", payload).then(() => {
      commit("setStarItem", payload);
    });
  },
  fetchStar({ commit }) {
    return $.get("/user/star").then(data => {
      data = data.data;
      data.forEach(v => {
        let { type, data } = v;
        data.forEach(s => {
          commit("setStar", { type, ...s });
        });
      });
    });
  },
  record({ commit }, { type, id, position, title }) {
    let key = type + ":" + id;
    if (key === state.lastRecordKey) {
      return;
    }
    state.lastRecordKey = key;
    let data = {
      key: key,
      data: { position: position, title: title, date: Date.now() }
    };
    return $.post("/user/record", data).then(() => {
      commit("setRecord", data);
    });
  },
  updateRecord({ commit }, { type, id, position }) {
    let data = { key: type + id, position };
    return $.post("/user/record/position", data).then(() => {
      commit("setPosition", data);
    });
  },
  fetchRecord({ commit }) {
    return $.get("/user/record").then(data => {
      //[type:[]]
      data = data.data;
      data.forEach(r => {
        commit("setRecord", { key: r.key, data: r.data });
      });
    });
  },
  async token({ commit }, payload) {
    if (payload && payload["token"] && payload["expire"] > Date.now()) {
      commit("setToken", payload);
    }
  },
  async refresh({ commit }) {
    let r = await $.post("/user/refresh");
    if (r.code === 200) {
      commit("setToken", { token: r.data.token, expire: r.data.expire });
    }
  }
};

export default {
  state,
  mutations,
  actions
};

// item={
//   star:{"type":[{
//     id:"",
//     title:""
//   }]},
//   record:{
//     "type+id":data={
//       position:xxx,
//       date:xxx
//     }
//   }
// }
