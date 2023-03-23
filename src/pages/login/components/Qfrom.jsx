import React from 'react';
import { Form, Input, Button } from 'antd-mobile';
import './Qfrom.less';
import { connect } from 'dva';
import { history } from 'umi';

export default connect((state) => {
  return {};
})(Qfrom);
function Qfrom(props) {
  const { dispatch } = props;
  const [form] = Form.useForm();

  //   提交
  const onSubmit = async () => {
    const values = form.getFieldsValue();
    await dispatch({
      type: 'index/fetchLogin',
      payload: values,
    });
  };

  // 跳转注册
  const onClick = () => {
    history.push('/user/reg');
  };
  return (
    <Form
      form={form}
      styleName="formBox"
      footer={
        <>
          <Button
            styleName="btn"
            block
            type="submit"
            color="rgb(27, 169, 186)"
            size="large"
            onClick={onSubmit}
          >
            提交
          </Button>
          <Button
            styleName="btn"
            block
            color="rgb(27, 169, 186)"
            size="large"
            onClick={onClick}
          >
            注册
          </Button>
        </>
      }
    >
      <Form.Item
        name="username"
        label="用户名"
        rules={[{ required: true, message: '用户名不能为空' }]}
      >
        <Input placeholder="请输入用户名" />
      </Form.Item>
      <Form.Item
        name="password"
        label="密码"
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input placeholder="密码不能为空" />
      </Form.Item>
    </Form>
  );
}
