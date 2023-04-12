import React from 'react';
import './styles.less';
import { Avatar, Dialog } from 'antd-mobile';
import { connect } from 'dva';
import { list } from './data';
import { history } from 'umi';
import { QIcon } from '@@@';
export default connect(({ index }) => {
  return { token: index.token };
})(User);
function User(props) {
  const { token } = props;
  const scriptUrl = '//at.alicdn.com/t/c/font_3975386_seqqjc61zxh.js'; //icon图标链接
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  // 策略模式
  const buntFn = {
    1: () => history.push(`/passengers?show=${0}`),
    2: () => history.push('/orderList'),
    3: () => history.push('/services'),
  };
  const onClick = (id) => buntFn[id](); //跳转
  const onLogin = () => history.push('/user/login');//跳转登录
  const onSetting=()=>history.push('/setting')//跳转设置
  return (
    <div styleName="app">
      <div styleName="app_box">
        <div styleName="app_box_top">
          <div styleName="my_up">
            {token ? (
              <div styleName="my_up_div" onClick={onSetting}>
                <QIcon
                  type="icon-avatar"
                  fontSize="8.695652vw"
                  scriptUrl={scriptUrl}
                  color={'#eee'}
                />
                <div>{userInfo ? userInfo.username : null}</div>
                <QIcon
                  type="icon-arrow-right"
                  fontSize="16px"
                  scriptUrl={scriptUrl}
                  color={'#eee'}
                />
              </div>
            ) : (
              <dl onClick={onLogin}>
                <dt>
                  <QIcon
                    type="icon-avatar"
                    fontSize="8.695652vw"
                    scriptUrl={scriptUrl}
                    color={'#eee'}
                  />
                </dt>
                <dd>
                  <span>登录</span>/<span>注册</span>
                </dd>
              </dl>
            )}
          </div>
        </div>
        <div styleName="app_from_box">
          <ul>
            {list.map((dt) => {
              const { id, title, type, type1 } = dt;
              return (
                <li key={id} onClick={() => onClick(id)}>
                  <QIcon type={type} fontSize="20px" />
                  <div styleName="titleBOx">{title}</div>
                  <QIcon type={type1} fontSize="15px" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
