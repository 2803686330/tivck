import React, { useEffect } from 'react';
import { QHead } from '@@@';
import './styles.less';
import { connect } from 'dva';
export default connect(({ info }) => {
  return {
    travelList: info.travelList,
  };
})(Info);
function Info(props) {
  const { dispatch, travelList } = props;

  const trList = async () => {
    //列表数据
    await dispatch({
      type: 'info/fetchTravelList',
    });
  };
  useEffect(() => {
    trList();
  }, []);
  return (
    <div>
      <QHead title={'全部资讯'} styleName="box" />

      {travelList.map((dt) => {
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
  );
}
