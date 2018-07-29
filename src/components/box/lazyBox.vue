<template>
    <div class="lazyBox">
        <template v-if="show||placeholder">
            <img :src="show?image:placeholder" :alt="alt">
        </template>
        <template v-else>
            <div class="planceholder">
                <span>
                    <Icon type="ios-loading" />
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
      type: boolean,
      default: false
    },
    alt: {
      type: String
    }
  },
  data() {
    return {}
  },
  methods: {},
  components: {},
  computed: {},
  mounted() {}
}
</script>

<style scoped lang="css">
.lazyBox {
  height: 100%;
}
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.planceholder {
  height: 100%;
  display: flex;
  align-items: center;
}
.planceholder > span {
  font-size: 30px;
  animation: rotate 1s linear infinite;
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
