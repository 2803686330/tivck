import React, { useEffect, useState } from 'react';
import { Tabs, Dialog, Toast } from 'antd-mobile';
import cs from 'classnames';
import { history } from 'umi';
import { connect } from 'dva';
import { QButton } from '@@@'; //公共组件
import './styles.less';
export default connect(({ orderList, loading }) => {
  return {
    orderList: orderList.setOrderList,
    loading: !!loading.effects['orderList/fetchOrderList'],
  };
})(QTabs);
function QTabs(props) {
  const { className = '', dispatch, orderList, loading } = props;
  const [orders, setOrders] = useState();
  const arr = [
    { title: '全部', key: 0 },
    { title: '待出行', key: 1 },
    { title: '待支付', key: 2 },
    { title: '退款/已取消', key: 3 },
  ];

  const onChange = (opt) => {
    //tabs切换
    ordeList(opt);
  };

  const ordeList = async (opt) => {
    await dispatch({
      type: 'orderList/fetchOrderList',
      payload: {
        count: 0,
        status: JSON.parse(opt),
      },
    });
  };

  useEffect(() => {
    ordeList(0);
  }, []);
  const onClick = (id) => {
    console.log(id);
  };

  const onButton = (index) => {
    Dialog.confirm({
      content:
        '删除订单后将无法还原,订单删除不等于取消预定,确定完全删除此订单?',
      onConfirm: () => {
        const order = orderList.splice(index, 1);
        setOrders(order);
        Toast.show({
          icon: 'success',
          content: '删除成功',
          position: 'center',
        });
      },
    });
  };
  // 跳转订单
  const onTabs= (id) => history.push(`/orderDetail?id=${id}`);
  //阻止冒泡
  const onDiv = (e) => e.stopPropagation();
  return (
    <Tabs
      className={cs('tabsapp', { [className]: className })}
      onChange={onChange}
      style={{
        //修改行内样式
        '--active-line-color': '#1ba9ba',
        '--active-title-color': '#1ba9ba',
        '--title-font-size': '3.623188vw',
      }}
      loading={loading}
    >
      {arr.map((dt) => {
        return (
          <Tabs.Tab
            title={dt.title}
            key={dt.key}
            style={{ background: 'white' }}
            // styleName="adm-tabs-header"
          >
            {orderList.map((dt, index) => {
              return (
                <div styleName="order" key={dt.id}  onClick={() => onTabs(dt.id)}>
                  <div styleName="order_info">
                    <div styleName="order_info_left">
                      <div styleName="orain_name">{dt.trainName}</div>
                      <div styleName="seat_info">
                        {dt.carriag}车{dt.seatNumber}号
                      </div>
                      <div styleName="ticket_date">{dt.ticketDate}</div>
                    </div>
                    <div styleName="order_info_right">
                      <div styleName="money_1xuif">￥{dt.priceMsg}</div>
                      <div styleName="ticket_status">已完成</div>
                    </div>
                  </div>
                  <div styleName="bottom_button"  onClick={(e) => onDiv(e)}>
                    <QButton
                      title="删除订单"
                      onClick={() => onButton(index)}
                      height={' 0.66667rem'}
                      fontSize={'0.2rem'}
                      styleName='button_box'
                    />
                  </div>
                </div>
              );
            })}
          </Tabs.Tab>
        );
      })}
    </Tabs>
  );
}
