export default (url, method = 'POST', params = {}, isJson = true) => {
	const headers = {};
	headers['content-type'] = isJson ? 'application/json' : 'application/x-www-form-urlencoded';
	// headers['authorization'] = getStorageToken() || '';
	return new Promise((resolve, reject) => {
		uni.showLoading({
			title: "加载中",
			mask: true,
		});
		uni.request({
			url: baseUrl + url,
			method,
			data: params,
			header: headers,
			success(response) {
				const {
					statusCode,
					data
				} = response
				if (statusCode >= 200 && statusCode < 300) {
					resolve(data)
				} else {
					let msg;
					switch (statusCode) {
						case 404:
							msg = '接口请求不存在！错误码【404】。';
							break;
						case 500:
							msg = data.message || '服务端应用接口异常！错误码【500】。';
							break;
						default:
							msg = '请求错误，请检查或刷新重试！';
							break;
					}
					uni.showToast({
						icon: 'none',
						title: `${msg}`,
						duration: 3000
					})
				};
			},
			fail(error) {
				uni.showToast({
					icon: 'error',
					title: '服务器错误,请稍后再试'
				})
				reject(error);
			},
			complete() {
				setTimeout(() => {
					uni.hideLoading()
				}, 500) //  真机运行  hidLoading会取消掉 Toast的duration时间设置  
			}
		})
	})
}
