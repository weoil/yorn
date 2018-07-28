<template>
  <div class="baseMenuItem">
    <component v-for="(item,index) in data" :key="index" :is="item.children?'Submenu':'MenuItem'" :name="item.name">
      <template v-if="item.children">
        <span slot="title">{{item.label}}</span>
        <base-menu-item :data="item.children"></base-menu-item>
      </template>
      <div v-else>
        {{item.label}}
      </div>
    </component>
  </div>
</template>

<script>
export default {
  name: "baseMenuItem",
  props: {
    data: Array
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

<style scoped lang="css">
.baseMenuItem {
}
</style>
<style lang="less">
.baseMenuItem {
  font-size: 15px;
  .ivu-menu-submenu,
  .ivu-menu-item {
  }
}
</style>
