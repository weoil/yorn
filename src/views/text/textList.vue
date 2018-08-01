<template>
  <div class="textList">
    <div class="list">
      <warpper name="textList" @bottom="load" :loading="loading">
        <div class="col-24 item hover" v-for="(item,index) in data" :key="index" @click="itemClick(item.id)">
          <div class="title ">{{item.title}}</div>
          <div class="info">
            {{item.date}}
          </div>
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
  name: "textList",
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
      key: "text"
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
.textList {
  margin-top: 10px;
}
.item {
  margin: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 19px;
  color: $textColor;
  .title {
    cursor: pointer;
  }
  .info {
    font-size: 17px;
  }
}
</style>


