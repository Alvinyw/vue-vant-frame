import Vue from 'vue'
import * as session from './session'
import * as cookies from './cookies'
import fieldValidater from './field-validator'
import asyncValidater from './form-validator'
import * as lib from './lib' // 全局工具方法

Vue.prototype.$session = session // session 操作全局方法
Vue.prototype.$cookies = cookies // cookie 操作全局方法
Vue.prototype.$fieldValidater = fieldValidater // 表单字段字段校验全局方法
Vue.prototype.$validate = asyncValidater // 对第三方验证框架 async-validator 的封装
Vue.prototype.$lib = lib