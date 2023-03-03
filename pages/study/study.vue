<template>
	<view>
		<text>测试页面</text>
		<TabBar :current="1" />
	</view>
</template>

<script>
import TabBar from '@/components/tabbar/TabBar.vue';
export default {
	data() {
		return {};
	},
	components: {
		TabBar
	}
};
</script>

<style lang="scss"></style>
