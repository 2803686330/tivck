import React from 'react';
import { QHead } from '@@@/index';
import Qfrom from './components/Qfrom';
import Qcanvas from './components/Qcanvas';
import './styles.less';
function Login(props) {
  return (
    <div styleName="app">
      <div styleName="appbox">
        <QHead
          title={'登录'}
          background={'rgb(27, 169, 186)'}
          color="white"
          className={'top1'}
        />
        <Qfrom />
      </div>
      <div styleName="cams">
        <Qcanvas />
      </div>
    </div>
  );
}

export default Login;
