import React from 'react';
import { QIcon, QHead, QButton } from '@/components';
import { Avatar, Dialog } from 'antd-mobile';
import { history } from 'umi';
import { connect } from 'dva';
import './styles.less';
export default connect((state) => {
  return {};
})(Setting);

function Setting(props) {
  const { dispatch } = props;
  const scriptUrl = '//at.alicdn.com/t/c/font_3975386_okuv34z7jie.js'; //icon图标链接
  // 获取本地用户名
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  // 点击退出登录
  const onButton = () => {
    Dialog.confirm({
      content: '你确定要退出吗',
      closeOnAction: true,
      onConfirm: async () => {
        await dispatch({
          type: 'index/fetchremvoe',
        });
        history.push('/users');
      },
    });
  };

  // 点击修改密码跳转
  const onPwd = () => history.push('/confirmpwd');

  return (
    <div styleName="set_box">
      <div styleName="set_head">
        {/* 头部 */}
        <QHead
          title={'设置'}
          color={'#000'}
          fontSize={'8.347826vw'}
          background={'#ffffff'}
          backArrow={
            <QIcon
              scriptUrl={scriptUrl}
              type={'icon-arrow-left'}
              fontSize={'5.415459vw'}
              color={'#000'}
            />
          }
        />
      </div>
      <div styleName="set_userinfo">
        <div>
          <QIcon
            type="icon-avatar"
            fontSize="12.695652vw"
            scriptUrl={scriptUrl}
            color={'#eee'}
          />
          <div styleName="userinfo_name">
            {userInfo ? userInfo.username : null}
          </div>
        </div>
      </div>
      <div styleName="edit_pwd" onClick={onPwd}>
        <QIcon type="icon-ai243" fontSize="20px" />
        <div>修改密码</div>
        <QIcon type="icon-arrow-right" fontSize="20px" color={'#ccc'}/>
      </div>
      <QButton
        title="退出登录"
        width="90%"
        height="40px"
        color="#fff"
        background="#1BA9BA"
        borderRadius="30px"
        margin="70px 20px"
        onClick={onButton}
      />
    </div>
  );
}
