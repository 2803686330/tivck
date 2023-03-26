import { Switch } from 'antd-mobile';
import React, { useEffect } from 'react';
import './styles.less';
import { QIcon } from '@@@'; //引入icon
import Qswiper from './components/Qswiper';
import { connect } from 'dva';

export default connect(({ home }) => {
  return {
    travelList: home.travelList,
  };
})(Home);
function Home(props) {
  const scriptUrl = '//at.alicdn.com/t/c/font_3975386_epgecaxqewt.js'; //icon图标链接
  const { dispatch, travelList } = props;
  const trList = async () => {
    //列表数据
    await dispatch({
      type: 'home/fetchTravelList',
    });
  };
  useEffect(() => {
    trList();
  }, []);
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
      {/* 出行快讯 */}
      <div styleName="alerts">
        {/* 头部 */}
        <div styleName="alerts_top">
          出行快讯
          <div styleName="alerts_more">
            更多{' '}
            <QIcon
              scriptUrl={scriptUrl}
              type={'icon-arrow-right'}
              fontSize={'13px'}
              color={'#ccc'}
            />
          </div>
        </div>
        <div styleName="a">
          {travelList.slice(0, 3).map((dt) => {
            return (
              <div styleName="alerts_text">
                <div styleName="alerts_box">
                  <div styleName="alerts_left">1</div>
                  <div styleName="alerts_content">
                    <div styleName="alerts_mgb">
                      五一”假期7座小型客车免费通行全国收费公路五一”假期
                      7座小型客车免费通行全国收费公路五一”假期7座小型客车免
                      费通行全国收费公路五一”假期7座小型客车免费通行全国收费公路
                    </div>
                    <div styleName="alerts_gray">
                      <span>澎湃新闻</span>2222
                    </div>
                  </div>
                </div>
                <div styleName="alerts_image">
                  <img
                    src="http://a.hiphotos.baidu.com/image/pic/item/8d5494eef01f3a292d2472199d25bc315d607c7c.jpg"
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
