import React, { useEffect, useState } from 'react';
import { Switch ,Dialog} from 'antd-mobile';
import './styles.less';
import { QIcon } from '@@@'; //引入icon
import { Qswiper, Qcalender } from './components';
import { connect } from 'dva';
import { history } from 'umi';
import moment from 'moment';

export default connect(({ home, city,index }) => {
  return {
    travelList: home.travelList, //出行快讯
    leftcity: city.leftcity, //左边城市
    rightcity: city.rightcity, //右边城市
    token:index.token//拿token
  };
})(Home);
function Home(props) {
  const { dispatch, travelList, leftcity, rightcity ,token} = props;
  const [city, setCity] = useState(() => {
    return leftcity ? leftcity : '天津';
  }); //城市
  const [city1, setCity1] = useState(() => {
    return rightcity ? rightcity : '上海';
  }); //城市
  const [highSpeed, setHighSpeed] = useState(false);
  const scriptUrl = '//at.alicdn.com/t/c/font_3975386_epgecaxqewt.js'; //icon图标链接
  const weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  const [time, setTime] = useState(() => {
    return [moment().format('YYYY-MM-DD'), weeks[moment().day()]];
  });
  const date = moment(time[0]).valueOf(); //选择购票时间戳
  const [ishow, setIshow] = useState(false); //控制日期状态
  const trList = async () => await dispatch({ type: 'home/fetchTravelList' }); //列表数据
  useEffect(() => {
    trList();
  }, []);
  const onCity = () => {
    localStorage.setItem('name', '');
    history.push('/city');
  }; //跳转城市页面
  const onCity1 = () => {
    localStorage.setItem('name', '11');
    history.push('/city');
  }; //跳转城市页面
  const onClick = () => history.push('/info'); //跳转资讯
  const onCLick1 = () => setIshow(true); //日期
  const handoff = () => {
    setCity(city1);
    setCity1(city);
  }; // 城市切换
  const onSearch = (city, city1) =>{
    if(token){
      history.push(
        `/query?from=${city}&to=${city1}&highSpeed=${highSpeed}&date=${date}`,
      ); 
    }
    Dialog.confirm({
      content: '你还没有登录，是否前往登录?',
      onConfirm: () => history.push('/user/login'),
    });
  }
   // 搜索跳转
  const onChange = (opt) => setHighSpeed(opt); //高铁开关
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
              <li onClick={onCity}>{city}</li>
              <li onClick={handoff}>
                <QIcon
                  scriptUrl={scriptUrl}
                  type={'icon-nav_icon_switch'}
                  fontSize={'40px'}
                  color={'#ccc'}
                />
              </li>
              <li onClick={onCity1}>{city1}</li>
            </ul>
            {/* 选择日期 */}
            <div styleName="dateBox" onClick={onCLick1}>
              {time}
            </div>
            {/* 状态处 */}
            <ul styleName="statusBox">
              <li>只看高铁/动车</li>
              <li>
                <Switch onChange={onChange} />
              </li>
            </ul>
            {/* 按钮处 */}
            <div styleName="buttonBox">
              <button onClick={() => onSearch(city, city1)}>搜索</button>
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
      {/* 日期组件 */}
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
