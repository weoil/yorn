<template>
  <loading v-if="loading" :type="1"></loading>
  <div class="textItem" v-else>
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

    <div class="text">
      <p v-for="(t,i) in texts" :key="i">{{t}}</p>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/loading/loading";
import { itemMixin } from "@/util/mixins";
export default {
  name: "textItem",
  mixins: [itemMixin],
  props: {},
  data() {
    return {
      key: "text"
    };
  },
  methods: {},
  components: { Loading },
  computed: {
    texts() {
      return this.data.text.replace(/(　)/g, "").split("\n\n");
    }
  },
  mounted() {}
};
</script>

<style scoped lang="scss">
.textItem {
  margin-top: 10px;
}
.text {
  // padding: 10px;
  font-size: 18px;
  line-height: 2em;
}
</style>
