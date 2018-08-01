<template>
  <div class="lazyBox" :style="`--maxheight:${maxHeight}px`">
    <template v-if="show||placeholder">
      <img :src="show?image:placeholder" :alt="alt">
    </template>
    <template v-else>
      <div class="planceholder">
        <span>
          loading
        </span>
      </div>
    </template>

  </div>
</template>

<script>
export default {
  name: "lazyBox",
  props: {
    image: {
      type: String,
      require: true
    },
    placeholder: {
      type: String
    },
    show: {
      type: Boolean,
      default: false
    },
    alt: {
      type: String
    }
  },
  data() {
    return {
      maxHeight: 0
    };
  },
  methods: {},
  components: {},
  computed: {},
  mounted() {
    this.maxHeight = window.innerHeight - 100;
  }
};
</script>

<style scoped lang="scss">
.lazyBox {
  --maxheight: 400px;
  width: 100%;
  // height: 100%;
}
img {
  height: 100%;
  max-height: var(--maxheight);
  max-width: 100%;
  object-fit: cover;
}
.planceholder {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
}
.planceholder > span {
  font-size: 30px;
  animation: rotate 4s linear infinite;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
