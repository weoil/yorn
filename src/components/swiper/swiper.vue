<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-next">
      <Icon type="ios-arrow-forward"></Icon>
    </div>
    <div class="swiper-button-prev">
      <Icon type="ios-arrow-back"></Icon>
    </div>
  </div>

</template>

<script>
import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css"
export default {
  name: "Swiper",
  props: {},
  data() {
    return {
      swiper: null
    }
  },
  methods: {
    initSwiper() {
      this.swiper = new Swiper(".swiper-container", {
        autoplay: true,
        delay: 3000,
        loop: true,
        slidesPerView: "auto",
        effect: "carousel",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
          clickable: true
        }
      })
    }
  },
  components: {},
  computed: {},
  mounted() {
    this.initSwiper()
  }
}
</script>

<style scoped lang="scss">
.swiper-container {
  width: 100%;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 1px 2px 4px 1px rgb(248, 248, 248);
}
.swiper-container:hover {
  .swiper-button-next,
  .swiper-button-prev {
    opacity: 1;
  }
}
.swiper-slide {
  background-color: antiquewhite;
  width: 50%;
  @media screen and (max-width: 996px) {
    width: 100%;
  }
}
.swiper-button-next,
.swiper-button-prev {
  opacity: 0;
  background: none;
  font-size: 40px;
  color: $primaryColor;
  transition: opacity 0.5s;
}
</style>
<style lang="scss">
.swiper-pagination-bullet-active {
  background: $primaryColor;
}
</style>
