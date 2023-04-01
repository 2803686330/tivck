import React, { useEffect } from 'react';
import { QIcon, QHead } from '@/components';
import { Collapse } from 'antd-mobile';
import { connect } from 'dva';
import { history } from 'umi';
import moment from 'moment';
import './styles.less';
export default connect(({ ticket }) => {
  return {
    candidates: ticket.candidates,
  };
})(Ticket);

function Ticket(props) {
  const { dispatch, candidates } = props;
  const { aStation, dStation, trainNumber, date, time, dTime, aTime } =
    props.location.query;
  // 返回上一页
  const onIcon = () => {
    window.history.back(-1);
  };
  useEffect(() => {
    dispatch({
      type: 'ticket/fetchInfoList',
    });
  }, []);
  const onButton = (dt) => {
    const { type } = dt;
    history.push(
      `/order?trainNumber=${trainNumber}&dStation=${dStation}&aStation=${aStation}&type=${type}&date=${date}&time=${time}&dTime=${dTime}&aTime=${aTime}`,
    );
  };

  return (
    <div styleName="ticket_box">
      <div styleName="ticket_head">
        <QIcon
          type="icon-xiangzuo-copy" //icon图标
          fontSize="40px" //设置icon图标大小
          onClick={onIcon} //icon的点击事件
        />
        <QHead
          width="100%"
          title={trainNumber} //头部标题文字
          fontWeight="bold" //文字加粗
          margin="0 30px 0 0" //设置外边距
          fontSize="18px" //设置文字大小
          color="#fff" //设置文字颜色
        />
      </div>
      <div styleName="ticket_nav">
        <div>前一天</div>
        <div>9月10日 周六</div>
        <div>后一天</div>
      </div>
      <div styleName="ticket_time">
        <div styleName="time_left">
          <div>{dStation}</div>
          <div>{dTime}</div>
          <div>{moment(date).format('MM-DD') + '周五'}</div>
        </div>
        <div styleName="time_middle">
          <div>{trainNumber}</div>
          <div>
            ——<span>时刻表</span>——
          </div>
          <div>耗时{time}</div>
        </div>
        <div styleName="time_right">
          <div>{aStation}</div>
          <div>{aTime}</div>
          <div>{moment(date).format('MM-DD') + '周五'}</div>
        </div>
      </div>
      <div styleName="ticket_foot">
        <Collapse accordion arrow={(active) => (active ? '收起' : '预定')}>
          {candidates.map((dt, index) => {
            const { channels } = dt;
            return (
              <Collapse.Panel
                key={index}
                title={
                  <div styleName="coll_box">
                    <div>{dt.type}</div>
                    <div>￥{dt.priceMsg}</div>
                    <div>{dt.ticketsLeft}</div>
                  </div>
                }
              >
                {channels.map((item, index) => {
                  return (
                    <dl key={index} styleName="coll_nels">
                      <dt>
                        <div>{item.name}</div>
                        <div>{item.desc}</div>
                      </dt>
                      <dd>
                        <button onClick={() => onButton(dt)}>买票</button>
                      </dd>
                    </dl>
                  );
                })}
              </Collapse.Panel>
            );
          })}
        </Collapse>
      </div>
    </div>
  );
}
