import { Switch } from 'antd-mobile';
import React from 'react';
import './styles.less';
import { QIcon } from '@@@'; //引入icon
import Qswiper from './components/Qswiper';
function Home() {
  const scriptUrl = '//at.alicdn.com/t/c/font_3975386_12o7dr7evgs.js';
  return (
    <div styleName="app">
      <div styleName="app_box">
        <div styleName="app_box_top">
          <p>火车票预订</p>
          <h4>便捷购票，服务您的每一次出行</h4>
        </div>
        <div styleName="app_from_box">
          <div styleName="ticketBox">
            {/* 选择地点 */}
            <ul styleName="ticketOne">
              <li>天津</li>
              <li>
                <QIcon
                  scriptUrl={scriptUrl}
                  type={'icon-nav_icon_switch'}
                  fontSize={'40px'}
                  color={'#ccc'}
                />
              </li>
              <li>上海</li>
            </ul>
            {/* 选择日期 */}
            <div styleName="dateBox">
              2023-03-24 <span>周五(今天)</span>
            </div>
            {/* 状态处 */}
            <ul styleName="statusBox">
              <li>只看高铁/动车</li>
              <li>
                <Switch />
              </li>
            </ul>
            {/* 按钮处 */}
            <div styleName="buttonBox">
              <button>搜索</button>
            </div>
          </div>
        </div>
      </div>
      {/* 轮播图 */}
      <div styleName="Swipers">
        <Qswiper />
      </div>
    </div>
  );
}

export default Home;
