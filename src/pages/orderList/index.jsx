import React from 'react';
import { QTabs, QHead, QIcon } from '@@@';
import './styles.less';

function OrderList() {
  const scriptUrl = '//at.alicdn.com/t/c/font_3975386_xtznr64brd.js'; //icon图标链接

  return (
    <div>
      {/* 头部 */}
      <QHead
        title={'全部订单'}
        color={'black'}
        fontSize={'6.347826vw'}
        background={'white'}
        styleName="app"
        backArrow={
          <QIcon
            scriptUrl={scriptUrl}
            type={'icon-arrow-left'}
            fontSize={'5.415459vw'}
            color={'#000'}
          />
        }
      />
      <div styleName="app_box"></div>
      <QTabs />
    </div>
  );
}

export default OrderList;
