<template>
  <div class="Index">
    <div class="view">
      <l-menu/>
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import LMenu from "@/components/public/menu"
export default {
  name: "Index",
  props: {},
  data() {
    return {}
  },
  methods: {},
  components: {
    LMenu
  },
  computed: {},
  mounted() {}
}
</script>

<style scoped lang="scss">
.Index {
}
.container {
  max-width: 1280px;
  margin: 0 auto;
}
</style>
 <style>
</style>