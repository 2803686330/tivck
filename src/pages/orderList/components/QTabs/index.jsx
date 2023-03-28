import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd-mobile';
import cs from 'classnames';
import { connect } from 'dva';
import './styles.less';
export default connect(({ orderList }) => {
  return {
    orderList: orderList.setOrderList,
  };
})(QTabs);
function QTabs(props) {
  const { className = '', dispatch, orderList } = props;
  const [status, setStatus] = useState(0);
  const arr = [
    { title: '全部', key: 0 },
    { title: '待出行', key: 1 },
    { title: '待支付', key: 2 },
    { title: '退款/已取消', key: 3 },
  ];

  const onChange = (opt) => {
    setStatus(opt);
    ordeList();
  };

  const ordeList = () => {
    dispatch({
      type: 'orderList/fetchOrderList',
      payload: {
        count: 0,
        status,
      },
    });
  };

  useEffect(() => {
    ordeList();
  }, []);
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
    >
      {arr.map((dt) => {
        return (
          <Tabs.Tab
            title={dt.title}
            key={dt.key}
            style={{ background: 'white' }}
            styleName="adm-tabs-header"
          >
            {orderList.map((dt) => {
              return (
                <div styleName="order" key={dt.id}>
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
                  <div styleName="bottom_button">
                    <button styleName="adm_button">删除订单</button>
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
