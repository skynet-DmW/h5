<template>
  <div>
    主页
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item icon="search">发现</van-tabbar-item>
      <van-tabbar-item icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import api from '@/api/api.js'
export default {
  // 数据
  data() {
    return {
      active: null
    }
  },
  created() {},
  mounted() {},
  methods: {
    getDateList() {
      api.getDateList()
    }
  }
}
</script>

<style lang='less' scoped>
</style>
