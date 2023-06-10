<template>
  <view class="content d_flex flex_flow_c align_items_c justify_content_sb">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <u-button @click="jump" type="primary" text="确定"></u-button>
    </view>
    <TabBar :current="0" />
  </view>
</template>

<script>
  import TabBar from '@/components/tabbar/TabBar.vue'

  export default {
    data() {
      return {
        title: 'Hello'
      }
    },
    components: {
      TabBar
    },
    onLoad() {},
    methods: {
      jump() {
        uni.switchTab({
          url: '/pages/study/study'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
  }

  .text-area {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }
</style>
