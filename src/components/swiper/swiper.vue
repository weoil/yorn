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
        autoplay: 2000,
        loop: true,
        effect: "coverflow",
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 50,
        coverflowEffect: {
          rotate: 5,
          stretch: -10,
          depth: 60,
          modifier: 2,
          slideShadows: false
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el: ".swiper-pagination"
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

<style scoped lang="less">
.swiper-slide {
  background-color: antiquewhite;
}
.swiper-button-next,
.swiper-button-prev {
  background: none;
  font-size: 40px;
  color: @primany-color;
}
</style>
<style>
.swiper-container {
  height: 300px;
  width: 100%;
  overflow: hidden;
}
</style>
