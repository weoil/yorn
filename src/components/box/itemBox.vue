<template>
  <div class="itemBox">
    <div class="image">
      <img :src="image" :alt="title">
    </div>
    <div class="slot">
      <div class="title">
        {{title}}
      </div>
      <slot class="info">

      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "itemBox",
  props: {
    image: String,
    title: String
  },
  data() {
    return {};
  },
  methods: {},
  components: {},
  computed: {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.itemBox {
  width: 100%;
  margin: 5px;
  // border: 1px solid $shadowColor;
  box-shadow: 1px 1px 5px $shadowColor;
  border-radius: 15px 15px 0 0;
  overflow: hidden;
  &::after {
  }
}
.slot {
  padding: 5px;
  display: flex;
  height: 30%;
  flex-direction: column;
  justify-content: space-between;
  .title {
    font-size: 18px;
    height: 3em;
  }
}
.image {
  width: 100%;
  padding-bottom: 66%;
  position: relative;
  overflow: hidden;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &::after {
  }
}
.title {
  font-size: 18px;
  padding: 5px;
}
.info {
  padding: 5px;
  display: flex;
  justify-content: space-between;
}
</style>
