import React from 'react';
import { QHead, QIcon, QButton } from '@/components';
import { Form, Input } from 'antd-mobile';
import { history } from 'umi';
import './styles.less';
function Confirmpwd(props) {
  const [form] = Form.useForm();
  const scriptUrl = '//at.alicdn.com/t/c/font_3975386_okuv34z7jie.js'; //icon图标链接
  // 修改密码
  const onFinish = (values) => {
    const pwd = JSON.parse(localStorage.getItem('password'));
    // 如果密码一致跳转修改密码页面
    if (pwd === values.pwd) return history.push('/modifypwd');
  };
  return (
    <div styleName="conpwd_box">
      <div styleName="conpwd_head">
         {/* 头部 */}
         <QHead
          title={''}
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
      <div styleName="conpwd_middle">
        <div styleName="conpwd_title">
          <h1>请输入当前密码</h1>
          <div>需要输入您账号当前设置的密码</div>
        </div>
        <Form
          form={form}
          style={{ width: '95%', margin: '70px 10px' }}
          layout="horizontal"
          onFinish={onFinish}
          footer={
            <QButton
              type="sumbit" 
              title="下一步" 
              background="#1BA9BA" 
              color="#fff" 
              width="100%"
              height="45px" 
              borderRadius="40px" 
              margin="100px 0"
            />
          }
        >
          <Form.Item
            name="pwd"
            label="当前密码"
            rules={[{ required: true, message: '请输入当前账号密码!' }]}
          >
            <Input type="password" placeholder="请输入当前账号密码" />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Confirmpwd;
