export const listMixin = {
  //require data:key,props:page,type
  data: function() {
    return {
      loading: false,
      p: this.page
    };
  },
  methods: {
    async fetchData() {
      this.loading = true;
      let data = await this.$store.dispatch("getList", {
        key: this.key,
        type: this.type,
        page: this.p
      });
      this.data.push(...data);
      this.loading = false;
    },
    load() {
      if (this.loading) return;
      this.p = this.p - 0 + 1;
      this.fetchData();
    },
    itemClick(id) {
      let pathname = this.key.charAt(0) + "item";
      this.$router.push(`/${pathname}/${id}`);
    }
  },
  watch: {
    data() {
      this.$nextTick(() => {
        this.$sr.reveal(".item", {
          reset: true,
          delay: 100
        });
      });
    }
  },
  components: {},
  beforeMount() {
    this.fetchData();
  }
};
export const itemMixin = {
  props: {
    id: String
  },
  data: function() {
    return {
      loading: false,
      data: {}
    };
  },
  watch: {
    data: function() {
      console.log(this.data);

      this.$store.dispatch("record", {
        type: this.key,
        id: this.id,
        position: 0,
        title: this.data.title
      });
    }
  },
  methods: {
    async fetchData() {
      this.loading = true;
      let data = await this.$store.dispatch("getItem", {
        key: this.key,
        id: this.id
      });
      this.data = data;
      this.loading = false;
    }
  },
  star() {
    this.$store.dispatch("star", {
      type: this.key,
      id: this.id,
      title: this.data.title
    });
  },
  beforeMount() {
    this.fetchData();
  }
};
