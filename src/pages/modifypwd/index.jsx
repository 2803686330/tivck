import React from 'react';
import { QHead, QIcon, QButton } from '@/components';
import { Form, Input, Toast } from 'antd-mobile';
import { history } from 'umi';
import './styles.less';
function Modifypwd(props) {
  const [form] = Form.useForm();
  // 点击头部箭头返回上一页
  const onIcon = () => window.history.back(-1);
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
    const pwd = JSON.parse(localStorage.getItem('password'));
    if (pwd === values.pwd && values.qrpwd) {
      Toast.show({
        icon: 'success',
        content: '保存成功',
        duration: 1000,
      });
      setTimeout(() => {
        history.push('/my');
      }, 1500);
    }
  };
  return (
    <div styleName="modpwd_box">
      <div styleName="modpwd_head">
        <QIcon
          type="icon-xiangzuo" //icon图标
          fontSize="40px" //设置icon图标大小
          onClick={onIcon} //icon的点击事件
        />
        <QHead
          width="100%"
          title="" //头部标题文字
          fontWeight="bold" //文字加粗
          margin="0 30px 0 0" //设置外边距
          fontSize="18px" //设置文字大小
          color="#fff" //设置文字颜色
        />
      </div>
      <div styleName="modpwd_middle">
        <div styleName="modpwd_title">
          <h1>修改密码</h1>
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
