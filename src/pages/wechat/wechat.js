import React from 'react';
import { Button } from 'antd-mobile';

export default class HWechatome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
    };
  }

  render() {
    return (
      <div className="home">
        wechat
        <Button type="ghost" size="small" inline onClick={this.handleClick}>点击跳转页面</Button>
       </div>
    );
  }
}
