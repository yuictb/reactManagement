<script>
export default {
	onLaunch: function() {
		uni.hideTabBar();
		// console.log('App Launch')
	},
	onShow: function() {
		// console.log('App Show')
	},
	onHide: function() {
		// console.log('App Hide')
	},
	onPageNotFound: function() {
		uni.navigateTo({
			url: '/pages/404/404'
		});
	}
};
</script>

<style lang="scss">
/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
@import '@/uni_modules/uview-ui/index.scss';
@import '@/common/css/com.css';
</style>
