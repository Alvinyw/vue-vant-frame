const LANGUAGE = 'LANGUAGE'
const PRODUCT_INFO = 'PRODUCT_INFO'
const IF_ACCEPT_REGISTER_AGREEMENT = 'IF_ACCEPT_REGISTER_AGREEMENT'

// 当前语言
export function getLanguage() {
  return sessionStorage.getItem(LANGUAGE)
}
export function setLanguage(lang) {
  return sessionStorage.setItem(LANGUAGE, lang)
}

// 产品信息 logo， color
export function getProductInfo() {
  return sessionStorage.getItem(PRODUCT_INFO) ? JSON.parse(sessionStorage.getItem(PRODUCT_INFO)) : {}
}
export function setProductInfo(val) {
  return sessionStorage.setItem(PRODUCT_INFO, JSON.stringify(val))
}

// 是否接受注册协议
export function getRegisterAgreementState() {
  return sessionStorage.getItem(IF_ACCEPT_REGISTER_AGREEMENT)
}
export function setRegisterAgreementState(val) {
  return sessionStorage.setItem(IF_ACCEPT_REGISTER_AGREEMENT, val)
}


export function clearSessionData() {
  sessionStorage.clear()
}