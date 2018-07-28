<template>
  <div class="Index">
    <div class="view">
      <base-menu :data="menuData" class="menu">
        <div class="header">
          Yorn
          <div class="search" :style="``">
            <Input placeholder="search" icon="ios-analytics-outline" />
          </div>
        </div>

      </base-menu>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import baseMenu from "@/components/baseMenu/baseMenu"
export default {
  name: "Index",
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
      searchWidth: 0
    }
  },
  methods: {},
  components: {
    baseMenu
  },
  computed: {},
  mounted() {}
}
</script>

<style scoped lang="less">
.Index {
}
.menu {
  .header {
    display: flex;
    .search {
      margin-left: 100px;
      width: 200px;
    }
  }
}
</style>
 <style>
</style>