<template>
  <div class="columnBox">
    <div class="title" :style="`--bcolor:${color};`">
      {{title}}
    </div>
    <div :class="`slot ${media?'media ':' '}`">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "columnBox",
  props: {
    title: {
      require: true,
      type: String
    },
    color: {
      type: String,
      default: "#8c0776"
    },
    media: {
      type: Boolean,
      default: true
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
.columnBox {
}
.title {
  --bcolor: #fff;
  position: sticky;
  z-index: 3;
  top: 60px;
  height: 40px;
  line-height: 40px;
  color: #fff;
  background-color: var(--bcolor);
  font-size: 22px;
  padding-left: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  // position: relative;
  &::after,
  &::before {
    content: "";
    display: block;
    position: absolute;
    border-style: solid;
    border-width: 50px 20px 0px;
    z-index: -1;
    border-color: var(--bcolor) transparent transparent;
    bottom: -12px;
    left: 20px;
  }
  &::after {
    left: auto;
    right: 20px;
  }
}
.slot {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid rgb(202, 202, 202);
  & > div {
    flex: 1;
    margin: 5px;
    width: 50%;
  }
}
.media {
  & > div {
  }
  @media screen and (min-width: 1280px) {
    & > div {
      flex-basis: 22%;
    }
  }
  @media screen and (min-width: 997px) and (max-width: 1279px) {
    & > div {
      flex-basis: 30%;
    }
  }
  @media screen and (max-width: 996px) {
    & > div {
      flex-basis: 44%;
    }
  }
  @media screen and (max-width: 768px) {
    & > div {
      flex-basis: 100%;
    }
  }
}
</style>
