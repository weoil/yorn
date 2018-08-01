<template>
  <base-menu :data="menuData" class="menu" :height="height" @select="select">
    <div class="header">
      Yorn

    </div>
    <div slot="right" class="right">
      <div class="search" :style="``">
        <Input placeholder="在这里搜索你感兴趣的内容" icon="ios-search" />
      </div>
      <user-top></user-top>

    </div>
  </base-menu>
</template>

<script>
import baseMenu from "@/components/baseMenu/baseMenu";
import userTop from "@/components/user/userTop";

export default {
  name: "l-menu",
  props: {},
  data() {
    return {
      menuData: [
        {
          label: "主页",
          name: ""
        },
        {
          label: "图片",
          name: "ilist",
          children: [
            {
              label: "国产自拍",
              name: "ilist/gczp/1"
            },
            {
              label: "亚洲美图",
              name: "ilist/yz/1"
            },
            {
              label: "欧美美图",
              name: "ilist/om/1"
            },
            {
              label: "模特写真",
              name: "ilist/xz/1"
            },
            {
              label: "动漫CG",
              name: "ilist/dm/1"
            }
          ]
        },
        {
          label: "影片",
          name: "vlist",
          children: [
            {
              label: "国产自拍",
              name: "vlist/gczp/1"
            },
            {
              label: "岛国物语",
              name: "vlist/porn/1"
            }
          ]
        },
        {
          label: "文字",
          name: "tlist",
          children: [
            {
              label: "GirlFriend",
              name: "tlist/rqny/1"
            },
            {
              label: "Incest",
              name: "tlist/llmq/1"
            },
            {
              label: "SchoolTeacher",
              name: "tlist/xyss/1"
            },
            {
              label: "Affair",
              name: "tlist/shqy/1"
            },
            {
              label: "Rape",
              name: "tlist/yyqj/1"
            }
          ]
        }
      ],
      searchWidth: 0,
      height: 60
    };
  },
  methods: {
    select(name) {
      this.$router.push(`/${name}`);
    }
  },
  components: {
    baseMenu,
    userTop
  },
  computed: {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.menu {
  .header {
    display: flex;
    font-size: 30px;
    color: $textActiveColor;
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
