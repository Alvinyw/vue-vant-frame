// 组件全局注册
import Vue from 'vue'

import Main from './Main'

// 组件库
const Components = [Main]

// 注册全局组件
Components.map(com => {
  Vue.component(com.name, com)
})

// 注册全局方法
import Loading from './Loading/loading'

const globalMethods = [Loading]

globalMethods.map(method => {
  Vue.use(method)
})

export default Vue