import React, { useEffect, useState } from 'react';
import { Switch } from 'antd-mobile';
import './styles.less';
import { QIcon } from '@@@'; //引入icon
import Qswiper from './components/Qswiper';
import Qcalender from './components/Qcalender';
import { connect } from 'dva';
import { history } from 'umi';
import moment from 'moment';

export default connect(({ home }) => {
  return {
    travelList: home.travelList,
  };
})(Home);
function Home(props) {
  const scriptUrl = '//at.alicdn.com/t/c/font_3975386_epgecaxqewt.js'; //icon图标链接
  const { dispatch, travelList } = props;
  const weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  const [time, setTime] = useState(() => {
    return [moment().format('YYYY-MM-DD'), weeks[moment().day()]];
  });
  const [ishow, setIshow] = useState(false); //控制日期状态
  const trList = async () => {
    //列表数据
    await dispatch({
      type: 'home/fetchTravelList',
    });
  };
  useEffect(() => {
    trList();
  }, []);
  const onClick = () => {
    history.push('/info'); //跳转资讯
  };
  const onCLick1 = () => {
    setIshow(true);
  };
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
            <div styleName="dateBox" onClick={onCLick1}>
              {time}
              {/* 2023-03-24 <span>周五(今天)</span> */}
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
          <div styleName="alerts_more" onClick={onClick}>
            更多
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
              <div styleName="alerts_text" key={dt.index}>
                <div styleName="alerts_box">
                  <div styleName="alerts_left">{dt.index}</div>
                  <div styleName="alerts_content">
                    <div styleName="alerts_mgb">{dt.title}</div>
                    <div styleName="alerts_gray">
                      <span>{dt.from}</span>
                      {dt.date}
                    </div>
                  </div>
                </div>
                <div styleName="alerts_image">
                  <img src={dt.imgSrc} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Qcalender
        styleName="calen"
        ishow={ishow}
        setIshow={setIshow}
        style={{ display: ishow ? 'block' : 'none' }}
        time={time}
        setTime={setTime}
      />
    </div>
  );
}
