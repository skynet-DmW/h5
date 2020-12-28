<template>
  <div id="app">
    <transition>
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
    <van-tabbar v-model="active" @change="change">
      <van-tabbar-item :name="1" to="home" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item :name="2" to="my" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  // 数据
  data() {
    return {
      active: 1
    }
  },
  mounted() {
    this.active = Number(sessionStorage.getItem('active'))
  },
  methods: {
    change(val) {
      sessionStorage.setItem('active', val)
    }
  }
}
</script>
