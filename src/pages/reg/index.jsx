import React from 'react';
import { QHead } from '@@@/index';
import Qfrom from './components/Qfrom';
function Reg(props) {
  return (
    <div>
      <QHead
        title={'注册账号'}
        background={'rgb(27, 169, 186)'}
        color="white"
        className={'top1'}
      />
      <Qfrom />
    </div>
  );
}

export default Reg;
