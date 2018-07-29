<template>
  <div class="home">
    <Swiper />
    <div class="warpper">
      <column-box title="Video" class="video" color="#2db7f5">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </column-box>
    </div>
  </div>
</template>

<script>
import Swiper from "@/components/swiper/swiper"
import columnBox from "@/components/box/columnBox"
export default {
  name: "home",
  props: {},
  data() {
    return {}
  },
  methods: {},
  components: {
    Swiper,
    columnBox
  },
  computed: {},
  mounted() {}
}
</script>

<style scoped lang="css">
.home {
}
.warpper {
  margin-top: 20px;
}

.video div {
  /* height: 300px; */
  /* width: 400px; */
  background-color: aqua;
}
</style>
