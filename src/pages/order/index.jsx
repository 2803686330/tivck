import React, { useState } from 'react';
import { QIcon, QHead, QButton } from '@@@';
import { Popup } from 'antd-mobile';
import { history } from 'umi';
import moment from 'moment';
import './styles.less';
function Order(props) {
  const { aStation, dStation, trainNumber, date, time, dTime, aTime, type } =
    props.location.query;
  const scriptUrl = '//at.alicdn.com/t/c/font_3975386_fyuc8am7i5g.js'; //icon图标链接
  const [visible1, setVisible1] = useState(false);
  //   弹层显示隐藏
  const onPopup = () => {
    setVisible1(!visible1);
  };
  const onPassenger = () => {
    history.push('/passengers');
  };
  return (
    <div styleName="order_box">
      <div styleName="order_head">
        <QHead
          title={'订单填写'}
          color={'#fff'}
          fontSize={'6.347826vw'}
          background={'#1ba9ba'}
          backArrow={
            <QIcon
              scriptUrl={scriptUrl}
              type={'icon-arrow-left'}
              fontSize={'5.415459vw'}
              color={'#fff'}
            />
          }
        />
      </div>
      <div styleName="order_center">
        <div styleName="order_time">
          <div styleName="time_left">
            <div>{dStation}</div>
            <div>{dTime}</div>
            <div>{moment(date).format('MM-DD') + '周五'}</div>
          </div>
          <div styleName="time_middle">
            <div>{trainNumber}</div>
            <div>
              <img src="/1.jpg" width="60px" alt="" />
            </div>
            <div>耗时{time}</div>
          </div>
          <div styleName="time_right">
            <div>{aStation}</div>
            <div>{aTime}</div>
            <div>{moment(date).format('MM-DD') + '周五'}</div>
          </div>
        </div>
        <div styleName="order_grade">
          <div>坐席</div>
          <div>
            <span>{type}</span>
            <span>￥$100</span>
          </div>
        </div>
        <div styleName="order_add">
          <div>添加成人</div>
          <div onClick={onPassenger}>选择乘客</div>
        </div>
      </div>
      <div styleName="account_bjdsa">
        <div styleName="price_bjdsa">
          <div styleName="money_bjdsa">
            <span>￥200</span>
            <QIcon
              type={
                visible1 === true ? 'icon-xiangshang' : 'icon-xiangxiazhankai'
              }
              fontSize="15px"
              onClick={onPopup}
            />
          </div>
          <div styleName="money_bjdsa1">支付金额</div>
        </div>
        <QButton
          color="#fff" //设置按钮文字颜色
          title="提交订单" //设置按钮文字
          width="110px" //设置按钮宽度
          height="40px" //设置按钮高度
          borderRadius="5px" //设置按钮圆角
          background="#1BA9BA" //设置按钮背景
          styleName="buttons"
        />
      </div>
      <Popup
        style={{ display: visible1 === true ? 'block' : 'none' }}
        visible={visible1}
        onMaskClick={() => {
          setVisible1(false);
        }}
        bodyStyle={{ height: '10vh' }}
      >
        <div styleName="price_info">金额详情</div>
        <div styleName="train_info">
          <div>火车票</div>
          <div>
            <span>￥100</span>
            <span>x2</span>
          </div>
        </div>
      </Popup>
    </div>
  );
}

export default Order;
