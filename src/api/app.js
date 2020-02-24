import request from '@/utils/request'

/**
 * 获取明细页面列表数据
 * @param {parm1} 参数1
 * @param {parm2} 参数2
 */
export function uploadIDcard(data) {
  return request({
    url: '/abc/bank',
    method: 'post',
    data,
  })
}