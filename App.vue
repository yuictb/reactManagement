<script>
export default {
	onLaunch: function() {
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
			url: "pages/404/404"
		})
	}
}
</script>

<style lang="scss">
/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
@import "@/uni_modules/uview-ui/index.scss";
@import "@/common/css/com.css";
/deep/ .uni-tabbar {
	margin: 10rpx !important;
	border-radius: 100rpx !important;
	padding: 10rpx 0 !important;
	box-sizing: border-box !important;
	box-shadow: 0px 0px 20rpx #ddd !important;
}
</style>
