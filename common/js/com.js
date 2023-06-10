// const goBackHome = ()=> {
// 	// #ifdef MP-WEIXIN||MP-ALIPAY
// 	uni.reLaunch({
// 		url: '/pages/index/index'
// 	})
// 	// #endif
// 	// #ifdef H5
// 	let backlen = history.length - 1;
// 	history.go(-backlen);
// 	// #endif
// };
const goBack = () => {
  uni.navigateBack({
    delta: 1
  })
};
const Toast = (title, type, url, duration = '2000', isTab = false) => {
  this.$refs.uToast.show({
    title: title,
    type: type,
    url: url,
    isTab: isTab,
    duration: duration
  });
};
const showModal = (content, title = '错误', showCancel = true) => {
  uni.showModal({
    title: title,
    content: content,
    showCancel: showCancel
  })
}
const showToast = (title, icon = 'success', duration = 1500, mask = true) => {
  uni.showToast({
    title: title,
    icon: icon,
    duration: duration,
    mask: mask,
  });
}
const $Loading = {
  show(title = '加载中', mask = true) {
    uni.showLoading({
      title: title,
      mask: mask
    });
  },
  close() {
    uni.hideLoading();
  },
}

const setNavigationBarTitle = (newTitle) => {
  uni.setNavigationBarTitle({
    title: newTitle
  });
}
export default {
  goBack,
  Toast,
  showModal,
  showToast,
  $Loading,
  setNavigationBarTitle
}
