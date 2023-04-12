import React from 'react';
import { QHead } from '@@@';
import { QIcon,QError } from '@@@';
import './styles.less';
import { connect } from 'dva';
export default connect(({ index }) => {
  return {
    token: index.token,
  };
})(Services);
function Services(props) {
  const { token } = props;
  const scriptUrl = '//at.alicdn.com/t/c/font_3975386_xtznr64brd.js'; //icon图标链接
  return (
    <div>
      <QHead
        title={'在线客服'}
        background={'white'}
        color={'black'}
        backArrow={
          <QIcon
            scriptUrl={scriptUrl}
            type={'icon-arrow-left'}
            fontSize={'5.415459vw'}
            color={'#000'}
          />
        }
      />
      {token ? '' :  <div styleName="error">
          <QError />
          <div>
            <a href="/user/login">登录</a>
          </div>
        </div>}
    </div>
  );
}
