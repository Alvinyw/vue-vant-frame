const Language = 'language'
const productInfo = 'productInfo'
const ifAcceptRegisterAgreement = 'ifAcceptRegisterAgreement'

// 当前语言
export function getLanguage() {
  return sessionStorage.getItem(Language)
}
export function setLanguage(lang) {
  return sessionStorage.setItem(Language, lang)
}

// 产品信息 logo， color
export function getProductInfo() {
  return sessionStorage.getItem(productInfo) ? JSON.parse(sessionStorage.getItem(productInfo)) : {}
}
export function setProductInfo(val) {
  return sessionStorage.setItem(productInfo, JSON.stringify(val))
}
export function removeProductInfo() {
  sessionStorage.removeItem(productInfo)
}

// 是否接受注册协议
export function getRegisterAgreementState() {
  return sessionStorage.getItem(ifAcceptRegisterAgreement)
}
export function setRegisterAgreementState(val) {
  return sessionStorage.setItem(ifAcceptRegisterAgreement, val)
}


export function clearSessionData() {
  sessionStorage.clear()
}