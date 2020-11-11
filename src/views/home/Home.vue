<template>
  <div class="container">
    <van-swipe class="swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <van-grid>
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
    </van-grid>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="getDataList"
    >
      <van-card
        v-for="item in dataList"
        :key="item"
        tag="标签"
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      >
        <template #tags>
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
        </template>
        <template #footer>
          <van-button type="info" size="mini">按钮</van-button>
          <van-button type="info" size="mini">按钮</van-button>
        </template>
      </van-card>
    </van-list>
  </div>
</template>

<script>
import api from '@/api/api.js'
export default {
  // 数据
  data() {
    return {
      active: null,
      loading: false,
      finished: false,
      dataList: []
    }
  },
  created() {
    console.log('初始化home')
  },
  mounted() {},
  methods: {
    test() {
      api.getDateList()
    },
    getDataList() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.dataList.push(this.dataList.length + 1)
        }

        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.dataList.length >= 40) {
          this.finished = true
        }
      }, 1000)
    }
  }
}
</script>

<style lang='less' scoped>
.swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
