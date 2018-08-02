<template>
  <div class="imageList">
    <div class="list">
      <warpper :name="'imageList'+type" @bottom="load" :loading="loading">
        <div class="col-6 sm-12 xs-24 item hover" v-for="(item,index) in data" :key="index" @click="itemClick(item.id)">
          <item-box :image="item.poster" :title="item.title" class="item-box">
            <div>
              {{item.date}}
            </div>
          </item-box>
        </div>
      </warpper>
      <!-- <water-fall-warpper @load="load" v-if="data.length">
        <div v-for="(item,index) in data" :key="index" class="col-5 sm-11 xs-24 item hover" @click="itemClick(item.id)">
          <img :src="item.cover" alt="" :ref="'image'+index">
          <div class="title">{{item.title}}</div>
          <div class="info">
            <span>
              <i>日期：</i>{{item.date}}
            </span>
            <span>
              <i>数量：</i>{{item.lenght}}
            </span>
            <span>
              <i>浏览次数：</i>{{item.browseCount}}
            </span>

          </div>
        </div>
      </water-fall-warpper>
      <loading v-if="loading" /> -->
    </div>
  </div>
</template>

<script>
// import waterFallWarpper from "@/components/waterFall/waterFallWarpper";
import warpper from "@/components/box/warpperBox";
import itemBox from "@/components/box/itemBox";
import Loading from "@/components/loading/loading";
import { listMixin } from "@/util/mixins.js";
export default {
  name: "imageList",
  mixins: [listMixin],
  props: {
    page: {
      type: String,
      default: "1"
    },
    type: {
      type: String,
      default: "rqny"
    }
  },
  data() {
    return {
      data: [],
      key: "image",
      listLoading: false
    };
  },
  methods: {},
  components: {
    warpper,
    itemBox,
    // waterFallWarpper,
    Loading
  },

  computed: {},
  beforeMount() {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.imageList {
  // overflow: hidden;
}
// .sr .item {
//   visibility: hidden;
// }
.item {
  padding: 5px;
}

.loading {
  height: 120px;
}
</style>


