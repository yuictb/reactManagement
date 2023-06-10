import baseUrl from "./baseUrl.js"
import store from "@/store";
/**
 url: 请求路径
 params: 参数对象
 mask: 是否加载动画loading
 method: 请求方式 模式 POST
 */
export default (url, params = {}, mask = true, method = 'POST', isJson = true) => {
  const header = {};
  header['content-type'] = isJson ? 'application/json' : 'application/x-www-form-urlencoded';
  header['authorization'] = store.state.userInfo.token || '';
  return new Promise((resolve, reject) => {
    mask && uni.showLoading({
      title: "加载中",
      mask: true,
    });
    uni.request({
      url: baseUrl + url,
      data: params,
      method,
      header,
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
        mask && setTimeout(() => {
          uni.hideLoading()
        }, 500)
      }
    })
  })
}
