import React, { useState } from 'react';
import { QHead, QIcon } from '@@@';
import './styles.less';
import { list } from './list';
import moment from 'moment';
import { connect } from 'dva';
export default connect((state) => {
  return {};
})(Query);

function Query(props) {
  console.log(1);
  const { from, to } = props.location.query;
  // console.log(from, to);
  const scriptUrl = '//at.alicdn.com/t/c/font_3975386_znmv0t3rvd.js'; //icon图标链接
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
          <li styleName="list_item_itdav">
            <span styleName="item-time_itdav_1">
              <span>06:20</span>
              <br />
              <span>06:20</span>
            </span>
            <span styleName="item-time_itdav_2">
              <span>
                <i styleName="train_station_itdav">始</i>
                北京南
              </span>
              <br />
              <span>
                <i styleName="train_station_itdav1">终</i>
                北京南
              </span>
            </span>
            <span styleName="item-time_itdav_3">
              <span>G103</span>
              <br />
              <span>06:20</span>
            </span>
            <span styleName="item-time_itdav_4">
              <span>￥G103</span>
              <br />
              <span>已停售</span>
            </span>
          </li>
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
