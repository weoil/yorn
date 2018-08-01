<template>
  <div class="guide">
    <Breadcrumb separator="→">
      <BreadcrumbItem :to="item.to" v-for="(item,index) in data" :key="index">
        <Icon :type="item.icon"></Icon> {{item.name}}
      </BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>

<script>
export default {
  name: "guide",
  props: {
    map: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      data: []
    };
  },
  methods: {
    init() {
      this.data = [];
      let path = this.$route.path;
      let parr = path.split("/");
      let parent = "";
      parr.forEach(p => {
        if (p === "") this.data.push(this.map["home"]);
        else if (this.map[p]) {
          this.data.push({ ...this.map[p], to: parent + this.map[p]["to"] });
        }
        parent += (p === "" ? "" : "/") + p;
      });
    }
  },
  components: {},
  computed: {},
  watch: {
    "$route.fullPath": function() {
      console.log("change");

      this.init();
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style scoped lang="css">
.guide {
}
</style>
