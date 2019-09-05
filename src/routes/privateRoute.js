import React, {Component} from 'react'
import { Route, Redirect } from 'react-router-dom'
// import { isAuthenticated } from '../../utils/Session'

/**
 * 两种写法都可以
 * function   class
 * 这里定义私有路由 没登陆则跳转登录
 */
// const PrivateRoute = ({component: Component, ...rest}) => (
//   <Route {...rest} render={(props) => (
//     !!isAuthenticated()
//       ? <Component {...props} />
//       : <Redirect to={{
//         pathname: '/login',
//         state: {from: props.location}
//       }}/>
//   )}/>
// )
class PrivateRoute extends Component {

  render() {
      // 分离this.props成component和其他
      const isAuthenticated = true

      console.log(isAuthenticated)
      console.log(this.props)
      const { component: Component, ...rest } = this.props
      
      return  <Route {...rest} render={(props) => (
             isAuthenticated
               ? <Component {...props} />
               : 
               <Redirect to={{
                 pathname: '/login',
                 state: {from: props.location}
               }}/>
           )}/>
  }
}

export default PrivateRoute