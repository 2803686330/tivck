import React from 'react';
import { QHead, QIcon, QButton } from '@/components';
import { Form, Input, Toast } from 'antd-mobile';
import { history } from 'umi';
import './styles.less';
function Modifypwd(props) {
  const [form] = Form.useForm();
  const scriptUrl = '//at.alicdn.com/t/c/font_3975386_okuv34z7jie.js'; //icon图标链接
  // 判断两次输入的密码是否一致
  const validatePsw = ({ getFieldValue }) => {
    return {
      validator: (_, value) => {
        if (!value || getFieldValue('pwd') === value) {
          return Promise.resolve();
        }
        return Promise.reject(new Error('两次输入密码不一致'));
      },
    };
  };
  // 提交修改密码
  const onFinish = (values) => {
    if (values.pwd && values.qrpwd) {
      Toast.show({
        icon: 'success',
        content: '保存成功',
        duration: 1000,
      });
      setTimeout(() => {
        history.push('/users');
      }, 1500);
    }
  };
  return (
    <div styleName="modpwd_box">
      <div styleName="modpwd_head">
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
      <div styleName="modpwd_middle">
        <div styleName="modpwd_title">
          <h1>设置密码</h1>
          <div>请为你的账号位置新的密码</div>
        </div>
        <Form
          form={form}
          style={{ width: '95%', margin: '70px 10px' }}
          layout="horizontal"
          onFinish={onFinish}
          footer={
            <QButton
              type="sumbit" //设置按钮类型
              title="确认修改" //设置按钮文字
              background="#1BA9BA" //设置背景颜色
              color="#fff" //设置文字颜色
              width="100%" //设置按钮宽度
              height="45px" //设置按钮高度
              borderRadius="40px" //设置按钮圆角
              margin="100px 0" //设置按钮外边距
            />
          }
        >
          <Form.Item
            name="pwd"
            rules={[
              {
                required: true,
                message: '密码必须在8-30字符之间 密码与模式不匹配',
                pattern: /^\w{8,30}$/,
              },
            ]}
          >
            <Input type="password" placeholder="请输入8-30位字符作为新密码" />
          </Form.Item>
          <Form.Item
            name="qrpwd"
            dependencies={['pwd']}
            validateTrigger="onChange"
            rules={[validatePsw, { required: true }]}
          >
            <Input type="password" placeholder="确认密码不能为空" />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Modifypwd;
