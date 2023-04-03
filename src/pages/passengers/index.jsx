import React, { useEffect } from 'react';
import { QIcon, QHead, QButton } from '@/components';
import { PullToRefresh, List, Checkbox } from 'antd-mobile';
import { history } from 'umi';
import { connect } from 'dva';
import './styles.less';
export default connect(({ passengers }) => {
  return {
    passengersList: passengers.passengersList,
  };
})(Passengers);

function Passengers(props) {
  const { dispatch, passengersList } = props;
  const scriptUrl = '//at.alicdn.com/t/c/font_3975386_2u5nj3a9qk5.js'; //icon图标链接
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  useEffect(() => {
    dispatch({
      type: 'passengers/fetchList',
    });
  }, []);

  return (
    <div styleName="passengers_box">
      <div styleName="head">
        <QHead
          title={'乘客列表'}
          color={'#fff'}
          fontSize={'6.347826vw'}
          background={'#1ba9ba'}
          styleName={'top'}
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
      <div styleName="passengers_middle">
        <div styleName="passengers_info">
          <img
            src="http://10.161.54.4:3000/src/pages/user/components/avatar/avatar.svg"
            alt=""
          />
          <div>{userInfo ? userInfo.username : null}</div>
        </div>
        <div styleName="passengers_add">
          <QIcon type="icon-icon_tianjia" fontSize="23px" />
          <QButton
            onClick={() => history.push('/passengerDetail')}
            title="新增乘客" //设置按钮文字
            height="50px" //设置按钮高度
            margin="20px 10px" //设置按钮外边距
            color="#1ba9ba" //设置按钮颜色
            block //设置按钮是否为块元素
          />
        </div>
        <div styleName="passengers_list">
          <PullToRefresh>
            <List
              style={{ minHeight: '100vh' }}
              header={
                <div
                  style={{
                    textAlign: 'center',
                    height: '50px',
                    lineHeight: '50px',
                  }}
                >
                  {'下拉可刷新乘客列表'}
                </div>
              }
            >
              {passengersList.map((item, index) => {
                const { booker, checked, idCard, ticketType } = item;
                return (
                  <List.Item key={index}>
                    <dl>
                      <dt>
                        <QIcon type="icon-changyonggoupiaorenbianji" />
                      </dt>
                      <dt>
                        <div>
                          <div>{booker}</div>
                          <div>{ticketType}</div>
                        </div>
                        <div>
                          身份证
                          {idCard.replace(
                            /(\d{6})\d*([0-9a-zA-Z]{4})/,
                            '$1******$2',
                          )}
                        </div>
                      </dt>
                      <dd>
                        <Checkbox checked={checked} onChange={() => !checked} />
                      </dd>
                    </dl>
                  </List.Item>
                );
              })}
            </List>
          </PullToRefresh>
        </div>
        <div styleName="bapw">本次购票服务由八维票务提供</div>
      </div>
      <QButton
        styleName="button"
        title="提交" //设置按钮文字
        color="#fff" //设置按钮文字颜色
        margin="0 10px" //设置按钮外边距
        height="45px" //设置按钮高度
        background="#1BA9BA" //设置按钮背景颜色
      />
    </div>
  );
}
