<template>
  <loading v-if="loading" :type="1"></loading>
  <div class="imageItem" v-else>
    <div class="item-header">
      <div class="title">
        {{data.title}}
      </div>
      <div class="info">
        <span>
          <i>浏览次数</i> {{data.browseCount}}</span>
        <span>
          <i>更新时间</i> {{data.date}}</span>
        <span>
          <i>来源</i>{{data.target}}</span>
      </div>
    </div>

    <div class="images">
      <lazy-box v-for="(item,index) in images" :key="'image'+index" :image="item.src" :show="item.show" v-screen.once="()=>showImage(item)"></lazy-box>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/loading/loading";
import lazyBox from "@/components/box/lazyBox";
import { itemMixin } from "@/util/mixins";
export default {
  name: "imageItem",
  mixins: [itemMixin],
  props: {},
  data() {
    return {
      key: "image",
      images: []
    };
  },
  methods: {
    showImage(item) {
      item.show = true;
    }
  },
  components: { Loading, lazyBox },
  watch: {
    data: function() {
      this.images = this.data.images.map(img => {
        return {
          src: img,
          show: false
        };
      });
    }
  },
  computed: {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.imageItem {
  margin-top: 10px;
}
.images {
  text-align: center;
}
</style>
