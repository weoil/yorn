<template>
  <div class="home" v-if="!loading">
    <div class="swiper">
      <Swiper>
        <div class="swiper-slide col-12 xs-24 sm-24" v-for="(item,index) in home.image" :key="index" @click="$router.push(`/iitem/${item.id}`)">
          <img :src="item.poster" :alt="item.title">
          <div class="title ">
            {{item.title}}
          </div>
        </div>
      </Swiper>
    </div>

    <div class="warpper" :key="'home'">
      <column-box :title="type==='videoGc'?'国产自拍':'岛国风情'" class="video" color="#2db7f5" v-for="(item , type) in home.video" :key="type">
        <div v-for="(value , index) in item" :key="index" class="item">
          <item-box :image="value.poster||value.cover" :title="value.title">
            <div class="info">
              {{value.date}}
            </div>
          </item-box>
        </div>
      </column-box>
    </div>
  </div>
</template>

<script>
import Swiper from "@/components/swiper/swiper";
import itemBox from "@/components/box/itemBox";
import columnBox from "@/components/box/columnBox";
export default {
  name: "home",
  props: {},
  data() {
    return {
      loading: false
    };
  },
  methods: {
    async fetchData() {
      this.loading = true;
      let data = await this.$store.dispatch("fetchHome");

      this.loading = false;
      this.$nextTick(() => {
        this.$sr.reveal(".swiper  ", {
          reset: true,
          scale: 1
        });
        this.$sr.reveal(".item", {
          reset: true,
          useDelay: "always",
          delay: 100
        });
      });
    }
  },
  components: {
    Swiper,
    columnBox,
    itemBox
  },
  computed: {
    home() {
      return this.$store.state.item.home;
    }
  },
  beforeMount() {
    this.fetchData();
  },
  mounted() {}
};
</script>

<style scoped lang="scss">
.home {
}
.swiper {
  .title {
    font-size: 18px;
    color: #fff;
    text-shadow: 1px 1px 1px #000;
    text-align: center;
    padding-left: 10px;
    transition: color 0.4s, text-shadow 0.4s;
  }
}
.swiper-slide:hover {
  .title {
    color: $primaryColor;
    text-shadow: 1px 1px 1px #fff;
  }
}
.swiper-slide {
  position: relative;
  .title {
    position: absolute;
    bottom: 10px;
  }
}
.warpper {
  margin-top: 20px;
}
</style>
