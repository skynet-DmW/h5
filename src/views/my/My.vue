<template>
  <div class="container">
    <div class="header">
      <van-image round src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <div class="name">大熊猫</div>
    </div>
    <div class="main">
      <van-cell-group>
        <van-cell title="我的订单" is-link icon="orders-o" />
        <van-cell title="我的收藏" is-link icon="star-o" />
      </van-cell-group>
      <van-cell-group>
        <van-cell title="联系我们" is-link icon="smile-o" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  // 数据
  data() {
    return {
      active: null
    }
  },
  created() {
    console.log('初始化my')
  },
  mounted() {},
  methods: {
    getDataList() {}
  }
}
</script>

<style lang='less' scoped>
.header {
  margin-top: 20px;
  display: flex;
  > .van-image {
    margin-left: 30px;
    width: 80px;
    height: 80px;
  }
  > .name {
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
  }
}
.main {
  .van-cell-group {
    margin-bottom: 10px;
  }
}
</style>
