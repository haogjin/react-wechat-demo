import axios from '../request'

const URL = {
  login: '/SSO-SERVER/authentication/form',
  getPermission: '/JURISDICTION-SERVICE-MAGPIE/facade/treeBySystem.magpie',
  getAction: '/JURISDICTION-SERVICE-MAGPIE/facade/getMenuByPid.magpie',
  getBeforeLogin: '/auth-server/user/key.magpie', // 登录前获取salt
  encryptedLogin: '/SSO-SERVER/authentication/form2', // 加密登录
}
class User {
  /**
   * 登陆
   * @param {sting} username
   * @param {string} password
   */
  login (param) {
    const url = URL.login
    return axios.post(url, param)
  }

  logout () {

  }

  /**
   * 获取菜单权限
  */
  getPermission (systemCode) {
    const url = URL.getPermission
    const param = {}

    return axios.post(url, param, {
      headers: {
        'system-type': systemCode
      }
    })
  }

  getAction (menuId) {
    const url = URL.getAction
    const param = {
      menuId,
    }

    return axios.post(url, param)
  }
  /**
   * 登录前获取salt
   * @param {string} userName 用户名
   */
  getBeforeLogin (userName) {
    const url = URL.getBeforeLogin
    const param = {
      userName
    }
    return axios.post(url, param)
  }

  /**
   * 登陆
   * @param {string} userKey
   * @param {string} password
   * @param {string} loginType
   */
  encryptedLogin (userKey, password, loginType = 'json') {
    const url = URL.encryptedLogin
    const param = {
      userKey,
      password,
      loginType
    }

    return axios.post(url, param)
  }
}

export default new User()
