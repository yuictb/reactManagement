<template>
	<view>
		<text>测试页面</text>
		<!-- #ifndef APP-NVUE || MP-TOUTIAO -->
		<view class="u-demo-block">
			<text class="u-demo-block__title">卡片式</text>
			<u-swiper
				:list="list3"
				previousMargin="30"
				nextMargin="30"
				circular
				:autoplay="false"
				radius="5"
				bgColor="#ffffff"
			></u-swiper>
		</view>
		<!-- #endif -->
		<TabBar :current="1" />
	</view>
</template>

<script>
import TabBar from "@/components/tabbar/TabBar.vue"
export default {
	data() {
		return {
			list3: [
				"https://cdn.uviewui.com/uview/swiper/swiper3.png",
				"https://cdn.uviewui.com/uview/swiper/swiper2.png"
			]
		}
	},
	components: {
		TabBar
	}
}
</script>

<style lang="scss"></style>
