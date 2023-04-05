import React, { useEffect } from 'react';
import { QIcon, QHead } from '@@@';
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
  const scriptUrl = '//at.alicdn.com/t/c/font_3975386_znmv0t3rvd.js'; //icon图标链接
  const { aStation, dStation, trainNumber, date, time, dTime, aTime } =
    props.location.query;
  useEffect(() => {
    dispatch({
      type: 'ticket/fetchInfoList',
    });
  }, []);
  const onButton = (dt) => {
    const { type } = dt;
    history.push(
      `/order?trainNumber=${trainNumber}&dStation=${dStation}&aStation=${aStation}
      &type=${type}&date=${date}&time=${time}&dTime=${dTime}&aTime=${aTime}`,
    );
  };

  return (
    <div styleName="ticket_box">
      <div styleName="ticket_head">
        <QHead
          title={trainNumber}
          color={'#fff'}
          fontSize={'6.347826vw'}
          background={'#1ba9ba'}
          // styleName="app"
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
