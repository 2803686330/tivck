import React from 'react';
import { QTabs, QHead, QIcon, QError } from '@@@';

import './styles.less';
import { connect } from 'dva';

export default connect(({ index }) => {
  return {
    token: index.token,
  };
})(OrderList);

function OrderList(props) {
  const { token } = props;
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
      {token ? (
        <QTabs />
      ) : (
        <div styleName="error">
          <QError />
          <div>
            <a href="/user/login">登录</a>
          </div>
        </div>
      )}
    </div>
  );
}
