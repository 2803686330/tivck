import React from 'react';
import { NavBar, Toast } from 'antd-mobile';
import Qfrom from './components/Qfrom';
import './styles.less';
function Login(props) {
  const back = () =>
    Toast.show({
      content: '点击了返回区域',
      duration: 1000,
    });

  return (
    <div>
      <div styleName="top">
        <NavBar onBack={back}>登录</NavBar>
      </div>
      <Qfrom />
    </div>
  );
}

export default Login;
