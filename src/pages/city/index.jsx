import React, { useEffect } from 'react';
import './styles.less';
import { QIcon } from '@@@';
import { QIndexBar } from './components/index';
import { connect } from 'dva';
import { history } from 'umi';

export default connect(({ city }) => {
  return {
    hotCities: city.hotCities, //热门城市
    leftcity: city.leftcity,
  };
})(City);
function City(props) {
  const { dispatch, hotCities, leftcity } = props;
  const scriptUrl = '//at.alicdn.com/t/c/font_3975386_24dk9yrd3f5.js'; //icon图标链接
  const timeDate = new Date().getTime(); //时间戳
  useEffect(() => {
    dispatch({
      type: 'city/fetchLogin',
      payload: `_${timeDate}`,
    });
  }, []);

  const onCLick = (dt) => {
    const { name } = dt;
    // 判断点击的是左边还是右边的城市
    if (localStorage.getItem('name') === '') {
      dispatch({
        type: 'city/fetchleftcity',
        payload: name,
      });
    } else {
      dispatch({
        type: 'city/fetchrightcity',
        payload: name,
      });
    }
    history.push('/');
  };

  return (
    <div styleName="app">
      {/* 头部 */}
      <div styleName="city_search">
        <div styleName="search_back">
          <QIcon
            scriptUrl={scriptUrl}
            type={'icon-xiangzuo'}
            fontSize={'6.347826vw'}
          />
        </div>
        <div styleName="search_input">
          <input
            styleName="search_input_rnhd"
            placeholder="城市、车站的中文或拼音"
          />
          <i styleName="search-clean_rnhd6">
            <QIcon
              scriptUrl={scriptUrl}
              type={'icon-cuowuguanbiquxiao-xianxingyuankuang'}
              fontSize={'4.347826vw'}
              color={'#999'}
            />
          </i>
        </div>
      </div>
      {/* 位置 */}
      <div styleName="mgb10">
        当前定位：
        <QIcon
          scriptUrl={scriptUrl}
          type={'icon-dingwei'}
          fontSize={'4.347826vw'}
          color={'#999'}
        />
        天津
      </div>
      {/* 热门 */}
      <div styleName="hot_city_items">
        <div styleName="title_rnhd6">热门</div>
        <div styleName="hot_citys">
          {hotCities.map((dt, index) => {
            return (
              <div key={index} onClick={() => onCLick(dt)}>
                {dt.name}
              </div>
            );
          })}
        </div>
      </div>
      {/* 全部城市 */}
      <div styleName="hot_city">
        <QIndexBar />
      </div>
    </div>
  );
}
