import router from './router'

import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

import * as lib from './utils/lib'

NProgress.configure({
  showSpinner: false,
})

lib.setThemeColor('#F85A52')

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()

  // 进入页面
  next()
  NProgress.done()
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})