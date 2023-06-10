<template>
  <view>
    <u-tabbar
      :value="current"
      @change="changeTab"
      :fixed="true"
      :placeholder="false"
      :safeAreaInsetBottom="false"
      :border="false"
      inactiveColor="#a6a6a6"
      activeColor="#ffa813"
    >
      <u-tabbar-item v-for="(item, index) in list" :key="index">
        <image
          class="u-page__item__slot-icon"
          slot="active-icon"
          :src="item.selectedIconPath"
        ></image>
        <image class="u-page__item__slot-icon" slot="inactive-icon" :src="item.iconPath"></image>
      </u-tabbar-item>
    </u-tabbar>
  </view>
</template>

<script>
export default {
  name: 'TabBar',
  props: {
    current: {
      type: Number,
      default: () => 0
    }
  },
  computed: {
    list() {
      return [
        {
          iconPath: '../../static/tabBar/find.png',
          selectedIconPath: '../../static/tabBar/findSelect.png',
          text: '首页',
          pagePath: 'pages/index/index'
        },
        {
          iconPath: '../../static/tabBar/studyAbroad.png',
          selectedIconPath: '../../static/tabBar/studyAbroadSelect.png',
          text: '学习',
          pagePath: 'pages/study/study'
        },
        {
          iconPath: '../../static/tabBar/mine.png',
          selectedIconPath: '../../static/tabBar/mineSelect.png',
          text: '我的',
          pagePath: 'pages/personal/personal'
        }
      ]
    }
  },
  methods: {
    changeTab(e) {
      uni.switchTab({
        url: '/' + this.list[e].pagePath
      })
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ .u-tabbar__content {
  margin: 10rpx !important;
  border-radius: 100rpx !important;
  padding: 12rpx 0 !important;
  box-shadow: 0px 0px 20rpx #ddd !important;
  // padding-bottom: constant(safe-area-inset-bottom) !important; /* 兼容 iOS < 11.2 */
  // padding-bottom: env(safe-area-inset-bottom) !important; /* 兼容 iOS >= 11.2 */
}
// /deep/ .u-safe-bottom {
// 	padding: 0;
// }
image {
  width: 48rpx;
  height: 48rpx;
}
</style>
