<template>
  <div class="warpperBox">
    <slot></slot>
    <div class="watchBottom" v-screen="inBottom" :key="name"></div>
    <Loading :type="1" v-if="loading" />
  </div>
</template>

<script>
import Loading from "@/components/loading/loading";
export default {
  name: "warpperBox",
  props: {
    name: {
      type: String,
      require: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    inBottom() {
      console.log(this.loading);
      if (this.loading) return;
      this.$emit("bottom");
    }
  },
  components: {
    Loading
  },
  computed: {},
  mounted() {}
};
</script>

<style lang="css">
.warpperBox {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
}
.watchBottom {
  position: absolute;
  bottom: 100px;
  width: 100%;
  height: 1px;
}
.loading {
  width: 100%;
  height: 300px;
}
</style>
