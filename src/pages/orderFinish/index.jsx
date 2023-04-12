import React from 'react';
import { QIcon, QHead, QButton } from '@@@'; //引入icon
import { history } from 'umi';

import './styles.less';
function orderFinish() {
  const scriptUrl = '//at.alicdn.com/t/c/font_3975386_djat3c7rhw5.js'; //icon图标链接
    const onClick=()=>{
        history.push('/')
    }
    const onClick1=()=>{
        history.push('/orderDetail?orderId=1&boxShow=false&orderStatus=1')
    }
  return (
    <>
      <QHead
        title={''}
        color={'black'}
        fontSize={'6.347826vw'}
        background={'white'}
        backArrow={
          <QIcon
            scriptUrl={scriptUrl}
            type={'icon-arrow-left'}
            fontSize={'5.415459vw'}
            color={'#000'}
          />
        }
      />
      <div styleName="finish_content">
        <div styleName="right_icon">
        <QIcon
            scriptUrl={scriptUrl}
            type={'icon-dui'}
            fontSize={'9.415459vw'}
            color={'#000'}
          />
        </div>
        <div styleName="finish_word">支付成功</div>
        <div styleName="success_word">购票出票成功!</div>
        <div>
          <QButton
            title="查看订单"
            color={'#fff'}
            background={'#ff8300'}
            margin={'20px'}
            onClick={onClick1}
          />
          <QButton
            title="返回首页"
            color={'#fff'}
            background={'#ff8300'}
            margin={'20px'}
            onClick={onClick}
          />
        </div>
      </div>
    </>
  );
}

export default orderFinish;
