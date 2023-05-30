// 相关用户的接口

import request from '@/utils/request'

/**
 * 账号密码登录
 * @param {String} account - 账号
 * @param {String} password - 密码
 * @returns promise
 */
export const userAccountLogin = ({ account, password }) => {
    return request('/login', 'post', { account, password })
}

/**
 * 短信登录
 * @param {String} mobile - 手机号
 * @param {String} code - 验证码，默认123456
 * @returns Promise
 */
export const userMobileLogin = ({ mobile, code }) => {
    return request('/login/code', 'post', { mobile, code })
}

/**
 * 获取短信登录验证码
 * @param {String} mobile - 手机号
 * @returns Promise
 */
export const userMobileLoginMsg = (mobile) => {
    return request('/login/code', 'get', { mobile })
}

/**
 * 校验帐号是否存在
 * @param {String} account - 帐号
 * @returns Promise
 */
export const userCheckAccount = (account) => {
    return request('/register/check', 'get', { account })
}

/**
 * 获取注册短信登录验证码
 * @param {String} mobile - 手机号
 * @returns Promise
 */
export const userRegisterMsg = (mobile) => {
    return request('/register/code', 'get', { mobile })
}

/**
 * 注册用户
 * @param {String} account - 帐号
 * @param {String} mobile - 手机号
 * @param {String} code - 短信验证码
 * @param {String} password - 密码
 * @returns Promise
 */
export const userRegister = ({ account, mobile, code, password }) => {
    return request('/register', 'post', { account, mobile, code, password })
}
