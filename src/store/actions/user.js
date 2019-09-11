import {
  LOGIN,
} from '../constants'
import API from '../../service/api/user'
import Cookie from 'js-cookie'


export const login = params => async dispatch =>{
  console.log(11)
  const res = API.login(params, dispatch)
  const { tokenInfo, userInfo } = res.data
  Cookie.set('tokenInfo', tokenInfo)
  Cookie.set('userInfo', userInfo)
  dispatch({ type: LOGIN, data: res.data })
} 



// export default login