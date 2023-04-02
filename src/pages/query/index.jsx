import React, { useEffect, useState } from 'react';
import { QHead, QIcon } from '@@@';
import './styles.less';
import { list } from './list';
import moment from 'moment';
import { history } from 'umi';
import { connect } from 'dva';
export default connect(({ query }) => {
  return {
    queryList: query.queryList, //列表数据
  };
})(Query);

function Query(props) {
  const scriptUrl = '//at.alicdn.com/t/c/font_3975386_znmv0t3rvd.js'; //icon图标链接
  const [timeSort, setTimeSort] = useState(0); //早晚出发
  const [highSpeed, setHighSpeed] = useState(false); //只看高铁
  const [haveTicket, setHaveTicket] = useState(false); //只看有票
  const { dispatch, queryList } = props;
  const { from, to, date } = props.location.query;
  const weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  const time1 = [moment(date * 1).format('MM月DD日'), weeks[moment().day()]];
  const query = async (timeSort, highSpeed, haveTicket) => {
    await dispatch({
      type: 'query/fetchQuery',
      payload: {
        date: time1,
        from,
        haveTicket,
        highSpeed,
        timeSort,
        to,
      },
    });
  }; //列表数据
  useEffect(() => {
    query(timeSort, highSpeed, haveTicket); //传值 早晚出发 只看高铁 调用策略
  }, [timeSort, highSpeed, haveTicket]); //监听早晚出发 只看高铁 调用策略改变重新渲染
  const buttFn = {
    1: () => setTimeSort(timeSort ? 0 : 1), //早晚出发
    2: () => setHighSpeed(!highSpeed), //只看高铁
    3: () => setHaveTicket(!haveTicket), //只看有票
  }; // 模式
  const onClick = (id) => buttFn[id](); //调用策略
  // 点击车票跳转传参
  const onInfo = (dt) => {
    const { aStation, dStation, trainNumber, date, time, dTime, aTime } = dt;
    history.push(
      `/ticket?aStation=${aStation}&dStation=${dStation}&trainNumber=${trainNumber}&date=${date}&time=${time}&dTime=${dTime}&aTime=${aTime}`,
    );
  };
  return (
    <div styleName="query_box">
      {/* 头部 */}
      <QHead
        title={`${from}-${to}`}
        color={'#fff'}
        styleName="head"
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
      <div styleName="nav">
        {/* 城市 */}
        <div styleName="nav_dpaa">
          <span styleName="nav_left">前一天</span>
          <span>{time1}</span>
          <span styleName="nav_right">后一天</span>
        </div>
        <div styleName="list_kfa">
          {queryList.map((dt, index) => {
            return (
              <li
                styleName="list_item_itdav"
                key={index}
                onClick={() => onInfo(dt)}
              >
                <span styleName="item-time_itdav_1">
                  <span>{dt.dTime}</span>
                  <br />
                  <span>{dt.aTime}</span>
                </span>
                <span styleName="item-time_itdav_2">
                  <span>
                    <i styleName="train_station_itdav">始</i>
                    {dt.dStation}
                  </span>
                  <br />
                  <span>
                    <i styleName="train_station_itdav1">终</i>
                    {dt.aStation}
                  </span>
                </span>
                <span styleName="item-time_itdav_3">
                  <span>{dt.trainNumber}</span>
                  <br />
                  <span>{dt.time}</span>
                </span>
                <span styleName="item-time_itdav_4">
                  <span>{dt.priceMsg}</span>
                  <br />
                  <span>{dt.trainShowDesc}</span>
                </span>
              </li>
            );
          })}
        </div>
      </div>
      <div styleName="bottom_filters">
        {list.map((dt, index) => {
          return (
            <span
              styleName="item_y12dj"
              key={index}
              onClick={() => onClick(dt.id)}
            >
              <QIcon
                scriptUrl={scriptUrl}
                type={dt.type}
                fontSize={dt.fontSize}
                color={dt.color}
              />
              {dt.title}
            </span>
          );
        })}
      </div>
    </div>
  );
}
