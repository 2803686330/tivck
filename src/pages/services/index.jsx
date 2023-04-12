import React, { useState } from 'react';
import { connect } from 'dva';
import { QIcon, QHead, QError,QImage } from '@/components';
import Qsoket from './components/Qsoket';
import './styles.less';

export default connect(({ index }) => {
  return {
    token: index.token,
  };
})(Services);

function Services(props) {
  const { token } = props;
  const scriptUrl = '//at.alicdn.com/t/c/font_3975386_583yffblgch.js'; //icon图标链接
  
  const [list, setList] = useState([]);
  const [xy, setXy] = useState(1);
  //点击头部箭头 返回上一页
  const onIcon = () => window.history.back(-1);
  return (
    <div styleName="service_box">
      
      <QHead
        title={'在线客服'}
        color={'#000'}
        // styleName="head"
        fontSize={'8.347826vw'}
        background={'rgb(255, 255, 255)'}
        backArrow={
          <QIcon
            scriptUrl={scriptUrl}
            type={'icon-arrow-left'}
            fontSize={'5.415459vw'}
            color={'#000'}
          />
        }
      />
     
      {token ? (
        <div styleName="service_middle">
          <div styleName="middle_customer">
            <div styleName="customer">
              <QImage src="./service.png" width="30px" />
            </div>
            <div styleName="customer_title">
              <div>亲，下拉可查看历史聊天消息哦~若您需要咨询问</div>
              <div>题，建议您点击【订单】，选择需咨询的订单点</div>
              <div>击【发送订单】</div>
            </div>
          </div>
          {list.map((dt) => {
            return (
              <div key={dt.id} styleName="customer_list">
                <div styleName="list_left">
                  {dt.title ? (
                    dt.title
                  ) : (
                   
                    <QImage
                      styleName="img"
                      src={dt.image ? dt.image : dt.images}
                      alt=""
                    />
                  )}
                </div>
                <div styleName="list_right">
                  <QImage src="./customerImg.png" alt="" />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div styleName="error">
          <QError />
          <div>
            <a href="/user/login">登录</a>
          </div>
        </div>
      )}
      {token ? (
        <Qsoket list={list} setList={setList} xy={xy} setXy={setXy} />
      ) : null}
    </div>
  );
}
