<template>
  <div class="Search">
    <warpper name="search" :loading="loading" @bottom="bottom">
      <div class="item col-24" v-for="(item,index) in data" :key="index">
        <div class="title">
          {{item.title}}
        </div>
        <div v-if="item.cover||item.poster||item.images" class="image">
          <img :src="item.cover||item.poster||item.images[0]" :alt="item.title">
        </div>
        <div class="info">
          <span>
            {{item._t==='video'?'视频':item._t==='image'?'图片':'小说'}}
          </span>

          <span>
            <i>来源:</i>{{item.target}}
          </span>
          <span>
            {{item.date}}
          </span>
        </div>
      </div>
    </warpper>
  </div>
</template>

<script>
import warpper from "@/components/box/warpperBox";
export default {
  name: "Search",
  props: {
    str: {
      type: String,
      require: true
    },
    page: {
      type: String,
      default: 1
    }
  },
  data() {
    return {
      loading: false,
      searchStr: "",
      data: [],
      p: +this.page
    };
  },
  methods: {
    async fetchData() {
      this.loading = true;
      let r = await this.$store.dispatch("search", {
        str: this.str,
        page: this.p
      });
      let tmp = [];
      console.log(r, this.str, this.p);
      Object.keys(r).forEach(key => {
        if (key === "total") return;
        r[key].forEach(item => {
          tmp.push({ ...item, _t: key, date: this.$format(item.date) });
        });
      });
      tmp.sort((a, b) => {
        return new Date(a.date) < new Date(b.date);
      });
      this.data = this.data.concat(tmp);
      console.log();

      this.loading = false;
    },
    bottom() {
      console.log("buttom");

      this.p += 1;
      this.fetchData();
    }
  },
  components: { warpper },
  computed: {},
  beforeMount() {
    this.searchStr = encodeURIComponent(this.str);
    this.fetchData();
  },
  mounted() {}
};
</script>

<style scoped lang="scss">
.Search {
}
.item {
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ddd;
  box-shadow: 1px 1px 1px #ddd;
  .title {
    font-size: 18px;
    color: $primaryColor;
  }
  .image {
    img {
      max-height: 200px;
    }
  }
  .info {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    i {
      &::after {
        content: "：";
      }
    }
  }
}
</style>   
