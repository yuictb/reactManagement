<template>
	<view>
		<text>文本</text>
		<TabBar :current="2" />
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
