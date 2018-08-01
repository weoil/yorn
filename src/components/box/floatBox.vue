<template>
  <div class="floatBox" :style="`--color:${color}`">
    <div class="floatBox-title">
      {{title}}
    </div>
    <div class="slot">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "floatBox",
  props: {
    title: {
      type: String,
      require: true
    },
    color: {
      type: String,
      default: "rgb(241, 134, 134)"
    }
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
.floatBox {
  cursor: auto;
  --color: rgb(241, 134, 134);
  position: absolute;
  z-index: 999;
  background-color: #fff;
  width: 400px;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
  border-radius: 15px;

  &::after {
    content: "";
    position: absolute;
    top: -1px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    border-width: 7px 7px 0px;
    border-style: solid;
    border-color: #fff transparent transparent;
  }
}
.floatBox-title {
  font-size: 14px;
  padding: 0 15px;
  color: #fff;
  text-align: center;
  border-radius: 15px 15px 0 0;
  background-color: var(--color);
}
.slot {
  padding: 10px 10px;
  border: 1px solid var(--color);
  box-shadow: 1px 4px 3px -var(--color);
  border-top: none;
  font-size: 16px;
}
</style>
