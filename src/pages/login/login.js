import React from 'react';

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
        登录页面
       </div>
    );
  }
}
