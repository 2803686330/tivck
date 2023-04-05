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
  console.log(list);
  const { token } = props;
  const scriptUrl = '//at.alicdn.com/t/c/font_3975386_1u89h7gtca5.js'; //icon图标链接

  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  console.log(token);
  return (
    <div styleName="app">
      <div styleName="app_box">
        <div styleName="app_box_top">
          <div styleName="my_up">
            {token ? (
              <div styleName="my_up_div">
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
              <dl>
                <dt>
                  <Avatar
                    style={{ marginLeft: '165px', borderRadius: '50%' }}
                    src="http://10.161.54.76:3000/src/pages/user/components/avatar/avatar.svg"
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
                <li key={id} onClick={() => onUl(id)}>
                  <QIcon type={type} fontSize="25px" />
                  <div>{title}</div>
                  <QIcon type={type1} fontSize="25px" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
