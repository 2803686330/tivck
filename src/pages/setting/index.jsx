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
  // 获取本地用户名
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  //点击头部箭头返回上一页
  const onIcon = () => window.history.back(-1);

  // 点击退出登录
  const onButton = () => {
    Dialog.confirm({
      content: '你确定要退出吗',
      closeOnAction: true,
      onConfirm: async () => {
        await dispatch({
          type: 'index/fetchremvoe',
        });
        history.push('/my');
      },
    });
  };

  // 点击修改密码跳转
  const onPwd = () => history.push('/confirmpwd');

  return (
    <div styleName="set_box">
      <div styleName="set_head">
        <QIcon
          type="icon-triangleLineLeft_1"
          fontSize="20px"
          color="block"
          onClick={onIcon}
        />
        <QHead
          title="注册账号"
          margin="0 30px 0 0"
          fontWeight="bold"
          fontSize="18px"
          color="block"
        />
      </div>
      <div styleName="set_userinfo">
        <div>
          <Avatar
            src="http://10.161.6.58:3000/src/pages/user/components/avatar/avatar.svg"
            alt=""
            style={{ borderRadius: '50%' }}
          />
          <div styleName="userinfo_name">
            {userInfo ? userInfo.username : null}
          </div>
        </div>
      </div>
      <div styleName="edit_pwd" onClick={onPwd}>
        <QIcon type="icon-yanzhengma" fontSize="20px" />
        <div>修改密码</div>
        <QIcon type="icon-triangleLineRight_1" fontSize="20px" />
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
