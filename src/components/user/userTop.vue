<template>
    <div class="userTop" :style="`height:${height}px`">
        <div class="portrait">
            <img src="https://avatars3.githubusercontent.com/u/24948543?s=88&v=4" alt="">
        </div>
        <div class="info">
            <div class="userinfo">
                <span class="username">
                    username
                </span>
                <div class="notice">
                    <span>
                        ❤️
                    </span>
                    <span>
                        📚
                    </span>
                    <span>
                        ⚙️
                    </span>

                </div>
            </div>
            <div class="out">
                <Button type="error">LOGOUT</Button>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  name: "userTop",
  props: {
    height: {
      type: Number,
      default: 60
    }
  },
  data() {
    return {}
  },
  methods: {},
  components: {},
  computed: {},
  mounted() {}
}
</script>

<style scoped lang="scss">
.userTop {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & > div {
    margin-left: 10px;
  }
}
.portrait {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  overflow: hidden;
  background: $primaryColor;
  img {
    height: 100%;
    width: 100%;
  }
}
.info {
  display: flex;
  @media screen and (max-width: 996px) {
    display: none;
  }
}
.userinfo {
  display: flex;
  flex-direction: column;
  color: darken($primaryColor, 10%);
}
.username {
  line-height: 30px;
}
.notice {
  display: flex;
  line-height: 30px;
  justify-content: space-around;
}
.out {
  margin-left: 30px;
}
</style>
