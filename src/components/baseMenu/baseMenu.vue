<template>
  <div class="baseMenu">
    <Menu :mode="min?'vertical':'horizontal'" :style="`width:100%;height:${height}px;`" accordion @on-select="select">
      <div class="container" :class="min?'vertical':''" :style="`max-width:${width}px`">
        <div class="header">
          <div class="logo">
            <slot></slot>
          </div>
          <slot v-if="min" name="right" class="right"></slot>
          <div class="down" v-show="min" @click="cshow=!cshow">
            <Icon type="navicon-round"></Icon>
          </div>
        </div>
        <transition name="nav">
          <div class="nav" v-if="min?cshow:true">
            <base-menu-item :data="data"></base-menu-item>
          </div>
        </transition>
        <slot v-if="!min" name="right" class="right"></slot>
      </div>
    </Menu>
  </div>
</template>

<script>
import baseMenuItem from "./baseMenuItem";
export default {
  name: "baseMenu",
  props: {
    data: Array,
    minWidth: {
      type: Number,
      default: 768
    },
    height: {
      type: Number,
      default: 60
    },
    width: {
      type: Number,
      default: 1280
    }
  },
  data() {
    return {
      min: false,
      cshow: false
    };
  },
  methods: {
    query() {
      this.min = window.innerWidth < this.minWidth;
      this.cshow = false;
    },
    select(name) {
      if (this.min) this.cshow = false;
      this.$emit("select", name);
    }
  },
  components: {
    baseMenuItem
  },
  computed: {},
  mounted() {
    this.query();
    window.addEventListener("resize", this._.throttle(this.query, 400));
  }
};
</script>

<style scoped lang="less">
.baseMenu {
  position: sticky;
  top: 0;
  z-index: 9;
  margin-bottom: 20px;
}
.container {
  margin: 0 auto;
  font-size: 18px;
}
.container,
.header {
  display: flex;
  // justify-content: space-between;
}
.header {
  justify-content: space-between;
  padding: 0 15px;
  flex: 1;
}

.vertical {
  flex-direction: column;
  justify-content: center;
  box-shadow: 1px 1px 2px #ddd;
  .header {
    line-height: 60px;
    align-items: center;
    /* border-bottom: 1px solid #ccc; */
  }
  .nav {
    // overflow: hidden;
    position: relative;
    z-index: 9;
    background-color: #fff;
    li {
      border-bottom: 1px solid #ccc;
    }
  }
  .nav-enter-active,
  .nav-leave-active {
    transition: all 0.4s;
  }
  .nav-enter,
  .nav-leave {
    opacity: 0;
  }
}
</style>
