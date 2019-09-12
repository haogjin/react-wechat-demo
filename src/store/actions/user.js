import {
  LOGIN,
} from '../constants'
import API from '@/service/api/user'
import Cookie from 'js-cookie'

export const login = params => async dispatch =>{
  try {
    const res = await API.login(params, dispatch)
    const { tokenInfo, userInfo } = res.data
    Cookie.set('tokenInfo', tokenInfo)
    Cookie.set('userInfo', userInfo)
    dispatch({ type: LOGIN, data: res.data })
  } catch (e) {
    throw e
  }
 
} 
