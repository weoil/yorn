<template>
  <div class="waterFallWarpper" ref="warpper">
    <slot></slot>
    <div class="bottom" :style="`--offset:${offset}px`" v-screen="show" :key="name||'waterFall'"></div>
  </div>
</template>

<script>
export default {
  name: "waterFallWarpper",
  props: {
    name: String,
    offset: {
      type: Number,
      default: 300
    }
  },
  data() {
    return {
      warpperWidth: 0,
      elWidth: 0,
      columnCount: 0,
      marginWidth: 5,
      index: 0,
      minHeights: []
    };
  },
  methods: {
    init() {
      this.index = 0;
      this.minHeights = [];
      try {
        let ww = (this.warpperWidth = this.$refs.warpper.offsetWidth);
        let ew = this.$slots["default"][0].elm.offsetWidth;
        this.columnCount = parseInt(ww / ew);
        let margin = ww / this.columnCount - ew;
        // margin /= this.columnCount;
        this.marginWidth = margin;
        this.elWidth = ew;
        this.initItem();
      } catch (e) {}
    },
    initItem() {
      this.$slots["default"].forEach((vnode, index) => {
        if (index < this.index) return;
        let el = vnode.elm;
        el.style = "visibility: hidden;";
        let img = el.querySelector("img");
        if (img.height) {
          this.sort(el);
        } else {
          img.onload = () => {
            this.$nextTick(() => {
              this.sort(el);
            });
          };
        }
      });
    },
    sort(el) {
      let ew = this.elWidth;
      let minHeights = this.minHeights;
      let index = this.index;
      if (index < this.columnCount) {
        let left = (this.marginWidth + ew) * index;
        el.style = `top:0px;left:${left}px`;
        minHeights.push({ height: el.offsetHeight, left: left });
      } else {
        let minHeight = minHeights[0]["height"];
        let mindex = 0;
        for (let i = 1; i < minHeights.length; i++) {
          if (minHeights[i]["height"] < minHeight) {
            minHeight = minHeights[i]["height"];
            mindex = i;
          }
        }
        el.style = `top:${minHeight + this.marginWidth}px;left:${
          minHeights[mindex]["left"]
        }px`;

        minHeights[mindex]["height"] =
          minHeights[mindex]["height"] + el.offsetHeight + this.marginWidth;
      }

      this.$refs.warpper.style = `height:${Math.max(
        ...this.minHeights.map(v => {
          return v.height;
        })
      )}px`;
      this.index++;
    },
    show() {
      this.$emit("load");
    }
  },
  watch: {},
  updated() {
    this.initItem();
  },
  components: {},
  computed: {},
  mounted() {
    this.init();
    window.addEventListener("resize", this.init);
  }
};
</script>

<style scoped lang="css">
.waterFallWarpper {
  position: relative;
}
.bottom {
  --offset: 10px;
  position: absolute;
  width: 100%;
  height: 10px;
  bottom: var(--offset);
}
</style>
