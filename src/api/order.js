// 订单相关的API函数

import request from '@/utils/request'

// 结算页面-生成订单
export const createOrder = () => {
    return request('/member/order/pre', 'get')
}
