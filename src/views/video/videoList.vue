<template>
  <div class="videoList">
    <div class="list">
      <warpper :name="'videoList'+type" @bottom="load" :loading="loading">
        <div class="col-6 sm-12 xs-24 item hover" v-for="(item,index) in data" :key="index" @click="itemClick(item.id)">
          <item-box :image="item.poster||item.cover" :title="item.title">
            <div class="info">
              {{item.date}}
            </div>
          </item-box>
        </div>
      </warpper>
    </div>
  </div>
</template>

<script>
import warpper from "@/components/box/warpperBox";
import itemBox from "@/components/box/itemBox";
import { listMixin } from "@/util/mixins.js";
export default {
  name: "videoList",
  mixins: [listMixin],
  props: {
    page: {
      type: String,
      default: "1"
    },
    type: {
      type: String,
      default: "SupAV"
    }
  },
  data() {
    return {
      data: [],
      key: "video"
    };
  },
  methods: {},
  components: {
    warpper,
    itemBox
  },
  computed: {},
  beforeMount() {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.videoList {
}
.item {
  padding: 5px;
}
.title {
}
</style>


