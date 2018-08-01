<template>
  <div class="Index" v-if="token">
    <div class="view">
      <l-menu/>
      <div class="container">
        <guide :map="guideMap" v-if="$route.fullPath!=='/'" />
        <router-view :key="$route.fullPath"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import LMenu from "@/components/public/menu";
import guide from "@/components/guide/guide";
export default {
  name: "Index",
  props: {},
  data() {
    return {
      guideMap: {
        home: {
          name: "主页",
          to: "/"
        },
        ilist: {
          name: "图片",
          to: "/ilist"
        },
        vlist: {
          name: "影片",
          to: "/vlist"
        },
        tlist: {
          name: "文字",
          to: "/tlist"
        },
        iitem: {
          name: "图片内容",
          to: "/ilist"
        },
        vitem: {
          name: "视频内容",
          to: "/vlist"
        },
        titem: {
          name: "文字内容",
          to: "/tlist"
        }
      }
    };
  },
  methods: {},
  components: {
    LMenu,
    guide
  },
  computed: {
    token() {
      return this.$store.state.user.token;
    }
  },
  mounted() {
    if (!this.token) {
      let token = localStorage.getItem("token"),
        expire = localStorage.getItem("expire");
      if (token && expire && expire > Date.now()) {
        this.$store.dispatch("token", { token, expire });
      } else {
        let path = this.$route.fullPath;
        this.$store.state.user.redirect = path.startsWith("/login")
          ? "/"
          : path;
        this.$router.push("/login");
        return;
      }
    }
    this.$store.dispatch("fetchStar");
    this.$store.dispatch("fetchRecord");
  }
};
</script>

<style scoped lang="scss">
.Index {
}
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>
 <style>
</style>