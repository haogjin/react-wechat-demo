const servers = [
  { name: '/SSO-SERVER' }, // 登录
  { name: '/auth-server' }, // 登录前获取
]

const proxyObj = servers.reduce((proxyObj, item) => {
  proxyObj[item.name] = {
    target: item.target || 'http://seedtest.ap88.com', // http://seedtest.ap88.com
    changeOrigin: true,
  }
  return proxyObj
}, {})

module.exports = proxyObj
