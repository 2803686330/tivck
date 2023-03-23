import React from 'react';
import { QHead } from '@@@/index';

import Qfrom from './components/Qfrom';
import './styles.less';
function Login(props) {
  return (
    <div>
      <QHead
        title={'登录'}
        background={'rgb(27, 169, 186)'}
        color="white"
        className={'top1'}
      />
      <Qfrom />
    </div>
  );
}

export default Login;
