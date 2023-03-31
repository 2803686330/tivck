import React, { useEffect, useState } from 'react';
import { QHead, QIcon } from '@@@';
import './styles.less';
import { list } from './list';
import moment from 'moment';
import { connect } from 'dva';
import index from '../detail';
export default connect(({ query }) => {
  return {
    queryList: query.queryList, //列表数据
  };
})(Query);

function Query(props) {
  const { dispatch, queryList } = props;
  const { from, to, highSpeed, date } = props.location.query;
  const scriptUrl = '//at.alicdn.com/t/c/font_3975386_znmv0t3rvd.js'; //icon图标链接
  useEffect(() => {
    dispatch({
      type: 'query/fetchQuery',
      payload: {
        date,
        from,
        haveTicket: false,
        highSpeed: JSON.parse(highSpeed),
        timeSort: 1,
        to,
      },
    });
  }, []);
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
          <span>123</span>
          <span styleName="nav_right">后一天</span>
        </div>
        <div styleName="list_kfa">
          {queryList.map((dt, index) => {
            return (
              <li styleName="list_item_itdav" key={index}>
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
            <span styleName="item_y12dj" key={index}>
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
