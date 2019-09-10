import axios from 'axios'
// import Cookies from 'js-cookie'
import { Toast } from 'antd-mobile';
// import { ACCESS_TOKEN } from '@/store/mutation-types'

// 网络请求报错
/* eslint-disable no-unused-vars */
const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
}

const $http = axios.create({
  // baseURL: 'https://some-domain.com/api/',
  timeout: 100000,
  headers: {
    'content-Type': 'application/json',
    'source-type': 'web', // web端必加，与（ios，安卓，微信）区分
    'role-type': 'mgt',
    'system-type': '000',
  }
})

// request拦截器
$http.interceptors.request.use(config => {
  // TODO: 1. 设置拦截 防止重复请求
  // form表单
  if (config.isFormData) {
    config.headers['Content-Type'] = 'multipart/form-data'
  }

  // 携带鉴权请求头
  // const Authorization = Cookies.get(ACCESS_TOKEN)
  // if (Authorization) {
  //   config.headers['Authorization'] = Authorization
  // }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// response 拦截器
$http.interceptors.response.use(
  response => {
    /**
    * 检查网络错误
    * todo: 待完成 checkStatus 函数, 检查response.status 结合 codeMessage
    */

    /**
    * 检查业务错误
    * todo: 提取为 checkCode 函数
    */
    const res = response.data
    if (res.succeed !== true) {
      Toast.fail(res.errorMsg, 5)

      // 6000001,session超时
      if (res.errorCode === '600401') {
        Toast.info('登录失效，请重新登录', 2)
        window.location.href = `#/login?redirect=${window.location.hash.slice(1)}`
      }

      console.error(`
        API error ${response.config.url}： ${response.data.errorMsg} (${response.data.errorCode})
      `)
      return Promise.reject(new Error(res.errorMsg || 'error'))
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error)// for debug
    Toast.fail(error.errorMsg, 5)
    return Promise.reject(error)
  }
)

export default $http
