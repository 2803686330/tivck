import React from 'react';
import { QTabs, QHead } from '@@@';
import './styles.less';

function OrderList() {
  return (
    <div>
      {/* 头部 */}
      <QHead
        title={'全部订单'}
        color={'black'}
        fontSize={'6.347826vw'}
        background={'white'}
        styleName="app"
      />
      <div styleName="app_box"></div>
      <QTabs />
    </div>
  );
}

export default OrderList;
