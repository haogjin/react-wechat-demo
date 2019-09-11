import React from 'react';
import { Toast, InputItem, Button } from 'antd-mobile';
// 使用rc-form
import { createForm } from 'rc-form';
import './login.styl'
import API from '../../service/api/user'

 class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleInputChange (val, prop) {
    console.log(11)
    console.log(val)
    this.loginForm[prop] = val

  }
  handleLogin () {
    this.props.form.validateFields((error, value) => {
      /**
       * 疑问点：这里error能获取 却自己不会捕获，还要自己去遍历获取？？？
       * 这里先采用自己判断的方式
       */
      if(!value.username || !value.password){
        Toast.info('用户名和密码必填!', 1);
        return
      }
    
      API.login({...value,  loginType: 'json',}).then(res => {
        this.props.history.push('/home')
      })
      // if(error) {
      //   console.log(this.props.form.getFieldError('username'))
      //   return  this.props.form.getFieldError (value);
      // }
    });
  }

  render() {
    //dispatch(login(params))
    console.log(this.props.login)
    const { getFieldProps, getFieldError } = this.props.form
    const initialAccount = ''
    const initialPassword = ''
    return (
      <div className="login">
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
