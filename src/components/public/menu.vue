<template>
    <base-menu :data="menuData" class="menu" :height="height">
        <div class="header">
            Yorn

        </div>
        <div slot="right" class="right">
            <div class="search" :style="``">
                <Input placeholder="Enter something..." icon="ios-search" />
            </div>
            <user-top></user-top>

        </div>
    </base-menu>
</template>

<script>
import baseMenu from "@/components/baseMenu/baseMenu"
import userTop from "@/components/user/userTop"

export default {
  name: "l-menu",
  props: {},
  data() {
    return {
      menuData: [
        {
          label: "Home",
          name: "Home"
        },
        {
          label: "Image",
          name: "ilist",
          children: [
            {
              label: "GirlFriend",
              name: "ilist/rqny/1"
            }
          ]
        },
        {
          label: "Video",
          name: "vlist"
        },
        {
          label: "Text",
          name: "tlist",
          children: [
            {
              label: "Incest",
              name: "tlist/llmq/1"
            }
          ]
        }
      ],
      searchWidth: 0,
      height: 60
    }
  },
  methods: {},
  components: {
    baseMenu,
    userTop
  },
  computed: {},
  mounted() {}
}
</script>

<style scoped lang="scss">
.menu {
  .header {
    display: flex;
  }
  .right {
    display: flex;
    .search {
      width: 200px;
      display: flex;
      align-items: center;
    }
    @media screen and (max-width: 996px) {
      flex: 1;
      justify-content: space-around;
    }
  }
}
</style>
<style lang="scss">
.ivu-input-hide-icon .ivu-input-icon {
  display: block;
}
</style>
