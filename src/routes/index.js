import React from 'react'
import { withRouter, Switch } from 'react-router-dom'

import PrivateRoute from './privateRoute.js'

import Home from '../pages/home'
import Wechat from '../pages/wechat'

/*
Switch是唯一的因为它仅仅只会渲染一个路径。不使用<Switch>包裹的情况下），每一个被location匹配到的<Route>将都会被渲染
当<Route>添加exact属性后只有URL和该<Route>的path属性进行精确比对后完全相同该<Route>才会被渲染。

withRouter:
把不是通过路由切换过来的组件中，将react-router 的 history、location、match 三个对象传入props对象上
使用：
1、在要注入属性的组件上使用'@withRouter'
2、导出的时候：export default withRouter(App);  //这里要执行一下WithRouter
*/
@withRouter
class pageRoutes extends React.Component {
  render(){
    return (
      <Switch>
        <PrivateRoute exact path='/home' component={Home}/>
        <PrivateRoute exact path='/wechat' component={Wechat}/>
      </Switch>
    ) 
  }
}

export default pageRoutes