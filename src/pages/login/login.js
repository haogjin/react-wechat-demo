import React from 'react';
import { connect } from 'react-redux'
import { Toast, InputItem, Button } from 'antd-mobile';
// 使用rc-form
import { createForm } from 'rc-form';
import './login.styl'
import { login } from '@/store/actions/user'
import { Redirect } from 'react-router-dom'; 

// 注入store 直接通过this.props.fun/state访问
@connect((state) => ({
  loginInfo: state.user.loginInfo
}), dispatch => ({
  onLogin (params) {
    dispatch(login(params))
  }
}))
 class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }
  // 生命周期-父组件
  // 组件被挂在到页面之后执行
  UNSAFE_componentWillMount () {
    console.log('componentWillMount')
  }
  // 组件被加载完成后执行
  componentDidMount() {
    // 建议ajax请求写在这里。如果写在render中会请求多次
  }
  // 组件被更新之前，自动执行
  shouldComponentUpdate () {
    console.log('shouldComponentUpdate')
    // 返回true就是允许更新组件，返回false不更新组件
    return true
  }
  // 组件被更新之前，但是在shouldComponentUpdate后执行。
  // 如果shouldComponentUpdatewei 返回true才被执行
  // 返回false。就不执行了
  UNSAFE_componentWillUpdate () {
    console.log('componentWillUpdate')
  }
  // 组件更新完成后执行
  componentDidUpdate () {
    console.log('componentDidUpdate')
  }
  UNSAFE_componentWillReceiveProps () {
    // 这个组件要接收props才会执行这个函数
    console.log('componentWillReceiveProps')
  }

  async handleLogin () {
    this.props.form.validateFields((error, value) => {
      /**
       * 疑问点：这里error能获取 却自己不会捕获，还要自己去遍历获取？？？
       * 这里先采用自己判断的方式
       * React-Router 4.0版本以上路由跳转：this.props.history.push('/path')  获取到当前路由的参数：this.props.match.params.xxx
       */
      if(!value.username || !value.password){
        Toast.info('用户名和密码必填!', 1);
        return
      }
      // if(error) {
      //   console.log(this.props.form.getFieldError('username'))
      //   return  this.props.form.getFieldError (value);
      // }

      this.props.onLogin({...value})

      // 在html中用{ this.props.loginInfo.tokenInfo?<Redirect to='/home' />:null }能正常跳转 以下方式不能？？ 目前未知。。。。
      // if(this.props.loginInfo.tokenInfo){
      //   this.props.history.push('/home')
      // }

    });
  }

  render() {
    //dispatch(login(params))
    const { getFieldProps, getFieldError } = this.props.form
    const initialAccount = ''
    const initialPassword = ''
    return (
      <div className="login">
        { this.props.loginInfo.tokenInfo?<Redirect to='/home' />:null }
          <InputItem
            {...getFieldProps('username', {
              initialValue: initialAccount,
              rules: [
                  {
                    required: true,
                    message:'用户名必填'
                  }
              ]
          })}
            clear
            placeholder="请输入用户名或手机号"
            error={getFieldError('username')}
          >用户名</InputItem>
          {/* <div>{getFieldError('username')}</div> */}
            <InputItem
            {...getFieldProps('password', {
              initialValue: initialPassword,
              rules: [
                  {
                    required: true,
                  }
              ]
          })}
            clear
            type="password"
            placeholder="请输入密码"
            error={getFieldError('password')}
          >密码</InputItem>
          <Button className="loginBtn" onClick={this.handleLogin}>登录</Button>
  
       </div>
    );
  }
}
// 这里的createForm方法会将getFieldProps添加到props上
export default createForm()(Login);
