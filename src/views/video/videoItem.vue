<template>
  <div class="videoItem" v-if="!loading">
    <div class="item-header">
      <div class="title">
        {{data.title}}
      </div>
      <div class="info">
        <span>
          <i>更新时间</i>
          {{data.date}}
        </span>
        <span>
          <i>持续时长</i>
          {{data.duration}}
        </span>
        <span>
          <i>浏览次数</i>
          {{data.browseCount}}
        </span>
      </div>
    </div>

  </div>
</template>

<script>
import { itemMixin } from "@/util/mixins";
export default {
  name: "videoItem",
  mixins: [itemMixin],
  props: {},
  data() {
    return {
      key: "video"
    };
  },
  methods: {},
  components: {},
  computed: {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.videoItem {
}
</style>
