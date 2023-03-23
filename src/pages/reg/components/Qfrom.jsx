import React from 'react';
import { Form, Input, Button } from 'antd-mobile';
import './styles.less';
import { connect } from 'dva';

export default connect((state) => {
  return {};
})(Qfrom);
function Qfrom(props) {
  const { dispatch } = props;
  const [form] = Form.useForm();
  //   提交

  const onSubmit = () => {
    const values = form.getFieldsValue();
    if (!values) {
      dispatch({
        type: 'index/fetchLogin',
        payload: values,
      });
    }
  };
  //   判断二次密码是否正确
  const validatePsw = ({ getFieldValue }) => {
    return {
      validator: (_, value) => {
        if (!value || getFieldValue('password') === value) {
          return Promise.resolve();
        }
        return Promise.reject(new Error('两次输入密码不一致'));
      },
    };
  };
  return (
    <Form
      layout="horizontal"
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
        rules={[
          { required: true, message: '请输入密码' },
          { type: 'string', min: 8, max: 30 },
        ]}
      >
        <Input placeholder="密码不能为空" />
      </Form.Item>
      <Form.Item
        name="password1"
        label="确认密码"
        dependencies={['password']}
        validateTrigger="onChange"
        rules={[validatePsw]}
      >
        <Input placeholder="确认密码不能为空" />
      </Form.Item>
    </Form>
  );
}
