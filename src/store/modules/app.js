import * as session from '../../utils/session'

export default {
  namespaced: true,
  state: {
    productCode: 10003,
    maxPwdErrorCount: 5,
    pwdStatus: false,
  },
  mutations: {
    setPwdStatus(state, status) {
      state.pwdStatus = status
    },
  },
  actions: {
    // 初始化应用=>缓存: 开发者信息、商户信息
    async setAppInfo(context, param) {
      return true;
    },
    // 设置产品信息=>缓存: logo, color
    async setProductInfo({
      state
    }, merchantId) {
      return true;
    },
  },
}